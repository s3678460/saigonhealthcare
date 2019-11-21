const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateSubmitInput(data) {
    let errors = {};

    //Convert all the null value or undifined value into null string
    data.name = !isEmpty(data.name) ? data.name : '';
    data.email = !isEmpty(data.email) ? data.email : '';
    data.gender = !isEmpty(data.gender) ? data.gender : '';
    data.phone = !isEmpty(data.phone) ? data.phone : '';
    data.addressNumber = !isEmpty(data.addressNumber) ? data.addressNumber : '';
    data.ward = !isEmpty(data.ward) ? data.ward : '';
    data.district = !isEmpty(data.district) ? data.district : '';
    data.city = !isEmpty(data.city) ? data.city : '';

    data.dob = !isEmpty (data.dob) ? data.dob : '';
    data.checkin = !isEmpty (data.checkin) ? data.checkin :'';
    
    if (Validator.isEmpty(data.name)){
        errors.name = 'Bạn chưa điền tên của bạn';
    }

    if (Validator.isEmpty(data.gender)){
        errors.gender = 'Chọn giới tính';
    }

    if (!Validator.isEmail(data.email)){
        errors.email = 'Email của bạn không hợp lệ';
    }
    if (Validator.isEmpty(data.email)){
        errors.email = 'Bạn chưa điền Email của bạn';
    }

    if (Validator.isEmpty(data.phone)){
        errors.phone = 'Bạn chưa điền số điện thoại của bạn';
    }

    if (Validator.isEmpty(data.addressNumber)){
        errors.addressNumber = 'Bạn chưa điền số nhà của bạn';
    }

    if (Validator.isEmpty(data.ward)){
        errors.ward = 'Bạn chưa điền phường của bạn';
    }

    if (Validator.isEmpty(data.district)){
        errors.district = 'Bạn chưa điền quận của bạn';
    }

    if (Validator.isEmpty(data.city)){
        errors.city = 'Bạn chưa điền thành phố của bạn';
    }

    if (Validator.isEmpty(data.dob)){
        errors.dob = 'Bạn chưa chọn ngày tháng năm sinh của bạn';
    }

    return {
        errors,
        isValid: isEmpty(errors)
    }
}