<template lang="pug">

	.edge(
		:class=`classes`
	)
		.edge-info-container
			.edge-title.edge-info(
				ref="pathInput"
				@click=`toggleValue`
				contenteditable
				@keypress.enter=`updatePath`
			) {{ pathArray[pathArray.length-1] }}
			.edge-options.edge-info(

			)
				q-icon(
					name="fas fa-cog"
				)
			//- .change-type.edge-info(
			//- 	contenteditable
			//- ) {{ valueType }}
		value(
			v-if=`!seen || show`
			v-show=`show`
			:properties=`{
				path: path,
				root: properties.root
			}
			`
		)
		//- @newValue=`newVal => $emit('newValue', newVal)`

</template>

<script>

export default {
	name: 'edge',
	data(){
		return {
			vue: {
				shallow: false
			},
			thing: {}
		}
	},
	props: {
		properties: {}
	},
	created(){
		this.ai()
	},
	methods: {
		toggleValue(e){
			let clicks = this.gosmart(this.thing, "clicks", 1)
			if(clicks == 2){
				e.preventDefault()
				// clear highlighting
				if(document.selection && document.selection.empty){
					document.selection.empty() 
				} else if(window.getSelection) {
					let sel = window.getSelection()
					if(sel && sel.removeAllRanges){
						sel.removeAllRanges()
					}
				}
				let toggle = !this.gosmart(
					this.graph, 
					`root.meta.ui.${this.path}.render`, 
					false
				)
				this.setsmart(
					this.graph, 
					`root.meta.ui.${this.path}.render`, 
					toggle
				)		
				let debug = 1
				clearTimeout(this.getsmart(this.thing, "doubleClickTimeout", false))
			} else {
				this.setsmart(this.thing, "clicks", ++clicks)
			}
			this.setsmart(this.thing, "doubleClickTimeout", setTimeout(()=>{
			this.setsmart(this.thing, "clicks", 1)
			}, 250))
		},
		updatePath(e){
			e.preventDefault()
			let newPath = e.target.innerText
			
			// if(newPath[newPath.length-1] == "\n"){
			// 	newPath = newPath.slice(0,newPath.length-1)
			// }
			let newAbsolutePath = this.parentPath+this.epp(newPath)
			let keyedEvents = this.gosmart(this.graph, "root.events"+this.epp("keyed")+this.path, [])
			let events = this.gosmart(this.graph, "root.events.ordered", [])

			let event = {
				originalPath: this.path,
				newPath: newAbsolutePath,
				time: Date().toString()
			}

			keyedEvents.push(event)
			events.push(event)

			this.setsmart(this.graph, newAbsolutePath, this.value)

			if(this.getsmart(this.graph, this.path, false, true).undefined == false){
				this.deletesmart(this.graph, this.path)
			}
			
		},
		ai(){
			try {
				this.merge(this.thing, this.properties, {clone: false})
			} catch(err){console.error(err)}
		},
	},
	computed: {
		seen: {
			get(){
				let recursiveThis = this.getsmart(this.graph, "root.meta.script.recursives"+this.path+this.epp("recursive"), false)
				if(recursiveThis == true) return true
				let seenValues = this.gosmart(this.graph, 'root.meta.script.seenValues', [])
				let seenPaths = this.gosmart(this.graph, 'root.meta.script.seenPaths', [])
				let i = seenValues.indexOf(this.value)
				let seen = true
				if(i < 0 && this.path != "root"){
					this.pushSmart(seenValues, this.value)
					this.pushSmart(seenPaths, this.path)
				}

				i = seenPaths.indexOf(this.path)
				if(i < 0) return true
				return false
			}
		},
		show: {
			get(){
				let ret = this.gosmart(
					this.graph, 
					'root.meta.ui.'+this.path+'.render', 
					false
				)
				return ret === true		
			}
		},
		graph: {
			get(){
				return this.$store.state.graph.thing
			}
		},
		value: {
			get(){
				let path = this.getsmart(this.thing, 'path', undefined)
				let ret =	this.getsmart(
					this.graph, 
					path,
					undefined
				)
				return ret
			}
		},
		valueType: {
			get(){
				let type
				try {
					type = Object.getPrototypeOf(
						this.value
					).constructor.name
				} catch(e){
					if(typeof this.value === 'undefined') type = 'undefined'
					if(this.value === null) type = 'null'
				}
				return type
			}
		},
		classes: {
			get(){
				return this.getsmart(this.value, "classes", {})
			}
		},
		path: {
			get(){
				return this.getsmart(this.thing, 'path', undefined)
			}
		},
		pathArray: {
			get(){
				return this.parsePropertyPath(this.path)
			}
		},
		parentPathArray: {
			get(){
				return this.pathArray.slice(0,this.pathArray.length-1)
			}
		},
		parentPath: {
			get(){
				let ret = ""
				if(this.parentPathArray instanceof Array){
					this.parentPathArray.forEach((v,i)=>{
						ret+=this.epp(v)
					})
				}
				return ret
			}
		}
	},
  watch: {
		'properties': {
			handler: function(n,o){
				if(!this.equal(n,o)){
					this.merge(this.thing, n, {clone: false})
				}
			},
		},
  },
	components: {
		value: () => import('./value.vue')
	}
}
</script>