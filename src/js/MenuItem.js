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
	    		<div className="grid grid--gutters">
	    			<div className="grid-cell grid-cell--1-3">
	    				<img src={ this.props.item.img } alt={ this.props.item.name } />
	    			</div>
	    			<div className="grid-cell grid-cell--2-3 grid-cell--center">
						<p>{ this.props.item.descrip }</p>
						<p>&euro; { this.props.item.price }</p>
					</div>
				</div>
			</div>
        )
    },

	render() {
		return (
			<div className="grid-cell">
	    		<div 
	    			className={`menu__item ${ (this.state.viewInfo) ? 'menu__item--active' : '' }`} 
	    			onClick={this.toggle} >
	    			<div className="item__header clearfix">
	    				<p className="item__title bold pull--left">{ this.props.item.name }</p>
						<p className="item__more bold pull--right">{(this.state.viewInfo) ? '-': '+'} info</p>
					</div>

					{ (this.state.viewInfo) && this.renderDetail() }
				 </div>
	        </div>
		) 
	}
});