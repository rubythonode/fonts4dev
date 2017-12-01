import Vue from 'vue'
import Hello from '@/components/About'

describe('About.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Hello)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.about h3').textContent)
      .to.equal('About')
  })
})
