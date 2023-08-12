import CAMPSITES from '/Users/wancao/Documents/nucamp/NucampFolder/3-React/nucampsite/src/app/shared';

export const selectAllCampsites = () => {
    return CAMPSITES;
}

export const selectRandomCampsite = () => {
    return CAMPSITES[Math.floor(CAMPSITES.length * Math.random)];
}