(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{8357:function(e,t,r){"use strict";r.d(t,{Z:function(){return oe}});var n=function(){function e(e){var t=this;this._insertTag=function(e){var r;r=0===t.tags.length?t.insertionPoint?t.insertionPoint.nextSibling:t.prepend?t.container.firstChild:t.before:t.tags[t.tags.length-1].nextSibling,t.container.insertBefore(e,r),t.tags.push(e)},this.isSpeedy=void 0===e.speedy||e.speedy,this.tags=[],this.ctr=0,this.nonce=e.nonce,this.key=e.key,this.container=e.container,this.prepend=e.prepend,this.insertionPoint=e.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(e){e.forEach(this._insertTag)},t.insert=function(e){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(function(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),void 0!==e.nonce&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}(this));var t=this.tags[this.tags.length-1];if(this.isSpeedy){var r=function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}(t);try{r.insertRule(e,r.cssRules.length)}catch(n){0}}else t.appendChild(document.createTextNode(e));this.ctr++},t.flush=function(){this.tags.forEach((function(e){return e.parentNode&&e.parentNode.removeChild(e)})),this.tags=[],this.ctr=0},e}(),o=Math.abs,i=String.fromCharCode,a=Object.assign;function c(e){return e.trim()}function s(e,t,r){return e.replace(t,r)}function u(e,t){return e.indexOf(t)}function l(e,t){return 0|e.charCodeAt(t)}function f(e,t,r){return e.slice(t,r)}function p(e){return e.length}function d(e){return e.length}function y(e,t){return t.push(e),e}var h=1,m=1,v=0,b=0,g=0,w="";function S(e,t,r,n,o,i,a){return{value:e,root:t,parent:r,type:n,props:o,children:i,line:h,column:m,length:a,return:""}}function x(e,t){return a(S("",null,null,"",null,null,0),e,{length:-e.length},t)}function k(){return g=b>0?l(w,--b):0,m--,10===g&&(m=1,h--),g}function O(){return g=b<v?l(w,b++):0,m++,10===g&&(m=1,h++),g}function E(){return l(w,b)}function P(){return b}function C(e,t){return f(w,e,t)}function A(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function _(e){return h=m=1,v=p(w=e),b=0,[]}function $(e){return w="",e}function j(e){return c(C(b-1,R(91===e?e+2:40===e?e+1:e)))}function T(e){for(;(g=E())&&g<33;)O();return A(e)>2||A(g)>3?"":" "}function N(e,t){for(;--t&&O()&&!(g<48||g>102||g>57&&g<65||g>70&&g<97););return C(e,P()+(t<6&&32==E()&&32==O()))}function R(e){for(;O();)switch(g){case e:return b;case 34:case 39:34!==e&&39!==e&&R(g);break;case 40:41===e&&R(e);break;case 92:O()}return b}function I(e,t){for(;O()&&e+g!==57&&(e+g!==84||47!==E()););return"/*"+C(t,b-1)+"*"+i(47===e?e:O())}function M(e){for(;!A(E());)O();return C(e,b)}var D="-ms-",L="-moz-",z="-webkit-",U="comm",H="rule",Z="decl",F="@keyframes";function W(e,t){for(var r="",n=d(e),o=0;o<n;o++)r+=t(e[o],o,e,t)||"";return r}function V(e,t,r,n){switch(e.type){case"@import":case Z:return e.return=e.return||e.value;case U:return"";case F:return e.return=e.value+"{"+W(e.children,n)+"}";case H:e.value=e.props.join(",")}return p(r=W(e.children,n))?e.return=e.value+"{"+r+"}":""}function q(e,t){switch(function(e,t){return(((t<<2^l(e,0))<<2^l(e,1))<<2^l(e,2))<<2^l(e,3)}(e,t)){case 5103:return z+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return z+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return z+e+L+e+D+e+e;case 6828:case 4268:return z+e+D+e+e;case 6165:return z+e+D+"flex-"+e+e;case 5187:return z+e+s(e,/(\w+).+(:[^]+)/,"-webkit-box-$1$2-ms-flex-$1$2")+e;case 5443:return z+e+D+"flex-item-"+s(e,/flex-|-self/,"")+e;case 4675:return z+e+D+"flex-line-pack"+s(e,/align-content|flex-|-self/,"")+e;case 5548:return z+e+D+s(e,"shrink","negative")+e;case 5292:return z+e+D+s(e,"basis","preferred-size")+e;case 6060:return z+"box-"+s(e,"-grow","")+z+e+D+s(e,"grow","positive")+e;case 4554:return z+s(e,/([^-])(transform)/g,"$1-webkit-$2")+e;case 6187:return s(s(s(e,/(zoom-|grab)/,z+"$1"),/(image-set)/,z+"$1"),e,"")+e;case 5495:case 3959:return s(e,/(image-set\([^]*)/,z+"$1$`$1");case 4968:return s(s(e,/(.+:)(flex-)?(.*)/,"-webkit-box-pack:$3-ms-flex-pack:$3"),/s.+-b[^;]+/,"justify")+z+e+e;case 4095:case 3583:case 4068:case 2532:return s(e,/(.+)-inline(.+)/,z+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(p(e)-1-t>6)switch(l(e,t+1)){case 109:if(45!==l(e,t+4))break;case 102:return s(e,/(.+:)(.+)-([^]+)/,"$1-webkit-$2-$3$1"+L+(108==l(e,t+3)?"$3":"$2-$3"))+e;case 115:return~u(e,"stretch")?q(s(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(115!==l(e,t+1))break;case 6444:switch(l(e,p(e)-3-(~u(e,"!important")&&10))){case 107:return s(e,":",":"+z)+e;case 101:return s(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+z+(45===l(e,14)?"inline-":"")+"box$3$1"+z+"$2$3$1"+D+"$2box$3")+e}break;case 5936:switch(l(e,t+11)){case 114:return z+e+D+s(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return z+e+D+s(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return z+e+D+s(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return z+e+D+e+e}return e}function B(e){return $(G("",null,null,null,[""],e=_(e),0,[0],e))}function G(e,t,r,n,o,a,c,l,f){for(var d=0,h=0,m=c,v=0,b=0,g=0,w=1,S=1,x=1,C=0,A="",_=o,$=a,R=n,D=A;S;)switch(g=C,C=O()){case 40:if(108!=g&&58==D.charCodeAt(m-1)){-1!=u(D+=s(j(C),"&","&\f"),"&\f")&&(x=-1);break}case 34:case 39:case 91:D+=j(C);break;case 9:case 10:case 13:case 32:D+=T(g);break;case 92:D+=N(P()-1,7);continue;case 47:switch(E()){case 42:case 47:y(X(I(O(),P()),t,r),f);break;default:D+="/"}break;case 123*w:l[d++]=p(D)*x;case 125*w:case 59:case 0:switch(C){case 0:case 125:S=0;case 59+h:b>0&&p(D)-m&&y(b>32?K(D+";",n,r,m-1):K(s(D," ","")+";",n,r,m-2),f);break;case 59:D+=";";default:if(y(R=Y(D,t,r,d,h,o,l,A,_=[],$=[],m),a),123===C)if(0===h)G(D,t,R,R,_,a,m,l,$);else switch(v){case 100:case 109:case 115:G(e,R,R,n&&y(Y(e,R,R,0,0,o,l,A,o,_=[],m),$),o,$,m,l,n?_:$);break;default:G(D,R,R,R,[""],$,0,l,$)}}d=h=b=0,w=x=1,A=D="",m=c;break;case 58:m=1+p(D),b=g;default:if(w<1)if(123==C)--w;else if(125==C&&0==w++&&125==k())continue;switch(D+=i(C),C*w){case 38:x=h>0?1:(D+="\f",-1);break;case 44:l[d++]=(p(D)-1)*x,x=1;break;case 64:45===E()&&(D+=j(O())),v=E(),h=m=p(A=D+=M(P())),C++;break;case 45:45===g&&2==p(D)&&(w=0)}}return a}function Y(e,t,r,n,i,a,u,l,p,y,h){for(var m=i-1,v=0===i?a:[""],b=d(v),g=0,w=0,x=0;g<n;++g)for(var k=0,O=f(e,m+1,m=o(w=u[g])),E=e;k<b;++k)(E=c(w>0?v[k]+" "+O:s(O,/&\f/g,v[k])))&&(p[x++]=E);return S(e,t,r,0===i?H:l,p,y,h)}function X(e,t,r){return S(e,t,r,U,i(g),f(e,2,-2),0)}function K(e,t,r,n){return S(e,t,r,Z,f(e,0,n),f(e,n+1,-1),n)}var Q=function(e,t,r){for(var n=0,o=0;n=o,o=E(),38===n&&12===o&&(t[r]=1),!A(o);)O();return C(e,b)},J=function(e,t){return $(function(e,t){var r=-1,n=44;do{switch(A(n)){case 0:38===n&&12===E()&&(t[r]=1),e[r]+=Q(b-1,t,r);break;case 2:e[r]+=j(n);break;case 4:if(44===n){e[++r]=58===E()?"&\f":"",t[r]=e[r].length;break}default:e[r]+=i(n)}}while(n=O());return e}(_(e),t))},ee=new WeakMap,te=function(e){if("rule"===e.type&&e.parent&&!(e.length<1)){for(var t=e.value,r=e.parent,n=e.column===r.column&&e.line===r.line;"rule"!==r.type;)if(!(r=r.parent))return;if((1!==e.props.length||58===t.charCodeAt(0)||ee.get(r))&&!n){ee.set(e,!0);for(var o=[],i=J(t,o),a=r.props,c=0,s=0;c<i.length;c++)for(var u=0;u<a.length;u++,s++)e.props[s]=o[c]?i[c].replace(/&\f/g,a[u]):a[u]+" "+i[c]}}},re=function(e){if("decl"===e.type){var t=e.value;108===t.charCodeAt(0)&&98===t.charCodeAt(2)&&(e.return="",e.value="")}},ne=[function(e,t,r,n){if(e.length>-1&&!e.return)switch(e.type){case Z:e.return=q(e.value,e.length);break;case F:return W([x(e,{value:s(e.value,"@","@"+z)})],n);case H:if(e.length)return function(e,t){return e.map(t).join("")}(e.props,(function(t){switch(function(e,t){return(e=t.exec(e))?e[0]:e}(t,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return W([x(e,{props:[s(t,/:(read-\w+)/,":-moz-$1")]})],n);case"::placeholder":return W([x(e,{props:[s(t,/:(plac\w+)/,":-webkit-input-$1")]}),x(e,{props:[s(t,/:(plac\w+)/,":-moz-$1")]}),x(e,{props:[s(t,/:(plac\w+)/,D+"input-$1")]})],n)}return""}))}}],oe=function(e){var t=e.key;if("css"===t){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,(function(e){-1!==e.getAttribute("data-emotion").indexOf(" ")&&(document.head.appendChild(e),e.setAttribute("data-s",""))}))}var o=e.stylisPlugins||ne;var i,a,c={},s=[];i=e.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+t+' "]'),(function(e){for(var t=e.getAttribute("data-emotion").split(" "),r=1;r<t.length;r++)c[t[r]]=!0;s.push(e)}));var u,l,f=[V,(l=function(e){u.insert(e)},function(e){e.root||(e=e.return)&&l(e)})],p=function(e){var t=d(e);return function(r,n,o,i){for(var a="",c=0;c<t;c++)a+=e[c](r,n,o,i)||"";return a}}([te,re].concat(o,f));a=function(e,t,r,n){u=r,W(B(e?e+"{"+t.styles+"}":t.styles),p),n&&(y.inserted[t.name]=!0)};var y={key:t,sheet:new n({key:t,container:i,nonce:e.nonce,speedy:e.speedy,prepend:e.prepend,insertionPoint:e.insertionPoint}),nonce:e.nonce,inserted:c,registered:{},insert:a};return y.sheet.hydrate(s),y}},5042:function(e,t){"use strict";t.Z=function(e){var t=Object.create(null);return function(r){return void 0===t[r]&&(t[r]=e(r)),t[r]}}},4880:function(e,t,r){"use strict";var n;r.d(t,{T:function(){return s},w:function(){return c}});var o=r(7294),i=r(8357),a=(r(2324),(0,o.createContext)("undefined"!==typeof HTMLElement?(0,i.Z)({key:"css"}):null));a.Provider;var c=function(e){return(0,o.forwardRef)((function(t,r){var n=(0,o.useContext)(a);return e(t,n,r)}))},s=(0,o.createContext)({});(n||(n=r.t(o,2))).useInsertionEffect&&(n||(n=r.t(o,2))).useInsertionEffect},2324:function(e,t,r){"use strict";r.d(t,{O:function(){return h}});var n=function(e){for(var t,r=0,n=0,o=e.length;o>=4;++n,o-=4)t=1540483477*(65535&(t=255&e.charCodeAt(n)|(255&e.charCodeAt(++n))<<8|(255&e.charCodeAt(++n))<<16|(255&e.charCodeAt(++n))<<24))+(59797*(t>>>16)<<16),r=1540483477*(65535&(t^=t>>>24))+(59797*(t>>>16)<<16)^1540483477*(65535&r)+(59797*(r>>>16)<<16);switch(o){case 3:r^=(255&e.charCodeAt(n+2))<<16;case 2:r^=(255&e.charCodeAt(n+1))<<8;case 1:r=1540483477*(65535&(r^=255&e.charCodeAt(n)))+(59797*(r>>>16)<<16)}return(((r=1540483477*(65535&(r^=r>>>13))+(59797*(r>>>16)<<16))^r>>>15)>>>0).toString(36)},o={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},i=r(5042),a=/[A-Z]|^ms/g,c=/_EMO_([^_]+?)_([^]*?)_EMO_/g,s=function(e){return 45===e.charCodeAt(1)},u=function(e){return null!=e&&"boolean"!==typeof e},l=(0,i.Z)((function(e){return s(e)?e:e.replace(a,"-$&").toLowerCase()})),f=function(e,t){switch(e){case"animation":case"animationName":if("string"===typeof t)return t.replace(c,(function(e,t,r){return d={name:t,styles:r,next:d},t}))}return 1===o[e]||s(e)||"number"!==typeof t||0===t?t:t+"px"};function p(e,t,r){if(null==r)return"";if(void 0!==r.__emotion_styles)return r;switch(typeof r){case"boolean":return"";case"object":if(1===r.anim)return d={name:r.name,styles:r.styles,next:d},r.name;if(void 0!==r.styles){var n=r.next;if(void 0!==n)for(;void 0!==n;)d={name:n.name,styles:n.styles,next:d},n=n.next;return r.styles+";"}return function(e,t,r){var n="";if(Array.isArray(r))for(var o=0;o<r.length;o++)n+=p(e,t,r[o])+";";else for(var i in r){var a=r[i];if("object"!==typeof a)null!=t&&void 0!==t[a]?n+=i+"{"+t[a]+"}":u(a)&&(n+=l(i)+":"+f(i,a)+";");else if(!Array.isArray(a)||"string"!==typeof a[0]||null!=t&&void 0!==t[a[0]]){var c=p(e,t,a);switch(i){case"animation":case"animationName":n+=l(i)+":"+c+";";break;default:n+=i+"{"+c+"}"}}else for(var s=0;s<a.length;s++)u(a[s])&&(n+=l(i)+":"+f(i,a[s])+";")}return n}(e,t,r);case"function":if(void 0!==e){var o=d,i=r(e);return d=o,p(e,t,i)}}if(null==t)return r;var a=t[r];return void 0!==a?a:r}var d,y=/label:\s*([^\s;\n{]+)\s*(;|$)/g;var h=function(e,t,r){if(1===e.length&&"object"===typeof e[0]&&null!==e[0]&&void 0!==e[0].styles)return e[0];var o=!0,i="";d=void 0;var a=e[0];null==a||void 0===a.raw?(o=!1,i+=p(r,t,a)):i+=a[0];for(var c=1;c<e.length;c++)i+=p(r,t,e[c]),o&&(i+=a[c]);y.lastIndex=0;for(var s,u="";null!==(s=y.exec(i));)u+="-"+s[1];return{name:n(i)+u,styles:i,next:d}}},7366:function(e,t,r){"use strict";r.d(t,{Z:function(){return w}});var n=r(7294),o=r.t(n,2);function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},i.apply(this,arguments)}var a=r(5042),c=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,s=(0,a.Z)((function(e){return c.test(e)||111===e.charCodeAt(0)&&110===e.charCodeAt(1)&&e.charCodeAt(2)<91})),u=r(4880),l=r(444),f=r(2324),p=s,d=function(e){return"theme"!==e},y=function(e){return"string"===typeof e&&e.charCodeAt(0)>96?p:d},h=function(e,t,r){var n;if(t){var o=t.shouldForwardProp;n=e.__emotion_forwardProp&&o?function(t){return e.__emotion_forwardProp(t)&&o(t)}:o}return"function"!==typeof n&&r&&(n=e.__emotion_forwardProp),n},m=o.useInsertionEffect?o.useInsertionEffect:function(e){e()};var v=function(e){var t=e.cache,r=e.serialized,n=e.isStringTag;(0,l.hC)(t,r,n);m((function(){return(0,l.My)(t,r,n)}));return null},b=function e(t,r){var o,a,c=t.__emotion_real===t,s=c&&t.__emotion_base||t;void 0!==r&&(o=r.label,a=r.target);var p=h(t,r,c),d=p||y(s),m=!d("as");return function(){var b=arguments,g=c&&void 0!==t.__emotion_styles?t.__emotion_styles.slice(0):[];if(void 0!==o&&g.push("label:"+o+";"),null==b[0]||void 0===b[0].raw)g.push.apply(g,b);else{0,g.push(b[0][0]);for(var w=b.length,S=1;S<w;S++)g.push(b[S],b[0][S])}var x=(0,u.w)((function(e,t,r){var o=m&&e.as||s,i="",c=[],h=e;if(null==e.theme){for(var b in h={},e)h[b]=e[b];h.theme=(0,n.useContext)(u.T)}"string"===typeof e.className?i=(0,l.fp)(t.registered,c,e.className):null!=e.className&&(i=e.className+" ");var w=(0,f.O)(g.concat(c),t.registered,h);i+=t.key+"-"+w.name,void 0!==a&&(i+=" "+a);var S=m&&void 0===p?y(o):d,x={};for(var k in e)m&&"as"===k||S(k)&&(x[k]=e[k]);return x.className=i,x.ref=r,(0,n.createElement)(n.Fragment,null,(0,n.createElement)(v,{cache:t,serialized:w,isStringTag:"string"===typeof o}),(0,n.createElement)(o,x))}));return x.displayName=void 0!==o?o:"Styled("+("string"===typeof s?s:s.displayName||s.name||"Component")+")",x.defaultProps=t.defaultProps,x.__emotion_real=x,x.__emotion_base=s,x.__emotion_styles=g,x.__emotion_forwardProp=p,Object.defineProperty(x,"toString",{value:function(){return"."+a}}),x.withComponent=function(t,n){return e(t,i({},r,n,{shouldForwardProp:h(x,n,!0)})).apply(void 0,g)},x}},g=b.bind();["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"].forEach((function(e){g[e]=g(e)}));var w=g},444:function(e,t,r){"use strict";r.d(t,{My:function(){return i},fp:function(){return n},hC:function(){return o}});function n(e,t,r){var n="";return r.split(" ").forEach((function(r){void 0!==e[r]?t.push(e[r]+";"):n+=r+" "})),n}var o=function(e,t,r){var n=e.key+"-"+t.name;!1===r&&void 0===e.registered[n]&&(e.registered[n]=t.styles)},i=function(e,t,r){o(e,t,r);var n=e.key+"-"+t.name;if(void 0===e.inserted[t.name]){var i=t;do{e.insert(t===i?"."+n:"",i,e.sheet,!0);i=i.next}while(void 0!==i)}}},8679:function(e,t,r){"use strict";var n=r(1296),o={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},i={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},a={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},c={};function s(e){return n.isMemo(e)?a:c[e.$$typeof]||o}c[n.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},c[n.Memo]=a;var u=Object.defineProperty,l=Object.getOwnPropertyNames,f=Object.getOwnPropertySymbols,p=Object.getOwnPropertyDescriptor,d=Object.getPrototypeOf,y=Object.prototype;e.exports=function e(t,r,n){if("string"!==typeof r){if(y){var o=d(r);o&&o!==y&&e(t,o,n)}var a=l(r);f&&(a=a.concat(f(r)));for(var c=s(t),h=s(r),m=0;m<a.length;++m){var v=a[m];if(!i[v]&&(!n||!n[v])&&(!h||!h[v])&&(!c||!c[v])){var b=p(r,v);try{u(t,v,b)}catch(g){}}}}return t}},6103:function(e,t){"use strict";var r="function"===typeof Symbol&&Symbol.for,n=r?Symbol.for("react.element"):60103,o=r?Symbol.for("react.portal"):60106,i=r?Symbol.for("react.fragment"):60107,a=r?Symbol.for("react.strict_mode"):60108,c=r?Symbol.for("react.profiler"):60114,s=r?Symbol.for("react.provider"):60109,u=r?Symbol.for("react.context"):60110,l=r?Symbol.for("react.async_mode"):60111,f=r?Symbol.for("react.concurrent_mode"):60111,p=r?Symbol.for("react.forward_ref"):60112,d=r?Symbol.for("react.suspense"):60113,y=r?Symbol.for("react.suspense_list"):60120,h=r?Symbol.for("react.memo"):60115,m=r?Symbol.for("react.lazy"):60116,v=r?Symbol.for("react.block"):60121,b=r?Symbol.for("react.fundamental"):60117,g=r?Symbol.for("react.responder"):60118,w=r?Symbol.for("react.scope"):60119;function S(e){if("object"===typeof e&&null!==e){var t=e.$$typeof;switch(t){case n:switch(e=e.type){case l:case f:case i:case c:case a:case d:return e;default:switch(e=e&&e.$$typeof){case u:case p:case m:case h:case s:return e;default:return t}}case o:return t}}}function x(e){return S(e)===f}t.AsyncMode=l,t.ConcurrentMode=f,t.ContextConsumer=u,t.ContextProvider=s,t.Element=n,t.ForwardRef=p,t.Fragment=i,t.Lazy=m,t.Memo=h,t.Portal=o,t.Profiler=c,t.StrictMode=a,t.Suspense=d,t.isAsyncMode=function(e){return x(e)||S(e)===l},t.isConcurrentMode=x,t.isContextConsumer=function(e){return S(e)===u},t.isContextProvider=function(e){return S(e)===s},t.isElement=function(e){return"object"===typeof e&&null!==e&&e.$$typeof===n},t.isForwardRef=function(e){return S(e)===p},t.isFragment=function(e){return S(e)===i},t.isLazy=function(e){return S(e)===m},t.isMemo=function(e){return S(e)===h},t.isPortal=function(e){return S(e)===o},t.isProfiler=function(e){return S(e)===c},t.isStrictMode=function(e){return S(e)===a},t.isSuspense=function(e){return S(e)===d},t.isValidElementType=function(e){return"string"===typeof e||"function"===typeof e||e===i||e===f||e===c||e===a||e===d||e===y||"object"===typeof e&&null!==e&&(e.$$typeof===m||e.$$typeof===h||e.$$typeof===s||e.$$typeof===u||e.$$typeof===p||e.$$typeof===b||e.$$typeof===g||e.$$typeof===w||e.$$typeof===v)},t.typeOf=S},1296:function(e,t,r){"use strict";e.exports=r(6103)},6840:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return r(3823)}])},3823:function(e,t,r){"use strict";function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},o=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),o.forEach((function(t){n(e,t,r[t])}))}return e}r.r(t),r.d(t,{default:function(){return E}});var i=r(7297),a=r(5893);function c(e){return"Minified Redux error #"+e+"; visit https://redux.js.org/Errors?code="+e+" for the full message or use the non-minified dev environment for full errors. "}var s="function"===typeof Symbol&&Symbol.observable||"@@observable",u=function(){return Math.random().toString(36).substring(7).split("").join(".")},l={INIT:"@@redux/INIT"+u(),REPLACE:"@@redux/REPLACE"+u(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+u()}};function f(e){if("object"!==typeof e||null===e)return!1;for(var t=e;null!==Object.getPrototypeOf(t);)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t}function p(e,t,r){var n;if("function"===typeof t&&"function"===typeof r||"function"===typeof r&&"function"===typeof arguments[3])throw new Error(c(0));if("function"===typeof t&&"undefined"===typeof r&&(r=t,t=void 0),"undefined"!==typeof r){if("function"!==typeof r)throw new Error(c(1));return r(p)(e,t)}if("function"!==typeof e)throw new Error(c(2));var o=e,i=t,a=[],u=a,d=!1;function y(){u===a&&(u=a.slice())}function h(){if(d)throw new Error(c(3));return i}function m(e){if("function"!==typeof e)throw new Error(c(4));if(d)throw new Error(c(5));var t=!0;return y(),u.push(e),function(){if(t){if(d)throw new Error(c(6));t=!1,y();var r=u.indexOf(e);u.splice(r,1),a=null}}}function v(e){if(!f(e))throw new Error(c(7));if("undefined"===typeof e.type)throw new Error(c(8));if(d)throw new Error(c(9));try{d=!0,i=o(i,e)}finally{d=!1}for(var t=a=u,r=0;r<t.length;r++){(0,t[r])()}return e}function b(e){if("function"!==typeof e)throw new Error(c(10));o=e,v({type:l.REPLACE})}function g(){var e,t=m;return(e={subscribe:function(e){if("object"!==typeof e||null===e)throw new Error(c(11));function r(){e.next&&e.next(h())}return r(),{unsubscribe:t(r)}}})[s]=function(){return this},e}return v({type:l.INIT}),(n={dispatch:v,subscribe:m,getState:h,replaceReducer:b})[s]=g,n}var d=r(9473);function y(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}var h=r(8432),m={filename:"silence.wav",playing:!1,volume:0},v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h.hl:return y(o({},e),{filename:t.filename,playing:!0});case h.D1:return y(o({},e),{filename:"silence.wav",playing:!1});case h.QD:return y(o({},e),{volume:t.volume});default:return e}},b=r(9815),g=r(6126),w={localStorageRef:null,buttonHistory:[]},S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case g.OK:return y(o({},e),{localStorageRef:localStorage});case g.hv:return y(o({},e),{buttonHistory:t.history});case g.b6:var r=e.buttonHistory.some((function(e){return e.path===t.audioData.path})),n=r?e.buttonHistory:[t.audioData].concat((0,b.Z)(e.buttonHistory));return n.length>=21&&n.splice(n.length-1),y(o({},e),{buttonHistory:(0,b.Z)(n)});default:return e}},x=r(7366);function k(){var e=(0,i.Z)(["\n  width: 100%;\n"]);return k=function(){return e},e}var O=p(function(e){for(var t=Object.keys(e),r={},n=0;n<t.length;n++){var o=t[n];0,"function"===typeof e[o]&&(r[o]=e[o])}var i,a=Object.keys(r);try{!function(e){Object.keys(e).forEach((function(t){var r=e[t];if("undefined"===typeof r(void 0,{type:l.INIT}))throw new Error(c(12));if("undefined"===typeof r(void 0,{type:l.PROBE_UNKNOWN_ACTION()}))throw new Error(c(13))}))}(r)}catch(s){i=s}return function(e,t){if(void 0===e&&(e={}),i)throw i;for(var n=!1,o={},s=0;s<a.length;s++){var u=a[s],l=r[u],f=e[u],p=l(f,t);if("undefined"===typeof p){t&&t.type;throw new Error(c(14))}o[u]=p,n=n||p!==f}return(n=n||a.length!==Object.keys(e).length)?o:e}}({playAudio:v,app:S}));function E(e){var t=e.Component,r=e.pageProps;return(0,a.jsxs)(d.zt,{store:O,children:[(0,a.jsx)("title",{children:"\u5b9d\u9418\u30de\u30ea\u30f3\u30dc\u30bf\u30f3\ud83c\udff4\u2620"}),(0,a.jsx)(P,{children:(0,a.jsx)(t,o({},r))})]})}var P=x.Z.div(k())},6126:function(e,t,r){"use strict";r.d(t,{LI:function(){return s},OK:function(){return n},Q5:function(){return a},b6:function(){return i},cX:function(){return c},hv:function(){return o}});var n="APP.CLIENT_RENDERED",o="APP.SET_HISTORY",i="APP.ADD_HISTORY",a=function(e){return{type:n,localStorageRef:e}},c=function(e){return{type:o,history:e}},s=function(e){return{type:i,audioData:e}}},8432:function(e,t,r){"use strict";r.d(t,{D1:function(){return i},QD:function(){return c},ex:function(){return o},hl:function(){return n},kv:function(){return a}});var n="PLAYAUDIO.PLAY_AUDIO",o=function(e){return{type:n,filename:e}},i="PLAYAUDIO.STOP_AUDIO",a=function(){return{type:i}},c="PLAYAUDIO.CHANGE_VOLUME"},9921:function(e,t){"use strict";var r,n=Symbol.for("react.element"),o=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),s=Symbol.for("react.provider"),u=Symbol.for("react.context"),l=Symbol.for("react.server_context"),f=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),d=Symbol.for("react.suspense_list"),y=Symbol.for("react.memo"),h=Symbol.for("react.lazy"),m=Symbol.for("react.offscreen");function v(e){if("object"===typeof e&&null!==e){var t=e.$$typeof;switch(t){case n:switch(e=e.type){case i:case c:case a:case p:case d:return e;default:switch(e=e&&e.$$typeof){case l:case u:case f:case h:case y:case s:return e;default:return t}}case o:return t}}}r=Symbol.for("react.module.reference")},9864:function(e,t,r){"use strict";r(9921)},9473:function(e,t,r){"use strict";r.d(t,{zt:function(){return g},I0:function(){return k},v9:function(){return y}});var n=r(1688),o=r(2798),i=r(3935);let a=function(e){e()};const c=()=>a;var s=r(7294);const u=s.createContext(null);function l(){return(0,s.useContext)(u)}let f=()=>{throw new Error("uSES not initialized!")};const p=(e,t)=>e===t;function d(e=u){const t=e===u?l:()=>(0,s.useContext)(e);return function(e,r=p){const{store:n,subscription:o,getServerState:i}=t(),a=f(o.addNestedSub,n.getState,i||n.getState,e,r);return(0,s.useDebugValue)(a),a}}const y=d();r(8679),r(9864);const h={notify(){},get:()=>[]};function m(e,t){let r,n=h;function o(){a.onStateChange&&a.onStateChange()}function i(){r||(r=t?t.addNestedSub(o):e.subscribe(o),n=function(){const e=c();let t=null,r=null;return{clear(){t=null,r=null},notify(){e((()=>{let e=t;for(;e;)e.callback(),e=e.next}))},get(){let e=[],r=t;for(;r;)e.push(r),r=r.next;return e},subscribe(e){let n=!0,o=r={callback:e,next:null,prev:r};return o.prev?o.prev.next=o:t=o,function(){n&&null!==t&&(n=!1,o.next?o.next.prev=o.prev:r=o.prev,o.prev?o.prev.next=o.next:t=o.next)}}}}())}const a={addNestedSub:function(e){return i(),n.subscribe(e)},notifyNestedSubs:function(){n.notify()},handleChangeWrapper:o,isSubscribed:function(){return Boolean(r)},trySubscribe:i,tryUnsubscribe:function(){r&&(r(),r=void 0,n.clear(),n=h)},getListeners:()=>n};return a}const v=!("undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement)?s.useLayoutEffect:s.useEffect;let b=null;var g=function({store:e,context:t,children:r,serverState:n}){const o=(0,s.useMemo)((()=>{const t=m(e);return{store:e,subscription:t,getServerState:n?()=>n:void 0}}),[e,n]),i=(0,s.useMemo)((()=>e.getState()),[e]);v((()=>{const{subscription:t}=o;return t.onStateChange=t.notifyNestedSubs,t.trySubscribe(),i!==e.getState()&&t.notifyNestedSubs(),()=>{t.tryUnsubscribe(),t.onStateChange=void 0}}),[o,i]);const a=t||u;return s.createElement(a.Provider,{value:o},r)};function w(e=u){const t=e===u?l:()=>(0,s.useContext)(e);return function(){const{store:e}=t();return e}}const S=w();function x(e=u){const t=e===u?S:w(e);return function(){return t().dispatch}}const k=x();var O,E;O=o.useSyncExternalStoreWithSelector,f=O,(e=>{b=e})(n.useSyncExternalStore),E=i.unstable_batchedUpdates,a=E},3250:function(e,t,r){"use strict";var n=r(7294);var o="function"===typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e===1/t)||e!==e&&t!==t},i=n.useState,a=n.useEffect,c=n.useLayoutEffect,s=n.useDebugValue;function u(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!o(e,r)}catch(n){return!0}}var l="undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement?function(e,t){return t()}:function(e,t){var r=t(),n=i({inst:{value:r,getSnapshot:t}}),o=n[0].inst,l=n[1];return c((function(){o.value=r,o.getSnapshot=t,u(o)&&l({inst:o})}),[e,r,t]),a((function(){return u(o)&&l({inst:o}),e((function(){u(o)&&l({inst:o})}))}),[e]),s(r),r};t.useSyncExternalStore=void 0!==n.useSyncExternalStore?n.useSyncExternalStore:l},139:function(e,t,r){"use strict";var n=r(7294),o=r(1688);var i="function"===typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e===1/t)||e!==e&&t!==t},a=o.useSyncExternalStore,c=n.useRef,s=n.useEffect,u=n.useMemo,l=n.useDebugValue;t.useSyncExternalStoreWithSelector=function(e,t,r,n,o){var f=c(null);if(null===f.current){var p={hasValue:!1,value:null};f.current=p}else p=f.current;f=u((function(){function e(e){if(!s){if(s=!0,a=e,e=n(e),void 0!==o&&p.hasValue){var t=p.value;if(o(t,e))return c=t}return c=e}if(t=c,i(a,e))return t;var r=n(e);return void 0!==o&&o(t,r)?t:(a=e,c=r)}var a,c,s=!1,u=void 0===r?null:r;return[function(){return e(t())},null===u?void 0:function(){return e(u())}]}),[t,r,n,o]);var d=a(e,f[0],f[1]);return s((function(){p.hasValue=!0,p.value=d}),[d]),l(d),d}},1688:function(e,t,r){"use strict";e.exports=r(3250)},2798:function(e,t,r){"use strict";e.exports=r(139)},943:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}r.d(t,{Z:function(){return n}})},3375:function(e,t,r){"use strict";function n(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}r.d(t,{Z:function(){return n}})},7297:function(e,t,r){"use strict";function n(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}r.d(t,{Z:function(){return n}})},9815:function(e,t,r){"use strict";r.d(t,{Z:function(){return a}});var n=r(943);var o=r(3375);var i=r(1566);function a(e){return function(e){if(Array.isArray(e))return(0,n.Z)(e)}(e)||(0,o.Z)(e)||(0,i.Z)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},1566:function(e,t,r){"use strict";r.d(t,{Z:function(){return o}});var n=r(943);function o(e,t){if(e){if("string"===typeof e)return(0,n.Z)(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(r):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?(0,n.Z)(e,t):void 0}}}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],(function(){return t(6840),t(387)}));var r=e.O();_N_E=r}]);