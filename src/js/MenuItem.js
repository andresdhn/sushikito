var React = require('react'); 
var createReactClass = require('create-react-class');

module.exports = MenuItem = createReactClass({ 
	getInitialState() {
		return {
			viewInfo: false
		}
	},

	toggle() {
		(this.state.viewInfo) ? this.setState({ viewInfo: false }) : this.setState({ viewInfo: true });
	},

	renderDetail() {
	    return (
	    	<div className="item__info">
				<p>{this.props.item.descrip}</p>
				<p>{this.props.item.price}</p>
			</div>
        )
    },

	render() {
		return (
			<div className="grid-cell">
	    		<div 
	    			className={`menu__item ${ (this.state.viewInfo) ? 'menu__item--active' : '' }`} 
	    			onClick={this.toggle} >
	    			<div className="item__header">
	    				<p className="item__title bold">{ this.props.item.name }</p>
						<p className="item__more bold">{(this.state.viewInfo) ? '-': '+'} info</p>
					</div>

					{ (this.state.viewInfo) && this.renderDetail() }
				 </div>
	        </div>
		) 
	}
});