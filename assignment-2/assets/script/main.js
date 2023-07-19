
/*
*********************************
 Subject: WST 154 (Summer 2023)
 Author: Edilvan E. Falcon
 Instructor: David Kazaryan
 Date Created: 2023.07.09
 Description: Assignment No. 2
 - Create an object with properties and populate and HTML table with those properties.
 ********************************
*/

const school_data = {
  "student": [
    {
      idImage: "https://randomuser.me/api/portraits/men/1.jpg", 
      firstName: "John",
      lastName: "Doe",
      attendance: getRandomGrade(),
      midtermExam: getRandomGrade(),
      finalExam: getRandomGrade(),
      finalGrade: getRandomGrade()
    },
    {
      idImage: "https://randomuser.me/api/portraits/women/2.jpg", 
      firstName: "Emma",
      lastName: "Smith",
      attendance: getRandomGrade(),
      midtermExam: getRandomGrade(),
      finalExam: getRandomGrade(),
      finalGrade: getRandomGrade()
    },
    {
      idImage: "https://randomuser.me/api/portraits/men/3.jpg", 
      firstName: "Michael",
      lastName: "Johnson",
      attendance: getRandomGrade(),
      midtermExam: getRandomGrade(),
      finalExam: getRandomGrade(),
      finalGrade: getRandomGrade()
    },
    
    {
      idImage: "https://randomuser.me/api/portraits/women/8.jpg", 
      firstName: "Sarah",
      lastName: "Wilson",
      attendance: getRandomGrade(),
      midtermExam: getRandomGrade(),
      finalExam: getRandomGrade(),
      finalGrade: getRandomGrade()
    }
  ]
}

const tableContent = document.getElementById("table-content");
const tableButtons = document.querySelectorAll("th button");

const createRow = (obj) => {
 const row = document.createElement("tr");
 const objKeys = Object.keys(obj);
 objKeys.map((key) => {
   const cell = document.createElement("td");
   cell.setAttribute("data-attr", key);

   if(key == "idImage") {  // check if key is for image use image tag
      
      var cellContent = "<img src='" + obj[key] + "' />";

   } else if(key == "finalGrade") { // if key is grade compute for final grade

      var cellContent = ((obj['attendance'] + obj['midtermExam'] + obj['finalExam']) / 3).toFixed(0);
      
   } else { // default data to display
      var cellContent = obj[key];

   }

   cell.innerHTML = cellContent;

   row.appendChild(cell);

 });
 return row;
};

const getTableContent = (data) => {
 data.map((obj) => {
   const row = createRow(obj);
   tableContent.appendChild(row);
 });
};

const sortData = (data, param, direction = "asc") => {
 tableContent.innerHTML = '';
 const sortedData =
   direction == "asc"
     ? [...data].sort(function (a, b) {
         if (a[param] < b[param]) {
           return -1;
         }
         if (a[param] > b[param]) {
           return 1;
         }
         return 0;
       })
     : [...data].sort(function (a, b) {
         if (b[param] < a[param]) {
           return -1;
         }
         if (b[param] > a[param]) {
           return 1;
         }
         return 0;
       });

 getTableContent(sortedData);
};

const resetButtons = (event) => {
 [...tableButtons].map((button) => {
   if (button !== event.target) {
     button.removeAttribute("data-dir");
   }
 });
};

window.addEventListener("load", () => {
 getTableContent(school_data.student);

 [...tableButtons].map((button) => {
   button.addEventListener("click", (e) => {
     resetButtons(e);
     if (e.target.getAttribute("data-dir") == "desc") {
       sortData(school_data.student, e.target.id, "desc");
       e.target.setAttribute("data-dir", "asc");
     } else {
       sortData(school_data.student, e.target.id, "asc");
       e.target.setAttribute("data-dir", "desc");
     }
   });
 });
});

function getRandomGrade() {
  return Math.floor(Math.random() * 31) + 70;
}

