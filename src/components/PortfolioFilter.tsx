import type { CategoryItem } from "@/hooks/useProjects";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const PortfolioFilter = ({categories,onCategoryChange}:{categories:CategoryItem[], onCategoryChange:(category:number)=>void}) => {
    const {t} = useTranslation();
    const [selectedCategory, setSelectedCategory] = useState<CategoryItem>(()=>{
        const initialCategory = categories[0];
        onCategoryChange(initialCategory.id);
        return initialCategory;
    });
    const handleCategoryClick = (category: CategoryItem) => {
        setSelectedCategory(category);
        onCategoryChange(category.id);
    }
    return (
        <ul className="flex flex-row uppercase justify-between text-sm font-roboto  mb-5 w-sm self-center">
            {categories.map((category, index) => (
                <li key={index} className={` cursor-pointer ${selectedCategory === category ? "text-[var(--accent-color)]" : ""}`} onClick={() => handleCategoryClick(category)}>
                    {t(category.label as any)}
                </li>
            ))}
      </ul>
    );
}

export default PortfolioFilter;