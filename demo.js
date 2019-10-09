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

        //监听第一个滑动框的点击事件
        let firstModal = myObj.contentWindow.document.querySelector("#searchList");
        console.log(firstModal);
        firstModal.addEventListener('click', function(e) {
            console.log("bb")
        })


        document.querySelector('body').addEventListener('click', function(e) {
            console.log("aa")
        })



    },3000)
})();

