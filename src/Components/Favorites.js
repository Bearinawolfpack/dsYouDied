import React from "react";
import SlayCard from "./SlayCard";

export default class Favorites extends React.Component {
	render() {
		// console.log(this.props.favorites) // returns array. reflects changes
		// console.log(this.props.clickHandler)
		let favoriteCards = this.props.favorites.map((favorite) => (
			<SlayCard
				slayObj={favorite}
				key={favorite.id}
				clickHandler={() => this.props.clickHandler(favorite.id)}
			/>
		));
		return (
			<div className="favorites">
				<h1>Favorites</h1>
				{favoriteCards}
			</div>
		);
	}
}
