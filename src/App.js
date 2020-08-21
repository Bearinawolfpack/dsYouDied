import React from "react";
import "./App.css";
import SlayContainer from "./Container/SlayContainer";
import Favorites from "./Components/Favorites";
import slayArray from "./api.js";
import SlayForm from "./Components/SlayForm"
import Search from "./Components/Search"

export default class App extends React.Component {
	state = {
    stateArray: slayArray,
    searchValue: ""
	};

	clickHandler = (id) => {
		// console.log(id)
		let clickArray = [...this.state.stateArray];
		// console.log(clickArray)
		let clickedImg = clickArray.find((obj) => obj.id === id);
		// console.log(clickedImg.favorite)
		clickedImg.favorite = !clickedImg.favorite;
		// console.log(clickArray) // shows the update
		this.setState({ stateArray: clickArray });
  };
  
  submitHandler = (obj) => {
    // console.log("This is App, here is the obj you ordered:", obj)
    let submitArray = [obj, ...this.state.stateArray]
    this.setState({ stateArray: submitArray})
  }

  searchHandler = (event) => {
    // console.log(event.target.value)
    this.setState({searchValue: event.target.value})
    console.log(this.state.searchValue)
  }

  searchResults = () => {
    let searchArray = [...this.state.stateArray]
    // console.log(searchArray)
    return searchArray.filter(obj => obj.name.toLowerCase().includes(this.state.searchValue.toLowerCase()))
  }

	favoritesClickHandler = (id) => {
		// console.log(id);
		let clickArray = [...this.state.stateArray];
		// console.log(clickArray)
		let clickedImg = clickArray.find((obj) => obj.id === id);
		// console.log(clickedImg.favorite)
		clickedImg.favorite = !clickedImg.favorite;
		// console.log(clickArray) // don't know what I was hoping for here but it's not broken so that's a plus
		this.setState({ stateArray: clickArray });
	};

	favoritesList = () => {
		return this.state.stateArray.filter((obj) => obj.favorite === true && obj.name.toLowerCase().includes(this.state.searchValue.toLowerCase()));
	};

	render() {
		// console.log(this.state)
		return (
			<div className="container">
				<SlayContainer
					slayContainerArray={this.searchResults()}
					clickHandler={this.clickHandler}
				/>
				<Favorites
					favorites={this.favoritesList()}
					clickHandler={this.favoritesClickHandler}
				/>
        <SlayForm submitHandler={this.submitHandler}/>
        <Search searchHandler={this.searchHandler} searchValue={this.state.searchValue}/>
			</div>
		);
	}
}
