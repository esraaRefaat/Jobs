import React, { useState } from 'react';
import CustomText from '../../components/customText';
import CustomInput from '../../components/CustomInputs';
import email from '/email.svg';
import user from '/user.svg';
import password from '/password.svg'
import CustomButton from '../../components/CustomButton';
import facebook from '/facebook.svg'
import { Formik, Field } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from "react-redux";
import { signup } from "../../redux/slices/signUpSlice";;

const SignUp = () => {
  const dispatch = useDispatch()
  const passwordPattern = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/
  const SignupSchema = Yup.object().shape({
    name: Yup.string()
      .min(8)
      .max(20)
      .required('Required'),
    email: Yup.string()
      .email('Invalid email')
      .required('Required'),
    password: Yup.string()
      .required('Required')
      .matches(passwordPattern, 'Use At Least 9 Characters One Uppercase Letter One Lowercase Letter And One Special character In Your Password.'),
    rePassword: Yup.string()
      .min(8)
      .oneOf([Yup.ref('password')], 'your passwords do not match')
      .required('Required'),
    role: Yup.string()
      .required('Required'),
  });
  return (
    <div>
      <div style={{ display: 'flex', width: '100%', justifyContent: 'center' }}>
        <CustomText
          text={'Sign Up'}
          color="#4640DE"
          fontFamily='Roboto-Medium'
          size={40}
          style={{ marginTop: '35px' }}
        />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '32%', margin: 'auto' }}>
        <Formik
          initialValues={{
            name: '',
            email: '',
            password: '',
            rePassword: '',
            role: ''
          }}
          validationSchema={SignupSchema}
          onSubmit={values => {
            console.log(values)
            dispatch(signup(values))
          }}
        >
          {({ values, errors, touched, handleChange, setFieldTouched, isValid, handleSubmit, handleBlur }) => (
            <>
              <CustomInput
                placeholder={'Name'}
                value={values.name}
                onChangeText={handleChange('name')}
                Blur={handleBlur('name')}
                forceLable={true}
                TextInputHeight={18}
                TextInputSize={14}
                TextInputColor={'#5F5F5F'}
                leftIcon={<img src={user} />}
              />
              {errors.name && touched.name && (
                <CustomText
                  text={errors.name}
                  color="#8F111D"
                  fontFamily='Roboto-Regular'
                  size={12}
                />
              )}
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
              <CustomInput
                password={true}
                placeholder={'Confirm Password'}
                value={values.rePassword}
                onChangeText={handleChange('rePassword')}
                Blur={handleBlur('rePassword')}
                forceLable={true}
                TextInputHeight={18}
                TextInputSize={14}
                TextInputColor={'#5F5F5F'}
                leftIcon={<img src={password} />}
              />
              {errors.rePassword && touched.rePassword && (
                <CustomText
                  text={errors.rePassword}
                  color="#8F111D"
                  fontFamily='Roboto-Regular'
                  size={12}
                />
              )}
              <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly', width: '100%', marginTop: 20 }}>
                <CustomText
                  text={"Select Role :"}
                  color='#4640DE'
                  fontFamily='Roboto-Medium'
                  size={15}
                />
                <label style={{ color: '#8D8D8D' }}>
                  <Field type="radio" name="role" value="Hr" style={{ accentColor: '#4640DE' }} />
                  Hr
                </label>
                <label style={{ color: '#8D8D8D' }}>
                  <Field type="radio" name="role" value="User" style={{ accentColor: '#4640DE' }} />
                  User
                </label>
                {errors.role && touched.role && (
                  <CustomText
                    text={errors.role}
                    color="#8F111D"
                    fontFamily='Roboto-Regular'
                    size={12}
                  />
                )}
              </div>
              <CustomButton
                text={'Sign Up'}
                containerStyle={{
                  backgroundColor: '#4640DE',
                  marginTop: 30,
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
                //disabled={!isValid}
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
          alignItems: 'center'
        }}>
          <CustomText
            text={"Do not have an Account?  "}
            color='#8D8D8D'
            fontFamily='Roboto-Medium'
            size={15}
          />
          <button
            type="button"
            onClick={() => {
              dispatch(getUsers())
            }}
            style={{ marginLeft: -10, backgroundColor: 'transparent', border: 'none' }}
          >
            <CustomText
              text={'Login'}
              color="#4640DE"
              fontFamily='Roboto-Medium'
              size={15}
              style={{ textDecorationLine: 'underline' }}
            />
          </button>
        </div>
      </div>

    </div>
  );
}

export default SignUp;
