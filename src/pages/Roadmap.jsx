import epep from '../assets/epep.png';
import pis_epep from '../assets/pis_epep.png';
import FadeContent from '../components/FadeContent';

const Roadmap = () => {
  return (
    <div className="DivRoadmap" id="roadmap">
        <div className="info">
        <img src={pis_epep} alt="" />
        <div className="roadInfo">
            <h1>roadmap</h1>
            <div className="niceBlock">
                <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0}>
                    Phase 1: Meme
                    <br /><br />
                    Phase 2: Vibe and HODL
                    <br /><br />
                    Phase 3: Meme Takeover
                </FadeContent>
            </div>
        </div>
        <img src={epep} alt="" />
        </div>
    </div>
  )
}

export default Roadmap