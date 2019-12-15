let smarts = require('smarts')()
let s = smarts


export const thing = (state, args) => {
	if(
		args && 
		args.path && 
		(
			typeof args.val !== undefined &&
			typeof args.value !== undefined
		)
	){
		let val
		if(			
			typeof args.val !== undefined
		) {
			val = args.val
		} else if (
			typeof args.value !== undefined
		) {
			val = args.value
		}
		smarts.setsmart(state, args.path, val)
	}
}

