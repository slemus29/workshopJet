import React, { useState, useCallback } from 'react'
import Post from '../components/Post';
import { renderToStringWithData } from 'react-apollo';
import useDeleteArray from '../hooks/useDeleteValues';

const POSTS = [
    {
        title: "My post",
        description: 'Lorem impum',
        favorite: false,
    },
    {
        title: "My post 2",
        description: 'Lorem impum',
        favorite: false,
    },
    {
        title: "My post 3",
        description: 'Lorem impum',
        favorite: false,
    },
    {
        title: "My post 4",
        description: 'Lorem impum',
        favorite: false,
    },
    {
        title: "My post 5",
        description: 'Lorem impum',
        favorite: false,
    },
    {
        title: "My post 6",
        description: 'Lorem impum',
        favorite: false,
    }
]

const AllPost = () => {
    // const [post, setPost] = useState(POSTS);

    // const removePost= useCallback((index) => {
    //     const newPost =[
    //         ...post
    //     ]
    //     newPost.splice(index, 1)
    //     setPost(newPost)
    // },[post])
    const [post, removePost] = useDeleteArray(POSTS);


   
    return(
        post
            .map( props => ({
                ...props,
                onClick: removePost
            }))
            .map(Post)
    )
}




// with statefull component

// const allPost = POSTS.map(Post)
// class AllPost extends React.Component {
//     constructor(props){
//         super(props);
//         this.state = {
//             post: POSTS
//         }
//     }
//     removePost(index){
//         const{
//             post,
//         }= this.state
//         const newPost =[
//             ...post
//         ]
//         newPost.splice(index, 1)
//         this.setState({post:[
//             ...newPost
//         ]
//         })
//     }
//     render() {
//         const {
//             post,
//         } = this.state
//         return( 
//         <div>
//             { post.map( post =>({
//                 ...post,
//                 onClick: this.removePost.bind(this),
//             })).map(Post)}
//         </div>
//         )
//     }
// }


export default AllPost