import React, { Component } from 'react'
import "./LandingPage.css";
import logo from "../NavBar/logo-1.png"
export default class CongratulationPage extends Component {
    render() {
        return (
            <div>
                <div>
        <div className="container">
          <div className="row">
            <div className="col-sm-9 col-md-7 col-lg-9 mx-auto">
              <div className="card card-signin my-5">
                <div className="card-body">
                  <h5 className="card-title text-center">
                    <a>
                      <img src={logo} width="120" height="50"/>
                    </a>
                  </h5>
                    <h4 className="card-title text-center">Chúc mừng bạn đã đăng ký nhận tư vấn sức khoẻ thành công </h4>
                    

                  <hr className="my-4" />

                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
            </div>
        )
    }
}
