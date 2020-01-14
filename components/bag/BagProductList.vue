<template>
  <div>
    <div class="py-4 mb-4 border-b border-gray-400 text-xl uppercase">
      Shopping Bag
    </div>
    <div>
      <table class="table-fixed w-full">
        <thead>
          <tr>
            <th class="w-3/5 px-4 py-2 text-sm">Item</th>
            <th class="w-1/10 px-4 py-2 text-sm">Item Price</th>
            <th class="w-1/10 px-4 py-2 text-sm">Quantity</th>
            <th class="w-1/10 px-4 py-2 text-sm">Total Price</th>
            <th class="w-1/10 px-4 py-2 text-sm">Remove</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="border border-l-0 px-4 py-2">
              <div class="flex">
                <img
                  src="https://s7d5.scene7.com/is/image/UrbanOutfitters/43806710_010_b?$browse-lt$"
                  alt=""
                  class="h-auto w-32 mr-5"
                />
                <div class="flex flex-col">
                  <div class="text-sm font-medium mb-1">
                    BDG High-Waisted Mom Jean – Light Wash
                  </div>
                  <div class="text-sm mb-1">Color: Blue</div>
                  <div class="text-sm mb-1">Size: M</div>
                </div>
              </div>
            </td>
            <td class="border text-center px-4 py-2">$59</td>
            <td class="border text-center px-4 py-2">
              <input
                type="number"
                min="1"
                max="10"
                value="1"
                class="w-16 border border-gray-500 text-center"
              />
            </td>
            <td class="border text-center px-4 py-2">$59</td>
            <td class="border text-center px-4 py-2">
              <unicon
                name="trash"
                fill="#f56565"
                width="26"
                height="26"
                class="cursor-pointer"
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
