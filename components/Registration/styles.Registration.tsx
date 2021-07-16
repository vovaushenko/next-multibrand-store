import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  text-align: center;
  h3 {
    margin-bottom: 0;
  }
`;

export const AvatarControl = styled.div`
  display: flex;
`;

export const AvatarPreview = styled.figure`
  width: 10%;
  .user__avatar {
    border-radius: 50%;
  }
`;

export const Text = styled.p``;
