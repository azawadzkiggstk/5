!function(){var e,t={96082:function(e,t,r){"use strict";var o=window.wp.i18n,n=window.wp.element,a=(0,n.createElement)("svg",{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},(0,n.createElement)("path",{fill:"#1e1e1e",d:"M18 8H6c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-4c0-1.1-.9-2-2-2zm.5 6c0 .3-.2.5-.5.5H6c-.3 0-.5-.2-.5-.5v-4c0-.3.2-.5.5-.5h12c.3 0 .5.2.5.5v4zM4 4v1.5h16V4H4zm0 16h16v-1.5H4V20z"})),l=r(94184),c=r.n(l),i=window.lodash,s=window.wp.blockEditor,u=window.wp.data,m=window.wp.richText;const p="is-style-solid-color",g={value:{type:"string",source:"html",selector:"blockquote",multiline:"p"},citation:{type:"string",source:"html",selector:"cite",default:""},mainColor:{type:"string"},customMainColor:{type:"string"},textColor:{type:"string"},customTextColor:{type:"string"}};function d(e){if(!e)return;const t=e.match(/border-color:([^;]+)[;]?/);return t&&t[1]?t[1]:void 0}function f(e){return(0,m.toHTMLString)({value:(0,m.replace)((0,m.create)({html:e,multilineTag:"p"}),new RegExp(m.__UNSTABLE_LINE_SEPARATOR,"g"),"\n")})}var v=[{attributes:{value:{type:"string",source:"html",selector:"blockquote",multiline:"p",__experimentalRole:"content"},citation:{type:"string",source:"html",selector:"cite",default:"",__experimentalRole:"content"},textAlign:{type:"string"}},save(e){let{attributes:t}=e;const{textAlign:r,citation:o,value:a}=t,l=!s.RichText.isEmpty(o);return(0,n.createElement)("figure",s.useBlockProps.save({className:c()({[`has-text-align-${r}`]:r})}),(0,n.createElement)("blockquote",null,(0,n.createElement)(s.RichText.Content,{value:a,multiline:!0}),l&&(0,n.createElement)(s.RichText.Content,{tagName:"cite",value:o})))},migrate(e){let{value:t,...r}=e;return{value:f(t),...r}}},{attributes:{...g},save(e){let{attributes:t}=e;const{mainColor:r,customMainColor:o,customTextColor:a,textColor:l,value:u,citation:m,className:g}=t;let d,f;if((0,i.includes)(g,p)){const e=(0,s.getColorClassName)("background-color",r);d=c()({"has-background":e||o,[e]:e}),f={backgroundColor:e?void 0:o}}else o&&(f={borderColor:o});const v=(0,s.getColorClassName)("color",l),h=c()({"has-text-color":l||a,[v]:v}),y=v?void 0:{color:a};return(0,n.createElement)("figure",s.useBlockProps.save({className:d,style:f}),(0,n.createElement)("blockquote",{className:h,style:y},(0,n.createElement)(s.RichText.Content,{value:u,multiline:!0}),!s.RichText.isEmpty(m)&&(0,n.createElement)(s.RichText.Content,{tagName:"cite",value:m})))},migrate(e){let{value:t,className:r,mainColor:o,customMainColor:n,customTextColor:a,...l}=e;const c=(0,i.includes)(r,p);let s;return n&&(s=c?{color:{background:n}}:{border:{color:n}}),a&&s&&(s.color={...s.color,text:a}),{value:f(t),className:r,backgroundColor:c?o:void 0,borderColor:c?void 0:o,textAlign:c?"left":void 0,style:s,...l}}},{attributes:{...g,figureStyle:{source:"attribute",selector:"figure",attribute:"style"}},save(e){let{attributes:t}=e;const{mainColor:r,customMainColor:o,textColor:a,customTextColor:l,value:u,citation:m,className:g,figureStyle:f}=t;let v,h;if((0,i.includes)(g,p)){const e=(0,s.getColorClassName)("background-color",r);v=c()({"has-background":e||o,[e]:e}),h={backgroundColor:e?void 0:o}}else o?h={borderColor:o}:r&&(h={borderColor:d(f)});const y=(0,s.getColorClassName)("color",a),b=(a||l)&&c()("has-text-color",{[y]:y}),x=y?void 0:{color:l};return(0,n.createElement)("figure",{className:v,style:h},(0,n.createElement)("blockquote",{className:b,style:x},(0,n.createElement)(s.RichText.Content,{value:u,multiline:!0}),!s.RichText.isEmpty(m)&&(0,n.createElement)(s.RichText.Content,{tagName:"cite",value:m})))},migrate(e){let{value:t,className:r,figureStyle:o,mainColor:n,customMainColor:a,customTextColor:l,...c}=e;const s=(0,i.includes)(r,p);let u;if(a&&(u=s?{color:{background:a}}:{border:{color:a}}),l&&u&&(u.color={...u.color,text:l}),!s&&n&&o){const e=d(o);if(e)return{value:f(t),...c,className:r,style:{border:{color:e}}}}return{value:f(t),className:r,backgroundColor:s?n:void 0,borderColor:s?void 0:n,textAlign:s?"left":void 0,style:u,...c}}},{attributes:g,save(e){let{attributes:t}=e;const{mainColor:r,customMainColor:o,textColor:a,customTextColor:l,value:m,citation:g,className:d}=t;let f,v;if((0,i.includes)(d,p))f=(0,s.getColorClassName)("background-color",r),f||(v={backgroundColor:o});else if(o)v={borderColor:o};else if(r){const e=(0,i.get)((0,u.select)(s.store).getSettings(),["colors"],[]);v={borderColor:(0,s.getColorObjectByAttributeValues)(e,r).color}}const h=(0,s.getColorClassName)("color",a),y=a||l?c()("has-text-color",{[h]:h}):void 0,b=h?void 0:{color:l};return(0,n.createElement)("figure",{className:f,style:v},(0,n.createElement)("blockquote",{className:y,style:b},(0,n.createElement)(s.RichText.Content,{value:m,multiline:!0}),!s.RichText.isEmpty(g)&&(0,n.createElement)(s.RichText.Content,{tagName:"cite",value:g})))},migrate(e){let{value:t,className:r,mainColor:o,customMainColor:n,customTextColor:a,...l}=e;const c=(0,i.includes)(r,p);let s={};return n&&(s=c?{color:{background:n}}:{border:{color:n}}),a&&s&&(s.color={...s.color,text:a}),{value:f(t),className:r,backgroundColor:c?o:void 0,borderColor:c?void 0:o,textAlign:c?"left":void 0,style:s,...l}}},{attributes:{...g},save(e){let{attributes:t}=e;const{value:r,citation:o}=t;return(0,n.createElement)("blockquote",null,(0,n.createElement)(s.RichText.Content,{value:r,multiline:!0}),!s.RichText.isEmpty(o)&&(0,n.createElement)(s.RichText.Content,{tagName:"cite",value:o}))},migrate(e){let{value:t,...r}=e;return{value:f(t),...r}}},{attributes:{...g,citation:{type:"string",source:"html",selector:"footer"},align:{type:"string",default:"none"}},save(e){let{attributes:t}=e;const{value:r,citation:o,align:a}=t;return(0,n.createElement)("blockquote",{className:`align${a}`},(0,n.createElement)(s.RichText.Content,{value:r,multiline:!0}),!s.RichText.isEmpty(o)&&(0,n.createElement)(s.RichText.Content,{tagName:"footer",value:o}))},migrate(e){let{value:t,...r}=e;return{value:f(t),...r}}}],h=window.wp.blocks;const y="web"===n.Platform.OS;var b=JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"core/pullquote","title":"Pullquote","category":"text","description":"Give special visual emphasis to a quote from your text.","textdomain":"default","attributes":{"value":{"type":"string","source":"html","selector":"p","__experimentalRole":"content"},"citation":{"type":"string","source":"html","selector":"cite","default":"","__experimentalRole":"content"},"textAlign":{"type":"string"}},"supports":{"anchor":true,"align":["left","right","wide","full"],"color":{"gradients":true,"background":true,"link":true,"__experimentalDefaultControls":{"background":true,"text":true}},"typography":{"fontSize":true,"lineHeight":true,"__experimentalFontFamily":true,"__experimentalFontWeight":true,"__experimentalFontStyle":true,"__experimentalTextTransform":true,"__experimentalTextDecoration":true,"__experimentalLetterSpacing":true,"__experimentalDefaultControls":{"fontSize":true,"fontAppearance":true}},"__experimentalBorder":{"color":true,"radius":true,"style":true,"width":true,"__experimentalDefaultControls":{"color":true,"radius":true,"style":true,"width":true}},"__experimentalStyle":{"typography":{"fontSize":"1.5em","lineHeight":"1.6"}}},"editorScript":"file:./build/index.js","editorStyle":"file:./build/index.css","style":"file:./build/style-index.css"}'),x={from:[{type:"block",isMultiBlock:!0,blocks:["core/paragraph"],transform:e=>(0,h.createBlock)("core/pullquote",{value:(0,m.toHTMLString)({value:(0,m.join)(e.map((e=>{let{content:t}=e;return(0,m.create)({html:t})})),"\n")}),anchor:e.anchor})},{type:"block",blocks:["core/heading"],transform:e=>{let{content:t,anchor:r}=e;return(0,h.createBlock)("core/pullquote",{value:t,anchor:r})}}],to:[{type:"block",blocks:["core/paragraph"],transform:e=>{let{value:t,citation:r}=e;const o=[];return t&&o.push((0,h.createBlock)("core/paragraph",{content:t})),r&&o.push((0,h.createBlock)("core/paragraph",{content:r})),0===o.length?(0,h.createBlock)("core/paragraph",{content:""}):o}},{type:"block",blocks:["core/heading"],transform:e=>{let{value:t,citation:r}=e;if(!t)return(0,h.createBlock)("core/heading",{content:r});const o=(0,h.createBlock)("core/heading",{content:t});return r?[o,(0,h.createBlock)("core/heading",{content:r})]:o}}]};function k(){return k=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},k.apply(this,arguments)}function w(e){var t,r,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=w(e[t]))&&(o&&(o+=" "),o+=r);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}var C=function(){for(var e,t,r=0,o="";r<arguments.length;)(e=arguments[r++])&&(t=w(e))&&(o&&(o+=" "),o+=t);return o};function E(e){const{tag:t="div",className:r,children:o,...a}=e;return(0,n.createElement)(t,{className:C("skeleton",r),...a},[o,(0,n.createElement)("span",{key:"skeleton-activity",className:"skeleton__activity"},(0,n.createElement)("span",null))])}E.Inline=function(e){return(0,n.createElement)(E,k({tag:"span"},e))},E.Text=function(e){const{tag:t="div",children:r,...o}=e,a=[r].flat().filter((e=>"string"==typeof e)).map((e=>e.split(" ").map(((e,t)=>(0,n.createElement)(n.Fragment,{key:t},(0,n.createElement)(E.Inline,o,e)," ")))));return(0,n.createElement)(t,{},a.flat())};var N=window.wp.components;r(17563),window.wp.keycodes;var _=window.wp.primitives,j=(0,n.createElement)(_.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,n.createElement)(_.Path,{d:"M12 4.75a7.25 7.25 0 100 14.5 7.25 7.25 0 000-14.5zM3.25 12a8.75 8.75 0 1117.5 0 8.75 8.75 0 01-17.5 0zM12 8.75a1.5 1.5 0 01.167 2.99c-.465.052-.917.44-.917 1.01V14h1.5v-.845A3 3 0 109 10.25h1.5a1.5 1.5 0 011.5-1.5zM11.25 15v1.5h1.5V15h-1.5z"})),O=(0,n.createElement)(_.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,n.createElement)(_.Path,{d:"M20.5 16h-.7V8c0-1.1-.9-2-2-2H6.2c-1.1 0-2 .9-2 2v8h-.7c-.8 0-1.5.7-1.5 1.5h20c0-.8-.7-1.5-1.5-1.5zM5.7 8c0-.3.2-.5.5-.5h11.6c.3 0 .5.2.5.5v7.6H5.7V8z"})),S=(0,n.createElement)(_.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,n.createElement)(_.Path,{d:"M17 4H7c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm.5 14c0 .3-.2.5-.5.5H7c-.3 0-.5-.2-.5-.5V6c0-.3.2-.5.5-.5h10c.3 0 .5.2.5.5v12zm-7.5-.5h4V16h-4v1.5z"})),T=(0,n.createElement)(_.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,n.createElement)(_.Path,{d:"M15 4H9c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h6c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm.5 14c0 .3-.2.5-.5.5H9c-.3 0-.5-.2-.5-.5V6c0-.3.2-.5.5-.5h6c.3 0 .5.2.5.5v12zm-4.5-.5h2V16h-2v1.5z"})),R=window.wp.hooks;(0,n.createElement)(N.Icon,{icon:j}),(0,n.createElement)(N.Icon,{icon:O}),(0,n.createElement)(N.Icon,{icon:S}),(0,n.createElement)(N.Icon,{icon:T}),(0,n.createElement)(_.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,n.createElement)(_.Path,{d:"M15.742 7.009a2.823 2.823 0 0 0-1.351-1.039 4.492 4.492 0 0 0-1.753-.345 4.692 4.692 0 0 0-1.076.123 3.075 3.075 0 0 0-.927.396 2.088 2.088 0 0 0-.65.716c-.166.28-.25.618-.25 1.013 0 .593.208 1.046.626 1.36.417.312.934.584 1.551.815a29.17 29.17 0 0 0 2.028.667c.734.214 1.41.51 2.028.89a4.984 4.984 0 0 1 1.551 1.507c.418.626.626 1.458.626 2.496 0 .938-.175 1.762-.526 2.47a4.998 4.998 0 0 1-1.426 1.73 6.001 6.001 0 0 1-2.053 1.038c-.785.23-1.61.346-2.478.346a9.407 9.407 0 0 1-3.179-.544c-1.018-.362-1.894-.972-2.628-1.828l2.378-2.274a4.085 4.085 0 0 0 1.502 1.36 4.466 4.466 0 0 0 2.002.468c.367 0 .735-.049 1.101-.147a3.428 3.428 0 0 0 1.002-.445 2.38 2.38 0 0 0 .725-.741 2.061 2.061 0 0 0 .276-1.063c0-.643-.208-1.137-.626-1.483-.417-.346-.934-.634-1.552-.864a22.188 22.188 0 0 0-2.028-.693 8.923 8.923 0 0 1-2.026-.864 5.092 5.092 0 0 1-1.553-1.482c-.417-.627-.625-1.458-.625-2.496 0-.906.184-1.689.55-2.347A5.17 5.17 0 0 1 8.46 4.118a6.481 6.481 0 0 1 2.102-.99 9.079 9.079 0 0 1 2.403-.32c.934 0 1.835.14 2.703.42.884.28 1.677.741 2.377 1.384l-2.302 2.397z"}));const{name:A}=b;var F,B,M;F=A,B=b,M={icon:a,example:{attributes:{value:
// translators: Quote serving as example for the Pullquote block. Attributed to Matt Mullenweg.
(0,o.__)("One of the hardest things to do in technology is disrupt yourself."),citation:(0,o.__)("Matt Mullenweg")}},transforms:x,edit:function(e){let{attributes:t,setAttributes:r,isSelected:a,insertBlocksAfter:l}=e;const{textAlign:i,citation:u,value:m}=t,p=(0,s.useBlockProps)({className:c()({[`has-text-align-${i}`]:i})}),g=!s.RichText.isEmpty(u)||a;return(0,n.createElement)(n.Fragment,null,(0,n.createElement)(s.BlockControls,{group:"block"},(0,n.createElement)(s.AlignmentControl,{value:i,onChange:e=>{r({textAlign:e})}})),(0,n.createElement)("figure",p,(0,n.createElement)("blockquote",null,(0,n.createElement)(s.RichText,{identifier:"value",tagName:"p",value:m,onChange:e=>r({value:e}),"aria-label":(0,o.__)("Pullquote text"),placeholder:
// translators: placeholder text used for the quote
(0,o.__)("Add quote"),textAlign:"center"}),g&&(0,n.createElement)(s.RichText,{identifier:"citation",tagName:y?"cite":void 0,style:{display:"block"},value:u,"aria-label":(0,o.__)("Pullquote citation text"),placeholder:
// translators: placeholder text used for the citation
(0,o.__)("Add citation"),onChange:e=>r({citation:e}),className:"wp-block-pullquote__citation",__unstableMobileNoFocusOnMount:!0,textAlign:"center",__unstableOnSplitAtEnd:()=>l((0,h.createBlock)((0,h.getDefaultBlockName)()))}))))},save:function(e){let{attributes:t}=e;const{textAlign:r,citation:o,value:a}=t,l=!s.RichText.isEmpty(o);return(0,n.createElement)("figure",s.useBlockProps.save({className:c()({[`has-text-align-${r}`]:r})}),(0,n.createElement)("blockquote",null,(0,n.createElement)(s.RichText.Content,{tagName:"p",value:a}),l&&(0,n.createElement)(s.RichText.Content,{tagName:"cite",value:o})))},deprecated:v},(0,R.addFilter)("blocks.registerBlockType",`statik/override/${F}`,((e,t,r)=>t===F&&(0,i.isNil)(r)?((0,u.select)("statik").getOverriddenBlocks().includes(F)||(0,u.dispatch)("statik").addOverriddenBlock(F),(0,i.merge)({},e,B,M)):e))},94184:function(e,t){var r;!function(){"use strict";var o={}.hasOwnProperty;function n(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var a=typeof r;if("string"===a||"number"===a)e.push(r);else if(Array.isArray(r)){if(r.length){var l=n.apply(null,r);l&&e.push(l)}}else if("object"===a){if(r.toString!==Object.prototype.toString&&!r.toString.toString().includes("[native code]")){e.push(r.toString());continue}for(var c in r)o.call(r,c)&&r[c]&&e.push(c)}}}return e.join(" ")}e.exports?(n.default=n,e.exports=n):void 0===(r=function(){return n}.apply(t,[]))||(e.exports=r)}()},44020:function(e){"use strict";var t="%[a-f0-9]{2}",r=new RegExp("("+t+")|([^%]+?)","gi"),o=new RegExp("("+t+")+","gi");function n(e,t){try{return[decodeURIComponent(e.join(""))]}catch(e){}if(1===e.length)return e;t=t||1;var r=e.slice(0,t),o=e.slice(t);return Array.prototype.concat.call([],n(r),n(o))}function a(e){try{return decodeURIComponent(e)}catch(a){for(var t=e.match(r)||[],o=1;o<t.length;o++)t=(e=n(t,o).join("")).match(r)||[];return e}}e.exports=function(e){if("string"!=typeof e)throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof e+"`");try{return e=e.replace(/\+/g," "),decodeURIComponent(e)}catch(t){return function(e){for(var t={"%FE%FF":"��","%FF%FE":"��"},r=o.exec(e);r;){try{t[r[0]]=decodeURIComponent(r[0])}catch(e){var n=a(r[0]);n!==r[0]&&(t[r[0]]=n)}r=o.exec(e)}t["%C2"]="�";for(var l=Object.keys(t),c=0;c<l.length;c++){var i=l[c];e=e.replace(new RegExp(i,"g"),t[i])}return e}(e)}}},92806:function(e){"use strict";e.exports=function(e,t){for(var r={},o=Object.keys(e),n=Array.isArray(t),a=0;a<o.length;a++){var l=o[a],c=e[l];(n?-1!==t.indexOf(l):t(l,c,e))&&(r[l]=c)}return r}},17563:function(e,t,r){"use strict";const o=r(70610),n=r(44020),a=r(80500),l=r(92806),c=Symbol("encodeFragmentIdentifier");function i(e){if("string"!=typeof e||1!==e.length)throw new TypeError("arrayFormatSeparator must be single character string")}function s(e,t){return t.encode?t.strict?o(e):encodeURIComponent(e):e}function u(e,t){return t.decode?n(e):e}function m(e){return Array.isArray(e)?e.sort():"object"==typeof e?m(Object.keys(e)).sort(((e,t)=>Number(e)-Number(t))).map((t=>e[t])):e}function p(e){const t=e.indexOf("#");return-1!==t&&(e=e.slice(0,t)),e}function g(e){const t=(e=p(e)).indexOf("?");return-1===t?"":e.slice(t+1)}function d(e,t){return t.parseNumbers&&!Number.isNaN(Number(e))&&"string"==typeof e&&""!==e.trim()?e=Number(e):!t.parseBooleans||null===e||"true"!==e.toLowerCase()&&"false"!==e.toLowerCase()||(e="true"===e.toLowerCase()),e}function f(e,t){i((t=Object.assign({decode:!0,sort:!0,arrayFormat:"none",arrayFormatSeparator:",",parseNumbers:!1,parseBooleans:!1},t)).arrayFormatSeparator);const r=function(e){let t;switch(e.arrayFormat){case"index":return(e,r,o)=>{t=/\[(\d*)\]$/.exec(e),e=e.replace(/\[\d*\]$/,""),t?(void 0===o[e]&&(o[e]={}),o[e][t[1]]=r):o[e]=r};case"bracket":return(e,r,o)=>{t=/(\[\])$/.exec(e),e=e.replace(/\[\]$/,""),t?void 0!==o[e]?o[e]=[].concat(o[e],r):o[e]=[r]:o[e]=r};case"colon-list-separator":return(e,r,o)=>{t=/(:list)$/.exec(e),e=e.replace(/:list$/,""),t?void 0!==o[e]?o[e]=[].concat(o[e],r):o[e]=[r]:o[e]=r};case"comma":case"separator":return(t,r,o)=>{const n="string"==typeof r&&r.includes(e.arrayFormatSeparator),a="string"==typeof r&&!n&&u(r,e).includes(e.arrayFormatSeparator);r=a?u(r,e):r;const l=n||a?r.split(e.arrayFormatSeparator).map((t=>u(t,e))):null===r?r:u(r,e);o[t]=l};case"bracket-separator":return(t,r,o)=>{const n=/(\[\])$/.test(t);if(t=t.replace(/\[\]$/,""),!n)return void(o[t]=r?u(r,e):r);const a=null===r?[]:r.split(e.arrayFormatSeparator).map((t=>u(t,e)));void 0!==o[t]?o[t]=[].concat(o[t],a):o[t]=a};default:return(e,t,r)=>{void 0!==r[e]?r[e]=[].concat(r[e],t):r[e]=t}}}(t),o=Object.create(null);if("string"!=typeof e)return o;if(!(e=e.trim().replace(/^[?#&]/,"")))return o;for(const n of e.split("&")){if(""===n)continue;let[e,l]=a(t.decode?n.replace(/\+/g," "):n,"=");l=void 0===l?null:["comma","separator","bracket-separator"].includes(t.arrayFormat)?l:u(l,t),r(u(e,t),l,o)}for(const e of Object.keys(o)){const r=o[e];if("object"==typeof r&&null!==r)for(const e of Object.keys(r))r[e]=d(r[e],t);else o[e]=d(r,t)}return!1===t.sort?o:(!0===t.sort?Object.keys(o).sort():Object.keys(o).sort(t.sort)).reduce(((e,t)=>{const r=o[t];return Boolean(r)&&"object"==typeof r&&!Array.isArray(r)?e[t]=m(r):e[t]=r,e}),Object.create(null))}t.extract=g,t.parse=f,t.stringify=(e,t)=>{if(!e)return"";i((t=Object.assign({encode:!0,strict:!0,arrayFormat:"none",arrayFormatSeparator:","},t)).arrayFormatSeparator);const r=r=>t.skipNull&&null==e[r]||t.skipEmptyString&&""===e[r],o=function(e){switch(e.arrayFormat){case"index":return t=>(r,o)=>{const n=r.length;return void 0===o||e.skipNull&&null===o||e.skipEmptyString&&""===o?r:null===o?[...r,[s(t,e),"[",n,"]"].join("")]:[...r,[s(t,e),"[",s(n,e),"]=",s(o,e)].join("")]};case"bracket":return t=>(r,o)=>void 0===o||e.skipNull&&null===o||e.skipEmptyString&&""===o?r:null===o?[...r,[s(t,e),"[]"].join("")]:[...r,[s(t,e),"[]=",s(o,e)].join("")];case"colon-list-separator":return t=>(r,o)=>void 0===o||e.skipNull&&null===o||e.skipEmptyString&&""===o?r:null===o?[...r,[s(t,e),":list="].join("")]:[...r,[s(t,e),":list=",s(o,e)].join("")];case"comma":case"separator":case"bracket-separator":{const t="bracket-separator"===e.arrayFormat?"[]=":"=";return r=>(o,n)=>void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?o:(n=null===n?"":n,0===o.length?[[s(r,e),t,s(n,e)].join("")]:[[o,s(n,e)].join(e.arrayFormatSeparator)])}default:return t=>(r,o)=>void 0===o||e.skipNull&&null===o||e.skipEmptyString&&""===o?r:null===o?[...r,s(t,e)]:[...r,[s(t,e),"=",s(o,e)].join("")]}}(t),n={};for(const t of Object.keys(e))r(t)||(n[t]=e[t]);const a=Object.keys(n);return!1!==t.sort&&a.sort(t.sort),a.map((r=>{const n=e[r];return void 0===n?"":null===n?s(r,t):Array.isArray(n)?0===n.length&&"bracket-separator"===t.arrayFormat?s(r,t)+"[]":n.reduce(o(r),[]).join("&"):s(r,t)+"="+s(n,t)})).filter((e=>e.length>0)).join("&")},t.parseUrl=(e,t)=>{t=Object.assign({decode:!0},t);const[r,o]=a(e,"#");return Object.assign({url:r.split("?")[0]||"",query:f(g(e),t)},t&&t.parseFragmentIdentifier&&o?{fragmentIdentifier:u(o,t)}:{})},t.stringifyUrl=(e,r)=>{r=Object.assign({encode:!0,strict:!0,[c]:!0},r);const o=p(e.url).split("?")[0]||"",n=t.extract(e.url),a=t.parse(n,{sort:!1}),l=Object.assign(a,e.query);let i=t.stringify(l,r);i&&(i=`?${i}`);let u=function(e){let t="";const r=e.indexOf("#");return-1!==r&&(t=e.slice(r)),t}(e.url);return e.fragmentIdentifier&&(u=`#${r[c]?s(e.fragmentIdentifier,r):e.fragmentIdentifier}`),`${o}${i}${u}`},t.pick=(e,r,o)=>{o=Object.assign({parseFragmentIdentifier:!0,[c]:!1},o);const{url:n,query:a,fragmentIdentifier:i}=t.parseUrl(e,o);return t.stringifyUrl({url:n,query:l(a,r),fragmentIdentifier:i},o)},t.exclude=(e,r,o)=>{const n=Array.isArray(r)?e=>!r.includes(e):(e,t)=>!r(e,t);return t.pick(e,n,o)}},80500:function(e){"use strict";e.exports=(e,t)=>{if("string"!=typeof e||"string"!=typeof t)throw new TypeError("Expected the arguments to be of type `string`");if(""===t)return[e];const r=e.indexOf(t);return-1===r?[e]:[e.slice(0,r),e.slice(r+t.length)]}},70610:function(e){"use strict";e.exports=e=>encodeURIComponent(e).replace(/[!'()*]/g,(e=>`%${e.charCodeAt(0).toString(16).toUpperCase()}`))}},r={};function o(e){var n=r[e];if(void 0!==n)return n.exports;var a=r[e]={exports:{}};return t[e](a,a.exports,o),a.exports}o.m=t,e=[],o.O=function(t,r,n,a){if(!r){var l=1/0;for(u=0;u<e.length;u++){r=e[u][0],n=e[u][1],a=e[u][2];for(var c=!0,i=0;i<r.length;i++)(!1&a||l>=a)&&Object.keys(o.O).every((function(e){return o.O[e](r[i])}))?r.splice(i--,1):(c=!1,a<l&&(l=a));if(c){e.splice(u--,1);var s=n();void 0!==s&&(t=s)}}return t}a=a||0;for(var u=e.length;u>0&&e[u-1][2]>a;u--)e[u]=e[u-1];e[u]=[r,n,a]},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,{a:t}),t},o.d=function(e,t){for(var r in t)o.o(t,r)&&!o.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){var e={8859:0,3240:0};o.O.j=function(t){return 0===e[t]};var t=function(t,r){var n,a,l=r[0],c=r[1],i=r[2],s=0;if(l.some((function(t){return 0!==e[t]}))){for(n in c)o.o(c,n)&&(o.m[n]=c[n]);if(i)var u=i(o)}for(t&&t(r);s<l.length;s++)a=l[s],o.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return o.O(u)},r=self.webpackChunkroot=self.webpackChunkroot||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var n=o.O(void 0,[3240],(function(){return o(96082)}));n=o.O(n)}();