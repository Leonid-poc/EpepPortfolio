/* eslint-disable react/no-unescaped-entities */
import './index.scss';
import bigBoy from '../assets/bigBoy.png';
import epep from '../assets/epep.png';
import FadeContent from '../components/FadeContent';

const Home = () => {
  return (
    <div className='DivHome' id='home'>
        <img src={bigBoy} className='bigBoy'/>
        <div className='info'>
            <div>
                <h1>$epep</h1>
                <p>
                  <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0}>
                    $epep is Pepe's long-lost twin red brother, who represents bear market. Separated at birth, they reunited after Pepe launched his famous meme coin. Pepe has had more than enough success, and he's eager to share the limelight with his recently-found twin.
                  </FadeContent>
                </p>
                <a href=""><img src="https://static.wixstatic.com/media/1f3f2b_8eaff3e5f42b45f88cf11d418e25d5e6~mv2.png/v1/fill/w_80,h_80,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/twitter%20(2).png" alt="" /></a>
            </div>
            <img src={epep} alt=""/>
            
        </div>
    </div>
  )
}

export default Home