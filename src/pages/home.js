import 'bootstrap/dist/css/bootstrap.min.css'
import './home.scss'
import { Container, Row, Col } from 'react-bootstrap';
import { IconBookmarkHeart, IconBox, IconChat, IconClock, IconFacebook, IconGear, IconInstagram, IconLinkedIn, IconMoney, IconQuestion, IconTiktok, IconTool, IconYoutube } from '../components/icons';

let goToRoadMap = () => {
	document.getElementById('roadmap').scrollIntoView(true)
}

function ContentCourse(props) {
	return (<>
		<div class="course-container p-2">
			<a href={props.href}>    
				<img src={"img/" + props.imgFilename} className="course-icon"/>
			</a>
			<span class="fw-bold fs-6 course-priority " style={{backgroundColor: (props.optional ? "green" : "red")}} >
				✓
			</span>
		</div>
		<div className={"course-name " + (props.opened ? "fw-bold" : "fw-normal fst-italic")}>{props.title}</div>
		<div className={"text-center text-muted fs-6 " + (props.opened ? "fw-normal" : "fw-lighter")}>{props.subtitle}</div>
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
					<img src="img/icon/down-arrow.png" className="w-25 p-2"></img>
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
						<img src="img/icon/vunguyen.png" className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy" style={{transform: 'scale(1.2)'}}>
						</img>
					</div>
					<div className="col-lg-6">
						<h1 className="display-5 fw-bold lh-1 mb-3">Học lập trình cùng Vũ Nguyễn Coder</h1>
						<p className="lead">Xin chào các anh em, mình là Vũ Nguyễn Coder. Sau nhiều năm làm việc dưới nhiều vai trò trong ngành IT, mình đã đúc rút xây dựng được một hệ thống các nội dung kiến thức cốt lõi và nền tảng nhất để trở thành Software Engineer</p>
						<div className="d-grid gap-2 d-md-flex justify-content-md-start">
							<button type="button" className="btn btn-outline-info btn-lg px-4 me-sm-3 fw-bold" onClick={goToRoadMap}>Xem lộ trình</button>
							<button type="button" className="btn btn-outline-light btn-lg px-4" onClick={goToRoadMap}>Đăng ký học</button>
						</div>
					</div>
				</div>
			</div>
		</Container>
		
		<div id="roadmap" className="m-5 p-5" style={{scrollMarginTop: '60px'}}>
			<div className="display-2 fw-bold text-center">Roadmap</div>
			<div className="display-6 text-center text-muted">Click vào từng môn học để xem chi tiết</div>
			<div class="small fw-bold">Học phần in đậm: đang hoạt động</div>
			<div class="small fst-italic">Học phần in nghiêng : chưa hoạt động</div>
			<div>
				<span class="badge rounded-circle small course-priority bg-danger text-white">
					✓
				</span> 
				<span> : học phần nên học</span>
			</div>
			<div>
				<span class="badge rounded-circle small course-priority bg-success text-white">
					✓
				</span> 
				<span> : học phần tùy chọn</span>
			</div>
    	</div>
		<HeaderPhase>Phase 1: Nhập môn</HeaderPhase>
		<Container className="border border-primary border-1 mx-auto" style={{width: '90%', borderRadius: '20px'}}>
			<Row className="mx-4 mb-4 g-5">
				<Col xs={12} md={2} className="text-center">
					<Row>
						<Col className="text-center lead">&nbsp;</Col>
					</Row>
					<Row className="" style={{borderRadius: '20px'}}>
						<Col>
							<ContentCourse href="/courses/basics-it" imgFilename="icon/it.png" title="Tin học cơ sở" />	         
						</Col>
					</Row>    
				</Col>
				<Col xs={12} md={6} className="text-center">
					<Row>
						<Col className="text-center lead">Programing language</Col>
					</Row>
					<Row className="border border-primary border-2" style={{borderRadius: '20px'}}>
						<Col>
							<ContentCourse href="/courses/basics-cpp" imgFilename="icon/cpp.png" title="C/C++" opened/>	         
						</Col>
						<Col>
							<ContentCourse href="/courses/basics-python" imgFilename="icon/python.png" title="Python" opened />	         
						</Col>
						<Col>
							<ContentCourse href="/courses/basics-javascript" imgFilename="icon/javascript.png" title="Javascript" opened />
						</Col>
						<Col>
							<ContentCourse href="/courses/java" imgFilename="icon/java.png" title="Java" optional opened/>	         
						</Col>
						<Col>
							<ContentCourse href="#" imgFilename="icon/c-sharp.png" title="C#" optional/>	         
						</Col>
					</Row>    
				</Col>
				
				<Col xs={12} md={4} className="text-center">
					<Row>
						<Col className="text-center lead">Markup & Style language</Col>
					</Row>
					<Row className="border border-primary border-2" style={{borderRadius: '20px'}}>
						<Col>
							<ContentCourse href="/courses/html" imgFilename="icon/html.png" title="HTML" opened/>	         
						</Col>
						<Col>
							<ContentCourse href="/courses/css" imgFilename="icon/css.png" title="CSS" opened/>	         
						</Col>
					</Row>    
				</Col>
			</Row>
		</Container>
		<Arrow />
		<HeaderPhase>Phase 2: Tư duy</HeaderPhase>
		<Container className="border border-primary border-1 mx-auto" style={{width: '90%', borderRadius: '20px'}}>
			<Row className="mx-4 mb-4 g-5">
				<Col className="text-center">
					<Row>
						<Col className="text-center lead">&nbsp;</Col>
					</Row>
					<Row className="" style={{borderRadius: '20px'}}>
						<Col>
							<ContentCourse href="/courses/database" imgFilename="icon/database.png" title="Cơ sở dữ liệu" opened />	         
						</Col>
						<Col>
							<ContentCourse href="/courses/oop-cpp" imgFilename="icon/oop_cpp.png" title="Lập trình hướng đối tượng" opened/>	         
						</Col>
						<Col>
							<ContentCourse href="/courses/algorithm" imgFilename="icon/algo.png" title="Thuật toán" opened/>	         
						</Col>
						<Col>
							<ContentCourse href="/courses/datastructure" imgFilename="icon/datastructure.png" title="Cấu trúc dữ liệu" opened/>	         
						</Col>
					</Row>    
				</Col>	
			</Row>
		</Container>
		<Arrow />

		<HeaderPhase>Phase 3: Phát triển</HeaderPhase>
		<Container className="border border-primary border-1 mx-auto" style={{width: '90%', borderRadius: '20px'}}>
			<Row className="mx-4 mb-4 g-5">
				<div className="col-12 text-center">
					<div className="row">
						<div className="col text-center text-muted lead">&nbsp;</div>
					</div>
					<Row style={{borderRadius: '20px'}}>
						<Col>
							<ContentCourse href="/courses/linux" imgFilename="icon/linux.png" title="Linux" />	         
						</Col>
						<Col>
							<ContentCourse href="#" imgFilename="icon/computer-networks.png" title="Networking" />	         
						</Col>
						<Col>
							<ContentCourse href="#" imgFilename="icon/security.png" title="Security" />	         
						</Col>
						<Col>
							<ContentCourse href="#" imgFilename="icon/computer-graphics.png" title="Computer Graphics" optional />	         
						</Col>
						<Col>
							<ContentCourse href="#" imgFilename="icon/ai.png" title="AI" optional />	         
						</Col>
					</Row>    
				</div>
			</Row>
		</Container>
		
		<Arrow/>

		<HeaderPhase>Phase 4: Chuyên môn hóa</HeaderPhase>
		<Container className="border border-primary border-1" style={{width: '90%', borderRadius: '20px'}}>
			<Row className="mx-4 mb-4 g-5">
				<div className="col-12 text-center">
					<Row>
						<div className="col text-center text-muted lead">Programing language</div>
					</Row>
					<Row className="border border-primary border-2 rounded-4" style={{borderRadius: '20px'}}>
						<Col>
							<ContentCourse href="#" imgFilename="icon/swift.png" title="Swift" optional/>	         
						</Col>
						<Col>
							<ContentCourse href="#" imgFilename="icon/golang.png" title="Golang" optional />	         
						</Col>
						<Col>
							<ContentCourse href="#" imgFilename="icon/rust.png" title="Rust" optional />	         
						</Col>
						<Col>
							<ContentCourse href="#" imgFilename="icon/php.png" title="PHP" optional />	         
						</Col>
						<Col>
							<ContentCourse href="#" imgFilename="icon/cpp.png" title="C++ Advanced" />	         
						</Col>
					</Row>    
				</div>
			</Row>
			<Row className="mx-4 mb-4 g-5">
				<Col xs={12} md={6} className="text-center">
					<Row>
						<Col className="text-center lead">Front-end</Col>
					</Row>
					<Row className="border border-primary border-2" style={{borderRadius: '20px'}}>
						<Col>
							<ContentCourse href="#" imgFilename="icon/react.png" title="React" subtitle="UI Library"/>	         
						</Col>
						<Col>
							<ContentCourse href="#" imgFilename="icon/nextjs.png" title="Next.js" subtitle="Web framework"/>	         
						</Col>
						<Col>
							<ContentCourse href="#" imgFilename="icon/reactnative.png" title="React Native" subtitle="Cross-platform app"/>	         
						</Col>
						<Col>
							<ContentCourse href="#" imgFilename="icon/flutter.png" title="Flutter" subtitle="Cross-platform app" optional />	         
						</Col>
						<Col>
							<ContentCourse href="#" imgFilename="icon/electron.png" title="Electron" subtitle="Dekstop app" optional />	         
						</Col>
						<Col>
							<ContentCourse href="#" imgFilename="icon/ionic.png" title="Ionic" subtitle="Cross-platform app" optional />	         
						</Col>
						<Col>
							<ContentCourse href="#" imgFilename="icon/swiftui.png" title="SwiftUI" subtitle="Apple app" />	         
						</Col>
						<Col>
							<ContentCourse href="#" imgFilename="icon/qt.png" title="Qt" subtitle="Desktop/Mobile app" optional/>	         
						</Col>
						<Col>
							<ContentCourse href="#" imgFilename="icon/textual.jpeg" title="Textual" subtitle="Console app" optional />	         
						</Col>
					</Row>    
				</Col>
				<Col xs={12} md={6} className="text-center">
					<Row>
						<Col className="text-center lead">Back-end</Col>
					</Row>
					<Row className="border border-primary border-2" style={{borderRadius: '20px'}}>
						<Col>
							<ContentCourse href="#" imgFilename="icon/flask.png" title="Flask" subtitle="Web framework" />	         
						</Col>
						<Col>
							<ContentCourse href="#" imgFilename="icon/django.png" title="Django" subtitle="Web framework" />	         
						</Col>
						<Col>
							<ContentCourse href="#" imgFilename="icon/express.png" title="Express.js" subtitle="Web framework"/>	         
						</Col>
						<Col>
							<ContentCourse href="#" imgFilename="icon/gin.png" title="Gin" subtitle="Web framework" optional />	      
						</Col>
						<Col>
							<ContentCourse href="#" imgFilename="icon/nginx.png" title="Nginx" subtitle="Web server"/>	         
						</Col>
						<Col>
							<ContentCourse href="#" imgFilename="icon/postgresql.png" title="Postgresql" subtitle="Relational Database" />	      
						</Col>
						<Col>
							<ContentCourse href="#" imgFilename="icon/mongodb.svg" title="MongoDB" subtitle="Document Database" />	      
						</Col>
						<Col>
							<ContentCourse href="#" imgFilename="icon/redis.png" title="Redis" subtitle="Key-Value Database" />	      
						</Col>
						<Col>
							<ContentCourse href="#" imgFilename="icon/haproxy.png" title="HAProxy" subtitle="Load balancer" />	      
						</Col>
						<Col>
							<ContentCourse href="#" imgFilename="icon/rabbitmq.png" title="RabbitMQ" subtitle="Message Broker" /> 
						</Col>
						<Col>
							<ContentCourse href="#" imgFilename="icon/elastic.png" title="Elasticsearch" subtitle="Search engine" optional />	         
						</Col>
						<Col>
							<ContentCourse href="#" imgFilename="icon/minio.png" title="MinIO" subtitle="Object Storage" optional />	         
						</Col>
					</Row>    
				</Col>
			</Row>
		</Container>
		
		<Arrow/>

		<HeaderPhase>Phase 5: Mở rộng</HeaderPhase>
		<Container className="border border-primary border-1" style={{width: '90%', borderRadius: '20px'}}>
			<Row className="mx-4 mb-4 g-5">
				<Col xs={12} className="text-center">
					<Row>
						<Col className="text-center lead">DevOps</Col>
					</Row>
					<Row className="border border-primary border-2" style={{borderRadius: '20px'}}>
						<Col>
							<ContentCourse href="#" imgFilename="icon/git.png" title="Git" subtitle="Version control" />	         
						</Col>
						<Col>
							<ContentCourse href="#" imgFilename="icon/virtualbox.png" title="Virtual box" subtitle="Virtualization" />	         
						</Col>
						<Col>
							<ContentCourse href="#" imgFilename="icon/proxmox.png" title="Proxmox" subtitle="Virtualization" />	         
						</Col>
						<Col>
							<ContentCourse href="#" imgFilename="icon/docker.png" title="Docker" subtitle="Containerization" />	         
						</Col>
						<Col>
							<ContentCourse href="#" imgFilename="icon/aws.png" title="AWS" subtitle="Cloud computing" />	         
						</Col>
						<Col>
							<ContentCourse href="#" imgFilename="icon/openstack.png" title="OpenStack" subtitle="Cloud computing" />	         
						</Col>
						<Col>
							<ContentCourse href="#" imgFilename="icon/solana.png" title="Solana" subtitle="Web3" optional/>	         
						</Col>
						<Col>
							<ContentCourse href="#" imgFilename="icon/prometheus.png" title="Prometheus" subtitle="Monitoring" />	         
						</Col>
						<Col>
							<ContentCourse href="#" imgFilename="icon/grafana.png" title="Grafana" subtitle="Monitoring" />	         
						</Col>
						<Col>
							<ContentCourse href="#" imgFilename="icon/grafana-loki.png" title="Grafana Loki" subtitle="Monitoring" />	         
						</Col>
						<Col>
							<ContentCourse href="#" imgFilename="icon/jenkins.png" title="Jenkins" subtitle="CI/CD"/>	         
						</Col>
						<Col>
							<ContentCourse href="#" imgFilename="icon/vagrant.png" title="Vagrant" subtitle="Infrastructure as Code" optional />	         
						</Col>
						<Col>
							<ContentCourse href="#" imgFilename="icon/terraform.png" title="Terraform" subtitle="Infrastructure as Code"/>	         
						</Col>
						<Col>
							<ContentCourse href="#" imgFilename="icon/ansible.png" title="Ansible" subtitle="Infrastructure as Code" />	         
						</Col>
						<Col>
							<ContentCourse href="#" imgFilename="icon/kurbernetes.png" title="Kubernetes" subtitle="Container orchestration" />
						</Col>
					</Row>    
				</Col>
				<Col xs={12} md={8} className="text-center">
					<Row>
						<Col className="text-center lead">Programing language</Col>
					</Row>
					<Row className="border border-primary border-2" style={{borderRadius: '20px'}}>
						<Col>
							<ContentCourse href="#" imgFilename="icon/typescript.png" title="Typescript" />	         
						</Col>
						<Col>
							<ContentCourse href="#" imgFilename="icon/webassembly.png" title="Web Assembly" optional />	         
						</Col>
						<Col>
							<ContentCourse href="#" imgFilename="icon/lua.png" title="Lua" optional />	         
						</Col>
						<Col>
							<ContentCourse href="#" imgFilename="icon/perl.png" title="Perl" optional />	         
						</Col>
						<Col>
							<ContentCourse href="#" imgFilename="icon/haskell.png" title="Haskell" optional />	         
						</Col>
						<Col>
							<ContentCourse href="#" imgFilename="icon/ruby.png" title="Ruby" optional />	         
						</Col>
					</Row>    
				</Col>
				<Col xs={12} md={4} className="text-center">
					<Row>
						<Col className="text-center lead">Testing</Col>
					</Row>
					<Row className="border border-primary border-2" style={{borderRadius: '20px'}}>
						<Col>
							<ContentCourse href="#" imgFilename="icon/postman.svg" title="Postman" subtitle="API Test" />	         
						</Col>
						<Col>
							<ContentCourse href="#" imgFilename="icon/jmeter.png" title="JMeter" subtitle="Stress test" />	         
						</Col>
						<Col>
							<ContentCourse href="#" imgFilename="icon/selenium.png" title="Selenium" subtitle="Automation Test" />	         
						</Col>
					</Row>    
				</Col>
			</Row>
		</Container>

		<Arrow/>

		<HeaderPhase>To be continue... <br/>Học, học nữa, học mãi!<br/><br/><br/></HeaderPhase>
		
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
						<button type="button" className="btn btn-outline-info btn-lg px-4 me-sm-3 fw-bold" onClick={goToRoadMap}>Xem lộ trình</button>
						<button type="button" className="btn btn-outline-light btn-lg px-4" onClick={goToRoadMap}>Đăng ký ngay</button>
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
					<IconBox width="1.75em" height="1.75em" />
					<div>
						<h3 className="fw-bold mb-0 fs-4">Tính thực tế</h3>
						<p>Bài giảng được thực hiện song song với code trực tiếp trên công cụ. </p>
					</div>
				</div>
				<div className="col d-flex align-items-start">
					<IconQuestion width="1.75em" height="1.75em" />
					<div>
						<h3 className="fw-bold mb-0 fs-4">Hiểu bản chất</h3>
						<p>Không chỉ là nhìn code chạy được mà các bạn sẽ hiểu tại sao kết quả lại như thế!</p>
					</div>
				</div>
				<div className="col d-flex align-items-start">
					<IconGear width="1.75em" height="1.75em" />
					<div>
						<h3 className="fw-bold mb-0 fs-4">Thực hành</h3>
						<p>Sau các bài giảng trong một chương, sẽ có phần bài thực hành từ dễ đến khó để các bạn được củng cố kiến thức</p>
					</div>
				</div>
				<div className="col d-flex align-items-start">
					<IconClock width="1.75em" height="1.75em" />
					<div>
						<h3 className="fw-bold mb-0 fs-4">Giờ học linh hoạt</h3>
						<p>Các bài giảng được dựng sẵn nên bạn hoàn toàn có thể học vào bất cứ lúc nào </p>
					</div>
				</div>
				<div className="col d-flex align-items-start">
					<IconChat width="1.75em" height="1.75em" />
					<div>
						<h3 className="fw-bold mb-0 fs-4">Chat support 1-1</h3>
						<p>Khi gặp bất cứ vấn đề gì khó hiểu về bài giảng cũng như bài tập, mình sẽ support trực tiếp qua các công cụ chat như Discord, Telegram,... </p>
					</div>
				</div>
				<div className="col d-flex align-items-start">
					<IconMoney width="1.75em" height="1.75em" />
					<div>
						<h3 className="fw-bold mb-0 fs-4">Chi phí tối ưu</h3>
						<p>Học phí cực kỳ vừa phải với mức giá sinh viên, nhưng chất lượng đáp ứng đủ để đi làm</p>
					</div>
				</div>
				<div className="col d-flex align-items-start">
					<IconBookmarkHeart width="1.75em" height="1.75em" />
					<div>
						<h3 className="fw-bold mb-0 fs-4">Học trọn đời</h3>
						<p>Bạn sẽ sở hữu khoá học cũng như support trọn đời</p>
					</div>
				</div>
				<div className="col d-flex align-items-start">
					<IconTool width="1.75em" height="1.75em" />
					<div>
						<h3 className="fw-bold mb-0 fs-4">Update liên tục</h3>
						<p>Khoá học sẽ luôn update kịp thời những phiên bản mới nhất</p>
					</div>
				</div>
			</div>
		</div>
		
		<div className="text-secondary px-4 text-center">
			<div className="py-5">
				<h1 className="display-5 fw-bold">Đối tác tài trợ</h1>
				<div className="col-lg-7 mx-auto">
					<a href="https://jetbrains.com" target="_blank">
						<img src="img/sponsor/jetbrains.png" width="40%"/>
					</a>
				</div>
			</div>
		</div>
	</div>)
}
