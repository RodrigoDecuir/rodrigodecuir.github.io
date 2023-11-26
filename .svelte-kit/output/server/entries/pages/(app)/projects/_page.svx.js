import { c as create_ssr_component, v as validate_component } from "../../../../chunks/ssr.js";
import { S as Seo } from "../../../../chunks/Seo.js";
const links_svelte_svelte_type_style_lang = "";
const css = {
  code: ".links.svelte-10p2f14{--tw-text-opacity:1;color:rgb(149 161 200 / var(--tw-text-opacity));text-decoration-line:underline;text-decoration-color:#a6b3df;text-decoration-thickness:2px;text-underline-offset:8px\n}",
  map: null
};
const Links = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { options } = $$props;
  if ($$props.options === void 0 && $$bindings.options && options !== void 0)
    $$bindings.options(options);
  $$result.css.add(css);
  return `<a class="links svelte-10p2f14" href="https://rodrigodecuir.github.io/cumbancha" data-svelte-h="svelte-1nwfq0e">Website</a>,
<a class="links svelte-10p2f14" href="https://github.com/rodrigodecuir/cumbancha" data-svelte-h="svelte-xllezy">Github</a> `;
});
const _default = "";
const Default_layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  return `${validate_component(Seo, "Seo").$$render(
    $$result,
    {
      title: "Rodrigo Decuir — " + title,
      description: "hola mundo"
    },
    {},
    {}
  )} <main class="markdown-body">${slots.default ? slots.default({}) : ``}</main>`;
});
const metadata = { "layout": "default", "title": "projects" };
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Default_layout, "Layout_MDSVEX_DEFAULT").$$render($$result, Object.assign({}, $$props, metadata), {}, {
    default: () => {
      return `<h6 data-svelte-h="svelte-1mnc6z4">Projects</h6> <h5 data-svelte-h="svelte-1qegs44">Cumbancha</h5> <p data-svelte-h="svelte-6zqnnz"><code>HTML</code> <code>Vanilla CSS</code></p> ${validate_component(Links, "Links").$$render(
        $$result,
        {
          options: [
            {
              text: "Website",
              url: "https://cumbancha.vercel.app"
            },
            {
              text: "GitHub",
              url: "https://github.com/rodrigodecuir/cumbancha"
            }
          ]
        },
        {},
        {}
      )} <p data-svelte-h="svelte-5tgdly">A restaurant website made with HTML and Vanilla CSS.</p>`;
    }
  })}`;
});
export {
  Links,
  Page as default,
  metadata
};
