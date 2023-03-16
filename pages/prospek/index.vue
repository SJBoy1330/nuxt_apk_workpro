<template>
    <button class="btn btn-tambah">
        <i class="fa-regular fa-plus" style="font-size: 24px;"></i>
    </button>
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