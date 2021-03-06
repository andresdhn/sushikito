
/*! 
 * =====================================================================
 * sushikito.fr
 * menu.js
 * Menu component
 * November 2017
 * @author:  Andres Hernandez <hernandez.andres.d@gmail.com>
 * @copyright: sushikito.fr
 *
 * =====================================================================
 */

var React = require('react'); 
var ReactDOM = require('react-dom');
var createReactClass = require('create-react-class');
var Category = require('./Category'); 

var Menu = createReactClass({ 
	render() {
		return (
			<div className="container">
				{ this.props.list.map( category => <Category key={ category.id } id={ category.id } category={category} />)} 
			</div>
		); 
	}
}); 

ReactDOM.render(<Menu list={ require('./data.js') } />, document.getElementById('menu-component'));