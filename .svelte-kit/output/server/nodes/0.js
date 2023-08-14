

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.0f145261.js","_app/immutable/chunks/scheduler.762b4b31.js","_app/immutable/chunks/index.f78e5c54.js"];
export const stylesheets = ["_app/immutable/assets/0.b85aa87c.css"];
export const fonts = [];
