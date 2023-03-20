<template>
    <button class="btn btn-tambah" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
        <i class="fa-regular fa-plus" style="font-size: 24px;"></i>
    </button>
    
    <!-- Tambah Lembur -->
    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
        <div class="offcanvas-header">
            <h5 id="offcanvasRightLabel"></h5>
            <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"><i class="fa-regular fa-xmark"></i></button>
        </div>
        <div class="offcanvas-body">
            <div class="row">
                <div class="col-12">
                    <div class="mb-3">
                        <label class="form-label fw-medium">Tanggal<span class="text-danger">*</span></label>
                        <input type="date" class="form-control form-control-solid form-control-workpro border-0 one" placeholder="Masukkan tanggal">
                    </div>
                    <div class="mb-3">
                        <label class="form-label fw-medium">Karyawan Pengganti<span class="text-danger">*</span></label>
                        <select class="form-select form-select-solid form-select-workpro border-0 one">
                            <option selected>Pilih karyawan pengganti</option>
                            <option value="1">Jhonny</option>
                            <option value="2">Elizabeth</option>
                            <option value="3">Elissa</option>
                        </select>
                    </div>
                    <div class="mb-3">
                        <label class="form-label fw-medium">Alasan <span class="text-danger">*</span> </label>
                        <textarea class="form-control form-control-solid form-control-workpro-textarea border-0 one" rows="3" placeholder="Masukkan alasan"></textarea>
                    </div>
                </div>
            </div>
        </div>
        <div class="offcanvas-footer p-3">
            <NuxtLink to="/" class="btn btn-default btn-lg mt-4 px-4 shadow-sm d-flex justify-content-center align-items-center" 
            style="width: 100%; height: 30px; background-color: #FFB600;">Kirim</NuxtLink>
        </div>
    </div>

    <div class="row mb-4">
        <div class="col-12 mb-3">
            <div class="card card-lembur mb-4">
                <div class="card-body pt-2 pb-1">
                    <div class="row">
                        <div class="d-flex justify-content-between align-items-center mb-3 px-2">
                            <NuxtLink class="previous-next-btn">
                                <i class="fa-solid fa-chevron-left" style="color: #FFB600"></i>
                            </NuxtLink>
                            <div class="wrapper-tanggal">
                                <p class="fs-14 fw-normal mb-0">Agustus, 2022</p>
                            </div>
                            <NuxtLink class="previous-next-btn">
                                <i class="fa-solid fa-chevron-right" style="color: #FFDE8D;"></i>
                            </NuxtLink>
                        </div>


                        <div class="tab px-2">
                            <div class="table-responsive tukar-shift">
                                <table class="table">
                                    <tr>
                                        <td>
                                            <button class="tab tablinks my-2 active" id="tabPengajuan" onclick="openCity(this, 'Pengajuan')"
                                            data-kt-button="true" style="width: 100px;">Pengajuan</button>
                                        </td>
                                        <td>
                                            <button class="tab tablinks my-2" id="tabDiterima" onclick="openCity(this, 'Diterima')"
                                            data-kt-button="true" style="width: 100px;">Diterima</button>
                                        </td>
                                        <td>
                                            <button class="tab tablinks my-2" id="tabDisetujui" onclick="openCity(this, 'Disetujui')" 
                                            data-kt-button="true" style="width: 100px;">Disetujui</button>
                                        </td>
                                        <td>
                                            <button class="tab tablinks my-2" id="tabDitolak" onclick="openCity(this, 'Ditolak')" 
                                            data-kt-button="true" style="width: 100px;">Ditolak</button>
                                        </td>
                                    </tr>
                                </table>
                            </div>
                        </div>

                        <!-- Tab links -->
                        <!-- <div class="tab">
                            <button class="tab tablinks my-2 active" id="tabPengajuan" onclick="openCity(this, 'Pengajuan')"
                                data-kt-button="true">Pengajuan</button>
                            <button class="tab tablinks my-2" id="tabDiterima" onclick="openCity(this, 'Diterima')"
                                data-kt-button="true">Diterima</button>
                            <button class="tab tablinks my-2" id="tabDisetujui" onclick="openCity(this, 'Disetujui')" 
                            data-kt-button="true">Disetujui</button>
                            <button class="tab tablinks my-2" id="tabDitolak" onclick="openCity(this, 'Ditolak')" 
                            data-kt-button="true">Ditolak</button>
                        </div> -->

                        <!-- Tab content -->
                        <div id="Pengajuan" class="tabcontent" style="display : block;">
                            <div class="row mt-2 mb-3">
                                <p class="text-secondary">Total pengajuan tukar shift 4</p>
                            </div>
                            <div class="row mb-3 px-2">
                                <div class="col-auto ps-0">
                                    <div class="avatar avatar-50 rounded-circle coverimg bg-informasi">
                                        <i class="fa-regular fa-timer size-24" style="color: #FFB600"></i>
                                    </div>
                                </div>
                                <div class="col align-self-center d-flex align-items-center ps-0">
                                    <i class="fa-regular fa-bracket-square size-32"></i>
                                    <div class="d-flex flex-column ms-1">
                                        <p class="fw-normal mb-2 size-12 text-danger">Johnny (Shift Pagi)</p>
                                        <p class="fw-normal mb-0 size-12 text-success">Elizabeth (Shift Malam)</p>
                                    </div>
                                </div>
                                <div class="col-auto align-self-center">
                                    <span class="badge rounded-pill fw-light" style="color: #FFB600; background: #FEF1CF;">25 Agt</span>
                                </div>
                            </div>
                            <div class="row mb-3 px-2">
                                <div class="col-auto ps-0">
                                    <div class="avatar avatar-50 rounded-circle coverimg bg-informasi">
                                        <i class="fa-regular fa-timer size-24" style="color: #FFB600"></i>
                                    </div>
                                </div>
                                <div class="col align-self-center d-flex align-items-center ps-0">
                                    <i class="fa-regular fa-bracket-square size-32"></i>
                                    <div class="d-flex flex-column ms-1">
                                        <p class="fw-normal mb-2 size-12 text-danger">Johnny (Shift Malam)</p>
                                        <p class="fw-normal mb-0 size-12 text-success">Elizabeth (Shift Pagi)</p>
                                    </div>
                                </div>
                                <div class="col-auto align-self-center">
                                    <span class="badge rounded-pill fw-light" style="color: #FFB600; background: #FEF1CF;">26 Agt</span>
                                </div>
                            </div>
                            <div class="row mb-3 px-2">
                                <div class="col-auto ps-0">
                                    <div class="avatar avatar-50 rounded-circle coverimg bg-informasi">
                                        <i class="fa-regular fa-timer size-24" style="color: #FFB600"></i>
                                    </div>
                                </div>
                                <div class="col align-self-center d-flex align-items-center ps-0">
                                    <i class="fa-regular fa-bracket-square size-32"></i>
                                    <div class="d-flex flex-column ms-1">
                                        <p class="fw-normal mb-2 size-12 text-danger">Johnny (Shift Pagi)</p>
                                        <p class="fw-normal mb-0 size-12 text-success">Elizabeth (Shift Malam)</p>
                                    </div>
                                </div>
                                <div class="col-auto align-self-center">
                                    <span class="badge rounded-pill fw-light" style="color: #FFB600; background: #FEF1CF;">27 Agt</span>
                                </div>
                            </div>
                            <div class="row mb-3 px-2">
                                <div class="col-auto ps-0">
                                    <div class="avatar avatar-50 rounded-circle coverimg bg-informasi">
                                        <i class="fa-regular fa-timer size-24" style="color: #FFB600"></i>
                                    </div>
                                </div>
                                <div class="col align-self-center d-flex align-items-center ps-0">
                                    <i class="fa-regular fa-bracket-square size-32"></i>
                                    <div class="d-flex flex-column ms-1">
                                        <p class="fw-normal mb-2 size-12 text-danger">Johnny (Shift Malam)</p>
                                        <p class="fw-normal mb-0 size-12 text-success">Elizabeth (Shift Pagi)</p>
                                    </div>
                                </div>
                                <div class="col-auto align-self-center">
                                    <span class="badge rounded-pill fw-light" style="color: #FFB600; background: #FEF1CF;">28 Agt</span>
                                </div>
                            </div>
                        </div>

                        <div id="Diterima" class="tabcontent">
                            <div class="row mt-2 mb-3">
                                <p class="text-secondary">Total pengajuan tukar shift 3</p>
                            </div>
                            <div class="row mb-3 px-2">
                                <div class="col-auto ps-0">
                                    <div class="avatar avatar-50 rounded-circle coverimg" style="background-color: #E3EBFF;">
                                        <i class="fa-regular fa-inbox-full size-24" style="color: #0085FF;"></i>
                                    </div>
                                </div>
                                <div class="col align-self-center d-flex align-items-center ps-0">
                                    <i class="fa-regular fa-bracket-square size-32"></i>
                                    <div class="d-flex flex-column ms-1">
                                        <p class="fw-normal mb-2 size-12 text-danger">Johnny (Shift Pagi)</p>
                                        <p class="fw-normal mb-0 size-12 text-success">Elizabeth (Shift Malam)</p>
                                    </div>
                                </div>
                                <div class="col-auto align-self-center">
                                    <span class="badge rounded-pill fw-light" style="color: #0085FF; background: #E3EBFF;">25 Agt</span>
                                </div>
                            </div>
                            <div class="row mb-3 px-2">
                                <div class="col-auto ps-0">
                                    <div class="avatar avatar-50 rounded-circle coverimg" style="background-color: #E3EBFF;">
                                        <i class="fa-regular fa-inbox-full size-24" style="color: #0085FF;"></i>
                                    </div>
                                </div>
                                <div class="col align-self-center d-flex align-items-center ps-0">
                                    <i class="fa-regular fa-bracket-square size-32"></i>
                                    <div class="d-flex flex-column ms-1">
                                        <p class="fw-normal mb-2 size-12 text-danger">Johnny (Shift Malam)</p>
                                        <p class="fw-normal mb-0 size-12 text-success">Elizabeth (Shift Pagi)</p>
                                    </div>
                                </div>
                                <div class="col-auto align-self-center">
                                    <span class="badge rounded-pill fw-light" style="color: #0085FF; background: #E3EBFF;">26 Agt</span>
                                </div>
                            </div>
                            <div class="row mb-3 px-2">
                                <div class="col-auto ps-0">
                                    <div class="avatar avatar-50 rounded-circle coverimg" style="background-color: #E3EBFF;">
                                        <i class="fa-regular fa-inbox-full size-24" style="color: #0085FF;"></i>
                                    </div>
                                </div>
                                <div class="col align-self-center d-flex align-items-center ps-0">
                                    <i class="fa-regular fa-bracket-square size-32"></i>
                                    <div class="d-flex flex-column ms-1">
                                        <p class="fw-normal mb-2 size-12 text-danger">Johnny (Shift Pagi)</p>
                                        <p class="fw-normal mb-0 size-12 text-success">Elizabeth (Shift Malam)</p>
                                    </div>
                                </div>
                                <div class="col-auto align-self-center">
                                    <span class="badge rounded-pill fw-light" style="color: #0085FF; background: #E3EBFF;">27 Agt</span>
                                </div>
                            </div>
                        </div>

                        <div id="Disetujui" class="tabcontent">
                            <div class="row mt-2 mb-3">
                                <p class="text-secondary">Total pengajuan tukar shift 2</p>
                            </div>
                            <div class="row mb-3 px-2">
                                <div class="col-auto ps-0">
                                    <div class="avatar avatar-50 rounded-circle coverimg" style="background-color: #E3FFE4;">
                                        <i class="fa-regular fa-circle-check size-24" style="color: #59CE8F"></i>
                                    </div>
                                </div>
                                <div class="col align-self-center d-flex align-items-center ps-0">
                                    <i class="fa-regular fa-bracket-square size-32"></i>
                                    <div class="d-flex flex-column ms-1">
                                        <p class="fw-normal mb-2 size-12 text-danger">Johnny (Shift Pagi)</p>
                                        <p class="fw-normal mb-0 size-12 text-success">Elizabeth (Shift Malam)</p>
                                    </div>
                                </div>
                                <div class="col-auto align-self-center">
                                    <span class="badge rounded-pill fw-light" style="color: #59CE8F; background: #E3FFE4;">25 Agt</span>
                                </div>
                            </div>
                            <div class="row mb-3 px-2">
                                <div class="col-auto ps-0">
                                    <div class="avatar avatar-50 rounded-circle coverimg" style="background-color: #E3FFE4;">
                                        <i class="fa-regular fa-circle-check size-24" style="color: #59CE8F"></i>
                                    </div>
                                </div>
                                <div class="col align-self-center d-flex align-items-center ps-0">
                                    <i class="fa-regular fa-bracket-square size-32"></i>
                                    <div class="d-flex flex-column ms-1">
                                        <p class="fw-normal mb-2 size-12 text-danger">Johnny (Shift Pagi)</p>
                                        <p class="fw-normal mb-0 size-12 text-success">Elizabeth (Shift Malam)</p>
                                    </div>
                                </div>
                                <div class="col-auto align-self-center">
                                    <span class="badge rounded-pill fw-light" style="color: #59CE8F; background: #E3FFE4;">25 Agt</span>
                                </div>
                            </div>
                        </div>

                        <div id="Ditolak" class="tabcontent">
                            <div class="row mt-2 mb-3">
                                <p class="text-secondary">Total pengajuan tukar shift 2</p>
                            </div>
                            <div class="row mb-3 px-2">
                                <div class="col-auto ps-0">
                                    <div class="avatar avatar-50 rounded-circle coverimg" style="background-color: #FFDDCE;">
                                        <i class="fa-regular fa-circle-xmark size-24" style="color: #FF1111"></i>
                                    </div>
                                </div>
                                <div class="col align-self-center d-flex align-items-center ps-0">
                                    <i class="fa-regular fa-bracket-square size-32"></i>
                                    <div class="d-flex flex-column ms-1">
                                        <p class="fw-normal mb-2 size-12 text-danger">Johnny (Shift Pagi)</p>
                                        <p class="fw-normal mb-0 size-12 text-success">Elizabeth (Shift Malam)</p>
                                    </div>
                                </div>
                                <div class="col-auto align-self-center">
                                    <span class="badge rounded-pill fw-light" style="color: #FF1111; background: #FFDDCE;">25 Agt</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
 
<style scoped></style>
 
<script setup>
// document.getElementById("tabOpen").click;
</script>