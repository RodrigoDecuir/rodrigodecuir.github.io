

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.7dafda31.js","_app/immutable/chunks/scheduler.762b4b31.js","_app/immutable/chunks/index.017d30bf.js"];
export const stylesheets = ["_app/immutable/assets/0.6af43f06.css"];
export const fonts = [];
