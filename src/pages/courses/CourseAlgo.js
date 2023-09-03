import { Accordion, Container, Col, Row, Card } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import './course.css'
import {IconDangerAlert} from './../../components/icons'

let goToFeatures = () => {
	document.getElementById('register').scrollIntoView(true)
}

let goToContentList = () => {
	document.getElementById('content_list').scrollIntoView(true)
}

export default function AlgoCourse() {
	return(<>
        <div className="bg-dark text-secondary px-4 py-5 text-center">
            <div className="py-5">
                <h1 className="display-5 fw-bold text-white">Khoá học thuật toán</h1>
                <div className="col-lg-6 mx-auto">
                    <p className="fs-5 mb-4">Làm chủ tư duy giải quyết vấn đề trong lập trình</p>
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
                    <img src="/img/icon/algo.png" className="" width="64" height="64" />
                </li>	
                <li className="list-group-item d-flex justify-content-between align-items-start">
                    <div className="ms-2">Học phí</div>
                    <h3><span className="badge bg-secondary rounded-pill">299k VNĐ</span></h3>
                    
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
                        Những thuật ngữ cơ bản khi làm việc với thuật toán 
                    </button>
                    <button type="button" class="list-group-item list-group-item-action">
                        Tính hiệu quả của thuật toán: Time complexity, Space complexity, Big O Notation,...
                    </button>
                    <button type="button" class="list-group-item list-group-item-action">
                        Phương pháp đệ quy: đệ quy đơn, đệ quy nhị phân, đệ quy đa tuyến,...
                    </button>
                    <button type="button" class="list-group-item list-group-item-action">Các mô hình thuật toán: Vét cạn, quay lui, chia để trị,...</button>
                    <button type="button" class="list-group-item list-group-item-action">Các thuật toán tìm kiếm</button>
                    <button type="button" class="list-group-item list-group-item-action">Các thuật toán sắp xếp</button>
                    <button type="button" class="list-group-item list-group-item-action">Tối ưu hoá: Thuật toán tham lam, Quy hoạch động,...</button>
                </div>
            </div>
        </div>
        
        <h1 className='display-3 fw-bold text-center mt-5 mb-3'>Điều kiện nhập học</h1>
        <div className="card mx-auto" style={{width: '25rem'}}>
            <div className="card-body">
                <h5 className="card-title">
                    Ngôn ngữ lập trình C/C++ <span class="badge bg-danger">Bắt buộc</span>
                </h5>
                <p className="card-text">
                    Đã nắm được các kiến thức cơ bản về C/C++ như Control statement,
                    Pointer, Array, Struct, Bộ nhớ Stack/Heap, Dynamic allocation,...
                </p>
                <a href="/courses/basics-cpp" className="btn btn-primary">Truy cập khoá học C/C++</a>
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
                    <img src="/img/QR/algo.png" className="border rounded-3 shadow-lg w-75 mb-4" loading="lazy" />
                    <div className="d-flex flex-column justify-content-center lead">
                        <div>Chuyển khoản theo STK hoặc mã QR và ghi rõ nội dung:  </div>
                        <div className='fw-bold'>ALGO <i>Tên_facebook_của_bạn</i></div>
                        <div>Ví dụ nếu tài khoản FB của bạn là Nguyễn Văn A, nội dung CK sẽ như sau:</div>
                        <div className='fw-bold'>ALGO Nguyen Van A</div>
                    </div> 
                    <hr className='d-lg-none' />
                </Col>
                <Col lg={6}>
                    <h1 className="display-6 mt-3 mt-lg-0">Bước 2: Gửi yêu cầu vào group</h1>
                    <Container className="justify-content-center lead">
                        <a href="https://www.facebook.com/groups/vunguyencoder.algorithm" target="_blank">
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

        <h1 className="display-4 fw-bold mt-4 mb-2 text-center">FAQ</h1>
			<Container><Col><Row>
				<Accordion defaultActiveKey="0">
					<Accordion.Item eventKey="0">
						<Accordion.Header><b>1. Những ai có thể theo khoá học này</b></Accordion.Header>
						<Accordion.Body>
                            <ul>
                                <li>Các bạn đang chuẩn bị trở thành sinh viên IT, muốn học trước để tránh bị đuối trước khung chương trình đại học</li>
                                <li>Các bạn sinh viên IT đang mất gốc</li>
                                <li>Các bạn đang muốn học nền tảng về lập trình để phục vụ cho công việc</li>
                                <li>Các bạn đang muốn học lập trình từ xa, không cần phải đến lớp những vẫn muốn được support trực tiếp từ giảng viên</li>
                            </ul>
						</Accordion.Body>
					</Accordion.Item>

					<Accordion.Item eventKey="1">
						<Accordion.Header><b>2. Tại sao nên học Thuật toán</b></Accordion.Header>
						<Accordion.Body>
                            Updating
						</Accordion.Body>
					</Accordion.Item>

					<Accordion.Item eventKey="2">
						<Accordion.Header><b>3. Ưu điểm của khóa học này</b></Accordion.Header>
						<Accordion.Body>
                            Updating
						</Accordion.Body>
					</Accordion.Item>

					<Accordion.Item eventKey="4">
						<Accordion.Header><b>4. Hình thức học</b></Accordion.Header>
						<Accordion.Body>
						<p>Học qua các video dựng sẵn và trao đổi 1-1 trực tiếp với mình khi có vấn đề 
							khúc mắc. 
						</p>
						</Accordion.Body>
					</Accordion.Item>

					<Accordion.Item eventKey="5">
						<Accordion.Header><b>5. Nên học gì tiếp theo?</b></Accordion.Header>
						<Accordion.Body>
						<p>
                            Cấu trúc dữ liệu
						</p>
						</Accordion.Body>
					</Accordion.Item>
					

				</Accordion>
			</Row></Col></Container>
			<div className='text-center my-5'>
				<div className="head display-6 fw-bold m-2">
					Hot line liên hệ: 
				</div>
				<div className='badge bg-primary'><h3>088 995 8883</h3></div>
				<div className='head fs-5 text-muted'>(Nếu máy bận xin để lại tin nhắn)</div>
			</div> 
	</>)
}


