
let interviewList = [];
let rejectedList = [];


const currentStatus = "all-filtering-btn";

const totalCount = document.getElementById("total");
const availableJobs = document.getElementById("availableJobs");
const interviewCount = document.getElementById("interviewCount");
const rejectedCount = document.getElementById("rejectedCount");

//toggling btn 
const allFilteringBtn = document.getElementById("all-filtering-btn");
const interviewFilteringBtn = document.getElementById("interview-filtering-btn");
const rejectedFilteringBtn = document.getElementById("rejected-filtering-btn");

const allCardsSection = document.getElementById("all-cards");

let filterSection = document.getElementById("filter-section");

//calculation
function calculate() {
    totalCount.innerText = allCardsSection.children.length;
    availableJobs.innerText = allCardsSection.children.length;
    interviewCount.innerText = interviewList.length;
    rejectedCount.innerText = rejectedList.length;

}
calculate();


// toggling
function togglingStyle(id) {

    allFilteringBtn.classList.add("bg-gray-300", "text-black");
    interviewFilteringBtn.classList.add("bg-gray-300", "text-black");
    rejectedFilteringBtn.classList.add("bg-gray-300", "text-black");

    allFilteringBtn.classList.remove("bg-amber-300", "text-white");
    interviewFilteringBtn.classList.remove("bg-amber-300", "text-white");
    rejectedFilteringBtn.classList.remove("bg-amber-300", "text-white");

    const clickedBtn = document.getElementById(id);

    clickedBtn.classList.remove("bg-gray-300", "text-black");
    clickedBtn.classList.add("bg-amber-300", "text-white");
}
togglingStyle("all-filtering-btn");


//event delegation orthat parent a click kore btn child dhore kaj korsi

allCardsSection.addEventListener("click", function (event) {
    const successBtn = event.target.closest(".success-btn-of-card");
    const warningBtn = event.target.closest(".warning-btn-of-card");
    const deleteBtn = event.target.closest(".delete-btn-of-card");


    if (successBtn) {
        const parentNode = event.target.closest(".card-item")

        const title = parentNode.querySelector(".title-of-card").innerText;
        const skill = parentNode.querySelector(".skill-of-card").innerText;
        const salary = parentNode.querySelector(".salary-of-card").innerText;
        const status = parentNode.querySelector(".status-of-card").innerText;
        const description = parentNode.querySelector(".description-of-card").innerText;

        const cardInfo = {
            title,
            skill,
            salary,
            status: "Interview",
            description
        }



        const existInterview = interviewList.find(item => item.title === cardInfo.title);


        if (!existInterview) {
            interviewList.push(cardInfo);
        }

    }
})


function renderInterview() {

    filterSection = "";
    for (const interview of interviewList) {
        let div = document.createElement("div");
        div.className = "card-item flex justify-between border p-[30px]";
        div.innerHTML = `
                <div class="space-y-2">
                    <div class="space-y-2">
                        <h2 class="title-of-card font-bold">${interview.title}</h2>
                        <p class="skill-of-card">React Native Developer</p>
                        <p class="salary-of-card">Remote • Full-time • $130,000 - $175,000</p>
                    </div>
                    <div>
                        <p class="status-of-card font-bold btn px-3 py-1 bg-base-300">${interview.status}</p>
                    </div>
                    <p class="description-of-card">Build cross-platform mobile applications using React Native. Work on products used by millions of
                        users worldwide.</p>
                    <div>
                        <button class="success-btn-of-card btn btn-active btn-info">Success</button>
                        <button class="warning-btn-of-card btn btn-active btn-warning">Warning</button>
                    </div>
                </div>
                <div class="">
                    <button class="delete-btn-of-card btn rounded-full w-[30px] h-[30px] p-[24px]">
                        <i class="fa-regular fa-trash-can delete-btn-of-card"></i>
                    </button>
                </div>
    `
    filterSection.appendChild(div);
    }

    
    console.log(filterSection);

}
