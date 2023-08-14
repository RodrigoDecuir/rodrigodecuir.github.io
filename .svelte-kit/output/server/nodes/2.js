

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/(app)/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.ac5f2383.js","_app/immutable/chunks/scheduler.762b4b31.js","_app/immutable/chunks/index.f78e5c54.js"];
export const stylesheets = [];
export const fonts = [];
