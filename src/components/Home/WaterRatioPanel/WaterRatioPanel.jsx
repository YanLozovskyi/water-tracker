import { useEffect, useState } from 'react';
import sprite from 'src/assets/images/sprite/sprite.svg';

import { TodayListModal } from 'components';
import {
  AddIcon,
  AddWaterButton,
  LeftMark,
  Mark,
  MarksContainer,
  RightMark,
  WaterRange,
  WaterRangeContainer,
  WaterRangeHeader,
  WaterRatioPanelContainer,
} from './WaterRatioPanel.styled';

export const WaterRatioPanel = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [totalTodayDailyWater, setTotalTodayDailyWater] = useState(0);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  // const totalTodayDailyWater = 60;

  useEffect(() => {
    const waterMark = document.querySelector('#waterMark');
    if (waterMark) {
      let newVal = Number(((totalTodayDailyWater - 0) * 100) / (100 - 0));

      newVal = newVal >= 100 ? 100 : newVal;

      waterMark.style.left = `calc(${newVal}% + (${8 - newVal * 0.15}px))`;
    }
  }, [totalTodayDailyWater]);

  const getBackgroundSize = () => {
    return {
      backgroundSize: `${totalTodayDailyWater}%`,
    };
  };

  const handleSave = data => {
    // Here you would handle the data, such as updating state or sending it to a backend.
    // For example, if 'data' contains the amount of water added, you might want to update the state:
    setTotalTodayDailyWater(prevWater => prevWater + data.amount);
    closeModal(); // Close the modal after saving the data
  };

  return (
    <WaterRatioPanelContainer>
      <WaterRangeContainer>
        <WaterRangeHeader>Today</WaterRangeHeader>
        <WaterRange
          type="range"
          maxValue={100}
          minValue={0}
          value={totalTodayDailyWater}
          readOnly={true}
          style={getBackgroundSize()}
          aria-label="Water range"
        />
        <MarksContainer>
          <LeftMark>0%</LeftMark>
          <Mark id="waterMark">{`${
            totalTodayDailyWater > 100 ? 100 : totalTodayDailyWater
          }%`}</Mark>
          <RightMark>100%</RightMark>
        </MarksContainer>
      </WaterRangeContainer>
      <AddWaterButton onClick={openModal}>
        <AddIcon>
          <use href={`${sprite}#icon-increment-outline`}></use>
        </AddIcon>{' '}
        Add Water
      </AddWaterButton>
      {isModalOpen && (
        <TodayListModal onClose={closeModal} onSave={handleSave} />
      )}
    </WaterRatioPanelContainer>
  );
};
