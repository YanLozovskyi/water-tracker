import React from 'react';
import { useNavigate } from 'react-router-dom';
import sprite from 'src/assets/images/sprite/sprite.svg';

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
  const navigate = useNavigate();

  const benefits = [
    {
      text: 'Habit drive',
      id: '#icon-calendar',
    },
    {
      text: 'View statistics',
      id: '#icon-statistic',
    },
    {
      text: 'Personal rate setting',
      id: '#icon-instrument',
    },
  ];

  function handleClick() {
    navigate('/signup');
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
            <Image width="32px" height="32px">
              <use href={`${sprite}${id}`}></use>
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
