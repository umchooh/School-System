'user-strict';
import studentData from '../data/student-data.json' with { type: 'json' };
console.log(studentData);
import teachertData from '../data/teacher-data.json' with { type: 'json' };
console.log(teachertData);

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
      studentData.forEach((student) => {
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
      addCardFlipProperties();
    } else {
      teachertData.forEach((teacher) => {
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
  
      addCardFlipProperties();
    }
  });
  