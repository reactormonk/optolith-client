import { List } from "../../../Data/List";
import { Maybe, Nothing } from "../../../Data/Maybe";
import { fromDefault, makeLenses, Record } from "../../../Data/Record";
import { Category } from "../../Constants/Categories";
import { Die } from "./sub/Die";
import { Erratum } from "./sub/Errata";
import { EntryWithCategory } from "./wikiTypeHelpers";

export interface RaceVariant {
  "@@name": "RaceVariant"
  id: string
  name: string
  commonCultures: List<string>
  commonAdvantages: List<string>
  commonAdvantagesText: Maybe<string>
  commonDisadvantages: List<string>
  commonDisadvantagesText: Maybe<string>
  uncommonAdvantages: List<string>
  uncommonAdvantagesText: Maybe<string>
  uncommonDisadvantages: List<string>
  uncommonDisadvantagesText: Maybe<string>
  hairColors: Maybe<List<number>>
  eyeColors: Maybe<List<number>>
  sizeBase: Maybe<number>
  sizeRandom: Maybe<List<Record<Die>>>
  category: Category
  errata: List<Record<Erratum>>
}

export const RaceVariant =
  fromDefault ("RaceVariant")
              <RaceVariant> ({
                id: "",
                name: "",
                commonCultures: List.empty,
                commonAdvantages: List.empty,
                commonAdvantagesText: Nothing,
                commonDisadvantages: List.empty,
                commonDisadvantagesText: Nothing,
                uncommonAdvantages: List.empty,
                uncommonAdvantagesText: Nothing,
                uncommonDisadvantages: List.empty,
                uncommonDisadvantagesText: Nothing,
                hairColors: Nothing,
                eyeColors: Nothing,
                sizeBase: Nothing,
                sizeRandom: Nothing,
                category: Category.RACE_VARIANTS,
                errata: List (),
              })

export const RaceVariantL = makeLenses (RaceVariant)

export const isRaceVariant =
  (r: EntryWithCategory) => RaceVariant.AL.category (r) === Category.RACE_VARIANTS
