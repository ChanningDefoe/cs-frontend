<template>
  <div>
    <div class="container mt-5">
      <div class="row">
        <div class="card col">
          <div class="card-body">
            <b-table
              :items="items"
              :current-page="currentPage"
              :fields="tableFields"
              :perPage="perPage"
              responsive
            >
            </b-table>
            <b-row>
              <b-col md="12" class="mt-3">
                <b-pagination
                  v-model="currentPage"
                  :total-rows="items.length"
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
    let products = await ctx.$authAxios.get('/api/products')

    return {
      items: products.data,
    }
  },
  data() {
    return {
      tableFields: [
        {
          key: 'product_name',
          label: 'Name',
          sortable: true,
          sortDirection: 'desc',
        },
        { key: 'style', label: 'Style', sortable: true, sortDirection: 'desc' },
        {
          key: 'brand',
          label: 'Brand',
          sortable: true,
          sortDirection: 'desc',
        },
      ],
      totalRows: 10,
      currentPage: 1,
      perPage: 10,
    }
  },
}
</script>

<style lang="scss" scoped>
</style>