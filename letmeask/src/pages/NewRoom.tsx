import { Link } from 'react-router-dom';
import illustrationImg from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';
import googleImg from '../assets/images/google-icon.svg';

import { Button } from '../components/Button';
import '../styles/auth.scss';

export function NewRoom() {
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
          <h2>Criar uma nova sala</h2>
          <form>
            <input type='text' placeholder='nome da sala' />
            <Button type='submit'>Criar a sala</Button>
          </form>
          <p>
            Quer entrar em uma sala existente? <Link to='/'>clique aqui</Link>
          </p>
        </div>
      </main>
    </div>
  );
}
