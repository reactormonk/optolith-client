// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE

import * as Json_decode from "@glennsl/bs-json/src/Json_decode.bs.js";
import * as Ley_List$OptolithClient from "../Data/Ley_List.bs.js";
import * as Ley_Option$OptolithClient from "../Data/Ley_Option.bs.js";

function empty(id) {
  return {
          id: id,
          value: /* Inactive */0,
          dependencies: /* [] */0
        };
}

function isEmpty(x) {
  if (x.value === /* Inactive */0) {
    return Ley_List$OptolithClient.Foldable.$$null(x.dependencies);
  } else {
    return false;
  }
}

function getValueDef(param) {
  return Ley_Option$OptolithClient.option(/* Inactive */0, (function (x) {
                return x.value;
              }), param);
}

function valueToInt(value) {
  if (value) {
    return value._0;
  } else {
    return 0;
  }
}

function isActive(x) {
  var match = x.value;
  if (match) {
    return true;
  } else {
    return false;
  }
}

function isActiveM(param) {
  return Ley_Option$OptolithClient.option(false, isActive, param);
}

var Dynamic = {
  empty: empty,
  isEmpty: isEmpty,
  getValueDef: getValueDef,
  valueToInt: valueToInt,
  isActive: isActive,
  isActiveM: isActiveM
};

function decode(json) {
  return {
          full: Json_decode.field("full", Json_decode.string, json),
          abbr: Json_decode.field("abbr", Json_decode.string, json)
        };
}

function make(isNotModifiable, param) {
  return {
          full: param.full,
          abbr: param.abbr,
          isNotModifiable: isNotModifiable
        };
}

var MainParameter = {
  decode: decode,
  make: make
};

export {
  Dynamic ,
  MainParameter ,
  
}
/* No side effect */
