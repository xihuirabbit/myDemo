(function () {
    let myObj = "";
    let cookies = "";
    let time = "";
    // 变量
    let inputdata = "";
    let searchData = "";
    let listObj = "";
    let page = "";
    let answerData = "";
    let pageLength = "";
    getIframe();
    function getIframe() {
       myObj = document.getElementById("ifrPage100002");
        if(myObj){
            console.log(myObj);
            //cookies备用
            const aa = document.cookie;
            let cookiesTotal= aa.split(";");
            let cookiesData = "";
            cookiesTotal.map((item)=>{
                if(item.includes("ALID")){
                    cookiesData = item.split("=");
                }
            })
            cookies = cookiesData[1];
            console.log(cookies);
            getfirstModal ();
        }else{
            getIframe ();
        }
    }

    function getfirstModal() {
        setTimeout(function () {
            let firstModal = myObj.contentWindow.document.querySelector("#searchList");
            if(firstModal){
                console.log(firstModal);
                firstModal.addEventListener('click', function(e) {
                    // input 输入框；
                    let inputObj = myObj.contentWindow.document.querySelector("#qryCustomerInputStr");
                    console.log(inputObj)
                    inputdata = inputObj.value;
                    console.log(inputdata);


                    // 类型
                    let reg = /^((0\d{2,3}-\d{7,8})|(1[34578]\d{9}))$/;
                    if ( !reg.test(inputdata)){
                        let downBty = myObj.contentWindow.document.querySelector("#multSearchType");
                        console.log(downBty);
                        let searchObj = downBty.getElementsByTagName("span");
                        console.log(searchObj)
                        if( searchObj[0].getAttribute("data-type")){
                            searchData = searchObj[0].getAttribute("data-type");
                        }
                    }else{
                        searchData = "accNbr"
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

                    getSecondModal();
                })
            }else{
                getfirstModal ();
            }
        },100)
    };

    function getSecondModal() {
        setTimeout(function () {
            let answerObj = myObj.contentWindow.document.querySelector("#content1");
            if(answerObj){
                console.log(answerObj);
                let answerdatas = answerObj.getElementsByTagName("span")[0].innerHTML;
                let num = answerdatas.split("");
                answerData = `${num[num.length-4]}${num[num.length-3]}${num[num.length-2]}${num[num.length-1]}`;
                getData();

                let nextReadObj = myObj.contentWindow.document.querySelector("#readCertBtn");
                console.log(nextReadObj)
                nextReadObj.addEventListener('click', function(e) {
                    console.log("bbb");
                    getThirdModal();
                });


            }else{
                getSecondModal();
            }
        },150)
    };

    function getData() {
        let params1 = "";
        let methodName = "";
        let selector = "";
        if(searchData !== "accNbr"){
            params1 = `["${inputdata}","${searchData}","${cookies}","${page}","10","edabd778c21f40c3a5ffd94db36ed208"]`;
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
        if(searchData !== "accNbr"){
            xhr.send("widgetName="+"searchOffer"+"&methodName="+methodName+"&params="+params1+"&selector="+selector);
        }else{
            xhr.send("widgetName="+"searchOffer"+"&methodName="+methodName+"&params="+params1+"&selector="+selector+"&keyName="+"");
        }

        function callback1() {
            if (xhr.readyState == 4 && xhr.status == 200) {
                let data = xhr.responseText;
                console.log(data);
                console.log(JSON.parse( JSON.stringify(data)));
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

    function getThirdModal() {
        setTimeout(function () {
            let readBty = myObj.contentWindow.document.querySelector("#scanCert");
            let nameInput = myObj.contentWindow.document.querySelector("#Name");
            nameInput.removeAttribute('readonly');
            let cardNoInput = myObj.contentWindow.document.querySelector("#CardNo");
            cardNoInput.removeAttribute('readonly');
            let sexInput = myObj.contentWindow.document.querySelector("#Sex");
            sexInput.removeAttribute('readonly');
            let nationInput = myObj.contentWindow.document.querySelector("#Nation");
            nationInput.removeAttribute('readonly');
            let bonInput = myObj.contentWindow.document.querySelector("#Born");
            bonInput.removeAttribute('readonly');
            let addressInput = myObj.contentWindow.document.querySelector("#Address");
            addressInput.removeAttribute('readonly');
            let policeInput = myObj.contentWindow.document.querySelector("#Police");
            policeInput.removeAttribute('readonly');
            let activityLFromInput = myObj.contentWindow.document.querySelector("#ActivityLFrom");
            activityLFromInput.removeAttribute('readonly');
            let activityLToInput = myObj.contentWindow.document.querySelector("#ActivityLTo");
            activityLToInput.removeAttribute('readonly');
            let imgObj = myObj.contentWindow.document.querySelector("#IdPhoto");
            console.log(imgObj);
            imgObj.onclick = function () {

            };
            if(readBty){

            }else{
                getThirdModal ();
            }
        },150)
    }

})();


