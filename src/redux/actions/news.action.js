import axios from "axios"
import { Toastify } from "../../pages/App.js";

const getQueryString = async (queries)=>{
   
   const str = await Object.keys(queries).reduce((curr , next)=>{

      if(queries[next] === '') return curr

      return curr + `${next}=${queries[next]}&`
   },"")
   
   return str?.slice(0, -1);
}

export const fetchNews = (queries) => {
  return async (dispatch) => {
    try {
    //  let res = await axios().post("/cashBook/add_to_cashBook", data);
    console.log("Hey You are almost there", queries)

    const query_string = await getQueryString( queries )

    console.log( "query string" , query_string )

    let res = await axios.get(`https://hn.algolia.com/api/v1/search_by_date?${query_string}`);
    console.log( res )

    if( res.status === 200 ){
        
      dispatch({
        type: "new_page_load",
        payload: {
            data : res.data.hits,
            total_pages : res.data.nbPages,
            total_hits : res.data.nbHits
        }
      });

      Toastify("success", "Data Loaded Successfully!!");
    } else {
     
      dispatch({
        type: "error_occured",
        payload: {
            error : res.data.message
        }
      });

      Toastify("error", "Something Went Wrong!!");
    }
      
    } catch (error) {

      console.log(error)
      Toastify("error", error.message);
      dispatch({
        type: "error_occured",
        payload: {
            error : error.message
        }
      });
    }
  };
};
