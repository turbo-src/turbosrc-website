(function () {
    emailjs.init("QjpzE2RJb1rGVGPs0");
  })();
  
  window.onload = function () {
    document
      .getElementById("email-list")
      .addEventListener("submit", function (event) {
        event.preventDefault();
        emailjs.sendForm("service_36ferie", "template_bm4bbbe", this).then(
          function () {
            document.getElementById("email-input").value = "We'll contact you soon!";
          },
          function (error) {
            document.getElementById("confirm-email").innerText =
              "There was an error.";
            console.log(error);
          }
        );
      });
  };
  