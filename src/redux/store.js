import { configureStore } from '@reduxjs/toolkit'
import phoneBoockSlice  from './counterSlice'
// import { 
//     persistStore, 
//     persistReducer,
//     FLUSH,
//     REHYDRATE,
//     PAUSE,
//     PERSIST,
//     PURGE,
//     REGISTER } from 'redux-persist'
// import storage from 'redux-persist/lib/storage'

// const persistConfig = {
//     key: 'root',
//     storage,
//     blacklist:['filter']
//   }

  // const persistedReducer = persistReducer(persistConfig, phoneBoockSlice.reducer)


export const store = configureStore({
    reducer:{
     contact: phoneBoockSlice.reducer,   
    } 
    // middleware: (getDefaultMiddleware) =>
    // getDefaultMiddleware({
    //   serializableCheck: {
    //     ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    //   },
    // })
})

// export const persistor = persistStore(store)