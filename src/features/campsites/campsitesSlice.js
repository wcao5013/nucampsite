import CAMPSITES from '/Users/wancao/Documents/nucamp/NucampFolder/3-React/nucampsite/src/app/shared/CAMPSITES.js';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    campsitesArray: CAMPSITES
}

const campsitesSlice = createSlice({
    name: 'campsites',
    initialState
})

export const  campsitesReducer = campsitesSlice.reducer

export const selectAllCampsites = () => {
    return CAMPSITES;
}

// export const selectRandomCampsite = () => {
//     return CAMPSITES[Math.floor(CAMPSITES.length * Math.random)];
// }

export const selectCampsiteById = (id) => {
    return CAMPSITES.find((campsite) => campsite.id === parseInt(id));
};

export const selectFeaturedCampsite = () => {
    return CAMPSITES.find((campsite) => campsite.featured);
};