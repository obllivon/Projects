import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import HomeCard from '../componenets/homePageComponent/homeCard/HomeCard';
import { getHomesByCategory } from '../store/asyncAction/mainAction';

export default function CategoryPage() {
  const dispatch = useDispatch();
  const { categoryName, data } = useSelector((state) => state.main);

  const selectTitle = () => {
    if (categoryName === 1) {
      return 'Новостройки';
    } else if (categoryName === 6) {
      return 'Дома';
    } else if (categoryName === 2) {
      return 'Квартиры';
    }
  };

  useEffect(() => {
    dispatch(getHomesByCategory(categoryName));
  }, []);

  return (
    <div>
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <span style={{ marginTop: '60px' }}>{selectTitle()}</span>
          <NavLink
            to="/"
            style={{
              marginTop: '60px',
              textDecoration: 'none',
              color: '#2B81DE',
            }}>
            Назад
          </NavLink>
        </div>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
          }}>
          {data?.map((item, key) => (
            <HomeCard
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
