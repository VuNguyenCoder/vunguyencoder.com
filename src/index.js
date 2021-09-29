import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'

import './App.css'
import logo from './logo.svg'
import BasicCppCourse from './courses/BasicCppCourse'

function App()
{
	return(	
		<div className="App">
			<Router basename={process.env.PUBLIC_URL}>
				<Navbar bg='dark' variant='dark' 
					sticky='top' expand='sm' collapseOnSelect>
					<Navbar.Brand as={Link} to={"/"}>
						<img src={logo} width='40px' height='40px' /> {' '}
						Logo
					</Navbar.Brand>

					<Navbar.Toggle />
					<Navbar.Collapse>
						<Nav className="ms-auto">
							<NavDropdown title='Khóa học'>
								<NavDropdown.Item as={Link} to={"/courses/cppbasic"}>Lập trình cơ bản C/C++</NavDropdown.Item>
							</NavDropdown>
							<Nav.Link as={Link} to={"/share"}>Chia sẻ</Nav.Link>
							<Nav.Link as={Link} to={"/contact"}>Liên hệ</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Navbar>
				<div className ='content'>
					<Switch>
						<Route exact path="/">Home</Route>
						<Route path="/courses/cppbasic"><BasicCppCourse/></Route>
						<Route path="/share">Chia sẻ</Route>
						<Route path="/contact">Liên hệ</Route>
					</Switch>
				</div>
			</Router>
		</div>
	)
}

ReactDOM.render(<App /> ,  document.getElementById('root'));
