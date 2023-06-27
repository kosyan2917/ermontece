import {Carousel} from "react-responsive-carousel";
import {Component} from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
class CardToggler extends Component {
    render() {
        return <Carousel showThumbs={false}>
            <div>
                <img src="/card1.png" />
            </div>
            <div>
                <img src="/card2.png" />
            </div>
            <div>
                <img src="/card3.png" />
            </div>
        </Carousel>
    }
}

export default CardToggler