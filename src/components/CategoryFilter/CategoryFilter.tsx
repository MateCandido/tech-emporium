import styles from './CategoryFilter.module.css';

interface CategoryFilterProps {
  categories: string[];
  selectedCategory: string | null;
  onSelectCategory: (category: string | null) => void;
}

export const CategoryFilter = ({ categories, selectedCategory, onSelectCategory }: CategoryFilterProps) => {
  return (
    <div className={styles.filterContainer}>
      <button
        className={!selectedCategory ? styles.active : ''}
        onClick={() => onSelectCategory(null)}
      >
        Todos
      </button>
      {categories.map((category) => (
        <button
          key={category}
          className={selectedCategory === category ? styles.active : ''}
          onClick={() => onSelectCategory(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};