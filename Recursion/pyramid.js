/** 
    if n=4 you want:
    #
    ##
    ###
    ####
 */

function pyramid(n){

    if(n <= 0 ) return;

    // if(n == 1){
    //     return "#"
    // }

    pyramid(n-1)

    for(let i = 0; i < n; i++){
        process.stdout.write("#")
        
    }
    console.log("")

    // return 
}

(pyramid(4))