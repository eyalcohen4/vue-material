!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.VueMaterial=e():t.VueMaterial=e()}(this,function(){return function(t){function e(i){if(n[i])return n[i].exports;var o=n[i]={exports:{},id:i,loaded:!1};return t[i].call(o.exports,o,o.exports,e),o.loaded=!0,o.exports}var n={};return e.m=t,e.c=n,e.p="/",e(0)}({0:function(t,e,n){t.exports=n(12)},1:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function t(e,n){return!!e.$el&&(e.$el.classList.contains(n)?e:0!==e._uid&&t(e.$parent,n))};e.default=n},2:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{value:String,disabled:Boolean,required:Boolean,maxlength:[Number,String],placeholder:String},watch:{value:function(){this.setParentValue()},disabled:function(){this.setParentDisabled()},required:function(){this.setParentRequired()},placeholder:function(){this.setParentPlaceholder()},maxlength:function(){this.handleMaxLength()}},methods:{handleMaxLength:function(){this.parentContainer.enableCounter=this.maxlength>0,this.parentContainer.counterLength=this.maxlength},setParentValue:function(){this.parentContainer.setValue(this.$el.value)},setParentDisabled:function(){this.parentContainer.isDisabled=this.disabled},setParentRequired:function(){this.parentContainer.isRequired=this.required},setParentPlaceholder:function(){this.parentContainer.hasPlaceholder=!!this.placeholder},onFocus:function(){this.parentContainer.isFocused=!0},onBlur:function(){this.parentContainer.isFocused=!1,this.setParentValue()},onInput:function(){this.setParentValue(),this.parentContainer.inputLength=this.$el.value.length,this.$emit("change",this.$el.value),this.$emit("input",this.$el.value)}}}},3:function(t,e,n){var i,o,r;/*!
		Autosize 3.0.18
		license: MIT
		http://www.jacklmoore.com/autosize
	*/
!function(n,a){o=[e,t],i=a,r="function"==typeof i?i.apply(e,o):i,!(void 0!==r&&(t.exports=r))}(this,function(t,e){"use strict";function n(t){function e(){var e=window.getComputedStyle(t,null);"vertical"===e.resize?t.style.resize="none":"both"===e.resize&&(t.style.resize="horizontal"),s="content-box"===e.boxSizing?-(parseFloat(e.paddingTop)+parseFloat(e.paddingBottom)):parseFloat(e.borderTopWidth)+parseFloat(e.borderBottomWidth),isNaN(s)&&(s=0),u()}function n(e){var n=t.style.width;t.style.width="0px",t.offsetWidth,t.style.width=n,t.style.overflowY=e,o()}function i(t){for(var e=[];t&&t.parentNode&&t.parentNode instanceof Element;)t.parentNode.scrollTop&&e.push({node:t.parentNode,scrollTop:t.parentNode.scrollTop}),t=t.parentNode;return e}function o(){var e=t.style.height,n=i(t),o=document.documentElement&&document.documentElement.scrollTop;t.style.height="auto";var r=t.scrollHeight+s;return 0===t.scrollHeight?void(t.style.height=e):(t.style.height=r+"px",d=t.clientWidth,n.forEach(function(t){t.node.scrollTop=t.scrollTop}),void(o&&(document.documentElement.scrollTop=o)))}function u(){o();var e=window.getComputedStyle(t,null),i=Math.round(parseFloat(e.height)),r=Math.round(parseFloat(t.style.height));if(i!==r?"visible"!==e.overflowY&&n("visible"):"hidden"!==e.overflowY&&n("hidden"),l!==i){l=i;var u=a("autosize:resized");try{t.dispatchEvent(u)}catch(t){}}}if(t&&t.nodeName&&"TEXTAREA"===t.nodeName&&!r.has(t)){var s=null,d=t.clientWidth,l=null,c=function(){t.clientWidth!==d&&u()},p=function(e){window.removeEventListener("resize",c,!1),t.removeEventListener("input",u,!1),t.removeEventListener("keyup",u,!1),t.removeEventListener("autosize:destroy",p,!1),t.removeEventListener("autosize:update",u,!1),Object.keys(e).forEach(function(n){t.style[n]=e[n]}),r.delete(t)}.bind(t,{height:t.style.height,resize:t.style.resize,overflowY:t.style.overflowY,overflowX:t.style.overflowX,wordWrap:t.style.wordWrap});t.addEventListener("autosize:destroy",p,!1),"onpropertychange"in t&&"oninput"in t&&t.addEventListener("keyup",u,!1),window.addEventListener("resize",c,!1),t.addEventListener("input",u,!1),t.addEventListener("autosize:update",u,!1),t.style.overflowX="hidden",t.style.wordWrap="break-word",r.set(t,{destroy:p,update:u}),e()}}function i(t){var e=r.get(t);e&&e.destroy()}function o(t){var e=r.get(t);e&&e.update()}var r="function"==typeof Map?new Map:function(){var t=[],e=[];return{has:function(e){return t.indexOf(e)>-1},get:function(n){return e[t.indexOf(n)]},set:function(n,i){t.indexOf(n)===-1&&(t.push(n),e.push(i))},delete:function(n){var i=t.indexOf(n);i>-1&&(t.splice(i,1),e.splice(i,1))}}}(),a=function(t){return new Event(t)};try{new Event("test")}catch(t){a=function(t){var e=document.createEvent("Event");return e.initEvent(t,!0,!1),e}}var u=null;"undefined"==typeof window||"function"!=typeof window.getComputedStyle?(u=function(t){return t},u.destroy=function(t){return t},u.update=function(t){return t}):(u=function(t,e){return t&&Array.prototype.forEach.call(t.length?t:[t],function(t){return n(t,e)}),t},u.destroy=function(t){return t&&Array.prototype.forEach.call(t.length?t:[t],i),t},u.update=function(t){return t&&Array.prototype.forEach.call(t.length?t:[t],o),t}),e.exports=u})},12:function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}function o(t){t.component("md-input-container",a.default),t.component("md-input",s.default),t.component("md-textarea",l.default),t.material.styles.push(p.default)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=o;var r=n(131),a=i(r),u=n(130),s=i(u),d=n(132),l=i(d),c=n(99),p=i(c)},42:function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(2),r=i(o),a=n(1),u=i(a);e.default={mixins:[r.default],props:{type:{type:String,default:"text"}},mounted:function(){if(this.parentContainer=(0,u.default)(this.$parent,"md-input-container"),!this.parentContainer)throw this.$destroy(),new Error("You should wrap the md-input in a md-input-container");this.setParentDisabled(),this.setParentRequired(),this.setParentPlaceholder(),this.setParentValue(),this.handleMaxLength()}}},43:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{mdInline:Boolean,mdDisabled:Boolean,mdHasPassword:Boolean},data:function(){return{value:"",input:!1,inputType:!1,showPassword:!1,enableCounter:!1,hasSelect:!1,hasPlaceholder:!1,isDisabled:!1,isRequired:!1,isFocused:!1,counterLength:0,inputLength:0}},computed:{hasValue:function(){return this.value.constructor===Array?this.value.length>0:Boolean(this.value)},classes:function(){return{"md-input-inline":this.mdInline,"md-has-password":this.mdHasPassword,"md-has-select":this.hasSelect,"md-has-value":this.hasValue,"md-input-placeholder":this.hasPlaceholder,"md-input-disabled":this.isDisabled,"md-input-required":this.isRequired,"md-input-focused":this.isFocused}}},methods:{togglePasswordType:function(){"input"===this.input.tagName.toLowerCase()&&("password"===this.inputType?(this.input.type="text",this.showPassword=!0):(this.input.type="password",this.showPassword=!1),this.input.focus())},setValue:function(t){this.value=t}},mounted:function(){if(this.input=this.$el.querySelectorAll("input, textarea, select")[0],!this.input)throw this.$destroy(),new Error("Missing input/select/textarea inside md-input-container");this.inputType=this.input.type}}},44:function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(3),r=i(o),a=n(2),u=i(a),s=n(1),d=i(s);e.default={mixins:[u.default],mounted:function(){if(this.parentContainer=(0,d.default)(this.$parent,"md-input-container"),!this.parentContainer)throw this.$destroy(),new Error("You should wrap the md-textarea in a md-input-container");this.setParentDisabled(),this.setParentRequired(),this.setParentPlaceholder(),this.setParentValue(),this.handleMaxLength(),this.$el.getAttribute("rows")||this.$el.setAttribute("rows","1"),(0,r.default)(this.$el)},beforeDestroy:function(){r.default.destroy(this.$el)}}},81:function(t,e){},99:function(t,e){t.exports=".THEME_NAME .md-input-container.md-input-invalid:after,.THEME_NAME.md-input-container.md-input-invalid:after{background-color:WARN-COLOR}.THEME_NAME .md-input-container.md-input-invalid label,.THEME_NAME .md-input-container.md-input-invalid .md-error,.THEME_NAME .md-input-container.md-input-invalid .md-count,.THEME_NAME .md-input-container.md-input-invalid input,.THEME_NAME .md-input-container.md-input-invalid textarea,.THEME_NAME.md-input-container.md-input-invalid label,.THEME_NAME.md-input-container.md-input-invalid .md-error,.THEME_NAME.md-input-container.md-input-invalid .md-count,.THEME_NAME.md-input-container.md-input-invalid input,.THEME_NAME.md-input-container.md-input-invalid textarea{color:WARN-COLOR}.THEME_NAME .md-input-container.md-input-focused.md-input-inline label,.THEME_NAME.md-input-container.md-input-focused.md-input-inline label{color:rgba(0,0,0,0.54)}.THEME_NAME .md-input-container.md-input-focused.md-input-required label:after,.THEME_NAME.md-input-container.md-input-focused.md-input-required label:after{color:WARN-COLOR}.THEME_NAME .md-input-container.md-input-focused:after,.THEME_NAME.md-input-container.md-input-focused:after{height:2px;background-color:PRIMARY-COLOR}.THEME_NAME .md-input-container.md-input-focused input,.THEME_NAME .md-input-container.md-input-focused textarea,.THEME_NAME.md-input-container.md-input-focused input,.THEME_NAME.md-input-container.md-input-focused textarea{color:PRIMARY-COLOR;text-shadow:0 0 0 BACKGROUND-CONTRAST;-webkit-text-fill-color:transparent}.THEME_NAME .md-input-container.md-input-focused label,.THEME_NAME.md-input-container.md-input-focused label{color:PRIMARY-COLOR}\n"},130:function(t,e,n){var i,o;i=n(42);var r=n(182);o=i=i||{},"object"!=typeof i.default&&"function"!=typeof i.default||(o=i=i.default),"function"==typeof o&&(o=o.options),o.render=r.render,o.staticRenderFns=r.staticRenderFns,t.exports=i},131:function(t,e,n){var i,o;n(81),i=n(43);var r=n(179);o=i=i||{},"object"!=typeof i.default&&"function"!=typeof i.default||(o=i=i.default),"function"==typeof o&&(o=o.options),o.render=r.render,o.staticRenderFns=r.staticRenderFns,t.exports=i},132:function(t,e,n){var i,o;i=n(44);var r=n(186);o=i=i||{},"object"!=typeof i.default&&"function"!=typeof i.default||(o=i=i.default),"function"==typeof o&&(o=o.options),o.render=r.render,o.staticRenderFns=r.staticRenderFns,t.exports=i},179:function(t,e){t.exports={render:function(){var t=this;return t._h("div",{staticClass:"md-input-container",class:t.classes},[t._t("default")," ",t.enableCounter?t._h("span",{staticClass:"md-count"},[t._s(t.inputLength)+" / "+t._s(t.counterLength)]):t._e()," ",t.mdHasPassword?t._h("md-button",{staticClass:"md-icon-button md-toggle-password",on:{click:t.togglePasswordType}},[t._h("md-icon",[t._s(t.showPassword?"visibility_off":"visibility")])]):t._e()])},staticRenderFns:[]}},182:function(t,e){t.exports={render:function(){var t=this;return t._h("input",{staticClass:"md-input",attrs:{type:t.type,disabled:t.disabled,required:t.required,placeholder:t.placeholder,maxlength:t.maxlength},domProps:{value:t.value},on:{focus:t.onFocus,blur:t.onBlur,input:t.onInput,keydown:[function(e){38===e.keyCode&&t.onInput(e)},function(e){40===e.keyCode&&t.onInput(e)}]}})},staticRenderFns:[]}},186:function(t,e){t.exports={render:function(){var t=this;return t._h("textarea",{staticClass:"md-input",attrs:{disabled:t.disabled,required:t.required,placeholder:t.placeholder,maxlength:t.maxlength},domProps:{value:t.value},on:{focus:t.onFocus,blur:t.onBlur,input:t.onInput}})},staticRenderFns:[]}}})});