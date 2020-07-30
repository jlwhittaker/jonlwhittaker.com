window.onload = () => {

    // hamburger menu button, toggle nav visibility
    document.querySelector("header img").addEventListener("click", (e) => {
        document.querySelector("nav").classList.toggle("active");
    })
    document.querySelector("nav").addEventListener("click", (e) => {
        document.querySelector("nav").classList.remove("active");
    })

    // Open contact-modal when Contact nav button is clicked
    document.querySelector("nav a:last-child").addEventListener("click", (e) => {
        document.querySelector(".contact-modal").classList.add("active");
        document.querySelector(".contact-modal-content").classList.add("active");

        document.querySelector("body").classList.add("modal-open");
    })

    // Close modal when clicking X or outside modal content box
    document.querySelectorAll(".close-modal").forEach((elem) => {
        elem.addEventListener("click", (e) => {
            if (e.target.classList.contains("close-modal")) {
                document.querySelector(".contact-modal").classList.remove("active");
                document.querySelector(".contact-modal-content").classList.remove("active");
                document.querySelector(".contact-sent-modal").classList.remove("active");

                document.querySelector("body").classList.remove("modal-open");
            }
        })
    });

    // After contact form is sent, remove form modal and show contact-sent-modal

    document.querySelector("form").addEventListener("submit", (e) => {
        document.querySelector(".contact-modal-content").classList.remove("active");
        document.querySelector(".contact-sent-modal").classList.add("active");
    })

    // 'Read my story' expansion
    document.querySelector(".read-story").addEventListener("click", (e) => {
        document.querySelector(".extra-story").classList.add("active");
        document.querySelector(".read-story").classList.remove("active");
    })

    // Show modals for each app
    document.querySelector(".go-btn-stockr").addEventListener("click", (e) => {
        document.querySelector(".app-modal").classList.add("active");
        document.querySelector(".stockr-modal-content").classList.add("active");
        document.querySelector("body").classList.add("modal-open");

    });
    document.querySelector(".go-btn-weather").addEventListener("click", (e) => {
        document.querySelector(".app-modal").classList.add("active");
        document.querySelector(".weather-modal-content").classList.add("active");
        document.querySelector("body").classList.add("modal-open");

    });
    document.querySelector(".go-btn-crm").addEventListener("click", (e) => {
        document.querySelector(".app-modal").classList.add("active");
        document.querySelector(".crm-modal-content").classList.add("active");
        document.querySelector("body").classList.add("modal-open");

    });

    //Closing app modals
    document.querySelectorAll(".close-app-modal").forEach((elem) => {
        elem.addEventListener("click", (e) => {
            if (e.target.classList.contains("close-app-modal")) {
                document.querySelector(".app-modal").classList.remove("active");
                document.querySelectorAll(".app-modal-content").forEach((elem) => {
                    elem.classList.remove("active");
                });
                document.querySelector("body").classList.remove("modal-open");

            }
        })
    });

    // Show resume
    document.getElementById("open-resume").addEventListener("click", (e) => {
        document.querySelector(".resume").classList.add("active");
        document.querySelector("body").classList.add("modal-open");
    });
    // Print resume
    document.querySelector(".print-button").addEventListener("click", (e) => {
        window.frames['resume-pdf'].print();
    });
    // Close resume
    document.querySelector(".close-resume").addEventListener("click", (e) => {
        document.querySelector(".resume").classList.remove("active");
        document.querySelector("body").classList.remove("modal-open");
    });
}