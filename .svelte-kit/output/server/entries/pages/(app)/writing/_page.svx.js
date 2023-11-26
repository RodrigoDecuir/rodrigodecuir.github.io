import { c as create_ssr_component, v as validate_component } from "../../../../chunks/ssr.js";
import { F as Fancy_layout } from "../../../../chunks/fancy-layout.js";
const metadata = { "layout": "fancy", "title": "writing" };
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Fancy_layout, "Layout_MDSVEX_DEFAULT").$$render($$result, Object.assign({}, $$props, metadata), {}, {
    default: () => {
      return `<h3 data-svelte-h="svelte-2havtt">Notes</h3>  <h3 data-svelte-h="svelte-2y9otm">Thoughts</h3> <h3 data-svelte-h="svelte-1anetj0">Sketches</h3>`;
    }
  })}`;
});
export {
  Page as default,
  metadata
};
