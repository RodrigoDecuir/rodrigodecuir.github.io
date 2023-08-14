

export const index = 10;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/(app)/links/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/10.558f6fff.js","_app/immutable/chunks/scheduler.762b4b31.js","_app/immutable/chunks/index.f78e5c54.js","_app/immutable/chunks/Seo.c083efd2.js"];
export const stylesheets = [];
export const fonts = [];
