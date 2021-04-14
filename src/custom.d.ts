type RootState = {
  recordList: RecordItem[],
  createRecordListError: Error | null,
  createTagError: Error | null,
  tagList: Tag[],
  currentTag?: Tag
}

type RecordItem = {
  tags: Tag[]
  notes: string
  type: string
  amount: number //数据类型
  createdAt?: string //类/构造函数
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

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Window {
}