player1_name = localStorage.getItem("player1_name");
player2_name = localStorage.getItem("player2_name");

player1_score = 0;
player2_score = 0;

document.getElementById("player1_name").innerHTML = player1_name + " : ";
document.getElementById("player2_name").innerHTML = player2_name + " : ";

document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;

document.getElementById("player_question").innerHTML = "Question Turn - " + player1_name;
document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2_name;

function send(){
    get_word = document.getElementById("word").value;
    word = get_word.toLowerCase();
    console.log("word in LowerCase = " + word);
    chart = word.charAt(1);
    console.log(chart);
    length.divide_2 = Math.floor(word.length/2);
    chart1 = word.charAt(length.divide_2);
    
    length.minus_1 = word.length - 1 ;
    chart2 = word.charAt(length.minus_1);

    remove_charAt1 = word.replace(chart , "_");
    remove_charAt2 = remove_charAt1.replace(chart1 , "_");
    remove_charAt3 = remove_charAt2.replace(chart2, "_")
    console.log(remove_charAt3);

    question_word = "<h4 id= 'word_display' > Q. "+remove_charAt3+ "</h4>";
    input_box = "<br> Answer: <input type='text' id='input_check_box' > ";
    check_button = "<br><br><button class='btn btn-info' onclick= 'check()'>Check</button>" ;
    row = question_word + input_box + check_button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("word").value = " " ;

}