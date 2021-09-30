import classes from "./ProfileForm.module.css";
import { useRef, useContext } from "react";
import AuthContext from "../../store/auth-context";
import { useHistory } from "react-router";

const ProfileForm = () => {
    const newPasswordRef = useRef();
    const history = useHistory();

    const authCtx = useContext(AuthContext);
    const submitHandler = (event) => {
        event.preventDefault();
        const enteredNewPassword = newPasswordRef.current.value;

        fetch(
            "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyBSAbmCalDyyob8Rff1nlhzAN7tJ6W5CT4",
            {
                method: "POST",
                body: JSON.stringify({
                    idToken: authCtx.token,
                    password: enteredNewPassword,
                    returnSecureToken: false,
                }),
                headers: {
                    "Content-Type": "application/json",
                },
            }
        ).then((res) => {
            history.replace("/");
        });
    };

    return (
        <form onSubmit={submitHandler} className={classes.form}>
            <div className={classes.control}>
                <label htmlFor='new-password'>New Password</label>
                <input
                    type='password'
                    id='new-password'
                    minLength='7'
                    ref={newPasswordRef}
                />
            </div>
            <div className={classes.action}>
                <button>Change Password</button>
            </div>
        </form>
    );
};

export default ProfileForm;
