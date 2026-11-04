/* =====================  إعدادات الموقع / SITE CONFIG  ===================== */
const CONFIG = {
  whatsapp: '201274854398',            // رقم الواتساب بصيغة دولية
  depositRate: 0.5,                    // الديبوزت = 50%
  methods: [
    { id:'orange',   mark:'O',  color:'#ff7900', name:{ar:'أورانج كاش', en:'Orange Cash'},        number:'01274854398' },
    { id:'vodafone', mark:'V',  color:'#e60000', name:{ar:'فودافون كاش', en:'Vodafone Cash'},     number:null },
    { id:'etisalat', mark:'e&', color:'#d6001c', name:{ar:'اتصالات كاش', en:'e& Cash'},           number:null },
    { id:'instapay', mark:'IP', color:'#7a35c4', name:{ar:'إنستاباي', en:'InstaPay'},            number:null },
    { id:'bank',     mark:'B',  color:'#1f6bff', name:{ar:'تحويل بنكي', en:'Bank transfer'},     number:null }
  ]
  // ضع رقم/حساب أي وسيلة في number وهتشتغل بنفس طريقة أورانج كاش.
  // لو سبتها null العميل هيطلب بيانات الدفع منك على واتساب.
};

const PLANS = [
  { id:'starter', price:2500, cls:'',
    name:{ar:'البداية', en:'Starter'},
    for:{ar:'صفحة واحدة تعرّف بيك أو بعرض واحد.', en:'One page to introduce you or a single offer.'},
    feat:{ar:['صفحة هبوط واحدة','تصميم متجاوب مع الموبايل','فورم تواصل وزرار واتساب','أساسيات SEO','تعديل واحد بعد التسليم'],
          en:['One landing page','Mobile-responsive design','Contact form and WhatsApp button','SEO basics','One revision after delivery']}},
  { id:'business', price:5500, cls:'pop', badge:true,
    name:{ar:'الأعمال', en:'Business'},
    for:{ar:'شركة أو براند محتاج حضور كامل على الإنترنت.', en:'A company or brand that needs a full web presence.'},
    feat:{ar:['لحد 6 صفحات','تصميم مخصص بهوية براندك','أنيميشن وتأثيرات حركة','عربي وإنجليزي ودارك مود','SEO وربط Google Analytics','تعديلين بعد التسليم'],
          en:['Up to 6 pages','Custom design in your brand identity','Animations and motion effects','Arabic, English and dark mode','SEO and Google Analytics','Two revisions after delivery']}},
  { id:'store', price:12000, cls:'',
    name:{ar:'المتجر', en:'Store'},
    for:{ar:'عايز تبيع منتجاتك أونلاين وتستقبل مدفوعات.', en:'You want to sell products online and accept payments.'},
    feat:{ar:['متجر إلكتروني كامل','عرض المنتجات والسلة','تسجيل دخول للعملاء','ربط طرق الدفع (أورانج كاش وغيره)','لوحة متابعة الطلبات','3 تعديلات بعد التسليم'],
          en:['Complete online store','Product catalog and cart','Customer login','Payment methods (Orange Cash and more)','Order tracking dashboard','Three revisions after delivery']}},
  { id:'elite', price:25000, cls:'elite',
    name:{ar:'النخبة', en:'Elite'},
    for:{ar:'نظام أو تطبيق ويب مبني خصيصًا لفكرتك.', en:'A web system or app built specifically for your idea.'},
    feat:{ar:['نظام ويب مخصص بالكامل','قاعدة بيانات ولوحة تحكم','صلاحيات مستخدمين وتسجيل دخول متقدم','ربط API وخدمات خارجية','دعم فني 3 شهور','أولوية في التنفيذ'],
          en:['Fully custom web system','Database and admin dashboard','User roles and advanced login','API and third-party integrations','3 months of technical support','Priority delivery']}}
];

const T = {
ar:{
  nav_packages:'الباقات',nav_process:'طريقة الشراء',nav_payments:'طرق الدفع',nav_faq:'أسئلة شائعة',
  login:'تسجيل الدخول',logout:'خروج',register:'حساب جديد',
  hero_h1:'نصمم ونبرمج موقعك، وإنت تختار الباقة بس.',
  hero_p:'اختار الباقة اللي تناسب شغلك، ادفع ديبوزت 50%، وكلمنا على واتساب ونبدأ علطول.',
  cta1:'شوف الباقات',cta2:'إزاي أشتري؟',
  chk1:'دفع مرة واحدة',chk2:'ديبوزت 50% بس',chk3:'تواصل مباشر على واتساب',live:'الموقع شغال',
  svc1_t:'تصميم',svc1_p:'واجهات تعبّر عن براندك وتشتغل على كل الشاشات.',
  svc2_t:'برمجة',svc2_p:'كود نضيف وسريع، من صفحة واحدة لحد نظام كامل.',
  svc3_t:'ابتكار',svc3_p:'تفاصيل وأنيميشن بتفرّق موقعك عن باقي المنافسين.',
  pk_title:'اختار باقتك',pk_sub:'كل باقة بتتدفع مرة واحدة، من غير اشتراكات شهرية.',
  notice_t:'تنويه مهم',
  notice_p:'الديبوزت هو 50% من سعر الباقة. بعد ما تدفعه، كلمنا على واتساب ونبدأ الشغل، والـ50% الباقيين بنتفق على ميعادهم معاك.',
  best_for:'مناسبة لـ',one_time:'دفعة واحدة',dep_now:'الديبوزت دلوقتي (50%)',buy:'اشتري الباقة',popular:'الأكثر طلبًا',
  pr_title:'إزاي تشتري؟',pr_sub:'أربع خطوات من اختيار الباقة لحد استلام موقعك.',
  s1_t:'اختار الباقة',s1_p:'قارن الباقات واختار اللي على قد شغلك.',
  s2_t:'ادفع الديبوزت 50%',s2_p:'بأي طريقة دفع متاحة، منها أورانج كاش.',
  s3_t:'كلمنا على واتساب',s3_p:'ابعت إيصال التحويل وتفاصيل موقعك.',
  s4_t:'نصمم ونسلّم',s4_p:'بنبني موقعك ونسلمهولك جاهز.',
  pm_title:'طرق الدفع',pm_sub:'كل التحويلات بتتأكد على واتساب قبل ما نبدأ الشغل.',
  pm_ready:'متاحة دلوقتي',pm_ask:'بياناتها على واتساب',
  faq_title:'أسئلة شائعة',
  q1:'ليه الديبوزت 50%؟',a1:'علشان نحجز مكانك في جدول الشغل ونبدأ التنفيذ. باقي المبلغ بنتفق عليه معاك.',
  q2:'أعمل إيه بعد ما أدفع؟',a2:'اضغط زرار واتساب في صفحة الدفع، وابعت إيصال التحويل وتفاصيل موقعك.',
  q3:'هل الدفع اشتراك شهري؟',a3:'لا، كل باقة بتتدفع مرة واحدة.',
  q4:'أقدر أطلب حاجة مش موجودة في الباقات؟',a4:'أكيد، كلمنا على واتساب ونظبط لك باقة على مقاس مشروعك.',
  fin_t:'جاهز نبدأ موقعك؟',fin_p:'ابعتلنا فكرتك على واتساب ونرد عليك بسرعة.',fin_btn:'كلمنا على واتساب',
  rights:'جميع الحقوق محفوظة.',
  lg_title:'أهلاً بيك في UR Studio',lg_sub:'سجّل دخولك علشان تكمّل شراء الباقة.',
  f_name:'الاسم',f_email:'الإيميل',f_pass:'كلمة السر',
  e_fill:'املأ كل الحقول.',e_mail:'اكتب إيميل صحيح.',e_pass:'كلمة السر لازم تكون 6 حروف على الأقل.',
  e_bad:'الإيميل أو كلمة السر غلط.',e_dup:'الإيميل ده مسجل قبل كده.',
  welcome:'أهلاً بيك',need_login:'سجّل دخولك الأول علشان تكمّل الشراء.',bye:'تم تسجيل الخروج.',
  co_title:'إتمام الشراء',co_sub:'ادفع الديبوزت وبعدها كمّل على واتساب.',
  co_deposit:'الديبوزت المطلوب (50%)',co_rest:'الباقي (بنتفق على ميعاده)',
  co_note:'الديبوزت هو 50% من سعر الباقة فقط.',
  co_choose:'اختار طريقة الدفع',co_pick:'اختار طريقة دفع علشان تظهر لك التفاصيل.',
  co_send:'حوّل {a} على الرقم التالي:',co_copy:'نسخ',co_copied:'اتنسخ الرقم',
  co_hint:'بعد التحويل ابعت صورة الإيصال على واتساب.',
  co_paid:'أنا حولت الديبوزت',co_wa:'أكمل على واتساب',co_wa_req:'اطلب بيانات الدفع على واتساب',
  co_nonum:'بيانات الدفع بالطريقة دي بتتبعت لك على واتساب.',
  msg:(n,p,pr,d,m)=>`أهلاً UR Studio 👋\nأنا ${n}\nاشتريت باقة "${p}" بسعر ${pr}\nودفعت الديبوزت 50% (${d}) عن طريق ${m}.\nهبعتلك إيصال التحويل دلوقتي.`,
  msgReq:(n,p,pr,d,m)=>`أهلاً UR Studio 👋\nأنا ${n}\nعايز أشتري باقة "${p}" بسعر ${pr}\nوأدفع الديبوزت 50% (${d}) عن طريق ${m}.\nابعتلي بيانات الدفع من فضلك.`,
  msgGen:'أهلاً UR Studio 👋 عايز أستفسر عن موقع.'
},
en:{
  nav_packages:'Packages',nav_process:'How it works',nav_payments:'Payments',nav_faq:'FAQ',
  login:'Log in',logout:'Log out',register:'Sign up',
  hero_h1:'We design and build your website. You just pick the package.',
  hero_p:'Choose the package that fits your business, pay a 50% deposit, then message us on WhatsApp and we start right away.',
  cta1:'View packages',cta2:'How buying works',
  chk1:'One-time payment',chk2:'Only a 50% deposit',chk3:'Direct WhatsApp contact',live:'Site is live',
  svc1_t:'Design',svc1_p:'Interfaces that express your brand and work on every screen.',
  svc2_t:'Develop',svc2_p:'Clean, fast code, from a single page to a complete system.',
  svc3_t:'Innovate',svc3_p:'Details and motion that set your site apart from competitors.',
  pk_title:'Choose your package',pk_sub:'Every package is a one-time payment. No monthly subscriptions.',
  notice_t:'Important notice',
  notice_p:'The deposit is 50% of the package price. After you pay it, message us on WhatsApp and we start working. We agree on the remaining 50% with you directly.',
  best_for:'Best for:',one_time:'One-time payment',dep_now:'Deposit now (50%)',buy:'Buy this package',popular:'Most requested',
  pr_title:'How buying works',pr_sub:'Four steps from picking a package to receiving your website.',
  s1_t:'Pick a package',s1_p:'Compare the packages and choose the one that fits.',
  s2_t:'Pay the 50% deposit',s2_p:'With any available payment method, including Orange Cash.',
  s3_t:'Message us on WhatsApp',s3_p:'Send your payment receipt and your website details.',
  s4_t:'We build and deliver',s4_p:'We build your website and hand it over ready to launch.',
  pm_title:'Payment methods',pm_sub:'Every transfer is confirmed on WhatsApp before we start working.',
  pm_ready:'Available now',pm_ask:'Details on WhatsApp',
  faq_title:'Frequently asked questions',
  q1:'Why is the deposit 50%?',a1:'It reserves your spot in our schedule so we can start building. We agree on the remaining amount with you.',
  q2:'What do I do after I pay?',a2:'Tap the WhatsApp button in the checkout window, then send your receipt and your website details.',
  q3:'Is this a monthly subscription?',a3:'No. Each package is paid once.',
  q4:'Can I ask for something that is not in the packages?',a4:'Of course. Message us on WhatsApp and we will shape a package around your project.',
  fin_t:'Ready to start your website?',fin_p:'Send us your idea on WhatsApp and we will reply quickly.',fin_btn:'Chat on WhatsApp',
  rights:'All rights reserved.',
  lg_title:'Welcome to UR Studio',lg_sub:'Log in to continue buying your package.',
  f_name:'Name',f_email:'Email',f_pass:'Password',
  e_fill:'Fill in all fields.',e_mail:'Enter a valid email.',e_pass:'Password must be at least 6 characters.',
  e_bad:'Wrong email or password.',e_dup:'This email is already registered.',
  welcome:'Welcome',need_login:'Log in first to continue your purchase.',bye:'Logged out.',
  co_title:'Checkout',co_sub:'Pay the deposit, then continue on WhatsApp.',
  co_deposit:'Deposit due (50%)',co_rest:'Remaining (date agreed with you)',
  co_note:'The deposit is only 50% of the package price.',
  co_choose:'Choose a payment method',co_pick:'Choose a payment method to see its details.',
  co_send:'Transfer {a} to this number:',co_copy:'Copy',co_copied:'Number copied',
  co_hint:'After transferring, send the receipt screenshot on WhatsApp.',
  co_paid:'I have sent the deposit',co_wa:'Continue on WhatsApp',co_wa_req:'Get payment details on WhatsApp',
  co_nonum:'Payment details for this method are sent to you on WhatsApp.',
  msg:(n,p,pr,d,m)=>`Hello UR Studio 👋\nI'm ${n}\nI purchased the "${p}" package (${pr})\nand paid the 50% deposit (${d}) via ${m}.\nI'm sending the transfer receipt now.`,
  msgReq:(n,p,pr,d,m)=>`Hello UR Studio 👋\nI'm ${n}\nI'd like to buy the "${p}" package (${pr})\nand pay the 50% deposit (${d}) via ${m}.\nPlease send me the payment details.`,
  msgGen:'Hello UR Studio 👋 I have a question about a website.'
}};

/* ===================== helpers ===================== */
const $=s=>document.querySelector(s), $$=s=>[...document.querySelectorAll(s)];
const mem={};
const store={
  get(k){try{const v=localStorage.getItem(k);return v===null?(mem[k]??null):v}catch(e){return mem[k]??null}},
  set(k,v){mem[k]=v;try{localStorage.setItem(k,v)}catch(e){}},
  del(k){delete mem[k];try{localStorage.removeItem(k)}catch(e){}}
};
let lang = store.get('ur_lang') || 'ar';
const t=k=>T[lang][k] ?? k;
const fmt=n=>Number(n).toLocaleString('en-US');
const cur=()=>lang==='ar'?'ج.م':'EGP';
const money=n=>`${fmt(n)} ${cur()}`;
const CHECK='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>';
const WA_ICON='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.4 8.4 0 0 1-12.4 7.4L3 20.5l1.7-5.4A8.4 8.4 0 1 1 21 11.5z"/></svg>';

let toastTimer;
function toast(msg){const el=$('#toast');el.textContent=msg;el.classList.add('show');clearTimeout(toastTimer);toastTimer=setTimeout(()=>el.classList.remove('show'),2600)}

/* ===================== language ===================== */
function applyLang(){
  const html=document.documentElement;
  html.lang=lang; html.dir=lang==='ar'?'rtl':'ltr';
  $$('[data-i18n]').forEach(el=>el.textContent=t(el.dataset.i18n));
  $('#langBtn').textContent = lang==='ar'?'EN':'عربي';
  $('#langBtn').setAttribute('aria-label', lang==='ar'?'Switch to English':'التبديل للعربية');
  document.title = lang==='ar'?'UR Studio | متجر المواقع الجاهزة':'UR Studio | Website Store';
  $('#waFloat').href=$('#finWa').href=`https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(t('msgGen'))}`;
  setAuthMode(authMode);
  renderPlans(); renderMethods(); renderUser();
  if($('#coDlg').open) renderCheckout();
}
$('#langBtn').onclick=()=>{lang=lang==='ar'?'en':'ar';store.set('ur_lang',lang);applyLang()};

/* ===================== theme ===================== */
$('#themeBtn').onclick=()=>{
  const d=document.documentElement, n=d.dataset.theme==='dark'?'light':'dark';
  d.dataset.theme=n; store.set('ur_theme',n);
  document.querySelector('meta[name=theme-color]').content = n==='dark'?'#050a1f':'#f3f7ff';
};

/* ===================== plans & methods ===================== */
function renderPlans(){
  $('#plans').innerHTML = PLANS.map(p=>{
    const dep=p.price*CONFIG.depositRate;
    return `<article class="plan ${p.cls}">
      ${p.badge?`<span class="badge">${t('popular')}</span>`:''}
      <h3>${p.name[lang]}</h3>
      <p class="for"><b>${t('best_for')}</b> ${p.for[lang]}</p>
      <div class="price"><span class="amt">${fmt(p.price)}</span><span class="cur">${cur()}</span></div>
      <p class="once">${t('one_time')}</p>
      <div class="dep"><span>${t('dep_now')}</span><b>${money(dep)}</b></div>
      <ul class="feat">${p.feat[lang].map(f=>`<li>${CHECK}<span>${f}</span></li>`).join('')}</ul>
      <button class="btn ${p.cls==='elite'?'btn-gold':'btn-primary'} wide buy" data-id="${p.id}">${t('buy')}</button>
    </article>`;
  }).join('');
  $$('#plans .plan').forEach(el=>{el.classList.add('rv');requestAnimationFrame(()=>io.observe(el))});
}
$('#plans').addEventListener('click',e=>{const b=e.target.closest('.buy');if(b)openCheckout(b.dataset.id)});
$('#plans').addEventListener('pointermove',e=>{
  const c=e.target.closest('.plan'); if(!c)return; const r=c.getBoundingClientRect();
  c.style.setProperty('--mx',(e.clientX-r.left)+'px'); c.style.setProperty('--my',(e.clientY-r.top)+'px');
});
function renderMethods(){
  $('#methods').innerHTML = CONFIG.methods.map(m=>`
    <div class="method" style="--mc:${m.color}"><span class="mark">${m.mark}</span><span>${m.name[lang]}</span><small>${m.number?t('pm_ready'):t('pm_ask')}</small></div>`).join('');
}

/* ===================== auth (واجهة تجريبية - تحتاج باك إند للإنتاج) ===================== */
let authMode='in', pendingPlan=null;
const loginDlg=$('#loginDlg');
const users=()=>{try{return JSON.parse(store.get('ur_users')||'[]')}catch(e){return []}};
const session=()=>{const e=store.get('ur_session');return e?users().find(u=>u.email===e)||null:null};
async function sha(s){
  if(window.crypto&&crypto.subtle){const b=await crypto.subtle.digest('SHA-256',new TextEncoder().encode(s));return [...new Uint8Array(b)].map(x=>x.toString(16).padStart(2,'0')).join('')}
  return btoa(unescape(encodeURIComponent(s)));
}
function setAuthMode(m){
  authMode=m;
  $('#tabIn').classList.toggle('on',m==='in'); $('#tabUp').classList.toggle('on',m==='up');
  $('#fName').hidden = m==='in';
  $('#authSubmit').textContent = m==='in'?t('login'):t('register');
  $('#inPass').autocomplete = m==='in'?'current-password':'new-password';
  $('#authErr').textContent='';
}
$('#tabIn').onclick=()=>setAuthMode('in'); $('#tabUp').onclick=()=>setAuthMode('up');
function openLogin(){setAuthMode('in');loginDlg.showModal();setTimeout(()=>$('#inEmail').focus(),50)}
$('#loginBtn').onclick=()=>{pendingPlan=null;openLogin()};
$('#logoutBtn').onclick=()=>{store.del('ur_session');renderUser();toast(t('bye'))};
function renderUser(){
  const u=session();
  $('#userBox').hidden=!u; $('#loginBtn').hidden=!!u;
  if(u){$('#av').textContent=(u.name||'?').trim().charAt(0).toUpperCase();$('#uname').textContent=u.name}
}
$('#authForm').addEventListener('submit',async e=>{
  e.preventDefault();
  const name=$('#inName').value.trim(), email=$('#inEmail').value.trim().toLowerCase(), pass=$('#inPass').value;
  const err=m=>$('#authErr').textContent=t(m);
  if(!email||!pass||(authMode==='up'&&!name)) return err('e_fill');
  if(!/^\S+@\S+\.\S+$/.test(email)) return err('e_mail');
  const list=users(), h=await sha(pass);
  let user;
  if(authMode==='up'){
    if(pass.length<6) return err('e_pass');
    if(list.some(u=>u.email===email)) return err('e_dup');
    user={name,email,hash:h}; list.push(user); store.set('ur_users',JSON.stringify(list));
  }else{
    user=list.find(u=>u.email===email&&u.hash===h);
    if(!user) return err('e_bad');
  }
  store.set('ur_session',user.email);
  loginDlg.close(); e.target.reset(); renderUser();
  toast(`${t('welcome')} ${user.name} 👋`);
  if(pendingPlan){const id=pendingPlan;pendingPlan=null;openCheckout(id)}
});

/* ===================== checkout ===================== */
const coDlg=$('#coDlg');
let plan=null, method=null, paid=false, currentOrderId=null;
function openCheckout(id){
  if(!session()){pendingPlan=id;openLogin();toast(t('need_login'));return}
  plan=PLANS.find(p=>p.id===id); method=null; paid=false; currentOrderId=null;
  renderCheckout(); coDlg.showModal();
}
function renderCheckout(){
  const dep=plan.price*CONFIG.depositRate;
  $('#coBody').innerHTML=`
    <div class="sum">
      <div class="sum-h"><span>${plan.name[lang]}</span><b>${money(plan.price)}</b></div>
      <div class="sum-dep"><span>${t('co_deposit')}</span><b>${money(dep)}</b></div>
      <div class="sum-r"><span>${t('co_rest')}</span><b>${money(plan.price-dep)}</b></div>
    </div>
    <p class="note">${t('co_note')}</p>
    <h4>${t('co_choose')}</h4>
    <div class="mgrid">${CONFIG.methods.map(m=>`<button type="button" class="mth ${method&&method.id===m.id?'on':''}" data-m="${m.id}" style="--mc:${m.color}"><i>${m.mark}</i><span>${m.name[lang]}</span></button>`).join('')}</div>
    <div id="coDetail"></div>`;
  renderDetail();
}
function renderDetail(){
  const box=$('#coDetail'), dep=plan.price*CONFIG.depositRate;
  let html='';
  if(!method){
    html=`<div class="pay"><p>${t('co_pick')}</p></div>
          <a class="btn btn-wa wide" id="waBtn" aria-disabled="true">${WA_ICON}${t('co_wa')}</a>`;
  }else if(method.number){
    html=`<div class="pay">
            <p>${t('co_send').replace('{a}',`<b>${money(dep)}</b>`)}</p>
            <div class="numrow"><span class="num">${method.number}</span><button type="button" class="copy" id="copyBtn">${t('co_copy')}</button></div>
            <p>${t('co_hint')}</p>
            <label class="chk"><input type="checkbox" id="paidChk" ${paid?'checked':''}><span>${t('co_paid')}</span></label>
          </div>
          <a class="btn btn-wa wide" id="waBtn" target="_blank" rel="noopener">${WA_ICON}${t('co_wa')}</a>`;
  }else{
    html=`<div class="pay"><p>${t('co_nonum')}</p></div>
          <a class="btn btn-wa wide" id="waBtn" target="_blank" rel="noopener">${WA_ICON}${t('co_wa_req')}</a>`;
  }
  box.innerHTML=html; updateWa();
}
function waLink(){
  const u=session(), dep=plan.price*CONFIG.depositRate, L=T[lang];
  const f=method.number?L.msg:L.msgReq;
  const text=f(u.name,plan.name[lang],money(plan.price),money(dep),method.name[lang]);
  return `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(text)}`;
}
function updateWa(){
  const a=$('#waBtn'); if(!a)return;
  const ok = method && (!method.number || paid);
  if(ok){a.href=waLink();a.removeAttribute('aria-disabled')}
  else{a.removeAttribute('href');a.setAttribute('aria-disabled','true')}
}
coDlg.addEventListener('click',e=>{
  const m=e.target.closest('.mth');
  if(m){
    method=CONFIG.methods.find(x=>x.id===m.dataset.m); paid=false;
    $$('.mth').forEach(b=>b.classList.toggle('on',b===m)); renderDetail(); return;
  }
  if(e.target.closest('#copyBtn')){
    try{navigator.clipboard.writeText(method.number)}catch(err){}
    toast(t('co_copied'));
  }
});
function saveOrderRequest(){
  if(currentOrderId) return currentOrderId;
  const u=session(); if(!u||!plan||!method) return null;
  const orders=(()=>{try{return JSON.parse(store.get('ur_orders')||'[]')}catch(e){return []}})();
  const id='UR-'+Date.now().toString(36).toUpperCase();
  const deposit=Math.round(plan.price*CONFIG.depositRate);
  orders.unshift({id,customerName:u.name,email:u.email,planId:plan.id,planName:plan.name[lang],total:Number(plan.price),deposit,remaining:Number(plan.price)-deposit,paymentMethod:method.name[lang],paymentStatus:'pending_verification',orderStatus:'new',createdAt:new Date().toISOString(),currency:'EGP'});
  store.set('ur_orders',JSON.stringify(orders)); currentOrderId=id; return id;
}
coDlg.addEventListener('change',e=>{if(e.target.id==='paidChk'){paid=e.target.checked;if(paid){const id=saveOrderRequest();if(id)toast(lang==='ar'?'تم تسجيل طلب مراجعة التحويل':'Transfer review request saved')}updateWa()}});

/* dialogs: close buttons + click on backdrop */
$$('dialog').forEach(d=>{
  d.addEventListener('click',e=>{
    if(e.target.closest('[data-close]')) return d.close();
    const r=d.getBoundingClientRect();
    if(e.target===d && (e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)) d.close();
  });
});

/* ===================== misc ===================== */
$('#burger').onclick=()=>$('#nav').classList.toggle('open');
$$('#nav a').forEach(a=>a.addEventListener('click',()=>$('#nav').classList.remove('open')));
addEventListener('scroll',()=>$('#hdr').classList.toggle('scrolled',scrollY>10),{passive:true});
$('#yr').textContent=new Date().getFullYear();

const io=new IntersectionObserver(es=>es.forEach(en=>{if(en.isIntersecting){en.target.classList.add('in');io.unobserve(en.target)}}),{threshold:.12});
$$('.rv').forEach(el=>io.observe(el));

applyLang();