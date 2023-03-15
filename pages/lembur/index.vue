<template>
    <div class="row mb-4">
        <div class="col-12 mb-3">
            <div class="card card-riwayat mb-4">
                <div class="card-body py-2">
                    <div class="row">
                        <p class="text-center text-secondary size-16 mb-3">Riwayat Kehadiran</p>
                        <!-- Tab links -->
                        <div class="tab">
                            <button class="tab tablinks my-2 active" id="tabMasuk" onclick="openCity(this, 'Masuk')"
                                data-kt-button="true">Masuk</button>
                            <button class="tab tablinks my-2" id="tabTidakMasuk" onclick="openCity(this, 'TidakMasuk')"
                                data-kt-button="true">Tidak masuk</button>
                        </div>

                        <!-- Tab content -->
                        <div id="Masuk" class="tabcontent" style="display : block;">
                            <div class="row mt-4">


                                <div class="col text-center">
                                    <i class="fa-regular fa-circle-xmark" style="color: #FF1111; font-size: 1.4rem;;"></i>
                                    <p class="text-secondary size-14">Terlambat</p>
                                    <p class="text-dark size-14">-</p>
                                </div>
                                <div class="col-auto text-center px-0">
                                    <div class="line"></div>
                                </div>
                                <div class="col text-center">
                                    <i class="fa-regular fa-face-smile" style="color: #329AFB; font-size: 1.4rem;;"></i>
                                    <p class="text-secondary size-14">Masuk</p>
                                    <p class="text-dark size-14">7</p>
                                </div>
                                <div class="col-auto text-center px-0">
                                    <div class="line"></div>
                                </div>
                                <div class="col text-center">
                                    <p class="fw-normal size-32 mb-0" style="color: #FFB600">12</p>
                                    <p class="text-secondary size-14">Hari</p>
                                </div>
                            </div>
                        </div>

                        <div id="TidakMasuk" class="tabcontent">
                            <div class="row mt-4">
                                <div class="col text-center">
                                    <i class="fa-regular fa-face-frown" style="color: #FF1111; font-size: 1.4rem;;"></i>
                                    <p class="text-secondary size-14">Alpha</p>
                                    <p class="text-dark size-14">7</p>
                                </div>
                                <div class="col-auto text-center px-0">
                                    <div class="line"></div>
                                </div>
                                <div class="col text-center">
                                    <i class="fa-regular fa-face-meh" style="color: #FFB600; font-size: 1.4rem;"></i>
                                    <p class="text-secondary size-14">Izin</p>
                                    <p class="text-dark size-14">5</p>
                                </div>
                                <div class="col-auto text-center px-0">
                                    <div class="line"></div>
                                </div>
                                <div class="col text-center">
                                    <p class="fw-normal size-32 mb-0" style="color: #FFB600">12</p>
                                    <p class="text-secondary size-14">Hari</p>
                                </div>
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
</script>