window.SJ = require('serialize-javascript')

export default ({app, router, Vue}) => {
	Vue.mixin(
		{
			data(){
				return {
					// S: smarts()
				}
			}
		}
	)
  // Vue.prototype.$native.clearTimeout = (fn) => clearTimeout(fn)

}
