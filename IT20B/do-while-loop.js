/*
//Asc
i = 1;

do {
    console.log(i);
    i++;
}while (i<=5);
*/

/*
// Desc 
i = 5;

do {
    console.log(i);
    i++;
}while (i>=1);
*/

arr1 = [4,2,3];
function arrDoWhile(arr){
    i = 0;
    do{
        output += arr[i] + "";
        i++;
    }while(i< arr.length)
        console.log(output);
}
arrDoWhile(arr1);