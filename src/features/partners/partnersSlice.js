import PARTNERS from '../../app/shared/PARTNERS'

export const selectAllPartners = () => {
    return PARTNERS;
}

export const  selectFeaturedPartner = () => {
    return PARTNERS.find((partner) => partner.featured)  
}

// export const selectFeaturedCampsite = () => {
//     return CAMPSITES.find((campsite) => campsite.featured);
// };