

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/(app)/writing/(article)/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.16a630e9.js","_app/immutable/chunks/scheduler.762b4b31.js","_app/immutable/chunks/index.017d30bf.js"];
export const stylesheets = ["_app/immutable/assets/Index.ad4c0006.css"];
export const fonts = [];
