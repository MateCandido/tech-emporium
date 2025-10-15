import styles from './ProductSkeletonCard.module.css';

export const ProductSkeletonCard = () => {
  return (
    <div className={styles.skeletonCard}>
      <div className={styles.skeletonImage}></div>
      <div className={styles.skeletonText}></div>
      <div className={styles.skeletonTextShort}></div>
    </div>
  );
};