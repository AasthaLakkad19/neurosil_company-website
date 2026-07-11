/* ================================
   MOBILE MENU TOGGLE
================================ */
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");

if (hamburger && navMenu) {
    hamburger.addEventListener("click", () => {
        navMenu.classList.toggle("show");
    });
}

/* Close menu when a link is clicked (mobile) */
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("show");
    });
});

/* ================================
   ACTIVE NAV LINK ON SCROLL
================================ */
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;

        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${current}`) {
            link.classList.add("active");
        }
    });
});

/* ================================
   SMOOTH SCROLLING
================================ */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    });
});

/* ================================
   CONTACT FORM VALIDATION (FIXED)
================================ */
const contactForm = document.getElementById("contactForm");
const responseMsg = document.getElementById("formResponse");

contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const formData = new FormData(contactForm);
    const email = formData.get("email");

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        responseMsg.style.color = "red";
        responseMsg.textContent = "Please enter a valid email address.";
        return;
    }

    fetch("contact.php", {
        method: "POST",
        body: formData
    })
        .then(response => response.text())
        .then(data => {
            if (data === "success") {
                responseMsg.style.color = "green";
                responseMsg.textContent = "Message sent successfully!";
                contactForm.reset();
            } else {
                responseMsg.style.color = "red";
                responseMsg.textContent = data;
            }
        })
        .catch(() => {
            responseMsg.style.color = "red";
            responseMsg.textContent = "Something went wrong. Try again.";
        });
});

/*TEAM*/
const teamMembers = [
    {
        name: "Mr. Deepkumar Gadhethariya",
        role: "Founder",
        img: "profile1.jpg",
        linkedin: "https://www.linkedin.com/in/mr-deepkumar-gadhethariya-b05989316?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        
    },
    {
        name: "Mr. Aryan Vamja",
        role: "Technical Head",
        img: "profile1.jpg",
        linkedin: "https://linkedin.com/in/priyasharma",
        
    },
    {
        name: "Mr. Ved Patel",
        role: "System Integration",
        img: "profile1.jpg",
        linkedin: "https://linkedin.com/in/rajpatel",
        
    },
    {
        name: "Ms. Vishva Zala",
        role: "Structure Designer",
        img: "profile 2.jpg",
        linkedin: "https://linkedin.com/in/rajpatel",
        
    },
    {
        name: "Ms. Aastha Lakkad",
        role: "UI Designer",
        img: "profile 2.jpg",
        linkedin: "https://www.linkedin.com/in/aastha-lakkad-7bb107344?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        
    },
    {
        name: "Ms. Priyanshi Kharva",
        role: "Dosumentation",
        img: "profile 2.jpg",
        linkedin: "https://www.linkedin.com/in/priyanshi-kharva-15754435a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        
    },
    {
        name: "Mr. Vasu Pokiya",
        role: "Finance Manager",
        img: "profile1.jpg",
        linkedin: "https://linkedin.com/in/rajpatel",
        
    }
];

let currentIndex = 0;

function showMember(index) {
    const member = teamMembers[index];

    document.getElementById('memberName').innerText = member.name;
    document.getElementById('memberRole').innerText = member.role;
    document.querySelector('.image-circle img').src = member.img;

    document.getElementById('memberLinkedIn').href = member.linkedin;
    document.getElementById("memberCV").href = member.cv;

}


function nextMember() {
    currentIndex = (currentIndex + 1) % teamMembers.length;
    showMember(currentIndex);
}

function prevMember() {
    currentIndex = (currentIndex - 1 + teamMembers.length) % teamMembers.length;
    showMember(currentIndex);
}

// Initial display
showMember(currentIndex);