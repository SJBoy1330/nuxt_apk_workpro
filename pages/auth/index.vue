<template>
    <img src="~/assets/img/rectangle-login.png" class="position-fixed top-0" style="z-index: -1;">
    <header class="header position-fixed">
        <div class="row">
            <div class="col-auto">
                <div class="ms-2 mt-3 d-flex justify-content-center align-items-center">
                    <img src="~/assets/img/workpro-logo.png" width="40">
                </div>
            </div>
            <div class="col text-center"></div>
            <div class="col-auto">
                <div class="mt-2">
                    <button class="btn btn-primary d-flex align-items-center bg-transparent border-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop" aria-controls="offcanvasTop">
                        <img src="~/assets/img/indonesia-flag.png" width="35">
                        <i class="fa-solid fa-chevron-down text-dark ms-2"></i>
                    </button>
                    <div class="offcanvas offcanvas-top" tabindex="-1" id="offcanvasTop" aria-labelledby="offcanvasTopLabel" style="height: 115px;">
                    <div class="offcanvas-header">
                        <h5 class="fw-medium" id="offcanvasTopLabel">Ganti Bahasa</h5>
                        <button type="button" class="btn-close text-reset d-flex justify-content-center align-items-center" data-bs-dismiss="offcanvas" aria-label="Close"><i class="fa-regular fa-xmark"></i></button>
                    </div>
                    <div class="offcanvas-body">
                        <div class="row">
                            
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
    <div class="main-container container">
        <div class="wrapper-login p-3">
            <div class="row">
                <div class="col-12 d-flex justify-content-center align-items-center flex-column">
                    <img src="~/assets/img/workpro-text.png" width="100" class="mt-3">
                    <p class="mt-3 fw-light" style="color: #A2A2A2;">Silahkan masuk untuk melanjutkan</p>
                </div>
            </div>
            <div class="row mt-5">
                <div class="col-12 px-4">
                    <div class="mb-3">
                        <label class="form-label">Email</label>
                        <input type="email" class="form-control border-bottom border-top-0 border-start-0 border-end-0 rounded-0 border-3 ps-0 one" placeholder="Masukkan email">
                    </div>
                    <div>
                        <label class="form-label">Kata sandi</label>
                        <input type="password" class="form-control border-bottom border-top-0 border-start-0 border-end-0 rounded-0 border-3 ps-0 two" placeholder="Masukkan kata sandi">
                    </div>
                    <div class="mb-3 text-end">
                        <NuxtLink to="/auth/lupakatasandi" class="text-primary size-12"> Lupa kata sandi? </NuxtLink>
                    </div>
                    <div class="mb-4">
                        <NuxtLink
                        class="btn btn-default btn-lg mt-4 px-4 shadow-sm d-flex justify-content-center align-items-center"
                        style="width: 100%; height: 30px; background-color: #FFB600;">Login</NuxtLink>
                        <p class="text-center size-12 mt-2">Dengan masuk dan mendaftar, kamu menyetujui <span class="text-primary">Ketentuan Layanan</span> dan <span class="text-primary">Kebijakan Privasi</span></p>
                    </div>

                    <div class="border"></div>

                    <div class="my-3 text-center">
                        <NuxtLink to="#" class="text-primary size-16 fw-medium">
                            Gunakan demo akun
                        </NuxtLink>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped></style>

<script setup>
const { urlBase } = useRuntimeConfig()
definePageMeta({
    layout: "auth",
})
// const a = publicAssetsURL('css');
// console.log(a);
</script>
