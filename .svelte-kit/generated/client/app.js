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
	() => import('./nodes/16'),
	() => import('./nodes/17'),
	() => import('./nodes/18')
];

export const server_loads = [];

export const dictionary = {
		"/": [9],
		"/(app)/license": [10,[2]],
		"/(app)/links": [11,[2]],
		"/(app)/projects": [12,[2]],
		"/(app)/writing": [13,[2]],
		"/(app)/writing/(article)/(aplicadas)/aplicadas": [14,[4]],
		"/(app)/writing/(article)/(automatas)/automatas": [15,[5]],
		"/(app)/writing/(article)/(lineal)/lineal": [16,[6]],
		"/(app)/writing/(article)/(probabilidad)/probabilidad": [17,[7]],
		"/(app)/writing/(article)/(tg2)/tg2": [18,[8]]
	};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),
};

export { default as root } from '../root.svelte';