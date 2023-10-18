import React from 'react'
import "./Modal1.css"
import Modal from 'react-bootstrap/Modal';
import { countries } from '../../Utils/lists';

const SignUpModal = ({ religionData, modalShow, handleRegister, communitiesData, familyNameData }) => {
    return (
        <Modal
            show={modalShow}
            // onHide={() => setModalShow(false)}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header />
            <Modal.Body>
                <div className="contact-form">
                    <div className="col-lg-12 col-md-12 col-sm-6 form-group ">
                        <select className="custom-select-box" name="religion" tabindex="7" required id="" onChange={(e) => handleRegister(e)}>
                            <option value="" disabled selected hidden>Religion</option>
                            {!!religionData?.length && religionData.map((item) => {
                                return (
                                    <option value={item.name} key={item.id}>{item.name}</option>
                                )
                            })}
                            {/* <option value="Hindu" id="1">Hindu</option>
                            <option value="Islam" id="2">Islam</option>
                            <option value="Sikh" id="3">Sikh</option>
                            <option value="Islam" id="4">Christian</option>
                            <option value="Nonreligious" id="5">Nonreligious</option>
                            <option value="Others" id="5">Others</option> */}

                        </select>
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-6 form-group ">
                        <select className="custom-select-box" name="community" tabindex="7" required id="commnity" onChange={(e) => handleRegister(e)}>
                            <option value="" disabled selected hidden>Community</option>
                            {!!communitiesData?.length && communitiesData.map((item) => {
                                return (
                                    <option value={item.nam}>{item.name}</option>
                                )
                            })}
                        </select>
                    </div>

                    <div className="col-lg-12 col-md-12 col-sm-6 form-group ">
                        <select className="custom-select-box" name="familyName" tabindex="7" required id="family" onChange={(e) => handleRegister(e)}>
                            <option value="" disabled selected hidden>Family Name</option>
                            {!!familyNameData?.length && familyNameData.map((item) => {
                                return (
                                    <option value={item.nam}>{item.name}</option>
                                )
                            })}
                        </select>
                    </div>

                    <div className="col-lg-12 col-md-12 col-sm-6 form-group ">
                        <select className="custom-select-box" name="living_in" tabindex="7" required id="month" onChange={(e) => handleRegister(e)}>
                            <option value="" disabled selected hidden>Living in</option>
                            {countries.map((item) => {
                                return <option value={item.name} key={item.code}>{item.name}</option>
                            })}
                        </select>
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    )
}

export default SignUpModal