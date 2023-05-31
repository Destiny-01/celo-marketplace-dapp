import React, {
  createContext,
  ReactFragment,
  useContext,
  useState,
  SetStateAction,
  useMemo,
} from "react";

const defaultValue = {
  name: "",
  location: "",
  setName: (name: string | SetStateAction<string>): void => {},
  setLocation: (location: string | SetStateAction<string>): void => {},
};

export const AppContext = createContext<{
  name: string;
  setName: React.Dispatch<SetStateAction<string>>;
  location: string;
  setLocation: React.Dispatch<SetStateAction<string>>;
}>(defaultValue);

interface Props {
  children: ReactFragment;
}

export const AppProvider = ({ children }: Props) => {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const value = useMemo(
    () => ({ name, setName, location, setLocation }),
    [name, location]
  );

  return (
    <AppContext.Provider value={value}>
      {useMemo(
        () => (
          <>{children}</>
        ),
        [children]
      )}
    </AppContext.Provider>
  );
};

export const useApp = () => useContext(AppContext);
