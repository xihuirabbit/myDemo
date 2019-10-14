(function () {
    let myObj = "";
    let cookies = "";
    let time = "";
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
                console.log(firstModal)
            }else{
                console.log("nbb");
                getfirstModal ();
            }
        },100)
    }

})();


