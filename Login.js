/* //พชร วิเชียรน้อย
// ภาพิมล แก้วโลก ช่วยแต่งหน้า Front-end */
import React from 'react'
import { useState, useEffect } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import './Login.css'
import { LoginSocialFacebook } from 'reactjs-social-login'
import { FacebookLoginButton } from 'react-social-login-buttons'
import { gapi } from 'gapi-script'
import { GoogleLogin, GoogleLogout } from 'react-google-login'

function Login() {

  const clientId = '215483190989-ibkntll2qogdde7s80eq622lu9m1h2bd.apps.googleusercontent.com'
  const nagative = useNavigate();
  const MySwal = withReactContent(Swal)
  const [inputs, setInputs] = useState({});
  const [profile, setProfile] = useState('');

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({ ...values, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      "email": inputs.email,
      "password": inputs.password,
    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch("http://localhost:3999/login", requestOptions)
      .then(response => response.json())
      .then(result => {
        console.log(result);
        if (result.status === 'login success') {
          MySwal.fire(
            'Login Success!',
            '',
            'success'
          ).then((value) => {
            localStorage.setItem('token', result.accessToken)
            nagative('/')
          })
        } else {
          MySwal.fire(
            'Login Failed!',
            '',
            'error'
          )
        }
      })
    console.log(inputs);
  }

  useEffect(() => {
    const initClient = () => {
      gapi.client.init({
        clientId: clientId,
        scope: ''
      })
    }
    gapi.load("client:auth2", initClient)
  }, [])

  const onSuccess = (res) => {
    setProfile(res.profileObj)
    console.log('success', res);
  }
  const onFailure = (err) => {
    console.log('failed', err);
  }
  const logOut = () => {
    setProfile(null)
  }

  return (
    <div>


      <form onSubmit={handleSubmit}>

        {/* <div className='cover'> */}
        <div className='input-login'>
          <h1>เข้าสู่ระบบ</h1>
          <br />
          <h2>สามารถเข้าใช้งานด้วยบัญชีเดียวกับ 7 App</h2>
          <br />
          <h3>เพื่อได้รับสิทธิประโยชน์</h3>
          <h3>กรุณา Login ด้วยบัญชีเดียวกับ 7App</h3>
          <br />
          <hr />
          <br />
          <br />



          <input
            type='email'
            name='email'
            placeholder='Enter Your Email'
            value={inputs.email || ""}
            onChange={handleChange}
          />
          <br />
          <br />
          <input
            type='password'
            name='password'
            placeholder='Enter Your Password'
            value={inputs.password || ""}
            onChange={handleChange}
          />
          <br />
          <br />
          <br />
          <br />

          <button className='login-btn'>LOGIN</button>
          <br />
          <br />
          <br />
          <br />
          <hr />
          <br />
          <br />
          <div>Or Login Using</div>

          {/* <div className='alt-login'> */}
          <br />
          <br />
          <div className='gg-fb'>

            <LoginSocialFacebook
              appId='708811864175131'
              onResolve={(response) => {
                console.log(response);
              }}
              onReject={(error) => {
                console.log(error);
              }}
            >
              <FacebookLoginButton className='facebook' />
            </LoginSocialFacebook>
            <GoogleLogin
              clientId={clientId}
              buttonText='Log in with Google' className='google'
              onSuccess={onSuccess}
              onFailure={onFailure}
              cookiePolicy={'single_host_origin'}
              isSignedIn={true}
            >
            </GoogleLogin>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Login;