!function(n){var e={};function a(r){if(e[r])return e[r].exports;var t=e[r]={i:r,l:!1,exports:{}};return n[r].call(t.exports,t,t.exports,a),t.l=!0,t.exports}a.m=n,a.c=e,a.d=function(n,e,r){a.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:r})},a.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},a.t=function(n,e){if(1&e&&(n=a(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var t in n)a.d(r,t,function(e){return n[e]}.bind(null,t));return r},a.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return a.d(e,"a",e),e},a.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},a.p="",a(a.s=4)}([function(n,e,a){var r=a(1),t=a(2);"string"==typeof(t=t.__esModule?t.default:t)&&(t=[[n.i,t,""]]);var i={insert:"head",singleton:!1},o=(r(t,i),t.locals?t.locals:{});n.exports=o},function(n,e,a){"use strict";var r,t=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},i=function(){var n={};return function(e){if(void 0===n[e]){var a=document.querySelector(e);if(window.HTMLIFrameElement&&a instanceof window.HTMLIFrameElement)try{a=a.contentDocument.head}catch(n){a=null}n[e]=a}return n[e]}}(),o=[];function s(n){for(var e=-1,a=0;a<o.length;a++)if(o[a].identifier===n){e=a;break}return e}function c(n,e){for(var a={},r=[],t=0;t<n.length;t++){var i=n[t],c=e.base?i[0]+e.base:i[0],l=a[c]||0,d="".concat(c," ").concat(l);a[c]=l+1;var u=s(d),p={css:i[1],media:i[2],sourceMap:i[3]};-1!==u?(o[u].references++,o[u].updater(p)):o.push({identifier:d,updater:g(p,e),references:1}),r.push(d)}return r}function l(n){var e=document.createElement("style"),r=n.attributes||{};if(void 0===r.nonce){var t=a.nc;t&&(r.nonce=t)}if(Object.keys(r).forEach((function(n){e.setAttribute(n,r[n])})),"function"==typeof n.insert)n.insert(e);else{var o=i(n.insert||"head");if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(e)}return e}var d,u=(d=[],function(n,e){return d[n]=e,d.filter(Boolean).join("\n")});function p(n,e,a,r){var t=a?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(n.styleSheet)n.styleSheet.cssText=u(e,t);else{var i=document.createTextNode(t),o=n.childNodes;o[e]&&n.removeChild(o[e]),o.length?n.insertBefore(i,o[e]):n.appendChild(i)}}function f(n,e,a){var r=a.css,t=a.media,i=a.sourceMap;if(t?n.setAttribute("media",t):n.removeAttribute("media"),i&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleSheet)n.styleSheet.cssText=r;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(r))}}var h=null,m=0;function g(n,e){var a,r,t;if(e.singleton){var i=m++;a=h||(h=l(e)),r=p.bind(null,a,i,!1),t=p.bind(null,a,i,!0)}else a=l(e),r=f.bind(null,a,e),t=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(a)};return r(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;r(n=e)}else t()}}n.exports=function(n,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=t());var a=c(n=n||[],e);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var r=0;r<a.length;r++){var t=s(a[r]);o[t].references--}for(var i=c(n,e),l=0;l<a.length;l++){var d=s(a[l]);0===o[d].references&&(o[d].updater(),o.splice(d,1))}a=i}}}},function(n,e,a){(e=a(3)(!1)).push([n.i,"@import url(https://fonts.googleapis.com/css?family=Open+Sans:300,400&display=swap);"]),e.push([n.i,"body {\n  margin: 0;\n  padding: 0;\n  background-color: #f4f4f4;\n  color: #3c484e;\n  font-family: 'Open Sans', sans-serif;\n}\n\n.Header-main {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.Header a {\n  text-decoration: none;\n  color: #15302C;\n}\n\n.Main {\n  padding: 10px;\n  grid-template-columns: minmax(auto, 976px);\n  display: grid;\n  justify-content: center;\n}\n\n.Characters {\n  grid-template-columns: repeat(8, 120px);\n  grid-gap: 1.5rem;\n  grid-row-gap: 1.5em;\n  display: grid;\n  justify-content: center;\n}\n\n.Characters-inner {\n  grid-template-columns: 120px 1fr;\n  grid-gap: 1.5rem;\n  grid-row-gap: 1.5em;\n  display: grid;\n  max-width: 1000px;\n  margin: 0 auto;\n}\n\n.Characters-card {\n  text-decoration: none;\n  box-shadow: 8px 14px 38px rgba(39,44,49,.06), 1px 3px 8px rgba(39,44,49,.03);\n  border-radius: 5px;\n  margin: 0 0 20px 0;\n  display: block;\n  animation-duration: 2s;\n  animation-name: fade;\n}\n\n.Characters-card img {\n  width: 100%;\n  height: auto;\n  border-radius: 5px 5px 0 0;\n}\n\n.Characters-card h2 {\n  font-size: 18px;\n  font-weight: 400;\n  text-align: center;\n  text-transform: capitalize;\n}\n\n.Characters-card h3 {\n  font-size: 18px;\n  font-weight: 400;\n  text-align: left;\n  margin: 20px;\n}\n\n.Characters-item {\n  text-decoration: none;\n  box-shadow: 8px 14px 38px rgba(39,44,49,.06), 1px 3px 8px rgba(39,44,49,.03);\n  border-radius: 5px;\n  margin: 0 0 20px 0;\n  display: block;\n  animation-duration: 2s;\n  animation-name: fade;\n  text-align: center;\n}\n\n.Characters-item:hover {\n  box-shadow: 8px 14px 38px rgba(39,44,49, 0.3), 1px 3px 8px rgba(39,44,49,.03);\n}\n\n.Characters-item img {\n  width: 100px;\n  height: auto;\n  border-radius: 5px 5px 0 0;\n}\n\n.Characters-item h2 {\n  font-size: 18px;\n  font-weight: 300;\n  padding: 5px 10px;\n  text-transform: capitalize;\n}\n\n.Characters-item a {\n  text-decoration: none;\n  color: #026C86;\n}\n\n.Character-skins {\n  max-width: 1000px;\n  margin: 0 auto;\n  display: grid;\n  grid-template-columns: repeat(3, 320px);\n  gap: 10px;\n}\n\n.Character-skins figure {\n  margin: 0;\n}\n\n.Character-skins img {\n  width: 100%;\n  border-radius: 5px;\n}\n\n@keyframes fade {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n\n.Main-loading {\n  border: 4px solid #f3f3f3;\n  border-top: 4px solid #3498db;\n  border-radius: 50%;\n  width: 20px;\n  height: 20px;\n  animation: spin 2s linear infinite;\n}\n\n@keyframes spin {\n  0% { transform: rotate(0deg); }\n  100% { transform: rotate(360deg); }\n}",""]),n.exports=e},function(n,e,a){"use strict";n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var a=function(n,e){var a=n[1]||"",r=n[3];if(!r)return a;if(e&&"function"==typeof btoa){var t=(o=r,s=btoa(unescape(encodeURIComponent(JSON.stringify(o)))),c="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),"/*# ".concat(c," */")),i=r.sources.map((function(n){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(n," */")}));return[a].concat(i).concat([t]).join("\n")}var o,s,c;return[a].join("\n")}(e,n);return e[2]?"@media ".concat(e[2]," {").concat(a,"}"):a})).join("")},e.i=function(n,a,r){"string"==typeof n&&(n=[[null,n,""]]);var t={};if(r)for(var i=0;i<this.length;i++){var o=this[i][0];null!=o&&(t[o]=!0)}for(var s=0;s<n.length;s++){var c=[].concat(n[s]);r&&t[c[0]]||(a&&(c[2]?c[2]="".concat(a," and ").concat(c[2]):c[2]=a),e.push(c))}},e}},function(n,e,a){"use strict";a.r(e);var r=()=>'\n  <div class="Header-main">\n    <div class="Header-logo">\n      <h1>\n        <a href="/">\n          League of Legends\n        </a>\n      </h1>\n    </div>\n    <div class=""Header-nav>\n      <a href="#/about/">\n        About\n      </a>\n    </div>\n  </div>\n';const t="https://api-lol.herokuapp.com/api/champions";var i=async n=>{const e=n?`${t}/${n}`:t;try{return await fetch(e).then(n=>n.json())}catch(n){console.log("Fetch error",n)}};a(0);var o=()=>location.hash.replace(/#\/([a-z]+-?[a-z]+)\/?/,"$1").toLowerCase()||"/";var s=()=>'\n  <div class="Error404">\n    <h2>Error 404<h2>\n  </div>\n';var c=["aatrox","ahri","akali","alistar","amumu","anivia","annie","aphelios","ashe","aurelion-sol","azir","bard","blitzcrank","brand","braum","caitlyn","camille","cassiopeia","cho-gath","corki","darius","diana","dr-mundo","draven","ekko","elise","evelynn","ezreal","fiddlesticks","fiora","fizz","galio","gangplank","garen","gnar","gragas","graves","hecarim","heimerdinger","illaoi","irelia","ivern","janna","jarvan-iv","jax","jayce","jhin","jinx","kai-sa","kalista","karma","karthus","kassadin","katarina","kayle","kayn","kennen","kha-zix","kindred","kled","kog-maw","leblanc","lee-sin","leona","lissandra","lucian","lulu","lux","malphite","malzahar","maokai","master-yi","miss-fortune","mordekaiser","morgana","nami","nasus","nautilus","neeko","nidalee","nocturne","nunu","olaf","orianna","ornn","pantheon","poppy","pyke","qiyana","quinn","rakan","rammus","rek-sai","renekton","rengar","riven","rumble","ryze","sejuani","senna","sett","shaco","shen","shyvana","singed","sion","sivir","skarner","sona","soraka","swain","sylas","syndra","tahm-kench","taliyah","talon","taric","teemo","thresh","tristana","trundle","tryndamere","twisted-fate","twitch","udyr","urgot","varus","vayne","veigar","vel-koz","vi","viktor","vladimir","volibear","warwick","wukong","xayah","xerath","xin-zhao","yasuo","yorick","yuumi","zac","zed","ziggs","zilean","zoe","zyra"];var l=n=>c.includes(n);var d=n=>{switch(n){case"/":return"/";case"/about":return"/about";default:return l(n)?"/:name":"/"+n}};const u={"/":async()=>`\n    <div class="Characters">\n      ${(await i()).map(n=>`      \n        <article class="Characters-item">\n          <a href="#/${n.name}/">\n            <img src="${n.champion_image}" alt="${n.name}" loading="lazy"/>\n            <h2>${n.name}</h2>\n          </a>\n        </article>\n      `).join("")}\n    </div>\n  `,"/:name":async()=>{const n=o(),e=await i(n);return`\n    <div class="Characters-inner">\n\n      <article class="Characters-card">\n        <img src="${e.champion_image}" alt="${e.name}" />\n        <h2>${e.name}</h2>\n      </article>\n\n      <article class="Characters-card">\n        <h3>Alias: ${e.alias}</h3>\n        <h3>Role: ${e.role}</h3>\n        <h3>Region: ${e.region}</h3> \n      </article>\n    </div>\n\n    <article class="Character-skins">\n      ${e.skins.map(n=>`<figure>\n          <img src="${n}" />  \n        </figure>`).join("")}\n      </article>\n  `},"/about":()=>"About"};var p=async()=>{const n=document.getElementById("header")||null,e=document.getElementById("content")||null;n.innerHTML=await r();let a=o(),t=await d(a),i=u[t]?u[t]:s;e.innerHTML=await i()};window.addEventListener("load",p),window.addEventListener("hashchange",p)}]);