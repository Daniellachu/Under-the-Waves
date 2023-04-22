// contexts/StoreContext.js
import { createContext, useContext, useState } from 'react';

const StoreContext = createContext(); // This initializes a "context"

export function useStore() { // We are creating our own 'hook' 
  return useContext(StoreContext);
}

export function StoreProvider({ children }) { // The 'Provider' is what gives shared memory to all the other components
  const [store, setStore] = useState({
    settings: {
        audio: 0.5,
        theme: 'Light'
    }, // Initialize your settings state here
    // Add more pieces of data here
  });


  const updateStore = (key, value) => {
    setStore((prevStore) => (
        {
            ...prevStore, // spread operator to keep existing data
            [key]: value // only change the data we want to change
        }));
  }; 

  const value = {
    store,
    updateStore,
  };

  return (
    <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
  );
}
