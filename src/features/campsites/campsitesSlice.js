import CAMPSITES from '../../app/shared/CAMPSITES';
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
    console.log("select all", state)    
    return state.campsites?.campsitesArray || [];
}


// export const selectRandomCampsite = () => {
//     return CAMPSITES[Math.floor(CAMPSITES.length * Math.random)];
// }

export const selectCampsiteById = (id) => (state) => {
    return state.campsites.campsitesArray.find((campsite) => campsite.id === parseInt(id));
    
};


export const selectFeaturedCampsite = (state) => {
    console.log("select feature", state)
    return state.campsites?.campsitesArray.find((campsite) => campsite.featured) || [];
    
};
