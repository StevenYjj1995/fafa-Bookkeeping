import clone from '@/lib/clone';

const localStorageKeyName = 'tagList';
const recordListModel = {
  data: [] as RecordItem[],
  create(record: RecordItem): void {
    const record2: RecordItem = clone(record);
    record2.createdAt = new Date();
    this.data.push(record2);
    this.save();
  },
  fetch(): RecordItem[] {
    this.data = JSON.parse(window.localStorage.getItem(localStorageKeyName) || '[]') as RecordItem[];
    return this.data;
  },
  save() {
    window.localStorage.setItem(localStorageKeyName,
      JSON.stringify(this.data));
  }
};
export {recordListModel};