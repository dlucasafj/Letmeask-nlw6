import { Button } from "./components/Button";
import { Home } from "./components/pages/Home";
import { NewRoom } from "./components/pages/NewRoom";
import {BrowserRouter, Route} from  'react-router-dom'



import {AuthContextProvider}from './contexts/AuthContext'


function App() {

  

  return (
    <BrowserRouter>
      
      <AuthContextProvider>
        <Route path='/' exact component={Home}></Route>
        <Route path='/rooms/new' component={NewRoom}/>
      </AuthContextProvider>
     
    </BrowserRouter>

  );
}

export default App;
