/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Destination, Source } from '../utils/apis';

// interface Destination {
//   id: number;
//   name: string;
// }

// interface Source {
//   id: number;
//   name: string;
// }

// interface Pipeline {
//   id: number;
//   destination: Destination;
//   logLevel: string;
//   name: string;
//   source: Source;
//   transforms: any[];
// }

// interface DestinationConfig {
//   id: number;
//   config: Record<string, any>;
//   name: string;
//   schema: string;
//   type: string;
//   vaults: any[];
// }

interface DataContextType {
  source: Source | null;
  setSource: React.Dispatch<React.SetStateAction<Source | null>>;
  destination: Destination | null;
  setDestination: React.Dispatch<React.SetStateAction<Destination | null>>;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

export const DataProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [source, setSource] = useState<Source | null>(null);
  const [destination, setDestination] = useState<Destination | null>(null);

  return (
    <DataContext.Provider value={{ source, setSource, destination, setDestination }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
};
