import{i as c}from"./assets/vendor-I1I71QQ2.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function t(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(e){if(e.ep)return;e.ep=!0;const o=t(e);fetch(e.href,o)}})();const l="47426000-935f334b470be797f22188feb",f="https://pixabay.com/api";function p(r){const s=new URLSearchParams({key:l,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${f}?${s}`).then(t=>{if(!t.ok)throw new Error(t.statusText);return t.json()})}function u(r){return r.map(({webformatURL:s,largeImageURL:t,tags:i,likes:e,views:o,comments:n,downloads:a})=>`
        <li class="photo-item">
        <a class="photo-link" href="${t}" >
        <img src=${s} alt="${i}"/>
       </a> 
       <div class="photo-info-container">
          <div class="photo-info-item">
          <span class="photo-info-label">Likes</span>
          <span class="photo-info-value">${e}</span>
          </div>
          <div class="photo-info-item">
          <span class="photo-info-label">Views</span>
          <span class="photo-info-value">${o}</span>
          </div>
          <div class="photo-info-item">
          <span class="photo-info-label">Comments</span>
          <span class="photo-info-value">${n}</span>
          </div>
          <div class="photo-info-item">
          <span class="photo-info-label">Downloads</span>
          <span class="photo-info-value">${a}</span>
          </div>
       </div>
       </li>
       `).join("")}const h=document.querySelector(".form-search"),m=document.querySelector(".image-gallery");h.addEventListener("submit",d);function d(r){r.preventDefault();const s=r.target.elements.imageQuery.value;s!==""&&p(s).then(t=>{console.log(t),m.innerHTML=u(t.hits)}).catch(t=>{c.show({message:"Sorry, there are no images matching your search query. Please try again!"})})}
//# sourceMappingURL=index.js.map
