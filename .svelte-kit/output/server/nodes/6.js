

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/writing/_page.svx.js')).default;
export const imports = ["_app/immutable/nodes/6.e1740be8.js","_app/immutable/chunks/scheduler.3fb37d42.js","_app/immutable/chunks/index.d2400dde.js","_app/immutable/chunks/spread.8a54911c.js","_app/immutable/chunks/fancy-layout.fb220c54.js","_app/immutable/chunks/Seo.9fd5213e.js"];
export const stylesheets = ["_app/immutable/assets/fancy-layout.646fd65c.css"];
export const fonts = [];