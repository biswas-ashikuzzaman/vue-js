<template>
  <header class="header">
    <div class="left">
      <button class="icon-btn" @click="$emit('toggle-sidebar')">
        <!-- simple svg burger -->
        <svg width="18" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
          <rect x="3" y="5" width="18" height="2" rx="1" :fill="iconFill"/>
          <rect x="3" y="11" width="18" height="2" rx="1" :fill="iconFill"/>
          <rect x="3" y="17" width="12" height="2" rx="1" :fill="iconFill"/>
        </svg>
      </button>
      <div class="brand">
        <div class="logo round" />
        <div class="title">
          <strong>MyApp</strong>
          <div class="subtitle">Admin Panel</div>
        </div>
      </div>
    </div>

    <div class="center">
      <div class="search card">
        <input v-model="q" placeholder="Search..." @keyup.enter="doSearch" />
        <button class="icon-btn" @click="doSearch">🔎</button>
      </div>
    </div>

    <div class="right">
      <button class="mode-btn card" @click="$emit('toggle-dark')" :title="isDark ? 'Light mode' : 'Dark mode'">
        <span v-if="isDark">🌞</span>
        <span v-else>🌙</span>
      </button>

      <div class="profile card" @click="toggleMenu">
        <div class="avatar" />
        <div class="meta">
          <div class="name">DAVID SMITH</div>
          <div class="role">Admin</div>
        </div>
        <svg v-if="!open" width="10" height="10" viewBox="0 0 24 24"><path d="M6 9l6 6 6-6" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>
        <svg v-else width="10" height="10" viewBox="0 0 24 24"><path d="M18 15l-6-6-6 6" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>

        <ul v-if="open" class="dropdown">
          <li @click="goHome">Home</li>
          <li @click="logout">Logout</li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  props: { isDark: { type:Boolean, default:false } },
  data(){ return { q:'', open:false } },
  computed:{
    iconFill(){ return this.isDark ? '#e6eef8' : '#1f2937' }
  },
  methods:{
    doSearch(){ alert('Search: '+this.q) },
    toggleMenu(){ this.open = !this.open },
    goHome(){ this.open=false; alert('Go home') },
    logout(){ this.open=false; alert('Logout') }
  }
}
</script>

<style scoped>
.header{
  height:72px;
  display:flex;
  align-items:center;
  justify-content:space-between;
  padding:0 18px;
  border-bottom: 1px solid rgba(0,0,0,0.05);
  background: transparent;
}

/* left */
.left{ display:flex; align-items:center; gap:12px; }
.icon-btn{
  background:var(--panel);
  border:none;
  padding:8px;
  border-radius:10px;
  cursor:pointer;
  box-shadow: 0 6px 18px var(--shadow);
}
.brand{ display:flex; gap:10px; align-items:center; }
.brand .logo{
  width:42px; height:42px; background: linear-gradient(135deg,var(--accent), #ffd47a); border-radius:10px; box-shadow: 0 6px 18px var(--shadow);
}
.brand .title .subtitle{ font-size:11px; color:var(--muted) }

/* center */
.center{ flex:1; display:flex; justify-content:center; padding:0 20px; }
.search{ display:flex; align-items:center; gap:8px; width:480px; max-width:100%; padding:8px 12px; }
.search input{ flex:1; border:none; outline:none; background:transparent; font-size:14px; color:var(--text) }

/* right */
.right{ display:flex; align-items:center; gap:12px; }
.profile{ display:flex; align-items:center; gap:10px; position:relative; cursor:pointer; padding:8px 10px; }
.avatar{ width:40px; height:40px; background: linear-gradient(135deg,#fff, rgba(255,255,255,0.7)); border-radius:8px; border:2px solid rgba(0,0,0,0.05) }
.meta .name{ font-weight:600; font-size:14px }
.meta .role{ font-size:12px; color:var(--muted) }

.mode-btn{ padding:8px; }

/* dropdown */
.dropdown{
  position:absolute; right:0; top:54px; width:150px; list-style:none; margin:0; padding:6px 0; border-radius:10px;
  background:var(--panel); box-shadow:0 8px 26px var(--shadow);
}
.dropdown li{ padding:10px 12px; cursor:pointer; font-size:14px }
.dropdown li:hover{ background:rgba(0,0,0,0.04) }

/* small responsiveness */
@media (max-width:900px){
  .center{ display:none; }
  .brand .title{ display:none; }
  .profile .meta{ display:none; }
}
</style>
