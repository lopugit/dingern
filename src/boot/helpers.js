
export default ({app, router, Vue}) => {
	Vue.mixin(
    {
			data(){
				return {

				}
			},
			computed: {
				pathAsArray: {
					get(){
						let ret = this.pathToArray(this.path)
						return ret
					}
				},
				pathAsString: {
					get(){
						let ret = this.pathToString(this.path)
						return ret
					}
				},
				path: {
					get(){
						return this.thing.path
					}
				},
				localPath: {
					get(){
						return this.pathAsArray[this.pathAsArray.length-1]
					}
				},
				parentPathAsArray: {
					get(){
						return this.pathAsArray.slice(0,this.pathAsArray.length-1)
					}
				},
				parentPath: {
					get(){
						let ret = ""
						this.parentPathAsArray.forEach((v,i)=>{
							ret+=this.epp(v)
						})
						return ret
					}
				},
				graph: {
					get(){
						return this.$store.state.graph.thing
					}
				},
				value: {
					get(){
						let ret =	this.getsmart(
							this.graph, 
							this.pathAsString,
							undefined
						)
						return ret
					}
				},
				valueType: {
					get(){
						let type
						try {
							// Object.getPrototypeOf(
							// 	this.value
							// )
							type = this.value.constructor.name
						} catch(e){
							if(typeof this.value === 'undefined') type = 'undefined'
							if(this.value === null) type = 'null'
						}
						return type
					}
				},
				prototypeProperties: {
					get(){
						let ret = []
						if(typeof this.value == 'function'){
							let tmp = { value: this.value }
							for(let key of Object.getOwnPropertyNames(tmp.prototype)) {
								ret.push(key)
							}
						} else {
							for(let key of Object.getOwnPropertyNames(Object.getPrototypeOf(this.value))) {
								ret.push(key)
							}
						}
						return ret
					}
				},
				isBasic: {
					get(){
						return !(typeof this.value == 'object' || typeof this.value == 'array') || (this.value === null)
					}
				},
				settingsPathAsArray: {
					get(){
						let path = [
							...this.ppp(`root.meta.graph`),
							this.pathAsString,
							'settings'
						]				
						return path
					}
				},
				settings: {
					get(){
						let settings = this.getsmart(this.graph, this.settingsPathAsArray, undefined)
						return settings
					}
				},
			}
		}
  );
}
