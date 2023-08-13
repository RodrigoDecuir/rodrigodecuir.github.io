import { c as create_ssr_component } from "../../chunks/ssr.js";
const Error = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="text-center p-12 manrope" data-svelte-h="svelte-9thzhc"><h1 class="text-4xl italic mb-auto"><span class="text-red-800">err</span>or 404</h1> <a href="/" class="text-blue-700 hover:text-blue-500 transition-colors text-lg">return home</a></div>`;
});
export {
  Error as default
};
