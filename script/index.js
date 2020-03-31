document.addEventListener("DOMContentLoaded", function() {
    
    //flow scroll
    const links = document.querySelectorAll('header a[href*="#"]');

    function cleanActiveLinks(){                                                     //удаляет актівность всех ссылок
        const parentsLinks = document.getElementsByClassName("menu-link");
        for (let parent of parentsLinks){
            parent.classList.remove('active');
        }
    }

    document.addEventListener('wheel', cleanActiveLinks);

    for (let link of links) {
        console.log(link);
        link.addEventListener('click', function(event) {
            event.preventDefault();                                     // отменяет стандартное поведеніе элемента
            const id = link.getAttribute('href').substr(1);
            document.getElementById(id).scrollIntoView({
                block: 'center', 
                behavior: 'smooth'
            });
            cleanActiveLinks();
            event.target.closest('div').classList.add('active');
        });
    }
    
    function changeHeader() {
        console.log("Scrolling", window.scrollY);
        let headerClasses = document.getElementsByTagName("header")[0].classList;
        if (window.scrollY >0){
            let isHeaderHasClass = headerClasses.contains("scrolling");
            if (!isHeaderHasClass){
                //add class to header
                headerClasses.add("scrolling");
            }
        } else {
            headerClasses.remove("scrolling");
        }
    }
    
    
    
    document.addEventListener("scroll", changeHeader);

    // video

    let videoElement = document.getElementsByTagName("video")[0];

    function setVideoPlay(){
        videoButton.style.display = 'none';
        videoElement.style.display = 'block';
        videoElement.play();
    }

    let videoButton = document.querySelector(".video-play a");
    videoButton.addEventListener("click", setVideoPlay);

    function myHandler(){
        videoElement.style.display = 'none';
        videoButton.style.display = 'block';       
    }
    
    videoElement.addEventListener('ended', myHandler, false);

    //email
    function validEmail(value){
        const isValidEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(event.target.value);
        let errorElement = document.getElementsByClassName('error')[0];
            if (!isValidEmail) {
                errorElement.style.display = 'block';
            } else {
                errorElement.style.display = 'none';
            }
            return isVslidEmail;    
    }
    
    let emailInput = document.getElementsByTagName("input")[0];

    if (emailInput){
        emailInput.addEventListener('input', function(event){
            validEmail(event.target.value);
        });
    }

    let emailButton = document.querySelectorAll('.email-content button')[0];
    if (emailButton){
        emailButton.addEventListener('click', function(){
            const isValidEmail = validEmail(emailInput.value);
            if (isValidEmail){
                //request to server
            }
        });
    }
});

