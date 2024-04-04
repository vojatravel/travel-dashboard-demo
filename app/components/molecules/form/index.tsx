// Assuming your SCSS file is named Form.module.scss and is located in the same folder as your component
"use client"

import styles from './Form.module.scss'; // Import your SCSS module
import { useState } from 'react';

interface DocumentData {
  id: string;
  description: string;
  title: string;
  collectionName: string;
  url: string;
}

export const Form = () => {
  const [newData, setNewData] = useState<DocumentData>({
    id: '',
    description: '',
    title: '',
    collectionName: '',
    url: '',
  });
  const [createCollection, setCreateCollection] = useState<boolean>(false);

  const onSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const bodyContent = {
      collectionName: newData.collectionName,
      createCollection,
      document: newData,
    };

    try {
      const response = await fetch('/api/addDocument', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bodyContent),
      });
      if (!response.ok) throw new Error('Network response was not ok');
      console.log('Document added successfully');
    } catch (error) {
      console.error('Failed to add document', error);
    }
  };

  return (
    <form onSubmit={onSubmit} className={`form ${styles.customForm}`}>
      <div className="mb-3">
        <label className={`form-check-label ${styles.customLabel}`}>
          <input
            type="checkbox"
            className="form-check-input"
            checked={createCollection}
            onChange={(e) => setCreateCollection(e.target.checked)}
          />
          Create Collection
        </label>
      </div>
      {createCollection && (
        <div className="mb-3">
          <input
            type="text"
            className={`form-control ${styles.customInput}`}
            placeholder="Collection Name"
            value={newData.collectionName}
            onChange={(e) => setNewData({ ...newData, collectionName: e.target.value })}
          />
        </div>
      )}
      <div className="mb-3">
        <input
          type="text"
          className={`form-control ${styles.customInput}`}
          placeholder="Title"
          value={newData.title}
          onChange={(e) => setNewData({ ...newData, title: e.target.value })}
        />
      </div>
      <div className="mb-3">
        <input
          type="text"
          className={`form-control ${styles.customInput}`}
          placeholder="Description"
          value={newData.description}
          onChange={(e) => setNewData({ ...newData, description: e.target.value })}
        />
      </div>
      <div className="mb-3">
        <input
          type="text"
          className={`form-control ${styles.customInput}`}
          placeholder="URL"
          value={newData.url}
          onChange={(e) => setNewData({ ...newData, url: e.target.value })}
        />
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  );
};
