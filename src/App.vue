<template>
  <div class="box">
    <div class="left">
      <div ref="codeContainer" class="coder-editor"></div>
    </div>
    <div class="right">
      <a-form>
        <a-form-item :label="item.label" v-for="item in configParams" :key="item.label">
          <a-radio-group
            v-model:value="config[item.field]"
            button-style="solid"
            @change="(e) => change({ [item.field]: e.target.value })"
          >
            <a-radio-button :value="v.value" v-for="v in item.list" :key="v">
              {{ v.label }}
            </a-radio-button>
          </a-radio-group>
        </a-form-item>
        <a-form-item label="设置值">
          <a-textarea v-model:value="config.value"></a-textarea>
          <a-button @click="setValue">设置值</a-button>
        </a-form-item>
        <a-form-item>
          <a-button @click="handleFun('getValue', 'info')">获取当前值</a-button>
          <a-button @click="handleFun('focus')">焦点</a-button>
        </a-form-item>
      </a-form>
    </div>
  </div>
</template>

<script setup>
import { Modal } from 'ant-design-vue'
import { ref, onMounted } from 'vue'
import * as monaco from 'monaco-editor'

import { configParams } from './data.js'

let monacoEditor = null
const codeContainer = ref()
const config = ref({
  value: '{"name": "小明", "age": 18}',
  language: 'json',
  theme: 'vs',
  fontSize: '20',
  fontWeight: 'bold',
  renderLineHighlight: 'gutter',
  folding: true,
  foldingStrategy: 'indentation',
  readOnly: false,
  wordWrap: 'on'
})

function init() {
  // 初始化编辑器实例
  monacoEditor = monaco.editor.create(codeContainer.value, config.value)
  monacoEditorBindEvent()
}

function change(option) {
  monacoEditor.updateOptions(option)
}

function handleFun(str, info) {
  if (info) {
    Modal.info({
      title: str,
      content: monacoEditor[str]()
    })
  } else {
    monacoEditor[str]()
  }
}

function monacoEditorBindEvent() {
    // 实时获取编辑器的值
    monacoEditor.onDidChangeModelContent(() => {
      console.log('monacoEditor.getModel()', monacoEditor.getValue())
    })
}

function setValue() {
  monacoEditor.setValue(config.value.value)
}

onMounted(() => {
  init()
})
</script>

<style lang="less" scoped>
.box {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
  .left,
  .right {
    width: 50%;
    flex-shrink: 0;
  }
  .right {
    padding: 20px;
  }
}

.coder-editor {
  width: 100%;
  height: 100%;
}
.ant-btn {
  margin: 4px;;
}
</style>
