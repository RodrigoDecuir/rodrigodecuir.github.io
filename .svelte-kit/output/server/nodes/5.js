

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/projects/_page.svx.js')).default;
export const imports = ["_app/immutable/nodes/5.c976def7.js","_app/immutable/chunks/scheduler.3fb37d42.js","_app/immutable/chunks/index.d2400dde.js","_app/immutable/chunks/spread.8a54911c.js","_app/immutable/chunks/Seo.9fd5213e.js"];
export const stylesheets = [];
export const fonts = [];
