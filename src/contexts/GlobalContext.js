import React from "react";

export const contextGlobalState = {
};

export const contextGlobalStaticVar = {
    conFirmDialog: null
}

const GlobalContext = React.createContext(contextGlobalState); //passing initial value

export default GlobalContext;