

import React, { createContext, useContext, useReducer } from "react";

export const DataLayerContext=createContext()

export const Stateprovider = ({ reducer, initialState, children }) => (
 <DataLayerContext.Provider value={useReducer(reducer, initialState)}>
   {children}
 </DataLayerContext.Provider>
);

export const Usedatalayer =() =>useContext(DataLayerContext)



