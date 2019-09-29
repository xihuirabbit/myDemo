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
    let chooseObj = "";

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
            if( searchObj[0].getAttribute("data-type")){
                searchData = searchObj[0].getAttribute("data-type");
            }
            console.log(searchData);

            // 点击获取接口数据
            let listObj = myObj.contentWindow.document.querySelector("#resultList");
            console.log(listObj);
            if(listObj){
                let chooseObj = myObj.contentWindow.document.querySelector("#mainContent");
                console.log(chooseObj);
            }
        }
    };
    chooseObj.onclick = function () {
        setTimeout(function (){
            let answerObj = myObj.contentWindow.document.querySelector("#content1");
            console.log(answerObj)
            let answerdatas = answerObj.getElementsByTagName("span")[0].innerHTML;
            console.log(answerdatas);
            let num = answerdatas.split("");
            let answerData = `${num[num.length-4]}${num[num.length-3]}${num[num.length-2]}${num[num.length-1]}`;
            console.log(answerData);
            getData(answerData);
        }, 5000);
    }
    function getData(answerData) {
        let params1 = `[${inputdata},${searchData},${cookies},"3c156b221d634851a79b446ad23246ec"]`;
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
                //card 比对
                const card = myObj.contentWindow.document.querySelector("#certNumSuffix");
                if(card != null){
                    card.value = dataCard;
                    dataCard.removeAttribute('disabled');
                }
            }
        }
    }
})();