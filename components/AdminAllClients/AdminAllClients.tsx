import React, { useEffect, useState } from 'react';
import {
  MdMail,
  MdPanTool,
  MdPerson,
  MdSentimentSatisfied,
} from 'react-icons/md';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { User } from '../../types/authTypes';
import Avatar from '../Avatar/Avatar';
import FormTextField from '../FormTextField/FormTextField';
import * as Styled from './styles.AdminAllClients';

/**
 *Renders all clients with filtering and details features
 *@function AdminAllClients
 *@returns {JSX.Element} - Rendered AdminAllClients component
 */
const AdminAllClients = (): JSX.Element => {
  // Parameters for filters
  const [customerName, setCustomerName] = useState<string>('');
  const [customerEmail, setCustomerEmail] = useState<string>('');

  const { getAllClientsDetails } = useActions();
  const { clients } = useTypedSelector((state) => state.admin);

  useEffect(() => {
    getAllClientsDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const filteredClients = (nameTerm: string, emailTerm: string): User[] => {
    let initUsers = [] as User[];
    if (clients !== undefined) {
      initUsers = [...clients];
    }

    if (nameTerm !== undefined || emailTerm !== undefined) {
      initUsers = initUsers.filter((user) =>
        user.email.toLowerCase().includes(emailTerm.toLowerCase())
      );

      initUsers = initUsers.filter((user) =>
        user.name.toLowerCase().includes(nameTerm.toLowerCase())
      );

      return initUsers;
    }

    return initUsers;
  };

  return (
    <Styled.Container>
      <Styled.Filter>
        <FormTextField
          name="customer__name"
          placeholder="Filter By Customer Name"
          value={customerName}
          setValue={setCustomerName}
          type="text"
          required
        />
        <FormTextField
          name="customer__email"
          placeholder="Filter By Customer Email"
          value={customerEmail}
          setValue={setCustomerEmail}
          type="text"
          required
        />
      </Styled.Filter>
      {filteredClients(customerName, customerEmail).map((client) => (
        <Styled.UserCard key={client._id}>
          <Avatar
            firstName={client.name}
            lastName={client.name}
            src={client.avatar?.url || '/images/avatar.png'}
            width={'60px'}
            isActive={false}
            hasBadge={false}
          />
          <Styled.ClientInfo>
            <MdPerson className="icon" />
            {client.name}
          </Styled.ClientInfo>

          <Styled.MailClient href={`mailto:${client.email}`}>
            <MdMail className="icon" /> {client.email}
          </Styled.MailClient>

          <Styled.Role>
            {client.role === 'admin' ? (
              <MdPanTool className="icon" />
            ) : (
              <MdSentimentSatisfied className="icon" />
            )}

            {client.role}
          </Styled.Role>
        </Styled.UserCard>
      ))}
    </Styled.Container>
  );
};

export default AdminAllClients;
