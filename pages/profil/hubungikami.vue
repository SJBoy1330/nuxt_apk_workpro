<template>
    <div class="row">
        <div class="col-12 col-md-6 col-lg-4 mb-3">
            <NuxtLink to="#" class="card informasi">
                <div class="card-body py-0">
                    <div class="row">
                        <div class="col-auto ps-0">
                            <div class="avatar avatar-50 shadow-sm rounded-circle coverimg bg-informasi">
                                <i class="fa-solid fa-w size-22" style="color: #FFB600;"></i>
                            </div>
                        </div>
                        <div class="col align-self-center ps-0">
                            <p class="fw-normal mb-0">WorkPro</p>
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
                                <i class="fa-solid fa-buildings size-22" style="color: #FFB600;"></i>
                            </div>
                        </div>
                        <div class="col align-self-center ps-0">
                            <p class="fw-normal mb-0">PT. Alpha Tech Indonesiana</p>
                        </div>
                        <div class="col-auto align-self-center">
                            <i class="fa-regular fa-chevron-right" style="color: #BABABA;"></i>
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
// document.getElementById("tabOpen").click;
const { urlBase } = useRuntimeConfig()
definePageMeta({
    layout: "default",
})
</script>