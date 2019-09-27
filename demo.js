(function () {
    // 获取cookie备用
    const aa = document.cookie;
    let cookiesTotal= aa.split(";");
    let cookiesData = cookiesTotal[1].split("=");
    let cookies = cookiesData[1];
    console.log(cookies);

    let myObj = document.getElementById("ifrPage100002");

    // 存储信息备用
    let dataInput  =  myObj.contentWindow.document.querySelector("#qryCustomerInputStr");
    sessionStorage.setItem('dataInput', dataInput.value);
    let dataInput1 = sessionStorage.getItem('dataInput');
    console.log(dataInput1);


    //接口调用
    let params1 = `[${dataInput1},"accNbr",${cookies},"3c156b221d634851a79b446ad23246ec"]`;
    console.log(params1)
    let options = {
        "widgetName":"searchOffer",
        "methodName":"searchCustForFixedAccNum",
        "params":params1,
        "selector":"#searchList",
        "keyName":""
    };
    console.log(options);
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = callback1;
    xhr.open("post", "http://crm3.yn.189.cn:9500/crm/so/refreshPart",true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.send(options);

    function callback1() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            let data = xhr.responseText;//获取数据
            console(data);
            let dataCard = "";
            const card = myObj.contentWindow.document.querySelector("#certNumSuffix");
            if(card != null){
                card.value = dataCard;
                dataCard.removeAttribute('disabled');
            }
        }
    }

})();