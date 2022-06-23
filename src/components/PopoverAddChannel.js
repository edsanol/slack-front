import { useEffect, useState } from 'react';
import { Popover } from '@mantine/core';
import { AddChannelOptions } from './AddChannelOptions';
import { useDispatch } from 'react-redux';
import { actionsHiddenScroll } from '../store/actions/actionsChangeState';
import { AddWorkspaceOption } from './addWorkspaceOption';

export const PopoverAddChannel = ({name}) => {
  const [opened, setOpened] = useState(false);

  const dispatch = useDispatch();

  const handleClick = () => {
    setOpened(!opened);
  };

  useEffect(() => {
    dispatch(actionsHiddenScroll(opened));
  }, [opened, dispatch]);

  return (
    <Popover
      opened={opened}
      onClose={() => setOpened(false)}
      target={
        <p type="button" className={(name === '+') ? 'aside-button-workspace-plus' : ''} onClick={handleClick}>
          {name}
        </p>
      }
      width={240}
      position="right"
      closeOnClickOutside={false}>
      {
        (name === 'add channel') 
          ? <AddChannelOptions />
          : <AddWorkspaceOption />
      }
    </Popover>
  );
};
