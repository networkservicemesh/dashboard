import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from 'react-redux';
import cytoscape from 'cytoscape';
import dagre from 'cytoscape-dagre';

import { setShowRightPanel, setShowNodeDetails } from '../GraphView/GraphViewSlice'
import { elements } from './dummyData';

cytoscape.use(dagre);

const CySNetwork: React.FC = () => {
	const cyJsRef = useRef<HTMLDivElement>(null);
	const dispatch = useDispatch()

	useEffect(() => {
		const network =
			cyJsRef.current &&
			cytoscape({
				container: cyJsRef.current , // container to render in
				elements,
				minZoom: 0.5,
				maxZoom: 10,
				style: [ // the stylesheet for the graph
				  {
					selector: 'node',
					style: {
					  //'content': 'data(name)',
					  'background-color': '#666',
					  'label': 'data(name)',
					  //increase space between label and node
					  'text-margin-y': -5
					}
				  },
				  {
					selector: 'edge',
					style: {
					  	'width': 3,
					  	'line-color': '#ccc',
					  	'target-arrow-color': '#ccc',
						'target-arrow-shape': 'triangle',
						'curve-style': 'bezier'
					}
				  },
				],
				layout: {
					name: 'dagre',
					rankDir: 'LR',
					nodeSep: 45,
					edgeSep: 10,
					rankSep: 30,
					nodeDimensionsIncludeLabels: true,
					ranker: 'network-simplex', //'network-simplex', 'tight-tree', 'longest-path', 
				} as dagre.DagreLayoutOptions
			});
		network?.on('click', event => {
			const { target, type, namespace, timeStamp, position,renderedPosition  } = event;
			const id = target.id && target.id()
			if (!id || target.group() !== 'nodes') return;

			const group = target.group();
			console.log(JSON.stringify({
				type,
				namespace,
				timeStamp,
				position,
				renderedPosition,
				id,
				group,
			}));
			dispatch(setShowNodeDetails(id))
			dispatch(setShowRightPanel(true))
		})
	}, [cyJsRef]);

	return (

			<div ref={cyJsRef}
				style={{
					height: "100%",
					width: "100%",
				}}/>

	);
};

export default CySNetwork;
