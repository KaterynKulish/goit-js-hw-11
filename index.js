import{i as l,S as f}from"./assets/vendor-5ObWk2rO.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&a(r)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const h="47426000-935f334b470be797f22188feb",m="https://pixabay.com/api/";function d(s){const i=new URLSearchParams({key:h,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${m}?${i}`).then(o=>{if(!o.ok)throw new Error(o.statusText);return o.json()})}function y(s){return s.map(({webformatURL:i,largeImageURL:o,tags:a,likes:e,views:t,comments:r,downloads:u})=>`
        <li class="photo-item">
        <a class="photo-link" href="${o}" >
        <img class="photo-img" src=${i} alt="${a}"/>
       </a> 

       <div class="photo-info-container">
          <div class="photo-info-item">
          <span class="photo-info-label">Likes</span>
          <span class="photo-info-value">${e}</span>
          </div>
          <div class="photo-info-item">
          <span class="photo-info-label">Views</span>
          <span class="photo-info-value">${t}</span>
          </div>
          <div class="photo-info-item">
          <span class="photo-info-label">Comments</span>
          <span class="photo-info-value">${r}</span>
          </div>
          <div class="photo-info-item">
          <span class="photo-info-label">Downloads</span>
          <span class="photo-info-value">${u}</span>
          </div>
       </div>
       </li>
       `).join("")}const p=document.querySelector(".form-search"),c=document.querySelector(".image-gallery"),n=document.querySelector(".loader");p.addEventListener("submit",g);n.style.visibility="hidden";function g(s){s.preventDefault(),n.style.visibility="visible";const i=s.target.elements.imageQuery.value.trim();if(i===""){n.style.visibility="hidden";return}d(i).then(o=>{if(c.innerHTML="",!o.total){l.show({backgroundColor:"red",position:"topRight",messageColor:"white",iconColor:"white",maxWidth:432,message:"Sorry, there are no images matching your search query. Please try again!"});return}console.log(o),c.innerHTML=y(o.hits),new f(".image-gallery a",{overlayOpacity:.7,captionsData:"alt",captionDelay:250,captionPosition:"bottom",captionType:"attr"}).refresh()}).catch(o=>{l.error({backgroundColor:"red",position:"topRight",messageColor:"white",iconColor:"white",maxWidth:432,message:o.message}),console.log(o.message)}).finally(()=>{p.reset(),n.style.visibility="hidden"})}
//# sourceMappingURL=index.js.map
