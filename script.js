const students = [];

for (let i = 1; i <= 45; i++) {
  students.push({ roll: `R${i.toString().padStart(2, '0')}`, name: `Student ${i}` });
}

const tbody = document.getElementById("studentList");

students.forEach(student => {
  const row = document.createElement("tr");

  row.innerHTML = `
    <td>${student.roll}</td>
    <td>${student.name}</td>
    <td><input type="checkbox" name="present-${student.roll}"></td>
  `;

  tbody.appendChild(row);
});

document.getElementById("attendanceForm").addEventListener("submit", function(e) {
  e.preventDefault();
  let presentList = [];

  students.forEach(student => {
    const checkbox = document.querySelector(`input[name="present-${student.roll}"]`);
    if (checkbox.checked) {
      presentList.push(student.roll);
    }
  });

  localStorage.setItem("todayAttendance", JSON.stringify(presentList));
  alert("Attendance saved successfully!");
});
