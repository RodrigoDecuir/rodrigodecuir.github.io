

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.8a258db0.js","_app/immutable/chunks/scheduler.3fb37d42.js","_app/immutable/chunks/index.d2400dde.js"];
export const stylesheets = [];
export const fonts = [];
