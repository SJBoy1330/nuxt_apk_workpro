<template>
    <button class="btn btn-tambah" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
        <i class="fa-regular fa-plus" style="font-size: 24px;"></i>
    </button>

    <!-- Tambah Kunjungan -->
    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
        <div class="offcanvas-header">
            <h5 id="offcanvasRightLabel"></h5>
            <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"><i class="fa-regular fa-xmark"></i></button>
        </div>
        <div class="offcanvas-body">
            <div class="row">
                <div class="col-12">
                    <div class="mb-3">
                        <label class="form-label fw-medium">Nama klien <span class="text-danger">*</span></label>
                        <input type="date" class="form-control form-control-solid form-control-workpro border-0 one" placeholder="Masukkan nama klien">
                    </div>
                    <div class="mb-3">
                        <label class="form-label fw-medium">Alamat</label>
                        <textarea class="form-control form-control-solid form-control-workpro-textarea border-0 one" rows="3" placeholder="Masukkan alamat anda"></textarea>
                    </div>
                    <div class="mb-3">
                        <label class="form-label fw-medium">Nomor handphone <span class="text-danger">*</span></label>
                        <input type="number" class="form-control form-control-solid form-control-workpro border-0 one" placeholder="Masukkan nomor handphone">
                    </div>
                    <div class="mb-3">
                        <label class="form-label fw-medium">Email</label>
                        <input type="text" class="form-control form-control-solid form-control-workpro border-0 one" placeholder="Masukkan email ">
                    </div>
                    <div class="mb-3">
                        <label class="form-label fw-medium">Nama perusahaan</label>
                        <input type="text" class="form-control form-control-solid form-control-workpro border-0 one" placeholder="Masukkan nama perusahaan ">
                    </div>
                    <div class="mb-3">
                        <label class="form-label fw-medium">Sumber prospek <span class="text-danger">*</span></label>
                        <select class="form-select form-select-solid form-select-workpro border-0 one">
                            <option selected>Pilih sumber prospek</option>
                            <option value="1">Google</option>
                            <option value="2">BBC</option>
                            <option value="3">DreamWorks</option>
                        </select>
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

                        <div class="d-flex justify-content-between align-items-center mb-2 px-2">
                            <div class="col-10">
                                <div class="input-container">
                                    <input type="text" class="form-control form-control-solid form-control-pencarian border-0 one input-field" placeholder="Pencarian">
                                    <i class="fa-regular fa-magnifying-glass icon pe-3"></i>
                                </div>
                            </div>
                            <div class="col-2 ms-3">
                                <button class="btn btn-filter rounded-15" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop" aria-controls="offcanvasTop">
                                    <i class="fa-regular fa-bars-filter" style="color: #AAAAAA;"></i>
                                </button>
                            </div>
                        </div>

                        <!-- Offcanvas Filter  -->
                        <div class="offcanvas offcanvas-top" tabindex="-1" id="offcanvasTop" aria-labelledby="offcanvasTopLabel" style="height: 220px;">
                            <div class="offcanvas-header">
                                <h5 id="offcanvasTopLabel" class="fw-medium">Filter Status Prospek</h5>
                                <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"><i class="fa-regular fa-xmark"></i></button>
                            </div>
                            <div class="offcanvas-body">
                                <div>
                                    <label class="form-label fw-medium">Status <span class="text-danger">*</span></label>
                                    <select class="form-select form-select-solid form-select-workpro border-0 one">
                                        <option selected>Pilih status</option>
                                        <option value="1">Cold</option>
                                        <option value="2">Medium</option>
                                        <option value="3">Hard</option>
                                    </select>
                                </div>
                            </div>
                            <div class="offcanvas-footer p-3">
                                <NuxtLink to="/" class="btn btn-default btn-lg px-4 shadow-sm d-flex justify-content-center align-items-center" 
                                style="width: 100%; height: 30px; background-color: #FFB600;">Tampilkan</NuxtLink>
                            </div>
                        </div>

                        <!-- Tab content -->
                        <div>
                            <div class="row mt-2 mb-3">
                                <p class="text-secondary">Total Prospek 4</p>
                            </div>
                            <div class="row mb-3 px-2">
                                <div class="col-auto ps-0">
                                    <div class="avatar avatar-50 rounded-circle coverimg bg-informasi">
                                        <i class="fa-solid fa-briefcase size-24" style="color: #FFB600"></i>
                                    </div>
                                </div>
                                <div class="col align-self-center ps-0">
                                    <p class="fw-medium mb-0 size-14">Prospek 1</p>
                                    <p class="text-muted size-12">Lorem ipsum dolor...</p>
                                </div>
                                <div class="col-auto align-self-center">
                                    <span class="badge rounded-pill fw-light" style="color: #FF0000; background: #FECFCF;">Hard</span>
                                </div>
                            </div>
                            <div class="row mb-3 px-2">
                                <div class="col-auto ps-0">
                                    <div class="avatar avatar-50 rounded-circle coverimg bg-informasi">
                                        <i class="fa-solid fa-briefcase size-24" style="color: #FFB600"></i>
                                    </div>
                                </div>
                                <div class="col align-self-center ps-0">
                                    <p class="fw-medium mb-0 size-14">Prospek 2</p>
                                    <p class="text-muted size-12">Lorem ipsum dolor...</p>
                                </div>
                                <div class="col-auto align-self-center">
                                    <span class="badge rounded-pill fw-light" style="color: #0066FF; background: #CFDFFE;">Cold</span>
                                </div>
                            </div>
                            <div class="row mb-3 px-2">
                                <div class="col-auto ps-0">
                                    <div class="avatar avatar-50 rounded-circle coverimg bg-informasi">
                                        <i class="fa-solid fa-briefcase size-24" style="color: #FFB600"></i>
                                    </div>
                                </div>
                                <div class="col align-self-center ps-0">
                                    <p class="fw-medium mb-0 size-14">Prospek 3</p>
                                    <p class="text-muted size-12">Lorem ipsum dolor...</p>
                                </div>
                                <div class="col-auto align-self-center">
                                    <span class="badge rounded-pill fw-light" style="color: #FFB600; background: #FEF1CF;">Medium</span>
                                </div>
                            </div>
                            <div class="row mb-3 px-2">
                                <div class="col-auto ps-0">
                                    <div class="avatar avatar-50 rounded-circle coverimg bg-informasi">
                                        <i class="fa-solid fa-briefcase size-24" style="color: #FFB600"></i>
                                    </div>
                                </div>
                                <div class="col align-self-center ps-0">
                                    <p class="fw-medium mb-0 size-14">Prospek 4</p>
                                    <p class="text-muted size-12">Lorem ipsum dolor...</p>
                                </div>
                                <div class="col-auto align-self-center">
                                    <span class="badge rounded-pill fw-light" style="color: #FF0000; background: #FECFCF;">Hard</span>
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