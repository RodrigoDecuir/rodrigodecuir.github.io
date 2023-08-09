import { c as create_ssr_component, v as validate_component } from "../../../../chunks/ssr.js";
import { F as Fancy_layout } from "../../../../chunks/fancy-layout.js";
const metadata = {
  "layout": "fancy",
  "title": "probabilidad"
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Fancy_layout, "Layout_MDSVEX_DEFAULT").$$render($$result, Object.assign({}, $$props, metadata), {}, {
    default: () => {
      return `<h1 data-svelte-h="svelte-edaggu">Probabilidad I</h1>`;
    }
  })}`;
});
export {
  Page as default,
  metadata
};
