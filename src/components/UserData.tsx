import { IUserData } from './interfaces';
import './UserData.scss';

interface IProps {
    user: IUserData
}

const UserData = ({user} : IProps) => {
    return (
        <div className='success'>
            <h3>Hello <span>{user.username}</span></h3>
            <h3>Your Email is <span>{user.email}</span></h3>
            <h3>Your Address is <span>{user.address}</span></h3>
            <h4>Your Account has been successfully created</h4>
        </div>
    );
}

export default UserData;
