

export const index = 12;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/(app)/book/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/12.874af618.js","_app/immutable/chunks/scheduler.762b4b31.js","_app/immutable/chunks/index.19b44a2f.js"];
export const stylesheets = [];
export const fonts = [];
