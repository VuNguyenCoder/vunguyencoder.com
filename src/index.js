import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import Home from './pages/home'
import Maintainance from './pages/maintainance'
import BasicsCppCourse from './pages/courses/CourseCpp'
import OOPCppCourse from './pages/courses/CourseOOP'
import BasicsPythonCourse from './pages/courses/CoursePython'
import BasicsJavascriptCourse from './pages/courses/CourseJavascript'
import HTMLCourse from './pages/courses/CourseHTML'
import CSSCourse from './pages/courses/CourseCSS'
import DatabaseCourse from './pages/courses/CourseDatabase'

import logo from './VuNguyenCoder_Logo.png'

import { IconBookmarkHeart, IconBox, IconChat, IconClock, IconFacebook, IconGear, IconInstagram, IconLinkedIn, IconMoney, IconQuestion, IconTiktok, IconTool, IconYoutube } from './components/icons';

function App() {
	return(	
		<div>
			<BrowserRouter basename={process.env.PUBLIC_URL}>
				<Navbar bg='dark' variant='dark' 
					sticky='top' expand='md' collapseOnSelect>
					<Navbar.Brand as={Link} to={"/"}>
						<img src={logo} width='80px' height='40px' style={{filter: 'invert(100%)', margin: '0 10px'}} />
					</Navbar.Brand>

					<Navbar.Toggle />

					<Navbar.Collapse>
						<Nav className="ms-auto" style={{padding: '7px'}}>
							<NavDropdown title='Khóa học nền tảng' >
								<NavDropdown.Item as={Link} to={"/courses/basics-cpp"}>
									Lập trình cơ bản (C/C++)
								</NavDropdown.Item>
								
								<NavDropdown.Item as={Link} to={"/courses/basics-python"}>
									Lập trình cơ bản (Python)
								</NavDropdown.Item>

								<NavDropdown.Item as={Link} to={"/courses/basics-javascript"}>
									Lập trình cơ bản (Javascript)
								</NavDropdown.Item>

								<NavDropdown.Divider />

								<NavDropdown.Item as={Link} to={"/courses/oop-cpp"}>
									Lập trình hướng đối tượng (C++)
								</NavDropdown.Item>
								
								<NavDropdown.Item as={Link} to={"/courses/oop-java"}>
									Lập trình hướng đối tượng (Java)
								</NavDropdown.Item>

								<NavDropdown.Divider />

								<NavDropdown.Item as={Link} to={"/courses/html"}>
									HTML
								</NavDropdown.Item>
								
								<NavDropdown.Item as={Link} to={"/courses/css"}>
									CSS 
								</NavDropdown.Item>
								<NavDropdown.Divider />

								<NavDropdown.Item as={Link} to={"/courses/algorithm-and-data-structure"}>
									Cấu trúc dữ liệu và giải thuật (C++)
								</NavDropdown.Item>
								
								<NavDropdown.Divider />
								
								<NavDropdown.Item as={Link} to={"/courses/master-cpp"}>
									Lập trình chuyên sâu (C++)
								</NavDropdown.Item>
							</NavDropdown>

							<NavDropdown title='Khóa học Desktop App'>
								<NavDropdown.Item as={Link} to={"/courses/desktop-qt"}>
									Lập trình ứng dụng (Qt)
								</NavDropdown.Item>
								<NavDropdown.Item as={Link} to={"/courses/desktop-opengl"}>
									Lập trình đồ họa/Game (OpenGL)
								</NavDropdown.Item>
								<NavDropdown.Item as={Link} to={"/courses/desktop-javafx"}>
									Lập trình ứng dụng (JavaFx)
								</NavDropdown.Item>
								<NavDropdown.Item as={Link} to={"/courses/desktop-reactnative"}>
									Lập trình ứng dụng (React Native)
								</NavDropdown.Item>
								<NavDropdown.Item as={Link} to={"/courses/desktop-dotnet"}>
									Lập trình ứng dụng (.NET)
								</NavDropdown.Item>
							</NavDropdown>

							<NavDropdown title='Khóa học Web App'>
								<NavDropdown.Item as={Link} to={"/courses/web-fundamental"}>
									Nguyên lý phát triển ứng dụng web
								</NavDropdown.Item>
								<NavDropdown.Item as={Link} to={"/courses/web-frontend-react"}>
									Phát triển web frontend (React)
								</NavDropdown.Item>
								<NavDropdown.Item as={Link} to={"/courses/web-backend-express"}>
									Phát triển web backend (Express)
								</NavDropdown.Item>
								<NavDropdown.Item as={Link} to={"/courses/web-backend-django"}>
									Phát triển web backend (Django)
								</NavDropdown.Item>
							</NavDropdown>

							<NavDropdown title='Khóa học Quản trị hệ thống'>
								<NavDropdown.Item as={Link} to={"/courses/linux"}>
									Quản trị hệ thống Linux
								</NavDropdown.Item>
								<NavDropdown.Item as={Link} to={"/courses/database"}>
									Quản trị cơ sở dữ liệu
								</NavDropdown.Item>
								<NavDropdown.Item as={Link} to={"/courses/networking"}>
									Quản trị mạng
								</NavDropdown.Item>
							</NavDropdown>

							<NavDropdown title='Kết nối'>
								<NavDropdown.Item as="a" href="https://facebook.com/VuNguyenCoder" target="_blank">
									Facebook
								</NavDropdown.Item>
								<NavDropdown.Item as="a" href="https://youtube.com/VuNguyenCoder" target="_blank">
									Youtube
								</NavDropdown.Item>
								<NavDropdown.Item as="a" href="https://tiktok.com/@VuNguyenCoder" target="_blank">
									Tiktok
								</NavDropdown.Item>
							</NavDropdown>

							<Nav.Link as={Link} to={"/about"}>Giới thiệu</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Navbar>
				<div>
					<Switch>
						// Khóa học nền tảng
						<Route exact path="/"><Home/></Route>

						<Route path="/courses/basics-cpp">
							<BasicsCppCourse/>
						</Route>
						<Route path="/courses/cppbasic"><BasicsCppCourse/></Route> // Old link

						<Route path="/courses/basics-python">
							<BasicsPythonCourse/>	
						</Route>

						<Route path="/courses/basics-javascript">
							<BasicsJavascriptCourse/>	
						</Route>
						
						<Route path="/courses/html">
							<HTMLCourse/>	
						</Route>
						
						<Route path="/courses/css">
							<CSSCourse/>
						</Route>

						<Route path="/courses/oop-java">
							<Maintainance title='Khóa học lập trình hướng đối tượng Java'/>	
						</Route>

						<Route path="/courses/oop-cpp">
							<OOPCppCourse/>
						</Route>

						<Route path="/courses/oop-java">
							<Maintainance title='Khóa học lập trình hướng đối tượng Java'/>	
						</Route>
						
						<Route path="/courses/algorithm-and-data-structure">
							<Maintainance title='Khóa học cấu trúc dữ liệu và giải thuật (C++)'/>	
						</Route>
						
						<Route path="/courses/master-cpp">
							<Maintainance title='Khóa học lập trình chuyên sâu (C++)'/>	
						</Route>

						// Web application
						<Route path="/courses/web-fundamental">
							<Maintainance title='Khóa học căn bản về Web (HTTP, HTML, CSS)'/>	
						</Route>
						<Route path="/courses/web-frontend-react">
							<Maintainance title='Khóa học lập trình web frontend (React, Javascript)'/>	
						</Route>
						<Route path="/courses/web-backend-express">
							<Maintainance title='Khóa học lập trình web backend (Express, Javascript) '/>
						</Route>
						<Route path="/courses/web-backend-django">
							<Maintainance title='Khóa học lập trình web backend (Django, Python) '/>
						</Route>

						// Desktop Application 
						<Route path="/courses/desktop-qt">
							<Maintainance title='Khóa học lập trình ứng dụng (Qt,C++)'/>
						</Route>
						<Route path="/courses/desktop-opengl">
							<Maintainance title='Khóa học lập trình Đồ họa/Game (OpenGL,C++)'/>
						</Route>
						<Route path="/courses/desktop-javafx">	
							<Maintainance title='Khóa học lập trình ứng dụng (JavaFX)'/>
						</Route>
						<Route path="/courses/desktop-reactnative">	
							<Maintainance title='Khóa học lập trình ứng dụng (React Native, Javascript)'/>
						</Route>
						<Route path="/courses/desktop-dotnet">	
							<Maintainance title='Khóa học lập trình ứng dụng (Dotnet, C#)'/>
						</Route>
						
						// System 
						<Route path="/courses/linux">	
							<Maintainance title='Khóa học quản trị hệ thống Linux'/>
						</Route>

						<Route path="/courses/database">
							<DatabaseCourse/>
						</Route>

						<Route path="/courses/networking">	
							<Maintainance title='Khóa học quản trị mạng'/>
						</Route>
						
						// About
						<Route path="/about">
							<Maintainance title='Giới thiệu về Vũ Nguyễn Coder'/>
						</Route>
					</Switch>
				</div>
				<div className="container-fluid bg-dark text-white">
					<div className="container">
						<footer className="py-5">
							<div className="row">
								<div className="col-6 col-md-2 mb-3">
									<h5>Dịch vụ</h5>
									<ul className="nav flex-column">
									<li className="nav-item mb-2"><a className="nav-link p-0 text-muted">Outsource</a></li>
									<li className="nav-item mb-2"><a className="nav-link p-0 text-muted">Thiết kế</a></li>
									<li className="nav-item mb-2"><a className="nav-link p-0 text-muted">Tư vấn</a></li>
									<li className="nav-item mb-2"><a className="nav-link p-0 text-muted">Tuyển dụng</a></li>
									<li className="nav-item mb-2"><a className="nav-link p-0 text-muted">Truyền thông</a></li>
									</ul>
								</div>
							
								<div className="col-6 col-md-2 mb-3">
									<h5>Đào tạo</h5>
									<ul className="nav flex-column">
									<li className="nav-item mb-2"><a className="nav-link p-0 text-muted">Roadmap</a></li>
									<li className="nav-item mb-2"><a className="nav-link p-0 text-muted">Khoá học cơ bản</a></li>
									<li className="nav-item mb-2"><a className="nav-link p-0 text-muted">Khoá học nâng cao</a></li>
									</ul>
								</div>
							
								<div className="col-6 col-md-2 mb-3">
									<h5>Giới thiệu</h5>
									<ul className="nav flex-column">
									<li className="nav-item mb-2"><a className="nav-link p-0 text-muted">Tiểu sử</a></li>
									<li className="nav-item mb-2"><a className="nav-link p-0 text-muted">Mạng xã hội</a></li>
									<li className="nav-item mb-2"><a className="nav-link p-0 text-muted">Liên hệ</a></li>
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
							<p>&copy; 2023 - Designed by Vunguyencoder</p>
							<ul className="list-unstyled d-flex">
								<li className="ms-3">
									<a className="" href="https://facebook.com/VuNguyenCoder">
										<IconFacebook width="24" height="24" style={{fill: "white"}} />
									</a>
								</li>
								<li className="ms-3">
									<a className="" href="https://youtube.com/VuNguyenCoder">
										<IconYoutube width="24" height="24" style={{fill: "white"}} />
									</a>
								</li>
								<li className="ms-3">
									<a className="" href="https://tiktok.com/@vunguyencoder">
										<IconTiktok width="24" height="24" style={{fill: "white"}} />
									</a>
								</li>
								<li className="ms-3">
									<a className="" href="https://instagram.com/VuNguyenCoder">
										<IconInstagram width="24" height="24" style={{fill: "white"}} />
									</a>
								</li>
								<li className="ms-3">
									<a className="" href="https://linkedin.com/in/VuNguyenCoder">
										<IconLinkedIn width="24" height="24" style={{fill: "white"}} />
									</a>
								</li>
							</ul>
							</div>
						</footer>
					</div>
				</div>
			</BrowserRouter>
		</div>
	)
}

ReactDOM.render(<App /> ,  document.getElementById('root'));
