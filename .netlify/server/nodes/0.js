

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.0bec33cd.js","_app/immutable/chunks/scheduler.a0900d10.js","_app/immutable/chunks/index.93b4fa39.js"];
export const stylesheets = ["_app/immutable/assets/0.7b78aa0d.css"];
export const fonts = [];
