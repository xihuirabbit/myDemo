(function () {
    // 获取cookie备用
    const aa = document.cookie;
    let cookiesTotal= aa.split(";");
    let cookiesData = cookiesTotal[1].split("=");
    let cookies = cookiesData[1];
    console.log(cookies);


    let myObj = document.getElementById("ifrPage100002");
    console.log(myObj);

    //输入框s数据
    let inputObj  = myObj.contentWindow.document.querySelector("#qryCustomerInputStr");
    console.log(inputObj);
    let inputdata = "";
    inputObj.onchange = function () {
        if(inputObj){
            inputdata = inputObj.value;
            console.log(inputdata)
        }
    }


    // 搜索项选择
    console.log(myObj.contentWindow.document.querySelector("#multSearchType"));
    let searchBty = myObj.contentWindow.document.querySelector("#multSearchType").getElementsByTagName("button");
    console.log(searchBty);
    let searchObj = myObj.contentWindow.document.querySelector("#multSearchType").getElementsByTagName("span");
    console.log(searchObj);
    let searchData = "";
    searchBty.onclick = function () {
        if(searchObj){
            searchData = "";
            console.log(searchData);
        }
    }
})();