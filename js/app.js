const scenes = document.querySelectorAll(".scene");
const backgrounds = document.querySelectorAll(".bg");
const navItems = document.querySelectorAll("[data-state]");
const group = document.querySelector(".nav-group");

let open = false;

/* RENDER */
function render(state){

    scenes.forEach(s=>{
        s.classList.toggle("active", s.dataset.state === state);
    });

    backgrounds.forEach(b=>{
        b.classList.toggle("active", b.dataset.state === state);
    });

    navItems.forEach(n=>{
        n.classList.toggle("active", n.dataset.state === state);
    });
}

/* NAV */
navItems.forEach(el=>{
    el.addEventListener("click",()=>{
        render(el.dataset.state);
        open = false;
        group.classList.remove("open");
    });
});

/* DROPDOWN */
document.querySelectorAll(".drop-item").forEach(el=>{
    el.addEventListener("click",()=>{
        render(el.dataset.state);
        open = false;
        group.classList.remove("open");
    });
});

/* TOGGLE */
group.addEventListener("click",(e)=>{
    e.stopPropagation();
    open = !open;
    group.classList.toggle("open", open);
});

/* OUTSIDE CLOSE */
document.body.addEventListener("click",()=>{
    open = false;
    group.classList.remove("open");
});

/* INIT */
render("home");