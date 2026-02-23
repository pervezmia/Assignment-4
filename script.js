
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



