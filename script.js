document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");
    // Hello new push
	//hello second push
	//add another comment
    if (form) {
        form.addEventListener("submit", function (event) {
            event.preventDefault();
            const email = document.getElementById("email").value;
            document.getElementById("message").textContent = `Thank you! We will contact you at ${email}`;
            form.reset();
        });
    }
});
