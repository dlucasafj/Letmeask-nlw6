import {useHistory} from 'react-router-dom';
import IllusttrationImg from '../../assets/images/illustration.svg';
import logo from  '../../assets/images/logo.svg';
import googleIconImg from '../../assets/images/google-icon.svg';
import '../../styles/auth.scss'
import { Button } from '../Button';


export function Home(){

    const history = useHistory();
    function navigateToNewRoom(){
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
                    <button onClick={navigateToNewRoom} className='create-room'>
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