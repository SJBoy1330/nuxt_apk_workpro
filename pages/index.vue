<template>
    <div class="row mb-4">
        <div class="col-12">
            <div class="card overflow-hidden reimbursment"
                style="background-image: url(&quot;assets/img/background-reimbursment.png&quot;);">
                <div class="card-body py-2">
                    <div class="row">
                        <div class="col-auto ps-1">
                            <div class="avatar avatar-70 shadow-sm card rounded-circle">
                                <img src="assets/img/reimbursment.png">
                            </div>
                        </div>
                        <div class="col align-self-center">
                            <p class="size-18 mb-0 reimbursment">Reimbursment Bulan Ini</p>
                            <p class="size-20 text-secondary nominal-reimbursment">Rp. 256.000,00</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="row mb-2">
        <div class="col">
            <h6 class="fw-medium">Layanan Aplikasi</h6>
        </div>
    </div>
    <div class="row">
        <div class="col-6 col-md-6 col-lg-4 pe-2">
            <NuxtLink to="/lembur" class="card mb-3 layanan-aplikasi">
                <div class="card-body py-0">
                    <div class="row flex-column">
                        <div class="col ps-0">
                            <div class="avatar avatar-50 card bg-lembur">
                                <img src="assets/img/lembur.png">
                            </div>
                        </div>
                        <div class="col ps-0">
                            <p class=" mt-2 fw-medium">Lembur</p>
                        </div>
                    </div>
                </div>
            </NuxtLink>
        </div>
        <div class="col-6 col-md-6 col-lg-4 ps-2">
            <NuxtLink to="/kunjungan/riwayat_kunjungan" class="card mb-3 layanan-aplikasi">
                <div class="card-body py-0">
                    <div class="row flex-column">
                        <div class="col ps-0">
                            <div class="avatar avatar-50 card bg-kunjungan">
                                <img src="assets/img/kunjungan.png">
                            </div>
                        </div>
                        <div class="col ps-0">
                            <p class=" mt-2 fw-medium">Kunjungan</p>
                        </div>
                    </div>
                </div>
            </NuxtLink>
        </div>
        <div class="col-6 col-md-6 col-lg-4 pe-2">
            <NuxtLink to="/prospek" class="card mb-3 layanan-aplikasi">
                <div class="card-body py-0">
                    <div class="row flex-column">
                        <div class="col ps-0">
                            <div class="avatar avatar-50 card bg-prospek">
                                <img src="assets/img/prospek-kerja.png">
                            </div>
                        </div>
                        <div class="col ps-0">
                            <p class=" mt-2 fw-medium">Prospek Kerja</p>
                        </div>
                    </div>
                </div>
            </NuxtLink>
        </div>
        <div class="col-6 col-md-6 col-lg-4 ps-2">
            <NuxtLink to="#" class="card mb-3 layanan-aplikasi">
                <div class="card-body py-0">
                    <div class="row flex-column">
                        <div class="col ps-0">
                            <div class="avatar avatar-50 card bg-reimburse">
                                <img src="assets/img/reimburse.png">
                            </div>
                        </div>
                        <div class="col ps-0">
                            <p class=" mt-2 fw-medium">Reimburse</p>
                        </div>
                    </div>
                </div>
            </NuxtLink>
        </div>
        <div class="col-6 col-md-6 col-lg-4 pe-2">
            <NuxtLink to="#" class="card mb-3 layanan-aplikasi">
                <div class="card-body py-0">
                    <div class="row flex-column">
                        <div class="col ps-0">
                            <div class="avatar avatar-50 card bg-tukar-shift">
                                <img src="assets/img/tukar-shift.png">
                            </div>
                        </div>
                        <div class="col ps-0">
                            <p class=" mt-2 fw-medium">Prospek Kerja</p>
                        </div>
                    </div>
                </div>
            </NuxtLink>
        </div>
        <div class="col-6 col-md-6 col-lg-4 ps-2">
            <NuxtLink to="#" class="card mb-3 layanan-aplikasi">
                <div class="card-body py-0">
                    <div class="row flex-column">
                        <div class="col ps-0">
                            <div class="avatar avatar-50 card bg-libur">
                                <img src="assets/img/izin-libur.png">
                            </div>
                        </div>
                        <div class="col ps-0">
                            <p class=" mt-2 fw-medium">Izin Libur</p>
                        </div>
                    </div>
                </div>
            </NuxtLink>
        </div>
    </div>
    <div class="row my-2">
        <div class="col">
            <h6 class="fw-medium">Informasi</h6>
        </div>
        <div class="col-auto align-self-center">
            <NuxtLink to="#" class="small text-detail">Tampilkan semua</NuxtLink>
        </div>
    </div>
    <div class="row">
        <div class="col-12 col-md-6 col-lg-4 mb-3">
            <NuxtLink to="#" class="card informasi">
                <div class="card-body py-0">
                    <div class="row">
                        <div class="col-auto ps-0">
                            <div class="avatar avatar-50 shadow-sm rounded-circle coverimg bg-informasi">
                                <i class="fa-solid fa-memo-circle-info size-22" style="color: #FFB600;"></i>
                            </div>
                        </div>
                        <div class="col align-self-center ps-0">
                            <p class="fw-medium mb-0">Memo 1</p>
                            <p class="text-muted size-12">12 Agustus 2023</p>
                        </div>
                        <div class="col-auto align-self-center">
                            <i class="fa-regular fa-chevron-right" style="color: #BABABA;"></i>
                        </div>
                    </div>
                </div>
            </NuxtLink>
        </div>
        <div class="col-12 col-md-6 col-lg-4 mb-3">
            <NuxtLink to="#" class="card informasi">
                <div class="card-body py-0">
                    <div class="row">
                        <div class="col-auto ps-0">
                            <div class="avatar avatar-50 shadow-sm rounded-circle coverimg bg-informasi">
                                <i class="fa-solid fa-memo-circle-info size-22" style="color: #FFB600;"></i>
                            </div>
                        </div>
                        <div class="col align-self-center ps-0">
                            <p class="fw-medium mb-0">Memo 2</p>
                            <p class="text-muted size-12">13 Agustus 2023</p>
                        </div>
                        <div class="col-auto align-self-center">
                            <i class="fa-regular fa-chevron-right" style="color: #BABABA;"></i>
                        </div>
                    </div>
                </div>
            </NuxtLink>
        </div>
        <div class="col-12 col-md-6 col-lg-4 mb-3">
            <NuxtLink to="#" class="card informasi">
                <div class="card-body py-0">
                    <div class="row">
                        <div class="col-auto ps-0">
                            <div class="avatar avatar-50 shadow-sm rounded-circle coverimg bg-informasi">
                                <i class="fa-solid fa-memo-circle-info size-22" style="color: #FFB600;"></i>
                            </div>
                        </div>
                        <div class="col align-self-center ps-0">
                            <p class="fw-medium mb-0">Memo 3</p>
                            <p class="text-muted size-12">14 Agustus 2023</p>
                        </div>
                        <div class="col-auto align-self-center">
                            <i class="fa-regular fa-chevron-right" style="color: #BABABA;"></i>
                        </div>
                    </div>
                </div>
            </NuxtLink>
        </div>
    </div>
    <!-- <button onclick="js_create('click')">CEK</button> -->
</template>

<style scoped></style>

<script setup>
const { urlBase } = useRuntimeConfig()
definePageMeta({
    layout: "home",
})
// const a = publicAssetsURL('css');
// console.log(a);
</script>
