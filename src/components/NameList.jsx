import styles from "@styles/NameList.module.css";

export default function NameList(props) {
  const names = props.names || [];

  return (
    <ul className={styles.daftar}>
      {names.map((name, index) => (
        <li key={index}>{name}</li>
      ))}
    </ul>
  );
}
