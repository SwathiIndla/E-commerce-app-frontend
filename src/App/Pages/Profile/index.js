import React, { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import { Button } from '@mui/material';
import AddressForm from '../../Components/Address/AddressForm';
import DisplayAddress from '../../Components/Address/DisplayAddress';

export default function Profile() {
  const [showAddressForm, setShowAddressForm] = useState(false);
  const data = [{
    additionalPhoneNumber: '',
    address: '5/768,Krishnagownapalli,Krishnagiri (dt)',
    addressType: 'Home',
    district: 'Krishnagiri (dt)',
    landmark: '',
    locality: 'Chennapalli(po), Shoolagiri(tk),',
    mobileNumber: '+919994898199',
    name: 'Dinesh Kumar Rajappa',
    pincode: '635117',
    state: 'Tamil Nadu',
  }];
  return (
    <div style={{ padding: '2rem' }}>
      {showAddressForm ? <AddressForm setShowAddressForm={setShowAddressForm} heading="Add New" /> : <Button type="button" variant="outlined" startIcon={<AddIcon />} onClick={() => setShowAddressForm(true)}>Add new address</Button>}
      {data.length > 0 ? (<DisplayAddress data={{ ...data[0] }} />) : ''}
    </div>
  );
}
