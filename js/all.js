"use strict";function _createForOfIteratorHelper(e,n){var r,t,o,a,i="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(i)return t=!(r=!0),{s:function(){i=i.call(e)},n:function(){var e=i.next();return r=e.done,e},e:function(e){t=!0,o=e},f:function(){try{r||null==i.return||i.return()}finally{if(t)throw o}}};if(Array.isArray(e)||(i=_unsupportedIterableToArray(e))||n&&e&&"number"==typeof e.length)return i&&(e=i),a=0,{s:n=function(){},n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(e){throw e},f:n};throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(e,n){var r;if(e)return"string"==typeof e?_arrayLikeToArray(e,n):"Map"===(r="Object"===(r=Object.prototype.toString.call(e).slice(8,-1))&&e.constructor?e.constructor.name:r)||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?_arrayLikeToArray(e,n):void 0}function _arrayLikeToArray(e,n){(null==n||n>e.length)&&(n=e.length);for(var r=0,t=new Array(n);r<n;r++)t[r]=e[r];return t}var swiper=new Swiper(".slide-principal",{pagination:{el:".swiper-pagination"},autoplay:{delay:3500,disableOnInteraction:!1}}),swiper=new Swiper(".slide-destaques",{slidesPerView:4,spaceBetween:30,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},breakpoints:{319:{slidesPerView:1.5,spaceBetween:16},460:{slidesPerView:2,spaceBetween:16},768:{slidesPerView:3,spaceBetween:20},1050:{slidesPerView:4,spaceBetween:32}}}),btnDropDown=document.querySelector(".js-btn-dropdown"),dropdown=document.querySelector(".js-dropdown");function openDropDown(e){e.preventDefault(),dropdown.classList.toggle("active")}btnDropDown.addEventListener("click",openDropDown),dropdown.addEventListener("mouseleave",openDropDown);var btnOpenMenu=document.querySelector(".js-btn-menu"),openMenu=document.querySelector(".js-menu-lateral");function openMenuLateral(e){e.preventDefault(),openMenu.classList.toggle("active")}function creatCardProdutos(e,n,r,t){console.log(e)}function listingProducts(e){axios({method:"GET",url:e}).then(function(e){var n,r=[],t=_createForOfIteratorHelper(e.data);try{for(t.s();!(n=t.n()).done;){var o=n.value;r.push({nome:o.name,imagem:o.images_products,preco:o.price,precoPromocional:o.promotional_price})}}catch(e){t.e(e)}finally{t.f()}})}btnOpenMenu.addEventListener("click",openMenuLateral),openMenu.addEventListener("mouseleave",openMenuLateral),listingProducts("https://www.eva-test-api.plataformaeva.com/products");