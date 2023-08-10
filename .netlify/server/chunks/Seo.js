import { c as create_ssr_component, e as escape, b as add_attribute } from "./ssr.js";
const Seo = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title } = $$props;
  let { ogTitle = null } = $$props;
  let { description } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.ogTitle === void 0 && $$bindings.ogTitle && ogTitle !== void 0)
    $$bindings.ogTitle(ogTitle);
  if ($$props.description === void 0 && $$bindings.description && description !== void 0)
    $$bindings.description(description);
  return `${$$result.head += `<!-- HEAD_svelte-w55xoz_START -->${$$result.title = `<title>${escape(title)}</title>`, ""}<meta name="description"${add_attribute("content", description, 0)}><meta property="og:title"${add_attribute("content", ogTitle ?? title, 0)}><meta property="og:description"${add_attribute("content", description, 0)}><meta property="og:image" content="https://lightroom.adobe.com/v2c/spaces/c33fcb0b718946699d17a74d18ccb447/assets/fb19791b54690365cd14ddd6bf0440c1/revisions/67e7d54883898569e0bc70d9887682e0/renditions/c230e99ab63402ad6f62822fd487440a"><!-- HEAD_svelte-w55xoz_END -->`, ""}`;
});
export {
  Seo as S
};
