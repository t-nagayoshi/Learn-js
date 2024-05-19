// DOMContentLoadedイベントを待機し、DOMが完全に読み込まれたら実行
document.addEventListener('DOMContentLoaded', function() {
  // 各タブの要素を取得
  const tabs = document.querySelectorAll('.tabs div');
  // 表示列制御用の要素を取得
  const table = document.getElementById('dataTable');

  // 各タブにクリックイベントリスナーを追加
  tabs.forEach(tab => {
    tab.addEventListener('click', function() {
      // すべてのタブからactiveクラスを削除
      tabs.forEach(t => t.classList.remove('active'));
      
      // クリックされたタブにactiveクラスを追加
      this.classList.add('active');
      
      // テーブルのクラスをリセットし、クリックされたタブのIDに対応するクラスを追加
      table.className = '';
      table.classList.add(this.id);
    });
  });
});
