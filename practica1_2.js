Array.prototype.mergeSort = function()
{
if (this.length<= 1)
{
    return this;
}

    let mitad = parseInt(this.length/2);
    let izq = this.slice(0, mitad).mergeSort();
    let der = this.slice(mitad, this.length).mergeSort();

    let merge = function(izq, der)
    {
        let datos = [];

        while (izq.length > 0 && der.length > 0)
        {
            datos.push(izq[0] <= der[0] ? izq.shift() : der.shift())
        }
            
        return datos.concat(izq).concat(der);
    }

    return merge (izq, der);
    
}

let array = [11, 21, 25, 8, 9, 99];
console.log(array);
console.log();

let res = array.mergeSort();
console.log(res);




