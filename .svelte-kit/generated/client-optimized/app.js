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
	() => import('./nodes/18'),
	() => import('./nodes/19'),
	() => import('./nodes/20'),
	() => import('./nodes/21'),
	() => import('./nodes/22')
];

export const server_loads = [];

export const dictionary = {
		"/": [11],
		"/(app)/book": [12,[2]],
		"/(app)/license": [13,[2]],
		"/(app)/links": [14,[2]],
		"/(app)/projects": [15,[2]],
		"/(app)/writing": [16,[2]],
		"/(app)/writing/(article)/(aplicadas)/aplicadas": [17,[4]],
		"/(app)/writing/(article)/(automatas)/automatas": [18,[5]],
		"/(app)/writing/(article)/(lineal)/lineal": [19,[6]],
		"/(app)/writing/(article)/(probabilidad)/probabilidad": [20,[7]],
		"/(app)/writing/(sketch)/(s-01)/s-01": [22,[10]],
		"/(app)/writing/(article)/(tg2)/tg2": [21,[8]]
	};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),
};

export { default as root } from '../root.svelte';