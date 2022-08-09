// 기본 매개변수
function drawChart(width = 200, height = 400) {
    console.log(`${width} X ${height}  차트를 그림`);
}

drawChart(100);
drawChart();

function drawChart2(width = 200, height = width / 2) {
    console.log(`${width} X ${height}  차트를 그림`);
}

drawChart2(300);
drawChart2();