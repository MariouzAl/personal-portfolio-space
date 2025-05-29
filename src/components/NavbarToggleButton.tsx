

const NavBarToggleButton = ({onToggleOpen,isOpen }:{onToggleOpen:(isOpen:boolean)=>void,isOpen:boolean}) => {
    const onClickHandler = () => {
        onToggleOpen(!isOpen);
    }

    return <i  className={`nav-bar-toggle bi ${isOpen ? 'bi-x': 'bi-list'} md:hidden`}
    onClick={onClickHandler}
    ></i>;
}


export default NavBarToggleButton;