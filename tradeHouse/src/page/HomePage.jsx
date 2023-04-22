import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Footer from '../componenets/footer/Footer';
import FilterHome from '../componenets/homePageComponent/FilterHome';
import Homes from '../componenets/homePageComponent/homes/Homes';
import Newbuild from '../componenets/homePageComponent/homes/Newbuild';
import Rooms from '../componenets/homePageComponent/homes/Rooms';
import BackGround from '../componenets/UI/BackGround';
import stl from '../css/homePage.module.sass';
import { getHomeAction } from '../store/asyncAction/mainAction';

function HomePage() {
  const dispatch = useDispatch();
  const { homes } = useSelector((state) => state.main);

  useEffect(() => {
    dispatch(getHomeAction());
  }, []);

  const filteredHomes = homes?.filter((item) => item.type.title === 'Дом');
  const filteredNewbuilds = homes?.filter(
    (item) => item.type.title === 'Новостройка'
  );
  const filteredRooms = homes?.filter((item) => item.type.title === 'Квартира');

  return (
    <section className={stl.HomePage}>
      {/* <AddPage/> */}
      <BackGround />
      <FilterHome />
      <Homes data={filteredHomes} />
      <Rooms data={filteredRooms} />
      <Newbuild data={filteredNewbuilds} />
      <Footer />
    </section>
  );
}

export default HomePage;
