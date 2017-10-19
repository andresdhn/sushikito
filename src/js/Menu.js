
var React = require('react'); 
// var data = require('../html/menu.json');

var Menu = React.createClass({ 
	GetInitialState() {
		return {
			data: [{
				"id": "0",
				"category": "Entreés", 
				"items": [
					{
						"ref":  "wakame", 
						"name": "Wakamé", 
						"img": "http://placehold.it/250x250",
						"price": "4,60",
						"descrip": "" 
					}, 
					{
						"ref":  "wakame-tropical", 
						"name": "Wakamé Tropical", 
						"img": "http://placehold.it/250x250",
						"price": "5,60",
						"descrip": "surimi, masago, mangue" 
					}
				]
			}]
		};
	}, 

	renderItems() {
		return (
			<article 
				class="grid-cell"
				id={ data.id }
				key={ data.id } 
			>
				{ data.category }
			</article>
		);
	}, 

	render() {
		return (
			<div>
				{ this.state.data.map( this.renderItems ) }
			</div>
		); 
	}
}); 

exports Menu;
