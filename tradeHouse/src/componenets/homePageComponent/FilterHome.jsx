import React from 'react';
import stl from '../../css/homePage.module.sass';
import BtnFIlter from '../UI/btnFilter/BtnFIlter';
import InputFilter from '../UI/inputFilters/InputFilter';
import { ReactComponent as Search } from '../../img/homePage/Search.svg';
import { ReactComponent as SearchWhite } from '../../img/homePage/SearchWhite.svg';
const btns = ['Купить', 'Снять', 'Продать', 'Сдать'];

function FilterHome() {
  return (
    <div className={stl.filter}>
      <div className="container">
        <div className={stl.filter__inner}>
          <div className={stl.btns}>
            {btns.map((item, i) => (
              <BtnFIlter key={i}>{item}</BtnFIlter>
            ))}
          </div>
          <div className={stl.until__filters}>
            <span>Цена</span>
            <div className={stl.filters}>
              <InputFilter type={'number'} placehold={'от'} />
              <InputFilter type={'number'} placehold={'До'} />
              <InputFilter
                placehold={'Тип недвижимости'}
                cl={stl.inputFilter__longer}
              />
              <InputFilter placehold={'Район'} cl={stl.inputFilter__longer} />
              <InputFilter
                placehold={'Количество комнат'}
                cl={stl.inputFilter__longer} 
              />
            </div>
          </div>
        </div>
        <div className={stl.btns__search}>
          <button className={stl.btn__search1}>
            <Search />
            <span>Показать на карте</span>
          </button>
          <button className={stl.btn__search2}>
            <SearchWhite />
            <span>Показать 218 результатов</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default FilterHome;
