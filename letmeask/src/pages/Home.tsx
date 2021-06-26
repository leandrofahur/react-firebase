import { useHistory } from 'react-router-dom';
import illustrationImg from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';
import googleImg from '../assets/images/google-icon.svg';

import { Button } from '../components/Button';
import '../styles/auth.scss';

export function Home() {
  const history = useHistory();

  function navigateToNewRoom() {
    history.push('/rooms/new');
  }

  return (
    <div id='page-auth'>
      <aside>
        <img src={illustrationImg} alt='illustration for Q&A' />
        <strong>Crie salas de Q&ampA; ao-vivo</strong>
        <p>Tire as dúvidas da sua audiência em tmepo-real</p>
      </aside>
      <main>
        <div className='main-content'>
          <img src={logoImg} alt='Letmeask' />
          <Button className='create-room' onClick={navigateToNewRoom}>
            <img src={googleImg} alt='logo do google' />
            Crie sua sala com o Google
          </Button>
          <div className='separator'>ou entre em uma sala</div>
          <form>
            <input type='text' placeholder='digite o código da sala' />
            <Button type='submit' onClick={navigateToNewRoom}>
              Entrar na sala
            </Button>
          </form>
        </div>
      </main>
    </div>
  );
}
