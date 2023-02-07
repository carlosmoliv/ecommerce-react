import "./categories-list.styles.scss";
import CategoryItem from "../category-item/category-item.component.jsx";

const CategoriesList = ({ categories }) => {
  return (
    <div className="categories-container">
      {categories.map((category) => (
        <CategoryItem category={category} key={category.id} />
      ))}
    </div>
  );
};

export default CategoriesList;
