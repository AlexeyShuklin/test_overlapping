import React, { Component, PropTypes } from 'react'
import DOM from 'react-dom'
import { scale } from 'd3';

import './LabelOverlapping.scss'

export default class LabelOverlapping extends Component {

  static propTypes = {
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    points: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number)).isRequired
  }

	componentDidMount() {
		const svg = this.refs.test;
		let elements = svg.getElementsByClassName("place-label");
		let dots = svg.getElementsByClassName("Circle");
		for (let i = 0; i < elements.length; i++) {
			let currentLabel = elements[i];
			let currentCircle = dots[i];
			let currentLabelRect = elements[i].getBoundingClientRect();
			let currentCircleRect = dots[i].getBoundingClientRect();
			for (let j = 0; j < elements.length; j++) {
				if(elements[j] != currentLabel && elements[j].style.display!='none') {
					let overlapLabel = elements[j].getBoundingClientRect();
					if(((Math.abs(currentLabelRect.left - overlapLabel.left) * 2 < (currentLabelRect.width + overlapLabel.width)) &&
					 (Math.abs(currentLabelRect.top - overlapLabel.top) * 2 < (currentLabelRect.height + overlapLabel.height))) ||
					 (((Math.abs(currentCircleRect.left - overlapLabel.left)-11) * 2 < (currentCircleRect.width + overlapLabel.width)) &&
					  ((Math.abs(currentCircleRect.top - overlapLabel.top)-11) * 2 < (currentCircleRect.height + overlapLabel.height)))) {
						// overlap, hide label
						elements[j].style.display = 'none'
					}
				}
			}
		}
	}

	render() {
	let { width, height, points } = this.props
	let x = scale.linear().domain([0, 1]).range([45, width-45]),
		y = scale.linear().domain([0, 1]).range([height-45, 45])
	let colors = d3.scale.category20();

	return (
		<svg ref='test' className="Dots" width={ width } height={ height }>
		{
			points.map((d, i) => {
				return [
					<circle className="Circle"
						key={ i }
						cx={ x(d[0]) } cy={ y(d[1]) }
						r="3" fill={colors(i)}></circle>,
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
