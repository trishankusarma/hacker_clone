import React,{ useState, useEffect } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import NewsList from '../../components/NewsList'
import SearchBy from '../../components/Search'
import CustomDate from '../../components/customDate'
import { default_labels } from '../../components/Search/features'
import tagsForSearch from '../../components/Search/tagsForSearch'
import { useDispatch } from 'react-redux'
import { fetchNews } from '../../redux/actions'

const Home = () => {

  const dispatch = useDispatch()
  const [currentState, setCurrentState] = useState(default_labels)
  const [customStartDate, setCustomStartDate] = useState('')
  const [customEndDate, setCustomEndDate] = useState('')

  const tags = {
    page_no : 0,
    offset : 0
  }

  const handleChange = (e)=>{
     
    const { name , value } = e.target

    fetchData({ ...tags , ...currentState , [name] : value })

    setCurrentState({
       ...currentState,
       [name] : value
    })
  }

  const handleChangeStartDate = (e)=>{
     
    console.log( 'customStartDate' , e )
    setCustomStartDate( e ) 
  }

  const handleChangeEndDate = (e)=>{
     
    console.log( 'customEndDate' , e )
    setCustomEndDate( e )
  }

  const searchByCustomDate = async ()=>{

    console.log( new Date(customStartDate).getTime() , customEndDate )

    await fetchData({ 
         ...tags , 
         ...currentState ,
        customDate : `created_at_i>=${((new Date(customStartDate)).getTime())/1000},created_at_i<=${((new Date(customEndDate)).getTime()+24*60*60*1000)/1000}`
    })
  }

  const fetchData = async (tags)=>{

    console.log( tags )
      
    await dispatch( fetchNews({
      tags : tagsForSearch['Stories'][ tags['Stories'] ],
      numericFilters : tags.customDate ? tags.customDate : tagsForSearch['Time'][ tags['Time'] ],
      page : tags.page_no,
      hitsPerPage : 30
    }))
  } 

  useEffect( async() => {
    
    await fetchData({ ...tags , ...currentState })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  

  return (
    <div>
        <div>
            < Header />
        </div>
        <div>
             < SearchBy 
                 currentState = {currentState}
                 handleChange = {handleChange}
             />
             {
              currentState.Time === 'Custom range' ?
              < CustomDate 
                  customStartDate = {customStartDate} 
                  customEndDate = {customEndDate} 
                  handleChangeStartDate = {handleChangeStartDate}
                  handleChangeEndDate = {handleChangeEndDate}
                  searchByCustomDate = {searchByCustomDate}
              />:
              null
             }
             < NewsList
                 _offset={ tags.offset } 
                 isSearchPage = {true}
                 page_no={tags.page_no}
             />
        </div>  
        < div >
             < Footer />
        </div>
    </div>
  )
}

export default Home