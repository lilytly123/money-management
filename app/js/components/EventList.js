var React = require('react');
var EventListItem = require('./EventListItem.js');

var EventList = React.createClass({

    render:function(){
           var events = this.props.events;

           if (!Array.isArray(events)) throw new Error ('it must be Array');
           var eventsComps = events.map(function(eve){
           return (<EventListItem id={eve.id}
           date={eve.date}
           amount={eve.amount}
           description={eve.description}
          />)
        });
        return(
            <div id="events" className="">

                {eventsComps}

            </div>
        )
    }
});

module.exports = EventList;