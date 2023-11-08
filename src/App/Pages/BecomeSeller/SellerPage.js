import React from 'react';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import NewFeature from '../NewFeature';

export default function SellerPage() {
  return (
    <div>
      <Header />
      <NewFeature heading="Seller Functionalities" />
      <Footer />
    </div>
  );
}
