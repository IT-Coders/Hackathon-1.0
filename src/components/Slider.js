import SwiftSlider from 'react-swift-slider'
import {Component} from 'react'
import '../css/Slider.css'

const data =  [
    {'id':'1','src':'https://gndec.ac.in/sites/default/logo.png'},
    {'id':'2','src':'https://gndec.ac.in/gndec/gne_front.jpg'},
    {'id':'3','src':'https://gndec.ac.in/gndec/2020/au2020.jpg'},
  ];
  
  export default class Slider extends Component {
    render() {
      return (
        <SwiftSlider data={data} height={170} showDots={false}/>
      );
    }
  }