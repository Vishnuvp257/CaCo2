import React, { useState } from 'react';
import styles from './resetPassword.module.css';
import axios from "axios";

const ResetPassword = () => {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const searchParams = new URLSearchParams(window.location.search);

    const token = searchParams.get('token');
    const email = searchParams.get('email');

    console.log(token, email);

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleConfirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value);
    };

    const handleSubmit = async (e)  => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }

        const userData = {
            email,
            token,
            newPassword: password
        }

        axios.post(
            "https://api.caco2.in/api/auth/reset-password", userData).then((response) => {
                alert('Password reset successfully');
                window.location.href = '/pwd-changed-success';
            }).catch((error) => {
                //console.log(error)
                alert('Password reset failed');
            }
        );
    };

    return (
        <div className={styles.resetPasswordContainer}>
            <h2 style={{fontSize:'2rem', textAlign:'center'}}>Reset Password</h2>
            <form onSubmit={handleSubmit}>
                <div className={styles.formGroup}>
                    <label htmlFor="password" className={styles.label}>New Password</label>
                    <input
                        className={styles.input}
                        type="password"
                        id="password"
                        value={password}
                        onChange={handlePasswordChange}
                    />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="confirmPassword" className={styles.label}>Confirm Password</label>
                    <input
                        className={styles.input}
                        type="password"
                        id="confirmPassword"
                        value={confirmPassword}
                        onChange={handleConfirmPasswordChange}
                    />
                </div>
                <button type="submit" className={styles.button}>Reset</button>
            </form>
        </div>
    );
};

export default ResetPassword;