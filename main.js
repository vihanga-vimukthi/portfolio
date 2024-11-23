/*-- toggle icon navbar -- */
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
}

/*-- scroll section active link -- */
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });

    /*-- sticky navbar -- */
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    /*-- remove toggle icon and navbar -- */
    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');
};

/*-- scroll reveal -- */
ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200,
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-contact h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-contact p, .about-content', { origin: 'right' });

/*-- typed js -- */
const typed = new Typed('.multiple-text', {
    strings: ['Software Engineer','Game Developer', 'Web Developer', 'App Developer'],
    typeSpeed: 70,
    backSpeed: 70,
    backDelay: 1000,
    loop: true,
});





    // Function to open the popup and pass parameters
    function openPopup(title, content,index) {
        switch (index) {
            case 1:
                title = "Angular Blog App"; 
                content ="Angular blog application with a .NET API serving as the backend. This application allows users to perform full CRUD operations, enabling the creation, reading, updating, and deletion of blog posts. It also features an image upload function, allowing users to enhance their posts visually. Additionally, the app includes robust validation mechanisms to ensure data accuracy and consistency, providing a smooth and reliable blogging experience";
                break;
                case 2:
                title = "Newzeland Walk API"; 
                content ="New Zealand walk API using .NET, featuring key functionalities such as region and state details, including the distance in kilometers for each walk. The API is equipped with full validations to ensure data integrity and includes authorization and authentication mechanisms to secure access. It also supports all essential CRUD operations, enabling users to create, read, update, and delete walk information. Additionally, the API implements various types of validations to ensure that input data meets the required standards, ensuring a reliable and efficient user experience.";
                break;
                case 3:
                title = "Brain Math"; 
                content ="(Brain Math) mathematics app, designed for O/L and A/L students, offers three progressive stages to build essential math skills. It begins with Quick Maths, which helps improve speed and accuracy in basic arithmetic, allowing students to master mental calculations efficiently. Next, Hard Maths introduces more complex problems that challenge students' analytical thinking and problem-solving abilities. Finally, the Matrix stage explores advanced mathematical concepts, including matrices, to broaden students' understanding beyond the basics. By focusing on more than just practice, this app fosters critical thinking and helps students develop strong problem-solving skills for academic success. \n Visit:  https://play.google.com/store/apps/details?id=com.Hexaverse&hl=en_US";

                break;
                case 4:
                    title = "Vesak AR"; 
                    content ="For this Sri Lankan Vesak festival, my friends and I have created an AR Vesak Lantern, blending tradition with modern technology. This application allows users to experience the beauty of Vesak lanterns with augmented reality (AR) effects right on their mobile devices. for the technologies we used C# ,Unity, AR core";
                    break;
                    case 5:
                        title = "Enemy AI"; 
                        content ="Developed an advanced enemy AI system in Unreal Engine utilizing C++. This project involved implementing combat skills, including shooting mechanics and player motion animations, while also incorporating sophisticated pathfinding and AI navigation techniques to enhance gameplay dynamics.";
                        break;
                        case 6:
                            title = "Rage Room"; 
                            content ="It is a virtual reality simulation that allows users to experience a digital environment where they can release stress and frustration by interacting with virtual objects in a destructive manner. Participants wear a VR headset and often use motion controllers to interact with a simulated environment, providing a similar cathartic experience to a traditional rage room without the need for physical objects. This concept offers a controlled and safe outlet for venting emotions in a virtual setting.";
                            break;
               
            default:
                break;
        }
  
        document.getElementById('popup-title').innerText = title; // Set title
        document.getElementById('popup-content').innerText = content; // Set content
        document.getElementById('popup-overlay').style.display = 'block'; // Show overlay
        document.getElementById('popup-overlay').style.opacity = '1'; // Fade in overlay
        document.getElementById('popup-card').style.display = 'block'; // Show card
        setTimeout(() => {
          document.getElementById('popup-card').classList.add('show'); // Animate popup
        }, 10);

        console.log("Veduna");
      }
  
      // Function to close the popup
      function closePopup() {
        document.getElementById('popup-overlay').style.opacity = '0'; // Fade out overlay
        document.getElementById('popup-card').classList.remove('show'); // Animate close popup
        setTimeout(() => {
          document.getElementById('popup-overlay').style.display = 'none'; // Hide overlay after animation
          document.getElementById('popup-card').style.display = 'none'; // Hide card after animation
        }, 300);
      }