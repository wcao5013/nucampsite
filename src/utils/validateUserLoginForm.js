export const validateUserLoginForm = (values) =>{
    const errors = {}

    if (!values.username) {
        errors.username ='required'
    }

    else if(values.username.length < 6){
        errors.username = 'must be more 6 characters'
    }
    else if(values.username.length > 15){
        errors.username = 'must be less than 15 characters'
    }


    if (!values.password) {
        errors.password ='required'
    }
    else if(values.password.length < 8){
        errors.password = 'must be more than 8 characters'
    }

    return errors


}