// import something here
const jsmart = require('circular-json')

window.j = jsmart
// leave the export, even if you don't use it
export default ({ app, router, Vue }) => {
  // something to do
  Vue.mixin({
    data: function(){
      return {
        // jsmart
      }
    }
  })
}
