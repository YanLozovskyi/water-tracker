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
  const [records, setRecords] = useState([]);
  const [selectedRecord, setSelectedRecord] = useState(null);

  const openModalToAdd = () => {
    setSelectedRecord(null);
    setModalOpen(true);
  };

  const openModalToEdit = (record, index) => {
    setSelectedRecord({ ...record, index });
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleDelete = index => {
    // Видаляємо запис за індексом
    setRecords(records.filter((_, idx) => idx !== index));
  };

  const handleSave = data => {
    if (selectedRecord !== null) {
      // Оновлюємо існуючий запис
      setRecords(
        records.map((rec, idx) =>
          idx === selectedRecord.index ? { ...rec, ...data } : rec,
        ),
      );
    } else {
      // Додаємо новий запис
      setRecords([...records, data]);
    }
    closeModal();
  };

  return (
    <TodayWrapper>
      <TodayTitle>Today</TodayTitle>
      <TodayList>
        {records.map((record, index) => (
          <TodayItem key={index}>
            <TodayInfo>
              <IconGlass>
                <use href={icons.glass}></use>
              </IconGlass>
              <TodayVolume>{record.amount} ml</TodayVolume>
              <TodayTime>{record.time} AM</TodayTime>
            </TodayInfo>
            <TodayTools>
              <ButtonChange onClick={() => openModalToEdit(record, index)}>
                <svg>
                  <use href={icons.change}></use>
                </svg>
              </ButtonChange>
              <ButtonDelete onClick={() => handleDelete(index)}>
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
      {isModalOpen && (
        <TodayListModal
          initialAmount={selectedRecord?.volume}
          initialTime={selectedRecord?.time}
          isEditing={selectedRecord !== null}
          onSave={handleSave}
          onClose={closeModal}
        />
      )}
    </TodayWrapper>
  );
};
