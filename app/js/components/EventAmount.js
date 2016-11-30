var React = require('react');
var EventAmount = React.createClass({
	render:function(){
		var events = this.props.events;
		var amount = amount+this.amount;

		return (
			<div><h4>合计：{amount}</h4></div>
		);
	}
});

module.exports = EventAmount;