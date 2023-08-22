import * as React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { WorkspaceType } from '../../types/workspace'

import { setCurrentItem, getCurrentItem } from './MainMenuSlice'
import './style.css'


const MainMenu = () => {
  const dispatch = useDispatch()
  const currentItem = useSelector(getCurrentItem)

  return (
    <div className={'Menu'}>
      <div className={'button' + (currentItem === WorkspaceType.Overview ? ' pressed': '')}
        onClick={() => dispatch(setCurrentItem(WorkspaceType.Overview))}
      >
        Overview
      </div>
      <div className={'button' + (currentItem === WorkspaceType.Graph ? ' pressed': '') }
        onClick={() => dispatch(setCurrentItem(WorkspaceType.Graph))}
      >
        Graph
      </div>
    </div>
  );
}

export default MainMenu;
