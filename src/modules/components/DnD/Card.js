import React from 'react'
import PropTypes from 'prop-types'
import { findDOMNode } from 'react-dom'
import {
	DragSource,
	DropTarget,
	ConnectDropTarget,
	ConnectDragSource,
	DropTargetMonitor,
	DropTargetConnector,
	DragSourceConnector,
	DragSourceMonitor,
} from 'react-dnd'
import ItemTypes from './ItemTypes'
import { XYCoord } from 'dnd-core'

const style = {
	border: '1px dashed gray',
	padding: '0.5rem 1rem',
	marginBottom: '.5rem',
	backgroundColor: 'white',
	cursor: 'move',
}

const cardSource = {
	beginDrag(props) {
		return {
			id: props.id,
			index: props.index,
		}
	},
}

const cardTarget = {
	hover(props, monitor, component) {
		const dragIndex = monitor.getItem().index
		const hoverIndex = props.index

		// Don't replace items with themselves
		if (dragIndex === hoverIndex) {
			return
		}

		// Determine rectangle on screen
		const hoverBoundingRect = (findDOMNode(
			component,
		)).getBoundingClientRect()

		// Get vertical middle
		const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2

		// Determine mouse position
		const clientOffset = monitor.getClientOffset()

		// Get pixels to the top
		const hoverClientY = (clientOffset).y - hoverBoundingRect.top

		// Only perform the move when the mouse has crossed half of the items height
		// When dragging downwards, only move when the cursor is below 50%
		// When dragging upwards, only move when the cursor is above 50%
		// Dragging downwards
		if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
			return
		}

		// Dragging upwards
		if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
			return
		}

		// Time to actually perform the action
		props.moveCard(dragIndex, hoverIndex)

		// Note: we're mutating the monitor item here!
		// Generally it's better to avoid mutations,
		// but it's good here for the sake of performance
		// to avoid expensive index searches.
		monitor.getItem().index = hoverIndex
	},
}


@DropTarget(ItemTypes.CARD, cardTarget, (connect) => ({
	connectDropTarget: connect.dropTarget(),
}))

// make your component draggable
@DragSource(
  // ES6 symbol对象， 只有注册过并且类型相同的才会成为拖拽的数据源
   ItemTypes.CARD,
  /**
   *  Required. A plain JavaScript object with a few allowed methods on it.
   *  It describes how the drag source reacts to the drag and drop events.
   *  See the drag source specification described in detail in the next section.
   * 
   * */
  cardSource,
  /**
   * Required. The collecting function. 
   * It should return a plain object of the props to inject into your component. 
   * It receives two parameters: connect and monitor. 
   * Read the overview for an introduction to the monitors, the connectors, and the collecting function. See the collecting function described in detail after the next section.
   */
	(connect, monitor) => ({
		connectDragSource: connect.dragSource(),
		isDragging: monitor.isDragging(),
	}),
)
export default class Card extends React.Component {
	static propTypes = {
		connectDragSource: PropTypes.func,
		connectDropTarget: PropTypes.func,
		index: PropTypes.number,
		isDragging: PropTypes.bool,
		id: PropTypes.any,
		text: PropTypes.string,
		moveCard: PropTypes.func,
	}

	render() {
		const {
			text,
			isDragging,
			connectDragSource,
			connectDropTarget,
		} = this.props
		const opacity = isDragging ? 0 : 1

		return (
			connectDragSource &&
			connectDropTarget &&
			connectDragSource(
				connectDropTarget(<div style={{ ...style, opacity }}>{text}</div>),
			)
		)
	}
}