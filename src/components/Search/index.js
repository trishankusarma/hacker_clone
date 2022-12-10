import React from 'react'
import Box from '@mui/material/Box'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import { features_types , feature_list } from './features'

const SearchBy = ({ currentState , handleChange }) => {

  return (
    <Box >
       {
        feature_list.map((feature, index)=>(
          <FormControl key={index} sx={{ width : 150 , marginLeft : 10 , marginTop : 3 }}>
            <Select
              name={feature}
              value={currentState[feature]}
              label={feature}
              onChange={handleChange}
            >
              {
                features_types[feature].map((type, index)=>(
                  <MenuItem value={type} key={index}>{type}</MenuItem>
                ))
              }
            </Select>
        </FormControl>
        ))
       }
    </Box>
  );
}

export default SearchBy


