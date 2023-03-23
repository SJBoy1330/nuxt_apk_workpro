<template>
    <div class="row">
        <div class="col-12 col-md-6 col-lg-4 mb-3">
            <NuxtLink to="/informasi/detailinformasi" class="card informasi">
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
            <NuxtLink to="/informasi/detailinformasi" class="card informasi">
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
            <NuxtLink to="/informasi/detailinformasi" class="card informasi">
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
</template>
 
<style scoped></style>
 
<script setup>
// document.getElementById("tabOpen").click;
const { urlBase } = useRuntimeConfig()
definePageMeta({
    layout: "memo",
})
</script>