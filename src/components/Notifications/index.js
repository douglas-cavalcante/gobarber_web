import React from 'react';

import { MdNotifications } from 'react-icons/md';

import { Container, Badge, NotificationList, Notification } from './styles';

export default function Notifications() {
  return (
    <Container>
      <Badge hasUnread>
        <MdNotifications color="#7159c1" size={30} />
      </Badge>

      <NotificationList>
        <Notification>
          <p />
          <time />
          <button type="button">Marcar como lida</button>
        </Notification>
      </NotificationList>
    </Container>
  );
}
