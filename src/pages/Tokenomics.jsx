import no_taxes from "../assets/no_taxes.png";
import FadeContent from "../components/FadeContent";

const Tokenomics = () => {
  return (
    <div className="DivTokenomics" id="tokenomics">
        <h1>tokenomics</h1>
        <div className="info">
            <div className="infoText">
                <h2>
                    token supply:
                    420,690,000,000,000
                </h2>
                <div className="niceBlock">
                    <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0}>
                        No Taxes, No Bullshit. It’s that simple.
                        <br /><br />
                        LP tokens are burnt, and contract ownership is renounced. 
                    </FadeContent>
                </div>
            </div>
            <img src={no_taxes} alt="" />
        </div>
    </div>
  )
}

export default Tokenomics