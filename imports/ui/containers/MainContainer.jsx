import { createContainer } from 'meteor/react-meteor-data';
import MainPage from '../pages/MainPage.jsx';
import Meteor from 'meteor/meteor';

const MainContainer = createContainer(({ params }) => {
	const currentUser = Meteor.user();
	return {
		currentUser
	};
}, MainPage);

export default MainContainer;
