import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import stl from '../../../css/homePage.module.sass';
import { setCategory } from '../../../store/slices/mainSlice';
import HomeCard from '../homeCard/HomeCard';
function Homes({ data }) {
  const dispatch = useDispatch();
  return (
    <div className={stl.Homes}>
      <div className="container">
        <div className={stl.title}>
          <span>Дома</span>
          <Link
            to="/Homes"
            className={stl.link}
            onClick={() => dispatch(setCategory(6))}>
            Смотреть все
          </Link>
        </div>
        <div className={stl.homes__box}>
          {data?.slice(0, 8).map((item) => (
            <HomeCard
              key={item.id}
              price={item.price}
              title={item?.address}
              image={item?.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Homes;
