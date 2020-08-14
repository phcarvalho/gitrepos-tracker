import React, { useState, createContext, Dispatch, SetStateAction } from 'react';

type RepoContextType = {
  repos: never[];
  setRepos: Dispatch<SetStateAction<never[]>>;
}

const initialValue: RepoContextType = {
  repos: [],
  setRepos: repos => {},
}

const RepoContext = createContext(initialValue);

const RepoProvider: React.FC = ({ children }) => {
  const [repos, setRepos] = useState([]);

  return (
    <RepoContext.Provider
      value={{repos, setRepos}}
    >
      {children}
    </RepoContext.Provider>
  )
}

export default RepoProvider;

export { RepoContext };