import { useState } from 'react';
import './App.css'
import MainContent from './components/MainContent'
import NavBar from './components/Navbar'

function App() {
  const [selectedSection, setSelectedSection] = useState<string>("");
const onSectionChange = (section:string):void => {
  setSelectedSection(section);
}
  return (<>
      <NavBar selectedSection={selectedSection} ></NavBar>
      <MainContent onSectionChange={onSectionChange}></MainContent>
      <footer></footer>
    </>)
  
}

export default App
