import sprite from 'src/assets/images/sprite/sprite.svg';
import { useDispatch, useSelector } from 'react-redux';
import { TodayListModal } from 'components';
import { DeletingEntryModal } from '../DeletingEntryModal/DeletingEntryModal';
import {
  deleteWaterThunk,
  addWatersThunk,
  editWaterThunk,
} from '../../../redux/waterData/waterOperations';
import { selectWaterToday } from '../../../redux/waterData/waterSelectors';
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
  const [records, setRecords] = useState([]);
  const [selectedRecord, setSelectedRecord] = useState(null);
  const [isDeletingModalOpen, setDeletingModalOpen] = useState(false);
  const dispatch = useDispatch();
  const todayWaterRecords = useSelector(selectWaterToday);

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

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleDelete = async recordId => {
    try {
      setDeletingModalOpen(true);
      await dispatch(deleteWaterThunk(recordId)).unwrap();
      setRecords(records.filter(record => record._id !== recordId));

      setDeletingModalOpen(false);
    } catch (error) {
      console.error('Failed to delete water record:', error);

      setDeletingModalOpen(false);
    }
  };

  const handleSave = async data => {
    try {
      if (selectedRecord !== null) {
        // Оновлюємо існуючий запис
        const updateData = {
          ...data,
          _id: selectedRecord._id,
        };
        await dispatch(editWaterThunk(updateData)).unwrap();
      } else {
        await dispatch(addWatersThunk(data)).unwrap();
      }
      closeModal();
    } catch (error) {
      console.error('Failed to save water data:', error);
    }
  };

  function formatTime(isoDate) {
    return new Date(isoDate).toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
    });
  }

  return (
    <TodayWrapper>
      <TodayTitle>Today</TodayTitle>
      <TodayList>
        {todayWaterRecords.dailyWaterList.map(record => (
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

              <ButtonDelete onClick={openModalToDelete}>
                <svg>
                  <use href={icons.delete}></use>
                </svg>
              </ButtonDelete>
              {isDeletingModalOpen && (
                <DeletingEntryModal
                  onClose={() => setDeletingModalOpen(false)}
                  onDelete={() => handleDelete(record._id)}
                  title="Delete Entry"
                />
              )}
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

      {isModalOpen && (
        <TodayListModal
          initialAmount={selectedRecord?.waterVolume}
          initialTime={selectedRecord?.date}
          isEditing={selectedRecord !== null}
          existingRecordId={selectedRecord?._id}
          onSave={handleSave}
          onClose={closeModal}
        />
      )}
    </TodayWrapper>
  );
};
