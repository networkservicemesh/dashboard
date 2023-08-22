import React, { useState, useEffect } from 'react';

import './style.css'

interface RightPanelProps {
    parentRef: any,
    header?: string,
    width?: number,
    topOffset?: number,
    bottomOffset?: number,
    rightOffset?: number,
    children?: React.ReactNode
    onClose?(): void,
}

const RightPanel = ({parentRef, children, header = '', onClose, width = 240, topOffset = 10, rightOffset = 10, bottomOffset = 10}: RightPanelProps) => {
    const [bottom, setBottom] = useState(0)
    const [right, setRight] = useState(0)
    const [top, setTop] = useState(0)

    useEffect(() => {
        const { top, bottom, right } = parentRef?.current
            ? parentRef.current.getBoundingClientRect()
            : { top: 0, bottom: 0, right: 0 };
        setBottom(bottom)
        setRight(right)
        setTop(top)
    })

    return (
        <div style={{
            position: 'absolute',
            background: 'white',
            top: `${top + topOffset}px`,
            borderColor: 'lightgrey',
            borderStyle: 'solid',
            left: `${right - width - rightOffset}px`,
            height: `${bottom - bottomOffset - top - topOffset}px`,
            width: `${width}px`}}>
                <div className={'panelHeader'}>
                    <div>{header}</div>
                    {
                        onClose
                            ? (<div className='closeButton' onClick={onClose}>[x]</div>)
                            : null 
                    }
                </div>
                <div>
                    {children}
                </div>
        </div>
    );
}

export default RightPanel;
