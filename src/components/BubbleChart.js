import React, { Component, PropTypes } from 'react'
import DOM from 'react-dom'
import { scale } from 'd3';

import './BubbleChart.scss'

export default class BubbleChart extends Component {

  static propTypes = {
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    points: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number)).isRequired
  }

  componentDidMount() {
    const svg = this.refs.test;

    let move = 1;
    let elements = svg.getElementsByClassName("place-label");
    for (let i = 0; i < elements.length; i++) {
      let that = elements[i];
      let a = elements[i].getBoundingClientRect();
      for (let j = 0; j < elements.length; j++) {
        if(elements[j] != that) {
          let b = elements[j].getBoundingClientRect();
          if((Math.abs(a.left - b.left) * 2 < (a.width + b.width)) &&
             (Math.abs(a.top - b.top) * 2 < (a.height + b.height))) {
            // overlap, hide label
            elements[j].style.display = 'none'
          }
        }
     }
 }
  }

  render() {
    let { width, height, points } = this.props
    let x = scale.linear().domain([0, 1]).range([0, width]),
        y = scale.linear().domain([0, 1]).range([height, 0])

    return (
      <svg ref='test' className="Dots" width={ width } height={ height }>
        {
          points.map((d, i) => {
            return [
            <circle className="BubbleChart__circle"
                    key={ i }
                    cx={ x(d[0]) } cy={ y(d[1]) }
                    r="3"></circle>,
            <text className="place-label"
              x={ x(d[0])+5}
              y={ y(d[1])}
            >{ 'label' + i}</text>]
          })
        }
      </svg>
    )
  }

}
