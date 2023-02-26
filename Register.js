/* //พชร วิเชียรน้อย
// ภาพิมล แก้วโลก ช่วยแต่งหน้า Front-end */
import { useEffect, useState } from 'react'
import './Register.css'
import validation from '../Validation'
import { useNavigate } from 'react-router-dom'


function Register() {
    const navigate = useNavigate();
    const [errors, setErrors] = useState('');
    const [values, setValues] = useState({
        email: '',
        password: '',
        confirmpassword: ''
    })

    const handleInput = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value })
    }

    // function handleValidation() {
    //     // let regobj = (email, password, confirmPassword)
    //     // console.log(regobj);
    //     console.log(values);
    //     setErrors(validation(values))
    //     if (errors.email && errors.password && errors.confirmpassword !== 0) {
    //         fetch('http://localhost:3999/register', {
    //             method: "POST",
    //             headers: { 'content-type': 'application/json' },
    //             body: JSON.stringify(values)
    //         }).then((res) => {
    //             console.log('Register Successfully' + res);
    //             nagative('/login')
    //         }).catch((err) => {
    //             console.log('Failed' + err);
    //         })
    //     }
    // }

    function handleValidation() {

        setErrors(validation(values))
        if (!errors.email && !errors.password && !errors.confirmpassword) {
            fetch('http://localhost:3999/register', {
                method: "POST",
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify(values)
            })
                .then((res) => {
                    if (res.ok) {
                        return res.json();
                    }
                    throw new Error("Registration failed.");
                })
                .then((data) => {
                    console.log('Register Successfully' + data);
                    navigate('/login');
                })
                .catch((err) => {
                    console.log('Failed' + err);
                })
        }
    }

    return (
        <div className='Up'>
            <br />
            <br />
            <br />
            <div className='ลองดู'>
                <br />
                <br />
                <br />
                <br />
                <p className='h1'><h1>SIGN UP</h1></p>
                <br />
                <br />

                <input
                    type="email"
                    name="email"
                    placeholder='Enter Your Email'
                    onChange={handleInput}
                />
                {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
                <br />
                <br />
                <br />
                <br />
                <input
                    type="password"
                    name="password"
                    placeholder='Enter Your Password'
                    onChange={handleInput}
                />
                {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}
                <br />
                <br />
                <br />
                <br />
                <input
                    type='password'
                    name='confirmpassword'
                    placeholder='Enter Your Confirm Password'
                    onChange={handleInput}
                />
                <br />
                <br />
                <br />
                <br />
                {errors.confirmpassword && <p style={{ color: "red" }}>{errors.confirmpassword}</p>}
                <button onClick={handleValidation} className='register-btn'>CREATE ACCOUNT</button>
                <br />
                <br />
                <br />
                <br />

            </div>
        </div>
    )
}

export default Register;