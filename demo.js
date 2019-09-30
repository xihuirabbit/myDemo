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
                // jumpPage();
            }
        }

        let downBty = myObj.contentWindow.document.querySelector("#multSearchType").getElementsByTagName("li");
        console.log(downBty);
        // if(downBty){
        //     downBty.onclick = function () {
        //         setTimeout(function () {
        //             jumpPage();
        //         },4000)
        //
        //     }
        // };



    },3000)
})();

