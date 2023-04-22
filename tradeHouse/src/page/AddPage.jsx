import React, {useEffect, useRef, useState} from 'react'
import style from '../css/addpage.module.css'
import { ReactComponent as Key } from '../img/pageadd/Key.svg'
import { ReactComponent as Cloak } from '../img/pageadd/Cloak.svg'
import { ReactComponent as Home } from '../img/pageadd/Home.svg'
import { ReactComponent as House } from '../img/pageadd/House.svg'
import { ReactComponent as Apartment } from '../img/pageadd/Apartment.svg';
import Map from "../componenets/Map/Map.tsx";

function AddPage() {
const [buyOrPay, setBuyOrPay] = useState('');
  const [type, setType] = useState('');
  const [street, setStreet] = useState('');
  const [contacts, setContacts] = useState('');
  const [phone, setPhone] = useState('');
  const [floor, setFloor] = useState('');
  const [rooms, setRooms] = useState('');
  const [square, setSquare] = useState(['', '']);
  const [height, setHeight] = useState('');
  const [sanusel, setSanusel] = useState('');
  const [window, setWindow] = useState('');
  const [image, setImage] = useState(null);
  const [video, setVideo] = useState('');
  const [description, setDescription] = useState('');


  const input = document.querySelector('.ymaps-2-1-79-searchbox-input__input');

  // useEffect(() => {
  //   console.log({
  //     buyOrPay,
  //     type,
  //     address: street,
  //     phone,
  //     floor,
  //     rooms,
  //     square,
  //     height,
  //     sanusel,
  //     window,
  //     image,
  //     video,
  //     description
  //   });
  // }, [
  //   buyOrPay,
  //   phone,
  //   street,
  //   streetNumber,
  //   type,
  //   floor,
  //   rooms,
  //   square,
  //   height,
  //   sanusel,
  //   window,
  //   image,
  //   video,
  //   description
  // ]);

  const onFocus = ({target}) => {
    if (!!input) {
      input.focus();
      input.blur();
      target.focus()
    }
    setStreet(target.value);
  };

  useEffect(() => {
    if (!!input) {
      input.value = street;
      console.log(input.value);
    }
  }, [street, input]);
  return (
    <div className='container'>
      <div className={style.quest}>
        <h1>Новое объявление</h1>
        <button className={buyOrPay === 'продать' ? style.btn : style.btn2} onClick={() => setBuyOrPay('продать')}><Key/>продать</button>
        <button className={buyOrPay === 'сдать' ? style.btn : style.btn2} style={{marginLeft: '60px'}} onClick={() => setBuyOrPay('сдать')}><Cloak/>сдать</button>
      </div>
      <div className={style.houseType}>
        <h1>Тип недвижимости</h1>
      <div className={style.chooseHouse}>
        <button onClick={() => setType('Квартиры')} className={type === 'Квартиры' ? style.btn : style.btn2}><Apartment/>Квартиры</button>
        <button onClick={() => setType('Новостройки')} className={type === 'Новостройки' ? style.btn : style.btn2}><House/>Новостройки</button>
        <button onClick={() => setType('Дом')} className={type === 'Дом' ? style.btn : style.btn2}> <Home/>Дом</button>
      </div>
      </div>
      <div className={style.houseType}>
        <h1>Тип недвижимости</h1>
        <div className={style.chooseHouse}>
          <button className={style.trip}>
            <Apartment />
            Квартиры
          </button>
          <button className={style.trip2}>
            <House />
            Новостройки
          </button>
          <button className={style.trip}>
            <Home />
            Дом
          </button>
        </div>
      </div>
      <div>
       <div>
          <h1 style={{marginTop: '60px', marginBottom: '20px'}}>Расположение</h1>
          <div className={style.addInp}>
            <input onChange={onFocus} value={street} className={style.adressInp} placeholder='напишите адрес'></input>
          </div>
         <div style={{ borderRadius: 10, overflow: "hidden" }}>
           <Map/>
         </div>
          <div className={style.Contacts} style={{marginTop: '50px', marginBottom: '20px'}}><h1>Контакты</h1>
            <p>Размещает объявление</p>
            <div className={style.HumanChoose}>
              <button style={{ width: 105, height: 45 }} onClick={() => setContacts('Собственник')} className={contacts === 'Собственник' ? style.btn : style.btn2}>Собственник</button>
              <button style={{ width: 105, height: 45, marginLeft: 30 }} onClick={() => setContacts('Агент')} className={contacts === 'Агент' ? style.btn : style.btn2}>Агент</button>
            </div>
            <div className={style.numberPhone}><p>номер телефона</p></div>
             <div>
             <input onChange={({target}) => setPhone(target.value)} value={phone} className={style.Number} type="tel" placeholder="Телефон"/>
            </div>
          </div>
          <div className={style.KvartInfo}><h1 style={{marginBottom: '20px', marginTop: '60px'}}>O Квартире</h1>
            <p style={{marginTop: '20px', marginBottom: '15px'}}>Этаж</p>
            <input className={style.floorInp} onChange={({target}) => setFloor(target.value)} value={floor} type='number'/>
            <div className={style.roomInfo}><p>Комнат</p>
             <div className={style.hentaibtn}>
               {
                 new Array(5).fill(null).map((e, i) => (
                   <button key={i} style={{ width: 66, height: 45 }} onClick={() => setRooms(String(i+1))} className={rooms === String(i+1) ? style.btn : style.btn2}>{i+1}</button>
                 ))
               }
              <button style={{ width: 66, height: 45 }} onClick={() => setRooms('6+')} className={rooms === '6+' ? style.btn : style.btn2}>6+</button>
             </div>
             <div className={style.miles}><p>Площадь</p>
              <div className={style.miles2}>
                <p>Общая</p>
                <input type="text" onChange={({target}) => setSquare([target.value, square[1]])} value={square[0]}/></div>
              <div className={style.miles3}>
                <p>Жилая</p>
                <input type="text" onChange={({target}) => setSquare([square[0], target.value ])} value={square[1]}/></div>
             </div>
             <div className={style.heightFloor}>
              <p style={{marginTop: '40px'}}>Высота потолков</p>
              <input className={style.heightInput} onChange={({target}) => setHeight(target.value)} value={height}/>
             </div>
             <div className={style.Toilet}><p style={{marginTop: '40px'}}>Санузел</p>
             <div className={style.Toilets}>
               <input type="checkbox" onChange={() => setSanusel('Совмещенный')} checked={sanusel === 'Совмещенный'}/>
               <p>Совмещенный</p>
              </div>
              <div className={style.Toilets}>
                <input type="checkbox" onChange={() => setSanusel('Раздельный')} checked={sanusel === 'Раздельный'}/>
                <p>Раздельный</p>
              </div>
             </div>
             <div className={style.Window}>
              <p>Окна</p>
              <div className={style.Window1}>
                <input type="checkbox" onChange={() => setWindow('Во двор')} checked={window === 'Во двор'}/>
                <p>Во двор</p>
              </div>
              <div className={style.Window2}>
                <input type="checkbox" onChange={() => setWindow('На Улицу')} checked={window === 'На Улицу'}/>
                <p>На Улицу</p>
              </div>
             </div>
            </div>
          <div className={style.Photo} style={{marginTop: '60px'}}>
            <h1>Фотографии</h1>
            <input type='file' onChange={({target}) => setImage(target.files[0])} className={style.PhotoInp}/>
          </div>
          <div className={style.Video} style={{marginTop: '60px'}}>
              <h1>Видео</h1>
              <input type="url" onChange={({target}) => setVideo(target.value)} value={video} className={style.VideoInp}/>
          </div>
          <div className={style.information} style={{marginTop: '60px'}}>
            <h1>Описание</h1>
            <textarea className={style.TextArea} onChange={({target}) => setDescription(target.value)} value={description} name='itaksoidet' id='1' cols="50" rows="10"></textarea>
          </div>
          </div>
       </div>
       <div className={style.AddInformation}>
       <button className={style.Add}><span>опубликовать</span></button></div>
      </div>
    </div>
  );
              }

export default AddPage;
