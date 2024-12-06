import{i as f,S as u}from"./assets/vendor-5ObWk2rO.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function t(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(e){if(e.ep)return;e.ep=!0;const o=t(e);fetch(e.href,o)}})();const d="47426000-935f334b470be797f22188feb",h="https://pixabay.com/api/";function m(s){const i=new URLSearchParams({key:d,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${h}?${i}`).then(t=>{if(!t.ok)throw new Error(t.statusText);return t.json()})}function y(s){return s.map(({webformatURL:i,largeImageURL:t,tags:r,likes:e,views:o,comments:n,downloads:p})=>`
        <li class="photo-item">
        <a class="photo-link" href="${t}" >
        <img class="photo-img" src=${i} alt="${r}"/>
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
          <span class="photo-info-value">${p}</span>
          </div>
       </div>
       </li>
       `).join("")}const c=document.querySelector(".form-search"),l=document.querySelector(".image-gallery"),a=document.querySelector(".loader");c.addEventListener("submit",g);a.style.visibility="hidden";function g(s){s.preventDefault(),a.style.visibility="visible";const i=s.target.elements.imageQuery.value;i!==""&&m(i).then(t=>{if(l.innerHTML="",!t.total){a.style.visibility="hidden",f.show({backgroundColor:"red",position:"topRight",messageColor:"white",iconColor:"white",maxWidth:432,message:"Sorry, there are no images matching your search query. Please try again!"});return}console.log(t),l.innerHTML=y(t.hits),a.style.visibility="hidden",new u(".image-gallery a",{overlayOpacity:.7,captionsData:"alt",captionDelay:250,captionPosition:"bottom",captionType:"attr"}),l.refresh()}).catch(t=>{a.style.visibility="hidden",console.log(t)}).finally(()=>c.reset())}
//# sourceMappingURL=index.js.map
