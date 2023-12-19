import { useState } from "react"
import GalleryData from "../../data/GalleryData"

const Input = (props)=>{
    const [propsData, setPropsData] = useState({
        'title':'',
        'source':''
    })
    const handleChange = (event)=>{
        setPropsData(
            {
                ...propsData,
                [event.target.name]:event.target.value
            }
        )
    }
    const submitHandle = (e) => {
        e.preventDefault();
    
        const newData = {
          id: GalleryData.length + 1,
          title: propsData.title,
          source: propsData.source,
        };
    
        GalleryData.push(newData);
    
        setPropsData({
          title: "",
          source: "",
        });

        console.log("Submitted Data:", newData);
      };

    const [formVisible, setFormVisible] = useState(false);
    const toggleForm = () => {
        setFormVisible(!formVisible);
    };

    return(
        <div className="container" style={{display:'flex', flexDirection:'column', alignItems: "center"}}>
            <button className="btn btn-primary" onClick={toggleForm}>Toggle Form</button>
            <form className="form" style={{ display: formVisible ? 'flex' : 'none', flexDirection: 'column', alignItems: 'center'}} onSubmit={submitHandle}>
                <div className="container" style={{display: 'flex', flexDirection: 'row', gap: '12px'}}>
                    <div className="form-group">
                        <input type="text" name="title" placeholder="Photograph Title" className="m-1 form-control" onChange={handleChange} value={propsData.title}/>
                    </div>
                    <div className="form-group">
                        <input type="text" name="source" placeholder="Image Source" className="m-1 form-control" onChange={handleChange} value={propsData.source}/>
                    </div>
                </div>
                <div className="form-group">
                    <button type="submit" className="btn btn-success">Saugoti</button>
                </div>
            </form>
        </div>
    )
}

export default Input;