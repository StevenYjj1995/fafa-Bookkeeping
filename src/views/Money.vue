<template>
  <Layout class-prefix="layout">
    <NumberPad :value.sync="record.amount" @submit="saveRecord"/>
    <Tabs :data-source="recordTypeList"
          :value.sync="record.type"/>
    <div class="notes">
      <FormItem field-name="备注" placeholder="在这里输入备注" :value.sync="record.notes"/>
    </div>
    <Tags @update:value="record.tags = $event"/>
  </Layout>
</template>
<script lang="ts">
import Vue from 'vue';
import NumberPad from '@/components/Money/NumberPad.vue';
import FormItem from '@/components/Money/FormItem.vue';
import Tags from '@/components/Money/Tags.vue';
import {Component} from 'vue-property-decorator';
import Button from '@/components/Button.vue';
import Tabs from '@/components/Tabs.vue';
import recordTypeList from '@/constants/recordTypeList';
//在ts中用js，需要用require导入
// const {model} =require('@/model.ts')
// const recordList:Record[] = model.fetch()
window.localStorage.setItem('version', '0.0.1 ');
@Component({
  components: {Tabs, Button, FormItem, Tags, Notes: FormItem, NumberPad},
})
export default class Money extends Vue {
  recordTypeList = recordTypeList;

  get recordList() {
    return this.$store.state.recordList;
  }

  // eslint-disable-next-line no-undef
  record: RecordItem = {
    tags: [], notes: '', type: '-', amount: 0
  };

  created() {
    this.$store.commit('fetchRecords');
  }

  saveRecord() {
    if (this.record.tags.length === 0 || !this.record.tags) {
      return window.alert('请选择标签');
    }
    if (this.record.amount === 0 || !this.record.amount) {
      return window.alert('什么都没写呀，请输入金额后保存');
    }
    if (this.$store.state.createRecordError === null) {
      window.alert('已保存');
    }
    this.$store.commit('createRecord', this.record);
    this.record.notes = '';
    this.record.amount = 0;
  }
}
</script>
<style lang="scss">
.layout-content {
  display: flex;
  flex-direction: column-reverse;
}

.notes {
  padding: 12px 0;
}
</style>
