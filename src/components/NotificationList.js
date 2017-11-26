import React from "react";
import NotificationListItem from "./NotificationListItem";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

const NotificationList = props => {
	const notificationItems = props.notifications.map((notification, index) => {
		if (index <= props.currentIndex) {
			return (
				<NotificationListItem
					removeNotification={() => props.removeNotification(index)}
					notification={notification}
					key={notification.name}
				/>
			);
		} else {
			return <div key={index} />;
		}
	});

	return (
		<ReactCSSTransitionGroup
			transitionName="slide"
			transitionEnterTimeout={400}
			transitionLeaveTimeout={400}
			component="ul"
			className="notifications-list"
		>
			{notificationItems}
		</ReactCSSTransitionGroup>
	);
};

export default NotificationList;
