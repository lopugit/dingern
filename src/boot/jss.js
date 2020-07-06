import jss from 'jss'
import preset from 'jss-preset-default'
import color from 'color'
jss.setup(preset())

export default ({app, router, Vue}) => {
  window.jss = {
		jss,
		preset,
		color
	}
	
	Vue.mixin(
		{
			data(){
				return {
					jss
				}
			}
		}
	)
	
	Vue.prototype.$jss = jss

}
