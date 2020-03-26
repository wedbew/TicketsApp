(window.webpackJsonp = window.webpackJsonp || []).push([['stats'], {
  '010e': function (e, t, a) {
    (function (e, t) { t(a('c1df')); }(0, ((e) => {
      const t = e.defineLocale('uz-latn', {
        months: 'Yanvar_Fevral_Mart_Aprel_May_Iyun_Iyul_Avgust_Sentabr_Oktabr_Noyabr_Dekabr'.split('_'),
        monthsShort: 'Yan_Fev_Mar_Apr_May_Iyun_Iyul_Avg_Sen_Okt_Noy_Dek'.split('_'),
        weekdays: 'Yakshanba_Dushanba_Seshanba_Chorshanba_Payshanba_Juma_Shanba'.split('_'),
        weekdaysShort: 'Yak_Dush_Sesh_Chor_Pay_Jum_Shan'.split('_'),
        weekdaysMin: 'Ya_Du_Se_Cho_Pa_Ju_Sha'.split('_'),
        longDateFormat: {
          LT: 'HH:mm', LTS: 'HH:mm:ss', L: 'DD/MM/YYYY', LL: 'D MMMM YYYY', LLL: 'D MMMM YYYY HH:mm', LLLL: 'D MMMM YYYY, dddd HH:mm',
        },
        calendar: {
          sameDay: '[Bugun soat] LT [da]', nextDay: '[Ertaga] LT [da]', nextWeek: 'dddd [kuni soat] LT [da]', lastDay: '[Kecha soat] LT [da]', lastWeek: "[O'tgan] dddd [kuni soat] LT [da]", sameElse: 'L',
        },
        relativeTime: {
          future: 'Yaqin %s ichida', past: 'Bir necha %s oldin', s: 'soniya', ss: '%d soniya', m: 'bir daqiqa', mm: '%d daqiqa', h: 'bir soat', hh: '%d soat', d: 'bir kun', dd: '%d kun', M: 'bir oy', MM: '%d oy', y: 'bir yil', yy: '%d yil',
        },
        week: { dow: 1, doy: 7 },
      }); return t;
    })));
  },
  '02fb': function (e, t, a) {
    (function (e, t) { t(a('c1df')); }(0, ((e) => {
      const t = e.defineLocale('ml', {
        months: 'ജനുവരി_ഫെബ്രുവരി_മാർച്ച്_ഏപ്രിൽ_മേയ്_ജൂൺ_ജൂലൈ_ഓഗസ്റ്റ്_സെപ്റ്റംബർ_ഒക്ടോബർ_നവംബർ_ഡിസംബർ'.split('_'),
        monthsShort: 'ജനു._ഫെബ്രു._മാർ._ഏപ്രി._മേയ്_ജൂൺ_ജൂലൈ._ഓഗ._സെപ്റ്റ._ഒക്ടോ._നവം._ഡിസം.'.split('_'),
        monthsParseExact: !0,
        weekdays: 'ഞായറാഴ്ച_തിങ്കളാഴ്ച_ചൊവ്വാഴ്ച_ബുധനാഴ്ച_വ്യാഴാഴ്ച_വെള്ളിയാഴ്ച_ശനിയാഴ്ച'.split('_'),
        weekdaysShort: 'ഞായർ_തിങ്കൾ_ചൊവ്വ_ബുധൻ_വ്യാഴം_വെള്ളി_ശനി'.split('_'),
        weekdaysMin: 'ഞാ_തി_ചൊ_ബു_വ്യാ_വെ_ശ'.split('_'),
        longDateFormat: {
          LT: 'A h:mm -നു', LTS: 'A h:mm:ss -നു', L: 'DD/MM/YYYY', LL: 'D MMMM YYYY', LLL: 'D MMMM YYYY, A h:mm -നു', LLLL: 'dddd, D MMMM YYYY, A h:mm -നു',
        },
        calendar: {
          sameDay: '[ഇന്ന്] LT', nextDay: '[നാളെ] LT', nextWeek: 'dddd, LT', lastDay: '[ഇന്നലെ] LT', lastWeek: '[കഴിഞ്ഞ] dddd, LT', sameElse: 'L',
        },
        relativeTime: {
          future: '%s കഴിഞ്ഞ്', past: '%s മുൻപ്', s: 'അൽപ നിമിഷങ്ങൾ', ss: '%d സെക്കൻഡ്', m: 'ഒരു മിനിറ്റ്', mm: '%d മിനിറ്റ്', h: 'ഒരു മണിക്കൂർ', hh: '%d മണിക്കൂർ', d: 'ഒരു ദിവസം', dd: '%d ദിവസം', M: 'ഒരു മാസം', MM: '%d മാസം', y: 'ഒരു വർഷം', yy: '%d വർഷം',
        },
        meridiemParse: /രാത്രി|രാവിലെ|ഉച്ച കഴിഞ്ഞ്|വൈകുന്നേരം|രാത്രി/i,
        meridiemHour(e, t) { return e === 12 && (e = 0), t === 'രാത്രി' && e >= 4 || t === 'ഉച്ച കഴിഞ്ഞ്' || t === 'വൈകുന്നേരം' ? e + 12 : e; },
        meridiem(e, t, a) { return e < 4 ? 'രാത്രി' : e < 12 ? 'രാവിലെ' : e < 17 ? 'ഉച്ച കഴിഞ്ഞ്' : e < 20 ? 'വൈകുന്നേരം' : 'രാത്രി'; },
      }); return t;
    })));
  },
  '03ec': function (e, t, a) {
    (function (e, t) { t(a('c1df')); }(0, ((e) => {
      const t = e.defineLocale('cv', {
        months: 'кӑрлач_нарӑс_пуш_ака_май_ҫӗртме_утӑ_ҫурла_авӑн_юпа_чӳк_раштав'.split('_'),
        monthsShort: 'кӑр_нар_пуш_ака_май_ҫӗр_утӑ_ҫур_авн_юпа_чӳк_раш'.split('_'),
        weekdays: 'вырсарникун_тунтикун_ытларикун_юнкун_кӗҫнерникун_эрнекун_шӑматкун'.split('_'),
        weekdaysShort: 'выр_тун_ытл_юн_кӗҫ_эрн_шӑм'.split('_'),
        weekdaysMin: 'вр_тн_ыт_юн_кҫ_эр_шм'.split('_'),
        longDateFormat: {
          LT: 'HH:mm', LTS: 'HH:mm:ss', L: 'DD-MM-YYYY', LL: 'YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ]', LLL: 'YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ], HH:mm', LLLL: 'dddd, YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ], HH:mm',
        },
        calendar: {
          sameDay: '[Паян] LT [сехетре]', nextDay: '[Ыран] LT [сехетре]', lastDay: '[Ӗнер] LT [сехетре]', nextWeek: '[Ҫитес] dddd LT [сехетре]', lastWeek: '[Иртнӗ] dddd LT [сехетре]', sameElse: 'L',
        },
        relativeTime: {
          future(e) { const t = /сехет$/i.exec(e) ? 'рен' : /ҫул$/i.exec(e) ? 'тан' : 'ран'; return e + t; }, past: '%s каялла', s: 'пӗр-ик ҫеккунт', ss: '%d ҫеккунт', m: 'пӗр минут', mm: '%d минут', h: 'пӗр сехет', hh: '%d сехет', d: 'пӗр кун', dd: '%d кун', M: 'пӗр уйӑх', MM: '%d уйӑх', y: 'пӗр ҫул', yy: '%d ҫул',
        },
        dayOfMonthOrdinalParse: /\d{1,2}-мӗш/,
        ordinal: '%d-мӗш',
        week: { dow: 1, doy: 7 },
      }); return t;
    })));
  },
  '0558': function (e, t, a) {
    (function (e, t) { t(a('c1df')); }(0, ((e) => {
      function t(e) { return e % 100 === 11 || e % 10 !== 1; } function a(e, a, n, r) { const i = `${e} `; switch (n) { case 's': return a || r ? 'nokkrar sekúndur' : 'nokkrum sekúndum'; case 'ss': return t(e) ? i + (a || r ? 'sekúndur' : 'sekúndum') : `${i}sekúnda`; case 'm': return a ? 'mínúta' : 'mínútu'; case 'mm': return t(e) ? i + (a || r ? 'mínútur' : 'mínútum') : a ? `${i}mínúta` : `${i}mínútu`; case 'hh': return t(e) ? i + (a || r ? 'klukkustundir' : 'klukkustundum') : `${i}klukkustund`; case 'd': return a ? 'dagur' : r ? 'dag' : 'degi'; case 'dd': return t(e) ? a ? `${i}dagar` : i + (r ? 'daga' : 'dögum') : a ? `${i}dagur` : i + (r ? 'dag' : 'degi'); case 'M': return a ? 'mánuður' : r ? 'mánuð' : 'mánuði'; case 'MM': return t(e) ? a ? `${i}mánuðir` : i + (r ? 'mánuði' : 'mánuðum') : a ? `${i}mánuður` : i + (r ? 'mánuð' : 'mánuði'); case 'y': return a || r ? 'ár' : 'ári'; case 'yy': return t(e) ? i + (a || r ? 'ár' : 'árum') : i + (a || r ? 'ár' : 'ári'); } } const n = e.defineLocale('is', {
        months: 'janúar_febrúar_mars_apríl_maí_júní_júlí_ágúst_september_október_nóvember_desember'.split('_'),
        monthsShort: 'jan_feb_mar_apr_maí_jún_júl_ágú_sep_okt_nóv_des'.split('_'),
        weekdays: 'sunnudagur_mánudagur_þriðjudagur_miðvikudagur_fimmtudagur_föstudagur_laugardagur'.split('_'),
        weekdaysShort: 'sun_mán_þri_mið_fim_fös_lau'.split('_'),
        weekdaysMin: 'Su_Má_Þr_Mi_Fi_Fö_La'.split('_'),
        longDateFormat: {
          LT: 'H:mm', LTS: 'H:mm:ss', L: 'DD.MM.YYYY', LL: 'D. MMMM YYYY', LLL: 'D. MMMM YYYY [kl.] H:mm', LLLL: 'dddd, D. MMMM YYYY [kl.] H:mm',
        },
        calendar: {
          sameDay: '[í dag kl.] LT', nextDay: '[á morgun kl.] LT', nextWeek: 'dddd [kl.] LT', lastDay: '[í gær kl.] LT', lastWeek: '[síðasta] dddd [kl.] LT', sameElse: 'L',
        },
        relativeTime: {
          future: 'eftir %s', past: 'fyrir %s síðan', s: a, ss: a, m: a, mm: a, h: 'klukkustund', hh: a, d: a, dd: a, M: a, MM: a, y: a, yy: a,
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: '%d.',
        week: { dow: 1, doy: 4 },
      }); return n;
    })));
  },
  '0721': function (e, t, a) {
    (function (e, t) { t(a('c1df')); }(0, ((e) => {
      const t = e.defineLocale('fo', {
        months: 'januar_februar_mars_apríl_mai_juni_juli_august_september_oktober_november_desember'.split('_'),
        monthsShort: 'jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des'.split('_'),
        weekdays: 'sunnudagur_mánadagur_týsdagur_mikudagur_hósdagur_fríggjadagur_leygardagur'.split('_'),
        weekdaysShort: 'sun_mán_týs_mik_hós_frí_ley'.split('_'),
        weekdaysMin: 'su_má_tý_mi_hó_fr_le'.split('_'),
        longDateFormat: {
          LT: 'HH:mm', LTS: 'HH:mm:ss', L: 'DD/MM/YYYY', LL: 'D MMMM YYYY', LLL: 'D MMMM YYYY HH:mm', LLLL: 'dddd D. MMMM, YYYY HH:mm',
        },
        calendar: {
          sameDay: '[Í dag kl.] LT', nextDay: '[Í morgin kl.] LT', nextWeek: 'dddd [kl.] LT', lastDay: '[Í gjár kl.] LT', lastWeek: '[síðstu] dddd [kl] LT', sameElse: 'L',
        },
        relativeTime: {
          future: 'um %s', past: '%s síðani', s: 'fá sekund', ss: '%d sekundir', m: 'ein minuttur', mm: '%d minuttir', h: 'ein tími', hh: '%d tímar', d: 'ein dagur', dd: '%d dagar', M: 'ein mánaður', MM: '%d mánaðir', y: 'eitt ár', yy: '%d ár',
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: '%d.',
        week: { dow: 1, doy: 4 },
      }); return t;
    })));
  },
  '079e': function (e, t, a) {
    (function (e, t) { t(a('c1df')); }(0, ((e) => {
      const t = e.defineLocale('ja', {
        months: '一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月'.split('_'),
        monthsShort: '1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月'.split('_'),
        weekdays: '日曜日_月曜日_火曜日_水曜日_木曜日_金曜日_土曜日'.split('_'),
        weekdaysShort: '日_月_火_水_木_金_土'.split('_'),
        weekdaysMin: '日_月_火_水_木_金_土'.split('_'),
        longDateFormat: {
          LT: 'HH:mm', LTS: 'HH:mm:ss', L: 'YYYY/MM/DD', LL: 'YYYY年M月D日', LLL: 'YYYY年M月D日 HH:mm', LLLL: 'YYYY年M月D日 dddd HH:mm', l: 'YYYY/MM/DD', ll: 'YYYY年M月D日', lll: 'YYYY年M月D日 HH:mm', llll: 'YYYY年M月D日(ddd) HH:mm',
        },
        meridiemParse: /午前|午後/i,
        isPM(e) { return e === '午後'; },
        meridiem(e, t, a) { return e < 12 ? '午前' : '午後'; },
        calendar: {
          sameDay: '[今日] LT', nextDay: '[明日] LT', nextWeek(e) { return e.week() < this.week() ? '[来週]dddd LT' : 'dddd LT'; }, lastDay: '[昨日] LT', lastWeek(e) { return this.week() < e.week() ? '[先週]dddd LT' : 'dddd LT'; }, sameElse: 'L',
        },
        dayOfMonthOrdinalParse: /\d{1,2}日/,
        ordinal(e, t) { switch (t) { case 'd': case 'D': case 'DDD': return `${e}日`; default: return e; } },
        relativeTime: {
          future: '%s後', past: '%s前', s: '数秒', ss: '%d秒', m: '1分', mm: '%d分', h: '1時間', hh: '%d時間', d: '1日', dd: '%d日', M: '1ヶ月', MM: '%dヶ月', y: '1年', yy: '%d年',
        },
      }); return t;
    })));
  },
  '0a3c': function (e, t, a) {
    (function (e, t) { t(a('c1df')); }(0, ((e) => {
      const t = 'ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.'.split('_'); const a = 'ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic'.split('_'); const n = [/^ene/i, /^feb/i, /^mar/i, /^abr/i, /^may/i, /^jun/i, /^jul/i, /^ago/i, /^sep/i, /^oct/i, /^nov/i, /^dic/i]; const r = /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i; const i = e.defineLocale('es-do', {
        months: 'enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre'.split('_'),
        monthsShort(e, n) { return e ? /-MMM-/.test(n) ? a[e.month()] : t[e.month()] : t; },
        monthsRegex: r,
        monthsShortRegex: r,
        monthsStrictRegex: /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,
        monthsShortStrictRegex: /^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,
        monthsParse: n,
        longMonthsParse: n,
        shortMonthsParse: n,
        weekdays: 'domingo_lunes_martes_miércoles_jueves_viernes_sábado'.split('_'),
        weekdaysShort: 'dom._lun._mar._mié._jue._vie._sáb.'.split('_'),
        weekdaysMin: 'do_lu_ma_mi_ju_vi_sá'.split('_'),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: 'h:mm A', LTS: 'h:mm:ss A', L: 'DD/MM/YYYY', LL: 'D [de] MMMM [de] YYYY', LLL: 'D [de] MMMM [de] YYYY h:mm A', LLLL: 'dddd, D [de] MMMM [de] YYYY h:mm A',
        },
        calendar: {
          sameDay() { return `[hoy a la${this.hours() !== 1 ? 's' : ''}] LT`; }, nextDay() { return `[mañana a la${this.hours() !== 1 ? 's' : ''}] LT`; }, nextWeek() { return `dddd [a la${this.hours() !== 1 ? 's' : ''}] LT`; }, lastDay() { return `[ayer a la${this.hours() !== 1 ? 's' : ''}] LT`; }, lastWeek() { return `[el] dddd [pasado a la${this.hours() !== 1 ? 's' : ''}] LT`; }, sameElse: 'L',
        },
        relativeTime: {
          future: 'en %s', past: 'hace %s', s: 'unos segundos', ss: '%d segundos', m: 'un minuto', mm: '%d minutos', h: 'una hora', hh: '%d horas', d: 'un día', dd: '%d días', M: 'un mes', MM: '%d meses', y: 'un año', yy: '%d años',
        },
        dayOfMonthOrdinalParse: /\d{1,2}º/,
        ordinal: '%dº',
        week: { dow: 1, doy: 4 },
      }); return i;
    })));
  },
  '0a84': function (e, t, a) {
    (function (e, t) { t(a('c1df')); }(0, ((e) => {
      const t = e.defineLocale('ar-ma', {
        months: 'يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر'.split('_'),
        monthsShort: 'يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر'.split('_'),
        weekdays: 'الأحد_الإتنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت'.split('_'),
        weekdaysShort: 'احد_اتنين_ثلاثاء_اربعاء_خميس_جمعة_سبت'.split('_'),
        weekdaysMin: 'ح_ن_ث_ر_خ_ج_س'.split('_'),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: 'HH:mm', LTS: 'HH:mm:ss', L: 'DD/MM/YYYY', LL: 'D MMMM YYYY', LLL: 'D MMMM YYYY HH:mm', LLLL: 'dddd D MMMM YYYY HH:mm',
        },
        calendar: {
          sameDay: '[اليوم على الساعة] LT', nextDay: '[غدا على الساعة] LT', nextWeek: 'dddd [على الساعة] LT', lastDay: '[أمس على الساعة] LT', lastWeek: 'dddd [على الساعة] LT', sameElse: 'L',
        },
        relativeTime: {
          future: 'في %s', past: 'منذ %s', s: 'ثوان', ss: '%d ثانية', m: 'دقيقة', mm: '%d دقائق', h: 'ساعة', hh: '%d ساعات', d: 'يوم', dd: '%d أيام', M: 'شهر', MM: '%d أشهر', y: 'سنة', yy: '%d سنوات',
        },
        week: { dow: 6, doy: 12 },
      }); return t;
    })));
  },
  '0caa': function (e, t, a) {
    (function (e, t) { t(a('c1df')); }(0, ((e) => {
      function t(e, t, a, n) {
        const r = {
          s: ['thodde secondanim', 'thodde second'], ss: [`${e} secondanim`, `${e} second`], m: ['eka mintan', 'ek minute'], mm: [`${e} mintanim`, `${e} mintam`], h: ['eka voran', 'ek vor'], hh: [`${e} voranim`, `${e} voram`], d: ['eka disan', 'ek dis'], dd: [`${e} disanim`, `${e} dis`], M: ['eka mhoinean', 'ek mhoino'], MM: [`${e} mhoineanim`, `${e} mhoine`], y: ['eka vorsan', 'ek voros'], yy: [`${e} vorsanim`, `${e} vorsam`],
        }; return t ? r[a][0] : r[a][1];
      } const a = e.defineLocale('gom-latn', {
        months: 'Janer_Febrer_Mars_Abril_Mai_Jun_Julai_Agost_Setembr_Otubr_Novembr_Dezembr'.split('_'),
        monthsShort: 'Jan._Feb._Mars_Abr._Mai_Jun_Jul._Ago._Set._Otu._Nov._Dez.'.split('_'),
        monthsParseExact: !0,
        weekdays: "Aitar_Somar_Mongllar_Budvar_Brestar_Sukrar_Son'var".split('_'),
        weekdaysShort: 'Ait._Som._Mon._Bud._Bre._Suk._Son.'.split('_'),
        weekdaysMin: 'Ai_Sm_Mo_Bu_Br_Su_Sn'.split('_'),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: 'A h:mm [vazta]', LTS: 'A h:mm:ss [vazta]', L: 'DD-MM-YYYY', LL: 'D MMMM YYYY', LLL: 'D MMMM YYYY A h:mm [vazta]', LLLL: 'dddd, MMMM[achea] Do, YYYY, A h:mm [vazta]', llll: 'ddd, D MMM YYYY, A h:mm [vazta]',
        },
        calendar: {
          sameDay: '[Aiz] LT', nextDay: '[Faleam] LT', nextWeek: '[Ieta to] dddd[,] LT', lastDay: '[Kal] LT', lastWeek: '[Fatlo] dddd[,] LT', sameElse: 'L',
        },
        relativeTime: {
          future: '%s', past: '%s adim', s: t, ss: t, m: t, mm: t, h: t, hh: t, d: t, dd: t, M: t, MM: t, y: t, yy: t,
        },
        dayOfMonthOrdinalParse: /\d{1,2}(er)/,
        ordinal(e, t) { switch (t) { case 'D': return `${e}er`; default: case 'M': case 'Q': case 'DDD': case 'd': case 'w': case 'W': return e; } },
        week: { dow: 1, doy: 4 },
        meridiemParse: /rati|sokalli|donparam|sanje/,
        meridiemHour(e, t) { return e === 12 && (e = 0), t === 'rati' ? e < 4 ? e : e + 12 : t === 'sokalli' ? e : t === 'donparam' ? e > 12 ? e : e + 12 : t === 'sanje' ? e + 12 : void 0; },
        meridiem(e, t, a) { return e < 4 ? 'rati' : e < 12 ? 'sokalli' : e < 16 ? 'donparam' : e < 20 ? 'sanje' : 'rati'; },
      }); return a;
    })));
  },
  '0e49': function (e, t, a) {
    (function (e, t) { t(a('c1df')); }(0, ((e) => {
      const t = e.defineLocale('fr-ch', {
        months: 'janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre'.split('_'),
        monthsShort: 'janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.'.split('_'),
        monthsParseExact: !0,
        weekdays: 'dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi'.split('_'),
        weekdaysShort: 'dim._lun._mar._mer._jeu._ven._sam.'.split('_'),
        weekdaysMin: 'di_lu_ma_me_je_ve_sa'.split('_'),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: 'HH:mm', LTS: 'HH:mm:ss', L: 'DD.MM.YYYY', LL: 'D MMMM YYYY', LLL: 'D MMMM YYYY HH:mm', LLLL: 'dddd D MMMM YYYY HH:mm',
        },
        calendar: {
          sameDay: '[Aujourd’hui à] LT', nextDay: '[Demain à] LT', nextWeek: 'dddd [à] LT', lastDay: '[Hier à] LT', lastWeek: 'dddd [dernier à] LT', sameElse: 'L',
        },
        relativeTime: {
          future: 'dans %s', past: 'il y a %s', s: 'quelques secondes', ss: '%d secondes', m: 'une minute', mm: '%d minutes', h: 'une heure', hh: '%d heures', d: 'un jour', dd: '%d jours', M: 'un mois', MM: '%d mois', y: 'un an', yy: '%d ans',
        },
        dayOfMonthOrdinalParse: /\d{1,2}(er|e)/,
        ordinal(e, t) { switch (t) { default: case 'M': case 'Q': case 'D': case 'DDD': case 'd': return e + (e === 1 ? 'er' : 'e'); case 'w': case 'W': return e + (e === 1 ? 're' : 'e'); } },
        week: { dow: 1, doy: 4 },
      }); return t;
    })));
  },
  '0e6b': function (e, t, a) {
    (function (e, t) { t(a('c1df')); }(0, ((e) => {
      const t = e.defineLocale('en-au', {
        months: 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
        monthsShort: 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
        weekdays: 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
        weekdaysShort: 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
        weekdaysMin: 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
        longDateFormat: {
          LT: 'h:mm A', LTS: 'h:mm:ss A', L: 'DD/MM/YYYY', LL: 'D MMMM YYYY', LLL: 'D MMMM YYYY h:mm A', LLLL: 'dddd, D MMMM YYYY h:mm A',
        },
        calendar: {
          sameDay: '[Today at] LT', nextDay: '[Tomorrow at] LT', nextWeek: 'dddd [at] LT', lastDay: '[Yesterday at] LT', lastWeek: '[Last] dddd [at] LT', sameElse: 'L',
        },
        relativeTime: {
          future: 'in %s', past: '%s ago', s: 'a few seconds', ss: '%d seconds', m: 'a minute', mm: '%d minutes', h: 'an hour', hh: '%d hours', d: 'a day', dd: '%d days', M: 'a month', MM: '%d months', y: 'a year', yy: '%d years',
        },
        dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
        ordinal(e) { const t = e % 10; const a = ~~(e % 100 / 10) === 1 ? 'th' : t === 1 ? 'st' : t === 2 ? 'nd' : t === 3 ? 'rd' : 'th'; return e + a; },
        week: { dow: 1, doy: 4 },
      }); return t;
    })));
  },
  '0e81': function (e, t, a) {
    (function (e, t) { t(a('c1df')); }(0, ((e) => {
      const t = {
        1: "'inci", 5: "'inci", 8: "'inci", 70: "'inci", 80: "'inci", 2: "'nci", 7: "'nci", 20: "'nci", 50: "'nci", 3: "'üncü", 4: "'üncü", 100: "'üncü", 6: "'ncı", 9: "'uncu", 10: "'uncu", 30: "'uncu", 60: "'ıncı", 90: "'ıncı",
      }; const a = e.defineLocale('tr', {
        months: 'Ocak_Şubat_Mart_Nisan_Mayıs_Haziran_Temmuz_Ağustos_Eylül_Ekim_Kasım_Aralık'.split('_'),
        monthsShort: 'Oca_Şub_Mar_Nis_May_Haz_Tem_Ağu_Eyl_Eki_Kas_Ara'.split('_'),
        weekdays: 'Pazar_Pazartesi_Salı_Çarşamba_Perşembe_Cuma_Cumartesi'.split('_'),
        weekdaysShort: 'Paz_Pts_Sal_Çar_Per_Cum_Cts'.split('_'),
        weekdaysMin: 'Pz_Pt_Sa_Ça_Pe_Cu_Ct'.split('_'),
        longDateFormat: {
          LT: 'HH:mm', LTS: 'HH:mm:ss', L: 'DD.MM.YYYY', LL: 'D MMMM YYYY', LLL: 'D MMMM YYYY HH:mm', LLLL: 'dddd, D MMMM YYYY HH:mm',
        },
        calendar: {
          sameDay: '[bugün saat] LT', nextDay: '[yarın saat] LT', nextWeek: '[gelecek] dddd [saat] LT', lastDay: '[dün] LT', lastWeek: '[geçen] dddd [saat] LT', sameElse: 'L',
        },
        relativeTime: {
          future: '%s sonra', past: '%s önce', s: 'birkaç saniye', ss: '%d saniye', m: 'bir dakika', mm: '%d dakika', h: 'bir saat', hh: '%d saat', d: 'bir gün', dd: '%d gün', M: 'bir ay', MM: '%d ay', y: 'bir yıl', yy: '%d yıl',
        },
        ordinal(e, a) { switch (a) { case 'd': case 'D': case 'Do': case 'DD': return e; default: if (e === 0) return `${e}'ıncı`; var n = e % 10; var r = e % 100 - n; var i = e >= 100 ? 100 : null; return e + (t[n] || t[r] || t[i]); } },
        week: { dow: 1, doy: 7 },
      }); return a;
    })));
  },
  '0f14': function (e, t, a) {
    (function (e, t) { t(a('c1df')); }(0, ((e) => {
      const t = e.defineLocale('da', {
        months: 'januar_februar_marts_april_maj_juni_juli_august_september_oktober_november_december'.split('_'),
        monthsShort: 'jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec'.split('_'),
        weekdays: 'søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag'.split('_'),
        weekdaysShort: 'søn_man_tir_ons_tor_fre_lør'.split('_'),
        weekdaysMin: 'sø_ma_ti_on_to_fr_lø'.split('_'),
        longDateFormat: {
          LT: 'HH:mm', LTS: 'HH:mm:ss', L: 'DD.MM.YYYY', LL: 'D. MMMM YYYY', LLL: 'D. MMMM YYYY HH:mm', LLLL: 'dddd [d.] D. MMMM YYYY [kl.] HH:mm',
        },
        calendar: {
          sameDay: '[i dag kl.] LT', nextDay: '[i morgen kl.] LT', nextWeek: 'på dddd [kl.] LT', lastDay: '[i går kl.] LT', lastWeek: '[i] dddd[s kl.] LT', sameElse: 'L',
        },
        relativeTime: {
          future: 'om %s', past: '%s siden', s: 'få sekunder', ss: '%d sekunder', m: 'et minut', mm: '%d minutter', h: 'en time', hh: '%d timer', d: 'en dag', dd: '%d dage', M: 'en måned', MM: '%d måneder', y: 'et år', yy: '%d år',
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: '%d.',
        week: { dow: 1, doy: 4 },
      }); return t;
    })));
  },
  '0f38': function (e, t, a) {
    (function (e, t) { t(a('c1df')); }(0, ((e) => {
      const t = e.defineLocale('tl-ph', {
        months: 'Enero_Pebrero_Marso_Abril_Mayo_Hunyo_Hulyo_Agosto_Setyembre_Oktubre_Nobyembre_Disyembre'.split('_'),
        monthsShort: 'Ene_Peb_Mar_Abr_May_Hun_Hul_Ago_Set_Okt_Nob_Dis'.split('_'),
        weekdays: 'Linggo_Lunes_Martes_Miyerkules_Huwebes_Biyernes_Sabado'.split('_'),
        weekdaysShort: 'Lin_Lun_Mar_Miy_Huw_Biy_Sab'.split('_'),
        weekdaysMin: 'Li_Lu_Ma_Mi_Hu_Bi_Sab'.split('_'),
        longDateFormat: {
          LT: 'HH:mm', LTS: 'HH:mm:ss', L: 'MM/D/YYYY', LL: 'MMMM D, YYYY', LLL: 'MMMM D, YYYY HH:mm', LLLL: 'dddd, MMMM DD, YYYY HH:mm',
        },
        calendar: {
          sameDay: 'LT [ngayong araw]', nextDay: '[Bukas ng] LT', nextWeek: 'LT [sa susunod na] dddd', lastDay: 'LT [kahapon]', lastWeek: 'LT [noong nakaraang] dddd', sameElse: 'L',
        },
        relativeTime: {
          future: 'sa loob ng %s', past: '%s ang nakalipas', s: 'ilang segundo', ss: '%d segundo', m: 'isang minuto', mm: '%d minuto', h: 'isang oras', hh: '%d oras', d: 'isang araw', dd: '%d araw', M: 'isang buwan', MM: '%d buwan', y: 'isang taon', yy: '%d taon',
        },
        dayOfMonthOrdinalParse: /\d{1,2}/,
        ordinal(e) { return e; },
        week: { dow: 1, doy: 4 },
      }); return t;
    })));
  },
  '0ff2': function (e, t, a) {
    (function (e, t) { t(a('c1df')); }(0, ((e) => {
      const t = e.defineLocale('eu', {
        months: 'urtarrila_otsaila_martxoa_apirila_maiatza_ekaina_uztaila_abuztua_iraila_urria_azaroa_abendua'.split('_'),
        monthsShort: 'urt._ots._mar._api._mai._eka._uzt._abu._ira._urr._aza._abe.'.split('_'),
        monthsParseExact: !0,
        weekdays: 'igandea_astelehena_asteartea_asteazkena_osteguna_ostirala_larunbata'.split('_'),
        weekdaysShort: 'ig._al._ar._az._og._ol._lr.'.split('_'),
        weekdaysMin: 'ig_al_ar_az_og_ol_lr'.split('_'),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: 'HH:mm', LTS: 'HH:mm:ss', L: 'YYYY-MM-DD', LL: 'YYYY[ko] MMMM[ren] D[a]', LLL: 'YYYY[ko] MMMM[ren] D[a] HH:mm', LLLL: 'dddd, YYYY[ko] MMMM[ren] D[a] HH:mm', l: 'YYYY-M-D', ll: 'YYYY[ko] MMM D[a]', lll: 'YYYY[ko] MMM D[a] HH:mm', llll: 'ddd, YYYY[ko] MMM D[a] HH:mm',
        },
        calendar: {
          sameDay: '[gaur] LT[etan]', nextDay: '[bihar] LT[etan]', nextWeek: 'dddd LT[etan]', lastDay: '[atzo] LT[etan]', lastWeek: '[aurreko] dddd LT[etan]', sameElse: 'L',
        },
        relativeTime: {
          future: '%s barru', past: 'duela %s', s: 'segundo batzuk', ss: '%d segundo', m: 'minutu bat', mm: '%d minutu', h: 'ordu bat', hh: '%d ordu', d: 'egun bat', dd: '%d egun', M: 'hilabete bat', MM: '%d hilabete', y: 'urte bat', yy: '%d urte',
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: '%d.',
        week: { dow: 1, doy: 7 },
      }); return t;
    })));
  },
  '10e8': function (e, t, a) {
    (function (e, t) { t(a('c1df')); }(0, ((e) => {
      const t = e.defineLocale('th', {
        months: 'มกราคม_กุมภาพันธ์_มีนาคม_เมษายน_พฤษภาคม_มิถุนายน_กรกฎาคม_สิงหาคม_กันยายน_ตุลาคม_พฤศจิกายน_ธันวาคม'.split('_'),
        monthsShort: 'ม.ค._ก.พ._มี.ค._เม.ย._พ.ค._มิ.ย._ก.ค._ส.ค._ก.ย._ต.ค._พ.ย._ธ.ค.'.split('_'),
        monthsParseExact: !0,
        weekdays: 'อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัสบดี_ศุกร์_เสาร์'.split('_'),
        weekdaysShort: 'อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัส_ศุกร์_เสาร์'.split('_'),
        weekdaysMin: 'อา._จ._อ._พ._พฤ._ศ._ส.'.split('_'),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: 'H:mm', LTS: 'H:mm:ss', L: 'DD/MM/YYYY', LL: 'D MMMM YYYY', LLL: 'D MMMM YYYY เวลา H:mm', LLLL: 'วันddddที่ D MMMM YYYY เวลา H:mm',
        },
        meridiemParse: /ก่อนเที่ยง|หลังเที่ยง/,
        isPM(e) { return e === 'หลังเที่ยง'; },
        meridiem(e, t, a) { return e < 12 ? 'ก่อนเที่ยง' : 'หลังเที่ยง'; },
        calendar: {
          sameDay: '[วันนี้ เวลา] LT', nextDay: '[พรุ่งนี้ เวลา] LT', nextWeek: 'dddd[หน้า เวลา] LT', lastDay: '[เมื่อวานนี้ เวลา] LT', lastWeek: '[วัน]dddd[ที่แล้ว เวลา] LT', sameElse: 'L',
        },
        relativeTime: {
          future: 'อีก %s', past: '%sที่แล้ว', s: 'ไม่กี่วินาที', ss: '%d วินาที', m: '1 นาที', mm: '%d นาที', h: '1 ชั่วโมง', hh: '%d ชั่วโมง', d: '1 วัน', dd: '%d วัน', M: '1 เดือน', MM: '%d เดือน', y: '1 ปี', yy: '%d ปี',
        },
      }); return t;
    })));
  },
  '13e9': function (e, t, a) {
    (function (e, t) { t(a('c1df')); }(0, ((e) => {
      var t = {
        words: {
          ss: ['секунда', 'секунде', 'секунди'], m: ['један минут', 'једне минуте'], mm: ['минут', 'минуте', 'минута'], h: ['један сат', 'једног сата'], hh: ['сат', 'сата', 'сати'], dd: ['дан', 'дана', 'дана'], MM: ['месец', 'месеца', 'месеци'], yy: ['година', 'године', 'година'],
        },
        correctGrammaticalCase(e, t) { return e === 1 ? t[0] : e >= 2 && e <= 4 ? t[1] : t[2]; },
        translate(e, a, n) { const r = t.words[n]; return n.length === 1 ? a ? r[0] : r[1] : `${e} ${t.correctGrammaticalCase(e, r)}`; },
      }; const a = e.defineLocale('sr-cyrl', {
        months: 'јануар_фебруар_март_април_мај_јун_јул_август_септембар_октобар_новембар_децембар'.split('_'),
        monthsShort: 'јан._феб._мар._апр._мај_јун_јул_авг._сеп._окт._нов._дец.'.split('_'),
        monthsParseExact: !0,
        weekdays: 'недеља_понедељак_уторак_среда_четвртак_петак_субота'.split('_'),
        weekdaysShort: 'нед._пон._уто._сре._чет._пет._суб.'.split('_'),
        weekdaysMin: 'не_по_ут_ср_че_пе_су'.split('_'),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: 'H:mm', LTS: 'H:mm:ss', L: 'DD.MM.YYYY', LL: 'D. MMMM YYYY', LLL: 'D. MMMM YYYY H:mm', LLLL: 'dddd, D. MMMM YYYY H:mm',
        },
        calendar: {
          sameDay: '[данас у] LT', nextDay: '[сутра у] LT', nextWeek() { switch (this.day()) { case 0: return '[у] [недељу] [у] LT'; case 3: return '[у] [среду] [у] LT'; case 6: return '[у] [суботу] [у] LT'; case 1: case 2: case 4: case 5: return '[у] dddd [у] LT'; } }, lastDay: '[јуче у] LT', lastWeek() { const e = ['[прошле] [недеље] [у] LT', '[прошлог] [понедељка] [у] LT', '[прошлог] [уторка] [у] LT', '[прошле] [среде] [у] LT', '[прошлог] [четвртка] [у] LT', '[прошлог] [петка] [у] LT', '[прошле] [суботе] [у] LT']; return e[this.day()]; }, sameElse: 'L',
        },
        relativeTime: {
          future: 'за %s', past: 'пре %s', s: 'неколико секунди', ss: t.translate, m: t.translate, mm: t.translate, h: t.translate, hh: t.translate, d: 'дан', dd: t.translate, M: 'месец', MM: t.translate, y: 'годину', yy: t.translate,
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: '%d.',
        week: { dow: 1, doy: 7 },
      }); return a;
    })));
  },
  '1b45': function (e, t, a) {
    (function (e, t) { t(a('c1df')); }(0, ((e) => {
      const t = e.defineLocale('mt', {
        months: 'Jannar_Frar_Marzu_April_Mejju_Ġunju_Lulju_Awwissu_Settembru_Ottubru_Novembru_Diċembru'.split('_'),
        monthsShort: 'Jan_Fra_Mar_Apr_Mej_Ġun_Lul_Aww_Set_Ott_Nov_Diċ'.split('_'),
        weekdays: 'Il-Ħadd_It-Tnejn_It-Tlieta_L-Erbgħa_Il-Ħamis_Il-Ġimgħa_Is-Sibt'.split('_'),
        weekdaysShort: 'Ħad_Tne_Tli_Erb_Ħam_Ġim_Sib'.split('_'),
        weekdaysMin: 'Ħa_Tn_Tl_Er_Ħa_Ġi_Si'.split('_'),
        longDateFormat: {
          LT: 'HH:mm', LTS: 'HH:mm:ss', L: 'DD/MM/YYYY', LL: 'D MMMM YYYY', LLL: 'D MMMM YYYY HH:mm', LLLL: 'dddd, D MMMM YYYY HH:mm',
        },
        calendar: {
          sameDay: '[Illum fil-]LT', nextDay: '[Għada fil-]LT', nextWeek: 'dddd [fil-]LT', lastDay: '[Il-bieraħ fil-]LT', lastWeek: 'dddd [li għadda] [fil-]LT', sameElse: 'L',
        },
        relativeTime: {
          future: 'f’ %s', past: '%s ilu', s: 'ftit sekondi', ss: '%d sekondi', m: 'minuta', mm: '%d minuti', h: 'siegħa', hh: '%d siegħat', d: 'ġurnata', dd: '%d ġranet', M: 'xahar', MM: '%d xhur', y: 'sena', yy: '%d sni',
        },
        dayOfMonthOrdinalParse: /\d{1,2}º/,
        ordinal: '%dº',
        week: { dow: 1, doy: 4 },
      }); return t;
    })));
  },
  '1cfd': function (e, t, a) {
    (function (e, t) { t(a('c1df')); }(0, ((e) => {
      const t = {
        1: '1', 2: '2', 3: '3', 4: '4', 5: '5', 6: '6', 7: '7', 8: '8', 9: '9', 0: '0',
      }; const a = function (e) { return e === 0 ? 0 : e === 1 ? 1 : e === 2 ? 2 : e % 100 >= 3 && e % 100 <= 10 ? 3 : e % 100 >= 11 ? 4 : 5; }; const n = {
        s: ['أقل من ثانية', 'ثانية واحدة', ['ثانيتان', 'ثانيتين'], '%d ثوان', '%d ثانية', '%d ثانية'], m: ['أقل من دقيقة', 'دقيقة واحدة', ['دقيقتان', 'دقيقتين'], '%d دقائق', '%d دقيقة', '%d دقيقة'], h: ['أقل من ساعة', 'ساعة واحدة', ['ساعتان', 'ساعتين'], '%d ساعات', '%d ساعة', '%d ساعة'], d: ['أقل من يوم', 'يوم واحد', ['يومان', 'يومين'], '%d أيام', '%d يومًا', '%d يوم'], M: ['أقل من شهر', 'شهر واحد', ['شهران', 'شهرين'], '%d أشهر', '%d شهرا', '%d شهر'], y: ['أقل من عام', 'عام واحد', ['عامان', 'عامين'], '%d أعوام', '%d عامًا', '%d عام'],
      }; const r = function (e) { return function (t, r, i, s) { const o = a(t); let d = n[e][a(t)]; return o === 2 && (d = d[r ? 0 : 1]), d.replace(/%d/i, t); }; }; const i = ['يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو', 'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر']; const s = e.defineLocale('ar-ly', {
        months: i,
        monthsShort: i,
        weekdays: 'الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت'.split('_'),
        weekdaysShort: 'أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت'.split('_'),
        weekdaysMin: 'ح_ن_ث_ر_خ_ج_س'.split('_'),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: 'HH:mm', LTS: 'HH:mm:ss', L: 'D/‏M/‏YYYY', LL: 'D MMMM YYYY', LLL: 'D MMMM YYYY HH:mm', LLLL: 'dddd D MMMM YYYY HH:mm',
        },
        meridiemParse: /ص|م/,
        isPM(e) { return e === 'م'; },
        meridiem(e, t, a) { return e < 12 ? 'ص' : 'م'; },
        calendar: {
          sameDay: '[اليوم عند الساعة] LT', nextDay: '[غدًا عند الساعة] LT', nextWeek: 'dddd [عند الساعة] LT', lastDay: '[أمس عند الساعة] LT', lastWeek: 'dddd [عند الساعة] LT', sameElse: 'L',
        },
        relativeTime: {
          future: 'بعد %s', past: 'منذ %s', s: r('s'), ss: r('s'), m: r('m'), mm: r('m'), h: r('h'), hh: r('h'), d: r('d'), dd: r('d'), M: r('M'), MM: r('M'), y: r('y'), yy: r('y'),
        },
        preparse(e) { return e.replace(/،/g, ','); },
        postformat(e) { return e.replace(/\d/g, ((e) => t[e])).replace(/,/g, '،'); },
        week: { dow: 6, doy: 12 },
      }); return s;
    })));
  },
  '1fc1': function (e, t, a) {
    (function (e, t) { t(a('c1df')); }(0, ((e) => {
      function t(e, t) { const a = e.split('_'); return t % 10 === 1 && t % 100 !== 11 ? a[0] : t % 10 >= 2 && t % 10 <= 4 && (t % 100 < 10 || t % 100 >= 20) ? a[1] : a[2]; } function a(e, a, n) {
        const r = {
          ss: a ? 'секунда_секунды_секунд' : 'секунду_секунды_секунд', mm: a ? 'хвіліна_хвіліны_хвілін' : 'хвіліну_хвіліны_хвілін', hh: a ? 'гадзіна_гадзіны_гадзін' : 'гадзіну_гадзіны_гадзін', dd: 'дзень_дні_дзён', MM: 'месяц_месяцы_месяцаў', yy: 'год_гады_гадоў',
        }; return n === 'm' ? a ? 'хвіліна' : 'хвіліну' : n === 'h' ? a ? 'гадзіна' : 'гадзіну' : `${e} ${t(r[n], +e)}`;
      } const n = e.defineLocale('be', {
        months: { format: 'студзеня_лютага_сакавіка_красавіка_траўня_чэрвеня_ліпеня_жніўня_верасня_кастрычніка_лістапада_снежня'.split('_'), standalone: 'студзень_люты_сакавік_красавік_травень_чэрвень_ліпень_жнівень_верасень_кастрычнік_лістапад_снежань'.split('_') },
        monthsShort: 'студ_лют_сак_крас_трав_чэрв_ліп_жнів_вер_каст_ліст_снеж'.split('_'),
        weekdays: { format: 'нядзелю_панядзелак_аўторак_сераду_чацвер_пятніцу_суботу'.split('_'), standalone: 'нядзеля_панядзелак_аўторак_серада_чацвер_пятніца_субота'.split('_'), isFormat: /\[ ?[Ууў] ?(?:мінулую|наступную)? ?\] ?dddd/ },
        weekdaysShort: 'нд_пн_ат_ср_чц_пт_сб'.split('_'),
        weekdaysMin: 'нд_пн_ат_ср_чц_пт_сб'.split('_'),
        longDateFormat: {
          LT: 'HH:mm', LTS: 'HH:mm:ss', L: 'DD.MM.YYYY', LL: 'D MMMM YYYY г.', LLL: 'D MMMM YYYY г., HH:mm', LLLL: 'dddd, D MMMM YYYY г., HH:mm',
        },
        calendar: {
          sameDay: '[Сёння ў] LT', nextDay: '[Заўтра ў] LT', lastDay: '[Учора ў] LT', nextWeek() { return '[У] dddd [ў] LT'; }, lastWeek() { switch (this.day()) { case 0: case 3: case 5: case 6: return '[У мінулую] dddd [ў] LT'; case 1: case 2: case 4: return '[У мінулы] dddd [ў] LT'; } }, sameElse: 'L',
        },
        relativeTime: {
          future: 'праз %s', past: '%s таму', s: 'некалькі секунд', m: a, mm: a, h: a, hh: a, d: 'дзень', dd: a, M: 'месяц', MM: a, y: 'год', yy: a,
        },
        meridiemParse: /ночы|раніцы|дня|вечара/,
        isPM(e) { return /^(дня|вечара)$/.test(e); },
        meridiem(e, t, a) { return e < 4 ? 'ночы' : e < 12 ? 'раніцы' : e < 17 ? 'дня' : 'вечара'; },
        dayOfMonthOrdinalParse: /\d{1,2}-(і|ы|га)/,
        ordinal(e, t) { switch (t) { case 'M': case 'd': case 'DDD': case 'w': case 'W': return e % 10 !== 2 && e % 10 !== 3 || e % 100 === 12 || e % 100 === 13 ? `${e}-ы` : `${e}-і`; case 'D': return `${e}-га`; default: return e; } },
        week: { dow: 1, doy: 7 },
      }); return n;
    })));
  },
  '201b': function (e, t, a) {
    (function (e, t) { t(a('c1df')); }(0, ((e) => {
      const t = e.defineLocale('ka', {
        months: { standalone: 'იანვარი_თებერვალი_მარტი_აპრილი_მაისი_ივნისი_ივლისი_აგვისტო_სექტემბერი_ოქტომბერი_ნოემბერი_დეკემბერი'.split('_'), format: 'იანვარს_თებერვალს_მარტს_აპრილის_მაისს_ივნისს_ივლისს_აგვისტს_სექტემბერს_ოქტომბერს_ნოემბერს_დეკემბერს'.split('_') },
        monthsShort: 'იან_თებ_მარ_აპრ_მაი_ივნ_ივლ_აგვ_სექ_ოქტ_ნოე_დეკ'.split('_'),
        weekdays: { standalone: 'კვირა_ორშაბათი_სამშაბათი_ოთხშაბათი_ხუთშაბათი_პარასკევი_შაბათი'.split('_'), format: 'კვირას_ორშაბათს_სამშაბათს_ოთხშაბათს_ხუთშაბათს_პარასკევს_შაბათს'.split('_'), isFormat: /(წინა|შემდეგ)/ },
        weekdaysShort: 'კვი_ორშ_სამ_ოთხ_ხუთ_პარ_შაბ'.split('_'),
        weekdaysMin: 'კვ_ორ_სა_ოთ_ხუ_პა_შა'.split('_'),
        longDateFormat: {
          LT: 'h:mm A', LTS: 'h:mm:ss A', L: 'DD/MM/YYYY', LL: 'D MMMM YYYY', LLL: 'D MMMM YYYY h:mm A', LLLL: 'dddd, D MMMM YYYY h:mm A',
        },
        calendar: {
          sameDay: '[დღეს] LT[-ზე]', nextDay: '[ხვალ] LT[-ზე]', lastDay: '[გუშინ] LT[-ზე]', nextWeek: '[შემდეგ] dddd LT[-ზე]', lastWeek: '[წინა] dddd LT-ზე', sameElse: 'L',
        },
        relativeTime: {
          future(e) { return /(წამი|წუთი|საათი|წელი)/.test(e) ? e.replace(/ი$/, 'ში') : `${e}ში`; }, past(e) { return /(წამი|წუთი|საათი|დღე|თვე)/.test(e) ? e.replace(/(ი|ე)$/, 'ის წინ') : /წელი/.test(e) ? e.replace(/წელი$/, 'წლის წინ') : void 0; }, s: 'რამდენიმე წამი', ss: '%d წამი', m: 'წუთი', mm: '%d წუთი', h: 'საათი', hh: '%d საათი', d: 'დღე', dd: '%d დღე', M: 'თვე', MM: '%d თვე', y: 'წელი', yy: '%d წელი',
        },
        dayOfMonthOrdinalParse: /0|1-ლი|მე-\d{1,2}|\d{1,2}-ე/,
        ordinal(e) { return e === 0 ? e : e === 1 ? `${e}-ლი` : e < 20 || e <= 100 && e % 20 === 0 || e % 100 === 0 ? `მე-${e}` : `${e}-ე`; },
        week: { dow: 1, doy: 7 },
      }); return t;
    })));
  },
  '22f8': function (e, t, a) {
    (function (e, t) { t(a('c1df')); }(0, ((e) => {
      const t = e.defineLocale('ko', {
        months: '1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월'.split('_'),
        monthsShort: '1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월'.split('_'),
        weekdays: '일요일_월요일_화요일_수요일_목요일_금요일_토요일'.split('_'),
        weekdaysShort: '일_월_화_수_목_금_토'.split('_'),
        weekdaysMin: '일_월_화_수_목_금_토'.split('_'),
        longDateFormat: {
          LT: 'A h:mm', LTS: 'A h:mm:ss', L: 'YYYY.MM.DD.', LL: 'YYYY년 MMMM D일', LLL: 'YYYY년 MMMM D일 A h:mm', LLLL: 'YYYY년 MMMM D일 dddd A h:mm', l: 'YYYY.MM.DD.', ll: 'YYYY년 MMMM D일', lll: 'YYYY년 MMMM D일 A h:mm', llll: 'YYYY년 MMMM D일 dddd A h:mm',
        },
        calendar: {
          sameDay: '오늘 LT', nextDay: '내일 LT', nextWeek: 'dddd LT', lastDay: '어제 LT', lastWeek: '지난주 dddd LT', sameElse: 'L',
        },
        relativeTime: {
          future: '%s 후', past: '%s 전', s: '몇 초', ss: '%d초', m: '1분', mm: '%d분', h: '한 시간', hh: '%d시간', d: '하루', dd: '%d일', M: '한 달', MM: '%d달', y: '일 년', yy: '%d년',
        },
        dayOfMonthOrdinalParse: /\d{1,2}(일|월|주)/,
        ordinal(e, t) { switch (t) { case 'd': case 'D': case 'DDD': return `${e}일`; case 'M': return `${e}월`; case 'w': case 'W': return `${e}주`; default: return e; } },
        meridiemParse: /오전|오후/,
        isPM(e) { return e === '오후'; },
        meridiem(e, t, a) { return e < 12 ? '오전' : '오후'; },
      }); return t;
    })));
  },
  2421(e, t, a) {
    (function (e, t) { t(a('c1df')); }(0, ((e) => {
      const t = {
        1: '١', 2: '٢', 3: '٣', 4: '٤', 5: '٥', 6: '٦', 7: '٧', 8: '٨', 9: '٩', 0: '٠',
      }; const a = {
        '١': '1', '٢': '2', '٣': '3', '٤': '4', '٥': '5', '٦': '6', '٧': '7', '٨': '8', '٩': '9', '٠': '0',
      }; const n = ['کانونی دووەم', 'شوبات', 'ئازار', 'نیسان', 'ئایار', 'حوزەیران', 'تەمموز', 'ئاب', 'ئەیلوول', 'تشرینی یەكەم', 'تشرینی دووەم', 'كانونی یەکەم']; const r = e.defineLocale('ku', {
        months: n,
        monthsShort: n,
        weekdays: 'یه‌كشه‌ممه‌_دووشه‌ممه‌_سێشه‌ممه‌_چوارشه‌ممه‌_پێنجشه‌ممه‌_هه‌ینی_شه‌ممه‌'.split('_'),
        weekdaysShort: 'یه‌كشه‌م_دووشه‌م_سێشه‌م_چوارشه‌م_پێنجشه‌م_هه‌ینی_شه‌ممه‌'.split('_'),
        weekdaysMin: 'ی_د_س_چ_پ_ه_ش'.split('_'),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: 'HH:mm', LTS: 'HH:mm:ss', L: 'DD/MM/YYYY', LL: 'D MMMM YYYY', LLL: 'D MMMM YYYY HH:mm', LLLL: 'dddd, D MMMM YYYY HH:mm',
        },
        meridiemParse: /ئێواره‌|به‌یانی/,
        isPM(e) { return /ئێواره‌/.test(e); },
        meridiem(e, t, a) { return e < 12 ? 'به‌یانی' : 'ئێواره‌'; },
        calendar: {
          sameDay: '[ئه‌مرۆ كاتژمێر] LT', nextDay: '[به‌یانی كاتژمێر] LT', nextWeek: 'dddd [كاتژمێر] LT', lastDay: '[دوێنێ كاتژمێر] LT', lastWeek: 'dddd [كاتژمێر] LT', sameElse: 'L',
        },
        relativeTime: {
          future: 'له‌ %s', past: '%s', s: 'چه‌ند چركه‌یه‌ك', ss: 'چركه‌ %d', m: 'یه‌ك خوله‌ك', mm: '%d خوله‌ك', h: 'یه‌ك كاتژمێر', hh: '%d كاتژمێر', d: 'یه‌ك ڕۆژ', dd: '%d ڕۆژ', M: 'یه‌ك مانگ', MM: '%d مانگ', y: 'یه‌ك ساڵ', yy: '%d ساڵ',
        },
        preparse(e) { return e.replace(/[١٢٣٤٥٦٧٨٩٠]/g, ((e) => a[e])).replace(/،/g, ','); },
        postformat(e) { return e.replace(/\d/g, ((e) => t[e])).replace(/,/g, '،'); },
        week: { dow: 6, doy: 12 },
      }); return r;
    })));
  },
  2554(e, t, a) {
    (function (e, t) { t(a('c1df')); }(0, ((e) => {
      function t(e, t, a) { let n = `${e} `; switch (a) { case 'ss': return n += e === 1 ? 'sekunda' : e === 2 || e === 3 || e === 4 ? 'sekunde' : 'sekundi', n; case 'm': return t ? 'jedna minuta' : 'jedne minute'; case 'mm': return n += e === 1 ? 'minuta' : e === 2 || e === 3 || e === 4 ? 'minute' : 'minuta', n; case 'h': return t ? 'jedan sat' : 'jednog sata'; case 'hh': return n += e === 1 ? 'sat' : e === 2 || e === 3 || e === 4 ? 'sata' : 'sati', n; case 'dd': return n += e === 1 ? 'dan' : 'dana', n; case 'MM': return n += e === 1 ? 'mjesec' : e === 2 || e === 3 || e === 4 ? 'mjeseca' : 'mjeseci', n; case 'yy': return n += e === 1 ? 'godina' : e === 2 || e === 3 || e === 4 ? 'godine' : 'godina', n; } } const a = e.defineLocale('bs', {
        months: 'januar_februar_mart_april_maj_juni_juli_august_septembar_oktobar_novembar_decembar'.split('_'),
        monthsShort: 'jan._feb._mar._apr._maj._jun._jul._aug._sep._okt._nov._dec.'.split('_'),
        monthsParseExact: !0,
        weekdays: 'nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota'.split('_'),
        weekdaysShort: 'ned._pon._uto._sri._čet._pet._sub.'.split('_'),
        weekdaysMin: 'ne_po_ut_sr_če_pe_su'.split('_'),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: 'H:mm', LTS: 'H:mm:ss', L: 'DD.MM.YYYY', LL: 'D. MMMM YYYY', LLL: 'D. MMMM YYYY H:mm', LLLL: 'dddd, D. MMMM YYYY H:mm',
        },
        calendar: {
          sameDay: '[danas u] LT', nextDay: '[sutra u] LT', nextWeek() { switch (this.day()) { case 0: return '[u] [nedjelju] [u] LT'; case 3: return '[u] [srijedu] [u] LT'; case 6: return '[u] [subotu] [u] LT'; case 1: case 2: case 4: case 5: return '[u] dddd [u] LT'; } }, lastDay: '[jučer u] LT', lastWeek() { switch (this.day()) { case 0: case 3: return '[prošlu] dddd [u] LT'; case 6: return '[prošle] [subote] [u] LT'; case 1: case 2: case 4: case 5: return '[prošli] dddd [u] LT'; } }, sameElse: 'L',
        },
        relativeTime: {
          future: 'za %s', past: 'prije %s', s: 'par sekundi', ss: t, m: t, mm: t, h: t, hh: t, d: 'dan', dd: t, M: 'mjesec', MM: t, y: 'godinu', yy: t,
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: '%d.',
        week: { dow: 1, doy: 7 },
      }); return a;
    })));
  },
  '26f9': function (e, t, a) {
    (function (e, t) { t(a('c1df')); }(0, ((e) => {
      const t = {
        ss: 'sekundė_sekundžių_sekundes', m: 'minutė_minutės_minutę', mm: 'minutės_minučių_minutes', h: 'valanda_valandos_valandą', hh: 'valandos_valandų_valandas', d: 'diena_dienos_dieną', dd: 'dienos_dienų_dienas', M: 'mėnuo_mėnesio_mėnesį', MM: 'mėnesiai_mėnesių_mėnesius', y: 'metai_metų_metus', yy: 'metai_metų_metus',
      }; function a(e, t, a, n) { return t ? 'kelios sekundės' : n ? 'kelių sekundžių' : 'kelias sekundes'; } function n(e, t, a, n) { return t ? i(a)[0] : n ? i(a)[1] : i(a)[2]; } function r(e) { return e % 10 === 0 || e > 10 && e < 20; } function i(e) { return t[e].split('_'); } function s(e, t, a, s) { const o = `${e} `; return e === 1 ? o + n(e, t, a[0], s) : t ? o + (r(e) ? i(a)[1] : i(a)[0]) : s ? o + i(a)[1] : o + (r(e) ? i(a)[1] : i(a)[2]); } const o = e.defineLocale('lt', {
        months: { format: 'sausio_vasario_kovo_balandžio_gegužės_birželio_liepos_rugpjūčio_rugsėjo_spalio_lapkričio_gruodžio'.split('_'), standalone: 'sausis_vasaris_kovas_balandis_gegužė_birželis_liepa_rugpjūtis_rugsėjis_spalis_lapkritis_gruodis'.split('_'), isFormat: /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?|MMMM?(\[[^\[\]]*\]|\s)+D[oD]?/ },
        monthsShort: 'sau_vas_kov_bal_geg_bir_lie_rgp_rgs_spa_lap_grd'.split('_'),
        weekdays: { format: 'sekmadienį_pirmadienį_antradienį_trečiadienį_ketvirtadienį_penktadienį_šeštadienį'.split('_'), standalone: 'sekmadienis_pirmadienis_antradienis_trečiadienis_ketvirtadienis_penktadienis_šeštadienis'.split('_'), isFormat: /dddd HH:mm/ },
        weekdaysShort: 'Sek_Pir_Ant_Tre_Ket_Pen_Šeš'.split('_'),
        weekdaysMin: 'S_P_A_T_K_Pn_Š'.split('_'),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: 'HH:mm', LTS: 'HH:mm:ss', L: 'YYYY-MM-DD', LL: 'YYYY [m.] MMMM D [d.]', LLL: 'YYYY [m.] MMMM D [d.], HH:mm [val.]', LLLL: 'YYYY [m.] MMMM D [d.], dddd, HH:mm [val.]', l: 'YYYY-MM-DD', ll: 'YYYY [m.] MMMM D [d.]', lll: 'YYYY [m.] MMMM D [d.], HH:mm [val.]', llll: 'YYYY [m.] MMMM D [d.], ddd, HH:mm [val.]',
        },
        calendar: {
          sameDay: '[Šiandien] LT', nextDay: '[Rytoj] LT', nextWeek: 'dddd LT', lastDay: '[Vakar] LT', lastWeek: '[Praėjusį] dddd LT', sameElse: 'L',
        },
        relativeTime: {
          future: 'po %s', past: 'prieš %s', s: a, ss: s, m: n, mm: s, h: n, hh: s, d: n, dd: s, M: n, MM: s, y: n, yy: s,
        },
        dayOfMonthOrdinalParse: /\d{1,2}-oji/,
        ordinal(e) { return `${e}-oji`; },
        week: { dow: 1, doy: 4 },
      }); return o;
    })));
  },
  2921(e, t, a) {
    (function (e, t) { t(a('c1df')); }(0, ((e) => {
      const t = e.defineLocale('vi', {
        months: 'tháng 1_tháng 2_tháng 3_tháng 4_tháng 5_tháng 6_tháng 7_tháng 8_tháng 9_tháng 10_tháng 11_tháng 12'.split('_'),
        monthsShort: 'Th01_Th02_Th03_Th04_Th05_Th06_Th07_Th08_Th09_Th10_Th11_Th12'.split('_'),
        monthsParseExact: !0,
        weekdays: 'chủ nhật_thứ hai_thứ ba_thứ tư_thứ năm_thứ sáu_thứ bảy'.split('_'),
        weekdaysShort: 'CN_T2_T3_T4_T5_T6_T7'.split('_'),
        weekdaysMin: 'CN_T2_T3_T4_T5_T6_T7'.split('_'),
        weekdaysParseExact: !0,
        meridiemParse: /sa|ch/i,
        isPM(e) { return /^ch$/i.test(e); },
        meridiem(e, t, a) { return e < 12 ? a ? 'sa' : 'SA' : a ? 'ch' : 'CH'; },
        longDateFormat: {
          LT: 'HH:mm', LTS: 'HH:mm:ss', L: 'DD/MM/YYYY', LL: 'D MMMM [năm] YYYY', LLL: 'D MMMM [năm] YYYY HH:mm', LLLL: 'dddd, D MMMM [năm] YYYY HH:mm', l: 'DD/M/YYYY', ll: 'D MMM YYYY', lll: 'D MMM YYYY HH:mm', llll: 'ddd, D MMM YYYY HH:mm',
        },
        calendar: {
          sameDay: '[Hôm nay lúc] LT', nextDay: '[Ngày mai lúc] LT', nextWeek: 'dddd [tuần tới lúc] LT', lastDay: '[Hôm qua lúc] LT', lastWeek: 'dddd [tuần rồi lúc] LT', sameElse: 'L',
        },
        relativeTime: {
          future: '%s tới', past: '%s trước', s: 'vài giây', ss: '%d giây', m: 'một phút', mm: '%d phút', h: 'một giờ', hh: '%d giờ', d: 'một ngày', dd: '%d ngày', M: 'một tháng', MM: '%d tháng', y: 'một năm', yy: '%d năm',
        },
        dayOfMonthOrdinalParse: /\d{1,2}/,
        ordinal(e) { return e; },
        week: { dow: 1, doy: 4 },
      }); return t;
    })));
  },
  '293c': function (e, t, a) {
    (function (e, t) { t(a('c1df')); }(0, ((e) => {
      var t = {
        words: {
          ss: ['sekund', 'sekunda', 'sekundi'], m: ['jedan minut', 'jednog minuta'], mm: ['minut', 'minuta', 'minuta'], h: ['jedan sat', 'jednog sata'], hh: ['sat', 'sata', 'sati'], dd: ['dan', 'dana', 'dana'], MM: ['mjesec', 'mjeseca', 'mjeseci'], yy: ['godina', 'godine', 'godina'],
        },
        correctGrammaticalCase(e, t) { return e === 1 ? t[0] : e >= 2 && e <= 4 ? t[1] : t[2]; },
        translate(e, a, n) { const r = t.words[n]; return n.length === 1 ? a ? r[0] : r[1] : `${e} ${t.correctGrammaticalCase(e, r)}`; },
      }; const a = e.defineLocale('me', {
        months: 'januar_februar_mart_april_maj_jun_jul_avgust_septembar_oktobar_novembar_decembar'.split('_'),
        monthsShort: 'jan._feb._mar._apr._maj_jun_jul_avg._sep._okt._nov._dec.'.split('_'),
        monthsParseExact: !0,
        weekdays: 'nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota'.split('_'),
        weekdaysShort: 'ned._pon._uto._sri._čet._pet._sub.'.split('_'),
        weekdaysMin: 'ne_po_ut_sr_če_pe_su'.split('_'),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: 'H:mm', LTS: 'H:mm:ss', L: 'DD.MM.YYYY', LL: 'D. MMMM YYYY', LLL: 'D. MMMM YYYY H:mm', LLLL: 'dddd, D. MMMM YYYY H:mm',
        },
        calendar: {
          sameDay: '[danas u] LT', nextDay: '[sjutra u] LT', nextWeek() { switch (this.day()) { case 0: return '[u] [nedjelju] [u] LT'; case 3: return '[u] [srijedu] [u] LT'; case 6: return '[u] [subotu] [u] LT'; case 1: case 2: case 4: case 5: return '[u] dddd [u] LT'; } }, lastDay: '[juče u] LT', lastWeek() { const e = ['[prošle] [nedjelje] [u] LT', '[prošlog] [ponedjeljka] [u] LT', '[prošlog] [utorka] [u] LT', '[prošle] [srijede] [u] LT', '[prošlog] [četvrtka] [u] LT', '[prošlog] [petka] [u] LT', '[prošle] [subote] [u] LT']; return e[this.day()]; }, sameElse: 'L',
        },
        relativeTime: {
          future: 'za %s', past: 'prije %s', s: 'nekoliko sekundi', ss: t.translate, m: t.translate, mm: t.translate, h: t.translate, hh: t.translate, d: 'dan', dd: t.translate, M: 'mjesec', MM: t.translate, y: 'godinu', yy: t.translate,
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: '%d.',
        week: { dow: 1, doy: 7 },
      }); return a;
    })));
  },
  '2bfb': function (e, t, a) {
    (function (e, t) { t(a('c1df')); }(0, ((e) => {
      const t = e.defineLocale('af', {
        months: 'Januarie_Februarie_Maart_April_Mei_Junie_Julie_Augustus_September_Oktober_November_Desember'.split('_'),
        monthsShort: 'Jan_Feb_Mrt_Apr_Mei_Jun_Jul_Aug_Sep_Okt_Nov_Des'.split('_'),
        weekdays: 'Sondag_Maandag_Dinsdag_Woensdag_Donderdag_Vrydag_Saterdag'.split('_'),
        weekdaysShort: 'Son_Maa_Din_Woe_Don_Vry_Sat'.split('_'),
        weekdaysMin: 'So_Ma_Di_Wo_Do_Vr_Sa'.split('_'),
        meridiemParse: /vm|nm/i,
        isPM(e) { return /^nm$/i.test(e); },
        meridiem(e, t, a) { return e < 12 ? a ? 'vm' : 'VM' : a ? 'nm' : 'NM'; },
        longDateFormat: {
          LT: 'HH:mm', LTS: 'HH:mm:ss', L: 'DD/MM/YYYY', LL: 'D MMMM YYYY', LLL: 'D MMMM YYYY HH:mm', LLLL: 'dddd, D MMMM YYYY HH:mm',
        },
        calendar: {
          sameDay: '[Vandag om] LT', nextDay: '[Môre om] LT', nextWeek: 'dddd [om] LT', lastDay: '[Gister om] LT', lastWeek: '[Laas] dddd [om] LT', sameElse: 'L',
        },
        relativeTime: {
          future: 'oor %s', past: '%s gelede', s: "'n paar sekondes", ss: '%d sekondes', m: "'n minuut", mm: '%d minute', h: "'n uur", hh: '%d ure', d: "'n dag", dd: '%d dae', M: "'n maand", MM: '%d maande', y: "'n jaar", yy: '%d jaar',
        },
        dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
        ordinal(e) { return e + (e === 1 || e === 8 || e >= 20 ? 'ste' : 'de'); },
        week: { dow: 1, doy: 4 },
      }); return t;
    })));
  },
  '2e8c': function (e, t, a) {
    (function (e, t) { t(a('c1df')); }(0, ((e) => {
      const t = e.defineLocale('uz', {
        months: 'январ_феврал_март_апрел_май_июн_июл_август_сентябр_октябр_ноябр_декабр'.split('_'),
        monthsShort: 'янв_фев_мар_апр_май_июн_июл_авг_сен_окт_ноя_дек'.split('_'),
        weekdays: 'Якшанба_Душанба_Сешанба_Чоршанба_Пайшанба_Жума_Шанба'.split('_'),
        weekdaysShort: 'Якш_Душ_Сеш_Чор_Пай_Жум_Шан'.split('_'),
        weekdaysMin: 'Як_Ду_Се_Чо_Па_Жу_Ша'.split('_'),
        longDateFormat: {
          LT: 'HH:mm', LTS: 'HH:mm:ss', L: 'DD/MM/YYYY', LL: 'D MMMM YYYY', LLL: 'D MMMM YYYY HH:mm', LLLL: 'D MMMM YYYY, dddd HH:mm',
        },
        calendar: {
          sameDay: '[Бугун соат] LT [да]', nextDay: '[Эртага] LT [да]', nextWeek: 'dddd [куни соат] LT [да]', lastDay: '[Кеча соат] LT [да]', lastWeek: '[Утган] dddd [куни соат] LT [да]', sameElse: 'L',
        },
        relativeTime: {
          future: 'Якин %s ичида', past: 'Бир неча %s олдин', s: 'фурсат', ss: '%d фурсат', m: 'бир дакика', mm: '%d дакика', h: 'бир соат', hh: '%d соат', d: 'бир кун', dd: '%d кун', M: 'бир ой', MM: '%d ой', y: 'бир йил', yy: '%d йил',
        },
        week: { dow: 1, doy: 7 },
      }); return t;
    })));
  },
  '30ef': function (e, t, a) {
    /*!
 * Chart.js v2.9.3
 * https://www.chartjs.org
 * (c) 2019 Chart.js Contributors
 * Released under the MIT License
 */
    (function (t, n) { e.exports = n(function () { try { return a('c1df'); } catch (e) {} }()); }(0, ((e) => {
      function t(e, t) { return t = { exports: {} }, e(t, t.exports), t.exports; } function a(e) { return e && e.default || e; }e = e && e.hasOwnProperty('default') ? e.default : e; const n = {
        aliceblue: [240, 248, 255], antiquewhite: [250, 235, 215], aqua: [0, 255, 255], aquamarine: [127, 255, 212], azure: [240, 255, 255], beige: [245, 245, 220], bisque: [255, 228, 196], black: [0, 0, 0], blanchedalmond: [255, 235, 205], blue: [0, 0, 255], blueviolet: [138, 43, 226], brown: [165, 42, 42], burlywood: [222, 184, 135], cadetblue: [95, 158, 160], chartreuse: [127, 255, 0], chocolate: [210, 105, 30], coral: [255, 127, 80], cornflowerblue: [100, 149, 237], cornsilk: [255, 248, 220], crimson: [220, 20, 60], cyan: [0, 255, 255], darkblue: [0, 0, 139], darkcyan: [0, 139, 139], darkgoldenrod: [184, 134, 11], darkgray: [169, 169, 169], darkgreen: [0, 100, 0], darkgrey: [169, 169, 169], darkkhaki: [189, 183, 107], darkmagenta: [139, 0, 139], darkolivegreen: [85, 107, 47], darkorange: [255, 140, 0], darkorchid: [153, 50, 204], darkred: [139, 0, 0], darksalmon: [233, 150, 122], darkseagreen: [143, 188, 143], darkslateblue: [72, 61, 139], darkslategray: [47, 79, 79], darkslategrey: [47, 79, 79], darkturquoise: [0, 206, 209], darkviolet: [148, 0, 211], deeppink: [255, 20, 147], deepskyblue: [0, 191, 255], dimgray: [105, 105, 105], dimgrey: [105, 105, 105], dodgerblue: [30, 144, 255], firebrick: [178, 34, 34], floralwhite: [255, 250, 240], forestgreen: [34, 139, 34], fuchsia: [255, 0, 255], gainsboro: [220, 220, 220], ghostwhite: [248, 248, 255], gold: [255, 215, 0], goldenrod: [218, 165, 32], gray: [128, 128, 128], green: [0, 128, 0], greenyellow: [173, 255, 47], grey: [128, 128, 128], honeydew: [240, 255, 240], hotpink: [255, 105, 180], indianred: [205, 92, 92], indigo: [75, 0, 130], ivory: [255, 255, 240], khaki: [240, 230, 140], lavender: [230, 230, 250], lavenderblush: [255, 240, 245], lawngreen: [124, 252, 0], lemonchiffon: [255, 250, 205], lightblue: [173, 216, 230], lightcoral: [240, 128, 128], lightcyan: [224, 255, 255], lightgoldenrodyellow: [250, 250, 210], lightgray: [211, 211, 211], lightgreen: [144, 238, 144], lightgrey: [211, 211, 211], lightpink: [255, 182, 193], lightsalmon: [255, 160, 122], lightseagreen: [32, 178, 170], lightskyblue: [135, 206, 250], lightslategray: [119, 136, 153], lightslategrey: [119, 136, 153], lightsteelblue: [176, 196, 222], lightyellow: [255, 255, 224], lime: [0, 255, 0], limegreen: [50, 205, 50], linen: [250, 240, 230], magenta: [255, 0, 255], maroon: [128, 0, 0], mediumaquamarine: [102, 205, 170], mediumblue: [0, 0, 205], mediumorchid: [186, 85, 211], mediumpurple: [147, 112, 219], mediumseagreen: [60, 179, 113], mediumslateblue: [123, 104, 238], mediumspringgreen: [0, 250, 154], mediumturquoise: [72, 209, 204], mediumvioletred: [199, 21, 133], midnightblue: [25, 25, 112], mintcream: [245, 255, 250], mistyrose: [255, 228, 225], moccasin: [255, 228, 181], navajowhite: [255, 222, 173], navy: [0, 0, 128], oldlace: [253, 245, 230], olive: [128, 128, 0], olivedrab: [107, 142, 35], orange: [255, 165, 0], orangered: [255, 69, 0], orchid: [218, 112, 214], palegoldenrod: [238, 232, 170], palegreen: [152, 251, 152], paleturquoise: [175, 238, 238], palevioletred: [219, 112, 147], papayawhip: [255, 239, 213], peachpuff: [255, 218, 185], peru: [205, 133, 63], pink: [255, 192, 203], plum: [221, 160, 221], powderblue: [176, 224, 230], purple: [128, 0, 128], rebeccapurple: [102, 51, 153], red: [255, 0, 0], rosybrown: [188, 143, 143], royalblue: [65, 105, 225], saddlebrown: [139, 69, 19], salmon: [250, 128, 114], sandybrown: [244, 164, 96], seagreen: [46, 139, 87], seashell: [255, 245, 238], sienna: [160, 82, 45], silver: [192, 192, 192], skyblue: [135, 206, 235], slateblue: [106, 90, 205], slategray: [112, 128, 144], slategrey: [112, 128, 144], snow: [255, 250, 250], springgreen: [0, 255, 127], steelblue: [70, 130, 180], tan: [210, 180, 140], teal: [0, 128, 128], thistle: [216, 191, 216], tomato: [255, 99, 71], turquoise: [64, 224, 208], violet: [238, 130, 238], wheat: [245, 222, 179], white: [255, 255, 255], whitesmoke: [245, 245, 245], yellow: [255, 255, 0], yellowgreen: [154, 205, 50],
      }; const r = t(((e) => {
        const t = {}; for (const a in n)n.hasOwnProperty(a) && (t[n[a]] = a); const r = e.exports = {
          rgb: { channels: 3, labels: 'rgb' }, hsl: { channels: 3, labels: 'hsl' }, hsv: { channels: 3, labels: 'hsv' }, hwb: { channels: 3, labels: 'hwb' }, cmyk: { channels: 4, labels: 'cmyk' }, xyz: { channels: 3, labels: 'xyz' }, lab: { channels: 3, labels: 'lab' }, lch: { channels: 3, labels: 'lch' }, hex: { channels: 1, labels: ['hex'] }, keyword: { channels: 1, labels: ['keyword'] }, ansi16: { channels: 1, labels: ['ansi16'] }, ansi256: { channels: 1, labels: ['ansi256'] }, hcg: { channels: 3, labels: ['h', 'c', 'g'] }, apple: { channels: 3, labels: ['r16', 'g16', 'b16'] }, gray: { channels: 1, labels: ['gray'] },
        }; for (const i in r) if (r.hasOwnProperty(i)) { if (!('channels' in r[i])) throw new Error(`missing channels property: ${i}`); if (!('labels' in r[i])) throw new Error(`missing channel labels property: ${i}`); if (r[i].labels.length !== r[i].channels) throw new Error(`channel and label counts mismatch: ${i}`); const s = r[i].channels; const o = r[i].labels; delete r[i].channels, delete r[i].labels, Object.defineProperty(r[i], 'channels', { value: s }), Object.defineProperty(r[i], 'labels', { value: o }); } function d(e, t) { return Math.pow(e[0] - t[0], 2) + Math.pow(e[1] - t[1], 2) + Math.pow(e[2] - t[2], 2); }r.rgb.hsl = function (e) { let t; let a; let n; const r = e[0] / 255; const i = e[1] / 255; const s = e[2] / 255; const o = Math.min(r, i, s); const d = Math.max(r, i, s); const l = d - o; return d === o ? t = 0 : r === d ? t = (i - s) / l : i === d ? t = 2 + (s - r) / l : s === d && (t = 4 + (r - i) / l), t = Math.min(60 * t, 360), t < 0 && (t += 360), n = (o + d) / 2, a = d === o ? 0 : n <= 0.5 ? l / (d + o) : l / (2 - d - o), [t, 100 * a, 100 * n]; }, r.rgb.hsv = function (e) { let t; let a; let n; let r; let i; const s = e[0] / 255; const o = e[1] / 255; const d = e[2] / 255; const l = Math.max(s, o, d); const u = l - Math.min(s, o, d); const _ = function (e) { return (l - e) / 6 / u + 0.5; }; return u === 0 ? r = i = 0 : (i = u / l, t = _(s), a = _(o), n = _(d), s === l ? r = n - a : o === l ? r = 1 / 3 + t - n : d === l && (r = 2 / 3 + a - t), r < 0 ? r += 1 : r > 1 && (r -= 1)), [360 * r, 100 * i, 100 * l]; }, r.rgb.hwb = function (e) { const t = e[0]; const a = e[1]; let n = e[2]; const i = r.rgb.hsl(e)[0]; const s = 1 / 255 * Math.min(t, Math.min(a, n)); return n = 1 - 1 / 255 * Math.max(t, Math.max(a, n)), [i, 100 * s, 100 * n]; }, r.rgb.cmyk = function (e) { let t; let a; let n; let r; const i = e[0] / 255; const s = e[1] / 255; const o = e[2] / 255; return r = Math.min(1 - i, 1 - s, 1 - o), t = (1 - i - r) / (1 - r) || 0, a = (1 - s - r) / (1 - r) || 0, n = (1 - o - r) / (1 - r) || 0, [100 * t, 100 * a, 100 * n, 100 * r]; }, r.rgb.keyword = function (e) { const a = t[e]; if (a) return a; let r; let i = 1 / 0; for (const s in n) if (n.hasOwnProperty(s)) { const o = n[s]; const l = d(e, o); l < i && (i = l, r = s); } return r; }, r.keyword.rgb = function (e) { return n[e]; }, r.rgb.xyz = function (e) { let t = e[0] / 255; let a = e[1] / 255; let n = e[2] / 255; t = t > 0.04045 ? Math.pow((t + 0.055) / 1.055, 2.4) : t / 12.92, a = a > 0.04045 ? Math.pow((a + 0.055) / 1.055, 2.4) : a / 12.92, n = n > 0.04045 ? Math.pow((n + 0.055) / 1.055, 2.4) : n / 12.92; const r = 0.4124 * t + 0.3576 * a + 0.1805 * n; const i = 0.2126 * t + 0.7152 * a + 0.0722 * n; const s = 0.0193 * t + 0.1192 * a + 0.9505 * n; return [100 * r, 100 * i, 100 * s]; }, r.rgb.lab = function (e) { let t; let a; let n; const i = r.rgb.xyz(e); let s = i[0]; let o = i[1]; let d = i[2]; return s /= 95.047, o /= 100, d /= 108.883, s = s > 0.008856 ? Math.pow(s, 1 / 3) : 7.787 * s + 16 / 116, o = o > 0.008856 ? Math.pow(o, 1 / 3) : 7.787 * o + 16 / 116, d = d > 0.008856 ? Math.pow(d, 1 / 3) : 7.787 * d + 16 / 116, t = 116 * o - 16, a = 500 * (s - o), n = 200 * (o - d), [t, a, n]; }, r.hsl.rgb = function (e) { let t; let a; let n; let r; let i; const s = e[0] / 360; const o = e[1] / 100; const d = e[2] / 100; if (o === 0) return i = 255 * d, [i, i, i]; a = d < 0.5 ? d * (1 + o) : d + o - d * o, t = 2 * d - a, r = [0, 0, 0]; for (let l = 0; l < 3; l++)n = s + 1 / 3 * -(l - 1), n < 0 && n++, n > 1 && n--, i = 6 * n < 1 ? t + 6 * (a - t) * n : 2 * n < 1 ? a : 3 * n < 2 ? t + (a - t) * (2 / 3 - n) * 6 : t, r[l] = 255 * i; return r; }, r.hsl.hsv = function (e) { let t; let a; const n = e[0]; let r = e[1] / 100; let i = e[2] / 100; let s = r; const o = Math.max(i, 0.01); return i *= 2, r *= i <= 1 ? i : 2 - i, s *= o <= 1 ? o : 2 - o, a = (i + r) / 2, t = i === 0 ? 2 * s / (o + s) : 2 * r / (i + r), [n, 100 * t, 100 * a]; }, r.hsv.rgb = function (e) { const t = e[0] / 60; const a = e[1] / 100; let n = e[2] / 100; const r = Math.floor(t) % 6; const i = t - Math.floor(t); const s = 255 * n * (1 - a); const o = 255 * n * (1 - a * i); const d = 255 * n * (1 - a * (1 - i)); switch (n *= 255, r) { case 0: return [n, d, s]; case 1: return [o, n, s]; case 2: return [s, n, d]; case 3: return [s, o, n]; case 4: return [d, s, n]; case 5: return [n, s, o]; } }, r.hsv.hsl = function (e) { let t; let a; let n; const r = e[0]; const i = e[1] / 100; const s = e[2] / 100; const o = Math.max(s, 0.01); return n = (2 - i) * s, t = (2 - i) * o, a = i * o, a /= t <= 1 ? t : 2 - t, a = a || 0, n /= 2, [r, 100 * a, 100 * n]; }, r.hwb.rgb = function (e) { let t; let a; let n; let r; let i; let s; let o; const d = e[0] / 360; let l = e[1] / 100; let u = e[2] / 100; const _ = l + u; switch (_ > 1 && (l /= _, u /= _), t = Math.floor(6 * d), a = 1 - u, n = 6 * d - t, (1 & t) !== 0 && (n = 1 - n), r = l + n * (a - l), t) { default: case 6: case 0: i = a, s = r, o = l; break; case 1: i = r, s = a, o = l; break; case 2: i = l, s = a, o = r; break; case 3: i = l, s = r, o = a; break; case 4: i = r, s = l, o = a; break; case 5: i = a, s = l, o = r; break; } return [255 * i, 255 * s, 255 * o]; }, r.cmyk.rgb = function (e) { let t; let a; let n; const r = e[0] / 100; const i = e[1] / 100; const s = e[2] / 100; const o = e[3] / 100; return t = 1 - Math.min(1, r * (1 - o) + o), a = 1 - Math.min(1, i * (1 - o) + o), n = 1 - Math.min(1, s * (1 - o) + o), [255 * t, 255 * a, 255 * n]; }, r.xyz.rgb = function (e) { let t; let a; let n; const r = e[0] / 100; const i = e[1] / 100; const s = e[2] / 100; return t = 3.2406 * r + -1.5372 * i + -0.4986 * s, a = -0.9689 * r + 1.8758 * i + 0.0415 * s, n = 0.0557 * r + -0.204 * i + 1.057 * s, t = t > 0.0031308 ? 1.055 * Math.pow(t, 1 / 2.4) - 0.055 : 12.92 * t, a = a > 0.0031308 ? 1.055 * Math.pow(a, 1 / 2.4) - 0.055 : 12.92 * a, n = n > 0.0031308 ? 1.055 * Math.pow(n, 1 / 2.4) - 0.055 : 12.92 * n, t = Math.min(Math.max(0, t), 1), a = Math.min(Math.max(0, a), 1), n = Math.min(Math.max(0, n), 1), [255 * t, 255 * a, 255 * n]; }, r.xyz.lab = function (e) { let t; let a; let n; let r = e[0]; let i = e[1]; let s = e[2]; return r /= 95.047, i /= 100, s /= 108.883, r = r > 0.008856 ? Math.pow(r, 1 / 3) : 7.787 * r + 16 / 116, i = i > 0.008856 ? Math.pow(i, 1 / 3) : 7.787 * i + 16 / 116, s = s > 0.008856 ? Math.pow(s, 1 / 3) : 7.787 * s + 16 / 116, t = 116 * i - 16, a = 500 * (r - i), n = 200 * (i - s), [t, a, n]; }, r.lab.xyz = function (e) { let t; let a; let n; const r = e[0]; const i = e[1]; const s = e[2]; a = (r + 16) / 116, t = i / 500 + a, n = a - s / 200; const o = Math.pow(a, 3); const d = Math.pow(t, 3); const l = Math.pow(n, 3); return a = o > 0.008856 ? o : (a - 16 / 116) / 7.787, t = d > 0.008856 ? d : (t - 16 / 116) / 7.787, n = l > 0.008856 ? l : (n - 16 / 116) / 7.787, t *= 95.047, a *= 100, n *= 108.883, [t, a, n]; }, r.lab.lch = function (e) { let t; let a; let n; const r = e[0]; const i = e[1]; const s = e[2]; return t = Math.atan2(s, i), a = 360 * t / 2 / Math.PI, a < 0 && (a += 360), n = Math.sqrt(i * i + s * s), [r, n, a]; }, r.lch.lab = function (e) { let t; let a; let n; const r = e[0]; const i = e[1]; const s = e[2]; return n = s / 360 * 2 * Math.PI, t = i * Math.cos(n), a = i * Math.sin(n), [r, t, a]; }, r.rgb.ansi16 = function (e) { const t = e[0]; const a = e[1]; const n = e[2]; let i = 1 in arguments ? arguments[1] : r.rgb.hsv(e)[2]; if (i = Math.round(i / 50), i === 0) return 30; let s = 30 + (Math.round(n / 255) << 2 | Math.round(a / 255) << 1 | Math.round(t / 255)); return i === 2 && (s += 60), s; }, r.hsv.ansi16 = function (e) { return r.rgb.ansi16(r.hsv.rgb(e), e[2]); }, r.rgb.ansi256 = function (e) { const t = e[0]; const a = e[1]; const n = e[2]; if (t === a && a === n) return t < 8 ? 16 : t > 248 ? 231 : Math.round((t - 8) / 247 * 24) + 232; const r = 16 + 36 * Math.round(t / 255 * 5) + 6 * Math.round(a / 255 * 5) + Math.round(n / 255 * 5); return r; }, r.ansi16.rgb = function (e) { let t = e % 10; if (t === 0 || t === 7) return e > 50 && (t += 3.5), t = t / 10.5 * 255, [t, t, t]; const a = 0.5 * (1 + ~~(e > 50)); const n = (1 & t) * a * 255; const r = (t >> 1 & 1) * a * 255; const i = (t >> 2 & 1) * a * 255; return [n, r, i]; }, r.ansi256.rgb = function (e) { if (e >= 232) { const t = 10 * (e - 232) + 8; return [t, t, t]; } let a; e -= 16; const n = Math.floor(e / 36) / 5 * 255; const r = Math.floor((a = e % 36) / 6) / 5 * 255; const i = a % 6 / 5 * 255; return [n, r, i]; }, r.rgb.hex = function (e) { const t = ((255 & Math.round(e[0])) << 16) + ((255 & Math.round(e[1])) << 8) + (255 & Math.round(e[2])); const a = t.toString(16).toUpperCase(); return '000000'.substring(a.length) + a; }, r.hex.rgb = function (e) { const t = e.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i); if (!t) return [0, 0, 0]; let a = t[0]; t[0].length === 3 && (a = a.split('').map(((e) => e + e)).join('')); const n = parseInt(a, 16); const r = n >> 16 & 255; const i = n >> 8 & 255; const s = 255 & n; return [r, i, s]; }, r.rgb.hcg = function (e) { let t; let a; const n = e[0] / 255; const r = e[1] / 255; const i = e[2] / 255; const s = Math.max(Math.max(n, r), i); const o = Math.min(Math.min(n, r), i); const d = s - o; return t = d < 1 ? o / (1 - d) : 0, a = d <= 0 ? 0 : s === n ? (r - i) / d % 6 : s === r ? 2 + (i - n) / d : 4 + (n - r) / d + 4, a /= 6, a %= 1, [360 * a, 100 * d, 100 * t]; }, r.hsl.hcg = function (e) { const t = e[1] / 100; const a = e[2] / 100; let n = 1; let r = 0; return n = a < 0.5 ? 2 * t * a : 2 * t * (1 - a), n < 1 && (r = (a - 0.5 * n) / (1 - n)), [e[0], 100 * n, 100 * r]; }, r.hsv.hcg = function (e) { const t = e[1] / 100; const a = e[2] / 100; const n = t * a; let r = 0; return n < 1 && (r = (a - n) / (1 - n)), [e[0], 100 * n, 100 * r]; }, r.hcg.rgb = function (e) { const t = e[0] / 360; const a = e[1] / 100; const n = e[2] / 100; if (a === 0) return [255 * n, 255 * n, 255 * n]; const r = [0, 0, 0]; const i = t % 1 * 6; const s = i % 1; const o = 1 - s; let d = 0; switch (Math.floor(i)) { case 0: r[0] = 1, r[1] = s, r[2] = 0; break; case 1: r[0] = o, r[1] = 1, r[2] = 0; break; case 2: r[0] = 0, r[1] = 1, r[2] = s; break; case 3: r[0] = 0, r[1] = o, r[2] = 1; break; case 4: r[0] = s, r[1] = 0, r[2] = 1; break; default: r[0] = 1, r[1] = 0, r[2] = o; } return d = (1 - a) * n, [255 * (a * r[0] + d), 255 * (a * r[1] + d), 255 * (a * r[2] + d)]; }, r.hcg.hsv = function (e) { const t = e[1] / 100; const a = e[2] / 100; const n = t + a * (1 - t); let r = 0; return n > 0 && (r = t / n), [e[0], 100 * r, 100 * n]; }, r.hcg.hsl = function (e) { const t = e[1] / 100; const a = e[2] / 100; const n = a * (1 - t) + 0.5 * t; let r = 0; return n > 0 && n < 0.5 ? r = t / (2 * n) : n >= 0.5 && n < 1 && (r = t / (2 * (1 - n))), [e[0], 100 * r, 100 * n]; }, r.hcg.hwb = function (e) { const t = e[1] / 100; const a = e[2] / 100; const n = t + a * (1 - t); return [e[0], 100 * (n - t), 100 * (1 - n)]; }, r.hwb.hcg = function (e) { const t = e[1] / 100; const a = e[2] / 100; const n = 1 - a; const r = n - t; let i = 0; return r < 1 && (i = (n - r) / (1 - r)), [e[0], 100 * r, 100 * i]; }, r.apple.rgb = function (e) { return [e[0] / 65535 * 255, e[1] / 65535 * 255, e[2] / 65535 * 255]; }, r.rgb.apple = function (e) { return [e[0] / 255 * 65535, e[1] / 255 * 65535, e[2] / 255 * 65535]; }, r.gray.rgb = function (e) { return [e[0] / 100 * 255, e[0] / 100 * 255, e[0] / 100 * 255]; }, r.gray.hsl = r.gray.hsv = function (e) { return [0, 0, e[0]]; }, r.gray.hwb = function (e) { return [0, 100, e[0]]; }, r.gray.cmyk = function (e) { return [0, 0, 0, e[0]]; }, r.gray.lab = function (e) { return [e[0], 0, 0]; }, r.gray.hex = function (e) { const t = 255 & Math.round(e[0] / 100 * 255); const a = (t << 16) + (t << 8) + t; const n = a.toString(16).toUpperCase(); return '000000'.substring(n.length) + n; }, r.rgb.gray = function (e) { const t = (e[0] + e[1] + e[2]) / 3; return [t / 255 * 100]; };
      })); r.rgb, r.hsl, r.hsv, r.hwb, r.cmyk, r.xyz, r.lab, r.lch, r.hex, r.keyword, r.ansi16, r.ansi256, r.hcg, r.apple, r.gray; function i() { for (var e = {}, t = Object.keys(r), a = t.length, n = 0; n < a; n++)e[t[n]] = { distance: -1, parent: null }; return e; } function s(e) { const t = i(); const a = [e]; t[e].distance = 0; while (a.length) for (let n = a.pop(), s = Object.keys(r[n]), o = s.length, d = 0; d < o; d++) { const l = s[d]; const u = t[l]; u.distance === -1 && (u.distance = t[n].distance + 1, u.parent = n, a.unshift(l)); } return t; } function o(e, t) { return function (a) { return t(e(a)); }; } function d(e, t) { const a = [t[e].parent, e]; let n = r[t[e].parent][e]; let i = t[e].parent; while (t[i].parent)a.unshift(t[i].parent), n = o(r[t[i].parent][i], n), i = t[i].parent; return n.conversion = a, n; } const l = function (e) { for (var t = s(e), a = {}, n = Object.keys(t), r = n.length, i = 0; i < r; i++) { const o = n[i]; const l = t[o]; l.parent !== null && (a[o] = d(o, t)); } return a; }; const u = {}; const _ = Object.keys(r); function c(e) { const t = function (t) { return void 0 === t || t === null ? t : (arguments.length > 1 && (t = Array.prototype.slice.call(arguments)), e(t)); }; return 'conversion' in e && (t.conversion = e.conversion), t; } function m(e) { const t = function (t) { if (void 0 === t || t === null) return t; arguments.length > 1 && (t = Array.prototype.slice.call(arguments)); const a = e(t); if (typeof a === 'object') for (let n = a.length, r = 0; r < n; r++)a[r] = Math.round(a[r]); return a; }; return 'conversion' in e && (t.conversion = e.conversion), t; }_.forEach(((e) => { u[e] = {}, Object.defineProperty(u[e], 'channels', { value: r[e].channels }), Object.defineProperty(u[e], 'labels', { value: r[e].labels }); const t = l(e); const a = Object.keys(t); a.forEach(((a) => { const n = t[a]; u[e][a] = m(n), u[e][a].raw = c(n); })); })); const h = u; const f = {
        aliceblue: [240, 248, 255], antiquewhite: [250, 235, 215], aqua: [0, 255, 255], aquamarine: [127, 255, 212], azure: [240, 255, 255], beige: [245, 245, 220], bisque: [255, 228, 196], black: [0, 0, 0], blanchedalmond: [255, 235, 205], blue: [0, 0, 255], blueviolet: [138, 43, 226], brown: [165, 42, 42], burlywood: [222, 184, 135], cadetblue: [95, 158, 160], chartreuse: [127, 255, 0], chocolate: [210, 105, 30], coral: [255, 127, 80], cornflowerblue: [100, 149, 237], cornsilk: [255, 248, 220], crimson: [220, 20, 60], cyan: [0, 255, 255], darkblue: [0, 0, 139], darkcyan: [0, 139, 139], darkgoldenrod: [184, 134, 11], darkgray: [169, 169, 169], darkgreen: [0, 100, 0], darkgrey: [169, 169, 169], darkkhaki: [189, 183, 107], darkmagenta: [139, 0, 139], darkolivegreen: [85, 107, 47], darkorange: [255, 140, 0], darkorchid: [153, 50, 204], darkred: [139, 0, 0], darksalmon: [233, 150, 122], darkseagreen: [143, 188, 143], darkslateblue: [72, 61, 139], darkslategray: [47, 79, 79], darkslategrey: [47, 79, 79], darkturquoise: [0, 206, 209], darkviolet: [148, 0, 211], deeppink: [255, 20, 147], deepskyblue: [0, 191, 255], dimgray: [105, 105, 105], dimgrey: [105, 105, 105], dodgerblue: [30, 144, 255], firebrick: [178, 34, 34], floralwhite: [255, 250, 240], forestgreen: [34, 139, 34], fuchsia: [255, 0, 255], gainsboro: [220, 220, 220], ghostwhite: [248, 248, 255], gold: [255, 215, 0], goldenrod: [218, 165, 32], gray: [128, 128, 128], green: [0, 128, 0], greenyellow: [173, 255, 47], grey: [128, 128, 128], honeydew: [240, 255, 240], hotpink: [255, 105, 180], indianred: [205, 92, 92], indigo: [75, 0, 130], ivory: [255, 255, 240], khaki: [240, 230, 140], lavender: [230, 230, 250], lavenderblush: [255, 240, 245], lawngreen: [124, 252, 0], lemonchiffon: [255, 250, 205], lightblue: [173, 216, 230], lightcoral: [240, 128, 128], lightcyan: [224, 255, 255], lightgoldenrodyellow: [250, 250, 210], lightgray: [211, 211, 211], lightgreen: [144, 238, 144], lightgrey: [211, 211, 211], lightpink: [255, 182, 193], lightsalmon: [255, 160, 122], lightseagreen: [32, 178, 170], lightskyblue: [135, 206, 250], lightslategray: [119, 136, 153], lightslategrey: [119, 136, 153], lightsteelblue: [176, 196, 222], lightyellow: [255, 255, 224], lime: [0, 255, 0], limegreen: [50, 205, 50], linen: [250, 240, 230], magenta: [255, 0, 255], maroon: [128, 0, 0], mediumaquamarine: [102, 205, 170], mediumblue: [0, 0, 205], mediumorchid: [186, 85, 211], mediumpurple: [147, 112, 219], mediumseagreen: [60, 179, 113], mediumslateblue: [123, 104, 238], mediumspringgreen: [0, 250, 154], mediumturquoise: [72, 209, 204], mediumvioletred: [199, 21, 133], midnightblue: [25, 25, 112], mintcream: [245, 255, 250], mistyrose: [255, 228, 225], moccasin: [255, 228, 181], navajowhite: [255, 222, 173], navy: [0, 0, 128], oldlace: [253, 245, 230], olive: [128, 128, 0], olivedrab: [107, 142, 35], orange: [255, 165, 0], orangered: [255, 69, 0], orchid: [218, 112, 214], palegoldenrod: [238, 232, 170], palegreen: [152, 251, 152], paleturquoise: [175, 238, 238], palevioletred: [219, 112, 147], papayawhip: [255, 239, 213], peachpuff: [255, 218, 185], peru: [205, 133, 63], pink: [255, 192, 203], plum: [221, 160, 221], powderblue: [176, 224, 230], purple: [128, 0, 128], rebeccapurple: [102, 51, 153], red: [255, 0, 0], rosybrown: [188, 143, 143], royalblue: [65, 105, 225], saddlebrown: [139, 69, 19], salmon: [250, 128, 114], sandybrown: [244, 164, 96], seagreen: [46, 139, 87], seashell: [255, 245, 238], sienna: [160, 82, 45], silver: [192, 192, 192], skyblue: [135, 206, 235], slateblue: [106, 90, 205], slategray: [112, 128, 144], slategrey: [112, 128, 144], snow: [255, 250, 250], springgreen: [0, 255, 127], steelblue: [70, 130, 180], tan: [210, 180, 140], teal: [0, 128, 128], thistle: [216, 191, 216], tomato: [255, 99, 71], turquoise: [64, 224, 208], violet: [238, 130, 238], wheat: [245, 222, 179], white: [255, 255, 255], whitesmoke: [245, 245, 245], yellow: [255, 255, 0], yellowgreen: [154, 205, 50],
      }; const M = {
        getRgba: p, getHsla: g, getRgb: L, getHsl: v, getHwb: y, getAlpha: Y, hexString: b, rgbString: k, rgbaString: D, percentString: w, percentaString: T, hslString: x, hslaString: S, hwbString: H, keyword: j,
      }; function p(e) { if (e) { const t = /^#([a-fA-F0-9]{3,4})$/i; const a = /^#([a-fA-F0-9]{6}([a-fA-F0-9]{2})?)$/i; const n = /^rgba?\(\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/i; const r = /^rgba?\(\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/i; const i = /(\w+)/; let s = [0, 0, 0]; let o = 1; let d = e.match(t); let l = ''; if (d) { d = d[1], l = d[3]; for (var u = 0; u < s.length; u++)s[u] = parseInt(d[u] + d[u], 16); l && (o = Math.round(parseInt(l + l, 16) / 255 * 100) / 100); } else if (d = e.match(a)) { l = d[2], d = d[1]; for (u = 0; u < s.length; u++)s[u] = parseInt(d.slice(2 * u, 2 * u + 2), 16); l && (o = Math.round(parseInt(l, 16) / 255 * 100) / 100); } else if (d = e.match(n)) { for (u = 0; u < s.length; u++)s[u] = parseInt(d[u + 1]); o = parseFloat(d[4]); } else if (d = e.match(r)) { for (u = 0; u < s.length; u++)s[u] = Math.round(2.55 * parseFloat(d[u + 1])); o = parseFloat(d[4]); } else if (d = e.match(i)) { if (d[1] == 'transparent') return [0, 0, 0, 0]; if (s = f[d[1]], !s) return; } for (u = 0; u < s.length; u++)s[u] = P(s[u], 0, 255); return o = o || o == 0 ? P(o, 0, 1) : 1, s[3] = o, s; } } function g(e) { if (e) { const t = /^hsla?\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/; const a = e.match(t); if (a) { const n = parseFloat(a[4]); const r = P(parseInt(a[1]), 0, 360); const i = P(parseFloat(a[2]), 0, 100); const s = P(parseFloat(a[3]), 0, 100); const o = P(isNaN(n) ? 1 : n, 0, 1); return [r, i, s, o]; } } } function y(e) { if (e) { const t = /^hwb\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/; const a = e.match(t); if (a) { const n = parseFloat(a[4]); const r = P(parseInt(a[1]), 0, 360); const i = P(parseFloat(a[2]), 0, 100); const s = P(parseFloat(a[3]), 0, 100); const o = P(isNaN(n) ? 1 : n, 0, 1); return [r, i, s, o]; } } } function L(e) { const t = p(e); return t && t.slice(0, 3); } function v(e) { const t = g(e); return t && t.slice(0, 3); } function Y(e) { let t = p(e); return t || (t = g(e)) || (t = y(e)) ? t[3] : void 0; } function b(e, t) { t = void 0 !== t && e.length === 3 ? t : e[3]; return `#${O(e[0])}${O(e[1])}${O(e[2])}${t >= 0 && t < 1 ? O(Math.round(255 * t)) : ''}`; } function k(e, t) { return t < 1 || e[3] && e[3] < 1 ? D(e, t) : `rgb(${e[0]}, ${e[1]}, ${e[2]})`; } function D(e, t) { return void 0 === t && (t = void 0 !== e[3] ? e[3] : 1), `rgba(${e[0]}, ${e[1]}, ${e[2]}, ${t})`; } function w(e, t) { if (t < 1 || e[3] && e[3] < 1) return T(e, t); const a = Math.round(e[0] / 255 * 100); const n = Math.round(e[1] / 255 * 100); const r = Math.round(e[2] / 255 * 100); return `rgb(${a}%, ${n}%, ${r}%)`; } function T(e, t) { const a = Math.round(e[0] / 255 * 100); const n = Math.round(e[1] / 255 * 100); const r = Math.round(e[2] / 255 * 100); return `rgba(${a}%, ${n}%, ${r}%, ${t || e[3] || 1})`; } function x(e, t) { return t < 1 || e[3] && e[3] < 1 ? S(e, t) : `hsl(${e[0]}, ${e[1]}%, ${e[2]}%)`; } function S(e, t) { return void 0 === t && (t = void 0 !== e[3] ? e[3] : 1), `hsla(${e[0]}, ${e[1]}%, ${e[2]}%, ${t})`; } function H(e, t) { return void 0 === t && (t = void 0 !== e[3] ? e[3] : 1), `hwb(${e[0]}, ${e[1]}%, ${e[2]}%${void 0 !== t && t !== 1 ? `, ${t}` : ''})`; } function j(e) { return A[e.slice(0, 3)]; } function P(e, t, a) { return Math.min(Math.max(t, e), a); } function O(e) { const t = e.toString(16).toUpperCase(); return t.length < 2 ? `0${t}` : t; } var A = {}; for (const F in f)A[f[F]] = F; var W = function (e) {
        return e instanceof W ? e : this instanceof W ? (this.valid = !1, this.values = {
          rgb: [0, 0, 0], hsl: [0, 0, 0], hsv: [0, 0, 0], hwb: [0, 0, 0], cmyk: [0, 0, 0, 0], alpha: 1,
        }, void (typeof e === 'string' ? (t = M.getRgba(e), t ? this.setValues('rgb', t) : (t = M.getHsla(e)) ? this.setValues('hsl', t) : (t = M.getHwb(e)) && this.setValues('hwb', t)) : typeof e === 'object' && (t = e, void 0 !== t.r || void 0 !== t.red ? this.setValues('rgb', t) : void 0 !== t.l || void 0 !== t.lightness ? this.setValues('hsl', t) : void 0 !== t.v || void 0 !== t.value ? this.setValues('hsv', t) : void 0 !== t.w || void 0 !== t.whiteness ? this.setValues('hwb', t) : void 0 === t.c && void 0 === t.cyan || this.setValues('cmyk', t)))) : new W(e); let t;
      }; W.prototype = {
        isValid() { return this.valid; }, rgb() { return this.setSpace('rgb', arguments); }, hsl() { return this.setSpace('hsl', arguments); }, hsv() { return this.setSpace('hsv', arguments); }, hwb() { return this.setSpace('hwb', arguments); }, cmyk() { return this.setSpace('cmyk', arguments); }, rgbArray() { return this.values.rgb; }, hslArray() { return this.values.hsl; }, hsvArray() { return this.values.hsv; }, hwbArray() { const e = this.values; return e.alpha !== 1 ? e.hwb.concat([e.alpha]) : e.hwb; }, cmykArray() { return this.values.cmyk; }, rgbaArray() { const e = this.values; return e.rgb.concat([e.alpha]); }, hslaArray() { const e = this.values; return e.hsl.concat([e.alpha]); }, alpha(e) { return void 0 === e ? this.values.alpha : (this.setValues('alpha', e), this); }, red(e) { return this.setChannel('rgb', 0, e); }, green(e) { return this.setChannel('rgb', 1, e); }, blue(e) { return this.setChannel('rgb', 2, e); }, hue(e) { return e && (e %= 360, e = e < 0 ? 360 + e : e), this.setChannel('hsl', 0, e); }, saturation(e) { return this.setChannel('hsl', 1, e); }, lightness(e) { return this.setChannel('hsl', 2, e); }, saturationv(e) { return this.setChannel('hsv', 1, e); }, whiteness(e) { return this.setChannel('hwb', 1, e); }, blackness(e) { return this.setChannel('hwb', 2, e); }, value(e) { return this.setChannel('hsv', 2, e); }, cyan(e) { return this.setChannel('cmyk', 0, e); }, magenta(e) { return this.setChannel('cmyk', 1, e); }, yellow(e) { return this.setChannel('cmyk', 2, e); }, black(e) { return this.setChannel('cmyk', 3, e); }, hexString() { return M.hexString(this.values.rgb); }, rgbString() { return M.rgbString(this.values.rgb, this.values.alpha); }, rgbaString() { return M.rgbaString(this.values.rgb, this.values.alpha); }, percentString() { return M.percentString(this.values.rgb, this.values.alpha); }, hslString() { return M.hslString(this.values.hsl, this.values.alpha); }, hslaString() { return M.hslaString(this.values.hsl, this.values.alpha); }, hwbString() { return M.hwbString(this.values.hwb, this.values.alpha); }, keyword() { return M.keyword(this.values.rgb, this.values.alpha); }, rgbNumber() { const e = this.values.rgb; return e[0] << 16 | e[1] << 8 | e[2]; }, luminosity() { for (var e = this.values.rgb, t = [], a = 0; a < e.length; a++) { const n = e[a] / 255; t[a] = n <= 0.03928 ? n / 12.92 : Math.pow((n + 0.055) / 1.055, 2.4); } return 0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2]; }, contrast(e) { const t = this.luminosity(); const a = e.luminosity(); return t > a ? (t + 0.05) / (a + 0.05) : (a + 0.05) / (t + 0.05); }, level(e) { const t = this.contrast(e); return t >= 7.1 ? 'AAA' : t >= 4.5 ? 'AA' : ''; }, dark() { const e = this.values.rgb; const t = (299 * e[0] + 587 * e[1] + 114 * e[2]) / 1e3; return t < 128; }, light() { return !this.dark(); }, negate() { for (var e = [], t = 0; t < 3; t++)e[t] = 255 - this.values.rgb[t]; return this.setValues('rgb', e), this; }, lighten(e) { const t = this.values.hsl; return t[2] += t[2] * e, this.setValues('hsl', t), this; }, darken(e) { const t = this.values.hsl; return t[2] -= t[2] * e, this.setValues('hsl', t), this; }, saturate(e) { const t = this.values.hsl; return t[1] += t[1] * e, this.setValues('hsl', t), this; }, desaturate(e) { const t = this.values.hsl; return t[1] -= t[1] * e, this.setValues('hsl', t), this; }, whiten(e) { const t = this.values.hwb; return t[1] += t[1] * e, this.setValues('hwb', t), this; }, blacken(e) { const t = this.values.hwb; return t[2] += t[2] * e, this.setValues('hwb', t), this; }, greyscale() { const e = this.values.rgb; const t = 0.3 * e[0] + 0.59 * e[1] + 0.11 * e[2]; return this.setValues('rgb', [t, t, t]), this; }, clearer(e) { const t = this.values.alpha; return this.setValues('alpha', t - t * e), this; }, opaquer(e) { const t = this.values.alpha; return this.setValues('alpha', t + t * e), this; }, rotate(e) { const t = this.values.hsl; const a = (t[0] + e) % 360; return t[0] = a < 0 ? 360 + a : a, this.setValues('hsl', t), this; }, mix(e, t) { const a = this; const n = e; const r = void 0 === t ? 0.5 : t; const i = 2 * r - 1; const s = a.alpha() - n.alpha(); const o = ((i * s === -1 ? i : (i + s) / (1 + i * s)) + 1) / 2; const d = 1 - o; return this.rgb(o * a.red() + d * n.red(), o * a.green() + d * n.green(), o * a.blue() + d * n.blue()).alpha(a.alpha() * r + n.alpha() * (1 - r)); }, toJSON() { return this.rgb(); }, clone() { let e; let t; const a = new W(); const n = this.values; const r = a.values; for (const i in n)n.hasOwnProperty(i) && (e = n[i], t = {}.toString.call(e), t === '[object Array]' ? r[i] = e.slice(0) : t === '[object Number]' ? r[i] = e : console.error('unexpected color value:', e)); return a; },
      }, W.prototype.spaces = {
        rgb: ['red', 'green', 'blue'], hsl: ['hue', 'saturation', 'lightness'], hsv: ['hue', 'saturation', 'value'], hwb: ['hue', 'whiteness', 'blackness'], cmyk: ['cyan', 'magenta', 'yellow', 'black'],
      }, W.prototype.maxes = {
        rgb: [255, 255, 255], hsl: [360, 100, 100], hsv: [360, 100, 100], hwb: [360, 100, 100], cmyk: [100, 100, 100, 100],
      }, W.prototype.getValues = function (e) { for (var t = this.values, a = {}, n = 0; n < e.length; n++)a[e.charAt(n)] = t[e][n]; return t.alpha !== 1 && (a.a = t.alpha), a; }, W.prototype.setValues = function (e, t) { let a; let n; const r = this.values; const i = this.spaces; const s = this.maxes; let o = 1; if (this.valid = !0, e === 'alpha')o = t; else if (t.length)r[e] = t.slice(0, e.length), o = t[e.length]; else if (void 0 !== t[e.charAt(0)]) { for (a = 0; a < e.length; a++)r[e][a] = t[e.charAt(a)]; o = t.a; } else if (void 0 !== t[i[e][0]]) { const d = i[e]; for (a = 0; a < e.length; a++)r[e][a] = t[d[a]]; o = t.alpha; } if (r.alpha = Math.max(0, Math.min(1, void 0 === o ? r.alpha : o)), e === 'alpha') return !1; for (a = 0; a < e.length; a++)n = Math.max(0, Math.min(s[e][a], r[e][a])), r[e][a] = Math.round(n); for (const l in i)l !== e && (r[l] = h[e][l](r[e])); return !0; }, W.prototype.setSpace = function (e, t) { let a = t[0]; return void 0 === a ? this.getValues(e) : (typeof a === 'number' && (a = Array.prototype.slice.call(t)), this.setValues(e, a), this); }, W.prototype.setChannel = function (e, t, a) { const n = this.values[e]; return void 0 === a ? n[t] : (a === n[t] || (n[t] = a, this.setValues(e, n)), this); }, typeof window !== 'undefined' && (window.Color = W); const C = W; var E = {
        noop() {}, uid: (function () { let e = 0; return function () { return e++; }; }()), isNullOrUndef(e) { return e === null || typeof e === 'undefined'; }, isArray(e) { if (Array.isArray && Array.isArray(e)) return !0; const t = Object.prototype.toString.call(e); return t.substr(0, 7) === '[object' && t.substr(-6) === 'Array]'; }, isObject(e) { return e !== null && Object.prototype.toString.call(e) === '[object Object]'; }, isFinite(e) { return (typeof e === 'number' || e instanceof Number) && isFinite(e); }, valueOrDefault(e, t) { return typeof e === 'undefined' ? t : e; }, valueAtIndexOrDefault(e, t, a) { return E.valueOrDefault(E.isArray(e) ? e[t] : e, a); }, callback(e, t, a) { if (e && typeof e.call === 'function') return e.apply(a, t); }, each(e, t, a, n) { let r; let i; let s; if (E.isArray(e)) if (i = e.length, n) for (r = i - 1; r >= 0; r--)t.call(a, e[r], r); else for (r = 0; r < i; r++)t.call(a, e[r], r); else if (E.isObject(e)) for (s = Object.keys(e), i = s.length, r = 0; r < i; r++)t.call(a, e[s[r]], s[r]); }, arrayEquals(e, t) { let a; let n; let r; let i; if (!e || !t || e.length !== t.length) return !1; for (a = 0, n = e.length; a < n; ++a) if (r = e[a], i = t[a], r instanceof Array && i instanceof Array) { if (!E.arrayEquals(r, i)) return !1; } else if (r !== i) return !1; return !0; }, clone(e) { if (E.isArray(e)) return e.map(E.clone); if (E.isObject(e)) { for (var t = {}, a = Object.keys(e), n = a.length, r = 0; r < n; ++r)t[a[r]] = E.clone(e[a[r]]); return t; } return e; }, _merger(e, t, a, n) { const r = t[e]; const i = a[e]; E.isObject(r) && E.isObject(i) ? E.merge(r, i, n) : t[e] = E.clone(i); }, _mergerIf(e, t, a) { const n = t[e]; const r = a[e]; E.isObject(n) && E.isObject(r) ? E.mergeIf(n, r) : t.hasOwnProperty(e) || (t[e] = E.clone(r)); }, merge(e, t, a) { let n; let r; let i; let s; let o; const d = E.isArray(t) ? t : [t]; const l = d.length; if (!E.isObject(e)) return e; for (a = a || {}, n = a.merger || E._merger, r = 0; r < l; ++r) if (t = d[r], E.isObject(t)) for (i = Object.keys(t), o = 0, s = i.length; o < s; ++o)n(i[o], e, t, a); return e; }, mergeIf(e, t) { return E.merge(e, t, { merger: E._mergerIf }); }, extend: Object.assign || function (e) { return E.merge(e, [].slice.call(arguments, 1), { merger(e, t, a) { t[e] = a[e]; } }); }, inherits(e) { const t = this; const a = e && e.hasOwnProperty('constructor') ? e.constructor : function () { return t.apply(this, arguments); }; const n = function () { this.constructor = a; }; return n.prototype = t.prototype, a.prototype = new n(), a.extend = E.inherits, e && E.extend(a.prototype, e), a.__super__ = t.prototype, a; }, _deprecated(e, t, a, n) { void 0 !== t && console.warn(`${e}: "${a}" is deprecated. Please use "${n}" instead`); },
      }; const z = E; E.callCallback = E.callback, E.indexOf = function (e, t, a) { return Array.prototype.indexOf.call(e, t, a); }, E.getValueOrDefault = E.valueOrDefault, E.getValueAtIndexOrDefault = E.valueAtIndexOrDefault; var I = {
        linear(e) { return e; }, easeInQuad(e) { return e * e; }, easeOutQuad(e) { return -e * (e - 2); }, easeInOutQuad(e) { return (e /= 0.5) < 1 ? 0.5 * e * e : -0.5 * (--e * (e - 2) - 1); }, easeInCubic(e) { return e * e * e; }, easeOutCubic(e) { return (e -= 1) * e * e + 1; }, easeInOutCubic(e) { return (e /= 0.5) < 1 ? 0.5 * e * e * e : 0.5 * ((e -= 2) * e * e + 2); }, easeInQuart(e) { return e * e * e * e; }, easeOutQuart(e) { return -((e -= 1) * e * e * e - 1); }, easeInOutQuart(e) { return (e /= 0.5) < 1 ? 0.5 * e * e * e * e : -0.5 * ((e -= 2) * e * e * e - 2); }, easeInQuint(e) { return e * e * e * e * e; }, easeOutQuint(e) { return (e -= 1) * e * e * e * e + 1; }, easeInOutQuint(e) { return (e /= 0.5) < 1 ? 0.5 * e * e * e * e * e : 0.5 * ((e -= 2) * e * e * e * e + 2); }, easeInSine(e) { return 1 - Math.cos(e * (Math.PI / 2)); }, easeOutSine(e) { return Math.sin(e * (Math.PI / 2)); }, easeInOutSine(e) { return -0.5 * (Math.cos(Math.PI * e) - 1); }, easeInExpo(e) { return e === 0 ? 0 : Math.pow(2, 10 * (e - 1)); }, easeOutExpo(e) { return e === 1 ? 1 : 1 - Math.pow(2, -10 * e); }, easeInOutExpo(e) { return e === 0 ? 0 : e === 1 ? 1 : (e /= 0.5) < 1 ? 0.5 * Math.pow(2, 10 * (e - 1)) : 0.5 * (2 - Math.pow(2, -10 * --e)); }, easeInCirc(e) { return e >= 1 ? e : -(Math.sqrt(1 - e * e) - 1); }, easeOutCirc(e) { return Math.sqrt(1 - (e -= 1) * e); }, easeInOutCirc(e) { return (e /= 0.5) < 1 ? -0.5 * (Math.sqrt(1 - e * e) - 1) : 0.5 * (Math.sqrt(1 - (e -= 2) * e) + 1); }, easeInElastic(e) { let t = 1.70158; let a = 0; let n = 1; return e === 0 ? 0 : e === 1 ? 1 : (a || (a = 0.3), n < 1 ? (n = 1, t = a / 4) : t = a / (2 * Math.PI) * Math.asin(1 / n), -n * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / a)); }, easeOutElastic(e) { let t = 1.70158; let a = 0; let n = 1; return e === 0 ? 0 : e === 1 ? 1 : (a || (a = 0.3), n < 1 ? (n = 1, t = a / 4) : t = a / (2 * Math.PI) * Math.asin(1 / n), n * Math.pow(2, -10 * e) * Math.sin((e - t) * (2 * Math.PI) / a) + 1); }, easeInOutElastic(e) { let t = 1.70158; let a = 0; let n = 1; return e === 0 ? 0 : (e /= 0.5) === 2 ? 1 : (a || (a = 0.45), n < 1 ? (n = 1, t = a / 4) : t = a / (2 * Math.PI) * Math.asin(1 / n), e < 1 ? n * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / a) * -0.5 : n * Math.pow(2, -10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / a) * 0.5 + 1); }, easeInBack(e) { const t = 1.70158; return e * e * ((t + 1) * e - t); }, easeOutBack(e) { const t = 1.70158; return (e -= 1) * e * ((t + 1) * e + t) + 1; }, easeInOutBack(e) { let t = 1.70158; return (e /= 0.5) < 1 ? e * e * ((1 + (t *= 1.525)) * e - t) * 0.5 : 0.5 * ((e -= 2) * e * ((1 + (t *= 1.525)) * e + t) + 2); }, easeInBounce(e) { return 1 - I.easeOutBounce(1 - e); }, easeOutBounce(e) { return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375 : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375; }, easeInOutBounce(e) { return e < 0.5 ? 0.5 * I.easeInBounce(2 * e) : 0.5 * I.easeOutBounce(2 * e - 1) + 0.5; },
      }; const R = { effects: I }; z.easingEffects = I; const N = Math.PI; const V = N / 180; const B = 2 * N; const J = N / 2; const U = N / 4; const G = 2 * N / 3; const q = {
        clear(e) { e.ctx.clearRect(0, 0, e.width, e.height); }, roundedRect(e, t, a, n, r, i) { if (i) { const s = Math.min(i, r / 2, n / 2); const o = t + s; const d = a + s; const l = t + n - s; const u = a + r - s; e.moveTo(t, d), o < l && d < u ? (e.arc(o, d, s, -N, -J), e.arc(l, d, s, -J, 0), e.arc(l, u, s, 0, J), e.arc(o, u, s, J, N)) : o < l ? (e.moveTo(o, a), e.arc(l, d, s, -J, J), e.arc(o, d, s, J, N + J)) : d < u ? (e.arc(o, d, s, -N, 0), e.arc(o, u, s, 0, N)) : e.arc(o, d, s, -N, N), e.closePath(), e.moveTo(t, a); } else e.rect(t, a, n, r); }, drawPoint(e, t, a, n, r, i) { let s; let o; let d; let l; let u; let _ = (i || 0) * V; if (t && typeof t === 'object' && (s = t.toString(), s === '[object HTMLImageElement]' || s === '[object HTMLCanvasElement]')) return e.save(), e.translate(n, r), e.rotate(_), e.drawImage(t, -t.width / 2, -t.height / 2, t.width, t.height), void e.restore(); if (!(isNaN(a) || a <= 0)) { switch (e.beginPath(), t) { default: e.arc(n, r, a, 0, B), e.closePath(); break; case 'triangle': e.moveTo(n + Math.sin(_) * a, r - Math.cos(_) * a), _ += G, e.lineTo(n + Math.sin(_) * a, r - Math.cos(_) * a), _ += G, e.lineTo(n + Math.sin(_) * a, r - Math.cos(_) * a), e.closePath(); break; case 'rectRounded': u = 0.516 * a, l = a - u, o = Math.cos(_ + U) * l, d = Math.sin(_ + U) * l, e.arc(n - o, r - d, u, _ - N, _ - J), e.arc(n + d, r - o, u, _ - J, _), e.arc(n + o, r + d, u, _, _ + J), e.arc(n - d, r + o, u, _ + J, _ + N), e.closePath(); break; case 'rect': if (!i) { l = Math.SQRT1_2 * a, e.rect(n - l, r - l, 2 * l, 2 * l); break; }_ += U; case 'rectRot': o = Math.cos(_) * a, d = Math.sin(_) * a, e.moveTo(n - o, r - d), e.lineTo(n + d, r - o), e.lineTo(n + o, r + d), e.lineTo(n - d, r + o), e.closePath(); break; case 'crossRot': _ += U; case 'cross': o = Math.cos(_) * a, d = Math.sin(_) * a, e.moveTo(n - o, r - d), e.lineTo(n + o, r + d), e.moveTo(n + d, r - o), e.lineTo(n - d, r + o); break; case 'star': o = Math.cos(_) * a, d = Math.sin(_) * a, e.moveTo(n - o, r - d), e.lineTo(n + o, r + d), e.moveTo(n + d, r - o), e.lineTo(n - d, r + o), _ += U, o = Math.cos(_) * a, d = Math.sin(_) * a, e.moveTo(n - o, r - d), e.lineTo(n + o, r + d), e.moveTo(n + d, r - o), e.lineTo(n - d, r + o); break; case 'line': o = Math.cos(_) * a, d = Math.sin(_) * a, e.moveTo(n - o, r - d), e.lineTo(n + o, r + d); break; case 'dash': e.moveTo(n, r), e.lineTo(n + Math.cos(_) * a, r + Math.sin(_) * a); break; }e.fill(), e.stroke(); } }, _isPointInArea(e, t) { const a = 1e-6; return e.x > t.left - a && e.x < t.right + a && e.y > t.top - a && e.y < t.bottom + a; }, clipArea(e, t) { e.save(), e.beginPath(), e.rect(t.left, t.top, t.right - t.left, t.bottom - t.top), e.clip(); }, unclipArea(e) { e.restore(); }, lineTo(e, t, a, n) { const r = a.steppedLine; if (r) { if (r === 'middle') { const i = (t.x + a.x) / 2; e.lineTo(i, n ? a.y : t.y), e.lineTo(i, n ? t.y : a.y); } else r === 'after' && !n || r !== 'after' && n ? e.lineTo(t.x, a.y) : e.lineTo(a.x, t.y); e.lineTo(a.x, a.y); } else a.tension ? e.bezierCurveTo(n ? t.controlPointPreviousX : t.controlPointNextX, n ? t.controlPointPreviousY : t.controlPointNextY, n ? a.controlPointNextX : a.controlPointPreviousX, n ? a.controlPointNextY : a.controlPointPreviousY, a.x, a.y) : e.lineTo(a.x, a.y); },
      }; const $ = q; z.clear = q.clear, z.drawRoundedRectangle = function (e) { e.beginPath(), q.roundedRect.apply(q, arguments); }; const K = { _set(e, t) { return z.merge(this[e] || (this[e] = {}), t); } }; K._set('global', {
        defaultColor: 'rgba(0,0,0,0.1)', defaultFontColor: '#666', defaultFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif", defaultFontSize: 12, defaultFontStyle: 'normal', defaultLineHeight: 1.2, showLines: !0,
      }); const Z = K; const Q = z.valueOrDefault; function X(e) { return !e || z.isNullOrUndef(e.size) || z.isNullOrUndef(e.family) ? null : `${(e.style ? `${e.style} ` : '') + (e.weight ? `${e.weight} ` : '') + e.size}px ${e.family}`; } const ee = {
        toLineHeight(e, t) { const a = (`${e}`).match(/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/); if (!a || a[1] === 'normal') return 1.2 * t; switch (e = +a[2], a[3]) { case 'px': return e; case '%': e /= 100; break; } return t * e; },
        toPadding(e) {
          let t; let a; let n; let r; return z.isObject(e) ? (t = +e.top || 0, a = +e.right || 0, n = +e.bottom || 0, r = +e.left || 0) : t = a = n = r = +e || 0, {
            top: t, right: a, bottom: n, left: r, height: t + n, width: r + a,
          };
        },
        _parseFont(e) {
          const t = Z.global; const a = Q(e.fontSize, t.defaultFontSize); const n = {
            family: Q(e.fontFamily, t.defaultFontFamily), lineHeight: z.options.toLineHeight(Q(e.lineHeight, t.defaultLineHeight), a), size: a, style: Q(e.fontStyle, t.defaultFontStyle), weight: null, string: '',
          }; return n.string = X(n), n;
        },
        resolve(e, t, a, n) { let r; let i; let s; let o = !0; for (r = 0, i = e.length; r < i; ++r) if (s = e[r], void 0 !== s && (void 0 !== t && typeof s === 'function' && (s = s(t), o = !1), void 0 !== a && z.isArray(s) && (s = s[a], o = !1), void 0 !== s)) return n && !o && (n.cacheable = !1), s; },
      }; const te = { _factorize(e) { let t; const a = []; const n = Math.sqrt(e); for (t = 1; t < n; t++)e % t === 0 && (a.push(t), a.push(e / t)); return n === (0 | n) && a.push(n), a.sort(((e, t) => e - t)).pop(), a; }, log10: Math.log10 || function (e) { const t = Math.log(e) * Math.LOG10E; const a = Math.round(t); const n = e === Math.pow(10, a); return n ? a : t; } }; const ae = te; z.log10 = te.log10; const ne = function (e, t) {
        return {
          x(a) { return e + e + t - a; }, setWidth(e) { t = e; }, textAlign(e) { return e === 'center' ? e : e === 'right' ? 'left' : 'right'; }, xPlus(e, t) { return e - t; }, leftForLtr(e, t) { return e - t; },
        };
      }; const re = function () {
        return {
          x(e) { return e; }, setWidth(e) {}, textAlign(e) { return e; }, xPlus(e, t) { return e + t; }, leftForLtr(e, t) { return e; },
        };
      }; const ie = function (e, t, a) { return e ? ne(t, a) : re(); }; const se = function (e, t) { let a; let n; t !== 'ltr' && t !== 'rtl' || (a = e.canvas.style, n = [a.getPropertyValue('direction'), a.getPropertyPriority('direction')], a.setProperty('direction', t, 'important'), e.prevTextDirection = n); }; const oe = function (e) { const t = e.prevTextDirection; void 0 !== t && (delete e.prevTextDirection, e.canvas.style.setProperty('direction', t[0], t[1])); }; const de = { getRtlAdapter: ie, overrideTextDirection: se, restoreTextDirection: oe }; const le = z; const ue = R; const _e = $; const ce = ee; const me = ae; const he = de; function fe(e, t, a, n) { let r; let i; let s; let o; let d; let l; let u; let _; let c; const m = Object.keys(a); for (r = 0, i = m.length; r < i; ++r) if (s = m[r], l = a[s], t.hasOwnProperty(s) || (t[s] = l), o = t[s], o !== l && s[0] !== '_') { if (e.hasOwnProperty(s) || (e[s] = o), d = e[s], u = typeof l, u === typeof d) if (u === 'string') { if (_ = C(d), _.valid && (c = C(l), c.valid)) { t[s] = c.mix(_, n).rgbString(); continue; } } else if (le.isFinite(d) && le.isFinite(l)) { t[s] = d + (l - d) * n; continue; }t[s] = l; } }le.easing = ue, le.canvas = _e, le.options = ce, le.math = me, le.rtl = he; const Me = function (e) { le.extend(this, e), this.initialize.apply(this, arguments); }; le.extend(Me.prototype, {
        _type: void 0, initialize() { this.hidden = !1; }, pivot() { const e = this; return e._view || (e._view = le.extend({}, e._model)), e._start = {}, e; }, transition(e) { const t = this; const a = t._model; let n = t._start; let r = t._view; return a && e !== 1 ? (r || (r = t._view = {}), n || (n = t._start = {}), fe(n, r, a, e), t) : (t._view = le.extend({}, a), t._start = null, t); }, tooltipPosition() { return { x: this._model.x, y: this._model.y }; }, hasValue() { return le.isNumber(this._model.x) && le.isNumber(this._model.y); },
      }), Me.extend = le.inherits; const pe = Me; const ge = pe.extend({
        chart: null, currentStep: 0, numSteps: 60, easing: '', render: null, onAnimationProgress: null, onAnimationComplete: null,
      }); const ye = ge; Object.defineProperty(ge.prototype, 'animationObject', { get() { return this; } }), Object.defineProperty(ge.prototype, 'chartInstance', { get() { return this.chart; }, set(e) { this.chart = e; } }), Z._set('global', {
        animation: {
          duration: 1e3, easing: 'easeOutQuart', onProgress: le.noop, onComplete: le.noop,
        },
      }); const Le = {
        animations: [], request: null, addAnimation(e, t, a, n) { let r; let i; const s = this.animations; for (t.chart = e, t.startTime = Date.now(), t.duration = a, n || (e.animating = !0), r = 0, i = s.length; r < i; ++r) if (s[r].chart === e) return void (s[r] = t); s.push(t), s.length === 1 && this.requestAnimationFrame(); }, cancelAnimation(e) { const t = le.findIndex(this.animations, ((t) => t.chart === e)); t !== -1 && (this.animations.splice(t, 1), e.animating = !1); }, requestAnimationFrame() { const e = this; e.request === null && (e.request = le.requestAnimFrame.call(window, (() => { e.request = null, e.startDigest(); }))); }, startDigest() { const e = this; e.advance(), e.animations.length > 0 && e.requestAnimationFrame(); }, advance() { let e; let t; let a; let n; const r = this.animations; let i = 0; while (i < r.length)e = r[i], t = e.chart, a = e.numSteps, n = Math.floor((Date.now() - e.startTime) / e.duration * a) + 1, e.currentStep = Math.min(n, a), le.callback(e.render, [t, e], t), le.callback(e.onAnimationProgress, [e], t), e.currentStep >= a ? (le.callback(e.onAnimationComplete, [e], t), t.animating = !1, r.splice(i, 1)) : ++i; },
      }; const ve = le.options.resolve; const Ye = ['push', 'pop', 'shift', 'splice', 'unshift']; function be(e, t) { e._chartjs ? e._chartjs.listeners.push(t) : (Object.defineProperty(e, '_chartjs', { configurable: !0, enumerable: !1, value: { listeners: [t] } }), Ye.forEach(((t) => { const a = `onData${t.charAt(0).toUpperCase()}${t.slice(1)}`; const n = e[t]; Object.defineProperty(e, t, { configurable: !0, enumerable: !1, value() { const t = Array.prototype.slice.call(arguments); const r = n.apply(this, t); return le.each(e._chartjs.listeners, ((e) => { typeof e[a] === 'function' && e[a].apply(e, t); })), r; } }); }))); } function ke(e, t) { const a = e._chartjs; if (a) { const n = a.listeners; const r = n.indexOf(t); r !== -1 && n.splice(r, 1), n.length > 0 || (Ye.forEach(((t) => { delete e[t]; })), delete e._chartjs); } } const De = function (e, t) { this.initialize(e, t); }; le.extend(De.prototype, {
        datasetElementType: null,
        dataElementType: null,
        _datasetElementOptions: ['backgroundColor', 'borderCapStyle', 'borderColor', 'borderDash', 'borderDashOffset', 'borderJoinStyle', 'borderWidth'],
        _dataElementOptions: ['backgroundColor', 'borderColor', 'borderWidth', 'pointStyle'],
        initialize(e, t) { const a = this; a.chart = e, a.index = t, a.linkScales(), a.addElements(), a._type = a.getMeta().type; },
        updateIndex(e) { this.index = e; },
        linkScales() { const e = this; const t = e.getMeta(); const a = e.chart; const n = a.scales; const r = e.getDataset(); const i = a.options.scales; t.xAxisID !== null && t.xAxisID in n && !r.xAxisID || (t.xAxisID = r.xAxisID || i.xAxes[0].id), t.yAxisID !== null && t.yAxisID in n && !r.yAxisID || (t.yAxisID = r.yAxisID || i.yAxes[0].id); },
        getDataset() { return this.chart.data.datasets[this.index]; },
        getMeta() { return this.chart.getDatasetMeta(this.index); },
        getScaleForId(e) { return this.chart.scales[e]; },
        _getValueScaleId() { return this.getMeta().yAxisID; },
        _getIndexScaleId() { return this.getMeta().xAxisID; },
        _getValueScale() { return this.getScaleForId(this._getValueScaleId()); },
        _getIndexScale() { return this.getScaleForId(this._getIndexScaleId()); },
        reset() { this._update(!0); },
        destroy() { this._data && ke(this._data, this); },
        createMetaDataset() { const e = this; const t = e.datasetElementType; return t && new t({ _chart: e.chart, _datasetIndex: e.index }); },
        createMetaData(e) { const t = this; const a = t.dataElementType; return a && new a({ _chart: t.chart, _datasetIndex: t.index, _index: e }); },
        addElements() { let e; let t; const a = this; const n = a.getMeta(); const r = a.getDataset().data || []; const i = n.data; for (e = 0, t = r.length; e < t; ++e)i[e] = i[e] || a.createMetaData(e); n.dataset = n.dataset || a.createMetaDataset(); },
        addElementAndReset(e) { const t = this.createMetaData(e); this.getMeta().data.splice(e, 0, t), this.updateElement(t, e, !0); },
        buildOrUpdateElements() { const e = this; const t = e.getDataset(); const a = t.data || (t.data = []); e._data !== a && (e._data && ke(e._data, e), a && Object.isExtensible(a) && be(a, e), e._data = a), e.resyncElements(); },
        _configure() { const e = this; e._config = le.merge({}, [e.chart.options.datasets[e._type], e.getDataset()], { merger(e, t, a) { e !== '_meta' && e !== 'data' && le._merger(e, t, a); } }); },
        _update(e) { const t = this; t._configure(), t._cachedDataOpts = null, t.update(e); },
        update: le.noop,
        transition(e) { for (var t = this.getMeta(), a = t.data || [], n = a.length, r = 0; r < n; ++r)a[r].transition(e); t.dataset && t.dataset.transition(e); },
        draw() { const e = this.getMeta(); const t = e.data || []; const a = t.length; let n = 0; for (e.dataset && e.dataset.draw(); n < a; ++n)t[n].draw(); },
        getStyle(e) { let t; const a = this; const n = a.getMeta(); const r = n.dataset; return a._configure(), r && void 0 === e ? t = a._resolveDatasetElementOptions(r || {}) : (e = e || 0, t = a._resolveDataElementOptions(n.data[e] || {}, e)), !1 !== t.fill && t.fill !== null || (t.backgroundColor = t.borderColor), t; },
        _resolveDatasetElementOptions(e, t) {
          let a; let n; let r; let i; const s = this; const o = s.chart; const d = s._config; const l = e.custom || {}; const u = o.options.elements[s.datasetElementType.prototype._type] || {}; const _ = s._datasetElementOptions; const c = {}; const m = {
            chart: o, dataset: s.getDataset(), datasetIndex: s.index, hover: t,
          }; for (a = 0, n = _.length; a < n; ++a)r = _[a], i = t ? `hover${r.charAt(0).toUpperCase()}${r.slice(1)}` : r, c[r] = ve([l[i], d[i], u[i]], m); return c;
        },
        _resolveDataElementOptions(e, t) {
          const a = this; let n = e && e.custom; const r = a._cachedDataOpts; if (r && !n) return r; let i; let s; let o; let d; const l = a.chart; const u = a._config; const _ = l.options.elements[a.dataElementType.prototype._type] || {}; const c = a._dataElementOptions; const m = {}; const h = {
            chart: l, dataIndex: t, dataset: a.getDataset(), datasetIndex: a.index,
          }; const f = { cacheable: !n }; if (n = n || {}, le.isArray(c)) for (s = 0, o = c.length; s < o; ++s)d = c[s], m[d] = ve([n[d], u[d], _[d]], h, t, f); else for (i = Object.keys(c), s = 0, o = i.length; s < o; ++s)d = i[s], m[d] = ve([n[d], u[c[d]], u[d], _[d]], h, t, f); return f.cacheable && (a._cachedDataOpts = Object.freeze(m)), m;
        },
        removeHoverStyle(e) { le.merge(e._model, e.$previousStyle || {}), delete e.$previousStyle; },
        setHoverStyle(e) { const t = this.chart.data.datasets[e._datasetIndex]; const a = e._index; const n = e.custom || {}; const r = e._model; const i = le.getHoverColor; e.$previousStyle = { backgroundColor: r.backgroundColor, borderColor: r.borderColor, borderWidth: r.borderWidth }, r.backgroundColor = ve([n.hoverBackgroundColor, t.hoverBackgroundColor, i(r.backgroundColor)], void 0, a), r.borderColor = ve([n.hoverBorderColor, t.hoverBorderColor, i(r.borderColor)], void 0, a), r.borderWidth = ve([n.hoverBorderWidth, t.hoverBorderWidth, r.borderWidth], void 0, a); },
        _removeDatasetHoverStyle() { const e = this.getMeta().dataset; e && this.removeHoverStyle(e); },
        _setDatasetHoverStyle() { let e; let t; let a; let n; let r; let i; const s = this.getMeta().dataset; const o = {}; if (s) { for (i = s._model, r = this._resolveDatasetElementOptions(s, !0), n = Object.keys(r), e = 0, t = n.length; e < t; ++e)a = n[e], o[a] = i[a], i[a] = r[a]; s.$previousStyle = o; } },
        resyncElements() { const e = this; const t = e.getMeta(); const a = e.getDataset().data; const n = t.data.length; const r = a.length; r < n ? t.data.splice(r, n - r) : r > n && e.insertElements(n, r - n); },
        insertElements(e, t) { for (let a = 0; a < t; ++a) this.addElementAndReset(e + a); },
        onDataPush() { const e = arguments.length; this.insertElements(this.getDataset().data.length - e, e); },
        onDataPop() { this.getMeta().data.pop(); },
        onDataShift() { this.getMeta().data.shift(); },
        onDataSplice(e, t) { this.getMeta().data.splice(e, t), this.insertElements(e, arguments.length - 2); },
        onDataUnshift() { this.insertElements(0, arguments.length); },
      }), De.extend = le.inherits; const we = De; const Te = 2 * Math.PI; function xe(e, t) { const a = t.startAngle; const n = t.endAngle; const r = t.pixelMargin; let i = r / t.outerRadius; const s = t.x; const o = t.y; e.beginPath(), e.arc(s, o, t.outerRadius, a - i, n + i), t.innerRadius > r ? (i = r / t.innerRadius, e.arc(s, o, t.innerRadius - r, n + i, a - i, !0)) : e.arc(s, o, r, n + Math.PI / 2, a - Math.PI / 2), e.closePath(), e.clip(); } function Se(e, t, a, n) { let r; const i = a.endAngle; for (n && (a.endAngle = a.startAngle + Te, xe(e, a), a.endAngle = i, a.endAngle === a.startAngle && a.fullCircles && (a.endAngle += Te, a.fullCircles--)), e.beginPath(), e.arc(a.x, a.y, a.innerRadius, a.startAngle + Te, a.startAngle, !0), r = 0; r < a.fullCircles; ++r)e.stroke(); for (e.beginPath(), e.arc(a.x, a.y, t.outerRadius, a.startAngle, a.startAngle + Te), r = 0; r < a.fullCircles; ++r)e.stroke(); } function He(e, t, a) { const n = t.borderAlign === 'inner'; n ? (e.lineWidth = 2 * t.borderWidth, e.lineJoin = 'round') : (e.lineWidth = t.borderWidth, e.lineJoin = 'bevel'), a.fullCircles && Se(e, t, a, n), n && xe(e, a), e.beginPath(), e.arc(a.x, a.y, t.outerRadius, a.startAngle, a.endAngle), e.arc(a.x, a.y, a.innerRadius, a.endAngle, a.startAngle, !0), e.closePath(), e.stroke(); }Z._set('global', {
        elements: {
          arc: {
            backgroundColor: Z.global.defaultColor, borderColor: '#fff', borderWidth: 2, borderAlign: 'center',
          },
        },
      }); const je = pe.extend({
        _type: 'arc',
        inLabelRange(e) { const t = this._view; return !!t && Math.pow(e - t.x, 2) < Math.pow(t.radius + t.hoverRadius, 2); },
        inRange(e, t) { const a = this._view; if (a) { const n = le.getAngleFromPoint(a, { x: e, y: t }); let r = n.angle; const i = n.distance; const s = a.startAngle; let o = a.endAngle; while (o < s)o += Te; while (r > o)r -= Te; while (r < s)r += Te; const d = r >= s && r <= o; const l = i >= a.innerRadius && i <= a.outerRadius; return d && l; } return !1; },
        getCenterPoint() { const e = this._view; const t = (e.startAngle + e.endAngle) / 2; const a = (e.innerRadius + e.outerRadius) / 2; return { x: e.x + Math.cos(t) * a, y: e.y + Math.sin(t) * a }; },
        getArea() { const e = this._view; return Math.PI * ((e.endAngle - e.startAngle) / (2 * Math.PI)) * (Math.pow(e.outerRadius, 2) - Math.pow(e.innerRadius, 2)); },
        tooltipPosition() { const e = this._view; const t = e.startAngle + (e.endAngle - e.startAngle) / 2; const a = (e.outerRadius - e.innerRadius) / 2 + e.innerRadius; return { x: e.x + Math.cos(t) * a, y: e.y + Math.sin(t) * a }; },
        draw() {
          let e; const t = this._chart.ctx; const a = this._view; const n = a.borderAlign === 'inner' ? 0.33 : 0; const r = {
            x: a.x, y: a.y, innerRadius: a.innerRadius, outerRadius: Math.max(a.outerRadius - n, 0), pixelMargin: n, startAngle: a.startAngle, endAngle: a.endAngle, fullCircles: Math.floor(a.circumference / Te),
          }; if (t.save(), t.fillStyle = a.backgroundColor, t.strokeStyle = a.borderColor, r.fullCircles) { for (r.endAngle = r.startAngle + Te, t.beginPath(), t.arc(r.x, r.y, r.outerRadius, r.startAngle, r.endAngle), t.arc(r.x, r.y, r.innerRadius, r.endAngle, r.startAngle, !0), t.closePath(), e = 0; e < r.fullCircles; ++e)t.fill(); r.endAngle = r.startAngle + a.circumference % Te; }t.beginPath(), t.arc(r.x, r.y, r.outerRadius, r.startAngle, r.endAngle), t.arc(r.x, r.y, r.innerRadius, r.endAngle, r.startAngle, !0), t.closePath(), t.fill(), a.borderWidth && He(t, a, r), t.restore();
        },
      }); const Pe = le.valueOrDefault; const Oe = Z.global.defaultColor; Z._set('global', {
        elements: {
          line: {
            tension: 0.4, backgroundColor: Oe, borderWidth: 3, borderColor: Oe, borderCapStyle: 'butt', borderDash: [], borderDashOffset: 0, borderJoinStyle: 'miter', capBezierPoints: !0, fill: !0,
          },
        },
      }); const Ae = pe.extend({ _type: 'line', draw() { let e; let t; let a; const n = this; const r = n._view; const i = n._chart.ctx; const s = r.spanGaps; let o = n._children.slice(); const d = Z.global; const l = d.elements.line; let u = -1; let _ = n._loop; if (o.length) { if (n._loop) { for (e = 0; e < o.length; ++e) if (t = le.previousItem(o, e), !o[e]._view.skip && t._view.skip) { o = o.slice(e).concat(o.slice(0, e)), _ = s; break; }_ && o.push(o[0]); } for (i.save(), i.lineCap = r.borderCapStyle || l.borderCapStyle, i.setLineDash && i.setLineDash(r.borderDash || l.borderDash), i.lineDashOffset = Pe(r.borderDashOffset, l.borderDashOffset), i.lineJoin = r.borderJoinStyle || l.borderJoinStyle, i.lineWidth = Pe(r.borderWidth, l.borderWidth), i.strokeStyle = r.borderColor || d.defaultColor, i.beginPath(), a = o[0]._view, a.skip || (i.moveTo(a.x, a.y), u = 0), e = 1; e < o.length; ++e)a = o[e]._view, t = u === -1 ? le.previousItem(o, e) : o[u], a.skip || (u !== e - 1 && !s || u === -1 ? i.moveTo(a.x, a.y) : le.canvas.lineTo(i, t._view, a), u = e); _ && i.closePath(), i.stroke(), i.restore(); } } }); const Fe = le.valueOrDefault; const We = Z.global.defaultColor; function Ce(e) { const t = this._view; return !!t && Math.abs(e - t.x) < t.radius + t.hitRadius; } function Ee(e) { const t = this._view; return !!t && Math.abs(e - t.y) < t.radius + t.hitRadius; }Z._set('global', {
        elements: {
          point: {
            radius: 3, pointStyle: 'circle', backgroundColor: We, borderColor: We, borderWidth: 1, hitRadius: 1, hoverRadius: 4, hoverBorderWidth: 1,
          },
        },
      }); const ze = pe.extend({
        _type: 'point', inRange(e, t) { const a = this._view; return !!a && Math.pow(e - a.x, 2) + Math.pow(t - a.y, 2) < Math.pow(a.hitRadius + a.radius, 2); }, inLabelRange: Ce, inXRange: Ce, inYRange: Ee, getCenterPoint() { const e = this._view; return { x: e.x, y: e.y }; }, getArea() { return Math.PI * Math.pow(this._view.radius, 2); }, tooltipPosition() { const e = this._view; return { x: e.x, y: e.y, padding: e.radius + e.borderWidth }; }, draw(e) { const t = this._view; const a = this._chart.ctx; const n = t.pointStyle; const r = t.rotation; const i = t.radius; const s = t.x; const o = t.y; const d = Z.global; const l = d.defaultColor; t.skip || (void 0 === e || le.canvas._isPointInArea(t, e)) && (a.strokeStyle = t.borderColor || l, a.lineWidth = Fe(t.borderWidth, d.elements.point.borderWidth), a.fillStyle = t.backgroundColor || l, le.canvas.drawPoint(a, n, i, s, o, r)); },
      }); const Ie = Z.global.defaultColor; function Re(e) { return e && void 0 !== e.width; } function Ne(e) {
        let t; let a; let n; let r; let i; return Re(e) ? (i = e.width / 2, t = e.x - i, a = e.x + i, n = Math.min(e.y, e.base), r = Math.max(e.y, e.base)) : (i = e.height / 2, t = Math.min(e.x, e.base), a = Math.max(e.x, e.base), n = e.y - i, r = e.y + i), {
          left: t, top: n, right: a, bottom: r,
        };
      } function Ve(e, t, a) { return e === t ? a : e === a ? t : e; } function Be(e) { let t = e.borderSkipped; const a = {}; return t ? (e.horizontal ? e.base > e.x && (t = Ve(t, 'left', 'right')) : e.base < e.y && (t = Ve(t, 'bottom', 'top')), a[t] = !0, a) : a; } function Je(e, t, a) {
        let n; let r; let i; let s; const o = e.borderWidth; const d = Be(e); return le.isObject(o) ? (n = +o.top || 0, r = +o.right || 0, i = +o.bottom || 0, s = +o.left || 0) : n = r = i = s = +o || 0, {
          t: d.top || n < 0 ? 0 : n > a ? a : n, r: d.right || r < 0 ? 0 : r > t ? t : r, b: d.bottom || i < 0 ? 0 : i > a ? a : i, l: d.left || s < 0 ? 0 : s > t ? t : s,
        };
      } function Ue(e) {
        const t = Ne(e); const a = t.right - t.left; const n = t.bottom - t.top; const r = Je(e, a / 2, n / 2); return {
          outer: {
            x: t.left, y: t.top, w: a, h: n,
          },
          inner: {
            x: t.left + r.l, y: t.top + r.t, w: a - r.l - r.r, h: n - r.t - r.b,
          },
        };
      } function Ge(e, t, a) { const n = t === null; const r = a === null; const i = !(!e || n && r) && Ne(e); return i && (n || t >= i.left && t <= i.right) && (r || a >= i.top && a <= i.bottom); }Z._set('global', {
        elements: {
          rectangle: {
            backgroundColor: Ie, borderColor: Ie, borderSkipped: 'bottom', borderWidth: 0,
          },
        },
      }); const qe = pe.extend({
        _type: 'rectangle', draw() { const e = this._chart.ctx; const t = this._view; const a = Ue(t); const n = a.outer; const r = a.inner; e.fillStyle = t.backgroundColor, e.fillRect(n.x, n.y, n.w, n.h), n.w === r.w && n.h === r.h || (e.save(), e.beginPath(), e.rect(n.x, n.y, n.w, n.h), e.clip(), e.fillStyle = t.borderColor, e.rect(r.x, r.y, r.w, r.h), e.fill('evenodd'), e.restore()); }, height() { const e = this._view; return e.base - e.y; }, inRange(e, t) { return Ge(this._view, e, t); }, inLabelRange(e, t) { const a = this._view; return Re(a) ? Ge(a, e, null) : Ge(a, null, t); }, inXRange(e) { return Ge(this._view, e, null); }, inYRange(e) { return Ge(this._view, null, e); }, getCenterPoint() { let e; let t; const a = this._view; return Re(a) ? (e = a.x, t = (a.y + a.base) / 2) : (e = (a.x + a.base) / 2, t = a.y), { x: e, y: t }; }, getArea() { const e = this._view; return Re(e) ? e.width * Math.abs(e.y - e.base) : e.height * Math.abs(e.x - e.base); }, tooltipPosition() { const e = this._view; return { x: e.x, y: e.y }; },
      }); const $e = {}; const Ke = je; const Ze = Ae; const Qe = ze; const Xe = qe; $e.Arc = Ke, $e.Line = Ze, $e.Point = Qe, $e.Rectangle = Xe; const et = le._deprecated; const tt = le.valueOrDefault; function at(e, t) { let a; let n; let r; let i; let s = e._length; for (r = 1, i = t.length; r < i; ++r)s = Math.min(s, Math.abs(t[r] - t[r - 1])); for (r = 0, i = e.getTicks().length; r < i; ++r)n = e.getPixelForTick(r), s = r > 0 ? Math.min(s, Math.abs(n - a)) : s, a = n; return s; } function nt(e, t, a) { let n; let r; const i = a.barThickness; const s = t.stackCount; const o = t.pixels[e]; const d = le.isNullOrUndef(i) ? at(t.scale, t.pixels) : -1; return le.isNullOrUndef(i) ? (n = d * a.categoryPercentage, r = a.barPercentage) : (n = i * s, r = 1), { chunk: n / s, ratio: r, start: o - n / 2 }; } function rt(e, t, a) { let n; let r; const i = t.pixels; const s = i[e]; let o = e > 0 ? i[e - 1] : null; let d = e < i.length - 1 ? i[e + 1] : null; const l = a.categoryPercentage; return o === null && (o = s - (d === null ? t.end - t.start : d - s)), d === null && (d = s + s - o), n = s - (s - Math.min(o, d)) / 2 * l, r = Math.abs(d - o) / 2 * l, { chunk: r / t.stackCount, ratio: a.barPercentage, start: n }; }Z._set('bar', { hover: { mode: 'label' }, scales: { xAxes: [{ type: 'category', offset: !0, gridLines: { offsetGridLines: !0 } }], yAxes: [{ type: 'linear' }] } }), Z._set('global', { datasets: { bar: { categoryPercentage: 0.8, barPercentage: 0.9 } } }); const it = we.extend({
        dataElementType: $e.Rectangle,
        _dataElementOptions: ['backgroundColor', 'borderColor', 'borderSkipped', 'borderWidth', 'barPercentage', 'barThickness', 'categoryPercentage', 'maxBarThickness', 'minBarLength'],
        initialize() { let e; let t; const a = this; we.prototype.initialize.apply(a, arguments), e = a.getMeta(), e.stack = a.getDataset().stack, e.bar = !0, t = a._getIndexScale().options, et('bar chart', t.barPercentage, 'scales.[x/y]Axes.barPercentage', 'dataset.barPercentage'), et('bar chart', t.barThickness, 'scales.[x/y]Axes.barThickness', 'dataset.barThickness'), et('bar chart', t.categoryPercentage, 'scales.[x/y]Axes.categoryPercentage', 'dataset.categoryPercentage'), et('bar chart', a._getValueScale().options.minBarLength, 'scales.[x/y]Axes.minBarLength', 'dataset.minBarLength'), et('bar chart', t.maxBarThickness, 'scales.[x/y]Axes.maxBarThickness', 'dataset.maxBarThickness'); },
        update(e) { let t; let a; const n = this; const r = n.getMeta().data; for (n._ruler = n.getRuler(), t = 0, a = r.length; t < a; ++t)n.updateElement(r[t], t, e); },
        updateElement(e, t, a) {
          const n = this; const r = n.getMeta(); const i = n.getDataset(); const s = n._resolveDataElementOptions(e, t); e._xScale = n.getScaleForId(r.xAxisID), e._yScale = n.getScaleForId(r.yAxisID), e._datasetIndex = n.index, e._index = t, e._model = {
            backgroundColor: s.backgroundColor, borderColor: s.borderColor, borderSkipped: s.borderSkipped, borderWidth: s.borderWidth, datasetLabel: i.label, label: n.chart.data.labels[t],
          }, le.isArray(i.data[t]) && (e._model.borderSkipped = null), n._updateElementGeometry(e, t, a, s), e.pivot();
        },
        _updateElementGeometry(e, t, a, n) { const r = this; const i = e._model; const s = r._getValueScale(); const o = s.getBasePixel(); const d = s.isHorizontal(); const l = r._ruler || r.getRuler(); const u = r.calculateBarValuePixels(r.index, t, n); const _ = r.calculateBarIndexPixels(r.index, t, l, n); i.horizontal = d, i.base = a ? o : u.base, i.x = d ? a ? o : u.head : _.center, i.y = d ? _.center : a ? o : u.head, i.height = d ? _.size : void 0, i.width = d ? void 0 : _.size; },
        _getStacks(e) { let t; let a; const n = this; const r = n._getIndexScale(); const i = r._getMatchingVisibleMetas(n._type); const s = r.options.stacked; const o = i.length; const d = []; for (t = 0; t < o; ++t) if (a = i[t], (!1 === s || d.indexOf(a.stack) === -1 || void 0 === s && void 0 === a.stack) && d.push(a.stack), a.index === e) break; return d; },
        getStackCount() { return this._getStacks().length; },
        getStackIndex(e, t) { const a = this._getStacks(e); const n = void 0 !== t ? a.indexOf(t) : -1; return n === -1 ? a.length - 1 : n; },
        getRuler() {
          let e; let t; const a = this; const n = a._getIndexScale(); const r = []; for (e = 0, t = a.getMeta().data.length; e < t; ++e)r.push(n.getPixelForValue(null, e, a.index)); return {
            pixels: r, start: n._startPixel, end: n._endPixel, stackCount: a.getStackCount(), scale: n,
          };
        },
        calculateBarValuePixels(e, t, a) {
          let n; let r; let i; let s; let o; let d; let l; const u = this; const _ = u.chart; const c = u._getValueScale(); const m = c.isHorizontal(); const h = _.data.datasets; const f = c._getMatchingVisibleMetas(u._type); const M = c._parseValue(h[e].data[t]); const p = a.minBarLength; const g = c.options.stacked; const y = u.getMeta().stack; let L = void 0 === M.start ? 0 : M.max >= 0 && M.min >= 0 ? M.min : M.max; const v = void 0 === M.start ? M.end : M.max >= 0 && M.min >= 0 ? M.max - M.min : M.min - M.max; const Y = f.length; if (g || void 0 === g && void 0 !== y) for (n = 0; n < Y; ++n) { if (r = f[n], r.index === e) break; r.stack === y && (l = c._parseValue(h[r.index].data[t]), i = void 0 === l.start ? l.end : l.min >= 0 && l.max >= 0 ? l.max : l.min, (M.min < 0 && i < 0 || M.max >= 0 && i > 0) && (L += i)); } return s = c.getPixelForValue(L), o = c.getPixelForValue(L + v), d = o - s, void 0 !== p && Math.abs(d) < p && (d = p, o = v >= 0 && !m || v < 0 && m ? s - p : s + p), {
            size: d, base: s, head: o, center: o + d / 2,
          };
        },
        calculateBarIndexPixels(e, t, a, n) {
          const r = this; const i = n.barThickness === 'flex' ? rt(t, a, n) : nt(t, a, n); const s = r.getStackIndex(e, r.getMeta().stack); const o = i.start + i.chunk * s + i.chunk / 2; const d = Math.min(tt(n.maxBarThickness, 1 / 0), i.chunk * i.ratio); return {
            base: o - d / 2, head: o + d / 2, center: o, size: d,
          };
        },
        draw() { const e = this; const t = e.chart; const a = e._getValueScale(); const n = e.getMeta().data; const r = e.getDataset(); const i = n.length; let s = 0; for (le.canvas.clipArea(t.ctx, t.chartArea); s < i; ++s) { const o = a._parseValue(r.data[s]); isNaN(o.min) || isNaN(o.max) || n[s].draw(); }le.canvas.unclipArea(t.ctx); },
        _resolveDataElementOptions() { const e = this; const t = le.extend({}, we.prototype._resolveDataElementOptions.apply(e, arguments)); const a = e._getIndexScale().options; const n = e._getValueScale().options; return t.barPercentage = tt(a.barPercentage, t.barPercentage), t.barThickness = tt(a.barThickness, t.barThickness), t.categoryPercentage = tt(a.categoryPercentage, t.categoryPercentage), t.maxBarThickness = tt(a.maxBarThickness, t.maxBarThickness), t.minBarLength = tt(n.minBarLength, t.minBarLength), t; },
      }); const st = le.valueOrDefault; const ot = le.options.resolve; Z._set('bubble', { hover: { mode: 'single' }, scales: { xAxes: [{ type: 'linear', position: 'bottom', id: 'x-axis-0' }], yAxes: [{ type: 'linear', position: 'left', id: 'y-axis-0' }] }, tooltips: { callbacks: { title() { return ''; }, label(e, t) { const a = t.datasets[e.datasetIndex].label || ''; const n = t.datasets[e.datasetIndex].data[e.index]; return `${a}: (${e.xLabel}, ${e.yLabel}, ${n.r})`; } } } }); const dt = we.extend({
        dataElementType: $e.Point,
        _dataElementOptions: ['backgroundColor', 'borderColor', 'borderWidth', 'hoverBackgroundColor', 'hoverBorderColor', 'hoverBorderWidth', 'hoverRadius', 'hitRadius', 'pointStyle', 'rotation'],
        update(e) { const t = this; const a = t.getMeta(); const n = a.data; le.each(n, ((a, n) => { t.updateElement(a, n, e); })); },
        updateElement(e, t, a) {
          const n = this; const r = n.getMeta(); const i = e.custom || {}; const s = n.getScaleForId(r.xAxisID); const o = n.getScaleForId(r.yAxisID); const d = n._resolveDataElementOptions(e, t); const l = n.getDataset().data[t]; const u = n.index; const _ = a ? s.getPixelForDecimal(0.5) : s.getPixelForValue(typeof l === 'object' ? l : NaN, t, u); const c = a ? o.getBasePixel() : o.getPixelForValue(l, t, u); e._xScale = s, e._yScale = o, e._options = d, e._datasetIndex = u, e._index = t, e._model = {
            backgroundColor: d.backgroundColor, borderColor: d.borderColor, borderWidth: d.borderWidth, hitRadius: d.hitRadius, pointStyle: d.pointStyle, rotation: d.rotation, radius: a ? 0 : d.radius, skip: i.skip || isNaN(_) || isNaN(c), x: _, y: c,
          }, e.pivot();
        },
        setHoverStyle(e) {
          const t = e._model; const a = e._options; const n = le.getHoverColor; e.$previousStyle = {
            backgroundColor: t.backgroundColor, borderColor: t.borderColor, borderWidth: t.borderWidth, radius: t.radius,
          }, t.backgroundColor = st(a.hoverBackgroundColor, n(a.backgroundColor)), t.borderColor = st(a.hoverBorderColor, n(a.borderColor)), t.borderWidth = st(a.hoverBorderWidth, a.borderWidth), t.radius = a.radius + a.hoverRadius;
        },
        _resolveDataElementOptions(e, t) {
          const a = this; const n = a.chart; const r = a.getDataset(); const i = e.custom || {}; const s = r.data[t] || {}; let o = we.prototype._resolveDataElementOptions.apply(a, arguments); const d = {
            chart: n, dataIndex: t, dataset: r, datasetIndex: a.index,
          }; return a._cachedDataOpts === o && (o = le.extend({}, o)), o.radius = ot([i.radius, s.r, a._config.radius, n.options.elements.point.radius], d, t), o;
        },
      }); const lt = le.valueOrDefault; const ut = Math.PI; const _t = 2 * ut; const ct = ut / 2; Z._set('doughnut', {
        animation: { animateRotate: !0, animateScale: !1 },
        hover: { mode: 'single' },
        legendCallback(e) { let t; let a; let n; let r; const i = document.createElement('ul'); const s = e.data; const o = s.datasets; const d = s.labels; if (i.setAttribute('class', `${e.id}-legend`), o.length) for (t = 0, a = o[0].data.length; t < a; ++t)n = i.appendChild(document.createElement('li')), r = n.appendChild(document.createElement('span')), r.style.backgroundColor = o[0].backgroundColor[t], d[t] && n.appendChild(document.createTextNode(d[t])); return i.outerHTML; },
        legend: {
          labels: {
            generateLabels(e) {
              const t = e.data; return t.labels.length && t.datasets.length ? t.labels.map(((a, n) => {
                const r = e.getDatasetMeta(0); const i = r.controller.getStyle(n); return {
                  text: a, fillStyle: i.backgroundColor, strokeStyle: i.borderColor, lineWidth: i.borderWidth, hidden: isNaN(t.datasets[0].data[n]) || r.data[n].hidden, index: n,
                };
              })) : [];
            },
          },
          onClick(e, t) { let a; let n; let r; const i = t.index; const s = this.chart; for (a = 0, n = (s.data.datasets || []).length; a < n; ++a)r = s.getDatasetMeta(a), r.data[i] && (r.data[i].hidden = !r.data[i].hidden); s.update(); },
        },
        cutoutPercentage: 50,
        rotation: -ct,
        circumference: _t,
        tooltips: { callbacks: { title() { return ''; }, label(e, t) { let a = t.labels[e.index]; const n = `: ${t.datasets[e.datasetIndex].data[e.index]}`; return le.isArray(a) ? (a = a.slice(), a[0] += n) : a += n, a; } } },
      }); const mt = we.extend({
        dataElementType: $e.Arc,
        linkScales: le.noop,
        _dataElementOptions: ['backgroundColor', 'borderColor', 'borderWidth', 'borderAlign', 'hoverBackgroundColor', 'hoverBorderColor', 'hoverBorderWidth'],
        getRingIndex(e) { for (var t = 0, a = 0; a < e; ++a) this.chart.isDatasetVisible(a) && ++t; return t; },
        update(e) { let t; let a; let n; let r; const i = this; const s = i.chart; const o = s.chartArea; const d = s.options; let l = 1; let u = 1; let _ = 0; let c = 0; const m = i.getMeta(); const h = m.data; const f = d.cutoutPercentage / 100 || 0; const M = d.circumference; const p = i._getRingWeight(i.index); if (M < _t) { let g = d.rotation % _t; g += g >= ut ? -_t : g < -ut ? _t : 0; const y = g + M; const L = Math.cos(g); const v = Math.sin(g); const Y = Math.cos(y); const b = Math.sin(y); const k = g <= 0 && y >= 0 || y >= _t; const D = g <= ct && y >= ct || y >= _t + ct; const w = g === -ut || y >= ut; const T = g <= -ct && y >= -ct || y >= ut + ct; const x = w ? -1 : Math.min(L, L * f, Y, Y * f); const S = T ? -1 : Math.min(v, v * f, b, b * f); const H = k ? 1 : Math.max(L, L * f, Y, Y * f); const j = D ? 1 : Math.max(v, v * f, b, b * f); l = (H - x) / 2, u = (j - S) / 2, _ = -(H + x) / 2, c = -(j + S) / 2; } for (n = 0, r = h.length; n < r; ++n)h[n]._options = i._resolveDataElementOptions(h[n], n); for (s.borderWidth = i.getMaxBorderWidth(), t = (o.right - o.left - s.borderWidth) / l, a = (o.bottom - o.top - s.borderWidth) / u, s.outerRadius = Math.max(Math.min(t, a) / 2, 0), s.innerRadius = Math.max(s.outerRadius * f, 0), s.radiusLength = (s.outerRadius - s.innerRadius) / (i._getVisibleDatasetWeightTotal() || 1), s.offsetX = _ * s.outerRadius, s.offsetY = c * s.outerRadius, m.total = i.calculateTotal(), i.outerRadius = s.outerRadius - s.radiusLength * i._getRingWeightOffset(i.index), i.innerRadius = Math.max(i.outerRadius - s.radiusLength * p, 0), n = 0, r = h.length; n < r; ++n)i.updateElement(h[n], n, e); },
        updateElement(e, t, a) {
          const n = this; const r = n.chart; const i = r.chartArea; const s = r.options; const o = s.animation; const d = (i.left + i.right) / 2; const l = (i.top + i.bottom) / 2; const u = s.rotation; const _ = s.rotation; const c = n.getDataset(); const m = a && o.animateRotate || e.hidden ? 0 : n.calculateCircumference(c.data[t]) * (s.circumference / _t); const h = a && o.animateScale ? 0 : n.innerRadius; const f = a && o.animateScale ? 0 : n.outerRadius; const M = e._options || {}; le.extend(e, {
            _datasetIndex: n.index,
            _index: t,
            _model: {
              backgroundColor: M.backgroundColor, borderColor: M.borderColor, borderWidth: M.borderWidth, borderAlign: M.borderAlign, x: d + r.offsetX, y: l + r.offsetY, startAngle: u, endAngle: _, circumference: m, outerRadius: f, innerRadius: h, label: le.valueAtIndexOrDefault(c.label, t, r.data.labels[t]),
            },
          }); const p = e._model; a && o.animateRotate || (p.startAngle = t === 0 ? s.rotation : n.getMeta().data[t - 1]._model.endAngle, p.endAngle = p.startAngle + p.circumference), e.pivot();
        },
        calculateTotal() { let e; const t = this.getDataset(); const a = this.getMeta(); let n = 0; return le.each(a.data, ((a, r) => { e = t.data[r], isNaN(e) || a.hidden || (n += Math.abs(e)); })), n; },
        calculateCircumference(e) { const t = this.getMeta().total; return t > 0 && !isNaN(e) ? _t * (Math.abs(e) / t) : 0; },
        getMaxBorderWidth(e) { let t; let a; let n; let r; let i; let s; let o; let d; const l = this; let u = 0; const _ = l.chart; if (!e) for (t = 0, a = _.data.datasets.length; t < a; ++t) if (_.isDatasetVisible(t)) { n = _.getDatasetMeta(t), e = n.data, t !== l.index && (i = n.controller); break; } if (!e) return 0; for (t = 0, a = e.length; t < a; ++t)r = e[t], i ? (i._configure(), s = i._resolveDataElementOptions(r, t)) : s = r._options, s.borderAlign !== 'inner' && (o = s.borderWidth, d = s.hoverBorderWidth, u = o > u ? o : u, u = d > u ? d : u); return u; },
        setHoverStyle(e) { const t = e._model; const a = e._options; const n = le.getHoverColor; e.$previousStyle = { backgroundColor: t.backgroundColor, borderColor: t.borderColor, borderWidth: t.borderWidth }, t.backgroundColor = lt(a.hoverBackgroundColor, n(a.backgroundColor)), t.borderColor = lt(a.hoverBorderColor, n(a.borderColor)), t.borderWidth = lt(a.hoverBorderWidth, a.borderWidth); },
        _getRingWeightOffset(e) { for (var t = 0, a = 0; a < e; ++a) this.chart.isDatasetVisible(a) && (t += this._getRingWeight(a)); return t; },
        _getRingWeight(e) { return Math.max(lt(this.chart.data.datasets[e].weight, 1), 0); },
        _getVisibleDatasetWeightTotal() { return this._getRingWeightOffset(this.chart.data.datasets.length); },
      }); Z._set('horizontalBar', {
        hover: { mode: 'index', axis: 'y' },
        scales: {
          xAxes: [{ type: 'linear', position: 'bottom' }],
          yAxes: [{
            type: 'category', position: 'left', offset: !0, gridLines: { offsetGridLines: !0 },
          }],
        },
        elements: { rectangle: { borderSkipped: 'left' } },
        tooltips: { mode: 'index', axis: 'y' },
      }), Z._set('global', { datasets: { horizontalBar: { categoryPercentage: 0.8, barPercentage: 0.9 } } }); const ht = it.extend({ _getValueScaleId() { return this.getMeta().xAxisID; }, _getIndexScaleId() { return this.getMeta().yAxisID; } }); const ft = le.valueOrDefault; const Mt = le.options.resolve; const pt = le.canvas._isPointInArea; function gt(e, t) { const a = e && e.options.ticks || {}; const n = a.reverse; const r = void 0 === a.min ? t : 0; const i = void 0 === a.max ? t : 0; return { start: n ? i : r, end: n ? r : i }; } function yt(e, t, a) {
        const n = a / 2; const r = gt(e, n); const i = gt(t, n); return {
          top: i.end, right: r.end, bottom: i.start, left: r.start,
        };
      } function Lt(e) {
        let t; let a; let n; let r; return le.isObject(e) ? (t = e.top, a = e.right, n = e.bottom, r = e.left) : t = a = n = r = e, {
          top: t, right: a, bottom: n, left: r,
        };
      }Z._set('line', {
        showLines: !0, spanGaps: !1, hover: { mode: 'label' }, scales: { xAxes: [{ type: 'category', id: 'x-axis-0' }], yAxes: [{ type: 'linear', id: 'y-axis-0' }] },
      }); const vt = we.extend({
        datasetElementType: $e.Line,
        dataElementType: $e.Point,
        _datasetElementOptions: ['backgroundColor', 'borderCapStyle', 'borderColor', 'borderDash', 'borderDashOffset', 'borderJoinStyle', 'borderWidth', 'cubicInterpolationMode', 'fill'],
        _dataElementOptions: {
          backgroundColor: 'pointBackgroundColor', borderColor: 'pointBorderColor', borderWidth: 'pointBorderWidth', hitRadius: 'pointHitRadius', hoverBackgroundColor: 'pointHoverBackgroundColor', hoverBorderColor: 'pointHoverBorderColor', hoverBorderWidth: 'pointHoverBorderWidth', hoverRadius: 'pointHoverRadius', pointStyle: 'pointStyle', radius: 'pointRadius', rotation: 'pointRotation',
        },
        update(e) { let t; let a; const n = this; const r = n.getMeta(); const i = r.dataset; const s = r.data || []; const o = n.chart.options; const d = n._config; const l = n._showLine = ft(d.showLine, o.showLines); for (n._xScale = n.getScaleForId(r.xAxisID), n._yScale = n.getScaleForId(r.yAxisID), l && (void 0 !== d.tension && void 0 === d.lineTension && (d.lineTension = d.tension), i._scale = n._yScale, i._datasetIndex = n.index, i._children = s, i._model = n._resolveDatasetElementOptions(i), i.pivot()), t = 0, a = s.length; t < a; ++t)n.updateElement(s[t], t, e); for (l && i._model.tension !== 0 && n.updateBezierControlPoints(), t = 0, a = s.length; t < a; ++t)s[t].pivot(); },
        updateElement(e, t, a) {
          let n; let r; const i = this; const s = i.getMeta(); const o = e.custom || {}; const d = i.getDataset(); const l = i.index; const u = d.data[t]; const _ = i._xScale; const c = i._yScale; const m = s.dataset._model; const h = i._resolveDataElementOptions(e, t); n = _.getPixelForValue(typeof u === 'object' ? u : NaN, t, l), r = a ? c.getBasePixel() : i.calculatePointY(u, t, l), e._xScale = _, e._yScale = c, e._options = h, e._datasetIndex = l, e._index = t, e._model = {
            x: n, y: r, skip: o.skip || isNaN(n) || isNaN(r), radius: h.radius, pointStyle: h.pointStyle, rotation: h.rotation, backgroundColor: h.backgroundColor, borderColor: h.borderColor, borderWidth: h.borderWidth, tension: ft(o.tension, m ? m.tension : 0), steppedLine: !!m && m.steppedLine, hitRadius: h.hitRadius,
          };
        },
        _resolveDatasetElementOptions(e) { const t = this; const a = t._config; const n = e.custom || {}; const r = t.chart.options; const i = r.elements.line; const s = we.prototype._resolveDatasetElementOptions.apply(t, arguments); return s.spanGaps = ft(a.spanGaps, r.spanGaps), s.tension = ft(a.lineTension, i.tension), s.steppedLine = Mt([n.steppedLine, a.steppedLine, i.stepped]), s.clip = Lt(ft(a.clip, yt(t._xScale, t._yScale, s.borderWidth))), s; },
        calculatePointY(e, t, a) { let n; let r; let i; let s; let o; let d; let l; const u = this; const _ = u.chart; const c = u._yScale; let m = 0; let h = 0; if (c.options.stacked) { for (o = +c.getRightValue(e), d = _._getSortedVisibleDatasetMetas(), l = d.length, n = 0; n < l; ++n) { if (i = d[n], i.index === a) break; r = _.data.datasets[i.index], i.type === 'line' && i.yAxisID === c.id && (s = +c.getRightValue(r.data[t]), s < 0 ? h += s || 0 : m += s || 0); } return o < 0 ? c.getPixelForValue(h + o) : c.getPixelForValue(m + o); } return c.getPixelForValue(e); },
        updateBezierControlPoints() { let e; let t; let a; let n; const r = this; const i = r.chart; const s = r.getMeta(); const o = s.dataset._model; const d = i.chartArea; let l = s.data || []; function u(e, t, a) { return Math.max(Math.min(e, a), t); } if (o.spanGaps && (l = l.filter(((e) => !e._model.skip))), o.cubicInterpolationMode === 'monotone')le.splineCurveMonotone(l); else for (e = 0, t = l.length; e < t; ++e)a = l[e]._model, n = le.splineCurve(le.previousItem(l, e)._model, a, le.nextItem(l, e)._model, o.tension), a.controlPointPreviousX = n.previous.x, a.controlPointPreviousY = n.previous.y, a.controlPointNextX = n.next.x, a.controlPointNextY = n.next.y; if (i.options.elements.line.capBezierPoints) for (e = 0, t = l.length; e < t; ++e)a = l[e]._model, pt(a, d) && (e > 0 && pt(l[e - 1]._model, d) && (a.controlPointPreviousX = u(a.controlPointPreviousX, d.left, d.right), a.controlPointPreviousY = u(a.controlPointPreviousY, d.top, d.bottom)), e < l.length - 1 && pt(l[e + 1]._model, d) && (a.controlPointNextX = u(a.controlPointNextX, d.left, d.right), a.controlPointNextY = u(a.controlPointNextY, d.top, d.bottom))); },
        draw() {
          let e; const t = this; const a = t.chart; const n = t.getMeta(); const r = n.data || []; const i = a.chartArea; const s = a.canvas; let o = 0; const d = r.length; for (t._showLine && (e = n.dataset._model.clip, le.canvas.clipArea(a.ctx, {
            left: !1 === e.left ? 0 : i.left - e.left, right: !1 === e.right ? s.width : i.right + e.right, top: !1 === e.top ? 0 : i.top - e.top, bottom: !1 === e.bottom ? s.height : i.bottom + e.bottom,
          }), n.dataset.draw(), le.canvas.unclipArea(a.ctx)); o < d; ++o)r[o].draw(i);
        },
        setHoverStyle(e) {
          const t = e._model; const a = e._options; const n = le.getHoverColor; e.$previousStyle = {
            backgroundColor: t.backgroundColor, borderColor: t.borderColor, borderWidth: t.borderWidth, radius: t.radius,
          }, t.backgroundColor = ft(a.hoverBackgroundColor, n(a.backgroundColor)), t.borderColor = ft(a.hoverBorderColor, n(a.borderColor)), t.borderWidth = ft(a.hoverBorderWidth, a.borderWidth), t.radius = ft(a.hoverRadius, a.radius);
        },
      }); const Yt = le.options.resolve; Z._set('polarArea', {
        scale: {
          type: 'radialLinear', angleLines: { display: !1 }, gridLines: { circular: !0 }, pointLabels: { display: !1 }, ticks: { beginAtZero: !0 },
        },
        animation: { animateRotate: !0, animateScale: !0 },
        startAngle: -0.5 * Math.PI,
        legendCallback(e) { let t; let a; let n; let r; const i = document.createElement('ul'); const s = e.data; const o = s.datasets; const d = s.labels; if (i.setAttribute('class', `${e.id}-legend`), o.length) for (t = 0, a = o[0].data.length; t < a; ++t)n = i.appendChild(document.createElement('li')), r = n.appendChild(document.createElement('span')), r.style.backgroundColor = o[0].backgroundColor[t], d[t] && n.appendChild(document.createTextNode(d[t])); return i.outerHTML; },
        legend: {
          labels: {
            generateLabels(e) {
              const t = e.data; return t.labels.length && t.datasets.length ? t.labels.map(((a, n) => {
                const r = e.getDatasetMeta(0); const i = r.controller.getStyle(n); return {
                  text: a, fillStyle: i.backgroundColor, strokeStyle: i.borderColor, lineWidth: i.borderWidth, hidden: isNaN(t.datasets[0].data[n]) || r.data[n].hidden, index: n,
                };
              })) : [];
            },
          },
          onClick(e, t) { let a; let n; let r; const i = t.index; const s = this.chart; for (a = 0, n = (s.data.datasets || []).length; a < n; ++a)r = s.getDatasetMeta(a), r.data[i].hidden = !r.data[i].hidden; s.update(); },
        },
        tooltips: { callbacks: { title() { return ''; }, label(e, t) { return `${t.labels[e.index]}: ${e.yLabel}`; } } },
      }); const bt = we.extend({
        dataElementType: $e.Arc,
        linkScales: le.noop,
        _dataElementOptions: ['backgroundColor', 'borderColor', 'borderWidth', 'borderAlign', 'hoverBackgroundColor', 'hoverBorderColor', 'hoverBorderWidth'],
        _getIndexScaleId() { return this.chart.scale.id; },
        _getValueScaleId() { return this.chart.scale.id; },
        update(e) { let t; let a; let n; const r = this; const i = r.getDataset(); const s = r.getMeta(); let o = r.chart.options.startAngle || 0; const d = r._starts = []; const l = r._angles = []; const u = s.data; for (r._updateRadius(), s.count = r.countVisibleElements(), t = 0, a = i.data.length; t < a; t++)d[t] = o, n = r._computeAngle(t), l[t] = n, o += n; for (t = 0, a = u.length; t < a; ++t)u[t]._options = r._resolveDataElementOptions(u[t], t), r.updateElement(u[t], t, e); },
        _updateRadius() { const e = this; const t = e.chart; const a = t.chartArea; const n = t.options; const r = Math.min(a.right - a.left, a.bottom - a.top); t.outerRadius = Math.max(r / 2, 0), t.innerRadius = Math.max(n.cutoutPercentage ? t.outerRadius / 100 * n.cutoutPercentage : 1, 0), t.radiusLength = (t.outerRadius - t.innerRadius) / t.getVisibleDatasetCount(), e.outerRadius = t.outerRadius - t.radiusLength * e.index, e.innerRadius = e.outerRadius - t.radiusLength; },
        updateElement(e, t, a) {
          const n = this; const r = n.chart; const i = n.getDataset(); const s = r.options; const o = s.animation; const d = r.scale; const l = r.data.labels; const u = d.xCenter; const _ = d.yCenter; const c = s.startAngle; const m = e.hidden ? 0 : d.getDistanceFromCenterForValue(i.data[t]); const h = n._starts[t]; const f = h + (e.hidden ? 0 : n._angles[t]); const M = o.animateScale ? 0 : d.getDistanceFromCenterForValue(i.data[t]); const p = e._options || {}; le.extend(e, {
            _datasetIndex: n.index,
            _index: t,
            _scale: d,
            _model: {
              backgroundColor: p.backgroundColor, borderColor: p.borderColor, borderWidth: p.borderWidth, borderAlign: p.borderAlign, x: u, y: _, innerRadius: 0, outerRadius: a ? M : m, startAngle: a && o.animateRotate ? c : h, endAngle: a && o.animateRotate ? c : f, label: le.valueAtIndexOrDefault(l, t, l[t]),
            },
          }), e.pivot();
        },
        countVisibleElements() { const e = this.getDataset(); const t = this.getMeta(); let a = 0; return le.each(t.data, ((t, n) => { isNaN(e.data[n]) || t.hidden || a++; })), a; },
        setHoverStyle(e) { const t = e._model; const a = e._options; const n = le.getHoverColor; const r = le.valueOrDefault; e.$previousStyle = { backgroundColor: t.backgroundColor, borderColor: t.borderColor, borderWidth: t.borderWidth }, t.backgroundColor = r(a.hoverBackgroundColor, n(a.backgroundColor)), t.borderColor = r(a.hoverBorderColor, n(a.borderColor)), t.borderWidth = r(a.hoverBorderWidth, a.borderWidth); },
        _computeAngle(e) {
          const t = this; const a = this.getMeta().count; const n = t.getDataset(); const r = t.getMeta(); if (isNaN(n.data[e]) || r.data[e].hidden) return 0; const i = {
            chart: t.chart, dataIndex: e, dataset: n, datasetIndex: t.index,
          }; return Yt([t.chart.options.elements.arc.angle, 2 * Math.PI / a], i, e);
        },
      }); Z._set('pie', le.clone(Z.doughnut)), Z._set('pie', { cutoutPercentage: 0 }); const kt = mt; const Dt = le.valueOrDefault; Z._set('radar', { spanGaps: !1, scale: { type: 'radialLinear' }, elements: { line: { fill: 'start', tension: 0 } } }); const wt = we.extend({
        datasetElementType: $e.Line,
        dataElementType: $e.Point,
        linkScales: le.noop,
        _datasetElementOptions: ['backgroundColor', 'borderWidth', 'borderColor', 'borderCapStyle', 'borderDash', 'borderDashOffset', 'borderJoinStyle', 'fill'],
        _dataElementOptions: {
          backgroundColor: 'pointBackgroundColor', borderColor: 'pointBorderColor', borderWidth: 'pointBorderWidth', hitRadius: 'pointHitRadius', hoverBackgroundColor: 'pointHoverBackgroundColor', hoverBorderColor: 'pointHoverBorderColor', hoverBorderWidth: 'pointHoverBorderWidth', hoverRadius: 'pointHoverRadius', pointStyle: 'pointStyle', radius: 'pointRadius', rotation: 'pointRotation',
        },
        _getIndexScaleId() { return this.chart.scale.id; },
        _getValueScaleId() { return this.chart.scale.id; },
        update(e) { let t; let a; const n = this; const r = n.getMeta(); const i = r.dataset; const s = r.data || []; const o = n.chart.scale; const d = n._config; for (void 0 !== d.tension && void 0 === d.lineTension && (d.lineTension = d.tension), i._scale = o, i._datasetIndex = n.index, i._children = s, i._loop = !0, i._model = n._resolveDatasetElementOptions(i), i.pivot(), t = 0, a = s.length; t < a; ++t)n.updateElement(s[t], t, e); for (n.updateBezierControlPoints(), t = 0, a = s.length; t < a; ++t)s[t].pivot(); },
        updateElement(e, t, a) {
          const n = this; const r = e.custom || {}; const i = n.getDataset(); const s = n.chart.scale; const o = s.getPointPositionForValue(t, i.data[t]); const d = n._resolveDataElementOptions(e, t); const l = n.getMeta().dataset._model; const u = a ? s.xCenter : o.x; const _ = a ? s.yCenter : o.y; e._scale = s, e._options = d, e._datasetIndex = n.index, e._index = t, e._model = {
            x: u, y: _, skip: r.skip || isNaN(u) || isNaN(_), radius: d.radius, pointStyle: d.pointStyle, rotation: d.rotation, backgroundColor: d.backgroundColor, borderColor: d.borderColor, borderWidth: d.borderWidth, tension: Dt(r.tension, l ? l.tension : 0), hitRadius: d.hitRadius,
          };
        },
        _resolveDatasetElementOptions() { const e = this; const t = e._config; const a = e.chart.options; const n = we.prototype._resolveDatasetElementOptions.apply(e, arguments); return n.spanGaps = Dt(t.spanGaps, a.spanGaps), n.tension = Dt(t.lineTension, a.elements.line.tension), n; },
        updateBezierControlPoints() { let e; let t; let a; let n; const r = this; const i = r.getMeta(); const s = r.chart.chartArea; let o = i.data || []; function d(e, t, a) { return Math.max(Math.min(e, a), t); } for (i.dataset._model.spanGaps && (o = o.filter(((e) => !e._model.skip))), e = 0, t = o.length; e < t; ++e)a = o[e]._model, n = le.splineCurve(le.previousItem(o, e, !0)._model, a, le.nextItem(o, e, !0)._model, a.tension), a.controlPointPreviousX = d(n.previous.x, s.left, s.right), a.controlPointPreviousY = d(n.previous.y, s.top, s.bottom), a.controlPointNextX = d(n.next.x, s.left, s.right), a.controlPointNextY = d(n.next.y, s.top, s.bottom); },
        setHoverStyle(e) {
          const t = e._model; const a = e._options; const n = le.getHoverColor; e.$previousStyle = {
            backgroundColor: t.backgroundColor, borderColor: t.borderColor, borderWidth: t.borderWidth, radius: t.radius,
          }, t.backgroundColor = Dt(a.hoverBackgroundColor, n(a.backgroundColor)), t.borderColor = Dt(a.hoverBorderColor, n(a.borderColor)), t.borderWidth = Dt(a.hoverBorderWidth, a.borderWidth), t.radius = Dt(a.hoverRadius, a.radius);
        },
      }); Z._set('scatter', { hover: { mode: 'single' }, scales: { xAxes: [{ id: 'x-axis-1', type: 'linear', position: 'bottom' }], yAxes: [{ id: 'y-axis-1', type: 'linear', position: 'left' }] }, tooltips: { callbacks: { title() { return ''; }, label(e) { return `(${e.xLabel}, ${e.yLabel})`; } } } }), Z._set('global', { datasets: { scatter: { showLine: !1 } } }); const Tt = vt; const xt = {
        bar: it, bubble: dt, doughnut: mt, horizontalBar: ht, line: vt, polarArea: bt, pie: kt, radar: wt, scatter: Tt,
      }; function St(e, t) { return e.native ? { x: e.x, y: e.y } : le.getRelativePosition(e, t); } function Ht(e, t) { let a; let n; let r; let i; let s; let o; const d = e._getSortedVisibleDatasetMetas(); for (n = 0, i = d.length; n < i; ++n) for (a = d[n].data, r = 0, s = a.length; r < s; ++r)o = a[r], o._view.skip || t(o); } function jt(e, t) { const a = []; return Ht(e, ((e) => { e.inRange(t.x, t.y) && a.push(e); })), a; } function Pt(e, t, a, n) { let r = Number.POSITIVE_INFINITY; let i = []; return Ht(e, ((e) => { if (!a || e.inRange(t.x, t.y)) { const s = e.getCenterPoint(); const o = n(t, s); o < r ? (i = [e], r = o) : o === r && i.push(e); } })), i; } function Ot(e) { const t = e.indexOf('x') !== -1; const a = e.indexOf('y') !== -1; return function (e, n) { const r = t ? Math.abs(e.x - n.x) : 0; const i = a ? Math.abs(e.y - n.y) : 0; return Math.sqrt(Math.pow(r, 2) + Math.pow(i, 2)); }; } function At(e, t, a) { const n = St(t, e); a.axis = a.axis || 'x'; const r = Ot(a.axis); const i = a.intersect ? jt(e, n) : Pt(e, n, !1, r); const s = []; return i.length ? (e._getSortedVisibleDatasetMetas().forEach(((e) => { const t = e.data[i[0]._index]; t && !t._view.skip && s.push(t); })), s) : []; } const Ft = {
        modes: {
          single(e, t) { const a = St(t, e); const n = []; return Ht(e, ((e) => { if (e.inRange(a.x, a.y)) return n.push(e), n; })), n.slice(0, 1); }, label: At, index: At, dataset(e, t, a) { const n = St(t, e); a.axis = a.axis || 'xy'; const r = Ot(a.axis); let i = a.intersect ? jt(e, n) : Pt(e, n, !1, r); return i.length > 0 && (i = e.getDatasetMeta(i[0]._datasetIndex).data), i; }, 'x-axis': function (e, t) { return At(e, t, { intersect: !1 }); }, point(e, t) { const a = St(t, e); return jt(e, a); }, nearest(e, t, a) { const n = St(t, e); a.axis = a.axis || 'xy'; const r = Ot(a.axis); return Pt(e, n, a.intersect, r); }, x(e, t, a) { const n = St(t, e); let r = []; let i = !1; return Ht(e, ((e) => { e.inXRange(n.x) && r.push(e), e.inRange(n.x, n.y) && (i = !0); })), a.intersect && !i && (r = []), r; }, y(e, t, a) { const n = St(t, e); let r = []; let i = !1; return Ht(e, ((e) => { e.inYRange(n.y) && r.push(e), e.inRange(n.x, n.y) && (i = !0); })), a.intersect && !i && (r = []), r; },
        },
      }; const Wt = le.extend; function Ct(e, t) { return le.where(e, ((e) => e.pos === t)); } function Et(e, t) { return e.sort(((e, a) => { const n = t ? a : e; const r = t ? e : a; return n.weight === r.weight ? n.index - r.index : n.weight - r.weight; })); } function zt(e) {
        let t; let a; let n; const r = []; for (t = 0, a = (e || []).length; t < a; ++t) {
          n = e[t], r.push({
            index: t, box: n, pos: n.position, horizontal: n.isHorizontal(), weight: n.weight,
          });
        } return r;
      } function It(e, t) { let a; let n; let r; for (a = 0, n = e.length; a < n; ++a)r = e[a], r.width = r.horizontal ? r.box.fullWidth && t.availableWidth : t.vBoxMaxWidth, r.height = r.horizontal && t.hBoxMaxHeight; } function Rt(e) {
        const t = zt(e); const a = Et(Ct(t, 'left'), !0); const n = Et(Ct(t, 'right')); const r = Et(Ct(t, 'top'), !0); const i = Et(Ct(t, 'bottom')); return {
          leftAndTop: a.concat(r), rightAndBottom: n.concat(i), chartArea: Ct(t, 'chartArea'), vertical: a.concat(n), horizontal: r.concat(i),
        };
      } function Nt(e, t, a, n) { return Math.max(e[a], t[a]) + Math.max(e[n], t[n]); } function Vt(e, t, a) { let n; let r; const i = a.box; const s = e.maxPadding; if (a.size && (e[a.pos] -= a.size), a.size = a.horizontal ? i.height : i.width, e[a.pos] += a.size, i.getPadding) { const o = i.getPadding(); s.top = Math.max(s.top, o.top), s.left = Math.max(s.left, o.left), s.bottom = Math.max(s.bottom, o.bottom), s.right = Math.max(s.right, o.right); } if (n = t.outerWidth - Nt(s, e, 'left', 'right'), r = t.outerHeight - Nt(s, e, 'top', 'bottom'), n !== e.w || r !== e.h) return e.w = n, e.h = r, a.horizontal ? n !== e.w : r !== e.h; } function Bt(e) { const t = e.maxPadding; function a(a) { const n = Math.max(t[a] - e[a], 0); return e[a] += n, n; }e.y += a('top'), e.x += a('left'), a('right'), a('bottom'); } function Jt(e, t) {
        const a = t.maxPadding; function n(e) {
          const n = {
            left: 0, top: 0, right: 0, bottom: 0,
          }; return e.forEach(((e) => { n[e] = Math.max(t[e], a[e]); })), n;
        } return n(e ? ['left', 'right'] : ['top', 'bottom']);
      } function Ut(e, t, a) { let n; let r; let i; let s; let o; let d; const l = []; for (n = 0, r = e.length; n < r; ++n)i = e[n], s = i.box, s.update(i.width || t.w, i.height || t.h, Jt(i.horizontal, t)), Vt(t, a, i) && (d = !0, l.length && (o = !0)), s.fullWidth || l.push(i); return o && Ut(l, t, a) || d; } function Gt(e, t, a) { let n; let r; let i; let s; const o = a.padding; let d = t.x; let l = t.y; for (n = 0, r = e.length; n < r; ++n)i = e[n], s = i.box, i.horizontal ? (s.left = s.fullWidth ? o.left : t.left, s.right = s.fullWidth ? a.outerWidth - o.right : t.left + t.w, s.top = l, s.bottom = l + s.height, s.width = s.right - s.left, l = s.bottom) : (s.left = d, s.right = d + s.width, s.top = t.top, s.bottom = t.top + t.h, s.height = s.bottom - s.top, d = s.right); t.x = d, t.y = l; }Z._set('global', {
        layout: {
          padding: {
            top: 0, right: 0, bottom: 0, left: 0,
          },
        },
      }); const qt = {
        defaults: {},
        addBox(e, t) { e.boxes || (e.boxes = []), t.fullWidth = t.fullWidth || !1, t.position = t.position || 'top', t.weight = t.weight || 0, t._layers = t._layers || function () { return [{ z: 0, draw() { t.draw.apply(t, arguments); } }]; }, e.boxes.push(t); },
        removeBox(e, t) { const a = e.boxes ? e.boxes.indexOf(t) : -1; a !== -1 && e.boxes.splice(a, 1); },
        configure(e, t, a) { for (var n, r = ['fullWidth', 'position', 'weight'], i = r.length, s = 0; s < i; ++s)n = r[s], a.hasOwnProperty(n) && (t[n] = a[n]); },
        update(e, t, a) {
          if (e) {
            const n = e.options.layout || {}; const r = le.options.toPadding(n.padding); const i = t - r.width; const s = a - r.height; const o = Rt(e.boxes); const d = o.vertical; const l = o.horizontal; const u = Object.freeze({
              outerWidth: t, outerHeight: a, padding: r, availableWidth: i, vBoxMaxWidth: i / 2 / d.length, hBoxMaxHeight: s / 2,
            }); const _ = Wt({
              maxPadding: Wt({}, r), w: i, h: s, x: r.left, y: r.top,
            }, r); It(d.concat(l), u), Ut(d, _, u), Ut(l, _, u) && Ut(d, _, u), Bt(_), Gt(o.leftAndTop, _, u), _.x += _.w, _.y += _.h, Gt(o.rightAndBottom, _, u), e.chartArea = {
              left: _.left, top: _.top, right: _.left + _.w, bottom: _.top + _.h,
            }, le.each(o.chartArea, ((t) => { const a = t.box; Wt(a, e.chartArea), a.update(_.w, _.h); }));
          }
        },
      }; const $t = { acquireContext(e) { return e && e.canvas && (e = e.canvas), e && e.getContext('2d') || null; } }; const Kt = '/*\n * DOM element rendering detection\n * https://davidwalsh.name/detect-node-insertion\n */\n@keyframes chartjs-render-animation {\n\tfrom { opacity: 0.99; }\n\tto { opacity: 1; }\n}\n\n.chartjs-render-monitor {\n\tanimation: chartjs-render-animation 0.001s;\n}\n\n/*\n * DOM element resizing detection\n * https://github.com/marcj/css-element-queries\n */\n.chartjs-size-monitor,\n.chartjs-size-monitor-expand,\n.chartjs-size-monitor-shrink {\n\tposition: absolute;\n\tdirection: ltr;\n\tleft: 0;\n\ttop: 0;\n\tright: 0;\n\tbottom: 0;\n\toverflow: hidden;\n\tpointer-events: none;\n\tvisibility: hidden;\n\tz-index: -1;\n}\n\n.chartjs-size-monitor-expand > div {\n\tposition: absolute;\n\twidth: 1000000px;\n\theight: 1000000px;\n\tleft: 0;\n\ttop: 0;\n}\n\n.chartjs-size-monitor-shrink > div {\n\tposition: absolute;\n\twidth: 200%;\n\theight: 200%;\n\tleft: 0;\n\ttop: 0;\n}\n'; const Zt = Object.freeze({ __proto__: null, default: Kt }); const Qt = a(Zt); const Xt = '$chartjs'; const ea = 'chartjs-'; const ta = `${ea}size-monitor`; const aa = `${ea}render-monitor`; const na = `${ea}render-animation`; const ra = ['animationstart', 'webkitAnimationStart']; const ia = {
        touchstart: 'mousedown', touchmove: 'mousemove', touchend: 'mouseup', pointerenter: 'mouseenter', pointerdown: 'mousedown', pointermove: 'mousemove', pointerup: 'mouseup', pointerleave: 'mouseout', pointerout: 'mouseout',
      }; function sa(e, t) { const a = le.getStyle(e, t); const n = a && a.match(/^(\d+)(\.\d+)?px$/); return n ? Number(n[1]) : void 0; } function oa(e, t) { const a = e.style; const n = e.getAttribute('height'); const r = e.getAttribute('width'); if (e[Xt] = { initial: { height: n, width: r, style: { display: a.display, height: a.height, width: a.width } } }, a.display = a.display || 'block', r === null || r === '') { var i = sa(e, 'width'); void 0 !== i && (e.width = i); } if (n === null || n === '') if (e.style.height === '')e.height = e.width / (t.options.aspectRatio || 2); else { const s = sa(e, 'height'); void 0 !== i && (e.height = s); } return e; } const da = (function () { let e = !1; try { const t = Object.defineProperty({}, 'passive', { get() { e = !0; } }); window.addEventListener('e', null, t); } catch (a) {} return e; }()); const la = !!da && { passive: !0 }; function ua(e, t, a) { e.addEventListener(t, a, la); } function _a(e, t, a) { e.removeEventListener(t, a, la); } function ca(e, t, a, n, r) {
        return {
          type: e, chart: t, native: r || null, x: void 0 !== a ? a : null, y: void 0 !== n ? n : null,
        };
      } function ma(e, t) { const a = ia[e.type] || e.type; const n = le.getRelativePosition(e, t); return ca(a, t, n.x, n.y, e); } function ha(e, t) { let a = !1; let n = []; return function () { n = Array.prototype.slice.call(arguments), t = t || this, a || (a = !0, le.requestAnimFrame.call(window, (() => { a = !1, e.apply(t, n); }))); }; } function fa(e) { const t = document.createElement('div'); return t.className = e || '', t; } function Ma(e) { const t = 1e6; const a = fa(ta); const n = fa(`${ta}-expand`); const r = fa(`${ta}-shrink`); n.appendChild(fa()), r.appendChild(fa()), a.appendChild(n), a.appendChild(r), a._reset = function () { n.scrollLeft = t, n.scrollTop = t, r.scrollLeft = t, r.scrollTop = t; }; const i = function () { a._reset(), e(); }; return ua(n, 'scroll', i.bind(n, 'expand')), ua(r, 'scroll', i.bind(r, 'shrink')), a; } function pa(e, t) { const a = e[Xt] || (e[Xt] = {}); const n = a.renderProxy = function (e) { e.animationName === na && t(); }; le.each(ra, ((t) => { ua(e, t, n); })), a.reflow = !!e.offsetParent, e.classList.add(aa); } function ga(e) { const t = e[Xt] || {}; const a = t.renderProxy; a && (le.each(ra, ((t) => { _a(e, t, a); })), delete t.renderProxy), e.classList.remove(aa); } function ya(e, t, a) { const n = e[Xt] || (e[Xt] = {}); const r = n.resizer = Ma(ha((() => { if (n.resizer) { const r = a.options.maintainAspectRatio && e.parentNode; const i = r ? r.clientWidth : 0; t(ca('resize', a)), r && r.clientWidth < i && a.canvas && t(ca('resize', a)); } }))); pa(e, (() => { if (n.resizer) { const t = e.parentNode; t && t !== r.parentNode && t.insertBefore(r, t.firstChild), r._reset(); } })); } function La(e) { const t = e[Xt] || {}; const a = t.resizer; delete t.resizer, ga(e), a && a.parentNode && a.parentNode.removeChild(a); } function va(e, t) { const a = e[Xt] || (e[Xt] = {}); if (!a.containsStyles) { a.containsStyles = !0, t = `/* Chart.js */\n${t}`; const n = document.createElement('style'); n.setAttribute('type', 'text/css'), n.appendChild(document.createTextNode(t)), e.appendChild(n); } } const Ya = {
        disableCSSInjection: !1, _enabled: typeof window !== 'undefined' && typeof document !== 'undefined', _ensureLoaded(e) { if (!this.disableCSSInjection) { const t = e.getRootNode ? e.getRootNode() : document; const a = t.host ? t : document.head; va(a, Qt); } }, acquireContext(e, t) { typeof e === 'string' ? e = document.getElementById(e) : e.length && (e = e[0]), e && e.canvas && (e = e.canvas); const a = e && e.getContext && e.getContext('2d'); return a && a.canvas === e ? (this._ensureLoaded(e), oa(e, t), a) : null; }, releaseContext(e) { const t = e.canvas; if (t[Xt]) { const a = t[Xt].initial; ['height', 'width'].forEach(((e) => { const n = a[e]; le.isNullOrUndef(n) ? t.removeAttribute(e) : t.setAttribute(e, n); })), le.each(a.style || {}, ((e, a) => { t.style[a] = e; })), t.width = t.width, delete t[Xt]; } }, addEventListener(e, t, a) { const n = e.canvas; if (t !== 'resize') { const r = a[Xt] || (a[Xt] = {}); const i = r.proxies || (r.proxies = {}); const s = i[`${e.id}_${t}`] = function (t) { a(ma(t, e)); }; ua(n, t, s); } else ya(n, a, e); }, removeEventListener(e, t, a) { const n = e.canvas; if (t !== 'resize') { const r = a[Xt] || {}; const i = r.proxies || {}; const s = i[`${e.id}_${t}`]; s && _a(n, t, s); } else La(n); },
      }; le.addEvent = ua, le.removeEvent = _a; const ba = Ya._enabled ? Ya : $t; const ka = le.extend({
        initialize() {}, acquireContext() {}, releaseContext() {}, addEventListener() {}, removeEventListener() {},
      }, ba); Z._set('global', { plugins: {} }); const Da = {
        _plugins: [], _cacheId: 0, register(e) { const t = this._plugins; [].concat(e).forEach(((e) => { t.indexOf(e) === -1 && t.push(e); })), this._cacheId++; }, unregister(e) { const t = this._plugins; [].concat(e).forEach(((e) => { const a = t.indexOf(e); a !== -1 && t.splice(a, 1); })), this._cacheId++; }, clear() { this._plugins = [], this._cacheId++; }, count() { return this._plugins.length; }, getAll() { return this._plugins; }, notify(e, t, a) { let n; let r; let i; let s; let o; const d = this.descriptors(e); const l = d.length; for (n = 0; n < l; ++n) if (r = d[n], i = r.plugin, o = i[t], typeof o === 'function' && (s = [e].concat(a || []), s.push(r.options), !1 === o.apply(i, s))) return !1; return !0; }, descriptors(e) { const t = e.$plugins || (e.$plugins = {}); if (t.id === this._cacheId) return t.descriptors; const a = []; const n = []; const r = e && e.config || {}; const i = r.options && r.options.plugins || {}; return this._plugins.concat(r.plugins || []).forEach(((e) => { const t = a.indexOf(e); if (t === -1) { const r = e.id; let s = i[r]; !1 !== s && (!0 === s && (s = le.clone(Z.global.plugins[r])), a.push(e), n.push({ plugin: e, options: s || {} })); } })), t.descriptors = n, t.id = this._cacheId, n; }, _invalidate(e) { delete e.$plugins; },
      }; const wa = {
        constructors: {}, defaults: {}, registerScaleType(e, t, a) { this.constructors[e] = t, this.defaults[e] = le.clone(a); }, getScaleConstructor(e) { return this.constructors.hasOwnProperty(e) ? this.constructors[e] : void 0; }, getScaleDefaults(e) { return this.defaults.hasOwnProperty(e) ? le.merge({}, [Z.scale, this.defaults[e]]) : {}; }, updateScaleDefaults(e, t) { const a = this; a.defaults.hasOwnProperty(e) && (a.defaults[e] = le.extend(a.defaults[e], t)); }, addScalesToLayout(e) { le.each(e.scales, ((t) => { t.fullWidth = t.options.fullWidth, t.position = t.options.position, t.weight = t.options.weight, qt.addBox(e, t); })); },
      }; const Ta = le.valueOrDefault; const xa = le.rtl.getRtlAdapter; Z._set('global', {
        tooltips: {
          enabled: !0,
          custom: null,
          mode: 'nearest',
          position: 'average',
          intersect: !0,
          backgroundColor: 'rgba(0,0,0,0.8)',
          titleFontStyle: 'bold',
          titleSpacing: 2,
          titleMarginBottom: 6,
          titleFontColor: '#fff',
          titleAlign: 'left',
          bodySpacing: 2,
          bodyFontColor: '#fff',
          bodyAlign: 'left',
          footerFontStyle: 'bold',
          footerSpacing: 2,
          footerMarginTop: 6,
          footerFontColor: '#fff',
          footerAlign: 'left',
          yPadding: 6,
          xPadding: 6,
          caretPadding: 2,
          caretSize: 5,
          cornerRadius: 6,
          multiKeyBackground: '#fff',
          displayColors: !0,
          borderColor: 'rgba(0,0,0,0)',
          borderWidth: 0,
          callbacks: {
            beforeTitle: le.noop, title(e, t) { let a = ''; const n = t.labels; const r = n ? n.length : 0; if (e.length > 0) { const i = e[0]; i.label ? a = i.label : i.xLabel ? a = i.xLabel : r > 0 && i.index < r && (a = n[i.index]); } return a; }, afterTitle: le.noop, beforeBody: le.noop, beforeLabel: le.noop, label(e, t) { let a = t.datasets[e.datasetIndex].label || ''; return a && (a += ': '), le.isNullOrUndef(e.value) ? a += e.yLabel : a += e.value, a; }, labelColor(e, t) { const a = t.getDatasetMeta(e.datasetIndex); const n = a.data[e.index]; const r = n._view; return { borderColor: r.borderColor, backgroundColor: r.backgroundColor }; }, labelTextColor() { return this._options.bodyFontColor; }, afterLabel: le.noop, afterBody: le.noop, beforeFooter: le.noop, footer: le.noop, afterFooter: le.noop,
          },
        },
      }); const Sa = { average(e) { if (!e.length) return !1; let t; let a; let n = 0; let r = 0; let i = 0; for (t = 0, a = e.length; t < a; ++t) { const s = e[t]; if (s && s.hasValue()) { const o = s.tooltipPosition(); n += o.x, r += o.y, ++i; } } return { x: n / i, y: r / i }; }, nearest(e, t) { let a; let n; let r; let i = t.x; let s = t.y; let o = Number.POSITIVE_INFINITY; for (a = 0, n = e.length; a < n; ++a) { const d = e[a]; if (d && d.hasValue()) { const l = d.getCenterPoint(); const u = le.distanceBetweenPoints(t, l); u < o && (o = u, r = d); } } if (r) { const _ = r.tooltipPosition(); i = _.x, s = _.y; } return { x: i, y: s }; } }; function Ha(e, t) { return t && (le.isArray(t) ? Array.prototype.push.apply(e, t) : e.push(t)), e; } function ja(e) { return (typeof e === 'string' || e instanceof String) && e.indexOf('\n') > -1 ? e.split('\n') : e; } function Pa(e) {
        const t = e._xScale; const a = e._yScale || e._scale; const n = e._index; const r = e._datasetIndex; const i = e._chart.getDatasetMeta(r).controller; const s = i._getIndexScale(); const o = i._getValueScale(); return {
          xLabel: t ? t.getLabelForIndex(n, r) : '', yLabel: a ? a.getLabelForIndex(n, r) : '', label: s ? `${s.getLabelForIndex(n, r)}` : '', value: o ? `${o.getLabelForIndex(n, r)}` : '', index: n, datasetIndex: r, x: e._model.x, y: e._model.y,
        };
      } function Oa(e) {
        const t = Z.global; return {
          xPadding: e.xPadding, yPadding: e.yPadding, xAlign: e.xAlign, yAlign: e.yAlign, rtl: e.rtl, textDirection: e.textDirection, bodyFontColor: e.bodyFontColor, _bodyFontFamily: Ta(e.bodyFontFamily, t.defaultFontFamily), _bodyFontStyle: Ta(e.bodyFontStyle, t.defaultFontStyle), _bodyAlign: e.bodyAlign, bodyFontSize: Ta(e.bodyFontSize, t.defaultFontSize), bodySpacing: e.bodySpacing, titleFontColor: e.titleFontColor, _titleFontFamily: Ta(e.titleFontFamily, t.defaultFontFamily), _titleFontStyle: Ta(e.titleFontStyle, t.defaultFontStyle), titleFontSize: Ta(e.titleFontSize, t.defaultFontSize), _titleAlign: e.titleAlign, titleSpacing: e.titleSpacing, titleMarginBottom: e.titleMarginBottom, footerFontColor: e.footerFontColor, _footerFontFamily: Ta(e.footerFontFamily, t.defaultFontFamily), _footerFontStyle: Ta(e.footerFontStyle, t.defaultFontStyle), footerFontSize: Ta(e.footerFontSize, t.defaultFontSize), _footerAlign: e.footerAlign, footerSpacing: e.footerSpacing, footerMarginTop: e.footerMarginTop, caretSize: e.caretSize, cornerRadius: e.cornerRadius, backgroundColor: e.backgroundColor, opacity: 0, legendColorBackground: e.multiKeyBackground, displayColors: e.displayColors, borderColor: e.borderColor, borderWidth: e.borderWidth,
        };
      } function Aa(e, t) { const a = e._chart.ctx; let n = 2 * t.yPadding; let r = 0; const i = t.body; let s = i.reduce(((e, t) => e + t.before.length + t.lines.length + t.after.length), 0); s += t.beforeBody.length + t.afterBody.length; const o = t.title.length; const d = t.footer.length; const l = t.titleFontSize; const u = t.bodyFontSize; const _ = t.footerFontSize; n += o * l, n += o ? (o - 1) * t.titleSpacing : 0, n += o ? t.titleMarginBottom : 0, n += s * u, n += s ? (s - 1) * t.bodySpacing : 0, n += d ? t.footerMarginTop : 0, n += d * _, n += d ? (d - 1) * t.footerSpacing : 0; let c = 0; const m = function (e) { r = Math.max(r, a.measureText(e).width + c); }; return a.font = le.fontString(l, t._titleFontStyle, t._titleFontFamily), le.each(t.title, m), a.font = le.fontString(u, t._bodyFontStyle, t._bodyFontFamily), le.each(t.beforeBody.concat(t.afterBody), m), c = t.displayColors ? u + 2 : 0, le.each(i, ((e) => { le.each(e.before, m), le.each(e.lines, m), le.each(e.after, m); })), c = 0, a.font = le.fontString(_, t._footerFontStyle, t._footerFontFamily), le.each(t.footer, m), r += 2 * t.xPadding, { width: r, height: n }; } function Fa(e, t) { let a; let n; let r; let i; let s; const o = e._model; const d = e._chart; const l = e._chart.chartArea; let u = 'center'; let _ = 'center'; o.y < t.height ? _ = 'top' : o.y > d.height - t.height && (_ = 'bottom'); const c = (l.left + l.right) / 2; const m = (l.top + l.bottom) / 2; _ === 'center' ? (a = function (e) { return e <= c; }, n = function (e) { return e > c; }) : (a = function (e) { return e <= t.width / 2; }, n = function (e) { return e >= d.width - t.width / 2; }), r = function (e) { return e + t.width + o.caretSize + o.caretPadding > d.width; }, i = function (e) { return e - t.width - o.caretSize - o.caretPadding < 0; }, s = function (e) { return e <= m ? 'top' : 'bottom'; }, a(o.x) ? (u = 'left', r(o.x) && (u = 'center', _ = s(o.y))) : n(o.x) && (u = 'right', i(o.x) && (u = 'center', _ = s(o.y))); const h = e._options; return { xAlign: h.xAlign ? h.xAlign : u, yAlign: h.yAlign ? h.yAlign : _ }; } function Wa(e, t, a, n) { let r = e.x; let i = e.y; const s = e.caretSize; const o = e.caretPadding; const d = e.cornerRadius; const l = a.xAlign; const u = a.yAlign; const _ = s + o; const c = d + o; return l === 'right' ? r -= t.width : l === 'center' && (r -= t.width / 2, r + t.width > n.width && (r = n.width - t.width), r < 0 && (r = 0)), u === 'top' ? i += _ : i -= u === 'bottom' ? t.height + _ : t.height / 2, u === 'center' ? l === 'left' ? r += _ : l === 'right' && (r -= _) : l === 'left' ? r -= c : l === 'right' && (r += c), { x: r, y: i }; } function Ca(e, t) { return t === 'center' ? e.x + e.width / 2 : t === 'right' ? e.x + e.width - e.xPadding : e.x + e.xPadding; } function Ea(e) { return Ha([], ja(e)); } const za = pe.extend({
        initialize() { this._model = Oa(this._options), this._lastActive = []; },
        getTitle() { const e = this; const t = e._options; const a = t.callbacks; const n = a.beforeTitle.apply(e, arguments); const r = a.title.apply(e, arguments); const i = a.afterTitle.apply(e, arguments); let s = []; return s = Ha(s, ja(n)), s = Ha(s, ja(r)), s = Ha(s, ja(i)), s; },
        getBeforeBody() { return Ea(this._options.callbacks.beforeBody.apply(this, arguments)); },
        getBody(e, t) { const a = this; const n = a._options.callbacks; const r = []; return le.each(e, ((e) => { const i = { before: [], lines: [], after: [] }; Ha(i.before, ja(n.beforeLabel.call(a, e, t))), Ha(i.lines, n.label.call(a, e, t)), Ha(i.after, ja(n.afterLabel.call(a, e, t))), r.push(i); })), r; },
        getAfterBody() { return Ea(this._options.callbacks.afterBody.apply(this, arguments)); },
        getFooter() { const e = this; const t = e._options.callbacks; const a = t.beforeFooter.apply(e, arguments); const n = t.footer.apply(e, arguments); const r = t.afterFooter.apply(e, arguments); let i = []; return i = Ha(i, ja(a)), i = Ha(i, ja(n)), i = Ha(i, ja(r)), i; },
        update(e) { let t; let a; const n = this; const r = n._options; const i = n._model; const s = n._model = Oa(r); const o = n._active; const d = n._data; let l = { xAlign: i.xAlign, yAlign: i.yAlign }; let u = { x: i.x, y: i.y }; let _ = { width: i.width, height: i.height }; let c = { x: i.caretX, y: i.caretY }; if (o.length) { s.opacity = 1; const m = []; const h = []; c = Sa[r.position].call(n, o, n._eventPosition); let f = []; for (t = 0, a = o.length; t < a; ++t)f.push(Pa(o[t])); r.filter && (f = f.filter(((e) => r.filter(e, d)))), r.itemSort && (f = f.sort(((e, t) => r.itemSort(e, t, d)))), le.each(f, ((e) => { m.push(r.callbacks.labelColor.call(n, e, n._chart)), h.push(r.callbacks.labelTextColor.call(n, e, n._chart)); })), s.title = n.getTitle(f, d), s.beforeBody = n.getBeforeBody(f, d), s.body = n.getBody(f, d), s.afterBody = n.getAfterBody(f, d), s.footer = n.getFooter(f, d), s.x = c.x, s.y = c.y, s.caretPadding = r.caretPadding, s.labelColors = m, s.labelTextColors = h, s.dataPoints = f, _ = Aa(this, s), l = Fa(this, _), u = Wa(s, _, l, n._chart); } else s.opacity = 0; return s.xAlign = l.xAlign, s.yAlign = l.yAlign, s.x = u.x, s.y = u.y, s.width = _.width, s.height = _.height, s.caretX = c.x, s.caretY = c.y, n._model = s, e && r.custom && r.custom.call(n, s), n; },
        drawCaret(e, t) { const a = this._chart.ctx; const n = this._view; const r = this.getCaretPosition(e, t, n); a.lineTo(r.x1, r.y1), a.lineTo(r.x2, r.y2), a.lineTo(r.x3, r.y3); },
        getCaretPosition(e, t, a) {
          let n; let r; let i; let s; let o; let d; const l = a.caretSize; const u = a.cornerRadius; const _ = a.xAlign; const c = a.yAlign; const m = e.x; const h = e.y; const f = t.width; const M = t.height; if (c === 'center')o = h + M / 2, _ === 'left' ? (n = m, r = n - l, i = n, s = o + l, d = o - l) : (n = m + f, r = n + l, i = n, s = o - l, d = o + l); else if (_ === 'left' ? (r = m + u + l, n = r - l, i = r + l) : _ === 'right' ? (r = m + f - u - l, n = r - l, i = r + l) : (r = a.caretX, n = r - l, i = r + l), c === 'top')s = h, o = s - l, d = s; else { s = h + M, o = s + l, d = s; const p = i; i = n, n = p; } return {
            x1: n, x2: r, x3: i, y1: s, y2: o, y3: d,
          };
        },
        drawTitle(e, t, a) { let n; let r; let i; const s = t.title; const o = s.length; if (o) { const d = xa(t.rtl, t.x, t.width); for (e.x = Ca(t, t._titleAlign), a.textAlign = d.textAlign(t._titleAlign), a.textBaseline = 'middle', n = t.titleFontSize, r = t.titleSpacing, a.fillStyle = t.titleFontColor, a.font = le.fontString(n, t._titleFontStyle, t._titleFontFamily), i = 0; i < o; ++i)a.fillText(s[i], d.x(e.x), e.y + n / 2), e.y += n + r, i + 1 === o && (e.y += t.titleMarginBottom - r); } },
        drawBody(e, t, a) { let n; let r; let i; let s; let o; let d; let l; let u; const _ = t.bodyFontSize; const c = t.bodySpacing; const m = t._bodyAlign; const h = t.body; const f = t.displayColors; let M = 0; const p = f ? Ca(t, 'left') : 0; const g = xa(t.rtl, t.x, t.width); const y = function (t) { a.fillText(t, g.x(e.x + M), e.y + _ / 2), e.y += _ + c; }; const L = g.textAlign(m); for (a.textAlign = m, a.textBaseline = 'middle', a.font = le.fontString(_, t._bodyFontStyle, t._bodyFontFamily), e.x = Ca(t, L), a.fillStyle = t.bodyFontColor, le.each(t.beforeBody, y), M = f && L !== 'right' ? m === 'center' ? _ / 2 + 1 : _ + 2 : 0, o = 0, l = h.length; o < l; ++o) { for (n = h[o], r = t.labelTextColors[o], i = t.labelColors[o], a.fillStyle = r, le.each(n.before, y), s = n.lines, d = 0, u = s.length; d < u; ++d) { if (f) { const v = g.x(p); a.fillStyle = t.legendColorBackground, a.fillRect(g.leftForLtr(v, _), e.y, _, _), a.lineWidth = 1, a.strokeStyle = i.borderColor, a.strokeRect(g.leftForLtr(v, _), e.y, _, _), a.fillStyle = i.backgroundColor, a.fillRect(g.leftForLtr(g.xPlus(v, 1), _ - 2), e.y + 1, _ - 2, _ - 2), a.fillStyle = r; }y(s[d]); }le.each(n.after, y); }M = 0, le.each(t.afterBody, y), e.y -= c; },
        drawFooter(e, t, a) { let n; let r; const i = t.footer; const s = i.length; if (s) { const o = xa(t.rtl, t.x, t.width); for (e.x = Ca(t, t._footerAlign), e.y += t.footerMarginTop, a.textAlign = o.textAlign(t._footerAlign), a.textBaseline = 'middle', n = t.footerFontSize, a.fillStyle = t.footerFontColor, a.font = le.fontString(n, t._footerFontStyle, t._footerFontFamily), r = 0; r < s; ++r)a.fillText(i[r], o.x(e.x), e.y + n / 2), e.y += n + t.footerSpacing; } },
        drawBackground(e, t, a, n) { a.fillStyle = t.backgroundColor, a.strokeStyle = t.borderColor, a.lineWidth = t.borderWidth; const r = t.xAlign; const i = t.yAlign; const s = e.x; const o = e.y; const d = n.width; const l = n.height; const u = t.cornerRadius; a.beginPath(), a.moveTo(s + u, o), i === 'top' && this.drawCaret(e, n), a.lineTo(s + d - u, o), a.quadraticCurveTo(s + d, o, s + d, o + u), i === 'center' && r === 'right' && this.drawCaret(e, n), a.lineTo(s + d, o + l - u), a.quadraticCurveTo(s + d, o + l, s + d - u, o + l), i === 'bottom' && this.drawCaret(e, n), a.lineTo(s + u, o + l), a.quadraticCurveTo(s, o + l, s, o + l - u), i === 'center' && r === 'left' && this.drawCaret(e, n), a.lineTo(s, o + u), a.quadraticCurveTo(s, o, s + u, o), a.closePath(), a.fill(), t.borderWidth > 0 && a.stroke(); },
        draw() { const e = this._chart.ctx; const t = this._view; if (t.opacity !== 0) { const a = { width: t.width, height: t.height }; const n = { x: t.x, y: t.y }; const r = Math.abs(t.opacity < 0.001) ? 0 : t.opacity; const i = t.title.length || t.beforeBody.length || t.body.length || t.afterBody.length || t.footer.length; this._options.enabled && i && (e.save(), e.globalAlpha = r, this.drawBackground(n, t, e, a), n.y += t.yPadding, le.rtl.overrideTextDirection(e, t.textDirection), this.drawTitle(n, t, e), this.drawBody(n, t, e), this.drawFooter(n, t, e), le.rtl.restoreTextDirection(e, t.textDirection), e.restore()); } },
        handleEvent(e) { const t = this; const a = t._options; let n = !1; return t._lastActive = t._lastActive || [], e.type === 'mouseout' ? t._active = [] : (t._active = t._chart.getElementsAtEventForMode(e, a.mode, a), a.reverse && t._active.reverse()), n = !le.arrayEquals(t._active, t._lastActive), n && (t._lastActive = t._active, (a.enabled || a.custom) && (t._eventPosition = { x: e.x, y: e.y }, t.update(!0), t.pivot())), n; },
      }); const Ia = Sa; const Ra = za; Ra.positioners = Ia; const Na = le.valueOrDefault; function Va() { return le.merge({}, [].slice.call(arguments), { merger(e, t, a, n) { if (e === 'xAxes' || e === 'yAxes') { let r; let i; let s; const o = a[e].length; for (t[e] || (t[e] = []), r = 0; r < o; ++r)s = a[e][r], i = Na(s.type, e === 'xAxes' ? 'category' : 'linear'), r >= t[e].length && t[e].push({}), !t[e][r].type || s.type && s.type !== t[e][r].type ? le.merge(t[e][r], [wa.getScaleDefaults(i), s]) : le.merge(t[e][r], s); } else le._merger(e, t, a, n); } }); } function Ba() { return le.merge({}, [].slice.call(arguments), { merger(e, t, a, n) { const r = t[e] || {}; const i = a[e]; e === 'scales' ? t[e] = Va(r, i) : e === 'scale' ? t[e] = le.merge(r, [wa.getScaleDefaults(i.type), i]) : le._merger(e, t, a, n); } }); } function Ja(e) { e = e || {}; const t = e.data = e.data || {}; return t.datasets = t.datasets || [], t.labels = t.labels || [], e.options = Ba(Z.global, Z[e.type], e.options || {}), e; } function Ua(e) { let t = e.options; le.each(e.scales, ((t) => { qt.removeBox(e, t); })), t = Ba(Z.global, Z[e.config.type], t), e.options = e.config.options = t, e.ensureScalesHaveIDs(), e.buildOrUpdateScales(), e.tooltip._options = t.tooltips, e.tooltip.initialize(); } function Ga(e, t, a) { let n; const r = function (e) { return e.id === n; }; do { n = t + a++; } while (le.findIndex(e, r) >= 0);return n; } function qa(e) { return e === 'top' || e === 'bottom'; } function $a(e, t) { return function (a, n) { return a[e] === n[e] ? a[t] - n[t] : a[e] - n[e]; }; }Z._set('global', {
        elements: {},
        events: ['mousemove', 'mouseout', 'click', 'touchstart', 'touchmove'],
        hover: {
          onHover: null, mode: 'nearest', intersect: !0, animationDuration: 400,
        },
        onClick: null,
        maintainAspectRatio: !0,
        responsive: !0,
        responsiveAnimationDuration: 0,
      }); const Ka = function (e, t) { return this.construct(e, t), this; }; le.extend(Ka.prototype, {
        construct(e, t) { const a = this; t = Ja(t); const n = ka.acquireContext(e, t); const r = n && n.canvas; const i = r && r.height; const s = r && r.width; a.id = le.uid(), a.ctx = n, a.canvas = r, a.config = t, a.width = s, a.height = i, a.aspectRatio = i ? s / i : null, a.options = t.options, a._bufferedRender = !1, a._layers = [], a.chart = a, a.controller = a, Ka.instances[a.id] = a, Object.defineProperty(a, 'data', { get() { return a.config.data; }, set(e) { a.config.data = e; } }), n && r ? (a.initialize(), a.update()) : console.error("Failed to create chart: can't acquire context from the given item"); },
        initialize() { const e = this; return Da.notify(e, 'beforeInit'), le.retinaScale(e, e.options.devicePixelRatio), e.bindEvents(), e.options.responsive && e.resize(!0), e.initToolTip(), Da.notify(e, 'afterInit'), e; },
        clear() { return le.canvas.clear(this), this; },
        stop() { return Le.cancelAnimation(this), this; },
        resize(e) { const t = this; const a = t.options; const n = t.canvas; const r = a.maintainAspectRatio && t.aspectRatio || null; const i = Math.max(0, Math.floor(le.getMaximumWidth(n))); const s = Math.max(0, Math.floor(r ? i / r : le.getMaximumHeight(n))); if ((t.width !== i || t.height !== s) && (n.width = t.width = i, n.height = t.height = s, n.style.width = `${i}px`, n.style.height = `${s}px`, le.retinaScale(t, a.devicePixelRatio), !e)) { const o = { width: i, height: s }; Da.notify(t, 'resize', [o]), a.onResize && a.onResize(t, o), t.stop(), t.update({ duration: a.responsiveAnimationDuration }); } },
        ensureScalesHaveIDs() { const e = this.options; const t = e.scales || {}; const a = e.scale; le.each(t.xAxes, ((e, a) => { e.id || (e.id = Ga(t.xAxes, 'x-axis-', a)); })), le.each(t.yAxes, ((e, a) => { e.id || (e.id = Ga(t.yAxes, 'y-axis-', a)); })), a && (a.id = a.id || 'scale'); },
        buildOrUpdateScales() {
          const e = this; const t = e.options; const a = e.scales || {}; let n = []; const r = Object.keys(a).reduce(((e, t) => (e[t] = !1, e)), {}); t.scales && (n = n.concat((t.scales.xAxes || []).map(((e) => ({ options: e, dtype: 'category', dposition: 'bottom' }))), (t.scales.yAxes || []).map(((e) => ({ options: e, dtype: 'linear', dposition: 'left' }))))), t.scale && n.push({
            options: t.scale, dtype: 'radialLinear', isDefault: !0, dposition: 'chartArea',
          }), le.each(n, ((t) => {
            const n = t.options; const i = n.id; const s = Na(n.type, t.dtype); qa(n.position) !== qa(t.dposition) && (n.position = t.dposition), r[i] = !0; let o = null; if (i in a && a[i].type === s)o = a[i], o.options = n, o.ctx = e.ctx, o.chart = e; else {
              const d = wa.getScaleConstructor(s); if (!d) return; o = new d({
                id: i, type: s, options: n, ctx: e.ctx, chart: e,
              }), a[o.id] = o;
            }o.mergeTicksOptions(), t.isDefault && (e.scale = o);
          })), le.each(r, ((e, t) => { e || delete a[t]; })), e.scales = a, wa.addScalesToLayout(this);
        },
        buildOrUpdateControllers() { let e; let t; const a = this; const n = []; const r = a.data.datasets; for (e = 0, t = r.length; e < t; e++) { const i = r[e]; let s = a.getDatasetMeta(e); const o = i.type || a.config.type; if (s.type && s.type !== o && (a.destroyDatasetMeta(e), s = a.getDatasetMeta(e)), s.type = o, s.order = i.order || 0, s.index = e, s.controller)s.controller.updateIndex(e), s.controller.linkScales(); else { const d = xt[s.type]; if (void 0 === d) throw new Error(`"${s.type}" is not a chart type.`); s.controller = new d(a, e), n.push(s.controller); } } return n; },
        resetElements() { const e = this; le.each(e.data.datasets, ((t, a) => { e.getDatasetMeta(a).controller.reset(); }), e); },
        reset() { this.resetElements(), this.tooltip.initialize(); },
        update(e) { let t; let a; const n = this; if (e && typeof e === 'object' || (e = { duration: e, lazy: arguments[1] }), Ua(n), Da._invalidate(n), !1 !== Da.notify(n, 'beforeUpdate')) { n.tooltip._data = n.data; const r = n.buildOrUpdateControllers(); for (t = 0, a = n.data.datasets.length; t < a; t++)n.getDatasetMeta(t).controller.buildOrUpdateElements(); n.updateLayout(), n.options.animation && n.options.animation.duration && le.each(r, ((e) => { e.reset(); })), n.updateDatasets(), n.tooltip.initialize(), n.lastActive = [], Da.notify(n, 'afterUpdate'), n._layers.sort($a('z', '_idx')), n._bufferedRender ? n._bufferedRequest = { duration: e.duration, easing: e.easing, lazy: e.lazy } : n.render(e); } },
        updateLayout() { const e = this; !1 !== Da.notify(e, 'beforeLayout') && (qt.update(this, this.width, this.height), e._layers = [], le.each(e.boxes, ((t) => { t._configure && t._configure(), e._layers.push.apply(e._layers, t._layers()); }), e), e._layers.forEach(((e, t) => { e._idx = t; })), Da.notify(e, 'afterScaleUpdate'), Da.notify(e, 'afterLayout')); },
        updateDatasets() { const e = this; if (!1 !== Da.notify(e, 'beforeDatasetsUpdate')) { for (let t = 0, a = e.data.datasets.length; t < a; ++t)e.updateDataset(t); Da.notify(e, 'afterDatasetsUpdate'); } },
        updateDataset(e) { const t = this; const a = t.getDatasetMeta(e); const n = { meta: a, index: e }; !1 !== Da.notify(t, 'beforeDatasetUpdate', [n]) && (a.controller._update(), Da.notify(t, 'afterDatasetUpdate', [n])); },
        render(e) {
          const t = this; e && typeof e === 'object' || (e = { duration: e, lazy: arguments[1] }); const a = t.options.animation; const n = Na(e.duration, a && a.duration); const r = e.lazy; if (!1 !== Da.notify(t, 'beforeRender')) {
            const i = function (e) { Da.notify(t, 'afterRender'), le.callback(a && a.onComplete, [e], t); }; if (a && n) {
              const s = new ye({
                numSteps: n / 16.66, easing: e.easing || a.easing, render(e, t) { const a = le.easing.effects[t.easing]; const n = t.currentStep; const r = n / t.numSteps; e.draw(a(r), r, n); }, onAnimationProgress: a.onProgress, onAnimationComplete: i,
              }); Le.addAnimation(t, s, n, r);
            } else t.draw(), i(new ye({ numSteps: 0, chart: t })); return t;
          }
        },
        draw(e) { let t; let a; const n = this; if (n.clear(), le.isNullOrUndef(e) && (e = 1), n.transition(e), !(n.width <= 0 || n.height <= 0) && !1 !== Da.notify(n, 'beforeDraw', [e])) { for (a = n._layers, t = 0; t < a.length && a[t].z <= 0; ++t)a[t].draw(n.chartArea); for (n.drawDatasets(e); t < a.length; ++t)a[t].draw(n.chartArea); n._drawTooltip(e), Da.notify(n, 'afterDraw', [e]); } },
        transition(e) { for (var t = this, a = 0, n = (t.data.datasets || []).length; a < n; ++a)t.isDatasetVisible(a) && t.getDatasetMeta(a).controller.transition(e); t.tooltip.transition(e); },
        _getSortedDatasetMetas(e) { let t; let a; const n = this; const r = n.data.datasets || []; const i = []; for (t = 0, a = r.length; t < a; ++t)e && !n.isDatasetVisible(t) || i.push(n.getDatasetMeta(t)); return i.sort($a('order', 'index')), i; },
        _getSortedVisibleDatasetMetas() { return this._getSortedDatasetMetas(!0); },
        drawDatasets(e) { let t; let a; const n = this; if (!1 !== Da.notify(n, 'beforeDatasetsDraw', [e])) { for (t = n._getSortedVisibleDatasetMetas(), a = t.length - 1; a >= 0; --a)n.drawDataset(t[a], e); Da.notify(n, 'afterDatasetsDraw', [e]); } },
        drawDataset(e, t) { const a = this; const n = { meta: e, index: e.index, easingValue: t }; !1 !== Da.notify(a, 'beforeDatasetDraw', [n]) && (e.controller.draw(t), Da.notify(a, 'afterDatasetDraw', [n])); },
        _drawTooltip(e) { const t = this; const a = t.tooltip; const n = { tooltip: a, easingValue: e }; !1 !== Da.notify(t, 'beforeTooltipDraw', [n]) && (a.draw(), Da.notify(t, 'afterTooltipDraw', [n])); },
        getElementAtEvent(e) { return Ft.modes.single(this, e); },
        getElementsAtEvent(e) { return Ft.modes.label(this, e, { intersect: !0 }); },
        getElementsAtXAxis(e) { return Ft.modes['x-axis'](this, e, { intersect: !0 }); },
        getElementsAtEventForMode(e, t, a) { const n = Ft.modes[t]; return typeof n === 'function' ? n(this, e, a) : []; },
        getDatasetAtEvent(e) { return Ft.modes.dataset(this, e, { intersect: !0 }); },
        getDatasetMeta(e) {
          const t = this; const a = t.data.datasets[e]; a._meta || (a._meta = {}); let n = a._meta[t.id]; return n || (n = a._meta[t.id] = {
            type: null, data: [], dataset: null, controller: null, hidden: null, xAxisID: null, yAxisID: null, order: a.order || 0, index: e,
          }), n;
        },
        getVisibleDatasetCount() { for (var e = 0, t = 0, a = this.data.datasets.length; t < a; ++t) this.isDatasetVisible(t) && e++; return e; },
        isDatasetVisible(e) { const t = this.getDatasetMeta(e); return typeof t.hidden === 'boolean' ? !t.hidden : !this.data.datasets[e].hidden; },
        generateLegend() { return this.options.legendCallback(this); },
        destroyDatasetMeta(e) { const t = this.id; const a = this.data.datasets[e]; const n = a._meta && a._meta[t]; n && (n.controller.destroy(), delete a._meta[t]); },
        destroy() { let e; let t; const a = this; const n = a.canvas; for (a.stop(), e = 0, t = a.data.datasets.length; e < t; ++e)a.destroyDatasetMeta(e); n && (a.unbindEvents(), le.canvas.clear(a), ka.releaseContext(a.ctx), a.canvas = null, a.ctx = null), Da.notify(a, 'destroy'), delete Ka.instances[a.id]; },
        toBase64Image() { return this.canvas.toDataURL.apply(this.canvas, arguments); },
        initToolTip() {
          const e = this; e.tooltip = new Ra({
            _chart: e, _chartInstance: e, _data: e.data, _options: e.options.tooltips,
          }, e);
        },
        bindEvents() { const e = this; const t = e._listeners = {}; let a = function () { e.eventHandler.apply(e, arguments); }; le.each(e.options.events, ((n) => { ka.addEventListener(e, n, a), t[n] = a; })), e.options.responsive && (a = function () { e.resize(); }, ka.addEventListener(e, 'resize', a), t.resize = a); },
        unbindEvents() { const e = this; const t = e._listeners; t && (delete e._listeners, le.each(t, ((t, a) => { ka.removeEventListener(e, a, t); }))); },
        updateHoverStyle(e, t, a) { let n; let r; let i; const s = a ? 'set' : 'remove'; for (r = 0, i = e.length; r < i; ++r)n = e[r], n && this.getDatasetMeta(n._datasetIndex).controller[`${s}HoverStyle`](n); t === 'dataset' && this.getDatasetMeta(e[0]._datasetIndex).controller[`_${s}DatasetHoverStyle`](); },
        eventHandler(e) { const t = this; const a = t.tooltip; if (!1 !== Da.notify(t, 'beforeEvent', [e])) { t._bufferedRender = !0, t._bufferedRequest = null; let n = t.handleEvent(e); a && (n = a._start ? a.handleEvent(e) : n | a.handleEvent(e)), Da.notify(t, 'afterEvent', [e]); const r = t._bufferedRequest; return r ? t.render(r) : n && !t.animating && (t.stop(), t.render({ duration: t.options.hover.animationDuration, lazy: !0 })), t._bufferedRender = !1, t._bufferedRequest = null, t; } },
        handleEvent(e) { const t = this; const a = t.options || {}; const n = a.hover; let r = !1; return t.lastActive = t.lastActive || [], e.type === 'mouseout' ? t.active = [] : t.active = t.getElementsAtEventForMode(e, n.mode, n), le.callback(a.onHover || a.hover.onHover, [e.native, t.active], t), e.type !== 'mouseup' && e.type !== 'click' || a.onClick && a.onClick.call(t, e.native, t.active), t.lastActive.length && t.updateHoverStyle(t.lastActive, n.mode, !1), t.active.length && n.mode && t.updateHoverStyle(t.active, n.mode, !0), r = !le.arrayEquals(t.active, t.lastActive), t.lastActive = t.active, r; },
      }), Ka.instances = {}; const Za = Ka; Ka.Controller = Ka, Ka.types = {}, le.configMerge = Ba, le.scaleMerge = Va; const Qa = function () { function e(e, t, a) { let n; return typeof e === 'string' ? (n = parseInt(e, 10), e.indexOf('%') !== -1 && (n = n / 100 * t.parentNode[a])) : n = e, n; } function t(e) { return void 0 !== e && e !== null && e !== 'none'; } function a(a, n, r) { const i = document.defaultView; const s = le._getParentNode(a); const o = i.getComputedStyle(a)[n]; const d = i.getComputedStyle(s)[n]; const l = t(o); const u = t(d); const _ = Number.POSITIVE_INFINITY; return l || u ? Math.min(l ? e(o, a, r) : _, u ? e(d, s, r) : _) : 'none'; }le.where = function (e, t) { if (le.isArray(e) && Array.prototype.filter) return e.filter(t); const a = []; return le.each(e, ((e) => { t(e) && a.push(e); })), a; }, le.findIndex = Array.prototype.findIndex ? function (e, t, a) { return e.findIndex(t, a); } : function (e, t, a) { a = void 0 === a ? e : a; for (let n = 0, r = e.length; n < r; ++n) if (t.call(a, e[n], n, e)) return n; return -1; }, le.findNextWhere = function (e, t, a) { le.isNullOrUndef(a) && (a = -1); for (let n = a + 1; n < e.length; n++) { const r = e[n]; if (t(r)) return r; } }, le.findPreviousWhere = function (e, t, a) { le.isNullOrUndef(a) && (a = e.length); for (let n = a - 1; n >= 0; n--) { const r = e[n]; if (t(r)) return r; } }, le.isNumber = function (e) { return !isNaN(parseFloat(e)) && isFinite(e); }, le.almostEquals = function (e, t, a) { return Math.abs(e - t) < a; }, le.almostWhole = function (e, t) { const a = Math.round(e); return a - t <= e && a + t >= e; }, le.max = function (e) { return e.reduce(((e, t) => (isNaN(t) ? e : Math.max(e, t))), Number.NEGATIVE_INFINITY); }, le.min = function (e) { return e.reduce(((e, t) => (isNaN(t) ? e : Math.min(e, t))), Number.POSITIVE_INFINITY); }, le.sign = Math.sign ? function (e) { return Math.sign(e); } : function (e) { return e = +e, e === 0 || isNaN(e) ? e : e > 0 ? 1 : -1; }, le.toRadians = function (e) { return e * (Math.PI / 180); }, le.toDegrees = function (e) { return e * (180 / Math.PI); }, le._decimalPlaces = function (e) { if (le.isFinite(e)) { let t = 1; let a = 0; while (Math.round(e * t) / t !== e)t *= 10, a++; return a; } }, le.getAngleFromPoint = function (e, t) { const a = t.x - e.x; const n = t.y - e.y; const r = Math.sqrt(a * a + n * n); let i = Math.atan2(n, a); return i < -0.5 * Math.PI && (i += 2 * Math.PI), { angle: i, distance: r }; }, le.distanceBetweenPoints = function (e, t) { return Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2)); }, le.aliasPixel = function (e) { return e % 2 === 0 ? 0 : 0.5; }, le._alignPixel = function (e, t, a) { const n = e.currentDevicePixelRatio; const r = a / 2; return Math.round((t - r) * n) / n + r; }, le.splineCurve = function (e, t, a, n) { const r = e.skip ? t : e; const i = t; const s = a.skip ? t : a; const o = Math.sqrt(Math.pow(i.x - r.x, 2) + Math.pow(i.y - r.y, 2)); const d = Math.sqrt(Math.pow(s.x - i.x, 2) + Math.pow(s.y - i.y, 2)); let l = o / (o + d); let u = d / (o + d); l = isNaN(l) ? 0 : l, u = isNaN(u) ? 0 : u; const _ = n * l; const c = n * u; return { previous: { x: i.x - _ * (s.x - r.x), y: i.y - _ * (s.y - r.y) }, next: { x: i.x + c * (s.x - r.x), y: i.y + c * (s.y - r.y) } }; }, le.EPSILON = Number.EPSILON || 1e-14, le.splineCurveMonotone = function (e) { let t; let a; let n; let r; let i; let s; let o; let d; let l; const u = (e || []).map(((e) => ({ model: e._model, deltaK: 0, mK: 0 }))); const _ = u.length; for (t = 0; t < _; ++t) if (n = u[t], !n.model.skip) { if (a = t > 0 ? u[t - 1] : null, r = t < _ - 1 ? u[t + 1] : null, r && !r.model.skip) { const c = r.model.x - n.model.x; n.deltaK = c !== 0 ? (r.model.y - n.model.y) / c : 0; }!a || a.model.skip ? n.mK = n.deltaK : !r || r.model.skip ? n.mK = a.deltaK : this.sign(a.deltaK) !== this.sign(n.deltaK) ? n.mK = 0 : n.mK = (a.deltaK + n.deltaK) / 2; } for (t = 0; t < _ - 1; ++t)n = u[t], r = u[t + 1], n.model.skip || r.model.skip || (le.almostEquals(n.deltaK, 0, this.EPSILON) ? n.mK = r.mK = 0 : (i = n.mK / n.deltaK, s = r.mK / n.deltaK, d = Math.pow(i, 2) + Math.pow(s, 2), d <= 9 || (o = 3 / Math.sqrt(d), n.mK = i * o * n.deltaK, r.mK = s * o * n.deltaK))); for (t = 0; t < _; ++t)n = u[t], n.model.skip || (a = t > 0 ? u[t - 1] : null, r = t < _ - 1 ? u[t + 1] : null, a && !a.model.skip && (l = (n.model.x - a.model.x) / 3, n.model.controlPointPreviousX = n.model.x - l, n.model.controlPointPreviousY = n.model.y - l * n.mK), r && !r.model.skip && (l = (r.model.x - n.model.x) / 3, n.model.controlPointNextX = n.model.x + l, n.model.controlPointNextY = n.model.y + l * n.mK)); }, le.nextItem = function (e, t, a) { return a ? t >= e.length - 1 ? e[0] : e[t + 1] : t >= e.length - 1 ? e[e.length - 1] : e[t + 1]; }, le.previousItem = function (e, t, a) { return a ? t <= 0 ? e[e.length - 1] : e[t - 1] : t <= 0 ? e[0] : e[t - 1]; }, le.niceNum = function (e, t) { let a; const n = Math.floor(le.log10(e)); const r = e / Math.pow(10, n); return a = t ? r < 1.5 ? 1 : r < 3 ? 2 : r < 7 ? 5 : 10 : r <= 1 ? 1 : r <= 2 ? 2 : r <= 5 ? 5 : 10, a * Math.pow(10, n); }, le.requestAnimFrame = (function () { return typeof window === 'undefined' ? function (e) { e(); } : window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (e) { return window.setTimeout(e, 1e3 / 60); }; }()), le.getRelativePosition = function (e, t) { let a; let n; const r = e.originalEvent || e; const i = e.target || e.srcElement; const s = i.getBoundingClientRect(); const o = r.touches; o && o.length > 0 ? (a = o[0].clientX, n = o[0].clientY) : (a = r.clientX, n = r.clientY); const d = parseFloat(le.getStyle(i, 'padding-left')); const l = parseFloat(le.getStyle(i, 'padding-top')); const u = parseFloat(le.getStyle(i, 'padding-right')); const _ = parseFloat(le.getStyle(i, 'padding-bottom')); const c = s.right - s.left - d - u; const m = s.bottom - s.top - l - _; return a = Math.round((a - s.left - d) / c * i.width / t.currentDevicePixelRatio), n = Math.round((n - s.top - l) / m * i.height / t.currentDevicePixelRatio), { x: a, y: n }; }, le.getConstraintWidth = function (e) { return a(e, 'max-width', 'clientWidth'); }, le.getConstraintHeight = function (e) { return a(e, 'max-height', 'clientHeight'); }, le._calculatePadding = function (e, t, a) { return t = le.getStyle(e, t), t.indexOf('%') > -1 ? a * parseInt(t, 10) / 100 : parseInt(t, 10); }, le._getParentNode = function (e) { let t = e.parentNode; return t && t.toString() === '[object ShadowRoot]' && (t = t.host), t; }, le.getMaximumWidth = function (e) { const t = le._getParentNode(e); if (!t) return e.clientWidth; const a = t.clientWidth; const n = le._calculatePadding(t, 'padding-left', a); const r = le._calculatePadding(t, 'padding-right', a); const i = a - n - r; const s = le.getConstraintWidth(e); return isNaN(s) ? i : Math.min(i, s); }, le.getMaximumHeight = function (e) { const t = le._getParentNode(e); if (!t) return e.clientHeight; const a = t.clientHeight; const n = le._calculatePadding(t, 'padding-top', a); const r = le._calculatePadding(t, 'padding-bottom', a); const i = a - n - r; const s = le.getConstraintHeight(e); return isNaN(s) ? i : Math.min(i, s); }, le.getStyle = function (e, t) { return e.currentStyle ? e.currentStyle[t] : document.defaultView.getComputedStyle(e, null).getPropertyValue(t); }, le.retinaScale = function (e, t) { const a = e.currentDevicePixelRatio = t || typeof window !== 'undefined' && window.devicePixelRatio || 1; if (a !== 1) { const n = e.canvas; const r = e.height; const i = e.width; n.height = r * a, n.width = i * a, e.ctx.scale(a, a), n.style.height || n.style.width || (n.style.height = `${r}px`, n.style.width = `${i}px`); } }, le.fontString = function (e, t, a) { return `${t} ${e}px ${a}`; }, le.longestText = function (e, t, a, n) { n = n || {}; let r = n.data = n.data || {}; let i = n.garbageCollect = n.garbageCollect || []; n.font !== t && (r = n.data = {}, i = n.garbageCollect = [], n.font = t), e.font = t; let s; let o; let d; let l; let u; let _ = 0; const c = a.length; for (s = 0; s < c; s++) if (l = a[s], void 0 !== l && l !== null && !0 !== le.isArray(l))_ = le.measureText(e, r, i, _, l); else if (le.isArray(l)) for (o = 0, d = l.length; o < d; o++)u = l[o], void 0 === u || u === null || le.isArray(u) || (_ = le.measureText(e, r, i, _, u)); const m = i.length / 2; if (m > a.length) { for (s = 0; s < m; s++) delete r[i[s]]; i.splice(0, m); } return _; }, le.measureText = function (e, t, a, n, r) { let i = t[r]; return i || (i = t[r] = e.measureText(r).width, a.push(r)), i > n && (n = i), n; }, le.numberOfLabelLines = function (e) { let t = 1; return le.each(e, ((e) => { le.isArray(e) && e.length > t && (t = e.length); })), t; }, le.color = C ? function (e) { return e instanceof CanvasGradient && (e = Z.global.defaultColor), C(e); } : function (e) { return console.error('Color.js not found!'), e; }, le.getHoverColor = function (e) { return e instanceof CanvasPattern || e instanceof CanvasGradient ? e : le.color(e).saturate(0.5).darken(0.1).rgbString(); }; }; function Xa() { throw new Error('This method is not implemented: either no adapter can be found or an incomplete integration was provided.'); } function en(e) { this.options = e || {}; }le.extend(en.prototype, {
        formats: Xa, parse: Xa, format: Xa, add: Xa, diff: Xa, startOf: Xa, endOf: Xa, _create(e) { return e; },
      }), en.override = function (e) { le.extend(en.prototype, e); }; const tn = en; const an = { _date: tn }; const nn = { formatters: { values(e) { return le.isArray(e) ? e : `${e}`; }, linear(e, t, a) { let n = a.length > 3 ? a[2] - a[1] : a[1] - a[0]; Math.abs(n) > 1 && e !== Math.floor(e) && (n = e - Math.floor(e)); const r = le.log10(Math.abs(n)); let i = ''; if (e !== 0) { const s = Math.max(Math.abs(a[0]), Math.abs(a[a.length - 1])); if (s < 1e-4) { const o = le.log10(Math.abs(e)); let d = Math.floor(o) - Math.floor(r); d = Math.max(Math.min(d, 20), 0), i = e.toExponential(d); } else { let l = -1 * Math.floor(r); l = Math.max(Math.min(l, 20), 0), i = e.toFixed(l); } } else i = '0'; return i; }, logarithmic(e, t, a) { const n = e / Math.pow(10, Math.floor(le.log10(e))); return e === 0 ? '0' : n === 1 || n === 2 || n === 5 || t === 0 || t === a.length - 1 ? e.toExponential() : ''; } } }; const rn = le.isArray; const sn = le.isNullOrUndef; const on = le.valueOrDefault; const dn = le.valueAtIndexOrDefault; function ln(e, t) { for (var a = [], n = e.length / t, r = 0, i = e.length; r < i; r += n)a.push(e[Math.floor(r)]); return a; } function un(e, t, a) { let n; const r = e.getTicks().length; const i = Math.min(t, r - 1); let s = e.getPixelForTick(i); const o = e._startPixel; const d = e._endPixel; const l = 1e-6; if (!(a && (n = r === 1 ? Math.max(s - o, d - s) : t === 0 ? (e.getPixelForTick(1) - s) / 2 : (s - e.getPixelForTick(i - 1)) / 2, s += i < t ? n : -n, s < o - l || s > d + l))) return s; } function _n(e, t) { le.each(e, ((e) => { let a; const n = e.gc; const r = n.length / 2; if (r > t) { for (a = 0; a < r; ++a) delete e.data[n[a]]; n.splice(0, r); } })); } function cn(e, t, a, n) {
        let r; let i; let s; let o; let d; let l; let u; let _; let c; let m; let h; let f; let M; const p = a.length; const g = []; const y = []; const L = []; for (r = 0; r < p; ++r) { if (o = a[r].label, d = a[r].major ? t.major : t.minor, e.font = l = d.string, u = n[l] = n[l] || { data: {}, gc: [] }, _ = d.lineHeight, c = m = 0, sn(o) || rn(o)) { if (rn(o)) for (i = 0, s = o.length; i < s; ++i)h = o[i], sn(h) || rn(h) || (c = le.measureText(e, u.data, u.gc, c, h), m += _); } else c = le.measureText(e, u.data, u.gc, c, o), m = _; g.push(c), y.push(m), L.push(_ / 2); } function v(e) { return { width: g[e] || 0, height: y[e] || 0, offset: L[e] || 0 }; } return _n(n, p), f = g.indexOf(Math.max.apply(null, g)), M = y.indexOf(Math.max.apply(null, y)), {
          first: v(0), last: v(p - 1), widest: v(f), highest: v(M),
        };
      } function mn(e) { return e.drawTicks ? e.tickMarkLength : 0; } function hn(e) { let t; let a; return e.display ? (t = le.options._parseFont(e), a = le.options.toPadding(e.padding), t.lineHeight + a.height) : 0; } function fn(e, t) {
        return le.extend(le.options._parseFont({
          fontFamily: on(t.fontFamily, e.fontFamily), fontSize: on(t.fontSize, e.fontSize), fontStyle: on(t.fontStyle, e.fontStyle), lineHeight: on(t.lineHeight, e.lineHeight),
        }), { color: le.options.resolve([t.fontColor, e.fontColor, Z.global.defaultFontColor]) });
      } function Mn(e) { const t = fn(e, e.minor); const a = e.major.enabled ? fn(e, e.major) : t; return { minor: t, major: a }; } function pn(e) { let t; let a; let n; const r = []; for (a = 0, n = e.length; a < n; ++a)t = e[a], typeof t._index !== 'undefined' && r.push(t); return r; } function gn(e) { let t; let a; const n = e.length; if (n < 2) return !1; for (a = e[0], t = 1; t < n; ++t) if (e[t] - e[t - 1] !== a) return !1; return a; } function yn(e, t, a, n) { let r; let i; let s; let o; const d = gn(e); const l = (t.length - 1) / n; if (!d) return Math.max(l, 1); for (r = le.math._factorize(d), s = 0, o = r.length - 1; s < o; s++) if (i = r[s], i > l) return i; return Math.max(l, 1); } function Ln(e) { let t; let a; const n = []; for (t = 0, a = e.length; t < a; t++)e[t].major && n.push(t); return n; } function vn(e, t, a) { let n; let r; let i = 0; let s = t[0]; for (a = Math.ceil(a), n = 0; n < e.length; n++)r = e[n], n === s ? (r._index = n, i++, s = t[i * a]) : delete r.label; } function Yn(e, t, a, n) { let r; let i; let s; let o; const d = on(a, 0); const l = Math.min(on(n, e.length), e.length); let u = 0; t = Math.ceil(t), n && (r = n - a, t = r / Math.floor(r / t)), o = d; while (o < 0)u++, o = Math.round(d + u * t); for (i = Math.max(d, 0); i < l; i++)s = e[i], i === o ? (s._index = i, u++, o = Math.round(d + u * t)) : delete s.label; }Z._set('scale', {
        display: !0,
        position: 'left',
        offset: !1,
        gridLines: {
          display: !0, color: 'rgba(0,0,0,0.1)', lineWidth: 1, drawBorder: !0, drawOnChartArea: !0, drawTicks: !0, tickMarkLength: 10, zeroLineWidth: 1, zeroLineColor: 'rgba(0,0,0,0.25)', zeroLineBorderDash: [], zeroLineBorderDashOffset: 0, offsetGridLines: !1, borderDash: [], borderDashOffset: 0,
        },
        scaleLabel: { display: !1, labelString: '', padding: { top: 4, bottom: 4 } },
        ticks: {
          beginAtZero: !1, minRotation: 0, maxRotation: 50, mirror: !1, padding: 0, reverse: !1, display: !0, autoSkip: !0, autoSkipPadding: 0, labelOffset: 0, callback: nn.formatters.values, minor: {}, major: {},
        },
      }); const bn = pe.extend({
        zeroLineIndex: 0,
        getPadding() {
          const e = this; return {
            left: e.paddingLeft || 0, top: e.paddingTop || 0, right: e.paddingRight || 0, bottom: e.paddingBottom || 0,
          };
        },
        getTicks() { return this._ticks; },
        _getLabels() { const e = this.chart.data; return this.options.labels || (this.isHorizontal() ? e.xLabels : e.yLabels) || e.labels || []; },
        mergeTicksOptions() {},
        beforeUpdate() { le.callback(this.options.beforeUpdate, [this]); },
        update(e, t, a) {
          let n; let r; let i; let s; let o; const d = this; const l = d.options.ticks; const u = l.sampleSize; if (d.beforeUpdate(), d.maxWidth = e, d.maxHeight = t, d.margins = le.extend({
            left: 0, right: 0, top: 0, bottom: 0,
          }, a), d._ticks = null, d.ticks = null, d._labelSizes = null, d._maxLabelLines = 0, d.longestLabelWidth = 0, d.longestTextCache = d.longestTextCache || {}, d._gridLineItems = null, d._labelItems = null, d.beforeSetDimensions(), d.setDimensions(), d.afterSetDimensions(), d.beforeDataLimits(), d.determineDataLimits(), d.afterDataLimits(), d.beforeBuildTicks(), s = d.buildTicks() || [], s = d.afterBuildTicks(s) || s, (!s || !s.length) && d.ticks) for (s = [], n = 0, r = d.ticks.length; n < r; ++n)s.push({ value: d.ticks[n], major: !1 }); return d._ticks = s, o = u < s.length, i = d._convertTicksToLabels(o ? ln(s, u) : s), d._configure(), d.beforeCalculateTickRotation(), d.calculateTickRotation(), d.afterCalculateTickRotation(), d.beforeFit(), d.fit(), d.afterFit(), d._ticksToDraw = l.display && (l.autoSkip || l.source === 'auto') ? d._autoSkip(s) : s, o && (i = d._convertTicksToLabels(d._ticksToDraw)), d.ticks = i, d.afterUpdate(), d.minSize;
        },
        _configure() { let e; let t; const a = this; let n = a.options.ticks.reverse; a.isHorizontal() ? (e = a.left, t = a.right) : (e = a.top, t = a.bottom, n = !n), a._startPixel = e, a._endPixel = t, a._reversePixels = n, a._length = t - e; },
        afterUpdate() { le.callback(this.options.afterUpdate, [this]); },
        beforeSetDimensions() { le.callback(this.options.beforeSetDimensions, [this]); },
        setDimensions() { const e = this; e.isHorizontal() ? (e.width = e.maxWidth, e.left = 0, e.right = e.width) : (e.height = e.maxHeight, e.top = 0, e.bottom = e.height), e.paddingLeft = 0, e.paddingTop = 0, e.paddingRight = 0, e.paddingBottom = 0; },
        afterSetDimensions() { le.callback(this.options.afterSetDimensions, [this]); },
        beforeDataLimits() { le.callback(this.options.beforeDataLimits, [this]); },
        determineDataLimits: le.noop,
        afterDataLimits() { le.callback(this.options.afterDataLimits, [this]); },
        beforeBuildTicks() { le.callback(this.options.beforeBuildTicks, [this]); },
        buildTicks: le.noop,
        afterBuildTicks(e) { const t = this; return rn(e) && e.length ? le.callback(t.options.afterBuildTicks, [t, e]) : (t.ticks = le.callback(t.options.afterBuildTicks, [t, t.ticks]) || t.ticks, e); },
        beforeTickToLabelConversion() { le.callback(this.options.beforeTickToLabelConversion, [this]); },
        convertTicksToLabels() { const e = this; const t = e.options.ticks; e.ticks = e.ticks.map(t.userCallback || t.callback, this); },
        afterTickToLabelConversion() { le.callback(this.options.afterTickToLabelConversion, [this]); },
        beforeCalculateTickRotation() { le.callback(this.options.beforeCalculateTickRotation, [this]); },
        calculateTickRotation() { let e; let t; let a; let n; let r; let i; let s; const o = this; const d = o.options; const l = d.ticks; const u = o.getTicks().length; const _ = l.minRotation || 0; const c = l.maxRotation; let m = _; !o._isVisible() || !l.display || _ >= c || u <= 1 || !o.isHorizontal() ? o.labelRotation = _ : (e = o._getLabelSizes(), t = e.widest.width, a = e.highest.height - e.highest.offset, n = Math.min(o.maxWidth, o.chart.width - t), r = d.offset ? o.maxWidth / u : n / (u - 1), t + 6 > r && (r = n / (u - (d.offset ? 0.5 : 1)), i = o.maxHeight - mn(d.gridLines) - l.padding - hn(d.scaleLabel), s = Math.sqrt(t * t + a * a), m = le.toDegrees(Math.min(Math.asin(Math.min((e.highest.height + 6) / r, 1)), Math.asin(Math.min(i / s, 1)) - Math.asin(a / s))), m = Math.max(_, Math.min(c, m))), o.labelRotation = m); },
        afterCalculateTickRotation() { le.callback(this.options.afterCalculateTickRotation, [this]); },
        beforeFit() { le.callback(this.options.beforeFit, [this]); },
        fit() { const e = this; const t = e.minSize = { width: 0, height: 0 }; const a = e.chart; const n = e.options; const r = n.ticks; const i = n.scaleLabel; const s = n.gridLines; const o = e._isVisible(); const d = n.position === 'bottom'; const l = e.isHorizontal(); if (l ? t.width = e.maxWidth : o && (t.width = mn(s) + hn(i)), l ? o && (t.height = mn(s) + hn(i)) : t.height = e.maxHeight, r.display && o) { const u = Mn(r); const _ = e._getLabelSizes(); const c = _.first; const m = _.last; const h = _.widest; const f = _.highest; const M = 0.4 * u.minor.lineHeight; const p = r.padding; if (l) { const g = e.labelRotation !== 0; const y = le.toRadians(e.labelRotation); const L = Math.cos(y); const v = Math.sin(y); const Y = v * h.width + L * (f.height - (g ? f.offset : 0)) + (g ? 0 : M); t.height = Math.min(e.maxHeight, t.height + Y + p); let b; let k; const D = e.getPixelForTick(0) - e.left; const w = e.right - e.getPixelForTick(e.getTicks().length - 1); g ? (b = d ? L * c.width + v * c.offset : v * (c.height - c.offset), k = d ? v * (m.height - m.offset) : L * m.width + v * m.offset) : (b = c.width / 2, k = m.width / 2), e.paddingLeft = Math.max((b - D) * e.width / (e.width - D), 0) + 3, e.paddingRight = Math.max((k - w) * e.width / (e.width - w), 0) + 3; } else { const T = r.mirror ? 0 : h.width + p + M; t.width = Math.min(e.maxWidth, t.width + T), e.paddingTop = c.height / 2, e.paddingBottom = m.height / 2; } }e.handleMargins(), l ? (e.width = e._length = a.width - e.margins.left - e.margins.right, e.height = t.height) : (e.width = t.width, e.height = e._length = a.height - e.margins.top - e.margins.bottom); },
        handleMargins() { const e = this; e.margins && (e.margins.left = Math.max(e.paddingLeft, e.margins.left), e.margins.top = Math.max(e.paddingTop, e.margins.top), e.margins.right = Math.max(e.paddingRight, e.margins.right), e.margins.bottom = Math.max(e.paddingBottom, e.margins.bottom)); },
        afterFit() { le.callback(this.options.afterFit, [this]); },
        isHorizontal() { const e = this.options.position; return e === 'top' || e === 'bottom'; },
        isFullWidth() { return this.options.fullWidth; },
        getRightValue(e) { if (sn(e)) return NaN; if ((typeof e === 'number' || e instanceof Number) && !isFinite(e)) return NaN; if (e) if (this.isHorizontal()) { if (void 0 !== e.x) return this.getRightValue(e.x); } else if (void 0 !== e.y) return this.getRightValue(e.y); return e; },
        _convertTicksToLabels(e) { let t; let a; let n; const r = this; for (r.ticks = e.map(((e) => e.value)), r.beforeTickToLabelConversion(), t = r.convertTicksToLabels(e) || r.ticks, r.afterTickToLabelConversion(), a = 0, n = e.length; a < n; ++a)e[a].label = t[a]; return t; },
        _getLabelSizes() { const e = this; let t = e._labelSizes; return t || (e._labelSizes = t = cn(e.ctx, Mn(e.options.ticks), e.getTicks(), e.longestTextCache), e.longestLabelWidth = t.widest.width), t; },
        _parseValue(e) {
          let t; let a; let n; let r; return rn(e) ? (t = +this.getRightValue(e[0]), a = +this.getRightValue(e[1]), n = Math.min(t, a), r = Math.max(t, a)) : (e = +this.getRightValue(e), t = void 0, a = e, n = e, r = e), {
            min: n, max: r, start: t, end: a,
          };
        },
        _getScaleLabel(e) { const t = this._parseValue(e); return void 0 !== t.start ? `[${t.start}, ${t.end}]` : +this.getRightValue(e); },
        getLabelForIndex: le.noop,
        getPixelForValue: le.noop,
        getValueForPixel: le.noop,
        getPixelForTick(e) { const t = this; const a = t.options.offset; const n = t._ticks.length; const r = 1 / Math.max(n - (a ? 0 : 1), 1); return e < 0 || e > n - 1 ? null : t.getPixelForDecimal(e * r + (a ? r / 2 : 0)); },
        getPixelForDecimal(e) { const t = this; return t._reversePixels && (e = 1 - e), t._startPixel + e * t._length; },
        getDecimalForPixel(e) { const t = (e - this._startPixel) / this._length; return this._reversePixels ? 1 - t : t; },
        getBasePixel() { return this.getPixelForValue(this.getBaseValue()); },
        getBaseValue() { const e = this; const t = e.min; const a = e.max; return e.beginAtZero ? 0 : t < 0 && a < 0 ? a : t > 0 && a > 0 ? t : 0; },
        _autoSkip(e) { let t; let a; let n; let r; const i = this; const s = i.options.ticks; const o = i._length; const d = s.maxTicksLimit || o / i._tickSize() + 1; const l = s.major.enabled ? Ln(e) : []; const u = l.length; const _ = l[0]; const c = l[u - 1]; if (u > d) return vn(e, l, u / d), pn(e); if (n = yn(l, e, o, d), u > 0) { for (t = 0, a = u - 1; t < a; t++)Yn(e, n, l[t], l[t + 1]); return r = u > 1 ? (c - _) / (u - 1) : null, Yn(e, n, le.isNullOrUndef(r) ? 0 : _ - r, _), Yn(e, n, c, le.isNullOrUndef(r) ? e.length : c + r), pn(e); } return Yn(e, n), pn(e); },
        _tickSize() { const e = this; const t = e.options.ticks; const a = le.toRadians(e.labelRotation); const n = Math.abs(Math.cos(a)); const r = Math.abs(Math.sin(a)); const i = e._getLabelSizes(); const s = t.autoSkipPadding || 0; const o = i ? i.widest.width + s : 0; const d = i ? i.highest.height + s : 0; return e.isHorizontal() ? d * n > o * r ? o / n : d / r : d * r < o * n ? d / n : o / r; },
        _isVisible() { let e; let t; let a; const n = this; const r = n.chart; const i = n.options.display; if (i !== 'auto') return !!i; for (e = 0, t = r.data.datasets.length; e < t; ++e) if (r.isDatasetVisible(e) && (a = r.getDatasetMeta(e), a.xAxisID === n.id || a.yAxisID === n.id)) return !0; return !1; },
        _computeGridLineItems(e) {
          let t; let a; let n; let r; let i; let s; let o; let d; let l; let u; let _; let c; let m; let h; let f; let M; let p; const g = this; const y = g.chart; const L = g.options; const v = L.gridLines; const Y = L.position; const b = v.offsetGridLines; const k = g.isHorizontal(); const D = g._ticksToDraw; const w = D.length + (b ? 1 : 0); const T = mn(v); const x = []; const S = v.drawBorder ? dn(v.lineWidth, 0, 0) : 0; const H = S / 2; const j = le._alignPixel; const P = function (e) { return j(y, e, S); }; for (Y === 'top' ? (t = P(g.bottom), o = g.bottom - T, l = t - H, _ = P(e.top) + H, m = e.bottom) : Y === 'bottom' ? (t = P(g.top), _ = e.top, m = P(e.bottom) - H, o = t + H, l = g.top + T) : Y === 'left' ? (t = P(g.right), s = g.right - T, d = t - H, u = P(e.left) + H, c = e.right) : (t = P(g.left), u = e.left, c = P(e.right) - H, s = t + H, d = g.left + T), a = 0; a < w; ++a) {
            n = D[a] || {}, sn(n.label) && a < D.length || (a === g.zeroLineIndex && L.offset === b ? (h = v.zeroLineWidth, f = v.zeroLineColor, M = v.zeroLineBorderDash || [], p = v.zeroLineBorderDashOffset || 0) : (h = dn(v.lineWidth, a, 1), f = dn(v.color, a, 'rgba(0,0,0,0.1)'), M = v.borderDash || [], p = v.borderDashOffset || 0), r = un(g, n._index || a, b), void 0 !== r && (i = j(y, r, h), k ? s = d = u = c = i : o = l = _ = m = i, x.push({
              tx1: s, ty1: o, tx2: d, ty2: l, x1: u, y1: _, x2: c, y2: m, width: h, color: f, borderDash: M, borderDashOffset: p,
            })));
          } return x.ticksLength = w, x.borderValue = t, x;
        },
        _computeLabelItems() {
          let e; let t; let a; let n; let r; let i; let s; let o; let d; let l; let u; let _; const c = this; const m = c.options; const h = m.ticks; const f = m.position; const M = h.mirror; const p = c.isHorizontal(); const g = c._ticksToDraw; const y = Mn(h); const L = h.padding; const v = mn(m.gridLines); const Y = -le.toRadians(c.labelRotation); const b = []; for (f === 'top' ? (i = c.bottom - v - L, s = Y ? 'left' : 'center') : f === 'bottom' ? (i = c.top + v + L, s = Y ? 'right' : 'center') : f === 'left' ? (r = c.right - (M ? 0 : v) - L, s = M ? 'left' : 'right') : (r = c.left + (M ? 0 : v) + L, s = M ? 'right' : 'left'), e = 0, t = g.length; e < t; ++e) {
            a = g[e], n = a.label, sn(n) || (o = c.getPixelForTick(a._index || e) + h.labelOffset, d = a.major ? y.major : y.minor, l = d.lineHeight, u = rn(n) ? n.length : 1, p ? (r = o, _ = f === 'top' ? ((Y ? 1 : 0.5) - u) * l : (Y ? 0 : 0.5) * l) : (i = o, _ = (1 - u) * l / 2), b.push({
              x: r, y: i, rotation: Y, label: n, font: d, textOffset: _, textAlign: s,
            }));
          } return b;
        },
        _drawGrid(e) { const t = this; const a = t.options.gridLines; if (a.display) { let n; let r; let i; let s; let o; const d = t.ctx; const l = t.chart; const u = le._alignPixel; const _ = a.drawBorder ? dn(a.lineWidth, 0, 0) : 0; const c = t._gridLineItems || (t._gridLineItems = t._computeGridLineItems(e)); for (i = 0, s = c.length; i < s; ++i)o = c[i], n = o.width, r = o.color, n && r && (d.save(), d.lineWidth = n, d.strokeStyle = r, d.setLineDash && (d.setLineDash(o.borderDash), d.lineDashOffset = o.borderDashOffset), d.beginPath(), a.drawTicks && (d.moveTo(o.tx1, o.ty1), d.lineTo(o.tx2, o.ty2)), a.drawOnChartArea && (d.moveTo(o.x1, o.y1), d.lineTo(o.x2, o.y2)), d.stroke(), d.restore()); if (_) { let m; let h; let f; let M; const p = _; const g = dn(a.lineWidth, c.ticksLength - 1, 1); const y = c.borderValue; t.isHorizontal() ? (m = u(l, t.left, p) - p / 2, h = u(l, t.right, g) + g / 2, f = M = y) : (f = u(l, t.top, p) - p / 2, M = u(l, t.bottom, g) + g / 2, m = h = y), d.lineWidth = _, d.strokeStyle = dn(a.color, 0), d.beginPath(), d.moveTo(m, f), d.lineTo(h, M), d.stroke(); } } },
        _drawLabels() { const e = this; const t = e.options.ticks; if (t.display) { let a; let n; let r; let i; let s; let o; let d; let l; const u = e.ctx; const _ = e._labelItems || (e._labelItems = e._computeLabelItems()); for (a = 0, r = _.length; a < r; ++a) { if (s = _[a], o = s.font, u.save(), u.translate(s.x, s.y), u.rotate(s.rotation), u.font = o.string, u.fillStyle = o.color, u.textBaseline = 'middle', u.textAlign = s.textAlign, d = s.label, l = s.textOffset, rn(d)) for (n = 0, i = d.length; n < i; ++n)u.fillText(`${d[n]}`, 0, l), l += o.lineHeight; else u.fillText(d, 0, l); u.restore(); } } },
        _drawTitle() { const e = this; const t = e.ctx; const a = e.options; const n = a.scaleLabel; if (n.display) { let r; let i; const s = on(n.fontColor, Z.global.defaultFontColor); const o = le.options._parseFont(n); const d = le.options.toPadding(n.padding); const l = o.lineHeight / 2; const u = a.position; let _ = 0; if (e.isHorizontal())r = e.left + e.width / 2, i = u === 'bottom' ? e.bottom - l - d.bottom : e.top + l + d.top; else { const c = u === 'left'; r = c ? e.left + l + d.top : e.right - l - d.top, i = e.top + e.height / 2, _ = c ? -0.5 * Math.PI : 0.5 * Math.PI; }t.save(), t.translate(r, i), t.rotate(_), t.textAlign = 'center', t.textBaseline = 'middle', t.fillStyle = s, t.font = o.string, t.fillText(n.labelString, 0, 0), t.restore(); } },
        draw(e) { const t = this; t._isVisible() && (t._drawGrid(e), t._drawTitle(), t._drawLabels()); },
        _layers() { const e = this; const t = e.options; const a = t.ticks && t.ticks.z || 0; const n = t.gridLines && t.gridLines.z || 0; return e._isVisible() && a !== n && e.draw === e._draw ? [{ z: n, draw() { e._drawGrid.apply(e, arguments), e._drawTitle.apply(e, arguments); } }, { z: a, draw() { e._drawLabels.apply(e, arguments); } }] : [{ z: a, draw() { e.draw.apply(e, arguments); } }]; },
        _getMatchingVisibleMetas(e) { const t = this; const a = t.isHorizontal(); return t.chart._getSortedVisibleDatasetMetas().filter(((n) => (!e || n.type === e) && (a ? n.xAxisID === t.id : n.yAxisID === t.id))); },
      }); bn.prototype._draw = bn.prototype.draw; const kn = bn; const Dn = le.isNullOrUndef; const wn = { position: 'bottom' }; const Tn = kn.extend({
        determineDataLimits() { let e; const t = this; const a = t._getLabels(); const n = t.options.ticks; const r = n.min; const i = n.max; let s = 0; let o = a.length - 1; void 0 !== r && (e = a.indexOf(r), e >= 0 && (s = e)), void 0 !== i && (e = a.indexOf(i), e >= 0 && (o = e)), t.minIndex = s, t.maxIndex = o, t.min = a[s], t.max = a[o]; }, buildTicks() { const e = this; const t = e._getLabels(); const a = e.minIndex; const n = e.maxIndex; e.ticks = a === 0 && n === t.length - 1 ? t : t.slice(a, n + 1); }, getLabelForIndex(e, t) { const a = this; const n = a.chart; return n.getDatasetMeta(t).controller._getValueScaleId() === a.id ? a.getRightValue(n.data.datasets[t].data[e]) : a._getLabels()[e]; }, _configure() { const e = this; const t = e.options.offset; const a = e.ticks; kn.prototype._configure.call(e), e.isHorizontal() || (e._reversePixels = !e._reversePixels), a && (e._startValue = e.minIndex - (t ? 0.5 : 0), e._valueRange = Math.max(a.length - (t ? 0 : 1), 1)); }, getPixelForValue(e, t, a) { let n; let r; let i; const s = this; return Dn(t) || Dn(a) || (e = s.chart.data.datasets[a].data[t]), Dn(e) || (n = s.isHorizontal() ? e.x : e.y), (void 0 !== n || void 0 !== e && isNaN(t)) && (r = s._getLabels(), e = le.valueOrDefault(n, e), i = r.indexOf(e), t = i !== -1 ? i : t, isNaN(t) && (t = e)), s.getPixelForDecimal((t - s._startValue) / s._valueRange); }, getPixelForTick(e) { const t = this.ticks; return e < 0 || e > t.length - 1 ? null : this.getPixelForValue(t[e], e + this.minIndex); }, getValueForPixel(e) { const t = this; const a = Math.round(t._startValue + t.getDecimalForPixel(e) * t._valueRange); return Math.min(Math.max(a, 0), t.ticks.length - 1); }, getBasePixel() { return this.bottom; },
      }); const xn = wn; Tn._defaults = xn; const Sn = le.noop; const Hn = le.isNullOrUndef; function jn(e, t) { let a; let n; let r; let i; const s = []; const o = 1e-14; const d = e.stepSize; const l = d || 1; const u = e.maxTicks - 1; const _ = e.min; const c = e.max; const m = e.precision; const h = t.min; const f = t.max; let M = le.niceNum((f - h) / u / l) * l; if (M < o && Hn(_) && Hn(c)) return [h, f]; i = Math.ceil(f / M) - Math.floor(h / M), i > u && (M = le.niceNum(i * M / u / l) * l), d || Hn(m) ? a = Math.pow(10, le._decimalPlaces(M)) : (a = Math.pow(10, m), M = Math.ceil(M * a) / a), n = Math.floor(h / M) * M, r = Math.ceil(f / M) * M, d && (!Hn(_) && le.almostWhole(_ / M, M / 1e3) && (n = _), !Hn(c) && le.almostWhole(c / M, M / 1e3) && (r = c)), i = (r - n) / M, i = le.almostEquals(i, Math.round(i), M / 1e3) ? Math.round(i) : Math.ceil(i), n = Math.round(n * a) / a, r = Math.round(r * a) / a, s.push(Hn(_) ? n : _); for (let p = 1; p < i; ++p)s.push(Math.round((n + p * M) * a) / a); return s.push(Hn(c) ? r : c), s; } const Pn = kn.extend({
        getRightValue(e) { return typeof e === 'string' ? +e : kn.prototype.getRightValue.call(this, e); },
        handleTickRangeOptions() { const e = this; const t = e.options; const a = t.ticks; if (a.beginAtZero) { const n = le.sign(e.min); const r = le.sign(e.max); n < 0 && r < 0 ? e.max = 0 : n > 0 && r > 0 && (e.min = 0); } const i = void 0 !== a.min || void 0 !== a.suggestedMin; const s = void 0 !== a.max || void 0 !== a.suggestedMax; void 0 !== a.min ? e.min = a.min : void 0 !== a.suggestedMin && (e.min === null ? e.min = a.suggestedMin : e.min = Math.min(e.min, a.suggestedMin)), void 0 !== a.max ? e.max = a.max : void 0 !== a.suggestedMax && (e.max === null ? e.max = a.suggestedMax : e.max = Math.max(e.max, a.suggestedMax)), i !== s && e.min >= e.max && (i ? e.max = e.min + 1 : e.min = e.max - 1), e.min === e.max && (e.max++, a.beginAtZero || e.min--); },
        getTickLimit() { let e; const t = this; const a = t.options.ticks; const n = a.stepSize; let r = a.maxTicksLimit; return n ? e = Math.ceil(t.max / n) - Math.floor(t.min / n) + 1 : (e = t._computeTickLimit(), r = r || 11), r && (e = Math.min(r, e)), e; },
        _computeTickLimit() { return Number.POSITIVE_INFINITY; },
        handleDirectionalChanges: Sn,
        buildTicks() {
          const e = this; const t = e.options; const a = t.ticks; let n = e.getTickLimit(); n = Math.max(2, n); const r = {
            maxTicks: n, min: a.min, max: a.max, precision: a.precision, stepSize: le.valueOrDefault(a.fixedStepSize, a.stepSize),
          }; const i = e.ticks = jn(r, e); e.handleDirectionalChanges(), e.max = le.max(i), e.min = le.min(i), a.reverse ? (i.reverse(), e.start = e.max, e.end = e.min) : (e.start = e.min, e.end = e.max);
        },
        convertTicksToLabels() { const e = this; e.ticksAsNumbers = e.ticks.slice(), e.zeroLineIndex = e.ticks.indexOf(0), kn.prototype.convertTicksToLabels.call(e); },
        _configure() { let e; const t = this; const a = t.getTicks(); let n = t.min; let r = t.max; kn.prototype._configure.call(t), t.options.offset && a.length && (e = (r - n) / Math.max(a.length - 1, 1) / 2, n -= e, r += e), t._startValue = n, t._endValue = r, t._valueRange = r - n; },
      }); const On = { position: 'left', ticks: { callback: nn.formatters.linear } }; const An = 0; const Fn = 1; function Wn(e, t, a) { const n = [a.type, void 0 === t && void 0 === a.stack ? a.index : '', a.stack].join('.'); return void 0 === e[n] && (e[n] = { pos: [], neg: [] }), e[n]; } function Cn(e, t, a, n) { let r; let i; const s = e.options; const o = s.stacked; const d = Wn(t, o, a); const l = d.pos; const u = d.neg; const _ = n.length; for (r = 0; r < _; ++r)i = e._parseValue(n[r]), isNaN(i.min) || isNaN(i.max) || a.data[r].hidden || (l[r] = l[r] || 0, u[r] = u[r] || 0, s.relativePoints ? l[r] = 100 : i.min < 0 || i.max < 0 ? u[r] += i.min : l[r] += i.max); } function En(e, t, a) { let n; let r; const i = a.length; for (n = 0; n < i; ++n)r = e._parseValue(a[n]), isNaN(r.min) || isNaN(r.max) || t.data[n].hidden || (e.min = Math.min(e.min, r.min), e.max = Math.max(e.max, r.max)); } const zn = Pn.extend({
        determineDataLimits() { let e; let t; let a; let n; const r = this; const i = r.options; const s = r.chart; const o = s.data.datasets; const d = r._getMatchingVisibleMetas(); let l = i.stacked; const u = {}; const _ = d.length; if (r.min = Number.POSITIVE_INFINITY, r.max = Number.NEGATIVE_INFINITY, void 0 === l) for (e = 0; !l && e < _; ++e)t = d[e], l = void 0 !== t.stack; for (e = 0; e < _; ++e)t = d[e], a = o[t.index].data, l ? Cn(r, u, t, a) : En(r, t, a); le.each(u, ((e) => { n = e.pos.concat(e.neg), r.min = Math.min(r.min, le.min(n)), r.max = Math.max(r.max, le.max(n)); })), r.min = le.isFinite(r.min) && !isNaN(r.min) ? r.min : An, r.max = le.isFinite(r.max) && !isNaN(r.max) ? r.max : Fn, r.handleTickRangeOptions(); }, _computeTickLimit() { let e; const t = this; return t.isHorizontal() ? Math.ceil(t.width / 40) : (e = le.options._parseFont(t.options.ticks), Math.ceil(t.height / e.lineHeight)); }, handleDirectionalChanges() { this.isHorizontal() || this.ticks.reverse(); }, getLabelForIndex(e, t) { return this._getScaleLabel(this.chart.data.datasets[t].data[e]); }, getPixelForValue(e) { const t = this; return t.getPixelForDecimal((+t.getRightValue(e) - t._startValue) / t._valueRange); }, getValueForPixel(e) { return this._startValue + this.getDecimalForPixel(e) * this._valueRange; }, getPixelForTick(e) { const t = this.ticksAsNumbers; return e < 0 || e > t.length - 1 ? null : this.getPixelForValue(t[e]); },
      }); const In = On; zn._defaults = In; const Rn = le.valueOrDefault; const Nn = le.math.log10; function Vn(e, t) { let a; let n; const r = []; let i = Rn(e.min, Math.pow(10, Math.floor(Nn(t.min)))); const s = Math.floor(Nn(t.max)); const o = Math.ceil(t.max / Math.pow(10, s)); i === 0 ? (a = Math.floor(Nn(t.minNotZero)), n = Math.floor(t.minNotZero / Math.pow(10, a)), r.push(i), i = n * Math.pow(10, a)) : (a = Math.floor(Nn(i)), n = Math.floor(i / Math.pow(10, a))); let d = a < 0 ? Math.pow(10, Math.abs(a)) : 1; do { r.push(i), ++n, n === 10 && (n = 1, ++a, d = a >= 0 ? 1 : d), i = Math.round(n * Math.pow(10, a) * d) / d; } while (a < s || a === s && n < o);const l = Rn(e.max, i); return r.push(l), r; } const Bn = { position: 'left', ticks: { callback: nn.formatters.logarithmic } }; function Jn(e, t) { return le.isFinite(e) && e >= 0 ? e : t; } const Un = kn.extend({
        determineDataLimits() { let e; let t; let a; let n; let r; let i; const s = this; const o = s.options; const d = s.chart; const l = d.data.datasets; const u = s.isHorizontal(); function _(e) { return u ? e.xAxisID === s.id : e.yAxisID === s.id; }s.min = Number.POSITIVE_INFINITY, s.max = Number.NEGATIVE_INFINITY, s.minNotZero = Number.POSITIVE_INFINITY; let c = o.stacked; if (void 0 === c) for (e = 0; e < l.length; e++) if (t = d.getDatasetMeta(e), d.isDatasetVisible(e) && _(t) && void 0 !== t.stack) { c = !0; break; } if (o.stacked || c) { const m = {}; for (e = 0; e < l.length; e++) { t = d.getDatasetMeta(e); const h = [t.type, void 0 === o.stacked && void 0 === t.stack ? e : '', t.stack].join('.'); if (d.isDatasetVisible(e) && _(t)) for (void 0 === m[h] && (m[h] = []), n = l[e].data, r = 0, i = n.length; r < i; r++) { const f = m[h]; a = s._parseValue(n[r]), isNaN(a.min) || isNaN(a.max) || t.data[r].hidden || a.min < 0 || a.max < 0 || (f[r] = f[r] || 0, f[r] += a.max); } }le.each(m, ((e) => { if (e.length > 0) { const t = le.min(e); const a = le.max(e); s.min = Math.min(s.min, t), s.max = Math.max(s.max, a); } })); } else for (e = 0; e < l.length; e++) if (t = d.getDatasetMeta(e), d.isDatasetVisible(e) && _(t)) for (n = l[e].data, r = 0, i = n.length; r < i; r++)a = s._parseValue(n[r]), isNaN(a.min) || isNaN(a.max) || t.data[r].hidden || a.min < 0 || a.max < 0 || (s.min = Math.min(a.min, s.min), s.max = Math.max(a.max, s.max), a.min !== 0 && (s.minNotZero = Math.min(a.min, s.minNotZero))); s.min = le.isFinite(s.min) ? s.min : null, s.max = le.isFinite(s.max) ? s.max : null, s.minNotZero = le.isFinite(s.minNotZero) ? s.minNotZero : null, this.handleTickRangeOptions(); }, handleTickRangeOptions() { const e = this; const t = e.options.ticks; const a = 1; const n = 10; e.min = Jn(t.min, e.min), e.max = Jn(t.max, e.max), e.min === e.max && (e.min !== 0 && e.min !== null ? (e.min = Math.pow(10, Math.floor(Nn(e.min)) - 1), e.max = Math.pow(10, Math.floor(Nn(e.max)) + 1)) : (e.min = a, e.max = n)), e.min === null && (e.min = Math.pow(10, Math.floor(Nn(e.max)) - 1)), e.max === null && (e.max = e.min !== 0 ? Math.pow(10, Math.floor(Nn(e.min)) + 1) : n), e.minNotZero === null && (e.min > 0 ? e.minNotZero = e.min : e.max < 1 ? e.minNotZero = Math.pow(10, Math.floor(Nn(e.max))) : e.minNotZero = a); }, buildTicks() { const e = this; const t = e.options.ticks; let a = !e.isHorizontal(); const n = { min: Jn(t.min), max: Jn(t.max) }; const r = e.ticks = Vn(n, e); e.max = le.max(r), e.min = le.min(r), t.reverse ? (a = !a, e.start = e.max, e.end = e.min) : (e.start = e.min, e.end = e.max), a && r.reverse(); }, convertTicksToLabels() { this.tickValues = this.ticks.slice(), kn.prototype.convertTicksToLabels.call(this); }, getLabelForIndex(e, t) { return this._getScaleLabel(this.chart.data.datasets[t].data[e]); }, getPixelForTick(e) { const t = this.tickValues; return e < 0 || e > t.length - 1 ? null : this.getPixelForValue(t[e]); }, _getFirstTickValue(e) { const t = Math.floor(Nn(e)); const a = Math.floor(e / Math.pow(10, t)); return a * Math.pow(10, t); }, _configure() { const e = this; let t = e.min; let a = 0; kn.prototype._configure.call(e), t === 0 && (t = e._getFirstTickValue(e.minNotZero), a = Rn(e.options.ticks.fontSize, Z.global.defaultFontSize) / e._length), e._startValue = Nn(t), e._valueOffset = a, e._valueRange = (Nn(e.max) - Nn(t)) / (1 - a); }, getPixelForValue(e) { const t = this; let a = 0; return e = +t.getRightValue(e), e > t.min && e > 0 && (a = (Nn(e) - t._startValue) / t._valueRange + t._valueOffset), t.getPixelForDecimal(a); }, getValueForPixel(e) { const t = this; const a = t.getDecimalForPixel(e); return a === 0 && t.min === 0 ? 0 : Math.pow(10, t._startValue + (a - t._valueOffset) * t._valueRange); },
      }); const Gn = Bn; Un._defaults = Gn; const qn = le.valueOrDefault; const $n = le.valueAtIndexOrDefault; const Kn = le.options.resolve; const Zn = {
        display: !0,
        animate: !0,
        position: 'chartArea',
        angleLines: {
          display: !0, color: 'rgba(0,0,0,0.1)', lineWidth: 1, borderDash: [], borderDashOffset: 0,
        },
        gridLines: { circular: !1 },
        ticks: {
          showLabelBackdrop: !0, backdropColor: 'rgba(255,255,255,0.75)', backdropPaddingY: 2, backdropPaddingX: 2, callback: nn.formatters.linear,
        },
        pointLabels: { display: !0, fontSize: 10, callback(e) { return e; } },
      }; function Qn(e) { const t = e.ticks; return t.display && e.display ? qn(t.fontSize, Z.global.defaultFontSize) + 2 * t.backdropPaddingY : 0; } function Xn(e, t, a) { return le.isArray(a) ? { w: le.longestText(e, e.font, a), h: a.length * t } : { w: e.measureText(a).width, h: t }; } function er(e, t, a, n, r) { return e === n || e === r ? { start: t - a / 2, end: t + a / 2 } : e < n || e > r ? { start: t - a, end: t } : { start: t, end: t + a }; } function tr(e) {
        let t; let a; let n; const r = le.options._parseFont(e.options.pointLabels); const i = {
          l: 0, r: e.width, t: 0, b: e.height - e.paddingTop,
        }; const s = {}; e.ctx.font = r.string, e._pointLabelSizes = []; const o = e.chart.data.labels.length; for (t = 0; t < o; t++) { n = e.getPointPosition(t, e.drawingArea + 5), a = Xn(e.ctx, r.lineHeight, e.pointLabels[t]), e._pointLabelSizes[t] = a; const d = e.getIndexAngle(t); const l = le.toDegrees(d) % 360; const u = er(l, n.x, a.w, 0, 180); const _ = er(l, n.y, a.h, 90, 270); u.start < i.l && (i.l = u.start, s.l = d), u.end > i.r && (i.r = u.end, s.r = d), _.start < i.t && (i.t = _.start, s.t = d), _.end > i.b && (i.b = _.end, s.b = d); }e.setReductions(e.drawingArea, i, s);
      } function ar(e) { return e === 0 || e === 180 ? 'center' : e < 180 ? 'left' : 'right'; } function nr(e, t, a, n) { let r; let i; let s = a.y + n / 2; if (le.isArray(t)) for (r = 0, i = t.length; r < i; ++r)e.fillText(t[r], a.x, s), s += n; else e.fillText(t, a.x, s); } function rr(e, t, a) { e === 90 || e === 270 ? a.y -= t.h / 2 : (e > 270 || e < 90) && (a.y -= t.h); } function ir(e) { const t = e.ctx; const a = e.options; const n = a.pointLabels; const r = Qn(a); const i = e.getDistanceFromCenterForValue(a.ticks.reverse ? e.min : e.max); const s = le.options._parseFont(n); t.save(), t.font = s.string, t.textBaseline = 'middle'; for (let o = e.chart.data.labels.length - 1; o >= 0; o--) { const d = o === 0 ? r / 2 : 0; const l = e.getPointPosition(o, i + d + 5); const u = $n(n.fontColor, o, Z.global.defaultFontColor); t.fillStyle = u; const _ = e.getIndexAngle(o); const c = le.toDegrees(_); t.textAlign = ar(c), rr(c, e._pointLabelSizes[o], l), nr(t, e.pointLabels[o], l, s.lineHeight); }t.restore(); } function sr(e, t, a, n) { let r; const i = e.ctx; const s = t.circular; const o = e.chart.data.labels.length; const d = $n(t.color, n - 1); const l = $n(t.lineWidth, n - 1); if ((s || o) && d && l) { if (i.save(), i.strokeStyle = d, i.lineWidth = l, i.setLineDash && (i.setLineDash(t.borderDash || []), i.lineDashOffset = t.borderDashOffset || 0), i.beginPath(), s)i.arc(e.xCenter, e.yCenter, a, 0, 2 * Math.PI); else { r = e.getPointPosition(0, a), i.moveTo(r.x, r.y); for (let u = 1; u < o; u++)r = e.getPointPosition(u, a), i.lineTo(r.x, r.y); }i.closePath(), i.stroke(), i.restore(); } } function or(e) { return le.isNumber(e) ? e : 0; } const dr = Pn.extend({
        setDimensions() { const e = this; e.width = e.maxWidth, e.height = e.maxHeight, e.paddingTop = Qn(e.options) / 2, e.xCenter = Math.floor(e.width / 2), e.yCenter = Math.floor((e.height - e.paddingTop) / 2), e.drawingArea = Math.min(e.height - e.paddingTop, e.width) / 2; }, determineDataLimits() { const e = this; const t = e.chart; let a = Number.POSITIVE_INFINITY; let n = Number.NEGATIVE_INFINITY; le.each(t.data.datasets, ((r, i) => { if (t.isDatasetVisible(i)) { const s = t.getDatasetMeta(i); le.each(r.data, ((t, r) => { const i = +e.getRightValue(t); isNaN(i) || s.data[r].hidden || (a = Math.min(i, a), n = Math.max(i, n)); })); } })), e.min = a === Number.POSITIVE_INFINITY ? 0 : a, e.max = n === Number.NEGATIVE_INFINITY ? 0 : n, e.handleTickRangeOptions(); }, _computeTickLimit() { return Math.ceil(this.drawingArea / Qn(this.options)); }, convertTicksToLabels() { const e = this; Pn.prototype.convertTicksToLabels.call(e), e.pointLabels = e.chart.data.labels.map((function () { const t = le.callback(e.options.pointLabels.callback, arguments, e); return t || t === 0 ? t : ''; })); }, getLabelForIndex(e, t) { return +this.getRightValue(this.chart.data.datasets[t].data[e]); }, fit() { const e = this; const t = e.options; t.display && t.pointLabels.display ? tr(e) : e.setCenterPoint(0, 0, 0, 0); }, setReductions(e, t, a) { const n = this; let r = t.l / Math.sin(a.l); let i = Math.max(t.r - n.width, 0) / Math.sin(a.r); let s = -t.t / Math.cos(a.t); let o = -Math.max(t.b - (n.height - n.paddingTop), 0) / Math.cos(a.b); r = or(r), i = or(i), s = or(s), o = or(o), n.drawingArea = Math.min(Math.floor(e - (r + i) / 2), Math.floor(e - (s + o) / 2)), n.setCenterPoint(r, i, s, o); }, setCenterPoint(e, t, a, n) { const r = this; const i = r.width - t - r.drawingArea; const s = e + r.drawingArea; const o = a + r.drawingArea; const d = r.height - r.paddingTop - n - r.drawingArea; r.xCenter = Math.floor((s + i) / 2 + r.left), r.yCenter = Math.floor((o + d) / 2 + r.top + r.paddingTop); }, getIndexAngle(e) { const t = this.chart; const a = 360 / t.data.labels.length; const n = t.options || {}; const r = n.startAngle || 0; const i = (e * a + r) % 360; return (i < 0 ? i + 360 : i) * Math.PI * 2 / 360; }, getDistanceFromCenterForValue(e) { const t = this; if (le.isNullOrUndef(e)) return NaN; const a = t.drawingArea / (t.max - t.min); return t.options.ticks.reverse ? (t.max - e) * a : (e - t.min) * a; }, getPointPosition(e, t) { const a = this; const n = a.getIndexAngle(e) - Math.PI / 2; return { x: Math.cos(n) * t + a.xCenter, y: Math.sin(n) * t + a.yCenter }; }, getPointPositionForValue(e, t) { return this.getPointPosition(e, this.getDistanceFromCenterForValue(t)); }, getBasePosition(e) { const t = this; const a = t.min; const n = t.max; return t.getPointPositionForValue(e || 0, t.beginAtZero ? 0 : a < 0 && n < 0 ? n : a > 0 && n > 0 ? a : 0); }, _drawGrid() { let e; let t; let a; const n = this; const r = n.ctx; const i = n.options; const s = i.gridLines; const o = i.angleLines; const d = qn(o.lineWidth, s.lineWidth); const l = qn(o.color, s.color); if (i.pointLabels.display && ir(n), s.display && le.each(n.ticks, ((e, a) => { a !== 0 && (t = n.getDistanceFromCenterForValue(n.ticksAsNumbers[a]), sr(n, s, t, a)); })), o.display && d && l) { for (r.save(), r.lineWidth = d, r.strokeStyle = l, r.setLineDash && (r.setLineDash(Kn([o.borderDash, s.borderDash, []])), r.lineDashOffset = Kn([o.borderDashOffset, s.borderDashOffset, 0])), e = n.chart.data.labels.length - 1; e >= 0; e--)t = n.getDistanceFromCenterForValue(i.ticks.reverse ? n.min : n.max), a = n.getPointPosition(e, t), r.beginPath(), r.moveTo(n.xCenter, n.yCenter), r.lineTo(a.x, a.y), r.stroke(); r.restore(); } }, _drawLabels() { const e = this; const t = e.ctx; const a = e.options; const n = a.ticks; if (n.display) { let r; let i; const s = e.getIndexAngle(0); const o = le.options._parseFont(n); const d = qn(n.fontColor, Z.global.defaultFontColor); t.save(), t.font = o.string, t.translate(e.xCenter, e.yCenter), t.rotate(s), t.textAlign = 'center', t.textBaseline = 'middle', le.each(e.ticks, ((a, s) => { (s !== 0 || n.reverse) && (r = e.getDistanceFromCenterForValue(e.ticksAsNumbers[s]), n.showLabelBackdrop && (i = t.measureText(a).width, t.fillStyle = n.backdropColor, t.fillRect(-i / 2 - n.backdropPaddingX, -r - o.size / 2 - n.backdropPaddingY, i + 2 * n.backdropPaddingX, o.size + 2 * n.backdropPaddingY)), t.fillStyle = d, t.fillText(a, 0, -r)); })), t.restore(); } }, _drawTitle: le.noop,
      }); const lr = Zn; dr._defaults = lr; const ur = le._deprecated; const _r = le.options.resolve; const cr = le.valueOrDefault; const mr = Number.MIN_SAFE_INTEGER || -9007199254740991; const hr = Number.MAX_SAFE_INTEGER || 9007199254740991; const fr = {
        millisecond: { common: !0, size: 1, steps: 1e3 }, second: { common: !0, size: 1e3, steps: 60 }, minute: { common: !0, size: 6e4, steps: 60 }, hour: { common: !0, size: 36e5, steps: 24 }, day: { common: !0, size: 864e5, steps: 30 }, week: { common: !1, size: 6048e5, steps: 4 }, month: { common: !0, size: 2628e6, steps: 12 }, quarter: { common: !1, size: 7884e6, steps: 4 }, year: { common: !0, size: 3154e7 },
      }; const Mr = Object.keys(fr); function pr(e, t) { return e - t; } function gr(e) { let t; let a; let n; const r = {}; const i = []; for (t = 0, a = e.length; t < a; ++t)n = e[t], r[n] || (r[n] = !0, i.push(n)); return i; } function yr(e) { return le.valueOrDefault(e.time.min, e.ticks.min); } function Lr(e) { return le.valueOrDefault(e.time.max, e.ticks.max); } function vr(e, t, a, n) { if (n === 'linear' || !e.length) return [{ time: t, pos: 0 }, { time: a, pos: 1 }]; let r; let i; let s; let o; let d; const l = []; const u = [t]; for (r = 0, i = e.length; r < i; ++r)o = e[r], o > t && o < a && u.push(o); for (u.push(a), r = 0, i = u.length; r < i; ++r)d = u[r + 1], s = u[r - 1], o = u[r], void 0 !== s && void 0 !== d && Math.round((d + s) / 2) === o || l.push({ time: o, pos: r / (i - 1) }); return l; } function Yr(e, t, a) { let n; let r; let i; let s = 0; let o = e.length - 1; while (s >= 0 && s <= o) { if (n = s + o >> 1, r = e[n - 1] || null, i = e[n], !r) return { lo: null, hi: i }; if (i[t] < a)s = n + 1; else { if (!(r[t] > a)) return { lo: r, hi: i }; o = n - 1; } } return { lo: i, hi: null }; } function br(e, t, a, n) { const r = Yr(e, t, a); const i = r.lo ? r.hi ? r.lo : e[e.length - 2] : e[0]; const s = r.lo ? r.hi ? r.hi : e[e.length - 1] : e[1]; const o = s[t] - i[t]; const d = o ? (a - i[t]) / o : 0; const l = (s[n] - i[n]) * d; return i[n] + l; } function kr(e, t) { const a = e._adapter; const n = e.options.time; const r = n.parser; const i = r || n.format; let s = t; return typeof r === 'function' && (s = r(s)), le.isFinite(s) || (s = typeof i === 'string' ? a.parse(s, i) : a.parse(s)), s !== null ? +s : (r || typeof i !== 'function' || (s = i(t), le.isFinite(s) || (s = a.parse(s))), s); } function Dr(e, t) { if (le.isNullOrUndef(t)) return null; const a = e.options.time; let n = kr(e, e.getRightValue(t)); return n === null || a.round && (n = +e._adapter.startOf(n, a.round)), n; } function wr(e, t, a, n) { let r; let i; let s; const o = Mr.length; for (r = Mr.indexOf(e); r < o - 1; ++r) if (i = fr[Mr[r]], s = i.steps ? i.steps : hr, i.common && Math.ceil((a - t) / (s * i.size)) <= n) return Mr[r]; return Mr[o - 1]; } function Tr(e, t, a, n, r) { let i; let s; for (i = Mr.length - 1; i >= Mr.indexOf(a); i--) if (s = Mr[i], fr[s].common && e._adapter.diff(r, n, s) >= t - 1) return s; return Mr[a ? Mr.indexOf(a) : 0]; } function xr(e) { for (let t = Mr.indexOf(e) + 1, a = Mr.length; t < a; ++t) if (fr[Mr[t]].common) return Mr[t]; } function Sr(e, t, a, n) { let r; const i = e._adapter; const s = e.options; const o = s.time; const d = o.unit || wr(o.minUnit, t, a, n); const l = _r([o.stepSize, o.unitStepSize, 1]); const u = d === 'week' && o.isoWeekday; let _ = t; const c = []; if (u && (_ = +i.startOf(_, 'isoWeek', u)), _ = +i.startOf(_, u ? 'day' : d), i.diff(a, t, d) > 1e5 * l) throw `${t} and ${a} are too far apart with stepSize of ${l} ${d}`; for (r = _; r < a; r = +i.add(r, l, d))c.push(r); return r !== a && s.bounds !== 'ticks' || c.push(r), c; } function Hr(e, t, a, n, r) { let i; let s; let o = 0; let d = 0; return r.offset && t.length && (i = br(e, 'time', t[0], 'pos'), o = t.length === 1 ? 1 - i : (br(e, 'time', t[1], 'pos') - i) / 2, s = br(e, 'time', t[t.length - 1], 'pos'), d = t.length === 1 ? s : (s - br(e, 'time', t[t.length - 2], 'pos')) / 2), { start: o, end: d, factor: 1 / (o + 1 + d) }; } function jr(e, t, a, n) { let r; let i; const s = e._adapter; const o = +s.startOf(t[0].value, n); const d = t[t.length - 1].value; for (r = o; r <= d; r = +s.add(r, 1, n))i = a[r], i >= 0 && (t[i].major = !0); return t; } function Pr(e, t, a) { let n; let r; const i = []; const s = {}; const o = t.length; for (n = 0; n < o; ++n)r = t[n], s[r] = n, i.push({ value: r, major: !1 }); return o !== 0 && a ? jr(e, i, s, a) : i; } const Or = {
        position: 'bottom',
        distribution: 'linear',
        bounds: 'data',
        adapters: {},
        time: {
          parser: !1, unit: !1, round: !1, displayFormat: !1, isoWeekday: !1, minUnit: 'millisecond', displayFormats: {},
        },
        ticks: { autoSkip: !1, source: 'auto', major: { enabled: !1 } },
      }; const Ar = kn.extend({
        initialize() { this.mergeTicksOptions(), kn.prototype.initialize.call(this); }, update() { const e = this; const t = e.options; const a = t.time || (t.time = {}); const n = e._adapter = new an._date(t.adapters.date); return ur('time scale', a.format, 'time.format', 'time.parser'), ur('time scale', a.min, 'time.min', 'ticks.min'), ur('time scale', a.max, 'time.max', 'ticks.max'), le.mergeIf(a.displayFormats, n.formats()), kn.prototype.update.apply(e, arguments); }, getRightValue(e) { return e && void 0 !== e.t && (e = e.t), kn.prototype.getRightValue.call(this, e); }, determineDataLimits() { let e; let t; let a; let n; let r; let i; let s; const o = this; const d = o.chart; const l = o._adapter; const u = o.options; const _ = u.time.unit || 'day'; let c = hr; let m = mr; let h = []; const f = []; const M = []; const p = o._getLabels(); for (e = 0, a = p.length; e < a; ++e)M.push(Dr(o, p[e])); for (e = 0, a = (d.data.datasets || []).length; e < a; ++e) if (d.isDatasetVisible(e)) if (r = d.data.datasets[e].data, le.isObject(r[0])) for (f[e] = [], t = 0, n = r.length; t < n; ++t)i = Dr(o, r[t]), h.push(i), f[e][t] = i; else f[e] = M.slice(0), s || (h = h.concat(M), s = !0); else f[e] = []; M.length && (c = Math.min(c, M[0]), m = Math.max(m, M[M.length - 1])), h.length && (h = a > 1 ? gr(h).sort(pr) : h.sort(pr), c = Math.min(c, h[0]), m = Math.max(m, h[h.length - 1])), c = Dr(o, yr(u)) || c, m = Dr(o, Lr(u)) || m, c = c === hr ? +l.startOf(Date.now(), _) : c, m = m === mr ? +l.endOf(Date.now(), _) + 1 : m, o.min = Math.min(c, m), o.max = Math.max(c + 1, m), o._table = [], o._timestamps = { data: h, datasets: f, labels: M }; }, buildTicks() { let e; let t; let a; const n = this; let r = n.min; let i = n.max; const s = n.options; const o = s.ticks; const d = s.time; let l = n._timestamps; const u = []; const _ = n.getLabelCapacity(r); const c = o.source; const m = s.distribution; for (l = c === 'data' || c === 'auto' && m === 'series' ? l.data : c === 'labels' ? l.labels : Sr(n, r, i, _), s.bounds === 'ticks' && l.length && (r = l[0], i = l[l.length - 1]), r = Dr(n, yr(s)) || r, i = Dr(n, Lr(s)) || i, e = 0, t = l.length; e < t; ++e)a = l[e], a >= r && a <= i && u.push(a); return n.min = r, n.max = i, n._unit = d.unit || (o.autoSkip ? wr(d.minUnit, n.min, n.max, _) : Tr(n, u.length, d.minUnit, n.min, n.max)), n._majorUnit = o.major.enabled && n._unit !== 'year' ? xr(n._unit) : void 0, n._table = vr(n._timestamps.data, r, i, m), n._offsets = Hr(n._table, u, r, i, s), o.reverse && u.reverse(), Pr(n, u, n._majorUnit); }, getLabelForIndex(e, t) { const a = this; const n = a._adapter; const r = a.chart.data; const i = a.options.time; let s = r.labels && e < r.labels.length ? r.labels[e] : ''; const o = r.datasets[t].data[e]; return le.isObject(o) && (s = a.getRightValue(o)), i.tooltipFormat ? n.format(kr(a, s), i.tooltipFormat) : typeof s === 'string' ? s : n.format(kr(a, s), i.displayFormats.datetime); }, tickFormatFunction(e, t, a, n) { const r = this; const i = r._adapter; const s = r.options; const o = s.time.displayFormats; const d = o[r._unit]; const l = r._majorUnit; const u = o[l]; const _ = a[t]; const c = s.ticks; const m = l && u && _ && _.major; const h = i.format(e, n || (m ? u : d)); const f = m ? c.major : c.minor; const M = _r([f.callback, f.userCallback, c.callback, c.userCallback]); return M ? M(h, t, a) : h; }, convertTicksToLabels(e) { let t; let a; const n = []; for (t = 0, a = e.length; t < a; ++t)n.push(this.tickFormatFunction(e[t].value, t, e)); return n; }, getPixelForOffset(e) { const t = this; const a = t._offsets; const n = br(t._table, 'time', e, 'pos'); return t.getPixelForDecimal((a.start + n) * a.factor); }, getPixelForValue(e, t, a) { const n = this; let r = null; if (void 0 !== t && void 0 !== a && (r = n._timestamps.datasets[a][t]), r === null && (r = Dr(n, e)), r !== null) return n.getPixelForOffset(r); }, getPixelForTick(e) { const t = this.getTicks(); return e >= 0 && e < t.length ? this.getPixelForOffset(t[e].value) : null; }, getValueForPixel(e) { const t = this; const a = t._offsets; const n = t.getDecimalForPixel(e) / a.factor - a.end; const r = br(t._table, 'pos', n, 'time'); return t._adapter._create(r); }, _getLabelSize(e) { const t = this; const a = t.options.ticks; const n = t.ctx.measureText(e).width; const r = le.toRadians(t.isHorizontal() ? a.maxRotation : a.minRotation); const i = Math.cos(r); const s = Math.sin(r); const o = cr(a.fontSize, Z.global.defaultFontSize); return { w: n * i + o * s, h: n * s + o * i }; }, getLabelWidth(e) { return this._getLabelSize(e).w; }, getLabelCapacity(e) { const t = this; const a = t.options.time; const n = a.displayFormats; const r = n[a.unit] || n.millisecond; const i = t.tickFormatFunction(e, 0, Pr(t, [e], t._majorUnit), r); const s = t._getLabelSize(i); let o = Math.floor(t.isHorizontal() ? t.width / s.w : t.height / s.h); return t.options.offset && o--, o > 0 ? o : 1; },
      }); const Fr = Or; Ar._defaults = Fr; const Wr = {
        category: Tn, linear: zn, logarithmic: Un, radialLinear: dr, time: Ar,
      }; const Cr = {
        datetime: 'MMM D, YYYY, h:mm:ss a', millisecond: 'h:mm:ss.SSS a', second: 'h:mm:ss a', minute: 'h:mm a', hour: 'hA', day: 'MMM D', week: 'll', month: 'MMM YYYY', quarter: '[Q]Q - YYYY', year: 'YYYY',
      }; an._date.override(typeof e === 'function' ? {
        _id: 'moment', formats() { return Cr; }, parse(t, a) { return typeof t === 'string' && typeof a === 'string' ? t = e(t, a) : t instanceof e || (t = e(t)), t.isValid() ? t.valueOf() : null; }, format(t, a) { return e(t).format(a); }, add(t, a, n) { return e(t).add(a, n).valueOf(); }, diff(t, a, n) { return e(t).diff(e(a), n); }, startOf(t, a, n) { return t = e(t), a === 'isoWeek' ? t.isoWeekday(n).valueOf() : t.startOf(a).valueOf(); }, endOf(t, a) { return e(t).endOf(a).valueOf(); }, _create(t) { return e(t); },
      } : {}), Z._set('global', { plugins: { filler: { propagate: !0 } } }); const Er = { dataset(e) { const t = e.fill; const a = e.chart; const n = a.getDatasetMeta(t); const r = n && a.isDatasetVisible(t); const i = r && n.dataset._children || []; const s = i.length || 0; return s ? function (e, t) { return t < s && i[t]._view || null; } : null; }, boundary(e) { const t = e.boundary; const a = t ? t.x : null; const n = t ? t.y : null; return le.isArray(t) ? function (e, a) { return t[a]; } : function (e) { return { x: a === null ? e.x : a, y: n === null ? e.y : n }; }; } }; function zr(e, t, a) { let n; const r = e._model || {}; let i = r.fill; if (void 0 === i && (i = !!r.backgroundColor), !1 === i || i === null) return !1; if (!0 === i) return 'origin'; if (n = parseFloat(i, 10), isFinite(n) && Math.floor(n) === n) return i[0] !== '-' && i[0] !== '+' || (n = t + n), !(n === t || n < 0 || n >= a) && n; switch (i) { case 'bottom': return 'start'; case 'top': return 'end'; case 'zero': return 'origin'; case 'origin': case 'start': case 'end': return i; default: return !1; } } function Ir(e) { let t; const a = e.el._model || {}; const n = e.el._scale || {}; const r = e.fill; let i = null; if (isFinite(r)) return null; if (r === 'start' ? i = void 0 === a.scaleBottom ? n.bottom : a.scaleBottom : r === 'end' ? i = void 0 === a.scaleTop ? n.top : a.scaleTop : void 0 !== a.scaleZero ? i = a.scaleZero : n.getBasePixel && (i = n.getBasePixel()), void 0 !== i && i !== null) { if (void 0 !== i.x && void 0 !== i.y) return i; if (le.isFinite(i)) return t = n.isHorizontal(), { x: t ? i : null, y: t ? null : i }; } return null; } function Rr(e) { let t; let a; let n; let r; let i; const s = e.el._scale; const o = s.options; const d = s.chart.data.labels.length; const l = e.fill; const u = []; if (!d) return null; for (t = o.ticks.reverse ? s.max : s.min, a = o.ticks.reverse ? s.min : s.max, n = s.getPointPositionForValue(0, t), r = 0; r < d; ++r)i = l === 'start' || l === 'end' ? s.getPointPositionForValue(r, l === 'start' ? t : a) : s.getBasePosition(r), o.gridLines.circular && (i.cx = n.x, i.cy = n.y, i.angle = s.getIndexAngle(r) - Math.PI / 2), u.push(i); return u; } function Nr(e) { const t = e.el._scale || {}; return t.getPointPositionForValue ? Rr(e) : Ir(e); } function Vr(e, t, a) { let n; const r = e[t]; let i = r.fill; const s = [t]; if (!a) return i; while (!1 !== i && s.indexOf(i) === -1) { if (!isFinite(i)) return i; if (n = e[i], !n) return !1; if (n.visible) return i; s.push(i), i = n.fill; } return !1; } function Br(e) { const t = e.fill; let a = 'dataset'; return !1 === t ? null : (isFinite(t) || (a = 'boundary'), Er[a](e)); } function Jr(e) { return e && !e.skip; } function Ur(e, t, a, n, r) { let i; let s; let o; let d; if (n && r) { for (e.moveTo(t[0].x, t[0].y), i = 1; i < n; ++i)le.canvas.lineTo(e, t[i - 1], t[i]); if (void 0 === a[0].angle) for (e.lineTo(a[r - 1].x, a[r - 1].y), i = r - 1; i > 0; --i)le.canvas.lineTo(e, a[i], a[i - 1], !0); else for (s = a[0].cx, o = a[0].cy, d = Math.sqrt(Math.pow(a[0].x - s, 2) + Math.pow(a[0].y - o, 2)), i = r - 1; i > 0; --i)e.arc(s, o, d, a[i].angle, a[i - 1].angle, !0); } } function Gr(e, t, a, n, r, i) { let s; let o; let d; let l; let u; let _; let c; let m; const h = t.length; const f = n.spanGaps; let M = []; let p = []; let g = 0; let y = 0; for (e.beginPath(), s = 0, o = h; s < o; ++s)d = s % h, l = t[d]._view, u = a(l, d, n), _ = Jr(l), c = Jr(u), i && void 0 === m && _ && (m = s + 1, o = h + m), _ && c ? (g = M.push(l), y = p.push(u)) : g && y && (f ? (_ && M.push(l), c && p.push(u)) : (Ur(e, M, p, g, y), g = y = 0, M = [], p = [])); Ur(e, M, p, g, y), e.closePath(), e.fillStyle = r, e.fill(); } const qr = {
        id: 'filler',
        afterDatasetsUpdate(e, t) {
          let a; let n; let r; let i; const s = (e.data.datasets || []).length; const o = t.propagate; const d = []; for (n = 0; n < s; ++n) {
            a = e.getDatasetMeta(n), r = a.dataset, i = null, r && r._model && r instanceof $e.Line && (i = {
              visible: e.isDatasetVisible(n), fill: zr(r, n, s), chart: e, el: r,
            }), a.$filler = i, d.push(i);
          } for (n = 0; n < s; ++n)i = d[n], i && (i.fill = Vr(d, n, o), i.boundary = Nr(i), i.mapper = Br(i));
        },
        beforeDatasetsDraw(e) { let t; let a; let n; let r; let i; let s; let o; const d = e._getSortedVisibleDatasetMetas(); const l = e.ctx; for (a = d.length - 1; a >= 0; --a)t = d[a].$filler, t && t.visible && (n = t.el, r = n._view, i = n._children || [], s = t.mapper, o = r.backgroundColor || Z.global.defaultColor, s && o && i.length && (le.canvas.clipArea(l, e.chartArea), Gr(l, i, s, r, o, n._loop), le.canvas.unclipArea(l))); },
      }; const $r = le.rtl.getRtlAdapter; const Kr = le.noop; const Zr = le.valueOrDefault; function Qr(e, t) { return e.usePointStyle && e.boxWidth > t ? t : e.boxWidth; }Z._set('global', {
        legend: {
          display: !0,
          position: 'top',
          align: 'center',
          fullWidth: !0,
          reverse: !1,
          weight: 1e3,
          onClick(e, t) { const a = t.datasetIndex; const n = this.chart; const r = n.getDatasetMeta(a); r.hidden = r.hidden === null ? !n.data.datasets[a].hidden : null, n.update(); },
          onHover: null,
          onLeave: null,
          labels: {
            boxWidth: 40,
            padding: 10,
            generateLabels(e) {
              const t = e.data.datasets; const a = e.options.legend || {}; const n = a.labels && a.labels.usePointStyle; return e._getSortedDatasetMetas().map(((a) => {
                const r = a.controller.getStyle(n ? 0 : void 0); return {
                  text: t[a.index].label, fillStyle: r.backgroundColor, hidden: !e.isDatasetVisible(a.index), lineCap: r.borderCapStyle, lineDash: r.borderDash, lineDashOffset: r.borderDashOffset, lineJoin: r.borderJoinStyle, lineWidth: r.borderWidth, strokeStyle: r.borderColor, pointStyle: r.pointStyle, rotation: r.rotation, datasetIndex: a.index,
                };
              }), this);
            },
          },
        },
        legendCallback(e) { let t; let a; let n; let r; const i = document.createElement('ul'); const s = e.data.datasets; for (i.setAttribute('class', `${e.id}-legend`), t = 0, a = s.length; t < a; t++)n = i.appendChild(document.createElement('li')), r = n.appendChild(document.createElement('span')), r.style.backgroundColor = s[t].backgroundColor, s[t].label && n.appendChild(document.createTextNode(s[t].label)); return i.outerHTML; },
      }); const Xr = pe.extend({
        initialize(e) { const t = this; le.extend(t, e), t.legendHitBoxes = [], t._hoveredItem = null, t.doughnutMode = !1; },
        beforeUpdate: Kr,
        update(e, t, a) { const n = this; return n.beforeUpdate(), n.maxWidth = e, n.maxHeight = t, n.margins = a, n.beforeSetDimensions(), n.setDimensions(), n.afterSetDimensions(), n.beforeBuildLabels(), n.buildLabels(), n.afterBuildLabels(), n.beforeFit(), n.fit(), n.afterFit(), n.afterUpdate(), n.minSize; },
        afterUpdate: Kr,
        beforeSetDimensions: Kr,
        setDimensions() { const e = this; e.isHorizontal() ? (e.width = e.maxWidth, e.left = 0, e.right = e.width) : (e.height = e.maxHeight, e.top = 0, e.bottom = e.height), e.paddingLeft = 0, e.paddingTop = 0, e.paddingRight = 0, e.paddingBottom = 0, e.minSize = { width: 0, height: 0 }; },
        afterSetDimensions: Kr,
        beforeBuildLabels: Kr,
        buildLabels() { const e = this; const t = e.options.labels || {}; let a = le.callback(t.generateLabels, [e.chart], e) || []; t.filter && (a = a.filter(((a) => t.filter(a, e.chart.data)))), e.options.reverse && a.reverse(), e.legendItems = a; },
        afterBuildLabels: Kr,
        beforeFit: Kr,
        fit() {
          const e = this; const t = e.options; const a = t.labels; const n = t.display; const r = e.ctx; const i = le.options._parseFont(a); const s = i.size; const o = e.legendHitBoxes = []; const d = e.minSize; const l = e.isHorizontal(); if (l ? (d.width = e.maxWidth, d.height = n ? 10 : 0) : (d.width = n ? 10 : 0, d.height = e.maxHeight), n) {
            if (r.font = i.string, l) {
              const u = e.lineWidths = [0]; let _ = 0; r.textAlign = 'left', r.textBaseline = 'middle', le.each(e.legendItems, ((e, t) => {
                const n = Qr(a, s); const i = n + s / 2 + r.measureText(e.text).width; (t === 0 || u[u.length - 1] + i + 2 * a.padding > d.width) && (_ += s + a.padding, u[u.length - (t > 0 ? 0 : 1)] = 0), o[t] = {
                  left: 0, top: 0, width: i, height: s,
                }, u[u.length - 1] += i + a.padding;
              })), d.height += _;
            } else {
              const c = a.padding; const m = e.columnWidths = []; const h = e.columnHeights = []; let f = a.padding; let M = 0; let p = 0; le.each(e.legendItems, ((e, t) => {
                const n = Qr(a, s); const i = n + s / 2 + r.measureText(e.text).width; t > 0 && p + s + 2 * c > d.height && (f += M + a.padding, m.push(M), h.push(p), M = 0, p = 0), M = Math.max(M, i), p += s + c, o[t] = {
                  left: 0, top: 0, width: i, height: s,
                };
              })), f += M, m.push(M), h.push(p), d.width += f;
            }e.width = d.width, e.height = d.height;
          } else e.width = d.width = e.height = d.height = 0;
        },
        afterFit: Kr,
        isHorizontal() { return this.options.position === 'top' || this.options.position === 'bottom'; },
        draw() { const e = this; const t = e.options; const a = t.labels; const n = Z.global; const r = n.defaultColor; const i = n.elements.line; const s = e.height; const o = e.columnHeights; const d = e.width; const l = e.lineWidths; if (t.display) { let u; const _ = $r(t.rtl, e.left, e.minSize.width); const c = e.ctx; const m = Zr(a.fontColor, n.defaultFontColor); const h = le.options._parseFont(a); const f = h.size; c.textAlign = _.textAlign('left'), c.textBaseline = 'middle', c.lineWidth = 0.5, c.strokeStyle = m, c.fillStyle = m, c.font = h.string; const M = Qr(a, f); const p = e.legendHitBoxes; const g = function (e, t, n) { if (!(isNaN(M) || M <= 0)) { c.save(); const s = Zr(n.lineWidth, i.borderWidth); if (c.fillStyle = Zr(n.fillStyle, r), c.lineCap = Zr(n.lineCap, i.borderCapStyle), c.lineDashOffset = Zr(n.lineDashOffset, i.borderDashOffset), c.lineJoin = Zr(n.lineJoin, i.borderJoinStyle), c.lineWidth = s, c.strokeStyle = Zr(n.strokeStyle, r), c.setLineDash && c.setLineDash(Zr(n.lineDash, i.borderDash)), a && a.usePointStyle) { const o = M * Math.SQRT2 / 2; const d = _.xPlus(e, M / 2); const l = t + f / 2; le.canvas.drawPoint(c, n.pointStyle, o, d, l, n.rotation); } else c.fillRect(_.leftForLtr(e, M), t, M, f), s !== 0 && c.strokeRect(_.leftForLtr(e, M), t, M, f); c.restore(); } }; const y = function (e, t, a, n) { const r = f / 2; const i = _.xPlus(e, M + r); const s = t + r; c.fillText(a.text, i, s), a.hidden && (c.beginPath(), c.lineWidth = 2, c.moveTo(i, s), c.lineTo(_.xPlus(i, n), s), c.stroke()); }; const L = function (e, n) { switch (t.align) { case 'start': return a.padding; case 'end': return e - n; default: return (e - n + a.padding) / 2; } }; const v = e.isHorizontal(); u = v ? { x: e.left + L(d, l[0]), y: e.top + a.padding, line: 0 } : { x: e.left + a.padding, y: e.top + L(s, o[0]), line: 0 }, le.rtl.overrideTextDirection(e.ctx, t.textDirection); const Y = f + a.padding; le.each(e.legendItems, ((t, n) => { const r = c.measureText(t.text).width; const i = M + f / 2 + r; let m = u.x; let h = u.y; _.setWidth(e.minSize.width), v ? n > 0 && m + i + a.padding > e.left + e.minSize.width && (h = u.y += Y, u.line++, m = u.x = e.left + L(d, l[u.line])) : n > 0 && h + Y > e.top + e.minSize.height && (m = u.x = m + e.columnWidths[u.line] + a.padding, u.line++, h = u.y = e.top + L(s, o[u.line])); const b = _.x(m); g(b, h, t), p[n].left = _.leftForLtr(b, p[n].width), p[n].top = h, y(b, h, t, r), v ? u.x += i + a.padding : u.y += Y; })), le.rtl.restoreTextDirection(e.ctx, t.textDirection); } },
        _getLegendItemAt(e, t) { let a; let n; let r; const i = this; if (e >= i.left && e <= i.right && t >= i.top && t <= i.bottom) for (r = i.legendHitBoxes, a = 0; a < r.length; ++a) if (n = r[a], e >= n.left && e <= n.left + n.width && t >= n.top && t <= n.top + n.height) return i.legendItems[a]; return null; },
        handleEvent(e) { let t; const a = this; const n = a.options; const r = e.type === 'mouseup' ? 'click' : e.type; if (r === 'mousemove') { if (!n.onHover && !n.onLeave) return; } else { if (r !== 'click') return; if (!n.onClick) return; }t = a._getLegendItemAt(e.x, e.y), r === 'click' ? t && n.onClick && n.onClick.call(a, e.native, t) : (n.onLeave && t !== a._hoveredItem && (a._hoveredItem && n.onLeave.call(a, e.native, a._hoveredItem), a._hoveredItem = t), n.onHover && t && n.onHover.call(a, e.native, t)); },
      }); function ei(e, t) { const a = new Xr({ ctx: e.ctx, options: t, chart: e }); qt.configure(e, a, t), qt.addBox(e, a), e.legend = a; } const ti = {
        id: 'legend', _element: Xr, beforeInit(e) { const t = e.options.legend; t && ei(e, t); }, beforeUpdate(e) { const t = e.options.legend; const a = e.legend; t ? (le.mergeIf(t, Z.global.legend), a ? (qt.configure(e, a, t), a.options = t) : ei(e, t)) : a && (qt.removeBox(e, a), delete e.legend); }, afterEvent(e, t) { const a = e.legend; a && a.handleEvent(t); },
      }; const ai = le.noop; Z._set('global', {
        title: {
          display: !1, fontStyle: 'bold', fullWidth: !0, padding: 10, position: 'top', text: '', weight: 2e3,
        },
      }); const ni = pe.extend({
        initialize(e) { const t = this; le.extend(t, e), t.legendHitBoxes = []; }, beforeUpdate: ai, update(e, t, a) { const n = this; return n.beforeUpdate(), n.maxWidth = e, n.maxHeight = t, n.margins = a, n.beforeSetDimensions(), n.setDimensions(), n.afterSetDimensions(), n.beforeBuildLabels(), n.buildLabels(), n.afterBuildLabels(), n.beforeFit(), n.fit(), n.afterFit(), n.afterUpdate(), n.minSize; }, afterUpdate: ai, beforeSetDimensions: ai, setDimensions() { const e = this; e.isHorizontal() ? (e.width = e.maxWidth, e.left = 0, e.right = e.width) : (e.height = e.maxHeight, e.top = 0, e.bottom = e.height), e.paddingLeft = 0, e.paddingTop = 0, e.paddingRight = 0, e.paddingBottom = 0, e.minSize = { width: 0, height: 0 }; }, afterSetDimensions: ai, beforeBuildLabels: ai, buildLabels: ai, afterBuildLabels: ai, beforeFit: ai, fit() { let e; let t; const a = this; const n = a.options; const r = a.minSize = {}; const i = a.isHorizontal(); n.display ? (e = le.isArray(n.text) ? n.text.length : 1, t = e * le.options._parseFont(n).lineHeight + 2 * n.padding, a.width = r.width = i ? a.maxWidth : t, a.height = r.height = i ? t : a.maxHeight) : a.width = r.width = a.height = r.height = 0; }, afterFit: ai, isHorizontal() { const e = this.options.position; return e === 'top' || e === 'bottom'; }, draw() { const e = this; const t = e.ctx; const a = e.options; if (a.display) { let n; let r; let i; const s = le.options._parseFont(a); const o = s.lineHeight; const d = o / 2 + a.padding; let l = 0; const u = e.top; const _ = e.left; const c = e.bottom; const m = e.right; t.fillStyle = le.valueOrDefault(a.fontColor, Z.global.defaultFontColor), t.font = s.string, e.isHorizontal() ? (r = _ + (m - _) / 2, i = u + d, n = m - _) : (r = a.position === 'left' ? _ + d : m - d, i = u + (c - u) / 2, n = c - u, l = Math.PI * (a.position === 'left' ? -0.5 : 0.5)), t.save(), t.translate(r, i), t.rotate(l), t.textAlign = 'center', t.textBaseline = 'middle'; const h = a.text; if (le.isArray(h)) for (let f = 0, M = 0; M < h.length; ++M)t.fillText(h[M], 0, f, n), f += o; else t.fillText(h, 0, 0, n); t.restore(); } },
      }); function ri(e, t) { const a = new ni({ ctx: e.ctx, options: t, chart: e }); qt.configure(e, a, t), qt.addBox(e, a), e.titleBlock = a; } const ii = {
        id: 'title', _element: ni, beforeInit(e) { const t = e.options.title; t && ri(e, t); }, beforeUpdate(e) { const t = e.options.title; const a = e.titleBlock; t ? (le.mergeIf(t, Z.global.title), a ? (qt.configure(e, a, t), a.options = t) : ri(e, t)) : a && (qt.removeBox(e, a), delete e.titleBlock); },
      }; const si = {}; const oi = qr; const di = ti; const li = ii; for (const ui in si.filler = oi, si.legend = di, si.title = li, Za.helpers = le, Qa(), Za._adapters = an, Za.Animation = ye, Za.animationService = Le, Za.controllers = xt, Za.DatasetController = we, Za.defaults = Z, Za.Element = pe, Za.elements = $e, Za.Interaction = Ft, Za.layouts = qt, Za.platform = ka, Za.plugins = Da, Za.Scale = kn, Za.scaleService = wa, Za.Ticks = nn, Za.Tooltip = Ra, Za.helpers.each(Wr, ((e, t) => { Za.scaleService.registerScaleType(t, e, e._defaults); })), si)si.hasOwnProperty(ui) && Za.plugins.register(si[ui]); Za.platform.initialize(); const _i = Za; return typeof window !== 'undefined' && (window.Chart = Za), Za.Chart = Za, Za.Legend = si.legend._element, Za.Title = si.title._element, Za.pluginService = Za.plugins, Za.PluginBase = Za.Element.extend({}), Za.canvasHelpers = Za.helpers.canvas, Za.layoutService = Za.layouts, Za.LinearScaleBase = Pn, Za.helpers.each(['Bar', 'Bubble', 'Doughnut', 'Line', 'PolarArea', 'Radar', 'Scatter'], ((e) => { Za[e] = function (t, a) { return new Za(t, Za.helpers.merge(a || {}, { type: e.charAt(0).toLowerCase() + e.slice(1) })); }; })), _i;
    })));
  },
  3886(e, t, a) {
    (function (e, t) { t(a('c1df')); }(0, ((e) => {
      const t = e.defineLocale('en-ca', {
        months: 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
        monthsShort: 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
        weekdays: 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
        weekdaysShort: 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
        weekdaysMin: 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
        longDateFormat: {
          LT: 'h:mm A', LTS: 'h:mm:ss A', L: 'YYYY-MM-DD', LL: 'MMMM D, YYYY', LLL: 'MMMM D, YYYY h:mm A', LLLL: 'dddd, MMMM D, YYYY h:mm A',
        },
        calendar: {
          sameDay: '[Today at] LT', nextDay: '[Tomorrow at] LT', nextWeek: 'dddd [at] LT', lastDay: '[Yesterday at] LT', lastWeek: '[Last] dddd [at] LT', sameElse: 'L',
        },
        relativeTime: {
          future: 'in %s', past: '%s ago', s: 'a few seconds', ss: '%d seconds', m: 'a minute', mm: '%d minutes', h: 'an hour', hh: '%d hours', d: 'a day', dd: '%d days', M: 'a month', MM: '%d months', y: 'a year', yy: '%d years',
        },
        dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
        ordinal(e) { const t = e % 10; const a = ~~(e % 100 / 10) === 1 ? 'th' : t === 1 ? 'st' : t === 2 ? 'nd' : t === 3 ? 'rd' : 'th'; return e + a; },
      }); return t;
    })));
  },
  '39a6': function (e, t, a) {
    (function (e, t) { t(a('c1df')); }(0, ((e) => {
      const t = e.defineLocale('en-gb', {
        months: 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
        monthsShort: 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
        weekdays: 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
        weekdaysShort: 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
        weekdaysMin: 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
        longDateFormat: {
          LT: 'HH:mm', LTS: 'HH:mm:ss', L: 'DD/MM/YYYY', LL: 'D MMMM YYYY', LLL: 'D MMMM YYYY HH:mm', LLLL: 'dddd, D MMMM YYYY HH:mm',
        },
        calendar: {
          sameDay: '[Today at] LT', nextDay: '[Tomorrow at] LT', nextWeek: 'dddd [at] LT', lastDay: '[Yesterday at] LT', lastWeek: '[Last] dddd [at] LT', sameElse: 'L',
        },
        relativeTime: {
          future: 'in %s', past: '%s ago', s: 'a few seconds', ss: '%d seconds', m: 'a minute', mm: '%d minutes', h: 'an hour', hh: '%d hours', d: 'a day', dd: '%d days', M: 'a month', MM: '%d months', y: 'a year', yy: '%d years',
        },
        dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
        ordinal(e) { const t = e % 10; const a = ~~(e % 100 / 10) === 1 ? 'th' : t === 1 ? 'st' : t === 2 ? 'nd' : t === 3 ? 'rd' : 'th'; return e + a; },
        week: { dow: 1, doy: 4 },
      }); return t;
    })));
  },
  '39bd': function (e, t, a) {
    (function (e, t) { t(a('c1df')); }(0, ((e) => {
      const t = {
        1: '१', 2: '२', 3: '३', 4: '४', 5: '५', 6: '६', 7: '७', 8: '८', 9: '९', 0: '०',
      }; const a = {
        '१': '1', '२': '2', '३': '3', '४': '4', '५': '5', '६': '6', '७': '7', '८': '8', '९': '9', '०': '0',
      }; function n(e, t, a, n) { let r = ''; if (t) switch (a) { case 's': r = 'काही सेकंद'; break; case 'ss': r = '%d सेकंद'; break; case 'm': r = 'एक मिनिट'; break; case 'mm': r = '%d मिनिटे'; break; case 'h': r = 'एक तास'; break; case 'hh': r = '%d तास'; break; case 'd': r = 'एक दिवस'; break; case 'dd': r = '%d दिवस'; break; case 'M': r = 'एक महिना'; break; case 'MM': r = '%d महिने'; break; case 'y': r = 'एक वर्ष'; break; case 'yy': r = '%d वर्षे'; break; } else switch (a) { case 's': r = 'काही सेकंदां'; break; case 'ss': r = '%d सेकंदां'; break; case 'm': r = 'एका मिनिटा'; break; case 'mm': r = '%d मिनिटां'; break; case 'h': r = 'एका तासा'; break; case 'hh': r = '%d तासां'; break; case 'd': r = 'एका दिवसा'; break; case 'dd': r = '%d दिवसां'; break; case 'M': r = 'एका महिन्या'; break; case 'MM': r = '%d महिन्यां'; break; case 'y': r = 'एका वर्षा'; break; case 'yy': r = '%d वर्षां'; break; } return r.replace(/%d/i, e); } const r = e.defineLocale('mr', {
        months: 'जानेवारी_फेब्रुवारी_मार्च_एप्रिल_मे_जून_जुलै_ऑगस्ट_सप्टेंबर_ऑक्टोबर_नोव्हेंबर_डिसेंबर'.split('_'),
        monthsShort: 'जाने._फेब्रु._मार्च._एप्रि._मे._जून._जुलै._ऑग._सप्टें._ऑक्टो._नोव्हें._डिसें.'.split('_'),
        monthsParseExact: !0,
        weekdays: 'रविवार_सोमवार_मंगळवार_बुधवार_गुरूवार_शुक्रवार_शनिवार'.split('_'),
        weekdaysShort: 'रवि_सोम_मंगळ_बुध_गुरू_शुक्र_शनि'.split('_'),
        weekdaysMin: 'र_सो_मं_बु_गु_शु_श'.split('_'),
        longDateFormat: {
          LT: 'A h:mm वाजता', LTS: 'A h:mm:ss वाजता', L: 'DD/MM/YYYY', LL: 'D MMMM YYYY', LLL: 'D MMMM YYYY, A h:mm वाजता', LLLL: 'dddd, D MMMM YYYY, A h:mm वाजता',
        },
        calendar: {
          sameDay: '[आज] LT', nextDay: '[उद्या] LT', nextWeek: 'dddd, LT', lastDay: '[काल] LT', lastWeek: '[मागील] dddd, LT', sameElse: 'L',
        },
        relativeTime: {
          future: '%sमध्ये', past: '%sपूर्वी', s: n, ss: n, m: n, mm: n, h: n, hh: n, d: n, dd: n, M: n, MM: n, y: n, yy: n,
        },
        preparse(e) { return e.replace(/[१२३४५६७८९०]/g, ((e) => a[e])); },
        postformat(e) { return e.replace(/\d/g, ((e) => t[e])); },
        meridiemParse: /रात्री|सकाळी|दुपारी|सायंकाळी/,
        meridiemHour(e, t) { return e === 12 && (e = 0), t === 'रात्री' ? e < 4 ? e : e + 12 : t === 'सकाळी' ? e : t === 'दुपारी' ? e >= 10 ? e : e + 12 : t === 'सायंकाळी' ? e + 12 : void 0; },
        meridiem(e, t, a) { return e < 4 ? 'रात्री' : e < 10 ? 'सकाळी' : e < 17 ? 'दुपारी' : e < 20 ? 'सायंकाळी' : 'रात्री'; },
        week: { dow: 0, doy: 6 },
      }); return r;
    })));
  },
  '3a39': function (e, t, a) {
    (function (e, t) { t(a('c1df')); }(0, ((e) => {
      const t = {
        1: '१', 2: '२', 3: '३', 4: '४', 5: '५', 6: '६', 7: '७', 8: '८', 9: '९', 0: '०',
      }; const a = {
        '१': '1', '२': '2', '३': '3', '४': '4', '५': '5', '६': '6', '७': '7', '८': '8', '९': '9', '०': '0',
      }; const n = e.defineLocale('ne', {
        months: 'जनवरी_फेब्रुवरी_मार्च_अप्रिल_मई_जुन_जुलाई_अगष्ट_सेप्टेम्बर_अक्टोबर_नोभेम्बर_डिसेम्बर'.split('_'),
        monthsShort: 'जन._फेब्रु._मार्च_अप्रि._मई_जुन_जुलाई._अग._सेप्ट._अक्टो._नोभे._डिसे.'.split('_'),
        monthsParseExact: !0,
        weekdays: 'आइतबार_सोमबार_मङ्गलबार_बुधबार_बिहिबार_शुक्रबार_शनिबार'.split('_'),
        weekdaysShort: 'आइत._सोम._मङ्गल._बुध._बिहि._शुक्र._शनि.'.split('_'),
        weekdaysMin: 'आ._सो._मं._बु._बि._शु._श.'.split('_'),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: 'Aको h:mm बजे', LTS: 'Aको h:mm:ss बजे', L: 'DD/MM/YYYY', LL: 'D MMMM YYYY', LLL: 'D MMMM YYYY, Aको h:mm बजे', LLLL: 'dddd, D MMMM YYYY, Aको h:mm बजे',
        },
        preparse(e) { return e.replace(/[१२३४५६७८९०]/g, ((e) => a[e])); },
        postformat(e) { return e.replace(/\d/g, ((e) => t[e])); },
        meridiemParse: /राति|बिहान|दिउँसो|साँझ/,
        meridiemHour(e, t) { return e === 12 && (e = 0), t === 'राति' ? e < 4 ? e : e + 12 : t === 'बिहान' ? e : t === 'दिउँसो' ? e >= 10 ? e : e + 12 : t === 'साँझ' ? e + 12 : void 0; },
        meridiem(e, t, a) { return e < 3 ? 'राति' : e < 12 ? 'बिहान' : e < 16 ? 'दिउँसो' : e < 20 ? 'साँझ' : 'राति'; },
        calendar: {
          sameDay: '[आज] LT', nextDay: '[भोलि] LT', nextWeek: '[आउँदो] dddd[,] LT', lastDay: '[हिजो] LT', lastWeek: '[गएको] dddd[,] LT', sameElse: 'L',
        },
        relativeTime: {
          future: '%sमा', past: '%s अगाडि', s: 'केही क्षण', ss: '%d सेकेण्ड', m: 'एक मिनेट', mm: '%d मिनेट', h: 'एक घण्टा', hh: '%d घण्टा', d: 'एक दिन', dd: '%d दिन', M: 'एक महिना', MM: '%d महिना', y: 'एक बर्ष', yy: '%d बर्ष',
        },
        week: { dow: 0, doy: 6 },
      }); return n;
    })));
  },
  '3b14': function (e, t, a) {},
  '3b1b': function (e, t, a) {
    (function (e, t) { t(a('c1df')); }(0, ((e) => {
      const t = {
        0: '-ум', 1: '-ум', 2: '-юм', 3: '-юм', 4: '-ум', 5: '-ум', 6: '-ум', 7: '-ум', 8: '-ум', 9: '-ум', 10: '-ум', 12: '-ум', 13: '-ум', 20: '-ум', 30: '-юм', 40: '-ум', 50: '-ум', 60: '-ум', 70: '-ум', 80: '-ум', 90: '-ум', 100: '-ум',
      }; const a = e.defineLocale('tg', {
        months: 'январ_феврал_март_апрел_май_июн_июл_август_сентябр_октябр_ноябр_декабр'.split('_'),
        monthsShort: 'янв_фев_мар_апр_май_июн_июл_авг_сен_окт_ноя_дек'.split('_'),
        weekdays: 'якшанбе_душанбе_сешанбе_чоршанбе_панҷшанбе_ҷумъа_шанбе'.split('_'),
        weekdaysShort: 'яшб_дшб_сшб_чшб_пшб_ҷум_шнб'.split('_'),
        weekdaysMin: 'яш_дш_сш_чш_пш_ҷм_шб'.split('_'),
        longDateFormat: {
          LT: 'HH:mm', LTS: 'HH:mm:ss', L: 'DD/MM/YYYY', LL: 'D MMMM YYYY', LLL: 'D MMMM YYYY HH:mm', LLLL: 'dddd, D MMMM YYYY HH:mm',
        },
        calendar: {
          sameDay: '[Имрӯз соати] LT', nextDay: '[Пагоҳ соати] LT', lastDay: '[Дирӯз соати] LT', nextWeek: 'dddd[и] [ҳафтаи оянда соати] LT', lastWeek: 'dddd[и] [ҳафтаи гузашта соати] LT', sameElse: 'L',
        },
        relativeTime: {
          future: 'баъди %s', past: '%s пеш', s: 'якчанд сония', m: 'як дақиқа', mm: '%d дақиқа', h: 'як соат', hh: '%d соат', d: 'як рӯз', dd: '%d рӯз', M: 'як моҳ', MM: '%d моҳ', y: 'як сол', yy: '%d сол',
        },
        meridiemParse: /шаб|субҳ|рӯз|бегоҳ/,
        meridiemHour(e, t) { return e === 12 && (e = 0), t === 'шаб' ? e < 4 ? e : e + 12 : t === 'субҳ' ? e : t === 'рӯз' ? e >= 11 ? e : e + 12 : t === 'бегоҳ' ? e + 12 : void 0; },
        meridiem(e, t, a) { return e < 4 ? 'шаб' : e < 11 ? 'субҳ' : e < 16 ? 'рӯз' : e < 19 ? 'бегоҳ' : 'шаб'; },
        dayOfMonthOrdinalParse: /\d{1,2}-(ум|юм)/,
        ordinal(e) { const a = e % 10; const n = e >= 100 ? 100 : null; return e + (t[e] || t[a] || t[n]); },
        week: { dow: 1, doy: 7 },
      }); return a;
    })));
  },
  '3c0d': function (e, t, a) {
    (function (e, t) { t(a('c1df')); }(0, ((e) => {
      const t = 'leden_únor_březen_duben_květen_červen_červenec_srpen_září_říjen_listopad_prosinec'.split('_'); const a = 'led_úno_bře_dub_kvě_čvn_čvc_srp_zář_říj_lis_pro'.split('_'); const n = [/^led/i, /^úno/i, /^bře/i, /^dub/i, /^kvě/i, /^(čvn|červen$|června)/i, /^(čvc|červenec|července)/i, /^srp/i, /^zář/i, /^říj/i, /^lis/i, /^pro/i]; const r = /^(leden|únor|březen|duben|květen|červenec|července|červen|června|srpen|září|říjen|listopad|prosinec|led|úno|bře|dub|kvě|čvn|čvc|srp|zář|říj|lis|pro)/i; function i(e) { return e > 1 && e < 5 && ~~(e / 10) !== 1; } function s(e, t, a, n) { const r = `${e} `; switch (a) { case 's': return t || n ? 'pár sekund' : 'pár sekundami'; case 'ss': return t || n ? r + (i(e) ? 'sekundy' : 'sekund') : `${r}sekundami`; case 'm': return t ? 'minuta' : n ? 'minutu' : 'minutou'; case 'mm': return t || n ? r + (i(e) ? 'minuty' : 'minut') : `${r}minutami`; case 'h': return t ? 'hodina' : n ? 'hodinu' : 'hodinou'; case 'hh': return t || n ? r + (i(e) ? 'hodiny' : 'hodin') : `${r}hodinami`; case 'd': return t || n ? 'den' : 'dnem'; case 'dd': return t || n ? r + (i(e) ? 'dny' : 'dní') : `${r}dny`; case 'M': return t || n ? 'měsíc' : 'měsícem'; case 'MM': return t || n ? r + (i(e) ? 'měsíce' : 'měsíců') : `${r}měsíci`; case 'y': return t || n ? 'rok' : 'rokem'; case 'yy': return t || n ? r + (i(e) ? 'roky' : 'let') : `${r}lety`; } } const o = e.defineLocale('cs', {
        months: t,
        monthsShort: a,
        monthsRegex: r,
        monthsShortRegex: r,
        monthsStrictRegex: /^(leden|ledna|února|únor|březen|března|duben|dubna|květen|května|červenec|července|červen|června|srpen|srpna|září|říjen|října|listopadu|listopad|prosinec|prosince)/i,
        monthsShortStrictRegex: /^(led|úno|bře|dub|kvě|čvn|čvc|srp|zář|říj|lis|pro)/i,
        monthsParse: n,
        longMonthsParse: n,
        shortMonthsParse: n,
        weekdays: 'neděle_pondělí_úterý_středa_čtvrtek_pátek_sobota'.split('_'),
        weekdaysShort: 'ne_po_út_st_čt_pá_so'.split('_'),
        weekdaysMin: 'ne_po_út_st_čt_pá_so'.split('_'),
        longDateFormat: {
          LT: 'H:mm', LTS: 'H:mm:ss', L: 'DD.MM.YYYY', LL: 'D. MMMM YYYY', LLL: 'D. MMMM YYYY H:mm', LLLL: 'dddd D. MMMM YYYY H:mm', l: 'D. M. YYYY',
        },
        calendar: {
          sameDay: '[dnes v] LT', nextDay: '[zítra v] LT', nextWeek() { switch (this.day()) { case 0: return '[v neděli v] LT'; case 1: case 2: return '[v] dddd [v] LT'; case 3: return '[ve středu v] LT'; case 4: return '[ve čtvrtek v] LT'; case 5: return '[v pátek v] LT'; case 6: return '[v sobotu v] LT'; } }, lastDay: '[včera v] LT', lastWeek() { switch (this.day()) { case 0: return '[minulou neděli v] LT'; case 1: case 2: return '[minulé] dddd [v] LT'; case 3: return '[minulou středu v] LT'; case 4: case 5: return '[minulý] dddd [v] LT'; case 6: return '[minulou sobotu v] LT'; } }, sameElse: 'L',
        },
        relativeTime: {
          future: 'za %s', past: 'před %s', s, ss: s, m: s, mm: s, h: s, hh: s, d: s, dd: s, M: s, MM: s, y: s, yy: s,
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: '%d.',
        week: { dow: 1, doy: 4 },
      }); return o;
    })));
  },
  '3de5': function (e, t, a) {
    (function (e, t) { t(a('c1df')); }(0, ((e) => {
      const t = {
        1: '௧', 2: '௨', 3: '௩', 4: '௪', 5: '௫', 6: '௬', 7: '௭', 8: '௮', 9: '௯', 0: '௦',
      }; const a = {
        '௧': '1', '௨': '2', '௩': '3', '௪': '4', '௫': '5', '௬': '6', '௭': '7', '௮': '8', '௯': '9', '௦': '0',
      }; const n = e.defineLocale('ta', {
        months: 'ஜனவரி_பிப்ரவரி_மார்ச்_ஏப்ரல்_மே_ஜூன்_ஜூலை_ஆகஸ்ட்_செப்டெம்பர்_அக்டோபர்_நவம்பர்_டிசம்பர்'.split('_'),
        monthsShort: 'ஜனவரி_பிப்ரவரி_மார்ச்_ஏப்ரல்_மே_ஜூன்_ஜூலை_ஆகஸ்ட்_செப்டெம்பர்_அக்டோபர்_நவம்பர்_டிசம்பர்'.split('_'),
        weekdays: 'ஞாயிற்றுக்கிழமை_திங்கட்கிழமை_செவ்வாய்கிழமை_புதன்கிழமை_வியாழக்கிழமை_வெள்ளிக்கிழமை_சனிக்கிழமை'.split('_'),
        weekdaysShort: 'ஞாயிறு_திங்கள்_செவ்வாய்_புதன்_வியாழன்_வெள்ளி_சனி'.split('_'),
        weekdaysMin: 'ஞா_தி_செ_பு_வி_வெ_ச'.split('_'),
        longDateFormat: {
          LT: 'HH:mm', LTS: 'HH:mm:ss', L: 'DD/MM/YYYY', LL: 'D MMMM YYYY', LLL: 'D MMMM YYYY, HH:mm', LLLL: 'dddd, D MMMM YYYY, HH:mm',
        },
        calendar: {
          sameDay: '[இன்று] LT', nextDay: '[நாளை] LT', nextWeek: 'dddd, LT', lastDay: '[நேற்று] LT', lastWeek: '[கடந்த வாரம்] dddd, LT', sameElse: 'L',
        },
        relativeTime: {
          future: '%s இல்', past: '%s முன்', s: 'ஒரு சில விநாடிகள்', ss: '%d விநாடிகள்', m: 'ஒரு நிமிடம்', mm: '%d நிமிடங்கள்', h: 'ஒரு மணி நேரம்', hh: '%d மணி நேரம்', d: 'ஒரு நாள்', dd: '%d நாட்கள்', M: 'ஒரு மாதம்', MM: '%d மாதங்கள்', y: 'ஒரு வருடம்', yy: '%d ஆண்டுகள்',
        },
        dayOfMonthOrdinalParse: /\d{1,2}வது/,
        ordinal(e) { return `${e}வது`; },
        preparse(e) { return e.replace(/[௧௨௩௪௫௬௭௮௯௦]/g, ((e) => a[e])); },
        postformat(e) { return e.replace(/\d/g, ((e) => t[e])); },
        meridiemParse: /யாமம்|வைகறை|காலை|நண்பகல்|எற்பாடு|மாலை/,
        meridiem(e, t, a) { return e < 2 ? ' யாமம்' : e < 6 ? ' வைகறை' : e < 10 ? ' காலை' : e < 14 ? ' நண்பகல்' : e < 18 ? ' எற்பாடு' : e < 22 ? ' மாலை' : ' யாமம்'; },
        meridiemHour(e, t) { return e === 12 && (e = 0), t === 'யாமம்' ? e < 2 ? e : e + 12 : t === 'வைகறை' || t === 'காலை' || t === 'நண்பகல்' && e >= 10 ? e : e + 12; },
        week: { dow: 0, doy: 6 },
      }); return n;
    })));
  },
  '3e92': function (e, t, a) {
    (function (e, t) { t(a('c1df')); }(0, ((e) => {
      const t = {
        1: '೧', 2: '೨', 3: '೩', 4: '೪', 5: '೫', 6: '೬', 7: '೭', 8: '೮', 9: '೯', 0: '೦',
      }; const a = {
        '೧': '1', '೨': '2', '೩': '3', '೪': '4', '೫': '5', '೬': '6', '೭': '7', '೮': '8', '೯': '9', '೦': '0',
      }; const n = e.defineLocale('kn', {
        months: 'ಜನವರಿ_ಫೆಬ್ರವರಿ_ಮಾರ್ಚ್_ಏಪ್ರಿಲ್_ಮೇ_ಜೂನ್_ಜುಲೈ_ಆಗಸ್ಟ್_ಸೆಪ್ಟೆಂಬರ್_ಅಕ್ಟೋಬರ್_ನವೆಂಬರ್_ಡಿಸೆಂಬರ್'.split('_'),
        monthsShort: 'ಜನ_ಫೆಬ್ರ_ಮಾರ್ಚ್_ಏಪ್ರಿಲ್_ಮೇ_ಜೂನ್_ಜುಲೈ_ಆಗಸ್ಟ್_ಸೆಪ್ಟೆಂ_ಅಕ್ಟೋ_ನವೆಂ_ಡಿಸೆಂ'.split('_'),
        monthsParseExact: !0,
        weekdays: 'ಭಾನುವಾರ_ಸೋಮವಾರ_ಮಂಗಳವಾರ_ಬುಧವಾರ_ಗುರುವಾರ_ಶುಕ್ರವಾರ_ಶನಿವಾರ'.split('_'),
        weekdaysShort: 'ಭಾನು_ಸೋಮ_ಮಂಗಳ_ಬುಧ_ಗುರು_ಶುಕ್ರ_ಶನಿ'.split('_'),
        weekdaysMin: 'ಭಾ_ಸೋ_ಮಂ_ಬು_ಗು_ಶು_ಶ'.split('_'),
        longDateFormat: {
          LT: 'A h:mm', LTS: 'A h:mm:ss', L: 'DD/MM/YYYY', LL: 'D MMMM YYYY', LLL: 'D MMMM YYYY, A h:mm', LLLL: 'dddd, D MMMM YYYY, A h:mm',
        },
        calendar: {
          sameDay: '[ಇಂದು] LT', nextDay: '[ನಾಳೆ] LT', nextWeek: 'dddd, LT', lastDay: '[ನಿನ್ನೆ] LT', lastWeek: '[ಕೊನೆಯ] dddd, LT', sameElse: 'L',
        },
        relativeTime: {
          future: '%s ನಂತರ', past: '%s ಹಿಂದೆ', s: 'ಕೆಲವು ಕ್ಷಣಗಳು', ss: '%d ಸೆಕೆಂಡುಗಳು', m: 'ಒಂದು ನಿಮಿಷ', mm: '%d ನಿಮಿಷ', h: 'ಒಂದು ಗಂಟೆ', hh: '%d ಗಂಟೆ', d: 'ಒಂದು ದಿನ', dd: '%d ದಿನ', M: 'ಒಂದು ತಿಂಗಳು', MM: '%d ತಿಂಗಳು', y: 'ಒಂದು ವರ್ಷ', yy: '%d ವರ್ಷ',
        },
        preparse(e) { return e.replace(/[೧೨೩೪೫೬೭೮೯೦]/g, ((e) => a[e])); },
        postformat(e) { return e.replace(/\d/g, ((e) => t[e])); },
        meridiemParse: /ರಾತ್ರಿ|ಬೆಳಿಗ್ಗೆ|ಮಧ್ಯಾಹ್ನ|ಸಂಜೆ/,
        meridiemHour(e, t) { return e === 12 && (e = 0), t === 'ರಾತ್ರಿ' ? e < 4 ? e : e + 12 : t === 'ಬೆಳಿಗ್ಗೆ' ? e : t === 'ಮಧ್ಯಾಹ್ನ' ? e >= 10 ? e : e + 12 : t === 'ಸಂಜೆ' ? e + 12 : void 0; },
        meridiem(e, t, a) { return e < 4 ? 'ರಾತ್ರಿ' : e < 10 ? 'ಬೆಳಿಗ್ಗೆ' : e < 17 ? 'ಮಧ್ಯಾಹ್ನ' : e < 20 ? 'ಸಂಜೆ' : 'ರಾತ್ರಿ'; },
        dayOfMonthOrdinalParse: /\d{1,2}(ನೇ)/,
        ordinal(e) { return `${e}ನೇ`; },
        week: { dow: 0, doy: 6 },
      }); return n;
    })));
  },
  '423e': function (e, t, a) {
    (function (e, t) { t(a('c1df')); }(0, ((e) => {
      const t = e.defineLocale('ar-kw', {
        months: 'يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر'.split('_'),
        monthsShort: 'يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر'.split('_'),
        weekdays: 'الأحد_الإتنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت'.split('_'),
        weekdaysShort: 'احد_اتنين_ثلاثاء_اربعاء_خميس_جمعة_سبت'.split('_'),
        weekdaysMin: 'ح_ن_ث_ر_خ_ج_س'.split('_'),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: 'HH:mm', LTS: 'HH:mm:ss', L: 'DD/MM/YYYY', LL: 'D MMMM YYYY', LLL: 'D MMMM YYYY HH:mm', LLLL: 'dddd D MMMM YYYY HH:mm',
        },
        calendar: {
          sameDay: '[اليوم على الساعة] LT', nextDay: '[غدا على الساعة] LT', nextWeek: 'dddd [على الساعة] LT', lastDay: '[أمس على الساعة] LT', lastWeek: 'dddd [على الساعة] LT', sameElse: 'L',
        },
        relativeTime: {
          future: 'في %s', past: 'منذ %s', s: 'ثوان', ss: '%d ثانية', m: 'دقيقة', mm: '%d دقائق', h: 'ساعة', hh: '%d ساعات', d: 'يوم', dd: '%d أيام', M: 'شهر', MM: '%d أشهر', y: 'سنة', yy: '%d سنوات',
        },
        week: { dow: 0, doy: 12 },
      }); return t;
    })));
  },
  '440c': function (e, t, a) {
    (function (e, t) { t(a('c1df')); }(0, ((e) => {
      function t(e, t, a, n) {
        const r = {
          m: ['eng Minutt', 'enger Minutt'], h: ['eng Stonn', 'enger Stonn'], d: ['een Dag', 'engem Dag'], M: ['ee Mount', 'engem Mount'], y: ['ee Joer', 'engem Joer'],
        }; return t ? r[a][0] : r[a][1];
      } function a(e) { const t = e.substr(0, e.indexOf(' ')); return r(t) ? `a ${e}` : `an ${e}`; } function n(e) { const t = e.substr(0, e.indexOf(' ')); return r(t) ? `viru ${e}` : `virun ${e}`; } function r(e) { if (e = parseInt(e, 10), isNaN(e)) return !1; if (e < 0) return !0; if (e < 10) return e >= 4 && e <= 7; if (e < 100) { const t = e % 10; const a = e / 10; return r(t === 0 ? a : t); } if (e < 1e4) { while (e >= 10)e /= 10; return r(e); } return e /= 1e3, r(e); } const i = e.defineLocale('lb', {
        months: 'Januar_Februar_Mäerz_Abrëll_Mee_Juni_Juli_August_September_Oktober_November_Dezember'.split('_'),
        monthsShort: 'Jan._Febr._Mrz._Abr._Mee_Jun._Jul._Aug._Sept._Okt._Nov._Dez.'.split('_'),
        monthsParseExact: !0,
        weekdays: 'Sonndeg_Méindeg_Dënschdeg_Mëttwoch_Donneschdeg_Freideg_Samschdeg'.split('_'),
        weekdaysShort: 'So._Mé._Dë._Më._Do._Fr._Sa.'.split('_'),
        weekdaysMin: 'So_Mé_Dë_Më_Do_Fr_Sa'.split('_'),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: 'H:mm [Auer]', LTS: 'H:mm:ss [Auer]', L: 'DD.MM.YYYY', LL: 'D. MMMM YYYY', LLL: 'D. MMMM YYYY H:mm [Auer]', LLLL: 'dddd, D. MMMM YYYY H:mm [Auer]',
        },
        calendar: {
          sameDay: '[Haut um] LT', sameElse: 'L', nextDay: '[Muer um] LT', nextWeek: 'dddd [um] LT', lastDay: '[Gëschter um] LT', lastWeek() { switch (this.day()) { case 2: case 4: return '[Leschten] dddd [um] LT'; default: return '[Leschte] dddd [um] LT'; } },
        },
        relativeTime: {
          future: a, past: n, s: 'e puer Sekonnen', ss: '%d Sekonnen', m: t, mm: '%d Minutten', h: t, hh: '%d Stonnen', d: t, dd: '%d Deeg', M: t, MM: '%d Méint', y: t, yy: '%d Joer',
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: '%d.',
        week: { dow: 1, doy: 4 },
      }); return i;
    })));
  },
  4678(e, t, a) {
    const n = {
      './af': '2bfb', './af.js': '2bfb', './ar': '8e73', './ar-dz': 'a356', './ar-dz.js': 'a356', './ar-kw': '423e', './ar-kw.js': '423e', './ar-ly': '1cfd', './ar-ly.js': '1cfd', './ar-ma': '0a84', './ar-ma.js': '0a84', './ar-sa': '8230', './ar-sa.js': '8230', './ar-tn': '6d83', './ar-tn.js': '6d83', './ar.js': '8e73', './az': '485c', './az.js': '485c', './be': '1fc1', './be.js': '1fc1', './bg': '84aa', './bg.js': '84aa', './bm': 'a7fa', './bm.js': 'a7fa', './bn': '9043', './bn.js': '9043', './bo': 'd26a', './bo.js': 'd26a', './br': '6887', './br.js': '6887', './bs': '2554', './bs.js': '2554', './ca': 'd716', './ca.js': 'd716', './cs': '3c0d', './cs.js': '3c0d', './cv': '03ec', './cv.js': '03ec', './cy': '9797', './cy.js': '9797', './da': '0f14', './da.js': '0f14', './de': 'b469', './de-at': 'b3eb', './de-at.js': 'b3eb', './de-ch': 'bb71', './de-ch.js': 'bb71', './de.js': 'b469', './dv': '598a', './dv.js': '598a', './el': '8d47', './el.js': '8d47', './en-SG': 'cdab', './en-SG.js': 'cdab', './en-au': '0e6b', './en-au.js': '0e6b', './en-ca': '3886', './en-ca.js': '3886', './en-gb': '39a6', './en-gb.js': '39a6', './en-ie': 'e1d3', './en-ie.js': 'e1d3', './en-il': '7333', './en-il.js': '7333', './en-nz': '6f50', './en-nz.js': '6f50', './eo': '65db', './eo.js': '65db', './es': '898b', './es-do': '0a3c', './es-do.js': '0a3c', './es-us': '55c9', './es-us.js': '55c9', './es.js': '898b', './et': 'ec18', './et.js': 'ec18', './eu': '0ff2', './eu.js': '0ff2', './fa': '8df48', './fa.js': '8df48', './fi': '81e9', './fi.js': '81e9', './fo': '0721', './fo.js': '0721', './fr': '9f26', './fr-ca': 'd9f8', './fr-ca.js': 'd9f8', './fr-ch': '0e49', './fr-ch.js': '0e49', './fr.js': '9f26', './fy': '7118', './fy.js': '7118', './ga': '5120', './ga.js': '5120', './gd': 'f6b46', './gd.js': 'f6b46', './gl': '8840', './gl.js': '8840', './gom-latn': '0caa', './gom-latn.js': '0caa', './gu': 'e0c5', './gu.js': 'e0c5', './he': 'c7aa', './he.js': 'c7aa', './hi': 'dc4d', './hi.js': 'dc4d', './hr': '4ba9', './hr.js': '4ba9', './hu': '5b14', './hu.js': '5b14', './hy-am': 'd6b6', './hy-am.js': 'd6b6', './id': '5038', './id.js': '5038', './is': '0558', './is.js': '0558', './it': '6e98', './it-ch': '6f12', './it-ch.js': '6f12', './it.js': '6e98', './ja': '079e', './ja.js': '079e', './jv': 'b540', './jv.js': 'b540', './ka': '201b', './ka.js': '201b', './kk': '6d79', './kk.js': '6d79', './km': 'e81d', './km.js': 'e81d', './kn': '3e92', './kn.js': '3e92', './ko': '22f8', './ko.js': '22f8', './ku': '2421', './ku.js': '2421', './ky': '9609', './ky.js': '9609', './lb': '440c', './lb.js': '440c', './lo': 'b29d', './lo.js': 'b29d', './lt': '26f9', './lt.js': '26f9', './lv': 'b97c', './lv.js': 'b97c', './me': '293c', './me.js': '293c', './mi': '688b', './mi.js': '688b', './mk': '6909', './mk.js': '6909', './ml': '02fb', './ml.js': '02fb', './mn': '958b', './mn.js': '958b', './mr': '39bd', './mr.js': '39bd', './ms': 'ebe4', './ms-my': '6403', './ms-my.js': '6403', './ms.js': 'ebe4', './mt': '1b45', './mt.js': '1b45', './my': '8689', './my.js': '8689', './nb': '6ce3', './nb.js': '6ce3', './ne': '3a39', './ne.js': '3a39', './nl': 'facd', './nl-be': 'db29', './nl-be.js': 'db29', './nl.js': 'facd', './nn': 'b84c', './nn.js': 'b84c', './pa-in': 'f3ff', './pa-in.js': 'f3ff', './pl': '8d57', './pl.js': '8d57', './pt': 'f260', './pt-br': 'd2d4', './pt-br.js': 'd2d4', './pt.js': 'f260', './ro': '972c', './ro.js': '972c', './ru': '957c', './ru.js': '957c', './sd': '6784', './sd.js': '6784', './se': 'ffff', './se.js': 'ffff', './si': 'eda5', './si.js': 'eda5', './sk': '7be6', './sk.js': '7be6', './sl': '8155', './sl.js': '8155', './sq': 'c8f3', './sq.js': 'c8f3', './sr': 'cf1e', './sr-cyrl': '13e9', './sr-cyrl.js': '13e9', './sr.js': 'cf1e', './ss': '52bd', './ss.js': '52bd', './sv': '5fbd', './sv.js': '5fbd', './sw': '74dc', './sw.js': '74dc', './ta': '3de5', './ta.js': '3de5', './te': '5cbb', './te.js': '5cbb', './tet': '576c', './tet.js': '576c', './tg': '3b1b', './tg.js': '3b1b', './th': '10e8', './th.js': '10e8', './tl-ph': '0f38', './tl-ph.js': '0f38', './tlh': 'cf75', './tlh.js': 'cf75', './tr': '0e81', './tr.js': '0e81', './tzl': 'cf51', './tzl.js': 'cf51', './tzm': 'c109', './tzm-latn': 'b53d', './tzm-latn.js': 'b53d', './tzm.js': 'c109', './ug-cn': '6117', './ug-cn.js': '6117', './uk': 'ada2', './uk.js': 'ada2', './ur': '5294', './ur.js': '5294', './uz': '2e8c', './uz-latn': '010e', './uz-latn.js': '010e', './uz.js': '2e8c', './vi': '2921', './vi.js': '2921', './x-pseudo': 'fd7e', './x-pseudo.js': 'fd7e', './yo': '7f33', './yo.js': '7f33', './zh-cn': '5c3a', './zh-cn.js': '5c3a', './zh-hk': '49ab', './zh-hk.js': '49ab', './zh-tw': '90ea', './zh-tw.js': '90ea',
    }; function r(e) { const t = i(e); return a(t); } function i(e) { if (!a.o(n, e)) { const t = new Error(`Cannot find module '${e}'`); throw t.code = 'MODULE_NOT_FOUND', t; } return n[e]; }r.keys = function () { return Object.keys(n); }, r.resolve = i, e.exports = r, r.id = '4678';
  },
  '485c': function (e, t, a) {
    (function (e, t) { t(a('c1df')); }(0, ((e) => {
      const t = {
        1: '-inci', 5: '-inci', 8: '-inci', 70: '-inci', 80: '-inci', 2: '-nci', 7: '-nci', 20: '-nci', 50: '-nci', 3: '-üncü', 4: '-üncü', 100: '-üncü', 6: '-ncı', 9: '-uncu', 10: '-uncu', 30: '-uncu', 60: '-ıncı', 90: '-ıncı',
      }; const a = e.defineLocale('az', {
        months: 'yanvar_fevral_mart_aprel_may_iyun_iyul_avqust_sentyabr_oktyabr_noyabr_dekabr'.split('_'),
        monthsShort: 'yan_fev_mar_apr_may_iyn_iyl_avq_sen_okt_noy_dek'.split('_'),
        weekdays: 'Bazar_Bazar ertəsi_Çərşənbə axşamı_Çərşənbə_Cümə axşamı_Cümə_Şənbə'.split('_'),
        weekdaysShort: 'Baz_BzE_ÇAx_Çər_CAx_Cüm_Şən'.split('_'),
        weekdaysMin: 'Bz_BE_ÇA_Çə_CA_Cü_Şə'.split('_'),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: 'HH:mm', LTS: 'HH:mm:ss', L: 'DD.MM.YYYY', LL: 'D MMMM YYYY', LLL: 'D MMMM YYYY HH:mm', LLLL: 'dddd, D MMMM YYYY HH:mm',
        },
        calendar: {
          sameDay: '[bugün saat] LT', nextDay: '[sabah saat] LT', nextWeek: '[gələn həftə] dddd [saat] LT', lastDay: '[dünən] LT', lastWeek: '[keçən həftə] dddd [saat] LT', sameElse: 'L',
        },
        relativeTime: {
          future: '%s sonra', past: '%s əvvəl', s: 'birneçə saniyə', ss: '%d saniyə', m: 'bir dəqiqə', mm: '%d dəqiqə', h: 'bir saat', hh: '%d saat', d: 'bir gün', dd: '%d gün', M: 'bir ay', MM: '%d ay', y: 'bir il', yy: '%d il',
        },
        meridiemParse: /gecə|səhər|gündüz|axşam/,
        isPM(e) { return /^(gündüz|axşam)$/.test(e); },
        meridiem(e, t, a) { return e < 4 ? 'gecə' : e < 12 ? 'səhər' : e < 17 ? 'gündüz' : 'axşam'; },
        dayOfMonthOrdinalParse: /\d{1,2}-(ıncı|inci|nci|üncü|ncı|uncu)/,
        ordinal(e) { if (e === 0) return `${e}-ıncı`; const a = e % 10; const n = e % 100 - a; const r = e >= 100 ? 100 : null; return e + (t[a] || t[n] || t[r]); },
        week: { dow: 1, doy: 7 },
      }); return a;
    })));
  },
  '49ab': function (e, t, a) {
    (function (e, t) { t(a('c1df')); }(0, ((e) => {
      const t = e.defineLocale('zh-hk', {
        months: '一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月'.split('_'),
        monthsShort: '1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月'.split('_'),
        weekdays: '星期日_星期一_星期二_星期三_星期四_星期五_星期六'.split('_'),
        weekdaysShort: '週日_週一_週二_週三_週四_週五_週六'.split('_'),
        weekdaysMin: '日_一_二_三_四_五_六'.split('_'),
        longDateFormat: {
          LT: 'HH:mm', LTS: 'HH:mm:ss', L: 'YYYY/MM/DD', LL: 'YYYY年M月D日', LLL: 'YYYY年M月D日 HH:mm', LLLL: 'YYYY年M月D日dddd HH:mm', l: 'YYYY/M/D', ll: 'YYYY年M月D日', lll: 'YYYY年M月D日 HH:mm', llll: 'YYYY年M月D日dddd HH:mm',
        },
        meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
        meridiemHour(e, t) { return e === 12 && (e = 0), t === '凌晨' || t === '早上' || t === '上午' ? e : t === '中午' ? e >= 11 ? e : e + 12 : t === '下午' || t === '晚上' ? e + 12 : void 0; },
        meridiem(e, t, a) { const n = 100 * e + t; return n < 600 ? '凌晨' : n < 900 ? '早上' : n < 1130 ? '上午' : n < 1230 ? '中午' : n < 1800 ? '下午' : '晚上'; },
        calendar: {
          sameDay: '[今天]LT', nextDay: '[明天]LT', nextWeek: '[下]ddddLT', lastDay: '[昨天]LT', lastWeek: '[上]ddddLT', sameElse: 'L',
        },
        dayOfMonthOrdinalParse: /\d{1,2}(日|月|週)/,
        ordinal(e, t) { switch (t) { case 'd': case 'D': case 'DDD': return `${e}日`; case 'M': return `${e}月`; case 'w': case 'W': return `${e}週`; default: return e; } },
        relativeTime: {
          future: '%s內', past: '%s前', s: '幾秒', ss: '%d 秒', m: '1 分鐘', mm: '%d 分鐘', h: '1 小時', hh: '%d 小時', d: '1 天', dd: '%d 天', M: '1 個月', MM: '%d 個月', y: '1 年', yy: '%d 年',
        },
      }); return t;
    })));
  },
  '4ba9': function (e, t, a) {
    (function (e, t) { t(a('c1df')); }(0, ((e) => {
      function t(e, t, a) { let n = `${e} `; switch (a) { case 'ss': return n += e === 1 ? 'sekunda' : e === 2 || e === 3 || e === 4 ? 'sekunde' : 'sekundi', n; case 'm': return t ? 'jedna minuta' : 'jedne minute'; case 'mm': return n += e === 1 ? 'minuta' : e === 2 || e === 3 || e === 4 ? 'minute' : 'minuta', n; case 'h': return t ? 'jedan sat' : 'jednog sata'; case 'hh': return n += e === 1 ? 'sat' : e === 2 || e === 3 || e === 4 ? 'sata' : 'sati', n; case 'dd': return n += e === 1 ? 'dan' : 'dana', n; case 'MM': return n += e === 1 ? 'mjesec' : e === 2 || e === 3 || e === 4 ? 'mjeseca' : 'mjeseci', n; case 'yy': return n += e === 1 ? 'godina' : e === 2 || e === 3 || e === 4 ? 'godine' : 'godina', n; } } const a = e.defineLocale('hr', {
        months: { format: 'siječnja_veljače_ožujka_travnja_svibnja_lipnja_srpnja_kolovoza_rujna_listopada_studenoga_prosinca'.split('_'), standalone: 'siječanj_veljača_ožujak_travanj_svibanj_lipanj_srpanj_kolovoz_rujan_listopad_studeni_prosinac'.split('_') },
        monthsShort: 'sij._velj._ožu._tra._svi._lip._srp._kol._ruj._lis._stu._pro.'.split('_'),
        monthsParseExact: !0,
        weekdays: 'nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota'.split('_'),
        weekdaysShort: 'ned._pon._uto._sri._čet._pet._sub.'.split('_'),
        weekdaysMin: 'ne_po_ut_sr_če_pe_su'.split('_'),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: 'H:mm', LTS: 'H:mm:ss', L: 'DD.MM.YYYY', LL: 'D. MMMM YYYY', LLL: 'D. MMMM YYYY H:mm', LLLL: 'dddd, D. MMMM YYYY H:mm',
        },
        calendar: {
          sameDay: '[danas u] LT', nextDay: '[sutra u] LT', nextWeek() { switch (this.day()) { case 0: return '[u] [nedjelju] [u] LT'; case 3: return '[u] [srijedu] [u] LT'; case 6: return '[u] [subotu] [u] LT'; case 1: case 2: case 4: case 5: return '[u] dddd [u] LT'; } }, lastDay: '[jučer u] LT', lastWeek() { switch (this.day()) { case 0: case 3: return '[prošlu] dddd [u] LT'; case 6: return '[prošle] [subote] [u] LT'; case 1: case 2: case 4: case 5: return '[prošli] dddd [u] LT'; } }, sameElse: 'L',
        },
        relativeTime: {
          future: 'za %s', past: 'prije %s', s: 'par sekundi', ss: t, m: t, mm: t, h: t, hh: t, d: 'dan', dd: t, M: 'mjesec', MM: t, y: 'godinu', yy: t,
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: '%d.',
        week: { dow: 1, doy: 7 },
      }); return a;
    })));
  },
  5038(e, t, a) {
    (function (e, t) { t(a('c1df')); }(0, ((e) => {
      const t = e.defineLocale('id', {
        months: 'Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_November_Desember'.split('_'),
        monthsShort: 'Jan_Feb_Mar_Apr_Mei_Jun_Jul_Agt_Sep_Okt_Nov_Des'.split('_'),
        weekdays: 'Minggu_Senin_Selasa_Rabu_Kamis_Jumat_Sabtu'.split('_'),
        weekdaysShort: 'Min_Sen_Sel_Rab_Kam_Jum_Sab'.split('_'),
        weekdaysMin: 'Mg_Sn_Sl_Rb_Km_Jm_Sb'.split('_'),
        longDateFormat: {
          LT: 'HH.mm', LTS: 'HH.mm.ss', L: 'DD/MM/YYYY', LL: 'D MMMM YYYY', LLL: 'D MMMM YYYY [pukul] HH.mm', LLLL: 'dddd, D MMMM YYYY [pukul] HH.mm',
        },
        meridiemParse: /pagi|siang|sore|malam/,
        meridiemHour(e, t) { return e === 12 && (e = 0), t === 'pagi' ? e : t === 'siang' ? e >= 11 ? e : e + 12 : t === 'sore' || t === 'malam' ? e + 12 : void 0; },
        meridiem(e, t, a) { return e < 11 ? 'pagi' : e < 15 ? 'siang' : e < 19 ? 'sore' : 'malam'; },
        calendar: {
          sameDay: '[Hari ini pukul] LT', nextDay: '[Besok pukul] LT', nextWeek: 'dddd [pukul] LT', lastDay: '[Kemarin pukul] LT', lastWeek: 'dddd [lalu pukul] LT', sameElse: 'L',
        },
        relativeTime: {
          future: 'dalam %s', past: '%s yang lalu', s: 'beberapa detik', ss: '%d detik', m: 'semenit', mm: '%d menit', h: 'sejam', hh: '%d jam', d: 'sehari', dd: '%d hari', M: 'sebulan', MM: '%d bulan', y: 'setahun', yy: '%d tahun',
        },
        week: { dow: 1, doy: 7 },
      }); return t;
    })));
  },
  5120(e, t, a) {
    (function (e, t) { t(a('c1df')); }(0, ((e) => {
      const t = ['Eanáir', 'Feabhra', 'Márta', 'Aibreán', 'Bealtaine', 'Méitheamh', 'Iúil', 'Lúnasa', 'Meán Fómhair', 'Deaireadh Fómhair', 'Samhain', 'Nollaig']; const a = ['Eaná', 'Feab', 'Márt', 'Aibr', 'Beal', 'Méit', 'Iúil', 'Lúna', 'Meán', 'Deai', 'Samh', 'Noll']; const n = ['Dé Domhnaigh', 'Dé Luain', 'Dé Máirt', 'Dé Céadaoin', 'Déardaoin', 'Dé hAoine', 'Dé Satharn']; const r = ['Dom', 'Lua', 'Mái', 'Céa', 'Déa', 'hAo', 'Sat']; const i = ['Do', 'Lu', 'Má', 'Ce', 'Dé', 'hA', 'Sa']; const s = e.defineLocale('ga', {
        months: t,
        monthsShort: a,
        monthsParseExact: !0,
        weekdays: n,
        weekdaysShort: r,
        weekdaysMin: i,
        longDateFormat: {
          LT: 'HH:mm', LTS: 'HH:mm:ss', L: 'DD/MM/YYYY', LL: 'D MMMM YYYY', LLL: 'D MMMM YYYY HH:mm', LLLL: 'dddd, D MMMM YYYY HH:mm',
        },
        calendar: {
          sameDay: '[Inniu ag] LT', nextDay: '[Amárach ag] LT', nextWeek: 'dddd [ag] LT', lastDay: '[Inné aig] LT', lastWeek: 'dddd [seo caite] [ag] LT', sameElse: 'L',
        },
        relativeTime: {
          future: 'i %s', past: '%s ó shin', s: 'cúpla soicind', ss: '%d soicind', m: 'nóiméad', mm: '%d nóiméad', h: 'uair an chloig', hh: '%d uair an chloig', d: 'lá', dd: '%d lá', M: 'mí', MM: '%d mí', y: 'bliain', yy: '%d bliain',
        },
        dayOfMonthOrdinalParse: /\d{1,2}(d|na|mh)/,
        ordinal(e) { const t = e === 1 ? 'd' : e % 10 === 2 ? 'na' : 'mh'; return e + t; },
        week: { dow: 1, doy: 4 },
      }); return s;
    })));
  },
  5294(e, t, a) {
    (function (e, t) { t(a('c1df')); }(0, ((e) => {
      const t = ['جنوری', 'فروری', 'مارچ', 'اپریل', 'مئی', 'جون', 'جولائی', 'اگست', 'ستمبر', 'اکتوبر', 'نومبر', 'دسمبر']; const a = ['اتوار', 'پیر', 'منگل', 'بدھ', 'جمعرات', 'جمعہ', 'ہفتہ']; const n = e.defineLocale('ur', {
        months: t,
        monthsShort: t,
        weekdays: a,
        weekdaysShort: a,
        weekdaysMin: a,
        longDateFormat: {
          LT: 'HH:mm', LTS: 'HH:mm:ss', L: 'DD/MM/YYYY', LL: 'D MMMM YYYY', LLL: 'D MMMM YYYY HH:mm', LLLL: 'dddd، D MMMM YYYY HH:mm',
        },
        meridiemParse: /صبح|شام/,
        isPM(e) { return e === 'شام'; },
        meridiem(e, t, a) { return e < 12 ? 'صبح' : 'شام'; },
        calendar: {
          sameDay: '[آج بوقت] LT', nextDay: '[کل بوقت] LT', nextWeek: 'dddd [بوقت] LT', lastDay: '[گذشتہ روز بوقت] LT', lastWeek: '[گذشتہ] dddd [بوقت] LT', sameElse: 'L',
        },
        relativeTime: {
          future: '%s بعد', past: '%s قبل', s: 'چند سیکنڈ', ss: '%d سیکنڈ', m: 'ایک منٹ', mm: '%d منٹ', h: 'ایک گھنٹہ', hh: '%d گھنٹے', d: 'ایک دن', dd: '%d دن', M: 'ایک ماہ', MM: '%d ماہ', y: 'ایک سال', yy: '%d سال',
        },
        preparse(e) { return e.replace(/،/g, ','); },
        postformat(e) { return e.replace(/,/g, '،'); },
        week: { dow: 1, doy: 4 },
      }); return n;
    })));
  },
  '52bd': function (e, t, a) {
    (function (e, t) { t(a('c1df')); }(0, ((e) => {
      const t = e.defineLocale('ss', {
        months: "Bhimbidvwane_Indlovana_Indlov'lenkhulu_Mabasa_Inkhwekhweti_Inhlaba_Kholwane_Ingci_Inyoni_Imphala_Lweti_Ingongoni".split('_'),
        monthsShort: 'Bhi_Ina_Inu_Mab_Ink_Inh_Kho_Igc_Iny_Imp_Lwe_Igo'.split('_'),
        weekdays: 'Lisontfo_Umsombuluko_Lesibili_Lesitsatfu_Lesine_Lesihlanu_Umgcibelo'.split('_'),
        weekdaysShort: 'Lis_Umb_Lsb_Les_Lsi_Lsh_Umg'.split('_'),
        weekdaysMin: 'Li_Us_Lb_Lt_Ls_Lh_Ug'.split('_'),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: 'h:mm A', LTS: 'h:mm:ss A', L: 'DD/MM/YYYY', LL: 'D MMMM YYYY', LLL: 'D MMMM YYYY h:mm A', LLLL: 'dddd, D MMMM YYYY h:mm A',
        },
        calendar: {
          sameDay: '[Namuhla nga] LT', nextDay: '[Kusasa nga] LT', nextWeek: 'dddd [nga] LT', lastDay: '[Itolo nga] LT', lastWeek: 'dddd [leliphelile] [nga] LT', sameElse: 'L',
        },
        relativeTime: {
          future: 'nga %s', past: 'wenteka nga %s', s: 'emizuzwana lomcane', ss: '%d mzuzwana', m: 'umzuzu', mm: '%d emizuzu', h: 'lihora', hh: '%d emahora', d: 'lilanga', dd: '%d emalanga', M: 'inyanga', MM: '%d tinyanga', y: 'umnyaka', yy: '%d iminyaka',
        },
        meridiemParse: /ekuseni|emini|entsambama|ebusuku/,
        meridiem(e, t, a) { return e < 11 ? 'ekuseni' : e < 15 ? 'emini' : e < 19 ? 'entsambama' : 'ebusuku'; },
        meridiemHour(e, t) { return e === 12 && (e = 0), t === 'ekuseni' ? e : t === 'emini' ? e >= 11 ? e : e + 12 : t === 'entsambama' || t === 'ebusuku' ? e === 0 ? 0 : e + 12 : void 0; },
        dayOfMonthOrdinalParse: /\d{1,2}/,
        ordinal: '%d',
        week: { dow: 1, doy: 4 },
      }); return t;
    })));
  },
  '55c9': function (e, t, a) {
    (function (e, t) { t(a('c1df')); }(0, ((e) => {
      const t = 'ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.'.split('_'); const a = 'ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic'.split('_'); const n = [/^ene/i, /^feb/i, /^mar/i, /^abr/i, /^may/i, /^jun/i, /^jul/i, /^ago/i, /^sep/i, /^oct/i, /^nov/i, /^dic/i]; const r = /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i; const i = e.defineLocale('es-us', {
        months: 'enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre'.split('_'),
        monthsShort(e, n) { return e ? /-MMM-/.test(n) ? a[e.month()] : t[e.month()] : t; },
        monthsRegex: r,
        monthsShortRegex: r,
        monthsStrictRegex: /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,
        monthsShortStrictRegex: /^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,
        monthsParse: n,
        longMonthsParse: n,
        shortMonthsParse: n,
        weekdays: 'domingo_lunes_martes_miércoles_jueves_viernes_sábado'.split('_'),
        weekdaysShort: 'dom._lun._mar._mié._jue._vie._sáb.'.split('_'),
        weekdaysMin: 'do_lu_ma_mi_ju_vi_sá'.split('_'),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: 'h:mm A', LTS: 'h:mm:ss A', L: 'MM/DD/YYYY', LL: 'D [de] MMMM [de] YYYY', LLL: 'D [de] MMMM [de] YYYY h:mm A', LLLL: 'dddd, D [de] MMMM [de] YYYY h:mm A',
        },
        calendar: {
          sameDay() { return `[hoy a la${this.hours() !== 1 ? 's' : ''}] LT`; }, nextDay() { return `[mañana a la${this.hours() !== 1 ? 's' : ''}] LT`; }, nextWeek() { return `dddd [a la${this.hours() !== 1 ? 's' : ''}] LT`; }, lastDay() { return `[ayer a la${this.hours() !== 1 ? 's' : ''}] LT`; }, lastWeek() { return `[el] dddd [pasado a la${this.hours() !== 1 ? 's' : ''}] LT`; }, sameElse: 'L',
        },
        relativeTime: {
          future: 'en %s', past: 'hace %s', s: 'unos segundos', ss: '%d segundos', m: 'un minuto', mm: '%d minutos', h: 'una hora', hh: '%d horas', d: 'un día', dd: '%d días', M: 'un mes', MM: '%d meses', y: 'un año', yy: '%d años',
        },
        dayOfMonthOrdinalParse: /\d{1,2}º/,
        ordinal: '%dº',
        week: { dow: 0, doy: 6 },
      }); return i;
    })));
  },
  '576c': function (e, t, a) {
    (function (e, t) { t(a('c1df')); }(0, ((e) => {
      const t = e.defineLocale('tet', {
        months: 'Janeiru_Fevereiru_Marsu_Abril_Maiu_Juñu_Jullu_Agustu_Setembru_Outubru_Novembru_Dezembru'.split('_'),
        monthsShort: 'Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez'.split('_'),
        weekdays: 'Domingu_Segunda_Tersa_Kuarta_Kinta_Sesta_Sabadu'.split('_'),
        weekdaysShort: 'Dom_Seg_Ters_Kua_Kint_Sest_Sab'.split('_'),
        weekdaysMin: 'Do_Seg_Te_Ku_Ki_Ses_Sa'.split('_'),
        longDateFormat: {
          LT: 'HH:mm', LTS: 'HH:mm:ss', L: 'DD/MM/YYYY', LL: 'D MMMM YYYY', LLL: 'D MMMM YYYY HH:mm', LLLL: 'dddd, D MMMM YYYY HH:mm',
        },
        calendar: {
          sameDay: '[Ohin iha] LT', nextDay: '[Aban iha] LT', nextWeek: 'dddd [iha] LT', lastDay: '[Horiseik iha] LT', lastWeek: 'dddd [semana kotuk] [iha] LT', sameElse: 'L',
        },
        relativeTime: {
          future: 'iha %s', past: '%s liuba', s: 'minutu balun', ss: 'minutu %d', m: 'minutu ida', mm: 'minutu %d', h: 'oras ida', hh: 'oras %d', d: 'loron ida', dd: 'loron %d', M: 'fulan ida', MM: 'fulan %d', y: 'tinan ida', yy: 'tinan %d',
        },
        dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
        ordinal(e) { const t = e % 10; const a = ~~(e % 100 / 10) === 1 ? 'th' : t === 1 ? 'st' : t === 2 ? 'nd' : t === 3 ? 'rd' : 'th'; return e + a; },
        week: { dow: 1, doy: 4 },
      }); return t;
    })));
  },
  '598a': function (e, t, a) {
    (function (e, t) { t(a('c1df')); }(0, ((e) => {
      const t = ['ޖެނުއަރީ', 'ފެބްރުއަރީ', 'މާރިޗު', 'އޭޕްރީލު', 'މޭ', 'ޖޫން', 'ޖުލައި', 'އޯގަސްޓު', 'ސެޕްޓެމްބަރު', 'އޮކްޓޯބަރު', 'ނޮވެމްބަރު', 'ޑިސެމްބަރު']; const a = ['އާދިއްތަ', 'ހޯމަ', 'އަންގާރަ', 'ބުދަ', 'ބުރާސްފަތި', 'ހުކުރު', 'ހޮނިހިރު']; const n = e.defineLocale('dv', {
        months: t,
        monthsShort: t,
        weekdays: a,
        weekdaysShort: a,
        weekdaysMin: 'އާދި_ހޯމަ_އަން_ބުދަ_ބުރާ_ހުކު_ހޮނި'.split('_'),
        longDateFormat: {
          LT: 'HH:mm', LTS: 'HH:mm:ss', L: 'D/M/YYYY', LL: 'D MMMM YYYY', LLL: 'D MMMM YYYY HH:mm', LLLL: 'dddd D MMMM YYYY HH:mm',
        },
        meridiemParse: /މކ|މފ/,
        isPM(e) { return e === 'މފ'; },
        meridiem(e, t, a) { return e < 12 ? 'މކ' : 'މފ'; },
        calendar: {
          sameDay: '[މިއަދު] LT', nextDay: '[މާދަމާ] LT', nextWeek: 'dddd LT', lastDay: '[އިއްޔެ] LT', lastWeek: '[ފާއިތުވި] dddd LT', sameElse: 'L',
        },
        relativeTime: {
          future: 'ތެރޭގައި %s', past: 'ކުރިން %s', s: 'ސިކުންތުކޮޅެއް', ss: 'd% ސިކުންތު', m: 'މިނިޓެއް', mm: 'މިނިޓު %d', h: 'ގަޑިއިރެއް', hh: 'ގަޑިއިރު %d', d: 'ދުވަހެއް', dd: 'ދުވަސް %d', M: 'މަހެއް', MM: 'މަސް %d', y: 'އަހަރެއް', yy: 'އަހަރު %d',
        },
        preparse(e) { return e.replace(/،/g, ','); },
        postformat(e) { return e.replace(/,/g, '،'); },
        week: { dow: 7, doy: 12 },
      }); return n;
    })));
  },
  '5b14': function (e, t, a) {
    (function (e, t) { t(a('c1df')); }(0, ((e) => {
      const t = 'vasárnap hétfőn kedden szerdán csütörtökön pénteken szombaton'.split(' '); function a(e, t, a, n) { const r = e; switch (a) { case 's': return n || t ? 'néhány másodperc' : 'néhány másodperce'; case 'ss': return r + (n || t) ? ' másodperc' : ' másodperce'; case 'm': return `egy${n || t ? ' perc' : ' perce'}`; case 'mm': return r + (n || t ? ' perc' : ' perce'); case 'h': return `egy${n || t ? ' óra' : ' órája'}`; case 'hh': return r + (n || t ? ' óra' : ' órája'); case 'd': return `egy${n || t ? ' nap' : ' napja'}`; case 'dd': return r + (n || t ? ' nap' : ' napja'); case 'M': return `egy${n || t ? ' hónap' : ' hónapja'}`; case 'MM': return r + (n || t ? ' hónap' : ' hónapja'); case 'y': return `egy${n || t ? ' év' : ' éve'}`; case 'yy': return r + (n || t ? ' év' : ' éve'); } return ''; } function n(e) { return `${e ? '' : '[múlt] '}[${t[this.day()]}] LT[-kor]`; } const r = e.defineLocale('hu', {
        months: 'január_február_március_április_május_június_július_augusztus_szeptember_október_november_december'.split('_'),
        monthsShort: 'jan_feb_márc_ápr_máj_jún_júl_aug_szept_okt_nov_dec'.split('_'),
        weekdays: 'vasárnap_hétfő_kedd_szerda_csütörtök_péntek_szombat'.split('_'),
        weekdaysShort: 'vas_hét_kedd_sze_csüt_pén_szo'.split('_'),
        weekdaysMin: 'v_h_k_sze_cs_p_szo'.split('_'),
        longDateFormat: {
          LT: 'H:mm', LTS: 'H:mm:ss', L: 'YYYY.MM.DD.', LL: 'YYYY. MMMM D.', LLL: 'YYYY. MMMM D. H:mm', LLLL: 'YYYY. MMMM D., dddd H:mm',
        },
        meridiemParse: /de|du/i,
        isPM(e) { return e.charAt(1).toLowerCase() === 'u'; },
        meridiem(e, t, a) { return e < 12 ? !0 === a ? 'de' : 'DE' : !0 === a ? 'du' : 'DU'; },
        calendar: {
          sameDay: '[ma] LT[-kor]', nextDay: '[holnap] LT[-kor]', nextWeek() { return n.call(this, !0); }, lastDay: '[tegnap] LT[-kor]', lastWeek() { return n.call(this, !1); }, sameElse: 'L',
        },
        relativeTime: {
          future: '%s múlva', past: '%s', s: a, ss: a, m: a, mm: a, h: a, hh: a, d: a, dd: a, M: a, MM: a, y: a, yy: a,
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: '%d.',
        week: { dow: 1, doy: 4 },
      }); return r;
    })));
  },
  '5c3a': function (e, t, a) {
    (function (e, t) { t(a('c1df')); }(0, ((e) => {
      const t = e.defineLocale('zh-cn', {
        months: '一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月'.split('_'),
        monthsShort: '1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月'.split('_'),
        weekdays: '星期日_星期一_星期二_星期三_星期四_星期五_星期六'.split('_'),
        weekdaysShort: '周日_周一_周二_周三_周四_周五_周六'.split('_'),
        weekdaysMin: '日_一_二_三_四_五_六'.split('_'),
        longDateFormat: {
          LT: 'HH:mm', LTS: 'HH:mm:ss', L: 'YYYY/MM/DD', LL: 'YYYY年M月D日', LLL: 'YYYY年M月D日Ah点mm分', LLLL: 'YYYY年M月D日ddddAh点mm分', l: 'YYYY/M/D', ll: 'YYYY年M月D日', lll: 'YYYY年M月D日 HH:mm', llll: 'YYYY年M月D日dddd HH:mm',
        },
        meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
        meridiemHour(e, t) { return e === 12 && (e = 0), t === '凌晨' || t === '早上' || t === '上午' ? e : t === '下午' || t === '晚上' ? e + 12 : e >= 11 ? e : e + 12; },
        meridiem(e, t, a) { const n = 100 * e + t; return n < 600 ? '凌晨' : n < 900 ? '早上' : n < 1130 ? '上午' : n < 1230 ? '中午' : n < 1800 ? '下午' : '晚上'; },
        calendar: {
          sameDay: '[今天]LT', nextDay: '[明天]LT', nextWeek: '[下]ddddLT', lastDay: '[昨天]LT', lastWeek: '[上]ddddLT', sameElse: 'L',
        },
        dayOfMonthOrdinalParse: /\d{1,2}(日|月|周)/,
        ordinal(e, t) { switch (t) { case 'd': case 'D': case 'DDD': return `${e}日`; case 'M': return `${e}月`; case 'w': case 'W': return `${e}周`; default: return e; } },
        relativeTime: {
          future: '%s内', past: '%s前', s: '几秒', ss: '%d 秒', m: '1 分钟', mm: '%d 分钟', h: '1 小时', hh: '%d 小时', d: '1 天', dd: '%d 天', M: '1 个月', MM: '%d 个月', y: '1 年', yy: '%d 年',
        },
        week: { dow: 1, doy: 4 },
      }); return t;
    })));
  },
  '5cbb': function (e, t, a) {
    (function (e, t) { t(a('c1df')); }(0, ((e) => {
      const t = e.defineLocale('te', {
        months: 'జనవరి_ఫిబ్రవరి_మార్చి_ఏప్రిల్_మే_జూన్_జులై_ఆగస్టు_సెప్టెంబర్_అక్టోబర్_నవంబర్_డిసెంబర్'.split('_'),
        monthsShort: 'జన._ఫిబ్ర._మార్చి_ఏప్రి._మే_జూన్_జులై_ఆగ._సెప్._అక్టో._నవ._డిసె.'.split('_'),
        monthsParseExact: !0,
        weekdays: 'ఆదివారం_సోమవారం_మంగళవారం_బుధవారం_గురువారం_శుక్రవారం_శనివారం'.split('_'),
        weekdaysShort: 'ఆది_సోమ_మంగళ_బుధ_గురు_శుక్ర_శని'.split('_'),
        weekdaysMin: 'ఆ_సో_మం_బు_గు_శు_శ'.split('_'),
        longDateFormat: {
          LT: 'A h:mm', LTS: 'A h:mm:ss', L: 'DD/MM/YYYY', LL: 'D MMMM YYYY', LLL: 'D MMMM YYYY, A h:mm', LLLL: 'dddd, D MMMM YYYY, A h:mm',
        },
        calendar: {
          sameDay: '[నేడు] LT', nextDay: '[రేపు] LT', nextWeek: 'dddd, LT', lastDay: '[నిన్న] LT', lastWeek: '[గత] dddd, LT', sameElse: 'L',
        },
        relativeTime: {
          future: '%s లో', past: '%s క్రితం', s: 'కొన్ని క్షణాలు', ss: '%d సెకన్లు', m: 'ఒక నిమిషం', mm: '%d నిమిషాలు', h: 'ఒక గంట', hh: '%d గంటలు', d: 'ఒక రోజు', dd: '%d రోజులు', M: 'ఒక నెల', MM: '%d నెలలు', y: 'ఒక సంవత్సరం', yy: '%d సంవత్సరాలు',
        },
        dayOfMonthOrdinalParse: /\d{1,2}వ/,
        ordinal: '%dవ',
        meridiemParse: /రాత్రి|ఉదయం|మధ్యాహ్నం|సాయంత్రం/,
        meridiemHour(e, t) { return e === 12 && (e = 0), t === 'రాత్రి' ? e < 4 ? e : e + 12 : t === 'ఉదయం' ? e : t === 'మధ్యాహ్నం' ? e >= 10 ? e : e + 12 : t === 'సాయంత్రం' ? e + 12 : void 0; },
        meridiem(e, t, a) { return e < 4 ? 'రాత్రి' : e < 10 ? 'ఉదయం' : e < 17 ? 'మధ్యాహ్నం' : e < 20 ? 'సాయంత్రం' : 'రాత్రి'; },
        week: { dow: 0, doy: 6 },
      }); return t;
    })));
  },
  '5f6c': function (e, t, a) {
    const n = a('eae6'); const r = a.n(n); r.a;
  },
  '5fbd': function (e, t, a) {
    (function (e, t) { t(a('c1df')); }(0, ((e) => {
      const t = e.defineLocale('sv', {
        months: 'januari_februari_mars_april_maj_juni_juli_augusti_september_oktober_november_december'.split('_'),
        monthsShort: 'jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec'.split('_'),
        weekdays: 'söndag_måndag_tisdag_onsdag_torsdag_fredag_lördag'.split('_'),
        weekdaysShort: 'sön_mån_tis_ons_tor_fre_lör'.split('_'),
        weekdaysMin: 'sö_må_ti_on_to_fr_lö'.split('_'),
        longDateFormat: {
          LT: 'HH:mm', LTS: 'HH:mm:ss', L: 'YYYY-MM-DD', LL: 'D MMMM YYYY', LLL: 'D MMMM YYYY [kl.] HH:mm', LLLL: 'dddd D MMMM YYYY [kl.] HH:mm', lll: 'D MMM YYYY HH:mm', llll: 'ddd D MMM YYYY HH:mm',
        },
        calendar: {
          sameDay: '[Idag] LT', nextDay: '[Imorgon] LT', lastDay: '[Igår] LT', nextWeek: '[På] dddd LT', lastWeek: '[I] dddd[s] LT', sameElse: 'L',
        },
        relativeTime: {
          future: 'om %s', past: 'för %s sedan', s: 'några sekunder', ss: '%d sekunder', m: 'en minut', mm: '%d minuter', h: 'en timme', hh: '%d timmar', d: 'en dag', dd: '%d dagar', M: 'en månad', MM: '%d månader', y: 'ett år', yy: '%d år',
        },
        dayOfMonthOrdinalParse: /\d{1,2}(e|a)/,
        ordinal(e) { const t = e % 10; const a = ~~(e % 100 / 10) === 1 ? 'e' : t === 1 || t === 2 ? 'a' : 'e'; return e + a; },
        week: { dow: 1, doy: 4 },
      }); return t;
    })));
  },
  6117(e, t, a) {
    (function (e, t) { t(a('c1df')); }(0, ((e) => {
      const t = e.defineLocale('ug-cn', {
        months: 'يانۋار_فېۋرال_مارت_ئاپرېل_ماي_ئىيۇن_ئىيۇل_ئاۋغۇست_سېنتەبىر_ئۆكتەبىر_نويابىر_دېكابىر'.split('_'),
        monthsShort: 'يانۋار_فېۋرال_مارت_ئاپرېل_ماي_ئىيۇن_ئىيۇل_ئاۋغۇست_سېنتەبىر_ئۆكتەبىر_نويابىر_دېكابىر'.split('_'),
        weekdays: 'يەكشەنبە_دۈشەنبە_سەيشەنبە_چارشەنبە_پەيشەنبە_جۈمە_شەنبە'.split('_'),
        weekdaysShort: 'يە_دۈ_سە_چا_پە_جۈ_شە'.split('_'),
        weekdaysMin: 'يە_دۈ_سە_چا_پە_جۈ_شە'.split('_'),
        longDateFormat: {
          LT: 'HH:mm', LTS: 'HH:mm:ss', L: 'YYYY-MM-DD', LL: 'YYYY-يىلىM-ئاينىڭD-كۈنى', LLL: 'YYYY-يىلىM-ئاينىڭD-كۈنى، HH:mm', LLLL: 'dddd، YYYY-يىلىM-ئاينىڭD-كۈنى، HH:mm',
        },
        meridiemParse: /يېرىم كېچە|سەھەر|چۈشتىن بۇرۇن|چۈش|چۈشتىن كېيىن|كەچ/,
        meridiemHour(e, t) { return e === 12 && (e = 0), t === 'يېرىم كېچە' || t === 'سەھەر' || t === 'چۈشتىن بۇرۇن' ? e : t === 'چۈشتىن كېيىن' || t === 'كەچ' ? e + 12 : e >= 11 ? e : e + 12; },
        meridiem(e, t, a) { const n = 100 * e + t; return n < 600 ? 'يېرىم كېچە' : n < 900 ? 'سەھەر' : n < 1130 ? 'چۈشتىن بۇرۇن' : n < 1230 ? 'چۈش' : n < 1800 ? 'چۈشتىن كېيىن' : 'كەچ'; },
        calendar: {
          sameDay: '[بۈگۈن سائەت] LT', nextDay: '[ئەتە سائەت] LT', nextWeek: '[كېلەركى] dddd [سائەت] LT', lastDay: '[تۆنۈگۈن] LT', lastWeek: '[ئالدىنقى] dddd [سائەت] LT', sameElse: 'L',
        },
        relativeTime: {
          future: '%s كېيىن', past: '%s بۇرۇن', s: 'نەچچە سېكونت', ss: '%d سېكونت', m: 'بىر مىنۇت', mm: '%d مىنۇت', h: 'بىر سائەت', hh: '%d سائەت', d: 'بىر كۈن', dd: '%d كۈن', M: 'بىر ئاي', MM: '%d ئاي', y: 'بىر يىل', yy: '%d يىل',
        },
        dayOfMonthOrdinalParse: /\d{1,2}(-كۈنى|-ئاي|-ھەپتە)/,
        ordinal(e, t) { switch (t) { case 'd': case 'D': case 'DDD': return `${e}-كۈنى`; case 'w': case 'W': return `${e}-ھەپتە`; default: return e; } },
        preparse(e) { return e.replace(/،/g, ','); },
        postformat(e) { return e.replace(/,/g, '،'); },
        week: { dow: 1, doy: 7 },
      }); return t;
    })));
  },
  '62e4': function (e, t) { e.exports = function (e) { return e.webpackPolyfill || (e.deprecate = function () {}, e.paths = [], e.children || (e.children = []), Object.defineProperty(e, 'loaded', { enumerable: !0, get() { return e.l; } }), Object.defineProperty(e, 'id', { enumerable: !0, get() { return e.i; } }), e.webpackPolyfill = 1), e; }; },
  6403(e, t, a) {
    (function (e, t) { t(a('c1df')); }(0, ((e) => {
      const t = e.defineLocale('ms-my', {
        months: 'Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember'.split('_'),
        monthsShort: 'Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis'.split('_'),
        weekdays: 'Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu'.split('_'),
        weekdaysShort: 'Ahd_Isn_Sel_Rab_Kha_Jum_Sab'.split('_'),
        weekdaysMin: 'Ah_Is_Sl_Rb_Km_Jm_Sb'.split('_'),
        longDateFormat: {
          LT: 'HH.mm', LTS: 'HH.mm.ss', L: 'DD/MM/YYYY', LL: 'D MMMM YYYY', LLL: 'D MMMM YYYY [pukul] HH.mm', LLLL: 'dddd, D MMMM YYYY [pukul] HH.mm',
        },
        meridiemParse: /pagi|tengahari|petang|malam/,
        meridiemHour(e, t) { return e === 12 && (e = 0), t === 'pagi' ? e : t === 'tengahari' ? e >= 11 ? e : e + 12 : t === 'petang' || t === 'malam' ? e + 12 : void 0; },
        meridiem(e, t, a) { return e < 11 ? 'pagi' : e < 15 ? 'tengahari' : e < 19 ? 'petang' : 'malam'; },
        calendar: {
          sameDay: '[Hari ini pukul] LT', nextDay: '[Esok pukul] LT', nextWeek: 'dddd [pukul] LT', lastDay: '[Kelmarin pukul] LT', lastWeek: 'dddd [lepas pukul] LT', sameElse: 'L',
        },
        relativeTime: {
          future: 'dalam %s', past: '%s yang lepas', s: 'beberapa saat', ss: '%d saat', m: 'seminit', mm: '%d minit', h: 'sejam', hh: '%d jam', d: 'sehari', dd: '%d hari', M: 'sebulan', MM: '%d bulan', y: 'setahun', yy: '%d tahun',
        },
        week: { dow: 1, doy: 7 },
      }); return t;
    })));
  },
  '65db': function (e, t, a) {
    (function (e, t) { t(a('c1df')); }(0, ((e) => {
      const t = e.defineLocale('eo', {
        months: 'januaro_februaro_marto_aprilo_majo_junio_julio_aŭgusto_septembro_oktobro_novembro_decembro'.split('_'),
        monthsShort: 'jan_feb_mar_apr_maj_jun_jul_aŭg_sep_okt_nov_dec'.split('_'),
        weekdays: 'dimanĉo_lundo_mardo_merkredo_ĵaŭdo_vendredo_sabato'.split('_'),
        weekdaysShort: 'dim_lun_mard_merk_ĵaŭ_ven_sab'.split('_'),
        weekdaysMin: 'di_lu_ma_me_ĵa_ve_sa'.split('_'),
        longDateFormat: {
          LT: 'HH:mm', LTS: 'HH:mm:ss', L: 'YYYY-MM-DD', LL: 'D[-a de] MMMM, YYYY', LLL: 'D[-a de] MMMM, YYYY HH:mm', LLLL: 'dddd, [la] D[-a de] MMMM, YYYY HH:mm',
        },
        meridiemParse: /[ap]\.t\.m/i,
        isPM(e) { return e.charAt(0).toLowerCase() === 'p'; },
        meridiem(e, t, a) { return e > 11 ? a ? 'p.t.m.' : 'P.T.M.' : a ? 'a.t.m.' : 'A.T.M.'; },
        calendar: {
          sameDay: '[Hodiaŭ je] LT', nextDay: '[Morgaŭ je] LT', nextWeek: 'dddd [je] LT', lastDay: '[Hieraŭ je] LT', lastWeek: '[pasinta] dddd [je] LT', sameElse: 'L',
        },
        relativeTime: {
          future: 'post %s', past: 'antaŭ %s', s: 'sekundoj', ss: '%d sekundoj', m: 'minuto', mm: '%d minutoj', h: 'horo', hh: '%d horoj', d: 'tago', dd: '%d tagoj', M: 'monato', MM: '%d monatoj', y: 'jaro', yy: '%d jaroj',
        },
        dayOfMonthOrdinalParse: /\d{1,2}a/,
        ordinal: '%da',
        week: { dow: 1, doy: 7 },
      }); return t;
    })));
  },
  6784(e, t, a) {
    (function (e, t) { t(a('c1df')); }(0, ((e) => {
      const t = ['جنوري', 'فيبروري', 'مارچ', 'اپريل', 'مئي', 'جون', 'جولاءِ', 'آگسٽ', 'سيپٽمبر', 'آڪٽوبر', 'نومبر', 'ڊسمبر']; const a = ['آچر', 'سومر', 'اڱارو', 'اربع', 'خميس', 'جمع', 'ڇنڇر']; const n = e.defineLocale('sd', {
        months: t,
        monthsShort: t,
        weekdays: a,
        weekdaysShort: a,
        weekdaysMin: a,
        longDateFormat: {
          LT: 'HH:mm', LTS: 'HH:mm:ss', L: 'DD/MM/YYYY', LL: 'D MMMM YYYY', LLL: 'D MMMM YYYY HH:mm', LLLL: 'dddd، D MMMM YYYY HH:mm',
        },
        meridiemParse: /صبح|شام/,
        isPM(e) { return e === 'شام'; },
        meridiem(e, t, a) { return e < 12 ? 'صبح' : 'شام'; },
        calendar: {
          sameDay: '[اڄ] LT', nextDay: '[سڀاڻي] LT', nextWeek: 'dddd [اڳين هفتي تي] LT', lastDay: '[ڪالهه] LT', lastWeek: '[گزريل هفتي] dddd [تي] LT', sameElse: 'L',
        },
        relativeTime: {
          future: '%s پوء', past: '%s اڳ', s: 'چند سيڪنڊ', ss: '%d سيڪنڊ', m: 'هڪ منٽ', mm: '%d منٽ', h: 'هڪ ڪلاڪ', hh: '%d ڪلاڪ', d: 'هڪ ڏينهن', dd: '%d ڏينهن', M: 'هڪ مهينو', MM: '%d مهينا', y: 'هڪ سال', yy: '%d سال',
        },
        preparse(e) { return e.replace(/،/g, ','); },
        postformat(e) { return e.replace(/,/g, '،'); },
        week: { dow: 1, doy: 4 },
      }); return n;
    })));
  },
  6887(e, t, a) {
    (function (e, t) { t(a('c1df')); }(0, ((e) => {
      function t(e, t, a) { const n = { mm: 'munutenn', MM: 'miz', dd: 'devezh' }; return `${e} ${r(n[a], e)}`; } function a(e) { switch (n(e)) { case 1: case 3: case 4: case 5: case 9: return `${e} bloaz`; default: return `${e} vloaz`; } } function n(e) { return e > 9 ? n(e % 10) : e; } function r(e, t) { return t === 2 ? i(e) : e; } function i(e) { const t = { m: 'v', b: 'v', d: 'z' }; return void 0 === t[e.charAt(0)] ? e : t[e.charAt(0)] + e.substring(1); } const s = e.defineLocale('br', {
        months: "Genver_C'hwevrer_Meurzh_Ebrel_Mae_Mezheven_Gouere_Eost_Gwengolo_Here_Du_Kerzu".split('_'),
        monthsShort: "Gen_C'hwe_Meu_Ebr_Mae_Eve_Gou_Eos_Gwe_Her_Du_Ker".split('_'),
        weekdays: "Sul_Lun_Meurzh_Merc'her_Yaou_Gwener_Sadorn".split('_'),
        weekdaysShort: 'Sul_Lun_Meu_Mer_Yao_Gwe_Sad'.split('_'),
        weekdaysMin: 'Su_Lu_Me_Mer_Ya_Gw_Sa'.split('_'),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: 'h[e]mm A', LTS: 'h[e]mm:ss A', L: 'DD/MM/YYYY', LL: 'D [a viz] MMMM YYYY', LLL: 'D [a viz] MMMM YYYY h[e]mm A', LLLL: 'dddd, D [a viz] MMMM YYYY h[e]mm A',
        },
        calendar: {
          sameDay: '[Hiziv da] LT', nextDay: "[Warc'hoazh da] LT", nextWeek: 'dddd [da] LT', lastDay: "[Dec'h da] LT", lastWeek: 'dddd [paset da] LT', sameElse: 'L',
        },
        relativeTime: {
          future: 'a-benn %s', past: "%s 'zo", s: 'un nebeud segondennoù', ss: '%d eilenn', m: 'ur vunutenn', mm: t, h: 'un eur', hh: '%d eur', d: 'un devezh', dd: t, M: 'ur miz', MM: t, y: 'ur bloaz', yy: a,
        },
        dayOfMonthOrdinalParse: /\d{1,2}(añ|vet)/,
        ordinal(e) { const t = e === 1 ? 'añ' : 'vet'; return e + t; },
        week: { dow: 1, doy: 4 },
      }); return s;
    })));
  },
  '688b': function (e, t, a) {
    (function (e, t) { t(a('c1df')); }(0, ((e) => {
      const t = e.defineLocale('mi', {
        months: 'Kohi-tāte_Hui-tanguru_Poutū-te-rangi_Paenga-whāwhā_Haratua_Pipiri_Hōngoingoi_Here-turi-kōkā_Mahuru_Whiringa-ā-nuku_Whiringa-ā-rangi_Hakihea'.split('_'),
        monthsShort: 'Kohi_Hui_Pou_Pae_Hara_Pipi_Hōngoi_Here_Mahu_Whi-nu_Whi-ra_Haki'.split('_'),
        monthsRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,
        monthsStrictRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,
        monthsShortRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,
        monthsShortStrictRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,2}/i,
        weekdays: 'Rātapu_Mane_Tūrei_Wenerei_Tāite_Paraire_Hātarei'.split('_'),
        weekdaysShort: 'Ta_Ma_Tū_We_Tāi_Pa_Hā'.split('_'),
        weekdaysMin: 'Ta_Ma_Tū_We_Tāi_Pa_Hā'.split('_'),
        longDateFormat: {
          LT: 'HH:mm', LTS: 'HH:mm:ss', L: 'DD/MM/YYYY', LL: 'D MMMM YYYY', LLL: 'D MMMM YYYY [i] HH:mm', LLLL: 'dddd, D MMMM YYYY [i] HH:mm',
        },
        calendar: {
          sameDay: '[i teie mahana, i] LT', nextDay: '[apopo i] LT', nextWeek: 'dddd [i] LT', lastDay: '[inanahi i] LT', lastWeek: 'dddd [whakamutunga i] LT', sameElse: 'L',
        },
        relativeTime: {
          future: 'i roto i %s', past: '%s i mua', s: 'te hēkona ruarua', ss: '%d hēkona', m: 'he meneti', mm: '%d meneti', h: 'te haora', hh: '%d haora', d: 'he ra', dd: '%d ra', M: 'he marama', MM: '%d marama', y: 'he tau', yy: '%d tau',
        },
        dayOfMonthOrdinalParse: /\d{1,2}º/,
        ordinal: '%dº',
        week: { dow: 1, doy: 4 },
      }); return t;
    })));
  },
  6909(e, t, a) {
    (function (e, t) { t(a('c1df')); }(0, ((e) => {
      const t = e.defineLocale('mk', {
        months: 'јануари_февруари_март_април_мај_јуни_јули_август_септември_октомври_ноември_декември'.split('_'),
        monthsShort: 'јан_фев_мар_апр_мај_јун_јул_авг_сеп_окт_ное_дек'.split('_'),
        weekdays: 'недела_понеделник_вторник_среда_четврток_петок_сабота'.split('_'),
        weekdaysShort: 'нед_пон_вто_сре_чет_пет_саб'.split('_'),
        weekdaysMin: 'нe_пo_вт_ср_че_пе_сa'.split('_'),
        longDateFormat: {
          LT: 'H:mm', LTS: 'H:mm:ss', L: 'D.MM.YYYY', LL: 'D MMMM YYYY', LLL: 'D MMMM YYYY H:mm', LLLL: 'dddd, D MMMM YYYY H:mm',
        },
        calendar: {
          sameDay: '[Денес во] LT', nextDay: '[Утре во] LT', nextWeek: '[Во] dddd [во] LT', lastDay: '[Вчера во] LT', lastWeek() { switch (this.day()) { case 0: case 3: case 6: return '[Изминатата] dddd [во] LT'; case 1: case 2: case 4: case 5: return '[Изминатиот] dddd [во] LT'; } }, sameElse: 'L',
        },
        relativeTime: {
          future: 'после %s', past: 'пред %s', s: 'неколку секунди', ss: '%d секунди', m: 'минута', mm: '%d минути', h: 'час', hh: '%d часа', d: 'ден', dd: '%d дена', M: 'месец', MM: '%d месеци', y: 'година', yy: '%d години',
        },
        dayOfMonthOrdinalParse: /\d{1,2}-(ев|ен|ти|ви|ри|ми)/,
        ordinal(e) { const t = e % 10; const a = e % 100; return e === 0 ? `${e}-ев` : a === 0 ? `${e}-ен` : a > 10 && a < 20 ? `${e}-ти` : t === 1 ? `${e}-ви` : t === 2 ? `${e}-ри` : t === 7 || t === 8 ? `${e}-ми` : `${e}-ти`; },
        week: { dow: 1, doy: 7 },
      }); return t;
    })));
  },
  '6ce3': function (e, t, a) {
    (function (e, t) { t(a('c1df')); }(0, ((e) => {
      const t = e.defineLocale('nb', {
        months: 'januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember'.split('_'),
        monthsShort: 'jan._feb._mars_april_mai_juni_juli_aug._sep._okt._nov._des.'.split('_'),
        monthsParseExact: !0,
        weekdays: 'søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag'.split('_'),
        weekdaysShort: 'sø._ma._ti._on._to._fr._lø.'.split('_'),
        weekdaysMin: 'sø_ma_ti_on_to_fr_lø'.split('_'),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: 'HH:mm', LTS: 'HH:mm:ss', L: 'DD.MM.YYYY', LL: 'D. MMMM YYYY', LLL: 'D. MMMM YYYY [kl.] HH:mm', LLLL: 'dddd D. MMMM YYYY [kl.] HH:mm',
        },
        calendar: {
          sameDay: '[i dag kl.] LT', nextDay: '[i morgen kl.] LT', nextWeek: 'dddd [kl.] LT', lastDay: '[i går kl.] LT', lastWeek: '[forrige] dddd [kl.] LT', sameElse: 'L',
        },
        relativeTime: {
          future: 'om %s', past: '%s siden', s: 'noen sekunder', ss: '%d sekunder', m: 'ett minutt', mm: '%d minutter', h: 'en time', hh: '%d timer', d: 'en dag', dd: '%d dager', M: 'en måned', MM: '%d måneder', y: 'ett år', yy: '%d år',
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: '%d.',
        week: { dow: 1, doy: 4 },
      }); return t;
    })));
  },
  '6d79': function (e, t, a) {
    (function (e, t) { t(a('c1df')); }(0, ((e) => {
      const t = {
        0: '-ші', 1: '-ші', 2: '-ші', 3: '-ші', 4: '-ші', 5: '-ші', 6: '-шы', 7: '-ші', 8: '-ші', 9: '-шы', 10: '-шы', 20: '-шы', 30: '-шы', 40: '-шы', 50: '-ші', 60: '-шы', 70: '-ші', 80: '-ші', 90: '-шы', 100: '-ші',
      }; const a = e.defineLocale('kk', {
        months: 'қаңтар_ақпан_наурыз_сәуір_мамыр_маусым_шілде_тамыз_қыркүйек_қазан_қараша_желтоқсан'.split('_'),
        monthsShort: 'қаң_ақп_нау_сәу_мам_мау_шіл_там_қыр_қаз_қар_жел'.split('_'),
        weekdays: 'жексенбі_дүйсенбі_сейсенбі_сәрсенбі_бейсенбі_жұма_сенбі'.split('_'),
        weekdaysShort: 'жек_дүй_сей_сәр_бей_жұм_сен'.split('_'),
        weekdaysMin: 'жк_дй_сй_ср_бй_жм_сн'.split('_'),
        longDateFormat: {
          LT: 'HH:mm', LTS: 'HH:mm:ss', L: 'DD.MM.YYYY', LL: 'D MMMM YYYY', LLL: 'D MMMM YYYY HH:mm', LLLL: 'dddd, D MMMM YYYY HH:mm',
        },
        calendar: {
          sameDay: '[Бүгін сағат] LT', nextDay: '[Ертең сағат] LT', nextWeek: 'dddd [сағат] LT', lastDay: '[Кеше сағат] LT', lastWeek: '[Өткен аптаның] dddd [сағат] LT', sameElse: 'L',
        },
        relativeTime: {
          future: '%s ішінде', past: '%s бұрын', s: 'бірнеше секунд', ss: '%d секунд', m: 'бір минут', mm: '%d минут', h: 'бір сағат', hh: '%d сағат', d: 'бір күн', dd: '%d күн', M: 'бір ай', MM: '%d ай', y: 'бір жыл', yy: '%d жыл',
        },
        dayOfMonthOrdinalParse: /\d{1,2}-(ші|шы)/,
        ordinal(e) { const a = e % 10; const n = e >= 100 ? 100 : null; return e + (t[e] || t[a] || t[n]); },
        week: { dow: 1, doy: 7 },
      }); return a;
    })));
  },
  '6d83': function (e, t, a) {
    (function (e, t) { t(a('c1df')); }(0, ((e) => {
      const t = e.defineLocale('ar-tn', {
        months: 'جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر'.split('_'),
        monthsShort: 'جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر'.split('_'),
        weekdays: 'الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت'.split('_'),
        weekdaysShort: 'أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت'.split('_'),
        weekdaysMin: 'ح_ن_ث_ر_خ_ج_س'.split('_'),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: 'HH:mm', LTS: 'HH:mm:ss', L: 'DD/MM/YYYY', LL: 'D MMMM YYYY', LLL: 'D MMMM YYYY HH:mm', LLLL: 'dddd D MMMM YYYY HH:mm',
        },
        calendar: {
          sameDay: '[اليوم على الساعة] LT', nextDay: '[غدا على الساعة] LT', nextWeek: 'dddd [على الساعة] LT', lastDay: '[أمس على الساعة] LT', lastWeek: 'dddd [على الساعة] LT', sameElse: 'L',
        },
        relativeTime: {
          future: 'في %s', past: 'منذ %s', s: 'ثوان', ss: '%d ثانية', m: 'دقيقة', mm: '%d دقائق', h: 'ساعة', hh: '%d ساعات', d: 'يوم', dd: '%d أيام', M: 'شهر', MM: '%d أشهر', y: 'سنة', yy: '%d سنوات',
        },
        week: { dow: 1, doy: 4 },
      }); return t;
    })));
  },
  '6e98': function (e, t, a) {
    (function (e, t) { t(a('c1df')); }(0, ((e) => {
      const t = e.defineLocale('it', {
        months: 'gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre'.split('_'),
        monthsShort: 'gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic'.split('_'),
        weekdays: 'domenica_lunedì_martedì_mercoledì_giovedì_venerdì_sabato'.split('_'),
        weekdaysShort: 'dom_lun_mar_mer_gio_ven_sab'.split('_'),
        weekdaysMin: 'do_lu_ma_me_gi_ve_sa'.split('_'),
        longDateFormat: {
          LT: 'HH:mm', LTS: 'HH:mm:ss', L: 'DD/MM/YYYY', LL: 'D MMMM YYYY', LLL: 'D MMMM YYYY HH:mm', LLLL: 'dddd D MMMM YYYY HH:mm',
        },
        calendar: {
          sameDay: '[Oggi alle] LT', nextDay: '[Domani alle] LT', nextWeek: 'dddd [alle] LT', lastDay: '[Ieri alle] LT', lastWeek() { switch (this.day()) { case 0: return '[la scorsa] dddd [alle] LT'; default: return '[lo scorso] dddd [alle] LT'; } }, sameElse: 'L',
        },
        relativeTime: {
          future(e) { return `${/^[0-9].+$/.test(e) ? 'tra' : 'in'} ${e}`; }, past: '%s fa', s: 'alcuni secondi', ss: '%d secondi', m: 'un minuto', mm: '%d minuti', h: "un'ora", hh: '%d ore', d: 'un giorno', dd: '%d giorni', M: 'un mese', MM: '%d mesi', y: 'un anno', yy: '%d anni',
        },
        dayOfMonthOrdinalParse: /\d{1,2}º/,
        ordinal: '%dº',
        week: { dow: 1, doy: 4 },
      }); return t;
    })));
  },
  '6f12': function (e, t, a) {
    (function (e, t) { t(a('c1df')); }(0, ((e) => {
      const t = e.defineLocale('it-ch', {
        months: 'gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre'.split('_'),
        monthsShort: 'gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic'.split('_'),
        weekdays: 'domenica_lunedì_martedì_mercoledì_giovedì_venerdì_sabato'.split('_'),
        weekdaysShort: 'dom_lun_mar_mer_gio_ven_sab'.split('_'),
        weekdaysMin: 'do_lu_ma_me_gi_ve_sa'.split('_'),
        longDateFormat: {
          LT: 'HH:mm', LTS: 'HH:mm:ss', L: 'DD.MM.YYYY', LL: 'D MMMM YYYY', LLL: 'D MMMM YYYY HH:mm', LLLL: 'dddd D MMMM YYYY HH:mm',
        },
        calendar: {
          sameDay: '[Oggi alle] LT', nextDay: '[Domani alle] LT', nextWeek: 'dddd [alle] LT', lastDay: '[Ieri alle] LT', lastWeek() { switch (this.day()) { case 0: return '[la scorsa] dddd [alle] LT'; default: return '[lo scorso] dddd [alle] LT'; } }, sameElse: 'L',
        },
        relativeTime: {
          future(e) { return `${/^[0-9].+$/.test(e) ? 'tra' : 'in'} ${e}`; }, past: '%s fa', s: 'alcuni secondi', ss: '%d secondi', m: 'un minuto', mm: '%d minuti', h: "un'ora", hh: '%d ore', d: 'un giorno', dd: '%d giorni', M: 'un mese', MM: '%d mesi', y: 'un anno', yy: '%d anni',
        },
        dayOfMonthOrdinalParse: /\d{1,2}º/,
        ordinal: '%dº',
        week: { dow: 1, doy: 4 },
      }); return t;
    })));
  },
  '6f50': function (e, t, a) {
    (function (e, t) { t(a('c1df')); }(0, ((e) => {
      const t = e.defineLocale('en-nz', {
        months: 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
        monthsShort: 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
        weekdays: 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
        weekdaysShort: 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
        weekdaysMin: 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
        longDateFormat: {
          LT: 'h:mm A', LTS: 'h:mm:ss A', L: 'DD/MM/YYYY', LL: 'D MMMM YYYY', LLL: 'D MMMM YYYY h:mm A', LLLL: 'dddd, D MMMM YYYY h:mm A',
        },
        calendar: {
          sameDay: '[Today at] LT', nextDay: '[Tomorrow at] LT', nextWeek: 'dddd [at] LT', lastDay: '[Yesterday at] LT', lastWeek: '[Last] dddd [at] LT', sameElse: 'L',
        },
        relativeTime: {
          future: 'in %s', past: '%s ago', s: 'a few seconds', ss: '%d seconds', m: 'a minute', mm: '%d minutes', h: 'an hour', hh: '%d hours', d: 'a day', dd: '%d days', M: 'a month', MM: '%d months', y: 'a year', yy: '%d years',
        },
        dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
        ordinal(e) { const t = e % 10; const a = ~~(e % 100 / 10) === 1 ? 'th' : t === 1 ? 'st' : t === 2 ? 'nd' : t === 3 ? 'rd' : 'th'; return e + a; },
        week: { dow: 1, doy: 4 },
      }); return t;
    })));
  },
  7118(e, t, a) {
    (function (e, t) { t(a('c1df')); }(0, ((e) => {
      const t = 'jan._feb._mrt._apr._mai_jun._jul._aug._sep._okt._nov._des.'.split('_'); const a = 'jan_feb_mrt_apr_mai_jun_jul_aug_sep_okt_nov_des'.split('_'); const n = e.defineLocale('fy', {
        months: 'jannewaris_febrewaris_maart_april_maaie_juny_july_augustus_septimber_oktober_novimber_desimber'.split('_'),
        monthsShort(e, n) { return e ? /-MMM-/.test(n) ? a[e.month()] : t[e.month()] : t; },
        monthsParseExact: !0,
        weekdays: 'snein_moandei_tiisdei_woansdei_tongersdei_freed_sneon'.split('_'),
        weekdaysShort: 'si._mo._ti._wo._to._fr._so.'.split('_'),
        weekdaysMin: 'Si_Mo_Ti_Wo_To_Fr_So'.split('_'),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: 'HH:mm', LTS: 'HH:mm:ss', L: 'DD-MM-YYYY', LL: 'D MMMM YYYY', LLL: 'D MMMM YYYY HH:mm', LLLL: 'dddd D MMMM YYYY HH:mm',
        },
        calendar: {
          sameDay: '[hjoed om] LT', nextDay: '[moarn om] LT', nextWeek: 'dddd [om] LT', lastDay: '[juster om] LT', lastWeek: '[ôfrûne] dddd [om] LT', sameElse: 'L',
        },
        relativeTime: {
          future: 'oer %s', past: '%s lyn', s: 'in pear sekonden', ss: '%d sekonden', m: 'ien minút', mm: '%d minuten', h: 'ien oere', hh: '%d oeren', d: 'ien dei', dd: '%d dagen', M: 'ien moanne', MM: '%d moannen', y: 'ien jier', yy: '%d jierren',
        },
        dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
        ordinal(e) { return e + (e === 1 || e === 8 || e >= 20 ? 'ste' : 'de'); },
        week: { dow: 1, doy: 4 },
      }); return n;
    })));
  },
  7333(e, t, a) {
    (function (e, t) { t(a('c1df')); }(0, ((e) => {
      const t = e.defineLocale('en-il', {
        months: 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
        monthsShort: 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
        weekdays: 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
        weekdaysShort: 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
        weekdaysMin: 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
        longDateFormat: {
          LT: 'HH:mm', LTS: 'HH:mm:ss', L: 'DD/MM/YYYY', LL: 'D MMMM YYYY', LLL: 'D MMMM YYYY HH:mm', LLLL: 'dddd, D MMMM YYYY HH:mm',
        },
        calendar: {
          sameDay: '[Today at] LT', nextDay: '[Tomorrow at] LT', nextWeek: 'dddd [at] LT', lastDay: '[Yesterday at] LT', lastWeek: '[Last] dddd [at] LT', sameElse: 'L',
        },
        relativeTime: {
          future: 'in %s', past: '%s ago', s: 'a few seconds', m: 'a minute', mm: '%d minutes', h: 'an hour', hh: '%d hours', d: 'a day', dd: '%d days', M: 'a month', MM: '%d months', y: 'a year', yy: '%d years',
        },
        dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
        ordinal(e) { const t = e % 10; const a = ~~(e % 100 / 10) === 1 ? 'th' : t === 1 ? 'st' : t === 2 ? 'nd' : t === 3 ? 'rd' : 'th'; return e + a; },
      }); return t;
    })));
  },
  '74dc': function (e, t, a) {
    (function (e, t) { t(a('c1df')); }(0, ((e) => {
      const t = e.defineLocale('sw', {
        months: 'Januari_Februari_Machi_Aprili_Mei_Juni_Julai_Agosti_Septemba_Oktoba_Novemba_Desemba'.split('_'),
        monthsShort: 'Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ago_Sep_Okt_Nov_Des'.split('_'),
        weekdays: 'Jumapili_Jumatatu_Jumanne_Jumatano_Alhamisi_Ijumaa_Jumamosi'.split('_'),
        weekdaysShort: 'Jpl_Jtat_Jnne_Jtan_Alh_Ijm_Jmos'.split('_'),
        weekdaysMin: 'J2_J3_J4_J5_Al_Ij_J1'.split('_'),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: 'HH:mm', LTS: 'HH:mm:ss', L: 'DD.MM.YYYY', LL: 'D MMMM YYYY', LLL: 'D MMMM YYYY HH:mm', LLLL: 'dddd, D MMMM YYYY HH:mm',
        },
        calendar: {
          sameDay: '[leo saa] LT', nextDay: '[kesho saa] LT', nextWeek: '[wiki ijayo] dddd [saat] LT', lastDay: '[jana] LT', lastWeek: '[wiki iliyopita] dddd [saat] LT', sameElse: 'L',
        },
        relativeTime: {
          future: '%s baadaye', past: 'tokea %s', s: 'hivi punde', ss: 'sekunde %d', m: 'dakika moja', mm: 'dakika %d', h: 'saa limoja', hh: 'masaa %d', d: 'siku moja', dd: 'masiku %d', M: 'mwezi mmoja', MM: 'miezi %d', y: 'mwaka mmoja', yy: 'miaka %d',
        },
        week: { dow: 1, doy: 7 },
      }); return t;
    })));
  },
  '7be6': function (e, t, a) {
    (function (e, t) { t(a('c1df')); }(0, ((e) => {
      const t = 'január_február_marec_apríl_máj_jún_júl_august_september_október_november_december'.split('_'); const a = 'jan_feb_mar_apr_máj_jún_júl_aug_sep_okt_nov_dec'.split('_'); function n(e) { return e > 1 && e < 5; } function r(e, t, a, r) { const i = `${e} `; switch (a) { case 's': return t || r ? 'pár sekúnd' : 'pár sekundami'; case 'ss': return t || r ? i + (n(e) ? 'sekundy' : 'sekúnd') : `${i}sekundami`; case 'm': return t ? 'minúta' : r ? 'minútu' : 'minútou'; case 'mm': return t || r ? i + (n(e) ? 'minúty' : 'minút') : `${i}minútami`; case 'h': return t ? 'hodina' : r ? 'hodinu' : 'hodinou'; case 'hh': return t || r ? i + (n(e) ? 'hodiny' : 'hodín') : `${i}hodinami`; case 'd': return t || r ? 'deň' : 'dňom'; case 'dd': return t || r ? i + (n(e) ? 'dni' : 'dní') : `${i}dňami`; case 'M': return t || r ? 'mesiac' : 'mesiacom'; case 'MM': return t || r ? i + (n(e) ? 'mesiace' : 'mesiacov') : `${i}mesiacmi`; case 'y': return t || r ? 'rok' : 'rokom'; case 'yy': return t || r ? i + (n(e) ? 'roky' : 'rokov') : `${i}rokmi`; } } const i = e.defineLocale('sk', {
        months: t,
        monthsShort: a,
        weekdays: 'nedeľa_pondelok_utorok_streda_štvrtok_piatok_sobota'.split('_'),
        weekdaysShort: 'ne_po_ut_st_št_pi_so'.split('_'),
        weekdaysMin: 'ne_po_ut_st_št_pi_so'.split('_'),
        longDateFormat: {
          LT: 'H:mm', LTS: 'H:mm:ss', L: 'DD.MM.YYYY', LL: 'D. MMMM YYYY', LLL: 'D. MMMM YYYY H:mm', LLLL: 'dddd D. MMMM YYYY H:mm',
        },
        calendar: {
          sameDay: '[dnes o] LT', nextDay: '[zajtra o] LT', nextWeek() { switch (this.day()) { case 0: return '[v nedeľu o] LT'; case 1: case 2: return '[v] dddd [o] LT'; case 3: return '[v stredu o] LT'; case 4: return '[vo štvrtok o] LT'; case 5: return '[v piatok o] LT'; case 6: return '[v sobotu o] LT'; } }, lastDay: '[včera o] LT', lastWeek() { switch (this.day()) { case 0: return '[minulú nedeľu o] LT'; case 1: case 2: return '[minulý] dddd [o] LT'; case 3: return '[minulú stredu o] LT'; case 4: case 5: return '[minulý] dddd [o] LT'; case 6: return '[minulú sobotu o] LT'; } }, sameElse: 'L',
        },
        relativeTime: {
          future: 'za %s', past: 'pred %s', s: r, ss: r, m: r, mm: r, h: r, hh: r, d: r, dd: r, M: r, MM: r, y: r, yy: r,
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: '%d.',
        week: { dow: 1, doy: 4 },
      }); return i;
    })));
  },
  '7f33': function (e, t, a) {
    (function (e, t) { t(a('c1df')); }(0, ((e) => {
      const t = e.defineLocale('yo', {
        months: 'Sẹ́rẹ́_Èrèlè_Ẹrẹ̀nà_Ìgbé_Èbibi_Òkùdu_Agẹmo_Ògún_Owewe_Ọ̀wàrà_Bélú_Ọ̀pẹ̀̀'.split('_'),
        monthsShort: 'Sẹ́r_Èrl_Ẹrn_Ìgb_Èbi_Òkù_Agẹ_Ògú_Owe_Ọ̀wà_Bél_Ọ̀pẹ̀̀'.split('_'),
        weekdays: 'Àìkú_Ajé_Ìsẹ́gun_Ọjọ́rú_Ọjọ́bọ_Ẹtì_Àbámẹ́ta'.split('_'),
        weekdaysShort: 'Àìk_Ajé_Ìsẹ́_Ọjr_Ọjb_Ẹtì_Àbá'.split('_'),
        weekdaysMin: 'Àì_Aj_Ìs_Ọr_Ọb_Ẹt_Àb'.split('_'),
        longDateFormat: {
          LT: 'h:mm A', LTS: 'h:mm:ss A', L: 'DD/MM/YYYY', LL: 'D MMMM YYYY', LLL: 'D MMMM YYYY h:mm A', LLLL: 'dddd, D MMMM YYYY h:mm A',
        },
        calendar: {
          sameDay: '[Ònì ni] LT', nextDay: '[Ọ̀la ni] LT', nextWeek: "dddd [Ọsẹ̀ tón'bọ] [ni] LT", lastDay: '[Àna ni] LT', lastWeek: 'dddd [Ọsẹ̀ tólọ́] [ni] LT', sameElse: 'L',
        },
        relativeTime: {
          future: 'ní %s', past: '%s kọjá', s: 'ìsẹjú aayá die', ss: 'aayá %d', m: 'ìsẹjú kan', mm: 'ìsẹjú %d', h: 'wákati kan', hh: 'wákati %d', d: 'ọjọ́ kan', dd: 'ọjọ́ %d', M: 'osù kan', MM: 'osù %d', y: 'ọdún kan', yy: 'ọdún %d',
        },
        dayOfMonthOrdinalParse: /ọjọ́\s\d{1,2}/,
        ordinal: 'ọjọ́ %d',
        week: { dow: 1, doy: 4 },
      }); return t;
    })));
  },
  8155(e, t, a) {
    (function (e, t) { t(a('c1df')); }(0, ((e) => {
      function t(e, t, a, n) { let r = `${e} `; switch (a) { case 's': return t || n ? 'nekaj sekund' : 'nekaj sekundami'; case 'ss': return r += e === 1 ? t ? 'sekundo' : 'sekundi' : e === 2 ? t || n ? 'sekundi' : 'sekundah' : e < 5 ? t || n ? 'sekunde' : 'sekundah' : 'sekund', r; case 'm': return t ? 'ena minuta' : 'eno minuto'; case 'mm': return r += e === 1 ? t ? 'minuta' : 'minuto' : e === 2 ? t || n ? 'minuti' : 'minutama' : e < 5 ? t || n ? 'minute' : 'minutami' : t || n ? 'minut' : 'minutami', r; case 'h': return t ? 'ena ura' : 'eno uro'; case 'hh': return r += e === 1 ? t ? 'ura' : 'uro' : e === 2 ? t || n ? 'uri' : 'urama' : e < 5 ? t || n ? 'ure' : 'urami' : t || n ? 'ur' : 'urami', r; case 'd': return t || n ? 'en dan' : 'enim dnem'; case 'dd': return r += e === 1 ? t || n ? 'dan' : 'dnem' : e === 2 ? t || n ? 'dni' : 'dnevoma' : t || n ? 'dni' : 'dnevi', r; case 'M': return t || n ? 'en mesec' : 'enim mesecem'; case 'MM': return r += e === 1 ? t || n ? 'mesec' : 'mesecem' : e === 2 ? t || n ? 'meseca' : 'mesecema' : e < 5 ? t || n ? 'mesece' : 'meseci' : t || n ? 'mesecev' : 'meseci', r; case 'y': return t || n ? 'eno leto' : 'enim letom'; case 'yy': return r += e === 1 ? t || n ? 'leto' : 'letom' : e === 2 ? t || n ? 'leti' : 'letoma' : e < 5 ? t || n ? 'leta' : 'leti' : t || n ? 'let' : 'leti', r; } } const a = e.defineLocale('sl', {
        months: 'januar_februar_marec_april_maj_junij_julij_avgust_september_oktober_november_december'.split('_'),
        monthsShort: 'jan._feb._mar._apr._maj._jun._jul._avg._sep._okt._nov._dec.'.split('_'),
        monthsParseExact: !0,
        weekdays: 'nedelja_ponedeljek_torek_sreda_četrtek_petek_sobota'.split('_'),
        weekdaysShort: 'ned._pon._tor._sre._čet._pet._sob.'.split('_'),
        weekdaysMin: 'ne_po_to_sr_če_pe_so'.split('_'),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: 'H:mm', LTS: 'H:mm:ss', L: 'DD.MM.YYYY', LL: 'D. MMMM YYYY', LLL: 'D. MMMM YYYY H:mm', LLLL: 'dddd, D. MMMM YYYY H:mm',
        },
        calendar: {
          sameDay: '[danes ob] LT', nextDay: '[jutri ob] LT', nextWeek() { switch (this.day()) { case 0: return '[v] [nedeljo] [ob] LT'; case 3: return '[v] [sredo] [ob] LT'; case 6: return '[v] [soboto] [ob] LT'; case 1: case 2: case 4: case 5: return '[v] dddd [ob] LT'; } }, lastDay: '[včeraj ob] LT', lastWeek() { switch (this.day()) { case 0: return '[prejšnjo] [nedeljo] [ob] LT'; case 3: return '[prejšnjo] [sredo] [ob] LT'; case 6: return '[prejšnjo] [soboto] [ob] LT'; case 1: case 2: case 4: case 5: return '[prejšnji] dddd [ob] LT'; } }, sameElse: 'L',
        },
        relativeTime: {
          future: 'čez %s', past: 'pred %s', s: t, ss: t, m: t, mm: t, h: t, hh: t, d: t, dd: t, M: t, MM: t, y: t, yy: t,
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: '%d.',
        week: { dow: 1, doy: 7 },
      }); return a;
    })));
  },
  '81e9': function (e, t, a) {
    (function (e, t) { t(a('c1df')); }(0, ((e) => {
      const t = 'nolla yksi kaksi kolme neljä viisi kuusi seitsemän kahdeksan yhdeksän'.split(' '); const a = ['nolla', 'yhden', 'kahden', 'kolmen', 'neljän', 'viiden', 'kuuden', t[7], t[8], t[9]]; function n(e, t, a, n) { let i = ''; switch (a) { case 's': return n ? 'muutaman sekunnin' : 'muutama sekunti'; case 'ss': return n ? 'sekunnin' : 'sekuntia'; case 'm': return n ? 'minuutin' : 'minuutti'; case 'mm': i = n ? 'minuutin' : 'minuuttia'; break; case 'h': return n ? 'tunnin' : 'tunti'; case 'hh': i = n ? 'tunnin' : 'tuntia'; break; case 'd': return n ? 'päivän' : 'päivä'; case 'dd': i = n ? 'päivän' : 'päivää'; break; case 'M': return n ? 'kuukauden' : 'kuukausi'; case 'MM': i = n ? 'kuukauden' : 'kuukautta'; break; case 'y': return n ? 'vuoden' : 'vuosi'; case 'yy': i = n ? 'vuoden' : 'vuotta'; break; } return i = `${r(e, n)} ${i}`, i; } function r(e, n) { return e < 10 ? n ? a[e] : t[e] : e; } const i = e.defineLocale('fi', {
        months: 'tammikuu_helmikuu_maaliskuu_huhtikuu_toukokuu_kesäkuu_heinäkuu_elokuu_syyskuu_lokakuu_marraskuu_joulukuu'.split('_'),
        monthsShort: 'tammi_helmi_maalis_huhti_touko_kesä_heinä_elo_syys_loka_marras_joulu'.split('_'),
        weekdays: 'sunnuntai_maanantai_tiistai_keskiviikko_torstai_perjantai_lauantai'.split('_'),
        weekdaysShort: 'su_ma_ti_ke_to_pe_la'.split('_'),
        weekdaysMin: 'su_ma_ti_ke_to_pe_la'.split('_'),
        longDateFormat: {
          LT: 'HH.mm', LTS: 'HH.mm.ss', L: 'DD.MM.YYYY', LL: 'Do MMMM[ta] YYYY', LLL: 'Do MMMM[ta] YYYY, [klo] HH.mm', LLLL: 'dddd, Do MMMM[ta] YYYY, [klo] HH.mm', l: 'D.M.YYYY', ll: 'Do MMM YYYY', lll: 'Do MMM YYYY, [klo] HH.mm', llll: 'ddd, Do MMM YYYY, [klo] HH.mm',
        },
        calendar: {
          sameDay: '[tänään] [klo] LT', nextDay: '[huomenna] [klo] LT', nextWeek: 'dddd [klo] LT', lastDay: '[eilen] [klo] LT', lastWeek: '[viime] dddd[na] [klo] LT', sameElse: 'L',
        },
        relativeTime: {
          future: '%s päästä', past: '%s sitten', s: n, ss: n, m: n, mm: n, h: n, hh: n, d: n, dd: n, M: n, MM: n, y: n, yy: n,
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: '%d.',
        week: { dow: 1, doy: 4 },
      }); return i;
    })));
  },
  8230(e, t, a) {
    (function (e, t) { t(a('c1df')); }(0, ((e) => {
      const t = {
        1: '١', 2: '٢', 3: '٣', 4: '٤', 5: '٥', 6: '٦', 7: '٧', 8: '٨', 9: '٩', 0: '٠',
      }; const a = {
        '١': '1', '٢': '2', '٣': '3', '٤': '4', '٥': '5', '٦': '6', '٧': '7', '٨': '8', '٩': '9', '٠': '0',
      }; const n = e.defineLocale('ar-sa', {
        months: 'يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر'.split('_'),
        monthsShort: 'يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر'.split('_'),
        weekdays: 'الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت'.split('_'),
        weekdaysShort: 'أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت'.split('_'),
        weekdaysMin: 'ح_ن_ث_ر_خ_ج_س'.split('_'),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: 'HH:mm', LTS: 'HH:mm:ss', L: 'DD/MM/YYYY', LL: 'D MMMM YYYY', LLL: 'D MMMM YYYY HH:mm', LLLL: 'dddd D MMMM YYYY HH:mm',
        },
        meridiemParse: /ص|م/,
        isPM(e) { return e === 'م'; },
        meridiem(e, t, a) { return e < 12 ? 'ص' : 'م'; },
        calendar: {
          sameDay: '[اليوم على الساعة] LT', nextDay: '[غدا على الساعة] LT', nextWeek: 'dddd [على الساعة] LT', lastDay: '[أمس على الساعة] LT', lastWeek: 'dddd [على الساعة] LT', sameElse: 'L',
        },
        relativeTime: {
          future: 'في %s', past: 'منذ %s', s: 'ثوان', ss: '%d ثانية', m: 'دقيقة', mm: '%d دقائق', h: 'ساعة', hh: '%d ساعات', d: 'يوم', dd: '%d أيام', M: 'شهر', MM: '%d أشهر', y: 'سنة', yy: '%d سنوات',
        },
        preparse(e) { return e.replace(/[١٢٣٤٥٦٧٨٩٠]/g, ((e) => a[e])).replace(/،/g, ','); },
        postformat(e) { return e.replace(/\d/g, ((e) => t[e])).replace(/,/g, '،'); },
        week: { dow: 0, doy: 6 },
      }); return n;
    })));
  },
  '84aa': function (e, t, a) {
    (function (e, t) { t(a('c1df')); }(0, ((e) => {
      const t = e.defineLocale('bg', {
        months: 'януари_февруари_март_април_май_юни_юли_август_септември_октомври_ноември_декември'.split('_'),
        monthsShort: 'янр_фев_мар_апр_май_юни_юли_авг_сеп_окт_ное_дек'.split('_'),
        weekdays: 'неделя_понеделник_вторник_сряда_четвъртък_петък_събота'.split('_'),
        weekdaysShort: 'нед_пон_вто_сря_чет_пет_съб'.split('_'),
        weekdaysMin: 'нд_пн_вт_ср_чт_пт_сб'.split('_'),
        longDateFormat: {
          LT: 'H:mm', LTS: 'H:mm:ss', L: 'D.MM.YYYY', LL: 'D MMMM YYYY', LLL: 'D MMMM YYYY H:mm', LLLL: 'dddd, D MMMM YYYY H:mm',
        },
        calendar: {
          sameDay: '[Днес в] LT', nextDay: '[Утре в] LT', nextWeek: 'dddd [в] LT', lastDay: '[Вчера в] LT', lastWeek() { switch (this.day()) { case 0: case 3: case 6: return '[В изминалата] dddd [в] LT'; case 1: case 2: case 4: case 5: return '[В изминалия] dddd [в] LT'; } }, sameElse: 'L',
        },
        relativeTime: {
          future: 'след %s', past: 'преди %s', s: 'няколко секунди', ss: '%d секунди', m: 'минута', mm: '%d минути', h: 'час', hh: '%d часа', d: 'ден', dd: '%d дни', M: 'месец', MM: '%d месеца', y: 'година', yy: '%d години',
        },
        dayOfMonthOrdinalParse: /\d{1,2}-(ев|ен|ти|ви|ри|ми)/,
        ordinal(e) { const t = e % 10; const a = e % 100; return e === 0 ? `${e}-ев` : a === 0 ? `${e}-ен` : a > 10 && a < 20 ? `${e}-ти` : t === 1 ? `${e}-ви` : t === 2 ? `${e}-ри` : t === 7 || t === 8 ? `${e}-ми` : `${e}-ти`; },
        week: { dow: 1, doy: 7 },
      }); return t;
    })));
  },
  8689(e, t, a) {
    (function (e, t) { t(a('c1df')); }(0, ((e) => {
      const t = {
        1: '၁', 2: '၂', 3: '၃', 4: '၄', 5: '၅', 6: '၆', 7: '၇', 8: '၈', 9: '၉', 0: '၀',
      }; const a = {
        '၁': '1', '၂': '2', '၃': '3', '၄': '4', '၅': '5', '၆': '6', '၇': '7', '၈': '8', '၉': '9', '၀': '0',
      }; const n = e.defineLocale('my', {
        months: 'ဇန်နဝါရီ_ဖေဖော်ဝါရီ_မတ်_ဧပြီ_မေ_ဇွန်_ဇူလိုင်_သြဂုတ်_စက်တင်ဘာ_အောက်တိုဘာ_နိုဝင်ဘာ_ဒီဇင်ဘာ'.split('_'),
        monthsShort: 'ဇန်_ဖေ_မတ်_ပြီ_မေ_ဇွန်_လိုင်_သြ_စက်_အောက်_နို_ဒီ'.split('_'),
        weekdays: 'တနင်္ဂနွေ_တနင်္လာ_အင်္ဂါ_ဗုဒ္ဓဟူး_ကြာသပတေး_သောကြာ_စနေ'.split('_'),
        weekdaysShort: 'နွေ_လာ_ဂါ_ဟူး_ကြာ_သော_နေ'.split('_'),
        weekdaysMin: 'နွေ_လာ_ဂါ_ဟူး_ကြာ_သော_နေ'.split('_'),
        longDateFormat: {
          LT: 'HH:mm', LTS: 'HH:mm:ss', L: 'DD/MM/YYYY', LL: 'D MMMM YYYY', LLL: 'D MMMM YYYY HH:mm', LLLL: 'dddd D MMMM YYYY HH:mm',
        },
        calendar: {
          sameDay: '[ယနေ.] LT [မှာ]', nextDay: '[မနက်ဖြန်] LT [မှာ]', nextWeek: 'dddd LT [မှာ]', lastDay: '[မနေ.က] LT [မှာ]', lastWeek: '[ပြီးခဲ့သော] dddd LT [မှာ]', sameElse: 'L',
        },
        relativeTime: {
          future: 'လာမည့် %s မှာ', past: 'လွန်ခဲ့သော %s က', s: 'စက္ကန်.အနည်းငယ်', ss: '%d စက္ကန့်', m: 'တစ်မိနစ်', mm: '%d မိနစ်', h: 'တစ်နာရီ', hh: '%d နာရီ', d: 'တစ်ရက်', dd: '%d ရက်', M: 'တစ်လ', MM: '%d လ', y: 'တစ်နှစ်', yy: '%d နှစ်',
        },
        preparse(e) { return e.replace(/[၁၂၃၄၅၆၇၈၉၀]/g, ((e) => a[e])); },
        postformat(e) { return e.replace(/\d/g, ((e) => t[e])); },
        week: { dow: 1, doy: 4 },
      }); return n;
    })));
  },
  8840(e, t, a) {
    (function (e, t) { t(a('c1df')); }(0, ((e) => {
      const t = e.defineLocale('gl', {
        months: 'xaneiro_febreiro_marzo_abril_maio_xuño_xullo_agosto_setembro_outubro_novembro_decembro'.split('_'),
        monthsShort: 'xan._feb._mar._abr._mai._xuñ._xul._ago._set._out._nov._dec.'.split('_'),
        monthsParseExact: !0,
        weekdays: 'domingo_luns_martes_mércores_xoves_venres_sábado'.split('_'),
        weekdaysShort: 'dom._lun._mar._mér._xov._ven._sáb.'.split('_'),
        weekdaysMin: 'do_lu_ma_mé_xo_ve_sá'.split('_'),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: 'H:mm', LTS: 'H:mm:ss', L: 'DD/MM/YYYY', LL: 'D [de] MMMM [de] YYYY', LLL: 'D [de] MMMM [de] YYYY H:mm', LLLL: 'dddd, D [de] MMMM [de] YYYY H:mm',
        },
        calendar: {
          sameDay() { return `[hoxe ${this.hours() !== 1 ? 'ás' : 'á'}] LT`; }, nextDay() { return `[mañá ${this.hours() !== 1 ? 'ás' : 'á'}] LT`; }, nextWeek() { return `dddd [${this.hours() !== 1 ? 'ás' : 'a'}] LT`; }, lastDay() { return `[onte ${this.hours() !== 1 ? 'á' : 'a'}] LT`; }, lastWeek() { return `[o] dddd [pasado ${this.hours() !== 1 ? 'ás' : 'a'}] LT`; }, sameElse: 'L',
        },
        relativeTime: {
          future(e) { return e.indexOf('un') === 0 ? `n${e}` : `en ${e}`; }, past: 'hai %s', s: 'uns segundos', ss: '%d segundos', m: 'un minuto', mm: '%d minutos', h: 'unha hora', hh: '%d horas', d: 'un día', dd: '%d días', M: 'un mes', MM: '%d meses', y: 'un ano', yy: '%d anos',
        },
        dayOfMonthOrdinalParse: /\d{1,2}º/,
        ordinal: '%dº',
        week: { dow: 1, doy: 4 },
      }); return t;
    })));
  },
  '898b': function (e, t, a) {
    (function (e, t) { t(a('c1df')); }(0, ((e) => {
      const t = 'ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.'.split('_'); const a = 'ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic'.split('_'); const n = [/^ene/i, /^feb/i, /^mar/i, /^abr/i, /^may/i, /^jun/i, /^jul/i, /^ago/i, /^sep/i, /^oct/i, /^nov/i, /^dic/i]; const r = /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i; const i = e.defineLocale('es', {
        months: 'enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre'.split('_'),
        monthsShort(e, n) { return e ? /-MMM-/.test(n) ? a[e.month()] : t[e.month()] : t; },
        monthsRegex: r,
        monthsShortRegex: r,
        monthsStrictRegex: /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,
        monthsShortStrictRegex: /^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,
        monthsParse: n,
        longMonthsParse: n,
        shortMonthsParse: n,
        weekdays: 'domingo_lunes_martes_miércoles_jueves_viernes_sábado'.split('_'),
        weekdaysShort: 'dom._lun._mar._mié._jue._vie._sáb.'.split('_'),
        weekdaysMin: 'do_lu_ma_mi_ju_vi_sá'.split('_'),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: 'H:mm', LTS: 'H:mm:ss', L: 'DD/MM/YYYY', LL: 'D [de] MMMM [de] YYYY', LLL: 'D [de] MMMM [de] YYYY H:mm', LLLL: 'dddd, D [de] MMMM [de] YYYY H:mm',
        },
        calendar: {
          sameDay() { return `[hoy a la${this.hours() !== 1 ? 's' : ''}] LT`; }, nextDay() { return `[mañana a la${this.hours() !== 1 ? 's' : ''}] LT`; }, nextWeek() { return `dddd [a la${this.hours() !== 1 ? 's' : ''}] LT`; }, lastDay() { return `[ayer a la${this.hours() !== 1 ? 's' : ''}] LT`; }, lastWeek() { return `[el] dddd [pasado a la${this.hours() !== 1 ? 's' : ''}] LT`; }, sameElse: 'L',
        },
        relativeTime: {
          future: 'en %s', past: 'hace %s', s: 'unos segundos', ss: '%d segundos', m: 'un minuto', mm: '%d minutos', h: 'una hora', hh: '%d horas', d: 'un día', dd: '%d días', M: 'un mes', MM: '%d meses', y: 'un año', yy: '%d años',
        },
        dayOfMonthOrdinalParse: /\d{1,2}º/,
        ordinal: '%dº',
        week: { dow: 1, doy: 4 },
      }); return i;
    })));
  },
  '8d47': function (e, t, a) {
    (function (e, t) { t(a('c1df')); }(0, ((e) => {
      function t(e) { return e instanceof Function || Object.prototype.toString.call(e) === '[object Function]'; } const a = e.defineLocale('el', {
        monthsNominativeEl: 'Ιανουάριος_Φεβρουάριος_Μάρτιος_Απρίλιος_Μάιος_Ιούνιος_Ιούλιος_Αύγουστος_Σεπτέμβριος_Οκτώβριος_Νοέμβριος_Δεκέμβριος'.split('_'),
        monthsGenitiveEl: 'Ιανουαρίου_Φεβρουαρίου_Μαρτίου_Απριλίου_Μαΐου_Ιουνίου_Ιουλίου_Αυγούστου_Σεπτεμβρίου_Οκτωβρίου_Νοεμβρίου_Δεκεμβρίου'.split('_'),
        months(e, t) { return e ? typeof t === 'string' && /D/.test(t.substring(0, t.indexOf('MMMM'))) ? this._monthsGenitiveEl[e.month()] : this._monthsNominativeEl[e.month()] : this._monthsNominativeEl; },
        monthsShort: 'Ιαν_Φεβ_Μαρ_Απρ_Μαϊ_Ιουν_Ιουλ_Αυγ_Σεπ_Οκτ_Νοε_Δεκ'.split('_'),
        weekdays: 'Κυριακή_Δευτέρα_Τρίτη_Τετάρτη_Πέμπτη_Παρασκευή_Σάββατο'.split('_'),
        weekdaysShort: 'Κυρ_Δευ_Τρι_Τετ_Πεμ_Παρ_Σαβ'.split('_'),
        weekdaysMin: 'Κυ_Δε_Τρ_Τε_Πε_Πα_Σα'.split('_'),
        meridiem(e, t, a) { return e > 11 ? a ? 'μμ' : 'ΜΜ' : a ? 'πμ' : 'ΠΜ'; },
        isPM(e) { return (`${e}`).toLowerCase()[0] === 'μ'; },
        meridiemParse: /[ΠΜ]\.?Μ?\.?/i,
        longDateFormat: {
          LT: 'h:mm A', LTS: 'h:mm:ss A', L: 'DD/MM/YYYY', LL: 'D MMMM YYYY', LLL: 'D MMMM YYYY h:mm A', LLLL: 'dddd, D MMMM YYYY h:mm A',
        },
        calendarEl: {
          sameDay: '[Σήμερα {}] LT', nextDay: '[Αύριο {}] LT', nextWeek: 'dddd [{}] LT', lastDay: '[Χθες {}] LT', lastWeek() { switch (this.day()) { case 6: return '[το προηγούμενο] dddd [{}] LT'; default: return '[την προηγούμενη] dddd [{}] LT'; } }, sameElse: 'L',
        },
        calendar(e, a) { let n = this._calendarEl[e]; const r = a && a.hours(); return t(n) && (n = n.apply(a)), n.replace('{}', r % 12 === 1 ? 'στη' : 'στις'); },
        relativeTime: {
          future: 'σε %s', past: '%s πριν', s: 'λίγα δευτερόλεπτα', ss: '%d δευτερόλεπτα', m: 'ένα λεπτό', mm: '%d λεπτά', h: 'μία ώρα', hh: '%d ώρες', d: 'μία μέρα', dd: '%d μέρες', M: 'ένας μήνας', MM: '%d μήνες', y: 'ένας χρόνος', yy: '%d χρόνια',
        },
        dayOfMonthOrdinalParse: /\d{1,2}η/,
        ordinal: '%dη',
        week: { dow: 1, doy: 4 },
      }); return a;
    })));
  },
  '8d57': function (e, t, a) {
    (function (e, t) { t(a('c1df')); }(0, ((e) => {
      const t = 'styczeń_luty_marzec_kwiecień_maj_czerwiec_lipiec_sierpień_wrzesień_październik_listopad_grudzień'.split('_'); const a = 'stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_września_października_listopada_grudnia'.split('_'); function n(e) { return e % 10 < 5 && e % 10 > 1 && ~~(e / 10) % 10 !== 1; } function r(e, t, a) { const r = `${e} `; switch (a) { case 'ss': return r + (n(e) ? 'sekundy' : 'sekund'); case 'm': return t ? 'minuta' : 'minutę'; case 'mm': return r + (n(e) ? 'minuty' : 'minut'); case 'h': return t ? 'godzina' : 'godzinę'; case 'hh': return r + (n(e) ? 'godziny' : 'godzin'); case 'MM': return r + (n(e) ? 'miesiące' : 'miesięcy'); case 'yy': return r + (n(e) ? 'lata' : 'lat'); } } const i = e.defineLocale('pl', {
        months(e, n) { return e ? n === '' ? `(${a[e.month()]}|${t[e.month()]})` : /D MMMM/.test(n) ? a[e.month()] : t[e.month()] : t; },
        monthsShort: 'sty_lut_mar_kwi_maj_cze_lip_sie_wrz_paź_lis_gru'.split('_'),
        weekdays: 'niedziela_poniedziałek_wtorek_środa_czwartek_piątek_sobota'.split('_'),
        weekdaysShort: 'ndz_pon_wt_śr_czw_pt_sob'.split('_'),
        weekdaysMin: 'Nd_Pn_Wt_Śr_Cz_Pt_So'.split('_'),
        longDateFormat: {
          LT: 'HH:mm', LTS: 'HH:mm:ss', L: 'DD.MM.YYYY', LL: 'D MMMM YYYY', LLL: 'D MMMM YYYY HH:mm', LLLL: 'dddd, D MMMM YYYY HH:mm',
        },
        calendar: {
          sameDay: '[Dziś o] LT', nextDay: '[Jutro o] LT', nextWeek() { switch (this.day()) { case 0: return '[W niedzielę o] LT'; case 2: return '[We wtorek o] LT'; case 3: return '[W środę o] LT'; case 6: return '[W sobotę o] LT'; default: return '[W] dddd [o] LT'; } }, lastDay: '[Wczoraj o] LT', lastWeek() { switch (this.day()) { case 0: return '[W zeszłą niedzielę o] LT'; case 3: return '[W zeszłą środę o] LT'; case 6: return '[W zeszłą sobotę o] LT'; default: return '[W zeszły] dddd [o] LT'; } }, sameElse: 'L',
        },
        relativeTime: {
          future: 'za %s', past: '%s temu', s: 'kilka sekund', ss: r, m: r, mm: r, h: r, hh: r, d: '1 dzień', dd: '%d dni', M: 'miesiąc', MM: r, y: 'rok', yy: r,
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: '%d.',
        week: { dow: 1, doy: 4 },
      }); return i;
    })));
  },
  '8df48': function (e, t, a) {
    (function (e, t) { t(a('c1df')); }(0, ((e) => {
      const t = {
        1: '۱', 2: '۲', 3: '۳', 4: '۴', 5: '۵', 6: '۶', 7: '۷', 8: '۸', 9: '۹', 0: '۰',
      }; const a = {
        '۱': '1', '۲': '2', '۳': '3', '۴': '4', '۵': '5', '۶': '6', '۷': '7', '۸': '8', '۹': '9', '۰': '0',
      }; const n = e.defineLocale('fa', {
        months: 'ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر'.split('_'),
        monthsShort: 'ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر'.split('_'),
        weekdays: 'یک‌شنبه_دوشنبه_سه‌شنبه_چهارشنبه_پنج‌شنبه_جمعه_شنبه'.split('_'),
        weekdaysShort: 'یک‌شنبه_دوشنبه_سه‌شنبه_چهارشنبه_پنج‌شنبه_جمعه_شنبه'.split('_'),
        weekdaysMin: 'ی_د_س_چ_پ_ج_ش'.split('_'),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: 'HH:mm', LTS: 'HH:mm:ss', L: 'DD/MM/YYYY', LL: 'D MMMM YYYY', LLL: 'D MMMM YYYY HH:mm', LLLL: 'dddd, D MMMM YYYY HH:mm',
        },
        meridiemParse: /قبل از ظهر|بعد از ظهر/,
        isPM(e) { return /بعد از ظهر/.test(e); },
        meridiem(e, t, a) { return e < 12 ? 'قبل از ظهر' : 'بعد از ظهر'; },
        calendar: {
          sameDay: '[امروز ساعت] LT', nextDay: '[فردا ساعت] LT', nextWeek: 'dddd [ساعت] LT', lastDay: '[دیروز ساعت] LT', lastWeek: 'dddd [پیش] [ساعت] LT', sameElse: 'L',
        },
        relativeTime: {
          future: 'در %s', past: '%s پیش', s: 'چند ثانیه', ss: 'ثانیه d%', m: 'یک دقیقه', mm: '%d دقیقه', h: 'یک ساعت', hh: '%d ساعت', d: 'یک روز', dd: '%d روز', M: 'یک ماه', MM: '%d ماه', y: 'یک سال', yy: '%d سال',
        },
        preparse(e) { return e.replace(/[۰-۹]/g, ((e) => a[e])).replace(/،/g, ','); },
        postformat(e) { return e.replace(/\d/g, ((e) => t[e])).replace(/,/g, '،'); },
        dayOfMonthOrdinalParse: /\d{1,2}م/,
        ordinal: '%dم',
        week: { dow: 6, doy: 12 },
      }); return n;
    })));
  },
  '8e73': function (e, t, a) {
    (function (e, t) { t(a('c1df')); }(0, ((e) => {
      const t = {
        1: '١', 2: '٢', 3: '٣', 4: '٤', 5: '٥', 6: '٦', 7: '٧', 8: '٨', 9: '٩', 0: '٠',
      }; const a = {
        '١': '1', '٢': '2', '٣': '3', '٤': '4', '٥': '5', '٦': '6', '٧': '7', '٨': '8', '٩': '9', '٠': '0',
      }; const n = function (e) { return e === 0 ? 0 : e === 1 ? 1 : e === 2 ? 2 : e % 100 >= 3 && e % 100 <= 10 ? 3 : e % 100 >= 11 ? 4 : 5; }; const r = {
        s: ['أقل من ثانية', 'ثانية واحدة', ['ثانيتان', 'ثانيتين'], '%d ثوان', '%d ثانية', '%d ثانية'], m: ['أقل من دقيقة', 'دقيقة واحدة', ['دقيقتان', 'دقيقتين'], '%d دقائق', '%d دقيقة', '%d دقيقة'], h: ['أقل من ساعة', 'ساعة واحدة', ['ساعتان', 'ساعتين'], '%d ساعات', '%d ساعة', '%d ساعة'], d: ['أقل من يوم', 'يوم واحد', ['يومان', 'يومين'], '%d أيام', '%d يومًا', '%d يوم'], M: ['أقل من شهر', 'شهر واحد', ['شهران', 'شهرين'], '%d أشهر', '%d شهرا', '%d شهر'], y: ['أقل من عام', 'عام واحد', ['عامان', 'عامين'], '%d أعوام', '%d عامًا', '%d عام'],
      }; const i = function (e) { return function (t, a, i, s) { const o = n(t); let d = r[e][n(t)]; return o === 2 && (d = d[a ? 0 : 1]), d.replace(/%d/i, t); }; }; const s = ['يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو', 'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر']; const o = e.defineLocale('ar', {
        months: s,
        monthsShort: s,
        weekdays: 'الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت'.split('_'),
        weekdaysShort: 'أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت'.split('_'),
        weekdaysMin: 'ح_ن_ث_ر_خ_ج_س'.split('_'),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: 'HH:mm', LTS: 'HH:mm:ss', L: 'D/‏M/‏YYYY', LL: 'D MMMM YYYY', LLL: 'D MMMM YYYY HH:mm', LLLL: 'dddd D MMMM YYYY HH:mm',
        },
        meridiemParse: /ص|م/,
        isPM(e) { return e === 'م'; },
        meridiem(e, t, a) { return e < 12 ? 'ص' : 'م'; },
        calendar: {
          sameDay: '[اليوم عند الساعة] LT', nextDay: '[غدًا عند الساعة] LT', nextWeek: 'dddd [عند الساعة] LT', lastDay: '[أمس عند الساعة] LT', lastWeek: 'dddd [عند الساعة] LT', sameElse: 'L',
        },
        relativeTime: {
          future: 'بعد %s', past: 'منذ %s', s: i('s'), ss: i('s'), m: i('m'), mm: i('m'), h: i('h'), hh: i('h'), d: i('d'), dd: i('d'), M: i('M'), MM: i('M'), y: i('y'), yy: i('y'),
        },
        preparse(e) { return e.replace(/[١٢٣٤٥٦٧٨٩٠]/g, ((e) => a[e])).replace(/،/g, ','); },
        postformat(e) { return e.replace(/\d/g, ((e) => t[e])).replace(/,/g, '،'); },
        week: { dow: 6, doy: 12 },
      }); return o;
    })));
  },
  9043(e, t, a) {
    (function (e, t) { t(a('c1df')); }(0, ((e) => {
      const t = {
        1: '১', 2: '২', 3: '৩', 4: '৪', 5: '৫', 6: '৬', 7: '৭', 8: '৮', 9: '৯', 0: '০',
      }; const a = {
        '১': '1', '২': '2', '৩': '3', '৪': '4', '৫': '5', '৬': '6', '৭': '7', '৮': '8', '৯': '9', '০': '0',
      }; const n = e.defineLocale('bn', {
        months: 'জানুয়ারী_ফেব্রুয়ারি_মার্চ_এপ্রিল_মে_জুন_জুলাই_আগস্ট_সেপ্টেম্বর_অক্টোবর_নভেম্বর_ডিসেম্বর'.split('_'),
        monthsShort: 'জানু_ফেব_মার্চ_এপ্র_মে_জুন_জুল_আগ_সেপ্ট_অক্টো_নভে_ডিসে'.split('_'),
        weekdays: 'রবিবার_সোমবার_মঙ্গলবার_বুধবার_বৃহস্পতিবার_শুক্রবার_শনিবার'.split('_'),
        weekdaysShort: 'রবি_সোম_মঙ্গল_বুধ_বৃহস্পতি_শুক্র_শনি'.split('_'),
        weekdaysMin: 'রবি_সোম_মঙ্গ_বুধ_বৃহঃ_শুক্র_শনি'.split('_'),
        longDateFormat: {
          LT: 'A h:mm সময়', LTS: 'A h:mm:ss সময়', L: 'DD/MM/YYYY', LL: 'D MMMM YYYY', LLL: 'D MMMM YYYY, A h:mm সময়', LLLL: 'dddd, D MMMM YYYY, A h:mm সময়',
        },
        calendar: {
          sameDay: '[আজ] LT', nextDay: '[আগামীকাল] LT', nextWeek: 'dddd, LT', lastDay: '[গতকাল] LT', lastWeek: '[গত] dddd, LT', sameElse: 'L',
        },
        relativeTime: {
          future: '%s পরে', past: '%s আগে', s: 'কয়েক সেকেন্ড', ss: '%d সেকেন্ড', m: 'এক মিনিট', mm: '%d মিনিট', h: 'এক ঘন্টা', hh: '%d ঘন্টা', d: 'এক দিন', dd: '%d দিন', M: 'এক মাস', MM: '%d মাস', y: 'এক বছর', yy: '%d বছর',
        },
        preparse(e) { return e.replace(/[১২৩৪৫৬৭৮৯০]/g, ((e) => a[e])); },
        postformat(e) { return e.replace(/\d/g, ((e) => t[e])); },
        meridiemParse: /রাত|সকাল|দুপুর|বিকাল|রাত/,
        meridiemHour(e, t) { return e === 12 && (e = 0), t === 'রাত' && e >= 4 || t === 'দুপুর' && e < 5 || t === 'বিকাল' ? e + 12 : e; },
        meridiem(e, t, a) { return e < 4 ? 'রাত' : e < 10 ? 'সকাল' : e < 17 ? 'দুপুর' : e < 20 ? 'বিকাল' : 'রাত'; },
        week: { dow: 0, doy: 6 },
      }); return n;
    })));
  },
  '90ea': function (e, t, a) {
    (function (e, t) { t(a('c1df')); }(0, ((e) => {
      const t = e.defineLocale('zh-tw', {
        months: '一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月'.split('_'),
        monthsShort: '1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月'.split('_'),
        weekdays: '星期日_星期一_星期二_星期三_星期四_星期五_星期六'.split('_'),
        weekdaysShort: '週日_週一_週二_週三_週四_週五_週六'.split('_'),
        weekdaysMin: '日_一_二_三_四_五_六'.split('_'),
        longDateFormat: {
          LT: 'HH:mm', LTS: 'HH:mm:ss', L: 'YYYY/MM/DD', LL: 'YYYY年M月D日', LLL: 'YYYY年M月D日 HH:mm', LLLL: 'YYYY年M月D日dddd HH:mm', l: 'YYYY/M/D', ll: 'YYYY年M月D日', lll: 'YYYY年M月D日 HH:mm', llll: 'YYYY年M月D日dddd HH:mm',
        },
        meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
        meridiemHour(e, t) { return e === 12 && (e = 0), t === '凌晨' || t === '早上' || t === '上午' ? e : t === '中午' ? e >= 11 ? e : e + 12 : t === '下午' || t === '晚上' ? e + 12 : void 0; },
        meridiem(e, t, a) { const n = 100 * e + t; return n < 600 ? '凌晨' : n < 900 ? '早上' : n < 1130 ? '上午' : n < 1230 ? '中午' : n < 1800 ? '下午' : '晚上'; },
        calendar: {
          sameDay: '[今天] LT', nextDay: '[明天] LT', nextWeek: '[下]dddd LT', lastDay: '[昨天] LT', lastWeek: '[上]dddd LT', sameElse: 'L',
        },
        dayOfMonthOrdinalParse: /\d{1,2}(日|月|週)/,
        ordinal(e, t) { switch (t) { case 'd': case 'D': case 'DDD': return `${e}日`; case 'M': return `${e}月`; case 'w': case 'W': return `${e}週`; default: return e; } },
        relativeTime: {
          future: '%s內', past: '%s前', s: '幾秒', ss: '%d 秒', m: '1 分鐘', mm: '%d 分鐘', h: '1 小時', hh: '%d 小時', d: '1 天', dd: '%d 天', M: '1 個月', MM: '%d 個月', y: '1 年', yy: '%d 年',
        },
      }); return t;
    })));
  },
  '957c': function (e, t, a) {
    (function (e, t) { t(a('c1df')); }(0, ((e) => {
      function t(e, t) { const a = e.split('_'); return t % 10 === 1 && t % 100 !== 11 ? a[0] : t % 10 >= 2 && t % 10 <= 4 && (t % 100 < 10 || t % 100 >= 20) ? a[1] : a[2]; } function a(e, a, n) {
        const r = {
          ss: a ? 'секунда_секунды_секунд' : 'секунду_секунды_секунд', mm: a ? 'минута_минуты_минут' : 'минуту_минуты_минут', hh: 'час_часа_часов', dd: 'день_дня_дней', MM: 'месяц_месяца_месяцев', yy: 'год_года_лет',
        }; return n === 'm' ? a ? 'минута' : 'минуту' : `${e} ${t(r[n], +e)}`;
      } const n = [/^янв/i, /^фев/i, /^мар/i, /^апр/i, /^ма[йя]/i, /^июн/i, /^июл/i, /^авг/i, /^сен/i, /^окт/i, /^ноя/i, /^дек/i]; const r = e.defineLocale('ru', {
        months: { format: 'января_февраля_марта_апреля_мая_июня_июля_августа_сентября_октября_ноября_декабря'.split('_'), standalone: 'январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь'.split('_') },
        monthsShort: { format: 'янв._февр._мар._апр._мая_июня_июля_авг._сент._окт._нояб._дек.'.split('_'), standalone: 'янв._февр._март_апр._май_июнь_июль_авг._сент._окт._нояб._дек.'.split('_') },
        weekdays: { standalone: 'воскресенье_понедельник_вторник_среда_четверг_пятница_суббота'.split('_'), format: 'воскресенье_понедельник_вторник_среду_четверг_пятницу_субботу'.split('_'), isFormat: /\[ ?[Вв] ?(?:прошлую|следующую|эту)? ?\] ?dddd/ },
        weekdaysShort: 'вс_пн_вт_ср_чт_пт_сб'.split('_'),
        weekdaysMin: 'вс_пн_вт_ср_чт_пт_сб'.split('_'),
        monthsParse: n,
        longMonthsParse: n,
        shortMonthsParse: n,
        monthsRegex: /^(январ[ья]|янв\.?|феврал[ья]|февр?\.?|марта?|мар\.?|апрел[ья]|апр\.?|ма[йя]|июн[ья]|июн\.?|июл[ья]|июл\.?|августа?|авг\.?|сентябр[ья]|сент?\.?|октябр[ья]|окт\.?|ноябр[ья]|нояб?\.?|декабр[ья]|дек\.?)/i,
        monthsShortRegex: /^(январ[ья]|янв\.?|феврал[ья]|февр?\.?|марта?|мар\.?|апрел[ья]|апр\.?|ма[йя]|июн[ья]|июн\.?|июл[ья]|июл\.?|августа?|авг\.?|сентябр[ья]|сент?\.?|октябр[ья]|окт\.?|ноябр[ья]|нояб?\.?|декабр[ья]|дек\.?)/i,
        monthsStrictRegex: /^(январ[яь]|феврал[яь]|марта?|апрел[яь]|ма[яй]|июн[яь]|июл[яь]|августа?|сентябр[яь]|октябр[яь]|ноябр[яь]|декабр[яь])/i,
        monthsShortStrictRegex: /^(янв\.|февр?\.|мар[т.]|апр\.|ма[яй]|июн[ья.]|июл[ья.]|авг\.|сент?\.|окт\.|нояб?\.|дек\.)/i,
        longDateFormat: {
          LT: 'H:mm', LTS: 'H:mm:ss', L: 'DD.MM.YYYY', LL: 'D MMMM YYYY г.', LLL: 'D MMMM YYYY г., H:mm', LLLL: 'dddd, D MMMM YYYY г., H:mm',
        },
        calendar: {
          sameDay: '[Сегодня, в] LT', nextDay: '[Завтра, в] LT', lastDay: '[Вчера, в] LT', nextWeek(e) { if (e.week() === this.week()) return this.day() === 2 ? '[Во] dddd, [в] LT' : '[В] dddd, [в] LT'; switch (this.day()) { case 0: return '[В следующее] dddd, [в] LT'; case 1: case 2: case 4: return '[В следующий] dddd, [в] LT'; case 3: case 5: case 6: return '[В следующую] dddd, [в] LT'; } }, lastWeek(e) { if (e.week() === this.week()) return this.day() === 2 ? '[Во] dddd, [в] LT' : '[В] dddd, [в] LT'; switch (this.day()) { case 0: return '[В прошлое] dddd, [в] LT'; case 1: case 2: case 4: return '[В прошлый] dddd, [в] LT'; case 3: case 5: case 6: return '[В прошлую] dddd, [в] LT'; } }, sameElse: 'L',
        },
        relativeTime: {
          future: 'через %s', past: '%s назад', s: 'несколько секунд', ss: a, m: a, mm: a, h: 'час', hh: a, d: 'день', dd: a, M: 'месяц', MM: a, y: 'год', yy: a,
        },
        meridiemParse: /ночи|утра|дня|вечера/i,
        isPM(e) { return /^(дня|вечера)$/.test(e); },
        meridiem(e, t, a) { return e < 4 ? 'ночи' : e < 12 ? 'утра' : e < 17 ? 'дня' : 'вечера'; },
        dayOfMonthOrdinalParse: /\d{1,2}-(й|го|я)/,
        ordinal(e, t) { switch (t) { case 'M': case 'd': case 'DDD': return `${e}-й`; case 'D': return `${e}-го`; case 'w': case 'W': return `${e}-я`; default: return e; } },
        week: { dow: 1, doy: 4 },
      }); return r;
    })));
  },
  '958b': function (e, t, a) {
    (function (e, t) { t(a('c1df')); }(0, ((e) => {
      function t(e, t, a, n) { switch (a) { case 's': return t ? 'хэдхэн секунд' : 'хэдхэн секундын'; case 'ss': return e + (t ? ' секунд' : ' секундын'); case 'm': case 'mm': return e + (t ? ' минут' : ' минутын'); case 'h': case 'hh': return e + (t ? ' цаг' : ' цагийн'); case 'd': case 'dd': return e + (t ? ' өдөр' : ' өдрийн'); case 'M': case 'MM': return e + (t ? ' сар' : ' сарын'); case 'y': case 'yy': return e + (t ? ' жил' : ' жилийн'); default: return e; } } const a = e.defineLocale('mn', {
        months: 'Нэгдүгээр сар_Хоёрдугаар сар_Гуравдугаар сар_Дөрөвдүгээр сар_Тавдугаар сар_Зургадугаар сар_Долдугаар сар_Наймдугаар сар_Есдүгээр сар_Аравдугаар сар_Арван нэгдүгээр сар_Арван хоёрдугаар сар'.split('_'),
        monthsShort: '1 сар_2 сар_3 сар_4 сар_5 сар_6 сар_7 сар_8 сар_9 сар_10 сар_11 сар_12 сар'.split('_'),
        monthsParseExact: !0,
        weekdays: 'Ням_Даваа_Мягмар_Лхагва_Пүрэв_Баасан_Бямба'.split('_'),
        weekdaysShort: 'Ням_Дав_Мяг_Лха_Пүр_Баа_Бям'.split('_'),
        weekdaysMin: 'Ня_Да_Мя_Лх_Пү_Ба_Бя'.split('_'),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: 'HH:mm', LTS: 'HH:mm:ss', L: 'YYYY-MM-DD', LL: 'YYYY оны MMMMын D', LLL: 'YYYY оны MMMMын D HH:mm', LLLL: 'dddd, YYYY оны MMMMын D HH:mm',
        },
        meridiemParse: /ҮӨ|ҮХ/i,
        isPM(e) { return e === 'ҮХ'; },
        meridiem(e, t, a) { return e < 12 ? 'ҮӨ' : 'ҮХ'; },
        calendar: {
          sameDay: '[Өнөөдөр] LT', nextDay: '[Маргааш] LT', nextWeek: '[Ирэх] dddd LT', lastDay: '[Өчигдөр] LT', lastWeek: '[Өнгөрсөн] dddd LT', sameElse: 'L',
        },
        relativeTime: {
          future: '%s дараа', past: '%s өмнө', s: t, ss: t, m: t, mm: t, h: t, hh: t, d: t, dd: t, M: t, MM: t, y: t, yy: t,
        },
        dayOfMonthOrdinalParse: /\d{1,2} өдөр/,
        ordinal(e, t) { switch (t) { case 'd': case 'D': case 'DDD': return `${e} өдөр`; default: return e; } },
      }); return a;
    })));
  },
  9609(e, t, a) {
    (function (e, t) { t(a('c1df')); }(0, ((e) => {
      const t = {
        0: '-чү', 1: '-чи', 2: '-чи', 3: '-чү', 4: '-чү', 5: '-чи', 6: '-чы', 7: '-чи', 8: '-чи', 9: '-чу', 10: '-чу', 20: '-чы', 30: '-чу', 40: '-чы', 50: '-чү', 60: '-чы', 70: '-чи', 80: '-чи', 90: '-чу', 100: '-чү',
      }; const a = e.defineLocale('ky', {
        months: 'январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь'.split('_'),
        monthsShort: 'янв_фев_март_апр_май_июнь_июль_авг_сен_окт_ноя_дек'.split('_'),
        weekdays: 'Жекшемби_Дүйшөмбү_Шейшемби_Шаршемби_Бейшемби_Жума_Ишемби'.split('_'),
        weekdaysShort: 'Жек_Дүй_Шей_Шар_Бей_Жум_Ише'.split('_'),
        weekdaysMin: 'Жк_Дй_Шй_Шр_Бй_Жм_Иш'.split('_'),
        longDateFormat: {
          LT: 'HH:mm', LTS: 'HH:mm:ss', L: 'DD.MM.YYYY', LL: 'D MMMM YYYY', LLL: 'D MMMM YYYY HH:mm', LLLL: 'dddd, D MMMM YYYY HH:mm',
        },
        calendar: {
          sameDay: '[Бүгүн саат] LT', nextDay: '[Эртең саат] LT', nextWeek: 'dddd [саат] LT', lastDay: '[Кечээ саат] LT', lastWeek: '[Өткөн аптанын] dddd [күнү] [саат] LT', sameElse: 'L',
        },
        relativeTime: {
          future: '%s ичинде', past: '%s мурун', s: 'бирнече секунд', ss: '%d секунд', m: 'бир мүнөт', mm: '%d мүнөт', h: 'бир саат', hh: '%d саат', d: 'бир күн', dd: '%d күн', M: 'бир ай', MM: '%d ай', y: 'бир жыл', yy: '%d жыл',
        },
        dayOfMonthOrdinalParse: /\d{1,2}-(чи|чы|чү|чу)/,
        ordinal(e) { const a = e % 10; const n = e >= 100 ? 100 : null; return e + (t[e] || t[a] || t[n]); },
        week: { dow: 1, doy: 7 },
      }); return a;
    })));
  },
  '972c': function (e, t, a) {
    (function (e, t) { t(a('c1df')); }(0, ((e) => {
      function t(e, t, a) {
        const n = {
          ss: 'secunde', mm: 'minute', hh: 'ore', dd: 'zile', MM: 'luni', yy: 'ani',
        }; let r = ' '; return (e % 100 >= 20 || e >= 100 && e % 100 === 0) && (r = ' de '), e + r + n[a];
      } const a = e.defineLocale('ro', {
        months: 'ianuarie_februarie_martie_aprilie_mai_iunie_iulie_august_septembrie_octombrie_noiembrie_decembrie'.split('_'),
        monthsShort: 'ian._febr._mart._apr._mai_iun._iul._aug._sept._oct._nov._dec.'.split('_'),
        monthsParseExact: !0,
        weekdays: 'duminică_luni_marți_miercuri_joi_vineri_sâmbătă'.split('_'),
        weekdaysShort: 'Dum_Lun_Mar_Mie_Joi_Vin_Sâm'.split('_'),
        weekdaysMin: 'Du_Lu_Ma_Mi_Jo_Vi_Sâ'.split('_'),
        longDateFormat: {
          LT: 'H:mm', LTS: 'H:mm:ss', L: 'DD.MM.YYYY', LL: 'D MMMM YYYY', LLL: 'D MMMM YYYY H:mm', LLLL: 'dddd, D MMMM YYYY H:mm',
        },
        calendar: {
          sameDay: '[azi la] LT', nextDay: '[mâine la] LT', nextWeek: 'dddd [la] LT', lastDay: '[ieri la] LT', lastWeek: '[fosta] dddd [la] LT', sameElse: 'L',
        },
        relativeTime: {
          future: 'peste %s', past: '%s în urmă', s: 'câteva secunde', ss: t, m: 'un minut', mm: t, h: 'o oră', hh: t, d: 'o zi', dd: t, M: 'o lună', MM: t, y: 'un an', yy: t,
        },
        week: { dow: 1, doy: 7 },
      }); return a;
    })));
  },
  9797(e, t, a) {
    (function (e, t) { t(a('c1df')); }(0, ((e) => {
      const t = e.defineLocale('cy', {
        months: 'Ionawr_Chwefror_Mawrth_Ebrill_Mai_Mehefin_Gorffennaf_Awst_Medi_Hydref_Tachwedd_Rhagfyr'.split('_'),
        monthsShort: 'Ion_Chwe_Maw_Ebr_Mai_Meh_Gor_Aws_Med_Hyd_Tach_Rhag'.split('_'),
        weekdays: 'Dydd Sul_Dydd Llun_Dydd Mawrth_Dydd Mercher_Dydd Iau_Dydd Gwener_Dydd Sadwrn'.split('_'),
        weekdaysShort: 'Sul_Llun_Maw_Mer_Iau_Gwe_Sad'.split('_'),
        weekdaysMin: 'Su_Ll_Ma_Me_Ia_Gw_Sa'.split('_'),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: 'HH:mm', LTS: 'HH:mm:ss', L: 'DD/MM/YYYY', LL: 'D MMMM YYYY', LLL: 'D MMMM YYYY HH:mm', LLLL: 'dddd, D MMMM YYYY HH:mm',
        },
        calendar: {
          sameDay: '[Heddiw am] LT', nextDay: '[Yfory am] LT', nextWeek: 'dddd [am] LT', lastDay: '[Ddoe am] LT', lastWeek: 'dddd [diwethaf am] LT', sameElse: 'L',
        },
        relativeTime: {
          future: 'mewn %s', past: '%s yn ôl', s: 'ychydig eiliadau', ss: '%d eiliad', m: 'munud', mm: '%d munud', h: 'awr', hh: '%d awr', d: 'diwrnod', dd: '%d diwrnod', M: 'mis', MM: '%d mis', y: 'blwyddyn', yy: '%d flynedd',
        },
        dayOfMonthOrdinalParse: /\d{1,2}(fed|ain|af|il|ydd|ed|eg)/,
        ordinal(e) { const t = e; let a = ''; const n = ['', 'af', 'il', 'ydd', 'ydd', 'ed', 'ed', 'ed', 'fed', 'fed', 'fed', 'eg', 'fed', 'eg', 'eg', 'fed', 'eg', 'eg', 'fed', 'eg', 'fed']; return t > 20 ? a = t === 40 || t === 50 || t === 60 || t === 80 || t === 100 ? 'fed' : 'ain' : t > 0 && (a = n[t]), e + a; },
        week: { dow: 1, doy: 4 },
      }); return t;
    })));
  },
  '9f26': function (e, t, a) {
    (function (e, t) { t(a('c1df')); }(0, ((e) => {
      const t = e.defineLocale('fr', {
        months: 'janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre'.split('_'),
        monthsShort: 'janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.'.split('_'),
        monthsParseExact: !0,
        weekdays: 'dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi'.split('_'),
        weekdaysShort: 'dim._lun._mar._mer._jeu._ven._sam.'.split('_'),
        weekdaysMin: 'di_lu_ma_me_je_ve_sa'.split('_'),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: 'HH:mm', LTS: 'HH:mm:ss', L: 'DD/MM/YYYY', LL: 'D MMMM YYYY', LLL: 'D MMMM YYYY HH:mm', LLLL: 'dddd D MMMM YYYY HH:mm',
        },
        calendar: {
          sameDay: '[Aujourd’hui à] LT', nextDay: '[Demain à] LT', nextWeek: 'dddd [à] LT', lastDay: '[Hier à] LT', lastWeek: 'dddd [dernier à] LT', sameElse: 'L',
        },
        relativeTime: {
          future: 'dans %s', past: 'il y a %s', s: 'quelques secondes', ss: '%d secondes', m: 'une minute', mm: '%d minutes', h: 'une heure', hh: '%d heures', d: 'un jour', dd: '%d jours', M: 'un mois', MM: '%d mois', y: 'un an', yy: '%d ans',
        },
        dayOfMonthOrdinalParse: /\d{1,2}(er|)/,
        ordinal(e, t) { switch (t) { case 'D': return e + (e === 1 ? 'er' : ''); default: case 'M': case 'Q': case 'DDD': case 'd': return e + (e === 1 ? 'er' : 'e'); case 'w': case 'W': return e + (e === 1 ? 're' : 'e'); } },
        week: { dow: 1, doy: 4 },
      }); return t;
    })));
  },
  a356(e, t, a) {
    (function (e, t) { t(a('c1df')); }(0, ((e) => {
      const t = e.defineLocale('ar-dz', {
        months: 'جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر'.split('_'),
        monthsShort: 'جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر'.split('_'),
        weekdays: 'الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت'.split('_'),
        weekdaysShort: 'احد_اثنين_ثلاثاء_اربعاء_خميس_جمعة_سبت'.split('_'),
        weekdaysMin: 'أح_إث_ثلا_أر_خم_جم_سب'.split('_'),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: 'HH:mm', LTS: 'HH:mm:ss', L: 'DD/MM/YYYY', LL: 'D MMMM YYYY', LLL: 'D MMMM YYYY HH:mm', LLLL: 'dddd D MMMM YYYY HH:mm',
        },
        calendar: {
          sameDay: '[اليوم على الساعة] LT', nextDay: '[غدا على الساعة] LT', nextWeek: 'dddd [على الساعة] LT', lastDay: '[أمس على الساعة] LT', lastWeek: 'dddd [على الساعة] LT', sameElse: 'L',
        },
        relativeTime: {
          future: 'في %s', past: 'منذ %s', s: 'ثوان', ss: '%d ثانية', m: 'دقيقة', mm: '%d دقائق', h: 'ساعة', hh: '%d ساعات', d: 'يوم', dd: '%d أيام', M: 'شهر', MM: '%d أشهر', y: 'سنة', yy: '%d سنوات',
        },
        week: { dow: 0, doy: 4 },
      }); return t;
    })));
  },
  a7fa(e, t, a) {
    (function (e, t) { t(a('c1df')); }(0, ((e) => {
      const t = e.defineLocale('bm', {
        months: 'Zanwuyekalo_Fewuruyekalo_Marisikalo_Awirilikalo_Mɛkalo_Zuwɛnkalo_Zuluyekalo_Utikalo_Sɛtanburukalo_ɔkutɔburukalo_Nowanburukalo_Desanburukalo'.split('_'),
        monthsShort: 'Zan_Few_Mar_Awi_Mɛ_Zuw_Zul_Uti_Sɛt_ɔku_Now_Des'.split('_'),
        weekdays: 'Kari_Ntɛnɛn_Tarata_Araba_Alamisa_Juma_Sibiri'.split('_'),
        weekdaysShort: 'Kar_Ntɛ_Tar_Ara_Ala_Jum_Sib'.split('_'),
        weekdaysMin: 'Ka_Nt_Ta_Ar_Al_Ju_Si'.split('_'),
        longDateFormat: {
          LT: 'HH:mm', LTS: 'HH:mm:ss', L: 'DD/MM/YYYY', LL: 'MMMM [tile] D [san] YYYY', LLL: 'MMMM [tile] D [san] YYYY [lɛrɛ] HH:mm', LLLL: 'dddd MMMM [tile] D [san] YYYY [lɛrɛ] HH:mm',
        },
        calendar: {
          sameDay: '[Bi lɛrɛ] LT', nextDay: '[Sini lɛrɛ] LT', nextWeek: 'dddd [don lɛrɛ] LT', lastDay: '[Kunu lɛrɛ] LT', lastWeek: 'dddd [tɛmɛnen lɛrɛ] LT', sameElse: 'L',
        },
        relativeTime: {
          future: '%s kɔnɔ', past: 'a bɛ %s bɔ', s: 'sanga dama dama', ss: 'sekondi %d', m: 'miniti kelen', mm: 'miniti %d', h: 'lɛrɛ kelen', hh: 'lɛrɛ %d', d: 'tile kelen', dd: 'tile %d', M: 'kalo kelen', MM: 'kalo %d', y: 'san kelen', yy: 'san %d',
        },
        week: { dow: 1, doy: 4 },
      }); return t;
    })));
  },
  ada2(e, t, a) {
    (function (e, t) { t(a('c1df')); }(0, ((e) => {
      function t(e, t) { const a = e.split('_'); return t % 10 === 1 && t % 100 !== 11 ? a[0] : t % 10 >= 2 && t % 10 <= 4 && (t % 100 < 10 || t % 100 >= 20) ? a[1] : a[2]; } function a(e, a, n) {
        const r = {
          ss: a ? 'секунда_секунди_секунд' : 'секунду_секунди_секунд', mm: a ? 'хвилина_хвилини_хвилин' : 'хвилину_хвилини_хвилин', hh: a ? 'година_години_годин' : 'годину_години_годин', dd: 'день_дні_днів', MM: 'місяць_місяці_місяців', yy: 'рік_роки_років',
        }; return n === 'm' ? a ? 'хвилина' : 'хвилину' : n === 'h' ? a ? 'година' : 'годину' : `${e} ${t(r[n], +e)}`;
      } function n(e, t) { const a = { nominative: 'неділя_понеділок_вівторок_середа_четвер_п’ятниця_субота'.split('_'), accusative: 'неділю_понеділок_вівторок_середу_четвер_п’ятницю_суботу'.split('_'), genitive: 'неділі_понеділка_вівторка_середи_четверга_п’ятниці_суботи'.split('_') }; if (!0 === e) return a.nominative.slice(1, 7).concat(a.nominative.slice(0, 1)); if (!e) return a.nominative; const n = /(\[[ВвУу]\]) ?dddd/.test(t) ? 'accusative' : /\[?(?:минулої|наступної)? ?\] ?dddd/.test(t) ? 'genitive' : 'nominative'; return a[n][e.day()]; } function r(e) { return function () { return `${e}о${this.hours() === 11 ? 'б' : ''}] LT`; }; } const i = e.defineLocale('uk', {
        months: { format: 'січня_лютого_березня_квітня_травня_червня_липня_серпня_вересня_жовтня_листопада_грудня'.split('_'), standalone: 'січень_лютий_березень_квітень_травень_червень_липень_серпень_вересень_жовтень_листопад_грудень'.split('_') },
        monthsShort: 'січ_лют_бер_квіт_трав_черв_лип_серп_вер_жовт_лист_груд'.split('_'),
        weekdays: n,
        weekdaysShort: 'нд_пн_вт_ср_чт_пт_сб'.split('_'),
        weekdaysMin: 'нд_пн_вт_ср_чт_пт_сб'.split('_'),
        longDateFormat: {
          LT: 'HH:mm', LTS: 'HH:mm:ss', L: 'DD.MM.YYYY', LL: 'D MMMM YYYY р.', LLL: 'D MMMM YYYY р., HH:mm', LLLL: 'dddd, D MMMM YYYY р., HH:mm',
        },
        calendar: {
          sameDay: r('[Сьогодні '), nextDay: r('[Завтра '), lastDay: r('[Вчора '), nextWeek: r('[У] dddd ['), lastWeek() { switch (this.day()) { case 0: case 3: case 5: case 6: return r('[Минулої] dddd [').call(this); case 1: case 2: case 4: return r('[Минулого] dddd [').call(this); } }, sameElse: 'L',
        },
        relativeTime: {
          future: 'за %s', past: '%s тому', s: 'декілька секунд', ss: a, m: a, mm: a, h: 'годину', hh: a, d: 'день', dd: a, M: 'місяць', MM: a, y: 'рік', yy: a,
        },
        meridiemParse: /ночі|ранку|дня|вечора/,
        isPM(e) { return /^(дня|вечора)$/.test(e); },
        meridiem(e, t, a) { return e < 4 ? 'ночі' : e < 12 ? 'ранку' : e < 17 ? 'дня' : 'вечора'; },
        dayOfMonthOrdinalParse: /\d{1,2}-(й|го)/,
        ordinal(e, t) { switch (t) { case 'M': case 'd': case 'DDD': case 'w': case 'W': return `${e}-й`; case 'D': return `${e}-го`; default: return e; } },
        week: { dow: 1, doy: 7 },
      }); return i;
    })));
  },
  b29d(e, t, a) {
    (function (e, t) { t(a('c1df')); }(0, ((e) => {
      const t = e.defineLocale('lo', {
        months: 'ມັງກອນ_ກຸມພາ_ມີນາ_ເມສາ_ພຶດສະພາ_ມິຖຸນາ_ກໍລະກົດ_ສິງຫາ_ກັນຍາ_ຕຸລາ_ພະຈິກ_ທັນວາ'.split('_'),
        monthsShort: 'ມັງກອນ_ກຸມພາ_ມີນາ_ເມສາ_ພຶດສະພາ_ມິຖຸນາ_ກໍລະກົດ_ສິງຫາ_ກັນຍາ_ຕຸລາ_ພະຈິກ_ທັນວາ'.split('_'),
        weekdays: 'ອາທິດ_ຈັນ_ອັງຄານ_ພຸດ_ພະຫັດ_ສຸກ_ເສົາ'.split('_'),
        weekdaysShort: 'ທິດ_ຈັນ_ອັງຄານ_ພຸດ_ພະຫັດ_ສຸກ_ເສົາ'.split('_'),
        weekdaysMin: 'ທ_ຈ_ອຄ_ພ_ພຫ_ສກ_ສ'.split('_'),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: 'HH:mm', LTS: 'HH:mm:ss', L: 'DD/MM/YYYY', LL: 'D MMMM YYYY', LLL: 'D MMMM YYYY HH:mm', LLLL: 'ວັນdddd D MMMM YYYY HH:mm',
        },
        meridiemParse: /ຕອນເຊົ້າ|ຕອນແລງ/,
        isPM(e) { return e === 'ຕອນແລງ'; },
        meridiem(e, t, a) { return e < 12 ? 'ຕອນເຊົ້າ' : 'ຕອນແລງ'; },
        calendar: {
          sameDay: '[ມື້ນີ້ເວລາ] LT', nextDay: '[ມື້ອື່ນເວລາ] LT', nextWeek: '[ວັນ]dddd[ໜ້າເວລາ] LT', lastDay: '[ມື້ວານນີ້ເວລາ] LT', lastWeek: '[ວັນ]dddd[ແລ້ວນີ້ເວລາ] LT', sameElse: 'L',
        },
        relativeTime: {
          future: 'ອີກ %s', past: '%sຜ່ານມາ', s: 'ບໍ່ເທົ່າໃດວິນາທີ', ss: '%d ວິນາທີ', m: '1 ນາທີ', mm: '%d ນາທີ', h: '1 ຊົ່ວໂມງ', hh: '%d ຊົ່ວໂມງ', d: '1 ມື້', dd: '%d ມື້', M: '1 ເດືອນ', MM: '%d ເດືອນ', y: '1 ປີ', yy: '%d ປີ',
        },
        dayOfMonthOrdinalParse: /(ທີ່)\d{1,2}/,
        ordinal(e) { return `ທີ່${e}`; },
      }); return t;
    })));
  },
  b3eb(e, t, a) {
    (function (e, t) { t(a('c1df')); }(0, ((e) => {
      function t(e, t, a, n) {
        const r = {
          m: ['eine Minute', 'einer Minute'], h: ['eine Stunde', 'einer Stunde'], d: ['ein Tag', 'einem Tag'], dd: [`${e} Tage`, `${e} Tagen`], M: ['ein Monat', 'einem Monat'], MM: [`${e} Monate`, `${e} Monaten`], y: ['ein Jahr', 'einem Jahr'], yy: [`${e} Jahre`, `${e} Jahren`],
        }; return t ? r[a][0] : r[a][1];
      } const a = e.defineLocale('de-at', {
        months: 'Jänner_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember'.split('_'),
        monthsShort: 'Jän._Feb._März_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.'.split('_'),
        monthsParseExact: !0,
        weekdays: 'Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag'.split('_'),
        weekdaysShort: 'So._Mo._Di._Mi._Do._Fr._Sa.'.split('_'),
        weekdaysMin: 'So_Mo_Di_Mi_Do_Fr_Sa'.split('_'),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: 'HH:mm', LTS: 'HH:mm:ss', L: 'DD.MM.YYYY', LL: 'D. MMMM YYYY', LLL: 'D. MMMM YYYY HH:mm', LLLL: 'dddd, D. MMMM YYYY HH:mm',
        },
        calendar: {
          sameDay: '[heute um] LT [Uhr]', sameElse: 'L', nextDay: '[morgen um] LT [Uhr]', nextWeek: 'dddd [um] LT [Uhr]', lastDay: '[gestern um] LT [Uhr]', lastWeek: '[letzten] dddd [um] LT [Uhr]',
        },
        relativeTime: {
          future: 'in %s', past: 'vor %s', s: 'ein paar Sekunden', ss: '%d Sekunden', m: t, mm: '%d Minuten', h: t, hh: '%d Stunden', d: t, dd: t, M: t, MM: t, y: t, yy: t,
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: '%d.',
        week: { dow: 1, doy: 4 },
      }); return a;
    })));
  },
  b469(e, t, a) {
    (function (e, t) { t(a('c1df')); }(0, ((e) => {
      function t(e, t, a, n) {
        const r = {
          m: ['eine Minute', 'einer Minute'], h: ['eine Stunde', 'einer Stunde'], d: ['ein Tag', 'einem Tag'], dd: [`${e} Tage`, `${e} Tagen`], M: ['ein Monat', 'einem Monat'], MM: [`${e} Monate`, `${e} Monaten`], y: ['ein Jahr', 'einem Jahr'], yy: [`${e} Jahre`, `${e} Jahren`],
        }; return t ? r[a][0] : r[a][1];
      } const a = e.defineLocale('de', {
        months: 'Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember'.split('_'),
        monthsShort: 'Jan._Feb._März_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.'.split('_'),
        monthsParseExact: !0,
        weekdays: 'Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag'.split('_'),
        weekdaysShort: 'So._Mo._Di._Mi._Do._Fr._Sa.'.split('_'),
        weekdaysMin: 'So_Mo_Di_Mi_Do_Fr_Sa'.split('_'),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: 'HH:mm', LTS: 'HH:mm:ss', L: 'DD.MM.YYYY', LL: 'D. MMMM YYYY', LLL: 'D. MMMM YYYY HH:mm', LLLL: 'dddd, D. MMMM YYYY HH:mm',
        },
        calendar: {
          sameDay: '[heute um] LT [Uhr]', sameElse: 'L', nextDay: '[morgen um] LT [Uhr]', nextWeek: 'dddd [um] LT [Uhr]', lastDay: '[gestern um] LT [Uhr]', lastWeek: '[letzten] dddd [um] LT [Uhr]',
        },
        relativeTime: {
          future: 'in %s', past: 'vor %s', s: 'ein paar Sekunden', ss: '%d Sekunden', m: t, mm: '%d Minuten', h: t, hh: '%d Stunden', d: t, dd: t, M: t, MM: t, y: t, yy: t,
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: '%d.',
        week: { dow: 1, doy: 4 },
      }); return a;
    })));
  },
  b53d(e, t, a) {
    (function (e, t) { t(a('c1df')); }(0, ((e) => {
      const t = e.defineLocale('tzm-latn', {
        months: 'innayr_brˤayrˤ_marˤsˤ_ibrir_mayyw_ywnyw_ywlywz_ɣwšt_šwtanbir_ktˤwbrˤ_nwwanbir_dwjnbir'.split('_'),
        monthsShort: 'innayr_brˤayrˤ_marˤsˤ_ibrir_mayyw_ywnyw_ywlywz_ɣwšt_šwtanbir_ktˤwbrˤ_nwwanbir_dwjnbir'.split('_'),
        weekdays: 'asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas'.split('_'),
        weekdaysShort: 'asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas'.split('_'),
        weekdaysMin: 'asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas'.split('_'),
        longDateFormat: {
          LT: 'HH:mm', LTS: 'HH:mm:ss', L: 'DD/MM/YYYY', LL: 'D MMMM YYYY', LLL: 'D MMMM YYYY HH:mm', LLLL: 'dddd D MMMM YYYY HH:mm',
        },
        calendar: {
          sameDay: '[asdkh g] LT', nextDay: '[aska g] LT', nextWeek: 'dddd [g] LT', lastDay: '[assant g] LT', lastWeek: 'dddd [g] LT', sameElse: 'L',
        },
        relativeTime: {
          future: 'dadkh s yan %s', past: 'yan %s', s: 'imik', ss: '%d imik', m: 'minuḍ', mm: '%d minuḍ', h: 'saɛa', hh: '%d tassaɛin', d: 'ass', dd: '%d ossan', M: 'ayowr', MM: '%d iyyirn', y: 'asgas', yy: '%d isgasn',
        },
        week: { dow: 6, doy: 12 },
      }); return t;
    })));
  },
  b540(e, t, a) {
    (function (e, t) { t(a('c1df')); }(0, ((e) => {
      const t = e.defineLocale('jv', {
        months: 'Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_Nopember_Desember'.split('_'),
        monthsShort: 'Jan_Feb_Mar_Apr_Mei_Jun_Jul_Ags_Sep_Okt_Nop_Des'.split('_'),
        weekdays: 'Minggu_Senen_Seloso_Rebu_Kemis_Jemuwah_Septu'.split('_'),
        weekdaysShort: 'Min_Sen_Sel_Reb_Kem_Jem_Sep'.split('_'),
        weekdaysMin: 'Mg_Sn_Sl_Rb_Km_Jm_Sp'.split('_'),
        longDateFormat: {
          LT: 'HH.mm', LTS: 'HH.mm.ss', L: 'DD/MM/YYYY', LL: 'D MMMM YYYY', LLL: 'D MMMM YYYY [pukul] HH.mm', LLLL: 'dddd, D MMMM YYYY [pukul] HH.mm',
        },
        meridiemParse: /enjing|siyang|sonten|ndalu/,
        meridiemHour(e, t) { return e === 12 && (e = 0), t === 'enjing' ? e : t === 'siyang' ? e >= 11 ? e : e + 12 : t === 'sonten' || t === 'ndalu' ? e + 12 : void 0; },
        meridiem(e, t, a) { return e < 11 ? 'enjing' : e < 15 ? 'siyang' : e < 19 ? 'sonten' : 'ndalu'; },
        calendar: {
          sameDay: '[Dinten puniko pukul] LT', nextDay: '[Mbenjang pukul] LT', nextWeek: 'dddd [pukul] LT', lastDay: '[Kala wingi pukul] LT', lastWeek: 'dddd [kepengker pukul] LT', sameElse: 'L',
        },
        relativeTime: {
          future: 'wonten ing %s', past: '%s ingkang kepengker', s: 'sawetawis detik', ss: '%d detik', m: 'setunggal menit', mm: '%d menit', h: 'setunggal jam', hh: '%d jam', d: 'sedinten', dd: '%d dinten', M: 'sewulan', MM: '%d wulan', y: 'setaun', yy: '%d taun',
        },
        week: { dow: 1, doy: 7 },
      }); return t;
    })));
  },
  b84c(e, t, a) {
    (function (e, t) { t(a('c1df')); }(0, ((e) => {
      const t = e.defineLocale('nn', {
        months: 'januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember'.split('_'),
        monthsShort: 'jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des'.split('_'),
        weekdays: 'sundag_måndag_tysdag_onsdag_torsdag_fredag_laurdag'.split('_'),
        weekdaysShort: 'sun_mån_tys_ons_tor_fre_lau'.split('_'),
        weekdaysMin: 'su_må_ty_on_to_fr_lø'.split('_'),
        longDateFormat: {
          LT: 'HH:mm', LTS: 'HH:mm:ss', L: 'DD.MM.YYYY', LL: 'D. MMMM YYYY', LLL: 'D. MMMM YYYY [kl.] H:mm', LLLL: 'dddd D. MMMM YYYY [kl.] HH:mm',
        },
        calendar: {
          sameDay: '[I dag klokka] LT', nextDay: '[I morgon klokka] LT', nextWeek: 'dddd [klokka] LT', lastDay: '[I går klokka] LT', lastWeek: '[Føregåande] dddd [klokka] LT', sameElse: 'L',
        },
        relativeTime: {
          future: 'om %s', past: '%s sidan', s: 'nokre sekund', ss: '%d sekund', m: 'eit minutt', mm: '%d minutt', h: 'ein time', hh: '%d timar', d: 'ein dag', dd: '%d dagar', M: 'ein månad', MM: '%d månader', y: 'eit år', yy: '%d år',
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: '%d.',
        week: { dow: 1, doy: 4 },
      }); return t;
    })));
  },
  b97c(e, t, a) {
    (function (e, t) { t(a('c1df')); }(0, ((e) => {
      const t = {
        ss: 'sekundes_sekundēm_sekunde_sekundes'.split('_'), m: 'minūtes_minūtēm_minūte_minūtes'.split('_'), mm: 'minūtes_minūtēm_minūte_minūtes'.split('_'), h: 'stundas_stundām_stunda_stundas'.split('_'), hh: 'stundas_stundām_stunda_stundas'.split('_'), d: 'dienas_dienām_diena_dienas'.split('_'), dd: 'dienas_dienām_diena_dienas'.split('_'), M: 'mēneša_mēnešiem_mēnesis_mēneši'.split('_'), MM: 'mēneša_mēnešiem_mēnesis_mēneši'.split('_'), y: 'gada_gadiem_gads_gadi'.split('_'), yy: 'gada_gadiem_gads_gadi'.split('_'),
      }; function a(e, t, a) { return a ? t % 10 === 1 && t % 100 !== 11 ? e[2] : e[3] : t % 10 === 1 && t % 100 !== 11 ? e[0] : e[1]; } function n(e, n, r) { return `${e} ${a(t[r], e, n)}`; } function r(e, n, r) { return a(t[r], e, n); } function i(e, t) { return t ? 'dažas sekundes' : 'dažām sekundēm'; } const s = e.defineLocale('lv', {
        months: 'janvāris_februāris_marts_aprīlis_maijs_jūnijs_jūlijs_augusts_septembris_oktobris_novembris_decembris'.split('_'),
        monthsShort: 'jan_feb_mar_apr_mai_jūn_jūl_aug_sep_okt_nov_dec'.split('_'),
        weekdays: 'svētdiena_pirmdiena_otrdiena_trešdiena_ceturtdiena_piektdiena_sestdiena'.split('_'),
        weekdaysShort: 'Sv_P_O_T_C_Pk_S'.split('_'),
        weekdaysMin: 'Sv_P_O_T_C_Pk_S'.split('_'),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: 'HH:mm', LTS: 'HH:mm:ss', L: 'DD.MM.YYYY.', LL: 'YYYY. [gada] D. MMMM', LLL: 'YYYY. [gada] D. MMMM, HH:mm', LLLL: 'YYYY. [gada] D. MMMM, dddd, HH:mm',
        },
        calendar: {
          sameDay: '[Šodien pulksten] LT', nextDay: '[Rīt pulksten] LT', nextWeek: 'dddd [pulksten] LT', lastDay: '[Vakar pulksten] LT', lastWeek: '[Pagājušā] dddd [pulksten] LT', sameElse: 'L',
        },
        relativeTime: {
          future: 'pēc %s', past: 'pirms %s', s: i, ss: n, m: r, mm: n, h: r, hh: n, d: r, dd: n, M: r, MM: n, y: r, yy: n,
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: '%d.',
        week: { dow: 1, doy: 4 },
      }); return s;
    })));
  },
  bb71(e, t, a) {
    (function (e, t) { t(a('c1df')); }(0, ((e) => {
      function t(e, t, a, n) {
        const r = {
          m: ['eine Minute', 'einer Minute'], h: ['eine Stunde', 'einer Stunde'], d: ['ein Tag', 'einem Tag'], dd: [`${e} Tage`, `${e} Tagen`], M: ['ein Monat', 'einem Monat'], MM: [`${e} Monate`, `${e} Monaten`], y: ['ein Jahr', 'einem Jahr'], yy: [`${e} Jahre`, `${e} Jahren`],
        }; return t ? r[a][0] : r[a][1];
      } const a = e.defineLocale('de-ch', {
        months: 'Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember'.split('_'),
        monthsShort: 'Jan._Feb._März_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.'.split('_'),
        monthsParseExact: !0,
        weekdays: 'Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag'.split('_'),
        weekdaysShort: 'So_Mo_Di_Mi_Do_Fr_Sa'.split('_'),
        weekdaysMin: 'So_Mo_Di_Mi_Do_Fr_Sa'.split('_'),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: 'HH:mm', LTS: 'HH:mm:ss', L: 'DD.MM.YYYY', LL: 'D. MMMM YYYY', LLL: 'D. MMMM YYYY HH:mm', LLLL: 'dddd, D. MMMM YYYY HH:mm',
        },
        calendar: {
          sameDay: '[heute um] LT [Uhr]', sameElse: 'L', nextDay: '[morgen um] LT [Uhr]', nextWeek: 'dddd [um] LT [Uhr]', lastDay: '[gestern um] LT [Uhr]', lastWeek: '[letzten] dddd [um] LT [Uhr]',
        },
        relativeTime: {
          future: 'in %s', past: 'vor %s', s: 'ein paar Sekunden', ss: '%d Sekunden', m: t, mm: '%d Minuten', h: t, hh: '%d Stunden', d: t, dd: t, M: t, MM: t, y: t, yy: t,
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: '%d.',
        week: { dow: 1, doy: 4 },
      }); return a;
    })));
  },
  c109(e, t, a) {
    (function (e, t) { t(a('c1df')); }(0, ((e) => {
      const t = e.defineLocale('tzm', {
        months: 'ⵉⵏⵏⴰⵢⵔ_ⴱⵕⴰⵢⵕ_ⵎⴰⵕⵚ_ⵉⴱⵔⵉⵔ_ⵎⴰⵢⵢⵓ_ⵢⵓⵏⵢⵓ_ⵢⵓⵍⵢⵓⵣ_ⵖⵓⵛⵜ_ⵛⵓⵜⴰⵏⴱⵉⵔ_ⴽⵟⵓⴱⵕ_ⵏⵓⵡⴰⵏⴱⵉⵔ_ⴷⵓⵊⵏⴱⵉⵔ'.split('_'),
        monthsShort: 'ⵉⵏⵏⴰⵢⵔ_ⴱⵕⴰⵢⵕ_ⵎⴰⵕⵚ_ⵉⴱⵔⵉⵔ_ⵎⴰⵢⵢⵓ_ⵢⵓⵏⵢⵓ_ⵢⵓⵍⵢⵓⵣ_ⵖⵓⵛⵜ_ⵛⵓⵜⴰⵏⴱⵉⵔ_ⴽⵟⵓⴱⵕ_ⵏⵓⵡⴰⵏⴱⵉⵔ_ⴷⵓⵊⵏⴱⵉⵔ'.split('_'),
        weekdays: 'ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ'.split('_'),
        weekdaysShort: 'ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ'.split('_'),
        weekdaysMin: 'ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ'.split('_'),
        longDateFormat: {
          LT: 'HH:mm', LTS: 'HH:mm:ss', L: 'DD/MM/YYYY', LL: 'D MMMM YYYY', LLL: 'D MMMM YYYY HH:mm', LLLL: 'dddd D MMMM YYYY HH:mm',
        },
        calendar: {
          sameDay: '[ⴰⵙⴷⵅ ⴴ] LT', nextDay: '[ⴰⵙⴽⴰ ⴴ] LT', nextWeek: 'dddd [ⴴ] LT', lastDay: '[ⴰⵚⴰⵏⵜ ⴴ] LT', lastWeek: 'dddd [ⴴ] LT', sameElse: 'L',
        },
        relativeTime: {
          future: 'ⴷⴰⴷⵅ ⵙ ⵢⴰⵏ %s', past: 'ⵢⴰⵏ %s', s: 'ⵉⵎⵉⴽ', ss: '%d ⵉⵎⵉⴽ', m: 'ⵎⵉⵏⵓⴺ', mm: '%d ⵎⵉⵏⵓⴺ', h: 'ⵙⴰⵄⴰ', hh: '%d ⵜⴰⵙⵙⴰⵄⵉⵏ', d: 'ⴰⵙⵙ', dd: '%d oⵙⵙⴰⵏ', M: 'ⴰⵢoⵓⵔ', MM: '%d ⵉⵢⵢⵉⵔⵏ', y: 'ⴰⵙⴳⴰⵙ', yy: '%d ⵉⵙⴳⴰⵙⵏ',
        },
        week: { dow: 6, doy: 12 },
      }); return t;
    })));
  },
  c1df(e, t, a) {
    (function (e) {
      (function (t, a) { e.exports = a(); }(0, (() => {
        let t; let n; function r() { return t.apply(null, arguments); } function i(e) { t = e; } function s(e) { return e instanceof Array || Object.prototype.toString.call(e) === '[object Array]'; } function o(e) { return e != null && Object.prototype.toString.call(e) === '[object Object]'; } function d(e) { if (Object.getOwnPropertyNames) return Object.getOwnPropertyNames(e).length === 0; let t; for (t in e) if (e.hasOwnProperty(t)) return !1; return !0; } function l(e) { return void 0 === e; } function u(e) { return typeof e === 'number' || Object.prototype.toString.call(e) === '[object Number]'; } function _(e) { return e instanceof Date || Object.prototype.toString.call(e) === '[object Date]'; } function c(e, t) { let a; const n = []; for (a = 0; a < e.length; ++a)n.push(t(e[a], a)); return n; } function m(e, t) { return Object.prototype.hasOwnProperty.call(e, t); } function h(e, t) { for (const a in t)m(t, a) && (e[a] = t[a]); return m(t, 'toString') && (e.toString = t.toString), m(t, 'valueOf') && (e.valueOf = t.valueOf), e; } function f(e, t, a, n) { return Ga(e, t, a, n, !0).utc(); } function M() {
          return {
            empty: !1, unusedTokens: [], unusedInput: [], overflow: -2, charsLeftOver: 0, nullInput: !1, invalidMonth: null, invalidFormat: !1, userInvalidated: !1, iso: !1, parsedDateParts: [], meridiem: null, rfc2822: !1, weekdayMismatch: !1,
          };
        } function p(e) { return e._pf == null && (e._pf = M()), e._pf; } function g(e) { if (e._isValid == null) { const t = p(e); const a = n.call(t.parsedDateParts, ((e) => e != null)); let r = !isNaN(e._d.getTime()) && t.overflow < 0 && !t.empty && !t.invalidMonth && !t.invalidWeekday && !t.weekdayMismatch && !t.nullInput && !t.invalidFormat && !t.userInvalidated && (!t.meridiem || t.meridiem && a); if (e._strict && (r = r && t.charsLeftOver === 0 && t.unusedTokens.length === 0 && void 0 === t.bigHour), Object.isFrozen != null && Object.isFrozen(e)) return r; e._isValid = r; } return e._isValid; } function y(e) { const t = f(NaN); return e != null ? h(p(t), e) : p(t).userInvalidated = !0, t; }n = Array.prototype.some ? Array.prototype.some : function (e) { for (let t = Object(this), a = t.length >>> 0, n = 0; n < a; n++) if (n in t && e.call(this, t[n], n, t)) return !0; return !1; }; const L = r.momentProperties = []; function v(e, t) { let a; let n; let r; if (l(t._isAMomentObject) || (e._isAMomentObject = t._isAMomentObject), l(t._i) || (e._i = t._i), l(t._f) || (e._f = t._f), l(t._l) || (e._l = t._l), l(t._strict) || (e._strict = t._strict), l(t._tzm) || (e._tzm = t._tzm), l(t._isUTC) || (e._isUTC = t._isUTC), l(t._offset) || (e._offset = t._offset), l(t._pf) || (e._pf = p(t)), l(t._locale) || (e._locale = t._locale), L.length > 0) for (a = 0; a < L.length; a++)n = L[a], r = t[n], l(r) || (e[n] = r); return e; } let Y = !1; function b(e) { v(this, e), this._d = new Date(e._d != null ? e._d.getTime() : NaN), this.isValid() || (this._d = new Date(NaN)), !1 === Y && (Y = !0, r.updateOffset(this), Y = !1); } function k(e) { return e instanceof b || e != null && e._isAMomentObject != null; } function D(e) { return e < 0 ? Math.ceil(e) || 0 : Math.floor(e); } function w(e) { const t = +e; let a = 0; return t !== 0 && isFinite(t) && (a = D(t)), a; } function T(e, t, a) { let n; const r = Math.min(e.length, t.length); const i = Math.abs(e.length - t.length); let s = 0; for (n = 0; n < r; n++)(a && e[n] !== t[n] || !a && w(e[n]) !== w(t[n])) && s++; return s + i; } function x(e) { !1 === r.suppressDeprecationWarnings && typeof console !== 'undefined' && console.warn && console.warn(`Deprecation warning: ${e}`); } function S(e, t) { let a = !0; return h((function () { if (r.deprecationHandler != null && r.deprecationHandler(null, e), a) { for (var n, i = [], s = 0; s < arguments.length; s++) { if (n = '', typeof arguments[s] === 'object') { for (const o in n += `\n[${s}] `, arguments[0])n += `${o}: ${arguments[0][o]}, `; n = n.slice(0, -2); } else n = arguments[s]; i.push(n); }x(`${e}\nArguments: ${Array.prototype.slice.call(i).join('')}\n${(new Error()).stack}`), a = !1; } return t.apply(this, arguments); }), t); } let H; const j = {}; function P(e, t) { r.deprecationHandler != null && r.deprecationHandler(e, t), j[e] || (x(t), j[e] = !0); } function O(e) { return e instanceof Function || Object.prototype.toString.call(e) === '[object Function]'; } function A(e) { let t; let a; for (a in e)t = e[a], O(t) ? this[a] = t : this[`_${a}`] = t; this._config = e, this._dayOfMonthOrdinalParseLenient = new RegExp(`${this._dayOfMonthOrdinalParse.source || this._ordinalParse.source}|${/\d{1,2}/.source}`); } function F(e, t) { let a; const n = h({}, e); for (a in t)m(t, a) && (o(e[a]) && o(t[a]) ? (n[a] = {}, h(n[a], e[a]), h(n[a], t[a])) : t[a] != null ? n[a] = t[a] : delete n[a]); for (a in e)m(e, a) && !m(t, a) && o(e[a]) && (n[a] = h({}, n[a])); return n; } function W(e) { e != null && this.set(e); }r.suppressDeprecationWarnings = !1, r.deprecationHandler = null, H = Object.keys ? Object.keys : function (e) { let t; const a = []; for (t in e)m(e, t) && a.push(t); return a; }; const C = {
          sameDay: '[Today at] LT', nextDay: '[Tomorrow at] LT', nextWeek: 'dddd [at] LT', lastDay: '[Yesterday at] LT', lastWeek: '[Last] dddd [at] LT', sameElse: 'L',
        }; function E(e, t, a) { const n = this._calendar[e] || this._calendar.sameElse; return O(n) ? n.call(t, a) : n; } const z = {
          LTS: 'h:mm:ss A', LT: 'h:mm A', L: 'MM/DD/YYYY', LL: 'MMMM D, YYYY', LLL: 'MMMM D, YYYY h:mm A', LLLL: 'dddd, MMMM D, YYYY h:mm A',
        }; function I(e) { const t = this._longDateFormat[e]; const a = this._longDateFormat[e.toUpperCase()]; return t || !a ? t : (this._longDateFormat[e] = a.replace(/MMMM|MM|DD|dddd/g, ((e) => e.slice(1))), this._longDateFormat[e]); } const R = 'Invalid date'; function N() { return this._invalidDate; } const V = '%d'; const B = /\d{1,2}/; function J(e) { return this._ordinal.replace('%d', e); } const U = {
          future: 'in %s', past: '%s ago', s: 'a few seconds', ss: '%d seconds', m: 'a minute', mm: '%d minutes', h: 'an hour', hh: '%d hours', d: 'a day', dd: '%d days', M: 'a month', MM: '%d months', y: 'a year', yy: '%d years',
        }; function G(e, t, a, n) { const r = this._relativeTime[a]; return O(r) ? r(e, t, a, n) : r.replace(/%d/i, e); } function q(e, t) { const a = this._relativeTime[e > 0 ? 'future' : 'past']; return O(a) ? a(t) : a.replace(/%s/i, t); } const $ = {}; function K(e, t) { const a = e.toLowerCase(); $[a] = $[`${a}s`] = $[t] = e; } function Z(e) { return typeof e === 'string' ? $[e] || $[e.toLowerCase()] : void 0; } function Q(e) { let t; let a; const n = {}; for (a in e)m(e, a) && (t = Z(a), t && (n[t] = e[a])); return n; } const X = {}; function ee(e, t) { X[e] = t; } function te(e) { const t = []; for (const a in e)t.push({ unit: a, priority: X[a] }); return t.sort(((e, t) => e.priority - t.priority)), t; } function ae(e, t, a) { const n = `${Math.abs(e)}`; const r = t - n.length; const i = e >= 0; return (i ? a ? '+' : '' : '-') + Math.pow(10, Math.max(0, r)).toString().substr(1) + n; } const ne = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g; const re = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g; const ie = {}; const se = {}; function oe(e, t, a, n) { let r = n; typeof n === 'string' && (r = function () { return this[n](); }), e && (se[e] = r), t && (se[t[0]] = function () { return ae(r.apply(this, arguments), t[1], t[2]); }), a && (se[a] = function () { return this.localeData().ordinal(r.apply(this, arguments), e); }); } function de(e) { return e.match(/\[[\s\S]/) ? e.replace(/^\[|\]$/g, '') : e.replace(/\\/g, ''); } function le(e) { let t; let a; const n = e.match(ne); for (t = 0, a = n.length; t < a; t++)se[n[t]] ? n[t] = se[n[t]] : n[t] = de(n[t]); return function (t) { let r; let i = ''; for (r = 0; r < a; r++)i += O(n[r]) ? n[r].call(t, e) : n[r]; return i; }; } function ue(e, t) { return e.isValid() ? (t = _e(t, e.localeData()), ie[t] = ie[t] || le(t), ie[t](e)) : e.localeData().invalidDate(); } function _e(e, t) { let a = 5; function n(e) { return t.longDateFormat(e) || e; }re.lastIndex = 0; while (a >= 0 && re.test(e))e = e.replace(re, n), re.lastIndex = 0, a -= 1; return e; } const ce = /\d/; const me = /\d\d/; const he = /\d{3}/; const fe = /\d{4}/; const Me = /[+-]?\d{6}/; const pe = /\d\d?/; const ge = /\d\d\d\d?/; const ye = /\d\d\d\d\d\d?/; const Le = /\d{1,3}/; const ve = /\d{1,4}/; const Ye = /[+-]?\d{1,6}/; const be = /\d+/; const ke = /[+-]?\d+/; const De = /Z|[+-]\d\d:?\d\d/gi; const we = /Z|[+-]\d\d(?::?\d\d)?/gi; const Te = /[+-]?\d+(\.\d{1,3})?/; const xe = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i; const Se = {}; function He(e, t, a) { Se[e] = O(t) ? t : function (e, n) { return e && a ? a : t; }; } function je(e, t) { return m(Se, e) ? Se[e](t._strict, t._locale) : new RegExp(Pe(e)); } function Pe(e) { return Oe(e.replace('\\', '').replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, ((e, t, a, n, r) => t || a || n || r))); } function Oe(e) { return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'); } const Ae = {}; function Fe(e, t) { let a; let n = t; for (typeof e === 'string' && (e = [e]), u(t) && (n = function (e, a) { a[t] = w(e); }), a = 0; a < e.length; a++)Ae[e[a]] = n; } function We(e, t) { Fe(e, ((e, a, n, r) => { n._w = n._w || {}, t(e, n._w, n, r); })); } function Ce(e, t, a) { t != null && m(Ae, e) && Ae[e](t, a._a, a, e); } const Ee = 0; const ze = 1; const Ie = 2; const Re = 3; const Ne = 4; const Ve = 5; const Be = 6; const Je = 7; const Ue = 8; function Ge(e) { return qe(e) ? 366 : 365; } function qe(e) { return e % 4 === 0 && e % 100 !== 0 || e % 400 === 0; }oe('Y', 0, 0, (function () { const e = this.year(); return e <= 9999 ? `${e}` : `+${e}`; })), oe(0, ['YY', 2], 0, (function () { return this.year() % 100; })), oe(0, ['YYYY', 4], 0, 'year'), oe(0, ['YYYYY', 5], 0, 'year'), oe(0, ['YYYYYY', 6, !0], 0, 'year'), K('year', 'y'), ee('year', 1), He('Y', ke), He('YY', pe, me), He('YYYY', ve, fe), He('YYYYY', Ye, Me), He('YYYYYY', Ye, Me), Fe(['YYYYY', 'YYYYYY'], Ee), Fe('YYYY', ((e, t) => { t[Ee] = e.length === 2 ? r.parseTwoDigitYear(e) : w(e); })), Fe('YY', ((e, t) => { t[Ee] = r.parseTwoDigitYear(e); })), Fe('Y', ((e, t) => { t[Ee] = parseInt(e, 10); })), r.parseTwoDigitYear = function (e) { return w(e) + (w(e) > 68 ? 1900 : 2e3); }; let $e; const Ke = Qe('FullYear', !0); function Ze() { return qe(this.year()); } function Qe(e, t) { return function (a) { return a != null ? (et(this, e, a), r.updateOffset(this, t), this) : Xe(this, e); }; } function Xe(e, t) { return e.isValid() ? e._d[`get${e._isUTC ? 'UTC' : ''}${t}`]() : NaN; } function et(e, t, a) { e.isValid() && !isNaN(a) && (t === 'FullYear' && qe(e.year()) && e.month() === 1 && e.date() === 29 ? e._d[`set${e._isUTC ? 'UTC' : ''}${t}`](a, e.month(), rt(a, e.month())) : e._d[`set${e._isUTC ? 'UTC' : ''}${t}`](a)); } function tt(e) { return e = Z(e), O(this[e]) ? this[e]() : this; } function at(e, t) { if (typeof e === 'object') { e = Q(e); for (let a = te(e), n = 0; n < a.length; n++) this[a[n].unit](e[a[n].unit]); } else if (e = Z(e), O(this[e])) return this[e](t); return this; } function nt(e, t) { return (e % t + t) % t; } function rt(e, t) { if (isNaN(e) || isNaN(t)) return NaN; const a = nt(t, 12); return e += (t - a) / 12, a === 1 ? qe(e) ? 29 : 28 : 31 - a % 7 % 2; }$e = Array.prototype.indexOf ? Array.prototype.indexOf : function (e) { let t; for (t = 0; t < this.length; ++t) if (this[t] === e) return t; return -1; }, oe('M', ['MM', 2], 'Mo', (function () { return this.month() + 1; })), oe('MMM', 0, 0, (function (e) { return this.localeData().monthsShort(this, e); })), oe('MMMM', 0, 0, (function (e) { return this.localeData().months(this, e); })), K('month', 'M'), ee('month', 8), He('M', pe), He('MM', pe, me), He('MMM', ((e, t) => t.monthsShortRegex(e))), He('MMMM', ((e, t) => t.monthsRegex(e))), Fe(['M', 'MM'], ((e, t) => { t[ze] = w(e) - 1; })), Fe(['MMM', 'MMMM'], ((e, t, a, n) => { const r = a._locale.monthsParse(e, n, a._strict); r != null ? t[ze] = r : p(a).invalidMonth = e; })); const it = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/; const st = 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'); function ot(e, t) { return e ? s(this._months) ? this._months[e.month()] : this._months[(this._months.isFormat || it).test(t) ? 'format' : 'standalone'][e.month()] : s(this._months) ? this._months : this._months.standalone; } const dt = 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'); function lt(e, t) { return e ? s(this._monthsShort) ? this._monthsShort[e.month()] : this._monthsShort[it.test(t) ? 'format' : 'standalone'][e.month()] : s(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone; } function ut(e, t, a) { let n; let r; let i; const s = e.toLocaleLowerCase(); if (!this._monthsParse) for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], n = 0; n < 12; ++n)i = f([2e3, n]), this._shortMonthsParse[n] = this.monthsShort(i, '').toLocaleLowerCase(), this._longMonthsParse[n] = this.months(i, '').toLocaleLowerCase(); return a ? t === 'MMM' ? (r = $e.call(this._shortMonthsParse, s), r !== -1 ? r : null) : (r = $e.call(this._longMonthsParse, s), r !== -1 ? r : null) : t === 'MMM' ? (r = $e.call(this._shortMonthsParse, s), r !== -1 ? r : (r = $e.call(this._longMonthsParse, s), r !== -1 ? r : null)) : (r = $e.call(this._longMonthsParse, s), r !== -1 ? r : (r = $e.call(this._shortMonthsParse, s), r !== -1 ? r : null)); } function _t(e, t, a) { let n; let r; let i; if (this._monthsParseExact) return ut.call(this, e, t, a); for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), n = 0; n < 12; n++) { if (r = f([2e3, n]), a && !this._longMonthsParse[n] && (this._longMonthsParse[n] = new RegExp(`^${this.months(r, '').replace('.', '')}$`, 'i'), this._shortMonthsParse[n] = new RegExp(`^${this.monthsShort(r, '').replace('.', '')}$`, 'i')), a || this._monthsParse[n] || (i = `^${this.months(r, '')}|^${this.monthsShort(r, '')}`, this._monthsParse[n] = new RegExp(i.replace('.', ''), 'i')), a && t === 'MMMM' && this._longMonthsParse[n].test(e)) return n; if (a && t === 'MMM' && this._shortMonthsParse[n].test(e)) return n; if (!a && this._monthsParse[n].test(e)) return n; } } function ct(e, t) { let a; if (!e.isValid()) return e; if (typeof t === 'string') if (/^\d+$/.test(t))t = w(t); else if (t = e.localeData().monthsParse(t), !u(t)) return e; return a = Math.min(e.date(), rt(e.year(), t)), e._d[`set${e._isUTC ? 'UTC' : ''}Month`](t, a), e; } function mt(e) { return e != null ? (ct(this, e), r.updateOffset(this, !0), this) : Xe(this, 'Month'); } function ht() { return rt(this.year(), this.month()); } const ft = xe; function Mt(e) { return this._monthsParseExact ? (m(this, '_monthsRegex') || yt.call(this), e ? this._monthsShortStrictRegex : this._monthsShortRegex) : (m(this, '_monthsShortRegex') || (this._monthsShortRegex = ft), this._monthsShortStrictRegex && e ? this._monthsShortStrictRegex : this._monthsShortRegex); } const pt = xe; function gt(e) { return this._monthsParseExact ? (m(this, '_monthsRegex') || yt.call(this), e ? this._monthsStrictRegex : this._monthsRegex) : (m(this, '_monthsRegex') || (this._monthsRegex = pt), this._monthsStrictRegex && e ? this._monthsStrictRegex : this._monthsRegex); } function yt() { function e(e, t) { return t.length - e.length; } let t; let a; const n = []; const r = []; const i = []; for (t = 0; t < 12; t++)a = f([2e3, t]), n.push(this.monthsShort(a, '')), r.push(this.months(a, '')), i.push(this.months(a, '')), i.push(this.monthsShort(a, '')); for (n.sort(e), r.sort(e), i.sort(e), t = 0; t < 12; t++)n[t] = Oe(n[t]), r[t] = Oe(r[t]); for (t = 0; t < 24; t++)i[t] = Oe(i[t]); this._monthsRegex = new RegExp(`^(${i.join('|')})`, 'i'), this._monthsShortRegex = this._monthsRegex, this._monthsStrictRegex = new RegExp(`^(${r.join('|')})`, 'i'), this._monthsShortStrictRegex = new RegExp(`^(${n.join('|')})`, 'i'); } function Lt(e, t, a, n, r, i, s) { let o; return e < 100 && e >= 0 ? (o = new Date(e + 400, t, a, n, r, i, s), isFinite(o.getFullYear()) && o.setFullYear(e)) : o = new Date(e, t, a, n, r, i, s), o; } function vt(e) { let t; if (e < 100 && e >= 0) { const a = Array.prototype.slice.call(arguments); a[0] = e + 400, t = new Date(Date.UTC.apply(null, a)), isFinite(t.getUTCFullYear()) && t.setUTCFullYear(e); } else t = new Date(Date.UTC.apply(null, arguments)); return t; } function Yt(e, t, a) { const n = 7 + t - a; const r = (7 + vt(e, 0, n).getUTCDay() - t) % 7; return -r + n - 1; } function bt(e, t, a, n, r) { let i; let s; const o = (7 + a - n) % 7; const d = Yt(e, n, r); const l = 1 + 7 * (t - 1) + o + d; return l <= 0 ? (i = e - 1, s = Ge(i) + l) : l > Ge(e) ? (i = e + 1, s = l - Ge(e)) : (i = e, s = l), { year: i, dayOfYear: s }; } function kt(e, t, a) { let n; let r; const i = Yt(e.year(), t, a); const s = Math.floor((e.dayOfYear() - i - 1) / 7) + 1; return s < 1 ? (r = e.year() - 1, n = s + Dt(r, t, a)) : s > Dt(e.year(), t, a) ? (n = s - Dt(e.year(), t, a), r = e.year() + 1) : (r = e.year(), n = s), { week: n, year: r }; } function Dt(e, t, a) { const n = Yt(e, t, a); const r = Yt(e + 1, t, a); return (Ge(e) - n + r) / 7; } function wt(e) { return kt(e, this._week.dow, this._week.doy).week; }oe('w', ['ww', 2], 'wo', 'week'), oe('W', ['WW', 2], 'Wo', 'isoWeek'), K('week', 'w'), K('isoWeek', 'W'), ee('week', 5), ee('isoWeek', 5), He('w', pe), He('ww', pe, me), He('W', pe), He('WW', pe, me), We(['w', 'ww', 'W', 'WW'], ((e, t, a, n) => { t[n.substr(0, 1)] = w(e); })); const Tt = { dow: 0, doy: 6 }; function xt() { return this._week.dow; } function St() { return this._week.doy; } function Ht(e) { const t = this.localeData().week(this); return e == null ? t : this.add(7 * (e - t), 'd'); } function jt(e) { const t = kt(this, 1, 4).week; return e == null ? t : this.add(7 * (e - t), 'd'); } function Pt(e, t) { return typeof e !== 'string' ? e : isNaN(e) ? (e = t.weekdaysParse(e), typeof e === 'number' ? e : null) : parseInt(e, 10); } function Ot(e, t) { return typeof e === 'string' ? t.weekdaysParse(e) % 7 || 7 : isNaN(e) ? null : e; } function At(e, t) { return e.slice(t, 7).concat(e.slice(0, t)); }oe('d', 0, 'do', 'day'), oe('dd', 0, 0, (function (e) { return this.localeData().weekdaysMin(this, e); })), oe('ddd', 0, 0, (function (e) { return this.localeData().weekdaysShort(this, e); })), oe('dddd', 0, 0, (function (e) { return this.localeData().weekdays(this, e); })), oe('e', 0, 0, 'weekday'), oe('E', 0, 0, 'isoWeekday'), K('day', 'd'), K('weekday', 'e'), K('isoWeekday', 'E'), ee('day', 11), ee('weekday', 11), ee('isoWeekday', 11), He('d', pe), He('e', pe), He('E', pe), He('dd', ((e, t) => t.weekdaysMinRegex(e))), He('ddd', ((e, t) => t.weekdaysShortRegex(e))), He('dddd', ((e, t) => t.weekdaysRegex(e))), We(['dd', 'ddd', 'dddd'], ((e, t, a, n) => { const r = a._locale.weekdaysParse(e, n, a._strict); r != null ? t.d = r : p(a).invalidWeekday = e; })), We(['d', 'e', 'E'], ((e, t, a, n) => { t[n] = w(e); })); const Ft = 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'); function Wt(e, t) { const a = s(this._weekdays) ? this._weekdays : this._weekdays[e && !0 !== e && this._weekdays.isFormat.test(t) ? 'format' : 'standalone']; return !0 === e ? At(a, this._week.dow) : e ? a[e.day()] : a; } const Ct = 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'); function Et(e) { return !0 === e ? At(this._weekdaysShort, this._week.dow) : e ? this._weekdaysShort[e.day()] : this._weekdaysShort; } const zt = 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'); function It(e) { return !0 === e ? At(this._weekdaysMin, this._week.dow) : e ? this._weekdaysMin[e.day()] : this._weekdaysMin; } function Rt(e, t, a) { let n; let r; let i; const s = e.toLocaleLowerCase(); if (!this._weekdaysParse) for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], n = 0; n < 7; ++n)i = f([2e3, 1]).day(n), this._minWeekdaysParse[n] = this.weekdaysMin(i, '').toLocaleLowerCase(), this._shortWeekdaysParse[n] = this.weekdaysShort(i, '').toLocaleLowerCase(), this._weekdaysParse[n] = this.weekdays(i, '').toLocaleLowerCase(); return a ? t === 'dddd' ? (r = $e.call(this._weekdaysParse, s), r !== -1 ? r : null) : t === 'ddd' ? (r = $e.call(this._shortWeekdaysParse, s), r !== -1 ? r : null) : (r = $e.call(this._minWeekdaysParse, s), r !== -1 ? r : null) : t === 'dddd' ? (r = $e.call(this._weekdaysParse, s), r !== -1 ? r : (r = $e.call(this._shortWeekdaysParse, s), r !== -1 ? r : (r = $e.call(this._minWeekdaysParse, s), r !== -1 ? r : null))) : t === 'ddd' ? (r = $e.call(this._shortWeekdaysParse, s), r !== -1 ? r : (r = $e.call(this._weekdaysParse, s), r !== -1 ? r : (r = $e.call(this._minWeekdaysParse, s), r !== -1 ? r : null))) : (r = $e.call(this._minWeekdaysParse, s), r !== -1 ? r : (r = $e.call(this._weekdaysParse, s), r !== -1 ? r : (r = $e.call(this._shortWeekdaysParse, s), r !== -1 ? r : null))); } function Nt(e, t, a) { let n; let r; let i; if (this._weekdaysParseExact) return Rt.call(this, e, t, a); for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), n = 0; n < 7; n++) { if (r = f([2e3, 1]).day(n), a && !this._fullWeekdaysParse[n] && (this._fullWeekdaysParse[n] = new RegExp(`^${this.weekdays(r, '').replace('.', '\\.?')}$`, 'i'), this._shortWeekdaysParse[n] = new RegExp(`^${this.weekdaysShort(r, '').replace('.', '\\.?')}$`, 'i'), this._minWeekdaysParse[n] = new RegExp(`^${this.weekdaysMin(r, '').replace('.', '\\.?')}$`, 'i')), this._weekdaysParse[n] || (i = `^${this.weekdays(r, '')}|^${this.weekdaysShort(r, '')}|^${this.weekdaysMin(r, '')}`, this._weekdaysParse[n] = new RegExp(i.replace('.', ''), 'i')), a && t === 'dddd' && this._fullWeekdaysParse[n].test(e)) return n; if (a && t === 'ddd' && this._shortWeekdaysParse[n].test(e)) return n; if (a && t === 'dd' && this._minWeekdaysParse[n].test(e)) return n; if (!a && this._weekdaysParse[n].test(e)) return n; } } function Vt(e) { if (!this.isValid()) return e != null ? this : NaN; const t = this._isUTC ? this._d.getUTCDay() : this._d.getDay(); return e != null ? (e = Pt(e, this.localeData()), this.add(e - t, 'd')) : t; } function Bt(e) { if (!this.isValid()) return e != null ? this : NaN; const t = (this.day() + 7 - this.localeData()._week.dow) % 7; return e == null ? t : this.add(e - t, 'd'); } function Jt(e) { if (!this.isValid()) return e != null ? this : NaN; if (e != null) { const t = Ot(e, this.localeData()); return this.day(this.day() % 7 ? t : t - 7); } return this.day() || 7; } const Ut = xe; function Gt(e) { return this._weekdaysParseExact ? (m(this, '_weekdaysRegex') || Qt.call(this), e ? this._weekdaysStrictRegex : this._weekdaysRegex) : (m(this, '_weekdaysRegex') || (this._weekdaysRegex = Ut), this._weekdaysStrictRegex && e ? this._weekdaysStrictRegex : this._weekdaysRegex); } const qt = xe; function $t(e) { return this._weekdaysParseExact ? (m(this, '_weekdaysRegex') || Qt.call(this), e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (m(this, '_weekdaysShortRegex') || (this._weekdaysShortRegex = qt), this._weekdaysShortStrictRegex && e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex); } const Kt = xe; function Zt(e) { return this._weekdaysParseExact ? (m(this, '_weekdaysRegex') || Qt.call(this), e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (m(this, '_weekdaysMinRegex') || (this._weekdaysMinRegex = Kt), this._weekdaysMinStrictRegex && e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex); } function Qt() { function e(e, t) { return t.length - e.length; } let t; let a; let n; let r; let i; const s = []; const o = []; const d = []; const l = []; for (t = 0; t < 7; t++)a = f([2e3, 1]).day(t), n = this.weekdaysMin(a, ''), r = this.weekdaysShort(a, ''), i = this.weekdays(a, ''), s.push(n), o.push(r), d.push(i), l.push(n), l.push(r), l.push(i); for (s.sort(e), o.sort(e), d.sort(e), l.sort(e), t = 0; t < 7; t++)o[t] = Oe(o[t]), d[t] = Oe(d[t]), l[t] = Oe(l[t]); this._weekdaysRegex = new RegExp(`^(${l.join('|')})`, 'i'), this._weekdaysShortRegex = this._weekdaysRegex, this._weekdaysMinRegex = this._weekdaysRegex, this._weekdaysStrictRegex = new RegExp(`^(${d.join('|')})`, 'i'), this._weekdaysShortStrictRegex = new RegExp(`^(${o.join('|')})`, 'i'), this._weekdaysMinStrictRegex = new RegExp(`^(${s.join('|')})`, 'i'); } function Xt() { return this.hours() % 12 || 12; } function ea() { return this.hours() || 24; } function ta(e, t) { oe(e, 0, 0, (function () { return this.localeData().meridiem(this.hours(), this.minutes(), t); })); } function aa(e, t) { return t._meridiemParse; } function na(e) { return (`${e}`).toLowerCase().charAt(0) === 'p'; }oe('H', ['HH', 2], 0, 'hour'), oe('h', ['hh', 2], 0, Xt), oe('k', ['kk', 2], 0, ea), oe('hmm', 0, 0, (function () { return `${Xt.apply(this)}${ae(this.minutes(), 2)}`; })), oe('hmmss', 0, 0, (function () { return `${Xt.apply(this)}${ae(this.minutes(), 2)}${ae(this.seconds(), 2)}`; })), oe('Hmm', 0, 0, (function () { return `${this.hours()}${ae(this.minutes(), 2)}`; })), oe('Hmmss', 0, 0, (function () { return `${this.hours()}${ae(this.minutes(), 2)}${ae(this.seconds(), 2)}`; })), ta('a', !0), ta('A', !1), K('hour', 'h'), ee('hour', 13), He('a', aa), He('A', aa), He('H', pe), He('h', pe), He('k', pe), He('HH', pe, me), He('hh', pe, me), He('kk', pe, me), He('hmm', ge), He('hmmss', ye), He('Hmm', ge), He('Hmmss', ye), Fe(['H', 'HH'], Re), Fe(['k', 'kk'], ((e, t, a) => { const n = w(e); t[Re] = n === 24 ? 0 : n; })), Fe(['a', 'A'], ((e, t, a) => { a._isPm = a._locale.isPM(e), a._meridiem = e; })), Fe(['h', 'hh'], ((e, t, a) => { t[Re] = w(e), p(a).bigHour = !0; })), Fe('hmm', ((e, t, a) => { const n = e.length - 2; t[Re] = w(e.substr(0, n)), t[Ne] = w(e.substr(n)), p(a).bigHour = !0; })), Fe('hmmss', ((e, t, a) => { const n = e.length - 4; const r = e.length - 2; t[Re] = w(e.substr(0, n)), t[Ne] = w(e.substr(n, 2)), t[Ve] = w(e.substr(r)), p(a).bigHour = !0; })), Fe('Hmm', ((e, t, a) => { const n = e.length - 2; t[Re] = w(e.substr(0, n)), t[Ne] = w(e.substr(n)); })), Fe('Hmmss', ((e, t, a) => { const n = e.length - 4; const r = e.length - 2; t[Re] = w(e.substr(0, n)), t[Ne] = w(e.substr(n, 2)), t[Ve] = w(e.substr(r)); })); const ra = /[ap]\.?m?\.?/i; function ia(e, t, a) { return e > 11 ? a ? 'pm' : 'PM' : a ? 'am' : 'AM'; } let sa; const oa = Qe('Hours', !0); const da = {
          calendar: C, longDateFormat: z, invalidDate: R, ordinal: V, dayOfMonthOrdinalParse: B, relativeTime: U, months: st, monthsShort: dt, week: Tt, weekdays: Ft, weekdaysMin: zt, weekdaysShort: Ct, meridiemParse: ra,
        }; const la = {}; const ua = {}; function _a(e) { return e ? e.toLowerCase().replace('_', '-') : e; } function ca(e) { let t; let a; let n; let r; let i = 0; while (i < e.length) { r = _a(e[i]).split('-'), t = r.length, a = _a(e[i + 1]), a = a ? a.split('-') : null; while (t > 0) { if (n = ma(r.slice(0, t).join('-')), n) return n; if (a && a.length >= t && T(r, a, !0) >= t - 1) break; t--; }i++; } return sa; } function ma(t) { let n = null; if (!la[t] && typeof e !== 'undefined' && e && e.exports) try { n = sa._abbr; a('4678')(`./${t}`), ha(n); } catch (r) {} return la[t]; } function ha(e, t) { let a; return e && (a = l(t) ? pa(e) : fa(e, t), a ? sa = a : typeof console !== 'undefined' && console.warn && console.warn(`Locale ${e} not found. Did you forget to load it?`)), sa._abbr; } function fa(e, t) { if (t !== null) { let a; let n = da; if (t.abbr = e, la[e] != null)P('defineLocaleOverride', 'use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info.'), n = la[e]._config; else if (t.parentLocale != null) if (la[t.parentLocale] != null)n = la[t.parentLocale]._config; else { if (a = ma(t.parentLocale), a == null) return ua[t.parentLocale] || (ua[t.parentLocale] = []), ua[t.parentLocale].push({ name: e, config: t }), null; n = a._config; } return la[e] = new W(F(n, t)), ua[e] && ua[e].forEach(((e) => { fa(e.name, e.config); })), ha(e), la[e]; } return delete la[e], null; } function Ma(e, t) { if (t != null) { let a; let n; let r = da; n = ma(e), n != null && (r = n._config), t = F(r, t), a = new W(t), a.parentLocale = la[e], la[e] = a, ha(e); } else la[e] != null && (la[e].parentLocale != null ? la[e] = la[e].parentLocale : la[e] != null && delete la[e]); return la[e]; } function pa(e) { let t; if (e && e._locale && e._locale._abbr && (e = e._locale._abbr), !e) return sa; if (!s(e)) { if (t = ma(e), t) return t; e = [e]; } return ca(e); } function ga() { return H(la); } function ya(e) { let t; const a = e._a; return a && p(e).overflow === -2 && (t = a[ze] < 0 || a[ze] > 11 ? ze : a[Ie] < 1 || a[Ie] > rt(a[Ee], a[ze]) ? Ie : a[Re] < 0 || a[Re] > 24 || a[Re] === 24 && (a[Ne] !== 0 || a[Ve] !== 0 || a[Be] !== 0) ? Re : a[Ne] < 0 || a[Ne] > 59 ? Ne : a[Ve] < 0 || a[Ve] > 59 ? Ve : a[Be] < 0 || a[Be] > 999 ? Be : -1, p(e)._overflowDayOfYear && (t < Ee || t > Ie) && (t = Ie), p(e)._overflowWeeks && t === -1 && (t = Je), p(e)._overflowWeekday && t === -1 && (t = Ue), p(e).overflow = t), e; } function La(e, t, a) { return e != null ? e : t != null ? t : a; } function va(e) { const t = new Date(r.now()); return e._useUTC ? [t.getUTCFullYear(), t.getUTCMonth(), t.getUTCDate()] : [t.getFullYear(), t.getMonth(), t.getDate()]; } function Ya(e) { let t; let a; let n; let r; let i; const s = []; if (!e._d) { for (n = va(e), e._w && e._a[Ie] == null && e._a[ze] == null && ba(e), e._dayOfYear != null && (i = La(e._a[Ee], n[Ee]), (e._dayOfYear > Ge(i) || e._dayOfYear === 0) && (p(e)._overflowDayOfYear = !0), a = vt(i, 0, e._dayOfYear), e._a[ze] = a.getUTCMonth(), e._a[Ie] = a.getUTCDate()), t = 0; t < 3 && e._a[t] == null; ++t)e._a[t] = s[t] = n[t]; for (;t < 7; t++)e._a[t] = s[t] = e._a[t] == null ? t === 2 ? 1 : 0 : e._a[t]; e._a[Re] === 24 && e._a[Ne] === 0 && e._a[Ve] === 0 && e._a[Be] === 0 && (e._nextDay = !0, e._a[Re] = 0), e._d = (e._useUTC ? vt : Lt).apply(null, s), r = e._useUTC ? e._d.getUTCDay() : e._d.getDay(), e._tzm != null && e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), e._nextDay && (e._a[Re] = 24), e._w && typeof e._w.d !== 'undefined' && e._w.d !== r && (p(e).weekdayMismatch = !0); } } function ba(e) { let t; let a; let n; let r; let i; let s; let o; let d; if (t = e._w, t.GG != null || t.W != null || t.E != null)i = 1, s = 4, a = La(t.GG, e._a[Ee], kt(qa(), 1, 4).year), n = La(t.W, 1), r = La(t.E, 1), (r < 1 || r > 7) && (d = !0); else { i = e._locale._week.dow, s = e._locale._week.doy; const l = kt(qa(), i, s); a = La(t.gg, e._a[Ee], l.year), n = La(t.w, l.week), t.d != null ? (r = t.d, (r < 0 || r > 6) && (d = !0)) : t.e != null ? (r = t.e + i, (t.e < 0 || t.e > 6) && (d = !0)) : r = i; }n < 1 || n > Dt(a, i, s) ? p(e)._overflowWeeks = !0 : d != null ? p(e)._overflowWeekday = !0 : (o = bt(a, n, r, i, s), e._a[Ee] = o.year, e._dayOfYear = o.dayOfYear); } const ka = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/; const Da = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/; const wa = /Z|[+-]\d\d(?::?\d\d)?/; const Ta = [['YYYYYY-MM-DD', /[+-]\d{6}-\d\d-\d\d/], ['YYYY-MM-DD', /\d{4}-\d\d-\d\d/], ['GGGG-[W]WW-E', /\d{4}-W\d\d-\d/], ['GGGG-[W]WW', /\d{4}-W\d\d/, !1], ['YYYY-DDD', /\d{4}-\d{3}/], ['YYYY-MM', /\d{4}-\d\d/, !1], ['YYYYYYMMDD', /[+-]\d{10}/], ['YYYYMMDD', /\d{8}/], ['GGGG[W]WWE', /\d{4}W\d{3}/], ['GGGG[W]WW', /\d{4}W\d{2}/, !1], ['YYYYDDD', /\d{7}/]]; const xa = [['HH:mm:ss.SSSS', /\d\d:\d\d:\d\d\.\d+/], ['HH:mm:ss,SSSS', /\d\d:\d\d:\d\d,\d+/], ['HH:mm:ss', /\d\d:\d\d:\d\d/], ['HH:mm', /\d\d:\d\d/], ['HHmmss.SSSS', /\d\d\d\d\d\d\.\d+/], ['HHmmss,SSSS', /\d\d\d\d\d\d,\d+/], ['HHmmss', /\d\d\d\d\d\d/], ['HHmm', /\d\d\d\d/], ['HH', /\d\d/]]; const Sa = /^\/?Date\((\-?\d+)/i; function Ha(e) { let t; let a; let n; let r; let i; let s; const o = e._i; const d = ka.exec(o) || Da.exec(o); if (d) { for (p(e).iso = !0, t = 0, a = Ta.length; t < a; t++) if (Ta[t][1].exec(d[1])) { r = Ta[t][0], n = !1 !== Ta[t][2]; break; } if (r == null) return void (e._isValid = !1); if (d[3]) { for (t = 0, a = xa.length; t < a; t++) if (xa[t][1].exec(d[3])) { i = (d[2] || ' ') + xa[t][0]; break; } if (i == null) return void (e._isValid = !1); } if (!n && i != null) return void (e._isValid = !1); if (d[4]) { if (!wa.exec(d[4])) return void (e._isValid = !1); s = 'Z'; }e._f = r + (i || '') + (s || ''), Ia(e); } else e._isValid = !1; } const ja = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/; function Pa(e, t, a, n, r, i) { const s = [Oa(e), dt.indexOf(t), parseInt(a, 10), parseInt(n, 10), parseInt(r, 10)]; return i && s.push(parseInt(i, 10)), s; } function Oa(e) { const t = parseInt(e, 10); return t <= 49 ? 2e3 + t : t <= 999 ? 1900 + t : t; } function Aa(e) { return e.replace(/\([^)]*\)|[\n\t]/g, ' ').replace(/(\s\s+)/g, ' ').replace(/^\s\s*/, '').replace(/\s\s*$/, ''); } function Fa(e, t, a) { if (e) { const n = Ct.indexOf(e); const r = new Date(t[0], t[1], t[2]).getDay(); if (n !== r) return p(a).weekdayMismatch = !0, a._isValid = !1, !1; } return !0; } const Wa = {
          UT: 0, GMT: 0, EDT: -240, EST: -300, CDT: -300, CST: -360, MDT: -360, MST: -420, PDT: -420, PST: -480,
        }; function Ca(e, t, a) { if (e) return Wa[e]; if (t) return 0; const n = parseInt(a, 10); const r = n % 100; const i = (n - r) / 100; return 60 * i + r; } function Ea(e) { const t = ja.exec(Aa(e._i)); if (t) { const a = Pa(t[4], t[3], t[2], t[5], t[6], t[7]); if (!Fa(t[1], a, e)) return; e._a = a, e._tzm = Ca(t[8], t[9], t[10]), e._d = vt.apply(null, e._a), e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), p(e).rfc2822 = !0; } else e._isValid = !1; } function za(e) { const t = Sa.exec(e._i); t === null ? (Ha(e), !1 === e._isValid && (delete e._isValid, Ea(e), !1 === e._isValid && (delete e._isValid, r.createFromInputFallback(e)))) : e._d = new Date(+t[1]); } function Ia(e) { if (e._f !== r.ISO_8601) if (e._f !== r.RFC_2822) { e._a = [], p(e).empty = !0; let t; let a; let n; let i; let s; let o = `${e._i}`; const d = o.length; let l = 0; for (n = _e(e._f, e._locale).match(ne) || [], t = 0; t < n.length; t++)i = n[t], a = (o.match(je(i, e)) || [])[0], a && (s = o.substr(0, o.indexOf(a)), s.length > 0 && p(e).unusedInput.push(s), o = o.slice(o.indexOf(a) + a.length), l += a.length), se[i] ? (a ? p(e).empty = !1 : p(e).unusedTokens.push(i), Ce(i, a, e)) : e._strict && !a && p(e).unusedTokens.push(i); p(e).charsLeftOver = d - l, o.length > 0 && p(e).unusedInput.push(o), e._a[Re] <= 12 && !0 === p(e).bigHour && e._a[Re] > 0 && (p(e).bigHour = void 0), p(e).parsedDateParts = e._a.slice(0), p(e).meridiem = e._meridiem, e._a[Re] = Ra(e._locale, e._a[Re], e._meridiem), Ya(e), ya(e); } else Ea(e); else Ha(e); } function Ra(e, t, a) { let n; return a == null ? t : e.meridiemHour != null ? e.meridiemHour(t, a) : e.isPM != null ? (n = e.isPM(a), n && t < 12 && (t += 12), n || t !== 12 || (t = 0), t) : t; } function Na(e) { let t; let a; let n; let r; let i; if (e._f.length === 0) return p(e).invalidFormat = !0, void (e._d = new Date(NaN)); for (r = 0; r < e._f.length; r++)i = 0, t = v({}, e), e._useUTC != null && (t._useUTC = e._useUTC), t._f = e._f[r], Ia(t), g(t) && (i += p(t).charsLeftOver, i += 10 * p(t).unusedTokens.length, p(t).score = i, (n == null || i < n) && (n = i, a = t)); h(e, a || t); } function Va(e) { if (!e._d) { const t = Q(e._i); e._a = c([t.year, t.month, t.day || t.date, t.hour, t.minute, t.second, t.millisecond], ((e) => e && parseInt(e, 10))), Ya(e); } } function Ba(e) { const t = new b(ya(Ja(e))); return t._nextDay && (t.add(1, 'd'), t._nextDay = void 0), t; } function Ja(e) { let t = e._i; const a = e._f; return e._locale = e._locale || pa(e._l), t === null || void 0 === a && t === '' ? y({ nullInput: !0 }) : (typeof t === 'string' && (e._i = t = e._locale.preparse(t)), k(t) ? new b(ya(t)) : (_(t) ? e._d = t : s(a) ? Na(e) : a ? Ia(e) : Ua(e), g(e) || (e._d = null), e)); } function Ua(e) { const t = e._i; l(t) ? e._d = new Date(r.now()) : _(t) ? e._d = new Date(t.valueOf()) : typeof t === 'string' ? za(e) : s(t) ? (e._a = c(t.slice(0), ((e) => parseInt(e, 10))), Ya(e)) : o(t) ? Va(e) : u(t) ? e._d = new Date(t) : r.createFromInputFallback(e); } function Ga(e, t, a, n, r) { const i = {}; return !0 !== a && !1 !== a || (n = a, a = void 0), (o(e) && d(e) || s(e) && e.length === 0) && (e = void 0), i._isAMomentObject = !0, i._useUTC = i._isUTC = r, i._l = a, i._i = e, i._f = t, i._strict = n, Ba(i); } function qa(e, t, a, n) { return Ga(e, t, a, n, !1); }r.createFromInputFallback = S('value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.', ((e) => { e._d = new Date(e._i + (e._useUTC ? ' UTC' : '')); })), r.ISO_8601 = function () {}, r.RFC_2822 = function () {}; const $a = S('moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/', (function () { const e = qa.apply(null, arguments); return this.isValid() && e.isValid() ? e < this ? this : e : y(); })); const Ka = S('moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/', (function () { const e = qa.apply(null, arguments); return this.isValid() && e.isValid() ? e > this ? this : e : y(); })); function Za(e, t) { let a; let n; if (t.length === 1 && s(t[0]) && (t = t[0]), !t.length) return qa(); for (a = t[0], n = 1; n < t.length; ++n)t[n].isValid() && !t[n][e](a) || (a = t[n]); return a; } function Qa() { const e = [].slice.call(arguments, 0); return Za('isBefore', e); } function Xa() { const e = [].slice.call(arguments, 0); return Za('isAfter', e); } const en = function () { return Date.now ? Date.now() : +new Date(); }; const tn = ['year', 'quarter', 'month', 'week', 'day', 'hour', 'minute', 'second', 'millisecond']; function an(e) { for (const t in e) if ($e.call(tn, t) === -1 || e[t] != null && isNaN(e[t])) return !1; for (let a = !1, n = 0; n < tn.length; ++n) if (e[tn[n]]) { if (a) return !1; parseFloat(e[tn[n]]) !== w(e[tn[n]]) && (a = !0); } return !0; } function nn() { return this._isValid; } function rn() { return Tn(NaN); } function sn(e) { const t = Q(e); const a = t.year || 0; const n = t.quarter || 0; const r = t.month || 0; const i = t.week || t.isoWeek || 0; const s = t.day || 0; const o = t.hour || 0; const d = t.minute || 0; const l = t.second || 0; const u = t.millisecond || 0; this._isValid = an(t), this._milliseconds = +u + 1e3 * l + 6e4 * d + 1e3 * o * 60 * 60, this._days = +s + 7 * i, this._months = +r + 3 * n + 12 * a, this._data = {}, this._locale = pa(), this._bubble(); } function on(e) { return e instanceof sn; } function dn(e) { return e < 0 ? -1 * Math.round(-1 * e) : Math.round(e); } function ln(e, t) { oe(e, 0, 0, (function () { let e = this.utcOffset(); let a = '+'; return e < 0 && (e = -e, a = '-'), a + ae(~~(e / 60), 2) + t + ae(~~e % 60, 2); })); }ln('Z', ':'), ln('ZZ', ''), He('Z', we), He('ZZ', we), Fe(['Z', 'ZZ'], ((e, t, a) => { a._useUTC = !0, a._tzm = _n(we, e); })); const un = /([\+\-]|\d\d)/gi; function _n(e, t) { const a = (t || '').match(e); if (a === null) return null; const n = a[a.length - 1] || []; const r = (`${n}`).match(un) || ['-', 0, 0]; const i = 60 * r[1] + w(r[2]); return i === 0 ? 0 : r[0] === '+' ? i : -i; } function cn(e, t) { let a; let n; return t._isUTC ? (a = t.clone(), n = (k(e) || _(e) ? e.valueOf() : qa(e).valueOf()) - a.valueOf(), a._d.setTime(a._d.valueOf() + n), r.updateOffset(a, !1), a) : qa(e).local(); } function mn(e) { return 15 * -Math.round(e._d.getTimezoneOffset() / 15); } function hn(e, t, a) { let n; const i = this._offset || 0; if (!this.isValid()) return e != null ? this : NaN; if (e != null) { if (typeof e === 'string') { if (e = _n(we, e), e === null) return this; } else Math.abs(e) < 16 && !a && (e *= 60); return !this._isUTC && t && (n = mn(this)), this._offset = e, this._isUTC = !0, n != null && this.add(n, 'm'), i !== e && (!t || this._changeInProgress ? Pn(this, Tn(e - i, 'm'), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, r.updateOffset(this, !0), this._changeInProgress = null)), this; } return this._isUTC ? i : mn(this); } function fn(e, t) { return e != null ? (typeof e !== 'string' && (e = -e), this.utcOffset(e, t), this) : -this.utcOffset(); } function Mn(e) { return this.utcOffset(0, e); } function pn(e) { return this._isUTC && (this.utcOffset(0, e), this._isUTC = !1, e && this.subtract(mn(this), 'm')), this; } function gn() { if (this._tzm != null) this.utcOffset(this._tzm, !1, !0); else if (typeof this._i === 'string') { const e = _n(De, this._i); e != null ? this.utcOffset(e) : this.utcOffset(0, !0); } return this; } function yn(e) { return !!this.isValid() && (e = e ? qa(e).utcOffset() : 0, (this.utcOffset() - e) % 60 === 0); } function Ln() { return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset(); } function vn() { if (!l(this._isDSTShifted)) return this._isDSTShifted; let e = {}; if (v(e, this), e = Ja(e), e._a) { const t = e._isUTC ? f(e._a) : qa(e._a); this._isDSTShifted = this.isValid() && T(e._a, t.toArray()) > 0; } else this._isDSTShifted = !1; return this._isDSTShifted; } function Yn() { return !!this.isValid() && !this._isUTC; } function bn() { return !!this.isValid() && this._isUTC; } function kn() { return !!this.isValid() && (this._isUTC && this._offset === 0); }r.updateOffset = function () {}; const Dn = /^(\-|\+)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/; const wn = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/; function Tn(e, t) {
          let a; let n; let r; let i = e; let s = null; return on(e) ? i = { ms: e._milliseconds, d: e._days, M: e._months } : u(e) ? (i = {}, t ? i[t] = e : i.milliseconds = e) : (s = Dn.exec(e)) ? (a = s[1] === '-' ? -1 : 1, i = {
            y: 0, d: w(s[Ie]) * a, h: w(s[Re]) * a, m: w(s[Ne]) * a, s: w(s[Ve]) * a, ms: w(dn(1e3 * s[Be])) * a,
          }) : (s = wn.exec(e)) ? (a = s[1] === '-' ? -1 : 1, i = {
            y: xn(s[2], a), M: xn(s[3], a), w: xn(s[4], a), d: xn(s[5], a), h: xn(s[6], a), m: xn(s[7], a), s: xn(s[8], a),
          }) : i == null ? i = {} : typeof i === 'object' && ('from' in i || 'to' in i) && (r = Hn(qa(i.from), qa(i.to)), i = {}, i.ms = r.milliseconds, i.M = r.months), n = new sn(i), on(e) && m(e, '_locale') && (n._locale = e._locale), n;
        } function xn(e, t) { const a = e && parseFloat(e.replace(',', '.')); return (isNaN(a) ? 0 : a) * t; } function Sn(e, t) { const a = {}; return a.months = t.month() - e.month() + 12 * (t.year() - e.year()), e.clone().add(a.months, 'M').isAfter(t) && --a.months, a.milliseconds = +t - +e.clone().add(a.months, 'M'), a; } function Hn(e, t) { let a; return e.isValid() && t.isValid() ? (t = cn(t, e), e.isBefore(t) ? a = Sn(e, t) : (a = Sn(t, e), a.milliseconds = -a.milliseconds, a.months = -a.months), a) : { milliseconds: 0, months: 0 }; } function jn(e, t) { return function (a, n) { let r; let i; return n === null || isNaN(+n) || (P(t, `moment().${t}(period, number) is deprecated. Please use moment().${t}(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info.`), i = a, a = n, n = i), a = typeof a === 'string' ? +a : a, r = Tn(a, n), Pn(this, r, e), this; }; } function Pn(e, t, a, n) { const i = t._milliseconds; const s = dn(t._days); const o = dn(t._months); e.isValid() && (n = n == null || n, o && ct(e, Xe(e, 'Month') + o * a), s && et(e, 'Date', Xe(e, 'Date') + s * a), i && e._d.setTime(e._d.valueOf() + i * a), n && r.updateOffset(e, s || o)); }Tn.fn = sn.prototype, Tn.invalid = rn; const On = jn(1, 'add'); const An = jn(-1, 'subtract'); function Fn(e, t) { const a = e.diff(t, 'days', !0); return a < -6 ? 'sameElse' : a < -1 ? 'lastWeek' : a < 0 ? 'lastDay' : a < 1 ? 'sameDay' : a < 2 ? 'nextDay' : a < 7 ? 'nextWeek' : 'sameElse'; } function Wn(e, t) { const a = e || qa(); const n = cn(a, this).startOf('day'); const i = r.calendarFormat(this, n) || 'sameElse'; const s = t && (O(t[i]) ? t[i].call(this, a) : t[i]); return this.format(s || this.localeData().calendar(i, this, qa(a))); } function Cn() { return new b(this); } function En(e, t) { const a = k(e) ? e : qa(e); return !(!this.isValid() || !a.isValid()) && (t = Z(t) || 'millisecond', t === 'millisecond' ? this.valueOf() > a.valueOf() : a.valueOf() < this.clone().startOf(t).valueOf()); } function zn(e, t) { const a = k(e) ? e : qa(e); return !(!this.isValid() || !a.isValid()) && (t = Z(t) || 'millisecond', t === 'millisecond' ? this.valueOf() < a.valueOf() : this.clone().endOf(t).valueOf() < a.valueOf()); } function In(e, t, a, n) { const r = k(e) ? e : qa(e); const i = k(t) ? t : qa(t); return !!(this.isValid() && r.isValid() && i.isValid()) && (n = n || '()', (n[0] === '(' ? this.isAfter(r, a) : !this.isBefore(r, a)) && (n[1] === ')' ? this.isBefore(i, a) : !this.isAfter(i, a))); } function Rn(e, t) { let a; const n = k(e) ? e : qa(e); return !(!this.isValid() || !n.isValid()) && (t = Z(t) || 'millisecond', t === 'millisecond' ? this.valueOf() === n.valueOf() : (a = n.valueOf(), this.clone().startOf(t).valueOf() <= a && a <= this.clone().endOf(t).valueOf())); } function Nn(e, t) { return this.isSame(e, t) || this.isAfter(e, t); } function Vn(e, t) { return this.isSame(e, t) || this.isBefore(e, t); } function Bn(e, t, a) { let n; let r; let i; if (!this.isValid()) return NaN; if (n = cn(e, this), !n.isValid()) return NaN; switch (r = 6e4 * (n.utcOffset() - this.utcOffset()), t = Z(t), t) { case 'year': i = Jn(this, n) / 12; break; case 'month': i = Jn(this, n); break; case 'quarter': i = Jn(this, n) / 3; break; case 'second': i = (this - n) / 1e3; break; case 'minute': i = (this - n) / 6e4; break; case 'hour': i = (this - n) / 36e5; break; case 'day': i = (this - n - r) / 864e5; break; case 'week': i = (this - n - r) / 6048e5; break; default: i = this - n; } return a ? i : D(i); } function Jn(e, t) { let a; let n; const r = 12 * (t.year() - e.year()) + (t.month() - e.month()); const i = e.clone().add(r, 'months'); return t - i < 0 ? (a = e.clone().add(r - 1, 'months'), n = (t - i) / (i - a)) : (a = e.clone().add(r + 1, 'months'), n = (t - i) / (a - i)), -(r + n) || 0; } function Un() { return this.clone().locale('en').format('ddd MMM DD YYYY HH:mm:ss [GMT]ZZ'); } function Gn(e) { if (!this.isValid()) return null; const t = !0 !== e; const a = t ? this.clone().utc() : this; return a.year() < 0 || a.year() > 9999 ? ue(a, t ? 'YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]' : 'YYYYYY-MM-DD[T]HH:mm:ss.SSSZ') : O(Date.prototype.toISOString) ? t ? this.toDate().toISOString() : new Date(this.valueOf() + 60 * this.utcOffset() * 1e3).toISOString().replace('Z', ue(a, 'Z')) : ue(a, t ? 'YYYY-MM-DD[T]HH:mm:ss.SSS[Z]' : 'YYYY-MM-DD[T]HH:mm:ss.SSSZ'); } function qn() { if (!this.isValid()) return `moment.invalid(/* ${this._i} */)`; let e = 'moment'; let t = ''; this.isLocal() || (e = this.utcOffset() === 0 ? 'moment.utc' : 'moment.parseZone', t = 'Z'); const a = `[${e}("]`; const n = this.year() >= 0 && this.year() <= 9999 ? 'YYYY' : 'YYYYYY'; const r = '-MM-DD[T]HH:mm:ss.SSS'; const i = `${t}[")]`; return this.format(a + n + r + i); } function $n(e) { e || (e = this.isUtc() ? r.defaultFormatUtc : r.defaultFormat); const t = ue(this, e); return this.localeData().postformat(t); } function Kn(e, t) { return this.isValid() && (k(e) && e.isValid() || qa(e).isValid()) ? Tn({ to: this, from: e }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate(); } function Zn(e) { return this.from(qa(), e); } function Qn(e, t) { return this.isValid() && (k(e) && e.isValid() || qa(e).isValid()) ? Tn({ from: this, to: e }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate(); } function Xn(e) { return this.to(qa(), e); } function er(e) { let t; return void 0 === e ? this._locale._abbr : (t = pa(e), t != null && (this._locale = t), this); }r.defaultFormat = 'YYYY-MM-DDTHH:mm:ssZ', r.defaultFormatUtc = 'YYYY-MM-DDTHH:mm:ss[Z]'; const tr = S('moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.', (function (e) { return void 0 === e ? this.localeData() : this.locale(e); })); function ar() { return this._locale; } const nr = 1e3; const rr = 60 * nr; const ir = 60 * rr; const sr = 3506328 * ir; function or(e, t) { return (e % t + t) % t; } function dr(e, t, a) { return e < 100 && e >= 0 ? new Date(e + 400, t, a) - sr : new Date(e, t, a).valueOf(); } function lr(e, t, a) { return e < 100 && e >= 0 ? Date.UTC(e + 400, t, a) - sr : Date.UTC(e, t, a); } function ur(e) { let t; if (e = Z(e), void 0 === e || e === 'millisecond' || !this.isValid()) return this; const a = this._isUTC ? lr : dr; switch (e) { case 'year': t = a(this.year(), 0, 1); break; case 'quarter': t = a(this.year(), this.month() - this.month() % 3, 1); break; case 'month': t = a(this.year(), this.month(), 1); break; case 'week': t = a(this.year(), this.month(), this.date() - this.weekday()); break; case 'isoWeek': t = a(this.year(), this.month(), this.date() - (this.isoWeekday() - 1)); break; case 'day': case 'date': t = a(this.year(), this.month(), this.date()); break; case 'hour': t = this._d.valueOf(), t -= or(t + (this._isUTC ? 0 : this.utcOffset() * rr), ir); break; case 'minute': t = this._d.valueOf(), t -= or(t, rr); break; case 'second': t = this._d.valueOf(), t -= or(t, nr); break; } return this._d.setTime(t), r.updateOffset(this, !0), this; } function _r(e) { let t; if (e = Z(e), void 0 === e || e === 'millisecond' || !this.isValid()) return this; const a = this._isUTC ? lr : dr; switch (e) { case 'year': t = a(this.year() + 1, 0, 1) - 1; break; case 'quarter': t = a(this.year(), this.month() - this.month() % 3 + 3, 1) - 1; break; case 'month': t = a(this.year(), this.month() + 1, 1) - 1; break; case 'week': t = a(this.year(), this.month(), this.date() - this.weekday() + 7) - 1; break; case 'isoWeek': t = a(this.year(), this.month(), this.date() - (this.isoWeekday() - 1) + 7) - 1; break; case 'day': case 'date': t = a(this.year(), this.month(), this.date() + 1) - 1; break; case 'hour': t = this._d.valueOf(), t += ir - or(t + (this._isUTC ? 0 : this.utcOffset() * rr), ir) - 1; break; case 'minute': t = this._d.valueOf(), t += rr - or(t, rr) - 1; break; case 'second': t = this._d.valueOf(), t += nr - or(t, nr) - 1; break; } return this._d.setTime(t), r.updateOffset(this, !0), this; } function cr() { return this._d.valueOf() - 6e4 * (this._offset || 0); } function mr() { return Math.floor(this.valueOf() / 1e3); } function hr() { return new Date(this.valueOf()); } function fr() { const e = this; return [e.year(), e.month(), e.date(), e.hour(), e.minute(), e.second(), e.millisecond()]; } function Mr() {
          const e = this; return {
            years: e.year(), months: e.month(), date: e.date(), hours: e.hours(), minutes: e.minutes(), seconds: e.seconds(), milliseconds: e.milliseconds(),
          };
        } function pr() { return this.isValid() ? this.toISOString() : null; } function gr() { return g(this); } function yr() { return h({}, p(this)); } function Lr() { return p(this).overflow; } function vr() {
          return {
            input: this._i, format: this._f, locale: this._locale, isUTC: this._isUTC, strict: this._strict,
          };
        } function Yr(e, t) { oe(0, [e, e.length], 0, t); } function br(e) { return Tr.call(this, e, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy); } function kr(e) { return Tr.call(this, e, this.isoWeek(), this.isoWeekday(), 1, 4); } function Dr() { return Dt(this.year(), 1, 4); } function wr() { const e = this.localeData()._week; return Dt(this.year(), e.dow, e.doy); } function Tr(e, t, a, n, r) { let i; return e == null ? kt(this, n, r).year : (i = Dt(e, n, r), t > i && (t = i), xr.call(this, e, t, a, n, r)); } function xr(e, t, a, n, r) { const i = bt(e, t, a, n, r); const s = vt(i.year, 0, i.dayOfYear); return this.year(s.getUTCFullYear()), this.month(s.getUTCMonth()), this.date(s.getUTCDate()), this; } function Sr(e) { return e == null ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (e - 1) + this.month() % 3); }oe(0, ['gg', 2], 0, (function () { return this.weekYear() % 100; })), oe(0, ['GG', 2], 0, (function () { return this.isoWeekYear() % 100; })), Yr('gggg', 'weekYear'), Yr('ggggg', 'weekYear'), Yr('GGGG', 'isoWeekYear'), Yr('GGGGG', 'isoWeekYear'), K('weekYear', 'gg'), K('isoWeekYear', 'GG'), ee('weekYear', 1), ee('isoWeekYear', 1), He('G', ke), He('g', ke), He('GG', pe, me), He('gg', pe, me), He('GGGG', ve, fe), He('gggg', ve, fe), He('GGGGG', Ye, Me), He('ggggg', Ye, Me), We(['gggg', 'ggggg', 'GGGG', 'GGGGG'], ((e, t, a, n) => { t[n.substr(0, 2)] = w(e); })), We(['gg', 'GG'], ((e, t, a, n) => { t[n] = r.parseTwoDigitYear(e); })), oe('Q', 0, 'Qo', 'quarter'), K('quarter', 'Q'), ee('quarter', 7), He('Q', ce), Fe('Q', ((e, t) => { t[ze] = 3 * (w(e) - 1); })), oe('D', ['DD', 2], 'Do', 'date'), K('date', 'D'), ee('date', 9), He('D', pe), He('DD', pe, me), He('Do', ((e, t) => (e ? t._dayOfMonthOrdinalParse || t._ordinalParse : t._dayOfMonthOrdinalParseLenient))), Fe(['D', 'DD'], Ie), Fe('Do', ((e, t) => { t[Ie] = w(e.match(pe)[0]); })); const Hr = Qe('Date', !0); function jr(e) { const t = Math.round((this.clone().startOf('day') - this.clone().startOf('year')) / 864e5) + 1; return e == null ? t : this.add(e - t, 'd'); }oe('DDD', ['DDDD', 3], 'DDDo', 'dayOfYear'), K('dayOfYear', 'DDD'), ee('dayOfYear', 4), He('DDD', Le), He('DDDD', he), Fe(['DDD', 'DDDD'], ((e, t, a) => { a._dayOfYear = w(e); })), oe('m', ['mm', 2], 0, 'minute'), K('minute', 'm'), ee('minute', 14), He('m', pe), He('mm', pe, me), Fe(['m', 'mm'], Ne); const Pr = Qe('Minutes', !1); oe('s', ['ss', 2], 0, 'second'), K('second', 's'), ee('second', 15), He('s', pe), He('ss', pe, me), Fe(['s', 'ss'], Ve); let Or; const Ar = Qe('Seconds', !1); for (oe('S', 0, 0, (function () { return ~~(this.millisecond() / 100); })), oe(0, ['SS', 2], 0, (function () { return ~~(this.millisecond() / 10); })), oe(0, ['SSS', 3], 0, 'millisecond'), oe(0, ['SSSS', 4], 0, (function () { return 10 * this.millisecond(); })), oe(0, ['SSSSS', 5], 0, (function () { return 100 * this.millisecond(); })), oe(0, ['SSSSSS', 6], 0, (function () { return 1e3 * this.millisecond(); })), oe(0, ['SSSSSSS', 7], 0, (function () { return 1e4 * this.millisecond(); })), oe(0, ['SSSSSSSS', 8], 0, (function () { return 1e5 * this.millisecond(); })), oe(0, ['SSSSSSSSS', 9], 0, (function () { return 1e6 * this.millisecond(); })), K('millisecond', 'ms'), ee('millisecond', 16), He('S', Le, ce), He('SS', Le, me), He('SSS', Le, he), Or = 'SSSS'; Or.length <= 9; Or += 'S')He(Or, be); function Fr(e, t) { t[Be] = w(1e3 * (`0.${e}`)); } for (Or = 'S'; Or.length <= 9; Or += 'S')Fe(Or, Fr); const Wr = Qe('Milliseconds', !1); function Cr() { return this._isUTC ? 'UTC' : ''; } function Er() { return this._isUTC ? 'Coordinated Universal Time' : ''; }oe('z', 0, 0, 'zoneAbbr'), oe('zz', 0, 0, 'zoneName'); const zr = b.prototype; function Ir(e) { return qa(1e3 * e); } function Rr() { return qa.apply(null, arguments).parseZone(); } function Nr(e) { return e; }zr.add = On, zr.calendar = Wn, zr.clone = Cn, zr.diff = Bn, zr.endOf = _r, zr.format = $n, zr.from = Kn, zr.fromNow = Zn, zr.to = Qn, zr.toNow = Xn, zr.get = tt, zr.invalidAt = Lr, zr.isAfter = En, zr.isBefore = zn, zr.isBetween = In, zr.isSame = Rn, zr.isSameOrAfter = Nn, zr.isSameOrBefore = Vn, zr.isValid = gr, zr.lang = tr, zr.locale = er, zr.localeData = ar, zr.max = Ka, zr.min = $a, zr.parsingFlags = yr, zr.set = at, zr.startOf = ur, zr.subtract = An, zr.toArray = fr, zr.toObject = Mr, zr.toDate = hr, zr.toISOString = Gn, zr.inspect = qn, zr.toJSON = pr, zr.toString = Un, zr.unix = mr, zr.valueOf = cr, zr.creationData = vr, zr.year = Ke, zr.isLeapYear = Ze, zr.weekYear = br, zr.isoWeekYear = kr, zr.quarter = zr.quarters = Sr, zr.month = mt, zr.daysInMonth = ht, zr.week = zr.weeks = Ht, zr.isoWeek = zr.isoWeeks = jt, zr.weeksInYear = wr, zr.isoWeeksInYear = Dr, zr.date = Hr, zr.day = zr.days = Vt, zr.weekday = Bt, zr.isoWeekday = Jt, zr.dayOfYear = jr, zr.hour = zr.hours = oa, zr.minute = zr.minutes = Pr, zr.second = zr.seconds = Ar, zr.millisecond = zr.milliseconds = Wr, zr.utcOffset = hn, zr.utc = Mn, zr.local = pn, zr.parseZone = gn, zr.hasAlignedHourOffset = yn, zr.isDST = Ln, zr.isLocal = Yn, zr.isUtcOffset = bn, zr.isUtc = kn, zr.isUTC = kn, zr.zoneAbbr = Cr, zr.zoneName = Er, zr.dates = S('dates accessor is deprecated. Use date instead.', Hr), zr.months = S('months accessor is deprecated. Use month instead', mt), zr.years = S('years accessor is deprecated. Use year instead', Ke), zr.zone = S('moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/', fn), zr.isDSTShifted = S('isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information', vn); const Vr = W.prototype; function Br(e, t, a, n) { const r = pa(); const i = f().set(n, t); return r[a](i, e); } function Jr(e, t, a) { if (u(e) && (t = e, e = void 0), e = e || '', t != null) return Br(e, t, a, 'month'); let n; const r = []; for (n = 0; n < 12; n++)r[n] = Br(e, n, a, 'month'); return r; } function Ur(e, t, a, n) { typeof e === 'boolean' ? (u(t) && (a = t, t = void 0), t = t || '') : (t = e, a = t, e = !1, u(t) && (a = t, t = void 0), t = t || ''); let r; const i = pa(); const s = e ? i._week.dow : 0; if (a != null) return Br(t, (a + s) % 7, n, 'day'); const o = []; for (r = 0; r < 7; r++)o[r] = Br(t, (r + s) % 7, n, 'day'); return o; } function Gr(e, t) { return Jr(e, t, 'months'); } function qr(e, t) { return Jr(e, t, 'monthsShort'); } function $r(e, t, a) { return Ur(e, t, a, 'weekdays'); } function Kr(e, t, a) { return Ur(e, t, a, 'weekdaysShort'); } function Zr(e, t, a) { return Ur(e, t, a, 'weekdaysMin'); }Vr.calendar = E, Vr.longDateFormat = I, Vr.invalidDate = N, Vr.ordinal = J, Vr.preparse = Nr, Vr.postformat = Nr, Vr.relativeTime = G, Vr.pastFuture = q, Vr.set = A, Vr.months = ot, Vr.monthsShort = lt, Vr.monthsParse = _t, Vr.monthsRegex = gt, Vr.monthsShortRegex = Mt, Vr.week = wt, Vr.firstDayOfYear = St, Vr.firstDayOfWeek = xt, Vr.weekdays = Wt, Vr.weekdaysMin = It, Vr.weekdaysShort = Et, Vr.weekdaysParse = Nt, Vr.weekdaysRegex = Gt, Vr.weekdaysShortRegex = $t, Vr.weekdaysMinRegex = Zt, Vr.isPM = na, Vr.meridiem = ia, ha('en', { dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/, ordinal(e) { const t = e % 10; const a = w(e % 100 / 10) === 1 ? 'th' : t === 1 ? 'st' : t === 2 ? 'nd' : t === 3 ? 'rd' : 'th'; return e + a; } }), r.lang = S('moment.lang is deprecated. Use moment.locale instead.', ha), r.langData = S('moment.langData is deprecated. Use moment.localeData instead.', pa); const Qr = Math.abs; function Xr() { const e = this._data; return this._milliseconds = Qr(this._milliseconds), this._days = Qr(this._days), this._months = Qr(this._months), e.milliseconds = Qr(e.milliseconds), e.seconds = Qr(e.seconds), e.minutes = Qr(e.minutes), e.hours = Qr(e.hours), e.months = Qr(e.months), e.years = Qr(e.years), this; } function ei(e, t, a, n) { const r = Tn(t, a); return e._milliseconds += n * r._milliseconds, e._days += n * r._days, e._months += n * r._months, e._bubble(); } function ti(e, t) { return ei(this, e, t, 1); } function ai(e, t) { return ei(this, e, t, -1); } function ni(e) { return e < 0 ? Math.floor(e) : Math.ceil(e); } function ri() { let e; let t; let a; let n; let r; let i = this._milliseconds; let s = this._days; let o = this._months; const d = this._data; return i >= 0 && s >= 0 && o >= 0 || i <= 0 && s <= 0 && o <= 0 || (i += 864e5 * ni(si(o) + s), s = 0, o = 0), d.milliseconds = i % 1e3, e = D(i / 1e3), d.seconds = e % 60, t = D(e / 60), d.minutes = t % 60, a = D(t / 60), d.hours = a % 24, s += D(a / 24), r = D(ii(s)), o += r, s -= ni(si(r)), n = D(o / 12), o %= 12, d.days = s, d.months = o, d.years = n, this; } function ii(e) { return 4800 * e / 146097; } function si(e) { return 146097 * e / 4800; } function oi(e) { if (!this.isValid()) return NaN; let t; let a; const n = this._milliseconds; if (e = Z(e), e === 'month' || e === 'quarter' || e === 'year') switch (t = this._days + n / 864e5, a = this._months + ii(t), e) { case 'month': return a; case 'quarter': return a / 3; case 'year': return a / 12; } else switch (t = this._days + Math.round(si(this._months)), e) { case 'week': return t / 7 + n / 6048e5; case 'day': return t + n / 864e5; case 'hour': return 24 * t + n / 36e5; case 'minute': return 1440 * t + n / 6e4; case 'second': return 86400 * t + n / 1e3; case 'millisecond': return Math.floor(864e5 * t) + n; default: throw new Error(`Unknown unit ${e}`); } } function di() { return this.isValid() ? this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * w(this._months / 12) : NaN; } function li(e) { return function () { return this.as(e); }; } const ui = li('ms'); const _i = li('s'); const ci = li('m'); const mi = li('h'); const hi = li('d'); const fi = li('w'); const Mi = li('M'); const pi = li('Q'); const gi = li('y'); function yi() { return Tn(this); } function Li(e) { return e = Z(e), this.isValid() ? this[`${e}s`]() : NaN; } function vi(e) { return function () { return this.isValid() ? this._data[e] : NaN; }; } const Yi = vi('milliseconds'); const bi = vi('seconds'); const ki = vi('minutes'); const Di = vi('hours'); const wi = vi('days'); const Ti = vi('months'); const xi = vi('years'); function Si() { return D(this.days() / 7); } let Hi = Math.round; const ji = {
          ss: 44, s: 45, m: 45, h: 22, d: 26, M: 11,
        }; function Pi(e, t, a, n, r) { return r.relativeTime(t || 1, !!a, e, n); } function Oi(e, t, a) { const n = Tn(e).abs(); const r = Hi(n.as('s')); const i = Hi(n.as('m')); const s = Hi(n.as('h')); const o = Hi(n.as('d')); const d = Hi(n.as('M')); const l = Hi(n.as('y')); const u = r <= ji.ss && ['s', r] || r < ji.s && ['ss', r] || i <= 1 && ['m'] || i < ji.m && ['mm', i] || s <= 1 && ['h'] || s < ji.h && ['hh', s] || o <= 1 && ['d'] || o < ji.d && ['dd', o] || d <= 1 && ['M'] || d < ji.M && ['MM', d] || l <= 1 && ['y'] || ['yy', l]; return u[2] = t, u[3] = +e > 0, u[4] = a, Pi.apply(null, u); } function Ai(e) { return void 0 === e ? Hi : typeof e === 'function' && (Hi = e, !0); } function Fi(e, t) { return void 0 !== ji[e] && (void 0 === t ? ji[e] : (ji[e] = t, e === 's' && (ji.ss = t - 1), !0)); } function Wi(e) { if (!this.isValid()) return this.localeData().invalidDate(); const t = this.localeData(); let a = Oi(this, !e, t); return e && (a = t.pastFuture(+this, a)), t.postformat(a); } const Ci = Math.abs; function Ei(e) { return (e > 0) - (e < 0) || +e; } function zi() {
          if (!this.isValid()) return this.localeData().invalidDate(); let e; let t; let a; let n = Ci(this._milliseconds) / 1e3; const r = Ci(this._days); let i = Ci(this._months); e = D(n / 60), t = D(e / 60), n %= 60, e %= 60, a = D(i / 12), i %= 12; const s = a; const o = i; const d = r; const l = t; const u = e; const _ = n ? n.toFixed(3).replace(/\.?0+$/, '') : ''; const c = this.asSeconds(); if (!c) return 'P0D'; const m = c < 0 ? '-' : '';
          const h = Ei(this._months) !== Ei(c) ? '-' : '';
          const f = Ei(this._days) !== Ei(c) ? '-' : '';
          const M = Ei(this._milliseconds) !== Ei(c) ? '-' : ''; return `${m}P${s ? `${h + s}Y` : ''}${o ? `${h + o}M` : ''}${d ? `${f + d}D` : ''}${l || u || _ ? 'T' : ''}${l ? `${M + l}H` : ''}${u ? `${M + u}M` : ''}${_ ? `${M + _}S` : ''}`;
        } const Ii = sn.prototype; return Ii.isValid = nn, Ii.abs = Xr, Ii.add = ti, Ii.subtract = ai, Ii.as = oi, Ii.asMilliseconds = ui, Ii.asSeconds = _i, Ii.asMinutes = ci, Ii.asHours = mi, Ii.asDays = hi, Ii.asWeeks = fi, Ii.asMonths = Mi, Ii.asQuarters = pi, Ii.asYears = gi, Ii.valueOf = di, Ii._bubble = ri, Ii.clone = yi, Ii.get = Li, Ii.milliseconds = Yi, Ii.seconds = bi, Ii.minutes = ki, Ii.hours = Di, Ii.days = wi, Ii.weeks = Si, Ii.months = Ti, Ii.years = xi, Ii.humanize = Wi, Ii.toISOString = zi, Ii.toString = zi, Ii.toJSON = zi, Ii.locale = er, Ii.localeData = ar, Ii.toIsoString = S('toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)', zi), Ii.lang = tr, oe('X', 0, 0, 'unix'), oe('x', 0, 0, 'valueOf'), He('x', ke), He('X', Te), Fe('X', ((e, t, a) => { a._d = new Date(1e3 * parseFloat(e, 10)); })), Fe('x', ((e, t, a) => { a._d = new Date(w(e)); })), r.version = '2.24.0', i(qa), r.fn = zr, r.min = Qa, r.max = Xa, r.now = en, r.utc = f, r.unix = Ir, r.months = Gr, r.isDate = _, r.locale = ha, r.invalid = y, r.duration = Tn, r.isMoment = k, r.weekdays = $r, r.parseZone = Rr, r.localeData = pa, r.isDuration = on, r.monthsShort = qr, r.weekdaysMin = Zr, r.defineLocale = fa, r.updateLocale = Ma, r.locales = ga, r.weekdaysShort = Kr, r.normalizeUnits = Z, r.relativeTimeRounding = Ai, r.relativeTimeThreshold = Fi, r.calendarFormat = Fn, r.prototype = zr, r.HTML5_FMT = {
          DATETIME_LOCAL: 'YYYY-MM-DDTHH:mm', DATETIME_LOCAL_SECONDS: 'YYYY-MM-DDTHH:mm:ss', DATETIME_LOCAL_MS: 'YYYY-MM-DDTHH:mm:ss.SSS', DATE: 'YYYY-MM-DD', TIME: 'HH:mm', TIME_SECONDS: 'HH:mm:ss', TIME_MS: 'HH:mm:ss.SSS', WEEK: 'GGGG-[W]WW', MONTH: 'YYYY-MM',
        }, r;
      })));
    }).call(this, a('62e4')(e));
  },
  c7aa(e, t, a) {
    (function (e, t) { t(a('c1df')); }(0, ((e) => {
      const t = e.defineLocale('he', {
        months: 'ינואר_פברואר_מרץ_אפריל_מאי_יוני_יולי_אוגוסט_ספטמבר_אוקטובר_נובמבר_דצמבר'.split('_'),
        monthsShort: 'ינו׳_פבר׳_מרץ_אפר׳_מאי_יוני_יולי_אוג׳_ספט׳_אוק׳_נוב׳_דצמ׳'.split('_'),
        weekdays: 'ראשון_שני_שלישי_רביעי_חמישי_שישי_שבת'.split('_'),
        weekdaysShort: 'א׳_ב׳_ג׳_ד׳_ה׳_ו׳_ש׳'.split('_'),
        weekdaysMin: 'א_ב_ג_ד_ה_ו_ש'.split('_'),
        longDateFormat: {
          LT: 'HH:mm', LTS: 'HH:mm:ss', L: 'DD/MM/YYYY', LL: 'D [ב]MMMM YYYY', LLL: 'D [ב]MMMM YYYY HH:mm', LLLL: 'dddd, D [ב]MMMM YYYY HH:mm', l: 'D/M/YYYY', ll: 'D MMM YYYY', lll: 'D MMM YYYY HH:mm', llll: 'ddd, D MMM YYYY HH:mm',
        },
        calendar: {
          sameDay: '[היום ב־]LT', nextDay: '[מחר ב־]LT', nextWeek: 'dddd [בשעה] LT', lastDay: '[אתמול ב־]LT', lastWeek: '[ביום] dddd [האחרון בשעה] LT', sameElse: 'L',
        },
        relativeTime: {
          future: 'בעוד %s', past: 'לפני %s', s: 'מספר שניות', ss: '%d שניות', m: 'דקה', mm: '%d דקות', h: 'שעה', hh(e) { return e === 2 ? 'שעתיים' : `${e} שעות`; }, d: 'יום', dd(e) { return e === 2 ? 'יומיים' : `${e} ימים`; }, M: 'חודש', MM(e) { return e === 2 ? 'חודשיים' : `${e} חודשים`; }, y: 'שנה', yy(e) { return e === 2 ? 'שנתיים' : e % 10 === 0 && e !== 10 ? `${e} שנה` : `${e} שנים`; },
        },
        meridiemParse: /אחה"צ|לפנה"צ|אחרי הצהריים|לפני הצהריים|לפנות בוקר|בבוקר|בערב/i,
        isPM(e) { return /^(אחה"צ|אחרי הצהריים|בערב)$/.test(e); },
        meridiem(e, t, a) { return e < 5 ? 'לפנות בוקר' : e < 10 ? 'בבוקר' : e < 12 ? a ? 'לפנה"צ' : 'לפני הצהריים' : e < 18 ? a ? 'אחה"צ' : 'אחרי הצהריים' : 'בערב'; },
      }); return t;
    })));
  },
  c8f3(e, t, a) {
    (function (e, t) { t(a('c1df')); }(0, ((e) => {
      const t = e.defineLocale('sq', {
        months: 'Janar_Shkurt_Mars_Prill_Maj_Qershor_Korrik_Gusht_Shtator_Tetor_Nëntor_Dhjetor'.split('_'),
        monthsShort: 'Jan_Shk_Mar_Pri_Maj_Qer_Kor_Gus_Sht_Tet_Nën_Dhj'.split('_'),
        weekdays: 'E Diel_E Hënë_E Martë_E Mërkurë_E Enjte_E Premte_E Shtunë'.split('_'),
        weekdaysShort: 'Die_Hën_Mar_Mër_Enj_Pre_Sht'.split('_'),
        weekdaysMin: 'D_H_Ma_Më_E_P_Sh'.split('_'),
        weekdaysParseExact: !0,
        meridiemParse: /PD|MD/,
        isPM(e) { return e.charAt(0) === 'M'; },
        meridiem(e, t, a) { return e < 12 ? 'PD' : 'MD'; },
        longDateFormat: {
          LT: 'HH:mm', LTS: 'HH:mm:ss', L: 'DD/MM/YYYY', LL: 'D MMMM YYYY', LLL: 'D MMMM YYYY HH:mm', LLLL: 'dddd, D MMMM YYYY HH:mm',
        },
        calendar: {
          sameDay: '[Sot në] LT', nextDay: '[Nesër në] LT', nextWeek: 'dddd [në] LT', lastDay: '[Dje në] LT', lastWeek: 'dddd [e kaluar në] LT', sameElse: 'L',
        },
        relativeTime: {
          future: 'në %s', past: '%s më parë', s: 'disa sekonda', ss: '%d sekonda', m: 'një minutë', mm: '%d minuta', h: 'një orë', hh: '%d orë', d: 'një ditë', dd: '%d ditë', M: 'një muaj', MM: '%d muaj', y: 'një vit', yy: '%d vite',
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: '%d.',
        week: { dow: 1, doy: 4 },
      }); return t;
    })));
  },
  cdab(e, t, a) {
    (function (e, t) { t(a('c1df')); }(0, ((e) => {
      const t = e.defineLocale('en-SG', {
        months: 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
        monthsShort: 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
        weekdays: 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
        weekdaysShort: 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
        weekdaysMin: 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
        longDateFormat: {
          LT: 'HH:mm', LTS: 'HH:mm:ss', L: 'DD/MM/YYYY', LL: 'D MMMM YYYY', LLL: 'D MMMM YYYY HH:mm', LLLL: 'dddd, D MMMM YYYY HH:mm',
        },
        calendar: {
          sameDay: '[Today at] LT', nextDay: '[Tomorrow at] LT', nextWeek: 'dddd [at] LT', lastDay: '[Yesterday at] LT', lastWeek: '[Last] dddd [at] LT', sameElse: 'L',
        },
        relativeTime: {
          future: 'in %s', past: '%s ago', s: 'a few seconds', ss: '%d seconds', m: 'a minute', mm: '%d minutes', h: 'an hour', hh: '%d hours', d: 'a day', dd: '%d days', M: 'a month', MM: '%d months', y: 'a year', yy: '%d years',
        },
        dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
        ordinal(e) { const t = e % 10; const a = ~~(e % 100 / 10) === 1 ? 'th' : t === 1 ? 'st' : t === 2 ? 'nd' : t === 3 ? 'rd' : 'th'; return e + a; },
        week: { dow: 1, doy: 4 },
      }); return t;
    })));
  },
  cf1e(e, t, a) {
    (function (e, t) { t(a('c1df')); }(0, ((e) => {
      var t = {
        words: {
          ss: ['sekunda', 'sekunde', 'sekundi'], m: ['jedan minut', 'jedne minute'], mm: ['minut', 'minute', 'minuta'], h: ['jedan sat', 'jednog sata'], hh: ['sat', 'sata', 'sati'], dd: ['dan', 'dana', 'dana'], MM: ['mesec', 'meseca', 'meseci'], yy: ['godina', 'godine', 'godina'],
        },
        correctGrammaticalCase(e, t) { return e === 1 ? t[0] : e >= 2 && e <= 4 ? t[1] : t[2]; },
        translate(e, a, n) { const r = t.words[n]; return n.length === 1 ? a ? r[0] : r[1] : `${e} ${t.correctGrammaticalCase(e, r)}`; },
      }; const a = e.defineLocale('sr', {
        months: 'januar_februar_mart_april_maj_jun_jul_avgust_septembar_oktobar_novembar_decembar'.split('_'),
        monthsShort: 'jan._feb._mar._apr._maj_jun_jul_avg._sep._okt._nov._dec.'.split('_'),
        monthsParseExact: !0,
        weekdays: 'nedelja_ponedeljak_utorak_sreda_četvrtak_petak_subota'.split('_'),
        weekdaysShort: 'ned._pon._uto._sre._čet._pet._sub.'.split('_'),
        weekdaysMin: 'ne_po_ut_sr_če_pe_su'.split('_'),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: 'H:mm', LTS: 'H:mm:ss', L: 'DD.MM.YYYY', LL: 'D. MMMM YYYY', LLL: 'D. MMMM YYYY H:mm', LLLL: 'dddd, D. MMMM YYYY H:mm',
        },
        calendar: {
          sameDay: '[danas u] LT', nextDay: '[sutra u] LT', nextWeek() { switch (this.day()) { case 0: return '[u] [nedelju] [u] LT'; case 3: return '[u] [sredu] [u] LT'; case 6: return '[u] [subotu] [u] LT'; case 1: case 2: case 4: case 5: return '[u] dddd [u] LT'; } }, lastDay: '[juče u] LT', lastWeek() { const e = ['[prošle] [nedelje] [u] LT', '[prošlog] [ponedeljka] [u] LT', '[prošlog] [utorka] [u] LT', '[prošle] [srede] [u] LT', '[prošlog] [četvrtka] [u] LT', '[prošlog] [petka] [u] LT', '[prošle] [subote] [u] LT']; return e[this.day()]; }, sameElse: 'L',
        },
        relativeTime: {
          future: 'za %s', past: 'pre %s', s: 'nekoliko sekundi', ss: t.translate, m: t.translate, mm: t.translate, h: t.translate, hh: t.translate, d: 'dan', dd: t.translate, M: 'mesec', MM: t.translate, y: 'godinu', yy: t.translate,
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: '%d.',
        week: { dow: 1, doy: 7 },
      }); return a;
    })));
  },
  cf51(e, t, a) {
    (function (e, t) { t(a('c1df')); }(0, ((e) => {
      const t = e.defineLocale('tzl', {
        months: 'Januar_Fevraglh_Març_Avrïu_Mai_Gün_Julia_Guscht_Setemvar_Listopäts_Noemvar_Zecemvar'.split('_'),
        monthsShort: 'Jan_Fev_Mar_Avr_Mai_Gün_Jul_Gus_Set_Lis_Noe_Zec'.split('_'),
        weekdays: 'Súladi_Lúneçi_Maitzi_Márcuri_Xhúadi_Viénerçi_Sáturi'.split('_'),
        weekdaysShort: 'Súl_Lún_Mai_Már_Xhú_Vié_Sát'.split('_'),
        weekdaysMin: 'Sú_Lú_Ma_Má_Xh_Vi_Sá'.split('_'),
        longDateFormat: {
          LT: 'HH.mm', LTS: 'HH.mm.ss', L: 'DD.MM.YYYY', LL: 'D. MMMM [dallas] YYYY', LLL: 'D. MMMM [dallas] YYYY HH.mm', LLLL: 'dddd, [li] D. MMMM [dallas] YYYY HH.mm',
        },
        meridiemParse: /d\'o|d\'a/i,
        isPM(e) { return e.toLowerCase() === "d'o"; },
        meridiem(e, t, a) { return e > 11 ? a ? "d'o" : "D'O" : a ? "d'a" : "D'A"; },
        calendar: {
          sameDay: '[oxhi à] LT', nextDay: '[demà à] LT', nextWeek: 'dddd [à] LT', lastDay: '[ieiri à] LT', lastWeek: '[sür el] dddd [lasteu à] LT', sameElse: 'L',
        },
        relativeTime: {
          future: 'osprei %s', past: 'ja%s', s: a, ss: a, m: a, mm: a, h: a, hh: a, d: a, dd: a, M: a, MM: a, y: a, yy: a,
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: '%d.',
        week: { dow: 1, doy: 4 },
      }); function a(e, t, a, n) {
        const r = {
          s: ['viensas secunds', "'iensas secunds"], ss: [`${e} secunds`, `${e} secunds`], m: ["'n míut", "'iens míut"], mm: [`${e} míuts`, `${e} míuts`], h: ["'n þora", "'iensa þora"], hh: [`${e} þoras`, `${e} þoras`], d: ["'n ziua", "'iensa ziua"], dd: [`${e} ziuas`, `${e} ziuas`], M: ["'n mes", "'iens mes"], MM: [`${e} mesen`, `${e} mesen`], y: ["'n ar", "'iens ar"], yy: [`${e} ars`, `${e} ars`],
        }; return n || t ? r[a][0] : r[a][1];
      } return t;
    })));
  },
  cf75(e, t, a) {
    (function (e, t) { t(a('c1df')); }(0, ((e) => {
      const t = 'pagh_wa’_cha’_wej_loS_vagh_jav_Soch_chorgh_Hut'.split('_'); function a(e) { let t = e; return t = e.indexOf('jaj') !== -1 ? `${t.slice(0, -3)}leS` : e.indexOf('jar') !== -1 ? `${t.slice(0, -3)}waQ` : e.indexOf('DIS') !== -1 ? `${t.slice(0, -3)}nem` : `${t} pIq`, t; } function n(e) { let t = e; return t = e.indexOf('jaj') !== -1 ? `${t.slice(0, -3)}Hu’` : e.indexOf('jar') !== -1 ? `${t.slice(0, -3)}wen` : e.indexOf('DIS') !== -1 ? `${t.slice(0, -3)}ben` : `${t} ret`, t; } function r(e, t, a, n) { const r = i(e); switch (a) { case 'ss': return `${r} lup`; case 'mm': return `${r} tup`; case 'hh': return `${r} rep`; case 'dd': return `${r} jaj`; case 'MM': return `${r} jar`; case 'yy': return `${r} DIS`; } } function i(e) { const a = Math.floor(e % 1e3 / 100); const n = Math.floor(e % 100 / 10); const r = e % 10; let i = ''; return a > 0 && (i += `${t[a]}vatlh`), n > 0 && (i += `${(i !== '' ? ' ' : '') + t[n]}maH`), r > 0 && (i += (i !== '' ? ' ' : '') + t[r]), i === '' ? 'pagh' : i; } const s = e.defineLocale('tlh', {
        months: 'tera’ jar wa’_tera’ jar cha’_tera’ jar wej_tera’ jar loS_tera’ jar vagh_tera’ jar jav_tera’ jar Soch_tera’ jar chorgh_tera’ jar Hut_tera’ jar wa’maH_tera’ jar wa’maH wa’_tera’ jar wa’maH cha’'.split('_'),
        monthsShort: 'jar wa’_jar cha’_jar wej_jar loS_jar vagh_jar jav_jar Soch_jar chorgh_jar Hut_jar wa’maH_jar wa’maH wa’_jar wa’maH cha’'.split('_'),
        monthsParseExact: !0,
        weekdays: 'lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj'.split('_'),
        weekdaysShort: 'lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj'.split('_'),
        weekdaysMin: 'lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj'.split('_'),
        longDateFormat: {
          LT: 'HH:mm', LTS: 'HH:mm:ss', L: 'DD.MM.YYYY', LL: 'D MMMM YYYY', LLL: 'D MMMM YYYY HH:mm', LLLL: 'dddd, D MMMM YYYY HH:mm',
        },
        calendar: {
          sameDay: '[DaHjaj] LT', nextDay: '[wa’leS] LT', nextWeek: 'LLL', lastDay: '[wa’Hu’] LT', lastWeek: 'LLL', sameElse: 'L',
        },
        relativeTime: {
          future: a, past: n, s: 'puS lup', ss: r, m: 'wa’ tup', mm: r, h: 'wa’ rep', hh: r, d: 'wa’ jaj', dd: r, M: 'wa’ jar', MM: r, y: 'wa’ DIS', yy: r,
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: '%d.',
        week: { dow: 1, doy: 4 },
      }); return s;
    })));
  },
  d26a(e, t, a) {
    (function (e, t) { t(a('c1df')); }(0, ((e) => {
      const t = {
        1: '༡', 2: '༢', 3: '༣', 4: '༤', 5: '༥', 6: '༦', 7: '༧', 8: '༨', 9: '༩', 0: '༠',
      }; const a = {
        '༡': '1', '༢': '2', '༣': '3', '༤': '4', '༥': '5', '༦': '6', '༧': '7', '༨': '8', '༩': '9', '༠': '0',
      }; const n = e.defineLocale('bo', {
        months: 'ཟླ་བ་དང་པོ_ཟླ་བ་གཉིས་པ_ཟླ་བ་གསུམ་པ_ཟླ་བ་བཞི་པ_ཟླ་བ་ལྔ་པ_ཟླ་བ་དྲུག་པ_ཟླ་བ་བདུན་པ_ཟླ་བ་བརྒྱད་པ_ཟླ་བ་དགུ་པ_ཟླ་བ་བཅུ་པ_ཟླ་བ་བཅུ་གཅིག་པ_ཟླ་བ་བཅུ་གཉིས་པ'.split('_'),
        monthsShort: 'ཟླ་བ་དང་པོ_ཟླ་བ་གཉིས་པ_ཟླ་བ་གསུམ་པ_ཟླ་བ་བཞི་པ_ཟླ་བ་ལྔ་པ_ཟླ་བ་དྲུག་པ_ཟླ་བ་བདུན་པ_ཟླ་བ་བརྒྱད་པ_ཟླ་བ་དགུ་པ_ཟླ་བ་བཅུ་པ_ཟླ་བ་བཅུ་གཅིག་པ_ཟླ་བ་བཅུ་གཉིས་པ'.split('_'),
        weekdays: 'གཟའ་ཉི་མ་_གཟའ་ཟླ་བ་_གཟའ་མིག་དམར་_གཟའ་ལྷག་པ་_གཟའ་ཕུར་བུ_གཟའ་པ་སངས་_གཟའ་སྤེན་པ་'.split('_'),
        weekdaysShort: 'ཉི་མ་_ཟླ་བ་_མིག་དམར་_ལྷག་པ་_ཕུར་བུ_པ་སངས་_སྤེན་པ་'.split('_'),
        weekdaysMin: 'ཉི་མ་_ཟླ་བ་_མིག་དམར་_ལྷག་པ་_ཕུར་བུ_པ་སངས་_སྤེན་པ་'.split('_'),
        longDateFormat: {
          LT: 'A h:mm', LTS: 'A h:mm:ss', L: 'DD/MM/YYYY', LL: 'D MMMM YYYY', LLL: 'D MMMM YYYY, A h:mm', LLLL: 'dddd, D MMMM YYYY, A h:mm',
        },
        calendar: {
          sameDay: '[དི་རིང] LT', nextDay: '[སང་ཉིན] LT', nextWeek: '[བདུན་ཕྲག་རྗེས་མ], LT', lastDay: '[ཁ་སང] LT', lastWeek: '[བདུན་ཕྲག་མཐའ་མ] dddd, LT', sameElse: 'L',
        },
        relativeTime: {
          future: '%s ལ་', past: '%s སྔན་ལ', s: 'ལམ་སང', ss: '%d སྐར་ཆ།', m: 'སྐར་མ་གཅིག', mm: '%d སྐར་མ', h: 'ཆུ་ཚོད་གཅིག', hh: '%d ཆུ་ཚོད', d: 'ཉིན་གཅིག', dd: '%d ཉིན་', M: 'ཟླ་བ་གཅིག', MM: '%d ཟླ་བ', y: 'ལོ་གཅིག', yy: '%d ལོ',
        },
        preparse(e) { return e.replace(/[༡༢༣༤༥༦༧༨༩༠]/g, ((e) => a[e])); },
        postformat(e) { return e.replace(/\d/g, ((e) => t[e])); },
        meridiemParse: /མཚན་མོ|ཞོགས་ཀས|ཉིན་གུང|དགོང་དག|མཚན་མོ/,
        meridiemHour(e, t) { return e === 12 && (e = 0), t === 'མཚན་མོ' && e >= 4 || t === 'ཉིན་གུང' && e < 5 || t === 'དགོང་དག' ? e + 12 : e; },
        meridiem(e, t, a) { return e < 4 ? 'མཚན་མོ' : e < 10 ? 'ཞོགས་ཀས' : e < 17 ? 'ཉིན་གུང' : e < 20 ? 'དགོང་དག' : 'མཚན་མོ'; },
        week: { dow: 0, doy: 6 },
      }); return n;
    })));
  },
  d2d4(e, t, a) {
    (function (e, t) { t(a('c1df')); }(0, ((e) => {
      const t = e.defineLocale('pt-br', {
        months: 'Janeiro_Fevereiro_Março_Abril_Maio_Junho_Julho_Agosto_Setembro_Outubro_Novembro_Dezembro'.split('_'),
        monthsShort: 'Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez'.split('_'),
        weekdays: 'Domingo_Segunda-feira_Terça-feira_Quarta-feira_Quinta-feira_Sexta-feira_Sábado'.split('_'),
        weekdaysShort: 'Dom_Seg_Ter_Qua_Qui_Sex_Sáb'.split('_'),
        weekdaysMin: 'Do_2ª_3ª_4ª_5ª_6ª_Sá'.split('_'),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: 'HH:mm', LTS: 'HH:mm:ss', L: 'DD/MM/YYYY', LL: 'D [de] MMMM [de] YYYY', LLL: 'D [de] MMMM [de] YYYY [às] HH:mm', LLLL: 'dddd, D [de] MMMM [de] YYYY [às] HH:mm',
        },
        calendar: {
          sameDay: '[Hoje às] LT', nextDay: '[Amanhã às] LT', nextWeek: 'dddd [às] LT', lastDay: '[Ontem às] LT', lastWeek() { return this.day() === 0 || this.day() === 6 ? '[Último] dddd [às] LT' : '[Última] dddd [às] LT'; }, sameElse: 'L',
        },
        relativeTime: {
          future: 'em %s', past: 'há %s', s: 'poucos segundos', ss: '%d segundos', m: 'um minuto', mm: '%d minutos', h: 'uma hora', hh: '%d horas', d: 'um dia', dd: '%d dias', M: 'um mês', MM: '%d meses', y: 'um ano', yy: '%d anos',
        },
        dayOfMonthOrdinalParse: /\d{1,2}º/,
        ordinal: '%dº',
      }); return t;
    })));
  },
  d6b6(e, t, a) {
    (function (e, t) { t(a('c1df')); }(0, ((e) => {
      const t = e.defineLocale('hy-am', {
        months: { format: 'հունվարի_փետրվարի_մարտի_ապրիլի_մայիսի_հունիսի_հուլիսի_օգոստոսի_սեպտեմբերի_հոկտեմբերի_նոյեմբերի_դեկտեմբերի'.split('_'), standalone: 'հունվար_փետրվար_մարտ_ապրիլ_մայիս_հունիս_հուլիս_օգոստոս_սեպտեմբեր_հոկտեմբեր_նոյեմբեր_դեկտեմբեր'.split('_') },
        monthsShort: 'հնվ_փտր_մրտ_ապր_մյս_հնս_հլս_օգս_սպտ_հկտ_նմբ_դկտ'.split('_'),
        weekdays: 'կիրակի_երկուշաբթի_երեքշաբթի_չորեքշաբթի_հինգշաբթի_ուրբաթ_շաբաթ'.split('_'),
        weekdaysShort: 'կրկ_երկ_երք_չրք_հնգ_ուրբ_շբթ'.split('_'),
        weekdaysMin: 'կրկ_երկ_երք_չրք_հնգ_ուրբ_շբթ'.split('_'),
        longDateFormat: {
          LT: 'HH:mm', LTS: 'HH:mm:ss', L: 'DD.MM.YYYY', LL: 'D MMMM YYYY թ.', LLL: 'D MMMM YYYY թ., HH:mm', LLLL: 'dddd, D MMMM YYYY թ., HH:mm',
        },
        calendar: {
          sameDay: '[այսօր] LT', nextDay: '[վաղը] LT', lastDay: '[երեկ] LT', nextWeek() { return 'dddd [օրը ժամը] LT'; }, lastWeek() { return '[անցած] dddd [օրը ժամը] LT'; }, sameElse: 'L',
        },
        relativeTime: {
          future: '%s հետո', past: '%s առաջ', s: 'մի քանի վայրկյան', ss: '%d վայրկյան', m: 'րոպե', mm: '%d րոպե', h: 'ժամ', hh: '%d ժամ', d: 'օր', dd: '%d օր', M: 'ամիս', MM: '%d ամիս', y: 'տարի', yy: '%d տարի',
        },
        meridiemParse: /գիշերվա|առավոտվա|ցերեկվա|երեկոյան/,
        isPM(e) { return /^(ցերեկվա|երեկոյան)$/.test(e); },
        meridiem(e) { return e < 4 ? 'գիշերվա' : e < 12 ? 'առավոտվա' : e < 17 ? 'ցերեկվա' : 'երեկոյան'; },
        dayOfMonthOrdinalParse: /\d{1,2}|\d{1,2}-(ին|րդ)/,
        ordinal(e, t) { switch (t) { case 'DDD': case 'w': case 'W': case 'DDDo': return e === 1 ? `${e}-ին` : `${e}-րդ`; default: return e; } },
        week: { dow: 1, doy: 7 },
      }); return t;
    })));
  },
  d716(e, t, a) {
    (function (e, t) { t(a('c1df')); }(0, ((e) => {
      const t = e.defineLocale('ca', {
        months: { standalone: 'gener_febrer_març_abril_maig_juny_juliol_agost_setembre_octubre_novembre_desembre'.split('_'), format: "de gener_de febrer_de març_d'abril_de maig_de juny_de juliol_d'agost_de setembre_d'octubre_de novembre_de desembre".split('_'), isFormat: /D[oD]?(\s)+MMMM/ },
        monthsShort: 'gen._febr._març_abr._maig_juny_jul._ag._set._oct._nov._des.'.split('_'),
        monthsParseExact: !0,
        weekdays: 'diumenge_dilluns_dimarts_dimecres_dijous_divendres_dissabte'.split('_'),
        weekdaysShort: 'dg._dl._dt._dc._dj._dv._ds.'.split('_'),
        weekdaysMin: 'dg_dl_dt_dc_dj_dv_ds'.split('_'),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: 'H:mm', LTS: 'H:mm:ss', L: 'DD/MM/YYYY', LL: 'D MMMM [de] YYYY', ll: 'D MMM YYYY', LLL: 'D MMMM [de] YYYY [a les] H:mm', lll: 'D MMM YYYY, H:mm', LLLL: 'dddd D MMMM [de] YYYY [a les] H:mm', llll: 'ddd D MMM YYYY, H:mm',
        },
        calendar: {
          sameDay() { return `[avui a ${this.hours() !== 1 ? 'les' : 'la'}] LT`; }, nextDay() { return `[demà a ${this.hours() !== 1 ? 'les' : 'la'}] LT`; }, nextWeek() { return `dddd [a ${this.hours() !== 1 ? 'les' : 'la'}] LT`; }, lastDay() { return `[ahir a ${this.hours() !== 1 ? 'les' : 'la'}] LT`; }, lastWeek() { return `[el] dddd [passat a ${this.hours() !== 1 ? 'les' : 'la'}] LT`; }, sameElse: 'L',
        },
        relativeTime: {
          future: "d'aquí %s", past: 'fa %s', s: 'uns segons', ss: '%d segons', m: 'un minut', mm: '%d minuts', h: 'una hora', hh: '%d hores', d: 'un dia', dd: '%d dies', M: 'un mes', MM: '%d mesos', y: 'un any', yy: '%d anys',
        },
        dayOfMonthOrdinalParse: /\d{1,2}(r|n|t|è|a)/,
        ordinal(e, t) { let a = e === 1 ? 'r' : e === 2 ? 'n' : e === 3 ? 'r' : e === 4 ? 't' : 'è'; return t !== 'w' && t !== 'W' || (a = 'a'), e + a; },
        week: { dow: 1, doy: 4 },
      }); return t;
    })));
  },
  d9f8(e, t, a) {
    (function (e, t) { t(a('c1df')); }(0, ((e) => {
      const t = e.defineLocale('fr-ca', {
        months: 'janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre'.split('_'),
        monthsShort: 'janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.'.split('_'),
        monthsParseExact: !0,
        weekdays: 'dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi'.split('_'),
        weekdaysShort: 'dim._lun._mar._mer._jeu._ven._sam.'.split('_'),
        weekdaysMin: 'di_lu_ma_me_je_ve_sa'.split('_'),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: 'HH:mm', LTS: 'HH:mm:ss', L: 'YYYY-MM-DD', LL: 'D MMMM YYYY', LLL: 'D MMMM YYYY HH:mm', LLLL: 'dddd D MMMM YYYY HH:mm',
        },
        calendar: {
          sameDay: '[Aujourd’hui à] LT', nextDay: '[Demain à] LT', nextWeek: 'dddd [à] LT', lastDay: '[Hier à] LT', lastWeek: 'dddd [dernier à] LT', sameElse: 'L',
        },
        relativeTime: {
          future: 'dans %s', past: 'il y a %s', s: 'quelques secondes', ss: '%d secondes', m: 'une minute', mm: '%d minutes', h: 'une heure', hh: '%d heures', d: 'un jour', dd: '%d jours', M: 'un mois', MM: '%d mois', y: 'un an', yy: '%d ans',
        },
        dayOfMonthOrdinalParse: /\d{1,2}(er|e)/,
        ordinal(e, t) { switch (t) { default: case 'M': case 'Q': case 'D': case 'DDD': case 'd': return e + (e === 1 ? 'er' : 'e'); case 'w': case 'W': return e + (e === 1 ? 're' : 'e'); } },
      }); return t;
    })));
  },
  db29(e, t, a) {
    (function (e, t) { t(a('c1df')); }(0, ((e) => {
      const t = 'jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.'.split('_'); const a = 'jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec'.split('_'); const n = [/^jan/i, /^feb/i, /^maart|mrt.?$/i, /^apr/i, /^mei$/i, /^jun[i.]?$/i, /^jul[i.]?$/i, /^aug/i, /^sep/i, /^okt/i, /^nov/i, /^dec/i]; const r = /^(januari|februari|maart|april|mei|ju[nl]i|augustus|september|oktober|november|december|jan\.?|feb\.?|mrt\.?|apr\.?|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i; const i = e.defineLocale('nl-be', {
        months: 'januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december'.split('_'),
        monthsShort(e, n) { return e ? /-MMM-/.test(n) ? a[e.month()] : t[e.month()] : t; },
        monthsRegex: r,
        monthsShortRegex: r,
        monthsStrictRegex: /^(januari|februari|maart|april|mei|ju[nl]i|augustus|september|oktober|november|december)/i,
        monthsShortStrictRegex: /^(jan\.?|feb\.?|mrt\.?|apr\.?|mei|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i,
        monthsParse: n,
        longMonthsParse: n,
        shortMonthsParse: n,
        weekdays: 'zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag'.split('_'),
        weekdaysShort: 'zo._ma._di._wo._do._vr._za.'.split('_'),
        weekdaysMin: 'zo_ma_di_wo_do_vr_za'.split('_'),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: 'HH:mm', LTS: 'HH:mm:ss', L: 'DD/MM/YYYY', LL: 'D MMMM YYYY', LLL: 'D MMMM YYYY HH:mm', LLLL: 'dddd D MMMM YYYY HH:mm',
        },
        calendar: {
          sameDay: '[vandaag om] LT', nextDay: '[morgen om] LT', nextWeek: 'dddd [om] LT', lastDay: '[gisteren om] LT', lastWeek: '[afgelopen] dddd [om] LT', sameElse: 'L',
        },
        relativeTime: {
          future: 'over %s', past: '%s geleden', s: 'een paar seconden', ss: '%d seconden', m: 'één minuut', mm: '%d minuten', h: 'één uur', hh: '%d uur', d: 'één dag', dd: '%d dagen', M: 'één maand', MM: '%d maanden', y: 'één jaar', yy: '%d jaar',
        },
        dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
        ordinal(e) { return e + (e === 1 || e === 8 || e >= 20 ? 'ste' : 'de'); },
        week: { dow: 1, doy: 4 },
      }); return i;
    })));
  },
  dc4d(e, t, a) {
    (function (e, t) { t(a('c1df')); }(0, ((e) => {
      const t = {
        1: '१', 2: '२', 3: '३', 4: '४', 5: '५', 6: '६', 7: '७', 8: '८', 9: '९', 0: '०',
      }; const a = {
        '१': '1', '२': '2', '३': '3', '४': '4', '५': '5', '६': '6', '७': '7', '८': '8', '९': '9', '०': '0',
      }; const n = e.defineLocale('hi', {
        months: 'जनवरी_फ़रवरी_मार्च_अप्रैल_मई_जून_जुलाई_अगस्त_सितम्बर_अक्टूबर_नवम्बर_दिसम्बर'.split('_'),
        monthsShort: 'जन._फ़र._मार्च_अप्रै._मई_जून_जुल._अग._सित._अक्टू._नव._दिस.'.split('_'),
        monthsParseExact: !0,
        weekdays: 'रविवार_सोमवार_मंगलवार_बुधवार_गुरूवार_शुक्रवार_शनिवार'.split('_'),
        weekdaysShort: 'रवि_सोम_मंगल_बुध_गुरू_शुक्र_शनि'.split('_'),
        weekdaysMin: 'र_सो_मं_बु_गु_शु_श'.split('_'),
        longDateFormat: {
          LT: 'A h:mm बजे', LTS: 'A h:mm:ss बजे', L: 'DD/MM/YYYY', LL: 'D MMMM YYYY', LLL: 'D MMMM YYYY, A h:mm बजे', LLLL: 'dddd, D MMMM YYYY, A h:mm बजे',
        },
        calendar: {
          sameDay: '[आज] LT', nextDay: '[कल] LT', nextWeek: 'dddd, LT', lastDay: '[कल] LT', lastWeek: '[पिछले] dddd, LT', sameElse: 'L',
        },
        relativeTime: {
          future: '%s में', past: '%s पहले', s: 'कुछ ही क्षण', ss: '%d सेकंड', m: 'एक मिनट', mm: '%d मिनट', h: 'एक घंटा', hh: '%d घंटे', d: 'एक दिन', dd: '%d दिन', M: 'एक महीने', MM: '%d महीने', y: 'एक वर्ष', yy: '%d वर्ष',
        },
        preparse(e) { return e.replace(/[१२३४५६७८९०]/g, ((e) => a[e])); },
        postformat(e) { return e.replace(/\d/g, ((e) => t[e])); },
        meridiemParse: /रात|सुबह|दोपहर|शाम/,
        meridiemHour(e, t) { return e === 12 && (e = 0), t === 'रात' ? e < 4 ? e : e + 12 : t === 'सुबह' ? e : t === 'दोपहर' ? e >= 10 ? e : e + 12 : t === 'शाम' ? e + 12 : void 0; },
        meridiem(e, t, a) { return e < 4 ? 'रात' : e < 10 ? 'सुबह' : e < 17 ? 'दोपहर' : e < 20 ? 'शाम' : 'रात'; },
        week: { dow: 0, doy: 6 },
      }); return n;
    })));
  },
  e0c5(e, t, a) {
    (function (e, t) { t(a('c1df')); }(0, ((e) => {
      const t = {
        1: '૧', 2: '૨', 3: '૩', 4: '૪', 5: '૫', 6: '૬', 7: '૭', 8: '૮', 9: '૯', 0: '૦',
      }; const a = {
        '૧': '1', '૨': '2', '૩': '3', '૪': '4', '૫': '5', '૬': '6', '૭': '7', '૮': '8', '૯': '9', '૦': '0',
      }; const n = e.defineLocale('gu', {
        months: 'જાન્યુઆરી_ફેબ્રુઆરી_માર્ચ_એપ્રિલ_મે_જૂન_જુલાઈ_ઑગસ્ટ_સપ્ટેમ્બર_ઑક્ટ્બર_નવેમ્બર_ડિસેમ્બર'.split('_'),
        monthsShort: 'જાન્યુ._ફેબ્રુ._માર્ચ_એપ્રિ._મે_જૂન_જુલા._ઑગ._સપ્ટે._ઑક્ટ્._નવે._ડિસે.'.split('_'),
        monthsParseExact: !0,
        weekdays: 'રવિવાર_સોમવાર_મંગળવાર_બુધ્વાર_ગુરુવાર_શુક્રવાર_શનિવાર'.split('_'),
        weekdaysShort: 'રવિ_સોમ_મંગળ_બુધ્_ગુરુ_શુક્ર_શનિ'.split('_'),
        weekdaysMin: 'ર_સો_મં_બુ_ગુ_શુ_શ'.split('_'),
        longDateFormat: {
          LT: 'A h:mm વાગ્યે', LTS: 'A h:mm:ss વાગ્યે', L: 'DD/MM/YYYY', LL: 'D MMMM YYYY', LLL: 'D MMMM YYYY, A h:mm વાગ્યે', LLLL: 'dddd, D MMMM YYYY, A h:mm વાગ્યે',
        },
        calendar: {
          sameDay: '[આજ] LT', nextDay: '[કાલે] LT', nextWeek: 'dddd, LT', lastDay: '[ગઇકાલે] LT', lastWeek: '[પાછલા] dddd, LT', sameElse: 'L',
        },
        relativeTime: {
          future: '%s મા', past: '%s પેહલા', s: 'અમુક પળો', ss: '%d સેકંડ', m: 'એક મિનિટ', mm: '%d મિનિટ', h: 'એક કલાક', hh: '%d કલાક', d: 'એક દિવસ', dd: '%d દિવસ', M: 'એક મહિનો', MM: '%d મહિનો', y: 'એક વર્ષ', yy: '%d વર્ષ',
        },
        preparse(e) { return e.replace(/[૧૨૩૪૫૬૭૮૯૦]/g, ((e) => a[e])); },
        postformat(e) { return e.replace(/\d/g, ((e) => t[e])); },
        meridiemParse: /રાત|બપોર|સવાર|સાંજ/,
        meridiemHour(e, t) { return e === 12 && (e = 0), t === 'રાત' ? e < 4 ? e : e + 12 : t === 'સવાર' ? e : t === 'બપોર' ? e >= 10 ? e : e + 12 : t === 'સાંજ' ? e + 12 : void 0; },
        meridiem(e, t, a) { return e < 4 ? 'રાત' : e < 10 ? 'સવાર' : e < 17 ? 'બપોર' : e < 20 ? 'સાંજ' : 'રાત'; },
        week: { dow: 0, doy: 6 },
      }); return n;
    })));
  },
  e1c6(e, t, a) {
    const n = a('3b14'); const r = a.n(n); r.a;
  },
  e1d3(e, t, a) {
    (function (e, t) { t(a('c1df')); }(0, ((e) => {
      const t = e.defineLocale('en-ie', {
        months: 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
        monthsShort: 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
        weekdays: 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
        weekdaysShort: 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
        weekdaysMin: 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
        longDateFormat: {
          LT: 'HH:mm', LTS: 'HH:mm:ss', L: 'DD/MM/YYYY', LL: 'D MMMM YYYY', LLL: 'D MMMM YYYY HH:mm', LLLL: 'dddd D MMMM YYYY HH:mm',
        },
        calendar: {
          sameDay: '[Today at] LT', nextDay: '[Tomorrow at] LT', nextWeek: 'dddd [at] LT', lastDay: '[Yesterday at] LT', lastWeek: '[Last] dddd [at] LT', sameElse: 'L',
        },
        relativeTime: {
          future: 'in %s', past: '%s ago', s: 'a few seconds', ss: '%d seconds', m: 'a minute', mm: '%d minutes', h: 'an hour', hh: '%d hours', d: 'a day', dd: '%d days', M: 'a month', MM: '%d months', y: 'a year', yy: '%d years',
        },
        dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
        ordinal(e) { const t = e % 10; const a = ~~(e % 100 / 10) === 1 ? 'th' : t === 1 ? 'st' : t === 2 ? 'nd' : t === 3 ? 'rd' : 'th'; return e + a; },
        week: { dow: 1, doy: 4 },
      }); return t;
    })));
  },
  e81d(e, t, a) {
    (function (e, t) { t(a('c1df')); }(0, ((e) => {
      const t = {
        1: '១', 2: '២', 3: '៣', 4: '៤', 5: '៥', 6: '៦', 7: '៧', 8: '៨', 9: '៩', 0: '០',
      }; const a = {
        '១': '1', '២': '2', '៣': '3', '៤': '4', '៥': '5', '៦': '6', '៧': '7', '៨': '8', '៩': '9', '០': '0',
      }; const n = e.defineLocale('km', {
        months: 'មករា_កុម្ភៈ_មីនា_មេសា_ឧសភា_មិថុនា_កក្កដា_សីហា_កញ្ញា_តុលា_វិច្ឆិកា_ធ្នូ'.split('_'),
        monthsShort: 'មករា_កុម្ភៈ_មីនា_មេសា_ឧសភា_មិថុនា_កក្កដា_សីហា_កញ្ញា_តុលា_វិច្ឆិកា_ធ្នូ'.split('_'),
        weekdays: 'អាទិត្យ_ច័ន្ទ_អង្គារ_ពុធ_ព្រហស្បតិ៍_សុក្រ_សៅរ៍'.split('_'),
        weekdaysShort: 'អា_ច_អ_ព_ព្រ_សុ_ស'.split('_'),
        weekdaysMin: 'អា_ច_អ_ព_ព្រ_សុ_ស'.split('_'),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: 'HH:mm', LTS: 'HH:mm:ss', L: 'DD/MM/YYYY', LL: 'D MMMM YYYY', LLL: 'D MMMM YYYY HH:mm', LLLL: 'dddd, D MMMM YYYY HH:mm',
        },
        meridiemParse: /ព្រឹក|ល្ងាច/,
        isPM(e) { return e === 'ល្ងាច'; },
        meridiem(e, t, a) { return e < 12 ? 'ព្រឹក' : 'ល្ងាច'; },
        calendar: {
          sameDay: '[ថ្ងៃនេះ ម៉ោង] LT', nextDay: '[ស្អែក ម៉ោង] LT', nextWeek: 'dddd [ម៉ោង] LT', lastDay: '[ម្សិលមិញ ម៉ោង] LT', lastWeek: 'dddd [សប្តាហ៍មុន] [ម៉ោង] LT', sameElse: 'L',
        },
        relativeTime: {
          future: '%sទៀត', past: '%sមុន', s: 'ប៉ុន្មានវិនាទី', ss: '%d វិនាទី', m: 'មួយនាទី', mm: '%d នាទី', h: 'មួយម៉ោង', hh: '%d ម៉ោង', d: 'មួយថ្ងៃ', dd: '%d ថ្ងៃ', M: 'មួយខែ', MM: '%d ខែ', y: 'មួយឆ្នាំ', yy: '%d ឆ្នាំ',
        },
        dayOfMonthOrdinalParse: /ទី\d{1,2}/,
        ordinal: 'ទី%d',
        preparse(e) { return e.replace(/[១២៣៤៥៦៧៨៩០]/g, ((e) => a[e])); },
        postformat(e) { return e.replace(/\d/g, ((e) => t[e])); },
        week: { dow: 1, doy: 4 },
      }); return n;
    })));
  },
  eae6(e, t, a) {},
  ebe4(e, t, a) {
    (function (e, t) { t(a('c1df')); }(0, ((e) => {
      const t = e.defineLocale('ms', {
        months: 'Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember'.split('_'),
        monthsShort: 'Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis'.split('_'),
        weekdays: 'Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu'.split('_'),
        weekdaysShort: 'Ahd_Isn_Sel_Rab_Kha_Jum_Sab'.split('_'),
        weekdaysMin: 'Ah_Is_Sl_Rb_Km_Jm_Sb'.split('_'),
        longDateFormat: {
          LT: 'HH.mm', LTS: 'HH.mm.ss', L: 'DD/MM/YYYY', LL: 'D MMMM YYYY', LLL: 'D MMMM YYYY [pukul] HH.mm', LLLL: 'dddd, D MMMM YYYY [pukul] HH.mm',
        },
        meridiemParse: /pagi|tengahari|petang|malam/,
        meridiemHour(e, t) { return e === 12 && (e = 0), t === 'pagi' ? e : t === 'tengahari' ? e >= 11 ? e : e + 12 : t === 'petang' || t === 'malam' ? e + 12 : void 0; },
        meridiem(e, t, a) { return e < 11 ? 'pagi' : e < 15 ? 'tengahari' : e < 19 ? 'petang' : 'malam'; },
        calendar: {
          sameDay: '[Hari ini pukul] LT', nextDay: '[Esok pukul] LT', nextWeek: 'dddd [pukul] LT', lastDay: '[Kelmarin pukul] LT', lastWeek: 'dddd [lepas pukul] LT', sameElse: 'L',
        },
        relativeTime: {
          future: 'dalam %s', past: '%s yang lepas', s: 'beberapa saat', ss: '%d saat', m: 'seminit', mm: '%d minit', h: 'sejam', hh: '%d jam', d: 'sehari', dd: '%d hari', M: 'sebulan', MM: '%d bulan', y: 'setahun', yy: '%d tahun',
        },
        week: { dow: 1, doy: 7 },
      }); return t;
    })));
  },
  ec18(e, t, a) {
    (function (e, t) { t(a('c1df')); }(0, ((e) => {
      function t(e, t, a, n) {
        const r = {
          s: ['mõne sekundi', 'mõni sekund', 'paar sekundit'], ss: [`${e}sekundi`, `${e}sekundit`], m: ['ühe minuti', 'üks minut'], mm: [`${e} minuti`, `${e} minutit`], h: ['ühe tunni', 'tund aega', 'üks tund'], hh: [`${e} tunni`, `${e} tundi`], d: ['ühe päeva', 'üks päev'], M: ['kuu aja', 'kuu aega', 'üks kuu'], MM: [`${e} kuu`, `${e} kuud`], y: ['ühe aasta', 'aasta', 'üks aasta'], yy: [`${e} aasta`, `${e} aastat`],
        }; return t ? r[a][2] ? r[a][2] : r[a][1] : n ? r[a][0] : r[a][1];
      } const a = e.defineLocale('et', {
        months: 'jaanuar_veebruar_märts_aprill_mai_juuni_juuli_august_september_oktoober_november_detsember'.split('_'),
        monthsShort: 'jaan_veebr_märts_apr_mai_juuni_juuli_aug_sept_okt_nov_dets'.split('_'),
        weekdays: 'pühapäev_esmaspäev_teisipäev_kolmapäev_neljapäev_reede_laupäev'.split('_'),
        weekdaysShort: 'P_E_T_K_N_R_L'.split('_'),
        weekdaysMin: 'P_E_T_K_N_R_L'.split('_'),
        longDateFormat: {
          LT: 'H:mm', LTS: 'H:mm:ss', L: 'DD.MM.YYYY', LL: 'D. MMMM YYYY', LLL: 'D. MMMM YYYY H:mm', LLLL: 'dddd, D. MMMM YYYY H:mm',
        },
        calendar: {
          sameDay: '[Täna,] LT', nextDay: '[Homme,] LT', nextWeek: '[Järgmine] dddd LT', lastDay: '[Eile,] LT', lastWeek: '[Eelmine] dddd LT', sameElse: 'L',
        },
        relativeTime: {
          future: '%s pärast', past: '%s tagasi', s: t, ss: t, m: t, mm: t, h: t, hh: t, d: t, dd: '%d päeva', M: t, MM: t, y: t, yy: t,
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: '%d.',
        week: { dow: 1, doy: 4 },
      }); return a;
    })));
  },
  ed93(e, t, a) {
    a.r(t); const n = function () { const e = this; const t = e.$createElement; const a = e._self._c || t; return a('div', { staticClass: 'container stats' }, [this.$store.state.activePerson !== null ? a('div') : e._e(), a('h2', [e._v(`Number of tickets ${e._s(this.$store.getters.numberOfTickets)}`)]), e.stats.length > 0 ? a('PieChart', { attrs: { data: e.chartData, options: e.chartOptions } }) : e._e()], 1); }; const r = []; a('4160'), a('159b'); const i = a('30ef'); const s = a.n(i); function o(e, t) {
      return {
        render(e) { return e('div', { style: this.styles, class: this.cssClasses }, [e('canvas', { attrs: { id: this.chartId, width: this.width, height: this.height }, ref: 'canvas' })]); },
        props: {
          chartId: { default: e, type: String }, width: { default: 400, type: Number }, height: { default: 400, type: Number }, cssClasses: { type: String, default: '' }, styles: { type: Object }, plugins: { type: Array, default() { return []; } },
        },
        data() { return { _chart: null, _plugins: this.plugins }; },
        methods: {
          addPlugin(e) { this.$data._plugins.push(e); },
          generateLegend() { if (this.$data._chart) return this.$data._chart.generateLegend(); },
          renderChart(e, a) {
            this.$data._chart && this.$data._chart.destroy(), this.$data._chart = new s.a(this.$refs.canvas.getContext('2d'), {
              type: t, data: e, options: a, plugins: this.$data._plugins,
            });
          },
        },
        beforeDestroy() { this.$data._chart && this.$data._chart.destroy(); },
      };
    }o('bar-chart', 'bar'), o('horizontalbar-chart', 'horizontalBar'); let d; let l; const u = o('doughnut-chart', 'doughnut'); const _ = (o('line-chart', 'line'), o('pie-chart', 'pie'), o('polar-chart', 'polarArea'), o('radar-chart', 'radar'), o('bubble-chart', 'bubble'), o('scatter-chart', 'scatter'), {
      name: 'PieChart', extends: u, props: ['data', 'options'], mounted() { this.renderChart(this.data, {}); },
    }); const c = _; const m = (a('e1c6'), a('2877')); const h = Object(m.a)(c, d, l, !1, null, null, null); const f = h.exports; const M = {
      name: 'Stats',
      components: { PieChart: f },
      data() {
        return {
          stats: [],
          chartOptions: { hoverBorderWidth: 20 },
          chartData: {
            hoverBackgroundColor: 'red', hoverBorderWidth: 10, labels: [], datasets: [{ label: 'Users', backgroundColor: ['#feca57', '#070606', '#1dd1a1', 'ff6b6b', '54a0ff', '00d2d3', '222f3e', '8395a7'], data: [] }],
          },
        };
      },
      created() { const e = this; this.$store.dispatch('getUsers').then((() => { e.usersWithTickets(), e.setLabels(); })); },
      methods: { usersWithTickets() { const e = this; this.$store.state.users.forEach(((t) => { const a = e.$store.getters.numberOfTickesPerUser(t); if (a > 0) { const n = { person: t, ticket: a }; e.stats.push(n); } })); }, setLabels() { const e = this; this.stats.forEach(((t) => { e.chartData.labels.push(t.person), e.chartData.datasets[0].data.push(t.ticket); })); } },
    }; const p = M; const g = (a('5f6c'), Object(m.a)(p, n, r, !1, null, null, null)); t.default = g.exports;
  },
  eda5(e, t, a) {
    (function (e, t) { t(a('c1df')); }(0, ((e) => {
      const t = e.defineLocale('si', {
        months: 'ජනවාරි_පෙබරවාරි_මාර්තු_අප්‍රේල්_මැයි_ජූනි_ජූලි_අගෝස්තු_සැප්තැම්බර්_ඔක්තෝබර්_නොවැම්බර්_දෙසැම්බර්'.split('_'),
        monthsShort: 'ජන_පෙබ_මාර්_අප්_මැයි_ජූනි_ජූලි_අගෝ_සැප්_ඔක්_නොවැ_දෙසැ'.split('_'),
        weekdays: 'ඉරිදා_සඳුදා_අඟහරුවාදා_බදාදා_බ්‍රහස්පතින්දා_සිකුරාදා_සෙනසුරාදා'.split('_'),
        weekdaysShort: 'ඉරි_සඳු_අඟ_බදා_බ්‍රහ_සිකු_සෙන'.split('_'),
        weekdaysMin: 'ඉ_ස_අ_බ_බ්‍ර_සි_සෙ'.split('_'),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: 'a h:mm', LTS: 'a h:mm:ss', L: 'YYYY/MM/DD', LL: 'YYYY MMMM D', LLL: 'YYYY MMMM D, a h:mm', LLLL: 'YYYY MMMM D [වැනි] dddd, a h:mm:ss',
        },
        calendar: {
          sameDay: '[අද] LT[ට]', nextDay: '[හෙට] LT[ට]', nextWeek: 'dddd LT[ට]', lastDay: '[ඊයේ] LT[ට]', lastWeek: '[පසුගිය] dddd LT[ට]', sameElse: 'L',
        },
        relativeTime: {
          future: '%sකින්', past: '%sකට පෙර', s: 'තත්පර කිහිපය', ss: 'තත්පර %d', m: 'මිනිත්තුව', mm: 'මිනිත්තු %d', h: 'පැය', hh: 'පැය %d', d: 'දිනය', dd: 'දින %d', M: 'මාසය', MM: 'මාස %d', y: 'වසර', yy: 'වසර %d',
        },
        dayOfMonthOrdinalParse: /\d{1,2} වැනි/,
        ordinal(e) { return `${e} වැනි`; },
        meridiemParse: /පෙර වරු|පස් වරු|පෙ.ව|ප.ව./,
        isPM(e) { return e === 'ප.ව.' || e === 'පස් වරු'; },
        meridiem(e, t, a) { return e > 11 ? a ? 'ප.ව.' : 'පස් වරු' : a ? 'පෙ.ව.' : 'පෙර වරු'; },
      }); return t;
    })));
  },
  f260(e, t, a) {
    (function (e, t) { t(a('c1df')); }(0, ((e) => {
      const t = e.defineLocale('pt', {
        months: 'Janeiro_Fevereiro_Março_Abril_Maio_Junho_Julho_Agosto_Setembro_Outubro_Novembro_Dezembro'.split('_'),
        monthsShort: 'Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez'.split('_'),
        weekdays: 'Domingo_Segunda-feira_Terça-feira_Quarta-feira_Quinta-feira_Sexta-feira_Sábado'.split('_'),
        weekdaysShort: 'Dom_Seg_Ter_Qua_Qui_Sex_Sáb'.split('_'),
        weekdaysMin: 'Do_2ª_3ª_4ª_5ª_6ª_Sá'.split('_'),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: 'HH:mm', LTS: 'HH:mm:ss', L: 'DD/MM/YYYY', LL: 'D [de] MMMM [de] YYYY', LLL: 'D [de] MMMM [de] YYYY HH:mm', LLLL: 'dddd, D [de] MMMM [de] YYYY HH:mm',
        },
        calendar: {
          sameDay: '[Hoje às] LT', nextDay: '[Amanhã às] LT', nextWeek: 'dddd [às] LT', lastDay: '[Ontem às] LT', lastWeek() { return this.day() === 0 || this.day() === 6 ? '[Último] dddd [às] LT' : '[Última] dddd [às] LT'; }, sameElse: 'L',
        },
        relativeTime: {
          future: 'em %s', past: 'há %s', s: 'segundos', ss: '%d segundos', m: 'um minuto', mm: '%d minutos', h: 'uma hora', hh: '%d horas', d: 'um dia', dd: '%d dias', M: 'um mês', MM: '%d meses', y: 'um ano', yy: '%d anos',
        },
        dayOfMonthOrdinalParse: /\d{1,2}º/,
        ordinal: '%dº',
        week: { dow: 1, doy: 4 },
      }); return t;
    })));
  },
  f3ff(e, t, a) {
    (function (e, t) { t(a('c1df')); }(0, ((e) => {
      const t = {
        1: '੧', 2: '੨', 3: '੩', 4: '੪', 5: '੫', 6: '੬', 7: '੭', 8: '੮', 9: '੯', 0: '੦',
      }; const a = {
        '੧': '1', '੨': '2', '੩': '3', '੪': '4', '੫': '5', '੬': '6', '੭': '7', '੮': '8', '੯': '9', '੦': '0',
      }; const n = e.defineLocale('pa-in', {
        months: 'ਜਨਵਰੀ_ਫ਼ਰਵਰੀ_ਮਾਰਚ_ਅਪ੍ਰੈਲ_ਮਈ_ਜੂਨ_ਜੁਲਾਈ_ਅਗਸਤ_ਸਤੰਬਰ_ਅਕਤੂਬਰ_ਨਵੰਬਰ_ਦਸੰਬਰ'.split('_'),
        monthsShort: 'ਜਨਵਰੀ_ਫ਼ਰਵਰੀ_ਮਾਰਚ_ਅਪ੍ਰੈਲ_ਮਈ_ਜੂਨ_ਜੁਲਾਈ_ਅਗਸਤ_ਸਤੰਬਰ_ਅਕਤੂਬਰ_ਨਵੰਬਰ_ਦਸੰਬਰ'.split('_'),
        weekdays: 'ਐਤਵਾਰ_ਸੋਮਵਾਰ_ਮੰਗਲਵਾਰ_ਬੁਧਵਾਰ_ਵੀਰਵਾਰ_ਸ਼ੁੱਕਰਵਾਰ_ਸ਼ਨੀਚਰਵਾਰ'.split('_'),
        weekdaysShort: 'ਐਤ_ਸੋਮ_ਮੰਗਲ_ਬੁਧ_ਵੀਰ_ਸ਼ੁਕਰ_ਸ਼ਨੀ'.split('_'),
        weekdaysMin: 'ਐਤ_ਸੋਮ_ਮੰਗਲ_ਬੁਧ_ਵੀਰ_ਸ਼ੁਕਰ_ਸ਼ਨੀ'.split('_'),
        longDateFormat: {
          LT: 'A h:mm ਵਜੇ', LTS: 'A h:mm:ss ਵਜੇ', L: 'DD/MM/YYYY', LL: 'D MMMM YYYY', LLL: 'D MMMM YYYY, A h:mm ਵਜੇ', LLLL: 'dddd, D MMMM YYYY, A h:mm ਵਜੇ',
        },
        calendar: {
          sameDay: '[ਅਜ] LT', nextDay: '[ਕਲ] LT', nextWeek: '[ਅਗਲਾ] dddd, LT', lastDay: '[ਕਲ] LT', lastWeek: '[ਪਿਛਲੇ] dddd, LT', sameElse: 'L',
        },
        relativeTime: {
          future: '%s ਵਿੱਚ', past: '%s ਪਿਛਲੇ', s: 'ਕੁਝ ਸਕਿੰਟ', ss: '%d ਸਕਿੰਟ', m: 'ਇਕ ਮਿੰਟ', mm: '%d ਮਿੰਟ', h: 'ਇੱਕ ਘੰਟਾ', hh: '%d ਘੰਟੇ', d: 'ਇੱਕ ਦਿਨ', dd: '%d ਦਿਨ', M: 'ਇੱਕ ਮਹੀਨਾ', MM: '%d ਮਹੀਨੇ', y: 'ਇੱਕ ਸਾਲ', yy: '%d ਸਾਲ',
        },
        preparse(e) { return e.replace(/[੧੨੩੪੫੬੭੮੯੦]/g, ((e) => a[e])); },
        postformat(e) { return e.replace(/\d/g, ((e) => t[e])); },
        meridiemParse: /ਰਾਤ|ਸਵੇਰ|ਦੁਪਹਿਰ|ਸ਼ਾਮ/,
        meridiemHour(e, t) { return e === 12 && (e = 0), t === 'ਰਾਤ' ? e < 4 ? e : e + 12 : t === 'ਸਵੇਰ' ? e : t === 'ਦੁਪਹਿਰ' ? e >= 10 ? e : e + 12 : t === 'ਸ਼ਾਮ' ? e + 12 : void 0; },
        meridiem(e, t, a) { return e < 4 ? 'ਰਾਤ' : e < 10 ? 'ਸਵੇਰ' : e < 17 ? 'ਦੁਪਹਿਰ' : e < 20 ? 'ਸ਼ਾਮ' : 'ਰਾਤ'; },
        week: { dow: 0, doy: 6 },
      }); return n;
    })));
  },
  f6b46(e, t, a) {
    (function (e, t) { t(a('c1df')); }(0, ((e) => {
      const t = ['Am Faoilleach', 'An Gearran', 'Am Màrt', 'An Giblean', 'An Cèitean', 'An t-Ògmhios', 'An t-Iuchar', 'An Lùnastal', 'An t-Sultain', 'An Dàmhair', 'An t-Samhain', 'An Dùbhlachd']; const a = ['Faoi', 'Gear', 'Màrt', 'Gibl', 'Cèit', 'Ògmh', 'Iuch', 'Lùn', 'Sult', 'Dàmh', 'Samh', 'Dùbh']; const n = ['Didòmhnaich', 'Diluain', 'Dimàirt', 'Diciadain', 'Diardaoin', 'Dihaoine', 'Disathairne']; const r = ['Did', 'Dil', 'Dim', 'Dic', 'Dia', 'Dih', 'Dis']; const i = ['Dò', 'Lu', 'Mà', 'Ci', 'Ar', 'Ha', 'Sa']; const s = e.defineLocale('gd', {
        months: t,
        monthsShort: a,
        monthsParseExact: !0,
        weekdays: n,
        weekdaysShort: r,
        weekdaysMin: i,
        longDateFormat: {
          LT: 'HH:mm', LTS: 'HH:mm:ss', L: 'DD/MM/YYYY', LL: 'D MMMM YYYY', LLL: 'D MMMM YYYY HH:mm', LLLL: 'dddd, D MMMM YYYY HH:mm',
        },
        calendar: {
          sameDay: '[An-diugh aig] LT', nextDay: '[A-màireach aig] LT', nextWeek: 'dddd [aig] LT', lastDay: '[An-dè aig] LT', lastWeek: 'dddd [seo chaidh] [aig] LT', sameElse: 'L',
        },
        relativeTime: {
          future: 'ann an %s', past: 'bho chionn %s', s: 'beagan diogan', ss: '%d diogan', m: 'mionaid', mm: '%d mionaidean', h: 'uair', hh: '%d uairean', d: 'latha', dd: '%d latha', M: 'mìos', MM: '%d mìosan', y: 'bliadhna', yy: '%d bliadhna',
        },
        dayOfMonthOrdinalParse: /\d{1,2}(d|na|mh)/,
        ordinal(e) { const t = e === 1 ? 'd' : e % 10 === 2 ? 'na' : 'mh'; return e + t; },
        week: { dow: 1, doy: 4 },
      }); return s;
    })));
  },
  facd(e, t, a) {
    (function (e, t) { t(a('c1df')); }(0, ((e) => {
      const t = 'jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.'.split('_'); const a = 'jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec'.split('_'); const n = [/^jan/i, /^feb/i, /^maart|mrt.?$/i, /^apr/i, /^mei$/i, /^jun[i.]?$/i, /^jul[i.]?$/i, /^aug/i, /^sep/i, /^okt/i, /^nov/i, /^dec/i]; const r = /^(januari|februari|maart|april|mei|ju[nl]i|augustus|september|oktober|november|december|jan\.?|feb\.?|mrt\.?|apr\.?|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i; const i = e.defineLocale('nl', {
        months: 'januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december'.split('_'),
        monthsShort(e, n) { return e ? /-MMM-/.test(n) ? a[e.month()] : t[e.month()] : t; },
        monthsRegex: r,
        monthsShortRegex: r,
        monthsStrictRegex: /^(januari|februari|maart|april|mei|ju[nl]i|augustus|september|oktober|november|december)/i,
        monthsShortStrictRegex: /^(jan\.?|feb\.?|mrt\.?|apr\.?|mei|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i,
        monthsParse: n,
        longMonthsParse: n,
        shortMonthsParse: n,
        weekdays: 'zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag'.split('_'),
        weekdaysShort: 'zo._ma._di._wo._do._vr._za.'.split('_'),
        weekdaysMin: 'zo_ma_di_wo_do_vr_za'.split('_'),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: 'HH:mm', LTS: 'HH:mm:ss', L: 'DD-MM-YYYY', LL: 'D MMMM YYYY', LLL: 'D MMMM YYYY HH:mm', LLLL: 'dddd D MMMM YYYY HH:mm',
        },
        calendar: {
          sameDay: '[vandaag om] LT', nextDay: '[morgen om] LT', nextWeek: 'dddd [om] LT', lastDay: '[gisteren om] LT', lastWeek: '[afgelopen] dddd [om] LT', sameElse: 'L',
        },
        relativeTime: {
          future: 'over %s', past: '%s geleden', s: 'een paar seconden', ss: '%d seconden', m: 'één minuut', mm: '%d minuten', h: 'één uur', hh: '%d uur', d: 'één dag', dd: '%d dagen', M: 'één maand', MM: '%d maanden', y: 'één jaar', yy: '%d jaar',
        },
        dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
        ordinal(e) { return e + (e === 1 || e === 8 || e >= 20 ? 'ste' : 'de'); },
        week: { dow: 1, doy: 4 },
      }); return i;
    })));
  },
  fd7e(e, t, a) {
    (function (e, t) { t(a('c1df')); }(0, ((e) => {
      const t = e.defineLocale('x-pseudo', {
        months: 'J~áñúá~rý_F~ébrú~árý_~Márc~h_Áp~ríl_~Máý_~Júñé~_Júl~ý_Áú~gúst~_Sép~témb~ér_Ó~ctób~ér_Ñ~óvém~bér_~Décé~mbér'.split('_'),
        monthsShort: 'J~áñ_~Féb_~Már_~Ápr_~Máý_~Júñ_~Júl_~Áúg_~Sép_~Óct_~Ñóv_~Déc'.split('_'),
        monthsParseExact: !0,
        weekdays: 'S~úñdá~ý_Mó~ñdáý~_Túé~sdáý~_Wéd~ñésd~áý_T~húrs~dáý_~Fríd~áý_S~átúr~dáý'.split('_'),
        weekdaysShort: 'S~úñ_~Móñ_~Túé_~Wéd_~Thú_~Frí_~Sát'.split('_'),
        weekdaysMin: 'S~ú_Mó~_Tú_~Wé_T~h_Fr~_Sá'.split('_'),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: 'HH:mm', L: 'DD/MM/YYYY', LL: 'D MMMM YYYY', LLL: 'D MMMM YYYY HH:mm', LLLL: 'dddd, D MMMM YYYY HH:mm',
        },
        calendar: {
          sameDay: '[T~ódá~ý át] LT', nextDay: '[T~ómó~rró~w át] LT', nextWeek: 'dddd [át] LT', lastDay: '[Ý~ést~érdá~ý át] LT', lastWeek: '[L~ást] dddd [át] LT', sameElse: 'L',
        },
        relativeTime: {
          future: 'í~ñ %s', past: '%s á~gó', s: 'á ~féw ~sécó~ñds', ss: '%d s~écóñ~ds', m: 'á ~míñ~úté', mm: '%d m~íñú~tés', h: 'á~ñ hó~úr', hh: '%d h~óúrs', d: 'á ~dáý', dd: '%d d~áýs', M: 'á ~móñ~th', MM: '%d m~óñt~hs', y: 'á ~ýéár', yy: '%d ý~éárs',
        },
        dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
        ordinal(e) { const t = e % 10; const a = ~~(e % 100 / 10) === 1 ? 'th' : t === 1 ? 'st' : t === 2 ? 'nd' : t === 3 ? 'rd' : 'th'; return e + a; },
        week: { dow: 1, doy: 4 },
      }); return t;
    })));
  },
  ffff(e, t, a) {
    (function (e, t) { t(a('c1df')); }(0, ((e) => {
      const t = e.defineLocale('se', {
        months: 'ođđajagemánnu_guovvamánnu_njukčamánnu_cuoŋománnu_miessemánnu_geassemánnu_suoidnemánnu_borgemánnu_čakčamánnu_golggotmánnu_skábmamánnu_juovlamánnu'.split('_'),
        monthsShort: 'ođđj_guov_njuk_cuo_mies_geas_suoi_borg_čakč_golg_skáb_juov'.split('_'),
        weekdays: 'sotnabeaivi_vuossárga_maŋŋebárga_gaskavahkku_duorastat_bearjadat_lávvardat'.split('_'),
        weekdaysShort: 'sotn_vuos_maŋ_gask_duor_bear_láv'.split('_'),
        weekdaysMin: 's_v_m_g_d_b_L'.split('_'),
        longDateFormat: {
          LT: 'HH:mm', LTS: 'HH:mm:ss', L: 'DD.MM.YYYY', LL: 'MMMM D. [b.] YYYY', LLL: 'MMMM D. [b.] YYYY [ti.] HH:mm', LLLL: 'dddd, MMMM D. [b.] YYYY [ti.] HH:mm',
        },
        calendar: {
          sameDay: '[otne ti] LT', nextDay: '[ihttin ti] LT', nextWeek: 'dddd [ti] LT', lastDay: '[ikte ti] LT', lastWeek: '[ovddit] dddd [ti] LT', sameElse: 'L',
        },
        relativeTime: {
          future: '%s geažes', past: 'maŋit %s', s: 'moadde sekunddat', ss: '%d sekunddat', m: 'okta minuhta', mm: '%d minuhtat', h: 'okta diimmu', hh: '%d diimmut', d: 'okta beaivi', dd: '%d beaivvit', M: 'okta mánnu', MM: '%d mánut', y: 'okta jahki', yy: '%d jagit',
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: '%d.',
        week: { dow: 1, doy: 4 },
      }); return t;
    })));
  },
}]);
// # sourceMappingURL=stats.06db013c.js.map
