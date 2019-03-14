import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

class DemoCarousel extends Component {
    render() {
        return (
            <Carousel showArrows={false} infiniteLoop autoPlay>
                <div>
                    <img src="https://www.whitevoid.com/wordpress/wp-content/uploads/2018/05/WV-News-Stalactite-660x438.jpg" />
                    <p className="legend">
                        legend 1
        </p>
                </div>
                <div>
                    <img src=".." />
                    <p className="legend">
                        legend 2
        </p>
                </div>
                <div>
                    <img src=".." />
                    <p className="legend">
                        legend 3
        </p>
                </div>
                <div>
                    <img src=".." />
                    <p className="legend">
                        legend 4
        </p>
                </div>
                <div>
                    <img src=".." />
                    <p className="legend">
                        legend 5
        </p>
                </div>
            </Carousel>

        );
    }
};

export default DemoCarousel;

// ReactDOM.render(<DemoCarousel />, document.querySelector('.demo-carousel'));