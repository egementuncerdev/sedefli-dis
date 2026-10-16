/* ==========================================================================
   Sedefli Diş — bütün içerik burada (TR + EN).
   Sedefli Diş kurgusal bir kliniktir; hekimler, adres ve telefon gerçek değildir.

   Sağlık reklamı kuralları gözetilerek yazıldı:
   - "en iyi", "garantili", "ağrısız", "kesin sonuç" gibi iddialar yok
   - fiyat, kampanya, öncesi/sonrası görseli ve hasta yorumu yok
   - tedavi bilgisi genel bilgilendirmedir; kararı muayene sonrası hekim verir
   ========================================================================== */

export const clinic = {
  name: 'Sedefli Diş',
  legal: { tr: 'Sedefli Ağız ve Diş Sağlığı Polikliniği', en: 'Sedefli Oral and Dental Health Clinic' },
  url: 'https://klinik.egementuncer.dev',
  demo: true, // true iken: noindex + her sayfada demo şeridi
  author: { name: 'Egemen Tuncer', url: 'https://egementuncer.dev' },
  phone: '+902120000000',
  phoneDisplay: '0 (212) 000 00 00',
  email: 'merhaba@sedefli.example',
  address: {
    street: { tr: 'Sedef Sokak No: 7, Örnek Mahallesi', en: '7 Sedef Street, Örnek Neighbourhood' },
    city: 'İstanbul',
    country: 'TR'
  },
  // 0 = Pazar … 6 = Cumartesi; null = kapalı
  hours: [null, ['09:00', '19:00'], ['09:00', '19:00'], ['09:00', '19:00'], ['09:00', '19:00'], ['09:00', '19:00'], ['10:00', '16:00']],
  timezone: 'Europe/Istanbul'
};

/* --------------------------------------------------------------------------
   Fotoğraflar — Unsplash License (ücretsiz, ticari kullanım serbest).
   Dosyalar: public/img/<ad>-640|1200.avif|webp  (üretici: scripts/photos.mjs)
   Not: Fotoğraflar kurgusal hekimlerimizin portresi olarak KULLANILMAZ.
   -------------------------------------------------------------------------- */
export const photos = {
  hero: { size: [2000, 1500], by: ['Harold Hisona', 'harold_angus'], alt: { tr: 'Diş hekimi, aydınlık bir muayene odasında hastasıyla konuşuyor', en: 'A dentist talking with a patient in a bright treatment room' } },
  'clinic-room': { size: [1600, 1070], by: ['Benyamin Bohlouli', 'benyamin_bohlouli'], alt: { tr: 'Modern bir muayene odası: diş ünitesi, dolaplar ve geniş tezgâh', en: 'A modern treatment room with a dental unit, cabinets and a long counter' } },
  'clinic-chair': { size: [1600, 2400], by: ['Katarzyna Zygnerska', 'katasha'], alt: { tr: 'Pencere önünde beyaz bir diş koltuğu', en: 'A white dental chair by a window' } },
  'clinic-waiting': { size: [1600, 1872], by: ['Amy Vosters', 'amyvosters'], alt: { tr: 'Sandalyeler ve bitkiyle sade bir bekleme salonu', en: 'A simple waiting room with chairs and a plant' } },
  hygiene: { size: [1600, 2400], by: ['syahmi syahir', 'subspace_stills'], alt: { tr: 'Mavi eldivenli elde tutulan steril diş aletleri', en: 'Sterile dental instruments held in a blue-gloved hand' } },
  'xray-monitor': { size: [1600, 1067], by: ['Fr0ggy5', 'fr0ggy5_fr0ggy5'], alt: { tr: 'Klinikte monitörde görüntülenen dijital diş röntgeni', en: 'A digital dental X-ray displayed on a monitor in a clinic' } },
  implant: { size: [1600, 1067], by: ['Platinum Dental Care', 'platinumdentalcare'], alt: { tr: 'Çene kemiğindeki implant vidası ve kronu gösteren model', en: 'A model showing an implant post and crown in the jawbone' } },
  aligner: { size: [1600, 1200], by: ['Harold Hisona', 'harold_angus'], alt: { tr: 'Şeffaf plağını dişlerine yerleştiren bir kadın', en: 'A woman fitting a clear aligner onto her teeth' } },
  canal: { size: [1600, 1067], by: ['Jonathan Borba', 'jonathanborba'], alt: { tr: 'Işıklı panoda diş röntgenlerini inceleyen bir diş hekimi', en: 'A dentist reviewing dental X-rays on a light box' } },
  whitening: { size: [1600, 2400], by: ['Tony Litvyak', 'justatony'], alt: { tr: 'Beyaz dişlerle gülümseyen bir yüzün yakın çekimi', en: 'Close-up of a smile with white teeth' } },
  crown: { size: [1600, 1067], by: ['Jonathan Borba', 'jonathanborba'], alt: { tr: 'Kron ve implant modelleri', en: 'Crown and implant models' } },
  kids: { size: [1600, 1065], by: ['Navy Medicine', 'navymedicine'], alt: { tr: 'Bir çocuğun dişlerini muayene eden diş hekimi', en: 'A dentist examining a child’s teeth' } },
  approach: { size: [1600, 2400], by: ['Jonathan Borba', 'jonathanborba'], alt: { tr: 'Koruyucu ekipmanla tedavi yapan iki diş hekimi', en: 'Two dentists in protective gear treating a patient' } }
};

/* --------------------------------------------------------------------------
   Hekimler (kurgusal)
   -------------------------------------------------------------------------- */
export const doctors = [
  {
    id: 'selin',
    name: 'Uzm. Dt. Selin Karaca',
    initials: 'SK',
    tone: 1,
    title: { tr: 'Ağız, Diş ve Çene Cerrahisi Uzmanı', en: 'Oral and Maxillofacial Surgeon' },
    focus: { tr: ['İmplant', 'Diş çekimi ve cerrahi işlemler', 'Kemik tozu uygulamaları'], en: ['Dental implants', 'Extractions and oral surgery', 'Bone grafting'] },
    bio: {
      tr: 'Eksik dişlerin implantla tamamlanması ve cerrahi işlemler üzerine çalışır. Her tedaviden önce röntgen ve muayeneyle planı hastasıyla birlikte, adım adım konuşmayı önemser.',
      en: 'Works on replacing missing teeth with implants and on surgical procedures. Before every treatment she goes through the plan with the patient step by step, based on X-rays and examination.'
    },
    langs: { tr: 'Türkçe, İngilizce', en: 'Turkish, English' }
  },
  {
    id: 'mert',
    name: 'Uzm. Dt. Mert Yalın',
    initials: 'MY',
    tone: 2,
    title: { tr: 'Ortodonti Uzmanı', en: 'Orthodontist' },
    focus: { tr: ['Şeffaf plak tedavisi', 'Braketli tedavi', 'Yetişkin ortodontisi'], en: ['Clear aligners', 'Braces', 'Adult orthodontics'] },
    bio: {
      tr: 'Çapraşık dişler ve kapanış bozuklukları için çocuk ve yetişkinlerde ortodontik tedavi planlar. Dijital ağız içi tarama ile tedavinin seyrini hastasına ekranda gösterir.',
      en: 'Plans orthodontic treatment for crowded teeth and bite problems in children and adults. Uses digital intraoral scans to show patients how their treatment is expected to progress.'
    },
    langs: { tr: 'Türkçe, İngilizce, Almanca', en: 'Turkish, English, German' }
  },
  {
    id: 'deniz',
    name: 'Dt. Deniz Aksoy',
    initials: 'DA',
    tone: 3,
    title: { tr: 'Diş Hekimi · Kanal tedavisi ve estetik', en: 'Dentist · Root canal and aesthetic dentistry' },
    focus: { tr: ['Kanal tedavisi', 'Zirkonyum kaplama', 'Diş beyazlatma', 'Dolgu'], en: ['Root canal treatment', 'Zirconia crowns', 'Teeth whitening', 'Fillings'] },
    bio: {
      tr: 'Dişi mümkün olduğunca korumayı hedefleyen tedaviler üzerine çalışır. Estetik işlemlerde doğal görünümü ve dişin uzun vadeli sağlığını birlikte gözetir.',
      en: 'Focuses on treatments that preserve the natural tooth wherever possible. In aesthetic work she balances a natural look with the long-term health of the tooth.'
    },
    langs: { tr: 'Türkçe, İngilizce', en: 'Turkish, English' }
  },
  {
    id: 'ece',
    name: 'Uzm. Dt. Ece Tan',
    initials: 'ET',
    tone: 4,
    title: { tr: 'Pedodonti (Çocuk Diş Hekimliği) Uzmanı', en: 'Paediatric Dentist' },
    focus: { tr: ['Çocuklarda ilk muayene', 'Fissür örtücü ve flor', 'Süt dişi tedavileri'], en: ['First check-ups for children', 'Fissure sealants and fluoride', 'Milk tooth treatment'] },
    bio: {
      tr: 'Çocukların diş hekimiyle ilk deneyimlerinin sakin ve oyun gibi geçmesine özen gösterir. Ailelere evde ağız bakımı için pratik öneriler verir.',
      en: 'Makes sure children’s first visits feel calm and playful. Gives parents practical advice on oral care at home.'
    },
    langs: { tr: 'Türkçe', en: 'Turkish' }
  }
];

/* --------------------------------------------------------------------------
   Tedaviler
   icon: templates.mjs içindeki ICONS anahtarı
   -------------------------------------------------------------------------- */
export const treatments = [
  {
    id: 'implant',
    photo: 'implant',
    icon: 'implant',
    doctor: 'selin',
    slug: { tr: 'implant', en: 'dental-implants' },
    name: { tr: 'İmplant', en: 'Dental implants' },
    short: {
      tr: 'Eksik dişlerin yerine çene kemiğine yerleştirilen titanyum vida ve üzerine yapılan kron ile kalıcı çözüm.',
      en: 'A titanium post placed in the jawbone with a crown on top, as a lasting replacement for missing teeth.'
    },
    intro: {
      tr: 'İmplant, kaybedilen dişin kökü yerine çene kemiğine yerleştirilen küçük bir titanyum vidadır. Kemikle kaynaştıktan sonra üzerine diş (kron) yapılır. Komşu dişlere dokunmadan tek bir dişi, birden fazla dişi ya da tüm çeneyi desteklemek için kullanılabilir.',
      en: 'An implant is a small titanium post placed in the jawbone in place of a lost tooth’s root. Once it has fused with the bone, a crown is fitted on top. It can replace a single tooth, several teeth or support a full arch without touching the neighbouring teeth.'
    },
    forWhom: {
      tr: ['Bir ya da birden fazla dişi eksik olanlar', 'Hareketli protezden rahatsız olanlar', 'Kemik yapısı ve genel sağlığı uygun olanlar (muayene ve röntgenle belirlenir)'],
      en: ['People missing one or more teeth', 'People uncomfortable with removable dentures', 'People whose bone and general health are suitable (assessed by examination and X-ray)']
    },
    steps: {
      tr: [
        { t: 'Muayene ve görüntüleme', d: 'Ağız içi muayene ve gerekli röntgenlerle kemik yapısı değerlendirilir, tedavi planı çıkarılır.' },
        { t: 'İmplantın yerleştirilmesi', d: 'Lokal anestezi altında implant kemiğe yerleştirilir. İşlem genellikle tek seansta tamamlanır.' },
        { t: 'İyileşme süreci', d: 'İmplantın kemikle kaynaşması için genellikle 2–4 ay beklenir. Bu sürede geçici çözümler kullanılabilir.' },
        { t: 'Kalıcı diş', d: 'Ölçü ya da dijital tarama alınır, implantın üzerine kalıcı kron yerleştirilir.' }
      ],
      en: [
        { t: 'Examination and imaging', d: 'An oral examination and the necessary X-rays are used to assess the bone and draw up a treatment plan.' },
        { t: 'Placing the implant', d: 'The implant is placed in the bone under local anaesthesia, usually in a single session.' },
        { t: 'Healing', d: 'It usually takes 2–4 months for the implant to fuse with the bone. Temporary solutions can be used in the meantime.' },
        { t: 'Final tooth', d: 'An impression or digital scan is taken and the final crown is fitted on the implant.' }
      ]
    },
    duration: { tr: 'Genellikle 3–6 ay (iyileşme dahil)', en: 'Usually 3–6 months (including healing)' },
    visits: { tr: '3–5 ziyaret', en: '3–5 visits' },
    care: {
      tr: ['İşlem sonrası ilk gün sıcak ve sert yiyeceklerden kaçının.', 'Hekiminizin önerdiği ağız gargarası ve ilaçları düzenli kullanın.', 'Doğal dişleriniz gibi günde iki kez fırçalayın, arayüz fırçası kullanın.', 'Yılda en az bir kez kontrole gelin.'],
      en: ['Avoid hot and hard foods on the first day after the procedure.', 'Use the mouthwash and medication your dentist recommends.', 'Brush twice a day as you would natural teeth, and use interdental brushes.', 'Come in for a check-up at least once a year.']
    },
    faq: {
      tr: [
        { q: 'İmplant işlemi sırasında bir şey hisseder miyim?', a: 'İşlem lokal anestezi altında yapılır. Sonrasında birkaç gün hafif hassasiyet olabilir; hekiminiz bunun için öneride bulunur.' },
        { q: 'Herkese implant yapılabilir mi?', a: 'Kemik miktarı, genel sağlık durumu ve kullanılan ilaçlar değerlendirilir. Uygunluk muayene ve röntgen sonrası belirlenir.' },
        { q: 'Kemik yetersizse ne olur?', a: 'Bazı durumlarda kemik tozu (greft) gibi ek işlemlerle implant için uygun zemin hazırlanabilir. Hekiminiz seçenekleri sizinle konuşur.' }
      ],
      en: [
        { q: 'Will I feel anything during the procedure?', a: 'The procedure is done under local anaesthesia. You may feel mild tenderness for a few days afterwards; your dentist will advise you on this.' },
        { q: 'Can everyone have implants?', a: 'Bone volume, general health and medication are assessed. Suitability is decided after an examination and X-rays.' },
        { q: 'What if there is not enough bone?', a: 'In some cases additional procedures such as bone grafting can prepare a suitable base. Your dentist will talk you through the options.' }
      ]
    }
  },
  {
    id: 'aligner',
    photo: 'aligner',
    icon: 'aligner',
    doctor: 'mert',
    slug: { tr: 'seffaf-plak', en: 'clear-aligners' },
    name: { tr: 'Şeffaf plak (ortodonti)', en: 'Clear aligners' },
    short: {
      tr: 'Çapraşık dişleri ve kapanış sorunlarını, takıp çıkarılabilen şeffaf plaklarla adım adım düzeltme.',
      en: 'Straightening crowded teeth and bite problems step by step with removable, transparent aligners.'
    },
    intro: {
      tr: 'Şeffaf plak tedavisinde dişler, kişiye özel üretilen ve birkaç haftada bir değiştirilen ince plaklarla kademeli olarak hareket ettirilir. Plaklar yemek ve fırçalama sırasında çıkarılabilir; uygun vakalarda braketlere bir alternatiftir.',
      en: 'With clear aligners, teeth are moved gradually by thin, custom-made trays that are changed every few weeks. The aligners come out for eating and brushing, and are an alternative to braces in suitable cases.'
    },
    forWhom: {
      tr: ['Hafif ve orta düzeyde çapraşıklığı olanlar', 'Diş aralıkları (diastema) olanlar', 'Plakları günde 20–22 saat takabilecek yetişkin ve gençler'],
      en: ['People with mild to moderate crowding', 'People with gaps between teeth', 'Adults and teenagers able to wear aligners 20–22 hours a day']
    },
    steps: {
      tr: [
        { t: 'Muayene ve dijital tarama', d: 'Ağız içi tarayıcıyla dişlerin üç boyutlu modeli çıkarılır; ölçü maddesi kullanılmaz.' },
        { t: 'Tedavi planı', d: 'Dişlerin adım adım nasıl hareket edeceği bilgisayarda planlanır ve size ekranda gösterilir.' },
        { t: 'Plakların kullanımı', d: 'Plaklar günde 20–22 saat takılır ve genellikle 1–2 haftada bir yenisine geçilir.' },
        { t: 'Kontroller ve pekiştirme', d: '6–8 haftada bir kontrol yapılır. Tedavi sonunda dişlerin yerinde kalması için pekiştirme aparatı kullanılır.' }
      ],
      en: [
        { t: 'Examination and digital scan', d: 'An intraoral scanner creates a 3D model of your teeth, with no impression material.' },
        { t: 'Treatment plan', d: 'Each step of tooth movement is planned on screen and shown to you.' },
        { t: 'Wearing the aligners', d: 'Aligners are worn 20–22 hours a day and usually changed every 1–2 weeks.' },
        { t: 'Check-ups and retention', d: 'Check-ups every 6–8 weeks. At the end, a retainer keeps the teeth in place.' }
      ]
    },
    duration: { tr: 'Vakaya göre genellikle 6–18 ay', en: 'Usually 6–18 months depending on the case' },
    visits: { tr: '6–8 haftada bir kontrol', en: 'Check-up every 6–8 weeks' },
    care: {
      tr: ['Plakları su dışında bir şey yiyip içerken çıkarın.', 'Plakları takmadan önce dişlerinizi fırçalayın.', 'Plakları ılık suyla temizleyin; sıcak su şeklini bozabilir.', 'Kullanmadığınızda kutusunda saklayın.'],
      en: ['Take the aligners out when eating or drinking anything other than water.', 'Brush your teeth before putting them back in.', 'Clean them with lukewarm water; hot water can warp them.', 'Keep them in their case when not in use.']
    },
    faq: {
      tr: [
        { q: 'Plaklar dışarıdan belli olur mu?', a: 'Plaklar şeffaftır ve yakından bakılmadıkça genellikle fark edilmez. Bazı vakalarda dişlere küçük, diş renginde tutucular eklenir.' },
        { q: 'Konuşmamı etkiler mi?', a: 'İlk birkaç gün hafif bir peltekleşme olabilir; çoğu kişi kısa sürede alışır.' },
        { q: 'Her çapraşıklık plakla düzelir mi?', a: 'Hayır. Bazı vakalarda braketli tedavi daha uygun olabilir. Hangi yöntemin uygun olduğuna muayene sonrası birlikte karar verilir.' }
      ],
      en: [
        { q: 'Are the aligners noticeable?', a: 'They are transparent and usually not noticeable unless someone looks closely. Some cases need small tooth-coloured attachments.' },
        { q: 'Will they affect my speech?', a: 'You may lisp slightly for the first few days; most people adapt quickly.' },
        { q: 'Can every case be treated with aligners?', a: 'No. Braces may be better for some cases. The right method is decided together after an examination.' }
      ]
    }
  },
  {
    id: 'canal',
    photo: 'canal',
    icon: 'canal',
    doctor: 'deniz',
    slug: { tr: 'kanal-tedavisi', en: 'root-canal-treatment' },
    name: { tr: 'Kanal tedavisi', en: 'Root canal treatment' },
    short: {
      tr: 'Çürük ya da travma nedeniyle iltihaplanan diş sinirinin temizlenip kanalların doldurulmasıyla dişin korunması.',
      en: 'Saving a tooth by cleaning out an inflamed or infected nerve and sealing the root canals.'
    },
    intro: {
      tr: 'Derin çürük, çatlak ya da darbe sonucu dişin içindeki sinir ve damar dokusu (pulpa) iltihaplanabilir. Kanal tedavisinde bu doku temizlenir, kanallar şekillendirilip dezenfekte edilir ve sızdırmaz bir dolguyla kapatılır. Amaç dişi çekmeden ağızda tutabilmektir.',
      en: 'Deep decay, a crack or a knock can inflame the nerve and blood vessels inside a tooth (the pulp). Root canal treatment removes this tissue, shapes and disinfects the canals and seals them. The aim is to keep the tooth instead of extracting it.'
    },
    forWhom: {
      tr: ['Sıcak-soğuğa uzun süren hassasiyet ya da zonklayan ağrısı olanlar', 'Dişinde derin çürük ya da kırık olanlar', 'Diş etinde şişlik veya apse fark edenler'],
      en: ['People with lingering sensitivity to hot or cold, or throbbing pain', 'People with deep decay or a broken tooth', 'People who notice swelling or an abscess in the gum']
    },
    steps: {
      tr: [
        { t: 'Teşhis', d: 'Muayene ve röntgenle dişin ve kök ucunun durumu değerlendirilir.' },
        { t: 'Kanalların temizlenmesi', d: 'Lokal anestezi altında iltihaplı doku temizlenir, kanallar şekillendirilir ve yıkanır.' },
        { t: 'Kanal dolgusu', d: 'Kanallar sızdırmaz bir dolgu malzemesiyle kapatılır. Bazı dişlerde bu adım ikinci seansta yapılır.' },
        { t: 'Dişin onarımı', d: 'Dişin üst kısmı dolgu ya da gerekirse kaplama ile güçlendirilir.' }
      ],
      en: [
        { t: 'Diagnosis', d: 'Examination and X-rays are used to assess the tooth and the root tip.' },
        { t: 'Cleaning the canals', d: 'Under local anaesthesia the inflamed tissue is removed and the canals are shaped and rinsed.' },
        { t: 'Sealing', d: 'The canals are sealed with a filling material. For some teeth this is done in a second session.' },
        { t: 'Restoring the tooth', d: 'The crown of the tooth is rebuilt with a filling or, if needed, a cap.' }
      ]
    },
    duration: { tr: 'Genellikle 1–2 seans', en: 'Usually 1–2 sessions' },
    visits: { tr: 'Her seans 45–90 dakika', en: 'Each session 45–90 minutes' },
    care: {
      tr: ['Anestezinin etkisi geçene kadar yemek yemeyin.', 'Kalıcı onarım yapılana kadar o taraftan sert şeyler çiğnemeyin.', 'Birkaç gün hafif hassasiyet normaldir; artan ağrı ya da şişlikte kliniği arayın.'],
      en: ['Do not eat until the anaesthetic has worn off.', 'Avoid chewing hard foods on that side until the final restoration.', 'Mild tenderness for a few days is normal; call the clinic if pain or swelling increases.']
    },
    faq: {
      tr: [
        { q: 'Kanal tedavisi ağrılı mıdır?', a: 'Tedavi lokal anestezi altında yapılır. İşlemden sonra birkaç gün hafif hassasiyet olabilir.' },
        { q: 'Kanal tedavisi yapılan diş ne kadar dayanır?', a: 'İyi bir onarım ve düzenli bakımla uzun yıllar kullanılabilir. Dişin durumu ve bakım alışkanlıkları sonucu etkiler.' },
        { q: 'Dişi çektirmek daha mı kolay?', a: 'Kendi dişinizi korumak genellikle çiğneme ve komşu dişler açısından daha avantajlıdır. Seçenekleri hekiminizle birlikte değerlendirebilirsiniz.' }
      ],
      en: [
        { q: 'Is root canal treatment painful?', a: 'It is done under local anaesthesia. You may feel mild tenderness for a few days afterwards.' },
        { q: 'How long does a root-treated tooth last?', a: 'With a good restoration and regular care it can last many years. The tooth’s condition and your habits affect the outcome.' },
        { q: 'Wouldn’t extraction be easier?', a: 'Keeping your own tooth is usually better for chewing and for the neighbouring teeth. You can weigh the options with your dentist.' }
      ]
    }
  },
  {
    id: 'whitening',
    photo: 'whitening',
    icon: 'whitening',
    doctor: 'deniz',
    slug: { tr: 'dis-beyazlatma', en: 'teeth-whitening' },
    name: { tr: 'Diş beyazlatma', en: 'Teeth whitening' },
    short: {
      tr: 'Kahve, çay ve sigara gibi nedenlerle koyulaşan diş renginin hekim kontrolünde açılması.',
      en: 'Lightening teeth darkened by coffee, tea or smoking, under a dentist’s supervision.'
    },
    intro: {
      tr: 'Beyazlatma, diş minesine zarar vermeden dişin rengini birkaç ton açmayı hedefler. Klinikte tek seansta uygulanabildiği gibi, kişiye özel plaklarla evde de yapılabilir. Dolgu ve kaplamaların rengi beyazlatmayla değişmez; bu nedenle önce muayene yapılır.',
      en: 'Whitening aims to lighten tooth colour by a few shades without harming the enamel. It can be done in one session at the clinic or at home with custom trays. Fillings and crowns do not change colour, so an examination comes first.'
    },
    forWhom: {
      tr: ['Diş rengi zamanla koyulaşmış olanlar', 'Diş eti ve diş sağlığı uygun olanlar', 'Hamile ve emziren hastalara önerilmez'],
      en: ['People whose teeth have darkened over time', 'People with healthy teeth and gums', 'Not recommended during pregnancy or breastfeeding']
    },
    steps: {
      tr: [
        { t: 'Muayene ve temizlik', d: 'Çürük ve diş eti sorunları kontrol edilir; gerekirse önce diş taşı temizliği yapılır.' },
        { t: 'Renk tespiti', d: 'Başlangıç rengi kayıt altına alınır, beklentiler birlikte konuşulur.' },
        { t: 'Uygulama', d: 'Klinikte diş etleri korunarak beyazlatma jeli uygulanır ya da ev tipi plaklar hazırlanır.' },
        { t: 'Kontrol', d: 'Sonuç değerlendirilir, rengin korunması için öneriler verilir.' }
      ],
      en: [
        { t: 'Examination and cleaning', d: 'Decay and gum problems are checked; scaling is done first if needed.' },
        { t: 'Shade check', d: 'The starting shade is recorded and expectations are discussed.' },
        { t: 'Treatment', d: 'Whitening gel is applied at the clinic with the gums protected, or home trays are made.' },
        { t: 'Follow-up', d: 'The result is reviewed and you get tips on keeping the colour.' }
      ]
    },
    duration: { tr: 'Klinikte yaklaşık 1 saat · evde 1–2 hafta', en: 'About 1 hour in clinic · 1–2 weeks at home' },
    visits: { tr: '1–2 ziyaret', en: '1–2 visits' },
    care: {
      tr: ['İlk 48 saat kahve, çay, kola ve sigaradan uzak durun.', 'Geçici hassasiyet olabilir; hassas dişler için macun kullanabilirsiniz.', 'Düzenli diş taşı temizliği rengin korunmasına yardımcı olur.'],
      en: ['Avoid coffee, tea, cola and smoking for the first 48 hours.', 'Temporary sensitivity can occur; a sensitive-teeth toothpaste can help.', 'Regular scaling helps keep the colour.']
    },
    faq: {
      tr: [
        { q: 'Beyazlatma dişlere zarar verir mi?', a: 'Hekim kontrolünde ve uygun yoğunluktaki ürünlerle yapıldığında mineye kalıcı zarar vermesi beklenmez. Geçici hassasiyet görülebilir.' },
        { q: 'Sonuç ne kadar sürer?', a: 'Beslenme ve alışkanlıklara göre değişir. Renk zamanla bir miktar koyulaşabilir; gerekirse uygulama tekrarlanabilir.' },
        { q: 'Dolgularım da beyazlar mı?', a: 'Hayır. Ön dişlerde dolgu varsa, beyazlatma sonrası yeni renge uygun olarak yenilenmesi gerekebilir.' }
      ],
      en: [
        { q: 'Does whitening damage teeth?', a: 'When done under supervision with suitable products, it is not expected to permanently damage the enamel. Temporary sensitivity can occur.' },
        { q: 'How long does it last?', a: 'It depends on diet and habits. The colour may darken somewhat over time and the treatment can be repeated if needed.' },
        { q: 'Will my fillings whiten too?', a: 'No. Front fillings may need replacing afterwards to match the new shade.' }
      ]
    }
  },
  {
    id: 'crown',
    photo: 'crown',
    icon: 'crown',
    doctor: 'deniz',
    slug: { tr: 'zirkonyum-kaplama', en: 'zirconia-crowns' },
    name: { tr: 'Zirkonyum kaplama', en: 'Zirconia crowns' },
    short: {
      tr: 'Kırık, aşınmış ya da renklenmiş dişlerin, doğal görünümlü ve dayanıklı zirkonyum kaplamalarla onarılması.',
      en: 'Restoring broken, worn or discoloured teeth with natural-looking, durable zirconia crowns.'
    },
    intro: {
      tr: 'Zirkonyum, metal içermeyen, diş rengine yakın ve ışık geçirgenliği sayesinde doğal görünen bir kaplama malzemesidir. Kanal tedavisi görmüş, büyük dolgulu ya da kırık dişleri korumak ve estetiğini iyileştirmek için kullanılır.',
      en: 'Zirconia is a metal-free crown material close to natural tooth colour, with a translucency that looks natural. It is used to protect and improve the look of root-treated, heavily filled or broken teeth.'
    },
    forWhom: {
      tr: ['Kırık ya da çok aşınmış dişleri olanlar', 'Kanal tedavisi sonrası dişini güçlendirmesi gerekenler', 'Metal alerjisi olanlar ya da metal desteksiz kaplama isteyenler'],
      en: ['People with broken or heavily worn teeth', 'People who need to protect a tooth after root canal treatment', 'People with metal allergies or who want metal-free crowns']
    },
    steps: {
      tr: [
        { t: 'Muayene ve planlama', d: 'Dişlerin ve diş etinin durumu değerlendirilir, renk ve form birlikte planlanır.' },
        { t: 'Hazırlık ve ölçü', d: 'Dişler kaplama için hazırlanır, dijital tarama ya da ölçü alınır; geçici kaplama takılır.' },
        { t: 'Prova', d: 'Laboratuvarda hazırlanan kaplama ağızda denenir, renk ve uyum kontrol edilir.' },
        { t: 'Yapıştırma', d: 'Kaplama kalıcı olarak yapıştırılır, kapanış kontrol edilir.' }
      ],
      en: [
        { t: 'Examination and planning', d: 'Teeth and gums are assessed and shade and shape are planned together.' },
        { t: 'Preparation and scan', d: 'The teeth are prepared, a digital scan or impression is taken and temporary crowns are fitted.' },
        { t: 'Try-in', d: 'The lab-made crowns are tried in to check colour and fit.' },
        { t: 'Cementation', d: 'The crowns are cemented permanently and the bite is checked.' }
      ]
    },
    duration: { tr: 'Genellikle 1–2 hafta', en: 'Usually 1–2 weeks' },
    visits: { tr: '3–4 ziyaret', en: '3–4 visits' },
    care: {
      tr: ['Kaplamalı dişleri doğal dişler gibi fırçalayın ve diş ipi kullanın.', 'Kuruyemiş kırmak, şişe açmak gibi alışkanlıklardan kaçının.', 'Gece diş sıkıyorsanız hekiminize gece plağı hakkında danışın.'],
      en: ['Brush and floss crowned teeth like natural teeth.', 'Avoid habits like cracking nuts or opening bottles with your teeth.', 'If you grind your teeth at night, ask about a night guard.']
    },
    faq: {
      tr: [
        { q: 'Zirkonyum kaplama doğal görünür mü?', a: 'Zirkonyum ışığı doğal dişe benzer şekilde geçirir. Renk ve form, komşu dişlerle uyumlu olacak şekilde birlikte seçilir.' },
        { q: 'Kaplama için dişler ne kadar küçültülür?', a: 'Gereken miktar dişin durumuna göre değişir; mümkün olduğunca az doku kaldırmak hedeflenir. Hekiminiz bunu muayenede açıklar.' },
        { q: 'Kaplamalar ne kadar dayanır?', a: 'Ağız bakımı, diş sıkma gibi alışkanlıklar ve düzenli kontroller kullanım süresini doğrudan etkiler.' }
      ],
      en: [
        { q: 'Do zirconia crowns look natural?', a: 'Zirconia lets light through much like a natural tooth. Shade and shape are chosen together to match your other teeth.' },
        { q: 'How much is the tooth reduced?', a: 'It depends on the tooth; the aim is to remove as little as possible. Your dentist will explain at the examination.' },
        { q: 'How long do crowns last?', a: 'Oral hygiene, habits such as grinding and regular check-ups directly affect how long they last.' }
      ]
    }
  },
  {
    id: 'kids',
    photo: 'kids',
    icon: 'kids',
    doctor: 'ece',
    slug: { tr: 'cocuk-dis-hekimligi', en: 'paediatric-dentistry' },
    name: { tr: 'Çocuk diş hekimliği', en: 'Paediatric dentistry' },
    short: {
      tr: 'Bebeklikten ergenliğe çocukların diş sağlığı için muayene, koruyucu uygulamalar ve tedaviler.',
      en: 'Check-ups, preventive care and treatment for children’s teeth, from infancy to the teenage years.'
    },
    intro: {
      tr: 'Pedodonti, çocukların ağız ve diş sağlığıyla ilgilenen uzmanlık alanıdır. İlk muayene ilk diş çıktığında ya da en geç 1 yaşında önerilir. Amaç çürükleri önlemek, süt dişlerini korumak ve çocuğun diş hekimiyle güvene dayalı bir ilişki kurmasını sağlamaktır.',
      en: 'Paediatric dentistry focuses on children’s oral and dental health. A first visit is recommended when the first tooth appears or by the age of one. The aim is to prevent decay, protect milk teeth and help children build a trusting relationship with the dentist.'
    },
    forWhom: {
      tr: ['İlk dişi çıkmış bebekler ve küçük çocuklar', 'Süt dişlerinde çürük ya da ağrı olan çocuklar', 'Koruyucu uygulama (flor, fissür örtücü) için gelen aileler'],
      en: ['Babies with their first teeth and young children', 'Children with decay or pain in milk teeth', 'Families looking for preventive care (fluoride, sealants)']
    },
    steps: {
      tr: [
        { t: 'Tanışma', d: 'Çocuk koltuğu, aletleri ve odayı oyunla tanır; ilk ziyaretin amacı güven kazanmaktır.' },
        { t: 'Muayene', d: 'Dişler ve çene gelişimi kontrol edilir, gerekirse röntgen alınır.' },
        { t: 'Koruyucu uygulamalar', d: 'Uygun durumlarda flor vernik ve fissür örtücü uygulanır.' },
        { t: 'Aile ile değerlendirme', d: 'Beslenme ve fırçalama alışkanlıkları için evde uygulanacak öneriler konuşulur.' }
      ],
      en: [
        { t: 'Getting to know us', d: 'Your child explores the chair, instruments and room through play; the goal of the first visit is trust.' },
        { t: 'Examination', d: 'Teeth and jaw development are checked, with X-rays if needed.' },
        { t: 'Preventive care', d: 'Fluoride varnish and fissure sealants are applied where suitable.' },
        { t: 'Talking with parents', d: 'We discuss diet and brushing habits and give practical tips for home.' }
      ]
    },
    duration: { tr: 'İlk ziyaret yaklaşık 30 dakika', en: 'First visit about 30 minutes' },
    visits: { tr: '6 ayda bir kontrol önerilir', en: 'Check-ups every 6 months recommended' },
    care: {
      tr: ['İlk diş çıktığında fırçalamaya başlayın; yaşa uygun miktarda florürlü macun kullanın.', 'Gece biberonla şekerli içecek vermekten kaçının.', 'Çocuğunuz kendi fırçalayabilene kadar fırçalamaya yardım edin.'],
      en: ['Start brushing when the first tooth appears, with an age-appropriate amount of fluoride toothpaste.', 'Avoid giving sugary drinks in a bottle at night.', 'Help your child brush until they can do it well on their own.']
    },
    faq: {
      tr: [
        { q: 'Süt dişleri zaten düşecek, tedavi gerekir mi?', a: 'Evet. Süt dişleri çiğneme, konuşma ve alttan gelen kalıcı dişlere yer tutma açısından önemlidir. Çürükler ağrıya ve enfeksiyona yol açabilir.' },
        { q: 'Çocuğum çok korkuyor, ne yapmalıyım?', a: 'İlk ziyareti bir tanışma olarak planlıyoruz. Evde diş hekimini korkutucu bir şey olarak anlatmamak da çok yardımcı olur.' },
        { q: 'Fissür örtücü nedir?', a: 'Azı dişlerinin çiğneme yüzeyindeki derin oluklara uygulanan ince bir koruyucu tabakadır; çürük riskini azaltmaya yardımcı olur.' }
      ],
      en: [
        { q: 'Milk teeth fall out anyway — do they need treatment?', a: 'Yes. Milk teeth matter for chewing, speech and holding space for permanent teeth. Decay can cause pain and infection.' },
        { q: 'My child is very scared — what should I do?', a: 'We plan the first visit as a get-to-know-you. Not describing the dentist as something scary at home also helps a lot.' },
        { q: 'What is a fissure sealant?', a: 'A thin protective coating applied to the deep grooves of the back teeth; it helps reduce the risk of decay.' }
      ]
    }
  }
];

/* --------------------------------------------------------------------------
   Sayfa adresleri ve arayüz metinleri
   -------------------------------------------------------------------------- */
const tr = {
  lang: 'tr',
  locale: 'tr_TR',
  paths: {
    home: '/',
    treatments: '/tedaviler/',
    doctors: '/hekimlerimiz/',
    clinic: '/klinigimiz/',
    guide: '/hasta-rehberi/',
    contact: '/iletisim/',
    appointment: '/randevu/',
    privacy: '/kvkk/'
  },
  ui: {
    skip: 'İçeriğe geç',
    menu: 'Menü',
    close: 'Kapat',
    navLabel: 'Ana menü',
    langLabel: 'Dil seçimi',
    home: 'Ana sayfa',
    breadcrumb: 'Konum',
    book: 'Randevu al',
    call: 'Ara',
    openNow: 'Şu an açık',
    closedNow: 'Şu an kapalı',
    opensAt: (day, time) => `${day} ${time}’de açılır`,
    closesAt: (time) => `${time}’e kadar açık`,
    today: 'bugün',
    tomorrow: 'yarın',
    closed: 'Kapalı',
    days: ['Pazar', 'Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi'],
    daysShort: ['Paz', 'Pzt', 'Sal', 'Çar', 'Per', 'Cum', 'Cmt'],
    months: ['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran', 'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık'],
    demoBar: 'Demo proje: Sedefli Diş kurgusal bir kliniktir; hekimler, adres ve telefon gerçek değildir.',
    demoBy: 'Egemen Tuncer tarafından tasarlandı',
    demoPhone: 'Bu bir demo site; telefon numarası gerçek değil.',
    learnMore: 'Detaylı bilgi',
    allTreatments: 'Tüm tedaviler',
    doctorPage: 'Hekimlerimiz'
  },
  nav: { treatments: 'Tedaviler', doctors: 'Hekimlerimiz', clinic: 'Kliniğimiz', guide: 'Hasta rehberi', contact: 'İletişim' },
  meta: {
    siteDesc: 'Sedefli Diş, İstanbul’da implant, şeffaf plak, kanal tedavisi, zirkonyum kaplama ve çocuk diş hekimliği hizmeti veren bir ağız ve diş sağlığı polikliniği.'
  },
  home: {
    title: 'Sedefli Diş · Ağız ve Diş Sağlığı Polikliniği',
    eyebrow: 'Ağız ve diş sağlığı polikliniği · İstanbul',
    h1: ['Sakin bir klinik,', 'anlaşılır tedavi.'],
    lead: 'Muayeneden kontrole kadar her adımı önceden konuşuyor, tedavi planını sizinle birlikte yapıyoruz.',
    secondary: 'Tedavileri incele',
    facts: [
      { k: '4', v: 'hekim, 4 farklı alan' },
      { k: '6', v: 'gün açık, Cumartesi dahil' },
      { k: 'TR · EN · DE', v: 'konuşulan diller' }
    ],
    treatmentsTitle: 'Tedavilerimiz',
    treatmentsSub: 'Her tedavi sayfasında sürecin adımlarını, yaklaşık süreyi ve sık sorulan soruları bulabilirsiniz.',
    approachTitle: 'Nasıl çalışıyoruz?',
    approach: [
      { t: 'Önce dinliyoruz', d: 'İlk muayenede şikâyetinizi ve beklentinizi konuşuyor, ağız içi muayene ve gerekirse röntgen yapıyoruz.' },
      { t: 'Planı birlikte yapıyoruz', d: 'Seçenekleri, süreyi ve kaç ziyaret gerektiğini yazılı bir planla anlatıyoruz. Karar sizin.' },
      { t: 'Adım adım ilerliyoruz', d: 'Her seansta ne yapılacağını önceden söylüyor, sorularınıza zaman ayırıyoruz.' },
      { t: 'Kontrolü unutmuyoruz', d: 'Tedavi bittikten sonra kontrol randevularınızı hatırlatıyoruz.' }
    ],
    doctorsTitle: 'Hekimlerimiz',
    doctorsSub: 'Her biri kendi alanında çalışan dört hekim.',
    clinicTitle: 'Kliniğimiz',
    clinicText: 'Dijital röntgen, ağız içi tarayıcı ve her hasta için yenilenen steril setlerle çalışıyoruz. Kliniğimiz zemin katta ve tekerlekli sandalye ile erişilebilir.',
    clinicLink: 'Kliniği tanıyın',
    ctaTitle: 'İlk muayene için randevu alın',
    ctaText: 'Size uygun gün ve saat aralığını seçin; klinik sizi arayarak saati netleştirsin.'
  },
  treatmentsPage: {
    title: 'Tedaviler',
    lead: 'Aşağıdaki sayfalar genel bilgilendirme içindir. Size uygun tedavi, muayene sonrasında hekiminizle birlikte belirlenir.',
    unsure: 'Hangi tedaviye ihtiyacınız olduğundan emin değil misiniz?',
    unsureText: 'Muayene randevusu alın; şikâyetinizi dinleyip seçenekleri birlikte konuşalım.'
  },
  treatment: {
    what: 'Nedir?',
    forWhom: 'Kimler için uygun?',
    steps: 'Tedavi süreci',
    duration: 'Yaklaşık süre',
    visits: 'Ziyaret',
    care: 'Sonrasında dikkat edilecekler',
    faq: 'Sık sorulan sorular',
    doctor: 'Bu alanda çalışan hekimimiz',
    note: 'Bu sayfadaki bilgiler genel bilgilendirme amaçlıdır ve muayenenin yerini tutmaz. Süreler kişiden kişiye değişebilir.',
    others: 'Diğer tedaviler',
    cta: 'Bu tedavi için randevu talebi'
  },
  doctorsPage: {
    title: 'Hekimlerimiz',
    lead: 'Kliniğimizde dört hekim, kendi uzmanlık alanlarında çalışıyor. Randevu talebinde tercih ettiğiniz hekimi seçebilirsiniz.',
    focus: 'Çalıştığı alanlar',
    langs: 'Diller',
    book: 'Bu hekimden randevu',
    note: 'Hekimler kurgusaldır; isimler ve görseller gerçek kişileri temsil etmez.'
  },
  clinicPage: {
    title: 'Kliniğimiz',
    lead: 'Sedefli Diş, 4 tedavi odası olan, gün ışığı alan bir poliklinik. Her ziyaretinizde aynı özen ve hijyen standardını hedefliyoruz.',
    sections: [
      { photo: 'hygiene', t: 'Hijyen ve sterilizasyon', d: 'Aletler her hastadan sonra yıkanır, poşetlenir ve otoklavda sterilize edilir. Poşetler hastanın önünde açılır; tek kullanımlık malzemeler bir kez kullanılır.', icon: 'shield' },
      { photo: 'xray-monitor', t: 'Dijital görüntüleme', d: 'Panoramik ve ağız içi dijital röntgenle görüntüyü aynı anda ekranda birlikte inceliyoruz.', icon: 'scan' },
      { t: 'Ağız içi tarayıcı', d: 'Pek çok tedavide ölçü maddesi yerine dijital tarama kullanıyoruz; sonucu ekranda üç boyutlu görebilirsiniz.', icon: 'tooth' },
      { t: 'Erişilebilirlik', d: 'Kliniğimiz zemin katta; giriş ve tuvalet tekerlekli sandalye ile kullanılabilir.', icon: 'access' }
    ],
    galleryTitle: 'Klinikten kareler',
    gallery: ['clinic-room', 'clinic-chair', 'clinic-waiting']
  },
  guidePage: {
    title: 'Hasta rehberi',
    lead: 'İlk ziyaretiniz öncesinde ve sonrasında bilmeniz gerekenler.',
    sections: [
      { t: 'İlk muayeneye gelirken', items: ['Varsa son 1 yıl içinde çekilmiş diş röntgenlerinizi getirin.', 'Kullandığınız ilaçları ve bilinen alerjilerinizi not edin.', 'Randevu saatinden 10 dakika önce gelmeniz kayıt işlemleri için yeterlidir.'] },
      { t: 'Randevu değişikliği ve iptal', items: ['Randevunuzu değiştirmeniz gerekirse en az 24 saat önce haber verin.', 'Geç kalırsanız, sonraki hastaları bekletmemek için işlem süresi kısalabilir ya da randevu ertelenebilir.'] },
      { t: 'Ödeme', items: ['Nakit ve kredi kartı ile ödeme yapılabilir.', 'Tedavi planı ve ücret bilgisi, tedaviye başlamadan önce yazılı olarak paylaşılır.', 'Anlaşmalı kurumlar için kliniği arayarak bilgi alabilirsiniz.'] },
      { t: 'Acil durumlar', items: ['Çalışma saatlerinde ani ağrı ve şişlik için aynı gün içinde sizi görmeye çalışırız.', 'Çalışma saatleri dışında yüzde hızla artan şişlik, ateş, nefes ya da yutma güçlüğü varsa 112’yi arayın.'] }
    ],
    faqTitle: 'Genel sorular',
    faq: [
      { q: 'Muayene için ne kadar süre ayırmalıyım?', a: 'İlk muayene genellikle 30–45 dakika sürer. Röntgen gerekiyorsa aynı ziyarette çekilir.' },
      { q: 'Tedaviye ilk gün başlanır mı?', a: 'Ağrı gibi acil bir durum yoksa ilk ziyarette muayene ve planlama yapılır; tedaviye sizin onayınızla sonraki randevuda başlanır.' },
      { q: 'Yabancı dil konuşan hekim var mı?', a: 'Hekimlerimizin çoğu İngilizce, ortodonti uzmanımız ayrıca Almanca konuşur.' },
      { q: 'Çocuğumla birlikte gelebilir miyim?', a: 'Elbette. Çocuk diş hekimliği uzmanımız aile randevularını aynı güne planlamanıza yardımcı olabilir.' }
    ]
  },
  contactPage: {
    title: 'İletişim',
    lead: 'Randevu ve sorularınız için bize ulaşın.',
    address: 'Adres',
    phone: 'Telefon',
    email: 'E-posta',
    hours: 'Çalışma saatleri',
    transport: 'Ulaşım',
    transportItems: ['Metro: Örnek istasyonu, 5 dakika yürüme', 'Otobüs: Sedef Sokak durağı', 'Otopark: Klinik karşısındaki otoparkta hastalarımıza 2 saat ücretsiz'],
    mapLabel: 'Kliniğin konumunu gösteren şematik harita',
    mapNote: 'Şematik harita · demo adres'
  },
  appt: {
    title: 'Randevu talebi',
    lead: 'Birkaç adımda talebinizi oluşturun. Klinik, uygun saati netleştirmek için sizi arar.',
    steps: ['Konu', 'Hekim', 'Zaman', 'Bilgiler', 'Özet'],
    stepOf: (i, n) => `Adım ${i} / ${n}`,
    q1: 'Ne için randevu almak istiyorsunuz?',
    exam: 'Muayene / emin değilim',
    examSub: 'Şikâyetinizi dinleyip birlikte karar verelim.',
    q2: 'Tercih ettiğiniz bir hekim var mı?',
    anyDoctor: 'Fark etmez',
    anyDoctorSub: 'İlk uygun hekim',
    q3: 'Size hangi gün ve saat aralığı uygun?',
    dayLabel: 'Gün',
    slotLabel: 'Saat aralığı',
    slots: [['morning', 'Sabah', '09:00–12:00'], ['noon', 'Öğle', '12:00–15:00'], ['evening', 'Akşam', '15:00–19:00']],
    satNote: 'Cumartesi 10:00–16:00 arası açığız.',
    q4: 'İletişim bilgileriniz',
    name: 'Ad soyad',
    phone: 'Telefon',
    phoneHint: 'Saati netleştirmek için bu numaradan arayacağız.',
    note: 'Eklemek istedikleriniz (isteğe bağlı)',
    noteHint: 'Örneğin şikâyetiniz, ne zamandır sürdüğü.',
    kvkk: 'Kişisel verilerimin randevu talebimin değerlendirilmesi amacıyla işlenmesine ilişkin <a href="/kvkk/">aydınlatma metnini</a> okudum.',
    q5: 'Talebinizi kontrol edin',
    sum: { topic: 'Konu', doctor: 'Hekim', time: 'Tercih', contact: 'İletişim' },
    edit: 'Düzenle',
    back: 'Geri',
    next: 'Devam',
    submit: 'Talebi gönder',
    errors: {
      topic: 'Bir konu seçin.',
      day: 'Bir gün seçin.',
      slot: 'Bir saat aralığı seçin.',
      name: 'Adınızı ve soyadınızı yazın.',
      phone: 'Geçerli bir telefon numarası yazın.',
      kvkk: 'Devam etmek için aydınlatma metnini onaylayın.'
    },
    doneTitle: 'Talebiniz alındı',
    doneText: (ref) => `Talep numaranız ${ref}. Klinik, çalışma saatleri içinde sizi arayarak randevu saatini netleştirir.`,
    demoNote: 'Demo: Bu bir demo sitedir. Bilgileriniz hiçbir yere gönderilmedi ve kaydedilmedi.',
    again: 'Yeni talep oluştur',
    noscript: 'Adım adım form için JavaScript gerekir. Formu tek sayfada doldurabilirsiniz.'
  },
  privacyPage: {
    title: 'KVKK aydınlatma metni',
    lead: 'Örnek metin · demo',
    body: [
      ['Veri sorumlusu', 'Sedefli Ağız ve Diş Sağlığı Polikliniği (kurgusal). Bu metin, gerçek bir klinikte yer alması gereken aydınlatma metninin yapısını göstermek için hazırlanmış bir örnektir.'],
      ['İşlenen veriler', 'Randevu talebi formunda paylaştığınız ad soyad, telefon numarası, tercih ettiğiniz tedavi, hekim ve zaman aralığı ile isteğe bağlı olarak yazdığınız notlar.'],
      ['İşleme amacı', 'Randevu talebinizin değerlendirilmesi ve randevu saatinin netleştirilmesi için sizinle iletişime geçilmesi.'],
      ['Hukuki sebep', '6698 sayılı Kişisel Verilerin Korunması Kanunu’nun 5. maddesindeki “bir sözleşmenin kurulması veya ifasıyla doğrudan ilgili olması” ve “ilgili kişinin temel hak ve özgürlüklerine zarar vermemek kaydıyla veri sorumlusunun meşru menfaati” sebepleri.'],
      ['Aktarım', 'Verileriniz üçüncü kişilerle paylaşılmaz; yalnızca yasal yükümlülük hâlinde yetkili kurumlara aktarılabilir.'],
      ['Haklarınız', 'KVKK’nın 11. maddesi kapsamında verilerinize ilişkin bilgi talep etme, düzeltme ve silinmesini isteme haklarına sahipsiniz. Başvurularınızı klinik e-posta adresine iletebilirsiniz.'],
      ['Bu demoda', 'Bu sitede form verileri hiçbir sunucuya gönderilmez ve saklanmaz; yalnızca tarayıcınızda özet ekranını oluşturmak için kullanılır.']
    ]
  },
  notFound: { title: 'Sayfa bulunamadı', text: 'Aradığınız sayfa taşınmış ya da hiç var olmamış olabilir.', back: 'Ana sayfaya dön' },
  footer: {
    about: 'Sedefli Diş, İstanbul’da bir ağız ve diş sağlığı polikliniğidir. (Kurgusal demo.)',
    pages: 'Sayfalar',
    treatments: 'Tedaviler',
    contact: 'İletişim',
    legal: 'Sitedeki bilgiler genel bilgilendirme amaçlıdır; tanı ve tedavi için hekiminize başvurun.',
    privacy: 'KVKK',
    made: 'Tasarım ve geliştirme',
    photos: 'Fotoğraflar'
  }
};

const en = {
  lang: 'en',
  locale: 'en_GB',
  paths: {
    home: '/en/',
    treatments: '/en/treatments/',
    doctors: '/en/dentists/',
    clinic: '/en/clinic/',
    guide: '/en/patient-guide/',
    contact: '/en/contact/',
    appointment: '/en/appointment/',
    privacy: '/en/privacy/'
  },
  ui: {
    skip: 'Skip to content',
    menu: 'Menu',
    close: 'Close',
    navLabel: 'Main menu',
    langLabel: 'Language',
    home: 'Home',
    breadcrumb: 'Breadcrumb',
    book: 'Book a visit',
    call: 'Call',
    openNow: 'Open now',
    closedNow: 'Closed now',
    opensAt: (day, time) => `Opens ${day} at ${time}`,
    closesAt: (time) => `Open until ${time}`,
    today: 'today',
    tomorrow: 'tomorrow',
    closed: 'Closed',
    days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    daysShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    demoBar: 'Demo project: Sedefli Diş is a fictional clinic; the dentists, address and phone number are not real.',
    demoBy: 'Designed by Egemen Tuncer',
    demoPhone: 'This is a demo site; the phone number is not real.',
    learnMore: 'Learn more',
    allTreatments: 'All treatments',
    doctorPage: 'Our dentists'
  },
  nav: { treatments: 'Treatments', doctors: 'Our dentists', clinic: 'The clinic', guide: 'Patient guide', contact: 'Contact' },
  meta: {
    siteDesc: 'Sedefli Diş is a dental clinic in Istanbul offering dental implants, clear aligners, root canal treatment, zirconia crowns and paediatric dentistry.'
  },
  home: {
    title: 'Sedefli Diş · Dental Clinic in Istanbul',
    eyebrow: 'Oral and dental health clinic · Istanbul',
    h1: ['A calm clinic,', 'clear treatment.'],
    lead: 'We talk through every step in advance, from the first examination to the follow-up, and plan your treatment together with you.',
    secondary: 'Explore treatments',
    facts: [
      { k: '4', v: 'dentists, 4 fields' },
      { k: '6', v: 'days a week, incl. Saturday' },
      { k: 'TR · EN · DE', v: 'languages spoken' }
    ],
    treatmentsTitle: 'Treatments',
    treatmentsSub: 'Each treatment page explains the steps, the approximate duration and common questions.',
    approachTitle: 'How we work',
    approach: [
      { t: 'We listen first', d: 'At your first visit we talk about your concerns and expectations, examine your mouth and take X-rays if needed.' },
      { t: 'We plan together', d: 'We explain the options, timeline and number of visits in a written plan. The decision is yours.' },
      { t: 'Step by step', d: 'We tell you what will happen before each session and take time for your questions.' },
      { t: 'We follow up', d: 'After treatment we remind you of your check-ups.' }
    ],
    doctorsTitle: 'Our dentists',
    doctorsSub: 'Four dentists, each working in their own field.',
    clinicTitle: 'The clinic',
    clinicText: 'We work with digital X-rays, an intraoral scanner and sterile sets renewed for every patient. The clinic is on the ground floor and wheelchair accessible.',
    clinicLink: 'About the clinic',
    ctaTitle: 'Book your first examination',
    ctaText: 'Choose a day and time window that suits you, and the clinic will call to confirm the time.'
  },
  treatmentsPage: {
    title: 'Treatments',
    lead: 'These pages are for general information. The right treatment for you is decided with your dentist after an examination.',
    unsure: 'Not sure which treatment you need?',
    unsureText: 'Book an examination; we will listen to your concerns and go through the options together.'
  },
  treatment: {
    what: 'What is it?',
    forWhom: 'Who is it for?',
    steps: 'The process',
    duration: 'Approximate duration',
    visits: 'Visits',
    care: 'Aftercare',
    faq: 'Frequently asked questions',
    doctor: 'Dentist working in this field',
    note: 'The information on this page is general and does not replace an examination. Durations vary from person to person.',
    others: 'Other treatments',
    cta: 'Request an appointment for this treatment'
  },
  doctorsPage: {
    title: 'Our dentists',
    lead: 'Four dentists work at the clinic, each in their own field. You can choose a preferred dentist when requesting an appointment.',
    focus: 'Areas of work',
    langs: 'Languages',
    book: 'Book with this dentist',
    note: 'The dentists are fictional; names and images do not represent real people.'
  },
  clinicPage: {
    title: 'The clinic',
    lead: 'Sedefli Diş is a bright clinic with four treatment rooms. We aim for the same care and hygiene standard at every visit.',
    sections: [
      { photo: 'hygiene', t: 'Hygiene and sterilisation', d: 'Instruments are washed, pouched and autoclaved after every patient. Pouches are opened in front of you and single-use items are used only once.', icon: 'shield' },
      { photo: 'xray-monitor', t: 'Digital imaging', d: 'With panoramic and intraoral digital X-rays, we look at the images together on screen right away.', icon: 'scan' },
      { t: 'Intraoral scanner', d: 'For many treatments we use a digital scan instead of impression material; you can see the 3D result on screen.', icon: 'tooth' },
      { t: 'Accessibility', d: 'The clinic is on the ground floor; the entrance and toilet are wheelchair accessible.', icon: 'access' }
    ],
    galleryTitle: 'Around the clinic',
    gallery: ['clinic-room', 'clinic-chair', 'clinic-waiting']
  },
  guidePage: {
    title: 'Patient guide',
    lead: 'What to know before and after your first visit.',
    sections: [
      { t: 'Coming for your first visit', items: ['Bring any dental X-rays taken in the last year.', 'Note the medication you take and any known allergies.', 'Arriving 10 minutes early is enough for registration.'] },
      { t: 'Changing or cancelling', items: ['Please let us know at least 24 hours in advance if you need to change your appointment.', 'If you are late, the treatment time may be shortened or the appointment rescheduled so that other patients are not kept waiting.'] },
      { t: 'Payment', items: ['You can pay in cash or by credit card.', 'The treatment plan and fees are shared in writing before treatment starts.', 'Call the clinic for information about partner institutions.'] },
      { t: 'Emergencies', items: ['During opening hours we try to see you on the same day for sudden pain or swelling.', 'Outside opening hours, call 112 if you have rapidly increasing facial swelling, fever, or difficulty breathing or swallowing.'] }
    ],
    faqTitle: 'General questions',
    faq: [
      { q: 'How long should I allow for an examination?', a: 'The first examination usually takes 30–45 minutes. Any X-rays are taken during the same visit.' },
      { q: 'Does treatment start on the first day?', a: 'Unless there is an emergency such as pain, the first visit is for examination and planning; treatment starts at the next appointment with your approval.' },
      { q: 'Do any dentists speak other languages?', a: 'Most of our dentists speak English, and our orthodontist also speaks German.' },
      { q: 'Can I bring my child?', a: 'Of course. Our paediatric dentist can help you plan family appointments on the same day.' }
    ]
  },
  contactPage: {
    title: 'Contact',
    lead: 'Get in touch for appointments and questions.',
    address: 'Address',
    phone: 'Phone',
    email: 'Email',
    hours: 'Opening hours',
    transport: 'Getting here',
    transportItems: ['Metro: Örnek station, 5 minutes on foot', 'Bus: Sedef Sokak stop', 'Parking: 2 hours free for patients at the car park opposite the clinic'],
    mapLabel: 'Schematic map showing the clinic location',
    mapNote: 'Schematic map · demo address'
  },
  appt: {
    title: 'Appointment request',
    lead: 'Create your request in a few steps. The clinic will call you to confirm the time.',
    steps: ['Topic', 'Dentist', 'Time', 'Details', 'Summary'],
    stepOf: (i, n) => `Step ${i} of ${n}`,
    q1: 'What would you like an appointment for?',
    exam: 'Examination / not sure',
    examSub: 'We will listen and decide together.',
    q2: 'Do you have a preferred dentist?',
    anyDoctor: 'No preference',
    anyDoctorSub: 'First available dentist',
    q3: 'Which day and time window suits you?',
    dayLabel: 'Day',
    slotLabel: 'Time window',
    slots: [['morning', 'Morning', '09:00–12:00'], ['noon', 'Midday', '12:00–15:00'], ['evening', 'Evening', '15:00–19:00']],
    satNote: 'On Saturdays we are open 10:00–16:00.',
    q4: 'Your contact details',
    name: 'Full name',
    phone: 'Phone',
    phoneHint: 'We will call this number to confirm the time.',
    note: 'Anything to add (optional)',
    noteHint: 'For example your concern and how long it has lasted.',
    kvkk: 'I have read the <a href="/en/privacy/">privacy notice</a> on how my data is processed to handle my request.',
    q5: 'Check your request',
    sum: { topic: 'Topic', doctor: 'Dentist', time: 'Preference', contact: 'Contact' },
    edit: 'Edit',
    back: 'Back',
    next: 'Continue',
    submit: 'Send request',
    errors: {
      topic: 'Choose a topic.',
      day: 'Choose a day.',
      slot: 'Choose a time window.',
      name: 'Enter your full name.',
      phone: 'Enter a valid phone number.',
      kvkk: 'Please confirm the privacy notice to continue.'
    },
    doneTitle: 'Request received',
    doneText: (ref) => `Your request number is ${ref}. The clinic will call you during opening hours to confirm the time.`,
    demoNote: 'Demo: this is a demo site. Your details were not sent or stored anywhere.',
    again: 'Create a new request',
    noscript: 'The step-by-step form needs JavaScript. You can fill in the form on a single page.'
  },
  privacyPage: {
    title: 'Privacy notice',
    lead: 'Sample text · demo',
    body: [
      ['Data controller', 'Sedefli Oral and Dental Health Clinic (fictional). This text is a sample showing the structure of the privacy notice a real clinic needs under Turkish data protection law (KVKK).'],
      ['Data processed', 'The name, phone number, preferred treatment, dentist and time window you share in the appointment form, and any optional notes.'],
      ['Purpose', 'Handling your appointment request and contacting you to confirm the time.'],
      ['Legal basis', 'Article 5 of Law No. 6698 on the Protection of Personal Data: processing directly related to entering into or performing a contract, and the legitimate interest of the data controller.'],
      ['Transfers', 'Your data is not shared with third parties; it may only be disclosed to authorities where required by law.'],
      ['Your rights', 'Under Article 11 of the KVKK you have the right to request information about, correction and deletion of your data. You can send requests to the clinic’s email address.'],
      ['In this demo', 'Form data on this site is never sent to a server or stored; it is only used in your browser to build the summary screen.']
    ]
  },
  notFound: { title: 'Page not found', text: 'The page you are looking for may have moved or never existed.', back: 'Back to home' },
  footer: {
    about: 'Sedefli Diş is an oral and dental health clinic in Istanbul. (Fictional demo.)',
    pages: 'Pages',
    treatments: 'Treatments',
    contact: 'Contact',
    legal: 'The information on this site is general; please consult your dentist for diagnosis and treatment.',
    privacy: 'Privacy',
    made: 'Design and development',
    photos: 'Photos'
  }
};

export const langs = [tr, en];
