(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7885],{7716:function(e,i,r){"use strict";var t=r(27378),n=function(){return(n=Object.assign||function(e){for(var i,r=1,t=arguments.length;r<t;r++)for(var n in i=arguments[r])Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);return e}).apply(this,arguments)};var o=function(e){var i=e.animate,r=e.animateBegin,o=e.backgroundColor,a=e.backgroundOpacity,s=e.baseUrl,u=e.children,l=e.foregroundColor,c=e.foregroundOpacity,b=e.gradientRatio,d=e.gradientDirection,f=e.uniqueKey,w=e.interval,m=e.rtl,p=e.speed,g=e.style,h=e.title,v=e.beforeMask,y=function(e,i){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&i.indexOf(t)<0&&(r[t]=e[t]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var n=0;for(t=Object.getOwnPropertySymbols(e);n<t.length;n++)i.indexOf(t[n])<0&&Object.prototype.propertyIsEnumerable.call(e,t[n])&&(r[t[n]]=e[t[n]])}return r}(e,["animate","animateBegin","backgroundColor","backgroundOpacity","baseUrl","children","foregroundColor","foregroundOpacity","gradientRatio","gradientDirection","uniqueKey","interval","rtl","speed","style","title","beforeMask"]),x=f||Math.random().toString(36).substring(6),O=x+"-diff",k=x+"-animated-diff",S=x+"-aria",E=m?{transform:"scaleX(-1)"}:null,C="0; "+w+"; 1",P=p+"s",j="top-bottom"===d?"rotate(90)":void 0;return(0,t.createElement)("svg",n({"aria-labelledby":S,role:"img",style:n(n({},g),E)},y),h?(0,t.createElement)("title",{id:S},h):null,v&&(0,t.isValidElement)(v)?v:null,(0,t.createElement)("rect",{role:"presentation",x:"0",y:"0",width:"100%",height:"100%",clipPath:"url("+s+"#"+O+")",style:{fill:"url("+s+"#"+k+")"}}),(0,t.createElement)("defs",null,(0,t.createElement)("clipPath",{id:O},u),(0,t.createElement)("linearGradient",{id:k,gradientTransform:j},(0,t.createElement)("stop",{offset:"0%",stopColor:o,stopOpacity:a},i&&(0,t.createElement)("animate",{attributeName:"offset",values:-b+"; "+-b+"; 1",keyTimes:C,dur:P,repeatCount:"indefinite",begin:r})),(0,t.createElement)("stop",{offset:"50%",stopColor:l,stopOpacity:c},i&&(0,t.createElement)("animate",{attributeName:"offset",values:-b/2+"; "+-b/2+"; "+(1+b/2),keyTimes:C,dur:P,repeatCount:"indefinite",begin:r})),(0,t.createElement)("stop",{offset:"100%",stopColor:o,stopOpacity:a},i&&(0,t.createElement)("animate",{attributeName:"offset",values:"0; 0; "+(1+b),keyTimes:C,dur:P,repeatCount:"indefinite",begin:r})))))};o.defaultProps={animate:!0,backgroundColor:"#f5f6f7",backgroundOpacity:1,baseUrl:"",foregroundColor:"#eee",foregroundOpacity:1,gradientRatio:2,gradientDirection:"left-right",id:null,interval:.25,rtl:!1,speed:1.2,style:{},title:"Loading...",beforeMask:null};var a=function(e){return e.children?(0,t.createElement)(o,n({},e)):(0,t.createElement)(s,n({},e))},s=function(e){return(0,t.createElement)(a,n({viewBox:"0 0 476 124"},e),(0,t.createElement)("rect",{x:"48",y:"8",width:"88",height:"6",rx:"3"}),(0,t.createElement)("rect",{x:"48",y:"26",width:"52",height:"6",rx:"3"}),(0,t.createElement)("rect",{x:"0",y:"56",width:"410",height:"6",rx:"3"}),(0,t.createElement)("rect",{x:"0",y:"72",width:"380",height:"6",rx:"3"}),(0,t.createElement)("rect",{x:"0",y:"88",width:"178",height:"6",rx:"3"}),(0,t.createElement)("circle",{cx:"20",cy:"20",r:"20"}))};i.ZP=a},56253:function(e,i,r){"use strict";var t,n=r(27378),o=(t=n)&&"object"===typeof t&&"default"in t?t.default:t,a=r(4651),s=new a,u=s.getBrowser(),l=s.getCPU(),c=s.getDevice(),b=s.getEngine(),d=s.getOS(),f=s.getUA(),w=function(e){return s.setUA(e)},m=function(e){if(e){var i=new a(e);return{UA:i,browser:i.getBrowser(),cpu:i.getCPU(),device:i.getDevice(),engine:i.getEngine(),os:i.getOS(),ua:i.getUA(),setUserAgent:function(e){return i.setUA(e)}}}console.error("No userAgent string was provided")},p=Object.freeze({ClientUAInstance:s,browser:u,cpu:l,device:c,engine:b,os:d,ua:f,setUa:w,parseUserAgent:m});function g(e,i){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);i&&(t=t.filter((function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable}))),r.push.apply(r,t)}return r}function h(e){return(h="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function v(e,i){for(var r=0;r<i.length;r++){var t=i[r];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}function y(e,i,r){return i in e?Object.defineProperty(e,i,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[i]=r,e}function x(){return(x=Object.assign||function(e){for(var i=1;i<arguments.length;i++){var r=arguments[i];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e}).apply(this,arguments)}function O(e){return(O=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function k(e,i){return(k=Object.setPrototypeOf||function(e,i){return e.__proto__=i,e})(e,i)}function S(e,i){if(null==e)return{};var r,t,n=function(e,i){if(null==e)return{};var r,t,n={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],i.indexOf(r)>=0||(n[r]=e[r]);return n}(e,i);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],i.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function E(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function C(e,i){return function(e){if(Array.isArray(e))return e}(e)||function(e,i){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var t,n,o=[],a=!0,s=!1;try{for(r=r.call(e);!(a=(t=r.next()).done)&&(o.push(t.value),!i||o.length!==i);a=!0);}catch(u){s=!0,n=u}finally{try{a||null==r.return||r.return()}finally{if(s)throw n}}return o}(e,i)||function(e,i){if(!e)return;if("string"===typeof e)return P(e,i);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return P(e,i)}(e,i)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function P(e,i){(null==i||i>e.length)&&(i=e.length);for(var r=0,t=new Array(i);r<i;r++)t[r]=e[r];return t}var j="mobile",_="tablet",A="smarttv",T="console",I="wearable",M="embedded",U=void 0,N={Chrome:"Chrome",Firefox:"Firefox",Opera:"Opera",Yandex:"Yandex",Safari:"Safari",InternetExplorer:"Internet Explorer",Edge:"Edge",Chromium:"Chromium",Ie:"IE",MobileSafari:"Mobile Safari",EdgeChromium:"Edge Chromium",MIUI:"MIUI Browser",SamsungBrowser:"Samsung Browser"},B={IOS:"iOS",Android:"Android",WindowsPhone:"Windows Phone",Windows:"Windows",MAC_OS:"Mac OS"},q={isMobile:!1,isTablet:!1,isBrowser:!1,isSmartTV:!1,isConsole:!1,isWearable:!1},z=function(e){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"none";return e||i},V=function(){return!("undefined"===typeof window||!window.navigator&&!navigator)&&(window.navigator||navigator)},D=function(e){var i=V();return i&&i.platform&&(-1!==i.platform.indexOf(e)||"MacIntel"===i.platform&&i.maxTouchPoints>1&&!window.MSStream)},R=function(e,i,r,t){return function(e){for(var i=1;i<arguments.length;i++){var r=null!=arguments[i]?arguments[i]:{};i%2?g(Object(r),!0).forEach((function(i){y(e,i,r[i])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):g(Object(r)).forEach((function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(r,i))}))}return e}({},e,{vendor:z(i.vendor),model:z(i.model),os:z(r.name),osVersion:z(r.version),ua:z(t)})};var W=function(e){return e.type===j},F=function(e){return e.type===_},L=function(e){var i=e.type;return i===j||i===_},G=function(e){return e.type===A},Z=function(e){return e.type===U},$=function(e){return e.type===I},Y=function(e){return e.type===T},H=function(e){return e.type===M},X=function(e){var i=e.vendor;return z(i)},K=function(e){var i=e.model;return z(i)},Q=function(e){var i=e.type;return z(i,"browser")},J=function(e){return e.name===B.Android},ee=function(e){return e.name===B.Windows},ie=function(e){return e.name===B.MAC_OS},re=function(e){return e.name===B.WindowsPhone},te=function(e){return e.name===B.IOS},ne=function(e){var i=e.version;return z(i)},oe=function(e){var i=e.name;return z(i)},ae=function(e){return e.name===N.Chrome},se=function(e){return e.name===N.Firefox},ue=function(e){return e.name===N.Chromium},le=function(e){return e.name===N.Edge},ce=function(e){return e.name===N.Yandex},be=function(e){var i=e.name;return i===N.Safari||i===N.MobileSafari},de=function(e){return e.name===N.MobileSafari},fe=function(e){return e.name===N.Opera},we=function(e){var i=e.name;return i===N.InternetExplorer||i===N.Ie},me=function(e){return e.name===N.MIUI},pe=function(e){return e.name===N.SamsungBrowser},ge=function(e){var i=e.version;return z(i)},he=function(e){var i=e.major;return z(i)},ve=function(e){var i=e.name;return z(i)},ye=function(e){var i=e.name;return z(i)},xe=function(e){var i=e.version;return z(i)},Oe=function(){var e=V(),i=e&&e.userAgent&&e.userAgent.toLowerCase();return"string"===typeof i&&/electron/.test(i)},ke=function(e){return"string"===typeof e&&-1!==e.indexOf("Edg/")},Se=function(){var e=V();return e&&(/iPad|iPhone|iPod/.test(e.platform)||"MacIntel"===e.platform&&e.maxTouchPoints>1)&&!window.MSStream},Ee=function(){return D("iPad")},Ce=function(){return D("iPhone")},Pe=function(){return D("iPod")},je=function(e){return z(e)};function _e(e){var i=e||p,r=i.device,t=i.browser,n=i.os,o=i.engine,a=i.ua;return{isSmartTV:G(r),isConsole:Y(r),isWearable:$(r),isEmbedded:H(r),isMobileSafari:de(t)||Ee(),isChromium:ue(t),isMobile:L(r)||Ee(),isMobileOnly:W(r),isTablet:F(r)||Ee(),isBrowser:Z(r),isDesktop:Z(r),isAndroid:J(n),isWinPhone:re(n),isIOS:te(n)||Ee(),isChrome:ae(t),isFirefox:se(t),isSafari:be(t),isOpera:fe(t),isIE:we(t),osVersion:ne(n),osName:oe(n),fullBrowserVersion:ge(t),browserVersion:he(t),browserName:ve(t),mobileVendor:X(r),mobileModel:K(r),engineName:ye(o),engineVersion:xe(o),getUA:je(a),isEdge:le(t)||ke(a),isYandex:ce(t),deviceType:Q(r),isIOS13:Se(),isIPad13:Ee(),isIPhone13:Ce(),isIPod13:Pe(),isElectron:Oe(),isEdgeChromium:ke(a),isLegacyEdge:le(t)&&!ke(a),isWindows:ee(n),isMacOs:ie(n),isMIUI:me(t),isSamsungBrowser:pe(t)}}var Ae=G(c),Te=Y(c),Ie=$(c),Me=H(c),Ue=de(u)||Ee(),Ne=ue(u),Be=L(c)||Ee(),qe=W(c),ze=F(c)||Ee(),Ve=Z(c),De=Z(c),Re=J(d),We=re(d),Fe=te(d)||Ee(),Le=ae(u),Ge=se(u),Ze=be(u),$e=fe(u),Ye=we(u),He=ne(d),Xe=oe(d),Ke=ge(u),Qe=he(u),Je=ve(u),ei=X(c),ii=K(c),ri=ye(b),ti=xe(b),ni=je(f),oi=le(u)||ke(f),ai=ce(u),si=Q(c),ui=Se(),li=Ee(),ci=Ce(),bi=Pe(),di=Oe(),fi=ke(f),wi=le(u)&&!ke(f),mi=ee(d),pi=ie(d),gi=me(u),hi=pe(u);function vi(e){var i=e||window.navigator.userAgent;return m(i)}i.tq=Be},4651:function(e,i,r){var t;!function(n,o){"use strict";var a="function",s="undefined",u="object",l="string",c="model",b="name",d="type",f="vendor",w="version",m="architecture",p="console",g="mobile",h="tablet",v="smarttv",y="wearable",x="embedded",O="Amazon",k="Apple",S="ASUS",E="BlackBerry",C="Firefox",P="Google",j="Huawei",_="LG",A="Microsoft",T="Motorola",I="Opera",M="Samsung",U="Sony",N="Xiaomi",B="Zebra",q="Facebook",z=function(e){for(var i={},r=0;r<e.length;r++)i[e[r].toUpperCase()]=e[r];return i},V=function(e,i){return typeof e===l&&-1!==D(i).indexOf(D(e))},D=function(e){return e.toLowerCase()},R=function(e,i){if(typeof e===l)return e=e.replace(/^\s\s*/,"").replace(/\s\s*$/,""),typeof i===s?e:e.substring(0,255)},W=function(e,i){for(var r,t,n,s,l,c,b=0;b<i.length&&!l;){var d=i[b],f=i[b+1];for(r=t=0;r<d.length&&!l;)if(l=d[r++].exec(e))for(n=0;n<f.length;n++)c=l[++t],typeof(s=f[n])===u&&s.length>0?2===s.length?typeof s[1]==a?this[s[0]]=s[1].call(this,c):this[s[0]]=s[1]:3===s.length?typeof s[1]!==a||s[1].exec&&s[1].test?this[s[0]]=c?c.replace(s[1],s[2]):o:this[s[0]]=c?s[1].call(this,c,s[2]):o:4===s.length&&(this[s[0]]=c?s[3].call(this,c.replace(s[1],s[2])):o):this[s]=c||o;b+=2}},F=function(e,i){for(var r in i)if(typeof i[r]===u&&i[r].length>0){for(var t=0;t<i[r].length;t++)if(V(i[r][t],e))return"?"===r?o:r}else if(V(i[r],e))return"?"===r?o:r;return e},L={ME:"4.90","NT 3.11":"NT3.51","NT 4.0":"NT4.0",2e3:"NT 5.0",XP:["NT 5.1","NT 5.2"],Vista:"NT 6.0",7:"NT 6.1",8:"NT 6.2",8.1:"NT 6.3",10:["NT 6.4","NT 10.0"],RT:"ARM"},G={browser:[[/\b(?:crmo|crios)\/([\w\.]+)/i],[w,[b,"Chrome"]],[/edg(?:e|ios|a)?\/([\w\.]+)/i],[w,[b,"Edge"]],[/(opera mini)\/([-\w\.]+)/i,/(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,/(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i],[b,w],[/opios[\/ ]+([\w\.]+)/i],[w,[b,"Opera Mini"]],[/\bopr\/([\w\.]+)/i],[w,[b,I]],[/(kindle)\/([\w\.]+)/i,/(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i,/(avant |iemobile|slim)(?:browser)?[\/ ]?([\w\.]*)/i,/(ba?idubrowser)[\/ ]?([\w\.]+)/i,/(?:ms|\()(ie) ([\w\.]+)/i,/(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale|qqbrowserlite|qq)\/([-\w\.]+)/i,/(weibo)__([\d\.]+)/i],[b,w],[/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],[w,[b,"UCBrowser"]],[/\bqbcore\/([\w\.]+)/i],[w,[b,"WeChat(Win) Desktop"]],[/micromessenger\/([\w\.]+)/i],[w,[b,"WeChat"]],[/konqueror\/([\w\.]+)/i],[w,[b,"Konqueror"]],[/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],[w,[b,"IE"]],[/yabrowser\/([\w\.]+)/i],[w,[b,"Yandex"]],[/(avast|avg)\/([\w\.]+)/i],[[b,/(.+)/,"$1 Secure Browser"],w],[/\bfocus\/([\w\.]+)/i],[w,[b,"Firefox Focus"]],[/\bopt\/([\w\.]+)/i],[w,[b,"Opera Touch"]],[/coc_coc\w+\/([\w\.]+)/i],[w,[b,"Coc Coc"]],[/dolfin\/([\w\.]+)/i],[w,[b,"Dolphin"]],[/coast\/([\w\.]+)/i],[w,[b,"Opera Coast"]],[/miuibrowser\/([\w\.]+)/i],[w,[b,"MIUI Browser"]],[/fxios\/([-\w\.]+)/i],[w,[b,C]],[/\bqihu|(qi?ho?o?|360)browser/i],[[b,"360 Browser"]],[/(oculus|samsung|sailfish)browser\/([\w\.]+)/i],[[b,/(.+)/,"$1 Browser"],w],[/(comodo_dragon)\/([\w\.]+)/i],[[b,/_/g," "],w],[/(electron)\/([\w\.]+) safari/i,/(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,/m?(qqbrowser|baiduboxapp|2345Explorer)[\/ ]?([\w\.]+)/i],[b,w],[/(metasr)[\/ ]?([\w\.]+)/i,/(lbbrowser)/i],[b],[/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],[[b,q],w],[/safari (line)\/([\w\.]+)/i,/\b(line)\/([\w\.]+)\/iab/i,/(chromium|instagram)[\/ ]([-\w\.]+)/i],[b,w],[/\bgsa\/([\w\.]+) .*safari\//i],[w,[b,"GSA"]],[/headlesschrome(?:\/([\w\.]+)| )/i],[w,[b,"Chrome Headless"]],[/ wv\).+(chrome)\/([\w\.]+)/i],[[b,"Chrome WebView"],w],[/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],[w,[b,"Android Browser"]],[/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],[b,w],[/version\/([\w\.]+) .*mobile\/\w+ (safari)/i],[w,[b,"Mobile Safari"]],[/version\/([\w\.]+) .*(mobile ?safari|safari)/i],[w,b],[/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],[b,[w,F,{"1.0":"/8",1.2:"/1",1.3:"/3","2.0":"/412","2.0.2":"/416","2.0.3":"/417","2.0.4":"/419","?":"/"}]],[/(webkit|khtml)\/([\w\.]+)/i],[b,w],[/(navigator|netscape\d?)\/([-\w\.]+)/i],[[b,"Netscape"],w],[/mobile vr; rv:([\w\.]+)\).+firefox/i],[w,[b,"Firefox Reality"]],[/ekiohf.+(flow)\/([\w\.]+)/i,/(swiftfox)/i,/(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i,/(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i,/(firefox)\/([\w\.]+)/i,/(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i,/(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i,/(links) \(([\w\.]+)/i],[b,w]],cpu:[[/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i],[[m,"amd64"]],[/(ia32(?=;))/i],[[m,D]],[/((?:i[346]|x)86)[;\)]/i],[[m,"ia32"]],[/\b(aarch64|arm(v?8e?l?|_?64))\b/i],[[m,"arm64"]],[/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],[[m,"armhf"]],[/windows (ce|mobile); ppc;/i],[[m,"arm"]],[/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i],[[m,/ower/,"",D]],[/(sun4\w)[;\)]/i],[[m,"sparc"]],[/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i],[[m,D]]],device:[[/\b(sch-i[89]0\d|shw-m380s|sm-[pt]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],[c,[f,M],[d,h]],[/\b((?:s[cgp]h|gt|sm)-\w+|galaxy nexus)/i,/samsung[- ]([-\w]+)/i,/sec-(sgh\w+)/i],[c,[f,M],[d,g]],[/\((ip(?:hone|od)[\w ]*);/i],[c,[f,k],[d,g]],[/\((ipad);[-\w\),; ]+apple/i,/applecoremedia\/[\w\.]+ \((ipad)/i,/\b(ipad)\d\d?,\d\d?[;\]].+ios/i],[c,[f,k],[d,h]],[/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i],[c,[f,j],[d,h]],[/(?:huawei|honor)([-\w ]+)[;\)]/i,/\b(nexus 6p|\w{2,4}-[atu]?[ln][01259x][012359][an]?)\b(?!.+d\/s)/i],[c,[f,j],[d,g]],[/\b(poco[\w ]+)(?: bui|\))/i,/\b; (\w+) build\/hm\1/i,/\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,/\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i,/\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i],[[c,/_/g," "],[f,N],[d,g]],[/\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i],[[c,/_/g," "],[f,N],[d,h]],[/; (\w+) bui.+ oppo/i,/\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i],[c,[f,"OPPO"],[d,g]],[/vivo (\w+)(?: bui|\))/i,/\b(v[12]\d{3}\w?[at])(?: bui|;)/i],[c,[f,"Vivo"],[d,g]],[/\b(rmx[12]\d{3})(?: bui|;|\))/i],[c,[f,"Realme"],[d,g]],[/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,/\bmot(?:orola)?[- ](\w*)/i,/((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i],[c,[f,T],[d,g]],[/\b(mz60\d|xoom[2 ]{0,2}) build\//i],[c,[f,T],[d,h]],[/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],[c,[f,_],[d,h]],[/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,/\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i,/\blg-?([\d\w]+) bui/i],[c,[f,_],[d,g]],[/(ideatab[-\w ]+)/i,/lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i],[c,[f,"Lenovo"],[d,h]],[/(?:maemo|nokia).*(n900|lumia \d+)/i,/nokia[-_ ]?([-\w\.]*)/i],[[c,/_/g," "],[f,"Nokia"],[d,g]],[/(pixel c)\b/i],[c,[f,P],[d,h]],[/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],[c,[f,P],[d,g]],[/droid.+ ([c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i],[c,[f,U],[d,g]],[/sony tablet [ps]/i,/\b(?:sony)?sgp\w+(?: bui|\))/i],[[c,"Xperia Tablet"],[f,U],[d,h]],[/ (kb2005|in20[12]5|be20[12][59])\b/i,/(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i],[c,[f,"OnePlus"],[d,g]],[/(alexa)webm/i,/(kf[a-z]{2}wi)( bui|\))/i,/(kf[a-z]+)( bui|\)).+silk\//i],[c,[f,O],[d,h]],[/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],[[c,/(.+)/g,"Fire Phone $1"],[f,O],[d,g]],[/(playbook);[-\w\),; ]+(rim)/i],[c,f,[d,h]],[/\b((?:bb[a-f]|st[hv])100-\d)/i,/\(bb10; (\w+)/i],[c,[f,E],[d,g]],[/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],[c,[f,S],[d,h]],[/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],[c,[f,S],[d,g]],[/(nexus 9)/i],[c,[f,"HTC"],[d,h]],[/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,/(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,/(alcatel|geeksphone|nexian|panasonic|sony)[-_ ]?([-\w]*)/i],[f,[c,/_/g," "],[d,g]],[/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],[c,[f,"Acer"],[d,h]],[/droid.+; (m[1-5] note) bui/i,/\bmz-([-\w]{2,})/i],[c,[f,"Meizu"],[d,g]],[/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],[c,[f,"Sharp"],[d,g]],[/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[-_ ]?([-\w]*)/i,/(hp) ([\w ]+\w)/i,/(asus)-?(\w+)/i,/(microsoft); (lumia[\w ]+)/i,/(lenovo)[-_ ]?([-\w]+)/i,/(jolla)/i,/(oppo) ?([\w ]+) bui/i],[f,c,[d,g]],[/(archos) (gamepad2?)/i,/(hp).+(touchpad(?!.+tablet)|tablet)/i,/(kindle)\/([\w\.]+)/i,/(nook)[\w ]+build\/(\w+)/i,/(dell) (strea[kpr\d ]*[\dko])/i,/(le[- ]+pan)[- ]+(\w{1,9}) bui/i,/(trinity)[- ]*(t\d{3}) bui/i,/(gigaset)[- ]+(q\w{1,9}) bui/i,/(vodafone) ([\w ]+)(?:\)| bui)/i],[f,c,[d,h]],[/(surface duo)/i],[c,[f,A],[d,h]],[/droid [\d\.]+; (fp\du?)(?: b|\))/i],[c,[f,"Fairphone"],[d,g]],[/(u304aa)/i],[c,[f,"AT&T"],[d,g]],[/\bsie-(\w*)/i],[c,[f,"Siemens"],[d,g]],[/\b(rct\w+) b/i],[c,[f,"RCA"],[d,h]],[/\b(venue[\d ]{2,7}) b/i],[c,[f,"Dell"],[d,h]],[/\b(q(?:mv|ta)\w+) b/i],[c,[f,"Verizon"],[d,h]],[/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],[c,[f,"Barnes & Noble"],[d,h]],[/\b(tm\d{3}\w+) b/i],[c,[f,"NuVision"],[d,h]],[/\b(k88) b/i],[c,[f,"ZTE"],[d,h]],[/\b(nx\d{3}j) b/i],[c,[f,"ZTE"],[d,g]],[/\b(gen\d{3}) b.+49h/i],[c,[f,"Swiss"],[d,g]],[/\b(zur\d{3}) b/i],[c,[f,"Swiss"],[d,h]],[/\b((zeki)?tb.*\b) b/i],[c,[f,"Zeki"],[d,h]],[/\b([yr]\d{2}) b/i,/\b(dragon[- ]+touch |dt)(\w{5}) b/i],[[f,"Dragon Touch"],c,[d,h]],[/\b(ns-?\w{0,9}) b/i],[c,[f,"Insignia"],[d,h]],[/\b((nxa|next)-?\w{0,9}) b/i],[c,[f,"NextBook"],[d,h]],[/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],[[f,"Voice"],c,[d,g]],[/\b(lvtel\-)?(v1[12]) b/i],[[f,"LvTel"],c,[d,g]],[/\b(ph-1) /i],[c,[f,"Essential"],[d,g]],[/\b(v(100md|700na|7011|917g).*\b) b/i],[c,[f,"Envizen"],[d,h]],[/\b(trio[-\w\. ]+) b/i],[c,[f,"MachSpeed"],[d,h]],[/\btu_(1491) b/i],[c,[f,"Rotor"],[d,h]],[/(shield[\w ]+) b/i],[c,[f,"Nvidia"],[d,h]],[/(sprint) (\w+)/i],[f,c,[d,g]],[/(kin\.[onetw]{3})/i],[[c,/\./g," "],[f,A],[d,g]],[/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],[c,[f,B],[d,h]],[/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],[c,[f,B],[d,g]],[/(ouya)/i,/(nintendo) ([wids3utch]+)/i],[f,c,[d,p]],[/droid.+; (shield) bui/i],[c,[f,"Nvidia"],[d,p]],[/(playstation [345portablevi]+)/i],[c,[f,U],[d,p]],[/\b(xbox(?: one)?(?!; xbox))[\); ]/i],[c,[f,A],[d,p]],[/smart-tv.+(samsung)/i],[f,[d,v]],[/hbbtv.+maple;(\d+)/i],[[c,/^/,"SmartTV"],[f,M],[d,v]],[/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],[[f,_],[d,v]],[/(apple) ?tv/i],[f,[c,"Apple TV"],[d,v]],[/crkey/i],[[c,"Chromecast"],[f,P],[d,v]],[/droid.+aft(\w)( bui|\))/i],[c,[f,O],[d,v]],[/\(dtv[\);].+(aquos)/i],[c,[f,"Sharp"],[d,v]],[/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,/hbbtv\/\d+\.\d+\.\d+ +\([\w ]*; *(\w[^;]*);([^;]*)/i],[[f,R],[c,R],[d,v]],[/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],[[d,v]],[/((pebble))app/i],[f,c,[d,y]],[/droid.+; (glass) \d/i],[c,[f,P],[d,y]],[/droid.+; (wt63?0{2,3})\)/i],[c,[f,B],[d,y]],[/(quest( 2)?)/i],[c,[f,q],[d,y]],[/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],[f,[d,x]],[/droid .+?; ([^;]+?)(?: bui|\) applew).+? mobile safari/i],[c,[d,g]],[/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],[c,[d,h]],[/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],[[d,h]],[/(phone|mobile(?:[;\/]| safari)|pda(?=.+windows ce))/i],[[d,g]],[/(android[-\w\. ]{0,9});.+buil/i],[c,[f,"Generic"]]],engine:[[/windows.+ edge\/([\w\.]+)/i],[w,[b,"EdgeHTML"]],[/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],[w,[b,"Blink"]],[/(presto)\/([\w\.]+)/i,/(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,/ekioh(flow)\/([\w\.]+)/i,/(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i,/(icab)[\/ ]([23]\.[\d\.]+)/i],[b,w],[/rv\:([\w\.]{1,9})\b.+(gecko)/i],[w,b]],os:[[/microsoft (windows) (vista|xp)/i],[b,w],[/(windows) nt 6\.2; (arm)/i,/(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i,/(windows)[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i],[b,[w,F,L]],[/(win(?=3|9|n)|win 9x )([nt\d\.]+)/i],[[b,"Windows"],[w,F,L]],[/ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i,/cfnetwork\/.+darwin/i],[[w,/_/g,"."],[b,"iOS"]],[/(mac os x) ?([\w\. ]*)/i,/(macintosh|mac_powerpc\b)(?!.+haiku)/i],[[b,"Mac OS"],[w,/_/g,"."]],[/droid ([\w\.]+)\b.+(android[- ]x86)/i],[w,b],[/(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i,/(blackberry)\w*\/([\w\.]*)/i,/(tizen|kaios)[\/ ]([\w\.]+)/i,/\((series40);/i],[b,w],[/\(bb(10);/i],[w,[b,E]],[/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i],[w,[b,"Symbian"]],[/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i],[w,[b,"Firefox OS"]],[/web0s;.+rt(tv)/i,/\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],[w,[b,"webOS"]],[/crkey\/([\d\.]+)/i],[w,[b,"Chromecast"]],[/(cros) [\w]+ ([\w\.]+\w)/i],[[b,"Chromium OS"],w],[/(nintendo|playstation) ([wids345portablevuch]+)/i,/(xbox); +xbox ([^\);]+)/i,/\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i,/(mint)[\/\(\) ]?(\w*)/i,/(mageia|vectorlinux)[; ]/i,/([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i,/(hurd|linux) ?([\w\.]*)/i,/(gnu) ?([\w\.]*)/i,/\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,/(haiku) (\w+)/i],[b,w],[/(sunos) ?([\w\.\d]*)/i],[[b,"Solaris"],w],[/((?:open)?solaris)[-\/ ]?([\w\.]*)/i,/(aix) ((\d)(?=\.|\)| )[\w\.])*/i,/\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux)/i,/(unix) ?([\w\.]*)/i],[b,w]]},Z=function(e,i){if(typeof e===u&&(i=e,e=o),!(this instanceof Z))return new Z(e,i).getResult();var r=e||(typeof n!==s&&n.navigator&&n.navigator.userAgent?n.navigator.userAgent:""),t=i?function(e,i){var r={};for(var t in e)i[t]&&i[t].length%2===0?r[t]=i[t].concat(e[t]):r[t]=e[t];return r}(G,i):G;return this.getBrowser=function(){var e,i={};return i.name=o,i.version=o,W.call(i,r,t.browser),i.major=typeof(e=i.version)===l?e.replace(/[^\d\.]/g,"").split(".")[0]:o,i},this.getCPU=function(){var e={};return e.architecture=o,W.call(e,r,t.cpu),e},this.getDevice=function(){var e={};return e.vendor=o,e.model=o,e.type=o,W.call(e,r,t.device),e},this.getEngine=function(){var e={};return e.name=o,e.version=o,W.call(e,r,t.engine),e},this.getOS=function(){var e={};return e.name=o,e.version=o,W.call(e,r,t.os),e},this.getResult=function(){return{ua:this.getUA(),browser:this.getBrowser(),engine:this.getEngine(),os:this.getOS(),device:this.getDevice(),cpu:this.getCPU()}},this.getUA=function(){return r},this.setUA=function(e){return r=typeof e===l&&e.length>255?R(e,255):e,this},this.setUA(r),this};Z.VERSION="1.0.2",Z.BROWSER=z([b,w,"major"]),Z.CPU=z([m]),Z.DEVICE=z([c,f,d,p,g,v,h,y,x]),Z.ENGINE=Z.OS=z([b,w]),typeof i!==s?(e.exports&&(i=e.exports=Z),i.UAParser=Z):r.amdO?(t=function(){return Z}.call(i,r,i,e))===o||(e.exports=t):typeof n!==s&&(n.UAParser=Z);var $=typeof n!==s&&(n.jQuery||n.Zepto);if($&&!$.ua){var Y=new Z;$.ua=Y.getResult(),$.ua.get=function(){return Y.getUA()},$.ua.set=function(e){Y.setUA(e);var i=Y.getResult();for(var r in i)$.ua[r]=i[r]}}}("object"===typeof window?window:this)}}]);