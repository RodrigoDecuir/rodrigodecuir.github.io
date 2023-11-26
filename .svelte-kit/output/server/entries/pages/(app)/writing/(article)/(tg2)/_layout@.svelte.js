import { c as create_ssr_component, v as validate_component } from "../../../../../../chunks/ssr.js";
import { I as Index } from "../../../../../../chunks/Index.js";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Index, "Index").$$render($$result, {}, {}, {})} <div class="layout-md pt-14">${slots.default ? slots.default({}) : ``}</div>`;
});
export {
  Layout as default
};
