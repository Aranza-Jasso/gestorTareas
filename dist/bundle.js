(()=>{"use strict";var n={365:(n,e,t)=>{t.d(e,{A:()=>s});var r=t(354),o=t.n(r),a=t(314),i=t.n(a)()(o());i.push([n.id,"/* Estilos generales*/\nbody {\n    font-family: Arial, sans-serif;\n    background-color: #f4f4f4;\n    margin: 0;\n    padding: 0;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 100vh;\n}\n\n/* Estilos del contenedor principal */\n#app {\n    background-color: white;\n    padding: 20px;\n    border-radius: 5px;\n    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n}\n\n/* Estilos para el formulario */\nform {\n    display: flex;\n    justify-content: space-between;\n}\n\n/* Estilos al input */\ninput {\n    width: 75%;\n    padding: 8px;\n    margin-right: 10px;\n    border: 1px solid #ddd;\n    border-radius: 3px;\n}\n\n/* Estilos al botón */\nbutton {\n    padding: 5px 8px;\n    background-color: #9c89b8;\n    color: white;\n    border: none;\n    border-radius: 3px;\n    cursor: pointer;\n}\n\n/* Estilos de la lista */\nul {\n    list-style: none;\n    padding: 0;\n}\n\n/* Estilos a los elemntos de la lista */\nli {\n    background-color: #f4f4f4;\n    padding: 10px;\n    border: 1px solid #ddd;\n    margin-top: 10px;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n}\n\n/* Estilos para marcar tarea completada */\nli.completed {\n    text-decoration: line-through;\n    color: #888;\n}","",{version:3,sources:["webpack://./src/styles.css"],names:[],mappings:"AAAA,qBAAqB;AACrB;IACI,8BAA8B;IAC9B,yBAAyB;IACzB,SAAS;IACT,UAAU;IACV,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,aAAa;AACjB;;AAEA,qCAAqC;AACrC;IACI,uBAAuB;IACvB,aAAa;IACb,kBAAkB;IAClB,uCAAuC;AAC3C;;AAEA,+BAA+B;AAC/B;IACI,aAAa;IACb,8BAA8B;AAClC;;AAEA,qBAAqB;AACrB;IACI,UAAU;IACV,YAAY;IACZ,kBAAkB;IAClB,sBAAsB;IACtB,kBAAkB;AACtB;;AAEA,qBAAqB;AACrB;IACI,gBAAgB;IAChB,yBAAyB;IACzB,YAAY;IACZ,YAAY;IACZ,kBAAkB;IAClB,eAAe;AACnB;;AAEA,wBAAwB;AACxB;IACI,gBAAgB;IAChB,UAAU;AACd;;AAEA,uCAAuC;AACvC;IACI,yBAAyB;IACzB,aAAa;IACb,sBAAsB;IACtB,gBAAgB;IAChB,aAAa;IACb,mBAAmB;IACnB,8BAA8B;AAClC;;AAEA,yCAAyC;AACzC;IACI,6BAA6B;IAC7B,WAAW;AACf",sourcesContent:["/* Estilos generales*/\r\nbody {\r\n    font-family: Arial, sans-serif;\r\n    background-color: #f4f4f4;\r\n    margin: 0;\r\n    padding: 0;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    height: 100vh;\r\n}\r\n\r\n/* Estilos del contenedor principal */\r\n#app {\r\n    background-color: white;\r\n    padding: 20px;\r\n    border-radius: 5px;\r\n    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n/* Estilos para el formulario */\r\nform {\r\n    display: flex;\r\n    justify-content: space-between;\r\n}\r\n\r\n/* Estilos al input */\r\ninput {\r\n    width: 75%;\r\n    padding: 8px;\r\n    margin-right: 10px;\r\n    border: 1px solid #ddd;\r\n    border-radius: 3px;\r\n}\r\n\r\n/* Estilos al botón */\r\nbutton {\r\n    padding: 5px 8px;\r\n    background-color: #9c89b8;\r\n    color: white;\r\n    border: none;\r\n    border-radius: 3px;\r\n    cursor: pointer;\r\n}\r\n\r\n/* Estilos de la lista */\r\nul {\r\n    list-style: none;\r\n    padding: 0;\r\n}\r\n\r\n/* Estilos a los elemntos de la lista */\r\nli {\r\n    background-color: #f4f4f4;\r\n    padding: 10px;\r\n    border: 1px solid #ddd;\r\n    margin-top: 10px;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n}\r\n\r\n/* Estilos para marcar tarea completada */\r\nli.completed {\r\n    text-decoration: line-through;\r\n    color: #888;\r\n}"],sourceRoot:""}]);const s=i},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var l=0;l<n.length;l++){var d=[].concat(n[l]);r&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),e.push(d))}},e}},354:n=>{n.exports=function(n){var e=n[1],t=n[3];if(!t)return e;if("function"==typeof btoa){var r=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(r),a="/*# ".concat(o," */");return[e].concat([a]).join("\n")}return[e].join("\n")}},72:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var a={},i=[],s=0;s<n.length;s++){var c=n[s],l=r.base?c[0]+r.base:c[0],d=a[l]||0,A="".concat(l," ").concat(d);a[l]=d+1;var p=t(A),u={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)e[p].references++,e[p].updater(u);else{var f=o(u,r);r.byIndex=s,e.splice(s,0,{identifier:A,updater:f,references:1})}i.push(A)}return i}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var a=r(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var s=t(a[i]);e[s].references--}for(var c=r(n,o),l=0;l<a.length;l++){var d=t(a[l]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}a=c}}},659:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},540:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var a=e[r]={id:r,exports:{}};return n[r](a,a.exports,t),a.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),t.nc=void 0;var r=t(72),o=t.n(r),a=t(825),i=t.n(a),s=t(659),c=t.n(s),l=t(56),d=t.n(l),A=t(540),p=t.n(A),u=t(113),f=t.n(u),m=t(365),g={};g.styleTagTransform=f(),g.setAttributes=d(),g.insert=c().bind(null,"head"),g.domAPI=i(),g.insertStyleElement=p(),o()(m.A,g),m.A&&m.A.locals&&m.A.locals;var B=JSON.parse(localStorage.getItem("tasks"))||[],C=function(){var n=document.getElementById("task-list");n.innerHTML="",B.forEach((function(e){var t=document.createElement("li");t.setAttribute("data-id",e.id),!0===e.completed&&t.classList.add("completed"),t.innerHTML="\n            ".concat(e.text,'\n            <button class="delete"> Borrar </button>\n            <button class="toggle"> ').concat(!0===e.completed?"Regresar":"Completado"," </button>\n        "),n.appendChild(t)}))};document.addEventListener("DOMContentLoaded",(function(){C(),document.getElementById("task-form").addEventListener("submit",(function(n){n.preventDefault();var e,t,r=document.getElementById("task-input").value;""!==r&&(e=r,t={id:Date.now(),text:e,completed:!1},B.push(t),localStorage.setItem("tasks",JSON.stringify(B)),C(),document.getElementById("task-input").value="")})),document.getElementById("task-list").addEventListener("click",(function(n){if(n.target.classList.contains("delete")){var e=n.target.parentElement.getAttribute("data-id");t=e,B=B.filter((function(n){return n.id!==parseInt(t)})),localStorage.setItem("tasks",JSON.stringify(B)),C()}var t;n.target.classList.contains("toggle")&&(function(n){B=B.map((function(e){return e.id===parseInt(n)&&(e.completed=!e.completed),e})),localStorage.setItem("tasks",JSON.stringify(B))}(n.target.parentElement.getAttribute("data-id")),C())}))}))})();
//# sourceMappingURL=bundle.js.map