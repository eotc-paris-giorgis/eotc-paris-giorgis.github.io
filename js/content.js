/* ============================================================
   DEBRE GENET SAINT GIORGIS ET QOUSQOUAM MARIE — contenu éditable
   Modifiez ce fichier pour mettre à jour le site.
   Puis envoyez le fichier sur GitHub (voir README.md).
   ============================================================ */

window.SITE = {
  name: {
    fr: "Debre Genet Giorgis",
    am: "ደብረ ገነት ጊዮርጊስ",
    en: "Debre Genet Giorgis"
  },
  fullName: {
    fr: "Église Debre Genet Saint Georges et Qousqouam Marie",
    am: "ፓሪስ ደብረ ገነት ቅዱስ ጊዮርጊስ ወቁስቋም ማርያም ቤተ ክርስቲያን",
    en: "Debre Genet Saint Giorgis and Qusquam Mariam Church"
  },
  saint: {
    fr: "Saint Georges",
    am: "ቅዱስ ጊዮርጊስ",
    en: "Saint George"
  },
  city: "Paris, France",

  /* Laissez vide ("") si l'information n'est pas encore prête.
     Le site affichera un message d'attente au lieu d'une fausse adresse. */
  address: "",
  phone: "",
  email: "",
  facebook: "",
  telegram: "",
  mapQuery: "Ethiopian Orthodox Church Paris",

  hours: [
    {
      when: { fr: "Dimanche", am: "እሑድ", en: "Sunday" },
      what: {
        fr: "Divine Liturgie (ቅዳሴ) — matin. L'heure exacte est annoncée par la paroisse.",
        am: "ቅዳሴ — ጠዋት። ትክክለኛው ሰዓት በሰበካው ይገለጻል።",
        en: "Divine Liturgy (Kidase) — morning. Exact time is announced by the parish."
      }
    },
    {
      when: { fr: "Fêtes du calendrier éthiopien", am: "የኢትዮጵያ በዓላት", en: "Ethiopian calendar feasts" },
      what: {
        fr: "Offices solennels pour Genna, Timkat, Fasika, Meskel et la fête de Saint Georges.",
        am: "ገና፣ ጥምቀት፣ ፋሲካ፣ መስቀል እና የቅዱስ ጊዮርጊስ በዓል በልዩ ሥርዓት ይከበራሉ።",
        en: "Solemn services for Genna, Timkat, Fasika, Meskel and the feast of Saint George."
      }
    },
    {
      when: { fr: "Baptêmes, mariages, funérailles", am: "ጥምቀት፣ ጋብቻ፣ ቀብር", en: "Baptisms, weddings, funerals" },
      what: {
        fr: "Sur rendez-vous avec le prêtre de la paroisse.",
        am: "ከሰበካው ካህን ጋር በቀጠሮ።",
        en: "By appointment with the parish priest."
      }
    }
  ],

  feasts: [
    { date: { fr: "7 janvier", am: "ጥር 7", en: "7 January" }, name: { fr: "Genna — Noël", am: "ገና", en: "Genna — Christmas" } },
    { date: { fr: "19 janvier", am: "ጥር 19", en: "19 January" }, name: { fr: "Timkat — Théophanie", am: "ጥምቀት", en: "Timkat — Epiphany" } },
    { date: { fr: "printemps", am: "ፋሲካ", en: "spring" }, name: { fr: "Fasika — Pâques", am: "ፋሲካ", en: "Fasika — Easter" } },
    { date: { fr: "1er mai", am: "ሚያዝያ 23", en: "1 May" }, name: { fr: "Saint Georges", am: "ቅዱስ ጊዮርጊስ", en: "Saint George" } },
    { date: { fr: "27 septembre", am: "መስከረም 17", en: "27 September" }, name: { fr: "Meskel — Invention de la Croix", am: "መስቀል", en: "Meskel — Finding of the True Cross" } },
    { date: { fr: "16 novembre", am: "ህዳር 7", en: "16 November" }, name: { fr: "Saint Georges martyr", am: "ቅዱስ ጊዮርጊስ", en: "Saint George the Martyr" } }
  ],

  /* Actualités : ajoutez un objet en haut de la liste pour publier une nouvelle. */
  news: [
    {
      date: "2026-08-17",
      title: {
        fr: "Le site de la paroisse est en ligne",
        am: "የሰበካው ድረ-ገጽ ተከፍቷል",
        en: "The parish website is now online"
      },
      body: {
        fr: "Bienvenue sur le site de l'église Debre Genet Saint Georges et Qousqouam Marie à Paris. Vous y trouverez les offices, les fêtes et les annonces de la communauté. Les horaires précis et l'adresse seront complétés par la paroisse.",
        am: "እንኳን ወደ ፓሪስ ደብረ ገነት ቅዱስ ጊዮርጊስ ወቁስቋም ማርያም ቤተ ክርስቲያን ድረ-ገጽ በደህና መጡ። የአገልግሎት ሰዓታት፣ በዓላት እና ማስታወቂያዎች እዚህ ይቀመጣሉ።",
        en: "Welcome to the Debre Genet Saint Giorgis and Qusquam Mariam Church website in Paris. Service times, feasts and community notices will be published here. Exact hours and the address will be completed by the parish."
      }
    }
  ]
};

window.I18N = {
  fr: {
    nav_home: "Accueil",
    nav_parish: "La paroisse",
    nav_hours: "Offices",
    nav_news: "Actualités",
    nav_contact: "Contact",
    menu: "Menu",
    kicker: "Église orthodoxe éthiopienne Tewahedo · Paris",
    hero_lead: "Une communauté de foi, de liturgie et d'entraide au service des fidèles éthiopiens et de tous ceux qui cherchent le Christ à Paris.",
    cta_hours: "Horaires des offices",
    cta_contact: "Nous trouver",
    welcome_am: "እንኳን ደህና መጡ",
    welcome_title: "Paix à cette maison",
    welcome_text: "L'église Debre Genet Saint Georges et Qousqouam Marie, dédiée à Saint Georges et à la Vierge Marie de Qousqouam, rassemble les fidèles de l'Église orthodoxe éthiopienne Tewahedo à Paris. Ici, la Divine Liturgie est célébrée, les fêtes du calendrier éthiopien sont honorées, et la communauté se soutient dans la prière.",
    card1_title: "Offices",
    card1_text: "Kidase dominical, fêtes et sacrements. Venez prier avec nous.",
    card2_title: "Actualités",
    card2_text: "Annonces de la paroisse, fêtes à venir et informations pratiques.",
    card3_title: "Contact",
    card3_text: "Adresse, message au prêtre et indications pour nous rejoindre.",
    feasts_am: "የበዓላት ቀናት",
    feasts_title: "Grandes fêtes",
    feasts_intro: "Le calendrier éthiopien jalonne l'année liturgique. Les dates civiles ci-dessous sont les plus habituelles.",
    parish_am: "ስለ ሰበካው",
    parish_title: "Debre Genet Saint Georges et Qousqouam Marie",
    parish_kicker: "Saint Georges, notre protecteur",
    parish_p1: "Debre Genet signifie « le mont du Paradis ». Notre église est dédiée à Saint Georges le Martyr et à la Vierge Marie de Qousqouam. Saint Georges est l'un des saints les plus aimés de l'Église éthiopienne : sa figure — le cavalier qui vainc le dragon — rappelle la victoire du Christ sur le mal.",
    parish_p2: "Notre paroisse appartient à l'Église orthodoxe éthiopienne Tewahedo. Tewahedo signifie « unité » : nous confessons le Christ, vrai Dieu et vrai homme, en une seule union. La liturgie se célèbre principalement en guèze, avec des lectures et une prédication en amharique ; le français est aussi le plus souvent compris dans la communauté de Paris.",
    parish_p3: "Tous les visiteurs sont les bienvenus. Une tenue modeste est demandée. Les femmes couvrent souvent la tête d'un netela ou d'un foulard. On se déchausse en entrant dans l'espace sacré, selon la coutume.",
    faith_title: "Ce que nous croyons",
    faith_p: "Nous croyons en un seul Dieu, Père, Fils et Saint-Esprit. Nous honorons la Sainte Vierge Marie, Mère de Dieu, les anges et les saints. Les sacrements — baptême, chrismation, eucharistie, mariage, onction, confession, sacerdoce — accompagnent la vie du fidèle de la naissance à la naissance au Ciel.",
    hours_am: "የአገልግሎት ሰዓታት",
    hours_title: "Horaires des offices",
    hours_kicker: "Venez et voyez",
    hours_intro: "Les heures peuvent varier selon les fêtes et le local utilisé. En cas de doute, contactez la paroisse avant de vous déplacer.",
    hours_note: "Ce premier site publie le rythme habituel. Dès que la paroisse confirme l'adresse exacte et l'heure du Kidase, elles apparaîtront ici.",
    news_am: "ዜናዎች",
    news_title: "Actualités de la paroisse",
    news_kicker: "Annonces et mises à jour",
    news_empty: "Aucune annonce pour le moment. Revenez bientôt.",
    contact_am: "ያግኙን",
    contact_title: "Contact",
    contact_kicker: "La porte de l'église est ouverte",
    contact_intro: "Pour un baptême, un mariage, un service funèbre, une visite ou une question, écrivez-nous.",
    contact_pending: "L'adresse exacte, le téléphone et l'e-mail seront publiés par la paroisse. En attendant, le moyen le plus sûr est de rejoindre la communauté le dimanche matin.",
    label_name: "Nom",
    label_email: "E-mail",
    label_message: "Message",
    send: "Préparer le message",
    form_hint: "Le bouton ouvre votre application e-mail. Si aucun e-mail paroissial n'est encore enregistré, le message ne pourra pas partir — ajoutez l'adresse dans js/content.js.",
    where_title: "Où nous trouver",
    city_label: "Ville",
    footer_blessing: "Gloire à Dieu",
    footer_copy: "Debre Genet Saint Georges et Qousqouam Marie · Église orthodoxe éthiopienne Tewahedo · Paris"
  },
  am: {
    nav_home: "መነሻ",
    nav_parish: "ሰበካው",
    nav_hours: "ቅዳሴ",
    nav_news: "ዜናዎች",
    nav_contact: "ያግኙን",
    menu: "ምናሌ",
    kicker: "የኢትዮጵያ ኦርቶዶክስ ተዋሕዶ ቤተ ክርስቲያን · ፓሪስ",
    hero_lead: "በፓሪስ የምትገኘው ደብረ ገነት ቅዱስ ጊዮርጊስ ወቁስቋም ማርያም ቤተ ክርስቲያን ለምእመናን የጸሎት፣ የቅዳሴ እና የኅብረት ቤት ናት።",
    cta_hours: "የአገልግሎት ሰዓታት",
    cta_contact: "አድራሻ",
    welcome_am: "እንኳን ደህና መጡ",
    welcome_title: "ሰላም ለዚህች ቤት",
    welcome_text: "ደብረ ገነት ቅዱስ ጊዮርጊስ ወቁስቋም ማርያም ቤተ ክርስቲያን በቅዱስ ጊዮርጊስ እና በቅድስት ድንግል ማርያም ስም የተሰየመች ስትሆን በፓሪስ የኢትዮጵያ ኦርቶዶክስ ተዋሕዶ ምእመናንን ትሰበስባለች። ቅዳሴ ይቀደሳል፣ የበዓላት ቀናት ይከበራሉ፣ ማኅበረ ምእመናንም በጸሎት ይደጋገፋሉ።",
    card1_title: "ቅዳሴ",
    card1_text: "የእሑድ ቅዳሴ፣ በዓላት እና ሥርዓተ ቤተ ክርስቲያን።",
    card2_title: "ዜናዎች",
    card2_text: "የሰበካው ማስታወቂያዎች እና የሚመጡ በዓላት።",
    card3_title: "ያግኙን",
    card3_text: "አድራሻ እና ለካህኑ መልእክት።",
    feasts_am: "የበዓላት ቀናት",
    feasts_title: "ታላላቅ በዓላት",
    feasts_intro: "የኢትዮጵያ ዘመን አቆጣጠር የቤተ ክርስቲያን ዓመትን ይመራል።",
    parish_am: "ስለ ሰበካው",
    parish_title: "ደብረ ገነት ቅዱስ ጊዮርጊስ ወቁስቋም ማርያም",
    parish_kicker: "ቅዱስ ጊዮርጊስ ደጃችን",
    parish_p1: "ደብረ ገነት ማለት «የገነት ተራራ» ማለት ነው። ቤተ ክርስቲያናችን በቅዱስ ጊዮርጊስ እና በቁስቋም ማርያም ስም ተሰይማለች። ቅዱስ ጊዮርጊስ በኢትዮጵያ ቤተ ክርስቲያን ከሚወደዱ ቅዱሳን አንዱ ነው።",
    parish_p2: "ሰበካችን የኢትዮጵያ ኦርቶዶክስ ተዋሕዶ ቤተ ክርስቲያን አካል ናት። ቅዳሴ በዋናነት በግዕዝ ይቀደሳል፤ ንባብና ስብከት በአማርኛ ይሆናሉ። በፓሪስ ፈረንሳይኛም ይገባል።",
    parish_p3: "እንግዶች በደስታ ይቀበላሉ። የተግባር ልብስ ይጠበቃል። ሴቶች ብዙ ጊዜ ነጠላ ወይም ሻሽ ይጎናጸፋሉ። ወደ መቅደስ ሲገቡ ጫማ መውለቅ የተለመደ ነው።",
    faith_title: "እምነታችን",
    faith_p: "በአንድ አምላክ፣ አብ ወወልድ ወመንፈስ ቅዱስ እናምናለን። ቅድስት ድንግል ማርያምን፣ መላእክትንና ቅዱሳንን እናከብራለን።",
    hours_am: "የአገልግሎት ሰዓታት",
    hours_title: "ቅዳሴና አገልግሎት",
    hours_kicker: "ንዑ ወርእዩ",
    hours_intro: "ሰዓታት እንደ በዓልና እንደ ሥፍራ ሊለወጡ ይችላሉ። ከመምጣትዎ በፊት ያረጋግጡ።",
    hours_note: "ትክክለኛው አድራሻና የቅዳሴ ሰዓት በሰበካው ሲረጋገጥ እዚህ ይታተማል።",
    news_am: "ዜናዎች",
    news_title: "የሰበካው ዜና",
    news_kicker: "ማስታወቂያዎች",
    news_empty: "ለጊዜው ማስታወቂያ የለም።",
    contact_am: "ያግኙን",
    contact_title: "አድራሻ",
    contact_kicker: "የቤተ ክርስቲያን በር ክፍት ነው",
    contact_intro: "ለጥምቀት፣ ለጋብቻ፣ ለቀብር ወይም ለጥያቄ ይጻፉልን።",
    contact_pending: "ትክክለኛው አድራሻ፣ ስልክና ኢሜይል በሰበካው ይታተማሉ። እስከዚያው ድረስ እሑድ ጠዋት መገኘት ይመከራል።",
    label_name: "ስም",
    label_email: "ኢሜይል",
    label_message: "መልእክት",
    send: "መልእክት አዘጋጅ",
    form_hint: "አዝራሩ የኢሜይል መተግበሪያዎን ይከፍታል። የሰበካ ኢሜይል በ js/content.js ውስጥ ሲጨመር መልእክቱ ይላካል።",
    where_title: "የት እናገኛለን",
    city_label: "ከተማ",
    footer_blessing: "ክብር ለእግዚአብሔር",
    footer_copy: "ደብረ ገነት ቅዱስ ጊዮርጊስ ወቁስቋም ማርያም · የኢትዮጵያ ኦርቶዶክስ ተዋሕዶ · ፓሪስ"
  },
  en: {
    nav_home: "Home",
    nav_parish: "The parish",
    nav_hours: "Services",
    nav_news: "News",
    nav_contact: "Contact",
    menu: "Menu",
    kicker: "Ethiopian Orthodox Tewahedo Church · Paris",
    hero_lead: "A community of faith, liturgy and mutual care for Ethiopian Orthodox faithful and all who seek Christ in Paris.",
    cta_hours: "Service times",
    cta_contact: "Find us",
    welcome_am: "እንኳን ደህና መጡ",
    welcome_title: "Peace to this house",
    welcome_text: "Debre Genet Saint Giorgis and Qusquam Mariam Church, dedicated to Saint George and the Virgin Mary of Qusquam, gathers the faithful of the Ethiopian Orthodox Tewahedo Church in Paris. The Divine Liturgy is celebrated here, the feasts of the Ethiopian calendar are kept, and the community supports one another in prayer.",
    card1_title: "Services",
    card1_text: "Sunday Kidase, feast days and sacraments. Come and pray with us.",
    card2_title: "News",
    card2_text: "Parish notices, upcoming feasts and practical information.",
    card3_title: "Contact",
    card3_text: "Address, a message to the priest, and how to reach us.",
    feasts_am: "የበዓላት ቀናት",
    feasts_title: "Great feasts",
    feasts_intro: "The Ethiopian calendar shapes the liturgical year. Civil dates below are the usual ones.",
    parish_am: "ስለ ሰበካው",
    parish_title: "Debre Genet Saint Giorgis and Qusquam Mariam",
    parish_kicker: "Saint George, our protector",
    parish_p1: "Debre Genet means “the mount of Paradise”. Our church is dedicated to Saint George the Martyr and the Virgin Mary of Qusquam. Saint George is among the most beloved saints of the Ethiopian Church: the horseman who overcomes the dragon is an image of Christ’s victory over evil.",
    parish_p2: "Our parish belongs to the Ethiopian Orthodox Tewahedo Church. Tewahedo means “unity”: we confess Christ, true God and true man, in one union. The liturgy is mainly in Ge’ez, with readings and preaching in Amharic; French is also widely understood in the Paris community.",
    parish_p3: "Visitors are welcome. Modest dress is expected. Women often cover their hair with a netela or scarf. It is customary to remove shoes when entering the sacred space.",
    faith_title: "What we believe",
    faith_p: "We believe in one God, Father, Son and Holy Spirit. We honour the Holy Virgin Mary, Mother of God, the angels and the saints. The sacraments accompany the faithful from birth to birth into Heaven.",
    hours_am: "የአገልግሎት ሰዓታት",
    hours_title: "Service times",
    hours_kicker: "Come and see",
    hours_intro: "Times may change with feast days and the place of worship. If in doubt, contact the parish before travelling.",
    hours_note: "This first version of the site shows the usual rhythm. When the parish confirms the exact address and Kidase time, they will appear here.",
    news_am: "ዜናዎች",
    news_title: "Parish news",
    news_kicker: "Notices and updates",
    news_empty: "No notices for now. Please check again soon.",
    contact_am: "ያግኙን",
    contact_title: "Contact",
    contact_kicker: "The church door is open",
    contact_intro: "For a baptism, wedding, funeral, visit or question, write to us.",
    contact_pending: "The exact address, phone and email will be published by the parish. Until then, the surest way is to join the community on Sunday morning.",
    label_name: "Name",
    label_email: "Email",
    label_message: "Message",
    send: "Prepare message",
    form_hint: "The button opens your email app. If no parish email is stored yet, the message cannot be sent — add the address in js/content.js.",
    where_title: "Where to find us",
    city_label: "City",
    footer_blessing: "Glory to God",
    footer_copy: "Debre Genet Saint Giorgis and Qusquam Mariam Church · Ethiopian Orthodox Tewahedo Church · Paris"
  }
};
