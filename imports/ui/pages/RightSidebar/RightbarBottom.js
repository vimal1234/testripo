import React, { Component } from 'react';
import Tabs from './Tabs/Tabs';
import Chat from './ChatComponent';
import Events from './EventsComponent';
import Friends from './FriendsComponent';
import History from './HistoryComponent';
import './Tabs/BottomStyles';
class RightBarBottom extends Component {
  constructor(props) {
    super(props);
  
  }
  
  render() {
	 return(
	<Tabs>
		<div label="Chat" imgsrc="images/chat-icon-blue.png" className="chat">
			<Chat CssManager={this.props.CssManager}/>
		</div>
		<div label="Events" imgsrc="images/event-icon-blue.png" className="play">
			<Events />
		</div>
		<div label="Friends" imgsrc="images/friend-icon-white.png" className="tournament">
			<Friends />
		</div>
		<div label="History" imgsrc="images/history-icon-white.png" className="tournament">
			<History />
		</div>
	</Tabs>
);
	 }
}
export default RightBarBottom;
