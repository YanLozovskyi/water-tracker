import React, { useState } from 'react';
import { BaseModalWindow } from 'components';
import sprite from 'src/assets/images/sprite/sprite.svg';
import {
  BoxAddModal,
  AddButtonSave,
  ButtonMl,
  AddWater,
  AddParagraph,
  AddTime,
  FooterModal,
  Input,
  Icon,
  PreviousInfo,
  Label,
  InputWater,
  InputTime,
} from './TodayListModal.styled';
import {
  IconGlass,
  TodayVolume,
  TodayTime,
} from '../TodayWaterList/TodayWaterList.styled';

export const TodayListModal = ({
  initialAmount,
  initialTime,
  isEditing,
  onSave,
  onClose,
}) => {
  const [amount, setAmount] = useState(initialAmount || 0);
  const [time, setTime] = useState(
    initialTime ||
      new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
  );

  // змінюємо кількість води за допомогою кнопок
  const increaseAmount = () => setAmount(prevAmount => prevAmount + 50);
  const decreaseAmount = () =>
    setAmount(prevAmount => (prevAmount > 0 ? prevAmount - 50 : 0));

  const handleAmountChange = e => {
    let newValue = e.target.value;

    if (newValue.startsWith('0') && newValue.length > 1) {
      newValue = newValue.substring(1);
    }

    setAmount(newValue);
  };

  const handleTimeChange = e => setTime(e.target.value);

  const handleSubmit = () => {
    onSave({ amount, time });
  };

  const title = isEditing ? 'Edit the entered amount of water' : 'Add water';

  return (
    <BaseModalWindow onClose={onClose} title={title}>
      <BoxAddModal>
        {isEditing && (
          <PreviousInfo>
            <IconGlass>
              <use href={`${sprite}#glass`}></use>
            </IconGlass>
            <TodayVolume>
              {initialAmount ? `${initialAmount} ml` : 'No notes yet'}
            </TodayVolume>
            <TodayTime>{initialAmount ? initialTime : ''}</TodayTime>
          </PreviousInfo>
        )}

        <h3>{isEditing ? 'Correct entered data:' : 'Choose a value:'}</h3>
        <AddWater>
          <AddParagraph>Amount of water:</AddParagraph>
          <div>
            <ButtonMl onClick={decreaseAmount}>
              <Icon>
                <use href={`${sprite}#icon-decrement-outline`}></use>
              </Icon>
            </ButtonMl>
            <Label>
              <InputWater
                type="number"
                value={amount}
                onChange={handleAmountChange}
                onBlur={() =>
                  setAmount(prevAmount => prevAmount || initialAmount || 0)
                }
              />
              <span>ml</span>
            </Label>
            <ButtonMl onClick={increaseAmount}>
              <Icon>
                <use href={`${sprite}#icon-increment`}></use>
              </Icon>
            </ButtonMl>
          </div>
        </AddWater>

        <AddTime>
          <AddParagraph>Recording time:</AddParagraph>
          <InputTime
            type="time"
            value={time}
            onChange={handleTimeChange}
            step="300"
          />
        </AddTime>
        <div>
          <h3>Enter the value of the water used:</h3>
          <Input
            type="number"
            value={amount}
            onChange={handleAmountChange}
            onBlur={() =>
              setAmount(prevAmount => prevAmount || initialAmount || '')
            }
          />
        </div>
        <FooterModal>
          <span>{amount}ml</span>
          <AddButtonSave onClick={handleSubmit}>Save</AddButtonSave>
        </FooterModal>
      </BoxAddModal>
    </BaseModalWindow>
  );
};
