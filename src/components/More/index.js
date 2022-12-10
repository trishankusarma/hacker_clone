import React from 'react'

const More = ({ page_no, offset }) => {
  return (
        <div>
          <button>
              <a
                 href={`http://localhost:3000/?page_no=${ page_no }&offset=${ offset }`}
              >
                  More
              </a>    
          </button>
       </div>
  )
}

export default More