import twtttt from "../assets/twtttt.png";
import epep from "../assets/epep.png";
import FadeContent from "../components/FadeContent";

const Footer = () => {
    const time = new Date;

    return (
    <footer>
        <div className="logos">
            <img src={twtttt} alt="" />
            <div className="logoDiv">
                <img src={epep} alt="" />
                <h1>epep</h1>
            </div>
        </div>
        <p>
            <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0}>
            $epep coin has no association with Matt Furie or his creation Pepe the Frog. This token is simply paying homage to a meme we all love and recognize.
            <br /><br />
            $EPEP is a meme coin with no intrinsic value or expectation of financial return. There is no formal team or roadmap. the coin is completely useless and for entertainment purposes only.
            </FadeContent>
        </p>
        <div className="lastBlock">
            © {time.getFullYear()} by epeP. All rights reserved!
        </div>
    </footer>
  )
}

export default Footer