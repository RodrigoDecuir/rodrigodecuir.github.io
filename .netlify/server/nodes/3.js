

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/(app)/writing/(article)/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.4ac95a39.js","_app/immutable/chunks/scheduler.a0900d10.js","_app/immutable/chunks/index.93b4fa39.js"];
export const stylesheets = ["_app/immutable/assets/Index.ad4c0006.css"];
export const fonts = [];
