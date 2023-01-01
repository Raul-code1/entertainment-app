import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import {GeneralCard} from "../../components"

import Wrapper from "../../helpers/wrappers/paginatedWrapper"
import { getGenreOrSearchData } from "../../features/genresAndSearch/genresAndSearchSlice"
import { useParams } from "react-router-dom"

const SearchPage = () => {


 const {type,filter}=useParams()

  const { page,genreOrSearchInputData:{results},isLoading,errorMessage }=useSelector((store)=>store.genresAndSearch)
  const dispatch=useDispatch()

 useEffect(() => {
   dispatch(getGenreOrSearchData({text:filter,path:type}))
 }, [page,type,filter])
 

  if (isLoading) {
    return <h2>Loading</h2>
  }

  if (results.length===0) {
    return <h2 className="section"  >No content found with this value: " {filter} "</h2>
  }
  
  if (errorMessage) {
    return <h2 className="section"  >{errorMessage}</h2>
    
  }

  return (
    <Wrapper className="section" >
        {results?.map((item)=>{
          if (item.media_type) {
            return <GeneralCard  spanCol={false} toSonType={item.media_type} key={item.id} {...item} />
          }
          return <GeneralCard  spanCol={false} toSonType={type} key={item.id} {...item} />
        })} 
    </Wrapper>
  )
}

export default SearchPage



