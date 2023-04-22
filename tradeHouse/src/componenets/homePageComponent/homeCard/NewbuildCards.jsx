import React from 'react';
import stl from '../../../css/homePage.module.sass';
import bookmark from '../../../img/homePage/Bookmark.svg';
import { ReactComponent as Som } from '../../../img/userPage/Som.svg';
import NoPhotographyIcon from '@mui/icons-material/NoPhotography';

function OtherCard({ children }) {
  return <div className={stl.box}>{children}</div>;
}

function NewbuildCards({ title, image, price }) {
  const noPhoto =
    'https://upload.wikimedia.org/wikipedia/commons/3/3d/%D0%9D%D0%B5%D1%82_%D0%B8%D0%B7%D0%BE%D0%B1%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%B8%D1%8F.jpg';

  return (
    <div className={stl.home__card} style={{ marginTop: '20px' }}>
      <div
        className={stl.card_img}
        style={{
          background: `url(${image ? image : noPhoto}) no-repeat center/cover`,
        }}>
        {' '}
        <img src={bookmark} alt="" />
      </div>
      <div className={stl.som}>
        {' '}
        <span>{price && price}</span>
        <Som />
      </div>
      <div className={stl.boxParent}>
        <OtherCard>1-эт.дом</OtherCard>
        <OtherCard>100м²</OtherCard>
      </div>
      <p>{title?.slice(0, 100)}</p>
    </div>
  );
}

export default NewbuildCards;
