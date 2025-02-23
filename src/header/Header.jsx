import './header.scss';
// import { Button } from 'antd';
// import logo from "../assets/logo.png";
import epep from "../assets/epep.png";
import useMedia from '../vendor/useMedia';
import DrawerComp from '../components/DrawerComp';

const Header = () => {
    const wid = useMedia('(min-width: 1070px)');
    return (
        <header className="header">
            <div className="logoDiv">
                <img src={epep} alt="" />
                <h1>epep</h1>
            </div>
            <nav>
                {wid
                ? 
                <ul className="ul_header">
                    <li><a href="#">home</a></li>
                    <li><a href="#about">about</a></li>
                    <li><a href="#tokenomics">tokenomics</a></li>
                    <li><a href="#roadmap">roadmap</a></li>
                    <li><a href="#buy" className='linkBut'>buy now</a></li>
                    {/* <li><Button color='default' variant="outlined" style={{backgroundColor: "transparent"}}>buy now</Button></li> */}

                </ul>
                :
                <DrawerComp />
                }
            </nav>
        </header>
    )
}
 
export default Header;