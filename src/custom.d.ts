type RecordItem = {
  tags: string[]
  notes: string
  type: string
  amount: number //数据类型
  createdAt?: Date //类/构造函数
}

type Tag = {
  id: string;
  name: string;
}
type TagListModel = {
  data: Tag[]
  fetch: () => Tag[]
  create: (name: string) => string
  update: (id: string, name: string) => 'success' | 'not_found' | 'duplicated'
  save: () => void
  remove: (id: string) => boolean
}

interface Window {
  tagList: Tag[]
  createTag: (name: string) => void
  removeTag: (id: string) => boolean
  updateTag: (id: string, name: string) => 'success' | 'not_found' | 'duplicated' //等价于TagListModel['update']
  findTag: (id: string) => Tag | undefined
  recordList:RecordItem[]
  createRecord:(record:RecordItem)=> void
}