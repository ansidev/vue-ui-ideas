import { storiesOf } from '@storybook/vue';
import SectionTitle from './titles/SectionTitle.vue';

storiesOf('Title', module)
  .add('Section Title with color', () => ({
    components: { SectionTitle },
    template: `<div>
      <section-title text="Section Title with orange background color" color="orange" />
      <section-title text="Section Title with green background color" color="green" />
      <section-title text="Section Title with pink background color" color="pink" />
      <section-title text="Section Title with blue background color" color="blue" />
      <section-title text="Section Title with red background color" color="red" />
      <section-title text="Section Title with yellow background color" color="yellow" />
    </div>`
  }))
  .add('Section Title with shape', () => ({
    components: { SectionTitle },
    template: `<div>
      <section-title text="Section Title with tab style" shape="tab" />
      <section-title text="Section Title with arrow style" shape="arrow" />
    </div>`
  }))
  .add('Section Title with border radius', () => ({
    components: { SectionTitle },
    template: `<div>
      <section-title text="Section Title with default style" :border-radius="5" />
      <section-title text="Section Title with tab style" shape="tab" :border-radius="5" />
      <section-title text="Section Title with arrow style" shape="arrow" :border-radius="5" />
    </div>`
  }))
;
