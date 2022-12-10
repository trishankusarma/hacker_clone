import React from 'react'
import Story from './Story'
import Comment from './Comment'
import Box from '@mui/system/Box'

const NewsIndivisual = (props) => {

  return (
    <Box>
        {
          props._news.title ? 
          < Story {...props} /> :
          < Comment {...props}  /> 
        }
    </Box>
  )
}

export default NewsIndivisual