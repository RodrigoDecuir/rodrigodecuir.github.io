

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/links/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/4.eb0e6bb6.js","_app/immutable/chunks/scheduler.3fb37d42.js","_app/immutable/chunks/index.d2400dde.js","_app/immutable/chunks/Seo.9fd5213e.js"];
export const stylesheets = [];
export const fonts = [];
