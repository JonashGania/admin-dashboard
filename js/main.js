/* TOGGLE SIDEBAR MENU */

function toggleSidebarMenu(){
    const sidebarMenuBtn = document.querySelector('.sidebar-menu-btn');
    const sidebarMenu = document.querySelector('.sidebar-menu');
    const closeBtn = document.querySelector('.close-btn');
    const menuOverlay = document.querySelector('.overlay');
    

    sidebarMenuBtn.addEventListener('click', () => {
        sidebarMenu.classList.add('active');
        menuOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';

    })
    closeBtn.addEventListener('click', () => {
        sidebarMenu.classList.remove('active');
        menuOverlay.classList.remove('active');
        document.body.style.overflow = 'auto';
        
    })
    menuOverlay.addEventListener('click', () => {
        sidebarMenu.classList.remove('active');
        menuOverlay.classList.remove('active');
        document.body.style.overflow = 'auto';
        
    })
    function closeSidebarOnResize() {
        if (window.innerWidth > 950 && sidebarMenu.classList.contains('active')) {
          sidebarMenu.classList.remove('active');
          menuOverlay.classList.remove('active');
          document.body.style.overflow = 'auto';
        } 
      }
    
      window.addEventListener('resize', closeSidebarOnResize);
   
}
toggleSidebarMenu();




/* TOGGLE DARK MODE/LIGHT MODE*/

const sun = document.querySelector('.sun');
const moon = document.querySelector('.moon');
const userTheme = localStorage.getItem("theme");
const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;

const iconToggle = () => {
    sun.classList.toggle('display-none');
    moon.classList.toggle('display-none');
}

const themeCheck = () => {
    if(userTheme === "dark" || (!userTheme && systemTheme)){
        document.documentElement.classList.add('dark');
        moon.classList.add('display-none')
        return;
    }
    sun.classList.add('display-none');
}

const themeSwitch = () => {
    if(document.documentElement.classList.contains("dark")){
        document.documentElement.classList.remove('dark');
        localStorage.setItem("theme", "light");
        iconToggle();
        return;       
    }
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
    iconToggle();
}

sun.addEventListener('click', () => {
    themeSwitch();
})
moon.addEventListener('click', () => {
    themeSwitch();
})
themeCheck();


/* TOGGLE DROPDOWN PROFILE */

function toggleDropdownProfile(){
    const profile = document.querySelector('.profile');
    const dropdownProfile = document.querySelector('.dropdown-profile');
    
    profile.addEventListener('click', () => {
        dropdownProfile.classList.toggle('open');
    })
    document.addEventListener('click', (event) => {
        const isClickInside = dropdownProfile.contains(event.target) || profile.contains(event.target);
        
        if (!isClickInside) {
          dropdownProfile.classList.remove('open');
        }
    });
}
toggleDropdownProfile();



/* TOGGLE SIDEBAR MINIMIZ */

const sidebarToggle = document.querySelector('.sidebar-toggle');
const sidebar = document.querySelector('.sidebar');
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');

sidebarToggle.addEventListener('click', () => {
    sidebar.classList.toggle("close");
    if(sidebar.classList.contains("close")){
        leftArrow.classList.add('hidden');
        rightArrow.classList.remove('hidden');
    } else {
        rightArrow.classList.add('hidden');
        leftArrow.classList.remove('hidden');
    }
})

function arrowChange(){
    if(sidebar.classList.contains('close')){
        sidebarToggle.classList.replace("left-arrow", "right-arrow");
    } else {
        sidebarToggle.classList.replace("right-arrow", "left-arrow");
    }
}


/* PROGRESS BAR CHART */

let progressBar = document.querySelector('.circular-progress');
let progressValue = document.querySelector('.progress-value');

let startValue = 0;
let endValue = 100;
let speed = 100;

let progress = setInterval(() => {
    startValue++
    progressValue.textContent = `${startValue}%`;
    progressBar.style.background = `conic-gradient(
        #5D59FF ${startValue * 3.6}deg,
        #cadcff ${startValue * 3.6}deg
    )`;
    if(startValue === endValue){
        clearInterval(progress);
    }
}, speed)



/* DOUGHNUT CHART */

const doughnutChart = document.querySelector('.myChart');

new Chart(doughnutChart, {
    type: "doughnut",
    data: {
        labels: ["Personal", "Home", "Work", "Study"],
        datasets: [
            {
                label: "In percentage",
                data: [40,25,20,15],
                backgroundColor: ["#0ea5e9", "#f43f5e", "#6366f1", "#f97316"]
            },
        ]
    },
    options: {
        hoverBorderWidth: 0,
        plugins: {
            legend: {
                display: false, 
            },
        },
    },
});

