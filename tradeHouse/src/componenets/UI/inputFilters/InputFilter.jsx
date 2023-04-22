import React from 'react'
import stl from '../../../css/homePage.module.sass'
function InputFilter({ name, placehold,cl,...props }) {
  return (
    <input  className={`${stl.inputFilter} ${cl}`} {...props} placeholder={placehold} name={name} />
  )
}

export default InputFilter
