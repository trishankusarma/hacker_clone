import React from 'react'
import { useSelector } from 'react-redux'
import NewsIndivisual from './NewsIndivisual'
import styled from '@mui/material/styles/styled';
import Box from '@mui/system/Box';
import Button from '@mui/material/Button';

const NewsList = ({ _offset , isSearchPage }) => {

  const news = useSelector((state) => state.news)

  const Div = styled('div')(({ theme }) => ({
    ...theme.typography.div,
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(1),
  }));

  return (
    <Div >
          {
             <Button variant={"contained"} size="small">
                {news?.total_hits} results
             </Button>
          }
          {
            news?.newsList?.map((_news, index)=>(
                < NewsIndivisual 
                     key = {index} 
                     index = {index}
                     _news = {_news}  
                     _offset = {_offset}
                     isSearchPage = {isSearchPage}
                />
            ))
          }
          {
            <Box>
                <Button variant={"contained"} size="small">1</Button> of <Button>{news?.total_pages} pages</Button>
            </Box>
          }
    </Div>
  )
}

export default NewsList