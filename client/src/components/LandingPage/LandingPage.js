import React, { Component } from "react";
import "./LandingPage.css";
import logo from "../NavBar/logo-1.png";
import { Link } from "react-router-dom";
import PropsTypes from "prop-types";
import { connect } from "react-redux";
import { submitForm } from "../../actions/submitActions";
import classnames from "classnames";
import DayPicker, { DateUtils } from "react-day-picker";
import "react-day-picker/lib/style.css";
import DayPickerInput from "react-day-picker/DayPickerInput";
import dateFnsFormat from 'date-fns/format';
import dateFnsParse from 'date-fns/parse';
class LandingPage extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      phone: "",
      email: "",
      addressNumber: "",
      ward: "",
      district: "",
      city: "",
      dob: "",
      selectedDay: undefined,

      errors: {}
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.handleDayChange = this.handleDayChange.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const clientData = {
      name: this.state.name,
      phone: this.state.phone,
      email: this.state.email,
      addressNumber: this.state.addressNumber,
      ward: this.state.ward,
      district: this.state.district,
      city: this.state.city,
      dob: this.state.dob
    };

    this.props.submitForm(clientData, this.props.history);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  handleDayChange(day) {
    var date = day.toString();
    this.setState({ 
      dob:date
      
    
    });
    console.log(this.state.dob)
  }

  parseDate(str, format, locale) {
    const parsed = dateFnsParse(str, format, new Date(), { locale });
    if (DateUtils.isDate(parsed)) {
      return parsed;
    }
    return undefined;
  }
  
   formatDate(date, format, locale) {
    return dateFnsFormat(date, format, { locale });
  }

  render() {
    const { errors } = this.state;

    const dob = this.state.dob;

    const FORMAT = 'dd/MM/yyyy';


    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-sm-9 col-md-7 col-lg-9 mx-auto">
              <div className="card card-signin my-5">
                <div className="card-body">
                  <h5 className="card-title text-center">
                    <a>
                      <img src={logo} width="120" height="50" />
                    </a>
                  </h5>

                  <hr className="my-4" />

                  <form className="form-signin" onSubmit={this.onSubmit}>
                    <div className="row">
                      <div className="col-sm">
                        <div className="form-group">
                          <input
                            type="text"
                            id="inputName"
                            className={classnames("form-control", {
                              "is-invalid": errors.name
                            })}
                            placeholder="Họ Tên"
                            name="name"
                            value={this.state.className}
                            onChange={this.onChange}
                          />
                          {errors.name && (
                            <div className="invalid-feedback">
                              {errors.name}
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="col-sm">
                        <div className="form-group">
                          <input
                            type="text"
                            id="inputPhone"
                            className={classnames("form-control", {
                              "is-invalid": errors.phone
                            })}
                            placeholder="Điện thoại"
                            name="phone"
                            value={this.state.phone}
                            onChange={this.onChange}
                          />
                          {errors.phone && (
                            <div className="invalid-feedback">
                              {errors.phone}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <input
                        type="email"
                        id="inputEmail"
                        className={classnames("form-control", {
                          "is-invalid": errors.email
                        })}
                        placeholder="Email"
                        name="email"
                        value={this.state.email}
                        onChange={this.onChange}
                      />
                      {errors.email && (
                        <div className="invalid-feedback">{errors.email}</div>
                      )}
                    </div>
                    <div className="row">
                      <div className="col-sm">
                        <div className="form-group">
                          <input
                            type="text"
                            id="inputAddress"
                            className={classnames("form-control", {
                              "is-invalid": errors.addressNumber
                            })}
                            placeholder="Số nhà"
                            name="addressNumber"
                            value={this.state.addressNumber}
                            onChange={this.onChange}
                          />
                          {errors.addressNumber && (
                            <div className="invalid-feedback">
                              {errors.addressNumber}
                            </div>
                          )}
                        </div>
                      </div>

                      <div className="col-sm">
                        <div className="form-group">
                          <input
                            type="text"
                            id="inputWard"
                            className={classnames("form-control", {
                              "is-invalid": errors.ward
                            })}
                            placeholder="Phường"
                            name="ward"
                            value={this.state.ward}
                            onChange={this.onChange}
                          />
                          {errors.ward && (
                            <div className="invalid-feedback">
                              {errors.ward}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-sm">
                        <div className="form-group">
                          <input
                            type="text"
                            id="inputDistrict"
                            className={classnames("form-control", {
                              "is-invalid": errors.district
                            })}
                            placeholder="Quận"
                            name="district"
                            value={this.state.district}
                            onChange={this.onChange}
                          />
                          {errors.district && (
                            <div className="invalid-feedback">
                              {errors.district}
                            </div>
                          )}
                        </div>
                      </div>

                      <div className="col-sm">
                        <div className="form-group">
                          <input
                            type="text"
                            id="inputCity"
                            className={classnames("form-control", {
                              "is-invalid": errors.city
                            })}
                            placeholder="Thành Phố"
                            name="city"
                            value={this.state.city}
                            onChange={this.onChange}
                          />
                          {errors.city && (
                            <div className="invalid-feedback">
                              {errors.city}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>

                    
                    <div className="form-group">
                      <input
                        type="text"
                        id="inputDob"
                        className={classnames("form-control", {
                          "is-invalid": errors.dob
                        })}
                        placeholder="Ngày tháng năm sinh"
                        name="dob"
                        value={this.state.dob}
                        onChange={this.onChange}
                      />
                      {errors.dob && (
                        <div className="invalid-feedback">{errors.dob}</div>
                      )}
                    </div>

                    {/* <div className="form-group">
                      <div
                        className="input-group date"
                        id="datetimepicker4"
                        data-target-input="nearest"
                      >
                        <input
                          type="text"
                          // className="form-control datetimepicker-input"
                          className={classnames(
                            "form-control datetimepicker-input",
                            {
                              "is-invalid": errors.dob
                            }
                          )}
                          data-target="#datetimepicker4"
                          name="dob"
                          value={this.state.dob}
                          onChange={this.onChange}
                          placeholder="Ngày tháng năm sinh"
                        />

                        <div
                          className="input-group-append"
                          data-target="#datetimepicker4"
                          data-toggle="datetimepicker"
                        >
                          <div className="input-group-text">
                            <i className="fa fa-calendar" />
                          </div>
                        </div>
                        {errors.dob && (
                          <div className="invalid-feedback">{errors.dob}</div>
                        )}
                      </div>
                    </div>
                    {/* {selectedDay && (
                      <p>Day: {selectedDay.toLocaleDateString()}</p>
                    )} */}
                    {/* <div className="form-group">
                    <DayPickerInput 
                     formatDate={this.formatDate}
                     format={FORMAT}
                     parseDate={this.parseDate}
                    //  placeholder={`${dateFnsFormat(new Date(), FORMAT)}`}
                    placeholder="Ngày Tháng Năm Sinh"
                     onDayChange={this.handleDayChange}
                    />
                    </div> */} 
                    <button
                      className="btn btn-lg btn-primary btn-block text-uppercase"
                      type="submit"
                    >
                      ĐĂNG KÝ NHẬN TƯ VẤN
                    </button>


                    <hr className="my-4" />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

LandingPage.propTypes = {
  submitForm: PropsTypes.func.isRequired,
  errors: PropsTypes.object.isRequired
};

const MapStateToProps = state => ({
  errors: state.errors
});

export default connect(MapStateToProps, { submitForm })(LandingPage);
