import React, { useState } from 'react';
import ShowPass  from '/ShowPass.svg'; 
import DontshowPass from '/DontshowPass.svg'; 
import classes from './CustomInputStyle.module.css'; 

const CustomInput = ({
  placeholder,
  password,
  onChangeText,
  autoFocus = false,
  editable = true,
  leftIcon,
  Blur,
  value
}) => {
  const [showPassword, setShowPassword] = useState(true);
  const [focus, setFocus] = useState(false);
  const [text, setText] = useState(value);
  
  return (
    <div  style={{ borderColor: focus ? '#4640DE' : '#D6DDEB', borderStyle:'solid',borderWidth:1,width:'420px',borderRadius:5,height:'35px',marginTop:15}}>
      <div style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
       <div  style={{ marginLeft: 10,marginTop:4}}> {leftIcon}</div>
        <div  style={{ marginLeft: 8}}>
          <div>
            <input
              onFocus={() => setFocus(true)}
              onBlur={
                Blur
            }
              onChange={(e) => {
                onChangeText(e.target.value);
                setText(e.target.value);
              }}
              value={value}
              type={showPassword && password ? "password" : "text"}
              style={{height:'23px',marginTop:'2px',border:'none',outline: 'none'}}
              placeholder={placeholder}
              autoFocus={autoFocus}
              readOnly={!editable}
              autoCapitalize='none'
            />
          </div>
        </div>
        {password && (
          
          <button
            className={classes.showPassTouch}
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ?   <img src={ShowPass} />  : <img src={DontshowPass} /> }
          </button>
        
        )}
      </div>
    </div>
  );
}

export default CustomInput;
