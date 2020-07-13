<template>
  <q-page padding class="items-center-justify-center bg-grey-3">
    <q-card flat class="bg-white q-pa-md">
      <span class="text-h5 text-weight-light q-pa-md">
        <span class="text-blue-grey-14">edit data  </span>
      </span>
      <div class="q-pa-md">
        <q-form
          @submit="onSubmit"
          class="q-gutter-md"
        >
          <q-input
            label="User Name "
            lazy-rules
            color="teal"
            v-model="form.userName"
            :rules="[
              val => val !== null && val !=='' || 'Data tidak boleh kosong']">
            <template v-slot:append>
              <q-icon name="dns"/>
            </template>
          </q-input>
          <q-input
            label="Nama Lengkap "
            lazy-rules
            v-model="form.namaLengkap"
            :rules="[
              val => val !== null && val !=='' || 'Data tidak boleh kosong']">
            <template v-slot:append>
              <q-icon name="person"/>
            </template>
          </q-input>
          <q-input
            label="Tempat Tanggal Lahir"
            lazy-rules
            v-model="form.TTL"
            :rules="[
              val => val !== null && val !=='' || 'Data tidak boleh kosong']">
            <template v-slot:append>
              <q-icon name="calender"/>
            </template>
          </q-input>
          <q-input
            label="Jenis Kelamin"
            lazy-rules
            v-model="form.jenisKelamin"
            :rules="[
              val => val !== null && val !=='' || 'Data tidak boleh kosong']">
            <template v-slot:append>
              <q-icon name="person"/>
            </template>
          </q-input>
          <q-input
            label="NIK"
            lazy-rules
            v-model="form.NIK"
            :rules="[
              val => val !== null && val !=='' || 'Data tidak boleh kosong']">
            <template v-slot:append>
              <q-icon name="number"/>
            </template>
          </q-input>
          <q-input
            label="Prodi "
            lazy-rules
            v-model="form.Prodi"
            :rules="[
              val => val !== null && val !=='' || 'Data tidak boleh kosong']">
            <template v-slot:append>
              <q-icon name="person"/>
            </template>
          </q-input>
          <q-input
            label="Nama Ayah"
            lazy-rules
            v-model="form.namaAyah"
            :rules="[
              val => val !== null && val !=='' || 'Data tidak boleh kosong']">
            <template v-slot:append>
              <q-icon name="person"/>
            </template>
          </q-input>
          <q-input
            label="Pekerjaan Ayah "
            lazy-rules
            v-model="form.pekerjaanAyah"
            :rules="[
              val => val !== null && val !=='' || 'Data tidak boleh kosong']">
            <template v-slot:append>
              <q-icon name="person"/>
            </template>
          </q-input>
          <q-input
            label="Nama Ibu "
            lazy-rules
            v-model="form.namaIbu"
            :rules="[
              val => val !== null && val !=='' || 'Data tidak boleh kosong']">
            <template v-slot:append>
              <q-icon name="person"/>
            </template>
          </q-input>
          <q-input
            label="Pekerjaan Ibu "
            v-model="form.pekerjaanIbu"
            lazy-rules
            :rules="[
              val => val !== null && val !=='' || 'Data tidak boleh kosong']">
            <template v-slot:append>
              <q-icon name="person"/>
            </template>
          </q-input>
          <q-input
            label="Jumlah Saudara "
            lazy-rules
            v-model="form.jumlahSaudara"
            :rules="[
              val => val !== null && val !=='' || 'Data tidak boleh kosong']">
            <template v-slot:append>
              <q-icon name="person"/>
            </template>
          </q-input>
          <q-input
            label="Tanggungan "
            lazy-rules
            v-model="form.Tanggungan"
            :rules="[
              val => val !== null && val !=='' || 'Data tidak boleh kosong']">
            <template v-slot:append>
              <q-icon name="person"/>
            </template>
          </q-input>
          <q-input
            filled
            label="Nama SMA "
            lazy-rules
            v-model="form.namaSMA"
            :rules="[
              val => val !== null && val !=='' || 'Data tidak boleh kosong']">
            <template v-slot:append>
              <q-icon name="person"/>
            </template>
          </q-input>
          <q-input
            filled
            label="Alamat SMA"
            lazy-rules
            v-model="form.AlamatSMA"
            :rules="[
              val => val !== null && val !=='' || 'Data tidak boleh kosong']">
            <template v-slot:append>
              <q-icon name="person"/>
            </template>
          </q-input>
          <q-input
            label="Jurusan "
            lazy-rules
            v-model="form.Jurusan"
            :rules="[
              val => val !== null && val !=='' || 'Data tidak boleh kosong']">
            <template v-slot:append>
              <q-icon name="person"/>
            </template>
          </q-input>
          <q-img :src="baseUrl + this.foto" style="width: 250px; height: 250px"/>
          <q-toggle v-model="gantiFoto" label="Ganti Foto ?" />
          <q-input
            lazy-rules
            hint="Pilih Foto"
            type="file"
            ref="file"
            v-if="gantiFoto === true"
            @input="selectFile()"
            color="teal"
            :rules="[
           val => val !== null && val !== '' || 'Foto Dibutuhkan'
           ]">
            <template v-slot:append>
              <q-icon name="add_photo_alternate"/>
            </template>
          </q-input>
          <div>
            <q-btn
              unelevated
              icon="add"
              label="ubah data"
              style="height: 50px"
              type="submit"
              color="teal-6"/>
          </div>
        </q-form>
      </div>
    </q-card>
  </q-page>
</template>

<script>
export default {
  name: 'editDataKuliah',
  data () {
    return {
      gantiFoto: false,
      baseUrl: 'http://localhost:5050/foto/',
      form: {
        userName: null,
        namaLengkap: null,
        TTL: null,
        jenisKelamin: null,
        NIK: null,
        Prodi: null,
        namaAyah: null,
        pekerjaanAyah: null,
        namaIbu: null,
        pekerjaanIbu: null,
        jumlahSaudara: null,
        Tanggungan: null,
        namaSMA: null,
        AlamatSMA: null,
        Jurusan: null
      },
      id: null,
      foto: null
    }
  },
  methods: {
    selectFile () {
      this.foto = this.$refs.file.$refs.input.file[0]
    },
    onSubmit () {
      const formData = new FormData()
      formData.append('foto', this.foto)
      formData.append('userName', this.form.userName)
      formData.append('namaLengkap', this.form.namaLengkap)
      formData.append('TTL', this.form.TTL)
      formData.append('jenisKelamin', this.form.jenisKelamin)
      formData.append('NIK', this.form.NIK)
      formData.append('Prodi', this.form.Prodi)
      formData.append('namaAyah', this.form.namaAyah)
      formData.append('pekerjaanAyah', this.form.pekerjaanAyah)
      formData.append('namaIbu', this.form.namaIbu)
      formData.append('pekerjaanIbu', this.form.pekerjaanIbu)
      formData.append('jumlahSaudara', this.form.jumlahSaudara)
      formData.append('Tanggungan', this.form.Tanggungan)
      formData.append('namaSMA', this.form.namaSMA)
      formData.append('AlamatSMA', this.form.AlamatSMA)
      formData.append('Jurusan', this.form.Jurusan)
      this.$axios.put('/kuliah/ubah/' + this.id, formData)
        .then((res) => {
          if (res.data.error) {
            this.$q.notify({
              color: 'negative',
              message: res.data.msg,
              icon: 'ion-close'
            })
          } else {
            this.$q.notify({
              color: 'positive',
              message: res.data.msg,
              icon: 'ion-close'
            })
            this.$router.push('/')
          }
        })
    },
    getDataKuliahById () {
      this.$axios.get('kuliah/datakuliah/' + this.$route.params.id)
        .then((res) => {
          this.data = res.data.data
          this.form.userName = this.data.userName
          this.form.namaLengkap = this.data.namaLengkap
          this.form.TTL = this.data.TTL
          this.form.jenisKelamin = this.data.jenisKelamin
          this.form.NIK = this.data.NIK
          this.form.Prodi = this.data.Prodi
          this.form.namaAyah = this.data.namaAyah
          this.form.pekerjaanAyah = this.data.pekerjaanAyah
          this.form.namaIbu = this.data.namaIbu
          this.form.pekerjaanIbu = this.data.pekerjaanIbu
          this.form.jumlahSaudara = this.data.jumlahSaudara
          this.form.Tanggungan = this.data.Tanggungan
          this.form.namaSMA = this.data.namaSMA
          this.form.AlamatSMA = this.data.AlamatSMA
          this.form.Jurusan = this.data.Jurusan
          this.foto = this.data.foto
          this.id = this.data._id
        })
    }
  },
  mounted () {
    this.getDataKuliahById()
  }
}
</script>

<style scoped>

</style>
