// Assuming your SCSS file is named Form.module.scss and is located in the same folder as your component
"use client";

import styles from "./Form.module.scss"; // Import your SCSS module
import { useState } from "react";

interface DocumentData {
  id: string;
  description: string;
  title: string;
  collectionName: string;
  url: string;
}

export const Form = () => {
  const [newData, setNewData] = useState<DocumentData>({
    id: "",
    description: "",
    title: "",
    collectionName: "locations",
    url: "",
  });
  const [createCollection, setCreateCollection] = useState<boolean>(false);

  const onSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    // Dynamically set the base URL
    const baseUrl =
      window.location.hostname === "localhost" ? "/api" : "/.netlify/functions";
    const apiEndpoint = `${baseUrl}/addDocument`;

    const bodyContent = {
      collectionName: newData.collectionName,
      createCollection,
      document: newData,
    };

    try {
      const response = await fetch(apiEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(bodyContent),
      });
      if (!response.ok) throw new Error("Network response was not ok");
      console.log("Document added successfully");
    } catch (error) {
      console.error("Failed to add document", error);
    }
  };

  return (
    <form onSubmit={onSubmit} className={`form ${styles.customForm}`}>
      <div className="mb-3">
        <input
          type="text"
          className={`form-control ${styles.customInput}`}
          placeholder="Collection Name"
          value={newData.collectionName || ""}
          onChange={(e) =>
            setNewData({ ...newData, collectionName: e.target.value })
          }
        />
      </div>

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
          onChange={(e) =>
            setNewData({ ...newData, description: e.target.value })
          }
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
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};
