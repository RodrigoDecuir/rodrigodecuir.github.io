export { matchers } from './matchers.js';

export const nodes = [
	() => import('./nodes/0'),
	() => import('./nodes/1'),
	() => import('./nodes/2'),
	() => import('./nodes/3'),
	() => import('./nodes/4'),
	() => import('./nodes/5'),
	() => import('./nodes/6'),
	() => import('./nodes/7'),
	() => import('./nodes/8'),
	() => import('./nodes/9'),
	() => import('./nodes/10'),
	() => import('./nodes/11'),
	() => import('./nodes/12'),
	() => import('./nodes/13'),
	() => import('./nodes/14'),
	() => import('./nodes/15'),
	() => import('./nodes/16')
];

export const server_loads = [];

export const dictionary = {
		"/": [8],
		"/(app)/license": [9,[2]],
		"/(app)/links": [10,[2]],
		"/(app)/projects": [11,[2]],
		"/(app)/writing": [12,[2]],
		"/(app)/writing/(article)/(aplicadas)/aplicadas": [13,[4]],
		"/(app)/writing/(article)/(automatas)/automatas": [14,[5]],
		"/(app)/writing/(article)/(lineal)/lineal": [15,[6]],
		"/(app)/writing/(article)/(probabilidad)/probabilidad": [16,[7]]
	};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),
};

export { default as root } from '../root.svelte';