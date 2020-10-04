// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE

import * as Curry from "bs-platform/lib/es6/curry.js";
import * as Erratum$OptolithClient from "../Sources/Erratum.bs.js";
import * as JsonStrict$OptolithClient from "../Misc/JsonStrict.bs.js";
import * as Ley_Option$OptolithClient from "../Data/Ley_Option.bs.js";
import * as SkillCheck$OptolithClient from "./SkillCheck.bs.js";
import * as Prerequisite$OptolithClient from "../Prerequisites/Prerequisite.bs.js";
import * as CheckModifier$OptolithClient from "./CheckModifier.bs.js";
import * as PublicationRef$OptolithClient from "../Sources/PublicationRef.bs.js";
import * as TranslationMap$OptolithClient from "../Misc/TranslationMap.bs.js";
import * as ActivatableSkill$OptolithClient from "./ActivatableSkill.bs.js";

function decode(json) {
  return {
          name: JsonStrict$OptolithClient.field("name", JsonStrict$OptolithClient.string, json),
          effect: JsonStrict$OptolithClient.field("effect", JsonStrict$OptolithClient.string, json),
          castingTime: JsonStrict$OptolithClient.field("castingTime", ActivatableSkill$OptolithClient.MainParameter.decode, json),
          cost: JsonStrict$OptolithClient.field("cost", ActivatableSkill$OptolithClient.MainParameter.decode, json),
          range: JsonStrict$OptolithClient.field("range", ActivatableSkill$OptolithClient.MainParameter.decode, json),
          duration: JsonStrict$OptolithClient.field("duration", ActivatableSkill$OptolithClient.MainParameter.decode, json),
          target: JsonStrict$OptolithClient.field("target", JsonStrict$OptolithClient.string, json),
          errata: JsonStrict$OptolithClient.field("errata", Erratum$OptolithClient.decodeList, json)
        };
}

var Translations = {
  decode: decode
};

var TranslationMap = TranslationMap$OptolithClient.Make(Translations);

function decodeMultilingual(json) {
  return {
          id: JsonStrict$OptolithClient.field("id", JsonStrict$OptolithClient.$$int, json),
          check: JsonStrict$OptolithClient.field("check", SkillCheck$OptolithClient.decode, json),
          checkMod: JsonStrict$OptolithClient.optionalField("checkMod", CheckModifier$OptolithClient.decode, json),
          property: JsonStrict$OptolithClient.field("property", JsonStrict$OptolithClient.$$int, json),
          activatablePrerequisites: JsonStrict$OptolithClient.optionalField("activatablePrerequisites", (function (param) {
                  return JsonStrict$OptolithClient.list(Prerequisite$OptolithClient.Activatable.decode, param);
                }), json),
          src: JsonStrict$OptolithClient.field("src", PublicationRef$OptolithClient.decodeMultilingualList, json),
          translations: JsonStrict$OptolithClient.field("translations", TranslationMap.decode, json)
        };
}

function decode$1(langs, json) {
  var x = decodeMultilingual(json);
  return Curry._2(Ley_Option$OptolithClient.Infix.$less$amp$great, Curry._2(TranslationMap.getFromLanguageOrder, langs, x.translations), (function (translation) {
                return [
                        x.id,
                        {
                          id: x.id,
                          name: translation.name,
                          check: x.check,
                          checkMod: x.checkMod,
                          effect: translation.effect,
                          castingTime: ActivatableSkill$OptolithClient.MainParameter.make(false, translation.castingTime),
                          cost: ActivatableSkill$OptolithClient.MainParameter.make(false, translation.cost),
                          range: ActivatableSkill$OptolithClient.MainParameter.make(false, translation.range),
                          duration: ActivatableSkill$OptolithClient.MainParameter.make(false, translation.duration),
                          target: translation.target,
                          property: x.property,
                          activatablePrerequisites: x.activatablePrerequisites,
                          src: PublicationRef$OptolithClient.resolveTranslationsList(langs, x.src),
                          errata: translation.errata
                        }
                      ];
              }));
}

var Dynamic = ActivatableSkill$OptolithClient.Dynamic;

var Static = {
  decode: decode$1
};

export {
  Dynamic ,
  Static ,
  
}
/* TranslationMap Not a pure module */
