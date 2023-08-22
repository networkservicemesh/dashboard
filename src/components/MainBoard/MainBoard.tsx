import React from 'react';
import { useSelector } from 'react-redux';

import MainMenu from '../MainMenu/MainMenu';
import { getCurrentItem } from '../MainMenu/MainMenuSlice'
import GraphView from '../GraphView/GraphView';
import OverviewView from '../OverviewView/OverviewView';

import { WorkspaceType } from '../../types/workspace';

import './style.css'

const MainBoard = () => {
    const wsType = useSelector(getCurrentItem)
    const displayView = wsType === WorkspaceType.Graph
        ? <GraphView></GraphView>
        : <OverviewView></OverviewView>;

    return (
        <div className={'MainBoard'}>
            <MainMenu/>
            { displayView }
        </div>
    );
}

export default MainBoard;
