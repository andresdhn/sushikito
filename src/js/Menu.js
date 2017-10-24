var React = require('react'); 
var ReactDOM = require('react-dom');
var createReactClass = require('create-react-class');


var MenuItem = createReactClass({ 
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
	    	<div className="clearfix">
				<img className="pull--left" src={this.props.item.img} alt="this.props.item.name"/>
				<div className="pull--right">
					<p>{this.props.item.descrip}</p>
					<p>{this.props.item.price}</p>
				</div> 
			</div>
        )
    },

	render() {
		return (
			<div className="grid-cell">
	    		<div className="menu__item" onClick={this.toggle}>
	    			<div className="clearfix">
	    				<p className="item__title bold pull--left">{ this.props.item.name }</p>
    					<p className="item__info bold pull--right">{(this.state.viewInfo) ? '-': '+'} info</p>
    				</div>
					{ (this.state.viewInfo) && this.renderDetail() }
				 </div>
	        </div>
		) 
	}
});

var Menu = createReactClass({ 

	renderCategories(category) {
		return (
			<article 
				key={ category.id } 
				id={ category.id } 
				className='menu__category' >

				<h1 className='category__header'>{ category.category }</h1>
				<div className="grid grid--gutters grid--1-1 grid--1-2@xs">
					{ category.items.map( item => <MenuItem key={item.ref} id={item.ref} item={item} />)}
				</div>
			</article>
		)
	},

	render() {
		return (
			<div>
				{ this.props.list.map( this.renderCategories ) } 
			</div>
		); 
	}
}); 

ReactDOM.render(<Menu list={ require('./data.js') } />, document.getElementById('menu-component'));