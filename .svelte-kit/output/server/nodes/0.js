

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.cb041b7a.js","_app/immutable/chunks/scheduler.3fb37d42.js","_app/immutable/chunks/index.d2400dde.js","_app/immutable/chunks/paths.3ed3c59c.js"];
export const stylesheets = ["_app/immutable/assets/0.08e8f34d.css"];
export const fonts = [];
