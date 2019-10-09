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


        // 新增按钮层
        let btyDiv = document.createElement("div");
        btyDiv.innerHTML = "aa";
        myObj.appendChild(btyDiv);
    },3000)
})();

