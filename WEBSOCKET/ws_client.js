window.onload = () => {
    // WebSocket の接続を作成
    const socket = new WebSocket("ws://localhost:9001");

    // 日付を更新する関数
    function updateDate() {
        const now = new Date();
        return now.toLocaleString();
    }

    // ログを追加する関数
    function addLog(action, message) {
        const logElement = document.getElementById("log");
        const logItem = document.createElement("div");
        logItem.textContent = `${updateDate()} - ${action}: ${message}`;
        // logコンテナーの末尾に要素を追加する
        logElement.appendChild(logItem);
    }

    // 接続が開かれた場合の処理
    socket.addEventListener("open", (event) => {
        addLog("Connection opened", "");
    });

    // メッセージを受信した場合の処理
    socket.addEventListener("message", (event) => {
        addLog("Received", event.data);
    });

    // 発生しうるエラーを待ち受けする
    socket.addEventListener("error", (event) => {
        console.error("WebSocket error: ", event);
    });

    // 接続が閉じられた場合の処理
    socket.addEventListener("close", (event) => {
        addLog("Connection closed", "");
    });

    // 送信ボタンのクリックイベントリスナー
    document.getElementById("sendButton").addEventListener("click", () => {
        const messageInput = document.getElementById("messageInput");
        const message = messageInput.value;
        socket.send(message);
        addLog("Sent", message);
        messageInput.value = ""; // 送信後、入力欄をクリアする
    });

    // コネクション解除ボタンのクリックイベントリスナー
    document.getElementById("disconnectButton").addEventListener("click", () => {
        socket.close();
    });
};



