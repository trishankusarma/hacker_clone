import React from 'react'
import moment from 'moment'
import { styled } from '@mui/material/styles';
import './index.css'

const Comment = ({_news }) => {
  
  const Div = styled('div')(({ theme }) => ({
    ...theme.typography.div,
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(0.1),
  }));


  return (
    <Div>
      <div className='container'>
        <div className='points_container'>
          <div className='content'>
               {_news.author} | { moment(_news.created_at).fromNow() } | parent | on : <a href={_news.story_url}>{_news.story_title}</a></div>
        </div>

        <div className='wrapper rectify'>
          <div className='num'></div>
          <div className='title' dangerouslySetInnerHTML={{ __html: _news.comment_text }} />	
        </div>
      </div>
    </Div>
  )
}

export default Comment