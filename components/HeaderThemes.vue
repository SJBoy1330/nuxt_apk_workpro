<template>
     <!-- Header -->
    <header class="header position-fixed workpro">
        <img src="~/assets/img/background-header.png" class="position-absolute top-0 left-0" width="170">
        <div class="row">
            <div class="col-auto d-flex justify-content-center align-items-center">
                <div class="img-profile ms-2 mt-2">
                    <img src="~/assets/img/user1.jpg">
                </div>
                <div class="ms-2 mt-2">
                    <p class="ket-tebal">Jhon Doe</p>
                    <p class="ket-tipis">HRD & Analyst</p>
                </div>
            </div>
            <div class="col text-center"></div>
            <div class="col-auto">
                <div class="me-2 mt-2">
                    <NuxtLink to="/">
                        <i class="fa-regular fa-bell fs-3"></i>
                    </NuxtLink>
                </div>
            </div>
        </div>
        <div class="row mt-3">
            <div class="col-6 pe-1">
                <NuxtLink class="card rectangle-check p-0" data-bs-toggle="offcanvas" to="#offcanvasExample" role="button" aria-controls="offcanvasExample">
                    <div class="card-body">
                        <div class="row">
                            <div class="col-auto ps-2">
                                <div class="avatar avatar-40 rounded-circle ellipse-check">
                                    <i class="fa-regular fa-person-to-portal fs-5" style="color: #FFB600;"></i>
                                </div>
                            </div>
                            <div class="col px-0">
                                <p class="size-10 text-secondary mb-0">Jam Masuk</p>
                                <p class="ket-tebal mt-0">06:43</p>
                            </div>
                            <div class="col-auto ps-0">
                                <i class="fa-regular fa-chevron-right" style="color: #BABABA;"></i>
                            </div>
                        </div>
                    </div>
                </NuxtLink>
            </div>
            <div class="col-6 ps-1">
                <NuxtLink class="card rectangle-check p-0" data-bs-toggle="offcanvas" to="#offcanvasExample2" role="button" aria-controls="offcanvasExample2">
                    <div class="card-body">
                        <div class="row">
                            <div class="col-auto ps-2">
                                <div class="avatar avatar-40 rounded-circle ellipse-check">
                                    <i class="fa-regular fa-person-from-portal fs-5" style="color: #FFB600;"></i>
                                </div>
                            </div>
                            <div class="col px-0">
                                <p class="size-10 text-secondary mb-0">Jam Pulang</p>
                                <p class="ket-tebal mt-0">--:--</p>
                            </div>
                            <div class="col-auto ps-0">
                                <i class="fa-regular fa-chevron-right" style="color: #BABABA;"></i>
                            </div>
                        </div>
                    </div>
                </NuxtLink>
            </div>
        </div>
    </header>
    <!-- Header ends -->
    <div class="offcanvas offcanvas-bottom border-0" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
        <div class="offcanvas-header">
            <h5 class="offcanvas-title fw-bold" id="offcanvasExampleLabel">Autentifikasi Fingerprint</h5>
            <button type="button" class="btn-close text-reset d-flex justify-content-center align-items-center" data-bs-dismiss="offcanvas" aria-label="Close"><i class="fa-solid fa-xmark"></i></button>
        </div>
        <div class="offcanvas-body small">
            <div class="row">
                <div class="col-12 d-flex justify-content-center align-items-center flex-column">
                    <div class="wrapper-fingerprint d-flex justify-content-center align-items-center">
                        <img src="~/assets/img/fingerprint.png" width="85">
                    </div>
                    <span class="size-20 mt-4 fw-medium">Checkin Fingerprint</span>
                    <span class="size-14 mt-2 text-secondary text-center">WorkPro membutuhkan fingerprint pada perangkat anda untuk melakukan Check-IN</span>
                    <NuxtLink class="btn btn-default btn-lg mt-4 px-4 shadow-sm d-flex justify-content-center align-items-center" style="width: 100%; height: 40px; background-color: #FFB600;">Gunakan Kamera</NuxtLink>
                </div>
            </div>
        </div>
    </div>

    <div class="offcanvas offcanvas-bottom border-0" tabindex="-1" id="offcanvasExample2" aria-labelledby="offcanvasExampleLabel">
        <div class="offcanvas-header">
            <h5 class="offcanvas-title fw-bold" id="offcanvasExampleLabel">Autentifikasi Fingerprint</h5>
            <button type="button" class="btn-close text-reset d-flex justify-content-center align-items-center" data-bs-dismiss="offcanvas" aria-label="Close"><i class="fa-solid fa-xmark"></i></button>
        </div>
        <div class="offcanvas-body small">
            <div class="row">
                <div class="col-12 d-flex justify-content-center align-items-center flex-column">
                    <div class="wrapper-fingerprint d-flex justify-content-center align-items-center">
                        <img src="~/assets/img/no-fingerprint.png" width="100">
                    </div>
                    <span class="size-20 mt-4 fw-medium">Checkin Fingerprint</span>
                    <span class="size-14 mt-2 text-secondary text-center">WorkPro membutuhkan fingerprint pada perangkat anda untuk melakukan Check-IN</span>
                    <NuxtLink class="btn btn-default btn-lg mt-4 px-4 shadow-sm d-flex justify-content-center align-items-center" style="width: 100%; height: 40px; background-color: #FFB600;">Gunakan Kamera</NuxtLink>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
</script>

<style scoped></style>