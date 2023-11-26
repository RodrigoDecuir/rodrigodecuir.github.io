import { c as create_ssr_component, v as validate_component } from "../../../../../../../chunks/ssr.js";
import { K as Katex } from "../../../../../../../chunks/Katex.js";
import { F as Fancy_layout } from "../../../../../../../chunks/fancy-layout.js";
const metadata = { "layout": "fancy", "title": "automatas" };
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Fancy_layout, "Layout_MDSVEX_DEFAULT").$$render($$result, Object.assign({}, $$props, metadata), {}, {
    default: () => {
      return `<h1 data-svelte-h="svelte-16e0z8j">Autómatas y Lenguajes Formales</h1> <blockquote data-svelte-h="svelte-1u5gnhj"><p>Agosto 14</p></blockquote> <p data-svelte-h="svelte-ljr2vu"><strong>Resumen</strong></p> <p data-svelte-h="svelte-1ok1lss">Estas son notas del curso de Autómatas y Lenguajes Formales de la UNAM impartido por <a href="https://www.researchgate.net/profile/Cesar-Hernandez-Cruz" rel="nofollow">César Hernández Cruz</a>.</p> <p data-svelte-h="svelte-d4og6m"><strong>Descripción del curso:</strong> Vamos a ver los modelos matemáticos del computo, pues a fin de cuentas la computación teórica son matemáticas. Asimismo, algoritmos, diseño de algoritmos y demostraciones de posibilidad e imposibilidad. Dado que no se va a seguir al pie de la letra un libro, se va a realizar una homogenización donde todo va a estar en términos del lenguaje y la notación que vamos a seguir en el curso.</p> <p data-svelte-h="svelte-a20zb2"><strong>Prerrequisitos:</strong> Manejar bien la inducción (para demostrar propiedades sobre las cosas que vamos a estar definiendo), recursión (para definir cosas), aritmética modular, funciones, relaciones, entre otros materiales de Superior I y II.</p>  <blockquote data-svelte-h="svelte-sq1a22"><p>Agosto 15</p></blockquote> <h2></h2> ${validate_component(Katex, "Katex").$$render($$result, { math: "|\\N| = \\aleph_0" }, {}, {})} <br> ${validate_component(Katex, "Katex").$$render(
        $$result,
        {
          math: "|\\N \\times \\N| = \\aleph_0 = |\\Z|"
        },
        {},
        {}
      )} <br> <p data-svelte-h="svelte-1qsnqas"><img src="./../../assets/images/001.png"></p> ${validate_component(Katex, "Katex").$$render($$result, { math: "\\N^2 = \\N \\times \\N" }, {}, {})} <br> ${validate_component(Katex, "Katex").$$render(
        $$result,
        {
          math: "|\\N^3| = |\\N \\times \\N \\times \\N| = \\aleph_0"
        },
        {},
        {}
      )} <br> ${validate_component(Katex, "Katex").$$render($$result, { math: "|\\N^\\N| = \\aleph_0" }, {}, {})} <br>
Un cjto es numerable si es biyectable con
${validate_component(Katex, "Katex").$$render($$result, { math: "\\N" }, {}, {})} <p data-svelte-h="svelte-16dpn9g">Un cjto es contable si es finito o numberable</p> <p data-svelte-h="svelte-wjeu40">(Part.) <strong>Prop:</strong> <em>Toda unión numerable de conjuntos contables es contable.</em></p> <p data-svelte-h="svelte-b6al8f"><strong>CSB:</strong></p> <p data-svelte-h="svelte-1ukq4a">Sean A y B conjuntos. Si existen funciones inyectivas de A en B y de B en A, entonces A y B son biyectables.</p> <p data-svelte-h="svelte-n3j8ld">La diagonal de …</p> ${validate_component(Katex, "Katex").$$render($$result, { math: "\\R \\thicksim (0,1)" }, {}, {})} <br> ${validate_component(Katex, "Katex").$$render($$result, { math: "Sup (0,1) \\thicksim \\N" }, {}, {})} <p data-svelte-h="svelte-1ggwcbl"><strong>Def.</strong> Un <em>alfabeto</em> es un conjunto finito no vacío.</p> <p data-svelte-h="svelte-19lzoft"><strong>Def.</strong> Un <em>símbolo</em> es un elemento en un alfabeto.</p> <p data-svelte-h="svelte-1hoco98"><strong>Def.</strong> Una cadena <em>w</em> sobre un alfabeto</p> ${validate_component(Katex, "Katex").$$render($$result, { math: "\\overline{Z}" }, {}, {})} es una sucesión finita de elementos de 
${validate_component(Katex, "Katex").$$render($$result, { math: "\\overline{Z}" }, {}, {})}, .
<p data-svelte-h="svelte-vjpb2d">Hay una única cadena vacía que denotamos por</p> ${validate_component(Katex, "Katex").$$render($$result, { math: "\\epsilon" }, {}, {})}.
<p data-svelte-h="svelte-92o6fg">Si</p> ${validate_component(Katex, "Katex").$$render($$result, { math: "w:S\\rightarrow{Z}" }, {}, {})} es una cadena, entonces la longitud de w, |w|, se define por |w|=|s|, i.e. la longitud de w como sucesión.
<p data-svelte-h="svelte-10kscmk"><strong>Def.</strong> Si</p> ${validate_component(Katex, "Katex").$$render($$result, { math: "w_1" }, {}, {})} y 
${validate_component(Katex, "Katex").$$render($$result, { math: "w_2" }, {}, {})} son cadenas sobre el alfabeto 
${validate_component(Katex, "Katex").$$render($$result, { math: "\\Z" }, {}, {})}, la concatenación de
 ${validate_component(Katex, "Katex").$$render($$result, { math: "w_1" }, {}, {})} y 
${validate_component(Katex, "Katex").$$render($$result, { math: "w_2" }, {}, {})} es la cadena
${validate_component(Katex, "Katex").$$render(
        $$result,
        {
          math: "w_1 \\cdot w_2 \\space (w_1, w_2)=w"
        },
        {},
        {}
      )} está dada por 
${validate_component(Katex, "Katex").$$render($$result, { math: "w_j=(w_1)_j" }, {}, {})} si 
${validate_component(Katex, "Katex").$$render($$result, { math: "j 0, ..., |w_1|-1" }, {}, {})} <p data-svelte-h="svelte-1enkfes"><strong>Def.</strong> Si <em>v</em> y <em>w</em> son cadenas sobre</p> ${validate_component(Katex, "Katex").$$render($$result, { math: "\\Z" }, {}, {})}
decimos que:
<ol><li><p data-svelte-h="svelte-q4lvi"><em>v</em> es subcadena de <em>w</em> si existen cadenas <em>x</em> y <em>y</em> sobre</p> ${validate_component(Katex, "Katex").$$render($$result, { math: "\\Z" }, {}, {})} tales que 
${validate_component(Katex, "Katex").$$render($$result, { math: "w=xvy" }, {}, {})} (x y y pueden ser
${validate_component(Katex, "Katex").$$render($$result, { math: "\\epsilon" }, {}, {})})</li> <li><p data-svelte-h="svelte-pzb0ac"><em>v</em> es sufijo de <em>w</em> si existe una <em>x</em> sobre</p> ${validate_component(Katex, "Katex").$$render($$result, { math: "\\Z" }, {}, {})} tal que _w=xv_</li> <li><p data-svelte-h="svelte-v9qa4e"><em>v</em> es prefijo de <em>w</em> si existe <em>y</em>, una cadena sobre</p> ${validate_component(Katex, "Katex").$$render($$result, { math: "\\Z" }, {}, {})} tal que _w=vy_</li></ol> <p data-svelte-h="svelte-pcjnc4"><strong>Bibliografía</strong></p> <p data-svelte-h="svelte-18fctx6">Kozen - <em>Automata and Computability</em></p> <p data-svelte-h="svelte-199u8nx">Lewis, Papadimitriou - <em>Elements of Theory of Computation</em></p> <p data-svelte-h="svelte-a0mlj">Hopcroft, Ullman - <em>Introduction to Automata Theory Languages and Computation</em></p> <p data-svelte-h="svelte-7p1lo">Martin - <em>Introduction to Languages and the Theory of Computation</em></p> <p data-svelte-h="svelte-10fue65">Sipser - <em>Introduction to the Theory of Computation</em></p> <p data-svelte-h="svelte-1pbvqmb"><a href="https://ivanvladimir.gitlab.io/lfya_book/docs/00intro/#lecturas-recomendadas" rel="nofollow">notas-iván</a></p>`;
    }
  })}`;
});
export {
  Katex,
  Page as default,
  metadata
};
