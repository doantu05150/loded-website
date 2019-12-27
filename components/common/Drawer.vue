<template>
  <div>
    <div id="ldw">
      <div
        id="bbmToggle"
        :style="bgBlur"
        @click="hideDrawer"
        class="h-full fixed z-50 top-0 left-0 overflow-y-auto overflow-x-hidden transition-opacity bg-blur"
      >
        <aside>
          <div>
            <div
              :style="[navContentStyles, drawerDirection]"
              class="h-screen fixed top-0 transition-content overflow-x-hidden pt-4"
            >
              <slot name="drawer-content" />
            </div>
          </div>
        </aside>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    show: {
      type: Boolean,
      required: true,
      default: false
    },
    width: {
      type: Number,
      required: false,
      default: 260
    },
    bgColor: {
      type: String,
      required: false,
      default: '#3b889A'
    },
    position: {
      type: String,
      required: false,
      default: 'left',
      validator: (value) => ['left', 'right'].includes(value)
    }
  },
  computed: {
    drawerDirection() {
      return this.position === 'right' ? { right: 0 } : { left: 0 }
    },
    navContentStyles() {
      return {
        background: this.bgColor,
        width: this.show ? this.width + 'px' : '0px',
        color: '#fff'
      }
    },
    bgBlur() {
      return {
        width: this.show ? '100%' : '0px'
      }
    }
  },
  methods: {
    hideDrawer(e) {
      if (e.target.id === 'bbmToggle') {
        this.$emit('handleToggleDrawer')
      }
    }
  }
}
</script>
