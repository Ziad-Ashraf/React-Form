import { ChangeEvent } from 'react';
import './form.scss'
import { IUserData } from './interfaces';
import { formData } from './assests/FormData';


interface IProps {
    isLoggedIn: boolean,
    setLoginState : (value:boolean) =>void
    setUserData : (user: IUserData) => void
    userData : IUserData
  }



const Form = ({setLoginState, userData, setUserData}: IProps) => {

    const onChangeHandler = ((event : ChangeEvent<HTMLInputElement>) => {
        const { value, name } = event.target;
        setUserData({
            ...userData,
            [name] : value,
        })
    })
    
    const formDataLoop = formData.map((input, index) => (
        <div className='input-wrapper'  key={index}>
            <label htmlFor={input.label}>{input.label}</label>
            <input type={input.type} name={input.name} id={input.id} value={userData[input.name]} onChange={onChangeHandler}/>
        </div>
    ))
    return (
        <>
        <form onSubmit={(e) => {
            e.preventDefault();
        }}>
        
        {formDataLoop}

        <button id="btn" onClick={() => {
            setLoginState(true)
        }}>LOGIN</button>
        </form>
        </>
    );
}

export default Form;
