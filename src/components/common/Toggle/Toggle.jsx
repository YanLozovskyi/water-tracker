import React, { useState } from 'react';
import { ToggleContainer, ToggleHandle } from './Toggle.styled';
export const Toggle = () => {
  const [isToggled, setToggle] = useState(false);

  return (
    <ToggleContainer active={isToggled} onClick={() => setToggle(!isToggled)}>
      <ToggleHandle active={isToggled} />
    </ToggleContainer>
  );
};
