(function (t) { function e(e) { for (var i, r, o = e[0], c = e[1], l = e[2], u = 0, d = []; u < o.length; u++)r = o[u], Object.prototype.hasOwnProperty.call(n, r) && n[r] && d.push(n[r][0]), n[r] = 0; for (i in c)Object.prototype.hasOwnProperty.call(c, i) && (t[i] = c[i]); _ && _(e); while (d.length)d.shift()(); return a.push.apply(a, l || []), s(); } function s() { for (var t, e = 0; e < a.length; e++) { for (var s = a[e], i = !0, r = 1; r < s.length; r++) { const o = s[r]; n[o] !== 0 && (i = !1); }i && (a.splice(e--, 1), t = c(c.s = s[0])); } return t; } const i = {}; const r = { app: 0 }; var n = { app: 0 }; var a = []; function o(t) { return `${c.p}js/${{ 'new-ticket': 'new-ticket', stats: 'stats' }[t] || t}.${{ 'new-ticket': '2967838b', stats: '06db013c' }[t]}.js`; } function c(e) { if (i[e]) return i[e].exports; const s = i[e] = { i: e, l: !1, exports: {} }; return t[e].call(s.exports, s, s.exports, c), s.l = !0, s.exports; }c.e = function (t) { const e = []; const s = { 'new-ticket': 1, stats: 1 }; r[t] ? e.push(r[t]) : r[t] !== 0 && s[t] && e.push(r[t] = new Promise((((e, s) => { for (var i = `css/${{ 'new-ticket': 'new-ticket', stats: 'stats' }[t] || t}.${{ 'new-ticket': '76b31fa8', stats: '94f57572' }[t]}.css`, n = c.p + i, a = document.getElementsByTagName('link'), o = 0; o < a.length; o++) { var l = a[o]; var u = l.getAttribute('data-href') || l.getAttribute('href'); if (l.rel === 'stylesheet' && (u === i || u === n)) return e(); } const d = document.getElementsByTagName('style'); for (o = 0; o < d.length; o++) { l = d[o], u = l.getAttribute('data-href'); if (u === i || u === n) return e(); } const _ = document.createElement('link'); _.rel = 'stylesheet', _.type = 'text/css', _.onload = e, _.onerror = function (e) { const i = e && e.target && e.target.src || n; const a = new Error(`Loading CSS chunk ${t} failed.\n(${i})`); a.code = 'CSS_CHUNK_LOAD_FAILED', a.request = i, delete r[t], _.parentNode.removeChild(_), s(a); }, _.href = n; const p = document.getElementsByTagName('head')[0]; p.appendChild(_); }))).then((() => { r[t] = 0; }))); let i = n[t]; if (i !== 0) if (i)e.push(i[2]); else { const a = new Promise((((e, s) => { i = n[t] = [e, s]; }))); e.push(i[2] = a); let l; const u = document.createElement('script'); u.charset = 'utf-8', u.timeout = 120, c.nc && u.setAttribute('nonce', c.nc), u.src = o(t); const d = new Error(); l = function (e) { u.onerror = u.onload = null, clearTimeout(_); const s = n[t]; if (s !== 0) { if (s) { const i = e && (e.type === 'load' ? 'missing' : e.type); const r = e && e.target && e.target.src; d.message = `Loading chunk ${t} failed.\n(${i}: ${r})`, d.name = 'ChunkLoadError', d.type = i, d.request = r, s[1](d); }n[t] = void 0; } }; var _ = setTimeout((() => { l({ type: 'timeout', target: u }); }), 12e4); u.onerror = u.onload = l, document.head.appendChild(u); } return Promise.all(e); }, c.m = t, c.c = i, c.d = function (t, e, s) { c.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: s }); }, c.r = function (t) { typeof Symbol !== 'undefined' && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: 'Module' }), Object.defineProperty(t, '__esModule', { value: !0 }); }, c.t = function (t, e) { if (1 & e && (t = c(t)), 8 & e) return t; if (4 & e && typeof t === 'object' && t && t.__esModule) return t; const s = Object.create(null); if (c.r(s), Object.defineProperty(s, 'default', { enumerable: !0, value: t }), 2 & e && typeof t !== 'string') for (const i in t)c.d(s, i, ((e) => t[e]).bind(null, i)); return s; }, c.n = function (t) { const e = t && t.__esModule ? function () { return t.default; } : function () { return t; }; return c.d(e, 'a', e), e; }, c.o = function (t, e) { return Object.prototype.hasOwnProperty.call(t, e); }, c.p = '/', c.oe = function (t) { throw console.error(t), t; }; let l = window.webpackJsonp = window.webpackJsonp || []; const u = l.push.bind(l); l.push = e, l = l.slice(); for (let d = 0; d < l.length; d++)e(l[d]); var _ = u; a.push([0, 'chunk-vendors']), s(); }({
  0(t, e, s) { t.exports = s('56d7'); },
  '0025': function (t, e, s) {},
  '04c4': function (t, e, s) {},
  '0a56': function (t, e, s) {},
  '0ab9': function (t, e, s) {
    const i = s('e075'); const r = s.n(i); r.a;
  },
  '0fb9': function (t, e, s) {
    const i = s('251b'); const r = s.n(i); r.a;
  },
  '21bb': function (t, e, s) {
    const i = s('2dad'); const r = s.n(i); r.a;
  },
  '251b': function (t, e, s) {},
  2971(t, e, s) {
    const i = s('c739'); const r = s.n(i); r.a;
  },
  '2dad': function (t, e, s) {},
  '2f69': function (t, e, s) {
    const i = s('c34e'); const r = s.n(i); r.a;
  },
  '30db': function (t, e, s) {
    const i = s('0025'); const r = s.n(i); r.a;
  },
  '3aa0': function (t, e, s) {
    const i = s('04c4'); const r = s.n(i); r.a;
  },
  '4e41': function (t, e, s) {},
  5452(t, e, s) {
    const i = s('af35'); const r = s.n(i); r.a;
  },
  '56d7': function (t, e, s) {
    s.r(e); s('e260'), s('e6cf'), s('cca6'), s('a79d'); const i = s('2b0e'); const r = function () { const t = this; const e = t.$createElement; const s = t._self._c || e; return s('div', { attrs: { id: 'app' } }, [s('Nav'), s('router-view')], 1); }; const n = []; const a = function () { const t = this; const e = t.$createElement; const s = t._self._c || e; return s('div', [s('div', { staticClass: 'nav', class: { 'nav--active': t.isMobile } }, t._l(t.pages, ((t, e) => s('router-link', { key: e, attrs: { to: t.path } }, [s('NavItem', { attrs: { title: t.title, img: t.img } })], 1))), 1), t.mobile ? s('div', { staticClass: 'nav__mobile', on: { click: t.mobileMenu } }, [s('div'), s('div'), s('div')]) : t._e()]); }; const o = []; const c = function () { const t = this; const e = t.$createElement; const s = t._self._c || e; return s('div', { staticClass: 'navItem' }, [s('span', { staticClass: 'navItem__img', class: t.img }), s('h2', { staticClass: 'navItem__title' }, [t._v(t._s(t.title))])]); }; const l = []; const u = { name: 'NavItem', props: { img: String, title: String } }; const d = u; const _ = (s('0ab9'), s('2877')); const p = Object(_.a)(d, c, l, !1, null, null, null); const f = p.exports; const m = {
      name: 'Nav', components: { NavItem: f }, data() { return { pages: [{ path: '/', title: 'Home', img: 'icon-home' }, { path: '/stats', title: 'Stats', img: 'icon-chart' }, { path: '/new-ticket', title: 'New Task', img: 'icon-assign' }], mobile: !1, isMobile: !1 }; }, created() { window.innerWidth < 767 ? this.mobile = !0 : this.mobile = !1; }, mounted() { const t = this; window.addEventListener('resize', (() => { window.innerWidth < 767 ? t.mobile = !0 : t.mobile = !1; })); }, methods: { mobileMenu() { this.isMobile = !this.isMobile; } },
    }; const v = m; const h = (s('d79f'), Object(_.a)(v, a, o, !1, null, null, null)); const b = h.exports; const C = { name: 'Home', components: { Nav: b } }; const $ = C; const k = (s('5c0b'), Object(_.a)($, r, n, !1, null, null, null)); const T = k.exports; const g = (s('d3b7'), s('8c4f')); const y = function () { const t = this; const e = t.$createElement; const s = t._self._c || e; return s('div', { staticClass: 'container container--fluid' }, [s('div', { staticClass: 'home' }, [s('NavTop', { attrs: { select: '' } }), s('Header', { attrs: { title: 'Tickets' } }), s('div', { staticClass: 'home__table' }, [s('Table', { attrs: { data: this.$store.getters.searchByUser(this.$store.state.activePerson) } })], 1)], 1)]); }; const E = []; const S = function () { const t = this; const e = t.$createElement; const s = t._self._c || e; return s('div', { staticClass: 'navTop' }, [!0 === t.select ? s('div', { staticClass: 'navTop__select' }, [s('Users', { attrs: { className: 'select--borderless', value: this.$store.state.activePerson } })], 1) : t._e(), s('div', { staticClass: 'navTop__menu' }, t._l(t.items, ((t, e) => s('NavTopItem', { key: e, attrs: { img: t.img } }))), 1)]); }; const w = []; const O = function () { const t = this; const e = t.$createElement; const s = t._self._c || e; return s('div', { staticClass: 'select', class: t.className }, [t.label ? s('label', { staticClass: 'form__title', attrs: { for: t.label } }, [t._v(' Task asigned to: ')]) : t._e(), (t.value, s('vSelect', { staticClass: 'form__select', attrs: { label: t.label, options: this.people, value: this.$store.state.activePerson }, on: { input: t.setActivePerson } }))], 1); }; const x = []; const A = (s('4160'), s('159b'), s('4a7a')); const P = s.n(A); const N = {
      name: 'Users', props: { className: String, label: String, value: String }, data() { return { people: [], allUsers: this.$props.value }; }, components: { vSelect: P.a }, created() { const t = this; this.$store.dispatch('getUsers').then((() => { t.setPeople(); })); }, methods: { setPeople() { const t = this; this.allUsers !== null && this.people.push('All users'), this.$store.state.users.forEach(((e) => t.people.push(e))); }, setActivePerson(t) { this.$store.commit('SET_ACTIVE_PERSON', t); } },
    }; const I = N; const D = (s('3aa0'), Object(_.a)(I, O, x, !1, null, null, null)); const B = D.exports; const j = function () { const t = this; const e = t.$createElement; const s = t._self._c || e; return s('div', { staticClass: 'navTopItem' }, [s('span', { staticClass: 'navTopItem__img', class: t.img, on: { click(e) { t.isOpen = !t.isOpen; } } }), t.isOpen ? s('div', { staticClass: 'navTopItem__menu' }, [s('ImportTasks'), s('ExportTasks')], 1) : t._e()]); }; const M = []; const U = function () { const t = this; const e = t.$createElement; const s = t._self._c || e; return s('div', { staticClass: 'export', on: { click: t.toJSON } }, [s('span', { staticClass: 'export__icon icon-export' }), s('button', { staticClass: 'export__btn' }, [t._v('Export tasks')])]); }; const R = []; const q = (s('ace4'), s('3ca3'), s('5cc6'), s('9a8c'), s('a975'), s('735e'), s('c1ac'), s('d139'), s('3a7b'), s('d5d6'), s('82f8'), s('e91f'), s('60bd'), s('5f96'), s('3280'), s('3fcc'), s('ca91'), s('25a1'), s('cd26'), s('3c5d'), s('2954'), s('649e'), s('219c'), s('170b'), s('b39a'), s('72f7'), s('ddb0'), s('2b3d'), { name: 'ExportTasks', methods: { encode(t) { for (var e = [], s = 0; s < t.length; s += 1)e[s] = t.charCodeAt(s); return new Uint8Array(e); }, toJSON() { const t = this.encode(JSON.stringify(this.$store.state.tickets, null, 4)); const e = new Blob([t], { type: 'application/octet-stream' }); const s = URL.createObjectURL(e); const i = document.createElement('a'); i.setAttribute('href', s), i.setAttribute('download', 'tasks.json'); const r = document.createEvent('MouseEvents'); r.initMouseEvent('click', !0, !0, window, 1, 0, 0, 0, 0, !1, !1, !1, !1, 0, null), i.dispatchEvent(r); } } }); const L = q; const F = (s('ac0c'), Object(_.a)(L, U, R, !1, null, null, null)); const H = F.exports; const K = function () { const t = this; const e = t.$createElement; const s = t._self._c || e; return s('div', { staticClass: 'import', on: { click: t.importFromJSON } }, [s('span', { staticClass: 'import__icon icon-import' }), s('button', { staticClass: 'import__btn' }, [t._v('Import tasks')])]); }; const G = []; const J = { name: 'ImportTasks', methods: { importFromJSON() { this.$store.dispatch('getTasks'); } } }; const V = J; const W = (s('2f69'), Object(_.a)(V, K, G, !1, null, null, null)); const z = W.exports; const Q = {
      name: 'NavItem', props: { img: String }, components: { ExportTasks: H, ImportTasks: z }, data() { return { isOpen: !1 }; },
    }; const X = Q; const Y = (s('881a'), Object(_.a)(X, j, M, !1, null, null, null)); const Z = Y.exports; const tt = {
      name: 'NavTop', components: { Users: B, NavTopItem: Z }, props: { select: Boolean }, data() { return { items: [{ img: 'icon-grid' }] }; },
    }; const et = tt; const st = (s('2971'), Object(_.a)(et, S, w, !1, null, null, null)); const it = st.exports; const rt = function () { const t = this; const e = t.$createElement; const s = t._self._c || e; return s('div', { staticClass: 'table__container' }, [s('table', { staticClass: 'table' }, [s('tr', { staticClass: 'table__row' }, [s('th', { staticClass: 'table__head', on: { click(e) { return t.sortBy('index'); } } }, [t._m(0)]), s('th', { staticClass: 'table__head', on: { click(e) { return t.sortBy('title'); } } }, [s('div', { staticClass: 'table__head--wrapper' }, [s('span', [t._v('Title')]), s('Arrows', { attrs: { sortBy: 'title' } })], 1)]), s('th', { staticClass: 'table__head', on: { click(e) { return t.sortBy('description'); } } }, [s('div', { staticClass: 'table__head--wrapper' }, [s('span', [t._v('Description')]), s('Arrows', { attrs: { sortBy: 'description' } })], 1)]), s('th', { staticClass: 'table__head', on: { click(e) { return t.sortBy('user'); } } }, [s('div', { staticClass: 'table__head--wrapper' }, [s('span', [t._v('Assigned to')]), s('Arrows', { attrs: { sortBy: 'user' } })], 1)]), s('th', { staticClass: 'table__head', on: { click(e) { return t.sortBy('severity'); } } }, [s('div', { staticClass: 'table__head--wrapper' }, [s('span', [t._v('Severity')]), s('Arrows', { attrs: { sortBy: 'severity' } })], 1)]), s('th', { staticClass: 'table__head', on: { click(e) { return t.sortBy('status'); } } }, [s('div', { staticClass: 'table__head--wrapper' }, [s('span', [t._v('Status')]), s('Arrows', { attrs: { sortBy: 'status' } })], 1)]), s('th', { staticClass: 'table__head', on: { click(e) { return t.sortBy('notes'); } } }, [s('div', { staticClass: 'table__head--wrapper' }, [s('span', [t._v('Notes')]), s('Arrows', { attrs: { sortBy: 'notes' } })], 1)]), s('th', { staticClass: 'table__head' })]), t._l(t.sortedItems, ((e, i) => s('tr', { key: i, staticClass: 'table__row' }, [s('td', { staticClass: 'table__cell', attrs: { 'data-label': 'ID:' } }, [t._v(` ${t._s(i + 1)} `)]), s('td', { staticClass: 'table__cell', attrs: { 'data-label': 'Title:' } }, [t._v(` ${t._s(e.title)} `)]), s('td', { staticClass: 'table__cell', attrs: { 'data-label': 'Desc.:' } }, [t._v(` ${t._s(e.description)} `)]), s('td', { staticClass: 'table__cell', attrs: { 'data-label': 'Assign:' } }, [t._v(` ${t._s(e.user)} `)]), s('td', { staticClass: 'table__cell', attrs: { 'data-label': 'Severity:' } }, [t._v(` ${t._s(e.severity)} `)]), s('td', { staticClass: 'table__cell', attrs: { 'data-label': 'Status:' } }, [t._v(` ${t._s(e.status)} `)]), s('td', { staticClass: 'table__cell', attrs: { 'data-label': 'Notes:' } }, [t._v(` ${t._s(e.notes)} `)]), s('td', { staticClass: 'table__cell', attrs: { 'data-label': 'Edit:' } }, [s('span', { staticClass: 'icon-more table__more', on: { click(s) { return t.tooltip(s, e.id); } } })])])))], 2), s('Modal', { ref: 'modal', attrs: { title: 'Edit task' } }, [s('Form', { attrs: { edit: '' } })], 1), s('Tooltip', { ref: 'tooltip' })], 1); }; const nt = [function () { const t = this; const e = t.$createElement; const s = t._self._c || e; return s('div', { staticClass: 'table__head--wrapper' }, [s('span', [t._v('ID')])]); }]; const at = (s('fb6a'), function () { const t = this; const e = t.$createElement; const s = t._self._c || e; return s('div', { staticClass: 'arrows' }, [s('span', { staticClass: 'icon-up arrows__icon arrows__icon--up', class: this.$store.state.sortBy === t.sortBy && this.$store.state.sortDir === 'asc' ? 'arrows__icon--active' : '', on: { click(e) { return t.sortDir('asc'); } } }), s('span', { staticClass: 'icon-down arrows__icon arrows__icon--down', class: this.$store.state.sortBy === t.sortBy && this.$store.state.sortDir === 'dsc' ? 'arrows__icon--active' : '', on: { click(e) { return t.sortDir('dsc'); } } })]); }); const ot = []; const ct = { name: 'Arrows', props: { sortBy: String }, methods: { sortDir(t) { t !== this.$store.state.sortDir && this.$store.commit('CHANGE_SORT_DIR', t); } } }; const lt = ct; const ut = (s('9498'), Object(_.a)(lt, at, ot, !1, null, null, null)); const dt = ut.exports; const _t = function () { const t = this; const e = t.$createElement; const s = t._self._c || e; return t.isOpen ? s('transition', { attrs: { name: 'modal' } }, [s('div', { staticClass: 'modal' }, [s('div', { staticClass: 'modal__wrapper' }, [s('h2', { staticClass: 'modal__title' }, [t._v(t._s(t.title))]), s('p', { staticClass: 'modal__sdescription' }, [t._v(t._s(t.description))]), s('div', { staticClass: 'modal__body' }, [t._t('default')], 2), s('button', { staticClass: 'modal__close', on: { click: t.closeModal } }, [t._v(' × ')])])])]) : t._e(); }; const pt = []; const ft = {
      name: 'Modal', props: { title: String, description: String }, computed: { isOpen() { return this.$store.state.openModal; } }, methods: { openModal() { this.$store.commit('UPDATE_MODAL', !0); }, closeModal() { this.$store.commit('UPDATE_MODAL', !1); } },
    }; const mt = ft; const vt = (s('30db'), Object(_.a)(mt, _t, pt, !1, null, null, null)); const ht = vt.exports; const bt = s('8477'); const Ct = function () { const t = this; const e = t.$createElement; const s = t._self._c || e; return t.isOpen ? s('div', { staticClass: 'tooltip', on: { click: t.closeTooltip } }, [s('div', { staticClass: 'tooltip__wrapper', style: { top: `${t.y}px`, right: `${-1 * t.x}px` }, attrs: { 'data-id': this.$store.state.activeTicket } }, [s('div', { staticClass: 'tooltip__row', on: { click(e) { return t.deleteTicket(); } } }, [s('span', { staticClass: 'tooltip__icon icon-bin' }), s('h3', { staticClass: 'tooltip__title' }, [t._v('Delete')])]), s('div', { staticClass: 'tooltip__row', on: { click(e) { return t.editTicket(); } } }, [s('span', { staticClass: 'tooltip__icon icon-edit' }), s('h3', { staticClass: 'tooltip__title' }, [t._v('Edit')])])])]) : t._e(); }; const $t = []; const kt = {
      name: 'Tooltip',
      data() { return { isOpen: !1, x: null, y: null }; },
      methods: {
        openTooltip(t, e) { this.x = t, this.y = e, this.isOpen = !0; }, closeTooltip() { this.isOpen = !1; }, deleteTicket() { this.$store.commit('REMOVE_TICKET', this.$store.state.activeTicket), this.closeTooltip(); }, editTicket() { this.$store.commit('UPDATE_MODAL', !0), this.closeTooltip(); },
      },
    }; const Tt = kt; const gt = (s('0fb9'), Object(_.a)(Tt, Ct, $t, !1, null, null, null)); const yt = gt.exports; const Et = {
      name: 'Table',
      props: { data: Array },
      components: {
        Arrows: dt, Modal: ht, Form: bt.a, Tooltip: yt,
      },
      data() { return { isEnabled: !0, indexes: [], ticketId: this.$store.activeTicket }; },
      computed: { items() { return this.$props.data; }, sortedItems() { const t = this; return this.items.slice().sort(((e, s) => { let i = 1; return t.$store.state.sortDir === 'dsc' && (i = -1), e[t.$store.state.sortBy] < s[t.$store.state.sortBy] ? -1 * i : e[t.$store.state.sortBy] > s[t.$store.state.sortBy] ? 1 * i : 0; })); } },
      methods: { sortBy(t) { t !== this.$store.state.sortBy && this.$store.commit('CHANGE_SORTING', t); }, tooltip(t, e) { const s = window.innerWidth; const i = t.target.getBoundingClientRect(); const r = i.x; const n = i.y; this.$refs.tooltip.openTooltip(r - s, n), this.setActiveTicket(t, e); }, setActiveTicket(t, e) { this.$store.state.activeTicket !== e && this.$store.commit('SET_ACTIVE_TICKET', e); } },
    }; const St = Et; const wt = (s('d143'), Object(_.a)(St, rt, nt, !1, null, null, null)); const Ot = wt.exports; const xt = function () { const t = this; const e = t.$createElement; const s = t._self._c || e; return s('div', { staticClass: 'header' }, [s('h2', { staticClass: 'header__title' }, [t._v(` ${t._s(t.title)} `)])]); }; const At = []; const Pt = { name: 'Header', props: { title: String } }; const Nt = Pt; const It = (s('5452'), Object(_.a)(Nt, xt, At, !1, null, null, null)); const Dt = It.exports; const Bt = { name: 'Home', components: { NavTop: it, Table: Ot, Header: Dt } }; const jt = Bt; const Mt = (s('21bb'), Object(_.a)(jt, y, E, !1, null, null, null)); const Ut = Mt.exports; i.a.use(g.a); const Rt = [{ path: '/', name: 'Home', component: Ut }, { path: '/new-ticket', name: 'New Ticket', component() { return s.e('new-ticket').then(s.bind(null, 'acb3')); } }, { path: '/stats', name: 'Stats', component() { return s.e('stats').then(s.bind(null, 'ed93')); } }]; const qt = new g.a({ mode: 'history', base: '/', routes: Rt }); const Lt = qt; const Ft = (s('4de4'), s('c740'), s('b0c0'), s('2f62')); const Ht = s('bc3a'); const Kt = s.n(Ht); i.a.use(Ft.a, Kt.a); const Gt = new Ft.a.Store({
      state: {
        users: null, tickets: [], activePerson: 'All users', activeTicket: null, sortBy: 'index', sortDir: 'asc', openModal: !1,
      },
      mutations: {
        SET_ACTIVE_PERSON(t, e) { t.activePerson = e; }, SET_ACTIVE_TICKET(t, e) { t.activeTicket = e; }, SET_USERS(t, e) { t.users = e; }, ADD_TICKET(t, e) { t.tickets.push(e); }, REMOVE_TICKET(t, e) { t.tickets = t.tickets.filter(((t) => t.id !== e)); }, UPDATE_TICKET(t, e) { const s = t.tickets.findIndex(((t) => t.id === e.id)); t.tickets[s] = e; }, ADD_AND_REMOVE(t, e) { t.tickets.push(e), t.tickets.pop(e); }, CHANGE_SORTING(t, e) { t.sortBy = e; }, CHANGE_SORT_DIR(t, e) { t.sortDir = e; }, UPDATE_MODAL(t, e) { t.openModal = e; },
      },
      actions: { getUsers(t) { const e = t.commit; return this.state.users === null && Kt.a.get('https://jsonplaceholder.typicode.com/users').then(((t) => { const s = []; t.data.forEach(((t) => { s.push(t.name); })), e('SET_USERS', s); })).catch(((t) => { throw new Error('Json placeholder error: '.concat(t)); })); }, getTasks(t) { const e = t.commit; return Kt.a.get('../tasks.json').then(((t) => { const s = t.data; s.forEach(((t) => { e('ADD_TICKET', t); })); })).catch(((t) => { throw new Error('Import tasks: '.concat(t)); })); } },
      getters: {
        numberOfTickets(t) { return t.tickets.length; }, searchByUser(t) { return function (e) { return t.tickets.filter(((t) => (e === 'All users' ? t : t.user === e && t.user !== 'All users'))); }; }, numberOfTickesPerUser(t) { return function (e) { return t.tickets.filter(((t) => t.user === e)).length; }; }, getTicketIndex(t) { const e = function (e) { return e.id === t.activeTicket; }; return t.tickets.findIndex(e); }, activeTicket(t) { return function (e) { return t.tickets[e]; }; },
      },
    }); i.a.config.productionTip = !1, new i.a({ router: Lt, store: Gt, render(t) { return t(T); } }).$mount('#app');
  },
  '5c0b': function (t, e, s) {
    const i = s('9c0c'); const r = s.n(i); r.a;
  },
  8477(t, e, s) {
    const i = function () {
      const t = this; const e = t.$createElement; const s = t._self._c || e; return s('form', { staticClass: 'form', on: { submit(e) { return e.preventDefault(), t.checkForm(e); }, keyup(e) { return !e.type.indexOf('key') && t._k(e.keyCode, 'enter', 13, e.key, 'Enter') ? null : t.checkForm(e); } } }, [s('div', { staticClass: 'form__field', class: { 'form__field--error': t.$v.title.$error } }, [s('label', { staticClass: 'form__title', class: { 'form__title--error': t.$v.title.$error }, attrs: { for: 'title' } }, [t._v('Title')]), s('input', {
        directives: [{
          name: 'model', rawName: 'v-model.trim', value: t.$v.title.$model, expression: '$v.title.$model', modifiers: { trim: !0 },
        }],
        staticClass: 'form__input',
        class: { 'form__input--error': t.$v.title.$error },
        attrs: { type: 'text', name: 'title' },
        domProps: { value: t.$v.title.$model },
        on: { input(e) { e.target.composing || t.$set(t.$v.title, '$model', e.target.value.trim()); }, blur(e) { return t.$forceUpdate(); } },
      }), t.$v.title.$error ? s('div', { staticClass: 'form__errors' }, [t.$v.title.required ? t._e() : s('span', { staticClass: 'form__error' }, [t._v('Field is required')]), t.$v.title.minLength ? t._e() : s('span', { staticClass: 'form__error' }, [t._v(` Title must have at least ${t._s(t.$v.title.$params.minLength.min)} letters. `)])]) : t._e()]), s('div', { staticClass: 'form__field' }, [s('label', { staticClass: 'form__title', class: { 'form__title--error': t.$v.description.$error }, attrs: { for: 'description' } }, [t._v('Desription')]), s('textarea', {
        directives: [{
          name: 'model', rawName: 'v-model.trim', value: t.$v.description.$model, expression: '$v.description.$model', modifiers: { trim: !0 },
        }],
        staticClass: 'form__input',
        class: { 'form__input--error': t.$v.description.$error },
        attrs: { type: 'text', name: 'description' },
        domProps: { value: t.$v.description.$model },
        on: { input(e) { e.target.composing || t.$set(t.$v.description, '$model', e.target.value.trim()); }, blur(e) { return t.$forceUpdate(); } },
      }), t.$v.description.$error ? s('div', { staticClass: 'form__errors' }, [t.$v.description.required ? t._e() : s('span', { staticClass: 'form__error' }, [t._v('Field is required')]), t.$v.description.minLength ? t._e() : s('span', { staticClass: 'form__error' }, [t._v(` Title must have at least ${t._s(t.$v.description.$params.minLength.min)} letters. `)])]) : t._e()]), s('div', { staticClass: 'form__field' }, [s('label', { staticClass: 'form__title', attrs: { for: 'description' } }, [t._v('Notes')]), s('textarea', {
        directives: [{
          name: 'model', rawName: 'v-model', value: t.notes, expression: 'notes',
        }],
        staticClass: 'form__input',
        attrs: { type: 'text', name: 'description' },
        domProps: { value: t.notes },
        on: { input(e) { e.target.composing || (t.notes = e.target.value); } },
      }), s('input', { staticClass: 'form__input--file', attrs: { type: 'file' }, on: { change(e) { return t.processFile(e); } } })]), s('div', { staticClass: 'form__field' }, [s('label', { staticClass: 'form__title', class: { 'form__title--error': t.$v.selectedSeverity.$error }, attrs: { for: 'severity' } }, [t._v('Severity')]), s('vSelect', {
        staticClass: 'form__select', class: { 'form__input--error': t.$v.selectedSeverity.$error }, attrs: { label: 'severity', options: this.severity }, model: { value: t.selectedSeverity, callback(e) { t.selectedSeverity = e; }, expression: 'selectedSeverity' },
      }), t.$v.selectedSeverity.$error ? s('div', { staticClass: 'form__errors' }, [t.$v.selectedSeverity.required ? t._e() : s('span', { staticClass: 'form__error' }, [t._v('Field is required')])]) : t._e()], 1), s('div', { staticClass: 'form__field' }, [s('label', { staticClass: 'form__title', class: { 'form__title--error': t.$v.selectedStatus.$error }, attrs: { for: 'status' } }, [t._v('Status')]), s('vSelect', {
        staticClass: 'form__select', class: { 'form__input--error': t.$v.selectedStatus.$error }, attrs: { label: 'status', options: this.status }, model: { value: t.selectedStatus, callback(e) { t.selectedStatus = e; }, expression: 'selectedStatus' },
      }), t.$v.selectedStatus.$error ? s('div', { staticClass: 'form__errors' }, [t.$v.selectedStatus.required ? t._e() : s('span', { staticClass: 'form__error' }, [t._v('Field is required')])]) : t._e()], 1), s('div', { staticClass: 'form__field' }, [s('label', { staticClass: 'form__title', class: { 'form__title--error': t.$v.selectedPerson.$error }, attrs: { for: 'assign' } }, [t._v('Assign')]), s('vSelect', {
        staticClass: 'form__select', class: { 'form__input--error': t.$v.selectedPerson.$error }, attrs: { label: 'assign', options: this.people }, model: { value: t.selectedPerson, callback(e) { t.selectedPerson = e; }, expression: 'selectedPerson' },
      }), t.$v.selectedPerson.$error ? s('div', { staticClass: 'form__errors' }, [t.$v.selectedPerson.required ? t._e() : s('span', { staticClass: 'form__error' }, [t._v('Field is required')])]) : t._e()], 1), t._m(0), s('div', { staticClass: 'form__filed' }, [t.submitStatus === 'OK' ? s('p', { staticClass: 'form__status' }, [t._v('Thanks for your submission!')]) : t._e(), t.submitStatus === 'ERROR' ? s('p', { staticClass: 'form__status' }, [t._v('Please fill the form correctly.')]) : t._e(), t.submitStatus === 'PENDING' ? s('p', { staticClass: 'form__status' }, [t._v('Sending...')]) : t._e()])]);
    }; const r = [function () { const t = this; const e = t.$createElement; const s = t._self._c || e; return s('div', { staticClass: 'form__field' }, [s('button', { attrs: { type: 'submit' } }, [t._v('Submit')])]); }]; const n = (s('a4d3'), s('e01a'), s('4a7a')); const a = s.n(n); const o = s('1dce'); const c = s('b5ae'); const l = {
      name: 'Form',
      components: { vSelect: a.a },
      props: { edit: Boolean },
      mixins: [o.validationMixin],
      data() {
        return {
          activeTicket: null, title: null, description: null, option: null, submitStatus: null, people: [], selectedPerson: null, severity: ['low', 'medium', 'high'], selectedSeverity: null, status: ['new', 'acknowledged', 'in progress', 'closed', 'attachments'], notes: null, file: null, selectedStatus: null, ticket: null,
        };
      },
      validations: {
        title: { required: c.required, minLength: Object(c.minLength)(3) }, description: { required: c.required, minLength: Object(c.minLength)(3) }, selectedSeverity: { required: c.required }, selectedStatus: { required: c.required }, selectedPerson: { required: c.required },
      },
      created() { const t = this; if (this.$store.dispatch('getUsers').then((() => { t.setPeople(); })), this.$props.edit) { const e = this.$store.getters.getTicketIndex; const s = this.$store.getters.activeTicket(e); this.title = s.title, this.description = s.description, this.selectedSeverity = s.severity, this.selectedStatus = s.status, this.selectedPerson = s.user, this.notes = s.notes, this.file = s.file; } },
      methods: {
        processFile(t) { this.file = t.target.files[0]; },
        setPeople() { this.people = this.$store.state.users; },
        checkForm() {
          const t = this; this.$v.$touch(), this.$v.$invalid ? this.submitStatus = 'ERROR' : (this.submitStatus = 'PENDING', this.ticket = {
            id: (new Date()).getTime(), title: this.title, description: this.description, severity: this.selectedSeverity, status: this.selectedStatus, user: this.selectedPerson, notes: this.notes, file: this.file,
          }, this.$props.edit ? (this.activeTicket = this.$store.state.activeTicket, this.ticket.id = this.activeTicket, this.updateTicket(this.ticket)) : this.$store.commit('ADD_TICKET', this.ticket), setTimeout((() => { t.resetForm(), setTimeout((() => { t.submitStatus = null; }), 2e3); }), 500));
        },
        resetForm() { this.title = null, this.description = null, this.selectedSeverity = null, this.selectedStatus = null, this.selectedPerson = null, this.submitStatus = 'OK', this.$v.$reset(); },
        updateTicket(t) { this.$store.commit('UPDATE_TICKET', t), this.$store.commit('ADD_AND_REMOVE', t); },
      },
    }; const u = l; const d = (s('c4e7'), s('2877')); const _ = Object(d.a)(u, i, r, !1, null, null, null); e.a = _.exports;
  },
  '86b4': function (t, e, s) {},
  '881a': function (t, e, s) {
    const i = s('f803'); const r = s.n(i); r.a;
  },
  9498(t, e, s) {
    const i = s('dab3'); const r = s.n(i); r.a;
  },
  '9c0c': function (t, e, s) {},
  a3ee(t, e, s) {},
  ac0c(t, e, s) {
    const i = s('0a56'); const r = s.n(i); r.a;
  },
  af35(t, e, s) {},
  c34e(t, e, s) {},
  c4e7(t, e, s) {
    const i = s('86b4'); const r = s.n(i); r.a;
  },
  c739(t, e, s) {},
  d143(t, e, s) {
    const i = s('4e41'); const r = s.n(i); r.a;
  },
  d79f(t, e, s) {
    const i = s('a3ee'); const r = s.n(i); r.a;
  },
  dab3(t, e, s) {},
  e075(t, e, s) {},
  f803(t, e, s) {},
}));
// # sourceMappingURL=app.7a50a19e.js.map
