import Post from "../post/Post"
const Posts = (props)=>{
    return(
        <div className="container">
            <div className="row" style={{display:'flex', flexDirection:'column', gap:'24px'}}>
                {props.items.map((post)=>
                    <Post
                    key={post.id}
                    title={post.title}
                    source={post.source}
                    />
                )}
            </div>
        </div>
    )
}

export default Posts