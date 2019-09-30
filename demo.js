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

        listObj = myObj.contentWindow.document.querySelector("#resultList");
        if(listObj){
           listObj.addEventListener("click",function () {
               alert("aa")
           })
        }else{
            console.log("bb")
        }


    },3000)
})();

