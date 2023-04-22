import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import stl from '../../../css/homePage.module.sass';
import { setCategory } from '../../../store/slices/mainSlice';
import RoomCard from '../homeCard/RoomsCard';
function Rooms({ data }) {
  const dispatch = useDispatch();
  return (
    <div className={stl.Homes}>
      <div className="container">
        <div className={stl.title}>
          <span style={{ marginTop: '60px' }}>Квартиры</span>
          <Link
            to="/Rooms"
            className={stl.link}
            style={{ marginTop: '60px' }}
            onClick={() => dispatch(setCategory(2))}>
            Смотреть все
          </Link>
        </div>
        <div className={stl.homes__box}>
          {data?.length > 7
            ? data
                ?.slice(0, 8)
                .map((item, key) => (
                  <RoomCard
                    key={key}
                    image={item?.image}
                    price={item?.price}
                    title={item?.address}
                  />
                ))
            : data?.map((item, key) => (
                <RoomCard
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

export default Rooms;
