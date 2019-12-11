// import something here
const _ = require('underscore')
if(window){
	window._ = _
}
// leave the export, even if you don't use it
export default ({ app, router, Vue }) => {
  // something to do
  Vue.mixin({
    data: function(){
      return {
        // _
      }
    }
  })
}
