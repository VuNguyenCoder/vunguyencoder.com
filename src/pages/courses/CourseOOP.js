
import { Accordion } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import './course.css'
import course_preview from './../../assets/images/course_preview.jpg'

export default function OOPCppCourse()
{
	return(
		<div className='Content'>
			<h2>Khóa học lập trình hướng đối tượng (C++)</h2><br/>
			<i>Học phí: 299k VNĐ</i> <br/>
			<i>Hình thức: Video</i> <br/>
			<i>Giảng viên: Vũ Nguyễn Coder</i><br/>
			<br/>

			<Accordion defaultActiveKey="0">
				<Accordion.Item eventKey="0">
					<Accordion.Header><b>1. Khóa học này sẽ phù hợp với:</b></Accordion.Header>
			    	<Accordion.Body>
			    	- Các bạn đã nắm được lập trình cơ bản về C, muốn chuyển tiếp lên mức độ tư duy cao hơn<br/>
					- Các bạn sinh viên IT đang mất gốc<br/>
					- Các bạn đang muốn xây dựng nền tảng kiến thức chắc về hướng đối tượng để phục vụ cho công việc<br/>
					- Các bạn đang muốn học lập trình từ xa, không cần phải đến lớp những vẫn muốn được support trực tiếp từ giảng viên <br/>
					<br/>
					<b>Lưu ý:</b> Khóa học này cần kiến thức nền về C/C++. Nếu bạn cảm thấy chưa có gốc hoặc chưa vững lắm thì có thể bổ túc lại thông qua lớp C/C++ của mình tại <a href="/courses/cppbasic">đây</a> 
					</Accordion.Body>
				</Accordion.Item>

				<Accordion.Item eventKey="1">
					<Accordion.Header><b>2. Tại sao chúng ta nên học học về hướng đối tượng </b></Accordion.Header>
					<Accordion.Body>
						- Lập trình hướng đối tượng - Object Oriented Programing (OOP) là 1 mô hình lập trình (programing paradigm) phổ biến nhất hiện nay. Rất nhiều dự án đều đi theo mô hình này. Các trường đại học đều đưa hướng đối tượng là một môn học nền tảng cho chuyên ngành IT.<br/> 
					- Hiểu được về hướng đối tượng sẽ nâng tầm nhìn của bạn lên mức hệ thống và đủ cơ sở để thiết kế và lập trình ra những phần mềm phức tạp. 
					</Accordion.Body>
				</Accordion.Item>

				<Accordion.Item eventKey="2">
					<Accordion.Header><b>3. Ưu điểm của khóa học này</b></Accordion.Header>
					<Accordion.Body>
					- Tham gia lớp học với những bài giảng chuyên sâu.<br/>
					- Khi gặp bất cứ khó khăn, vấn đề khó hiểu nào, mình sẽ hỗ trợ trực tiếp các bạn thông qua các phương tiện liên lạc như Teamviewer, Zalo, Telegram,... <br/>
					- Bạn sẽ sở hữu khóa học vô thời hạn, tức là chỉ một lần chi phí là sở hữu gói support trọn đời
					</Accordion.Body>
				</Accordion.Item>

				<Accordion.Item eventKey="3">
					<Accordion.Header><b>4. Nội dung kiến thức</b></Accordion.Header>
					<Accordion.Body>
					- Các khái niệm cơ bản trong mô hình hướng đối tượng: Class, Object, Property, Method, Access modifier, Constructor, Destructor, v.v... <br/>
					- Bốn tính chất/nguyên tắc trong mô hình hướng đối tượng: Encapsulation, Abstraction, Inheritance, Polymorphism <br/>
					- Các class đặc biệt trong hướng đối tượng: Abstract Class, Interface, Friend Class, v.v... <br/>
					- Ngôn ngữ mô hình UML: Cách đọc hiểu các loại bản vẽ thiết kế phần mềm theo mô hình OOP.<br/>
					- Tối ưu hóa: Các cơ chế nâng cao trong C++ giúp tối ưu mô hình, code sẽ 'sạch' hơn <br/>
					- Design pattern: Các bản mẫu thiết kế hướng đối tượng phổ biến <br/>
					- Tổ chức mã nguồn C++ đối với project hướng đối tượng <br/>
					- Project cuối khóa<br/>
					Tổng cộng gần khoảng 30 baì giảng được phân chia vào 13 chương. Cuối mỗi chương sẽ có các bài tập đi kèm để củng cố lý thuyết và khả năng vận dụng của học viên. 
					</Accordion.Body>
				</Accordion.Item>

				<Accordion.Item eventKey="4">
					<Accordion.Header><b>5. Hình thức học: Video</b></Accordion.Header>
					<Accordion.Body>
					Các bài giảng mình đã dựng sẵn dưới dạng video và chọn lọc các bài tập kèm theo mỗi chương. Vậy nên ae có thể học vào bất cứ khung giờ nào trong ngày, và cũng không lo bị đuối hơn so với các bạn khác, mỗi bạn sẽ có tiến độ riêng và được giám sát qua hệ thống group học tập trên nền tảng Facebook.<br/>
					</Accordion.Body>
				</Accordion.Item>

				<Accordion.Item eventKey="5">
					<Accordion.Header><b>6. Cách thức tham gia</b> </Accordion.Header>
					<Accordion.Body>
					<b>- Bước 1:</b> Chuyển khoản học phí là <b>299k VNĐ</b> qua STK: <b>0050 118 22 9999</b> - Nguyễn Anh Vũ - Ngân hàng Quân Đội (MB Bank) <br/>
					Nội dung chuyển khoản ghi rõ: <b>OOP CPP</b> + <b>Tên facebook của bạn</b> <br/>
					Ví dụ: <b>OOP CPP Vu Nguyen</b> <br/>
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

