import{a as g,i as m,S as y}from"./assets/vendor-95dc692e.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&a(r)}).observe(document,{childList:!0,subtree:!0});function n(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(e){if(e.ep)return;e.ep=!0;const s=n(e);fetch(e.href,s)}})();async function p(o,t){const a=`https://pixabay.com/api/?${new URLSearchParams({key:"43103378-6af8ee9eb079e11667ecfffdc",q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:"15",page:t})}`;try{return(await g.get(a)).data}catch{console.log(error)}}function h(o,t,n,a){if(o.length<=0){n.classList.add("is-hidden"),a.classList.add("is-hidden"),m.show({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"#ef4040",position:"topRight"});return}const e=o.map(r=>`
          <li class="cards">
          <a href="${r.largeImageURL}"> <img src="${r.webformatURL}" alt="${r.tags}" width="360" height="152"/> </a>
          <div class="card-description">
            <p class="description"><b>Likes</b> ${r.likes}</p>
            <p class="description"><b>Views</b> ${r.views}</p>
            <p class="description"><b>Comments</b> ${r.comments}</p>
            <p class="description"><b>Downloads</b> ${r.downloads}</p>
            </div>
          </li>
      `).join("");t.insertAdjacentHTML("beforeend",e);const s=new y(".gallery a",{captionsData:"alt",captionDelay:250});n.classList.add("is-hidden"),a.classList.remove("is-hidden"),s.refresh()}function L(){return document.querySelector(".cards").getBoundingClientRect().height}const d=document.querySelector("#data-input"),u=document.querySelector(".gallery"),i=document.querySelector(".loader");document.querySelector(".footer-loader");const b=document.querySelector("form"),c=document.querySelector(".load-btn");let l=1,f=0;const v=15;c.classList.add("is-hidden");b.addEventListener("submit",async o=>{if(o.preventDefault(),i.classList.remove("is-hidden"),u.innerHTML="",l=1,d.value===""){m.show({title:"Error",message:"Please, fill the field to start search images. ",backgroundColor:"#ef4040",position:"topRight"});return}try{const t=await p(d.value);f=Math.ceil(t.totalHits/v),console.log(f),h(t.hits,u,i,c)}catch(t){console.log(t)}});c.addEventListener("click",async o=>{o.preventDefault(),i.classList.add("footer-loader"),i.classList.remove("is-hidden"),l+=1;try{const t=await p(d.value,l);h(t.hits,u,i,c)}catch(t){console.log(t)}window.scrollBy({top:L()*2,left:0,behavior:"smooth"}),w()});function w(){l>=f&&(c.classList.add("is-hidden"),m.show({title:"Error",message:"We're sorry, but you've reached the end of search results.",backgroundColor:"#ef4040",position:"topRight"})),i.classList.add("is-hidden")}
//# sourceMappingURL=commonHelpers.js.map
