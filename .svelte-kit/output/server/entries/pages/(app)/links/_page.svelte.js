import { c as create_ssr_component, v as validate_component } from "../../../../chunks/ssr.js";
import { S as Seo } from "../../../../chunks/Seo.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Seo, "Seo").$$render(
    $$result,
    {
      title: "Rodrigo Decuir — links",
      description: ""
    },
    {},
    {}
  )}  `;
});
export {
  Page as default
};
