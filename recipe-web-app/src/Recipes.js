import React, {Component} from "react";
import axios from 'axios';

// const api = axios.create({
//     baseURL: 'https://catfact.ninja/facts'
// })


class Recipes extends Component{

    // state = {
    //     facts: []
    // }

    // constructor() {
    //     super();
    //     api.get('/').then(res => {
    //         console.log(res.data.data)
    //         this.setState({ facts: res.data.data })
    //     })
    // }

    render() {
        return(
            <div className="recipes">
                <h1>This is the Recipes page</h1>
            </div>
        )
    }
}

export default Recipes;