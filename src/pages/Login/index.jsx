import React from 'react';
import CustomText from '../../components/customText';
import CustomInput from '../../components/CustomInputs';
import email  from '/email.svg'; 
import password from '/password.svg'

const Login = () => {
    return (
        <div>
        <div style={{display:'flex',width:'100%',justifyContent:'center'}}>
             <CustomText
          text={'Login'}
          color="#4640DE"
          fontFamily='Roboto-Medium'
          size={40}
          style={{marginTop:'35px'}}
        />
        </div>
        <div style={{display:'flex',flexDirection:'column',alignItems:'center',width:'100%'}}>
        <CustomInput
                  lable={'email'}
                  //containerStyle={[styles.emailInput, { marginTop: 50 }]}
                  placeholder={'email'}
                  value={''}
                  onChangeText={()=>{
                    console.log('jgjgjjh')
                  }}
                  Blur={()=>{
                    console.log('jgjgjjh')
                  }}
                  forceLable={true}
                  TextInputHeight={18}
                  TextInputSize={14}
                  TextInputColor={'#5F5F5F'}
                  leftIcon={<img src={email}/>}
                //  lableStyle={{ fontSize: 10, color: '#8D8D8D', fontFamily: Platform.OS === 'ios' ? 'SFProDisplay-Regular' : 'SFPRODISPLAYREGULAR' }}
                />
                  <CustomInput
                  lable={'email'}
                  //containerStyle={[styles.emailInput, { marginTop: 50 }]}
                  placeholder={'email'}
                  value={''}
                  onChangeText={()=>{
                    console.log('jgjgjjh')
                  }}
                  Blur={()=>{
                    console.log('jgjgjjh')
                  }}
                  forceLable={true}
                  password
                  TextInputHeight={18}
                  TextInputSize={14}
                  TextInputColor={'#5F5F5F'}
                  leftIcon={<img src={password}/>}
                //  lableStyle={{ fontSize: 10, color: '#8D8D8D', fontFamily: Platform.OS === 'ios' ? 'SFProDisplay-Regular' : 'SFPRODISPLAYREGULAR' }}
                />
       </div>
        </div>
    );
}

export default Login;
