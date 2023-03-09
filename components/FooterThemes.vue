<template>
    <footer class="footer">
        <div class="container">
            <ul class="nav nav-pills nav-justified">
                <li class="nav-item">
                    <NuxtLink class="nav-link mt-1  active" to="/">
                        <span>
                            <i class="fa-solid fa-house size-22"></i>
                            <span class="nav-text">Home</span>
                        </span>
                    </NuxtLink>
                </li>
                <li class="nav-item">
                    <NuxtLink class="nav-link mt-1" to="/persetujuan">
                        <span>
                            <i class="fa-regular fa-handshake size-22"></i>
                            <span class="nav-text">Persetujuan</span>
                        </span>
                    </NuxtLink>
                </li>
                <li class="nav-item">
                    <NuxtLink class="nav-link mt-1" to="/presensi/riwayat">
                        <span>
                            <i class="fa-regular fa-notebook size-22"></i>
                            <span class="nav-text">Riwayat</span>
                        </span>
                    </NuxtLink>
                </li>
                <li class="nav-item">
                    <NuxtLink class="nav-link mt-1" to="/profil">
                        <span>
                            <i class="fa-regular fa-circle-user size-22"></i>
                            <span class="nav-text">Profil</span>
                        </span>
                    </NuxtLink>
                </li>
            </ul>
        </div>
    </footer>
</template>

<script setup>
</script>

<style scoped></style>