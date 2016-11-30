var React = require('react');

var EventForm = React.createClass({
	handleForm:function(e){
		e.preventDefault();

		var newEvent = {
			amount:this.refs.amount.value,
			date :this.refs.date.value,
			description :this.refs.description.value,
		}

		this.refs.addEventForm.reset();

		this.props.onNewEvent( newEvent );
	},
	render:function(){
		var styleObj={
			display:this.props.formDisplayed ? 'block':'none',
		}
		return(
			<form  ref="addEventForm" style={styleObj} name="addEvent" className="clearfix" onSubmit={this.handleForm}>
				<div className="form-group">
					
					<input ref="amount" type="text" className="form-control" id="etitle" placeholder="具体金额" />
				</div>
				<div className="form-group">
					
					<input ref="date" type="text" className="form-control" id="edate" placeholder="具体日期" />
				</div>
				<textarea ref="description" className="form-control" rows="3" placeholder="事件的描述"></textarea>
				<button className="btn btn-success pull-right">确认</button>
				<a className="btn btn-default pull-right" onClick={this.props.onToggleForm}>取消</a>
			</form>
		);
	}
});

module.exports = EventForm;