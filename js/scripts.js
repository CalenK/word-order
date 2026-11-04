window.addEventListener("load", function() {
  function handleForm(event) {
    event.preventDefault();
    const text = document.querySelector("input#line").value;
    const textArray = text.trim().split(/\s+/);
    const olElement = document.createElement("ol")
    textArray.forEach(function(word) {
      const liElement = document.createElement("li");
      liElement.append(word);
      olElement.append(liElement);
    });
    document.body.append(olElement);
  }
  document.querySelector("form").addEventListener("submit", handleForm);
});

