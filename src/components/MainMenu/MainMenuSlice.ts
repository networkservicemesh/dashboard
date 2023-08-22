import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../store'
import { WorkspaceType } from '../../types/workspace'

// Define a type for the slice state
interface MainMenuState {
  currentItem: WorkspaceType
}

// Define the initial state using that type
const initialState: MainMenuState = {
  currentItem: WorkspaceType.Overview,
}

export const mainMenuSlice = createSlice({
  name: 'mainMenu',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    setCurrentItem: (state, action: PayloadAction<WorkspaceType>) => {
      state.currentItem = action.payload
    },
  },
})

export const { setCurrentItem } = mainMenuSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const getCurrentItem = (state: RootState) => state.mainMenu.currentItem

export default mainMenuSlice.reducer
