import classes from "./CategorySelector.module.css";

const CategorySelector = ({
  categories,
  selectedCategory,
  onCategoryChange,
}) => {
  const selectCategoryHandler = (category) => {
    onCategoryChange(category);
  };

  return (
    <div className={classes.categories}>
      {categories.map((category) => (
        <button
          key={category.id}
          className={`${classes.category} ${
            category === selectedCategory ? classes.active : ""
          }`}
          onClick={() => selectCategoryHandler(category)}
        >
          {category.name}
        </button>
      ))}
    </div>
  );
};

export default CategorySelector;
