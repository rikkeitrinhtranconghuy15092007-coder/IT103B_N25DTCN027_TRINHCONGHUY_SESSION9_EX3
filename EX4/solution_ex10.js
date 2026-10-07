console.log("--- HỆ THỐNG PMS: MINH HỌA TRUY XUẤT ĐỐI TƯỢNG ---");

const roomProfile = {
    roomId: "R-8891",
    guestName: "Trần Minh Quang",
    "check-in-time": "14:00", 
    "1stDaySurcharge": 300000 

console.log("\n1. Truy cập qua biến động:");
const searchField = "guestName";

console.log("Sai (Dot Notation): roomProfile.searchField ->", roomProfile.searchField); 

console.log("Đúng (Bracket Notation): roomProfile[searchField] ->", roomProfile[searchField]); 


console.log("\n2. Tên key có ký tự đặc biệt:");


console.log("Bắt buộc Bracket (Dấu gạch ngang):", roomProfile["check-in-time"]);
console.log("Bắt buộc Bracket (Bắt đầu bằng số):", roomProfile["1stDaySurcharge"]);


console.log("\n3. Duyệt thuộc tính qua for...in:");
for (const key in roomProfile) {
    console.log(`- Thuộc tính [${key}]: ${roomProfile[key]}`);
}