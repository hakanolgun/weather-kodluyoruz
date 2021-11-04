import Days from "../days/Days";
import Select from "../select/Select";
import styles from "./container.module.css";
export default function Container() {
  return (
    <div className={styles.container}>
      <Select />
      <Days />
    </div>
  );
}
