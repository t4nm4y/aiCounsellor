
import Blob from '../components/Blob';
import Navbar from '../components/Navbar';
import './HomePage.css'
import Footer from '../components/Footer';


const HomePage = ({ theme, toggleTheme }) => {

  return (
    <div className='mainWrap' id={theme}>
      <Navbar toggleTheme={toggleTheme} />
      <div className="hide-on-mobile">
        <Blob />
      </div>
      <div className="homeWrap"/>
      <Footer />
    </div>
  )
}

export default HomePage