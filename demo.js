(function () {
    setTimeout(function () {
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
        let page = "";
        let answerData = ""

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
                        alert("劝告该系统开发人员一句，别再坑爹了，转行吧！！！！");
                    }
                    listObj.addEventListener("click", function(e){
                        // e.stopPropagation();
                        alert("Hello World!");
                        setTimeout(function (){
                            // 存储搜索页
                            let pageObj = myObj.contentWindow.document.getElementsByClassName("active")[0];
                            console.log(pageObj);
                            if(pageObj){
                                page = pageObj.innerHTML;
                                console.log(page)
                            }

                            let answerObj = myObj.contentWindow.document.querySelector("#content1");
                            console.log(answerObj)
                            let answerdatas = answerObj.getElementsByTagName("span")[0].innerHTML;
                            console.log(answerdatas);
                            let num = answerdatas.split("");
                             answerData = `${num[num.length-4]}${num[num.length-3]}${num[num.length-2]}${num[num.length-1]}`;
                            console.log(answerData);
                            getData(answerData);
                        }, 3000);
                    });
                },2000)


            }
        };
        function getData() {
            let params1 = "";
            let methodName = "";
            if(page >1){
                params1 = `["${inputdata}","${searchData}","${cookies}","${page}"，"10""3c156b221d634851a79b446ad23246ec"]`;
                methodName = "searchCustOnly";
            }else{
                params1 = `["${inputdata}","${searchData}","${cookies}","3c156b221d634851a79b446ad23246ec"]`;
                methodName = "searchCustForFixedAccNum";
            }

            console.log(params1)
            const xhr = new XMLHttpRequest();
            xhr.onreadystatechange = callback1;
            xhr.open("post", "http://crm3.yn.189.cn:9500/crm/so/refreshPart",true);
            xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            xhr.send("widgetName="+"searchOffer"+"&methodName="+methodName+"&params="+params1+"&selector="+"#searchList"+"&keyName="+"");

            function callback1() {
                console.log("aa")
                if (xhr.readyState == 4 && xhr.status == 200) {
                    let data = xhr.responseText;//获取数据
                    console.log(JSON.stringify(data));
                    let cardList1 = JSON.stringify(data).split("\\");
                    console.log(cardList1)
                    let cardList2 = [];
                    for(let i in cardList1){
                        console.log(cardList1[i].replace('"', ''));
                        console.log(answerData);
                        if(cardList1[i].includes(answerData)){
                            cardList2.push[cardList1[i]];
                        }
                    }
                    console.log(cardList2)
                    let dataCard = ""
                    let card = myObj.contentWindow.document.querySelector("#certNumSuffix");
                    console.log(card);
                    if(card != null){
                        card.value = dataCard;
                        card.removeAttribute('disabled');
                    }
                }
            }
        }
    },3000)
})();

