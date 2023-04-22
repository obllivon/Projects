import {Avatar, Button} from '@mui/material'
import React from 'react'
import classes from '../../css/header.module.css'
import  Logo  from '../../img/logo_project.svg'
import Panel from '../userPage/userPageComponents/Panel'
import {Link} from "react-router-dom";

function Header() {
  const auth = true

  return (
    <header className={classes.header}>
      <div className="container">
        <div className={classes.header__inner}>
          <div className={classes.logo}>
            <div >
             <img className={classes.logo_img} src={Logo} alt="" />
              </div>
            <h2>
              <strong>Trade House</strong>
            </h2>
          </div>
          <div className={classes.btns}>
            <Button className={classes.btn__add} component={Link} to={!auth ? "/post" : ""} style={{cursor: 'pointer'}}>Добавить объявление</Button>
            { auth ? (
              <button className={classes.btn__signUp} >Войти</button>
            ) : (  
              <Avatar
                sx={{
                  width: '50px',
                  height: '50px'
                }}
              />
            )}
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
