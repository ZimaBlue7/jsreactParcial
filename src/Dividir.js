export const funcionDivision = (a) => {
    
    const elements = [];
    for (let index = 0; index < a; index++) {
        
        if(index % 2 == 0){
         // es divisible no entra
        }else{
            if(index % 3 == 0){
                //es divisible por 3
            }else{
                elements.push(index);
            }
        }
        
    }
    console.log(elements)
    return 0;
}