import React from 'react'
import "./footer.css"

const Footer = () => {
    return (
        <div className="container-fluid justify-content-center p-0 mx-0">
            <div className="row px-0">
                <div className="col">
                    <div className="card py-5 border-0 card-0">
                        <div className="card-body ">
                            <div className="form-row">
                                <div className="col-12  mb-4">
                                    <h5>
                                        <b>Refer your friends</b>
                                    </h5>
                                </div>
                                {/* <div className="col-sm-auto col-12 my-sm-0 mt-3 text-left">
                                    <label htmlFor="validationCustom01">First name</label>{" "}
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="validationCustom01"
                                        placeholder="First name"
                                        defaultValue="Mark"
                                    />
                                </div>
                                <div className="col-sm-auto col-12 my-sm-0 mt-4 ">
                                    <label htmlFor="validationCustom01 ">Contact Number</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="validationCustom01"
                                        placeholder="Contact Number"
                                        defaultValue="88888 88888"
                                    />{" "}
                                </div> */}
                                <div className="col-auto align-self-end mt-sm-0 mt-4">
                                    <button className="btn btn-block btn-success ml-2 mt-md-0 mt-3">
                                        Refer Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <footer>
                <div className="card border-0">
                    <div className="card-body px-5">
                        <div className="row  justify-content-around mb-0 pt-5 ">
                            <div className="col-xl-3 col-md-6 col-sm-6 col-12   my-auto">
                                <ul className="list-unstyled mt-md-3 mt-5">
                                    <li>
                                        {" "}
                                        <p className="mb-4">Conact us about sponsorship </p>
                                    </li>
                                    <li>
                                        {" "}
                                        <div className="card card-1 border-0">
                                            {" "}
                                            <div className="card-body p-0 pl-3">
                                                <h6 className="mb-3">
                                                    <b>Shivam soni</b>
                                                </h6>{" "}
                                                <small>cvamsoni@gmail.com</small>
                                                <br /> <small>9200876815</small>{" "}
                                            </div>
                                        </div>{" "}
                                    </li>
                                </ul>{" "}
                            </div>
                            <div className="col-xl-3 col-md-6 col-sm-6 col-12   my-auto">
                                <ul className="list-unstyled mt-md-3 mt-5">
                                    <li>
                                        {" "}
                                        <p className="mb-4">Quries about registration contact</p>
                                    </li>
                                    <li>
                                        {" "}
                                        <div className="card card-1 border-0">
                                            {" "}
                                            <div className="card-body p-0 pl-3">
                                                <h6 className="mb-3">
                                                    <b>Shivam soni</b>
                                                </h6>{" "}
                                                <small>cvamsoni@gmail.com</small>
                                                <br /> <small>9200876815</small>{" "}
                                            </div>
                                        </div>{" "}
                                    </li>
                                </ul>{" "}
                            </div>
                            <div className="col-xl-3 col-md-6 col-sm-6 col-12   my-auto">
                                <ul className="list-unstyled mt-md-3 mt-5">
                                    <li>
                                        {" "}
                                        <p className="mb-4">Quries about registration contact</p>
                                    </li>
                                    <li>
                                        {" "}
                                        <div className="card card-1 border-0">
                                            {" "}
                                            <div className="card-body p-0 pl-3">
                                                <h6 className="mb-3">
                                                    <b>Shivam soni</b>
                                                </h6>{" "}
                                                <small>cvamsoni@gmail.com</small>
                                                <br /> <small>9200876815</small>{" "}
                                            </div>
                                        </div>{" "}
                                    </li>
                                </ul>{" "}
                            </div>
                            <div className="col-xl-auto col-md-6 col-sm-6 col-12   my-auto">
                                <ul className="list-unstyled mt-md-3 mt-5">
                                    <li>
                                        {" "}
                                        <p className="mb-4">For technical issue contact</p>
                                    </li>
                                    <li>
                                        {" "}
                                        <div className="card card-1 border-0">
                                            {" "}
                                            <div className="card-body p-0 pl-3">
                                                <h6 className="mb-3">
                                                    <b>Shivam soni</b>
                                                </h6>{" "}
                                                <small>cvamsoni@gmail.com</small>
                                                <br /> <small>9200876815</small>{" "}
                                            </div>
                                        </div>{" "}
                                    </li>
                                </ul>{" "}
                            </div>
                        </div>
                        <div className="row justify-content-around mb-0 py-5 ">
                            <div className="col-xl-3 col-md-6 col-sm-6 col-12  pt-4">
                                <ul className="list-unstyled">
                                    <li className="mt-md-0 mt-4">For Companies</li>
                                    <li>Become a Sponsor</li>
                                    <li>Download brochure</li>
                                </ul>
                            </div>
                            <div className="col-xl-3 col-md-6 col-sm-6 col-12  pt-4">
                                <ul className="list-unstyled">
                                    <li className="mt-md-0 mt-4">For Companies</li>
                                    <li>Become a Sponsor</li>
                                    <li>Download brochure</li>
                                </ul>
                            </div>
                            <div className="col-xl-3 col-md-6 col-sm-6 col-12  pt-4">
                                <ul className="list-unstyled">
                                    <li className="mt-md-0 mt-4">Our initiatiives</li>
                                    <li>Enablers</li>
                                    <li>Changemakers</li>
                                </ul>
                            </div>
                            <div className="col-xl-auto col-md-6 col-sm-6 co-12  pt-4">
                                <ul className="list-unstyled">
                                    <li className="mt-md-0 mt-4">We are social</li>
                                    <li>
                                        <a href="#" className="fa fa-facebook" />
                                        <a href="#" className="fa fa-twitter" />
                                        <a href="#" className="fa fa-instagram" />
                                        <a href="#" className="fa fa-linkedin" />
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer >
            <hr className="colored" />
        </div >
    )
}

export default Footer