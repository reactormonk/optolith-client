// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE

import * as Curry from "bs-platform/lib/es6/curry.js";
import * as Json_decode from "@glennsl/bs-json/src/Json_decode.bs.js";
import * as Erratum$OptolithClient from "../Sources/Erratum.bs.js";
import * as OneOrMany$OptolithClient from "../Utilities/OneOrMany.bs.js";
import * as JsonStrict$OptolithClient from "../Misc/JsonStrict.bs.js";
import * as Ley_Option$OptolithClient from "../Data/Ley_Option.bs.js";
import * as PublicationRef$OptolithClient from "../Sources/PublicationRef.bs.js";
import * as TranslationMap$OptolithClient from "../Misc/TranslationMap.bs.js";

function decode(json) {
  return {
          note: JsonStrict$OptolithClient.optionalField("note", JsonStrict$OptolithClient.string, json),
          rules: JsonStrict$OptolithClient.optionalField("rules", JsonStrict$OptolithClient.string, json),
          advantage: JsonStrict$OptolithClient.optionalField("advantage", JsonStrict$OptolithClient.string, json),
          disadvantage: JsonStrict$OptolithClient.optionalField("disadvantage", JsonStrict$OptolithClient.string, json),
          errata: JsonStrict$OptolithClient.field("errata", Erratum$OptolithClient.decodeList, json)
        };
}

var Translations = {
  decode: decode
};

var TranslationMap = TranslationMap$OptolithClient.Make(Translations);

function decodeMultilingual(json) {
  return {
          src: Json_decode.field("src", PublicationRef$OptolithClient.decodeMultilingualList, json),
          translations: Json_decode.field("translations", TranslationMap.decode, json)
        };
}

function resolveTranslations(langs, x) {
  return Curry._2(Ley_Option$OptolithClient.Infix.$less$amp$great, Curry._2(TranslationMap.getFromLanguageOrder, langs, x.translations), (function (translation) {
                return {
                        note: translation.note,
                        rules: translation.rules,
                        advantage: translation.advantage,
                        disadvantage: translation.disadvantage,
                        src: PublicationRef$OptolithClient.resolveTranslationsList(langs, x.src),
                        errata: translation.errata
                      };
              }));
}

var Info = {
  Translations: Translations,
  TranslationMap: TranslationMap,
  decodeMultilingual: decodeMultilingual,
  resolveTranslations: resolveTranslations
};

function decode$1(json) {
  return {
          structurePoints: JsonStrict$OptolithClient.optionalField("structurePoints", OneOrMany$OptolithClient.Decode.t(JsonStrict$OptolithClient.$$int), json)
        };
}

var MundaneItem = {
  decode: decode$1
};

function decodeNewAttribute(json) {
  return {
          attribute: Json_decode.field("attribute", Json_decode.$$int, json),
          threshold: Json_decode.field("threshold", Json_decode.$$int, json)
        };
}

function decodeAgilityStrength(json) {
  var x = Json_decode.pair(Json_decode.$$int, Json_decode.$$int, json);
  return {
          agility: x[0],
          strength: x[1]
        };
}

function partial_arg_0(json) {
  return {
          TAG: /* DefaultAttribute */0,
          _0: Json_decode.$$int(json)
        };
}

var partial_arg_1 = {
  hd: (function (json) {
      return {
              TAG: /* DifferentAttribute */1,
              _0: decodeNewAttribute(json)
            };
    }),
  tl: {
    hd: (function (json) {
        return {
                TAG: /* AgilityStrength */2,
                _0: decodeAgilityStrength(json)
              };
      }),
    tl: /* [] */0
  }
};

var partial_arg = {
  hd: partial_arg_0,
  tl: partial_arg_1
};

function decode$2(param) {
  return Json_decode.oneOf(partial_arg, param);
}

var PrimaryAttributeDamageThreshold = {
  decodeNewAttribute: decodeNewAttribute,
  decodeAgilityStrength: decodeAgilityStrength,
  decode: decode$2
};

function decode$3(json) {
  return {
          amount: JsonStrict$OptolithClient.field("damageDiceNumber", JsonStrict$OptolithClient.$$int, json),
          sides: JsonStrict$OptolithClient.field("damageDiceSides", JsonStrict$OptolithClient.$$int, json),
          flat: JsonStrict$OptolithClient.optionalField("damageFlat", JsonStrict$OptolithClient.$$int, json)
        };
}

var Damage = {
  decode: decode$3
};

function decode$4(json) {
  return {
          combatTechnique: JsonStrict$OptolithClient.field("combatTechnique", JsonStrict$OptolithClient.$$int, json),
          damage: decode$3(json),
          primaryAttributeDamageThreshold: JsonStrict$OptolithClient.optionalField("damageThreshold", decode$2, json),
          at: JsonStrict$OptolithClient.optionalField("at", JsonStrict$OptolithClient.$$int, json),
          pa: JsonStrict$OptolithClient.optionalField("pa", JsonStrict$OptolithClient.$$int, json),
          reach: JsonStrict$OptolithClient.optionalField("reach", JsonStrict$OptolithClient.$$int, json),
          length: JsonStrict$OptolithClient.optionalField("length", JsonStrict$OptolithClient.$$int, json),
          structurePoints: JsonStrict$OptolithClient.optionalField("structurePoints", OneOrMany$OptolithClient.Decode.t(JsonStrict$OptolithClient.$$int), json),
          isParryingWeapon: JsonStrict$OptolithClient.field("isParryingWeapon", JsonStrict$OptolithClient.bool, json),
          isTwoHandedWeapon: JsonStrict$OptolithClient.field("isTwoHandedWeapon", JsonStrict$OptolithClient.bool, json),
          isImprovisedWeapon: JsonStrict$OptolithClient.field("isImprovisedWeapon", JsonStrict$OptolithClient.bool, json)
        };
}

var MeleeWeapon = {
  decode: decode$4
};

function decode$5(json) {
  return {
          combatTechnique: JsonStrict$OptolithClient.field("combatTechnique", JsonStrict$OptolithClient.$$int, json),
          damage: Curry._3(Ley_Option$OptolithClient.liftM2, (function (amount, sides) {
                  return {
                          amount: amount,
                          sides: sides,
                          flat: JsonStrict$OptolithClient.optionalField("damageFlat", JsonStrict$OptolithClient.$$int, json)
                        };
                }), JsonStrict$OptolithClient.optionalField("damageDiceNumber", JsonStrict$OptolithClient.$$int, json), JsonStrict$OptolithClient.optionalField("damageDiceSides", JsonStrict$OptolithClient.$$int, json)),
          length: JsonStrict$OptolithClient.optionalField("length", JsonStrict$OptolithClient.$$int, json),
          range: [
            JsonStrict$OptolithClient.field("closeRange", JsonStrict$OptolithClient.$$int, json),
            JsonStrict$OptolithClient.field("mediumRange", JsonStrict$OptolithClient.$$int, json),
            JsonStrict$OptolithClient.field("farRange", JsonStrict$OptolithClient.$$int, json)
          ],
          reloadTime: JsonStrict$OptolithClient.field("reloadTime", OneOrMany$OptolithClient.Decode.t(JsonStrict$OptolithClient.$$int), json),
          ammunition: JsonStrict$OptolithClient.optionalField("ammunition", JsonStrict$OptolithClient.$$int, json),
          isImprovisedWeapon: JsonStrict$OptolithClient.field("isImprovisedWeapon", JsonStrict$OptolithClient.bool, json)
        };
}

var RangedWeapon = {
  decode: decode$5
};

function decode$6(json) {
  return {
          protection: Json_decode.field("protection", Json_decode.$$int, json),
          encumbrance: Json_decode.field("encumbrance", Json_decode.$$int, json),
          hasAdditionalPenalties: Json_decode.field("hasAdditionalPenalties", Json_decode.bool, json),
          armorType: Json_decode.field("armorType", Json_decode.$$int, json)
        };
}

var Armor = {
  decode: decode$6
};

function decodeCombinedWeapon(json) {
  return [
          Json_decode.field("melee", decode$4, json),
          Json_decode.field("ranged", decode$5, json)
        ];
}

function partial_arg_0$1(json) {
  return {
          TAG: /* MundaneItem */0,
          _0: decode$1(json)
        };
}

var partial_arg_1$1 = {
  hd: (function (json) {
      return {
              TAG: /* MeleeWeapon */1,
              _0: decode$4(json)
            };
    }),
  tl: {
    hd: (function (json) {
        return {
                TAG: /* RangedWeapon */2,
                _0: decode$5(json)
              };
      }),
    tl: {
      hd: (function (json) {
          var param = decodeCombinedWeapon(json);
          return {
                  TAG: /* CombinedWeapon */3,
                  _0: param[0],
                  _1: param[1]
                };
        }),
      tl: {
        hd: (function (json) {
            return {
                    TAG: /* Armor */4,
                    _0: decode$6(json)
                  };
          }),
        tl: /* [] */0
      }
    }
  }
};

var partial_arg$1 = {
  hd: partial_arg_0$1,
  tl: partial_arg_1$1
};

function decodeSpecial(param) {
  return Json_decode.oneOf(partial_arg$1, param);
}

function decode$7(json) {
  var partial_arg_0 = function (json) {
    return {
            hd: decodeMultilingual(json),
            tl: /* [] */0
          };
  };
  var partial_arg_1 = {
    hd: (function (json) {
        return Json_decode.list(decodeMultilingual, json);
      }),
    tl: /* [] */0
  };
  var partial_arg = {
    hd: partial_arg_0,
    tl: partial_arg_1
  };
  return {
          name: Json_decode.field("name", Json_decode.string, json),
          info: Json_decode.field("versions", (function (param) {
                  return Json_decode.oneOf(partial_arg, param);
                }), json)
        };
}

var Translations$1 = {
  decode: decode$7
};

var TranslationMap$1 = TranslationMap$OptolithClient.Make(Translations$1);

function decodeMultilingual$1(json) {
  return {
          id: JsonStrict$OptolithClient.field("id", JsonStrict$OptolithClient.$$int, json),
          price: JsonStrict$OptolithClient.optionalField("price", JsonStrict$OptolithClient.$$int, json),
          weight: JsonStrict$OptolithClient.optionalField("weight", JsonStrict$OptolithClient.$$int, json),
          special: JsonStrict$OptolithClient.optionalField("special", decodeSpecial, json),
          gr: JsonStrict$OptolithClient.field("gr", JsonStrict$OptolithClient.$$int, json),
          translations: JsonStrict$OptolithClient.field("translations", TranslationMap$1.decode, json)
        };
}

function resolveTranslations$1(langs, x) {
  return Curry._2(Ley_Option$OptolithClient.Infix.$less$amp$great, Curry._2(TranslationMap$1.getFromLanguageOrder, langs, x.translations), (function (translation) {
                return [
                        x.id,
                        {
                          id: x.id,
                          name: translation.name,
                          price: x.price,
                          weight: x.weight,
                          special: x.special,
                          info: Ley_Option$OptolithClient.mapOption((function (param) {
                                  return resolveTranslations(langs, param);
                                }), translation.info),
                          gr: x.gr
                        }
                      ];
              }));
}

function decode$8(langs, json) {
  return resolveTranslations$1(langs, decodeMultilingual$1(json));
}

export {
  Info ,
  MundaneItem ,
  PrimaryAttributeDamageThreshold ,
  Damage ,
  MeleeWeapon ,
  RangedWeapon ,
  Armor ,
  decodeCombinedWeapon ,
  decodeSpecial ,
  Translations$1 as Translations,
  TranslationMap$1 as TranslationMap,
  decodeMultilingual$1 as decodeMultilingual,
  resolveTranslations$1 as resolveTranslations,
  decode$8 as decode,
  
}
/* TranslationMap Not a pure module */
