<template>
    <div class="row mb-4">
        <div class="col-12 mb-3">
            <div class="card overflow-hidden" to="#">
                <div class="card-body px-2 py-2">
                    <div class="row text-center">
                        <p class="text-secondary fw-normal text-10 mb-2">Hadir</p>
                        <ul class="nav nav-tabs d-flex justify-content-around align-items-center tablink" id="myTab" role="tablist">
                            <li class="nav-item" role="presentation">
                                <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Home</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Profile</button>
                            </li>
                        </ul>
                        <div class="tab-content" id="myTabContent">
                        <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">Halo 1</div>
                        <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">Halo 2</div>
                        <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">Halo 3</div>
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
     definePageMeta({
         layout: "second",
     })
 </script>