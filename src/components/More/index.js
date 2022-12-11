import React from 'react'
import { Button } from '@mui/material'

const More = ({ page_no, offset }) => {
  return (
        <div>
          <Button>
              <a
                 href={`/?page_no=${ page_no }&offset=${ offset }`}
              >
                  More
              </a>    
          </Button>
       </div>
  )
}

export default More