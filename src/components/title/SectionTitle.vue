<template>
  <div :class="['section-wrapper', titleColor, titleStyle]">
    <h3 class="section-container">
      <span class="section-title">{{ title }}</span>
    </h3>
    <hr v-if="['arrow', 'diamond'].includes(shape)"/>
  </div>
</template>
<script>
/**
 * The section title UI Component.
 *
 * Inspired by https://codepen.io/NzNcn/pen/RVKwdL
 * @displayName Section Title
 * @author Le Minh Tri. <br/> Email: <ansidev@gmail.com>
 */
export default {
  name: 'section-title',
  props: {
    /**
     * The title
     */
    title: {
      type: String,
      required: true
    },
    /**
     * The background color.
     * Built in colors: `green`, `orange`, `pink`, `blue`, `red`, `yellow`, `black`
     */
    color: {
      type: String,
      required: false,
      default: 'orange'
    },
    /**
     * The shape
     * Built in shapes: `tab`, `arrow`
     */
    shape: {
      type: String,
      required: false,
      default: 'default'
    }
  },
  data() {
    return {
      builtInColors: ['green', 'orange', 'pink', 'blue', 'red', 'yellow', 'black'],
      builtInStyles: ['tab', 'arrow', 'trapezoid', 'dome', 'diamond'],
    }
  },
  computed: {
    titleColor() {
      return this.builtInColors.includes(this.color) ? `color-${this.color}` : ''
    },
    titleStyle() {
      return this.builtInStyles.includes(this.shape) ? this.shape : ''
    },
    titleBorderRadius() {
      return this.shape !== 'default' ? '' : `border-top-left-radius: ${this.borderRadius}px; border-top-right-radius: ${this.borderRadius}px`
    }
  }
}
</script>
<style lang="scss">
$colors: (
  'green': ('background-color': #00ab03, 'text-color': #fff),
  'orange': ('background-color': #ff5900, 'text-color': #fff),
  'pink': ('background-color': #f90076, 'text-color': #fff),
  'red': ('background-color': #ff1f47, 'text-color': #fff),
  'blue': ('background-color': #0050eb, 'text-color': #fff),
  'yellow': ('background-color': #f9f871, 'text-color': #000),
  'black': ('background-color': #000, 'text-color': #fff),
);
$size: 20px;
$margin: 15px;

.section-wrapper {
  border-bottom-width: 2px;
  border-bottom-style: solid;
  display: block;
  margin-top: $margin;
  margin-bottom: $margin;

  &.arrow, &.diamond {
    margin-bottom: 2 * $margin;
  }

  &.trapezoid .section-container {
    margin-left: $size;
  }

  &.diamond .section-container {
    margin-left: $size;
  }

  // color
  @each $color, $color-data in $colors {
    &.color-#{$color} {
      border-bottom-color: map-get($color-data, 'background-color');

      & .section-container {
        & span {
          background: map-get($color-data, 'background-color');
          color: map-get($color-data, 'text-color');
        }

      }

      &.default .section-title::after {
        display: none;
      }

      &.arrow {
        border-bottom-width: 0;
        & .section-title::after {
          border-top: $size solid transparent;
          border-left-width: $size;
          border-left-style: solid;
          border-left-color: map-get($color-data, 'background-color');
          border-bottom: $size solid transparent;
        }
        hr {
          margin: -1 * $size - 1px 0px $size - 1px 0px;
          border: 1px solid map-get($color-data, 'background-color');
        }
      }

      &.diamond {
        border-bottom-width: 0;
        & .section-title::before {
          border-top: $size solid transparent;
          border-right-width: $size;
          border-right-style: solid;
          border-right-color: map-get($color-data, 'background-color');
          border-bottom: $size solid transparent;
        }
        & .section-title::after {
          border-top: $size solid transparent;
          border-left-width: $size;
          border-left-style: solid;
          border-left-color: map-get($color-data, 'background-color');
          border-bottom: $size solid transparent;
        }
        hr {
          margin: -1 * $size - 1px 0px $size - 1px 0px;
          border: 1px solid map-get($color-data, 'background-color');
        }
      }

      &.dome .section-title {
        border-radius: $size $size 0 0;
      }

      &.tab .section-title::after {
        border-bottom-width: 2 * $size;
        border-bottom-style: solid;
        border-bottom-color: map-get($color-data, 'background-color');
        border-right: $size solid transparent;
      }

      &.trapezoid .section-title::before {
        border-width: 2 * $size $size 0 0;
        border-style: solid;
        border-color: transparent;
        border-right-color: map-get($color-data, 'background-color');
      }

      &.trapezoid .section-title::after {
        border-bottom-width: 2 * $size;
        border-bottom-style: solid;
        border-bottom-color: map-get($color-data, 'background-color');
        border-right: $size solid transparent;
      }
    }
  }

  & .section-container {
    margin: 0;
    line-height: $size;
    display: inline-block;
    text-transform: uppercase;

    & span {
      padding: $size/2 $size $size/2 $size;
      position: relative;
      display: inline-block;
      margin: 0;
    }

    & .section-title::before {
      content: "";
      width: 0;
      height: 0;
      position: absolute;
      top: 0px;
      left: -1 * $size;
    }
    & .section-title::after {
      content: "";
      width: 0;
      height: 0;
      position: absolute;
      top: 0px;
      right: -1 * $size;
    }
  }
}
</style>

<docs>
## Examples

Section Title with color:

```jsx
<section-title title="Section Title with orange background color" color="orange" />
<section-title title="Section Title with green background color" color="green" />
<section-title title="Section Title with pink background color" color="pink" />
<section-title title="Section Title with blue background color" color="blue" />
<section-title title="Section Title with red background color" color="red" />
<section-title title="Section Title with yellow background color" color="yellow" />
<section-title title="Section Title with black background color" color="black" />
<section-title title="Section Title with none background color" color="none" />
```

Section Title with shape:

```jsx
<section-title title="Section Title with arrow style" shape="arrow" />
<section-title title="Section Title with diamond style" shape="diamond" />
<section-title title="Section Title with dome style" shape="dome" />
<section-title title="Section Title with tab style" shape="tab" />
<section-title title="Section Title with trapezoid style" shape="trapezoid" />
```
</docs>
