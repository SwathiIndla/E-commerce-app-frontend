import React from 'react';
import DoneIcon from '@mui/icons-material/Done';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import './index.css';

export default function CheckOut() {
  const email = localStorage.getItem('customerEmail');

  return (
    <div className="checkout-page">
      <Header />
      <div className="checkout-page-inner-container">
        <div className="contents-container">
          <div className="checkout-page-sub-containers">
            <div><span className="title-num">1</span></div>
            <div>
              <div className="checkout-titles">
                {' '}
                LOGIN
                {' '}
                <DoneIcon color="success" fontSize="inherit" sx={{ fontWeight: '700', height: '20px' }} />
              </div>
              <p className="email">{email}</p>
            </div>
          </div>
          <div className="checkout-page-sub-containers">
            <div><span className="title-num">1</span></div>
            <div>
              <div className="checkout-titles">
                {' '}
                DELIVERY ADDRESS
                {' '}
                <DoneIcon color="success" fontSize="inherit" sx={{ fontWeight: '700', height: '20px' }} />
              </div>
              <div />
            </div>
          </div>
          <div className="checkout-page-sub-containers">
            <div><span className="title-num">1</span></div>
            <div>
              <div className="checkout-titles">
                {' '}
                ORDER SUMMARY
                {' '}
                <DoneIcon color="success" fontSize="inherit" sx={{ fontWeight: '700', height: '20px' }} />
              </div>
              <p className="email">{email}</p>
            </div>
          </div>
        </div>

      </div>
      <Footer />
    </div>
  );
}
