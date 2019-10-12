(function () {
    //cookies备用
    const aa = document.cookie;
    let cookiesTotal= aa.split(";");
    let cookiesData = cookiesTotal[1].split("=");
    let cookies = cookiesData[1];
    console.log(cookies);

    getIframe();
    function getIframe() {
        let myObj = document.getElementById("ifrPage100002");
        if(myObj){
            console.log(myObj);
            // getfirstModal ();
        }else{
            getIframe ();
        }
    };

})();

// function getfirstModal(){
//     let firstModal = document.getElementById("ifrPage100002").contentWindow.document.querySelector("#searchList");
//     if(firstModal){
//         console.log(firstModal)
//     }else{
//         getfirstModal ();
//     }
// }

