let green = "#42b983"

let graph = {
	thing: {
		root: {
			meta: {
				script: {
					seenValues: [],
					seenPaths: [],
					recursives: {
						root: {
							meta: {
								recursive: true
							}
						}
					}
				},
				ui: {
					root: {
						render: true
					}
				},
				types: {

				}
			},
			rootEdge: "[\"root\"]",
			events: {
				keyed: {},
				ordered: []
			},
			test1: undefined,
			test2: null,
			test3: true,
			test4: 1,
			test5: 'some string',
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
					'.value-container': {
						marginLeft: '10px',
						width: 'auto',
						// display: 'inline-block'
					},
					'.value': {
						// marginLeft: '10px'
					},
					'.add-edge': {
						// maxHeight: '1px',
						transition: "all 500mss ease",
						"&:hover": {
							cursor: "pointer"
						},
						"&:hover, &:focus": {
							// maxHeight: "50px"
						}
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
			}
		}
	}
}

// graph.thing.root.pointerTest = graph.thing.root.pointer

export default graph
