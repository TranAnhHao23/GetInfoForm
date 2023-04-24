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
    xhr.open('POST', 'http://localhost:3000/send-email');
    xhr.setRequestHeader('Content-Type', 'application/json')

    xhr.onload = () => {
        if (xhr.status === 200) {
            alert(xhr.response)
        } else {
            alert('Error sending email')
        }
    }

    xhr.send(JSON.stringify({name, email, subject, body} ))
}
