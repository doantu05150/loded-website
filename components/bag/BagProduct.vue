<template>
  <div>
    <div class="flex flex-col flex-1 py-3">
      <div class="t-header hidden sm:flex text-center font-medium">
        <div class="w-3/5 px-4 py-2 text-xs">Item</div>
        <div class="w-1/10 px-4 py-2 text-xs">Item Price</div>
        <div class="w-1/10 px-4 py-2 text-xs">Quantity</div>
        <div class="w-1/10 px-4 py-2 text-xs">Total Price</div>
        <div class="w-1/10 px-4 py-2 text-xs">Remove</div>
      </div>
      <div class="t-data flex flex-col sm:flex-row border">
        <div class="w-full sm:w-3/5 px-4 py-2 text-xs">
          <div class="px-4 py-2">
            <div class="flex">
              <img
                src="https://s7d5.scene7.com/is/image/UrbanOutfitters/43806710_010_b?$browse-lt$"
                alt=""
                class="h-auto w-16 sm:w-24 mr-5"
              />
              <div class="flex flex-col flex-1">
                <div class="text-xs sm:text-sm font-medium mb-1">
                  BDG High-Waisted Mom Jean – Light Wash
                </div>
                <div class="text-xs sm:text-sm mb-1">Color: Blue</div>
                <div class="text-xs sm:text-sm mb-1">Size: M</div>
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-1 px-4 py-2">
          <div class="w-1/4 text-xs border-r border-l">
            <div class="h-full text-center px-4 py-2">$59</div>
          </div>
          <div class="w-1/4 text-xs border-r">
            <div class="h-full text-center px-4 py-2">
              <input
                type="number"
                min="1"
                max="10"
                value="1"
                class="border border-gray-500 text-center"
              />
            </div>
          </div>
          <div class="w-1/4 text-xs border-r">
            <div class="h-full text-center px-4 py-2">$59</div>
          </div>
          <div class="w-1/4 text-xs">
            <div class="h-full text-center px-4 py-2">
              <unicon
                name="trash"
                fill="#f56565"
                width="26"
                height="26"
                class="cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
