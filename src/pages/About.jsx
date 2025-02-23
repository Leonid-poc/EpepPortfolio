import epepDeliver from "../assets/epepDeliver.png"
import FadeContent from "../components/FadeContent"
const About = () => {
  return (
    <div className="DivAbout" id="about">
        <div className="info">
            <img src={epepDeliver} alt="" />
            <div>
                <h1>about</h1>
                <p>
                    <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0}>
                    Epep is done watching people toss around countless derivative ShibaCumGMElonKishuTurboAssFlokiMoon Inu coins like a game of hot potato. The Inu era is over. It’s time for the most iconic meme in the world to claim his throne as the true king of the internet.

                    Epep is here to bring memecoins back to greatness. Launched in stealth mode with no presale, zero taxes, LP burned, and a renounced contract, $EPEP is a coin for the people—now and forever. Powered by pure meme energy, let $EPEP lead the way.
                    </FadeContent>
                </p>
            </div>
        </div>
    </div>
  )
}

export default About