const students = [
    { name: "An", math: 8, physics: 7, cs: 9, gender: "M" },
    { name: "Bình", math: 6, physics: 9, cs: 7, gender: "F" },
    { name: "Chi", math: 9, physics: 6, cs: 8, gender: "F" },
    { name: "Dũng", math: 5, physics: 5, cs: 6, gender: "M" },
    { name: "Em", math: 10, physics: 8, cs: 9, gender: "F" },
    { name: "Phong", math: 3, physics: 4, cs: 5, gender: "M" },
    { name: "Giang", math: 7, physics: 7, cs: 7, gender: "F" },
    { name: "Huy", math: 4, physics: 6, cs: 3, gender: "M" },
];

function getRank(avg) {
    if (avg >= 8.0) {
        return "Giỏi";
    } else if (avg >= 6.5) {
        return "Khá";
    } else if (avg >= 5.0) {
        return "Trung bình";
    } else {
        return "Yếu";
    }
}

let countExcellent = 0;
let countGood = 0;
let countAverage = 0;
let countWeak = 0;

let highestStudent = null;
let lowestStudent = null;

let totalMath = 0;
let totalPhysics = 0;
let totalCs = 0;

let totalMale = 0;
let countMale = 0;
let totalFemale = 0;
let countFemale = 0;

console.log("| STT | Tên    | TB   | Xếp loại    |");
console.log("|-----|--------|------|-------------|");

for (let i = 0; i < students.length; i++) {
    const student = students[i];

    const avg = student.math * 0.4 + student.physics * 0.3 + student.cs * 0.3;
    const rank = getRank(avg);

    student.avg = avg;
    student.rank = rank;

    console.log(`| ${i + 1}   | ${student.name.padEnd(6)} | ${avg.toFixed(1)}  | ${rank.padEnd(11)} |`);

    if (rank === "Giỏi") {
        countExcellent++;
    } else if (rank === "Khá") {
        countGood++;
    } else if (rank === "Trung bình") {
        countAverage++;
    } else {
        countWeak++;
    }

    if (highestStudent === null || avg > highestStudent.avg) {
        highestStudent = student;
    }

    if (lowestStudent === null || avg < lowestStudent.avg) {
        lowestStudent = student;
    }

    totalMath += student.math;
    totalPhysics += student.physics;
    totalCs += student.cs;

    if (student.gender === "M") {
        totalMale += avg;
        countMale++;
    } else if (student.gender === "F") {
        totalFemale += avg;
        countFemale++;
    }
}

console.log("\n===== THỐNG KÊ XẾP LOẠI =====");
console.log("Giỏi:", countExcellent);
console.log("Khá:", countGood);
console.log("Trung bình:", countAverage);
console.log("Yếu:", countWeak);

console.log("\n===== CAO NHẤT / THẤP NHẤT =====");
console.log(`Cao nhất: ${highestStudent.name} - ${highestStudent.avg.toFixed(1)}`);
console.log(`Thấp nhất: ${lowestStudent.name} - ${lowestStudent.avg.toFixed(1)}`);

console.log("\n===== ĐIỂM TB TOÀN LỚP THEO MÔN =====");
console.log("Toán:", (totalMath / students.length).toFixed(1));
console.log("Lý:", (totalPhysics / students.length).toFixed(1));
console.log("Tin:", (totalCs / students.length).toFixed(1));

console.log("\n===== BONUS: ĐIỂM TB THEO GIỚI TÍNH =====");
console.log("Nam:", (totalMale / countMale).toFixed(1));
console.log("Nữ:", (totalFemale / countFemale).toFixed(1));