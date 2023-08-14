

export const index = 8;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/8.ddbb023b.js","_app/immutable/chunks/scheduler.762b4b31.js","_app/immutable/chunks/index.f78e5c54.js","_app/immutable/chunks/Seo.c083efd2.js"];
export const stylesheets = [];
export const fonts = [];
