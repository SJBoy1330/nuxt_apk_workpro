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
                        <label class="form-label fw-medium">Tanggal Mulai <span class="text-danger">*</span></label>
                        <input type="text" class="form-control form-control-solid form-control-workpro border-0 one" placeholder="Masukkan tanggal mulai">
                    </div>
                    <div class="mb-3">
                        <label class="form-label fw-medium">Tanggal Selesai <span class="text-danger">*</span></label>
                        <input type="text" class="form-control form-control-solid form-control-workpro border-0 one" placeholder="Masukkan tanggal selesai">
                    </div>
                    <div class="mb-3">
                        <label class="form-label fw-medium">Alasan <span class="text-danger">*</span></label>
                        <textarea class="form-control form-control-solid form-control-workpro-textarea border-0 one" rows="3" placeholder="Masukkan alasan anda"></textarea>
                    </div>
                    <div class="mb-3">
                        <label class="form-label fw-medium">Bukti Pendukung <span class="text-danger">*</span></label>
                        
                    </div>
                </div>
            </div>
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
                        <!-- Tab links -->
                        <div class="tab">
                            <button class="tab tablinks my-2 active" id="tabPengajuan" onclick="openCity(this, 'Pengajuan')"
                                data-kt-button="true">Pengajuan</button>
                            <button class="tab tablinks my-2" id="tabDisetujui" onclick="openCity(this, 'Disetujui')"
                                data-kt-button="true">Disetujui</button>
                            <button class="tab tablinks my-2" id="tabDitolak" onclick="openCity(this, 'Ditolak')" data-kt-button="true">Ditolak</button>
                        </div>

                        <!-- Tab content -->
                        <div id="Pengajuan" class="tabcontent" style="display : block;">
                            <div class="row mt-2 mb-3">
                                <p class="text-secondary">Total Lembur 4</p>
                            </div>
                            <div class="row mb-3 px-2">
                                <div class="col-auto ps-0">
                                    <div class="avatar avatar-50 rounded-circle coverimg bg-informasi">
                                        <i class="fa-regular fa-timer size-24" style="color: #FFB600"></i>
                                    </div>
                                </div>
                                <div class="col align-self-center ps-0">
                                    <p class="fw-medium mb-0 size-14">Pukul : 22:00 - 01:00</p>
                                    <p class="text-muted size-12">Lorem ipsum dolor...</p>
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
                                <div class="col align-self-center ps-0">
                                    <p class="fw-medium mb-0 size-14">Pukul : 23:00 - 03:00</p>
                                    <p class="text-muted size-12">Lorem ipsum dolor...</p>
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
                                <div class="col align-self-center ps-0">
                                    <p class="fw-medium mb-0 size-14">Pukul : 22:00 - 01:00</p>
                                    <p class="text-muted size-12">Lorem ipsum dolor...</p>
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
                                <div class="col align-self-center ps-0">
                                    <p class="fw-medium mb-0 size-14">Pukul : 23:00 - 03:00</p>
                                    <p class="text-muted size-12">Lorem ipsum dolor...</p>
                                </div>
                                <div class="col-auto align-self-center">
                                    <span class="badge rounded-pill fw-light" style="color: #FFB600; background: #FEF1CF;">28 Agt</span>
                                </div>
                            </div>
                        </div>

                        <div id="Disetujui" class="tabcontent">
                            <div class="row mt-2 mb-3">
                                <p class="text-secondary">Total Lembur 3</p>
                            </div>
                            <div class="row mb-3 px-2">
                                <div class="col-auto ps-0">
                                    <div class="avatar avatar-50 rounded-circle coverimg" style="background-color: #E3FFE4;">
                                        <i class="fa-regular fa-timer size-24" style="color: #59CE8F"></i>
                                    </div>
                                </div>
                                <div class="col align-self-center ps-0">
                                    <p class="fw-medium mb-0 size-14">Pukul : 22:00 - 01:00</p>
                                    <p class="text-muted size-12">Lorem ipsum dolor...</p>
                                </div>
                                <div class="col-auto align-self-center">
                                    <span class="badge rounded-pill fw-light" style="color: #59CE8F; background: #E3FFE4;">25 Agt</span>
                                </div>
                            </div>
                            <div class="row mb-3 px-2">
                                <div class="col-auto ps-0">
                                    <div class="avatar avatar-50 rounded-circle coverimg" style="background-color: #E3FFE4">
                                        <i class="fa-regular fa-timer size-24" style="color: #59CE8F"></i>
                                    </div>
                                </div>
                                <div class="col align-self-center ps-0">
                                    <p class="fw-medium mb-0 size-14">Pukul : 23:00 - 03:00</p>
                                    <p class="text-muted size-12">Lorem ipsum dolor...</p>
                                </div>
                                <div class="col-auto align-self-center">
                                    <span class="badge rounded-pill fw-light" style="color: #59CE8F; background: #E3FFE4;">26 Agt</span>
                                </div>
                            </div>
                            <div class="row mb-3 px-2">
                                <div class="col-auto ps-0">
                                    <div class="avatar avatar-50 rounded-circle coverimg" style="background: #E3FFE4;">
                                        <i class="fa-regular fa-timer size-24" style="color: #59CE8F"></i>
                                    </div>
                                </div>
                                <div class="col align-self-center ps-0">
                                    <p class="fw-medium mb-0 size-14">Pukul : 22:00 - 01:00</p>
                                    <p class="text-muted size-12">Lorem ipsum dolor...</p>
                                </div>
                                <div class="col-auto align-self-center">
                                    <span class="badge rounded-pill fw-light" style="color: #59CE8F; background: #E3FFE4;">27 Agt</span>
                                </div>
                            </div>
                        </div>

                        <div id="Ditolak" class="tabcontent">
                            <div class="row mt-2 mb-3">
                                <p class="text-secondary">Total Lembur 1</p>
                            </div>
                            <div class="row mb-3 px-2">
                                <div class="col-auto ps-0">
                                    <div class="avatar avatar-50 rounded-circle coverimg" style="background-color: #F8DBE0;">
                                        <i class="fa-regular fa-timer size-24" style="color: #FF1111"></i>
                                    </div>
                                </div>
                                <div class="col align-self-center ps-0">
                                    <p class="fw-medium mb-0 size-14">Pukul : 22:00 - 01:00</p>
                                    <p class="text-muted size-12">Lorem ipsum dolor...</p>
                                </div>
                                <div class="col-auto align-self-center">
                                    <span class="badge rounded-pill fw-light" style="color: #FF1111; background: #F8DBE0;">25 Agt</span>
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