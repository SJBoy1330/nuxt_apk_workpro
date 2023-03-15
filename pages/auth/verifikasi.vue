<template>
    <img src="~/assets/img/background-auth.png" class="position-fixed top-0" style="z-index: -1;">
    <header class="header position-fixed">
        <div class="row">
            <div class="col-auto">
                <NuxtLink to="/auth/lupakatasandi" class="ms-2 mt-3 d-flex justify-content-center align-items-center">
                    <i class="fa-solid  fa-chevron-left"></i>
                    <p class="ms-2 text-dark fw-medium">Verifikasi OTP</p>
                </NuxtLink>
            </div>
        </div>
    </header>
    <div class="main-container container mt-5">
        <div class="wrapper-login p-3">
            <div class="row">
                <div class="col-12 text-center px-4">
                    <p class="mt-3 fw-light" style="color: #A2A2A2;">Silahkan konfirmasi email untuk mendapatkan password baru anda</p>
                </div>
            </div>
            <div class="row mt-3">
                <div class="col-12 px-4">
                    <form action="" class="d-flex justify-content-around align-items-center my-2">
                        <input class="otp" type="text" oninput='digitValidate(this)' onkeyup='tabChange(1)' maxlength=1 >
                        <input class="otp" type="text" oninput='digitValidate(this)' onkeyup='tabChange(2)' maxlength=1 >
                        <input class="otp" type="text" oninput='digitValidate(this)' onkeyup='tabChange(3)' maxlength=1 >
                        <input class="otp" type="text" oninput='digitValidate(this)' onkeyup='tabChange(4)' maxlength=1 >
                    </form>
                    <p class="text-primary text-center size-12 mt-3">Kirim ulang kode OTP</p>
                    <div class="mb-4">
                        <NuxtLink to="/auth/verifikasi"
                        class="btn btn-default btn-lg mt-4 px-4 shadow-sm d-flex justify-content-center align-items-center"
                        style="width: 100%; height: 30px; background-color: #FFB600;">Verifikasi</NuxtLink>
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
