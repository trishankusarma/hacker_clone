import React from 'react'

const Footer = () => {

  const footer_Style = {
    width : '100%',
    textAlign : 'center',
    height : '5vh',
    marginTop : '2.5vh',
    transform : 'transalateY(-50%)'
  }

  return (
    <div
       style={ footer_Style }
    >
       Guidelines | FAQ | Lists | API | Security | Legal | Apply to YC | Contact
    </div>
  )
}

export default Footer