import React from 'react'
import moment from 'moment'
import { styled } from '@mui/material/styles';
import './index.css'

const Story = ({ _news , index , _offset, isSearchPage }) =>{

    const Div = styled('div')(({ theme }) => ({
      ...theme.typography.div,
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(0.1),
    }));

    return (
      <Div>
        <div className='container'>
          <div className='wrapper'>
            <div className='num'> {isSearchPage?null:<div>{_offset+index+1}.</div>}</div>
            <div className='title'>	{_news.title}
                      <a href={_news.url} >
                        {_news.url 
                           ? 
                           <span>
                              ({_news.url?.replace('www.','')?.replace('https://','')?.split(/[/?#]/)[0]}) 
                              <span></span>
                            </span>
                        : null }
                      </a>
            </div>
          </div>
          <div className='points_container'>
            <div className='points_space'></div>
            <div className='content'>	
                 {_news.points} points from {_news.author} || { moment(_news.created_at).fromNow() } | hide | past | discuss
                
                 { _news.num_comments > 0 
                   ? <span> || { _news.num_comments } comment
                      {  _news.num_comments > 1 ? <span>s</span> : null }
                    </span> 
                   : null
                 }
            </div>
          </div>
        </div>
     </Div>
    )
 }

export default Story