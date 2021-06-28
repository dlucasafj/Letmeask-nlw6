import {useHistory} from 'react-router-dom';
import IllusttrationImg from '../../assets/images/illustration.svg';
import logo from  '../../assets/images/logo.svg';
import googleIconImg from '../../assets/images/google-icon.svg';
import '../../styles/auth.scss'
import { Button } from '../Button';
import { useAuth } from '../../hooks/useAuth';


export function Home(){
    
    const history = useHistory();

    const {user,signInWithGoogle} = useAuth();
 
    
    

    async function handleCreateRoom(){
        if(!user){
           await signInWithGoogle();
        }

     history.push('/rooms/new')
        
       
    }

    return(
        <div id='page-auth'>
            <aside>
                <img src={IllusttrationImg} alt="Ilustração simbolizando perguntas e respostas" />
                <strong>Toda pergunta tem uma resposta</strong>
                <p>Tire as duvidas da sua audiencia em tempo real</p>
            </aside>
            <main>
                <div className='main-content'>
                    <img src={logo} alt="" />
                    <button onClick={handleCreateRoom} className='create-room'>
                        <img src={googleIconImg} alt="logo do google" />
                        Crie sua sala com o Google
                    </button>
                <div className='separator'>ou entre em uma sala</div>
                <form >

                    <input
                        type='text'
                        placeholder='Digite o codigo da sala'
                    />
                    <Button type='submit'>
                        Entrar na sala
                    </Button>
                </form>
                </div>
            </main>


        </div>
    )
}