export default {
	// value: {

	// },
	// thing1: {
	// 	id: 'thing',
	// 	alopu: {
	// 		types: ['ref'],
	// 		path: ['alopu'],
	// 	},
	// 	addPropButton: {
	// 		$onClick: function(args){

	// 		}
	// 	},
	// 	content () {
	// 		var html = ''
	// 		for(var text of this.greetText) {
	// 			html += '<span>' + text + ' ' + '</span>'
	// 		}
	// 		return html
	// 	},
	// 	highlightContent (evt) {
	// 		var texts = evt.target.innerText.split(' ')
	// 		this.greetText = texts.map(t => t.toLocaleUpperCase())
	// 	},
	// 	$args: ['this'],
	// 	url: "window.athing",
	// 	schema: {
	// 		created(args){
	// 			// while(1){
	// 			// 	if(args && args.thing && args.thing.url){
	// 			// 		args.thing.current = args.thing.current || args.thing.url
	// 			// 		if(args.thing.current !== args.thing.url){
	// 			// 			args.thing
	// 			// 		}
	// 			// 	}
	// 			// }
	// 			if(this.styling && typeof this.styling == 'function'){
	// 				this.styling(args)
	// 			}
	// 			if(args.thing && args.vue && args.vue.$set && typeof args.vue.$set == 'function' && Object.getPrototypeOf(args.thing)){
	// 				args.vue.$set(args.thing, 'thePrototype', Object.getPrototypeOf(args.thing))
	// 				// args.thing.thePrototype = Object.getPrototypeOf(args.thing)
	// 			}
	// 			if(args.vue && args.vue.$set && typeof args.vue.$set == 'function' && args.thing && !args.thing.vue){
	// 				args.vue.$set(args.thing, 'vue', args.vue)
	// 			}
	// 			// Object.getPrototypeOf(args.thing).thing = args.thing
	// 			for(var prop in args.thing){
	// 				if(typeof args.thing[prop] !== undefined && (typeof args.thing[prop] == 'object' || typeof args.thing[prop] == 'function')){
	// 					if(args.vue && args.vue.$set && typeof args.vue.$set == 'function'){
	// 						if(typeof prop == 'string' && args.thing[prop] !== Object.getPrototypeOf(args.thing)){
	// 							args.vue.$set(args.thing[prop], 'parent', args.thing)
	// 						}
	// 					}
	// 					// thing[prop].__parent__ = thing
	// 				}
	// 			}
	// 		},
	// 		css: {
	// 			"input": {
	// 				"border" : "none",
	// 				"display": "block"
	// 			},
	// 			".thing": {
	// 				"padding-left": "5px"
	// 			}
	// 		},
	// 		styling(args, that){
	// 			if(document && document.styleSheets && document.styleSheets[0] && this.css && this.css instanceof Object){
	// 				for(var selector in this.css){
	// 					if(this.css[selector] && this.css[selector] instanceof Object){
	// 						for(var property in this.css[selector]){
	// 							if(this.css[selector][property]){
	// 								document.styleSheets[0].insertRule(`${selector} { ${property}: ${this.css[selector][property]} ; }`)
	// 							}
	// 						}
	// 					}
	// 				}
	// 			}
	// 		}
	// 	},
	// 	updated(args){
	// 		this.created(args)
	// 	},
	// 	created(args){
	// 		// console.log("window && args.vue && args.vue.$set && typeof args.vue.$set == 'function'", (window && args.vue && args.vue.$set && typeof args.vue.$set == 'function'))
	// 		console.log('args.vue',args.vue)

	// 		if(window && args.vue && args.vue.$set && typeof args.vue.$set == 'function'){
	// 			// console.log('this', this)
	// 			window.athing = this
	// 		}
	// 		if(this && this.schema && this.schema.created && typeof this.schema.created == 'function'){
	// 			this.schema.created({...args, thing: this})
	// 		}
	// 		if(args && args.firearm){
	// 			if(args.firearm['this']){
					
	// 			}
	// 		}
	// 		if(args.vue){
	// 			args.vue.$set(args.vue, 'metathing', args.vue.metathing || { keys: {} })
	// 			args.vue.$set(args.vue.metathing, 'keys', args.vue.metathing.keys || {})
	// 			let keys = Object.keys(this)
	// 			for(var prop in keys){
	// 				args.vue.$set(args.vue.metathing.keys, keys[prop], keys[prop])
	// 			}
	// 		}
	// 		// var thing
	// 		// if(!thing){
	// 		// 	let V = args.V
	// 		// 	if (!V.thing && !(V.meta && V.meta.isChild)) {
	// 		// 		thing = window && window.localStorage && window.localStorage.getItem && typeof window.localStorage.getItem == 'function' ? window.localStorage.getItem("thing") : undefined
	// 		// 		V.thingMutable = thing || V
	// 		// 		if (window) {
	// 		// 			window.thing = V.thingMutable
	// 		// 		}
	// 		// 		if(thing){

	// 		// 		}else{
	// 		// 			if (!V.$dom) {
	// 		// 				V.$dom = {
	// 		// 					domSchema: [
	// 		// 						"style"
	// 		// 					],
	// 		// 					style: "background-color: cyan"
	// 		// 				}
	// 		// 			}
	// 		// 			V.addProperty = {
	// 		// 				text: "Add Property",
	// 		// 				parent: V,
	// 		// 				$exe() {
	// 		// 					console.log("V", V)
	// 		// 					V["parent"]["prop" + Math.random()] = "hey hey"
	// 		// 					if(V["parent"]["domSchema"] && typeof V["parent"]["domSchema"].push == 'function'){
	// 		// 						V["parent"]["domSchema"].splice(V["parent"]["domSchema"].length, 1, V)
	// 		// 					}
	// 		// 				},
	// 		// 				// TO DO
	// 		// 				// MAKE FILTER SO INVALID $DOM PROPS DO NOT ERROR!!!
	// 		// 				$dom: {}
	// 		// 			}
	// 		// 			if (!V.domSchema) {
	// 		// 				V.domSchema = ["$dom", "addProperty", "domSchema"]
	// 		// 				V.domSchema.domSchema = ["0","1","2","3","4","5","6","7","8","9","addProperty"]
	// 		// 				V.domSchema.addProperty = V.addProperty
	// 		// 			}
	// 		// 		}
	// 		// 	}
	// 		// }
	// 		// this.thingMutable = this
	// 		// if(this.count !== 0){
	// 		//   this.getObjects({
	// 		//     count: this.count,
	// 		//     sort: 'alphabetical',
	// 		//     sortDirection: 'ascending',
	// 		//     id: this.uuid
	// 		//   })
	// 		// } else {
	// 		//   this.objects = null
	// 		// }

	// 	}
	// }

}
