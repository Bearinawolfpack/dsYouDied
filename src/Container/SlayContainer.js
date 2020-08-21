import React from "react";
import SlayCard from "../Components/SlayCard";

class BeyContainer extends React.Component {
	render() {
		// console.log(this.props.slayContainerArray)
		// console.log(this.props.clickHandler)
		let slayObjs = this.props.slayContainerArray.map((slayObj) => (
			<SlayCard
				slayObj={slayObj}
				key={slayObj.id}
				clickHandler={this.props.clickHandler}
			/>
		));
		return (
			<div className="index">
				<h1>Index</h1>
				{slayObjs}
			</div>
		);
	}
}

export default BeyContainer;
