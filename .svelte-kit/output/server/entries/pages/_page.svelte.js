import { c as create_ssr_component, v as validate_component } from "../../chunks/ssr.js";
import { S as Seo } from "../../chunks/Seo.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Seo, "Seo").$$render($$result, { title: "Rodrigo Decuir", description: "" }, {}, {})} <a href="http://wrasse.pw/joel/icons/" data-svelte-h="svelte-1cxxnd2"><img src="./assets/images/ani.gif" alt="ojo"></a> <div class="layout-md" data-svelte-h="svelte-1xrpiv0"><h1 class="montserrat"><b>Rodrigo Decuir</b></h1> <p class="manrope text-2xl text-[#424242]">I am a computer science student at National Autonomous University of Mexico (UNAM) interested in
		machine learning, systems and interaction design. <br> <br>
		My hobbies include
		<a class="link" target="_blank" href="https://lightroom.adobe.com/shares/c33fcb0b718946699d17a74d18ccb447">photography</a>
		and voleyball. <br><br> If you have any questions or would like to chat, feel free to reach out (<a class="link" href="mailto:ojo@ciencias.unam.mx">email</a>).</p></div>`;
});
export {
  Page as default
};
