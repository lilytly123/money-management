var React = require ('react');

module.exports = React.createClass({
	render:function(){
		return (
			<button id="add-event-btn" className="btn btn-success" onClick={this.props.onToggleForm}>添加事件</button>
		);
	}
});

