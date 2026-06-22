// Get elements
const form = document.getElementById("feedback-form");
const comments = document.getElementById("comments");
const charCount = document.getElementById("char-count");
const message = document.getElementById("message");
const display = document.getElementById("feedback-display");

// -----------------------------
// Character Counter
// -----------------------------
comments.addEventListener("input", function () {

    charCount.textContent =
        "Characters: " + comments.value.length;

});

// -----------------------------
// Tooltip
// -----------------------------
const tooltip = document.createElement("div");
tooltip.className = "tooltip";
tooltip.style.display = "none";

document.body.appendChild(tooltip);

// Event Delegation
form.addEventListener("mouseover", function (event) {

    if (
        event.target.matches("input") ||
        event.target.matches("textarea")
    ) {

        tooltip.textContent =
            event.target.dataset.tooltip;

        tooltip.style.display = "block";

        tooltip.style.left =
            event.pageX + 10 + "px";

        tooltip.style.top =
            event.pageY + 10 + "px";
    }

});

form.addEventListener("mousemove", function (event) {

    tooltip.style.left =
        event.pageX + 10 + "px";

    tooltip.style.top =
        event.pageY + 10 + "px";

});

form.addEventListener("mouseout", function (event) {

    if (
        event.target.matches("input") ||
        event.target.matches("textarea")
    ) {

        tooltip.style.display = "none";
    }

});

// -----------------------------
// Keyboard Event
// -----------------------------
form.addEventListener("keydown", function(event){

    console.log("Key Pressed:", event.key);

});

// -----------------------------
// Form Validation
// -----------------------------
form.addEventListener("submit", function(event){

    event.preventDefault();

    const name =
        document.getElementById("name").value.trim();

    const email =
        document.getElementById("email").value.trim();

    const feedback =
        comments.value.trim();

    if(name==="" || email==="" || feedback===""){

        message.textContent =
            "Please complete every field.";

        return;
    }

    message.textContent = "";

    // Create feedback card
    const card =
        document.createElement("div");

    card.classList.add("feedback-card");

    card.innerHTML =
        "<h3>" + name + "</h3>" +
        "<p><strong>Email:</strong> " + email + "</p>" +
        "<p>" + feedback + "</p>";

    display.appendChild(card);

    form.reset();

    charCount.textContent =
        "Characters: 0";

});

// -----------------------------
// Stop Propagation
// -----------------------------
form.addEventListener("click", function(event){

    event.stopPropagation();

});

document.body.addEventListener("click", function(){

    console.log("Background clicked.");

});
