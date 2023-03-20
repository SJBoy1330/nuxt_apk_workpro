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

            <div class="card mb-4" style="height: auto;">
                <div class="card-body py-2">
                    <div class="row">
                        <div class="col text-start ps-0">
                            <p class="text-secondary size-14">Detail Kehadiran</p>
                        </div>
                        <div class="col text-end pe-0">
                            <p class="size-14" style="color: #FFB600;">15 Agustus 2022</p>
                        </div>
                    </div>
                    <div class="row mt-3">
                        <div class="col-6 ps-0 pe-1">
                            <div class="card detail-kehadiran">
                                <div class="card-body ps-3 py-1">
                                    <div class="row d-flex flex-column">
                                        <div class="col-auto ps-0">
                                            <p class="text-dark fw-normal size-11">Jadwal Kerja</p>
                                        </div>
                                        <div class="col-auto d-flex align-items-center px-0 mt-2">
                                            <div class="circle-riwayat d-flex justify-content-center align-items-center"
                                                style="background-color: #E3FFE4;">
                                                <i class="fa-solid fa-chess-clock-flip"
                                                    style="color: #59CE8F; font-size: 0.8rem;"></i>
                                            </div>
                                            <p class="text-dark fw-normal size-10 ms-2">Jam Masuk : 07 : 00</p>
                                        </div>
                                        <div class="col-auto d-flex align-items-center px-0 mt-1">
                                            <div class="circle-riwayat d-flex justify-content-center align-items-center"
                                                style="background-color: #F8DBE0;">
                                                <i class="fa-solid fa-chess-clock"
                                                    style="color: #FF1111; font-size: 0.8rem;"></i>
                                            </div>
                                            <p class="text-dark fw-normal size-10 ms-2">Jam Pulang : 15 : 00</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-6 ps-1 pe-0">
                            <div class="card detail-kehadiran">
                                <div class="card-body ps-3 py-1">
                                    <div class="row d-flex flex-column">
                                        <div class="col-auto ps-0">
                                            <p class="text-dark fw-normal size-11">Jadwal Presensi</p>
                                        </div>
                                        <div class="col-auto d-flex align-items-center px-0 mt-2">
                                            <div class="circle-riwayat d-flex justify-content-center align-items-center"
                                                style="background-color: #E3FFE4;">
                                                <i class="fa-solid fa-chess-clock-flip"
                                                    style="color: #59CE8F; font-size: 0.8rem;"></i>
                                            </div>
                                            <p class="text-dark fw-normal size-10 ms-2">Jam Masuk : 06 : 50</p>
                                        </div>
                                        <div class="col-auto d-flex align-items-center px-0 mt-1">
                                            <div class="circle-riwayat d-flex justify-content-center align-items-center"
                                                style="background-color: #F8DBE0;">
                                                <i class="fa-solid fa-chess-clock"
                                                    style="color: #FF1111; font-size: 0.8rem;"></i>
                                            </div>
                                            <p class="text-dark fw-normal size-10 ms-2">Jam Pulang : -- : -- </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="card" style="height: auto;">
                <div class="card-body py-2">
                    <div class="row">
                        <div class="col text-start ps-0">
                            <p class="text-secondary size-14">Pilih Tanggal</p>
                        </div>
                        <div class="col text-end pe-0">
                            <p class="size-14" style="color: #FFB600;">15 Agustus 2022</p>
                        </div>
                    </div>
                    <div class="row mt-3">
                        <div class="col-12 px-0">
                            <div class="wrapper border-0">
                                <header>
                                    <p class="current-date"></p>
                                    <div class="icons">
                                        <span id="prev" class="material-symbols-rounded"><i
                                                class="fa-solid fa-chevron-left size-14"></i></span>
                                        <span id="next" class="material-symbols-rounded"><i
                                                class="fa-solid fa-chevron-right size-14"></i></span>
                                    </div>
                                </header>
                                <div class="calendar">
                                    <ul class="weeks mt-3">
                                        <li style="color: #FF1111;">M</li>
                                        <li>S</li>
                                        <li>S</li>
                                        <li>R</li>
                                        <li>K</li>
                                        <li>J</li>
                                        <li>S</li>
                                    </ul>
                                    <ul class="days"></ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row mx-0">
                        <div class="col px-0">
                            <p class="text-dark fw-medium size-16">Keterangan</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-4 d-flex align-items-center mt-2">
                            <div class="ket-masuk"></div>
                            <p class="text-dark size-12 ms-2">Masuk</p>
                        </div>

                        <div class="col-4 d-flex align-items-center mt-2">
                            <div class="ket-izin"></div>
                            <p class="text-dark size-12 ms-2">Izin</p>
                        </div>

                        <div class="col-4 d-flex align-items-center mt-2">
                            <div class="ket-libur"></div>
                            <p class="text-dark size-12 ms-2">Hari Libur</p>
                        </div>

                        <div class="col-4 d-flex align-items-center mt-2">
                            <div class="ket-terlambat"></div>
                            <p class="text-dark size-12 ms-2">Terlambat</p>
                        </div>

                        <div class="col-4 d-flex align-items-center mt-2">
                            <div class="ket-alpha"></div>
                            <p class="text-dark size-12 ms-2">Alpha</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
 
<style scoped></style>
 
<script setup>
useHead({
    title: 'Riwayat',
    meta: {
        title: 'Riwayat'
    },
    link: [
        {
            rel: 'stylesheet',
            href: '/assets/css/calendar.css'
        },
    ],
    script: [
        {
            src: '/assets/js/page/calendar.js', // calendar
            defer: ''
        }
    ]
})
</script>