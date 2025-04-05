import { Accordion, Container, Col, Row, Card } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import './course.css'
import {IconDangerAlert} from '../../components/icons'

let goToFeatures = () => {
	document.getElementById('register').scrollIntoView(true)
}

let goToContentList = () => {
	document.getElementById('content_list').scrollIntoView(true)
}

export default function JavaCourse() {
	return(<>
        <div className="bg-dark text-secondary px-4 py-5 text-center">
            <div className="py-5">
                <h1 className="display-5 fw-bold text-white">Khoá học lập trình Java cơ bản</h1>
                <div className="col-lg-6 mx-auto">
                    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                        <button type="button" className="btn btn-outline-info btn-lg px-4 me-sm-3 fw-bold" onClick={goToFeatures}>Đăng ký ngay</button>
                        <button type="button" className="btn btn-outline-light btn-lg px-4" onClick={goToContentList}>Xem mục lục</button>
                    </div>
                </div>
            </div>
        </div>

        <h1 id='content_list' className='display-3 fw-bold text-center mt-5'>Thông tin khoá học</h1>
        <div className='d-flex flex-column flex-md-row justify-content-center align-items-center'>
            <ul className="list-group me-5" style={{width: '400px'}}>
                <li className="list-group-item d-flex justify-content-center">
                    <img src="/img/icon/java.png" className="" width="64" height="64" />
                </li>	
                <li className="list-group-item d-flex justify-content-between align-items-start">
                    <div className="ms-2">Học phí</div>
                    <h3><span className="badge bg-secondary rounded-pill">399k VNĐ</span></h3>
                    
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-start">
                    <div className="ms-2">Giảng viên</div>
                    <span className="fw-bold">Vũ Nguyễn Coder</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-start">
                    <div className="ms-2">Hình thức học</div>
                    <span className="fw-bold">Video + Chat support</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-start">
                    <div className="ms-2">Số lượng bài giảng</div>
                    <span className="fw-bold">(updating)</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-start">
                    <div className="ms-2">Số lượng bài tập</div>
                    <span className="fw-bold">(updating)</span>
                </li>
            </ul> 
            <div>
                <div className='display-6 m-3 text-center w-75'>Nội dung kiến thức</div>
                <div class="list-group">
                    <button type="button" class="list-group-item list-group-item-action">
                        Setup môi trường
                    </button>
                    <button type="button" class="list-group-item list-group-item-action">
                        Biến và Kiểu dữ liệu
                    </button>
                    <button type="button" class="list-group-item list-group-item-action">
                        Phép toán
                    </button>
                    <button type="button" class="list-group-item list-group-item-action">Các cấu trúc điều khiển: cấu trúc điều kiện, cấu trúc lặp</button>
                    <button type="button" class="list-group-item list-group-item-action">Kiểu function</button>
                    <button type="button" class="list-group-item list-group-item-action">Kiểu array</button>
                    <button type="button" class="list-group-item list-group-item-action">Kiểu kí tự, chuỗi kí tự</button>
                    <button type="button" class="list-group-item list-group-item-action">Class & Object</button>
                    <button type="button" class="list-group-item list-group-item-action">Template</button>
                    <button type="button" class="list-group-item list-group-item-action">Container</button>
                    <button type="button" class="list-group-item list-group-item-action">Luồng Input/Output: console, file,...</button>
                    <button type="button" class="list-group-item list-group-item-action">Thực hành xây dựng Console app quản lý sinh viên</button>
                </div>
            </div>
        </div>
        

        <Container id="register" className="text-center" style={{scrollMarginTop: '60px'}}>
            <Row>
                <Col>
                    <h1 className="display-3 fw-bold m-5">Cách thức đăng ký </h1>
                </Col>
            </Row>
            <Row className="justify-content-center">
                <Col lg={6}>
                    <h1 className="display-6">Bước 1: Thanh toán</h1>
                    <img src="/img/QR/java.png" className="border rounded-3 shadow-lg w-75 mb-4" loading="lazy" />
                    <div className="d-flex flex-column justify-content-center lead">
                        <div>Chuyển khoản theo STK hoặc mã QR và ghi rõ nội dung:  </div>
                        <div className='fw-bold'>Java Basic <i>Tên_facebook_của_bạn</i></div>
                        <div>Ví dụ nếu tài khoản FB của bạn là Nguyễn Văn A, nội dung CK sẽ như sau:</div>
                        <div className='fw-bold'>Java Basic Nguyen Van A</div>
                    </div> 
                    <hr className='d-lg-none' />
                </Col>
                <Col lg={6}>
                    <h1 className="display-6 mt-3 mt-lg-0">Bước 2: Gửi yêu cầu vào group</h1>
                    <Container className="justify-content-center lead">
                        <a href="https://www.facebook.com/groups/430606139893983" target="_blank">
                            <button type="button" className="btn btn-primary btn-lg px-4 m-2">Truy cập group</button>	
                        </a>
                        <div className='lead mb-3'>Bấm nút trên để truy cập vào group. Sau khi gửi yêu cầu tham gia vào group, 
                            quản trị viên sẽ xác thực thông tin chuyển khoản 
                            và tên tài khoản FB của bạn để phê duyệt trong 24h
                        </div>	
                        <div className="alert alert-danger" role="alert">
                            <IconDangerAlert width="24" height="24" />
                            <span className='ms-3'>Lưu ý: Chỉ chấp nhận tham gia với một tài khoản facebook duy nhất</span>	
                        </div>	
                    </Container>
                    <hr />
                    <h1 className="display-6 mt-4 mt-lg-0">Bước 3: Xem hướng dẫn cách học</h1>
                    <Container className="justify-content-center lead">
                        <div className='lead mb-3'>Xem bài được ghim ở đầu group để được hướng dẫn cách học.
                            Chú ý add nick telegram hoặc discord để được support trong quá trình học 
                        </div>	
                    </Container>
                    <hr className='d-lg-none' />
                </Col>
            </Row>
        </Container>

        <div className='text-center my-5'>
            <div className="head display-6 fw-bold m-2">
                Hot line liên hệ: 
            </div>
            <div className='badge bg-primary'><h3>088 995 8883</h3></div>
            <div className='head fs-5 text-muted'>(Nếu máy bận xin để lại tin nhắn)</div>
        </div> 
	</>)
}


