<template>
    <!-- Header -->
    <header class="header position-fixed workpro2">
        <img src="~/assets/img/background-header.png" class="position-absolute top-0 left-0" width="110">
        <div class="row">
            <div class="col-auto">
                <NuxtLink to="/" class="ms-2 mt-3 d-flex justify-content-center align-items-center">
                    <i class="fa-solid fa-chevron-left"></i>
                    <p class="ms-2 fw-medium">Pengumuman</p>
                </NuxtLink>
            </div>
            <div class="col text-center"></div>
            <div class="col-auto">
                <div class="me-2 mt-2">
                    <NuxtLink to="#">
                        <i class="fa-regular fa-bell fs-3"></i>
                    </NuxtLink>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-12 px-3 my-2">
                <div class="input-container">
                    <input type="text" class="form-control form-control-solid form-control-pencarian border-0 one input-field" placeholder="Pencarian">
                    <i class="fa-regular fa-magnifying-glass icon pe-3" style="height: 35px;"></i>
                </div>
            </div>
        </div>
    </header>
</template>

<script>

</script>

<style scoped></style>