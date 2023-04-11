import "./TrendingSlider.css";
import TrendingItem from "./TrendingItem";

function TrendingSlider(){

    function slideLeft(){
        let slider = document.getElementById("slider")
        slider.scrollLeft = slider.scrollLeft - 235
    }

    function slideRight(){
        let slider = document.getElementById("slider")
        slider.scrollLeft = slider.scrollLeft + 235
    }

    return(
        <div className="trending">
            <div className="container">
                <div className="title-btns">
                    <h3>Trending Now</h3>
                    <div className="btns">
                        <button title="scroll left" onClick={slideLeft}>
                            <i className="fa-solid fa-arrow-left"></i>
                        </button>
                        <button title="scroll right" onClick={slideRight}>
                            <i className="fa-solid fa-arrow-right"></i>
                        </button>
                    </div>
                </div>
                <div className="row-container" id="slider">
                    <TrendingItem/>
                </div>
            </div>
        </div>
    )
}

export default TrendingSlider;