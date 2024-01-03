import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectWaterToday } from '../../../redux/waterData/waterSelectors';
import { TodayListModal } from 'components';
import { DeletingEntryModal } from '../DeletingEntryModal/DeletingEntryModal';
import sprite from 'src/assets/images/sprite/sprite.svg';
import { formatTime } from '../../../helpers/utils/dateUtils';

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

const icons = {
  glass: `${sprite}#icon-glass`,
  change: `${sprite}#icon-change`,
  delete: `${sprite}#icon-delete`,
  add: `${sprite}#icon-increment`,
};

export const TodayWaterList = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedRecord, setSelectedRecord] = useState(null);
  const [isDeletingModalOpen, setDeletingModalOpen] = useState(false);
  const { dailyWaterList } = useSelector(selectWaterToday);

  const openModalToAdd = () => {
    setSelectedRecord(null);
    setModalOpen(true);
  };

  const openModalToDelete = record => {
    setSelectedRecord(record);
    setDeletingModalOpen(true);
  };

  const openModalToEdit = record => {
    setSelectedRecord(record);
    setModalOpen(true);
  };

  return (
    <TodayWrapper>
      <TodayTitle>Today</TodayTitle>
      <TodayList>
        {dailyWaterList.map(record => (
          <TodayItem key={record._id}>
            <TodayInfo>
              <IconGlass>
                <use href={icons.glass}></use>
              </IconGlass>
              <TodayVolume>{record.waterVolume} ml</TodayVolume>
              <TodayTime>{formatTime(record.date)}</TodayTime>
            </TodayInfo>
            <TodayTools>
              <ButtonChange onClick={() => openModalToEdit(record)}>
                <svg>
                  <use href={icons.change}></use>
                </svg>
              </ButtonChange>
              <ButtonDelete onClick={() => openModalToDelete(record)}>
                <svg>
                  <use href={icons.delete}></use>
                </svg>
              </ButtonDelete>
            </TodayTools>
          </TodayItem>
        ))}
        <li>
          <AddWaterBtn onClick={openModalToAdd}>
            <svg>
              <use href={icons.add}></use>
            </svg>
            Add Water
          </AddWaterBtn>
        </li>
      </TodayList>

      {isDeletingModalOpen && (
        <DeletingEntryModal
          onClose={() => setDeletingModalOpen(false)}
          recordId={selectedRecord?._id}
        />
      )}

      {isModalOpen && (
        <TodayListModal
          initialAmount={selectedRecord?.waterVolume}
          initialTime={selectedRecord?.date}
          isEditing={selectedRecord !== null}
          existingRecordId={selectedRecord?._id}
          onClose={() => setModalOpen(false)}
        />
      )}
    </TodayWrapper>
  );
};
