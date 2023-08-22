import { configureStore } from '@reduxjs/toolkit'
import mainMenuReducer from './components/MainMenu/MainMenuSlice'
import graphViewReducer from './components/GraphView/GraphViewSlice'

const store = configureStore({
  reducer: {
    mainMenu: mainMenuReducer,
    graphView: graphViewReducer
  },
})

export default store

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
