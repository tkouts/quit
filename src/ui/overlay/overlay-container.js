export default {
  data () {
    return {
      activeOverlay: null
    }
  },
  methods: {
    closeOverlay (evt = null) {
      // console.log(this)
      if (this.activeOverlay) {
        const target = evt ? evt.target : null
        if (!target || !this.activeOverlay.contains(target)) {
          this.activeOverlay.open = false
        }
      }
    }
  },
  watch: {
    activeOverlay (newOverlay, oldOverlay) {
      if (oldOverlay) {
        const old = oldOverlay
        old.open = false
      }
    }
  }
}