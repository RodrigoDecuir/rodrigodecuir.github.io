import { c as create_ssr_component, v as validate_component } from "../../../chunks/ssr.js";
import { S as Seo } from "../../../chunks/Seo.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Seo, "Seo").$$render(
    $$result,
    {
      title: "Rodrigo Decuir — license",
      description: ""
    },
    {},
    {}
  )} <h1 class="montserrat" data-svelte-h="svelte-8w6ngp">License</h1> <div class="manrope" data-svelte-h="svelte-jizfcg"><p>The license applies to all the <b>documented projects, the projects themselves and their assets</b>. The
		<a class="link" href="https://github.com/rodrigodecuir/rodrigodecuir.github.io" target="_blank">platform code</a>
		is under the <b>MIT License</b>. The
		<a class="link" href="https://creativecommons.org/licenses/by-nc-sa/4.0/" target="_blank">assets and text content</a>
		is under the <b>BY-NC-SA4.0 License</b>.</p> <br> <p><i>You are free to</i>: <b>Share</b>: copy and redistribute the material in any medium or
		format.
		<b>Adapt</b>: remix, transform, and build upon the material.</p> <br> <p><i>Under the following terms</i>: <b>Attribution</b>: You must give appropriate credit.
		<b>NonCommercial</b>: You may not use the material for commercial purposes. <b>ShareAlike</b>:
		You must distribute your contributions under the same license.</p></div>`;
});
export {
  Page as default
};
