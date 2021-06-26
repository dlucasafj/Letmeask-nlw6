import { Link } from 'react-router-dom';
import IllusttrationImg from '../../assets/images/illustration.svg';
import logo from  '../../assets/images/logo.svg';
import googleIconImg from '../../assets/images/google-icon.svg';
import '../../styles/auth.scss'
import { Button } from '../Button';


export function NewRoom(){
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
                   <h2>Criar uma Nova Sala</h2>
               <form >

                   <input
                       type='text'
                       placeholder='Nome da sala'
                   />
                   <Button type='submit'>
                        Criar sala
                   </Button>
               </form>
               <p>
                   Quer entrar em uma sala existente? <Link to="/">Clique aqui</Link>
               </p>
               </div>
           </main>


       </div>
   )
}