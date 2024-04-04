"use client"

import React, { useState } from 'react';
import { Form } from "@molecules/form";
import { Modal } from "@atoms/modal";
import styles from "./createData.module.scss";

const CreateData = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalSuccess, setModalSuccess] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  const handleFormSuccess = (message: React.SetStateAction<string>) => {
    setModalMessage(message);
    setModalSuccess(true);
    setIsModalOpen(true);
  };

  const handleFormFailure = (message: React.SetStateAction<string>) => {
    setModalMessage(message);
    setModalSuccess(false);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={styles.createData}>
      <Form onSuccess={handleFormSuccess} onFailure={handleFormFailure} />
      <Modal
        isOpen={isModalOpen}
        isSuccess={modalSuccess}
        message={modalMessage}
        onClose={handleCloseModal}
      />
    </div>
  );
};

export default CreateData;
