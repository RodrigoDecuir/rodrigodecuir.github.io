import { c as create_ssr_component, v as validate_component } from "../../chunks/ssr.js";
const app = "";
const Header_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "a.svelte-1pf88gh{text-decoration-thickness:2px;text-underline-offset:8px\n}a.svelte-1pf88gh:hover{text-decoration-line:underline\n}h1.svelte-1pf88gh{padding-left:0.25rem;padding-right:0.25rem;padding-top:0.5rem;padding-bottom:0.5rem;font-weight:600\n}ul.svelte-1pf88gh{overflow:hidden;border-radius:0.75rem\n}li.svelte-1pf88gh{padding-top:0.5rem;padding-bottom:0.5rem\n}",
  map: null
};
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let isDropdownVisible = false;
  function hideDropdown() {
    isDropdownVisible = false;
  }
  function handleOutsideClick(event) {
    const dropdown = document.querySelector(".nav");
    if (!dropdown || !dropdown.contains(event.target)) {
      hideDropdown();
    }
  }
  onMount(() => {
    document.addEventListener("click", handleOutsideClick);
  });
  onDestroy(() => {
    document.removeEventListener("click", handleOutsideClick);
  });
  $$result.css.add(css$1);
  return `${!isDropdownVisible ? `<button class="nav px-2" data-svelte-h="svelte-c1ojql">Table of Contents</button>` : ``} ${isDropdownVisible ? ` <div class="nav" data-svelte-h="svelte-17w3of"><h1 class="svelte-1pf88gh">Table of Contents</h1> <nav><ul class="svelte-1pf88gh"><li class="svelte-1pf88gh">   ⚬ <a class="decoration-[#A6B3DF] svelte-1pf88gh" href="/">About me</a></li> <li class="svelte-1pf88gh">   ⚬ <a class="decoration-[#e099e6] svelte-1pf88gh" href="/projects">Projects</a></li> <li class="svelte-1pf88gh">   ⚬ <a class="decoration-[#99e6ab] svelte-1pf88gh" href="/writing">Writing</a></li></ul></nav></div>` : ``}`;
});
const Footer_svelte_svelte_type_style_lang = "";
const css = {
  code: "footer.svelte-mn5yb0{display:flex;justify-content:center;padding:1.5rem\n}p.svelte-mn5yb0{display:flex;justify-content:space-between;font-size:0.875rem;line-height:1.25rem;--tw-text-opacity:1;color:rgb(82 82 82 / var(--tw-text-opacity))\n}",
  map: null
};
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<footer class="svelte-mn5yb0" data-svelte-h="svelte-xbapyk"><p class="backdrop-blur-md rounded svelte-mn5yb0"><a href="https://www.github.com/rodrigodecuir" target="_blank"><img class="w-4 opacity-80" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/2048px-Octicons-mark-github.svg.png" alt="github"></a> <a href="https://www.linkedin.com/in/rodrigo-decuir-1021bb281/" target="_blank"><img class="w-4 opacity-70" src="https://www.iconpacks.net/icons/1/free-linkedin-icon-112-thumb.png" alt="linkedin"></a> ©<a class="hover:link" href="/license">2023</a></p> </footer>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="flex flex-col h-screen justify-between"> ${validate_component(Header, "Header").$$render($$result, {}, {}, {})} <main> ${slots.default ? slots.default({}) : ``}</main>   ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})} </div>`;
});
export {
  Layout as default
};
