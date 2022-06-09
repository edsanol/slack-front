export const DirectMessageUser = ({ fullName, image, state }) => {
  return (
    <li className="list-user-dropdown-direct">
      <div className="div-direct-message-user">
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
