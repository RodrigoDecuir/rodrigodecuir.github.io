import { c as create_ssr_component, v as validate_component } from "../../chunks/ssr.js";
import { S as Seo } from "../../chunks/Seo.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Seo, "Seo").$$render($$result, { title: "Rodrigo Decuir", description: "" }, {}, {})} <div data-svelte-h="svelte-nm1sh0"><h1 class="montserrat">Rodrigo Decuir</h1> <p class="manrope">I am a computer science student at National Autonomous University of Mexico (UNAM) interested in
		machine learning, systems and interaction design. <br> <br>
		My hobbies are
		<a class="link" target="_blank" href="https://lightroom.adobe.com/shares/c33fcb0b718946699d17a74d18ccb447">photography</a>
		and playing voleyball. <br><br>
		This is my CV. If you have any questions or would like to chat, feel free to reach out (<a class="link" href="mailto:ojo@ciencias.unam.mx">email</a>).</p></div>`;
});
export {
  Page as default
};