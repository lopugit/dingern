// import something here
var S = require('smarts')()

if(window){
	window.S = S
}
// leave the export, even if you don't use it
export default ({ app, router, Vue }) => {
  // something to do
  Vue.mixin({
    data: function(){
      return {
        S
      }
    }
  })
}
