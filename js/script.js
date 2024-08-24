'user-strict';



const teacherList = document.getElementById('displayList');
async function fetchJSONTeacherData() {
  await fetch('../data/teacher-data.json')
    .then((res) => {
      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }
      return res.json();
    })
    .then((teachers) => {
      teachers.forEach((teacher) => {
        teacherList.insertAdjacentHTML(
          'beforeend',
          `<div class="col col-xl-3 col-lg-3 col-md-3 mb-5 scene">
            <div class="card">
              <div class="card__face card__face--front">
                <img src="${teacher.img}" class="card-img-top" alt="..." />
                <h5 class="card-title text-center">${teacher.name}</h5>
              </div>
              <div class="card-body card__face card__face--back">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">${teacher.department}</p>
                <p class="card-text">${teacher.address}</p>
                <p class="card-text">${teacher.phone_number}</p>
              </div>
            </div>
          </div>`
        );
      });
    })
    .catch((error) => console.error('Unable to fetch data:', error));
}

//Fetch Student Data from JSON File
const studentList = document.getElementById('displayList');
async function fetchJSONStudentData() {
  fetch('../data/student-data.json')
    .then((res) => {
      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }
      return res.json();
    })
    .then((students) => {
      students.forEach((student) => {
        studentList.insertAdjacentHTML(
          'beforeend',
          `<div class="col col-xl-3 col-lg-3 col-md-3 mb-5 scene">
            <div class="card">
              <div class="card__face card__face--front">
                <img src="${student.img}" class="card-img-top" alt="..." />
                <h5 class="card-title text-center">${student.name}</h5>
              </div>
              <div class="card-body card__face card__face--back">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">${student.physics}</p>
                <p class="card-text">${student.maths}</p>
                <p class="card-text">${student.english}</p>
              </div>
            </div>
          </div>`
        );
      });
    })
    .catch((error) => console.error('Unable to fetch data:', error));
}

//Flipping card
function addCardFlipProperties() {
  var cards = document.querySelectorAll('.card');

  [...cards].forEach((card) => {
    card.addEventListener('click', function () {
      card.classList.toggle('is-flipped');
    });
  });
}

//Display The Content
const displayBtn = document.getElementById('displayBtn');

//Check the radio buttons
displayBtn.addEventListener('click', function () {
  let checkedRadio = document.getElementsByName('schoolRoles');
  let selectedRadio;
  for (let index = 0; index < checkedRadio.length; index++) {
    const currentRadio = checkedRadio[index];
    if (currentRadio.checked) {
      selectedRadio = currentRadio.value;
      break;
    }
  }

  if (selectedRadio == 'studentOpt') {
    fetchJSONStudentData();
    addCardFlipProperties();
  } else {
    fetchJSONTeacherData();
    addCardFlipProperties();
  }
});
