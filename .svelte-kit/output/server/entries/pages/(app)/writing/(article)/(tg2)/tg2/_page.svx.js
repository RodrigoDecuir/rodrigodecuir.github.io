import { c as create_ssr_component, v as validate_component } from "../../../../../../../chunks/ssr.js";
import { K as Katex } from "../../../../../../../chunks/Katex.js";
import { F as Fancy_layout } from "../../../../../../../chunks/fancy-layout.js";
const metadata = {
  "layout": "fancy",
  "title": "teoría de gráficas 2"
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Fancy_layout, "Layout_MDSVEX_DEFAULT").$$render($$result, Object.assign({}, $$props, metadata), {}, {
    default: () => {
      return ` <h1 data-svelte-h="svelte-w77z6z">Teoría de Gráficas II</h1> <blockquote data-svelte-h="svelte-1u5gnhj"><p>Agosto 14</p></blockquote> <p data-svelte-h="svelte-ljr2vu"><strong>Resumen</strong></p> <p data-svelte-h="svelte-6m361">Estas son notas del curso de Teoría de Gráficas II de la UNAM impartido por <a href="https://www.researchgate.net/profile/Rocio-Sanchez-Lopez" rel="nofollow">María del Rocío</a>.</p> <p data-svelte-h="svelte-61xa4p"><strong>Descripción del curso:</strong> El temario es una continuación de gráficas y juegos o teoría de gráficas I; ahondando más en la coloración, comenzando a ver el tema de dominación y viendo digráficas (o gráficas dirigidas).</p> ${validate_component(Katex, "Katex").$$render($$result, { math: "" }, {}, {})}  <p data-svelte-h="svelte-1yu7ui0"><strong>Bibliografía</strong></p> <p data-svelte-h="svelte-8tu54d"><em>Theory, Algorithms and Applications</em>. Jorgen Bang-Jensen and Gregory Gutin (Digraphs)</p> <p data-svelte-h="svelte-2i5wj3"><em>Classes of Directed Graphs</em>. Jorgen Bang-Jensen and Gregory Gutin</p> <p data-svelte-h="svelte-14kyds4"><em>Graphs and Digraphs</em>. Chartrand, Lesniak and Zhang</p> <p data-svelte-h="svelte-1hbroev"><em>Domination in Graphs</em>. Theresa Haynes</p> <p data-svelte-h="svelte-1xudamu"><em>Fundamentals of Domination in Graphs</em>. Theresa Haynes</p> <p data-svelte-h="svelte-11qdanh"><em>Introduction to Graph Theory</em>. Douglas West</p> `;
    }
  })}`;
});
export {
  Katex,
  Page as default,
  metadata
};
