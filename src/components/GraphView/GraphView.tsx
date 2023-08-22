import React, { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import CySNetwork from '../CySNetwork/CySNetwork';
import RightPanel from '../RightPanel/RightPanel';
import { getShowRightPanel, setShowRightPanel } from './GraphViewSlice'
import './style.css'
import RightPanelContent from './RightPanelContent/RightPanelContent';


const GraphView = () => {
    const viewRef = useRef<any>(null)
    const showRightPanel = useSelector(getShowRightPanel)
    const dispatch = useDispatch()

    return (
        <div
            ref={viewRef}
            className={'GraphView'}>
            <CySNetwork></CySNetwork>
            {
                showRightPanel
                ? <RightPanel
                    parentRef={viewRef}
                    header={'Details:'}
                    onClose={() => dispatch(setShowRightPanel(false))}>
                        <RightPanelContent/>
                  </RightPanel>
                : null
            }
        </div>
    );
}

export default GraphView;
