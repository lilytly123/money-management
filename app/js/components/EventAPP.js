var React = require('react');
var ShowAddButton = require('./ShowAddButton');
var EventForm = require('./EventForm');
var EventList = require('./EventList');
var EventListItem = require('./EventListItem');
var EventAmount = require('./EventAmount')

	module.exports  = React.createClass({
	getInitialState:function(){
		var events =[
			{
				id:1,
				date:'20160831',
				description:'据隆众资讯测算，截至11月28日，原油综合变化率为4.90%，预计对应汽柴油上调幅度160元/吨。卓创资讯测算的汽柴油上调幅度也是160元/吨。',
				amount:-100,
				
			},
			{
				id:2,
				date:'20160723',
				description:'据隆众资讯测算，截至11月28日，原油综合变化率为4.90%，预计对应汽柴油上调幅度160元/吨。卓创资讯测算的汽柴油上调幅度也是160元/吨。',
				amount:-102,
			},

		];

		return {
			events:events,
			formDisplayed:false,
		};
	},

	onToggleForm:function(){
		this.setState({
			formDisplayed: !this.state.formDisplayed,
		});
	},

	onNewEvent:function( newEvent){
		newEvent.id= this.state.events.length + 1;
		var newEvents =this.state.events.concat(newEvent);
		newEvents = this.sortEvent(newEvents);
		this.setState({
			events:newEvents,
		});

	},
	sortEvent:function(events){
	
		return events;
	},
	render:function(){
		return (
			<div>
		<div className="jumbotron text-center">
			<div className="container">
				<h2>money management</h2>
				<ShowAddButton onToggleForm={this.onToggleForm}/>
			</div>
		</div>
		<div className="main container">
			<EventForm onNewEvent={this.onNewEvent} onToggleForm={this.onToggleForm} formDisplayed={this.state.formDisplayed}/>

			<EventList events={this.state.events}/>
			<EventAmount />
		</div>
		</div>
		);
	}
});



