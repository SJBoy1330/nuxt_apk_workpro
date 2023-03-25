<template>
    <div class="row">
        <div class="col-12 col-md-6 col-lg-4 mb-3">
            <div class="card informasi" style="min-height: 500px;">
                <div class="card-body py-0">
                    <div class="judul mt-3">
                        <p class="text-dark fw-medium size-16">Bagaimana cara registrasi di WorkPro?</p>
                    </div>
                    <div class="detail my-3">
                        <ul class="list-group">
                            <li class="list-group-item d-flex border-0 py-1"> <span><i class="fa-solid fa-circle me-2" style="font-size: 8px;"></i></span> Download aplikasi WorkPro di App Store/ Google Play Store</li>
                            <li class="list-group-item d-flex border-0 py-1"> <span><i class="fa-solid fa-circle me-2" style="font-size: 8px;"></i></span> Lakukan registrasi dengan memasukkan email dan password yang terdaftar</li>
                            <li class="list-group-item d-flex border-0 py-1"> <span><i class="fa-solid fa-circle me-2" style="font-size: 8px;"></i></span> Selesai</li>
                        </ul>
                    </div>
                    <div class="line-horizontal"></div>
                    <div class="d-flex justify-content-center align-items-center flex-column mt-3">
                        <p>Merasa terbantu?</p>
                        <div class="d-flex mt-3">
                            <div class="d-flex flex-column align-items-center me-2">
                                <button class="rating">
                                    <i class="fa-solid fa-thumbs-up" style="color: #888888;"></i>
                                </button>
                                <p class="text-muted size-13 mt-1">Ya</p>
                            </div>
                            <div class="d-flex flex-column align-items-center ms-2">
                                <button class="rating">
                                    <i class="fa-solid fa-thumbs-down" style="color: #888888;"></i>
                                </button>
                                <p class="text-muted size-13 mt-1">Tidak</p>
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
const { urlBase } = useRuntimeConfig()
definePageMeta({
    layout: "default",
})
</script>