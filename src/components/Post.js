import React from 'react'
import { useParams,useLocation } from 'react-router-dom'

const Post = () => {
    const {id}=useParams();
    //For Query like: http://localhost:3000/post/1234?first=ishwor&last=shrestha
    const query=new URLSearchParams(useLocation().search);
    return (
        <div>
            <h3>POST ID :::{id}</h3>

            <h4>First Name :::{query.get("first")}</h4>
            <h4>Last Name :::{query.get("last")}</h4>
        </div>
    )
}

export default Post

//We can use 'match' to get the params of URL in the following example:

// import React from 'react'

// const Post = ({match}) => {
//     return (
//         <div>
//             <h3>POST ID :::{match.params.id}</h3>
//         </div>
//     )
// }

// export default Post