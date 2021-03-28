import ButtonComponent from './component/button';
import ResultComponent from './component/result';
import InputComponent from './component/input';
import React, {useState, useEffect} from 'react';



// import {useState} from 'react'
function PhuongTrinhBacHai() {

    const[hsa, setHsa] = useState(0);
    const[hsb, setHsb] = useState(0);
    const[hsc, setHsc] = useState(0);
    const[result, setResult] = useState("");

    const getNumberInput = (event) =>{
        const val = event.target.value;
        const name = event.target.name;
        console.log(val, name)
        if(name === 'hsa'){
            setHsa(val);
        } else if(name === 'hsb'){
            setHsb(val);
        } else if(name === 'hsc'){
            setHsc(val);
        }
    }
    
    const giaiPhuongTrinh = () => {
        if(hsa === 0) {
         
            if(hsb === 0) {
                if (hsc === 0) {
                    setResult('Phuong trinh vo so nghiem')
                     
                } else {
                    setResult('Phuong trinh vo nghiem')
                }
            } else {
                setResult('Phuong trinh co nghiem duy nhat: '+(-hsc/hsb))
            }
        } else {
            let delta = hsb*hsb - 4*hsa*hsc;
            if(delta > 0) {
                let x1 = (-hsb+Math.sqrt(delta))/(2*hsa);
                let x2 = (-hsb-Math.sqrt(delta))/(2*hsa);
                setResult('Nghiem thu nhat x1 = '+x1+'\n Nghiem thu hai x2 = '+x2)
            } else if ( delta === 0) {
                let sum = -hsb/2*hsa
                setResult('Phuong trinh co nghiem kep: x1 = x2 = '+sum)
            } else {
                setResult('Phuong trinh vo nghiem')
            }
    }
    }
    
    
    
    return (
        <>
        <div style ={{width: '300px', padding: '0 20px', border: '1px solid aqua', margin:'0 auto'}}>
            <label>He So' A :    </label>
            <InputComponent change={getNumberInput} type='text' name='hsa' value={hsa} />
            <br/>
            <br/>

            <label>He So' B :    </label>
            <InputComponent change={getNumberInput} type='text' name='hsb' value={hsb} />
            <br/>
            <br/>

            <label>He So' C :    </label>
            <InputComponent change={getNumberInput} type='text' name='hsc' value={hsc} />
            <br/>
            <br/>


            <ButtonComponent click={giaiPhuongTrinh}/>
            <ResultComponent  result={result}/>
        </div>
        </>
    )
}
export default PhuongTrinhBacHai;