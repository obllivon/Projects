import React from 'react';
import  classes from '../../css/userPageStyle.module.css'
import PersonalPanel from './userPageComponents/PersonalPanel';
import Panel from './userPageComponents/Panel';
import BackGround from '../UI/BackGround';


function UserPage() {
    
    return (
        <section className={classes.user__Page}>
            <BackGround/>
            <div className='container'>
                <div className={classes.user__Page__inner}>
                <PersonalPanel/>
                <Panel/>
                </div>
                </div>  
        </section>
    );
}

export default UserPage;