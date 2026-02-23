
let interviewList = [1,2,3,];
let rejectedList = [1,2,];

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

// console.log(interviewCount.innerText, rejectedCount.innerText);

//calculation
function calculate (){
    totalCount.innerText = allCardsSection.children.length;
    availableJobs.innerText = allCardsSection.children.length;
    interviewCount.innerText = interviewList.length;
    rejectedCount.innerText = rejectedList.length;

}
calculate();


// toggling
function togglingStyle (id){
    
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

