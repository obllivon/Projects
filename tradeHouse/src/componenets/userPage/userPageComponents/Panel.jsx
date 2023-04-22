import { Avatar } from '@mui/material'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import classes from '../../../css/userPageStyle.module.css'
import avatar from '../../../img/userPage/avatar.png'
import { domAction } from '../../../store/asyncAction/userPageAction'
import PropTypes from 'prop-types'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import { ReactComponent as Location } from '../../../img/userPage/Location.svg'
import { ReactComponent as Som } from '../../../img/userPage/Som.svg'
import { AddBox } from '@mui/icons-material'
function TabPanel({ children, value, index, ...other }) {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <div>{children}</div>}
    </div>
  )
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`
  }
}

function BasicTabs() {
  const [value, setValue] = useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }
  const { main } = useSelector(state => state.userPage)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(domAction())
  }, [])
  console.log(main)

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider', width: '558px' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          textColor="primary"
          indicatorColor="secondary"
          aria-label="basic tabs example"
          sx={{
            '& .MuiButtonBase-root': {
              fontFamily: 'Rubik',
              fontStyle: 'normal',
              fontWeight: 500,
              fontSize: '20px',
              lineHeight: '24px',
              color: '#1D1C1C'
            },
            '& .MuiTabs-flexContainer': {
              justifyContent: 'space-between'
            }
          }}
        >
          <Tab label="Мои объявления" {...a11yProps(0)} />
          <Tab label="Черновики" {...a11yProps(1)} />
          <Tab label="Архивы" {...a11yProps(2)} />
        </Tabs>
      </Box>

      <TabPanel value={value} index={0}>
        <Box
          sx={{
            mt: '20px',
            width: '793px',
            height: '271px',
            display: 'flex',
            justifyContent: 'space-between'
          }}
        >
          <Box
            sx={{
              width: '427px',
              height: '270px',
              background: `url(${main?.image}) no-repeat center/cover`,
              borderRadius: '15px',
              display: 'flex',
              justifyContent: 'space-between',
              position:'relative',
              '& .basic__panel_img_left': {
                background: 'rgba(73, 72, 72, 0.4)',
                backdropFilter: 'blur(6.5px)',
                width: '122px',
                height: '100%',
                borderTopLeftRadius: '15px',
                borderBottomLeftRadius: '15px'
              },
              '& .basic__panel_img_right': {
                background: 'rgba(73, 72, 72, 0.4)',
                backdropFilter: 'blur(6.5px)',
                width: '122px',
                height: '100%',
                borderBottomRightRadius: '15px',
                borderTopRightRadius: '15px'
              },
              '& button': {
                position:'absolute',
                bottom:'7px',
                left:'9px',
                fontFamily: 'Rubik',
                fontStyle: 'normal',
                fontWeight: '400',
                fontSize: '16px',
                color: '#676262',
                width: '202px',
                height: '31px',
                background: '#FFFFFF',
                border: '1px solid #AFAFAF',
                borderRadius: '10px',
                cursor:'pointer'
              }
            }}
          >
            <div className="basic__panel_img_left"></div>
            <div className="basic__panel_img_right"></div>
            <button>Посмотреть все фото</button>
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              '& .basic__panel_img2': {
                borderRadius: '15px',
                width: '168px',
                height: '169px'
              },
              '& .basic__panel_img3': {
                borderRadius: '15px',
                width: '168px',
                height: '89px'
              }
            }}
          >
            <img src={main?.image} alt="" className="basic__panel_img2" />
            <img src={main?.image} alt="" className="basic__panel_img3" />
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              '& .basic__panel_img4': {
                borderRadius: '15px',
                width: '168px',
                height: '208px'
              }
            }}
          >
            <img src={main?.image} alt="" className="basic__panel_img4" />
            <Box
              sx={{
                width: '168px',
                height: '48px',
                padding: '0 6px 0 9px',
                border: '2px solid #1C2835',
                borderRadius: '15px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                '& span': {
                  fontSize: '14px',
                  color: '#1C2835'
                }
              }}
            >
              <Location />
              <span>Показать на карте</span>
            </Box>
          </Box>

        </Box>
        <Box sx={{
            mt:'26px',
            minHeight:'70px',
            display:'flex',
            justifyContent:'space-between',
            borderBottom:'1px solid #A5A1A1'
        }}>
            <Box sx={{
                minWidth: '333px',
                height: '55px',
                display:'flex',
                flexDirection:'column',
                justifyContent:'space-between',

                '& h1':{
                    fontSize:'24px',
                    fontWeight:500,
                    color:'#2F2F2F'
                },
                '& span':{
                    fontSize:'16px',
                    color:'#777777',
                }
            }}>
                <h3>1 -этажный дом, 100 м²</h3>
                <span>Бишкек, улица Пушкина, дом Колатушкина</span>
            </Box>
            <Box sx={{
                display:'flex',
                alignItems:'center',
                height:'24px'
            }}>
            <strong>15 000 000</strong><Som/>
            </Box>
        </Box>
        <Box sx={{
            mt:'26px',
            borderBottom:'1px solid #A5A1A1',
            minHeight:'161px',
            pb:'26px',
            '& span':{
                fontSize:'24px',
                color:'#2F2F2'
            },
            '& h6':{
                mt:'4px',
                fontSize:'15px',
                color:'#5C5C5C'
            },
            '& p':{
                mt:'10px',
                fontSize:'16px',
                color:'#313131',
            },
            
        }}>
            <span> <strong>Описание</strong> </span>
            <h6>Изменено:  26.01.2023</h6>
            <p>В городе Бишкек, на улице Пушкина продается 1-этажный элитный дом. Дом комфорт класса.В дом проведены теплые полы и выполнена обработка стен под white box. Дом сдан ПСО, можно начинать ремонт. Данный дом сквозной, отличный вариант для жилья или сдачи.</p>
        </Box>

      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
    </Box>
  )
}

function Panel() {
  return (
    <div className={classes.panel__info}>
      <div className={classes.panel__info__person}>
        <span>Нишанов Омурбек</span>
        <Avatar
          alt="Remy Sharp"
          src={avatar}
          sx={{ width: '48px', height: '48px' }}
        />
      </div>
     <Box sx={{
        width:'793px'
     }}>
     <BasicTabs />
     </Box>
    </div>
  )
}

export default Panel
