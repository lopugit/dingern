let green = "#42b983"
let grey = "rgba(239, 239, 239, 1)"
let spacing = "6px 8px"

let pAtom = {
	padding: spacing
}

let atom = {
	margin: spacing
}

let edgeSettingsShow = {
	paddingLeft: "10px !important",
	width: "initial !important",
	opacity: "1 !important",
}

let pillForm = {
	color: 'white',
	backgroundColor: green,
	borderRadius: "10px",
	transition: 'all 350ms ease',
	...pAtom,
	"&.clicked": {
		borderRadius: "10px 10px 0px 0px"
	}
}

let flexCenter = {
	alignItems: "center",
	justifyContent: "center",
}

let flexLM = {
	justifyContent: "flex-start",
	alignItems: "center"
}

let growWidth = {
	display: 'inline-flex',
}

let ownWidth = {
	display: 'inline-flex',
	alignSelf: "flex-start",
}

let graph = {
	thing: {
		root: {
			classes: {
				"p-atom": true
			},
			meta: {
				graph: {
					'[\\"root\\"]': {
						ui: {
							show: true
						}
					},
					'[\\"root\\"][\\"boolean\\"]': {
						ui: {
							show: true
						}
					},
					'[\\"root\\"][\\"obj\\"]': {
						ui: {
							show: true
						}
					},
					'[\\"root\\"][\\"number\\"]': {
						ui: {
							show: true
						}
					},
					'[\\"root\\"][\\"string\\"]': {
						ui: {
							show: true
						}
					},
					'[\\"root\\"][\\"undefined\\"]': {
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
			undefined: undefined,
			null: null,
			boolean: true,
			number: 1,
			string: 'some string',
			obj: {
				property1: {
					nested: {
						string: "hi1"
					}
				},
				property2: {
					nested: {
						string: "hi2"
					}
				},
				property3: {
					nested: {
						string: "hi3"
					}
				},
			},
			'Change My Type!': {
				test: 'hmm'
			},
			classTests: {
				"something special": {
					classes: {
						special: true
					}
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
					},
					'.indent-defined': {
						borderLeft: '1px solid rgba(0,0,0,.1)',
					},
					'.special': {
						padding: '5px',
						borderRadius: '10px',
						backgroundColor: green,
						color: 'white',
					},
					'.add-edge': {
						transition: "all 500mss ease",
						padding: '5px 10px',
						borderRadius: '6px',
						backgroundColor: green,
						color: 'white',
						...atom,
						display: "flex",
						...flexCenter,
						"&:hover": {
							cursor: "pointer"
						},
						"&:hover, &:focus": {
						},
					},
					'.value-container': {
						display: 'inline-flex',
						flexDirection: "column",
						"&.basic": {
							color: green,
							backgroundColor: grey,
							borderRadius: "0px 0px 10px 10px"
						}
					},
					'.basic-value':{
						...pAtom
					},
					'.atom': atom,
					'.left-atom': {
						margin: "4px 0px 4px 8px",
					},
					'.p-atom': pAtom,
					'.edge-container': {
						marginRight: "auto",
						display: 'inline-flex',
						flexDirection: "column",
						...pAtom,
					},
					'.edge-contents': {
						...growWidth,
						flexDirection: "column",
						borderLeft: `1px solid ${grey}`,
						borderRight: `1px solid ${grey}`,
						borderBottom: `1px solid ${grey}`,
						borderRadius: "0px 0px 10px 10px",
						padding: "5px",
						"&.basic": {
							padding: "0px !important"
						}
					},
					'.edge-info-container': {
						...growWidth,
						...flexLM,
						padding: "0px 6px 0px 0px",
						"&:hover ": {
							// cursor: "default",
							"&.edge-settings" : edgeSettingsShow
						},
						"&.clicked": pillForm,
						"&.pill-form": pillForm,
						"&.edge-title-container": {
							...growWidth
						}
					},
					'.edge-settings': {
						marginLeft: "auto",
						padding: "0px !important",
						width: "0px",
						display: "none",
						transition: "all 350ms, ease",
						opacity: 0,
						"&.show": edgeSettingsShow,
						"&:hover ": {
							cursor: "pointer",
						}
					},
					'.edge-info':{
						display: "inline-flex",
						// marginRight: "5px",
					},
					'.complex-value': {
						display: "inline-flex",
						flexDirection: "column"
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
			},
			settingsSchema: {
				delete: {
					"are you sure?": {
						"yes": {
							button: {
								emit: {
									name: "deleteConfirmation",
									value: true
								}
							}
						},
						"no": {
							button: {
								emit: {
									name: "deleteConfirmation",
									value: true
								}
							}
						}
					}
				}
			}
		}
	}
}

graph.thing.root.pointerTest = graph.thing.root.pointer

export default graph
