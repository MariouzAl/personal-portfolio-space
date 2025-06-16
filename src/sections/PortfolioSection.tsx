import { forwardRef, useState } from "react";
import PortfolioContainer from "../components/PortfolioContainer";
import PortfolioFilter from "../components/PortfolioFilter";
import PortfolioModal from "../components/PortfolioModal";
import { CategoryValues, useProjects, type PortfolioItemType } from "../hooks/useProjects";
import { useTranslation } from "react-i18next";



const PortfolioSection = forwardRef<HTMLElement, { id: string }>((props, ref) => {
    const { t } = useTranslation();
    const [category, setCategory] = useState<number>(CategoryValues.All.id);
    const [isOpen, setIsOpen] = useState<boolean>(true);
    const [currentItem, setCurrentItem] = useState<PortfolioItemType | null>(null);
    const projects = useProjects(category)
    const CATEGORIES = Object.values(CategoryValues);

    const onCategoryChange = (categoryId: number) => {
        setCategory(categoryId);
    }

    const onSelectedPortFolioItem = (item: PortfolioItemType) => {
        setCurrentItem(item)
        setIsOpen(true)

    }

    const handleCloseModal = () => {
        setIsOpen(false);
        setCurrentItem(null);
    };


    return (
        <section id={props.id} ref={ref} className="light-background bg-[var(--background-color)] text-[var(--text-color)] py-14">

            <div className="width-full px-3 pb-14 section-title">
                <h2 className="emphasis-title">{t('portfolio.title')}</h2>
                <p className="font-roboto">{t('portfolio.description')}</p>
            </div>

            <div className="width-full p-3" >

                <div className="flex flex-col">
                    <PortfolioFilter onCategoryChange={onCategoryChange} categories={CATEGORIES}></PortfolioFilter>
                    <PortfolioContainer projects={projects}  onSelectedPortFolioItem={onSelectedPortFolioItem} />
                </div>

            </div>
            {currentItem && (
                <PortfolioModal
                    key={currentItem.id}
                    currentItem={currentItem}
                    isOpen={isOpen}
                    items={projects}
                    onClose={handleCloseModal}
                />
            )}

        </section>
    )
})

export default PortfolioSection;