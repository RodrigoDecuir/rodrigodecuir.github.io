import { c as create_ssr_component, v as validate_component } from "../../../../../../chunks/ssr.js";
import { I as Index } from "../../../../../../chunks/Index.js";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="lg:invisible md:invisible" data-svelte-h="svelte-h70a86"><a href="https://pixel-me.tokyo/en/"><img class="image" src="./../assets/images/manik-32.png" alt="ojo"></a></div> ${validate_component(Index, "Index").$$render($$result, {}, {}, {})} <div class="layout-md pt-14">${slots.default ? slots.default({}) : ``}</div>`;
});
export {
  Layout as default
};
