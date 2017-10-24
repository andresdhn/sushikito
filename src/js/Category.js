var React = require('react'); 
var createReactClass = require('create-react-class');
var MenuItem = require('./MenuItem');

module.exports = Category = createReactClass({ 
	getInitialState() {
		return {
			viewInfo: false
		}
	},

	toggle() {
		(this.state.viewInfo) ? this.setState({ viewInfo: false }) : this.setState({ viewInfo: true });
	},

	renderItems() {
		return this.props.category.items.map( item => <MenuItem key={item.ref} id={item.ref} item={item} />) 
	},

	render() {
		return (
			<article className='menu__category'>
				<h1 className='category__header' onClick={this.toggle} >{ this.props.category.category }</h1>
				<div className="grid grid--gutters grid--1-1 grid--1-2@xs">
					{ (this.state.viewInfo) && this.renderItems() }
				</div>
			</article>
		)
	}
});