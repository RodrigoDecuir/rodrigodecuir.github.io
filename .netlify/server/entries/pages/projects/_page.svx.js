import { c as create_ssr_component, v as validate_component } from "../../../chunks/ssr.js";
import { S as Seo } from "../../../chunks/Seo.js";
const Default_layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  return `${validate_component(Seo, "Seo").$$render(
    $$result,
    {
      title: "Rodrigo Decuir — " + title,
      description: "hola mundo"
    },
    {},
    {}
  )} <main>${slots.default ? slots.default({}) : ``}</main>`;
});
const metadata = { "layout": "default", "title": "projects" };
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Default_layout, "Layout_MDSVEX_DEFAULT").$$render($$result, Object.assign({}, $$props, metadata), {}, {})}`;
});
export {
  Page as default,
  metadata
};
