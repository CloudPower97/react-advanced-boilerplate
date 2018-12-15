import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'

import App from './App'
import { checkA11y } from '@storybook/addon-a11y'
import { withViewport } from '@storybook/addon-viewport'

storiesOf('Base container', module)
  .addDecorator(withKnobs)
  .addDecorator(checkA11y)
  .addDecorator(withViewport())
  .add('default', () => <App />)
