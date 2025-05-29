import { useState } from "react";

const PortfolioFilter = ({categories,onCategoryChange}:{categories:string[], onCategoryChange:(category:string)=>void}) => {
    const [selectedCategory, setSelectedCategory] = useState<string>(()=>{
        const initialCategory = categories[0];
        onCategoryChange(initialCategory);
        return initialCategory;
    });
    const handleCategoryClick = (category: string) => {
        setSelectedCategory(category);
        onCategoryChange(category);
    } 
    return (
        <ul className="flex flex-row uppercase justify-between text-sm font-roboto px-10 mb-5 w-sm self-center">
            {categories.map((category, index) => (
                <li key={index} className={` cursor-pointer ${selectedCategory === category ? "text-[var(--accent-color)]" : ""}`} onClick={() => handleCategoryClick(category)}>
                    {category}
                </li>
            ))}
      </ul>
    );
}

export default PortfolioFilter;