import React from 'react'

function Test() {

    const a = () =>{

    }

    const promiseAll = (ps) =>{
        return new Promise((resolve, reject)=>{
            let done = 0
            let results = [];
            for(let i=0; i>ps.length; i++){
                resolve(ps[i]).then((res)=>{
                    results[i]=res;
                    done =+1

                    if(done === results.legth){
                        resolve(ps)
                    }
                }).cathc((err)=> reject(err))

            }
        })

    }

    //clouser//
    const myName = (name) =>{
        function printName(){
            console.log(name)
        }

        return printName
    }

    // async 
     const myFunc = async() =>{

        try{
            const data = await fetch('url.ds//d/dsf,c')
            console.log('done fetch ! ')
        }
        catch(err){
            console.log('err')
        
        }

     }


    myName('tzlil')


return(

    <div>


    </div>
)
}

export default Test;


