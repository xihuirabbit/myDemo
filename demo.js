(function () {
    // 获取cookie备用
    const aa = document.cookie;
    let cookiesTotal= aa.split(";");
    let cookiesData = cookiesTotal[1].split("=");
    let cookies = cookiesData[1];
    console.log(cookies);


    let myObj = document.getElementById("ifrPage100002");
    console.log(myObj);

    //输入框存储
    let inputObj  = myObj.contentWindow.document.querySelector("#qryCustomerInputStr");
    console.log(inputObj)
    let inputdata = inputObj.value;
    console.log(inputdata)

})();