import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import Home from './home'
import Maintainance from './maintainance'
import BasicsCppCourse from './courses/BasicsCppCourse'
import OOPCppCourse from './courses/OOPCppCourse'
import BasicsPythonCourse from './courses/BasicsPythonCourse'
import BasicsJavascriptCourse from './courses/BasicsJavascriptCourse'
import HTMLCourse from './courses/HTMLCourse'

import logo from './VuNguyenCoder_Logo.png'

function App()
{
	return(	
		<div>
			<BrowserRouter basename={process.env.PUBLIC_URL}>
				<Navbar bg='dark' variant='dark' 
					sticky='top' expand='lg' collapseOnSelect>
					<Navbar.Brand as={Link} to={"/"}>
						<img src={logo} width='80px' height='40px' style={{filter: 'invert(100%)'}} /> {' '}
							VuNguyenCoder.com
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
									Lập trình ứng dụng (Qt, C++)
								</NavDropdown.Item>
								<NavDropdown.Item as={Link} to={"/courses/desktop-opengl"}>
									Lập trình đồ họa/Game (OpenGL, C++)
								</NavDropdown.Item>
								<NavDropdown.Item as={Link} to={"/courses/desktop-javafx"}>
									Lập trình ứng dụng (JavaFx, Java)
								</NavDropdown.Item>
								<NavDropdown.Item as={Link} to={"/courses/desktop-reactnative"}>
									Lập trình ứng dụng (React Native, Javascript)
								</NavDropdown.Item>
								<NavDropdown.Item as={Link} to={"/courses/desktop-dotnet"}>
									Lập trình ứng dụng (Dotnet, C#)
								</NavDropdown.Item>
							</NavDropdown>

							<NavDropdown title='Khóa học Web App'>
								<NavDropdown.Item as={Link} to={"/courses/web-fundamental"}>
									Lập trình web căn bản (HTTP, HTML, CSS) 
								</NavDropdown.Item>
								<NavDropdown.Item as={Link} to={"/courses/web-frontend-react"}>
									Lập trình web frontend (React, Javascript)
								</NavDropdown.Item>
								<NavDropdown.Item as={Link} to={"/courses/web-backend-express"}>
									Lập trình web backend (Express, Javascript)
								</NavDropdown.Item>
								<NavDropdown.Item as={Link} to={"/courses/web-backend-django"}>
									Lập trình web backend (Django, Python)
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
							<Maintainance title='Khóa học thiết kế và tạo kiểu giao diện (CSS)' />	
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
							<Maintainance title='Khóa học quản trị cơ sở dữ liệu'/>	
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
			</BrowserRouter>
		</div>
	)
}

ReactDOM.render(<App /> ,  document.getElementById('root'));
