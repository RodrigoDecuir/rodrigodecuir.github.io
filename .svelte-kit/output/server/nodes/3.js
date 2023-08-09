

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/license/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.622d9413.js","_app/immutable/chunks/scheduler.3fb37d42.js","_app/immutable/chunks/index.d2400dde.js"];
export const stylesheets = [];
export const fonts = [];
