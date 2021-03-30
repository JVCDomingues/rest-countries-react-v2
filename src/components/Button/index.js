import React from 'react';

import { BackButton, LinkButton } from './styles';

import { BsArrowLeft } from 'react-icons/bs';

function Button() {
  return (
    <div>
      <LinkButton to="/">
        <BackButton>
          <BsArrowLeft />
            Back
          </BackButton>
      </LinkButton>
    </div>
  )
}

export default Button;
