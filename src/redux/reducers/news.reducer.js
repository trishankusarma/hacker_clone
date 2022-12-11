const initialState = {
    newsList : [],
    error : null,
    total_pages : 0,
    total_hits : 0
};

const news_reducer = (state = initialState, { type , payload })=>{
  switch (type) {

    case "new_page_load":
      state = {
        ...state,
        newsList : payload.data,
        total_pages : payload.total_pages,
        total_hits : payload.total_hits
      };
      break;
    
    case "error_occured":
      state = {
        ...state,
        error : payload.error
      };
      break;
    default:
      break;
  }

  return state;
};

export default news_reducer