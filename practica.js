let array = [10,9,8,7,6,5,4,3,2,1];
let auxiliar;


for (let i = 0; i<array.length-1; i++)
    {
         menor = undefined;
        for (let j = i; j<array.length; j++)
        {
            if (menor === undefined || array[j]<array[menor]  )
            {
                menor = j ;
            }
        }
        auxiliar = array[menor]
        array[menor] = array[i]
        array[i] = auxiliar
    
    }

    console.log(array);
    
    
