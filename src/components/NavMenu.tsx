import { useEffect, useState } from "react";
import NavMenuItem from "./NavMenuItem";

export type MenuItem = {
    id:string
    icon:string
    label:string
    link:string
}

const MENU_ITEMS:MenuItem[] = [{
    id: 'hero',
    icon: 'bi-house',
    label: 'Home',
    link: '#hero'
}, {
    id: 'about',
    icon: 'bi-person',
    label: 'About',
    link: '#about'
}, {
    id: 'resume',
    icon: 'bi-file-earmark-text',
    label: 'Resume',
    link: '#resume'
}, {
    id: 'portfolio',
    icon: 'bi-images',
    label: 'Portfolio',
    link: '#portfolio',
}, {
    id: 'services',
    icon: 'bi-hdd-stack',
    label: 'Services',
    link: '#services',
}, {
    id: 'contact',
    icon: 'bi-envelope',
    label: 'Contact',
    link: '#contact',
}]



const NavMeu = ({onNavChanges,selectedSection}:{selectedSection:string,onNavChanges:(link:string)=>void}) => {
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