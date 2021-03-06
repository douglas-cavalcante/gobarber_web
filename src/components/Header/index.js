import React from 'react';
import { Link } from 'react-router-dom';

import logo from '~/assets/logo2.svg';

import { Container, Content, Profile } from './styles';

import Notifications from '~/components/Notifications';

export default function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="GoBarber" />
          <Link to="/dashboard">DASHBOARD</Link>
        </nav>

        <aside>
          <Notifications />
          <Profile>
            <div>
              <strong>Diego Fernandes</strong>
              <Link to="/profile">Meu perfil</Link>
            </div>
            <img
              src="https://api.adorable.io/avatars/285/2323weabott@adorable.io.png"
              alt="img"
            />
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
