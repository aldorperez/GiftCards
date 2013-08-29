// JavaScript Document

function numbersOnly(event){    

    //console.log("Key:"  + event.keyCode);

    if( !(event.keyCode == 8                                // backspace
        || event.keyCode == 46                              // delete
        || event.keyCode == 109                             // - or -
		|| event.keyCode == 189                             // - or -
        || event.keyCode == 9                               // tab<br>
        || event.keyCode == 32                              // tab
        || (event.keyCode >= 35 && event.keyCode <= 40)     // arrow keys/home/end
        || (event.keyCode >= 48 && event.keyCode <= 57)     // numbers on keyboard
        || (event.keyCode >= 96 && event.keyCode <= 105))   // number on keypad
        ) {
            event.preventDefault();     // Prevent character input
    }
}

