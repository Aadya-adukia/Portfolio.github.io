function SendMail() {
    let parms = {
       from_name : document.getElementById("fullName").value,
       email_id : document.getElementById("email_id").value,
       message : document.getElementById("message").value,
    }
    emailjs.send("service_db1wq8d", "template_5g2uqcf", parms).then(alert ("Email Sent!")

    )
}
