const prompt = require('prompt-sync') ();

let arr = [
    [],[],[],[],[],[],[],[],[],[]
];

function fillTheArray(arr){
    for (let i = 0; i < 10; i++){
        process.stdout.write("\n");
        for (let j = 0; j < 10; j++){  
            arr[i][j] ="* ";
            
            process.stdout.write(arr[i][j]);
        }
    }
}



function loopCheck(){
    let coun = 0;
        for (let i = 0; i < 10; i++){
            process.stdout.write("\n");
            for (let j = 0; j < 10; j++){  
                if (arr[i][j] == "# "){
                    coun++;                   
                }
                process.stdout.write(arr[i][j]);
            }
        }
        if(coun == 0){
            return true;
        }
        else{return false;}
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

function getFourDeckShip(layout, corY, corX){
        
        let ind = -1;
        while(ind < 0){
            process.stdout.write("\n   1 2 3 4 5 6 7 8 9 10");
        if (layout == "horizontal"){
            corY = getRandomInt(1,7);
            corX = getRandomInt(1,11);
        }
        else{
            corY = getRandomInt(1,11);
            corX = getRandomInt(1,7);
        }
            for (let i = 0; i < 10; i++){
                process.stdout.write("\n")
                if (i == 9){
                    process.stdout.write(String(i+1) + " ");
                }
                else{process.stdout.write(String(i+1) + "  ");}
                for (let j = 0; j < 10; j++){
                        if(arr[i][j] != "# "){
                        if (layout == "horizontal"){
                            arr[corY-1][corX-1] = "# ";
                            arr[corY-1][corX] = "# ";
                            arr[corY-1][corX+1] = "# ";
                            arr[corY-1][corX+2] = "# ";
                            layout + 10;
                            ind = ind + 2;
                        }
                        if (layout == "vertical"){
                            arr[corY-1][corX-1] = "# ";
                            arr[corY][corX-1] = "# ";
                            arr[corY+1][corX-1] = "# ";
                            arr[corY+2][corX-1] = "# ";
                            layout + 10;
                            ind = ind + 2;
                        }
                        }
                        process.stdout.write(arr[i][j]);
                    
                }
            }
        }
    }




let q = prompt('Your ship size is 4 decks, choose whether it is horizontal or vertical:');
        let layout = String(q).trim();
  // сначала чило по горизонтали а потом по вертикали
  // корд У - горизонталь, Х - вертикаль
        let corX = 0;
        let corY = 0;
        fillTheArray(arr);
        getFourDeckShip(layout, corY, corX);
        let p = 0;
        while(true){
        p++;
        process.stdout.write("\n");
        let corXuser = prompt('Where to shoot (X cordinate from 1 to 10)?: ');
        process.stdout.write("\n");
        let corYuser = prompt('Where to shoot (Y cordinate from 1 to 10)?: ');
        process.stdout.write("\n");
        corXuser = Number(corXuser);
        corYuser = Number(corYuser);
        process.stdout.write("\n   1 2 3 4 5 6 7 8 9 10");
        let kk = 0;
        for (let i = 0; i < 10; i++){
            process.stdout.write("\n")
            if (i == 9){
                process.stdout.write(String(i+1) + " ");
            }
            else{process.stdout.write(String(i+1) + "  ");}
            for (let j = 0; j < 10; j++){  
                if (arr[corYuser-1][corXuser-1] == "# "){
                    arr[corYuser-1][corXuser-1] = "0 ";
                    kk++;
                }
                process.stdout.write(arr[i][j]);
            }
        }
        
        if (kk == 0){
            process.stdout.write("\nYou missed! Try again.");
        }
        else{process.stdout.write("\nYou hit the ship!");}
        let over = loopCheck();
        if (over == true){
            process.stdout.write("\n\nYou won!!! You needed " + String(p) + " shots to win.");
            process.exit();
        }
        }