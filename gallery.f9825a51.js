!function(){function t(t){return t&&t.__esModule?t.default:t}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},a={},i=e.parcelRequired7c6;null==i&&((i=function(t){if(t in n)return n[t].exports;if(t in a){var e=a[t];delete a[t];var i={id:t,exports:{}};return n[t]=i,e.call(i.exports,i,i.exports),i.exports}var o=new Error("Cannot find module '"+t+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(t,e){a[t]=e},e.parcelRequired7c6=i),i("iE7OH").register(JSON.parse('{"euV2r":"gallery.f9825a51.js","buPbL":"no-image.0b269193.jpg","6teei":"gallery.cb2e8d70.js"}')),i("4smAb"),i("4F07H");var o;o=i("aNJCr").getBundleURL("euV2r")+i("iE7OH").resolve("buPbL");var c=i("4ot2A"),r=i("jcFG7"),d=document.querySelector(".js-watched-lib-btn"),s=document.querySelector(".js-queue-lib-btn"),l=document.querySelector(".js-library-gallery"),u=document.querySelector(".info-notify-box"),m=(document.querySelector(".info-notify-text"),document.querySelector(".pagination")),v=1,_=1;function p(t){var e=localStorage.getItem(t),n=JSON.parse(e);return n?(_=Math.ceil(n.length/20),(0,r.paginationMarkUp)(v,_),n):u.classList.remove("is-hidden")}window.addEventListener("load",(function(){setTimeout((function(){d.click()}),0)}));var f=p("WATCHED_LIST_DATA_KEY"),b=p("QUEUE_LIST_DATA_KEY");function g(e){if(!e||!e.length)return L(),u.classList.remove("is-hidden");var n=e.map((function(e){L(),(0,c.checkGenresById)(e);var n="";return n=e.poster_path?"https://image.tmdb.org/t/p/w500".concat(e.poster_path):t(o),' <li class="card-wraper" id="'.concat(e.id,'">\n       <a class="card-wraper_link" href="#"><img class="card-img" src="').concat(n,'" alt="').concat(e.title||e.name,'"/></a>\n       <div class="card-title">').concat(e.title||e.name,'</div>\n      <div class="wraper">\n         <div class="card-genre-wraper">\n           <div class="card-genre">').concat((0,c.checkGenresById)(e),'</div>\n         </div>\n         <div class="card-year">\n\n         ').concat(e.release_date.slice(0,4)||e.first_air_date.slice(0,4)||"",'\n\n         </div>\n         <div class="card-rating-wraper"><div class="card-rating">').concat(e.vote_average.toFixed(1),"</div></div>\n       </div>\n     </li>")})).join("");l.insertAdjacentHTML("beforeend",n)}function E(t){d.classList.add("btn-is-active"),s.classList.remove("btn-is-active"),u.classList.add("is-hidden"),1!=t&&(v=1);var e=localStorage.getItem("WATCHED_LIST_DATA_KEY"),n=JSON.parse(e);if(!n||0===n.length)return L(),m.style.display="none",u.classList.remove("is-hidden");m.style.display="flex",_=Math.ceil(n.length/20),(0,r.paginationMarkUp)(v,_);var a=20*(v-1),i=20*(v-1)+20;g(n.slice(a,i))}function y(t){u.classList.add("is-hidden"),s.classList.add("btn-is-active"),d.classList.remove("btn-is-active");var e=localStorage.getItem("QUEUE_LIST_DATA_KEY"),n=JSON.parse(e);if(1!=t&&(v=1),!n||!n.length)return L(),m.style.display="none",u.classList.remove("is-hidden");m.style.display="flex",_=Math.ceil(n.length/20),(0,r.paginationMarkUp)(v,_);var a=20*(v-1),i=20*(v-1)+20;g(n.slice(a,i))}function L(){l.innerHTML=""}g(f),d.classList.add("btn-is-active"),d.addEventListener("click",E),s.addEventListener("click",y),m.addEventListener("click",(function(t){if("..."==t.target.textContent)return;if("P"!==t.target.nodeName)return;v=t.target.textContent,">>"==t.target.textContent&&(v=Number(targetPage.textContent)+1);"<<"==t.target.textContent&&(v=Number(targetPage.textContent)-1);(0,r.paginationMarkUp)(v,_),e=v,n=20*(e-1),a=20*(e-1)+20,f=p("WATCHED_LIST_DATA_KEY"),b=p("QUEUE_LIST_DATA_KEY"),d.classList.contains("btn-is-active")?g(f.slice(n,a)):g(b.slice(n,a));var e,n,a})),i("3qTkO");var T,h,A,S,w;c=i("4ot2A");function k(t){localStorage.setItem("WATCHED_LIST_DATA_KEY",JSON.stringify(t))}function D(t){localStorage.setItem("QUEUE_LIST_DATA_KEY",JSON.stringify(t))}window.addEventListener("scroll",(function(){document.documentElement.style.setProperty("--scroll-y","".concat(window.scrollY,"px"))}));var I=document.querySelector(".js-watched-lib-btn"),U=document.querySelector(".js-library-gallery"),q=document.querySelector(".backdrop-modal"),H=document.querySelector(".button-close"),O=document.querySelector(".modal-movie-card");function C(t){var e=localStorage.getItem(t);return JSON.parse(e)}function x(t){h=document.querySelector(".js-btn-to-watched"),A=document.querySelector(".js-btn-from-watched"),S=document.querySelector(".js-btn-to-queue"),w=document.querySelector(".js-btn-from-queue"),T=+h.id,h.addEventListener("click",M),A.addEventListener("click",Y),S.addEventListener("click",K),w.addEventListener("click",F),function(){var t=C("WATCHED_LIST_DATA_KEY")||[],e=C("QUEUE_LIST_DATA_KEY")||[],n=t.find((function(t){return t.id===T})),a=e.find((function(t){return t.id===T}));0!==t.length&&n||j(A);0!==e.length&&a||j(w);n&&j(h);a&&j(S)}(),H.addEventListener("click",J),q.addEventListener("click",(function(t){return function(t){if("backdrop-modal"!==t.target.classList.value)return;J()}(t)})),document.addEventListener("keydown",(function(t){return Q(t)})),q.classList.remove("is-hidden"),setTimeout((function(){q.firstElementChild.classList.remove("is-hidden")}),350),document.body.classList.add("modal-open")}function j(t){t.style.display="none"}function N(t){t.style.display=""}function M(){var t=W(T),e=C("WATCHED_LIST_DATA_KEY")||[];e.find((function(t){return t.id===T}))||(e.push(t),k(e),j(h),N(A))}function Y(){var t=C("WATCHED_LIST_DATA_KEY")||[];t.find((function(t){return t.id===T}))&&(k(t.filter((function(t){return t.id!==T}))),j(A),N(h));I.classList.contains("btn-is-active")&&(E(1),J())}function K(){var t=W(T),e=C("QUEUE_LIST_DATA_KEY")||[];e.find((function(t){return t.id===T}))||(e.push(t),D(e),j(S),N(w))}function F(){var t=C("QUEUE_LIST_DATA_KEY")||[];t.find((function(t){return t.id===T}))&&(D(t.filter((function(t){return t.id!==T}))),j(w),N(S));I.classList.contains("btn-is-active")||(y(1),J())}function J(t){q.classList.add("is-hidden"),q.firstElementChild.classList.remove("is-hidden"),H.removeEventListener("click",J),q.removeEventListener("click",J),document.removeEventListener("keydown",(function(t){return Q(t)})),document.body.classList.remove("modal-open"),q.style.background="";var e=document.body,n=e.style.top;e.style.position="",e.style.top="",window.scrollTo(0,-1*parseInt(n||"0"))}function Q(t){"Escape"===t.key&&J()}U.addEventListener("click",(function(t){"IMG"===t.target.nodeName&&R(t)}));var R=function(e){var n=document.documentElement.style.getPropertyValue("--scroll-y"),a=document.body;a.style.position="fixed",a.style.top="-".concat(n);var i=W(e.target.closest("li").id);i&&(T=i.id,function(e){if(null!==e.backdrop_path){var n="https://image.tmdb.org/t/p/original/".concat(e.backdrop_path);q.style.backgroundImage="url('".concat(n,"')"),q.style.backgroundSize="cover",q.style.backgroundPosition="50% 50%"}!function(e){var n="https://image.tmdb.org/t/p/w500",a="";a=e.poster_path?"".concat(n).concat(e.poster_path):t(o);var i="\n      <div class='modal-movie-card__wrappe-img'>\n                <img id=\"".concat(e.id,'" class="modal-movie-card__image" src="').concat(a,'" alt="').concat(e.title||e.name,"\" />\n            </div>\n            <div class='modal-movie-data'>\n                <h2 class='modal-movie-data__title'>").concat(e.title||e.name,"</h2>\n            <table class='modal-movie-data-table'>\n                <tr class='modal-movie-data-table__row'>\n                    <td>\n                        <p class='modal-movie-data__attribute'>Vote / Votes</p>\n                    </td>\n                    <td>\n                        <p><span class='modal-movie-data__vote'>").concat(e.vote_average.toFixed(1),"</span> / ").concat(e.vote_count,"</p>\n                    </td>\n                </tr>\n                <tr class='modal-movie-data-table__row'>\n                    <td>\n                        <p>Popularity</p>\n                    </td>\n                    <td>\n                        <p>").concat(e.popularity.toFixed(1),"</p>\n                    </td>\n                </tr>\n                <tr class='modal-movie-data-table__row'>\n                    <td>\n                        <p>Original Title</p>\n                    </td>\n                    <td>\n                        <p>").concat(e.original_title,"</p>\n                    </td>\n                </tr>\n                <tr class='modal-movie-data-table__row'>\n                    <td>\n                        <p>Genre</p>\n                    </td>\n                    <td>\n                        <p>").concat((0,c.checkGenresByIdModal)(e),"</p>\n                    </td>\n                </tr>\n            </table>\n            <h3 class='modal-movie-data__about_title'>About</h3>\n            <p class='modal-movie-data__about'>").concat(e.overview,"</p>\n            <ul class='modal-movie-data__btn-list'>\n                <li class='modal-movie-data__btn-item'  >\n                    <button id='").concat(e.id,"' class='modal-movie-data__btn modal-movie-data__btn-watched js-btn-to-watched' type='button' data-action='").concat(e.id,"'   >\n                        ADD TO WATCHED\n                    </button>\n                    <button  id='").concat(e.id,"' class='modal-movie-data__btn modal-movie-data__btn-watched active js-btn-from-watched' type='button' data-action='").concat(e.id,"'>\n                        REMOVE FROM WATCHED\n                    </button>\n                </li>\n                <li class='modal-movie-data__button-item' >\n                    <button  id='").concat(e.id,"' class='modal-movie-data__btn modal-movie-data__btn-queue js-btn-to-queue' type='button' data-action='").concat(e.id,"'>\n                        ADD TO QUEUE\n                    </button>\n                    <button id='").concat(e.id,"' class='modal-movie-data__btn modal-movie-data__btn-queue active js-btn-from-queue' type='button' data-action='").concat(e.id,"'>\n                        REMOVE FROM QUEUE\n                    </button>\n                </li>\n            </ul>\n            <div class=\"trailer-btn-wrapper\">\n            <button  id='").concat(e.id,"' class='trailer-btn' type='button' data-action='").concat(e.id,"'>\n                        watch trailer\n                    </button>\n            </div>\n            </div>");O.innerHTML=i}(e)}(i),x())};function W(t){if(I.classList.contains("btn-is-active")){var e=localStorage.getItem("WATCHED_LIST_DATA_KEY");return JSON.parse(e).find((function(e){return e.id===Number(t)}))}var n=localStorage.getItem("QUEUE_LIST_DATA_KEY");return JSON.parse(n).find((function(e){return e.id===Number(t)}))}i("AGNCF")}();
//# sourceMappingURL=gallery.f9825a51.js.map
