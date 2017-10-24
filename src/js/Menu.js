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

var Category = createReactClass({ 
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

var Menu = createReactClass({ 
	render() {
		return (
			<div>
				{ this.props.list.map( category => <Category key={ category.id } id={ category.id } category={category} />)} 
			</div>
		); 
	}
}); 

ReactDOM.render(<Menu list={ require('./data.js') } />, document.getElementById('menu-component'));