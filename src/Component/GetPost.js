import React, {Component} from 'react';

import axios from 'axios';


class GetPost extends Component
{

    constructor()
    {
        super()

        this.state={posts:[],errorMsg:''}
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response=>{this.setState({posts:response.data})})
            .catch(error=>{this.setState({errorMsg:'Error in request'})
            })
    }

    render() {

        const {posts,errorMsg} = this.state;

        return (
            <div>
                List of Posts

                {posts.length ? posts.map(post=> <div key={post.id}>{post.title}</div>):null}
                {errorMsg ? <div>{errorMsg}</div>:null}

            </div>
        );
    }
}

export default GetPost;