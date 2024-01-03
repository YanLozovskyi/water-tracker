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
  // const [records, setRecords] = useState([]);
  const [selectedRecord, setSelectedRecord] = useState(null);
  const [isDeletingModalOpen, setDeletingModalOpen] = useState(false);
  const dispatch = useDispatch();
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

  const closeModal = () => {
    setModalOpen(false);
  };

  // const handleDelete = async recordId => {
  //   // Видаляємо запис за індексом
  //     await dispatch(deleteWaterThunk(recordId)).unwrap();
  //     setRecords(records.filter(record => record._id !== recordId));
  // };

  const handleSave = data => {
    if (selectedRecord !== null) {
      // Оновлюємо існуючий запис
      const updateData = {
        ...data,
        _id: selectedRecord._id,
      };
      dispatch(editWaterThunk(updateData)).unwrap();
    } else {
      dispatch(addWatersThunk(data)).unwrap();
    }
    closeModal();
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
              <ButtonDelete
                onClick={() => openModalToDelete(record)}
              >
                <svg>
                  <use href={icons.delete}></use>
                </svg>
              </ButtonDelete>
            </TodayTools>
            {isDeletingModalOpen && (
              <DeletingEntryModal
                onClose={() => setDeletingModalOpen(false)}
                onDelete={() => dispatch(deleteWaterThunk(record._id))}
                title="Delete Entry"
              />
            )}
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
