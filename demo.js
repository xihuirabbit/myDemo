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
    let listObj = "";

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
            setTimeout(function () {
                let listObj = myObj.contentWindow.document.querySelector("#resultList");
                console.log(listObj);
                if(listObj){
                    alert("点击确定下一步");
                }
                listObj.addEventListener("click", function(e){
                    // e.stopPropagation();
                    alert("Hello World!");
                    setTimeout(function (){
                        let answerObj = myObj.contentWindow.document.querySelector("#content1");
                        console.log(answerObj)
                        let answerdatas = answerObj.getElementsByTagName("span")[0].innerHTML;
                        console.log(answerdatas);
                        let num = answerdatas.split("");
                        let answerData = `${num[num.length-4]}${num[num.length-3]}${num[num.length-2]}${num[num.length-1]}`;
                        console.log(answerData);
                        getData(answerData);
                    }, 3000);
                });
            },2000)


        }
    };
    function getData(answerData) {
        let params1 = `["${inputdata}","${searchData}","${cookies}","3c156b221d634851a79b446ad23246ec"]`;
        console.log(params1)
        const xhr = new XMLHttpRequest();
        xhr.onreadystatechange = callback1;
        xhr.open("post", "http://crm3.yn.189.cn:9500/crm/so/refreshPart",true);
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr.send("widgetName="+"searchOffer"+"&methodName="+"searchCustForFixedAccNum"+"&params="+params1+"&selector="+"#searchList"+"&keyName="+"");

        function callback1() {
            if (xhr.readyState == 4 && xhr.status == 200) {
                let data = xhr.responseText;//获取数据
                console.log(data);
                let cardList = data.split(answerData);
                console.log(data.split(cardList));
                let dataCard =  `${cardList[0].substring(str.length-2)${answerData}}`;
               let card = myObj.contentWindow.document.querySelector("#certNumSuffix");
               console.log(card);
                if(card != null){
                    card.value = dataCard;
                    card.removeAttribute('disabled');
                }
            }
        }
    }
})();