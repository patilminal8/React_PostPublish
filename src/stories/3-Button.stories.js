import React from 'react';

import Button from '../components/Button/Button';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Button',
  component: Button,
};

export const button = () =>   <button onClick={action('click')}>
Hello Button
</button>;
