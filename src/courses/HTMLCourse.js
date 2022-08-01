import { Accordion } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import './course.css'

export default function HTMLCourse()
{
	return(
		<div className='Content'>
			<h2>Khóa học HTML</h2><br/>
			<i>Học phí: Free</i> <br/>
			<i>Hình thức: Video</i> <br/>
			<i>Giảng viên: Vũ Nguyễn Coder</i><br/>
			<br/>

			<Accordion defaultActiveKey="0">
				<Accordion.Item eventKey="0">
					<Accordion.Header><b>1. Khóa học này sẽ phù hợp với:</b></Accordion.Header>
			    	<Accordion.Body>
						- Các bạn đang muốn tìm hiểu về lĩnh vực phát triển website<br/>
							- Các bạn sinh viên đang muốn bổ sung kiến thức cho các kiến thức trên trường<br/>
								- Các bạn đã và đang làm lập trình, muốn học bài bản về HTML<br/>
					</Accordion.Body>
				</Accordion.Item>

				<Accordion.Item eventKey="1">
					<Accordion.Header><b>2. Tại sao chúng ta nên học HTML</b></Accordion.Header>
					<Accordion.Body>
					- HTML (Hypertext markup language) - ngôn ngữ đánh dấu siêu văn bản, là ngôn ngữ để tạo dựng bố cục cho các văn bản dưới dạng là một trang web (hiển thị trên trình duyệt). Do vậy, nếu bạn xác định đi theo con đường lập trình web thì chắc chắn phải nắm vững được ngôn ngữ này. <br/>
					- Hiện nay, thời đại điện toán đám mây đã phổ cập, các ứng dụng không nhất thiết phải tải về máy tính mà có thể vận hành ở trên một server, từ đó người dùng có thể sử dụng app trực tiếp thông qua trình duyệt. Do vậy, HTML đóng vai trò như ngôn ngữ dựng giao diện cho ứng dụng. Cho dù bạn ko phải là người trực tiếp thiết kế giao diện, nhưng cũng cần nắm được tổng quan về ngôn ngữ này. <br/>
					- Nhờ vào tính linh động của HTML cùng với sự gọn nhẹ đơn giản của nó, bạn có thể triển khai giao diện phần mềm một cách nhanh chóng, phủ rộng trên nhiều thiết bị từ mobile đến desktop và trên bất cứ hệ điều hành nào (chỉ cần có trình duyệt là chạy được).<br/>
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
					- Cú pháp cơ bản của HTML <br/>
					- Phân loại các element trong HTML <br/>
					- Nhóm element: div, span  <br/>
					- Nhóm element hiển thị text: paragraph, heading,…. <br/>
					- Nhóm element list, table, form, link, image  <br/>
					- Nhúng mã CSS và Javascript vào HTML <br/>
					- Làm việc với HTML DOM để kết nối giao diện với logic lập trình  <br/>
					- Một số element mới trong HTML 5  <br/>
					- Giới thiệu 1 số ứng dụng của HTML  <br/>
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
					Tham gia lớp học online tại <a href='https://www.facebook.com/groups/vunguyencoder.hypertextmarkuplanguage' target='_blank'>FB Group này</a><br/>
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

