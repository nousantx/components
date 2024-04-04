// styles for modals
const modalStyles = {
  ".modal": "d-none position-fixed z-1 t-0 l-0 box-100% bg-#00000040",
  ".modal-content":
    "p-2rem br-0.25rem mv-15% mh-auto w-80% w-mx-600px bw-1px bs-solid  text-[neutral-100]",
  ".modal-danger": "bg-#87010160 bc-[danger-400]",
  ".modal-info": "bg-#01688760 bc-[info-400]",
  ".modal-sucess": "bg-#40870160 bc-[success-400]",
  ".modal-warning": "bg-#87640160 bc-[warning-400]"
};

// display block to clicked element
function showModal(selector) {
  makeStyle(selector, "d-block");
}

// iterates all close class
document.querySelectorAll(".close").forEach(function (closeBtn) {
  closeBtn.addEventListener("click", function () {
    // display-none to modal when close buttom clicked
    makeStyle(".modal", "d-none");
  });
});

// clicking outside modal-content
window.onclick = function (event) {
  if (event.target.classList.contains("modal")) {
    event.target.style.display = "none";
  }
};
