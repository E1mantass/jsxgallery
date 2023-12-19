
const Search = ({val, onSearch,...props})=>{
    return(
        <input className="form-control"
        value={val}
        onChange={onSearch}
        placeholder="Post Name"/>
    )
}

export default Search;