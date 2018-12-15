import { addDecorator, configure } from '@storybook/react'
import { withOptions } from '@storybook/addon-options'
import { withInfo } from '@storybook/addon-info'
import '../src/i18n'

const getStories = require.context('../src', true, /\.stories\.js$/)

addDecorator(withInfo)
addDecorator(
  withOptions({
    name: 'React Advanced Boilerplate',
    url: 'https://github.com/CloudPower97/react-advanced-boilerplate',
  })
)

function loadStories() {
  getStories.keys().forEach(filename => getStories(filename))
}

configure(loadStories, module)
