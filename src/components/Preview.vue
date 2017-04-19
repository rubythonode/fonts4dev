<template>
  <div class="editor__preview">
    <ul class="codes" :style="styles">
      <li class="line line--code">
        <span class="c--comment">// Full alphabet & signs</span>
      </li>
      <li class="line">abcdefghijklmnopqrstuvwxyz 0123456789 (){}[]</li>
      <li class="line">ABCDEFGHIJKLMNOPQRSTUVWXYZ +-*/= .,;:!? #&$%@|^</li>
      <li class="line">The quick brown fox jumps over the lazy dog</li>
      <li><br></li>
      <li class="line line--code"><span class="c--comment">// Javascript</span></li>
      <li class="line line--code">
        <span class="c--constant">const</span> <span class="c--variable">hello</span> <span class="c--operator">=</span> <span class="c--constant">function</span> (<span class="c--args">name</span>) {
      </li>
      <li class="line line--code">
        &nbsp;&nbsp;<span class="c--constant">console</span>.<span class="c--constant">log</span> (<span class="c--string">'Hello '</span> <span class="c--operator">+</span> name <span class="c--operator">+</span> <span class="c--string">'!'</span>);
      </li>
      <li class="line line--code">
        }
      </li>
      <li><br></li>
      <li class="line line--code">
        <span class="c--comment">// Sublime config</span>
      </li>
      <li class="line line--code">
        <span class="c--comment">// Open: Preferences > Settings</span>
      </li>
      <li class="line line--code">
        <span class="c--comment">// Find the `font_face`, `font_size` and change their value</span>
      </li>
      <li class="line line--code">{</li>
      <li class="line line--code">&nbsp;&nbsp;"font_face": "{{ font }}"</li>
      <li class="line line--code">&nbsp;&nbsp;"font_size": {{ fontSize }}</li>
      <li class="line line--code">}</li>
    </ul>
  </div>
</template>

<script>
  export default {
    props: ['font', 'fontSize', 'lineSpacing'],
    computed: {
      styles () {
        return {
          'font-family': this.font,
          'font-size': this.fontSize + 'px',
          'line-height': this.lineSpacing
        }
      }
    }
  }
</script>
