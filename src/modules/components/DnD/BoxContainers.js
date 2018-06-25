import React from 'react'
import { DragDropContext } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'
import Box from './Box'
const update = require('immutability-helper')

const style = {
	width: 1600
}


@DragDropContext(HTML5Backend)
export default class BoxContainers extends React.Component {
	constructor(props) {
		super(props)
		this.moveBox = this.moveBox.bind(this)
		this.state = {
			box: [
				{
					id: 1,
					text: 'Write a cool JS library',
				},
				{
					id: 2,
					text: 'Make it generic enough',
				},
				{
					id: 3,
					text: 'Write README',
				},
				{
					id: 4,
					text: 'Create some examples',
				},
				{
					id: 5,
					text:
						'Spam in Twitter and IRC to promote it (note that this element is taller than the others)',
				},
				{
					id: 6,
					text: '???',
				},
				{
					id: 7,
					text: 'PROFIT',
				},
			],
		}
  }
  
  moveBox(dragIndex, hoverIndex) {
		const { box } = this.state
		const dragCard = box[dragIndex]

		this.setState(
      // copy数据
			update(this.state, {
				box: {
					$splice: [[dragIndex, 1], [hoverIndex, 0, dragCard]],
				},
			}),
		)
	}

	render() {
    const { box } = this.state
		return (
      <div style={style}>
        {
          box.map((box, i) => (
            <Box
              key={box.id}
              index={i}
              id={box.id}
              text={box.text}
              moveCard={this.moveBox}
             />
          ))
        }
			</div>
		)
	}
}