
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

			<b>Các khóa học: </b><br/>
			<ul>
				<li>
					Lập trình cơ bản cùng C++: 
					Xây dựng căn cơ nền tảng lập trình - {' '}
					<MoreDetail courseID='cppbasic'/>
				</li>
				<li>Lập trình nâng cao cùng C++: Trở thành lập trình viên C++ chuyên sâu (Đang xây dựng)</li>
				<li>Lập trình nâng cao cùng Java: (Đang xây dựng)</li>
				<li>Lập trình cơ bản về Web cùng HTML/CSS/JS: (Đang xây dựng)</li>
				<li>Lập trình cơ bản về Game cùng C++/C#: (Đang xây dựng)</li>
				<li>Quản trị hệ thống Linux: (Đang xây dựng)</li>
			</ul>
			<p>Hot line liên hệ: <b>088 995 8883</b> (Nếu máy bận xin để lại tin nhắn)</p>
		</div>
	)
}
