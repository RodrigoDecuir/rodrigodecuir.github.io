import { c as create_ssr_component, v as validate_component } from "../../../../../../../chunks/ssr.js";
import { K } from "../../../../../../../chunks/Katex.js";
import { F as Fancy_layout } from "../../../../../../../chunks/fancy-layout.js";
const metadata = { "layout": "fancy", "title": "s-01" };
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Fancy_layout, "Layout_MDSVEX_DEFAULT").$$render($$result, Object.assign({}, $$props, metadata), {}, {})}`;
});
export {
  K as Katex,
  Page as default,
  metadata
};
