function sendQuestion() {
    number1 = document.getElementById("number1_input").value;
    number2 = document.getElementById("number2_input").value;
    actual_answer = parseInt(number1) * parseInt(number2);

    question = "<h4>" + number1 + " X " + number2 + "</h4>";
    input_box = "<br>Answer : <input type='text' id='answer_box' class='form-control' placeholder='Write Answer Here'>";
    check_button = "<br><br> <button class='btn btn-info' id='answer_check' onclick='check()'> Check </button>";
    row = question + input_box + check_button;

    document.getElementById("output").innerHTML = row;
    document.getElementById("number1_input").value = "";
    document.getElementById("number2_input").value = "";
}