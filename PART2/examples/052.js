// Chart 클래스 정의
class Chart {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    drawLine() {
        console.log('draw line');
    }
}

// Chart 클래스를 상속하는 BarChart 클래스를 정의, 클래스 상속은 extends 키워드를 사용
// 상속을 하게 되면 생성자 함수에서 상속한 부모 클래스의 생성자를 호출해야 하는데 이때 'super' 키워드를 사용 => super가 부모 생성자 함수를 가리킴
class BarChart extends Chart {
    constructor(width, height) {
        super(width, height);
    }

    // 상속을 했기 때문에 부모 클래스에 정의된 메소드를 사용할 수 있음
    draw() {
        this.drawLine();
        console.log(`draw ${this.width} X ${this.height} barChart`);
    }
}

// * BarChart 클래스의 인스턴스를 만들고 draw 객체 호출
// 1. 부모 클래스인 차트 클래스의 생성자 함수가 호출되어 width와 height 속성에 주어진 값이 할당
// 2. 부모 클래스에 정의된 drawLine 메소드 호출
const barchart1 = new BarChart(100, 100);
barchart1.draw();