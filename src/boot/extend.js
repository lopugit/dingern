// import something here
function E(toReplace,Replacee,remove=true){
	remove = remove === undefined ? false : remove;
	var a_traversed = [],
			b_traversed = [];

	function _extend(a,b) {
			if (a_traversed.indexOf(a) == -1 && b_traversed.indexOf(b) == -1){
					a_traversed.push(a);
					b_traversed.push(b);
					if (a instanceof Array){
							for (var i = 0; i < b.length; i++) {
									if (a[i]){  // If element exists, keep going recursive so we don't lose the references
											a[i] = _extend(a[i],b[i]);
									} else { 
											a[i] = b[i];    // Object doesn't exist, no reference to lose
									}
							}
							if (remove && b.length < a.length) { // Do we have fewer elements in the new object?
									a.splice(b.length, a.length - b.length);
							}
					}
					else if (a instanceof Object){
							for (var x in b) {
									if (a.hasOwnProperty(x)) {
											a[x] = _extend(a[x], b[x]);
									} else {
											a[x] = b[x];
									}
							}
							if (remove) for (var x in a) {
									if (!b.hasOwnProperty(x)) {
											delete a[x];
									}
							}
					}
					else{
							return b;
					}
					return a;
			}    
	}

	_extend(toReplace,Replacee);
}
var W
if(window){
	window.E = E
	// W = window
}
// leave the export, even if you don't use it
export default ({ app, router, Vue }) => {
	// something to do
	// if(window){
	// 	Vue.mixin({
	// 		data: function(){
	// 			return {
	// 				window
	// 			}
	// 		}
	// 	})	
	// }
  Vue.mixin({
    data: function(){
      return {
        // E
      }
    }
  })
}
