/* eslint-disable no-unused-vars */
/* eslint-disable react/no-array-index-key */
/* eslint-disable max-len */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Link } from 'react-router-dom';
import { Box, CircularProgress } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
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
            : <Box height="10vh" textAlign="center" width="100vw"><CircularProgress /></Box>
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
    <div
      className="category-card-category-container"
      onMouseEnter={handleOPen}
      onMouseLeave={handleClose}
      style={{ width: 'fit-content' }}
    >
      <div className="category-card">
        <Link to={`/${(item.categoryName).toLowerCase()}?cid=${item.categoryId}`} className="category-links">
          {images && <img src={item.img} className="category-img" alt={item.categoryName} loading="lazy" />}
        </Link>
        {item.childCategories.length > 0 ? (
          <h5 className="item-title" onClick={() => setOpenMenu((prev) => !prev)}>
            {item.categoryName}
            <span>
              {!openMenu && <KeyboardArrowDownIcon className="dropdown-arrow-icon" fontSize="small" />}
              {openMenu && <KeyboardArrowUpIcon className="dropdown-arrow-icon" fontSize="small" />}
            </span>
          </h5>
        )
          : (
            <Link to={`/${(item.categoryName).toLowerCase()}?cid=${item.categoryId}`} className="category-links">
              <h5 className="item-title">
                {item.categoryName}
              </h5>
            </Link>
          )}
      </div>
      {item.childCategories.length > 0 && openMenu
          && (
          <div className="dropdown">
            <ul className="dropdown-menu" onMouseEnter={handleOPen}>
              {item.childCategories.map((ele, index) => (
                ele.childCategories.length > 0 ? (
                  <li className="dropdown-item" onClick={handleClose} id={ele.categoryId} key={index}>
                    {ele.categoryName.replace(/_/g, ' ')}
                    <ul className="inner-menu">
                      {ele.childCategories.map((childcategory) => (
                        <Link to={`/${(childcategory.categoryName).toLowerCase()}?cid=${item.categoryId}`} className="category-links">
                          <li>{childcategory.categoryName}</li>
                        </Link>
                      ))}
                    </ul>
                  </li>
                )
                  : (
                    <Link to={`/${(ele.categoryName.replace(/_/g, ' ')).toLowerCase()}?cid=${item.categoryId}`} key={index} className="category-links">
                      <li className="dropdown-item" onClick={handleClose} id={ele.categoryId}>
                        {ele.categoryName.replace(/_/g, ' ')}
                      </li>
                    </Link>
                  )
              ))}
            </ul>
          </div>
          )}

    </div>
  );
}
