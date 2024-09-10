export const configParams = [
  {
    label: '主题',
    field: 'theme',
    list: [
      { label: '默认主题', value: 'vs' },
      { label: '深色主题', value: 'vs-dark' },
      { label: '高对比度黑色主题', value: 'hc-black' }
    ]
  },
  {
    label: '字号',
    field: 'fontSize',
    list: [
      { label: '20px', value: 20 },
      { label: '30px', value: 30 },
      { label: '40px', value: 40 }
    ]
  },
  {
    label: '字重',
    field: 'fontWeight',
    list: [
      { label: 'normal', value: 'normal' },
      { label: 'bold', value: 'bold' }
    ]
  },
  {
    label: '高亮显示方式',
    field: 'renderLineHighlight',
    list: [
      { label: '整行高亮', value: 'all' },
      { label: '仅高亮行号区域', value: 'line' },
      { label: '仅高亮行号旁的空白区域', value: 'gutter' },
      { label: '不进行行高亮', value: 'none' }
    ]
  },
  {
    label: '是否折叠',
    field: 'folding',
    list: [
      { label: '是', value: true },
      { label: '否', value: false }
    ]
  },
  {
    label: '折叠方式',
    field: 'foldingStrategy',
    list: [
      { label: '自动', value: 'auto' },
      { label: '缩进风格', value: 'indentation' }
    ]
  },
  {
    label: '是否只读',
    field: 'readOnly',
    list: [
      { label: '是', value: true },
      { label: '否', value: false }
    ]
  },
  {
    label: '自动换行',
    field: 'wordWrap',
    list: [
      { label: '自动换行', value: 'on' },
      { label: '禁用自动换行', value: 'off' }
    ]
  }
]
