const accordions = document.querySelectorAll(".content-container");

accordions.forEach((accordion) => {
  accordion.addEventListener("click", function () {
    
    accordions.forEach((acc) => {
      if (acc !== this) {
        acc.classList.remove("active");
      }
    });

    
    this.classList.toggle("active");
  });
});
