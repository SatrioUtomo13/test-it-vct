<template>
    <aside
        id="logo-sidebar"
        class="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-[#191C1F] sm:translate-x-0"
        aria-label="Sidebar"
    >
        <div class="h-full pb-4 overflow-y-auto bg-[#191C1F] text-white">
            <ul class="space-y-2 font-medium">
                <li>
                    <router-link
                        to="/"
                        class="flex items-center px-2 py-4 hover:bg-[#232C32] group"
                    >
                        <span class="ms-3">Now Playing</span>
                    </router-link>
                </li>
                <li>
                    <a href="#" class="flex items-center px-2 py-4 hover:bg-[#232C32] group">
                        <span class="flex-1 ms-3 whitespace-nowrap">Coming Soon</span>
                    </a>
                </li>
                <li>
                    <a href="#" class="flex items-center px-2 py-4 hover:bg-[#232C32] group">
                        <span class="flex-1 ms-3 whitespace-nowrap">Theatre</span>
                    </a>
                </li>
                <li>
                    <a href="#" class="flex items-center px-2 py-4 hover:bg-[#232C32] group">
                        <span class="flex-1 ms-3 whitespace-nowrap">Promotion</span>
                    </a>
                </li>
                <li>
                    <a href="#" class="flex items-center px-2 py-4 hover:bg-[#232C32] group">
                        <span class="flex-1 ms-3 whitespace-nowrap">Informations</span>
                    </a>
                </li>
            </ul>
        </div>
    </aside>
</template>