window.onload = function() {
  const input = document.getElementById("inputBox");
  const container = document.getElementById("container");

  container.addEventListener("click", function(e) {
    const id = e.target.id;
    if (!id.startsWith("Button")) return;

    if (id === "ButtonC") {
      input.value = "";
    } else if (id === "Button=") {
      if (input.value.trim() === "" || input.value === ".") {
        alert("Enter a valid expression!");
        return;
      }
      try {
        input.value = eval(input.value);
      } catch {
        alert("Invalid expression!");
        input.value = "";
      }
    } else {
      input.value += id.replace("Button", "");
    }
  });
};
