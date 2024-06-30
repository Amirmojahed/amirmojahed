const breakPoints = require('~/config/breakPoints')

export default {
  data() {
    return {
      isSmDown: false,
      isMdDown: false,
      isLargeDown: false,
      isXlDown: false,
      isXxlDown: false,
    }
  },

  mounted() {
    this.resizeEvents()
    window.addEventListener('resize', this.resizeEvents)
  },
  destroyed() {
    window.removeEventListener('resize', this.resizeEvents)
  },
  filters: {
    separateByComma(num) {
      return num
        .toString()
        .replaceAll(',', '')
        .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    },
  },
  methods: {
    textLimit(text, limitation) {
      if (text.length > limitation) {
        return text.substring(0, limitation) + '...'
      } else {
        return text
      }
    },
    separateByComma(num) {
      return num
        .toString()
        .replaceAll(',', '')
        .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    },
    onLargeDown() {
      const width = Math.max(
        document.documentElement.clientWidth,
        window.innerWidth || 0
      )
      const lg = +breakPoints.lg.min.replace('px', '')
      this.isLargeDown = width < lg
    },
    onMdDown() {
      const width = Math.max(
        document.documentElement.clientWidth,
        window.innerWidth || 0
      )
      const md = +breakPoints.md.min.replace('px', '')
      this.isMdDown = width < md
    },
    onXlDown() {
      const width = Math.max(
        document.documentElement.clientWidth,
        window.innerWidth || 0
      )
      const xl = +breakPoints.xl.min.replace('px', '')
      this.isXlDown = width < xl
    },
    onSmDown() {
      const width = Math.max(
        document.documentElement.clientWidth,
        window.innerWidth || 0
      )
      const sm = +breakPoints.sm.min.replace('px', '')
      this.isSmDown = width < sm
    },
    onXxlUp() {
      const width = Math.max(
        document.documentElement.clientWidth,
        window.innerWidth || 0
      )
      const xxl = +breakPoints.xxl.min.replace('px', '')
      this.isXxlDown = width <= xxl
    },
    appHeight() {
      // for IOS devices that can not optimize 100vh
      const doc = document.documentElement
      doc.style.setProperty('--app-height', `${window.innerHeight}px`)
    },
    formatNumber(num) {
      return num
        .toString()
        .replaceAll(',', '')
        .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    },
    resizeEvents() {
      this.onLargeDown()
      this.onXxlUp()
      this.onMdDown()
      this.onXlDown()
      this.onSmDown()
      this.appHeight()
    },
  },
}
