// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE

import * as Curry from "bs-platform/lib/es6/curry.js";
import * as IO$OptolithClient from "./IO.bs.js";

function handle(f, x) {
  return x.catch(Curry.__1(f));
}

function handleE(x) {
  return x.then(function (x) {
                return Curry._1(IO$OptolithClient.$$return, {
                            TAG: /* Ok */0,
                            _0: x
                          });
              }).catch(function (x) {
              return Curry._1(IO$OptolithClient.$$return, {
                          TAG: /* Error */1,
                          _0: x
                        });
            });
}

export {
  handle ,
  handleE ,
  
}
/* IO-OptolithClient Not a pure module */
