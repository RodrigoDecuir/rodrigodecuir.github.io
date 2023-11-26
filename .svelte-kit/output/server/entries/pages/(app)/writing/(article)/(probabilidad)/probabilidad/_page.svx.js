import { c as create_ssr_component, v as validate_component } from "../../../../../../../chunks/ssr.js";
import { K as Katex } from "../../../../../../../chunks/Katex.js";
import { F as Fancy_layout } from "../../../../../../../chunks/fancy-layout.js";
const metadata = {
  "layout": "fancy",
  "title": "probabilidad"
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Fancy_layout, "Layout_MDSVEX_DEFAULT").$$render($$result, Object.assign({}, $$props, metadata), {}, {
    default: () => {
      return `<h1 data-svelte-h="svelte-edaggu">Probabilidad I</h1> <blockquote data-svelte-h="svelte-1u5gnhj"><p>Agosto 14</p></blockquote> <p data-svelte-h="svelte-ljr2vu"><strong>Resumen</strong></p> <p data-svelte-h="svelte-14bqjuf">Estas son notas del curso de Probabilidad I de la UNAM impartido por <a href="https://www.researchgate.net/profile/Josue-Nava-Sedeno" rel="nofollow">Josué Manik</a>.</p> <p data-svelte-h="svelte-2d3ri7"><strong>Descripción del curso:</strong></p> ${validate_component(Katex, "Katex").$$render($$result, { math: "" }, {}, {})} <p data-svelte-h="svelte-1yu7ui0"><strong>Bibliografía</strong></p> <p data-svelte-h="svelte-2a4yon"><em>Elementary Probability</em>, David Stirzaker. Cambridge University Press, New York. 2nd Edition. (2003)</p> <p data-svelte-h="svelte-jkl0ic"><a href="https://blog.nekomath.com/proba1/" rel="nofollow">notas-nekomath</a></p>`;
    }
  })}`;
});
export {
  Katex,
  Page as default,
  metadata
};
