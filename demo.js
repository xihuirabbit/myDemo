(function () {
    let myObj = "";
    let cookies = "";
    let time = "";
    // 变量
    let inputdata = "";
    let searchData = "accNbr";
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
            let cookiesData = cookiesTotal[1].split("=");
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
                // getData();

                let nextReadObj = myObj.contentWindow.document.querySelector("#readCertBtn");
                console.log(nextReadObj)
                nextReadObj.addEventListener('click', function(e) {
                    console.log("bbb");
                    // secondModal ();
                });


            }else{
                getSecondModal();
            }
        },150)
    }

})();


