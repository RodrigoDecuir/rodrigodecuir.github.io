import { c as create_ssr_component, v as validate_component } from "./ssr.js";
import { S as Seo } from "./Seo.js";
const light = "";
const Fancy_layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Seo, "Seo").$$render(
    $$result,
    {
      title: "Rodrigo Decuir —",
      description: "adios mundo"
    },
    {},
    {}
  )} <main class="markdown-body">${slots.default ? slots.default({}) : ``}</main>`;
});
export {
  Fancy_layout as F
};
