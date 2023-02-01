import 'bootstrap/dist/css/bootstrap.min.css'
import './home.scss'
import { Container, Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import Tooltip from 'react-bootstrap/Tooltip';

let goToRoadMap = () => {
	document.getElementById('roadmap').scrollIntoView(true)
}

function ContentCourse(props) {
	return (<>
		<a href={props.href}>    
			<img src={"img/" + props.imgFilename} className="course-icon p-2"/>
		</a>
		<h5 className="course-name">{props.title}</h5>
	</>)
}

function HeaderPhase({children}) {
	return(
		<div className="display-6 text-center lead m-2">
			{children}
		</div>
	)
}

function Arrow() {
	return(
		<Container>
			<div className="row mx-5 justify-content-center">
				<div className="col col-md-6 text-center">
					<img src="img/down-arrow.png" className="w-25 p-2"></img>
				</div>
			</div>
		</Container>
	)
}

export default function Home() {
	return(<div>
		<Container fluid className='bg-dark text-white'>
			<div className="container col-xxl-8 px-4 py-5">
				<div className="row flex-lg-row-reverse align-items-center g-5 py-5">
					<div className="col-10 col-sm-8 col-lg-6">
						<img src="img/vunguyen.png" className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy" style={{transform: 'scale(1.2)'}}>
						</img>
					</div>
					<div className="col-lg-6">
						<h1 className="display-5 fw-bold lh-1 mb-3">Học lập trình cùng Vũ Nguyễn Coder</h1>
						<p className="lead">Xin chào các anh em, mình là Vũ Nguyễn Coder. Sau nhiều năm lăn lộn trong ngành, mình đã xây dựng được một hệ thống các khoá học lập trình với mục tiêu cung cấp các kiến thức cốt lõi và nền tảng nhất dành cho những anh em đang mong muốn trở thành Software Engineer</p>
						<div className="d-grid gap-2 d-md-flex justify-content-md-start">
							<button type="button" className="btn btn-outline-info btn-lg px-4 me-sm-3 fw-bold" onClick={goToRoadMap}>Xem lộ trình</button>
							<button type="button" className="btn btn-outline-light btn-lg px-4">Đăng ký học</button>
						</div>
					</div>
				</div>
			</div>
		</Container>
		
		<div id="roadmap" className="display-2 fw-bold text-center m-5" style={{scrollMarginTop: '60px'}}>
        	Roadmap
    	</div>
		<HeaderPhase>Phase 1: Nhập môn</HeaderPhase>
		<Container style={{width: '90%'}}>
			<Row>
				<div className="col text-center lead">
					Programing language
				</div>
			</Row>
			<Row className="border border-primary border-2" style={{borderRadius: '20px'}}>
				<div className="col-6 text-center">	
					<ContentCourse href="/courses/basics-cpp" imgFilename="cpp.png" title="C/C++" />
				</div>
				<div className="col-6 text-center">
					<ContentCourse href="/courses/basics-python" imgFilename="python.png" title="Python" />	         
				</div>
			</Row>
		</Container>

		<Arrow />

		<HeaderPhase>Phase 2: Mở rộng</HeaderPhase>
		<Container className="border border-primary border-1 mx-auto" style={{width: '90%', borderRadius: '20px'}}>
			<Row className="mx-4 mb-4 g-5">
				<Col xs={12} md={6} lg={4} className="text-center">
					<Row>
						<Col className="text-center lead">Markup language</Col>
					</Row>
					<Row className="border border-primary border-2" style={{borderRadius: '20px'}}>
						<Col>
							<ContentCourse href="/courses/html" imgFilename="html.png" title="HTML" />	         
						</Col>
						<Col>
							<ContentCourse href="/courses/css" imgFilename="css.png" title="CSS" />	         
						</Col>
					</Row>    
				</Col>
				<div className="col-12 col-md-6 col-lg-4 text-center">
					<Row>
						<div className="col text-center text-muted lead">Programing language</div>
					</Row>
					<Row className="border border-primary border-2 rounded-4" style={{borderRadius: '20px'}}>
						<Col>
							<ContentCourse href="/courses/basics-javascript" imgFilename="javascript.png" title="Javascript" />	         
						</Col>
						<Col>
							<ContentCourse href="#" imgFilename="java.png" title="Java" />	         
						</Col>
						<Col>
							<ContentCourse href="#" imgFilename="c-sharp.png" title="C#" />	         
						</Col>
					</Row>    
				</div>
				<div className="col-12 col-md col-lg-4 text-center">
					<div className="row">
						<div className="col text-center text-muted lead">Data</div>
					</div>
					<div className="row border border-primary border-2 rounded-4" style={{borderRadius: '20px'}}>
						<Col>
							<ContentCourse href="/courses/database" imgFilename="database.png" title="Database" />	         
						</Col>
						<Col>
							<ContentCourse href="#" imgFilename="dsa.png" title="Data structure" />	         
						</Col>
					</div>    
				</div>
			</Row>
		</Container>
		
		<Arrow/>

		<HeaderPhase>Phase 3: Phát triển</HeaderPhase>
		<Container className="border border-primary border-1" style={{width: '90%', borderRadius: '20px'}}>
			<Row className="mx-4 mb-4 g-5">
				<Col className="text-center">
					<Row>
						<Col className="text-center lead">Architecture</Col>
					</Row>
					<Row className="border border-primary border-2" style={{borderRadius: '20px'}}>
						<Col>
							<ContentCourse href="/courses/oop-cpp" imgFilename="oop_cpp.png" title="Object oriented programing" />	         
						</Col>
						<Col>
							<ContentCourse href="#" imgFilename="computer-networks.png" title="Network programing" />	         
						</Col>
						<Col>
							<ContentCourse href="#" imgFilename="design-pattern.png" title="Design Pattern" />	         
						</Col>
					</Row>    
				</Col>
				<Col className="text-center">
					<Row>
						<Col className="text-center lead">System Management</Col>
					</Row>
					<Row className="border border-primary border-2" style={{borderRadius: '20px'}}>
						<Col>
							<ContentCourse href="#" imgFilename="linux.png" title="Linux" />	         
						</Col>
						<Col>
							<ContentCourse href="#" imgFilename="docker.png" title="Docker" />	         
						</Col>
					</Row>    
				</Col>
			</Row>
		</Container>
		
		<Arrow/>

		<HeaderPhase>Phase 4: Xây dựng</HeaderPhase>
		<Container className="border border-primary border-1" style={{width: '90%', borderRadius: '20px'}}>
			<Row className="mx-4 mb-4 g-5">
				<Col className="text-center">
					<Row>
						<Col className="text-center lead">Frontend Programing</Col>
					</Row>
					<Row className="border border-primary border-2" style={{borderRadius: '20px'}}>
						<Col>
							<ContentCourse href="#" imgFilename="react.png" title="React" />	         
						</Col>
						<Col>
							<ContentCourse href="#" imgFilename="flutter.png" title="Flutter" />	         
						</Col>
						<Col>
							<ContentCourse href="#" imgFilename="qt.png" title="Qt" />	         
						</Col>
					</Row>    
				</Col>
				<Col className="text-center">
					<Row>
						<Col className="text-center lead">Backend</Col>
					</Row>
					<Row className="border border-primary border-2" style={{borderRadius: '20px'}}>
						<Col>
							<ContentCourse href="#" imgFilename="express.png" title="Express.js" />	         
						</Col>
						<Col>
							<ContentCourse href="#" imgFilename="flask.png" title="Flask" />	         
						</Col>
					</Row>    
				</Col>
			</Row>
		</Container>
		
		<Arrow/>

		<HeaderPhase>Phase 5: Mở rộng</HeaderPhase>
		<Container style={{width: '90%'}}>
			<Row>
				<div className="col text-center lead">
					Bổ trợ
				</div>
			</Row>
			<Row className="border border-primary border-2" style={{borderRadius: '20px'}}>
				<div className="col text-center">
					<ContentCourse href="/course/basics-python" imgFilename="ai.png" title="AI" />	         
				</div>
				<div className="col text-center">
					<ContentCourse href="/course/basics-python" imgFilename="elastic.png" title="Search Engine" />	         
				</div>
				<div className="col text-center">
					<ContentCourse href="/course/basics-python" imgFilename="data-visualization.png" title="Data Visulazation" />	         
				</div>
			</Row>
		</Container>
		
		<Arrow/>

		<HeaderPhase>To be continue...</HeaderPhase>
		
		<div className="bg-dark text-secondary px-4 py-5 text-center">
			<div className="py-5">
				<h1 className="display-5 fw-bold text-white">Mục tiêu đào tạo?</h1>
				<div className="col-lg-7 mx-auto">
					<p className="fs-5 mb-4">
						Các khoá học của mình hướng đến xây dựng 1 hệ thống kiến thức nền tảng 
						giống như trường đại học/cao đẳng nhưng được rút gọn và hệ thống hoá lại 
						những gì cần thiết nhất. Ngoài ra, mình còn bổ sung những kiến thức thực tế 
						hỗ trợ tiếp cận một vài công nghệ nổi bật nhằm hoàn thiện tư duy và mở rộng góc nhìn
						của một Software Engineer. Mục tiêu cuối cùng 
						là trở thành 1 Problem Solver (người giải quyết vấn đề) chứ không đơn thuần 
						là code máy móc theo 1 framework nào đó. 
					</p>
					<div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
						<button type="button" className="btn btn-outline-info btn-lg px-4 me-sm-3 fw-bold">Xem lộ trình</button>
						<button type="button" className="btn btn-outline-light btn-lg px-4">Đăng ký ngay</button>
						</div>
				</div>
			</div>
		</div>
		
		<div className="container px-4 py-5" id="custom-cards">
			<h2 className="pb-2 border-bottom">Đối tượng có thể theo học</h2>
		
			<div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
				<div className="col">
					<div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg" style={{backgroundImage: "url('img/coder1.jpg')"}}>
						<div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
							<h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">Người mới bắt đầu với lập trình</h3>
						</div>
					</div>
				</div>
		
				<div className="col">
					<div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg" style={{backgroundImage: "url('img/coder2.jpg')"}}>
						<div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
							<h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">Học sinh, sinh viên IT đang bị mất gốc</h3>
						</div>
					</div>
				</div>
		
				<div className="col">
					<div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg" style={{backgroundImage: "url('img/coder3.jpg')"}}>
						<div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
							<h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">Lập trình viên đang muốn củng cố kiến thức</h3>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div className="container px-4 py-5 mt-0" id="features">
			<h2 className="pb-2 border-bottom">Ưu điểm</h2>
			<div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 py-5">
				<div className="col d-flex align-items-start">
					<svg className="bi text-muted flex-shrink-0 me-3" width="1.75em" height="1.75em"><use xlinkHref="#bootstrap"/></svg>
					<div>
						<h3 className="fw-bold mb-0 fs-4">Giảng dạy trực quan</h3>
						<p>Thay vì chỉ dẫn qua slide như phương pháp truyền thống, thì tôi tập trung vào code</p>
					</div>
				</div>
				<div className="col d-flex align-items-start">
					<svg className="bi text-muted flex-shrink-0 me-3" width="1.75em" height="1.75em"><use xlinkHref="#cpu-fill"/></svg>
					<div>
						<h3 className="fw-bold mb-0 fs-4">Hiểu bản chất</h3>
						<p>Chương trình chạy được là vì sao?</p>
					</div>
				</div>
				<div className="col d-flex align-items-start">
					<svg className="bi text-muted flex-shrink-0 me-3" width="1.75em" height="1.75em"><use xlinkHref="#calendar3"/></svg>
					<div>
						<h3 className="fw-bold mb-0 fs-4">Thực hành</h3>
						<p>Paragraph of text beneath the heading to explain the heading.</p>
					</div>
				</div>
				<div className="col d-flex align-items-start">
					<svg className="bi text-muted flex-shrink-0 me-3" width="1.75em" height="1.75em"><use xlinkHref="#home"/></svg>
					<div>
						<h3 className="fw-bold mb-0 fs-4">Giờ học linh hoạt</h3>
						<p>Paragraph of text beneath the heading to explain the heading.</p>
					</div>
				</div>
				<div className="col d-flex align-items-start">
					<svg className="bi text-muted flex-shrink-0 me-3" width="1.75em" height="1.75em"><use xlinkHref="#speedometer2"/></svg>
					<div>
						<h3 className="fw-bold mb-0 fs-4">Hỗ trợ trực tiếp</h3>
						<p>Paragraph of text beneath the heading to explain the heading.</p>
					</div>
				</div>
				<div className="col d-flex align-items-start">
					<svg className="bi text-muted flex-shrink-0 me-3" width="1.75em" height="1.75em"><use xlinkHref="#toggles2"/></svg>
					<div>
						<h3 className="fw-bold mb-0 fs-4">Chi phí tối ưu</h3>
						<p>Paragraph of text beneath the heading to explain the heading.</p>
					</div>
				</div>
				<div className="col d-flex align-items-start">
					<svg className="bi text-muted flex-shrink-0 me-3" width="1.75em" height="1.75em"><use xlinkHref="#geo-fill"/></svg>
					<div>
						<h3 className="fw-bold mb-0 fs-4">Featured title</h3>
						<p>Paragraph of text beneath the heading to explain the heading.</p>
					</div>
				</div>
				<div className="col d-flex align-items-start">
					<svg className="bi text-muted flex-shrink-0 me-3" width="1.75em" height="1.75em"><use xlinkHref="#tools"/></svg>
					<div>
						<h3 className="fw-bold mb-0 fs-4">Featured title</h3>
						<p>Paragraph of text beneath the heading to explain the heading.</p>
					</div>
				</div>
			</div>
		</div>
	
		<div className="container-fluid bg-dark text-white">
			<div className="container">
				<footer className="py-5">
					<div className="row">
					<div className="col-6 col-md-2 mb-3">
						<h5>Dịch vụ</h5>
						<ul className="nav flex-column">
						<li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Đào tạo</a></li>
						<li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Thiết kế web</a></li>
						<li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Tư vấn</a></li>
						<li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">FAQs</a></li>
						<li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">About</a></li>
						</ul>
					</div>
				
					<div className="col-6 col-md-2 mb-3">
						<h5>Untitled</h5>
						<ul className="nav flex-column">
						<li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Untitled</a></li>
						<li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Untitled</a></li>
						<li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Untitled</a></li>
						<li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Untitled</a></li>
						<li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Untitled</a></li>
						</ul>
					</div>
				
					<div className="col-6 col-md-2 mb-3">
						<h5>Untitled</h5>
						<ul className="nav flex-column">
						<li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Untitled</a></li>
						<li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Untitled</a></li>
						<li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Untitled</a></li>
						<li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Untitled</a></li>
						<li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Untitled</a></li>
						</ul>
					</div>
				
					<div className="col-md-5 offset-md-1 mb-3">
						<form>
							<h5>Theo dõi để nhận tin tức mới nhất</h5>
							<p>Cập nhật các khoá học mới qua email</p>
							<div className="d-flex flex-column flex-sm-row w-100 gap-2">
								<label for="newsletter1" className="visually-hidden">Email address</label>
								<input id="newsletter1" type="text" className="form-control" placeholder="Email address"/>
								<button className="btn btn-primary" type="button">Subscribe</button>
							</div>
						</form>
					</div>
					</div>
				
					<div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
					<p>&copy; 2023 - Thiết kế bởi Vũ Nguyễn Coder</p>
					<ul className="list-unstyled d-flex">
						<li className="ms-3"><a className="link-dark" href="#"><svg className="bi" width="24" height="24"><use xlinkHref="#twitter"/></svg></a></li>
						<li className="ms-3"><a className="link-dark" href="#"><svg className="bi" width="24" height="24"><use xlinkHref="#instagram"/></svg></a></li>
						<li className="ms-3"><a className="link-dark" href="#"><svg className="bi" width="24" height="24"><use xlinkHref="#facebook"/></svg></a></li>
					</ul>
					</div>
				</footer>
			</div>
		</div>
	</div>)
}
