export default async function e(e,t){t&&(await import(t)).default();let a,r=e=>document.querySelectorAll(e),i=r("[island='client:load']");for(let e=0;e<i.length;e++){a||(a=(await import("../cache/undefined")).default);let t=i[e],r=t.getAttribute("__filename"),l=t.getAttribute("__compname")||"default",n=(await import("/__reejs/serve/"+r))[l];a.hydrate(a.createElement(n),t)}i=r("[island='client:idle']");for(let e=0;e<i.length;e++){let t=i[e];console.log(t);let r=t.getAttribute("__filename"),l=t.getAttribute("__compname")||"default";window.requestIdleCallback((async()=>{a||(a=await import("../cache/undefined"));let e=(await import("/__reejs/serve/"+r))[l];a.hydrate(a.createElement(e),t)}))}if(i=r("[island='client:visible']"),i.length>0){const e=new IntersectionObserver((e=>{e.forEach((async e=>{if(e.isIntersecting){a||(a=await import("../cache/undefined"));let t=e.target,r=t.getAttribute("__filename"),i=t.getAttribute("__compname")||"default",l=(await import("/__reejs/serve/"+r))[i];a.hydrate(a.createElement(l),t)}}))}));for(let t=0;t<i.length;t++)e.observe(i[t])}i=r("[island='client:media']");for(let e=0;e<i.length;e++){let t=i[e],r=t.getAttribute("__filename"),l=t.getAttribute("__compname")||"default",n=t.getAttribute("mediaquery");n||console.warn("Mediaquery attribute is missing for",t);const c=window.matchMedia(n),o=async e=>{if(e.matches){a||(a=await import("../cache/undefined"));let e=(await import("/__reejs/serve/"+r))[l];a.hydrate(a.createElement(e),t)}else c.addEventListener("change",o,{once:!0})};o(c)}i=r("[island='user:click']");for(let e=0;e<i.length;e++){let t=i[e],r=t.getAttribute("__filename"),l=t.getAttribute("__compname")||"default";t.addEventListener("click",(async()=>{a||(a=await import("../cache/undefined"));let e=(await import("/__reejs/serve/"+r))[l];a.hydrate(a.createElement(e),t),t.children[0].click()}),{once:!0})}i=r("[island='user:hover']");for(let e=0;e<i.length;e++){let t=i[e],r=t.getAttribute("__filename"),l=t.getAttribute("__compname")||"default";t.addEventListener("mouseover",(async()=>{a||(a=await import("../cache/undefined"));let e=(await import("/__reejs/serve/"+r))[l];a.hydrate(a.createElement(e),t)}),{once:!0})}}