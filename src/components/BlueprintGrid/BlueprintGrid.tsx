import styles from "./BlueprintGrid.module.css";

type BlueprintGridProps = {
  className?: string;
};

export function BlueprintGrid({ className }: BlueprintGridProps) {
  return (
    <div
      className={[styles.grid, className].filter(Boolean).join(" ")}
      aria-hidden="true"
    >
      <span className={`${styles.cross} ${styles.topLeft}`} />
      <span className={`${styles.cross} ${styles.topRight}`} />
      <span className={`${styles.cross} ${styles.bottomLeft}`} />
      <span className={`${styles.cross} ${styles.bottomRight}`} />
      <span className={styles.hline} />
      <span className={styles.vline} />
    </div>
  );
}
