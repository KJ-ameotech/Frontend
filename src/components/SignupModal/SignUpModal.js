import React from 'react'
import "./Modal1.css"
import Modal from 'react-bootstrap/Modal';
import { countries } from '../../Utils/lists';




const SignUpModal = ({ religionData, modalShow, handleRegister, communitiesData }) => {
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
                            {/* <option value="" label='---------- Christianity ----------' disabled />
                            <option value="Christianity - Anglica">Christianity - Anglican</option>
                            <option value="Christianity - Baptist">Christianity - Baptist</option>
                            <option value="Christianity - Born Again">Christianity - Born Again</option>
                            <option value="Christianity - Catholic">Christianity - Catholic</option>
                            <option value="Christianity - Catholic Kananaya">Christianity - Catholic Kananaya</option>
                            <option value="Christianity - Catholic Latin">Christianity - Catholic Latin</option>
                            <option value="Christianity - Catholic Malankara">Christianity - Catholic Malankara</option>
                            <option value="Christianity - Catholic Roman">Christianity - Catholic Roman</option>
                            <option value="Christianity - Catholic Syrian">Christianity - Catholic Syrian</option>
                            <option value="Christianity - Catholic Syrian">Christianity - CMS</option>
                            <option value="Christianity - CSI">Christianity - CSI</option>
                            <option value="Christianity - Evangelical">Christianity - Evangelical</option>
                            <option value="Christianity - Jacobite">Christianity - Jacobite</option>
                            <option value="Christianity - Malayalam">Christianity - Malayalam</option>
                            <option value="Christianity - Marthomite">Christianity - Marthomite</option>
                            <option value="Christianity - Nadar">Christianity - Nadar</option>
                            <option value="Christianity - Orthodox">Christianity - Orthodox</option>
                            <option value="Christianity - Pentacost">Christianity - Pentacost</option>
                            <option value="Christianity - Protestant">Christianity - Protestant</option>
                            <option value="Christianity - Thai">Christianity - Thai</option>
                            <option value="Christianity - Tibetian">Christianity - Tibetian</option>
                            <option value="Dawoodi Bhora">Dawoodi Bhora</option>
                            <option value="" label='---------- Hindu ----------' disabled />
                            <option value="Hindu -  Ganiga">Hindu -  Ganiga</option>
                            <option value="Hindu - 96K Kokanastha">Hindu - 96K Kokanastha</option>
                            <option value="Hindu - Adi Dravida">Hindu - Adi Dravida</option>
                            <option value="Hindu - Agamudayaar">Hindu - Agamudayaar</option>
                            <option value="Hindu - Agarwal">Hindu - Agarwal</option>
                            <option value="Hindu - Arora">Hindu - Arora</option>
                            <option value="Hindu - Arya Vysya">Hindu - Arya Vysya</option>
                            <option value="Hindu - Balija Naidu">Hindu - Balija Naidu</option>
                            <option value="Hindu - Bania">Hindu - Bania</option>
                            <option value="Hindu - Banjara">Hindu - Banjara</option>
                            <option value="Hindu - Bengali">Hindu - Bengali</option>
                            <option value="Hindu - Bhandari">Hindu - Bhandari</option>
                            <option value="Hindu - Billava">Hindu - Billava</option>
                            <option value="Hindu - Brahmin">Hindu - Brahmin</option>
                            <option value="Hindu - Brahmin Anavil">Hindu - Brahmin Anavil</option>
                            <option value="Hindu - Brahmin Bengali">Hindu - Brahmin Bengali</option>
                            <option value="Hindu - Brahmin Davadnya">Hindu - Brahmin Davadnya</option>
                            <option value="Hindu - Brahmin Deshastha">Hindu - Brahmin Deshastha</option>
                            <option value="Hindu - Brahmin Garhwali">Hindu - Brahmin Garhwali</option>
                            <option value="Hindu - Brahmin Gaur">Hindu - Brahmin Gaur</option>
                            <option value="Hindu - Brahmin Gowd Saraswat">Hindu - Brahmin Gowd Saraswat</option>
                            <option value="Hindu - Brahmin Gujarati">Hindu - Brahmin Gujarati</option>
                            <option value="Hindu - Brahmin Havyaka">Hindu - Brahmin Havyaka</option>
                            <option value="Hindu - Brahmin Kanada Madhva">Hindu - Brahmin Kanada Madhva</option>
                            <option value="Hindu - Brahmin Kanyakubja">Hindu - Brahmin Kanyakubja</option>
                            <option value="Hindu - Brahmin Kokanastha">Hindu - Brahmin Kokanastha</option>
                            <option value="Hindu - Brahmin Kumoani">Hindu - Brahmin Kumoani</option>
                            <option value="Hindu - Brahmin Maharashtrian">Hindu - Brahmin Maharashtrian</option>
                            <option value="Hindu - Brahmin Maithil">Hindu - Brahmin Maithil</option>
                            <option value="Hindu - Brahmin Nagar">Hindu - Brahmin Nagar</option>
                            <option value="Hindu - Brahmin Pareek">Hindu - Brahmin Pareek</option>
                            <option value="Hindu - Brahmin Punjabi">Hindu - Brahmin Punjabi</option>
                            <option value="Hindu - Brahmin Saryuparin">Hindu - Brahmin Saryuparin</option>
                            <option value="Hindu - Brahmin Smartha">Hindu - Brahmin Smartha</option>
                            <option value="Hindu - Brahmin Telugu">Hindu - Brahmin Telugu</option>
                            <option value="Hindu - Bramhan Bhumihar">Hindu - Bramhan Bhumihar</option>
                            <option value="Hindu - Bunt">Hindu - Bunt</option>
                            <option value="Hindu - Byahut Kalwa">Hindu - Byahut Kalwa</option>
                            <option value="Hindu - Chandraseniya(CKP)">Hindu - Chandraseniya(CKP)</option>
                            <option value="Hindu - Chettiar">Hindu - Chettiar</option>
                            <option value="Hindu - Coorgi">Hindu - Coorgi</option>
                            <option value="Hindu - Daraji">Hindu - Daraji</option>
                            <option value="Hindu - Devadiga">Hindu - Devadiga</option>
                            <option value="Hindu - Devanga">Hindu - Devanga</option>
                            <option value="Hindu - Dheevara">Hindu - Dheevara</option>
                            <option value="Hindu - Dhobi">Hindu - Dhobi</option>
                            <option value="Hindu - Digambar">Hindu - Digambar</option>
                            <option value="Hindu - Ezhava">Hindu - Ezhava</option>
                            <option value="Hindu - Ezhuthassan">Hindu - Ezhuthassan</option>
                            <option value="Hindu - Gold Smith">Hindu - Gold Smith</option>
                            <option value="Hindu - Goswami">Hindu - Goswami</option>
                            <option value="Hindu - Gounder">Hindu - Gounder</option>
                            <option value="Hindu - Gowda">Hindu - Gowda</option>
                            <option value="Hindu - Gujarati">Hindu - Gujarati</option>
                            <option value="Hindu - Gupta">Hindu - Gupta</option>
                            <option value="Hindu - Hindu Nair Veluthedath">Hindu - Hindu Nair Veluthedath</option>
                            <option value="Hindu - Iyengar">Hindu - Iyengar</option>
                            <option value="Hindu - Iyer">Hindu - Iyer</option>
                            <option value="Hindu - Jat">Hindu - Jat</option>
                            <option value="Hindu - Jatav">Hindu - Jatav</option>
                            <option value="Hindu - Kamboj">Hindu - Kamboj</option>
                            <option value="Hindu - Kamma">Hindu - Kamma</option>
                            <option value="Hindu - Kapu">Hindu - Kapu</option>
                            <option value="Hindu - Kashmiri Pandit">Hindu - Kashmiri Pandit</option>
                            <option value="Hindu - Kayastha">Hindu - Kayastha</option>
                            <option value="Hindu - Kerala Malaylee Namboodiri">Hindu - Kerala Malaylee Namboodiri</option>
                            <option value="Hindu - Khandelwal">Hindu - Khandelwal</option>
                            <option value="Hindu - Khatri">Hindu - Khatri</option>
                            <option value="Hindu - Kongu Vellala Gounder">Hindu - Kongu Vellala Gounder</option>
                            <option value="Hindu - Koshti">Hindu - Koshti</option>
                            <option value="Hindu - Kshatriya">Hindu - Kshatriya</option>
                            <option value="Hindu - Kumaoni">Hindu - Kumaoni</option>
                            <option value="Hindu - Kumbara">Hindu - Kumbara</option>
                            <option value="Hindu - Kurmi">Hindu - Kurmi</option>
                            <option value="Hindu - Kuruhina Shetty">Hindu - Kuruhina Shetty</option>
                            <option value="Hindu - Kushwaha">Hindu - Kushwaha</option>
                            <option value="Hindu - Lingayat">Hindu - Lingayat</option>
                            <option value="Hindu - Lohana">Hindu - Lohana</option>
                            <option value="Hindu - Maharashtrian">Hindu - Maharashtrian</option>
                            <option value="Hindu - Maheshwari">Hindu - Maheshwari</option>
                            <option value="Hindu - Mallah">Hindu - Mallah </option>
                            <option value="Hindu - Maratha">Hindu - Maratha</option>
                            <option value="Hindu - Maruthuvar">Hindu - Maruthuvar</option>
                            <option value="Hindu - Marwari">Hindu - Marwari</option>
                            <option value="Hindu - MarwariHindu - Marwari">Hindu - MarwariHindu - Marwari</option>
                            <option value="Hindu - Mathur">Hindu - Mathur</option>
                            <option value="Hindu - Mathurvaishya<">Hindu - Mathurvaishya</option>
                            <option value="Hindu - Menon">Hindu - Menon</option>
                            <option value="Hindu - Mudaliar">Hindu - Mudaliar</option>
                            <option value="Hindu - Mudaliar Arcot">Hindu - Mudaliar Arcot</option>
                            <option value="Hindu - Mudaliar Saiva">Hindu - Mudaliar Saiva</option>
                            <option value="Hindu - Mukulathur">Hindu - Mukulathur</option>
                            <option value="Hindu - Mutharaiyar">Hindu - Mutharaiyar</option>
                            <option value="Hindu - Nadar">Hindu - Nadar</option>
                            <option value="Hindu - Nai">Hindu - Nai</option>
                            <option value="Hindu - Naidu">Hindu - Naidu</option>
                            <option value="Hindu - Nair">Hindu - Nair</option>
                            <option value="Hindu - Nayaka">Hindu - Nayaka</option>
                            <option value="Hindu - Nambiar">Hindu - Nambiar</option>
                            <option value="Hindu - Padmashali">Hindu - Padmashali</option>
                            <option value="Hindu - Pasi">Hindu - Pasi</option>
                            <option value="Hindu - Patel">Hindu - Patel</option>
                            <option value="Hindu - Patel Desai">Hindu - Patel Desai</option>
                            <option value="Hindu - Patel Kadva">Hindu - Patel Kadva</option>
                            <option value="Hindu - Patel Leva">Hindu - Patel Leva</option>
                            <option value="Hindu - Pillai">Hindu - Pillai</option>
                            <option value="Hindu - Prajapati">Hindu - Prajapati</option>
                            <option value="Hindu - Punjabi">Hindu - Punjabi</option>
                            <option value="Hindu - Raghuwanshi">Hindu - Raghuwanshi</option>
                            <option value="Hindu - Reddy">Hindu - Reddy</option>
                            <option value="Hindu - Rajput">Hindu - Rajput</option>
                            <option value="Hindu - Saini">Hindu - Saini</option>
                            <option value="Hindu - Saiva Pillai">Hindu - Saiva Pillai</option>
                            <option value="Hindu - Scheduled Caste">Hindu - Scheduled Caste</option>
                            <option value="Hindu - Sindhi">Hindu - Sindhi</option>
                            <option value="Hindu - Sonar">Hindu - Sonar</option>
                            <option value="Hindu - Sowrashtra">Hindu - Sowrashtra</option>
                            <option value="Hindu - Sozhiya Vellalar">Hindu - Sozhiya Vellalar</option>
                            <option value="Hindu - Tamil">Hindu - Tamil</option>
                            <option value="Hindu - Tamil Yadava">Hindu - Tamil Yadava</option>
                            <option value="Hindu - Telgu">Hindu - Telgu</option>
                            <option value="Hindu - Teli">Hindu - Teli</option>
                            <option value="Hindu - Thevar">Hindu - Thevar</option>
                            <option value="Hindu - Thiyya">Hindu - Thiyya</option>
                            <option value="Hindu - Udayar">Hindu - Udayar</option>
                            <option value="Hindu - Vaishnav">Hindu - Vaishnav</option>
                            <option value="Hindu - Vaishnav Bhatia">Hindu - Vaishnav Bhatia</option>
                            <option value="Hindu - Vaishnav Bania">Hindu - Vaishnav Bania</option>
                            <option value="Hindu - Vaishnav Vania">Hindu - Vaishnav Vania</option>
                            <option value="Hindu - Vanjari">Hindu - Vanjari</option>
                            <option value="Hindu - Vanniyakullak Shatriya">Hindu - Vanniyakullak Shatriya</option>
                            <option value="Hindu - Vanniyar">Hindu - Vanniyar</option>
                            <option value="Hindu - Varier">Hindu - Varier</option>
                            <option value="Hindu - Veerashaiva">Hindu - Veerashaiva</option>
                            <option value="Hindu - Veerashaiva">Hindu - Vellama</option>
                            <option value="Hindu - Vilakkithala Nair">Hindu - Vilakkithala Nair</option>
                            <option value="Hindu - Vishwakarma">Hindu - Vishwakarma</option>
                            <option value="Hindu - Viswabrahmin">Hindu - Viswabrahmin</option>
                            <option value="Hindu - Vokaliga">Hindu - Vokaliga</option>
                            <option value="Hindu - Vysya">Hindu - Vysya</option>
                            <option value="Hindu - Yadav">Hindu - Yadav</option>
                            <option value="" label='---------- Islam ----------' disabled />
                            <option value="Islam - Bangla">Islam - Bangla</option>
                            <option value="Islam - Shia">Islam - Shia</option>
                            <option value="Islam - Sunni">Islam - Sunni</option>
                            <option value="Ismaili">Ismaili</option>
                            <option value="" label='---------- Jain ----------' disabled />
                            <option value="Jain - Jain Digambar">Jain - Jain Digambar</option>
                            <option value="Jain - Jain Swetamber">Jain - Jain Swetamber</option>
                            <option value="" label='---------- Sikh ----------' disabled />
                            <option value="Sikh - Clean Shaven">Sikh - Clean Shaven</option>
                            <option value="Sikh - Gursikh">Sikh - Gursikh</option>
                            <option value="Sikh - Kesadhari">Sikh - Kesadhari</option>
                            <option value="Sikh - Khatri">Sikh - Khatri</option>
                            <option value="Sikh - Ramqharia">Sikh - Ramqharia</option>
                            <option value="" label='---------- Others ----------' disabled />
                            <option value="Bhori">Bhori</option>
                            <option value="Buddhisim">Buddhisim</option>
                            <option value="Spiritualism">Spiritualism</option>
                            <option value="Zoroastrain Parsi">Zoroastrain Parsi</option>
                            <option value="Nonreligious">Nonreligious</option> */}
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