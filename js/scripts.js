window.addEventListener("load", function() {
  function handleForm(event) {
    event.preventDefault();
    const text = document.querySelector("input#line").value;
    const textArray = text.trim().split(/\s+/);
    const freq = {};
    console.log(freq)
    const ulElement = document.createElement("ul")
    textArray.forEach(word => {
      const liElement = document.createElement("li");
      freq[word] = (freq[word] || 0) + 1;
      liElement.append(word);
      ulElement.append(liElement);
    });
    document.body.append(ulElement);
    return freq;
  }
  document.querySelector("form").addEventListener("submit", handleForm);
});

