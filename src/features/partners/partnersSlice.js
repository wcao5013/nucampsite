import PARTNERS from '../../app/shared/PARTNERS'
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    partnersArray: PARTNERS
}

const partnersSlice = createSlice({
    name: 'partners',
    initialState
})

export const partnerReducer = partnersSlice.reducer

export const selectAllPartners = (state) => {
    return state.partners.partnersArray;
}

export const  selectFeaturedPartner = (state) => {
    return state.partners.partnersArray.find((partner) => partner.featured)  
}

// export const selectFeaturedCampsite = () => {
//     return CAMPSITES.find((campsite) => campsite.featured);
// };