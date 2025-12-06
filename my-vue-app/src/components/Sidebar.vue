<template>
  <aside :class="['sidebar', { collapsed: collapsed }]" >
    <div class="top">
      <div class="logo-section" @click="goHome">
        <div class="logo round"></div>
        <div v-if="!collapsed" class="texts">
          <div class="app">MyApp</div>
          <div class="small">Management</div>
        </div>
      </div>

      <button class="collapse-btn" @click="$emit('toggle'); collapsed = !collapsed">
        <span v-if="collapsed">➤</span>
        <span v-else>❮</span>
      </button>
    </div>

    <nav class="nav">
      <ul>
        <li v-for="item in items" :key="item.id" :class="{active: active===item.id}" @click="select(item.id)">
          <div class="icon">{{ item.icon }}</div>
          <div v-if="!collapsed" class="label">{{ item.label }}</div>
          <div v-if="item.badge && !collapsed" class="badge">{{ item.badge }}</div>
        </li>
      </ul>
    </nav>

    <div class="bottom" v-if="!collapsed">
      <div class="profile-mini">
        <div class="avatar"></div>
        <div class="info">
          <div class="name">DAVID SMITH</div>
          <div class="role">Administrator</div>
        </div>
      </div>
      <div class="settings">⚙ Settings</div>
    </div>
  </aside>
</template>

<script>
export default {
  name: "Sidebar",
  props: { collapsed: { type: Boolean, default:false } },
  data(){
    return {
      active: 'dashboard',
      items: [
        { id:'dashboard', label:'Dashboard', icon:'🏠' },
        { id:'tasks', label:'Tasks', icon:'🗂', badge:6 },
        { id:'calendar', label:'Calendar', icon:'📅' },
        { id:'charts', label:'Charts', icon:'📈' },
        { id:'forms', label:'Forms', icon:'📝' },
        { id:'messages', label:'Messages', icon:'✉️' },
        { id:'users', label:'Users', icon:'👥' },
      ]
    }
  },
  methods:{
    select(id){ this.active=id },
    goHome(){ this.active='dashboard' }
  }
}
</script>

<style scoped>
.sidebar{
  width:260px;
  background: linear-gradient(180deg, #fffaf0, #fff6e0);
  border-right: 1px solid rgba(0,0,0,0.04);
  display:flex; flex-direction:column; padding:14px; transition:width .22s ease, background .25s;
}
.sidebar.collapsed{ width:84px; }

.top{ display:flex; align-items:center; justify-content:space-between; margin-bottom:8px; gap:10px; }
.logo-section{ display:flex; align-items:center; gap:10px; cursor:pointer; }
.logo{ width:48px; height:48px; background: linear-gradient(135deg, var(--accent), #ffd47a); border-radius:10px; box-shadow:0 8px 20px var(--shadow) }

.texts .app{ font-weight:700 }
.texts .small{ font-size:12px; color:var(--muted) }

.collapse-btn{ background:var(--panel); border:none; padding:8px; border-radius:10px; cursor:pointer; box-shadow: 0 6px 18px var(--shadow) }

.nav{ flex:1; margin-top:8px; overflow:auto; }
.nav ul{ list-style:none; padding:0; margin:0; display:flex; flex-direction:column; gap:6px; }
.nav li{
  display:flex; align-items:center; gap:12px; padding:10px; border-radius:10px; cursor:pointer; transition: background .12s, transform .12s;
}
.nav li:hover{ background: rgba(0,0,0,0.03); transform: translateX(4px); }
.nav li .icon{ width:36px; text-align:center; font-size:18px }

.badge{ margin-left:auto; background:#ff6b4d; color:white; font-size:12px; padding:4px 8px; border-radius:999px }

.nav li.active{ background: linear-gradient(90deg, rgba(246,200,76,0.15), rgba(246,200,76,0.07)); box-shadow: inset 0 1px 0 rgba(255,255,255,0.3) }

.bottom{ padding-top:12px; border-top:1px dashed rgba(0,0,0,0.03); display:flex; flex-direction:column; gap:8px; }
.profile-mini{ display:flex; gap:10px; align-items:center; }
.profile-mini .avatar{ width:46px; height:46px; background: linear-gradient(135deg,#fff, rgba(255,255,255,0.8)); border-radius:8px; border:2px solid rgba(0,0,0,0.04) }
.settings{ font-size:14px; color:var(--muted); cursor:pointer }

@media (max-width:900px){
  .sidebar{ position:fixed; left:0; top:0; bottom:0; z-index:60; transform: translateX(0); }
}
</style>
