import {Link} from 'react-router-dom'
import './Header.css'
const Header = () => {
    return(
        <div className='header1'>
            <header>
                <nav>
                    <a className='collegeName' >Vivekanand College</a>
                    <Link to="/home" className='header2'>Home</Link>
                    <Link to="/about" className='header2'>About</Link>
                    <Link to="/contact" className='header2'>ContactUs</Link>
                    <Link to="/courses" className='header2'>Courses</Link>
                    <Link to="/admission" className='header2' className='btn' >Apply Now</Link>
                </nav>
            </header>
        </div>
    )
}

export default Header;