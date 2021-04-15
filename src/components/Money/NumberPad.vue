<template>
  <div class="numberPad">
    <div class="output">{{ output }}</div>
    <div class="buttons">
      <button @click="inputContent">1</button>
      <button @click="inputContent">2</button>
      <button @click="inputContent">3</button>
      <button @click="remove">
        <Icon name="backspace"/>
      </button>
      <button @click="inputContent">4</button>
      <button @click="inputContent">5</button>
      <button @click="inputContent">6</button>
      <button @click="clear">清空</button>
      <button @click="inputContent">7</button>
      <button @click="inputContent">8</button>
      <button @click="inputContent">9</button>
      <button class="ok" @click="ok">OK</button>
      <button class="zero" @click="inputContent">0</button>
      <button class="point" @click="inputContent">.</button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component, Prop, Watch} from 'vue-property-decorator';

@Component
export default class NumberPad extends Vue {
  @Prop(Number) value!: number;


  @Watch('value')
  onValueChanged(value: number): void {
    this.output = value.toString();
  }

  output = this.value.toString();

  inputContent(event: MouseEvent): void {
    const button = (event.target as HTMLButtonElement);
    const input = button.textContent as string; //或使用!
    if (this.output.length === 16) {return;}
    if (this.output === '0') {
      if ('0123456789'.indexOf(input) >= 0) {
        this.output = input;
      } else {
        this.output += input;
      }
      return;
    }
    if (this.output.indexOf('.') >= 0 && input === '.') {return;}
    this.output += input;
  }

  remove(): void {
    if (this.output.length === 1) {
      this.output = '0';
    } else {
      this.output = this.output.slice(0, -1);
    }

  }

  clear(): void {
    this.output = '0';
  }

  ok(): void {
    this.$emit('update:value', parseFloat(this.output));
    this.$emit('submit', parseFloat(this.output));
    this.output = this.value.toString();
  }
}
</script>

<style lang="scss" scoped>
@import "~@/assets/styles/helper.scss";

.numberPad {
  .output {
    @extend %clearFix;
    @extend %innerShadow;
    font-size: 36px;
    font-family: Consolas, monospace;
    height: 72px;
    line-height: 72px;
    text-align: right;
    padding-right: 16px;
  }

  .icon {
    width: 24px;
    height: 24px;
    margin-top: 3px;
  }

  .buttons {
    @extend %clearFix;

    > button {
      width: 25%;
      height: 64px;
      float: left;
      background: rgb(242, 242, 242);
      position: relative;
      border: none;

      &.ok {
        height: 64*2px;
        float: right;
      }

      &.zero {
        width: 25*2%;
      }

      &.point {
        border-bottom: 1px solid rgb(242, 242, 242);
      }

      &:active {
        background-color: rgb(225, 225, 225);
      }

      &:nth-child(12) {
        background: rgb(250, 217, 86)
      }
    }

    > button::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 400%;
      height: 400%;
      box-sizing: border-box;
      border-left: 1px solid rgb(201, 201, 201);
      border-top: 1px solid rgb(201, 201, 201);
      border-right: 1px solid rgb(201, 201, 201);
      transform-origin: 0 0;
      transform: scale(0.25);
    }
  }
}
</style>