import sprite from 'src/assets/images/sprite/sprite.svg';
import { TodayListModal } from 'components';
import {
  AddWaterBtn,
  ButtonChange,
  ButtonDelete,
  IconGlass,
  TodayInfo,
  TodayItem,
  TodayList,
  TodayTime,
  TodayTitle,
  TodayTools,
  TodayVolume,
  TodayWrapper,
} from './TodayWaterList.styled';
import { useState } from 'react';

const icons = {
  glass: `${sprite}#icon-glass`,
  change: `${sprite}#icon-change`,
  delete: `${sprite}#icon-delete`,
  add: `${sprite}#icon-increment`,
};

export const TodayWaterList = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <TodayWrapper>
      <TodayTitle>Today</TodayTitle>
      <TodayList>
        <TodayItem>
          <TodayInfo>
            <IconGlass>
              <use href={icons.glass}></use>
            </IconGlass>
            <TodayVolume>250 ml</TodayVolume>
            <TodayTime>7:00 AM</TodayTime>
          </TodayInfo>
          <TodayTools>
            <ButtonChange>
              <svg>
                <use href={icons.change}></use>
              </svg>
            </ButtonChange>
            <ButtonDelete>
              <svg>
                <use href={icons.delete}></use>
              </svg>
            </ButtonDelete>
          </TodayTools>
        </TodayItem>

        <TodayItem>
          <TodayInfo>
            <IconGlass>
              <use href={icons.glass}></use>
            </IconGlass>
            <TodayVolume>220 ml</TodayVolume>
            <TodayTime>11:00 AM</TodayTime>
          </TodayInfo>
          <TodayTools>
            <ButtonChange>
              <svg>
                <use href={icons.change}></use>
              </svg>
            </ButtonChange>
            <ButtonDelete>
              <svg>
                <use href={icons.delete}></use>
              </svg>
            </ButtonDelete>
          </TodayTools>
        </TodayItem>

        <TodayItem>
          <TodayInfo>
            <IconGlass>
              <use href={icons.glass}></use>
            </IconGlass>
            <TodayVolume>200 ml</TodayVolume>
            <TodayTime>14:00 PM</TodayTime>
          </TodayInfo>
          <TodayTools>
            <ButtonChange>
              <svg>
                <use href={icons.change}></use>
              </svg>
            </ButtonChange>
            <ButtonDelete>
              <svg>
                <use href={icons.delete}></use>
              </svg>
            </ButtonDelete>
          </TodayTools>
        </TodayItem>

        <TodayItem>
          <TodayInfo>
            <IconGlass>
              <use href={icons.glass}></use>
            </IconGlass>
            <TodayVolume>200 ml</TodayVolume>
            <TodayTime>14:00 PM</TodayTime>
          </TodayInfo>
          <TodayTools>
            <ButtonChange>
              <svg>
                <use href={icons.change}></use>
              </svg>
            </ButtonChange>
            <ButtonDelete>
              <svg>
                <use href={icons.delete}></use>
              </svg>
            </ButtonDelete>
          </TodayTools>
        </TodayItem>

        <li>
          <AddWaterBtn onClick={openModal}>
            <svg>
              <use href={icons.add}></use>
            </svg>
            Add Water
          </AddWaterBtn>
        </li>
      </TodayList>
      {isModalOpen && <TodayListModal onClose={closeModal} />}
    </TodayWrapper>
  );
};

