export function clickQuestionElement(questionsElements) {
  questionsElements.forEach((question) => {
    question.addEventListener("keydown", (event) => {
      if (event.key == "Enter") {
        console.log(question);
        question.click();
      }
    });
  });
}

export function animationSection(sectionElements) {
  const options = {
    threshold: 0.3,
  };
  function callback(sections) {
    sections.forEach((section) => {
      if (section.isIntersecting) {
        section.target.classList.add("in-view");
      } else {
        section.target.classList.remove("in-view");
      }
    });
  }

  const observer = new IntersectionObserver(callback, options);
  sectionElements.forEach((element) => {
    observer.observe(element);
  });
}
