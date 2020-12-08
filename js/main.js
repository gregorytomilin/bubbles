document.addEventListener("DOMContentLoaded", ()=>{
    // (function () {
    //     $.get("img/icons/vector-icons.min.svg", function (data) {
    //         var div = document.createElement("div");
    //         div.innerHTML = new XMLSerializer().serializeToString(data.documentElement);
    //         document.body.appendChild(div);
    //         div.style.cssText = 'position:fixed; z-index:-55555;width: 1px;height: 1px;';
    //         console.log('hello');
    //     });
    // })();

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
