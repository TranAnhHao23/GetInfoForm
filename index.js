function sendEmail() {
    let name = "Tran Anh Hao"
    let phone = document.getElementById("account_phone").value;
    let courseRoute = document.getElementById("course_route").value;
    if ( phone === '' || courseRoute === 'none') {
        alert("Vui lòng điền đầy đủ thông tin")
        return
    }
    let email = 'trananhhaonuce@gmail.com'
    let subject = "Số điện thoại " + phone + " đã yêu cầu nhận thông tin về ngành " + courseRoute
    let body = "Số điện thoại: " + phone + "\n" +
        "Yêu cầu nhận thông tin lộ trình ngành: " + courseRoute
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://be-neu-elearning.onrender.com/send-email');
    xhr.setRequestHeader('Content-Type', 'application/json')
    alert("Chúng tôi đã tiếp nhận thông tin. Chúng tôi sẽ liên lạc với bạn trong giây lát")

    xhr.onload = () => {
        if (xhr.status !== 200) {
            alert('Error sending email')
        }
    }

    xhr.send(JSON.stringify({name, email, subject, body} ))
}
