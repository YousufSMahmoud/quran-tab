(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();function c(n){n.forEach(r=>{r.addEventListener("keydown",o=>{o.key=="Enter"&&(console.log(r),r.click())})})}function l(n){const r={threshold:.3};function o(e){e.forEach(t=>{t.isIntersecting?t.target.classList.add("in-view"):t.target.classList.remove("in-view")})}const s=new IntersectionObserver(o,r);n.forEach(e=>{s.observe(e)})}const f=document.querySelectorAll(".faq__question"),u=document.querySelectorAll(".section");c(f);l(u);