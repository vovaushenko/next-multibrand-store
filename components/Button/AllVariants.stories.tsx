import React from 'react';
import Container from '../Container/Container';
import { LoadingButton, Primary } from './Button.stories';
export default {
  title: 'test/AllVariants',
  decorators: [(story) => <Container>{story()}</Container>],
};

export const AllVariants = (): JSX.Element => {
  return (
    <>
      <Primary
        text="hello"
        disabled={false}
        isLoading={false}
        isCompleted={false}
      />
      <LoadingButton disabled={false} isLoading={true} isCompleted={false} />
    </>
  );
};
