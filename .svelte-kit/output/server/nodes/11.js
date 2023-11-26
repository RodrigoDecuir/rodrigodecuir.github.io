

export const index = 11;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/11.e36c3eea.js","_app/immutable/chunks/scheduler.762b4b31.js","_app/immutable/chunks/index.19b44a2f.js","_app/immutable/chunks/Seo.846a210b.js"];
export const stylesheets = [];
export const fonts = [];
