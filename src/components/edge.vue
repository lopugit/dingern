<template lang="pug">

	.edge-container(
		:class=`classes`
	)
		.edge-info-container
			.edge-title.edge-info(
				ref="pathInput"
				@click=`toggleValue`
				contenteditable
				@keypress.enter=`updatePath`
			) {{ pathAsArray[pathAsArray.length-1] }}
			.edge-options.edge-info(
				@click=`toggleSettings`
			)
				q-icon(
					name="fas fa-cog"
				)
			//- .change-type.edge-info(
			//- 	contenteditable
			//- ) {{ valueType }}
		edge(
			v-if=`showSettings`
			:properties=`{
				path: "root.meta.graph"+epp(pathAsString)+".settings"
			}`
		)
		//- Own Properties
		value(
			v-if=`render`
			v-show=`show`
			:properties=`{
				path: pathAsString,
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
	mounted(){
		this.ai()
	},
	// TODO
	// change type of property
	// debug circular vue
	// debug reference serialisation/deserialisation
	methods: {
		toggleValue(e){
			let clicks = this.gosmart(this.thing, "clicks", 1)
			if(clicks >= 2){
				clearTimeout(this.getsmart(this.thing, "doubleClickTimeout", false))
				this.setsmart(this.thing, "clicks", 1)
			} else {
				this.setsmart(this.thing, "clicks", ++clicks)
				this.setsmart(this.thing, "doubleClickTimeout", setTimeout(()=>{
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
					let pathAsArray = [
						...this.ppp('root.meta.graph'),
						this.pathAsString,
						...this.ppp('ui.show')
					]
					let toggle = !this.gosmart(
						this.graph, 
						pathAsArray,
						false
					)
					this.setsmart(
						this.graph, 
						pathAsArray,
						toggle
					)
					let debug = 1
					this.setsmart(this.thing, "clicks", 1)
				}, 150))
			}
		},
		toggleSettings(){
			let pathAsArray = [
				...this.ppp(`root.meta.graph`),
				this.pathAsString,
				'showSettings'
			]

			let toggle = !this.getsmart(
				this.graph, 
				pathAsArray, 
				false
			)
			this.setsmart(
				this.graph,
				pathAsArray, 
				toggle
			)
			let tmp = this.pathToString('root.meta.graph'+this.epp(this.pathAsString)+'.settings')
			this.setsmart(
				this.graph,
				[
					...this.ppp("root.meta.graph"),
					tmp,
					...this.ppp('ui.show')
				],
				toggle
			)
			this.setsmart(
				this.graph,
				[
					...this.ppp("root.meta.graph"),
					tmp+this.epp('type'),
					...this.ppp('ui.show')
				],
				toggle
			)
			this.initSettings({force:true})
		},
		initSettings(args={}){
			if(this.settings || args.force){

				let settings = this.gosmarter(this.graph, this.settingsPathAsArray, {})
				this.setsmart(settings, "type", this.valueType)
				
			}
			
		},
		updatePath(e){
			e.preventDefault()
			let newPath = e.target.innerText
			
			// if(newPath[newPath.length-1] == "\n"){
			// 	newPath = newPath.slice(0,newPath.length-1)
			// }
			let newAbsolutePath = this.parentPath+this.epp(newPath)
			// let keyedEvents = this.gosmart(this.graph, [...this.ppp("root.meta.graph"), this.pathAsString, ...this.ppp("events")], [])
			let keyedEvents = this.gosmart(this.graph, [...this.ppp("root.meta.events.keyed"), this.pathAsString], [])
			let events = this.gosmart(this.graph, "root.meta.events", [])

			let event = {
				originalPath: this.pathAsString,
				newPath: newAbsolutePath,
				time: Date().toString()
			}

			keyedEvents.push(event)
			events.push(event)

			this.setsmart(this.graph, newAbsolutePath, this.value)

			if(this.getsmart(this.graph, this.pathAsString, false, true).undefined == false){
				this.deletesmart(this.graph, this.pathAsString)
			}
			
		},
		updateType(type){
			let newVal = undefined
			let err = undefined
			if(type == 'String') {
				newVal = 'string'
			} else if(type == 'undefined'){
				newVal = undefined
			} else if(type == 'null'){
				newVal = null
			} else {
				try {
					// uses Number() instead of new Number() to get default number value
					// or etc.. constructor default value
					newVal = eval(type+'()')
				} catch(err2){
					err = err2
				}
			}
			if(!err){
				// log value change for undo purposes
				let keyedEvents = this.gosmart(this.graph, [...this.ppp("root.meta.graph"), this.pathAsString, ...this.ppp("events")], [])
				let events = this.gosmart(this.graph, "root.meta.events", [])

				let event = {
					path: this.pathAsString,
					time: Date().toString(),
					value: this.value
				}

				keyedEvents.push(event)
				events.push(event)
				this.setsmart(this.graph, this.pathAsString, newVal)

			}
		},
		ai(){
			// this should only run once 
			this.initialize()

			// these will run conditionally and possibly more than once
			this.initSettings()
		},
		initialize(){
			if(!this.getsmart(this.thing, 'initialized', false)){
				try {
					this.merge(this.thing, this.properties, {clone: false})
				} catch(err){console.error(err)}
				this.setsmart(this.thing, 'initialized', true)
			}
		}
	},
	computed: {
		seen: {
			get(){
				let recursiveThis = this.getsmart(this.graph, [...this.settingsPathAsArray, "recursive"], false)
				if(recursiveThis == true) return true
				let seenValues = this.gosmart(this.graph, 'root.meta.script.seenValues', [])
				let seenPaths = this.gosmart(this.graph, 'root.meta.script.seenPaths', [])
				let i = seenValues.indexOf(this.value)
				let seen = true
				if(i < 0 && this.pathAsString != "root"){
					this.pushSmart(seenValues, this.value)
					this.pushSmart(seenPaths, this.pathAsString)
				}

				i = seenPaths.indexOf(this.pathAsString)
				if(i < 0) return true
				return false
			}
		},
		show: {
			get(){
				let ret = this.gosmart(
					this.graph,
					[
						...this.ppp('root.meta.graph'),
						this.pathAsString,
						...this.ppp('ui.show')
					],
					false
				)
				return ret === true		
			}
		},
		render: {
			get(){
				return !this.seen || this.show
			}
		},
		showSettings: {
			get(){
				let pathAsArray = this.ppp(
					`root.meta.graph`
				)
				pathAsArray.push(this.pathAsString, 'showSettings')
				let toggle = this.getsmart(
					this.graph, 
					pathAsArray, 
					false
				)
				return this.render && toggle
			}
		},
		classes: {
			get(){
				return this.getsmart(this.value, "classes", {})
			}
		},
		type: {
			get(){
				let ret = this.getsmart(this.graph, [...this.settingsPathAsArray, 'type'], undefined)
				return ret
			}
		}
	},
  watch: {
		'properties': {
			handler: function(n,o){
				if(!this.equal(n,o) && o !== undefined){
					this.merge(this.thing, n, {clone: false})
				}
			},
		},
		'value': {
			deep: false,
			handler: function(n,o){
				this.ai()
			}
		},
		'type': {
			handler: function(n,o){
				if(!this.equal(n,o) && n !== this.valueType){
					this.updateType(n)
				}
			}
		}
  },
	components: {
		value: () => import('./value.vue')
	}
}
</script>