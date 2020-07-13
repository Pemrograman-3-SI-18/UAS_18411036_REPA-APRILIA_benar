<template>
  <q-page class="flex flex-">
    <div class="q-pa-md">
      <q-table
        title="Treats"
        :data="data"
        :columns="columns"
        row-key="id"
        :filter="filter"
        :loading="loading"
      >

        <template v-slot:top>
          <span class="text-blue-grey-14">Data Transaksi</span>
          <!--          <q-btn class="q-ml-sm" color="primary" :disable="loading" label="Remove row" @click="removeRow" />-->
          <q-space />
          <q-input borderless dense debounce="300" color="primary" v-model="filter">
            <template v-slot:append>
              <q-icon name="search" />
            </template>
          </q-input>
        </template>

      </q-table>
    </div>
  </q-page>
</template>
<script>
export default {
  data () {
    return {
      loading: false,
      filter: '',
      rowCount: 10,
      columns: [
        {
          name: 'desc',
          required: true,
          label: 'Nama Lengkap',
          align: 'left',
          field: row => row.namalengkap,
          format: val => `${val}`,
          sortable: true
        },
        { name: 'tanggal', align: 'center', label: 'Tanggal Pembayaran', field: 'tanggal', sortable: true },
        { name: 'norek', align: 'center', label: 'No Rek', field: 'norek', sortable: true },
        { name: 'Prodi', label: 'Prodi', align: 'center', field: 'Prodi' },
        { name: 'Total', label: 'Total', align: 'center', field: 'Total' }
      ],
      data: [
        {
          namalengkap: 'Repa Aprilia',
          tanggal: '23 mei 2020',
          norek: 345678987654,
          Prodi: 'Sistem Informasi',
          Total: 150000
        },
        {
          namalengkap: 'Dhanie Erlando Assegaff',
          tanggal: '25 mei 2020',
          norek: 345678987654,
          Prodi: 'Informatika',
          Total: 150000
        }
      ]
    }
  },

  methods: {
    // emulate fetching data from server
    addRow () {
      this.loading = true
      setTimeout(() => {
        const
          index = Math.floor(Math.random() * (this.data.length + 1)),
          row = this.original[Math.floor(Math.random() * this.original.length)]
        if (this.data.length === 0) {
          this.rowCount = 0
        }
        row.id = ++this.rowCount
        const addRow = { ...row } // extend({}, row, { name: `${row.name} (${row.__count})` })
        this.data = [...this.data.slice(0, index), addRow, ...this.data.slice(index)]
        this.loading = false
      }, 500)
    },

    removeRow () {
      this.loading = true
      setTimeout(() => {
        const index = Math.floor(Math.random() * this.data.length)
        this.data = [...this.data.slice(0, index), ...this.data.slice(index + 1)]
        this.loading = false
      }, 500)
    }
  }
}
</script>
