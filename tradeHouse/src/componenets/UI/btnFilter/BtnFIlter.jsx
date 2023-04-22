import React from 'react'
import stl from '../../../css/btn.module.css'
function BtnFIlter({children,...props}) {
  return <button className={stl.btn} {...props}>{children}</button>
}

export default BtnFIlter