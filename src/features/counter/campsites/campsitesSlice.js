import CAMPSITES from '../src/app/shared';

export const selectAllCampsites = () => {
    return CAMPSITES;
}

export const selectRandomCampsite = () => {
    return CAMPSITES[Math.floor(CAMPSITES.length * Math.random)];
}