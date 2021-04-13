<template>
  <Layout class-prefix="layout">
    <!--    {{ recordList }}-->
    <NumberPad @update:value="onUpdateAmount" @submit="saveRecord"/>
    <Types :value.sync="record.type"/>
    <div class="notes">
      <FormItem @update:value="onUpdateNotes" field-name="备注" placeholder="在这里输入备注"/>
    </div>
    <Tags :data-source.sync="tags" @update:value="onUpdateTags"/>
  </Layout>
</template>
<script lang="ts">
import Vue from 'vue';
import NumberPad from '@/components/Money/NumberPad.vue';
import Types from '@/components/Money/Types.vue';
import FormItem from '@/components/Money/FormItem.vue';
import Tags from '@/components/Money/Tags.vue';
import {Component, Watch} from 'vue-property-decorator';
import {recordListModel} from '@/models/recordListModel';
//在ts中用js，需要用require导入
// const {model} =require('@/model.ts')
// const recordList:Record[] = model.fetch()

const recordList = recordListModel.fetch();

window.localStorage.setItem('version', '0.0.1 ');


@Component({
  components: {FormItem, Tags, Notes: FormItem, Types, NumberPad},
})
export default class Money extends Vue {
  tags = window.tagList;
  // eslint-disable-next-line no-undef
  recordList: RecordItem[] = recordList;
  // eslint-disable-next-line no-undef
  record: RecordItem = {
    tags: [], notes: '', type: '-', amount: 0
  };

  onUpdateTags(value: string[]): void {
    this.record.tags = value;
  }

  onUpdateNotes(value: string): void {
    this.record.notes = value;
  }

  onUpdateAmount(value: string): void {
    this.record.amount = parseFloat(value);
  }

  saveRecord(): void {
    recordListModel.create(this.record);
  }

  @Watch('recordList')
  onRecordListChange(): void {
    recordListModel.save();
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
