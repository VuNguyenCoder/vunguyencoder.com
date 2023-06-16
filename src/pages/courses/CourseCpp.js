import { Accordion, Container, Col, Row, Card } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import './course.css'
import course_preview from './../../assets/images/course_preview.jpg'
import {IconDangerAlert} from './../../components/icons'

let goToFeatures = () => {
	document.getElementById('register').scrollIntoView(true)
}

let goToContentList = () => {
	document.getElementById('content_list').scrollIntoView(true)
}

export default function BasicCppCourse()
{
	return(
		<>
			<div className="container col-xxl-10 px-3 py-5">
				<div className="row flex-lg-row align-items-center g-5 py-1">
					<div className="col-lg-7">
                        <h1 className="display-4 fw-bold lh-1 mb-3">Khoá học C/C++ cơ bản </h1>
						<p className="lead">Ngôn ngữ lập trình tốt nhất cho việc xây dựng nền tảng của Software Engineer</p>
						
						<div className="d-grid gap-2 d-md-flex justify-content-md-start">
							<button type="button" className="btn btn-primary btn-lg px-4 me-md-2" onClick={goToFeatures}>Đăng ký ngay</button>
							<button type="button" className="btn btn-outline-secondary btn-lg px-4" onClick={goToContentList}>Xem mục lục</button>
						</div>
					</div>
					<div className="col col-lg-5">
						<ul className="list-group">
							<li className="list-group-item d-flex justify-content-center">
								<img src="/img/icon/c.png" className="" width="64" height="64" />
								<img src="/img/icon/cpp.png" className="" width="64" height="64" />
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
								<span className="fw-bold">114</span>
							</li>
							<li className="list-group-item d-flex justify-content-between align-items-start">
								<div className="ms-2">Số lượng bài tập</div>
								<span className="fw-bold">86</span>
							</li>
						</ul>
					</div>
					
				</div>
			</div>
			
			<Card id="content_list" style={{scrollMarginTop: '60px'}}>
				<img src="/img/background/coding_workspace.jpg" className='card-img'/>
				<div className='card-img-overlay'>
					<div className='d-flex flex-row-reverse lead text-white p-4 justify-content-between justify-content-xl-evenly' style={{height: '100%'}}>
						<div className='border border-3 p-2 overflow-auto fw-normal d-none d-md-block' style={{width: '45%', borderRadius: '15px'}}>
							<ul className=''>
								<li>Biến và kiểu dữ liệu</li>
								<li>Các phép toán cơ bản</li>
								<li>Các cấu trúc điều khiển: Rẽ nhánh, lặp</li>
								<li>Kiểu pointer (con trỏ)</li>
								<li>Kiểu function (hàm)</li>
								<li>Kiểu array (mảng)</li>
								<li>Kiểu chuỗi kí tự với char array (C) và std::string (C++)</li>
								<li>Kiểu dữ liệu tự định nghĩa: struct, class, enum</li>
								<li>Template</li>
								<li>Bộ nhớ Heap và cấp phát động</li>
								<li>Kiểu danh sách liên kết</li> 
								<li>Các kiểu STL Container</li> 
								<li>Các luồng nhập xuất dữ liệu</li>
								<li>Giới thiệu về các ứng dụng của C/C++ trong việc phát triển app</li>
								<li>Thực hành xây dựng Console app quản lý sinh viên</li>
							</ul>
						</div>
						<div className='display-4 fw-bold ms-4' style={{textShadow: "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000"}}>
							Nội dung khoá học
						</div>
					</div>
				</div>
			</Card>
			<div className="d-md-none">
				<div className="list-group w-auto">
					<a className="list-group-item list-group-item-action d-flex gap-3 py-3" aria-current="true">
						<img src="/img/icon/tick.png" alt="twbs" width="32" height="32" className="rounded-circle flex-shrink-0 ms-2" />
						<div className="d-flex gap-2 w-100 justify-content-between">
						<div>
							<h6 className="mb-0">Giới thiệu chung</h6>
							<p className="mb-0 opacity-75">Giải thích một số khái niệm cơ bản trong ngành phát triển phần mềm và thiết lập môi trường coding ban đầu</p>
						</div>
						<small className="opacity-50 text-nowrap me-2">1d</small>
						</div>
					</a>
					<a className="list-group-item list-group-item-action d-flex gap-3 py-3" aria-current="true">
						<img src="/img/icon/tick.png" alt="twbs" width="32" height="32" className="rounded-circle flex-shrink-0 ms-2" />
						<div className="d-flex gap-2 w-100 justify-content-between">
						<div>
							<h6 className="mb-0">Các kiểu dữ liệu & phép toán cơ bản</h6>
							<p className="mb-0 opacity-75">Các loại dữ liệu cơ bản và cách tính toán với các dữ liệu</p>
						</div>
						<small className="opacity-50 text-nowrap me-2">3d</small>
						</div>
					</a>
					<a className="list-group-item list-group-item-action d-flex gap-3 py-3" aria-current="true">
						<img src="/img/icon/tick.png" alt="twbs" width="32" height="32" className="rounded-circle flex-shrink-0 ms-2"/>
						<div className="d-flex gap-2 w-100 justify-content-between">
						<div>
							<h6 className="mb-0">Cấu trúc điều khiển </h6>
							<p className="mb-0 opacity-75">
								Cấu trúc điều kiện (if-else, switch-case), 
								cấu trúc vòng lặp (for, while)
							</p>
						</div>
						<small className="opacity-50 text-nowrap me-2">1w</small>
						</div>
					</a>
					<a className="list-group-item list-group-item-action d-flex gap-3 py-3" aria-current="true">
						<img src="/img/icon/tick.png" alt="twbs" width="32" height="32" className="rounded-circle flex-shrink-0 ms-2"/>
						<div className="d-flex gap-2 w-100 justify-content-between">
						<div>
							<h6 className="mb-0">Kiểu Pointer & Reference</h6>
							<p className="mb-0 opacity-75">Kiểu dữ liệu đặc trưng và quan trọng của ngôn ngữ C/C++</p>
						</div>
						<small className="opacity-50 text-nowrap me-2">1d</small>
						</div>
					</a>
					<a className="list-group-item list-group-item-action d-flex gap-3 py-3" aria-current="true">
						<img src="/img/icon/tick.png" alt="twbs" width="32" height="32" className="rounded-circle flex-shrink-0 ms-2"/>
						<div className="d-flex gap-2 w-100 justify-content-between">
						<div>
							<h6 className="mb-0">Kiểu Function</h6>
							<p className="mb-0 opacity-75">Chương trình con/Hàm, tham số, giá trị trả về</p>
						</div>
						<small className="opacity-50 text-nowrap me-2">3d</small>
						</div>
					</a>
					<a className="list-group-item list-group-item-action d-flex gap-3 py-3" aria-current="true">
						<img src="/img/icon/tick.png" alt="twbs" width="32" height="32" className="rounded-circle flex-shrink-0 ms-2"/>
						<div className="d-flex gap-2 w-100 justify-content-between">
						<div>
							<h6 className="mb-0">Các kiểu dữ liệu có cấu trúc</h6>
							<p className="mb-0 opacity-75">Array, Character Array, String, Linked List, STL Container</p>
						</div>
						<small className="opacity-50 text-nowrap me-2">1w</small>
						</div>
					</a>
					<a className="list-group-item list-group-item-action d-flex gap-3 py-3" aria-current="true">
						<img src="/img/icon/tick.png" alt="twbs" width="32" height="32" className="rounded-circle flex-shrink-0 ms-2"/>
						<div className="d-flex gap-2 w-100 justify-content-between">
						<div>
							<h6 className="mb-0">Các kiểu dữ liệu tự định nghĩa</h6>
							<p className="mb-0 opacity-75">Struct, Class, Enum</p>
						</div>
						<small className="opacity-50 text-nowrap me-2">1w</small>
						</div>
					</a>
					<a className="list-group-item list-group-item-action d-flex gap-3 py-3" aria-current="true">
						<img src="/img/icon/tick.png" alt="twbs" width="32" height="32" className="rounded-circle flex-shrink-0 ms-2"/>
						<div className="d-flex gap-2 w-100 justify-content-between">
						<div>
							<h6 className="mb-0">Luồng input/output </h6>
							<p className="mb-0 opacity-75"></p>
						</div>
						<small className="opacity-50 text-nowrap me-2">1d</small>
						</div>
					</a>
					<a className="list-group-item list-group-item-action d-flex gap-3 py-3" aria-current="true">
						<img src="/img/icon/tick.png" alt="twbs" width="32" height="32" className="rounded-circle flex-shrink-0 ms-2 ms-2"/>
						<div className="d-flex gap-2 w-100 justify-content-between">
						<div>
							<h6 className="mb-0">Mini project </h6>
							<p className="mb-0 opacity-75">Console app quản lý sinh viên</p>
						</div>
						<small className="opacity-50 text-nowrap me-2 me-2">3w</small>
						</div>
					</a>
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
						<img src="/img/QR/cpp.png" className="border rounded-3 shadow-lg w-75 mb-4" loading="lazy" />
						<div className="d-flex flex-column justify-content-center lead">
							<div>Chuyển khoản theo STK hoặc mã QR và ghi rõ nội dung:  </div>
							<div className='fw-bold'>CPP Basic <i>Tên_facebook_của_bạn</i></div>
							<div>Ví dụ nếu tài khoản FB của bạn là Nguyễn Văn A, nội dung CK sẽ như sau:</div>
							<div className='fw-bold'>CPP Basic Nguyen Van A</div>
						</div> 
						<hr className='d-lg-none' />
					</Col>
					<Col lg={6}>
						<h1 className="display-6 mt-3 mt-lg-0">Bước 2: Gửi yêu cầu vào group</h1>
						<Container className="justify-content-center lead">
							<a href="https://www.facebook.com/groups/vunguyencoder.laptrinhcobancpp" target="_blank">
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
						<Accordion.Header><b>2. Tại sao chúng ta nên học C/C++ để xây dựng nền tảng tư duy lập trình? </b></Accordion.Header>
						<Accordion.Body>
						<ul>
							<li>C/C++ là ngôn ngữ có cú pháp chặt chẽ, logic, bám sát vào bản chất vấn đề nên ngôn ngữ này thường được dùng làm ngôn ngữ nhập môn ở hầu hết các trường đại học nhằm trang bị cho sinh viên kiến thức nền tảng. Không chỉ ở Việt Nam, mà ở toàn thế giới, C++ cũng rất nổi tiếng, dù tuổi đời đã cao những hiện nó vẫn đang là một trong những ngôn ngữ lập trình phổ biến nhất thế giới.</li> 
							<li>C/C++ là ngôn ngữ nền tảng, rất nhiều ngôn ngữ khác như Java, Javascript, C#, Python,... đều dựa trên một phần của C++. Vậy nên khi thành thạo C++ thì bạn có thể chuyển sang bất cứ ngôn ngữ lập trình khác. Tuy nhiên, điều ngược lại thì chưa chắc. Bạn học Python trước rồi nhảy sang C++ thì cực kì khó hiểu. Vậy nên, việc học bài bản C++ sẽ giúp các bạn có thể linh động chuyển đổi giữa các ngôn ngữ khác nhau, phục vụ công việc trong tương lai</li> 
							<li>C/C++ cực kỳ mạnh mẽ, đặc biệt là tốc độ tính toán cao, nên nó thường để xây dựng nên những chương trình phức tạp như hệ điều hành, ứng dụng đồ họa (Game, xử lý ảnh,... ), phần mềm nhúng,... Vậy nên, nếu bạn có dự định trở thành lập trình viên C++ chuyên nghiệp cũng là một định hướng sáng. Ở Việt Nam, cơ hội việc làm với C++ tương đối nhiều. Còn nêu như sau này dòng đời xô đẩy bạn sang một mảng lập trình khác thì với nền tảng C++ chắc chắn cũng sẽ giúp bạn thích nghi cực nhanh với một ngôn ngữ mới</li> 	
							
						</ul>
						</Accordion.Body>
					</Accordion.Item>

					<Accordion.Item eventKey="2">
						<Accordion.Header><b>3. Ưu điểm của khóa học này</b></Accordion.Header>
						<Accordion.Body>
						<p>Chính vì C/C++ bám sát chặt chẽ những yếu tố nền tảng nhất, nên đôi khi người học sẽ cảm thấy trừu tượng và khó hiểu. Với kinh nghiệm lâu năm của mình trong các dự án phát triển hệ thống với C++, mình hiểu được những khó khăn đó và xây dựng nên một hệ phương pháp luận để giải thích và truyền đạt lại tới các bạn. Trong khóa học này, các bạn sẽ có quyền lợi như sau:</p>
						<ul>
							<li>Học kép cả C và C++</li> 
							<li>Tham gia lớp học với những bài giảng chuyên sâu của mình.</li> 
							<li>Khi gặp bất cứ khó khăn, vấn đề khó hiểu nào, mình sẽ hỗ trợ trực tiếp các bạn thông qua các phương tiện liên lạc như Teamviewer, Zalo, Skype,... </li> 
							<li>Bạn sẽ sở hữu khóa học vô thời hạn, tức là chỉ một lần chi phí là sở hữu gói support trọn đời</li> 
						</ul>
						</Accordion.Body>
					</Accordion.Item>

					<Accordion.Item eventKey="4">
						<Accordion.Header><b>4. Hình thức học</b></Accordion.Header>
						<Accordion.Body>
						<p>Học qua các video dựng sẵn và trao đổi 1-1 trực tiếp với mình khi có vấn đề 
							khúc mắc. 
						</p>
						<center><img src={course_preview} alt="Lớp học lập trình C++" width="200" height="400"/></center>
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
	
		</>
	)
}


