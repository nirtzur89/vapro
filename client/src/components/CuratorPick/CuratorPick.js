import React, { Component } from "react";
import Slider from "react-slick";
import '../CuratorPick/CuratorsPick.css';


class Carousel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedFooter: 1
    }
    
    this.settings = {
      dots: true,
      infinite: true,
      speed: 500,
      arrows: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      beforeChange: (prevIndex, nextIndex) => {
        this.setState({
          selectedFooter: [0, 1, 2].indexOf(nextIndex) !== -1 ? 1 : 2
        });
      }
    };
  }

  render() {
    console.log('render');

    return (
      <div>
        <SimpleSlider settings={this.settings} />
       </div> 
    );
  }
}

class SimpleSlider extends Component {
  shouldComponentUpdate (nextProps) {
    // TODO: add proper implementation that compares objects
    return false;
  }
  
  render () {
    console.log('slider render');
    return (
      <Slider {...this.props.settings}>
        <div><div className="slide-0"><h3>Graph 1</h3></div></div>
        <div><div className="slide-1"><h3>Graph 2</h3></div></div>
        <div><div className="slide-2"><h3>Graph 3</h3></div></div>
        <div><div className="slide-3"><h3>Set Up</h3></div></div>
      </Slider>
    )
  }
}

export default Carousel;
        
