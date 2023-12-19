import './Post.scss'
const Post = (props)=>{
    return(
        <div className='card'>
            <div className="card-body">
                <img src={props.source} alt="#"/>
                <h4 className="card-title">{props.title}</h4>
            </div>
        </div>
    )
}

export default Post;