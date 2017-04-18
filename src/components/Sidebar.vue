<template>
  <div class="editor__sidebar">
    <div class="editor__sidebar__section">
      <h3 class="editor__sidebar__section-title">Editor font</h3>

      <div class="editor__sidebar__section-item">
        <label>Primary font</label>
        <select v-model="fontFace">
          <option v-for="font in fonts" :value="font.value">{{ font.name }}</option>
        </select>
      </div>

      <div class="editor__sidebar__section-item">
        <label>Font size</label>
        <input type="number" :min="defaultFontSize" step="1" v-model="fontSize"/>
      </div>

      <div class="editor__sidebar__section-item">
        <label>Line spacing</label>
        <input type="number" min="1.5" step="0.1" v-model="lineSpacing"/>
      </div>

      <div class="editor__sidebar__section-item">
        <a :href="linkDownload" class="editor__button download-font" download v-text="buttonText"></a>
      </div>
    </div>
  </div>
</template>

<script>
  import { bus } from './../helpers/bus'
  import { config } from './../helpers/config'
  import _ from 'lodash'
  export default {
    computed: {
      linkDownload () {
        let font = _.find(this.fonts, { value: this.fontFace })
        return font ? font.link.download : false
      },
      buttonText () {
        if (!this.linkDownload) {
          return 'Already installed'
        } else {
          return 'Download font'
        }
      }
    },
    data () {
      return {
        defaultFontSize: config.DEFAULT_FONT_SIZE,
        fontSize: config.DEFAULT_FONT_SIZE,
        lineSpacing: config.DEFAULT_LINE_SPACING,
        fontFace: config.DEFAULT_FONT_FACE,
        fonts: config.FONTS
      }
    },
    watch: {
      fontSize (newVal, oldVal) {
        bus.emit('font_size', newVal)
      },
      lineSpacing (newVal, oldVal) {
        bus.emit('line_spacing', newVal)
      },
      fontFace (newVal, oldVal) {
        bus.emit('font_face', newVal)
      }
    }
  }
</script>
