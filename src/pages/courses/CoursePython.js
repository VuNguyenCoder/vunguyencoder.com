import { Accordion } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import './course.css'

export default function BasicsPythonCourse()
{
	return(
		<div className='Content'>
			<h2>Khóa học lập trình cơ bản (Python)</h2><br/>
			<i>Học phí: 399k VNĐ</i> <br/>
			<i>Hình thức: Video</i> <br/>
			<i>Giảng viên: Vũ Nguyễn Coder</i><br/>
			<br/>

			<Accordion defaultActiveKey="0">
				<Accordion.Item eventKey="0">
					<Accordion.Header><b>1. Khóa học này sẽ phù hợp với:</b></Accordion.Header>
			    	<Accordion.Body>
			    	- Các bạn đang chuẩn bị trở thành sinh viên IT, muốn học trước để tránh bị đuối trước khung chương trình đại học<br/>
					- Các bạn sinh viên IT đang mất gốc<br/>
					- Các bạn đang muốn xây dựng tư duy về lập trình để phục vụ cho công việc<br/>
					- Các bạn trái ngành, muốn tìm hiểu và thử sức với công việc lập trình <br/>
					- Các bạn đang muốn học lập trình từ xa, không cần phải đến lớp những vẫn muốn được support trực tiếp từ giảng viên <br/>
					<br/>
					<b>Lưu ý:</b> Nếu bạn mong muốn xây dựng nền tảng ở một mức sâu hơn dưới tầng bộ nhớ, bạn nên học C/C++. Ngoài ra, với các bạn định hướng theo phần cứng, mạch, nhúng, game,... cũng nên chọn C/C++. Bạn có thể tham gia lớp C/C++ của mình tại <a href="/courses/basics-cpp">đây</a> 
					</Accordion.Body>
				</Accordion.Item>

				<Accordion.Item eventKey="1">
					<Accordion.Header><b>2. Tại sao chúng ta nên học Python</b></Accordion.Header>
					<Accordion.Body>
					- Python là ngôn ngữ có cú pháp đơn giản, dễ tiếp cận. Do vậy nếu bạn đang là dân trái ngành muốn chuyển sang IT có thể nhanh chóng làm quen với lập trình cũng như bước đầu hình thành tư duy về lập trình.<br/> 
					- Mặc dù Python tiếp cận dễ dàng nhưng không đồng nghĩa với việc nó là một ngôn ngữ đơn giản. Python có phạm vi ứng dụng rất đa năng, tức là nó có thể xây dựng mọi thể loại app. <br/>
					- Python được tích hợp nhiều tính năng để xử lý data nhanh chóng và hiệu quả nên được ứng dụng nhiều trong lĩnh vực AI, Machine learning - một trong những ngành hot nhất Việt Nam hiện nay. Do vậy, nếu bạn xác định muốn theo con đường AI thì chắc chắn cần phải thành thạo về Python. <br/>
					</Accordion.Body>
				</Accordion.Item>

				<Accordion.Item eventKey="2">
					<Accordion.Header><b>3. Ưu điểm của khóa học này</b></Accordion.Header>
					<Accordion.Body>
					- Tham gia lớp học với những bài giảng chuyên sâu của mình.<br/>
					- Khi gặp bất cứ khó khăn, vấn đề khó hiểu nào, mình sẽ hỗ trợ trực tiếp các bạn thông qua các phương tiện liên lạc như Teamviewer, Zalo, Telegram,... <br/>
					- Bạn sẽ sở hữu khóa học vô thời hạn, tức là chỉ một lần chi phí là sở hữu gói support trọn đời
					</Accordion.Body>
				</Accordion.Item>

				<Accordion.Item eventKey="3">
					<Accordion.Header><b>4. Nội dung kiến thức</b></Accordion.Header>
					<Accordion.Body>
					- Biến và kiểu dữ liệu <br/>
					- Các phép toán cơ bản và biểu thức <br/>
					- Các cấu trúc điều khiển: Rẽ nhánh, Vòng lặp <br/>
					- Các dữ liệu tập hợp: List, Tuple, Set, Dict, String <br/>
					- Function <br/>
					- File <br/>
					- Class & Object. <br/>
					- Module<br/>
					- Lập trình giao diện đồ họa (GUI)<br/>
					- Project cuối khóa<br/>
					<br/>
					Tổng cộng gần khoảng 40 baì giảng được phân chia vào 15 chương. Cuối mỗi chương sẽ có các bài tập đi kèm để củng cố lý thuyết và khả năng vận dụng của học viên. 
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
					<b>- Bước 1:</b> Chuyển khoản học phí là <b>399k VNĐ</b> qua STK: <b>0050 118 22 9999</b> - Nguyễn Anh Vũ - Ngân hàng Quân Đội (MB Bank) <br/>
					Nội dung chuyển khoản ghi rõ: <b>Basics Python</b> + <b>Tên facebook của bạn</b> <br/>
					Ví dụ: <b>Basics Python Vu Nguyen</b> <br/>
					<b>- Bước 2:</b> Tham gia lớp học online tại <a href='https://www.facebook.com/groups/vunguyencoder.basics.python' target='_blank'>FB Group này</a><br/>
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

