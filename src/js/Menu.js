
var React = require('react'); 
var ReactDOM = require('react-dom');
var createReactClass = require('create-react-class');

var Menu = createReactClass({ 
	getInitialState() {
		return {
			menu: require('./data.js')
		}
	}, 

	renderItems(item) {
		return (
			<div key={ item.ref } id={ item.ref } className="grid-cell">
                <div className="menu-item">
                    <p className="item-title bold">{ item.name }</p>
                    <p className="item-info clearfix">
                    	<span className="pull-left">{ item.descrip }</span>
                    	<span className="pull-right">+info</span>
                    </p>
                </div>
            </div>
		); 
	},

	renderCategories(category) {
		return (
			<article key={ category.id } id={ category.id } className="menu-category">
				<h1 className="category-header">{ category.category }</h1>
				 <div className="grid grid--gutters grid--center grid--1-1 grid--1-2@xs">
				 	{ category.items.map( this.renderItems ) }
				 </div>
			</article>
		);
	}, 

	render() {
		return (
			<div>
				{ this.state.menu.map( this.renderCategories ) }
			</div>
		); 
	}
}); 

ReactDOM.render(<Menu />, document.getElementById('menu-component'));
