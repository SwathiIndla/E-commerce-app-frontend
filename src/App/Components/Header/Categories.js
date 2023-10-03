/* eslint-disable react/no-array-index-key */
/* eslint-disable max-len */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Link } from 'react-router-dom';
import { Skeleton } from '@mui/material';
import { categoriesImg } from '../../Data/data';
import { categoriesUrl } from '../../Environment/URL';

export function Categories(props) {
  const { images } = props;
  const [data, setData] = useState([]);

  useEffect(() => async () => {
    try {
      const options = {
        method: 'GET',
      };
      const response = await fetch(categoriesUrl, options);
      const responseJson = await response.json();
      const { categories } = responseJson;
      const mergedData = (categories.map((item) => {
        const filteredElement = categoriesImg.filter((e) => e.categoryName === item.categoryName)[0];
        return { ...filteredElement, ...item };
      }));
      setData(mergedData);
    } catch (err) {
      console.log(err);
    }
  }, []);
  return (
    <div>
      <div className="category-container">
        {
          data.length > 0
            ? data.map((item, index) => (<CategoryCard item={item} key={index} images={images} />
            ))
            : <Skeleton variant="rounded" height={80} width="100%" />
        }
      </div>
    </div>
  );
}

export function CategoryCard(props) {
  const [openMenu, setOpenMenu] = React.useState(false);
  const { item, images } = props;
  const isMobile = useMediaQuery('(max-width:768px)');

  const handleOPen = () => {
    setOpenMenu(true);
  };

  const handleClose = () => {
    setOpenMenu(false);
  };

  return (
    <Link to={`/${(item.categoryName).toLowerCase()}/${item.categoryId}`} className="category-links">
      <div
        className="category-card-category-container"
        onMouseEnter={handleOPen}
        onMouseLeave={handleClose}
        style={{ width: 'fit-content' }}
      >
        <div className="category-card">
          {images && <img src={item.img} alt={item.categoryName} loading="lazy" />}
          <h5 className="item-title">{item.categoryName}</h5>
        </div>
        {item.childCategories.length > 0 && !isMobile && openMenu
          && (
          <div className="dropdown">
            <ul className="dropdown-menu" onMouseEnter={handleOPen}>
              {item.childCategories.map((ele, index) => (
                <li className="dropdown-item" onClick={handleClose} id={ele.categoryId} key={index}>
                  {ele.categoryName.replace(/_/g, ' ')}
                  {
                    ele.childCategories.length > 0 && (
                      <ul className="inner-menu">
                        {ele.childCategories.map((childcategory) => (<li>{childcategory.categoryName}</li>))}
                      </ul>
                    )
                  }
                </li>
              ))}
            </ul>
          </div>
          )}

      </div>
    </Link>
  );
}
