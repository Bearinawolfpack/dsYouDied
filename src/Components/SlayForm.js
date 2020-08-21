import React from 'react'

export default class SlayForm extends React.Component{
    state = {
        name: "",
        img: "",
        favorite: false
    }
    changeHandler = (event) =>{
        // console.log(event.target.name)
        // console.log(event.target.value)
        this.setState({[event.target.name]: event.target.value})
    }
    
    submitHandler = (event) => {
        event.preventDefault()
        this.props.submitHandler(this.state)
    }

    render() {
        // console.log(this.props.submitHandler)
        return(
            <form onSubmit={this.submitHandler}>
                <input type="text" value={this.state.name} placeholder="Enter Image Name" onChange={this.changeHandler} name="name"/>
                <input type="text" value={this.state.img} placeholder="Enter Image URL" onChange={this.changeHandler} name="img"/>
                <input type="submit" value="Submit"/>
            </form>
        )
    }
}
