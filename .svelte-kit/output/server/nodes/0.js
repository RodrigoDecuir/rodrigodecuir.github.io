

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.dae93cf9.js","_app/immutable/chunks/scheduler.3fb37d42.js","_app/immutable/chunks/index.d2400dde.js"];
export const stylesheets = ["_app/immutable/assets/0.08e8f34d.css"];
export const fonts = [];