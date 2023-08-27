import { CAMPSITES } from '../../app/shared/CAMPSITES';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    campsitesArray: CAMPSITES
    
}
console.log(initialState)

const campsitesSlice = createSlice({
    name: 'campsites',
    initialState
})
console.log(campsitesSlice)

export const  campsitesReducer = campsitesSlice.reducer
console.log(campsitesReducer)

export const selectAllCampsites = (state) => {
    return state.campsites.campsitesArray;
}
console.log(selectAllCampsites())

// export const selectRandomCampsite = () => {
//     return CAMPSITES[Math.floor(CAMPSITES.length * Math.random)];
// }

export const selectCampsiteById = (id) => (state) => {
    return state.campsites.campsitesArray.find((campsite) => campsite.id === parseInt(id));
    
};
console.log(selectAllCampsites())

export const selectFeaturedCampsite = (state) => {
    return state.campsites.campsitesArray.find((campsite) => campsite.featured);
    console.log(selectFeaturedCampsite)
};
console.log(selectFeaturedCampsite())