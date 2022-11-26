const { randomInt } = require("crypto");
const { stringify } = require("querystring");

var dir,inputType;
var vmin , vmax , emin, emax, wmin, wmax;
var resultTextArea;

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //최댓값은 제외, 최솟값은 포함
}

function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
}
function get_combeIndex_to_pair(combiIndex, V){

    if (combiIndex == 0){
        return [0,V-1]
    }
    for(var f = 0 ; f < V - 1 ; f ++){
        curNum = V - f - 1
        result = null;
        if (combiIndex >curNum ){
            combiIndex -= curNum
        }
        else{
            for (var s = f + 1 ; s < V  ; s ++){
                combiIndex -= 1
                if (combiIndex == 0){
                    result = [f,s]
                    return result
                }

            }
            break
        }
    }

    
    return [-1,-1]
}

function get_permuIndex_to_pair(permuIndex, V){


    console.log(permuIndex)
    for (var f = 0 ; f < V ; f++){

        if (permuIndex > (V - 1)){
            permuIndex -= (V - 1)
        }

        for (var s = 0 ; s < V ; s++){
            if (s != f){

                if (permuIndex == 0){
                    return [f,s]
                }
                else{
                    ;
                }
                permuIndex -= 1

            }
            else{
                ;
            }
        }
    }

    return [-1,-1]

}

function init_value(){
    var ds = document.getElementById("graph_type");
    var it = document.getElementById("input_type");

    dir = ds.options[ds.selectedIndex].value;
    inputType = it.options[it.selectedIndex].value;
    vmin = document.getElementById('vMin').value
    vmax = document.getElementById('vMax').value
    emin = document.getElementById('eMin').value
    emax = document.getElementById('eMax').value
    wmin = document.getElementById('wMin').value
    wmax = document.getElementById('wMax').value
    resultTextArea = document.getElementById('result')
    
    if (vmin > vmax){
        vmin = 1
        vmax = 100
    }
    if (emin > emax){
        emin = 1
        emax = 100
    }
    if (wmin > wmax){
        wmin = 1
        wmax = 100
    }
}

function getEdgeInfo(V,E){
    var result ;
    var VNum = Number(V)
    var ENum = Number(E)
    var PNum = (VNum *(VNum - 1) ) 
    var CNum = PNum / 2
    var S = getRandomInt(0,VNum - 1)
    let checkList = []
    var VE = V + ' ' + E + '\n' , VES = V + ' ' + E + ' '+S;

    console.log(inputType)

    if (dir == 'u'){
        if (ENum > CNum ){
            E = String(CNum)
        }

        for(var i = 0 ; i < CNum; i++){
            checkList[i] = i
        }
        shuffle(checkList)
        console.log(checkList)
        //alert(checkList)
        if (inputType == '01' || inputType == '0pn')
            result = V + ' ' + E + '\n' ;
        else{
            S = getRandomInt(0,VNum)
            result = V + ' ' + E + ' ' + S +'\n' ;
        }
        

        for(var i = 0 ; i < Number(E);i++){
            sd = get_combeIndex_to_pair(checkList[i] , VNum)

            if(inputType == '01' || inputType == '01s')
                result = result + String(sd[0]) + ' ' + String(sd[1]) + '\n'
            else{
                W = String(getRandomInt(Number(wmin), Number(wmax)))
                result = result + String(sd[0]) + ' ' + String(sd[1]) +' ' + W +'\n'
            }

            
        }
    }
    else{ // dir == 'd'
        if (ENum > PNum ){
            E = String(PNum)
        }

        for(var i = 0 ; i < PNum; i++){
            checkList[i] = i
        }
        shuffle(checkList)
        console.log(checkList)
        //alert(checkList)
        if (inputType == '01' || inputType == '0pn')
            result = V + ' ' + E + '\n' ;
        else{
            S = getRandomInt(0,VNum)
            result = V + ' ' + E + ' ' + S +'\n' ;
        }
        
        for(var i = 0 ; i < Number(E);i++){
            sd = get_permuIndex_to_pair(checkList[i] , VNum)

            if(inputType == '01' || inputType == '01s')
                result = result + String(sd[0]) + ' ' + String(sd[1]) + '\n'
            else{
                W = String(getRandomInt(Number(wmin), Number(wmax)))
                result = result + String(sd[0]) + ' ' + String(sd[1]) +' ' + W +'\n'
            }            
        }
    }



    console.log(result)
    console.log("CNum : ",CNum)
    return result
}

function generate_Graph(){
    init_value()
    let V = getRandomInt(vmin,vmax), E = getRandomInt(emin,emax)
    let S = null;
    let result = getEdgeInfo(V,E)
    resultTextArea.value = result

}

function copy_result(){
    var copyText = document.getElementById("result");
    copyText.select();
    document.execCommand("Copy");
    console.log('Copied!');

}
