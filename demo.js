(function () {
    // 获取cookie备用
    const aa = document.cookie;
    let cookiesTotal= aa.split(";");
    let cookiesData = cookiesTotal[1].split("=");
    let cookies = cookiesData[1];
    console.log(cookies);


    let myObj = document.getElementById("ifrPage100002");
    console.log(myObj);

    let inputdata = "";
    let searchData = "accNbr";
    let seacchBty = myObj.contentWindow.document.getElementsByClassName("yn-search-ico")[0];
    console.log(seacchBty)
    if(seacchBty){
        seacchBty.onclick = function () {
            //存储input
            let inputObj  = myObj.contentWindow.document.querySelector("#qryCustomerInputStr");
            console.log(inputObj);
            if(inputObj){
                inputdata = inputObj.value;
                console.log(inputdata)
            }

            // 存储搜多类型
            let searchObj = myObj.contentWindow.document.querySelector("#multSearchType").getElementsByTagName("span");
            console.log(searchObj);
            searchData = searchObj[0].getAttribute("data-type");
            console.log(searchData);

            // 点击事件
            let listObj = myObj.contentWindow.document.querySelector("#resultList");
            console.log(listObj);


        }
    }

});