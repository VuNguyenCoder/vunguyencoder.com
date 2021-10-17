import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import Home from './home'
import Maintainance from './maintainance'
import BasicCppCourse from './courses/BasicCppCourse'

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
								<NavDropdown.Item as={Link} to={"/courses/cppbasic"}>
									Lập trình cơ bản (C++)
								</NavDropdown.Item>
								<NavDropdown.Item as={Link} to={"/courses/pythonbasic"}>
									Lập trình cơ bản (Python)
								</NavDropdown.Item>
								<NavDropdown.Item as={Link} to={"/courses/graphicsbasic"}>
									Lập trình đồ họa (C++/OpenGL)
								</NavDropdown.Item>
								<NavDropdown.Item as={Link} to={"/courses/webbasic"}>
									Lập trình Web (HTML/CSSS/JS)
								</NavDropdown.Item>
							</NavDropdown>

							<NavDropdown title='Khóa học chuyên sâu'>
								<NavDropdown.Item as={Link} to={"/courses/cppadvance"}>
									Lập trình nâng cao (C++)
								</NavDropdown.Item>
								<NavDropdown.Item as={Link} to={"/courses/javaadvance"}>
									Lập trình nâng cao (Java)
								</NavDropdown.Item>
								<NavDropdown.Item as={Link} to={"/courses/javaadvance"}>
									Lập trình nâng cao (C#/Winform)
								</NavDropdown.Item>
								<NavDropdown.Item as={Link} to={"/courses/linux"}>
									Quản trị hệ thống Linux
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
						<Route exact path="/"><Home/></Route>
						<Route path="/courses/cppbasic">
							<BasicCppCourse/>
						</Route>
						<Route path="/courses/graphicsbasic">
							<Maintainance title='Khóa học lập trình đồ họa'/>	
						</Route>
						<Route path="/courses/webbasic">
							<Maintainance title='Khóa học lập trình web cơ bản'/>
						</Route>
						<Route path="/courses/cppadvance">
							<Maintainance title='Khóa học lập trình nâng cao với C++'/>
						</Route>
						<Route path="/courses/javaadvance">	
							<Maintainance title='Khóa học lập trình nâng cao với Java'/>
						</Route>
						<Route path="/courses/linux">	
							<Maintainance title='Khóa học quản trị hệ thống Linux'/>
						</Route>
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
