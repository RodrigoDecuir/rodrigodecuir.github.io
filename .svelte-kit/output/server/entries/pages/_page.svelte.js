import { c as create_ssr_component, v as validate_component } from "../../chunks/ssr.js";
import { S as Seo } from "../../chunks/Seo.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Seo, "Seo").$$render($$result, { title: "Rodrigo Decuir", description: "" }, {}, {})} <img src="./assets/images/ani.gif" alt="ojo"> <div class="layout-md" data-svelte-h="svelte-1a9ohv5"><h1 class="montserrat lg:font-bold md:font-bold">Rodrigo Decuir</h1> <p class="manrope lg:text-2xl md:text-2xl text-[#424242]">I am a computer science student at National Autonomous University of Mexico (UNAM) interested in
		machine learning, systems and interaction design. <br> <br>
		My hobbies include
		<a class="link" target="_blank" href="https://www.instagram.com/decuiiiiir/">photography</a>
		and voleyball. <br><br> If you have any questions or would like to chat, feel free to reach out (<a class="link" href="mailto:ojo@ciencias.unam.mx">email</a>).</p></div>`;
});
export {
  Page as default
};
