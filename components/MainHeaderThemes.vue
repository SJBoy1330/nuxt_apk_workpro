<template>
    <!-- Header -->
    <header class="header position-fixed workpro2">
        <img src="~/assets/img/background-header.png" class="position-absolute top-0 left-0" width="110">
        <div class="row">
            <div class="col-auto">
                <div class="ms-2 mt-3 d-flex justify-content-center align-items-center">
                    <a @click="$router.go(-1)" class="fa-solid fa-chevron-left"></a>
                    <p class="ms-2 fw-medium" id="page_title">PAGE TITLE</p>
                </div>
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
    </header>
</template>

<script>

</script>

<style scoped></style>