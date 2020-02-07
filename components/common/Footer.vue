<template>
  <div>
    <div class="w-3/4 mx-auto text-left pb-12 overflow-hidden">
      <p class="font-bold text-xs sm:text-xl md:text-3xl text-gray-900">
        Women's Clothing - Shop Dresses, Jeans, Dress Pants, Tops & More
      </p>
      <p class="text-xxs sm:text-xs md:text-sm text-gray-800 mb-8">
        Get a wardrobe refresh with cute women's styles from Express. Shop the
        best clothing for women in-store or online for those statement pieces
        and must-have essentials.
      </p>
      <div class="flex flex-col md:flex-row">
        <div class="w-full md:w-1/4 mb-2">
          <font-awesome-icon
            :icon="['fab', 'facebook-square']"
            @click="loginWithFacebook"
            style="color: #4c4c4c; font-size: 2rem"
            class="mr-3"
          />
          <font-awesome-icon
            :icon="['fab', 'instagram']"
            style="color: #4c4c4c; font-size: 2rem"
            class="mr-3"
          />
          <font-awesome-icon
            :icon="['fab', 'twitter']"
            style="color: #4c4c4c; font-size: 2rem"
            class="mr-3"
          />
        </div>
        <div class="flex-1">
          <div class="flex">
            <div class="mr-12">
              <span class="font-bold text-xs md:text-sm">
                Store Locator
              </span>
              <ul>
                <li class="font-medium text-xxs md:text-xs">
                  14A, Quang Trung, Hà Nội
                </li>
                <li class="font-medium text-xxs md:text-xs">
                  55C, Thái Hà, Hà Nội
                </li>
                <li class="font-medium text-xxs md:text-xs">
                  27b, Trần Quốc Toản, Tp.HCM
                </li>
              </ul>
            </div>
            <div>
              <span class="font-bold text-xs md:text-sm">
                Contact Us
              </span>
              <ul>
                <li class="font-medium text-xxs md:text-xs">01234569</li>
                <li class="font-medium text-xxs md:text-xs">loded@gmail.com</li>
                <li class="font-medium text-xxs md:text-xs">
                  Trụ sở chính: 17D, Xuân Diệu, TP.TB
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    async loginWithFacebook() {
      await this.$auth.loginWith('facebook').catch((e) => {
        this.$toast.show('Error Login', { icon: 'fingerprint' })
      })
    }
  }
}
</script>
