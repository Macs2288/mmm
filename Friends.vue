<template>
    <main class="game">
        <div class="page">
            <RouterView />
        </div>
        <TheMenu />
    </main>
</template>

<script setup>
import { RouterView } from 'vue-router'
import TheMenu from './components/TheMenu.vue'
</script>
<template>
    <div class="text-content">
        <h1>Your tasks</h1>
        <h3>Loading tasks...</h3>
        <ul class="list">
            <li class="list-item">
                Subscribe to telegram

                <span>
                    <a target="_blank" class="list-btn"> 50 </a>
                </span>
            </li>
        </ul>
    </div>
</template>