<template>
  <div class="editor about">
    <editor-header></editor-header>

    <div class="editor__primary">
      <div class="editor__sidebar">
        <div class="editor__sidebar__section">
          <h3 class="editor__sidebar__section-title">About</h3>
          <div class="editor__sidebar__section-item">
            <p>Fonts4dev is created by love on typography and Vuejs</p>
            <br>
            <p>It's a non-commercial project which helps developers find out the best font-face for their code editor.</p>
            <br>
            <p>To become contributor, please visit the repository on <a href="https://github.com/tatthien/fonts4dev" target="_blank">Github</a></p>
            <br>
            <p>Finally, don't hesitate to send your questions or license issues to <a href="mailto:tatthien.contact@gmail.com">tatthien.contact@gmail.com</a>  </p>
          </div>
        </div>
      </div>
      <div class="editor__preview">
        <ul class="codes" style="font-family: 'Fira Code'">
          <li class="line line--code">
            <span class="c c--comment">// How to use Fonts4dev</span>
            <br>
            <br>
            <p>1. Select font, change font-size, line-spacing on the Sidebar area.</p>
            <p>2. Preview your changes.</p>
            <p>3. When you "fall in love" with the font, click on the button "Download Font" to get it.</p>
            <p>4. After installed the font, open your code editor then change its font face.</p>
            <br>
            <span class="c c--comment">// Example: Sublime config</span>
            <br>
            <br>
            <p>1. Go to: Preferences > Settings.</p>
            <p>2. Find the `font_face`, `font_size` and change their value.</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import EditorHeader from './Header.vue'
  export default {
    components: {
      EditorHeader
    }
  }
</script>
