var React = require('react');

var EventListItem = React.createClass({
	render:function(){
		return(
			
			<div className="media" >
					<div className="media-body">

						<div className="media-content">
							<h4 className="media-heading">{this.props.amount}</h4>
							<p className="media-date">{this.props.date}</p>
						</div>
						<p>{this.props.description}</p>
					</div>
				</div>

		);
	}
});

module.exports = EventListItem;

