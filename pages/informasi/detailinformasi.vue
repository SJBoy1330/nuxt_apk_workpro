<template>
    <div class="row">
        <div class="col-12 col-md-6 col-lg-4 mb-3">
            <div class="card informasi">
                <div class="card-body py-0">
                    <div class="judul mt-3">
                        <p class="text-muted size-14">19 Agustus 2022</p>
                        <p class="text-dark fw-medium size-16">Memo 1</p>
                    </div>
                    <div class="detail my-3">
                        <p class="text-muted size-14">Isi memo :</p>
                        <p class="text-dark fw-nomrla size-16">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo cumque, reiciendis libero provident tenetur officia non nesciunt ut blanditiis, consequatur cum quia eum quas omnis autem fugiat saepe aperiam vel? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident sapiente voluptates distinctio optio explicabo tempora dolore quia omnis ipsa esse delectus, nostrum repudiandae doloribus autem atque eligendi id, quos non.</p>
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