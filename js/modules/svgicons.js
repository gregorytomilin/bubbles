document.addEventListener("DOMContentLoaded", () => {

    fetch('img/icons/vector-icons.min.svg')
        .then((response) => {
            return response.text();
        })
        .then((data) => {
            let div = document.createElement("div");
            div.innerHTML = data;
            document.body.appendChild(div);
            div.style.cssText = 'position:fixed; z-index:-55555;width: 1px;height: 1px;';
        });
});