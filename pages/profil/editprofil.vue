<template>
    <button class="btn btn-tambah" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
        <i class="fa-regular fa-check" style="font-size: 24px;"></i>
    </button>

    <div class="row">
        <div class="col-12 mb-3">
            <div class="card profil">
                <div class="card-body py-2">
                    <div class="avatar-upload">
                        <div class="avatar-edit">
                            <input type='file' id="imageUpload" accept=".png, .jpg, .jpeg" />
                            <label for="imageUpload"></label>
                        </div>
                        <div class="avatar-preview">
                            <div id="imagePreview" style="background-image: url('http://i.pravatar.cc/500?img=7');">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card full-ket">
                <p class="fw-normal text-secondary">Pengaturan Akun</p>
            </div>
            <div class="card" style="height: auto;">
                <div class="row">
                    <div class="col-12">
                        <div class="mb-3">
                            <label class="form-label fw-medium">Email <span class="text-danger">*</span></label>
                            <input type="email" class="form-control form-control-solid form-control-workpro border-0 one"
                                placeholder="Masukkan email">
                        </div>
                        <div class="mb-3">
                            <label class="form-label fw-medium">Kata Sandi Baru</label>
                            <input type="password" class="form-control form-control-solid form-control-workpro border-0 one"
                                placeholder="Masukkan kata sandi baru">
                        </div>
                        <div class="mb-3">
                            <label class="form-label fw-medium">Konfirmasi Kata Sandi Baru</label>
                            <input type="password" class="form-control form-control-solid form-control-workpro border-0 one"
                                placeholder="Ulangi kata sandi baru">
                        </div>
                    </div>
                </div>
            </div>
            <div class="card full-ket">
                <p class="fw-normal text-secondary">Data Diri</p>
            </div>
            <div class="card" style="height: auto;">
                <div class="row">
                    <div class="col-12">
                        <div class="mb-3">
                            <label class="form-label fw-medium">Nama Lengkp <span class="text-danger">*</span></label>
                            <input type="text" class="form-control form-control-solid form-control-workpro border-0 one"
                                placeholder="Masukkan email">
                        </div>
                        <div class="mb-3">
                            <label class="form-label fw-medium">Gelar Depan</label>
                            <input type="password" class="form-control form-control-solid form-control-workpro border-0 one"
                                placeholder="Masukkan gelar depan">
                        </div>
                        <div class="mb-3">
                            <label class="form-label fw-medium">Gelap Belakang</label>
                            <input type="password" class="form-control form-control-solid form-control-workpro border-0 one"
                                placeholder="Masukkan gelar belakang">
                        </div>
                        <div class="mb-3">
                            <label class="form-label fw-medium">Tempat Lahir</label>
                            <input type="text" class="form-control form-control-solid form-control-workpro border-0 one"
                                placeholder="Masukkan tempat lahir">
                        </div>
                        <div class="mb-3">
                            <label class="form-label fw-medium">Tanggal Lahir <span class="text-danger">*</span></label>
                            <input type="date" class="form-control form-control-solid form-control-workpro border-0 one"
                                placeholder="Masukkan tanggal lahir">
                        </div>
                        <div class="mb-3">
                            <label class="form-label fw-medium">Status Perkawinan</label>
                            <select class="form-select form-select-solid form-select-workpro border-0 one">
                                <option selected>Pilih status perkawinan</option>
                                <option value="1">Belum menikah</option>
                                <option value="2">Menikah</option>
                                <option value="3">Janda</option>
                                <option value="4">Duda</option>
                            </select>
                        </div>
                        <div class="mb-3">
                            <label class="form-label fw-medium">Agama</label>
                            <select class="form-select form-select-solid form-select-workpro border-0 one">
                                <option selected>Pilih agama</option>
                                <option value="1">Islam</option>
                                <option value="2">Kristen</option>
                                <option value="3">Katolik</option>
                                <option value="4">Hindu</option>
                                <option value="5">Budha</option>
                                <option value="6">Kong Hu Chu</option>
                            </select>
                        </div>
                        <div class="mb-3">
                            <label class="form-label fw-medium">Golongan Darah</label>
                            <select class="form-select form-select-solid form-select-workpro border-0 one">
                                <option selected>Pilih golongan darah</option>
                                <option value="1">O-</option>
                                <option value="2">O+</option>
                                <option value="3">A-</option>
                                <option value="4">A+</option>
                                <option value="5">B-</option>
                                <option value="6">B+</option>
                                <option value="5">AB-</option>
                                <option value="6">AB+</option>
                            </select>
                        </div>
                        <div class="mb-3">
                            <label class="form-label fw-medium">Kewarganegaraan <span class="text-danger">*</span></label>
                            <select class="form-select form-select-solid form-select-workpro border-0 one">
                                <option selected>Pilih golongan darah</option>
                                <option value="1">WNI</option>
                                <option value="2">WNA</option>
                            </select>
                        </div>
                        <div class="mb-3">
                            <label class="form-label fw-medium">Jenis Kelamin <span class="text-danger">*</span></label>
                            <select class="form-select form-select-solid form-select-workpro border-0 one">
                                <option selected>Pilih jenis kelamin</option>
                                <option value="1">Laki-laki</option>
                                <option value="2">Perempuan</option>
                            </select>
                        </div>
                        <div class="mb-3">
                            <label class="form-label fw-medium">No. Handphone <span class="text-danger">*</span></label>
                            <input type="number" class="form-control form-control-solid form-control-workpro border-0 one"
                                placeholder="Masukkan no handphone">
                        </div>
                        <div class="mb-3">
                        <label class="form-label fw-medium">Alamat</label>
                            <textarea class="form-control form-control-solid form-control-workpro-textarea border-0 one" rows="3" placeholder="Masukkan alamat anda"></textarea>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- OffCanvas -->
    <div class="offcanvas offcanvas-bottom" tabindex="-1" id="offcanvasBottom" aria-labelledby="offcanvasBottomLabel">
        <div class="offcanvas-header">
            <h5 class="offcanvas-title fw-bold" id="offcanvasBottomLabel">Pengingat Check Clock</h5>
            <button type="button" class="btn-close text-reset d-flex justify-content-center align-items-center" data-bs-dismiss="offcanvas" aria-label="Close">
                <i class="fa-solid fa-xmark"></i>
            </button>
        </div>
        <div class="offcanvas-body small">
            <div class="row">
                <div class="col-12 col-md-6 col-lg-4 mb-3">
                    <div class="card informasi">
                        <div class="card-body py-0">
                            <div class="row">
                                <div class="col-auto ps-0">
                                    <div class="avatar avatar-50 shadow-sm rounded-circle coverimg bg-informasi">
                                        <i class="fa-regular fa-person-to-portal fs-3" style="color: #FFB600;"></i>
                                    </div>
                                </div>
                                <div class="col align-self-center ps-0">
                                    <p class="fw-normal size-16 mb-0">Clock In</p>
                                </div>
                                <div class="col-auto align-self-center">
                                    <div class="form-check form-switch">
                                        <input class="form-check-input switches" type="checkbox" role="switch" id="">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-12 col-md-6 col-lg-4 mb-3">
                    <div class="card informasi">
                        <div class="card-body py-0">
                            <div class="row">
                                <div class="col-auto ps-0">
                                    <div class="avatar avatar-50 shadow-sm rounded-circle coverimg bg-informasi">
                                        <i class="fa-regular fa-person-from-portal fs-3" style="color: #FFB600;"></i>
                                    </div>
                                </div>
                                <div class="col align-self-center ps-0">
                                    <p class="fw-normal size-16 mb-0">Clock Out</p>
                                </div>
                                <div class="col-auto align-self-center">
                                    <div class="form-check form-switch">
                                        <input class="form-check-input switches" type="checkbox" role="switch" id="">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
 </template>
 
 <style scoped>
 
 </style>
 
 <script setup>
    useHead({
        script: [
            {
                src: '/assets/js/page/editprofile.js'
            }
        ]
    })
 </script>