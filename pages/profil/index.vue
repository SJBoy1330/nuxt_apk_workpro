<template>
    <div class="row">
        <div class="col-12 mb-3">
            <div class="card profil">
                <div class="card-body py-2">
                    <div class="row d-flex justify-content-center align-items-center">
                        <div class="pic-profil" style="background-image: url(&quot;assets/img/user1.jpg&quot;);"></div>
                        <p class="text-center text-dark fw-medium size-18 mt-2">Jhon Doe</p>
                        <p class="text-center text-secondary size-18">HRD & Analyst</p>

                        <NuxtLink to="/profil/editprofil" class="btn-edit-profil my-2 px-3">
                            <p class="fw-normal me-2">Edit Profil</p> 
                            <i class="fa-regular fa-chevron-right"></i>
                        </NuxtLink>
                    </div>
                </div>
            </div>
            <div class="card full-ket">
                <p class="fw-normal text-secondary">Pengaturan</p>
            </div>
            <div class="card" style="height: auto;">
                <div class="card-body py-2">
                    <NuxtLink type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasBottom" aria-controls="offcanvasBottom" class="row d-flex justify-content-center align-items-center mb-4">
                        <div class="col-auto d-flex justify-content-center align-items-center">
                            <i class="fa-regular fa-user-clock size-22"></i>
                        </div>
                        <div class="col-auto ps-0">
                            <p class="text-dark fw-normal size-16">Pengingat check clock</p>
                        </div>
                        <div class="col text-end">
                            <i class="fa-regular fa-chevron-right"></i>
                        </div>
                    </NuxtLink>
                    <NuxtLink to="#" class="row d-flex justify-content-center align-items-center mb-4">
                        <div class="col-auto d-flex justify-content-center align-items-center">
                            <i class="fa-regular fa-book-user size-22"></i>
                        </div>
                        <div class="col-auto ps-2">
                            <p class="text-dark fw-normal size-16">Jadwal saya</p>
                        </div>
                        <div class="col text-end">
                            <i class="fa-regular fa-chevron-right"></i>
                        </div>
                    </NuxtLink>
                    <NuxtLink to="#" class="row d-flex justify-content-center align-items-center">
                        <div class="col-auto d-flex justify-content-center align-items-center">
                            <i class="fa-regular fa-trash-list size-22"></i>
                        </div>
                        <div class="col-auto ps-0">
                            <p class="text-dark fw-normal size-16">Hapus Cache</p>
                        </div>
                        <div class="col text-end">
                            <i class="fa-regular fa-chevron-right"></i>
                        </div>
                    </NuxtLink>
                </div>
            </div>
            <div class="card full-ket">
                <p class="fw-normal text-secondary">Informasi Lainnya</p>
            </div>
            <div class="card" style="height: auto;">
                <div class="card-body py-2">
                    <NuxtLink to="/profil/hubungikami" class="row d-flex justify-content-center align-items-center mb-4">
                        <div class="col-auto d-flex justify-content-center align-items-center">
                            <i class="fa-regular fa-headset size-20"></i>
                        </div>
                        <div class="col-auto ps-0">
                            <p class="text-dark fw-normal size-16">Hubungi kami</p>
                        </div>
                        <div class="col text-end">
                            <i class="fa-regular fa-chevron-right"></i>
                        </div>
                    </NuxtLink>
                    <NuxtLink to="/profil/tentangaplikasi" class="row d-flex justify-content-center align-items-center mb-4">
                        <div class="col-auto d-flex justify-content-center align-items-center">
                            <i class="fa-regular fa-circle-info size-20"></i>
                        </div>
                        <div class="col-auto ps-0">
                            <p class="text-dark fw-normal size-16">Tentang aplikasi</p>
                        </div>
                        <div class="col text-end">
                            <i class="fa-regular fa-chevron-right"></i>
                        </div>
                    </NuxtLink>
                    <NuxtLink to="/profil/bantuan" class="row d-flex justify-content-center align-items-center mb-4">
                        <div class="col-auto d-flex justify-content-center align-items-center">
                            <i class="fa-regular fa-book-open-reader size-20"></i>
                        </div>
                        <div class="col-auto ps-0">
                            <p class="text-dark fw-normal size-16">Bantuan</p>
                        </div>
                        <div class="col text-end">
                            <i class="fa-regular fa-chevron-right"></i>
                        </div>
                    </NuxtLink>
                    <NuxtLink to="#" class="row d-flex justify-content-center align-items-center mb-4">
                        <div class="col-auto d-flex justify-content-center align-items-center">
                            <i class="fa-regular fa-shield size-20"></i>
                        </div>
                        <div class="col-auto ps-0">
                            <p class="text-dark fw-normal size-16">Kebijakan privasi</p>
                        </div>
                        <div class="col text-end">
                            <i class="fa-regular fa-chevron-right"></i>
                        </div>
                    </NuxtLink>
                    <NuxtLink to="#" class="row d-flex justify-content-center align-items-center mb-4">
                        <div class="col-auto d-flex justify-content-center align-items-center">
                            <i class="fa-brands fa-teamspeak size-20"></i>
                        </div>
                        <div class="col-auto ps-0">
                            <p class="text-dark fw-normal size-16">Ketentuan layanan</p>
                        </div>
                        <div class="col text-end">
                            <i class="fa-regular fa-chevron-right"></i>
                        </div>
                    </NuxtLink>
                    <NuxtLink to="#" class="row d-flex justify-content-center align-items-center">
                        <div class="col-auto d-flex justify-content-center align-items-center">
                            <i class="fa-regular fa-right-from-bracket size-20"></i>
                        </div>
                        <div class="col-auto ps-0">
                            <p class="text-dark fw-normal size-16">Keluar</p>
                        </div>
                        <div class="col text-end">
                            <i class="fa-regular fa-chevron-right"></i>
                        </div>
                    </NuxtLink>
                </div>
            </div>
        </div>
    </div>

    <!-- OffCanvas -->
    <div class="offcanvas offcanvas-bottom" tabindex="-1" id="offcanvasBottom" aria-labelledby="offcanvasBottomLabel">
        <div class="offcanvas-header">
            <h5 class="offcanvas-title fw-bold" id="offcanvasBottomLabel">Pengingat Check Clock</h5>
            <button type="button" class="btn-close text-reset d-flex justify-content-center align-items-center" data-bs-dismiss="offcanvas" aria-label="Close">
                <i class="fa-solid fa-xmark"></i>
            </button>
        </div>
        <div class="offcanvas-body small">
            <div class="row">
                <div class="col-12 col-md-6 col-lg-4 mb-3">
                    <div class="card informasi">
                        <div class="card-body py-0">
                            <div class="row">
                                <div class="col-auto ps-0">
                                    <div class="avatar avatar-50 shadow-sm rounded-circle coverimg bg-informasi">
                                        <i class="fa-regular fa-person-to-portal fs-3" style="color: #FFB600;"></i>
                                    </div>
                                </div>
                                <div class="col align-self-center ps-0">
                                    <p class="fw-normal size-16 mb-0">Clock In</p>
                                </div>
                                <div class="col-auto align-self-center">
                                    <div class="form-check form-switch">
                                        <input class="form-check-input switches" type="checkbox" role="switch" id="">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-12 col-md-6 col-lg-4 mb-3">
                    <div class="card informasi">
                        <div class="card-body py-0">
                            <div class="row">
                                <div class="col-auto ps-0">
                                    <div class="avatar avatar-50 shadow-sm rounded-circle coverimg bg-informasi">
                                        <i class="fa-regular fa-person-from-portal fs-3" style="color: #FFB600;"></i>
                                    </div>
                                </div>
                                <div class="col align-self-center ps-0">
                                    <p class="fw-normal size-16 mb-0">Clock Out</p>
                                </div>
                                <div class="col-auto align-self-center">
                                    <div class="form-check form-switch">
                                        <input class="form-check-input switches" type="checkbox" role="switch" id="">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
 </template>
 
 <style scoped>
 
 </style>
 
 <script setup>
 </script>