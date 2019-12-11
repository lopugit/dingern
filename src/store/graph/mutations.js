let smarts = require('smarts')()
let s = smarts


export const thing = (state, args) => {
	if(args && args.path && typeof args.val !== undefined){
		smarts.setsmart(state, args.path, args.val)
	}
}

