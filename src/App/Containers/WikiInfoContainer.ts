import { connect } from "react-redux";
import { AppStateRecord } from "../Reducers/appReducer";
import { getDerivedCharacteristicsMap } from "../Selectors/derivedCharacteristicsSelectors";
import * as stateSelectors from "../Selectors/stateSelectors";
import { getAllWikiEntries } from "../Selectors/wikiSelectors";
import { mapGetToSlice } from "../Utilities/SelectorsUtils";
import { WikiInfo, WikiInfoDispatchProps, WikiInfoOwnProps } from "../Views/InlineWiki/WikiInfo";
import { WikiInfoContentStateProps } from "../Views/InlineWiki/WikiInfoContent";

const mapStateToProps =
  (state: AppStateRecord, ownProps: WikiInfoOwnProps): WikiInfoContentStateProps => ({
    attributes: stateSelectors.getWikiAttributes (state),
    advantages: stateSelectors.getWikiAdvantages (state),
    blessings: stateSelectors.getWikiBlessings (state),
    books: stateSelectors.getWikiBooks (state),
    cantrips: stateSelectors.getWikiCantrips (state),
    combatTechniques: stateSelectors.getWikiCombatTechniques (state),
    cultures: stateSelectors.getWikiCultures (state),
    derivedCharacteristics: getDerivedCharacteristicsMap (state, ownProps),
    languages: mapGetToSlice (stateSelectors.getWikiSpecialAbilities) (state) ("SA_29"),
    list: getAllWikiEntries (state),
    professionVariants: stateSelectors.getWikiProfessionVariants (state),
    raceVariants: stateSelectors.getWikiRaceVariants (state),
    races: stateSelectors.getWikiRaces (state),
    liturgicalChantExtensions:
      mapGetToSlice (stateSelectors.getWikiSpecialAbilities) (state) ("SA_663"),
    liturgicalChants: stateSelectors.getWikiLiturgicalChants (state),
    scripts: mapGetToSlice (stateSelectors.getWikiSpecialAbilities) (state) ("SA_27"),
    sex: stateSelectors.getSex (state),
    skills: stateSelectors.getWikiSkills (state),
    spellExtensions: mapGetToSlice (stateSelectors.getWikiSpecialAbilities) (state) ("SA_414"),
    spells: stateSelectors.getWikiSpells (state),
    specialAbilities: stateSelectors.getWikiSpecialAbilities (state),
    templates: stateSelectors.getWikiItemTemplates (state),
    wiki: stateSelectors.getWiki (state),
  })

export const connectWikiInfo =
  connect<WikiInfoContentStateProps, WikiInfoDispatchProps, WikiInfoOwnProps, AppStateRecord> (
    mapStateToProps
  )

export const WikiInfoContainer = connectWikiInfo (WikiInfo)
