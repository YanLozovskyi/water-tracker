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
} from './TodayListModal.styled';

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

  const handleAmountChange = e => setAmount(Number(e.target.value) || 0);
  const handleTimeChange = e => setTime(e.target.value);

  const handleSubmit = () => {
    onSave({ amount, time });
  };

  const title = isEditing ? 'Edit the entered amount of water' : 'Add water';

  return (
    <BaseModalWindow onClose={onClose} title={title}>
      <BoxAddModal>
        {isEditing && (
          <div>
            <h3>Previous entry:</h3>
            <p>
              {initialAmount
                ? `${initialAmount} ml at ${initialTime}`
                : 'No notes yet'}
            </p>
          </div>
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
            <input
              type="number"
              value={amount}
              onChange={handleAmountChange}
              onBlur={() =>
                setAmount(prevAmount => prevAmount || initialAmount || 0)
              }
            />
            <ButtonMl onClick={increaseAmount}>
              <Icon>
                <use href={`${sprite}#icon-increment`}></use>
              </Icon>
            </ButtonMl>
          </div>
        </AddWater>

        <AddTime>
          <AddParagraph>Recording time:</AddParagraph>
          <Input
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
              setAmount(prevAmount => prevAmount || initialAmount || 0)
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
