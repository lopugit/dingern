let smarts = require('smarts')()

export default function({store, ssrContex}){

	const routes = [
		// {
		// 	path: '*',
		// 	// component: () => smarts.getsmart(store, 'state.graph.root', import('components/value.vue') ),
		// 	component: () => import('components/value.vue'),
		// },
		// {
		// 	path: '/source.0.0.1',
		// 	component: () => import('components/value.vue'),
		// },
	]

	// Always leave this as last one
	if (process.env.MODE !== 'ssr') {
		// routes.push({
		//   path: '*',
		//   component: () => import('pages/Error404.vue')
		// })
	}

	return routes
}
