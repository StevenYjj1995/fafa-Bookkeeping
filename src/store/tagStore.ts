import createId from '@/lib/createId';

const localStorageKeyName = 'tagList';
const tagStore = {
  //tag store
  tagList: [] as Tag[],
  createTag(name: string): string {
    const names = this.tagList.map(item => item.name);
    if (names.indexOf(name) >= 0) {
      window.alert('标签名重复，请重新输入');
      return 'duplicated';
    }
    const id = createId().toString();
    this.tagList.push({id, name: name});
    this.saveTags();
    window.alert('创建标签成功');
    return 'success';
  },
  removeTag(id: string): boolean {
    let index = -1;
    for (let i = 0; i < this.tagList.length; i++) {
      if (this.tagList[i].id === id) {
        index = i;
        break;
      }
    }
    this.tagList.splice(index, 1);
    this.saveTags();
    return true;
  },
  updateTag(id: string, name: string): string {  //object:Exclude<Tag,'id'>
    const idList = this.tagList.map(item => item.id);
    if (idList.indexOf(id) >= 0) {
      const names = this.tagList.map(item => item.name);
      if (names.indexOf(name) >= 0) {
        return 'duplicated';
      } else {
        const tag = this.tagList.filter(item => item.id === id)[0];
        tag.name = name;
        this.saveTags();
        return 'success';
      }
    } else {
      return 'not_found';
    }
  },
  findTag(id: string): Tag {
    return this.tagList.filter(t => t.id === id)[0];
  },
  saveTags(): void {
    window.localStorage.setItem(localStorageKeyName, JSON.stringify(this.tagList));
  },
  fetchTags(): Tag[] {
    this.tagList = JSON.parse(window.localStorage.getItem(localStorageKeyName) || '[]');
    return this.tagList;
  }
};
tagStore.fetchTags();

export default tagStore;