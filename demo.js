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

            // 存储搜索页
            // let pageObj = myObj.contentWindow.document.getElementsByClassName("active")[0];
            // if(pageObj){
            //     page = pageObj.innerHTML;
            // }


        })
    },3000)
})();

