import { Accordion } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import './course.css'

export default function HTMLCourse()
{
	return(
		<div className='Content'>
			<h2>Khóa học quản trị cơ sở dữ liệu</h2><br/>
			<i>Học phí: Free</i> <br/>
			<i>Hình thức: Video</i> <br/>
			<i>Giảng viên: Vũ Nguyễn Coder</i><br/>
			<br/>

			<Accordion defaultActiveKey="0">
				<Accordion.Item eventKey="0">
					<Accordion.Header><b>1. Khóa học này sẽ phù hợp với:</b></Accordion.Header>
			    	<Accordion.Body>
						Đang cập nhật 
					</Accordion.Body>
				</Accordion.Item>

				<Accordion.Item eventKey="1">
					<Accordion.Header><b>2. Tại sao chúng ta nên học quản trị cơ sở dữ liệu</b></Accordion.Header>
					<Accordion.Body>
						Đang cập nhật 
					</Accordion.Body>
				</Accordion.Item>

				<Accordion.Item eventKey="2">
					<Accordion.Header><b>3. Ưu điểm của khóa học này</b></Accordion.Header>
					<Accordion.Body>
					- Free.<br/>
					- Tham gia lớp học với những bài giảng chuyên sâu của mình.<br/>
					- Khi gặp bất cứ khó khăn, vấn đề khó hiểu nào, mình sẽ hỗ trợ trực tiếp các bạn thông qua các phương tiện liên lạc như Teamviewer, Zalo, Telegram,... <br/>
					- Bạn sẽ sở hữu khóa học vô thời hạn, tức là chỉ một lần chi phí là sở hữu gói support trọn đời
					</Accordion.Body>
				</Accordion.Item>

				<Accordion.Item eventKey="3">
					<Accordion.Header><b>4. Nội dung kiến thức</b></Accordion.Header>
					<Accordion.Body>
						Đang cập nhật 
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
					Tham gia lớp học online tại <a href='https://www.facebook.com/groups/vunguyencoder.database' target='_blank'>FB Group này</a><br/>
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

