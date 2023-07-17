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
        borderWidth: 5,
        hoverBorderWidth: 0,
        plugins: {
            legend: {
                display: false, 
            },
        },
    },
});

