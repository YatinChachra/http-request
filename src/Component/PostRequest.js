import React, {Component} from 'react';
import axios from 'axios';


class PostRequest extends Component
{
    constructor()
    {
        super()

        this.state={
            userId:'',
            title:'',
            body:''
        }
    }

    changeHandler = event =>{
        this.setState({[event.target.name]:event.target.value})
    }


    submitHandler = event => {
        event.preventDefault()
        console.log(this.state)
        axios.post(
            'https://jsonplaceholder.typicode.com/posts', this.state)
            .then(response => {
                console.log(response)
            })
            .error(errorMsg => {
                console.log(errorMsg)
            })
    }
    

    render()
    {
        const { userId,title,body} = this.state

        return(
            <div>
                <form onSubmit={this.submitHandler}>
                    <div>  <input type="text" name='userId' value={userId} onChange={this.changeHandler}/></div>
                    <div> <input type='text' name='title' value={title} onChange={this.changeHandler}/></div>
                    <div> <input type='text' name='body' value={body} onChange={this.changeHandler}/></div>
                    <div> <button type='submit'>submit</button></div>

                </form>
            </div>
        )

    }
}

export default PostRequest;