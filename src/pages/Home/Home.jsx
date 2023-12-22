import React, { useState } from 'react';
import Modal from './Modal';

const Home = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div>
      <h1>Home</h1>
      <button onClick={openModal}>Open Modal</button>
      {isModalOpen && <Modal onClose={closeModal} />}
    </div>
  );
};

export default Home;

// const Home = () => {
//   return <div>Home</div>;
// };

// export default Home;
