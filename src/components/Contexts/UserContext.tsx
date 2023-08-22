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
  const [user, setUser] = useState<UserContextType>(userDefault);

  //Для Антона, нужно ли обнулять setUser? Либо можно по дефолту писать?
  //const SetUser = (user: UserContextType) => {setUser(() => user); };
  //либо нужно создать ещё один тип данных, без функции?
  const SetUser = ({ id, name, token }: UserContextType) => {
    let currentUser = { id: id, name: name, token: token, setUser: undefined };
    setUser(() => currentUser);
  };

  return (
    <UserContext.Provider
      value={{
        id: user.id,
        name: user.name,
        token: user.token,
        setUser: SetUser,
      }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
