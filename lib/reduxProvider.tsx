'use client'
//redux is a client component
import store from '@/store/store'
import React from 'react'
//import The provider and store
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'



export default function ReduxProviders({children}:{children:React.ReactNode}) {
  let persistor = persistStore(store)

  return (
 
   <Provider store={store}>
     <PersistGate persistor={persistor}>
     {children}
     </PersistGate>
   </Provider>
  )
}
