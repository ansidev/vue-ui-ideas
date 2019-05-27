<template>
  <div :class="['section-wrapper', titleColor, titleStyle]">
    <h3 class="section-container">
      <span class="section-text">{{ text }}</span>
    </h3>
  </div>
</template>
<script>
export default {
  props: {
    text: {
      type: String,
      required: true
    },
    color: {
      type: String,
      required: false,
      default: 'orange'
    },
    shape: {
      type: String,
      required: false,
      default: 'default'
    }
  },
  data() {
    return {
      builtInColors: ['green', 'orange', 'pink', 'blue', 'red', 'yellow'],
      builtInStyles: ['tab', 'arrow'],
    }
  },
  computed: {
    titleColor() {
      return this.builtInColors.includes(this.color) ? `color-${this.color}` : this.color
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
);
$size: 20px;

.section-wrapper {
  border-bottom-width: 2px;
  border-bottom-style: solid;
  display: block;
  margin-top: 15px;
  margin-bottom: 15px;

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

      &.default .section-text::after {
        display: none;
      }

      &.tab .section-text::after {
        border-bottom-width: 2 * $size;
        border-bottom-style: solid;
        border-bottom-color: map-get($color-data, 'background-color');
        border-right: $size solid transparent;
      }

      &.arrow {
        border-bottom-width: 0;
        & .section-text::after {
          border-top: $size solid transparent;
          border-left-width: $size;
          border-left-style: solid;
          border-left-color: map-get($color-data, 'background-color');
          border-bottom: $size solid transparent;
        }
      }
    }
  }

  &.rounded {
    & .section-container {
      & span {
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
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

    & .section-text::after {
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
