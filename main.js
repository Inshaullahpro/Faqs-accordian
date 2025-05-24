let questions = document.querySelectorAll(".question");
let plus = document.querySelectorAll(".plus");
let minus = document.querySelectorAll(".minus");
let para = document.querySelectorAll(".para");

questions.forEach((question, index, array) => {
  question.addEventListener("click", () => {
    array.forEach((elm, childIndex) => {
      if (index == childIndex) {
        if (minus[index].style.display == "none") {
          plus[index].style.display = "none";
          minus[index].style.display = "block";
          para[index].style.display = "block";
        } else {
          plus[index].style.display = "block";
          minus[index].style.display = "none";

          para[index].style.display = "none";
        }
      } else {
        plus[childIndex].style.display = "block";
        minus[childIndex].style.display = "none";

        para[childIndex].style.display = "none";
      }
    });

    // console.log("the index is: ", index);
    // if (minus[index].style.display == "none") {
    //   plus[index].style.display = "none";
    //   minus[index].style.display = "block";
    //   para[index].style.display = "block";
    // } else {
    //   plus[index].style.display = "block";
    //   minus[index].style.display = "none";

    //   para[index].style.display = "none";
    // }
  });
});

// let question = document.querySelector(".question");
// let plus = document.querySelector(".plus");
// let minus = document.querySelector(".minus");
// let para = document.querySelector(".para");

// question.addEventListener("click", () => {
//   if (minus.style.display == "none") {
//     plus.style.display = "none";
//     minus.style.display = "block";
//     para.style.display = "block";
//   } else {
//     plus.style.display = "block";
//     minus.style.display = "none";

//     para.style.display = "none";
//   }
// });