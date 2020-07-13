<template>
  <q-layout class="bg-yellow-gr-1" view="hHh Lpr lFf ">
    <q-page-container>
      <q-page padding class="row items-center justify-center">
        <div class="row full-width">
          <div class="col-md-8 offset-md-2 col-xs-12 q-pl-md q-pr-md q-pt-sm">
            <q-card flat class="bg-white text-black">
              <div class="row">
                <q-card-section class ="text-blue-grey-14">
                  <div class ="text-h4">Data Diri</div>
                </q-card-section>
                <div class="col-md-12 col-xs-12 q-pt-md">
                  <div class="q-pa-md">

                    <q-form
                      @submit="onSubmit"
                      @reset="onReset"
                      class="q-gutter-md"
                    >
                      <q-input
                        filled
                        v-model="form.userName"
                        label="User Name "
                        hint="User Name"
                        lazy-rules
                        :rules="[ val => val && val.length > 0 || 'Data tidak boleh kosong']"
                      />
                      <q-input
                        filled
                        v-model="form.namaLengkap"
                        label="Nama Lengkap "
                        hint="Nama Lengkap"
                        lazy-rules
                        :rules="[ val => val && val.length > 0 || 'Data tidak boleh kosong']"
                      />
                      <q-input
                        filled
                        v-model="form.TTL"
                        label="Tempat Tanggal Lahir"
                        hint ="Tempat Tanggal Lahir"
                        lazy-rules
                        :rules="[ val => val && val.length > 0 || 'Data tidak boleh kosong']"
                      />
                      <q-input
                        filled
                        v-model="form.jenisKelamin"
                        label="Jenis Kelamin"
                        hint ="Jenis Kelamin"
                        lazy-rules
                        :rules="[ val => val && val.length > 0 || 'Data tidak boleh kosong']"
                      />
                      <q-input
                        filled
                        v-model="form.NIK"
                        label="NIK"
                        hint ="NIK"
                        lazy-rules
                        :rules="[ val => val && val.length > 0 || 'Data tidak boleh kosong']"
                      />
                      <q-input
                        filled
                        v-model="form.Prodi"
                        label="Prodi "
                        hint ="Prodi Yang Akan Diambil"
                        lazy-rules
                        :rules="[ val => val && val.length > 0 || 'Data tidak boleh kosong']"
                      />
                      <q-input
                        filled
                        v-model="form.namaAyah"
                        label="Nama Ayah"
                        hint ="Nama Ayah"
                        lazy-rules
                        :rules="[ val => val && val.length > 0 || 'Data tidak boleh kosong']"
                      />
                      <q-input
                        filled
                        v-model="form.pekerjaanAyah"
                        label="Pekerjaan Ayah "
                        hint ="Pekerjaan Ayah"
                        lazy-rules
                        :rules="[ val => val && val.length > 0 || 'Data tidak boleh kosong']"
                      />
                      <q-input
                        filled
                        v-model="form.namaIbu"
                        label="Nama Ibu "
                        hint ="Nama Ibu"
                        lazy-rules
                        :rules="[ val => val && val.length > 0 || 'Data tidak boleh kosong']"
                      />
                      <q-input
                        filled
                        v-model="form.pekerjaanIbu"
                        label="Pekerjaan Ibu "
                        hint ="Pekerjaan Ibu"
                        lazy-rules
                        :rules="[ val => val && val.length > 0 || 'Data tidak boleh kosong']"
                      />
                      <q-input
                        filled
                        v-model="form.jumlahSaudara"
                        label="Jumlah Saudara "
                        hint ="Jumlah Saudara"
                        lazy-rules
                        :rules="[ val => val && val.length > 0 || 'Data tidak boleh kosong']"
                      />
                      <q-input
                        filled
                        v-model="form.Tanggungan"
                        label="Tanggungan "
                        hint ="Tanggungan"
                        lazy-rules
                        :rules="[ val => val && val.length > 0 || 'Data tidak boleh kosong']"
                      />
                      <q-input
                        filled
                        v-model="form.namaSMA"
                        label="Nama SMA "
                        hint ="Nama SMA"
                        lazy-rules
                        :rules="[ val => val && val.length > 0 || 'Data tidak boleh kosong']"
                      />
                      <q-input
                        filled
                        v-model="form.AlamatSMA"
                        label="Alamat SMA"
                        hint ="Alamat SMA"
                        lazy-rules
                        :rules="[ val => val && val.length > 0 || 'Data tidak boleh kosong']"
                      />
                      <q-input
                        filled
                        v-model="form.Jurusan"
                        label="Jurusan "
                        hint ="Jurusan saat SMA"
                        lazy-rules
                        :rules="[ val => val && val.length > 0 || 'Data tidak boleh kosong']"
                      />
                      <q-input
                        lazy-rules
                        hint="Pilih gambar"
                        type="file"
                        ref="file"
                        @input="selectFile()"
                        color="teal"
                        :rules="[
           val => val !== null && val !== '' || 'Gambar Dibutuhkan'
           ]">
                        <template v-slot:append>
                          <q-icon name="add_photo_alternate"/>
                        </template>
                      </q-input>
                      <div>
                        <q-btn
                          unelevated
                          icon="add"
                          type="submit"
                          label="Tambah Data"
                          style="height: 50px"
                          color="teal-6"/>
                      </div>
                    </q-form>

                  </div>
                </div>
              </div>
            </q-card>
          </div>
        </div>

      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  data () {
    return {
      form: {
        userName: '',
        namaLengkap: '',
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
      foto: null
    }
  },
  methods: {
    selectFile () {
      this.foto = this.$refs.file.$refs.input.files[0]
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
      this.$axios.post('/kuliah/input', formData)
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
    }
  }
}
</script>

<style scoped>

</style>
