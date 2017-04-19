<template>
  <div class="editor">
    <editor-header></editor-header>
    <div class="editor__primary">
      <sidebar></sidebar>
      <preview :font-name="fontName" :font-face="fontFace" :font-size="fontSize" :line-spacing="lineSpacing"></preview>
    </div>
  </div>
</template>

<script>
  import EditorHeader from './Header.vue'
  import Sidebar from './Sidebar.vue'
  import Preview from './Preview.vue'
  import { bus } from './../helpers/bus'
  import { config } from './../helpers/config'
  import _ from 'lodash'
  export default {
    components: {
      EditorHeader,
      Sidebar,
      Preview
    },
    computed: {
      fontName () {
        let font = _.find(config.FONTS, { value: this.fontSelected })
        return font ? font.name : 'Fira Code'
      },
      fontFace () {
        let font = _.find(config.FONTS, { value: this.fontSelected })
        return font ? font.font_face : 'Fira Code'
      }
    },
    data () {
      return {
        fontSelected: config.DEFAULT_FONT_FACE,
        fontSize: config.DEFAULT_FONT_SIZE,
        lineSpacing: config.DEFAULT_LINE_SPACING
      }
    },
    created () {
      bus.on('font_size', (value) => {
        this.fontSize = value
      })
      bus.on('line_spacing', (value) => {
        this.lineSpacing = value
      })
      bus.on('font_face', (value) => {
        this.fontSelected = value
      })

      window.addEventListener('resize', this.changeEditorHeight)
    },
    mounted () {
      this.changeEditorHeight()
    },
    methods: {
      changeEditorHeight () {
        console.log('1')
        var padding = 200
        if (window.innerHeight <= 768) {
          padding = 100
        }

        var editor = document.getElementsByClassName('editor')[0]
        editor.style.height = window.innerHeight - padding + 'px'
      }
    }
  }
</script>
