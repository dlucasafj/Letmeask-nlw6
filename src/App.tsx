import { Button } from "./components/Button";
import { Home } from "./components/pages/Home";
import { NewRoom } from "./components/pages/NewRoom";
import {BrowserRouter, Route} from  'react-router-dom'


function App() {
  return (
    <BrowserRouter>
      <Route path='/' exact component={Home}></Route>
      <Route path='/rooms/new' component={NewRoom}/>
    </BrowserRouter>

  );
}

export default App;
