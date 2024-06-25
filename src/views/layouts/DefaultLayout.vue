<template>
    <Navbar />
    <Sidebar />
    <div class="p-4 sm:ml-64 bg-[#232C32]">
        <div class="p-4 mt-14">
            <router-view />
        </div>
    </div>
    <Footer />
</template>

<script setup>
import Navbar from '../../components/widgets/Navbar.vue'
import Sidebar from '../../components/widgets/Sidebar.vue'
import Footer from '../../components/widgets/Footer.vue'
</script>