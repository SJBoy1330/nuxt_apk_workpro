<template>
   <div class="row mb-4">
        <div class="col-12 mb-3">
            <NuxtLink class="card overflow-hidden presensi" to="#">
                <img src="~/assets/img/vector-presensi.png" class="position-absolute bottom-0 right-0" width="164">
                <img src="~/assets/img/background-presensi.png" class="position-absolute bottom-0 left-0" width="110">
                <div class="card-body px-2 py-2">
                    <div class="row">
                        <div class="col align-self-center">
                            <p class="size-18 fw-light text-white mb-0">Presensi</p>
                            <p class="size-20 fw-light text-white">12 <span class="size-14 fw-light">Pengajuan</span></p>
                        </div>
                    </div>
                </div>
            </NuxtLink>
        </div>

        <div class="col-6 mb-3 pe-2">
            <NuxtLink class="card overflow-hidden lembur" to="#">
                <img src="~/assets/img/vector-lembur.png" class="position-absolute bottom-0 right-0" width="100">
                <img src="~/assets/img/background-lembur1.png" class="position-absolute bottom-0 left-0" width="60">
                <img src="~/assets/img/background-lembur2.png" class="position-absolute top-0 right-0" width="50">
                <div class="card-body px-1 py-1">
                    <div class="row">
                        <div class="col align-self-center">
                            <p class="size-16 fw-light text-white mb-0">Lembur</p>
                            <p class="size-18 fw-light text-white">12 <span class="size-14 fw-light">Pengajuan</span></p>
                        </div>
                    </div>
                </div>
            </NuxtLink>
        </div>

        <div class="col-6 mb-3 ps-2">
            <NuxtLink class="card overflow-hidden reimburse" to="#">
                <img src="~/assets/img/vector-reimburse.png" class="position-absolute bottom-0 right-0" width="100">
                <img src="~/assets/img/background-reimburse1.png" class="position-absolute bottom-0 left-0" width="60">
                <img src="~/assets/img/background-reimburse2.png" class="position-absolute top-0 right-0" width="50">
                <div class="card-body px-1 py-1">
                    <div class="row">
                        <div class="col align-self-center">
                            <p class="size-16 fw-light text-white mb-0">Reimburse</p>
                            <p class="size-18 fw-light text-white">12 <span class="size-14 fw-light">Pengajuan</span></p>
                        </div>
                    </div>
                </div>
            </NuxtLink>
        </div>

        <div class="col-6 mb-3 pe-2">
            <NuxtLink class="card overflow-hidden tukar-shift" to="#">
                <img src="~/assets/img/vector-tukar-shift.png" class="position-absolute bottom-0 right-0" width="100">
                <img src="~/assets/img/background-tukar-shift1.png" class="position-absolute bottom-0 left-0" width="60">
                <img src="~/assets/img/background-tukar-shift2.png" class="position-absolute top-0 right-0" width="50">
                <div class="card-body px-1 py-1">
                    <div class="row">
                        <div class="col align-self-center">
                            <p class="size-16 fw-light text-white mb-0">Tukar Shift</p>
                            <p class="size-18 fw-light text-white">12 <span class="size-14 fw-light">Pengajuan</span></p>
                        </div>
                    </div>
                </div>
            </NuxtLink>
        </div>

        <div class="col-6 mb-3 ps-2">
            <NuxtLink class="card overflow-hidden izin-kerja" to="#">
                <img src="~/assets/img/vector-izin-kerja.png" class="position-absolute bottom-0 right-0" width="100">
                <img src="~/assets/img/background-izin-kerja1.png" class="position-absolute bottom-0 left-0" width="60">
                <img src="~/assets/img/background-izin-kerja2.png" class="position-absolute top-0 right-0" width="50">
                <div class="card-body px-1 py-1">
                    <div class="row">
                        <div class="col align-self-center">
                            <p class="size-16 fw-light text-white mb-0">Izin Kerja</p>
                            <p class="size-18 fw-light text-white">12 <span class="size-14 fw-light">Pengajuan</span></p>
                        </div>
                    </div>
                </div>
            </NuxtLink>
        </div>
    </div>
</template>

<style scoped>

</style>

<script setup>
    definePageMeta({
        layout: "second",
    })
</script>