import { useEffect, useState } from "react";
import NavMenuItem from "./NavMenuItem";
import { useTranslation } from 'react-i18next';

export type MenuItem = {
    id:string
    icon:string
    label:string
    link:string
}




const NavMeu = ({onNavChanges,selectedSection}:{selectedSection:string,onNavChanges:(link:string)=>void}) => {
const {t} =useTranslation();
const MENU_ITEMS:MenuItem[] = [{
    id: 'hero',
    icon: 'bi-house',
    label: t('nav_menu.home'),
    link: '#hero'
}, {
    id: 'about',
    icon: 'bi-person',
    label: t('nav_menu.about'),
    link: '#about'
}, {
    id: 'resume',
    icon: 'bi-file-earmark-text',
    label: t('nav_menu.resume'),
    link: '#resume'
}, {
    id: 'portfolio',
    icon: 'bi-images',
    label: t('nav_menu.portfolio'),
    link: '#portfolio',
}, {
    id: 'services',
    icon: 'bi-hdd-stack',
    label: t('nav_menu.services'),
    link: '#services',
}, {
    id: 'passions',
    icon: 'bi-battery-full',
    label: t('nav_menu.passions'),
    link: '#passions',
},
 {
    id: 'contact',
    icon: 'bi-envelope',
    label: t('nav_menu.contact'),
    link: '#contact',
}]
    const [activeItem, setActiveItem] = useState<string>(selectedSection); // Track the active menu item
    const  onClickHandler= (item:MenuItem): void=> {
        onNavChanges(item.link);
        return setActiveItem(item.id);
    }
    useEffect(() => {
        setActiveItem(selectedSection) // Update the active item when selectedSection changes
    }, [selectedSection]);
    

    return (
        <nav id="navmenu" className="navmenu">
            <ul>
                {MENU_ITEMS.map(item => {
                    return <NavMenuItem 
                    id={item.id} 
                    icon={item.icon} 
                    name={item.label} 
                    path={item.link} 
                    key={item.id}
                    isActive={activeItem ===item.id}
                    onClick={() => onClickHandler(item)}
                    ></NavMenuItem>

                })
                }
            </ul>
        </nav>
    )
}


export default NavMeu;