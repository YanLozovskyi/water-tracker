import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectWaterToday } from '../../../redux/waterData/waterSelectors';
import { TodayListModal, DeletingEntryModal } from 'components';
import sprite from 'src/assets/images/sprite/sprite.svg';
import { format, parseISO } from 'date-fns';

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
import {
  getMonthWater,
  getTodayWater,
} from '../../../redux/waterData/waterOperations';

const icons = {
  glass: `${sprite}#icon-glass`,
  change: `${sprite}#icon-change`,
  delete: `${sprite}#icon-delete`,
  add: `${sprite}#icon-increment`,
};

export const TodayWaterList = () => {
  const dispatch = useDispatch();
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedRecord, setSelectedRecord] = useState(null);
  const [isDeletingModalOpen, setDeletingModalOpen] = useState(false);
  const { dailyWaterList } = useSelector(selectWaterToday);

  useEffect(() => {
    dispatch(getTodayWater());
  }, [dispatch]);

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

  const handleUpdate = () => {
    dispatch(getTodayWater());
  };

  return (
    <TodayWrapper>
      <TodayTitle>Today</TodayTitle>
      <TodayList>
        {dailyWaterList?.map(record => (
          <TodayItem key={record._id}>
            <TodayInfo>
              <IconGlass>
                <use href={icons.glass}></use>
              </IconGlass>
              <TodayVolume>{record.waterVolume} ml</TodayVolume>
              <TodayTime>{format(parseISO(record.date), 'hh:mm a')}</TodayTime>
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
      <DeletingEntryModal
        onClose={() => setDeletingModalOpen(false)}
        onShow={isDeletingModalOpen}
        recordId={selectedRecord?._id}
      />
      <TodayListModal
        initialAmount={selectedRecord?.waterVolume}
        initialTime={selectedRecord?.date}
        isEditing={selectedRecord !== null}
        existingRecordId={selectedRecord?._id}
        onClose={() => setModalOpen(false)}
        onShow={isModalOpen}
        onUpdate={handleUpdate}
      />
    </TodayWrapper>
  );
};
