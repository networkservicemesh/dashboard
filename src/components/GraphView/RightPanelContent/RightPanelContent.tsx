import React, { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getShowNodeDetails } from '../GraphViewSlice'
import './style.css'

// TODO: remove 
import { extraNodesData } from  '../../CySNetwork/dummyData'

// TODO: get data from state 
const getNodeDetais = (id: string) => {
    const result = extraNodesData.find(nodeData => nodeData.id === id)
    console.log(`getNodeDetais(${id}): ${result}`)
    return result
}

const RightPanelContent = () => {
    const id = useSelector(getShowNodeDetails)

    const extraData = id
        ? JSON.stringify(getNodeDetais(id), null, 2)
        : 'No data'
 
    return (
        <div className={'content'}>
            <pre>{extraData}</pre>
        </div>
    )
}

export default RightPanelContent
