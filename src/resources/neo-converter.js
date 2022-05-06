(()=>{"use strict";var n={n:t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},d:(t,e)=>{for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})},o:(n,t)=>Object.prototype.hasOwnProperty.call(n,t)};const t=jQuery;var e=n.n(t);const o=Craft;var r=n.n(o);const i=Garnish;var s=n.n(i);const a=e()("#type"),c=e()('input[name="fieldId"]');if("benf\\neo\\Field"===a.val()&&c.length>0){const n=r().cp.$primaryForm,t=n.find('input[type="submit"]');let o=e()("#Matrix-convert_button"),i=e()("#Matrix-convert_spinner"),a=!0;const l=e=>{a=!!e,o.toggleClass("disabled",!a),t.toggleClass("disabled",!a),a?n.off("submit.neo"):n.on("submit.neo",(n=>n.preventDefault()))},d=()=>{l(!1),i.removeClass("hidden"),r().postActionRequest("neo/conversion/convert-to-matrix",{fieldId:c.val()},((n,t)=>{if(n.success)r().cp.removeListener(s().$win,"beforeunload"),window.location.reload();else if(l(!0),r().cp.displayError(r().t("neo","Could not convert Neo field to Matrix")),n.errors&&n.errors.length>0)for(const t of n.errors)r().cp.displayError(t)}))},v=()=>{const n=e()("#craft-fields-Matrix");n.find("#conversion-prompt").length>0||(n.prepend('\n      <div id="conversion-prompt">\n        <div class="field">\n          <div class="heading">\n            <label>'.concat(r().t("neo","Convert from Neo"),'</label>\n            <div class="instructions"><p>').concat(r().t("neo","This field is currently of the Neo type. You may automatically convert it to Matrix along with all of its content."),'</p></div>\n          </div>\n          <div class="input ltr">\n            <input id="Matrix-convert_button" type="button" class="btn submit" value="').concat(r().t("neo","Convert"),'">\n            <span id="Matrix-convert_spinner" class="spinner hidden"></span>\n          </div>\n          <p class="warning">').concat(r().t("neo","By converting to Matrix, structural information will be lost."),"</p>\n        </div>\n      </div>\n      <hr>\n    ")),o=e()("#Matrix-convert_button"),i=e()("#Matrix-convert_spinner"),o.on("click",(n=>{n.preventDefault(),a&&window.confirm(r().t("neo","Are you sure? This is a one way operation. You cannot undo conversion from Neo to Matrix."))&&d()})))};new window.MutationObserver(v).observe(document.getElementById("settings"),{childList:!0,subtree:!0})}})();