import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import CustomText from '../../components/customText';
import CustomInput from '../../components/CustomInputs';
import email from '/email.svg';
import otp from '/otp.svg';
import password from '/password.svg'
import CustomButton from '../../components/CustomButton';
import { useNavigate } from "react-router-dom";
import { useParams } from 'react-router-dom';
import { setPasswordAction } from "../../redux/slices/setPassword";
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from 'react-router-dom';
import logo from '/logo.svg';

const NewPassword = ({ }) => {
  const Url = 'https://jobboardbackend-u9zm.onrender.com/api/v1/auth/resetpassword/'
  const dispatch = useDispatch()
  //const { useremail } = useParams()
  const location = useLocation();
  const passwordPattern = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/
  const navigate = useNavigate();
  const PasswordSchema = Yup.object().shape({
    password: Yup.string()
      .required('Required')
      .matches(passwordPattern, 'Use At Least 9 Characters One Uppercase Letter One Lowercase Letter And One Special character In Your Password.'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password')], 'your passwords do not match')
      .required('Required'),
    OTP: Yup.string()
      .required('Required').length(6),
  });

  return (
    <div>
       <img src={logo}  style={{marginLeft:10,marginTop:10}}/>
      <div style={{ display: 'flex', width: '100%', justifyContent: 'center' }}>
        <CustomText
          text={'Pick a new Password'}
          color="#4640DE"
          fontFamily='Roboto-Medium'
          size={40}
          style={{ marginTop: '35px' }}
        />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '32%', margin: 'auto', marginTop: 40 }}>
        <Formik
          initialValues={{
            email: location.state?.useremail,
            password: '',
            confirmPassword: '',
            OTP: ''
          }}
          validationSchema={PasswordSchema}
          onSubmit={values => {
            //values.email='esrarefaat@gmail.com'
            dispatch(setPasswordAction({ userData: values, url: Url }))
              .unwrap()
              .then((response) => {
                navigate('/login');
              })
              .catch((error) => {
                toast.error(error.error);
              });
          }}
        >
          {({ values, errors, touched, handleChange, setFieldTouched, isValid, handleSubmit, handleBlur }) => (
            <>

              <CustomInput
                password={true}
                placeholder={'New Password'}
                value={values.password}
                onChangeText={handleChange('password')}
                Blur={handleBlur('password')}
                forceLable={true}
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
                placeholder={"Confirm New Password"}
                value={values.confirmPassword}
                onChangeText={handleChange('confirmPassword')}
                Blur={handleBlur('confirmPassword')}
                forceLable={true}
                TextInputHeight={18}
                TextInputSize={14}
                TextInputColor={'#5F5F5F'}
                leftIcon={<img src={password} />}
              />
              {errors.confirmPassword && touched.confirmPassword && (
                <CustomText
                  text={errors.confirmPassword}
                  color="#8F111D"
                  fontFamily='Roboto-Regular'
                  size={12}
                />
              )}
              <CustomInput
                placeholder={'OTP'}
                value={values.OTP}
                onChangeText={handleChange('OTP')}
                Blur={handleBlur('OTP')}
                forceLable={true}
                TextInputHeight={18}
                TextInputSize={14}
                TextInputColor={'#5F5F5F'}
                leftIcon={<img src={otp} />}
              />
              {errors.OTP && touched.OTP && (
                <CustomText
                  text={errors.OTP}
                  color="#8F111D"
                  fontFamily='Roboto-Regular'
                  size={12}
                />
              )}
              <CustomButton
                text={'Submit'}
                containerStyle={{
                  backgroundColor: '#4640DE',
                  marginTop: 35,
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
      </div>

    </div>
  );
}

export default NewPassword;
