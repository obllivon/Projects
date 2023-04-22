import React from 'react'
import style from '../../../css/addpage.module.css'

function addnice({children,...props}) {
  return <button className={style.btn} {...props}>{children}</button>
}

export default addnice