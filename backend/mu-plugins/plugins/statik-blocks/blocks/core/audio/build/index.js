!function(){var e,t={5250:function(e,t,r){"use strict";var n=window.wp.element,o=(0,n.createElement)("svg",{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},(0,n.createElement)("path",{fill:"#1e1e1e",d:"M17.7 4.3c-1.2 0-2.8 0-3.8 1-.6.6-.9 1.5-.9 2.6V14c-.6-.6-1.5-1-2.5-1C8.6 13 7 14.6 7 16.5S8.6 20 10.5 20c1.5 0 2.8-1 3.3-2.3.5-.8.7-1.8.7-2.5V7.9c0-.7.2-1.2.5-1.6.6-.6 1.8-.6 2.8-.6h.3V4.3h-.4z"})),a=window.wp.blockEditor,i=[{attributes:{src:{type:"string",source:"attribute",selector:"audio",attribute:"src"},caption:{type:"string",source:"html",selector:"figcaption"},id:{type:"number"},autoplay:{type:"boolean",source:"attribute",selector:"audio",attribute:"autoplay"},loop:{type:"boolean",source:"attribute",selector:"audio",attribute:"loop"},preload:{type:"string",source:"attribute",selector:"audio",attribute:"preload"}},supports:{align:!0},save(e){let{attributes:t}=e;const{autoplay:r,caption:o,loop:i,preload:c,src:s}=t;return(0,n.createElement)("figure",null,(0,n.createElement)("audio",{controls:"controls",src:s,autoPlay:r,loop:i,preload:c}),!a.RichText.isEmpty(o)&&(0,n.createElement)(a.RichText.Content,{tagName:"figcaption",value:o}))}}],c=r(94184),s=r.n(c),l=window.wp.blob,u=window.wp.components,p=window.wp.i18n,d=window.wp.data,f=window.wp.primitives,m=(0,n.createElement)(f.SVG,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},(0,n.createElement)(f.Path,{d:"M17.7 4.3c-1.2 0-2.8 0-3.8 1-.6.6-.9 1.5-.9 2.6V14c-.6-.6-1.5-1-2.5-1C8.6 13 7 14.6 7 16.5S8.6 20 10.5 20c1.5 0 2.8-1 3.3-2.3.5-.8.7-1.8.7-2.5V7.9c0-.7.2-1.2.5-1.6.6-.6 1.8-.6 2.8-.6h.3V4.3h-.4z"})),g=window.wp.blocks,y=window.wp.notices;const v=[{ratio:"2.33",className:"wp-embed-aspect-21-9"},{ratio:"2.00",className:"wp-embed-aspect-18-9"},{ratio:"1.78",className:"wp-embed-aspect-16-9"},{ratio:"1.33",className:"wp-embed-aspect-4-3"},{ratio:"1.00",className:"wp-embed-aspect-1-1"},{ratio:"0.56",className:"wp-embed-aspect-9-16"},{ratio:"0.50",className:"wp-embed-aspect-1-2"}],b="wp-embed";var h=window.lodash,w=r(51991),x=r.n(w),k=r(59588),E=r.n(k),S=JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"core/embed","title":"Embed","category":"embed","description":"Add a block that displays content pulled from other sites, like Twitter or YouTube.","textdomain":"default","attributes":{"url":{"type":"string"},"caption":{"type":"string","source":"html","selector":"figcaption"},"type":{"type":"string"},"providerNameSlug":{"type":"string"},"allowResponsive":{"type":"boolean","default":true},"responsive":{"type":"boolean","default":false},"previewable":{"type":"boolean","default":true}},"supports":{"align":true},"editorStyle":"file:./build/index.css","style":"file:./build/style-index.css"}');const{name:j}=S,O=e=>(0,g.getBlockVariations)(j)?.find((t=>{let{patterns:r}=t;return function(e){return(arguments.length>1&&void 0!==arguments[1]?arguments[1]:[]).some((t=>e.match(t)))}(e,r)})),N=e=>e&&e.includes('class="wp-embedded-content"'),_=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const{preview:r,attributes:n={}}=e,{url:o,providerNameSlug:a,type:i,...c}=n;if(!o||!(0,g.getBlockType)(j))return;const s=O(o),l="wordpress"===a||i===b;if(!l&&s&&(s.attributes.providerNameSlug!==a||!a))return(0,g.createBlock)(j,{url:o,...c,...s.attributes});const u=(0,g.getBlockVariations)(j)?.find((e=>{let{name:t}=e;return"wordpress"===t}));return u&&r&&N(r.html)&&!l?(0,g.createBlock)(j,{url:o,...u.attributes,...t}):void 0},A=e=>{if(!e)return e;const t=v.reduce(((e,t)=>{let{className:r}=t;return e[r]=!1,e}),{"wp-has-aspect-ratio":!1});return x()(e,t)};E()((function(e,t,r,n){let o=!(arguments.length>4&&void 0!==arguments[4])||arguments[4];if(!e)return{};const a={};let{type:i="rich"}=e;const{html:c,provider_name:s}=e,l=(0,h.kebabCase)((s||t).toLowerCase());return N(c)&&(i=b),(c||"photo"===i)&&(a.type=i,a.providerNameSlug=l),a.className=function(e,t){if(arguments.length>2&&void 0!==arguments[2]&&!arguments[2])return A(t);const r=document.implementation.createHTMLDocument("");r.body.innerHTML=e;const n=r.body.querySelector("iframe");if(n&&n.height&&n.width){const e=(n.width/n.height).toFixed(2);for(let r=0;r<v.length;r++){const n=v[r];if(e>=n.ratio)return e-n.ratio>.1?A(t):x()(A(t),n.className,"wp-has-aspect-ratio")}}return t}(c,r,n&&o),a}));const B=["audio"];var C=JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"core/audio","title":"Audio","category":"media","description":"Embed a simple audio player.","keywords":["music","sound","podcast","recording"],"textdomain":"default","attributes":{"src":{"type":"string","source":"attribute","selector":"audio","attribute":"src","__experimentalRole":"content"},"caption":{"type":"string","source":"html","selector":"figcaption","__experimentalRole":"content"},"id":{"type":"number","__experimentalRole":"content"},"autoplay":{"type":"boolean","source":"attribute","selector":"audio","attribute":"autoplay"},"loop":{"type":"boolean","source":"attribute","selector":"audio","attribute":"loop"},"preload":{"type":"string","source":"attribute","selector":"audio","attribute":"preload"}},"supports":{"anchor":true,"align":true,"spacing":{"margin":true,"padding":true}},"editorScript":"file:./build/index.js","editorStyle":"file:./build/index.css","style":"file:./build/style-index.css"}'),F={from:[{type:"files",isMatch(e){return 1===e.length&&0===e[0].type.indexOf("audio/")},transform(e){const t=e[0];return(0,g.createBlock)("core/audio",{src:(0,l.createBlobURL)(t)})}},{type:"shortcode",tag:"audio",attributes:{src:{type:"string",shortcode:e=>{let{named:{src:t,mp3:r,m4a:n,ogg:o,wav:a,wma:i}}=e;return t||r||n||o||a||i}},loop:{type:"string",shortcode:e=>{let{named:{loop:t}}=e;return t}},autoplay:{type:"string",shortcode:e=>{let{named:{autoplay:t}}=e;return t}},preload:{type:"string",shortcode:e=>{let{named:{preload:t}}=e;return t}}}}]};function R(){return R=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},R.apply(this,arguments)}function V(e){var t,r,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=V(e[t]))&&(n&&(n+=" "),n+=r);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}var I=function(){for(var e,t,r=0,n="";r<arguments.length;)(e=arguments[r++])&&(t=V(e))&&(n&&(n+=" "),n+=t);return n};function T(e){const{tag:t="div",className:r,children:o,...a}=e;return(0,n.createElement)(t,{className:I("skeleton",r),...a},[o,(0,n.createElement)("span",{key:"skeleton-activity",className:"skeleton__activity"},(0,n.createElement)("span",null))])}T.Inline=function(e){return(0,n.createElement)(T,R({tag:"span"},e))},T.Text=function(e){const{tag:t="div",children:r,...o}=e,a=[r].flat().filter((e=>"string"==typeof e)).map((e=>e.split(" ").map(((e,t)=>(0,n.createElement)(n.Fragment,{key:t},(0,n.createElement)(T.Inline,o,e)," ")))));return(0,n.createElement)(t,{},a.flat())},r(17563),window.wp.keycodes;var U=(0,n.createElement)(f.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,n.createElement)(f.Path,{d:"M12 4.75a7.25 7.25 0 100 14.5 7.25 7.25 0 000-14.5zM3.25 12a8.75 8.75 0 1117.5 0 8.75 8.75 0 01-17.5 0zM12 8.75a1.5 1.5 0 01.167 2.99c-.465.052-.917.44-.917 1.01V14h1.5v-.845A3 3 0 109 10.25h1.5a1.5 1.5 0 011.5-1.5zM11.25 15v1.5h1.5V15h-1.5z"})),P=(0,n.createElement)(f.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,n.createElement)(f.Path,{d:"M20.5 16h-.7V8c0-1.1-.9-2-2-2H6.2c-1.1 0-2 .9-2 2v8h-.7c-.8 0-1.5.7-1.5 1.5h20c0-.8-.7-1.5-1.5-1.5zM5.7 8c0-.3.2-.5.5-.5h11.6c.3 0 .5.2.5.5v7.6H5.7V8z"})),M=(0,n.createElement)(f.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,n.createElement)(f.Path,{d:"M17 4H7c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm.5 14c0 .3-.2.5-.5.5H7c-.3 0-.5-.2-.5-.5V6c0-.3.2-.5.5-.5h10c.3 0 .5.2.5.5v12zm-7.5-.5h4V16h-4v1.5z"})),$=(0,n.createElement)(f.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,n.createElement)(f.Path,{d:"M15 4H9c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h6c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm.5 14c0 .3-.2.5-.5.5H9c-.3 0-.5-.2-.5-.5V6c0-.3.2-.5.5-.5h6c.3 0 .5.2.5.5v12zm-4.5-.5h2V16h-2v1.5z"})),z=window.wp.hooks;(0,n.createElement)(u.Icon,{icon:U}),(0,n.createElement)(u.Icon,{icon:P}),(0,n.createElement)(u.Icon,{icon:M}),(0,n.createElement)(u.Icon,{icon:$}),(0,n.createElement)(f.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,n.createElement)(f.Path,{d:"M15.742 7.009a2.823 2.823 0 0 0-1.351-1.039 4.492 4.492 0 0 0-1.753-.345 4.692 4.692 0 0 0-1.076.123 3.075 3.075 0 0 0-.927.396 2.088 2.088 0 0 0-.65.716c-.166.28-.25.618-.25 1.013 0 .593.208 1.046.626 1.36.417.312.934.584 1.551.815a29.17 29.17 0 0 0 2.028.667c.734.214 1.41.51 2.028.89a4.984 4.984 0 0 1 1.551 1.507c.418.626.626 1.458.626 2.496 0 .938-.175 1.762-.526 2.47a4.998 4.998 0 0 1-1.426 1.73 6.001 6.001 0 0 1-2.053 1.038c-.785.23-1.61.346-2.478.346a9.407 9.407 0 0 1-3.179-.544c-1.018-.362-1.894-.972-2.628-1.828l2.378-2.274a4.085 4.085 0 0 0 1.502 1.36 4.466 4.466 0 0 0 2.002.468c.367 0 .735-.049 1.101-.147a3.428 3.428 0 0 0 1.002-.445 2.38 2.38 0 0 0 .725-.741 2.061 2.061 0 0 0 .276-1.063c0-.643-.208-1.137-.626-1.483-.417-.346-.934-.634-1.552-.864a22.188 22.188 0 0 0-2.028-.693 8.923 8.923 0 0 1-2.026-.864 5.092 5.092 0 0 1-1.553-1.482c-.417-.627-.625-1.458-.625-2.496 0-.906.184-1.689.55-2.347A5.17 5.17 0 0 1 8.46 4.118a6.481 6.481 0 0 1 2.102-.99 9.079 9.079 0 0 1 2.403-.32c.934 0 1.835.14 2.703.42.884.28 1.677.741 2.377 1.384l-2.302 2.397z"}));const{name:L}=C;var G,H,q;G=L,H=C,q={icon:o,example:{attributes:{src:"https://upload.wikimedia.org/wikipedia/commons/d/dd/Armstrong_Small_Step.ogg"}},transforms:F,deprecated:i,edit:function(e){let{attributes:t,className:r,setAttributes:o,onReplace:i,isSelected:c,insertBlocksAfter:f}=e;const{id:v,autoplay:b,caption:h,loop:w,preload:x,src:k}=t,E=!v&&(0,l.isBlobURL)(k),S=(0,d.useSelect)((e=>{const{getSettings:t}=e(a.store);return t().mediaUpload}),[]);function j(e){return t=>{o({[e]:t})}}function O(e){if(e!==k){const t=_({attributes:{url:e}});if(void 0!==t&&i)return void i(t);o({src:e,id:void 0})}}(0,n.useEffect)((()=>{if(!v&&(0,l.isBlobURL)(k)){const e=(0,l.getBlobByURL)(k);e&&S({filesList:[e],onFileChange:e=>{let[t]=e;return C(t)},onError:e=>A(e),allowedTypes:B})}}),[]);const{createErrorNotice:N}=(0,d.useDispatch)(y.store);function A(e){N(e,{type:"snackbar"})}function C(e){e&&e.url?o({src:e.url,id:e.id}):o({src:void 0,id:void 0})}const F=s()(r,{"is-transient":E}),R=(0,a.useBlockProps)({className:F});return k?(0,n.createElement)(n.Fragment,null,(0,n.createElement)(a.BlockControls,{group:"other"},(0,n.createElement)(a.MediaReplaceFlow,{mediaId:v,mediaURL:k,allowedTypes:B,accept:"audio/*",onSelect:C,onSelectURL:O,onError:A})),(0,n.createElement)(a.InspectorControls,null,(0,n.createElement)(u.PanelBody,{title:(0,p.__)("Settings")},(0,n.createElement)(u.ToggleControl,{label:(0,p.__)("Autoplay"),onChange:j("autoplay"),checked:b,help:function(e){return e?(0,p.__)("Autoplay may cause usability issues for some users."):null}}),(0,n.createElement)(u.ToggleControl,{label:(0,p.__)("Loop"),onChange:j("loop"),checked:w}),(0,n.createElement)(u.SelectControl,{label:(0,p._x)("Preload","noun; Audio block parameter"),value:x||"",onChange:e=>o({preload:e||void 0}),options:[{value:"",label:(0,p.__)("Browser default")},{value:"auto",label:(0,p.__)("Auto")},{value:"metadata",label:(0,p.__)("Metadata")},{value:"none",label:(0,p._x)("None","Preload value")}]}))),(0,n.createElement)("figure",R,(0,n.createElement)(u.Disabled,{isDisabled:!c},(0,n.createElement)("audio",{controls:"controls",src:k})),E&&(0,n.createElement)(u.Spinner,null),(!a.RichText.isEmpty(h)||c)&&(0,n.createElement)(a.RichText,{tagName:"figcaption",className:(0,a.__experimentalGetElementClassName)("caption"),"aria-label":(0,p.__)("Audio caption text"),placeholder:(0,p.__)("Add caption"),value:h,onChange:e=>o({caption:e}),inlineToolbar:!0,__unstableOnSplitAtEnd:()=>f((0,g.createBlock)((0,g.getDefaultBlockName)()))}))):(0,n.createElement)("div",R,(0,n.createElement)(a.MediaPlaceholder,{icon:(0,n.createElement)(a.BlockIcon,{icon:m}),onSelect:C,onSelectURL:O,accept:"audio/*",allowedTypes:B,value:t,onError:A}))},save:function(e){let{attributes:t}=e;const{autoplay:r,caption:o,loop:i,preload:c,src:s}=t;return s&&(0,n.createElement)("figure",a.useBlockProps.save(),(0,n.createElement)("audio",{controls:"controls",src:s,autoPlay:r,loop:i,preload:c}),!a.RichText.isEmpty(o)&&(0,n.createElement)(a.RichText.Content,{tagName:"figcaption",value:o,className:(0,a.__experimentalGetElementClassName)("caption")}))}},(0,z.addFilter)("blocks.registerBlockType",`statik/override/${G}`,((e,t,r)=>t===G&&(0,h.isNil)(r)?((0,d.select)("statik").getOverriddenBlocks().includes(G)||(0,d.dispatch)("statik").addOverriddenBlock(G),(0,h.merge)({},e,H,q)):e))},51991:function(e,t){var r;!function(){"use strict";var n=function(){function e(){}function t(e,t){for(var r=t.length,n=0;n<r;++n)o(e,t[n])}e.prototype=Object.create(null);var r={}.hasOwnProperty,n=/\s+/;function o(e,o){if(o){var a=typeof o;"string"===a?function(e,t){for(var r=t.split(n),o=r.length,a=0;a<o;++a)e[r[a]]=!0}(e,o):Array.isArray(o)?t(e,o):"object"===a?function(e,t){if(t.toString===Object.prototype.toString||t.toString.toString().includes("[native code]"))for(var n in t)r.call(t,n)&&(e[n]=!!t[n]);else e[t.toString()]=!0}(e,o):"number"===a&&function(e,t){e[t]=!0}(e,o)}}return function(){for(var r=arguments.length,n=Array(r),o=0;o<r;o++)n[o]=arguments[o];var a=new e;t(a,n);var i=[];for(var c in a)a[c]&&i.push(c);return i.join(" ")}}();e.exports?(n.default=n,e.exports=n):void 0===(r=function(){return n}.apply(t,[]))||(e.exports=r)}()},94184:function(e,t){var r;!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var a=typeof r;if("string"===a||"number"===a)e.push(r);else if(Array.isArray(r)){if(r.length){var i=o.apply(null,r);i&&e.push(i)}}else if("object"===a){if(r.toString!==Object.prototype.toString&&!r.toString.toString().includes("[native code]")){e.push(r.toString());continue}for(var c in r)n.call(r,c)&&r[c]&&e.push(c)}}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(r=function(){return o}.apply(t,[]))||(e.exports=r)}()},44020:function(e){"use strict";var t="%[a-f0-9]{2}",r=new RegExp("("+t+")|([^%]+?)","gi"),n=new RegExp("("+t+")+","gi");function o(e,t){try{return[decodeURIComponent(e.join(""))]}catch(e){}if(1===e.length)return e;t=t||1;var r=e.slice(0,t),n=e.slice(t);return Array.prototype.concat.call([],o(r),o(n))}function a(e){try{return decodeURIComponent(e)}catch(a){for(var t=e.match(r)||[],n=1;n<t.length;n++)t=(e=o(t,n).join("")).match(r)||[];return e}}e.exports=function(e){if("string"!=typeof e)throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof e+"`");try{return e=e.replace(/\+/g," "),decodeURIComponent(e)}catch(t){return function(e){for(var t={"%FE%FF":"��","%FF%FE":"��"},r=n.exec(e);r;){try{t[r[0]]=decodeURIComponent(r[0])}catch(e){var o=a(r[0]);o!==r[0]&&(t[r[0]]=o)}r=n.exec(e)}t["%C2"]="�";for(var i=Object.keys(t),c=0;c<i.length;c++){var s=i[c];e=e.replace(new RegExp(s,"g"),t[s])}return e}(e)}}},92806:function(e){"use strict";e.exports=function(e,t){for(var r={},n=Object.keys(e),o=Array.isArray(t),a=0;a<n.length;a++){var i=n[a],c=e[i];(o?-1!==t.indexOf(i):t(i,c,e))&&(r[i]=c)}return r}},59588:function(e){e.exports=function(e,t){var r,n,o=0;function a(){var a,i,c=r,s=arguments.length;e:for(;c;){if(c.args.length===arguments.length){for(i=0;i<s;i++)if(c.args[i]!==arguments[i]){c=c.next;continue e}return c!==r&&(c===n&&(n=c.prev),c.prev.next=c.next,c.next&&(c.next.prev=c.prev),c.next=r,c.prev=null,r.prev=c,r=c),c.val}c=c.next}for(a=new Array(s),i=0;i<s;i++)a[i]=arguments[i];return c={args:a,val:e.apply(null,a)},r?(r.prev=c,c.next=r):n=c,o===t.maxSize?(n=n.prev).next=null:o++,r=c,c.val}return t=t||{},a.clear=function(){r=null,n=null,o=0},a}},17563:function(e,t,r){"use strict";const n=r(70610),o=r(44020),a=r(80500),i=r(92806),c=Symbol("encodeFragmentIdentifier");function s(e){if("string"!=typeof e||1!==e.length)throw new TypeError("arrayFormatSeparator must be single character string")}function l(e,t){return t.encode?t.strict?n(e):encodeURIComponent(e):e}function u(e,t){return t.decode?o(e):e}function p(e){return Array.isArray(e)?e.sort():"object"==typeof e?p(Object.keys(e)).sort(((e,t)=>Number(e)-Number(t))).map((t=>e[t])):e}function d(e){const t=e.indexOf("#");return-1!==t&&(e=e.slice(0,t)),e}function f(e){const t=(e=d(e)).indexOf("?");return-1===t?"":e.slice(t+1)}function m(e,t){return t.parseNumbers&&!Number.isNaN(Number(e))&&"string"==typeof e&&""!==e.trim()?e=Number(e):!t.parseBooleans||null===e||"true"!==e.toLowerCase()&&"false"!==e.toLowerCase()||(e="true"===e.toLowerCase()),e}function g(e,t){s((t=Object.assign({decode:!0,sort:!0,arrayFormat:"none",arrayFormatSeparator:",",parseNumbers:!1,parseBooleans:!1},t)).arrayFormatSeparator);const r=function(e){let t;switch(e.arrayFormat){case"index":return(e,r,n)=>{t=/\[(\d*)\]$/.exec(e),e=e.replace(/\[\d*\]$/,""),t?(void 0===n[e]&&(n[e]={}),n[e][t[1]]=r):n[e]=r};case"bracket":return(e,r,n)=>{t=/(\[\])$/.exec(e),e=e.replace(/\[\]$/,""),t?void 0!==n[e]?n[e]=[].concat(n[e],r):n[e]=[r]:n[e]=r};case"colon-list-separator":return(e,r,n)=>{t=/(:list)$/.exec(e),e=e.replace(/:list$/,""),t?void 0!==n[e]?n[e]=[].concat(n[e],r):n[e]=[r]:n[e]=r};case"comma":case"separator":return(t,r,n)=>{const o="string"==typeof r&&r.includes(e.arrayFormatSeparator),a="string"==typeof r&&!o&&u(r,e).includes(e.arrayFormatSeparator);r=a?u(r,e):r;const i=o||a?r.split(e.arrayFormatSeparator).map((t=>u(t,e))):null===r?r:u(r,e);n[t]=i};case"bracket-separator":return(t,r,n)=>{const o=/(\[\])$/.test(t);if(t=t.replace(/\[\]$/,""),!o)return void(n[t]=r?u(r,e):r);const a=null===r?[]:r.split(e.arrayFormatSeparator).map((t=>u(t,e)));void 0!==n[t]?n[t]=[].concat(n[t],a):n[t]=a};default:return(e,t,r)=>{void 0!==r[e]?r[e]=[].concat(r[e],t):r[e]=t}}}(t),n=Object.create(null);if("string"!=typeof e)return n;if(!(e=e.trim().replace(/^[?#&]/,"")))return n;for(const o of e.split("&")){if(""===o)continue;let[e,i]=a(t.decode?o.replace(/\+/g," "):o,"=");i=void 0===i?null:["comma","separator","bracket-separator"].includes(t.arrayFormat)?i:u(i,t),r(u(e,t),i,n)}for(const e of Object.keys(n)){const r=n[e];if("object"==typeof r&&null!==r)for(const e of Object.keys(r))r[e]=m(r[e],t);else n[e]=m(r,t)}return!1===t.sort?n:(!0===t.sort?Object.keys(n).sort():Object.keys(n).sort(t.sort)).reduce(((e,t)=>{const r=n[t];return Boolean(r)&&"object"==typeof r&&!Array.isArray(r)?e[t]=p(r):e[t]=r,e}),Object.create(null))}t.extract=f,t.parse=g,t.stringify=(e,t)=>{if(!e)return"";s((t=Object.assign({encode:!0,strict:!0,arrayFormat:"none",arrayFormatSeparator:","},t)).arrayFormatSeparator);const r=r=>t.skipNull&&null==e[r]||t.skipEmptyString&&""===e[r],n=function(e){switch(e.arrayFormat){case"index":return t=>(r,n)=>{const o=r.length;return void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?r:null===n?[...r,[l(t,e),"[",o,"]"].join("")]:[...r,[l(t,e),"[",l(o,e),"]=",l(n,e)].join("")]};case"bracket":return t=>(r,n)=>void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?r:null===n?[...r,[l(t,e),"[]"].join("")]:[...r,[l(t,e),"[]=",l(n,e)].join("")];case"colon-list-separator":return t=>(r,n)=>void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?r:null===n?[...r,[l(t,e),":list="].join("")]:[...r,[l(t,e),":list=",l(n,e)].join("")];case"comma":case"separator":case"bracket-separator":{const t="bracket-separator"===e.arrayFormat?"[]=":"=";return r=>(n,o)=>void 0===o||e.skipNull&&null===o||e.skipEmptyString&&""===o?n:(o=null===o?"":o,0===n.length?[[l(r,e),t,l(o,e)].join("")]:[[n,l(o,e)].join(e.arrayFormatSeparator)])}default:return t=>(r,n)=>void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?r:null===n?[...r,l(t,e)]:[...r,[l(t,e),"=",l(n,e)].join("")]}}(t),o={};for(const t of Object.keys(e))r(t)||(o[t]=e[t]);const a=Object.keys(o);return!1!==t.sort&&a.sort(t.sort),a.map((r=>{const o=e[r];return void 0===o?"":null===o?l(r,t):Array.isArray(o)?0===o.length&&"bracket-separator"===t.arrayFormat?l(r,t)+"[]":o.reduce(n(r),[]).join("&"):l(r,t)+"="+l(o,t)})).filter((e=>e.length>0)).join("&")},t.parseUrl=(e,t)=>{t=Object.assign({decode:!0},t);const[r,n]=a(e,"#");return Object.assign({url:r.split("?")[0]||"",query:g(f(e),t)},t&&t.parseFragmentIdentifier&&n?{fragmentIdentifier:u(n,t)}:{})},t.stringifyUrl=(e,r)=>{r=Object.assign({encode:!0,strict:!0,[c]:!0},r);const n=d(e.url).split("?")[0]||"",o=t.extract(e.url),a=t.parse(o,{sort:!1}),i=Object.assign(a,e.query);let s=t.stringify(i,r);s&&(s=`?${s}`);let u=function(e){let t="";const r=e.indexOf("#");return-1!==r&&(t=e.slice(r)),t}(e.url);return e.fragmentIdentifier&&(u=`#${r[c]?l(e.fragmentIdentifier,r):e.fragmentIdentifier}`),`${n}${s}${u}`},t.pick=(e,r,n)=>{n=Object.assign({parseFragmentIdentifier:!0,[c]:!1},n);const{url:o,query:a,fragmentIdentifier:s}=t.parseUrl(e,n);return t.stringifyUrl({url:o,query:i(a,r),fragmentIdentifier:s},n)},t.exclude=(e,r,n)=>{const o=Array.isArray(r)?e=>!r.includes(e):(e,t)=>!r(e,t);return t.pick(e,o,n)}},80500:function(e){"use strict";e.exports=(e,t)=>{if("string"!=typeof e||"string"!=typeof t)throw new TypeError("Expected the arguments to be of type `string`");if(""===t)return[e];const r=e.indexOf(t);return-1===r?[e]:[e.slice(0,r),e.slice(r+t.length)]}},70610:function(e){"use strict";e.exports=e=>encodeURIComponent(e).replace(/[!'()*]/g,(e=>`%${e.charCodeAt(0).toString(16).toUpperCase()}`))}},r={};function n(e){var o=r[e];if(void 0!==o)return o.exports;var a=r[e]={exports:{}};return t[e](a,a.exports,n),a.exports}n.m=t,e=[],n.O=function(t,r,o,a){if(!r){var i=1/0;for(u=0;u<e.length;u++){r=e[u][0],o=e[u][1],a=e[u][2];for(var c=!0,s=0;s<r.length;s++)(!1&a||i>=a)&&Object.keys(n.O).every((function(e){return n.O[e](r[s])}))?r.splice(s--,1):(c=!1,a<i&&(i=a));if(c){e.splice(u--,1);var l=o();void 0!==l&&(t=l)}}return t}a=a||0;for(var u=e.length;u>0&&e[u-1][2]>a;u--)e[u]=e[u-1];e[u]=[r,o,a]},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,{a:t}),t},n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){var e={9702:0,5497:0};n.O.j=function(t){return 0===e[t]};var t=function(t,r){var o,a,i=r[0],c=r[1],s=r[2],l=0;if(i.some((function(t){return 0!==e[t]}))){for(o in c)n.o(c,o)&&(n.m[o]=c[o]);if(s)var u=s(n)}for(t&&t(r);l<i.length;l++)a=i[l],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(u)},r=self.webpackChunkroot=self.webpackChunkroot||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var o=n.O(void 0,[5497],(function(){return n(5250)}));o=n.O(o)}();