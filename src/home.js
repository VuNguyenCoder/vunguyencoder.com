
var MoreDetail = (props) =>
{
	var linkOfCourse = "/courses/" + props.courseID
	return <a href={linkOfCourse}>Xem chi tiết</a> 
}

export default function Home()
{
	return(
		<div style={{padding: '20px'}}>
			<h4>Lớp học lập trình của Vũ Nguyễn Coder</h4>

			<b>Các khóa học đang vận hành: </b><br/>
			<ul>
				<li>
					Lập trình cơ bản (C/C++) -  
					Xây dựng căn cơ nền tảng lập trình - {' '}
					<MoreDetail courseID='cppbasic'/>
				</li>
				<li>
					Lập trình hướng đối tượng (C++) - {' '} 
					<MoreDetail courseID='oopcpp'/>
				</li>
				<li>
					Lập trình cơ bản (Python) - {' '}
					<MoreDetail courseID='basicspython'/>
				</li>
			</ul>
			<b>Các khóa học sắp mở cửa </b><br/>
			<ul>
				<li>Lập trình cơ bản (Javascript) - Mở lớp 1/6/2022</li>
				<li>Lập trình hướng đối tượng (Java) - Mở lớp 1/6/2022</li>
				<li>Lập trình game nhập môn (C++/OpenGL, Unity) - Mở lớp 1/8/2022</li>
				<li>Quản trị Linux - Mở lớp 1/9/2022</li>
			</ul>
			<p>Hot line liên hệ: <b>088 995 8883</b> (Nếu máy bận xin để lại tin nhắn)</p>
		</div>
	)
}
