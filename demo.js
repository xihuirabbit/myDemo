(function () {
    const myObj = document.getElementById("ifrPage100002");
    // 获取cookie备用
    const aa = document.cookie;
    let cookiesTotal= aa.split(";");
    let cookiesData = cookiesTotal[1].split("=");
    let cookies = cookiesData[1];
    console.log(cookies);

    //输入框存储
    let dataInput = myObj.contentWindow.document.querySelector("#qryCustomerInputStr");
    console.log(dataInput);
    let dataInput1 = "";
    dataInput.onchange = function () {
        console.log(inputEvent.value)
        sessionStorage.setItem('dataInput', dataInput.value);
        dataInput1 = sessionStorage.getItem("dataInput");
        console.log(dataInput1);
    }
})();