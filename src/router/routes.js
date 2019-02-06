import Axios from 'axios';

const routes = [
  {
    path: '/',
		component: () => import('components/thing.vue'),
		props: {
			showProps: true,
			// thing: {},
			thing1: {
				id: 'thing',
				alopu: {
					types: ['ref'],
					path: ['alopu'],
				},
				addPropButton: {
					$onClick: function(args){

					}
				},
				content () {
					var html = ''
					for(var text of this.greetText) {
						html += '<span>' + text + ' ' + '</span>'
					}
					return html
				},
				highlightContent (evt) {
					var texts = evt.target.innerText.split(' ')
					this.greetText = texts.map(t => t.toLocaleUpperCase())
				},
				$args: ['this'],
				$exe(args){
					var thing
					if(!thing){
						let V = args.V
						if (!V.thing && !(V.meta && V.meta.isChild)) {
							thing = window && window.localStorage && window.localStorage.getItem && typeof window.localStorage.getItem == 'function' ? window.localStorage.getItem("thing") : undefined
							V.thingMutable = thing || V
							if (window) {
								window.thing = V.thingMutable
							}
							if(thing){

							}else{
								if (!V.$dom) {
									V.$dom = {
										domSchema: [
											"style"
										],
										style: "background-color: cyan"
									}
								}
								V.addProperty = {
									text: "Add Property",
									parent: V,
									$exe() {
										console.log("V", V)
										V["parent"]["prop" + Math.random()] = "hey hey"
										if(V["parent"]["domSchema"] && typeof V["parent"]["domSchema"].push == 'function'){
											V["parent"]["domSchema"].splice(V["parent"]["domSchema"].length, 1, V)
										}
									},
									// TO DO
									// MAKE FILTER SO INVALID $DOM PROPS DO NOT ERROR!!!
									$dom: {}
								}
								if (!V.domSchema) {
									V.domSchema = ["$dom", "addProperty", "domSchema"]
									V.domSchema.domSchema = ["0","1","2","3","4","5","6","7","8","9","addProperty"]
									V.domSchema.addProperty = V.addProperty
								}
							}
						}
					}
					// this.thingMutable = this
					// if(this.count !== 0){
					//   this.getObjects({
					//     count: this.count,
					//     sort: 'alphabetical',
					//     sortDirection: 'ascending',
					//     id: this.uuid
					//   })
					// } else {
					//   this.objects = null
					// }

				}
			}
		},
    children: [
      // { path: '', component: () => import('components/thing.vue') }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
