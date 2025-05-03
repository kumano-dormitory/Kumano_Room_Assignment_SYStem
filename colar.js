document.addEventListener('DOMContentLoaded', () => {
    const inputs = document.querySelectorAll('input[type="text"]');
    const colorMap = {};
    const colorPalette = [
        "#f8d7da", "#d4edda", "#d1ecf1", "#fff3cd", "#e2e3e5",
        "#f5c6cb", "#c3e6cb", "#bee5eb", "#ffeeba", "#d6d8db"
    ];

    function assignColors() {
        const valueMap = {};
        const colorMap = {};  // ← 毎回初期化する
        const colorPalette = [
            "#f8d7da", "#d4edda", "#d1ecf1", "#fff3cd", "#e2e3e5",
            "#f5c6cb", "#c3e6cb", "#bee5eb", "#ffeeba", "#d6d8db"
        ];
    
        // 値を集計
        inputs.forEach(input => {
            const val = input.value.trim();
            if (val !== "") {
                if (!valueMap[val]) valueMap[val] = [];
                valueMap[val].push(input);
            }
        });
    
        // 背景色をリセット
        inputs.forEach(input => {
            input.style.backgroundColor = "";
        });
    
        let colorIndex = 0;
        for (const val in valueMap) {
            if (valueMap[val].length > 1) {
                if (!colorMap[val]) {
                    colorMap[val] = colorPalette[colorIndex % colorPalette.length];
                    colorIndex++;
                }
                valueMap[val].forEach(input => {
                    input.style.backgroundColor = colorMap[val];
                });
            }
        }
    }
    
    // 入力のたびに更新
    inputs.forEach(input => {
        input.addEventListener('input', assignColors);
    });
});