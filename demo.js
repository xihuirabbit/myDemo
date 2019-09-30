(function () {
    setTimeout(function () {
        alert("加载完成，请继续.....")
        let myObj = document.getElementById("ifrPage100002");

        let inputdata = "";
        let searchData = "accNbr";
        let listObj = "";
        let page = "";
        let answerData = "";

        //cookies备用
        const aa = document.cookie;
        let cookiesTotal= aa.split(";");
        let cookiesData = cookiesTotal[1].split("=");
        let cookies = cookiesData[1];
        console.log(cookies)

        // input备用
        let inputObj = myObj.contentWindow.document.querySelector("#qryCustomerInputStr");
        inputObj.onchange = function () {
            inputdata = inputObj.value;
            console.log(inputdata)
        }

        //是否分页存储
        // 存储搜索页
        let pageObj = myObj.contentWindow.document.querySelector("#showPageInfo");
        pageObj.addEventListener("click", function () {
            alert("我被选择了哈哈哈");
            let choosePage = myObj.contentWindow.document.getElementsByClassName("active")[0];
            console.log(choosePage)
            if(choosePage){
                page = choosePage.innerHTML;
                console.log(page)
            }
        });
    },3000)
})();

