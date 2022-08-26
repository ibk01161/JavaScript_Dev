// 배열 자료형 확인하기 (isArray)
function callRoll(students) {
    if (!Array.isArray(students)) return;                   // students가 배열이 아니면 의도하지 않은 자료형이라 판단하고 함수를 빠져나감

    students.forEach((student) => {
        console.log(`Are you here, ${student}`);
    });
}

const students = ['Jun', 'Ali', 'Murry', 'Toby'];
callRoll(students);