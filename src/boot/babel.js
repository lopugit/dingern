window.P = require('@babel/parser')

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
