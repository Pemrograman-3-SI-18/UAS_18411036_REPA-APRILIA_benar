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
          <q-btn color="teal" :disable="loading" label="Edit "  />
<!--          <q-btn class="q-ml-sm" color="primary" :disable="loading" label="Remove row" @click="removeRow" />-->
          <q-space />
          <q-input borderless dense debounce="300" color="primary" v-model="filter">
            <template v-slot:append>
              <q-icon name="search" />
            </template>
          </q-input>
        </template>
        <template v-slot:body="props">
          <q-tr :props="props">
            <q-td key="userName" :props="props">
              {{ props.row.userName }}
            </q-td>
            <q-td key="namaLengkap" :props="props">{{ props.row.namaLengkap }}</q-td>
            <q-td key="TTL" :props="props">{{ props.row.TTL }}</q-td>
            <q-td key="jenisKelamin" :props="props">{{ props.row.jenisKelamin }}</q-td>
            <q-td key="NIK" :props="props">{{ props.row.NIK }}</q-td>
            <q-td key="Prodi" :props="props">{{ props.row.Prodi }}</q-td>
            <q-td key="namaAyah" :props="props">{{ props.row.namaAyah }}</q-td>
            <q-td key="pekerjaanAyah" :props="props">{{ props.row.pekerjaanAyah }}</q-td>
            <q-td key="namaIbu" :props="props">{{ props.row.namaIbu }}</q-td>
            <q-td key="pekerjaanIbu" :props="props">{{ props.row.pekerjaanIbu }}</q-td>
            <q-td key="jumlahSaudara" :props="props">{{ props.row.jumlahSaudara }}</q-td>
            <q-td key="Tanggungan" :props="props">{{ props.row.Tanggungan }}</q-td>
            <q-td key="namaSMA" :props="props">{{ props.row.namaSMA }}</q-td>
            <q-td key="AlamatSMA" :props="props">{{ props.row.AlamatSMA }}</q-td>
            <q-td key="Jurusan" :props="props">{{ props.row.Jurusan }}</q-td>
            <q-td key="foto" :props="props">
              <q-img :src="baseUrl + props.row.foto" style="width: 50px; height: 50px"/>
            </q-td>
            <q-td key="action" :props="props">
              <div class="justify-center q-gutter-x-xs">
                <q-btn color="teal"
                       dense size="sm"
                       class="q-px-xs"
                       icon="edit"
                       @click="edit(props.row.userName)"
                       label="Edit"></q-btn>
                <q-btn
                  color="red"
                  dense
                  size="sm"
                  @click="hapusDataKuliah(props.row._id)"
                  class="q-px-xs"
                  icon="delete"
                  label="Hapus"></q-btn>
              </div>
            </q-td>
          </q-tr>
        </template>
      </q-table>
    </div>
  </q-page>
</template>

<script>
export default {
  data () {
    return {
      baseUrl: 'http://localhost:5050/foto/',
      loading: false,
      filter: '',
      rowCount: 10,
      columns: [
        {
          name: 'userName',
          required: true,
          label: 'User Name',
          align: 'left',
          field: row => row.userName,
          format: val => `${val}`,
          sortable: true
        },
        { name: 'namaLengkap', align: 'center', label: 'Nama Lengkap', field: 'namaLengkap', sortable: true },
        { name: 'TTL', align: 'center', label: 'Tempat Tanggal lahir', field: 'TTL', sortable: true },
        { name: 'jenisKelamin', label: 'Jenis Kelamin', align: 'center', field: 'jenisKelamin' },
        { name: 'NIK', label: 'NIK', align: 'center', field: 'NIK' },
        { name: 'Prodi', label: 'prodi', align: 'center', field: 'Prodi' },
        { name: 'namaAyah', label: 'Nama Ayah', align: 'center', field: 'namaAyah' },
        { name: 'pekerjaanAyah', label: 'Pekerjaan Ayah', align: 'center', field: 'pekerjaanAyah' },
        { name: 'namaIbu', label: 'Nama Ibun', align: 'center', field: 'namaIbu' },
        { name: 'pekerjaanIbu', label: 'pekerjaan Ibu', align: 'center', field: 'pekerjaanIbu' },
        { name: 'jumlahSaudara', label: 'Jumlah Saudara', align: 'center', field: 'jumlahSaudara' },
        { name: 'Tanggungan', label: 'Tanggungan Keluarga', align: 'center', field: 'Tanggungan' },
        { name: 'namaSMA', label: 'Nama SMA/SMK', align: 'center', field: 'namaSMA' },
        { name: 'AlamatSMA', label: 'alamat SMA', align: 'center', field: 'AlamatSMA' },
        { name: 'Jurusan', label: 'Jurusan', align: 'center', field: 'Jurusan' },
        { name: 'foto', label: 'foto', align: 'center', field: 'foto' },
        { name: 'action', align: 'center', label: 'Action', field: 'action', sortable: true }
      ],
      data: []
    }
  },

  methods: {
    // emulate fetching data from server
    getdatakuliah () {
      this.$axios.get('/kuliah/datakuliah')
        .then((res) => {
          this.data = res.data.data
        })
    },
    hapusDataKuliah (id) {
      this.$axios.delete('/kuliah/hapus/' + id)
        .then(() => {
          this.$q.notify({
            color: 'positive',
            message: 'berhasil menghapus data'
          })
          this.getdatakuliah()
        })
    },
    edit (userName) {
      this.$router.push('/editdatakuliah/' + userName)
    }
  },
  mounted () {
    this.getdatakuliah()
  }
}
</script>
