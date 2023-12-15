import React from "react";
import { useEffect, useState } from "react";
import { createUser } from "../features/user/userSlice";
import { useDispatch, useSelector } from "react-redux";

function User() {
    const [dataReg, setDataReg] = useState ({
        user: {
            username: '',
            password: ''
        },
    });
    const dispatch = useDispatch();
    const createUserResponse = useSelector((state) => state.user.createUserMsg);
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createUser(dataReg));
        console.log(dataReg);
    }
    console.log(createUserResponse);
    useEffect(()=> {
    }, [dispatch, createUserResponse] );

    const handleUsernameChange = (e) => {
        setDataReg({ ...dataReg, user: { ...dataReg.user, username: e.target.value } });
    }
    const handlePasswordChange = (e) => {
        setDataReg({ ...dataReg, user: { ...dataReg.user, password: e.target.value } });
    }
    return (
    <>
        <form onSubmit={(e) => handleSubmit(e)}>
            <input type='text' onChange={(e) => handleUsernameChange(e)} label="Username" />
            <input type='password' onChange={(e) => handlePasswordChange(e)} label="Password" />
            <button type='submit'>Login</button>
        </form>
    </>
    )
}

export default User;
