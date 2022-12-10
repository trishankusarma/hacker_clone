import React from 'react'
import { styled } from '@mui/material/styles';
import DatePicker from './datePicker'
import Button from '@mui/material/Button'
import Box from '@mui/system/Box';

const CustomDate = ({ customStartDate , handleChangeStartDate , customEndDate , handleChangeEndDate , searchByCustomDate }) => {

    const Div = styled('div')(({ theme }) => ({
        ...theme.typography.div,
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(1),
        display : 'flex',
        marginTop : '50px',
        marginLeft : '10%'
    }));

  return (
    <Div >
        < Box sx={{ width : 150 , marginLeft : 3 }} >
            < DatePicker 
                    label='startDate' 
                    value={customStartDate} 
                    onChange={handleChangeStartDate} 
            />
        </Box>
        <Box sx={{ width : 150 , marginLeft : 5 }} >
            < DatePicker 
                    label='endDate' 
                    value={customEndDate}  
                    onChange={handleChangeEndDate} 
            />
        </Box>
        <Box sx={{ width : 150 , marginLeft : 2 , marginTop : 1  }} >
            < Button 
                    onClick={searchByCustomDate} 
                    variant = {'contained'}
            >
                Apply
            </Button>
        </Box>
    </Div>
  )
}

export default CustomDate