<template lang="pug">

	.edge-container(
		:class=`{
			...classes,
			basic: isBasic,
			complex: !isBasic,
		}`
		:style=`{
			...styles,
		}`
	)
		.basic-contents(
			:class=`{
				basic: isBasic,
				complex: !isBasic
			}`
		)
			.edge-info-container(
				:class=`{
					clicked: edgeTitleFocused || show,
					basic: isBasic,
					complex: !isBasic,
					valueShown: show
				}`
				@mouseover=`mouseoverEdgeTitle`
				@mouseleave=`mouseleaveEdgeTitle`
			)
				.edge-title-container(
					ref="pathInput"
					@click=`edgeTitleClick`
					@keypress.enter=`updatePath`
				) 
					.edge-title(
						:class=`{
							editing: edgeTitleFocused
						}`
						:contenteditable=`edgeTitleFocused`
					) {{ pathAsArray[pathAsArray.length-1] }}
				//- v-if=`edgeTitleHovered`
				.edge-settings(
					@click=`toggleGraph`
					:class=`{
						show: edgeTitleHovered
					}`
				)
					//- :name=`showGraphProps ? "keyboard_arrow_up" : "keyboard_arrow_down"`
					q-icon(
						name="fa fa-cog"
						size="11px"
					)
				//- .change-type.edge-info(
				//- 	contenteditable
				//- ) {{ valueType }}
			//- Edge Value 
			//- complex
			value(
				v-if=`render && isBasic`
				v-show=`show`
				@event=`handleEmittedEvent`
				:properties=`{
					path: pathAsString,
					root: thing.root
				}
				`
			)
		.complex-contents(
			v-if=`showGraphProps || render`
			v-show=`show || showGraphProps`
			:class=`{
				basic: isBasic,
				complex: !isBasic
			}`
		)
			edge(
				v-if=`showGraphProps`
				@event=`handleEmittedSettingsEvent`
				:properties=`{
					path: "root.meta.graph"+epp(pathAsString)
				}`
			)
			//- Edge Value 
			//- complex
			value(
				v-if=`render && !isBasic`
				v-show=`show`
				@event=`handleEmittedEvent`
				:properties=`{
					path: pathAsString,
					root: thing.root
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
		mouseoverEdgeTitle(e){
			this.setsmart(this.thing, "edgeTitleHovered", true)
		},
		mouseleaveEdgeTitle(e){
			this.setsmart(this.thing, "edgeTitleHovered", false)
		},
		edgeTitleClick(e){
			let clicks = this.gosmart(this.thing, "clicks", 0)+1
			if(this.getsmart(this.value, 'button', false)){
				let button = this.getsmart(this.value, 'button', {})
				if(button.do && typeof button.do === 'string'){
					let code = button.do
					eval(code)
				}
			} else if(clicks > 1){
				clearTimeout(this.getsmart(this.thing, "doubleClickTimeout", false))
				this.setsmart(this.thing, "edgeTitleFocused", false)

				let pathAsArray = [
					...this.ppp('root.meta.graph'),
					this.pathAsString,
					...this.ppp('ui.show')
				]

				this.setsmart(
					this.graph, 
					pathAsArray,
					false
				)

				// clear highlighting
				if(document.selection && document.selection.empty){
					document.selection.empty() 
				} else if(window.getSelection) {
					let sel = window.getSelection()
					if(sel && sel.removeAllRanges){
						sel.removeAllRanges()
					}
				}

				this.toggleGraph({force:false})

				this.setsmart(this.thing, "clicks", 0)

			} else {
				this.setsmart(this.thing, "clicks", clicks)
				this.setsmart(this.thing, "doubleClickTimeout", setTimeout(()=>{
					e.preventDefault()
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

					this.setsmart(this.thing, "edgeTitleFocused", true)

					this.setsmart(
						this.graph, 
						pathAsArray,
						true
					)

					this.setsmart(this.thing, "clicks", 0)
					
				}, 300))
			}
		},
		toggleGraph(e={}){

			let showPathAsArray = [
				...this.ppp('root.meta.graph'),
				this.pathAsString,
				...this.ppp('ui.show')
			]

			let shown = this.getsmart(
				this.graph, 
				showPathAsArray,
				false
			)
			
			let pathAsArray = [
				...this.ppp(`root.meta.graph`),
				this.pathAsString,
				'showGraphProps'
			]

			let toggle = !this.getsmart(
				this.graph, 
				pathAsArray, 
				false
			)

			if(!shown) toggle = true
			if(typeof e.force == 'boolean') toggle = e.force

			this.setsmart(
				this.graph,
				pathAsArray, 
				toggle
			)

			let settingsPath = this.pathToString('root.meta.graph'+this.epp(this.pathAsString)+'.settings')
			
			this.setsmart(
				this.graph,
				[
					...this.ppp("root.meta.graph"),
					settingsPath,
					...this.ppp('ui.show')
				],
				toggle
			)
			this.setsmart(
				this.graph,
				[
					...this.ppp("root.meta.graph"),
					settingsPath+this.epp('type'),
					...this.ppp('ui.show')
				],
				toggle
			)

			this.initSettings({force:true})
			
			if(!shown && toggle){
				this.setsmart(
					this.graph, 
					showPathAsArray,
					true
				)
			}

			let settingsDeleteEdgePath = this.pathToString('root.meta.graph'+this.epp(this.pathAsString)+'.settings.delete.are you sure?')
			
			this.setsmart(
				this.graph,
				[
					...this.ppp("root.meta.graph"),
					settingsDeleteEdgePath,
					...this.ppp('ui.show')
				],
				toggle
			)
			
		},
		initSettings(args={}){
			if(this.settings || args.force){

				let settingsSchema = this.getsmart(this.graph, "root.settingsSchema", {})
				let settings = this.gosmarter(this.graph, this.settingsPathAsArray, {})
				this.schema(settings, settingsSchema)
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
			let keyedEvents = this.gosmarter(this.graph, [...this.ppp("root.meta.events.keyed"), this.pathAsString], [])
			let events = this.gosmarter(this.graph, "root.meta.events.time", [])

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
		handleEmittedSettingsEvent(event){
			if(event.name == "deleteConfirmation"){
				if(event.value === true){
					this.$emit("event", {name: "delete", value: true, path: [this.localPath]})
				} else if(event.value === false){
					let settingsDeleteEdgePath = this.pathToString('root.meta.graph'+this.epp(this.pathAsString)+'.settings.delete')
					
					this.setsmart(
						this.graph,
						[
							...this.ppp("root.meta.graph"),
							settingsDeleteEdgePath,
							...this.ppp('ui.show')
						],
						false
					)

				}
			}
		},
		handleEmittedEvent(event){
			this.$emit("event", event)
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
				let events = this.gosmarter(this.graph, "root.meta.events", [])

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

				try {
					if(this.pathAsArray[this.pathAsArray.length-1] == "do" && this.pathAsArray[this.pathAsArray.length-2] != "button"){
						let code = this.value
						eval(code)
					}
				} catch(err){console.error(err)}
				
				this.setsmart(this.thing, 'initialized', true)
				
			}
		}
	},
	computed: {
		edgeTitleHovered: {
			get(){
				return this.getsmart(this.thing, "edgeTitleHovered", false)
			}
		},
		edgeTitleFocused: {
			get(){
				return this.getsmart(this.thing, "edgeTitleFocused", false)
			}
		},
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
		showGraphProps: {
			get(){
				let pathAsArray = this.ppp(
					`root.meta.graph`
				)
				pathAsArray.push(this.pathAsString, 'showGraphProps')
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
		styles: {
			get(){
				return this.getsmart(this.value, "styles", {})
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
				// console.log('c-c-c-c-c-changes', n,o)
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