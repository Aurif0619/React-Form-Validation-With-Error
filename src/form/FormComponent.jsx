import React, { useEffect, useState } from 'react';

const FormComponent = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [firstNameErr, setFirstNameErr] = useState(false);
    const [lastNameErr, setLastNameErr] = useState(false);
    const [emailErr, setEmailErr] = useState(false);
    const [passwordErr, setPasswordErr] = useState(false)
    const [confirmPasswordErr, setConfirmPasswordErr] = useState(false)

    const FormHandler = (e) => {
        e.preventDefault();

        if (password === confirmPassword) {

        } else {
            alert("Password and confirm password don't match")
        }

        if (firstName === '') {
            setFirstNameErr(true);
        }

        if (lastName === '') {
            setLastNameErr(true);
        }

        if (email === "") {
            setEmailErr(true);

        }
        if (passwordErr !== "") {
            setPasswordErr(true)
        }

        if (confirmPasswordErr !== "") {
            setConfirmPasswordErr(true);
        }

        setFirstName('');
        setLastName('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');


        console.log({ firstName, lastName, email, password, confirmPassword });
    };

    useEffect(() => {
        if (firstName !== '') {
            setFirstNameErr(false);
        }
    }, [firstName]);

    useEffect(() => {
        if (lastName !== '') {
            setLastNameErr(false);
        }
    }, [lastName]);

    useEffect(() => {
        if (email !== "") {
            setEmailErr(false)
        }
    }, [email]);

    useEffect(() => {
        if (passwordErr !== "") {
            setPasswordErr(false)
        }
    }, [password]);


    useEffect(() => {
        if (confirmPasswordErr !== "") {
            setConfirmPasswordErr(false)
        }
    }, [confirmPassword])


    return (
        <div className='d-flex justify-content-center align-items-center text-center' style={{ minHeight: '100vh', backgroundColor: '#f8f9fa' }}>
            <form onSubmit={FormHandler} style={{ padding: '20px', maxWidth: '400px', width: '100%', backgroundColor: '#ffffff', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0,0,0,0.2)' }}>
                <h3 className='mb-4' style={{ color: '#333' }}>User Registration</h3>

                <div className='mt-3'>
                    <label style={{ fontWeight: 'bold', color: '#333' }}>First Name</label> <br />
                    <input
                        type="text"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        className='py-1 inputValue'
                        style={{ outline: 'none', width: "100%", padding: '10px', borderRadius: '5px', border: '1px solid #ccc', boxShadow: 'inset 0 1px 3px rgba(0,0,0,0.1)' }}
                        placeholder="Enter your Name"
                    />
                </div>
                {firstNameErr && <p className='text-danger' style={{ fontSize: '0.9em', marginTop: '5px' }}>Enter Your Name</p>}

                <div className='mt-3'>
                    <label style={{ fontWeight: 'bold', color: '#333' }}>Last Name</label> <br />
                    <input
                        type="text"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        className='py-1'
                        style={{ outline: 'none', width: "100%", padding: '10px', borderRadius: '5px', border: '1px solid #ccc', boxShadow: 'inset 0 1px 3px rgba(0,0,0,0.1)' }}
                        placeholder="Enter your Last name"
                    />
                </div>
                {lastNameErr && <p className='text-danger' style={{ fontSize: '0.9em', marginTop: '5px' }}>Enter Your Last Name</p>}

                <div className='mt-3'>
                    <label style={{ fontWeight: 'bold', color: '#333' }}>Enter Your Email</label> <br />
                    <input
                        type="email"
                        className='py-1'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        style={{ outline: 'none', width: "100%", padding: '10px', borderRadius: '5px', border: '1px solid #ccc', boxShadow: 'inset 0 1px 3px rgba(0,0,0,0.1)' }}
                        placeholder="Enter your Email"
                    />
                </div>
                {emailErr && <p className='text-danger'>Enter Your Email</p>}
                <div className='mt-3'>
                    <label style={{ fontWeight: 'bold', color: '#333' }}>Password</label> <br />
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className='py-1'
                        style={{ outline: 'none', width: "100%", padding: '10px', borderRadius: '5px', border: '1px solid #ccc', boxShadow: 'inset 0 1px 3px rgba(0,0,0,0.1)' }}
                        placeholder="Enter your Password"
                    />
                </div>
                {passwordErr && <p className='text-danger'>Enter Your password</p>}

                <div className='mt-3'>
                    <label style={{ fontWeight: 'bold', color: '#333' }}>Confirm Password</label> <br />
                    <input
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className='py-1'
                        style={{ outline: 'none', width: "100%", padding: '10px', borderRadius: '5px', border: '1px solid #ccc', boxShadow: 'inset 0 1px 3px rgba(0,0,0,0.1)' }}
                        placeholder="Confirm Password"
                    />
                </div>
                {confirmPasswordErr && <p className='text-danger'>Put the confirm password</p>}

                <div>
                    <button
                        type='submit'
                        className='btn btn-success text-white mt-3'
                        style={{ width: "100%", padding: '10px', borderRadius: '5px', fontWeight: 'bold' }}
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
}

export default FormComponent;
