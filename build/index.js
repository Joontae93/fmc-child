(()=>{"use strict";var e=new Date;function t(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return!1===t?document.querySelector(e):document.querySelectorAll(e)}!function(t){const n=document.getElementById("copyright"),o=e.getFullYear();n.innerHTML=`<p>&copy; ${o} First Methodist Carrollton <br/> All Rights Reserved.`}(),"https://firstchurch.net/hub/"===location.href&&function(){const t=document.getElementById("sundayMornings");0!==e.getDay()&&("none",t.style.display="none")}(),"https://firstchurch.net/jobs/"===location.href&&function(){if(0===t(".x-row-inner a.x-col",!0).length){const e=t(".x-container.max.width.offset");e.innerHTML="",e.innerHTML='<div class="x-container max width offset">There are no jobs to display right now. Please check back later.</div>'}}(),function(){const e=document.querySelector(".the-event__related-events");document.querySelector(".mec-related-events").children.length>0||(e.style.display="none")}()})();