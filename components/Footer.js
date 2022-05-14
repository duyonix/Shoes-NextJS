// import styles from "../styles/components/Footer.module.css";

const Footer = () => {
    return (
        <footer className="text-center text-lg-start bg-light text-muted mt-4">
            <section
                className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom"
                style={{ backgroundColor: "#222222", color: "#fff" }}
            >
                <div className="me-5 d-none d-lg-block">
                    <span>Liên hệ với chúng tôi tại:</span>
                </div>

                <div>
                    <a href="#" className="me-4 text-reset">
                        <i className="fab fa-facebook-f" />
                    </a>
                    <a href="#" className="me-4 text-reset">
                        <i className="fab fa-twitter" />
                    </a>
                    <a href="#" className="me-4 text-reset">
                        <i className="fab fa-google" />
                    </a>
                    <a href="#" className="me-4 text-reset">n
                        <i className="fab fa-instagram" />
                    </a>
                    <a href="#" className="me-4 text-reset">
                        <i className="fab fa-linkedin" />
                    </a>
                    <a href="#" className="me-4 text-reset">
                        <i className="fab fa-github" />
                    </a>
                </div>
            </section>
            <section>
                <div className="container text-center text-md-start mt-5">
                    <div className="row mt-3">
                        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold mb-4">
                                <i className="fas fa-gem me-3" />
                                Thuocsi
                            </h6>
                            <p>
                                thuocsi.vn được thành lập từ năm 2018, là một trong những
                                startup thành công trong lĩnh vực công nghệ về y tế. Hiện tại là
                                cổng điện tử cung cấp thuốc cho hơn 1.000 nhà thuốc và phòng
                                khám trên khắp Việt Nam.
                            </p>
                        </div>

                        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold mb-4">Sản phẩm</h6>
                            <p>
                                <a href="#" className="text-reset">
                                    Thuốc
                                </a>
                            </p>
                            <p>
                                <a href="#" className="text-reset">
                                    Phòng khám
                                </a>
                            </p>
                            <p>
                                <a href="#" className="text-reset">
                                    Dịch vụ
                                </a>
                            </p>
                            <p>
                                <a href="#" className="text-reset">
                                    Khuyến mãi
                                </a>
                            </p>
                        </div>
                        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold mb-4">Liên kết</h6>
                            <p>
                                <a href="#" className="text-reset">
                                    ABC
                                </a>
                            </p>
                            <p>
                                <a href="#" className="text-reset">
                                    EDFD
                                </a>
                            </p>
                            <p>
                                <a href="#" className="text-reset">
                                    DFD
                                </a>
                            </p>
                            <p>
                                <a href="#" className="text-reset">
                                    ADSD
                                </a>
                            </p>
                        </div>
                        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                            <h6 className="text-uppercase fw-bold mb-4">Liên hệ</h6>
                            <p>
                                <i className="fas fa-home me-3" />
                                28Bis Mạc Đĩnh Chi, Phường Đa Kao, Quận 1, Thành Phố Hồ Chí Minh, Việt Nam
                            </p>
                            <p>
                                <i className="fas fa-envelope me-3" />
                                info@example.com
                            </p>
                            <p>
                                <i className="fas fa-phone me-3" />+ 01 234 567 88
                            </p>
                            <p>
                                <i className="fas fa-print me-3" />+ 01 234 567 89
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <div className="text-center p-4" style={{ backgroundColor: "#cacaca" }}>
                © 2022 Copyright:
                <a className="text-reset fw-bold" href="https://thuocsi.vn/">
                    {" "}
                    thuocsi.vn
                </a>
            </div>
        </footer>
    );
};

export default Footer;
