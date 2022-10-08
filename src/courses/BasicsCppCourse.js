import { Accordion } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import './course.css'
import course_preview from './course_preview.jpg'

export default function BasicCppCourse()
{
	return(
		<div className='Content'>
			<h2>Khóa học lập trình xây dựng nền tảng (C/C++)</h2><br/>
			<i>Học phí: 399k VNĐ</i> <br/>
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
					<Accordion.Header><b>2. Tại sao chúng ta nên học C++ để xây dựng nền tảng tư duy lập trình? </b></Accordion.Header>
					<Accordion.Body>
					- C++ là ngôn ngữ có cú pháp chặt chẽ, logic, bám sát vào bản chất vấn đề nên ngôn ngữ này thường được dùng làm ngôn ngữ nhập môn ở hầu hết các trường đại học nhằm trang bị cho sinh viên kiến thức nền tảng. Không chỉ ở Việt Nam, mà ở toàn thế giới, C++ cũng rất nổi tiếng, dù tuổi đời đã cao những hiện nó vẫn đang là một trong những ngôn ngữ lập trình phổ biến nhất thế giới.<br/>
				- C++ là ngôn ngữ nền tảng, rất nhiều ngôn ngữ khác như Java, Javascript, C#, Python,... đều dựa trên một phần của C++. Vậy nên khi thành thạo C++ thì bạn có thể chuyển sang bất cứ ngôn ngữ lập trình khác. Tuy nhiên, điều ngược lại thì chưa chắc. Bạn học Python trước rồi nhảy sang C++ thì cực kì khó hiểu. Vậy nên, việc học bài bản C++ sẽ giúp các bạn có thể linh động chuyển đổi giữa các ngôn ngữ khác nhau, phục vụ công việc trong tương lai<br/>
				- C++ cực kỳ mạnh mẽ, đặc biệt là tốc độ tính toán cao, nên nó thường để xây dựng nên những chương trình phức tạp như hệ điều hành, ứng dụng đồ họa (Game, xử lý ảnh,... ), phần mềm nhúng,... Vậy nên, nếu bạn có dự định trở thành lập trình viên C++ chuyên nghiệp cũng là một định hướng sáng. Ở Việt Nam, cơ hội việc làm với C++ tương đối nhiều. Còn nêu như sau này dòng đời xô đẩy bạn sang một mảng lập trình khác thì với nền tảng C++ chắc chắn cũng sẽ giúp bạn thích nghi cực nhanh với một ngôn ngữ mới	
					</Accordion.Body>
				</Accordion.Item>

				<Accordion.Item eventKey="2">
					<Accordion.Header><b>3. Ưu điểm của khóa học này</b></Accordion.Header>
					<Accordion.Body>
					Chính vì C++ bám sát chặt chẽ những yếu tố nền tảng nhất, nên đôi khi người học sẽ cảm thấy trừu tượng và khó hiểu. Với kinh nghiệm lâu năm của mình trong các dự án phát triển hệ thống với C++, mình hiểu được những khó khăn đó và xây dựng nên một hệ phương pháp luận để giải thích và truyền đạt lại tới các bạn. Trong khóa học này, các bạn sẽ có quyền lợi như sau:<br/>
					- Tham gia lớp học với những bài giảng chuyên sâu của mình.<br/>
					- Khi gặp bất cứ khó khăn, vấn đề khó hiểu nào, mình sẽ hỗ trợ trực tiếp các bạn thông qua các phương tiện liên lạc như Teamviewer, Zalo, Skype,... <br/>
					- Bạn sẽ sở hữu khóa học vô thời hạn, tức là chỉ một lần chi phí là sở hữu gói support trọn đời
					</Accordion.Body>
				</Accordion.Item>

				<Accordion.Item eventKey="3">
					<Accordion.Header><b>4. Nội dung kiến thức</b></Accordion.Header>
					<Accordion.Body>
						- Biến và kiểu dữ liệu<br/>
						- Các phép toán cơ bản<br/>
						- Các cấu trúc điều khiển: Rẽ nhánh, lặp <br/>
						- Kiểu pointer (con trỏ) <br/>
						- Kiểu function (hàm) <br/>
						- Kiểu array (mảng) <br/>
						- Kiểu chuỗi kí tự với char array (C) và std::string (C++) <br/>
						- Kiểu dữ liệu tự định nghĩa: struct, class, enum <br/>
						- Template <br/>
						- Bộ nhớ Heap và cấp phát động <br/>
						- Kiểu danh sách liên kết <br/> 
						- Các kiểu STL Container 
						- Các luồng nhập xuất dữ liệu <br/>
						- Giới thiệu về các ứng dụng của C/C++ trong việc phát triển app <br/>
						- Thực hành xây dựng Console app quản lý <br/>
						<br/>
						
						Tổng cộng gần khoảng 40 baì giảng được phân chia vào 15 chương. Cuối mỗi chương sẽ có các bài tập đi kèm để củng cố lý thuyết và khả năng vận dụng của học viên. 
					</Accordion.Body>
				</Accordion.Item>

				<Accordion.Item eventKey="4">
					<Accordion.Header><b>5. Hình thức học: Online</b></Accordion.Header>
					<Accordion.Body>
					Các bài giảng mình đã dựng sẵn dưới dạng video và chọn lọc các bài tập kèm theo. Vậy nên ae có thể học vào bất cứ khung giờ nào trong ngày, và cũng không lo bị đuối hơn so với các bạn khác, mỗi bạn sẽ có tiến độ riêng và được giám sát qua hệ thống group học tập trên nền tảng Facebook.<br/>
					<center><img src={course_preview} alt="Lớp học lập trình C++" width="200" height="400"/></center>
					</Accordion.Body>
				</Accordion.Item>

				<Accordion.Item eventKey="5">
					<Accordion.Header><b>6. Cách thức tham gia</b> </Accordion.Header>
					<Accordion.Body>
					<b>- Bước 1:</b> Chuyển khoản học phí là <b>399k VNĐ</b> qua STK: <b>0050 118 22 9999</b> - Nguyễn Anh Vũ - Ngân hàng Quân Đội (MB Bank) <br/>
					Nội dung chuyển khoản ghi rõ: <b>CPP co ban</b> + <b>Tên facebook của bạn</b> <br/>
					Ví dụ: <b>CPP co ban Vu Nguyen</b> <br/>
					<b>- Bước 2:</b> Tham gia lớp học online tại <a href='https://www.facebook.com/groups/vunguyencoder.laptrinhcobancpp' target='_blank'>FB Group này</a><br/>
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

