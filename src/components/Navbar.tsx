import Avatar from "./Avatar"
import NavBarToggleButton from "./NavbarToggleButton"
import SocialLinks from "./SocialLinks"
import NavMenu from "./NavMenu"
import { useState } from "react"
import TopScroll from "./TopScroll"
import LanguageSelector from "./LanguageSelector"

const NavBar = ({ selectedSection }: { selectedSection: string }) => {
  const [isOpen, setOpen] = useState(false);

  const onToggleOpen = (isOpen: boolean): void => {
    setOpen(isOpen);
  }
  const onNavChanges = (link: string): void => {
    setOpen(false);
    const element = document.querySelector(link);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <header id="header" className={`header dark-background  flex-column lg:left-0 ${isOpen ? "left-0" : "-left-full"} `}>
      <NavBarToggleButton isOpen={isOpen} onToggleOpen={onToggleOpen} ></NavBarToggleButton>
      <Avatar alt="Profile avatar image for Mario Rivera" size={30} src="./img/my-profile-img.jpeg" title="Mario Rivera"></Avatar>
      <SocialLinks></SocialLinks>
      <LanguageSelector></LanguageSelector>
      <NavMenu selectedSection={selectedSection} onNavChanges={onNavChanges}></NavMenu>
      <TopScroll onClick={onNavChanges} selectedSection={selectedSection} ></TopScroll>
    </header>)

}

export default NavBar