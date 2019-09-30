(function () {
    setTimeout(function () {
        let myObj = document.getElementById("ifrPage100002");

        let inputdata = "";
        let searchData = "accNbr";
        let listObj = "";
        let page = "";
        let answerData = "";

        const aa = document.cookie;
        let cookiesTotal= aa.split(";");
        let cookiesData = cookiesTotal[1].split("=");
        let cookies = cookiesData[1];

        let searchObj = myObj.contentWindow.document.querySelector("#searchList");
        let div1 = document.createElement("div");
        div.setAttribute("id", "newDiv1");
        div.innerHTML = "新增div";
        searchObj.appendChild(div);

        },3000)
})();

