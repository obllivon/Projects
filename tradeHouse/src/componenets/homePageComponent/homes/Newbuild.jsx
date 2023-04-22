import React from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import stl from '../../../css/homePage.module.sass';
import { setCategory } from '../../../store/slices/mainSlice';
import NewbuildCards from '../homeCard/NewbuildCards';
function Newbuild({ data }) {
  const dispatch = useDispatch();

  return (
    <div className={stl.Homes}>
      <div className="container">
        <div className={stl.title}>
          <span style={{ marginTop: '60px' }}>Новостройки</span>
          <NavLink
            to="/NewBuilds"
            className={stl.link}
            style={{ marginTop: '60px' }}
            onClick={() => dispatch(setCategory(1))}>
            Смотреть все
          </NavLink>
        </div>
        <div className={stl.homes__box}>
          {data?.slice(0, 8).map((item, key) => (
            <NewbuildCards
              key={key}
              image={item?.image}
              price={item?.price}
              title={item?.address}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Newbuild;
