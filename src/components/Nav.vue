<template>
  <nav>
    <router-link to="/money" class="item" active-class="selected">
      <Icon name="money"/>
      记账
    </router-link>

    <router-link to="/labels" class="item" active-class="selected">
      <Icon name="labels"/>
      标签
    </router-link>

    <router-link to="/statistics" class="item" active-class="selected">
      <Icon name="statistics"/>
      统计
    </router-link>
  </nav>
</template>

<script lang="ts">
// eslint-disable-next-line no-undef
let importAll = (requireContext: __WebpackModuleApi.RequireContext) => requireContext.keys().forEach(requireContext);
try {
  importAll(require.context('../assets/icons', true, /\.svg$/));
} catch (err) {
  console.log(err);
}
export default {
  name: 'Nav',
};
</script>

<style lang="scss" scoped>
@import "~@/assets/styles/helper.scss";

nav {
  @extend %outerShadow;
  @extend %innerShadow;
  display: flex;
  flex-direction: row;
  font-size: 12px;

  > .item {
    padding: 2px 0;
    width: 33.33333%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: rgb(121, 121, 121);

    .icon {
      padding-top: 5px;
      width: 32px;
      height: 32px;
    }
  }

  > .item.selected {
    color: black;
    background-color: $color-highlight;

  }
}

</style>