

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/(app)/writing/(article)/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.8fb7c66f.js","_app/immutable/chunks/scheduler.762b4b31.js","_app/immutable/chunks/index.19b44a2f.js"];
export const stylesheets = [];
export const fonts = [];
