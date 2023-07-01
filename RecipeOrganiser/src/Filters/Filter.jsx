import { useContext } from "react"
import { DataContext } from "../Context/DataContextProvider"

export const Filter =()=>{
    const {setSearch,search,sort,setSort} = useContext(DataContext);
    const searchHandler = (e)=>{
        setSearch(e.target.value);
    }
    console.log(sort);
    const sortHandler = (e)=>{
        const {name,value} = e.target;
        setSort(value);
    }
    return(
        <div>
            <input placeholder="search something" onChange={(e)=>searchHandler(e)} value={search}/>
            <div>
                <p>Filters : </p>
                <lable>
                <input type="radio" name="rad" onChange={(e)=>sortHandler(e)} value="name"/>
                Name
                </lable>
                <lable>
                <input type="radio" name="rad" onChange={(e)=>sortHandler(e)} value="ingredients"/>
                Ingredients
                </lable>
                <lable>
                <input type="radio" name="rad" onChange={(e)=>sortHandler(e)} value="cuisine"/>
                cuisine
                </lable>
                
            </div>
        </div>
    )
}