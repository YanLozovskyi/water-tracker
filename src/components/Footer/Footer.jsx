import sprite from 'src/assets/images/sprite/sprite.svg';
import { FooterBox, FooterBtn, FooterText, IconHeart } from './Footer.styled';
import { useState } from 'react';
import { TeamModal } from '../Home/TeamModal/TeamModal';

export const Footer = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  return (
    <FooterBox>
      <FooterText>&#169; 2024 | Developed with</FooterText>
      <IconHeart>
        <use href={`${sprite}#icon-heart`}></use>
      </IconHeart>
      <FooterBtn onClick={openModal}>by GoIT Students</FooterBtn>
      {isModalOpen && <TeamModal onClose={() => setModalOpen(false)} />}
    </FooterBox>
  );
};
