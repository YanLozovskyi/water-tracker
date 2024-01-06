import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectWaterVolumePercentage } from '../../../redux/waterData/waterSelectors';
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
  const roundedWaterVolumePercentage = useSelector(selectWaterVolumePercentage)

  const getMarkPosition = () => {
    const limitedPercentage = Math.min(
      100,
      Math.max(0, roundedWaterVolumePercentage),
    );
    return {
      left: `calc(${limitedPercentage}% + 4px)`,
    };
  };

  const getBackgroundSize = () => {
    return {
      backgroundSize: `${roundedWaterVolumePercentage}%`,
    };
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
      <AddWaterButton onClick={() => setModalOpen(true)}>
        <AddIcon>
          <use href={`${sprite}#icon-increment-outline`}></use>
        </AddIcon>
        Add Water
      </AddWaterButton>
      {isModalOpen && (
        <TodayListModal
          onClose={() => setModalOpen(false)}
        />
      )}
    </WaterRatioPanelContainer>
  );
};
