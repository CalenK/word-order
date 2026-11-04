window.addEventListener("load", function() {
  function handleForm(event) {
    event.preventDefault();
    const text = document.querySelector("input#line").value;
    const textArray = text.trim().split(/\s+/);
    const freq = {};
    const ulElement = document.createElement("ul")
    textArray.forEach(word => {
      freq[word] = (freq[word] || 0) + 1;
    });
    Object.entries(freq).forEach( ([word, count]) => {
       const liElement = document.createElement("li");
       liElement.prepend(`${word}: ${count}`);
       ulElement.append(liElement);
    });
    document.body.append(ulElement);
  }
  document.querySelector("form").addEventListener("submit", handleForm);
});

