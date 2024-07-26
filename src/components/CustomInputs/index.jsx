import React, { useState } from 'react';
import ShowPass  from '/ShowPass.svg'; 
import DontshowPass from '/DontshowPass.svg'; 
import './CustomInputStyle.css'; 

const CustomInput = ({
  lable,
  placeholder,
  password,
  containerStyle,
  onChangeText,
  forceLable = false,
  keyboardType = "default",
  autoFocus = false,
  editable = true,
  TextInputColor,
  lableStyle,
  leftIcon,
  Blur,
  value
}) => {
  const [showPassword, setShowPassword] = useState(true);
  const [focus, setFocus] = useState(false);
  const [text, setText] = useState(value);
  
  return (
    <div  style={{ borderColor: focus ? '#4640DE' : '#D6DDEB', borderStyle:'solid',borderWidth:1,width:'420px',borderRadius:5,height:'35px',marginTop:'15px'}}>
      <div className="row">
        {leftIcon}
        <div  style={{ marginLeft: 8 }}>
          {/* <div className="textView">
            {(text !== "" || focus || forceLable) && <span className={lableStyle}>{lable}</span>}
          </div> */}
          <div>
            <input
              onFocus={() => setFocus(true)}
             // onBlur={Blur}
              onChange={(e) => {
                onChangeText(e.target.value);
                setText(e.target.value);
              }}
              value={value}
              onBlur={() => setFocus(false)}
              type={showPassword && password ? "password" : "text"}
             // className="textInput"
              //style={{ color: 'orange',width:'90%' }}
              placeholder={placeholder}
              autoFocus={autoFocus}
              readOnly={!editable}
              autoCapitalize='none'
            />
          </div>
        </div>
        {password && (
          <button
            className="showPassTouch"
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
