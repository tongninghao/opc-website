/* ================= CORE ELEMENT ================= */


const scenes = document.querySelectorAll(".scene");

const backgrounds = document.querySelectorAll(".bg");

const navItems = document.querySelectorAll(".nav-item[data-state]");

const dropdownItems = document.querySelectorAll(".drop-item");

const group = document.querySelector(".nav-group");

const flagshipSections = document.querySelectorAll(".flagship-section");


let open = false;



/* ================= FLAGSHIP MOTION OBSERVER ================= */


const flagshipObserver = new IntersectionObserver(

(entries)=>{


    entries.forEach(entry=>{


        if(entry.isIntersecting){


            entry.target.classList.add("active");


        }else{


            entry.target.classList.remove("active");


        }


    });


},


{


    threshold:0.45


}


);



flagshipSections.forEach(section=>{


    flagshipObserver.observe(section);


});







/* ================= RENDER SYSTEM ================= */


function render(state){



    scenes.forEach(scene=>{


        scene.classList.toggle(

            "active",

            scene.dataset.state === state

        );


    });





    backgrounds.forEach(bg=>{


        bg.classList.toggle(

            "active",

            bg.dataset.state === state

        );


    });





    navItems.forEach(nav=>{


        nav.classList.toggle(

            "active",

            nav.dataset.state === state

        );


    });


}







/* ================= NAVIGATION ================= */


navItems.forEach(item=>{


    item.addEventListener(

        "click",

        ()=>{


            render(item.dataset.state);



            open=false;



            group.classList.remove("open");


        }

    );


});







/* ================= PRODUCTS ================= */


dropdownItems.forEach(item=>{


    item.addEventListener(

        "click",

        (event)=>{


            event.stopPropagation();



            render(item.dataset.state);



            open=false;



            group.classList.remove("open");


        }

    );


});







/* ================= DROPDOWN ================= */


group.addEventListener(

    "click",

    (event)=>{


        event.stopPropagation();



        open=!open;



        group.classList.toggle(

            "open",

            open

        );


    }

);







/* ================= CLOSE ================= */


document.body.addEventListener(

    "click",

    ()=>{


        open=false;



        group.classList.remove("open");


    }

);







/* ================= INIT ================= */


render("home");