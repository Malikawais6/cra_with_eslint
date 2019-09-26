import React from "react";
import { createContext } from "react";
export type AppContextType = {
  data?: any;
  dispatch?: any;
};
export const initialContent = { data: [], dispatch: () => undefined };
export const AppContext = createContext<AppContextType>(initialContent);
export const AppContextProvider = (props: any) => {
  return (
    <AppContext.Provider value={{ data: [], dispatch: () => undefined }}>
      {props.children}
    </AppContext.Provider>
  );
};
