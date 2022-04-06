import React from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from './authSlice';

const Login = () => {
    const dispatch = useDispatch()
    const submitHandler = (e) => {
        e.preventDefault();

        dispatch(logIn());
    }
  return (
    <>
        <div className="container">
            <div className="row">
                <div className="col-lg-6 offset-lg-3">
                    <h3 className="text-center">Login</h3>
                    <form action="" onSubmit={submitHandler}>
                        <div className="mb-3">
                            <label className="form-label">Email address</label>
                            <input type="email" className="form-control" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Password</label>
                            <input type="password" className="form-control" />
                        </div>
                        <div className="text-center">
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </>
  )
}

export default Login