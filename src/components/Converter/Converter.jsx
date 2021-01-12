import { useState } from 'react';
import './Converter.css';
import Label from './Label/Label';

export default function Converter() {

    const [rgb, setRGB] = useState({
        mess: '',
        color: '',
        show: false
    });


    function hexToRgb(hex) {
        var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? {
          r: parseInt(result[1], 16),
          g: parseInt(result[2], 16),
          b: parseInt(result[3], 16)
        } : null;
      }
      
    

    const onChangeHandle = (e) => {
        if(e.target.value.length >= 7)
        {
            if(!e.target.value.startsWith('#') || hexToRgb(e.target.value)===null)
            {
                console.log('error');
                setRGB(prevRGB => ({...prevRGB, mess: 'Ошибка!', color: 'rgb(155,33,25)', show: true }));
            }
            else 
            {
                let o = hexToRgb(e.target.value);
                let res = `rgb(${o.r},${o.g},${o.b})`;
                setRGB(prevRGB => ({...prevRGB, mess: res, color: res, show: true }));
            }
        }
        else 
        {
            setRGB(prevRGB => ({...prevRGB, mess: '', color: '', show: false }));
        }

    }

    const onSubmitHandle = (e) => {
        e.preventDefault();
    }

    return(
        <div className="Main" style={{backgroundColor: rgb.color}}>
            <div className="Form-Block">
            <form className="Form" onSubmit={onSubmitHandle} >
                <input className="Input" onChange={onChangeHandle}></input>
                <Label show={rgb.show} mess={rgb.mess} />
            </form>
            </div>
        </div>
    )
}