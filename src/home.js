
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'
import 'bootstrap/dist/css/bootstrap.min.css'

import html5Logo from './images/html5.png'
import cppLogo from './images/cpp.png'
import pythonLogo from './images/python.png'
import jsLogo from './images/javascript.png'
import oopCppLogo from './images/oop_cpp.png'
import css3Logo from './images/css3.png'
import databaseLogo from './images/database.png'

var MoreDetail = (props) =>
{
	var linkOfCourse = "/courses/" + props.courseID
	return <a href={linkOfCourse}>Xem chi tiết</a> 
}

var CourseCard = (props) => {
	return  <Card 	style={{ maxWidth: '20rem'}} 
				className="text-center" 
				text={props.text} 
				bg={props.bg}>
				<Card.Img 	variant="top" 
							src={props.imgSource} 
							style={{ 	width: '5rem', 
										marginLeft: 'auto', 
										marginRight: 'auto', 
										marginTop: '1rem'}} 
				/>
				<Card.Body>
					<Card.Title>{props.title}</Card.Title>
					<Card.Text>
						{props.description}
					</Card.Text>
					<Button variant="primary" href={props.href}>Xem chi tiết</Button>
				</Card.Body>
			</Card>
}

export default function Home()
{
	return(
		<div style={{padding: '20px'}}>
			<h2 style={{textAlign: 'center'}}>Lớp học lập trình của Vũ Nguyễn Coder</h2>	
			<h4>Ngôn ngữ lập trình cơ bản</h4>
			<CardGroup>
				<CourseCard text="dark" bg="light" imgSource={cppLogo}
							title="C/C++" description="Ngôn ngữ của nền tảng" 
							href="/courses/basics-cpp" 
				/>
				<CourseCard text="dark" bg="light" imgSource={pythonLogo}
							title="Python" description="Ngôn ngữ của cái đẹp và sự tối giản" 
							href="/courses/basics-python" 
				/>
				<CourseCard text="dark" bg="light" imgSource={jsLogo}
							title="Javascript" description="Ngôn ngữ của xu thế" 
							href="/courses/basics-javascript" 
				/>
			</CardGroup>
			<br/>
			<h4>Ngôn ngữ tạo giao diện</h4>
			<CardGroup>
				<CourseCard text="dark" bg="light" imgSource={html5Logo}
							title="HTML" description="Ngôn ngữ dựng khung giao diện" 
							href="/courses/html" 
				/>
				<CourseCard text="dark" bg="light" imgSource={css3Logo}
							title="CSS" description="Ngôn ngữ thiết kế và tạo kiểu giao diện" 
							href="/courses/css" 
				/>
			</CardGroup>
			<br/>
			<h4>Khóa học khác</h4>
			<CardGroup>
				<CourseCard text="dark" bg="light" imgSource={oopCppLogo}
							title="OOP" description="Mô hình lập trình hướng đối tượng (C++)" 
							href="/courses/oop-cpp" 
				/>
				<CourseCard text="dark" bg="light" imgSource={databaseLogo}
							title="Database" description="Quản trị cơ sở dữ liệu" 
							href="/courses/database" 
				/>
			</CardGroup>
			<br/>
			<b>Các khóa học sắp mở cửa trong thời gian tới </b><br/>
			<ul>
				<li>Nguyên lý phát triển ứng dụng web</li>
				<li>Quản trị hệ thống Linux</li>
				<li>Lập trình cơ bản (Java)</li>
			</ul>
			<p>Hot line liên hệ: <b>088 995 8883</b> (Nếu máy bận xin để lại tin nhắn)</p>
		</div>
	)
}
