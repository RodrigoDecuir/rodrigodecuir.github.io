

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/(app)/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.43af3f7e.js","_app/immutable/chunks/scheduler.762b4b31.js","_app/immutable/chunks/index.017d30bf.js"];
export const stylesheets = [];
export const fonts = [];
