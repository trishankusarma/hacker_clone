import React,{useState, useEffect} from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import NewsList from '../../components/NewsList'
import More from '../../components/More'
import { useDispatch } from 'react-redux'
import { fetchNews } from '../../redux/actions'
import queryString from 'query-string'

const Home = () => {

  const dispatch = useDispatch()
  const [ page_info , set_page_info ] = useState({
    page_no : 0,
    offset : 0
  })

  const fetchData = async ( page_no )=>{
      
    await dispatch( fetchNews({
      tags : 'story',
      page : page_no ,
      hitsPerPage : 30
    }))
  } 

  useEffect(() => {

    const { page_no , offset } =  queryString.parse(window.location.search)

    set_page_info({
          page_no : page_no ? parseInt( page_no ) : 0,
          offset : offset ? parseInt( offset ) : 0
    })

    return async () => {
        await fetchData( page_no ? parseInt( page_no ) : 0 )
    }
  }, [])

  return (
    <div>
        <div>
            < Header />
        </div>
        <div>
             < NewsList _offset={page_info.offset} page_no={page_info.page_no}/>
             < More page_no={page_info?.page_no+1} offset = {(page_info?.page_no+1)*30} />
        </div>  
        < div >
             < Footer />
        </div>
    </div>
  )
}

export default Home