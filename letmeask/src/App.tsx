import { createContext, useState } from 'react';
import { Home } from './pages/Home';
import { NewRoom } from './pages/NewRoom';
import { BrowserRouter, Route } from 'react-router-dom';

export const LoginContext = createContext({} as any);

function App() {
  const [value, setValue] = useState('state');
  return (
    <BrowserRouter>
      <LoginContext.Provider value={{ value, setValue }}>
        <Route exact path='/' component={Home} />
        <Route path='/rooms/new' component={NewRoom} />
      </LoginContext.Provider>
    </BrowserRouter>
  );
}

export default App;
