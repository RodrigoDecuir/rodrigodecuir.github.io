import { c as create_ssr_component, v as validate_component } from "../../../chunks/ssr.js";
import { F as Fancy_layout } from "../../../chunks/fancy-layout.js";
const metadata = { "layout": "fancy", "title": "writing" };
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Fancy_layout, "Layout_MDSVEX_DEFAULT").$$render($$result, Object.assign({}, $$props, metadata), {}, {
    default: () => {
      return `<ul data-svelte-h="svelte-1u4oadz"><li></li></ul> <h1 data-svelte-h="svelte-16r2evl">Notes</h1> <ul data-svelte-h="svelte-1i7hbli"><li><p><em>semestre 2024-1</em></p> <ul><li><p><a href="writing/probabilidad">Probabilidad I</a></p></li> <li><p><a href="writing/lineal">Álgebra Lineal I</a></p></li> <li><p><a href="writing/aplicadas">Matemáticas para las Ciencias Aplicadas III</a></p></li> <li><p><a href="writing/automatas">Autómatas y Lenguajes Formales</a></p></li> <li><p><a href="writing/programacion-lineal">Programación Lineal</a></p></li></ul></li></ul> <h1 data-svelte-h="svelte-129umfu">Thoughts</h1> <h1 data-svelte-h="svelte-12u86a4">Sketches</h1>`;
    }
  })}`;
});
export {
  Page as default,
  metadata
};
