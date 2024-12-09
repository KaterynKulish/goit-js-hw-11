import{i as l,S as u}from"./assets/vendor-5ObWk2rO.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function t(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(e){if(e.ep)return;e.ep=!0;const o=t(e);fetch(e.href,o)}})();const d="47426000-935f334b470be797f22188feb",f="https://pixabay.com/api/";function h(n){const i=new URLSearchParams({key:d,q:n,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${f}?${i}`).then(t=>{if(!t.ok)throw new Error(t.statusText);return t.json()})}function m(n){return n.map(({webformatURL:i,largeImageURL:t,tags:s,likes:e,views:o,comments:r,downloads:p})=>`
        <li class="photo-item">
        <a class="photo-link" href="${t}" >
        <img class="photo-img" src=${i} alt="${s}"/>
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
          <span class="photo-info-value">${r}</span>
          </div>
          <div class="photo-info-item">
          <span class="photo-info-label">Downloads</span>
          <span class="photo-info-value">${p}</span>
          </div>
       </div>
       </li>
       `).join("")}const c=document.querySelector(".form-search");document.querySelector(".image-gallery");const a=document.querySelector(".loader");c.addEventListener("submit",y);a.style.visibility="hidden";function y(n){n.preventDefault(),a.style.visibility="visible";const i=n.target.elements.imageQuery.value.trim();if(i===""){a.style.visibility="hidden";return}h(i).then(t=>{if(s.innerHTML="",!t.total){a.style.visibility="hidden",l.show({backgroundColor:"red",position:"topRight",messageColor:"white",iconColor:"white",maxWidth:432,message:"Sorry, there are no images matching your search query. Please try again!"});return}console.log(t),s.innerHTML=m(t.hits),a.style.visibility="hidden";const s=new u(".image-gallery a",{overlayOpacity:.7,captionsData:"alt",captionDelay:250,captionPosition:"bottom",captionType:"attr"});s.refresh()}).catch(t=>{l.error({backgroundColor:"red",position:"topRight",messageColor:"white",iconColor:"white",maxWidth:432,message:t.message}),a.style.visibility="hidden",console.log(t.message)}).finally(()=>c.reset())}
//# sourceMappingURL=index.js.map
