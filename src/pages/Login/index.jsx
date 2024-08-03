import React from 'react';
import CustomText from '../../components/customText';
import CustomInput from '../../components/CustomInputs';
import email from '/email.svg';
import password from '/password.svg'
import CustomButton from '../../components/CustomButton';
import facebook from '/facebook.svg'
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Button } from '@mui/material';
import logo from '/logo.svg';
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginAction } from "../../redux/slices/loginSlice";
import {  toast } from 'react-toastify';
import { getToken } from "../../redux/slices/tokenSlice";

const Login = () => {
   const loginUrl = 'https://jobboardbackend-u9zm.onrender.com/api/v1/auth/signin'
  const passwordPattern = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const LoginSchema = Yup.object().shape({
    email: Yup.string()
      .email('Invalid email')
      .required('Required'),
    password: Yup.string()
      .required('Required')
      .matches(passwordPattern,'Use At Least 9 Characters One Uppercase Letter One Lowercase Letter And One Special character In Your Password.'),
  });
  return (
    <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
    <div  style={{width:'50%',height:'100%'}}>
      
      <img src={logo}  style={{marginLeft:10,marginTop:10}}/>
      <div style={{borderStyle:'outset',borderColor:'#4640DE',borderWidth:2,borderRadius:5,marginLeft:90,width:'545px',marginTop:35,height:'650px'}}>
      <div style={{ display: 'flex', width: '100%', justifyContent: 'center' }}>
        <CustomText
          text={'Login'}
          color="#4640DE"
          fontFamily='Roboto-Medium'
          size={40}
          style={{ marginTop: '35px' }}
        />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '80%', margin: 'auto' }}>
        <Formik
          initialValues={{
            email: '',
            password: '',
          }}
          validationSchema={LoginSchema}
          onSubmit={values => {
            console.log(values)
            dispatch(loginAction({ userData: values, url: loginUrl }))
            .unwrap()
            .then((response) => {
              console.log('res', response)
              dispatch(getToken(response))
              navigate('/');
             

            })
            .catch((error) => {
             // console.error("Sign-up failed:", error);
              toast.error(error.error);
            });
          }}
        >
          {({ values, errors, touched, handleChange, setFieldTouched, isValid, handleSubmit, handleBlur }) => (
            <>
              <CustomInput
                placeholder={'Email'}
                value={values.email}
                onChangeText={handleChange('email')}
                Blur={handleBlur('email')}
                forceLable={true}
                TextInputHeight={18}
                TextInputSize={14}
                TextInputColor={'#5F5F5F'}
                leftIcon={<img src={email} />}
              />
              {errors.email && touched.email && (
                <CustomText
                  text={errors.email}
                  color="#8F111D"
                  fontFamily='Roboto-Regular'
                  size={12}
                />
              )}
              <CustomInput
                placeholder={'Password'}
                value={values.password}
                onChangeText={handleChange('password')}
                Blur={handleBlur('password')}
                forceLable={true}
                password
                TextInputHeight={18}
                TextInputSize={14}
                TextInputColor={'#5F5F5F'}
                leftIcon={<img src={password} />}
              />
              {errors.password && touched.password && (
                <CustomText
                  text={errors.password}
                  color="#8F111D"
                  fontFamily='Roboto-Regular'
                  size={12}
                />
              )}
              <Button onClick={()=>{ navigate('/forgetpassword');}}
                 style={{ alignSelf: 'flex-end' }}>
              <CustomText
                text={'Forgot Password?'}
                color={'#8D8D8D'}
                fontFamily='Roboto-Medium'
                size={12}  
              />
              </Button>
              <CustomButton
                text={'Login'}
                containerStyle={{
                  backgroundColor: '#4640DE',
                  marginTop: 25,
                  alignSelf: 'center',
                  width: 300,
                  height: 45,
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 100,
                  border: 'none'
                }}
                disabled={!isValid}
                onPress={handleSubmit}
              />
            </>
          )}
        </Formik>
        <div style={{
          width: 167,
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: 43,
          marginBottom: 23,
          alignSelf: 'center'
        }}>
          <div style={{
            width: 61,
            height: 1,
            backgroundColor: '#4640DE'
          }}></div>
          <CustomText
            text={'Or'}
            color="#4640DE"
            fontFamily="regular"
            size={14}
          />
          <div style={{
            width: 61,
            height: 1,
            backgroundColor: '#4640DE'
          }}></div>
        </div>
        <img src={facebook} style={{ width: 45, height: 45 }} />
        <div style={{
          marginTop: 42,
          display: 'flex',
          flexDirection: 'row',
          marginBottom: 250,
        alignItems:'center'
        }}>
          <CustomText
            text={"Do not have an Account?  "}
            color='#8D8D8D'
            fontFamily='Roboto-Medium'
            size={15}
          />
          <Button onClick={()=>{
            navigate('/signup');
          }}
          style={{
            border:'none',
            background:'none',
            marginLeft:-10
          }}
       >
          <CustomText
            text={'Sign Up'}
            color="#4640DE"
            fontFamily='Roboto-Medium'
            size={15}
            style={{ textDecorationLine: 'underline'}}
          />
          </Button>
        </div>
      </div>
</div>
    </div>
    <div style={{width:'50%',height:'100%'}}> <img src={'/22.jpg'}  style={{width:'100%',height:'100%'}}/></div>
      </div>
  );
}

export default Login;