const localStorageKeyName = 'recordList';
type Tag = {
  id: string;
  name: string;
}
type TagListModel = {
  data: Tag[]
  fetch: () => Tag[]
  create: (name: string) => string
  save: () => void
}
const tagListModel: TagListModel = {
  data: [],
  create(name) {
    const names =this.data.map(item=>item.name)
    if (names.indexOf(name) >= 0) {return 'duplicated';} else if (name.length > 6) {return 'toolong';}
    this.data.push({id:name,name:name});
    this.save();
    return 'success';
  },
  fetch() {
    this.data = JSON.parse(window.localStorage.getItem(localStorageKeyName) || '[]');
    return this.data;
  },
  save() {
    window.localStorage.setItem(localStorageKeyName, JSON.stringify(this.data));
  }
};
export {tagListModel};