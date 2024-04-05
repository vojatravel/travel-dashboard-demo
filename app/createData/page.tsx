import styles from "./createData.module.scss";
import CreateDatacomp from "../components/molecules/createDataComp";

const CreateData = () => {
  return (
    <div className={styles.createData}>
      <h1 className={styles.title}>Add New Document</h1>
      <p className={styles.introText}>
        Please fill in the form below to add a new document to the collection.
      </p>
      <CreateDatacomp />
    </div>
  );
};

export default CreateData;
