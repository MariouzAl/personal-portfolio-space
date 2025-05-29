import { forwardRef, useState } from "react";
import PortfolioContainer from "../components/PortfolioContainer";
import PortfolioFilter from "../components/PortfolioFilter";
import PortfolioModal from "../components/PortfolioModal";
import type { PortfolioItemType } from "../components/PortfolioItem";
const CATEGORIES: string[] = ["All", "Apps", "Projects", "Branding"];


const PortfolioSection = forwardRef<HTMLElement, { id: string }>((props, ref) => {
    const [category, setCategory] = useState<string>("All");
    const [isOpen, setIsOpen] = useState<boolean>(true);
    const [currentItem, setCurrentItem] = useState<PortfolioItemType | null>(null);


    const onCategoryChange = (category: string) => {
        setCategory(category);
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

            <div className="width-full px-3 pb-14 section-title" data-aos="fade-up">
                <h2 className="emphasis-title">Portfolio</h2>
                <p className="font-roboto">Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
            </div>

            <div className="width-full p-3" >

                <div className="flex flex-col">
                    <PortfolioFilter onCategoryChange={onCategoryChange} categories={CATEGORIES}></PortfolioFilter>
                    <PortfolioContainer category={category} onSelectedPortFolioItem={onSelectedPortFolioItem} />
                </div>

            </div>
            {currentItem && (
                <PortfolioModal
                    key={currentItem.id}
                    title={currentItem.title}
                    isOpen={isOpen}
                    onClose={handleCloseModal}
                />
            )}

        </section>
    )
})

export default PortfolioSection;