import React from 'react'

let Search = (props) => {
    // console.log(props.searchHandler)
    return(
        <form>
            <input type="text" placeholder="Search for Image" value={props.searchValue} onChange={props.searchHandler}/>
        </form>
    )
}

export default Search