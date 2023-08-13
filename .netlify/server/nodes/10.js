

export const index = 10;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/(app)/links/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/10.e68b1668.js","_app/immutable/chunks/scheduler.a0900d10.js","_app/immutable/chunks/index.93b4fa39.js","_app/immutable/chunks/Seo.e0f47de6.js"];
export const stylesheets = [];
export const fonts = [];
