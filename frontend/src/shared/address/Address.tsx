import styles from "./address.module.scss";

export default function Address({ address }: { address: string }) {
  return (
    <p className={styles.address}>
      <span className={styles.address_title}>Հասցե`</span>
      <span className={styles.main_address}>{address}</span>
    </p>
  );
}
