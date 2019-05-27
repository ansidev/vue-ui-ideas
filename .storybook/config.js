import { configure } from '@storybook/vue';

function loadComponents() {
  require('../components/index.js');
  // You can require as many stories as you need.
}

configure(loadComponents, module);
