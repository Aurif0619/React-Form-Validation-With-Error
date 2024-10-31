import React from 'react'

const FormComponent = () => {

    const FormHandler = ((e) => {
        e.preventDefault();
    })


    return (
        <>
            <div className='d-flex justify-content-center align-items-center mt-4'>
                <form onSubmit={FormHandler}>
                    <div className='mt-3'>
                        <label>Fist Name</label> <br />
                        <input type="text" className='py-1' style={{ outline: 'none', width: "150%" }} placeholder="Enter your Name" />
                    </div>
                    <p className='text-danger'>Enter Your Name</p>

                    <div className='mt-3'>
                        <label>Last Name</label> <br />
                        <input type="text" className='py-1' style={{ outline: 'none', width: "150%" }} placeholder="Enter your Last name" />
                    </div>
                    <p className='text-danger'>Enter Your Last Name</p>

                    <div className='mt-3'>
                        <label>Enter Your Email</label> <br />
                        <input type="email" className='py-1' style={{ outline: 'none', width: "150%" }} placeholder="Enter your Last name" />
                    </div>
                    <p className='text-danger'>Enter Your Email</p>


                    <div className='mt-3'>
                        <label>Password</label> <br />
                        <input type="text" className='py-1' style={{ outline: 'none', width: "150%" }} placeholder="Enter your Password" />
                    </div>
                    <p className='text-danger'>Enter Your Password</p>

                    <div className='mt-3'>
                        <label>Confirm Password</label> <br />
                        <input type="text" className='py-1' style={{ outline: 'none', width: "150%" }} placeholder="Confirm Password" />
                    </div>
                    <p className='text-danger'>Confirm password</p>

                    <button className='btn btn-success text-white mt-2' type="submit" style={{ width: "150%" }}>Submit</button>
                </form>
            </div>
        </>
    )
}

export default FormComponent;