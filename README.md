Answer to the question no.1

HTML File এ কোন ট্যাগ id দিয়ে define করলে জাভা স্ক্রিপ্টে তাকে ধরতে getElementById ব্যবহার করা হয় 

HTML File এ কোন ট্যাগ class  দিয়ে define করলে জাভা স্ক্রিপ্টে তাকে ধরতে getElementsByClassName ব্যবহার করা হয়

HTML File এ কিছু ট্যাগ same class  দিয়ে define করলে জাভা স্ক্রিপ্টে তাদের প্রথমটা কে ধরতে querySelector ব্যবহার করা হয়

HTML File এ কোন ট্যাগ class and id  দিয়ে define করলে জাভা স্ক্রিপ্টে তাদের ধরতে querySelectorAll ব্যবহার করা হয় 



Answer to the question no.2

Actually I create and insert a new element into the Dom like below. 
const p = document.createElement("p");
p.innerText = "Bangladesh";
document.body.appendChild(p);


Answer to the question no.3

Event Bubbling defines handle event small to big.
like ul --> li 
first event handle li then ul.
  
Answer to the question no.4

Event delegation handle parent to its child elements using bubbling event.
like section event delegation handle --> div and li event 
first event handle section then dev.

event delegation is useful because it makes cleaner code and dynamically added element. 

Answer to the question no.5
preventDefault() method stops default browser action 
stopPropagation() method stops parent element propagate or bubbling.