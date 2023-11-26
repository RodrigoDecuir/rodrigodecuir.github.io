import { c as create_ssr_component, v as validate_component } from "../../../../../../../chunks/ssr.js";
import { K as Katex } from "../../../../../../../chunks/Katex.js";
import { F as Fancy_layout } from "../../../../../../../chunks/fancy-layout.js";
const metadata = { "layout": "fancy", "title": "aplicadas" };
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Fancy_layout, "Layout_MDSVEX_DEFAULT").$$render($$result, Object.assign({}, $$props, metadata), {}, {
    default: () => {
      return `<h1 data-svelte-h="svelte-191x0yz">Matemáticas para las Ciencias Aplicadas III</h1> <blockquote data-svelte-h="svelte-1u5gnhj"><p>Agosto 14</p></blockquote> <p data-svelte-h="svelte-ljr2vu"><strong>Resumen</strong></p> <p data-svelte-h="svelte-g8nsi">Estas son notas del curso de Matemáticas para las Ciencias Aplicadas III de la UNAM impartido por Víctor Alvarado Becerril.</p> <p data-svelte-h="svelte-1hjowcx"><strong>Descripción del curso:</strong> en gran medida el objetivo del curso consiste en calcular integrales en diferentes dimensiones y sobre diferentes estructuras geométricas.</p> <h2 data-svelte-h="svelte-12fu8uv">Integrales de funciones de varias variables</h2> ${validate_component(Katex, "Katex").$$render($$result, { math: "" }, {}, {})} <p data-svelte-h="svelte-1yu7ui0"><strong>Bibliografía</strong></p> <p data-svelte-h="svelte-1h2czm">Leithold, Louis. (1998). <em>El Cálculo</em>, Oxford University Press, México.</p> <p data-svelte-h="svelte-1vb4uge">Marsden, Jerrold E. y Tromba, Anthony J. (2003). <em>Vector Calculus</em>, W. H. Freeman, New York.</p> <p data-svelte-h="svelte-3z76le">Stewart, James. (2008). <em>Calculus: Early Trascendentals</em>, Thomson Learning.</p> <p data-svelte-h="svelte-17xca5b">Weir, Maurice D. (2008). <em>Thomas’ Calculus</em>, Pearson Addison-Wesley, Bosto.</p>`;
    }
  })}`;
});
export {
  Katex,
  Page as default,
  metadata
};
