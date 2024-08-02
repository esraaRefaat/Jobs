import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import CustomText from '../../components/customText';
import CustomInput from '../../components/CustomInputs';
import email from '/email.svg';
import password from '/password.svg'
import CustomButton from '../../components/CustomButton';
import { useNavigate } from "react-router-dom";
import { sendEmailAction } from "../../redux/slices/sendemailSlice";
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from "react-redux";
import logo from '/logo.svg';

const ForgetPassword = () => {
  const Url = 'https://jobboardbackend-u9zm.onrender.com/api/v1/auth/forgotPassword/'
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const Schema = Yup.object().shape({
    email: Yup.string()
      .email('Invalid email')
      .required('Required'),
  });
  return (
    <div>
      <img src={logo}  style={{marginLeft:10,marginTop:10}}/>
      <div style={{ display: 'flex', width: '100%', justifyContent: 'center' }}>
        <CustomText
          text={'Forget Password'}
          color="#4640DE"
          fontFamily='Roboto-Medium'
          size={40}
          style={{ marginTop: '35px' }}
        />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '32%', margin: 'auto', marginTop: 40 }}>
        <Formik
          initialValues={{
            email: '',
          }}
          validationSchema={Schema}
          onSubmit={values => {
           // console.log(values.email)
            // navigate('/newpassword');
            dispatch(sendEmailAction({ userData: values, url: Url }))
              .unwrap()
              .then((response) => {
                console.log('res', response)
                navigate('/newpassword', {
                  state: {
                    useremail: values.email ,
                  }
                  });


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

export default ForgetPassword;
