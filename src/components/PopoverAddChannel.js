/* import { useState } from 'react';
import { Popover, Text } from '@mantine/core';
import { AddChannelOptions } from './AddChannelOptions';

export const PopoverAddChannel = () => {
  const [addChannel, setAddChannel] = useState(false);
  return (
    <Popover
      opened={addChannel}
      onClose={() => setAddChannel(false)}
      target={
        <div className="add-channel-aside">
          <p type="button" onClick={() => setAddChannel((o) => !o)}>
            Add channels
          </p>
        </div>
      }
      width={100}
      placement="end"
      gutter={6}
      position="right"
      transition="pop-top-right"
      withArrow>
      <Text size="sm">
        <AddChannelOptions />
      </Text>
    </Popover>
  );
};
 */
import { useState } from 'react';
import { Popover, Text } from '@mantine/core';
import { AddChannelOptions } from './AddChannelOptions';

export const PopoverAddChannel = () => {
  const [opened, setOpened] = useState(false);
  return (
    <Popover
      opened={opened}
      onClose={() => setOpened(false)}
      target={
        <p type="button" onClick={() => setOpened((o) => !o)}>
          Add channels
        </p>
      }
      width={180}
      position="right">
      <AddChannelOptions />
    </Popover>
  );
};
