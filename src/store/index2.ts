import {recordListModel} from '@/models/recordListModel';
import {tagListModel} from '@/models/tagListModel';

const store = {
//record store
  recordList: recordListModel.fetch(),
  createRecord: (record: RecordItem) => recordListModel.create(record),
  //1全局变量太多
  //2严重依赖window
  //tag store
  tagList: tagListModel.fetch(),
  createTag: (name: string) => {
    const message = tagListModel.create(name);
    if (message === 'duplicated') {
      window.alert('标签名重复，请重新输入');
    } else if (message === 'success') {
      window.alert('创建标签成功');
    }

  },
  removeTag: (id: string) => {
    return tagListModel.remove(id);
  },
  updateTag: (id: string, name: string) => {  //object:Exclude<Tag,'id'>
    return tagListModel.update(id, name);
  },
  findTag (id: string) {
    return this.tagList.filter(t => t.id === id)[0];
  }
};

export default store