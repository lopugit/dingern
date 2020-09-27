let hex = require('rgb-hex')
let rgb = require('hex-rgb')

let green = `66, 185, 131`
let white = `255, 255, 255`
let grey1 = `240, 242, 245`
let grey2 = `239, 239, 239`
let grey3 = `101, 103, 107`

let black1 = `5, 5, 5`
let spacing = "10px 12px"

let patom = {
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

let pill = {
	borderRadius: "10px",
	// border: `1px solid rgba(${grey2}, 1)`,
	background: `rgba(${grey2}, 1)`,
}

let pillTop = {
	borderTopLeftRadius: "10px",
	borderTopRightRadius: "10px",
	borderBottomLeftRadius: "0px",
	borderBottomRightRadius: "0px",
	// border: `1px solid rgba(${grey2}, 1)`,
	background: `rgba(${grey2}, 1)`,
}

let flexCenter = {
	alignItems: "center",
	justifyContent: "center",
}

let flexLM, flexLeft = {
	display: "inline-flex",
	justifyContent: "flex-start",
	alignItems: "center"
}
let flexRM, flexRight = {
	display: "inline-flex",
	justifyContent: "flex-end",
	alignItems: "center"
}

let growWidth = {
	display: 'inline-flex',
	flexGrow: 1
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
						},
						settings: {
							renderOrder: [
								"pointer",
								"pointerTest"
							]
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
						// borderLeft: '1px solid rgba(0,0,0,.1)',
					},
					'.special': {
						padding: '5px',
						borderRadius: '10px',
						backgroundColor: green,
						color: 'white',
					},
					'.add-edge-container': {
						...flexLeft,
						...atom,
						'& .add-edge': {
							transition: "all 500ms ease",
							...patom,
							...flexLeft,
							...pill,
							width: "100%",
							"&:hover": {
								cursor: "pointer"
							},
							"&:hover, &:focus": {
							},
						},
					},
					'.value-container': {
						display: 'inline-flex',
						flexDirection: "column",
						"&.basic": {
							color: `rgba(${black1}, 1)`,
							backgroundColor: `rgba(${grey2}, 1)`,
							borderRadius: "0px 0px 10px 10px",
							fontWeight: 400,
						}
					},
					'.basic-value':{
						...patom,
						transition: 'all 300ms ease',
						"&.editing": {
							borderRadius: "10px",
							background: `rgba(${white}, 1)`,
							...atom,
							...patom,
						}
					},
					'.atom': atom,
					'.left-atom': {
						margin: "4px 0px 4px 8px",
					},
					'.p-atom': patom,
					'.edge-container': {
						display: 'inline-flex',
						flexDirection: "column",
						...ownWidth,
						...atom,
						"&.basic": {
							"&>.basic-contents": {
								"&>.edge-info-container": {
									...pill,
									"&.valueShown": {
										...pillTop
									}	
								}
							}
						},
						"&.complex": {
							"&>.basic-contents": {
								"&>.edge-info-container": {
									...pill
								},
							},
							"&.settings": {
							}
						},
						"&>.basic-contents": {
							display: "flex",
							flexDirection: "column",
							borderRadius: "0px 0px 10px 10px",
							...ownWidth,
							"&.basic": {
								padding: "0px !important",
							},
							'&>.edge-info-container': {
								width: "200px",
								maxWidth: "100%",
								// minWidth: "100%",
								...growWidth,
								...flexLM,
								...patom,
								// ...pillForm,
								"&:hover ": {
									// cursor: "default",
									"&.edge-settings" : edgeSettingsShow
								},
								"&.complex": {
									flexGrow: 0
								},
								"&>.edge-title-container": {
									...growWidth,
									"& .edge-title": {
										...growWidth,
										fontWeight: 400
									},
								},
								'&>.edge-settings': {
									marginLeft: "auto",
									padding: "0px !important",
									width: "0px",
									display: "none",
									transition: "all 350ms, ease",
									opacity: 0,
									...flexRight,
									"&.show": edgeSettingsShow,
									"&:hover ": {
										cursor: "pointer",
									}
								},
								// "&.clicked": pillForm,
							},
						},
						'&>.complex-contents': {
							display: "flex",
							flexDirection: "column",
							borderRadius: "0px 0px 10px 10px",
							padding: "5px",
							"&.basic": {
								padding: "0px !important",
							}
						},
						// boxShadow: `2px 2px 4px rgba(${grey3},.05)`,
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
					'priority': 1,
					"Sub-taks": {
						"Graph settings property for each path which stores the render order of properties": {
							"notes": "After retreiving this render order, a bit of analysis has to be done, diffing so to speak, to determine if any properties stored in the render order list are not in the object anymore, and to remove the render order properties from the Object.keys list so properties aren't rendered twice"
						},
						'priority': 1,
						'done': true
					}
				},
				"Render Modes": {
					"How?": "Depending on assosciated graph properties for a path, certain properties of the object, self hosted or on the graph, will not be ignored, such as the classes property, meaning you get an end user renderable view, not the data view",
					"priority": 1
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
				},
			}
		}
	}
}

graph.thing.root.pointerTest = graph.thing.root.pointer

export default graph
