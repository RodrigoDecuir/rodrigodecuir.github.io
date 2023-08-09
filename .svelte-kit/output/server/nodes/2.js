

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.63cce572.js","_app/immutable/chunks/scheduler.3fb37d42.js","_app/immutable/chunks/index.d2400dde.js","_app/immutable/chunks/Seo.9fd5213e.js"];
export const stylesheets = [];
export const fonts = [];
