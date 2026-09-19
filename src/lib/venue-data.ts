import heroClub from "@/assets/hero-club.jpg";
import hall from "@/assets/hall.jpg";
import dinner from "@/assets/dinner.jpg";
import posterSax from "@/assets/poster-sax.jpg";
import posterSwing from "@/assets/poster-swing.jpg";
import posterVocal from "@/assets/poster-vocal.jpg";

export type VenueType =
  | "museum"
  | "art_gallery"
  | "theater"
  | "concert_hall"
  | "club_bar"
  | "pier"
  | "outdoor"
  | "landmark"
  | "sport"
  | "gastro"
  | "meeting_point";

/** Что стоит в коммерческом центре страницы */
export type CommercialCenter =
  | "admission" // входной билет / открытая дата
  | "events" // афиша событий
  | "trips" // расписание рейсов
  | "excursions" // экскурсии и маршруты
  | "booking" // бронирование стола / визита
  | "logistics"; // точка сбора, привязанные поездки

export type TypeConfig = {
  label: string;
  center: CommercialCenter;
  /** Афиша событий как вторичный блок */
  secondaryEvents: boolean;
  seatMap: boolean;
  zonesVip: boolean;
  sectors: boolean;
  fcdc: boolean;
  exhibitions: boolean;
  troupe: boolean;
  acoustics: boolean;
  kitchen: boolean;
  hours: boolean;
  wayToFind: boolean;
  season: boolean;
  visitPlanner: boolean;
  heroCta: string;
  stickyCta: string;
  stickyHint: string;
  cardCta: string;
  rulesTitle: string;
  rules: string[];
};

export const TYPE_CONFIG: Record<VenueType, TypeConfig> = {
  museum: {
    label: "Музеи",
    center: "admission",
    secondaryEvents: true,
    seatMap: false,
    zonesVip: false,
    sectors: false,
    fcdc: false,
    exhibitions: true,
    troupe: false,
    acoustics: false,
    kitchen: false,
    hours: true,
    wayToFind: false,
    season: false,
    visitPlanner: true,
    heroCta: "Купить входной билет",
    stickyCta: "Выбрать дату визита",
    stickyHint: "Открытая дата, вход по сеансам",
    cardCta: "Купить",
    rulesTitle: "Правила визита",
    rules: [
      "Фотосъёмка без вспышки и штатива разрешена",
      "Аудиогид - 300 руб. на стойке информации",
      "Доступная среда: лифт, пандус, кресла-коляски",
      "Льготный билет по студенческому и пенсионному",
    ],
  },
  art_gallery: {
    label: "Арт-галереи",
    center: "admission",
    secondaryEvents: true,
    seatMap: false,
    zonesVip: false,
    sectors: false,
    fcdc: false,
    exhibitions: true,
    troupe: false,
    acoustics: false,
    kitchen: false,
    hours: true,
    wayToFind: false,
    season: false,
    visitPlanner: true,
    heroCta: "Купить входной билет",
    stickyCta: "Выбрать дату визита",
    stickyHint: "Выставки и постоянная экспозиция",
    cardCta: "Купить",
    rulesTitle: "Правила посещения",
    rules: [
      "Фотосъёмка без вспышки и штатива разрешена",
      "Для временных выставок может потребоваться отдельный билет",
      "Льготный билет доступен при предъявлении документа",
    ],
  },
  theater: {
    label: "Театры",
    center: "events",
    secondaryEvents: false,
    seatMap: true,
    zonesVip: false,
    sectors: false,
    fcdc: false,
    exhibitions: false,
    troupe: true,
    acoustics: false,
    kitchen: false,
    hours: false,
    wayToFind: false,
    season: false,
    visitPlanner: false,
    heroCta: "Выбрать спектакль",
    stickyCta: "Выбрать места на схеме",
    stickyHint: "Схема зала, партер и балкон",
    cardCta: "Выбрать места",
    rulesTitle: "Памятка зрителю",
    rules: [
      "Опоздавших пускают только после первого антракта",
      "Третий звонок - за 3 минуты до начала",
      "Гардероб работает бесплатно, верхняя одежда обязательна",
      "Дресс-код: свободный, но без спортивной формы",
    ],
  },
  concert_hall: {
    label: "Концертные залы",
    center: "events",
    secondaryEvents: false,
    seatMap: true,
    zonesVip: false,
    sectors: false,
    fcdc: false,
    exhibitions: false,
    troupe: false,
    acoustics: true,
    kitchen: false,
    hours: false,
    wayToFind: false,
    season: false,
    visitPlanner: false,
    heroCta: "Выбрать концерт",
    stickyCta: "Выбрать места на схеме",
    stickyHint: "Партер, амфитеатр, балкон",
    cardCta: "Выбрать места",
    rulesTitle: "Что нужно знать",
    rules: [
      "Вход в зал после начала - только в паузах между произведениями",
      "Гардероб открывается за час до начала",
      "Аудиозапись концерта запрещена",
    ],
  },
  club_bar: {
    label: "Клубы и бары",
    center: "events",
    secondaryEvents: false,
    seatMap: false,
    zonesVip: true,
    sectors: false,
    fcdc: true,
    exhibitions: false,
    troupe: false,
    acoustics: false,
    kitchen: true,
    hours: true,
    wayToFind: false,
    season: false,
    visitPlanner: false,
    heroCta: "Купить билет",
    stickyCta: "Купить билет",
    stickyHint: "Танцпол или стол с депозитом",
    cardCta: "Купить",
    rulesTitle: "Вход и правила",
    rules: [
      "Вход строго 18+, паспорт при себе",
      "Face-control и dress-control на входе",
      "Депозит по столу тратится на бар и кухню",
    ],
  },
  pier: {
    label: "Причалы",
    center: "trips",
    secondaryEvents: false,
    seatMap: false,
    zonesVip: false,
    sectors: false,
    fcdc: false,
    exhibitions: false,
    troupe: false,
    acoustics: false,
    kitchen: false,
    hours: true,
    wayToFind: true,
    season: true,
    visitPlanner: false,
    heroCta: "Выбрать рейс",
    stickyCta: "Выбрать рейс",
    stickyHint: "Дата, время и причал отправления",
    cardCta: "Выбрать рейс",
    rulesTitle: "Перед посадкой",
    rules: [
      "Посадка начинается за 15 минут до отправления",
      "При отмене рейса из-за погоды деньги возвращаем полностью",
      "Возьмите ветровку и головной убор - на воде прохладнее",
      "Навигация работает с конца апреля по ноябрь",
    ],
  },
  outdoor: {
    label: "Парки",
    center: "excursions",
    secondaryEvents: true,
    seatMap: false,
    zonesVip: false,
    sectors: false,
    fcdc: false,
    exhibitions: false,
    troupe: false,
    acoustics: false,
    kitchen: false,
    hours: true,
    wayToFind: false,
    season: false,
    visitPlanner: true,
    heroCta: "Смотреть экскурсии",
    stickyCta: "Смотреть экскурсии рядом",
    stickyHint: "Вход свободный, билет не нужен",
    cardCta: "Подробнее",
    rulesTitle: "Правила территории",
    rules: [
      "Вход свободный, территория открыта ежедневно",
      "Мангалы и костры запрещены",
      "С собаками можно, на поводке",
    ],
  },
  landmark: {
    label: "Достопримечательности",
    center: "excursions",
    secondaryEvents: true,
    seatMap: false,
    zonesVip: false,
    sectors: false,
    fcdc: false,
    exhibitions: false,
    troupe: false,
    acoustics: false,
    kitchen: false,
    hours: true,
    wayToFind: false,
    season: false,
    visitPlanner: true,
    heroCta: "Смотреть экскурсии",
    stickyCta: "Смотреть экскурсии рядом",
    stickyHint: "Экскурсии и прогулочные маршруты",
    cardCta: "Подробнее",
    rulesTitle: "Перед посещением",
    rules: [
      "Условия входа зависят от конкретного объекта",
      "Для популярных маршрутов лучше выбрать время заранее",
      "Проверяйте место встречи в электронном билете",
    ],
  },
  sport: {
    label: "Спорт",
    center: "events",
    secondaryEvents: false,
    seatMap: false,
    zonesVip: false,
    sectors: true,
    fcdc: false,
    exhibitions: false,
    troupe: false,
    acoustics: false,
    kitchen: false,
    hours: false,
    wayToFind: false,
    season: false,
    visitPlanner: false,
    heroCta: "Купить билет на матч",
    stickyCta: "Выбрать сектор",
    stickyHint: "Трибуны A-D, фан-зона",
    cardCta: "Выбрать сектор",
    rulesTitle: "В день матча",
    rules: [
      "Вход открывается за 2 часа до начала",
      "Запрещены стеклянная тара, зонты-трости, пиротехника",
      "Парковка платная, лучше приезжать на метро",
    ],
  },
  gastro: {
    label: "Гастроточки",
    center: "booking",
    secondaryEvents: true,
    seatMap: false,
    zonesVip: false,
    sectors: false,
    fcdc: false,
    exhibitions: false,
    troupe: false,
    acoustics: false,
    kitchen: true,
    hours: true,
    wayToFind: false,
    season: false,
    visitPlanner: false,
    heroCta: "Забронировать стол",
    stickyCta: "Забронировать стол",
    stickyHint: "Бронь бесплатная, отмена в любой момент",
    cardCta: "Забронировать",
    rulesTitle: "Полезно знать",
    rules: [
      "Бронь держим 20 минут",
      "Большие компании от 8 человек - по депозиту",
      "Веранда работает в тёплый сезон",
    ],
  },
  meeting_point: {
    label: "Точки сбора",
    center: "logistics",
    secondaryEvents: false,
    seatMap: false,
    zonesVip: false,
    sectors: false,
    fcdc: false,
    exhibitions: false,
    troupe: false,
    acoustics: false,
    kitchen: false,
    hours: false,
    wayToFind: true,
    season: false,
    visitPlanner: false,
    heroCta: "Смотреть экскурсии отсюда",
    stickyCta: "Выбрать экскурсию",
    stickyHint: "Сбор за 10 минут до старта",
    cardCta: "Выбрать",
    rulesTitle: "Как не потеряться",
    rules: [
      "Подходите за 10 минут до начала",
      "Гид с табличкой Дайбилет стоит у входа",
      "Если опаздываете - позвоните гиду, номер придёт в билете",
    ],
  },
};

export type EventItem = {
  id: string;
  title: string;
  date: string;
  time: string;
  tag: string;
  price: string;
  poster: string;
  extra?: string | undefined;
};

export type Review = { author: string; date: string; text: string; rating: number };

export type Venue = {
  type: VenueType;
  name: string;
  kindLabel: string;
  age?: string;
  city: string;
  address: string;
  metro: string;
  transport: string;
  parking: string;
  phone: string;
  site: string;
  rating: { value: number; count: number } | null;
  cover: string;
  gallery: string[];
  about: string[];
  facts: [string, string][];
  priceFrom: string | null;
  nextDate: string | null;
  events: EventItem[];
  admission?: { title: string; note: string; options: { name: string; price: string; note: string }[] };
  exhibitions?: { title: string; until: string; img: string }[];
  troupe?: { name: string; role: string }[];
  acoustics?: string[];
  kitchenTags?: string[];
  zones?: { name: string; price: string; note: string }[];
  excursions?: { title: string; duration: string; price: string; img: string }[];
  hours?: { day: string; time: string; closed?: boolean }[];
  wayToFind?: string[];
  visitPlanner?: { time: string; best: string; free: string };
  faq: { q: string; a: string }[];
  reviews: Review[];
  similar: { name: string; kind: string; metro: string; img: string }[];
  catalogueUrl?: string;
  mapQuery?: string;
  travelTimes?: { walk: string; transit: string; car: string };
  dataNote?: string;
};

const baseSimilar = [
  { name: "Особняк Румянцева", kind: "Музей", metro: "Адмиралтейская", img: hall },
  { name: "Дворцовая набережная", kind: "Прогулка", metro: "Невский проспект", img: heroClub },
  { name: "Севкабель Порт", kind: "Площадка", metro: "Приморская", img: dinner },
  { name: "Мариинский-2", kind: "Театр", metro: "Садовая", img: hall },
];

const baseFaq = [
  { q: "Как получить билет?", a: "Электронный билет придёт на почту сразу после оплаты. Распечатывать не нужно - покажите QR-код с телефона." },
  { q: "Можно ли вернуть билет?", a: "Да, возврат доступен в личном кабинете. Полная сумма возвращается не позднее чем за сутки до визита." },
  { q: "Есть ли льготные билеты?", a: "Льготный тариф действует для школьников, студентов и пенсионеров. Документ нужно показать на входе." },
];

const evt = (
  id: string,
  title: string,
  date: string,
  time: string,
  tag: string,
  price: string,
  poster: string,
  extra?: string,
): EventItem => ({ id, title, date, time, tag, price, poster, extra });

export const VENUES: Record<VenueType, Venue> = {
  museum: {
    type: "museum",
    name: "Государственный музей изобразительных искусств имени А. С. Пушкина",
    kindLabel: "Музей",
    age: "0+",
    city: "Москва",
    address: "ул. Волхонка, 12",
    metro: "Кропоткинская — 3 минуты пешком",
    transport: "Метро «Кропоткинская»",
    parking: "Городские платные парковки на Волхонке и Пречистенке",
    phone: "+7 (495) 697-95-78",
    site: "pushkinmuseum.art",
    rating: { value: 4.8, count: 312 },
    cover: hall,
    gallery: [heroClub, dinner, posterVocal],
    about: [
      "Главное здание музея хранит коллекцию зарубежного искусства от древних цивилизаций до европейской живописи и скульптуры.",
      "На основную экспозицию стоит заложить не менее двух часов. Временные выставки могут проходить в соседних зданиях музейного квартала.",
    ],
    facts: [
      ["Площадь экспозиции", "1 400 кв. м"],
      ["Время визита", "1-2 часа"],
      ["Аудиогид", "русский, английский"],
      ["Доступность", "лифт и пандус"],
    ],
    priceFrom: "600 руб.",
    nextDate: "сегодня",
    admission: {
      title: "Входной билет",
      note: "Открытая дата: приходите в любой день в течение полугода",
      options: [
        { name: "Взрослый", price: "600 руб.", note: "Постоянная экспозиция" },
        { name: "Льготный", price: "300 руб.", note: "Школьники, студенты, пенсионеры" },
        { name: "Комплексный", price: "900 руб.", note: "Экспозиция + временные выставки" },
      ],
    },
    exhibitions: [
      { title: "Европейское искусство: новый взгляд", until: "До 15 ноября", img: posterVocal },
      { title: "Археология и время", until: "До 3 декабря", img: hall },
      { title: "Мастера старой Европы", until: "До 20 января", img: heroClub },
    ],
    hours: [
      { day: "Понедельник", time: "выходной", closed: true },
      { day: "Вторник - четверг", time: "11:00 - 20:00" },
      { day: "Пятница", time: "11:00 - 22:00" },
      { day: "Суббота - воскресенье", time: "10:00 - 21:00" },
    ],
    visitPlanner: { time: "1-2 часа", best: "будни до 14:00 - меньше людей", free: "третий четверг месяца - вход свободный" },
    events: [
      evt("m1", "Экскурсия «Шедевры главного здания»", "12 сентября, пт", "13:00", "Экскурсия", "800 руб.", posterVocal),
      evt("m2", "Лекция «Искусство Древнего Египта»", "14 сентября, вс", "18:00", "Лекция", "500 руб.", hall),
    ],
    faq: [
      { q: "Нужно ли выбирать время визита?", a: "Билет с открытой датой действует полгода, сеанс выбирать не нужно. В выходные вход по сеансам каждые полчаса." },
      ...baseFaq,
    ],
    reviews: [
      { author: "Марина", date: "28 августа", text: "Очень насыщенная коллекция. На главное здание лучше оставлять не меньше двух часов.", rating: 5 },
      { author: "Илья", date: "17 августа", text: "Удобно добираться от метро, но на популярные выставки лучше брать билет заранее.", rating: 4 },
    ],
    similar: baseSimilar,
  },

  art_gallery: {
    type: "art_gallery",
    name: "Государственная Третьяковская галерея",
    kindLabel: "Арт-галерея",
    age: "0+",
    city: "Москва",
    address: "Лаврушинский переулок, 10",
    metro: "Третьяковская — 6 минут пешком",
    transport: "Метро «Третьяковская» или «Новокузнецкая»",
    parking: "Городские платные парковки в Лаврушинском переулке",
    phone: "+7 (495) 957-07-27",
    site: "tretyakovgallery.ru",
    rating: { value: 4.8, count: 312 },
    cover: hall,
    gallery: [heroClub, dinner, posterVocal],
    about: [
      "Историческое здание в Лаврушинском переулке хранит одну из крупнейших коллекций русского искусства — от древнерусских икон до живописи начала XX века.",
      "На знакомство с основной экспозицией стоит заложить не менее двух часов. Для отдельных выставок и экскурсий может потребоваться отдельный билет.",
    ],
    facts: [
      ["Площадь экспозиции", "1 400 кв. м"],
      ["Время визита", "1-2 часа"],
      ["Аудиогид", "русский, английский"],
      ["Доступность", "лифт и пандус"],
    ],
    priceFrom: "600 руб.",
    nextDate: "сегодня",
    admission: {
      title: "Входной билет",
      note: "Открытая дата: приходите в любой день в течение полугода",
      options: [
        { name: "Взрослый", price: "600 руб.", note: "Постоянная экспозиция" },
        { name: "Льготный", price: "300 руб.", note: "Школьники, студенты, пенсионеры" },
        { name: "Комплексный", price: "900 руб.", note: "Экспозиция + временные выставки" },
      ],
    },
    exhibitions: [
      { title: "Тихая графика: 1990-е", until: "До 15 ноября", img: posterVocal },
      { title: "Свет и своды", until: "До 3 декабря", img: hall },
      { title: "Портрет города", until: "До 20 января", img: heroClub },
    ],
    hours: [
      { day: "Понедельник", time: "выходной", closed: true },
      { day: "Вторник - четверг", time: "11:00 - 20:00" },
      { day: "Пятница", time: "11:00 - 22:00" },
      { day: "Суббота - воскресенье", time: "10:00 - 21:00" },
    ],
    visitPlanner: { time: "1-2 часа", best: "будни до 14:00 - меньше людей", free: "третий четверг месяца - вход свободный" },
    events: [
      evt("ag1", "Экскурсия «Своды и свет»", "12 сентября, пт", "13:00", "Экскурсия", "800 руб.", posterVocal),
      evt("ag2", "Лекция «Графика 90-х»", "14 сентября, вс", "18:00", "Лекция", "500 руб.", hall),
    ],
    faq: [
      { q: "Нужно ли выбирать время визита?", a: "Билет с открытой датой действует полгода, сеанс выбирать не нужно. В выходные вход по сеансам каждые полчаса." },
      ...baseFaq,
    ],
    reviews: [
      { author: "Марина", date: "28 августа", text: "Спокойный музей, за полтора часа обошли всё. Аудиогид понятный.", rating: 5 },
      { author: "Илья", date: "17 августа", text: "Временная выставка сильнее постоянной экспозиции. Кофе на первом этаже хороший.", rating: 4 },
    ],
    similar: baseSimilar,
  },

  theater: {
    type: "theater",
    name: "Большой театр России",
    kindLabel: "Театр",
    age: "6+",
    city: "Москва",
    address: "Театральная площадь, 1",
    metro: "Театральная — 2 минуты пешком",
    transport: "Метро «Театральная», «Охотный Ряд» или «Площадь Революции»",
    parking: "Собственной парковки нет; рядом городские платные парковки",
    phone: "+7 (495) 455-55-55",
    site: "bolshoi.ru",
    rating: { value: 4.9, count: 874 },
    cover: hall,
    gallery: [heroClub, posterVocal, dinner],
    about: [
      "Главный музыкальный театр России и один из символов Москвы. В репертуаре — опера, балет, концерты и гастрольные программы.",
      "Спектакли проходят на нескольких сценах. При покупке важно проверить, в каком здании и зале состоится выбранное событие.",
    ],
    facts: [
      ["Мест в зале", "320"],
      ["Ярусы", "партер и балкон"],
      ["Антракт", "20 минут"],
      ["Гардероб", "бесплатный"],
    ],
    priceFrom: "1 200 руб.",
    nextDate: "12 сентября",
    events: [
      evt("t1", "Премьера: «Три сестры»", "12 сентября, пт", "19:00", "Премьера", "от 2 400 руб.", posterVocal, "Основная сцена"),
      evt("t2", "«Щелкунчик»", "14 сентября, вс", "12:00", "Балет", "от 1 800 руб.", posterSwing, "Основная сцена"),
      evt("t3", "«Пиковая дама»", "16 сентября, вт", "19:00", "Опера", "от 2 000 руб.", posterSax),
      evt("t4", "«Дядя Ваня»", "18 сентября, чт", "19:00", "Драма", "от 1 200 руб.", posterVocal),
      evt("t5", "«Кот в сапогах»", "21 сентября, вс", "11:00", "Детские", "от 900 руб.", posterSwing),
      evt("t6", "«Вишнёвый сад»", "25 сентября, чт", "19:00", "Драма", "от 1 500 руб.", posterSax),
    ],
    troupe: [
      { name: "Анна Кириллова", role: "Ведущая актриса" },
      { name: "Пётр Разин", role: "Актёр" },
      { name: "Юлия Стеценко", role: "Актриса" },
      { name: "Марк Левин", role: "Главный режиссёр" },
    ],
    faq: [
      { q: "Пустят ли, если опоздать?", a: "После третьего звонка вход в зал закрыт. Опоздавших проводят на свободные места в антракте." },
      ...baseFaq,
    ],
    reviews: [
      { author: "Ольга", date: "2 сентября", text: "Были на премьере, зал маленький и очень живой. Балкон - отличный обзор.", rating: 5 },
    ],
    similar: baseSimilar,
  },

  concert_hall: {
    type: "concert_hall",
    name: "Государственный Кремлёвский дворец",
    kindLabel: "Концертный зал",
    age: "6+",
    city: "Москва",
    address: "ул. Воздвиженка, 1",
    metro: "Библиотека имени Ленина — 8 минут пешком",
    transport: "Любой транспорт до Лиговского проспекта",
    parking: "Подземный паркинг на 150 мест, 200 руб./час",
    phone: "+7 (495) 620-78-46",
    site: "kremlinpalace.org",
    rating: { value: 4.7, count: 1103 },
    cover: heroClub,
    gallery: [hall, posterSwing, dinner],
    about: [
      "Зал на 1 600 мест с натуральной акустикой и органом немецкой сборки. Здесь идут симфонические программы, джазовые вечера и большие гастрольные концерты.",
      "Партер ровный, амфитеатр поднят на 2,5 метра: со среднего ряда видно всю сцену целиком.",
    ],
    facts: [
      ["Вместимость", "1 600 мест"],
      ["Орган", "62 регистра"],
      ["Звук", "L-Acoustics K2"],
      ["Время реверберации", "1,9 сек"],
    ],
    priceFrom: "1 500 руб.",
    nextDate: "13 сентября",
    acoustics: [
      "Натуральная акустика без подзвучки для симфонических программ",
      "Концертный орган на 62 регистра",
      "Подзвучка L-Acoustics K2 для эстрадных концертов",
    ],
    events: [
      evt("c1", "Симфонический вечер: Малер", "13 сентября, сб", "19:00", "Симфония", "от 2 200 руб.", posterSwing),
      evt("c2", "Органный концерт при свечах", "15 сентября, пн", "20:00", "Орган", "от 1 500 руб.", posterSax),
      evt("c3", "Джазовый бенефис", "19 сентября, пт", "20:00", "Джаз", "от 2 500 руб.", posterVocal),
      evt("c4", "Хоровая программа", "23 сентября, вт", "19:00", "Хор", "от 1 800 руб.", posterSwing),
    ],
    faq: [
      { q: "Где лучше слышно?", a: "Для симфонических программ - центр партера с 7 по 15 ряд и первые ряды амфитеатра." },
      ...baseFaq,
    ],
    reviews: [],
    similar: baseSimilar,
  },

  club_bar: {
    type: "club_bar",
    name: "Джаз-клуб Игоря Бутмана на Таганке",
    kindLabel: "Клуб / бар",
    age: "18+",
    city: "Москва",
    address: "ул. Верхняя Радищевская, 21",
    metro: "Таганская — 2 минуты пешком",
    transport: "Метро «Таганская» или «Марксистская»",
    parking: "Городская платная парковка на Верхней Радищевской улице",
    phone: "+7 (495) 792-21-09",
    site: "moscow.butmanclub.ru",
    rating: { value: 5, count: 4653 },
    cover: heroClub,
    gallery: [hall, dinner, posterSax],
    about: [
      "Двухуровневый зал под кирпичными сводами: сцена, барная стойка и столы вокруг. Концерты идут каждый вечер, после последнего сета - диджей-сеты до двух ночи.",
      "Кухня средиземноморская, бар - авторские коктейли и крафт. Стол с депозитом бронируется отдельно от билета на танцпол.",
    ],
    facts: [
      ["Вместимость", "до 200 гостей"],
      ["Doors open", "19:00"],
      ["Start time", "20:00"],
      ["Возраст", "18+"],
    ],
    priceFrom: "2 000 руб.",
    nextDate: "21 сентября",
    kitchenTags: ["средиземноморская", "крафт", "авторские коктейли", "поздняя кухня"],
    zones: [
      { name: "Танцпол", price: "2 000 руб.", note: "Вход без места, покупка в 1 клик" },
      { name: "Стол у сцены", price: "депозит 8 000 руб.", note: "До 4 гостей, депозит тратится на бар и кухню" },
      { name: "VIP-балкон", price: "депозит 20 000 руб.", note: "До 8 гостей, отдельный вход" },
    ],
    events: [
      evt("k1", "Игорь Бутман и Московский джазовый оркестр", "21 сентября, пн", "19:30", "Джаз", "от 3 000 руб.", posterSax, "Большой состав"),
      evt("k2", "Вечер свинга в клубе Игоря Бутмана", "24 сентября, чт", "20:00", "Свинг", "от 2 000 руб.", posterSwing, "Doors 19:00"),
      evt("k3", "Джазовый вокальный вечер", "27 сентября, вс", "20:00", "Вокал", "от 2 500 руб.", posterVocal),
    ],
    hours: [
      { day: "Понедельник - четверг", time: "19:00 - 01:00" },
      { day: "Пятница - суббота", time: "19:00 - 03:00" },
      { day: "Воскресенье", time: "19:00 - 00:00" },
    ],
    faq: [
      { q: "Чем отличается танцпол от стола?", a: "Билет на танцпол - это вход без закреплённого места. Стол бронируется по депозиту, сумма депозита тратится на заказ." },
      ...baseFaq,
    ],
    reviews: [
      { author: "Алексей", date: "8 сентября", text: "Камерный зал, музыканты совсем рядом. Хорошо слышно с любого стола.", rating: 5 },
      { author: "Елена", date: "29 августа", text: "Сильная программа и уютная атмосфера. Лучше приходить заранее к открытию дверей.", rating: 5 },
    ],
    catalogueUrl: "https://daibilet.ru/",
    mapQuery: "Джаз-клуб Игоря Бутмана, Верхняя Радищевская 21, Москва",
    travelTimes: { walk: "2 мин", transit: "12 мин", car: "18 мин" },
    dataNote: "Контакты, адрес, рейтинг и ближайшая подтверждённая дата актуализированы 15 сентября 2026 года. Фотографии в прототипе демонстрационные.",
    similar: baseSimilar,
  },

  pier: {
    type: "pier",
    name: "Причал «ЦПКиО им. Горького»",
    kindLabel: "Причал",
    age: "0+",
    city: "Москва",
    address: "Пушкинская набережная, 9, стр. 37",
    metro: "Парк культуры — 14 минут пешком",
    transport: "Метро «Парк культуры», далее пешком через парк",
    parking: "Собственной парковки у причала нет",
    phone: "+7 (495) 225-60-70",
    site: "riverport.moscow",
    rating: { value: 4.6, count: 220 },
    cover: heroClub,
    gallery: [hall, dinner, posterSwing],
    about: [
      "Причал расположен на Пушкинской набережной внутри парка Горького. Отсюда отправляются прогулочные теплоходы по Москве-реке.",
      "Расписание зависит от сезона, погоды и выбранного маршрута. На посадку лучше приходить за 15 минут до отправления.",
    ],
    facts: [
      ["Рейсов в день", "до 24"],
      ["Длительность", "1 - 2,5 часа"],
      ["Сезон", "апрель - ноябрь"],
      ["Посадка", "за 15 минут"],
    ],
    priceFrom: "900 руб.",
    nextDate: "сегодня",
    events: [
      evt("p1", "Реки и каналы: дневной рейс", "сегодня, пт", "12:00", "1 час", "900 руб.", hall, "Причал А, сходни справа"),
      evt("p2", "Классический маршрут по Москве-реке", "сегодня, пт", "15:30", "1,5 часа", "1 200 руб.", heroClub, "Основной причал"),
      evt("p3", "Закатная прогулка", "завтра, сб", "19:30", "2 часа", "1 600 руб.", posterVocal, "Причал Б"),
      evt("p4", "Вечерняя Москва с воды", "завтра, сб", "21:00", "2,5 часа", "2 400 руб.", posterSwing, "Основной причал"),
    ],
    wayToFind: [
      "Войдите в парк Горького со стороны главного входа",
      "Идите к Пушкинской набережной по указателям речного транспорта",
      "Сверьте название рейса на табло у сходней",
    ],
    hours: [
      { day: "Ежедневно, сезон", time: "10:00 - 23:00" },
      { day: "Декабрь - март", time: "навигация закрыта", closed: true },
    ],
    faq: [
      { q: "Что если рейс отменят из-за погоды?", a: "Мы возвращаем полную стоимость или переносим на другую дату - на выбор." },
      { q: "Есть ли крыша на теплоходе?", a: "На большинстве судов есть закрытый салон и открытая палуба. Тип судна указан в описании рейса." },
      ...baseFaq,
    ],
    reviews: [
      { author: "Дмитрий", date: "21 августа", text: "Нашли причал не сразу, спуск действительно правее моста. Рейс отправился вовремя.", rating: 4 },
    ],
    similar: baseSimilar,
  },

  outdoor: {
    type: "outdoor",
    name: "Центральный парк культуры и отдыха им. Горького",
    kindLabel: "Парк",
    age: "0+",
    city: "Москва",
    address: "ул. Крымский Вал, 9",
    metro: "Парк культуры — 10 минут пешком",
    transport: "Метро «Парк культуры» или «Октябрьская»",
    parking: "Городские платные парковки на Крымском Валу",
    phone: "+7 (495) 995-00-20",
    site: "park-gorkogo.com",
    rating: null,
    cover: hall,
    gallery: [heroClub, dinner, posterVocal],
    about: [
      "Главный городской парк на берегу Москвы-реки объединяет прогулочные зоны, музеи, спорт, кафе и сезонные события. Вход на территорию свободный.",
      "Маршрут от главного входа до Нескучного сада занимает около часа без остановок; на полноценную прогулку лучше заложить полдня.",
    ],
    facts: [
      ["Вход", "свободный"],
      ["Время на месте", "30-60 минут"],
      ["Лучшее время", "утро и закат"],
      ["Территория", "открыта круглый год"],
    ],
    priceFrom: null,
    nextDate: null,
    visitPlanner: { time: "2-4 часа", best: "будни утром — меньше посетителей", free: "вход на территорию свободный" },
    excursions: [
      { title: "Пешая прогулка «Семь мостов»", duration: "2 часа", price: "от 700 руб.", img: heroClub },
      { title: "Парк Горького и Нескучный сад", duration: "2,5 часа", price: "от 900 руб.", img: hall },
      { title: "Дневной маршрут по каналам", duration: "4 часа", price: "от 1 900 руб.", img: dinner },
    ],
    events: [
      evt("o1", "Фестиваль уличной музыки", "20 сентября, сб", "14:00", "Бесплатно", "вход свободный", posterSwing),
    ],
    hours: [
      { day: "Ежедневно", time: "круглосуточно" },
      { day: "Колокольня", time: "11:00 - 19:00" },
    ],
    faq: [
      { q: "Нужен ли билет?", a: "Нет, вход в сад свободный. Билет нужен только на подъём на колокольню и на экскурсии." },
      ...baseFaq,
    ],
    reviews: [],
    similar: baseSimilar,
  },

  landmark: {
    type: "landmark",
    name: "Собор Василия Блаженного",
    kindLabel: "Архитектурная достопримечательность",
    age: "0+",
    city: "Москва",
    address: "Красная площадь, 7",
    metro: "Охотный Ряд — 7 минут пешком",
    transport: "Метро «Охотный Ряд», «Площадь Революции» или «Театральная»",
    parking: "Собственной парковки нет; ближайшие городские парковки находятся за пределами Красной площади",
    phone: "+7 (495) 698-33-04",
    site: "shm.ru/museum/hvb",
    rating: null,
    cover: hall,
    gallery: [heroClub, dinner, posterVocal],
    about: [
      "Собор Покрова Пресвятой Богородицы на Рву — один из главных архитектурных символов Москвы и часть музейного комплекса Государственного исторического музея.",
      "Внутри можно увидеть систему отдельных церквей и переходов. На осмотр интерьеров и экспозиции стоит заложить около часа.",
    ],
    facts: [
      ["Статус", "объект ЮНЕСКО"],
      ["Время на месте", "45-90 минут"],
      ["Лучшее время", "будни утром"],
      ["Формат", "музей и памятник архитектуры"],
    ],
    priceFrom: "700 руб.",
    nextDate: "сегодня",
    visitPlanner: { time: "45-90 минут", best: "будни утром — меньше посетителей", free: "Красную площадь можно осмотреть свободно" },
    excursions: [
      { title: "Экскурсия по собору Василия Блаженного", duration: "2 часа", price: "от 700 руб.", img: heroClub },
      { title: "Красная площадь и Китай-город", duration: "2,5 часа", price: "от 900 руб.", img: hall },
      { title: "Исторический центр Москвы", duration: "4 часа", price: "от 1 900 руб.", img: dinner },
    ],
    events: [
      evt("l1", "Экскурсия «Архитектура Красной площади»", "20 сентября, сб", "14:00", "Экскурсия", "от 700 руб.", posterSwing),
    ],
    hours: [
      { day: "Ежедневно", time: "круглосуточно" },
      { day: "Музей", time: "11:00 - 19:00" },
    ],
    faq: [
      { q: "Нужен ли билет внутрь собора?", a: "Да, для посещения музейной экспозиции нужен билет. Осмотреть собор с Красной площади можно бесплатно." },
      ...baseFaq,
    ],
    reviews: [],
    similar: baseSimilar,
  },

  sport: {
    type: "sport",
    name: "Большая спортивная арена «Лужники»",
    kindLabel: "Арена",
    age: "0+",
    city: "Москва",
    address: "ул. Лужники, 24",
    metro: "Спортивная — 12 минут пешком",
    transport: "Метро «Спортивная» или станция МЦК «Лужники»",
    parking: "Въезд и парковка зависят от режима конкретного мероприятия",
    phone: "+7 (495) 780-08-08",
    site: "luzhniki.ru",
    rating: { value: 4.5, count: 1560 },
    cover: hall,
    gallery: [heroClub, posterSwing, dinner],
    about: [
      "Арена на 12 000 зрителей: хоккейные матчи, баскетбол и большие шоу. Трибуны A-D расположены по периметру, фан-сектор - за воротами.",
      "Лучше приезжать за час до начала: на входе досмотр, а парковка заполняется быстро.",
    ],
    facts: [
      ["Вместимость", "12 000"],
      ["Трибуны", "A, B, C, D"],
      ["Фан-сектор", "трибуна D"],
      ["Вход", "за 2 часа"],
    ],
    priceFrom: "800 руб.",
    nextDate: "13 сентября",
    events: [
      evt("s1", "Хоккей: «Север» - «Метеор»", "13 сентября, сб", "19:30", "КХЛ", "от 800 руб.", posterSwing, "Трибуны A-D"),
      evt("s2", "Баскетбол: «Север» - «Кристалл»", "17 сентября, ср", "19:00", "Баскетбол", "от 600 руб.", posterSax),
      evt("s3", "Хоккей: «Север» - «Волна»", "24 сентября, ср", "19:30", "КХЛ", "от 900 руб.", posterVocal),
    ],
    faq: [
      { q: "Можно ли пронести флаг?", a: "Да, если древко мягкое и размер не больше 1,5 метра. Жёсткие древки не пропустят." },
      ...baseFaq,
    ],
    reviews: [
      { author: "Артём", date: "30 августа", text: "Сектор B - отличный обзор по центру. На входе очередь минут десять.", rating: 5 },
    ],
    similar: baseSimilar,
  },

  gastro: {
    type: "gastro",
    name: "Депо.Москва",
    kindLabel: "Гастроточка",
    age: "0+",
    city: "Москва",
    address: "ул. Лесная, 20",
    metro: "Белорусская — 6 минут пешком",
    transport: "Метро «Белорусская» или «Менделеевская»",
    parking: "Городские платные парковки на Лесной улице",
    phone: "+7 (495) 488-77-00",
    site: "depomoscow.ru",
    rating: { value: 4.7, count: 189 },
    cover: dinner,
    gallery: [hall, heroClub, posterVocal],
    about: [
      "Крупный гастрономический квартал в здании бывшего Миусского трамвайного парка. Под одной крышей работают десятки ресторанных концепций и лавок.",
      "На площадке проходят маркеты, концерты и гастрономические фестивали. Бронирование зависит от выбранного ресторана.",
    ],
    facts: [
      ["Мест", "40 и веранда"],
      ["Средний чек", "2 000 руб."],
      ["Кухня", "европейская"],
      ["Атмосфера", "камерная, негромкая музыка"],
    ],
    priceFrom: null,
    nextDate: null,
    kitchenTags: ["европейская", "сезонное меню", "винная карта", "завтраки"],
    hours: [
      { day: "Понедельник", time: "выходной", closed: true },
      { day: "Вторник - четверг", time: "12:00 - 23:00" },
      { day: "Пятница - суббота", time: "12:00 - 01:00" },
      { day: "Воскресенье", time: "12:00 - 22:00" },
    ],
    events: [
      evt("g1", "Винный ужин с сомелье", "18 сентября, чт", "19:00", "Ужин", "3 500 руб.", dinner),
      evt("g2", "Завтрак с шефом", "21 сентября, вс", "11:00", "Завтрак", "1 500 руб.", posterVocal),
    ],
    faq: [
      { q: "Нужно ли бронировать заранее?", a: "В будни обычно есть свободные столы, в пятницу и субботу лучше забронировать за пару дней." },
      ...baseFaq,
    ],
    reviews: [
      { author: "Ксения", date: "1 сентября", text: "Уютно, кухня быстрая. Веранда закрывается рано.", rating: 5 },
    ],
    similar: baseSimilar,
  },

  meeting_point: {
    type: "meeting_point",
    name: "Точка сбора: памятник А. С. Пушкину",
    kindLabel: "Точка сбора",
    age: "0+",
    city: "Москва",
    address: "Пушкинская площадь, у памятника А. С. Пушкину",
    metro: "Пушкинская — 2 минуты пешком",
    transport: "Метро «Пушкинская», «Тверская» или «Чеховская»",
    parking: "Парковки рядом нет",
    phone: "Указан в билете",
    site: "daibilet.ru",
    rating: null,
    cover: heroClub,
    gallery: [hall, dinner, posterSax],
    about: [
      "Популярная точка старта пеших экскурсий по Тверской улице и историческому центру Москвы. Место встречи — непосредственно у памятника Пушкину.",
      "Гид приходит за 15 минут до начала и стоит с табличкой. Точный номер для связи указывается в билете.",
    ],
    facts: [
      ["Сбор", "за 10 минут"],
      ["Ориентир", "памятник А. С. Пушкину"],
      ["Гид", "с табличкой Дайбилет"],
      ["Укрытие от дождя", "в переходе метро"],
    ],
    priceFrom: "700 руб.",
    nextDate: "сегодня",
    wayToFind: [
      "Выходите из метро «Пушкинская» к Пушкинской площади",
      "Перейдите к памятнику А. С. Пушкину",
      "Гид ждёт со стороны Тверской улицы с табличкой Дайбилет",
    ],
    events: [
      evt("mp1", "Пешая экскурсия «Сердце Москвы»", "сегодня, пт", "11:00", "2 часа", "от 700 руб.", hall, "Сбор 10:50"),
      evt("mp2", "Автобусный обзор города", "сегодня, пт", "14:00", "3 часа", "от 1 400 руб.", heroClub, "Сбор 13:45"),
      evt("mp3", "Вечерняя прогулка по каналам", "завтра, сб", "18:00", "2 часа", "от 1 100 руб.", posterVocal, "Сбор 17:50"),
    ],
    faq: [
      { q: "Что делать, если я опаздываю?", a: "Позвоните гиду - номер указан в билете. Группа ждёт до 10 минут." },
      ...baseFaq,
    ],
    reviews: [],
    similar: baseSimilar,
  },
};

export const TYPE_ORDER: VenueType[] = [
  "museum",
  "art_gallery",
  "theater",
  "concert_hall",
  "club_bar",
  "pier",
  "outdoor",
  "landmark",
  "sport",
  "gastro",
  "meeting_point",
];

/** Отдельная страница для каждого типа площадки */
export const TYPE_SLUG = {
  museum: "/venues/muzey",
  art_gallery: "/venues/art-galereya",
  theater: "/venues/teatr",
  concert_hall: "/venues/koncertnyy-zal",
  club_bar: "/venues/klub",
  pier: "/venues/prichal",
  outdoor: "/venues/park",
  landmark: "/venues/dostoprimechatelnost",
  sport: "/venues/arena",
  gastro: "/venues/gastrotochka",
  meeting_point: "/venues/tochka-sbora",
} as const satisfies Record<VenueType, string>;
