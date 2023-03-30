<template>
    <button class="btn btn-tambah" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight"
        aria-controls="offcanvasRight">
        <i class="fa-regular fa-plus" style="font-size: 24px;"></i>
    </button>

    <!-- Tambah Kunjungan -->
    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
        <div class="offcanvas-header">
            <h5 id="offcanvasRightLabel"></h5>
            <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"><i
                    class="fa-regular fa-xmark"></i></button>
        </div>
        <div class="offcanvas-body">
            <div class="row">
                <div class="col-12">
                    <div class="mb-3">
                        <div id="map-container-google-1" class="z-depth-1-half map-container" style="height: 250px">
                            <iframe src="https://maps.google.com/maps?q=manhatan&t=&z=13&ie=UTF8&iwloc=&output=embed"
                                frameborder="0" style="border:0" allowfullscreen></iframe>
                        </div>
                    </div>
                    <div class="mb-3">
                        <label class="form-label fw-medium">Tanggal Selesai <span class="text-danger">*</span></label>
                        <input type="date" class="form-control form-control-solid form-control-workpro border-0 one"
                            placeholder="Masukkan tanggal selesai">
                    </div>
                    <div class="mb-3">
                        <label class="form-label fw-medium">Nama Tempat <span class="text-danger">*</span></label>
                        <input type="text" class="form-control form-control-solid form-control-workpro border-0 one"
                            placeholder="Masukkan nama tempat">
                    </div>
                    <div class="mb-3">
                        <label class="form-label fw-medium">Keterangan <span class="text-danger">*</span></label>
                        <textarea class="form-control form-control-solid form-control-workpro-textarea border-0 one"
                            rows="3" placeholder="Masukkan keterangan anda"></textarea>
                    </div>
                    <div class="mb-3">
                        <label class="form-label fw-medium">Bukti Pendukung <span class="text-danger">*</span></label>
                        <div class="upload__box">
                            <div class="upload__btn-box">
                                <label class="upload__btn">
                                    <p class="text-center fw-light" style="width: 200px;">Letakkan gambar Anda di sini atau
                                        <span class="fw-medium text-warning">jelajahi</span>
                                    </p>
                                    <input type="file" multiple="" data-max_length="20" class="upload__inputfile">
                                </label>
                            </div>
                            <div class="upload__img-wrap"></div>
                        </div>
                    </div>
                    <div class="mb-3">
                        <label class="form-label fw-medium">Tanda tangan <span class="text-danger"></span></label>
                        <div class="wrapper">
                            <canvas id="signature-pad" width="400" height="200"></canvas>
                            <button id="clear"><span> Hapus </span></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="offcanvas-footer p-3">
            <NuxtLink to="/"
                class="btn btn-default btn-lg mt-4 px-4 shadow-sm d-flex justify-content-center align-items-center"
                style="width: 100%; height: 30px; background-color: #FFB600;">Kirim</NuxtLink>
        </div>
    </div>

    <div class="row mb-4">
        <div class="col-12 mb-3">
            <div class="card card-lembur mb-4">
                <div class="card-body pt-2 pb-1">
                    <div class="row">
                        <div class="d-flex justify-content-between align-items-center mb-3 px-2">
                            <NuxtLink class="previous-next-btn">
                                <i class="fa-solid fa-chevron-left" style="color: #FFB600"></i>
                            </NuxtLink>
                            <div class="wrapper-tanggal">
                                <p class="fs-14 fw-normal mb-0">Agustus, 2022</p>
                            </div>
                            <NuxtLink class="previous-next-btn">
                                <i class="fa-solid fa-chevron-right" style="color: #FFDE8D;"></i>
                            </NuxtLink>
                        </div>

                        <!-- Tab content -->
                        <div>
                            <div class="row mt-2 mb-3">
                                <p class="text-secondary">Total Kunjungan 4</p>
                            </div>
                            <NuxtLink class="row mb-3 px-2">
                                <div class="col-auto ps-0">
                                    <div class="avatar avatar-50 rounded-circle coverimg bg-informasi">
                                        <i class="fa-solid fa-location-dot size-24" style="color: #FFB600"></i>
                                    </div>
                                </div>
                                <div class="col align-self-center ps-0">
                                    <p class="fw-medium mb-0 size-14">Kunjungan bertemu...</p>
                                    <p class="text-muted size-12">Lorem ipsum dolor...</p>
                                </div>
                                <div class="col-auto align-self-center">
                                    <span class="badge rounded-pill fw-light"
                                        style="color: #FFB600; background: #FEF1CF;">25 Agt</span>
                                </div>
                            </NuxtLink>
                            <NuxtLink class="row mb-3 px-2">
                                <div class="col-auto ps-0">
                                    <div class="avatar avatar-50 rounded-circle coverimg bg-informasi">
                                        <i class="fa-solid fa-location-dot size-24" style="color: #FFB600"></i>
                                    </div>
                                </div>
                                <div class="col align-self-center ps-0">
                                    <p class="fw-medium mb-0 size-14">Kunjungan minggu...</p>
                                    <p class="text-muted size-12">Lorem ipsum dolor...</p>
                                </div>
                                <div class="col-auto align-self-center">
                                    <span class="badge rounded-pill fw-light"
                                        style="color: #FFB600; background: #FEF1CF;">26 Agt</span>
                                </div>
                            </NuxtLink>
                            <NuxtLink class="row mb-3 px-2">
                                <div class="col-auto ps-0">
                                    <div class="avatar avatar-50 rounded-circle coverimg bg-informasi">
                                        <i class="fa-solid fa-location-dot size-24" style="color: #FFB600"></i>
                                    </div>
                                </div>
                                <div class="col align-self-center ps-0">
                                    <p class="fw-medium mb-0 size-14">Kunjungan harian...</p>
                                    <p class="text-muted size-12">Lorem ipsum dolor...</p>
                                </div>
                                <div class="col-auto align-self-center">
                                    <span class="badge rounded-pill fw-light"
                                        style="color: #FFB600; background: #FEF1CF;">27 Agt</span>
                                </div>
                            </NuxtLink>
                            <NuxtLink class="row mb-3 px-2">
                                <div class="col-auto ps-0">
                                    <div class="avatar avatar-50 rounded-circle coverimg bg-informasi">
                                        <i class="fa-solid fa-location-dot size-24" style="color: #FFB600"></i>
                                    </div>
                                </div>
                                <div class="col align-self-center ps-0">
                                    <p class="fw-medium mb-0 size-14">Kunjungan luar...</p>
                                    <p class="text-muted size-12">Lorem ipsum dolor...</p>
                                </div>
                                <div class="col-auto align-self-center">
                                    <span class="badge rounded-pill fw-light"
                                        style="color: #FFB600; background: #FEF1CF;">28 Agt</span>
                                </div>
                            </NuxtLink>
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
useHead({
    title: 'RIWAYAT',
    script: [
        {
            src: 'https://cdnjs.cloudflare.com/ajax/libs/signature_pad/1.3.5/signature_pad.min.js'
        },
        {
            src: '/assets/js/page/signature.js'
        }
    ]
})
</script>