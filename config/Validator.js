const yup = require('yup')

function validate(data) {
    const userSchema = yup.object().shape({
        username: yup.string().required("username must be filled").min(3).max(20),
        email: yup.string().email().required("email is required").min(3).max(50),
        password: yup.string().required("password is required").min(8).max(20),
    })
    return userSchema.validate(data);
}

//a validate function for schoolSchema will be written here and an async function written in schoolController

module.exports = {validate};
