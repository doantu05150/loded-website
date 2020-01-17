<template>
  <div class="mt-2">
    <d-dropdown
      :data="provices"
      @changeValue="changeValue"
      title="Chọn thành phố"
      class="w-full"
    />
    <div class="flex">
      <d-dropdown
        :data="provices"
        @changeValue="changeValue"
        title="Chọn quận huyện"
        class="w-full"
      />
      <div class="w-4" />
      <d-dropdown
        :data="provices"
        @changeValue="changeValue"
        title="Chọn xã/ thị trấn"
        class="w-full"
      />
    </div>
    <div>
      <input
        type="text"
        placeholder="Address"
        class="w-full h-12 px-4 border border-gray-500 rounded-lg focus:outline-none"
      />
    </div>
  </div>
</template>

<script>
import { DDropdown } from '../common'
export default {
  components: {
    'd-dropdown': DDropdown
  },
  data() {
    return {
      proviceSelected: '',
      provices: [
        {
          title: 'Thái Bình'
        },
        {
          title: 'Gia Lai'
        }
      ]
    }
  },
  methods: {
    changeValue(value) {
      this.proviceSelected = value
    }
  }
}
</script>
