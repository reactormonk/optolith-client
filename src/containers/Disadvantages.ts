import { connect } from 'react-redux';
import { Action, Dispatch } from 'redux';
import * as ConfigActions from '../actions/ConfigActions';
import * as DisAdvActions from '../actions/DisAdvActions';
import { AppState } from '../reducers/app';
import { getDisadvantagesRating, getFilteredActiveDisadvantages, getFilteredInactiveDisadvantages } from '../selectors/activatableSelectors';
import { get, getDependent } from '../selectors/dependentInstancesSelectors';
import { isRemovingEnabled } from '../selectors/phaseSelectors';
import { getDisadvantages, getDisadvantagesFilterText, getInactiveDisadvantagesFilterText } from '../selectors/stateSelectors';
import { getAdvantagesDisadvantagesCultureRatingVisibility, getEnableActiveItemHints } from '../selectors/uisettingsSelectors';
import { ActivateArgs, DeactivateArgs } from '../types/data.d';
import { getAdvantagesDisadvantagesSubMax } from '../utils/APUtils';
import { Disadvantages, DisadvantagesDispatchProps, DisadvantagesOwnProps, DisadvantagesStateProps } from '../views/disadv/Disadvantages';
import { getAdventurePointsObject } from '../selectors/adventurePointsSelectors';

function mapStateToProps(state: AppState) {
	return {
		activeList: getFilteredActiveDisadvantages(state),
		ap: getAdventurePointsObject(state),
		deactiveList: getFilteredInactiveDisadvantages(state),
		enableActiveItemHints: getEnableActiveItemHints(state),
		get(id: string) {
			return get(getDependent(state), id);
		},
		isRemovingEnabled: isRemovingEnabled(state),
		list: [...getDisadvantages(state).values()],
		magicalMax: getAdvantagesDisadvantagesSubMax(getDependent(state), 1),
		rating: getDisadvantagesRating(state),
		showRating: getAdvantagesDisadvantagesCultureRatingVisibility(state),
		filterText: getDisadvantagesFilterText(state),
		inactiveFilterText: getInactiveDisadvantagesFilterText(state),
	};
}

function mapDispatchToProps(dispatch: Dispatch<Action>) {
	return {
		switchRatingVisibility() {
			dispatch(DisAdvActions._switchRatingVisibility());
		},
		switchActiveItemHints() {
			dispatch(ConfigActions._switchEnableActiveItemHints());
		},
		addToList(args: ActivateArgs) {
			dispatch(DisAdvActions._addToList(args));
		},
		removeFromList(args: DeactivateArgs) {
			dispatch(DisAdvActions._removeFromList(args));
		},
		setTier(id: string, index: number, tier: number) {
			dispatch(DisAdvActions._setTier(id, index, tier));
		},
		setFilterText(filterText: string) {
			dispatch(DisAdvActions.setActiveDisadvantagesFilterText(filterText));
		},
		setInactiveFilterText(filterText: string) {
			dispatch(DisAdvActions.setInactiveDisadvantagesFilterText(filterText));
		},
	};
}

export const DisadvantagesContainer = connect<DisadvantagesStateProps, DisadvantagesDispatchProps, DisadvantagesOwnProps>(mapStateToProps, mapDispatchToProps)(Disadvantages);
