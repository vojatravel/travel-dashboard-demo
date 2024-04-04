import { Form } from "@molecules/form";
import styles from "./createData.module.scss";

const CreateData = () => {
  return (
    <div className={styles.createData}>
      <h1 className={styles.title}>Add New Document</h1>
      <p className={styles.introText}>
        Please fill in the form below to add a new document to the collection.
      </p>
      <Form />
    </div>
  );
};

export default CreateData;
