import { useDispatch, useSelector } from 'react-redux';
import { getActiveChatAction } from '../store/actions/actionsSocket';

export const DirectMessageUser = ({ fullName, image, state, userId }) => {

  const dispatch = useDispatch();
  const { activeChat } = useSelector((state) => state.socketReducer);

  const handleClick = () => {
    dispatch(getActiveChatAction(userId))
  }

  return (
    // list-user-isActive
    <li className="list-user-dropdown-direct">
      <div 
        className={`div-direct-message-user ${activeChat === userId ? 'list-user-isActive' : ''}`}
        onClick={handleClick}>
        <img src={image} alt={fullName} />
        <div className="list-channels-name-directs">{fullName}</div>
        <span
          className={
            state === 'enable' ? 'span-user-active' : 'span-user-desactive'
          }></span>
      </div>
    </li>
  );
};
