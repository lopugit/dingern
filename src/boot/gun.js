// // import something here
// let Gun = require('gun/gun')
// let Firearm = require('firearm')
// let firearm = new Firearm(Gun)
// if(window){
// 	window.firearm = firearm
// }
// if(global){
// 	global.firearm = firearm
// }

// // leave the export, even if you don't use it
export default ({ app, router, Vue }) => {
  // something to do
  Vue.mixin({
    data: function(){
      return {
				// firearm
      }
    }
  })
}
