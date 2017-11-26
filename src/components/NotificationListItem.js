import React from "react";

const NotificationListItem = props => {
	return (
		<li className="notification-element">
			<img className="profile-image" src={props.notification.avatar} alt="Profile" />
			<div className="profile-details">
				<h3>
					{props.notification.name}
					<span className="profile-selling"> — Selling {props.notification.tickets} tickets</span>
				</h3>
				<p className="profile-event">{props.notification.event}</p>
			</div>
			<svg
				onClick={props.removeNotification}
				className="icon-exit"
				xmlns="http://www.w3.org/2000/svg"
				width="10"
				height="10"
				viewBox="0 0 10 10"
			>
				<path
					fill="#001319"
					fillOpacity=".4"
					fillRule="evenodd"
					d="M342.975526,17 L346.798345,13.1771803 C347.067218,12.9083075 347.067218,12.4705274 346.798345,12.2016546 C346.529473,11.9327818 346.091693,11.9327818 345.82282,12.2016546 L342,16.0244743 L338.17718,12.2016546 C337.908307,11.9327818 337.470527,11.9327818 337.201655,12.2016546 C336.932782,12.4705274 336.932782,12.9083075 337.201655,13.1771803 L341.024474,17 L337.205102,20.8193726 C336.936229,21.0882454 336.936229,21.5260255 337.205102,21.7948983 C337.339538,21.9293347 337.51534,21.9982765 337.691141,21.9982765 C337.866942,21.9982765 338.042744,21.9293347 338.17718,21.7948983 L342,17.9720786 L345.82282,21.7948983 C345.957256,21.9293347 346.133058,21.9982765 346.308859,21.9982765 C346.48466,21.9982765 346.660462,21.9293347 346.794898,21.7948983 C347.063771,21.5260255 347.063771,21.0882454 346.794898,20.8193726 L342.975526,17 Z"
					transform="translate(-337 -12)"
				/>
			</svg>
		</li>
	);
};

export default NotificationListItem;
