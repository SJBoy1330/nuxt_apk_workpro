<template>
    <img src="~/assets/img/background-auth.png" class="position-fixed top-0" style="z-index: -1;">
    <header class="header position-fixed">
        <div class="row">
            <div class="col-auto">
                <NuxtLink to="/auth" class="ms-2 mt-3 d-flex justify-content-center align-items-center">
                    <i class="fa-solid  fa-chevron-left"></i>
                    <p class="ms-2 text-dark fw-medium">Lupa kata sandi</p>
                </NuxtLink>
            </div>
        </div>
    </header>
    <div class="main-container container mt-5">
        <div class="wrapper-login p-3">
            <div class="row">
                <div class="col-12 text-center px-4">
                    <p class="mt-3 fw-light" style="color: #A2A2A2;">Masukkan alamat email yang terkait dengan akun yang terdaftat di aplikasi WorkPro</p>
                </div>
            </div>
            <div class="row mt-3">
                <div class="col-12 px-4">
                    <div class="mb-3">
                        <label class="form-label">Email</label>
                        <input type="email" class="form-control border-bottom border-top-0 border-start-0 border-end-0 rounded-0 border-3 ps-0 one" placeholder="Masukkan email">
                    </div>
                    <div class="mb-4">
                        <NuxtLink to="/auth/verifikasi"
                        class="btn btn-default btn-lg mt-4 px-4 shadow-sm d-flex justify-content-center align-items-center"
                        style="width: 100%; height: 30px; background-color: #FFB600;">Kirim</NuxtLink>
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
