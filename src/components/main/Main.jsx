import Search from "../search/Search";
import Posts from "../posts/Posts";
import GalleryData from "../../data/GalleryData";
import { useState } from "react";
import Input from "../input/Input";
const Main = ()=>{
    const [searchTerm, setSearchTerm] = useState('');

    const handleInputChange = (e)=>{
        setSearchTerm(e.target.value)
    }

    const filteredPosts = GalleryData.filter((post)=>{
        return post.title.includes(searchTerm)
    })

    console.log(searchTerm)
    return(
        <div className="container" style={{display: 'flex', flexDirection: 'column', gap: '24px'}}>
            <Input/>
            <div className="container">
                <Search onSearch={handleInputChange} val={searchTerm}/>
                <Posts items={filteredPosts}/>
            </div>
        </div>
    )
}


export default Main;