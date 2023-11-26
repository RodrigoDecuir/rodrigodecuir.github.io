import { c as create_ssr_component, v as validate_component } from "../../../../../../../chunks/ssr.js";
import { K as Katex } from "../../../../../../../chunks/Katex.js";
import { F as Fancy_layout } from "../../../../../../../chunks/fancy-layout.js";
const metadata = { "layout": "fancy", "title": "lineal" };
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Fancy_layout, "Layout_MDSVEX_DEFAULT").$$render($$result, Object.assign({}, $$props, metadata), {}, {
    default: () => {
      return `<h1 data-svelte-h="svelte-1atkg8s">Álgebra Lineal I</h1> <blockquote data-svelte-h="svelte-89tpxj"><p>Agosto 14</p></blockquote> <p data-svelte-h="svelte-ljr2vu"><strong>Resumen</strong></p> <p data-svelte-h="svelte-1dm9wqw">Estas son notas del curso de Álgebra Lineal I de la UNAM impartido por <a href="https://www.jnzimbron.com/" rel="nofollow">Jesús Núñez Zimbrón</a>.</p> <p data-svelte-h="svelte-6axhgb"><strong>Descripción del curso:</strong> Si se pudiera definir en pocas palabras el álgebra lineal diríamos que consiste en “estudiar <em>espacios vectoriales</em>”; estructura que se puede llegar a encontrar incluso en la sopa, de modo que, se vuelve fundamental su estudio pues permite avanzar posteriormente en las carreras de ciencias.</p> ${validate_component(Katex, "Katex").$$render($$result, { math: "" }, {}, {})} <p data-svelte-h="svelte-1yu7ui0"><strong>Bibliografía</strong></p> <p data-svelte-h="svelte-eb5ac5">Lang, S., <em>Linear Algebra</em>, Ed. Springer US., 3rd. Edition (1987).</p> <p data-svelte-h="svelte-1rzihan">Friedberg, S. H., Insel, A. J., &amp; Spence, L. E., <em>Linear Algebra</em>, Pearson Education, 4th ed. (2003).</p> <p data-svelte-h="svelte-4gucvg">Axler, S. J., <em>Linear Algebra Done Right</em>, Ed. Springer US, 2nd ed. (1997)</p> <p data-svelte-h="svelte-mra13z">Treil, S., <em>Linear Algebra Done Wrong</em>. (2004)</p> <p data-svelte-h="svelte-6f9xvj">Grossman, S. I., <em>Elementary Linear Algebra</em>, Wadsworth Publishing Company, 3rd ed. (1987).</p> <p data-svelte-h="svelte-k74wk6">Lax, P. D., <em>Linear Algebra and its Applications</em>, Ed. Wiley, 2nd edition (2007)</p> <p data-svelte-h="svelte-1u7r4ku"><a href="https://www.matem.unam.mx/~omar/lineal/index.html" rel="nofollow">notas-omar</a></p> <p data-svelte-h="svelte-b1dzhd"><a href="https://blog.nekomath.com/al1/" rel="nofollow">notas-nekomath</a></p>`;
    }
  })}`;
});
export {
  Katex,
  Page as default,
  metadata
};
