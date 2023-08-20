import { ReactNode, createContext, useState } from 'react';

interface UserContextType {
  id: string;
  name: string;
  token: string;
  setUser?: ({ id, name, token }: UserContextType) => void;
}

const userDefault: UserContextType = {
  id: '0',
  name: 'default',
  token: '',
};

export const UserContext = createContext<UserContextType>(userDefault);

interface UserProviderProps {
  children: ReactNode;
}

const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [id, setId] = useState<string>(userDefault.id);
  const [name, setName] = useState<string>(userDefault.name);
  const [token, setToken] = useState<string>(userDefault.token);
  function SetUser({ id, name, token }: UserContextType) {
    setId(() => id);
    setName(() => name);
    setToken(() => token);
  }

  return (
    <UserContext.Provider
      value={{
        id: id,
        name: name,
        token: token,
        setUser: SetUser,
      }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
