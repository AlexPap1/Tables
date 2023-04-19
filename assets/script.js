searchButton = document.getElementById("submit");
input = document.getElementById("lastname");

searchButton.addEventListener('click', function (e) {
    e.preventDefault();
    const searchTerm = input.value.trim();
    console.log(searchTerm);
    alert(searchTerm);
});

document.getElementById("lastname")
    .addEventListener("keyup", function (e) {
        if (e.keyCode === 13) {
            document.getElementById("submit").click();
        }
    });