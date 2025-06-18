import styles from '@styles/Title.module.css'

export default function Title({children, ...props}) {
  return (
    <h2 className={styles.title} {...props}>
      {children}
    </h2>
  );
}
