import { c as create_ssr_component } from "./ssr.js";
import katex from "katex";
const Katex = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let katexString;
  let { math } = $$props;
  let { displayMode = false } = $$props;
  const options = { displayMode, throwOnError: false };
  if ($$props.math === void 0 && $$bindings.math && math !== void 0)
    $$bindings.math(math);
  if ($$props.displayMode === void 0 && $$bindings.displayMode && displayMode !== void 0)
    $$bindings.displayMode(displayMode);
  katexString = katex.renderToString(math, options);
  return `${$$result.head += `<!-- HEAD_svelte-g85pfc_START --><link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.min.css" integrity="sha384-GvrOXuhMATgEsSwCs4smul74iXGOixntILdUW9XmUC6+HX0sLNAK3q71HotJqlAn" crossorigin="anonymous"><!-- HEAD_svelte-g85pfc_END -->`, ""} <!-- HTML_TAG_START -->${katexString}<!-- HTML_TAG_END -->`;
});
export {
  Katex as K
};
