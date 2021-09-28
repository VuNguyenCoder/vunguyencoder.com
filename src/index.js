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
			<Router>
			<Navbar bg='dark' variant='dark' 
				sticky='top' expand='sm' collapseOnSelect>
				<Navbar.Brand href="#home">
					<img src={logo} width='40px' height='40px' /> {' '}
					Logo
				</Navbar.Brand>

				<Navbar.Toggle />
				<Navbar.Collapse>
					<Nav className="ms-auto">
						<NavDropdown title='Khoa hoc'>
							<NavDropdown.Item as={Link} to={"/courses/cppbasic"}>Lap trinh co ban C/C++</NavDropdown.Item>
						</NavDropdown>
						<Nav.Link as={Link} to={"/share"}>Chia se</Nav.Link>
						<Nav.Link as={Link} to={"/contact"}>Lien he</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
			<div className ='content'>
				<Switch>
					<Route path="/home">Home</Route>
					<Route path="/courses/cppbasic"><BasicCppCourse/></Route>
					<Route path="/share">Home</Route>
					<Route path="/contact">Home</Route>
				</Switch>
			</div>
			</Router>
		</div>
	)
}

ReactDOM.render(<App /> ,  document.getElementById('root'));
