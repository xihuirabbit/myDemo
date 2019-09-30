(function () {
    setTimeout(function () {
        alert("加载完成，请继续.....")
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

        listObj = myObj.contentWindow.document.querySelector("#resultList");
        console.log(listObj)

        },3000)
})();

