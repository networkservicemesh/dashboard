import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../store'
import { WorkspaceType } from '../../types/workspace'

// Define a type for the slice state
interface GraphViewState {
  showRightPanel: boolean,
  showNodeDetails: string, 
}

// Define the initial state using that type
const initialState: GraphViewState = {
  showRightPanel: false,
  showNodeDetails: '',
}

export const graphViewSlice = createSlice({
  name: 'graphView',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    setShowRightPanel: (state, action: PayloadAction<boolean>) => {
      state.showRightPanel = action.payload
    },
    setShowNodeDetails: (state, action: PayloadAction<string>) => {
      state.showNodeDetails = action.payload
    },
  },
})

export const { setShowRightPanel, setShowNodeDetails } = graphViewSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const getShowRightPanel = (state: RootState) => state.graphView.showRightPanel
export const getShowNodeDetails = (state: RootState) => state.graphView.showNodeDetails

export default graphViewSlice.reducer