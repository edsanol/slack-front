import { useEffect, useState } from 'react';
import { Popover } from '@mantine/core';
import { AddChannelOptions } from './AddChannelOptions';
import { useDispatch } from 'react-redux';
import { actionsHiddenScroll } from '../store/actions/actionsChangeState';

export const PopoverAddChannel = () => {
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
        <p type="button" onClick={handleClick}>
          Add channels
        </p>
      }
      width={240}
      position="right"
      closeOnClickOutside={false}>
      <AddChannelOptions />
    </Popover>
  );
};
