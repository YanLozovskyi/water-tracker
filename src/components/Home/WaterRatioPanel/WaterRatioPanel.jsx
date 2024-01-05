import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTodayWater } from '../../../redux/waterData/waterOperations';
import { selectWaterToday } from '../../../redux/waterData/waterSelectors';
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
  const dispatch = useDispatch();
  const todayWater = useSelector(selectWaterToday);

  const roundedWaterVolumePercentage = Math.round(
    todayWater.waterVolumePercentage,
  );

  useEffect(() => {
    dispatch(getTodayWater());
  }, [dispatch]);

  const openModal = () => {
    setModalOpen(true);
  };

  const getMarkPosition = () => {
    const limitedPercentage = Math.min(
      100,
      Math.max(0, roundedWaterVolumePercentage),
    );
    return {
      left: `calc(${limitedPercentage}% - 12px)`,
    };
  };

  const getBackgroundSize = () => {
    return {
      backgroundSize: `${roundedWaterVolumePercentage}%`,
    };
  };

  const handleUpdate = () => {
    dispatch(getTodayWater());
  };

  const showMarkLabel =
    roundedWaterVolumePercentage > 0 && roundedWaterVolumePercentage < 100;

  return (
    <WaterRatioPanelContainer>
      <WaterRangeContainer>
        <WaterRangeHeader>Today</WaterRangeHeader>
        <WaterRange
          type="range"
          maxValue={100}
          minValue={0}
          value={roundedWaterVolumePercentage}
          readOnly={true}
          style={getBackgroundSize()}
          aria-label="Water range"
        />
        <MarksContainer>
          <LeftMark>0%</LeftMark>
          {showMarkLabel && (
            <Mark
              id="waterMark"
              style={getMarkPosition()}
            >{`${roundedWaterVolumePercentage}%`}</Mark>
          )}
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
        <TodayListModal
          onClose={() => setModalOpen(false)}
          onUpdate={handleUpdate}
        />
      )}
    </WaterRatioPanelContainer>
  );
};
