import { BaseModalWindow, ContentLoader } from 'components';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import sprite from 'src/assets/images/sprite/sprite.svg';
import { format, formatISO, parseISO } from 'date-fns';
import { selectIsLoading } from '../../../redux/root/rootSelectors';
import {
  addWatersThunk,
  editWaterThunk,
} from '../../../redux/waterData/waterOperations';
import {
  IconGlass,
  TodayTime,
  TodayVolume,
} from '../TodayWaterList/TodayWaterList.styled';
import {
  AddButtonSave,
  AddParagraph,
  AddTime,
  AddWater,
  BoxAddModal,
  ButtonMl,
  FooterModal,
  Icon,
  Input,
  InputTime,
  InputWater,
  Label,
  PreviousInfo,
} from './TodayListModal.styled';

export const TodayListModal = ({
  initialAmount,
  initialTime,
  isEditing,
  onClose,
  onShow,
  existingRecordId,
}) => {
  const [amount, setAmount] = useState(initialAmount || 0);
  const [time, setTime] = useState(
    isEditing && initialTime
      ? format(new Date(initialTime), 'HH:mm')
      : format(new Date(), 'HH:mm'),
  );
  const dispatch = useDispatch();
  const { isLoading } = useSelector(selectIsLoading);

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

  const handleSubmit = () => {
    const currentDate = formatISO(new Date(), { representation: 'date' });
    const dateTime = `${currentDate}T${time}`;
    const isoDate = formatISO(parseISO(dateTime));
    // console.log(currentDate);
    // console.log(dateTime);
    // console.log(isoDate);
    const waterData = {
      waterVolume: amount,
      date: isoDate,
    };
    // console.log(waterData);
    if (isEditing) {
      dispatch(editWaterThunk({ _id: existingRecordId, ...waterData })).then(
        data => {
          if (!data.error) onClose();
        },
      );
    } else {
      dispatch(addWatersThunk(waterData)).then(data => {
        if (!data.error) onClose();
      });
    }
  };

  const title = isEditing ? 'Edit the entered amount of water' : 'Add water';

  const displayTime =
    isEditing && initialTime ? format(parseISO(initialTime), 'hh:mm aa') : '';

  return (
    <BaseModalWindow onClose={onClose} onShow={onShow} title={title}>
      <BoxAddModal>
        {isEditing && (
          <PreviousInfo>
            <IconGlass>
              <use href={`${sprite}#icon-glass`}></use>
            </IconGlass>
            <TodayVolume>
              {initialAmount ? `${initialAmount} ml` : 'No notes yet'}
            </TodayVolume>
            <TodayTime>{initialTime ? `${displayTime}` : ''}</TodayTime>
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
            onChange={e => setTime(e.target.value)}
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
          <AddButtonSave onClick={handleSubmit}>
            Save {isLoading && <ContentLoader />}
          </AddButtonSave>
        </FooterModal>
      </BoxAddModal>
    </BaseModalWindow>
  );
};
