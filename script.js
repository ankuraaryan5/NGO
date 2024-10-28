function toggleMenu() {
    const navLinks = document.getElementById("nav-links");
    navLinks.classList.toggle("hidden");
}
function sendEmail() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    alert(`You have sent an email to Apna Ghar. With the following details:\nName: ${name}\nEmail: ${email}\nMessage: ${message}`);
    alert("Email sent successfully!")

    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";

}

function sendRequest() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const message = document.getElementById("message").value;

    alert(`We have received your request to join Apna Ghar as a volunteer, with the following details:\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`);   

    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("message").value = "";
}