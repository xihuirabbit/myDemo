(function () {
    setTimeout(function () {
        alert("加载完成，请继续.....")
        let myObj = document.getElementById("ifrPage100002");
        console.log(myObj);

        //cookies备用
        const aa = document.cookie;
        let cookiesTotal= aa.split(";");
        let cookiesData = cookiesTotal[1].split("=");
        let cookies = cookiesData[1];
        console.log(cookies)

        // 变量
        let inputdata = "";
        let searchData = "accNbr";
        let listObj = "";
        let page = "";
        let answerData = "";
        let pageLength = "";

        //监听第一个滑动框的点击事件
        let firstModal = myObj.contentWindow.document.querySelector("#searchList");
        console.log(firstModal);
        firstModal.addEventListener('click', function(e) {
            // input 输入框；
            let inputObj = myObj.contentWindow.document.querySelector("#qryCustomerInputStr");
            console.log(inputObj)
            inputdata = inputObj.value;
            console.log(inputdata)

            // 类型
            let downBty = myObj.contentWindow.document.querySelector("#multSearchType");
            console.log(downBty);
            let searchObj = downBty.getElementsByTagName("span");
            console.log(searchObj)
            if( searchObj[0].getAttribute("data-type")){
                searchData = searchObj[0].getAttribute("data-type");
            }
            console.log(searchData)

            //存储搜索页
            pageLength = myObj.contentWindow.document.querySelector("#showPageInfo").getElementsByTagName("a");
            console.log(pageLength.length);
            let pageObj = myObj.contentWindow.document.getElementsByClassName("active")[0];
            if(pageObj){
                page = pageObj.innerHTML;
            }
            console.log(page);

            setTimeout(function () {
                let answerObj = myObj.contentWindow.document.querySelector("#content1");
                console.log(answerObj);
                if(answerObj){
                    let answerdatas = answerObj.getElementsByTagName("span")[0].innerHTML;
                    let num = answerdatas.split("");
                    answerData = `${num[num.length-4]}${num[num.length-3]}${num[num.length-2]}${num[num.length-1]}`;
                    getData();
                }
            },300);
        });
        function getData() {
            let params1 = "";
            let methodName = "";
            let selector = "";
            if(pageLength.length-3>1){
                params1 = `["${inputdata}","${searchData}","${cookies}","${page}","10","3a9573c6a65d4cb99aa039bb57b7725a"]`;
                methodName = "searchCustOnly";
                selector = "#resultList"
            }else{
                params1 = `["${inputdata}","${searchData}","${cookies}","3c156b221d634851a79b446ad23246ec"]`;
                methodName = "searchCustForFixedAccNum";
                selector = "#searchList"
            }
            const xhr = new XMLHttpRequest();
            xhr.onreadystatechange = callback1;
            xhr.open("post", "http://crm3.yn.189.cn:9500/crm/so/refreshPart",true);
            xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            if(pageLength.length-3 >1){
                xhr.send("widgetName="+"searchOffer"+"&methodName="+methodName+"&params="+params1+"&selector="+selector);
            }else{
                xhr.send("widgetName="+"searchOffer"+"&methodName="+methodName+"&params="+params1+"&selector="+selector+"&keyName="+"");
            }

            function callback1() {
                if (xhr.readyState == 4 && xhr.status == 200) {
                    let data = xhr.responseText;
                    let cardList1 = JSON.stringify(data).split("\\");
                    let cardList2 = [];
                    for(let i in cardList1){
                        if(cardList1[i].replace('"', '').includes(answerData.toString())){
                            cardList2.push(cardList1[i].replace('"', ''));
                        }
                    }
                    let dataCard = cardList2[1].substring(cardList2[1].length-6);
                    let card = myObj.contentWindow.document.querySelector("#certNumSuffix");
                    if(card != null){
                        card.value = dataCard;
                        card.removeAttribute('disabled');
                    }
                }
            }
        };


    },3000)
})();

