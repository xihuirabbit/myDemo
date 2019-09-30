(function () {
    setTimeout(function () {
        alert("加载完成，请继续.....")
        let myObj = document.getElementById("ifrPage100002");

        let inputdata = "";
        let searchData = "accNbr";
        let listObj = "";
        let page = "";
        let answerData = "";

        //cookies备用
        const aa = document.cookie;
        let cookiesTotal= aa.split(";");
        let cookiesData = cookiesTotal[1].split("=");
        let cookies = cookiesData[1];
        console.log(cookies)

        // input备用
        let inputObj = myObj.contentWindow.document.querySelector("#qryCustomerInputStr");
        inputObj.onchange = function () {
            inputdata = inputObj.value;
            console.log(inputdata)
        }

        let seacchBty = myObj.contentWindow.document.getElementsByClassName("yn-search-ico")[0];
        if(seacchBty) {
            seacchBty.onclick = function () {
                setTimeout(function () {
                    jumpPage();
                },500)
            }
        }

        let downBty = myObj.contentWindow.document.querySelector("#multSearchType").getElementsByTagName("ul");
        console.log(downBty);
        downBty[0].getElementsByTagName("li").onclick = function() {
            let searchObj = myObj.contentWindow.document.querySelector("#multSearchType").getElementsByTagName("span");
            if( searchObj[0].getAttribute("data-type")){
                searchData = searchObj[0].getAttribute("data-type");
            }
            console.log(searchData)
            setTimeout(function () {
                jumpPage();
            },500)
        };
        
       function jumpPage() {
           
       }



    },3000)
})();

