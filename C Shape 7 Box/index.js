// document.addEventListener("DOMContentLoaded", function () {
//   console.log("Hello");
//   const boxes = document.querySelectorAll(".box");
//   const queue = [];
//   console.log(boxes);

//   boxes.forEach((box) => {
//     box.addEventListener("click", (e) => {
//       const dataIndex = e.target.dataset.index;

//       queue.push(boxes[dataIndex]);
//       // console.log(queue);
//       // console.log("queueIndex" + queue[0]);
//       // console.log("boxesIndex" + boxes[dataIndex]);

//       for (let i = 0; i < queue.length; i++) {
//         if (i == dataIndex) {
//           // console.log("dataset " + queue[dataIndex].dataset);
//         }
//       }
//       queue.forEach((box) => {
//         box.classList.add("style");
//       });
//     });
//   });
// });

document.addEventListener("DOMContentLoaded", function () {
  console.log("Hello");
  const boxes = document.querySelectorAll(".box");
  const queue = [];
  console.log(boxes);

  boxes.forEach((box) => {
    box.addEventListener("click", (e) => {
      const dataIndex = e.target.dataset.index;
      const boxIndex = queue.indexOf(boxes[dataIndex]);

      console.log("Queue " + queue);
      console.log("Boxes " + boxes);
      console.log("boxIndex " + boxIndex);

      if (boxIndex > -1) {
        // If the box is already in the queue, remove it
        queue.splice(boxIndex, 1);
        boxes[dataIndex].classList.remove("style");
      } else {
        // If the box is not in the queue, add it
        queue.push(boxes[dataIndex]);
        boxes[dataIndex].classList.add("style");
      }

      console.log(queue);
    });
  });
});
