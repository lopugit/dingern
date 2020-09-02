let green = "#42b983"

let graph = {
	thing: {
		root: {
			meta: {
				graph: {
					'[\\"root\\"]': {
						ui: {
							show: true
						}
					},
					'[\\"root\\"][\\"meta\\"][\\"script\\"]': {
						settings: {
							recursive: true
						}
					},
					'[\\"root\\"][\\"meta\\"][\\"events\\"]': {
						settings: {
							recursive: true
						}
					},
				},
				script: {
					seenValues: [],
					seenPaths: [],
				},
			},
			rootEdge: "root",
			test1: undefined,
			test2: null,
			test3: true,
			test4: 1,
			test5: 'some string',
			'Change My Type!': {
				test: 'hmm'
			},
			classTests: {
				classes: {
					special: true
				}
			},
			array: [
				1,
				"string",
				{
					object: true
				},
				true,
				[1,2,3]
			],
			pointer: {
				test: 'cool'
			},
			css: {
				'@global': {
					'[contenteditable]': {
						"&:focus": {
							outline: "0px solid transparent"
						}
					},
					'.value': {
						// marginLeft: '10px'
					},
					'.special': {
						padding: '5px',
						borderRadius: '4px',
						backgroundColor: green,
						color: 'white'
					},
					'.add-edge': {
						// maxHeight: '1px',
						transition: "all 500mss ease",
						marginLeft: '10px',
						"&:hover": {
							cursor: "pointer"
						},
						"&:hover, &:focus": {
							// maxHeight: "50px"
						},
					},
					'.value-container': {
						width: 'auto',
						display: 'block'
					},
					'.basic-value':{
						marginLeft: '10px',
					},
					'.edge-container': {
						marginLeft: '10px',
						width: 'auto',
						// display: 'inline-block'
					},
					'.edge-info-container': {
						display: 'inline-block',
						"&:hover ": {
							"&.edge-options" : {
								padding: "2px 2px !important",
								width: "initial",
								// visibility: "visible",
								opacity: 1,
							}
						},
						"&.pill-form": {
							color: 'white',
							backgroundColor: green,
							borderRadius: "8px",
							padding: "0px 2px",
							transition: 'all 350ms ease',
							marginTop: "6px",
							".edge-info": {
								padding: "2px 2px",
							}
						},
					},
					'.edge-options': {
						// visibility: "hidden",
						padding: "0px !important",
						width: "0px",
						display: "none",
						transition: "all 350ms, ease",
						opacity: 0,
						"&:hover ": {
							cursor: "pointer",
						}
					},
					'.edge-info':{
						display: "inline-block",
						// marginRight: "5px",
					}
				}
			},
			"FAQ": {
				"Why use a separate Edge and Value component?": `For example, let's say you have an object structure

				obj = { foo: { bar: 'foo' }, bar: { foo: 'bar' } }

				and you want to show the value of obj.foo, you would create a value component with path "obj.foo", and you would get rendered the property bar

				But, what if you want to show only the property foo of obj, including the title foo, without rendering all properties of obj?

				Then, you make an edge component, with a path property of "obj.foo", and you'll get foo on it's own which can be expanded to show all of foo's properties such as bar in this case
				`
			},
			"TO-DO": {
				"Drag and drop re-ordering of properties and values": {
					"How?": "This would work by storing the render order of properties assosciated with a path in the meta graph for that path.",
					'priority': 1
				},
				"Collation of all paths that point to an object": {
					"Why?": {
						"By doing this you can assign different properties to the same Object based on what path it is being access via, letting you render it differently in different locations, enabling you do edit it and render it at the same time": `
							Eg. if you have a navigation menu, the renderable path may be root.navMenu, but you also make root.editor.navMenu = root.navMenu, 
							
							but under root.graph you make root.graph['root.navMenu'].renderMode = 'rendered' 
							and root.graph['root.editor.navMenu'].renderMode = 'editor' 
							
							or simply have everything under root.editor inherit the 'editor' render mode via root.graph['root.editor.*'].renderMode = 'editor'`
					},
					"How?": "By using Object based keying via a Map or Array you store all paths that point to a certain Object",
					"Notes": [
						"Requires you to dereference Objects if the path is reassigned a value, this mechanism can be patched in via the smarts.setsmart function"
					],
					'priority': 1
				},
				"WebRTC based databasing and peer-to-peer communication": {
					"Why?": {
						'a': 'For unique user features typical of any platform, login, logout, synced data, etc..',
						'b': 'Decentralised data storage using encryption protocols and social network access grants'
					},
					'priority': 3
				},
				"Asynchronous memory/storage access": {
					"Why?": {
						'a': 'Because all JavaScript data is stored in memory, to avoid huge memory usage, graph paths should be fetched from some filesystem cold storage api such as window.localStorage or IndexedDB or etc..',
					},
					"How?": "window.localStorage or IndexedDB or etc..",
					'priority': 3
				},
				"Filesystem access": {
					"Why?": {
						'a': 'As a service you should be able to interact with your computers local filesystem through the Dingern platform, representing a filesystem with JSON is trivial and would offer greater flexibility and power when needing to edit source code and other locally dependant things',
					},
					'How?': "Using native API's through something like Electron or by having a local UPnP relay on the users machine to enable communication between browser and filesystem",
					'priority': 3
				},
				'Priority Legend': {
					'1': 'Needs doing ASAP for fundamental feature suite for demos',
					'2': 'Would be a good polishing feature for demos',
					'3': 'Needs doing for mainstream release but is not urgent for demo purposes',
				}
			}
		}
	}
}

graph.thing.root.pointerTest = graph.thing.root.pointer

export default graph
