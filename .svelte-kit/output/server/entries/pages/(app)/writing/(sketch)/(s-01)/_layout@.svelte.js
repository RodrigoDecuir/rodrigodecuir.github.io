import { c as create_ssr_component } from "../../../../../../chunks/ssr.js";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="layout-md pt-14 bg-blue-500">${slots.default ? slots.default({}) : ``}</div>`;
});
export {
  Layout as default
};
