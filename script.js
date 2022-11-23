function changeColor() {
    let hex_nubmer = ["0", "1", "2", "3", "4", "5" ,"6", "7", 
"8", "9", "A" ,"B", "c", "D", "E", "F"];  

    let hexnum = "";

    for(i=0; i < 6; i++) {
        let random_index = Math.floor(Math.random() * 
        hex_nubmer.length)

        hexnum += hex_nubmer[random_index];
    }

    document.getElementById("hex-code").innerHTML = hexnum;
    document.getElementsByTagName("body")[0].style.background
     = "#" + hexnum; 

}