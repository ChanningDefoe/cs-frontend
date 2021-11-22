<template>
  <div>
    <div class="container mt-5">
      <div class="row">
        <div class="card col">
          <div class="card-body">
            <div class="d-flex mx-auto mb-3">
              <div>
                <div class="input-group">
                  <div class="input-group-prepend">
                    <span class="input-group-text">Filter</span>
                  </div>
                  <input type="text" class="form-control" v-model="filter" />
                </div>
              </div>
              <div class="ml-auto text-right">
                {{ currentPageStart }} of {{ totalItems }}
              </div>
            </div>
            <b-table
              :items="items"
              :current-page="currentPage"
              :fields="tableFields"
              :perPage="perPage"
              :filter="filter"
              :filter-included-fields="filterFields"
              responsive
            >
              <template v-slot:cell(price_cents)="data">
                <span
                  >{{ data.item.price_cents | convertCentsToLocaleString }}
                </span>
              </template>
              <template v-slot:cell(cost_cents)="data">
                <span
                  >{{ data.item.cost_cents | convertCentsToLocaleString }}
                </span>
              </template>
            </b-table>
            <b-row>
              <b-col md="12" class="mt-3">
                <b-pagination
                  v-model="currentPage"
                  :total-rows="totalItems"
                  :per-page="perPage"
                  first-text="First"
                  prev-text="Prev"
                  next-text="Next"
                  last-text="Last"
                  align="center"
                  class="data-table-pagination"
                ></b-pagination>
              </b-col>
            </b-row>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  middleware: ['auth'],
  async asyncData(ctx) {
    let products = await ctx.$authAxios.get('/api/inventory')

    return {
      items: products.data,
    }
  },
  data() {
    return {
      tableFields: [
        { key: 'product_id', thClass: 'd-none', tdClass: 'd-none' },
        {
          key: 'product.product_name',
          label: 'Product Name',
          sortable: true,
          sortDirection: 'desc',
        },
        { key: 'sku', label: 'SKU', sortable: true, sortDirection: 'desc' },
        {
          key: 'quantity',
          label: 'Quantity',
          sortable: true,
          sortDirection: 'desc',
        },
        {
          key: 'color',
          label: 'Color',
          sortable: true,
          sortDirection: 'desc',
        },
        {
          key: 'size',
          label: 'Size',
          sortable: true,
          sortDirection: 'desc',
        },
        {
          key: 'price_cents',
          label: 'Price',
          sortable: true,
          sortDirection: 'desc',
        },
        {
          key: 'cost_cents',
          label: 'Cost',
          sortable: true,
          sortDirection: 'desc',
        },
      ],
      totalRows: 10,
      currentPage: 1,
      perPage: 10,
      filter: '',
      filterFields: ['sku', 'product_id'],
    }
  },
  computed: {
    currentPageStart() {
      return this.currentPage * this.perPage
    },
    totalItems() {
      return this.items.length
    },
  },
  filters: {
    convertCentsToLocaleString: function (value) {
      value = value / 100
      return value.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD',
      })
    },
  },
}
</script>

<style lang="scss" scoped>
</style>