
import { Accordion } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import './course.css'
import course_preview from './course_preview.jpg'

export default function OOPCppCourse()
{
	return(
		<div className='Content'>
			<h2>Khóa học lập trình hướng đối tượng (C++)</h2><br/>
			<i>Học phí: 299k VNĐ</i> <br/>
			<i>Hình thức: Online/Mọi khung giờ</i> <br/>
			<i>Giảng viên: Vũ Nguyễn Coder</i><br/>
			<br/>

			<Accordion defaultActiveKey="0">
				<Accordion.Item eventKey="0">
					<Accordion.Header><b>1. Khóa học này sẽ phù hợp với:</b></Accordion.Header>
			    	<Accordion.Body>
			    	- Các bạn đang chuẩn bị trở thành sinh viên IT, muốn học trước để tránh bị đuối trước khung chương trình đại học<br/>
					- Các bạn sinh viên IT đang mất gốc<br/>
					- Các bạn đang muốn học nền tảng về lập trình để phục vụ cho công việc<br/>
					- Các bạn đang muốn học lập trình từ xa, không cần phải đến lớp những vẫn muốn được support trực tiếp từ giảng viên
					</Accordion.Body>
				</Accordion.Item>

				<Accordion.Item eventKey="1">
					<Accordion.Header><b>2. Tại sao chúng ta nên học C++ để học lập trình hướng đối tượng </b></Accordion.Header>
					<Accordion.Body>
					</Accordion.Body>
				</Accordion.Item>

				<Accordion.Item eventKey="2">
					<Accordion.Header><b>3. Ưu điểm của khóa học này</b></Accordion.Header>
					<Accordion.Body>
					- Tham gia lớp học với những bài giảng chuyên sâu của mình.<br/>
					- Khi gặp bất cứ khó khăn, vấn đề khó hiểu nào, mình sẽ hỗ trợ trực tiếp các bạn thông qua các phương tiện liên lạc như Teamviewer, Zalo, Skype,... <br/>
					- Bạn sẽ sở hữu khóa học vô thời hạn, tức là chỉ một lần chi phí là sở hữu gói support trọn đời
					</Accordion.Body>
				</Accordion.Item>

				<Accordion.Item eventKey="3">
					<Accordion.Header><b>4. Nội dung kiến thức</b></Accordion.Header>
					<Accordion.Body>
					</Accordion.Body>
				</Accordion.Item>

				<Accordion.Item eventKey="4">
					<Accordion.Header><b>5. Hình thức học: Online</b></Accordion.Header>
					<Accordion.Body>
					Các bài giảng mình đã dựng sẵn dưới dạng video và chọn lọc các bài tập kèm theo. Vậy nên ae có thể học vào bất cứ khung giờ nào trong ngày, và cũng không lo bị đuối hơn so với các bạn khác, mỗi bạn sẽ có tiến độ riêng và được giám sát qua hệ thống group học tập trên nền tảng Facebook.<br/>
					</Accordion.Body>
				</Accordion.Item>

				<Accordion.Item eventKey="5">
					<Accordion.Header><b>6. Cách thức tham gia</b> </Accordion.Header>
					<Accordion.Body>
					<b>- Bước 1:</b> Chuyển khoản học phí là <b>299k VNĐ</b> qua STK: <b>0050 118 22 9999</b> - Nguyễn Anh Vũ - Ngân hàng Quân Đội (MB Bank) <br/>
					Nội dung chuyển khoản ghi rõ: <b>CPP OOP</b> + <b>Tên facebook của bạn</b> <br/>
					Ví dụ: <b>CPP co ban Vu Nguyen</b> <br/>
					<b>- Bước 2:</b> Tham gia lớp học online tại <a href='https://www.facebook.com/groups/vunguyencoder.cpp.oop' target='_blank'>FB Group này</a><br/>
					Sau khi bấm xin tham gia, sẽ có quản trị nhóm xác thực thông tin chuyển khoản và tài khoản của bạn để phê duyệt vào nhóm trong 24h <br/>
					Lưu ý: Chỉ chấp nhận tham gia với một tài khoản facebook duy nhất <br/>
					
					</Accordion.Body>
				</Accordion.Item>

			</Accordion>
			<br/>

			Hot line liên hệ: <b>088 995 8883</b> (Nếu máy bận xin để lại tin nhắn) <br/>
			Chúc các bạn học tập tốt!<br/>
			<br/>
			<br/>
			<br/>

		</div>
	)
}

