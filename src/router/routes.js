import Axios from 'axios';
import thing from './thing.js';
const routes = [
  {
    path: '*',
		component: () => import('components/thing.vue'),
		// props: {
		// 	showProps: true,
		// 	// thing: {},
		// 	thing
		// }
  }
]

// Always leave this as last one
// if (process.env.MODE !== 'ssr') {
//   routes.push({
//     path: '*',
//     component: () => import('pages/Error404.vue')
//   })
// }

export default routes
