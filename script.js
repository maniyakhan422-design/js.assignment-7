document.getElementById("calculateBtn").addEventListener("click", function() {

    let name = document.getElementById("studentName").value;
    let roll = document.getElementById("rollNumber").value;

    let english = Number(document.getElementById("english").value);
    let math = Number(document.getElementById("math").value);
    let computer = Number(document.getElementById("computer").value);
    let physics = Number(document.getElementById("physics").value);
    let chemistry = Number(document.getElementById("chemistry").value);

    if (
    english > 25 || english < 0 ||
    math > 25 || math < 0 ||
    computer > 25 || computer < 0 ||
    physics > 25 || physics < 0 ||
    chemistry > 25 || chemistry < 0
) {
    alert("Please enter marks between 0 and 25.");
    return;
}
    
    
    let total = english + math + computer + physics + chemistry;

     let highest = Math.max(english, math, computer, physics, chemistry);
    let lowest = Math.min(english, math, computer, physics, chemistry);

    let percentage = (total / 125) * 100;

    let grade;
    if (percentage >= 80) {
        grade = "A";
    } else if (percentage >= 60) {
        grade = "B";
    } else if (percentage >= 40) {
        grade = "C";
    } else {
        grade = "Fail";
    }

     let status;

    if (english >= 10 && math >= 10 && computer >= 10 && physics >= 10 && chemistry >= 10) {
        status = "Pass";
    }
    else {
        status = "Fail";
    }

 document.getElementById("resultName").innerText = name;
    document.getElementById("resultRoll").innerText = roll;
    document.getElementById("totalMarks").innerText = total;
    document.getElementById("percentage").innerText = percentage + "%";
    document.getElementById("grade").innerText = grade;
    document.getElementById("highestMarks").innerText = highest;
    document.getElementById("lowestMarks").innerText = lowest;
    document.getElementById("status").innerText = status;

    document.getElementById("resultSection").style.display = "block";

});