import React from 'react';
import { useHistory } from 'react-router-dom';

import {
  Title,
  Parag,
  Benefits,
  Tracker,
  Image,
  Item,
  BenefitsTitle,
  Button,
  HiddenTitle,
} from './WaterConsumptionTracker.styled';

export const WaterConsumptionTracker = () => {
  const history = useHistory();

  const benefits = [
    {
      text: 'Habit drive',
      id: 'icon-calendar',
    },
    {
      text: 'View statistics',
      id: 'icon-statistic',
    },
    {
      text: 'Personal rate setting',
      id: 'icon-instrument',
    },
  ];

  function handleClick() {
    history.push('/register');
  }

  return (
    <Tracker>
      <HiddenTitle>Hidden</HiddenTitle>
      <Title>Water consumption tracker</Title>
      <Parag>Record daily water intake and track</Parag>
      <BenefitsTitle>Tracker Benefits</BenefitsTitle>
      <Benefits>
        {benefits.map(({ id, text }, index) => (
          <Item key={index}>
            <Image
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
            >
              <use xlinkHref={`/src/assets/images/sprite/sprite.svg#${id}`} />
            </Image>
            {text}
          </Item>
        ))}
      </Benefits>

      <Button type="button" onClick={handleClick}>
        Try tracker
      </Button>
    </Tracker>
  );
};
