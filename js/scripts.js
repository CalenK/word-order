window.addEventListener("load", function() {
  function handleForm(event) {
    event.preventDefault();
    const text = document.querySelector("input#line");
    const userText = Array.from(text);
    const olElement = document.createElement("ol");
    userText.toSorted().forEach(function(word) {
      const liElement = document.createElement("li");
      liElement.append(word);
      olElement.append(liElement);
    });
    document.body.append(olElement);
  }
  document.querySelector("form").addEventListener("submit", handleForm);
});

