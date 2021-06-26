import { useHistory } from 'react-router-dom';
import illustrationImg from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';
import googleImg from '../assets/images/google-icon.svg';

import { Button } from '../components/Button';
import '../styles/auth.scss';
import { auth, firebase } from '../services/firebase';

export function Home() {
  const history = useHistory();

  function handleCleateRoom() {
    const provider = new firebase.auth.GoogleAuthProvider();

    auth.signInWithPopup(provider).then((result) => {
      console.log(result);
      history.push('/rooms/new');
    });
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
          <button className='create-room' onClick={handleCleateRoom}>
            <img src={googleImg} alt='logo do google' />
            Crie sua sala com o Google
          </button>
          <div className='separator'>ou entre em uma sala</div>
          <form>
            <input type='text' placeholder='digite o código da sala' />
            <Button type='submit'>Entrar na sala</Button>
          </form>
        </div>
      </main>
    </div>
  );
}
