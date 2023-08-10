import { c as create_ssr_component, v as validate_component } from "../../chunks/ssr.js";
const app = "";
const Header_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "li.svelte-bzsr6c:hover{text-decoration-line:underline\n}",
  map: null
};
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<img src="./assets/images/ani.gif" alt="ojo"> ${`<button class="nav fixed" data-svelte-h="svelte-1gc1bvi">Table of Contents</button>`} ${``} `;
});
const Footer_svelte_svelte_type_style_lang = "";
const css = {
  code: "footer.svelte-1qx5gmb{margin-top:auto;display:flex;justify-content:center;padding:1.5rem;position:fixed;left:0;bottom:0;width:100%\n}p.svelte-1qx5gmb{display:flex;justify-content:space-between;font-size:0.875rem;line-height:1.25rem;--tw-text-opacity:1;color:rgb(82 82 82 / var(--tw-text-opacity))\n}",
  map: null
};
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<footer class="svelte-1qx5gmb" data-svelte-h="svelte-sidzoc"><p class="backdrop-blur-md rounded svelte-1qx5gmb"><a href="https://www.github.com/rodrigodecuir" target="_blank"><img class="w-4 opacity-80" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/2048px-Octicons-mark-github.svg.png" alt="github"></a> <a href="https://www.linkedin.com/in/rodrigo-decuir-1021bb281/" target="_blank"><img class="w-4 opacity-70" src="https://www.iconpacks.net/icons/1/free-linkedin-icon-112-thumb.png" alt="linkedin"></a> <a class="hover:link" href="/license">©2023</a></p> </footer>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return ` ${validate_component(Header, "Header").$$render($$result, {}, {}, {})} <div class="layout-md"><main> ${slots.default ? slots.default({}) : ``}</main>  ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}</div>`;
});
export {
  Layout as default
};
