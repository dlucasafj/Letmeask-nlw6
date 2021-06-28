import { Button } from "./components/Button";
import { Home } from "./components/pages/Home";
import { NewRoom } from "./components/pages/NewRoom";
import {BrowserRouter, Route} from  'react-router-dom'
import {createContext} from 'react'
import { useState } from "react";
import { auth,firebase } from "./services/firebase";


type User={
  id: string;
  name:string;
  avatar: string;
}
type AuthContextType ={
  user: User | undefined;
  signInWithGoogle: ()=> Promise<void>;
}

export const AuthContext = createContext({} as AuthContextType);

function App() {

  const [user,setUser] = useState<User>();

  async function signInWithGoogle(){
    const provider = new firebase.auth.GoogleAuthProvider();
    
    const result = await auth.signInWithPopup(provider);
   
        console.log(result)
        if(result.user){
          const {displayName,photoURL,uid} = result.user;
          if(!displayName || !photoURL){
            throw new Error('Missing information from Google Account')
          }

          setUser({
            id:uid,
            name:displayName,
            avatar:photoURL
          })
        }

   

  }

  return (
    <BrowserRouter>
      <AuthContext.Provider value={{user,signInWithGoogle}}>
    
        <Route path='/' exact component={Home}></Route>
        <Route path='/rooms/new' component={NewRoom}/>
      </AuthContext.Provider>
    </BrowserRouter>

  );
}

export default App;
