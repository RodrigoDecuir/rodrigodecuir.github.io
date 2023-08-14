

export const index = 10;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/(app)/links/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/10.4f1e70d0.js","_app/immutable/chunks/scheduler.762b4b31.js","_app/immutable/chunks/index.017d30bf.js","_app/immutable/chunks/Seo.77c5a90c.js"];
export const stylesheets = [];
export const fonts = [];
