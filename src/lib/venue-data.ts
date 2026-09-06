import heroClub from "@/assets/hero-club.jpg";
import hall from "@/assets/hall.jpg";
import dinner from "@/assets/dinner.jpg";
import posterSax from "@/assets/poster-sax.jpg";
import posterSwing from "@/assets/poster-swing.jpg";
import posterVocal from "@/assets/poster-vocal.jpg";

export type VenueType =
  | "museum"
  | "theater"
  | "concert_hall"
  | "club_bar"
  | "pier"
  | "outdoor"
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
    label: "Музей / галерея",
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
  theater: {
    label: "Театр",
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
    label: "Концертный зал",
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
    label: "Клуб / бар",
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
    label: "Причал /水 водные прогулки",
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
    label: "Парк / достопримечательность",
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
  sport: {
    label: "Спорт / арена",
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
    label: "Гастроточка",
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
    label: "Точка сбора",
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
  extra?: string;
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
    name: "Музей современного искусства «Свод»",
    kindLabel: "Музей",
    age: "0+",
    city: "Санкт-Петербург",
    address: "наб. канала Грибоедова, 7",
    metro: "Невский проспект - 5 минут пешком",
    transport: "Автобусы 3, 7, 24 до остановки «Казанский собор»",
    parking: "Городская платная парковка вдоль набережной, 100 руб./час",
    phone: "+7 (812) 000-00-00",
    site: "svod-museum.ru",
    rating: { value: 4.8, count: 312 },
    cover: hall,
    gallery: [heroClub, dinner, posterVocal],
    about: [
      "«Свод» занимает служебный корпус XVIII века: кирпичные своды и два уровня экспозиции. Постоянная коллекция - живопись и графика последних тридцати лет, во втором зале работают временные проекты.",
      "На осмотр постоянной экспозиции хватает часа, с временными выставками - около двух. По выходным проходят обзорные экскурсии в 13:00 и 16:00.",
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
      evt("m1", "Экскурсия «Своды и свет»", "12 сентября, пт", "13:00", "Экскурсия", "800 руб.", posterVocal),
      evt("m2", "Лекция «Графика 90-х»", "14 сентября, вс", "18:00", "Лекция", "500 руб.", hall),
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
    name: "Камерный театр на Фонтанке",
    kindLabel: "Театр",
    age: "6+",
    city: "Санкт-Петербург",
    address: "наб. реки Фонтанки, 41",
    metro: "Гостиный двор - 8 минут пешком",
    transport: "Троллейбусы 5, 22 до остановки «Фонтанка»",
    parking: "Парковка во дворе на 20 мест, для зрителей бесплатно",
    phone: "+7 (812) 000-00-01",
    site: "kamerny-theatre.ru",
    rating: { value: 4.9, count: 874 },
    cover: hall,
    gallery: [heroClub, posterVocal, dinner],
    about: [
      "Сцена на 320 мест, партер и один балкон. Репертуар - драма и современная хореография, премьеры выходят четыре раза в год.",
      "Зал устроен так, что последний ряд балкона в семи метрах от сцены: плохих мест почти нет, но первые три ряда партера самые близкие к артистам.",
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
    name: "Большой концертный зал «Гранит»",
    kindLabel: "Концертный зал",
    age: "6+",
    city: "Санкт-Петербург",
    address: "Лиговский пр., 74",
    metro: "Площадь Восстания - 10 минут пешком",
    transport: "Любой транспорт до Лиговского проспекта",
    parking: "Подземный паркинг на 150 мест, 200 руб./час",
    phone: "+7 (812) 000-00-02",
    site: "granit-hall.ru",
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
    name: "Джаз-клуб на канале",
    kindLabel: "Клуб / бар",
    age: "18+",
    city: "Санкт-Петербург",
    address: "наб. канала Грибоедова, 7",
    metro: "Невский проспект - 5 минут пешком",
    transport: "Автобусы 3, 7, 24 до Казанского собора",
    parking: "Платная городская парковка вдоль набережной",
    phone: "+7 (812) 000-00-03",
    site: "jazz-canal.ru",
    rating: null,
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
    nextDate: "сегодня",
    kitchenTags: ["средиземноморская", "крафт", "авторские коктейли", "поздняя кухня"],
    zones: [
      { name: "Танцпол", price: "2 000 руб.", note: "Вход без места, покупка в 1 клик" },
      { name: "Стол у сцены", price: "депозит 8 000 руб.", note: "До 4 гостей, депозит тратится на бар и кухню" },
      { name: "VIP-балкон", price: "депозит 20 000 руб.", note: "До 8 гостей, отдельный вход" },
    ],
    events: [
      evt("k1", "Олег и Наталья Бутман Бэнд", "сегодня, пт", "20:00", "Джаз", "от 2 500 руб.", posterSax, "Doors 19:00"),
      evt("k2", "Вечер свинга", "14 сентября, вс", "20:00", "Свинг", "от 2 500 руб.", posterSwing, "Doors 19:00"),
      evt("k3", "Elena et les garcons", "17 сентября, ср", "20:00", "Вокал", "от 2 500 руб.", posterVocal),
      evt("k4", "Квартет: день рождения клуба", "1 октября, ср", "21:00", "Спецвечер", "от 3 500 руб.", posterSwing),
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
    reviews: [],
    similar: baseSimilar,
  },

  pier: {
    type: "pier",
    name: "Причал «Аничков мост»",
    kindLabel: "Причал",
    age: "0+",
    city: "Санкт-Петербург",
    address: "наб. реки Фонтанки, 27, спуск у моста",
    metro: "Гостиный двор - 6 минут пешком",
    transport: "Любой транспорт по Невскому проспекту",
    parking: "Парковки рядом нет, ближайшая - на Караванной улице",
    phone: "+7 (812) 000-00-04",
    site: "prichal-anichkov.ru",
    rating: { value: 4.6, count: 220 },
    cover: heroClub,
    gallery: [hall, dinner, posterSwing],
    about: [
      "Причал у Аничкова моста - точка старта прогулок по рекам и каналам. Сходни находятся справа от моста, если идти по Невскому в сторону площади Восстания.",
      "Летом рейсы уходят каждые 30 минут, в межсезонье - по расписанию. Ночные рейсы под разводку мостов работают с мая по октябрь.",
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
      evt("p2", "Классический маршрут по Фонтанке", "сегодня, пт", "15:30", "1,5 часа", "1 200 руб.", heroClub, "Причал А"),
      evt("p3", "Закатная прогулка", "завтра, сб", "19:30", "2 часа", "1 600 руб.", posterVocal, "Причал Б"),
      evt("p4", "Ночная разводка мостов", "завтра, сб", "00:40", "2,5 часа", "2 400 руб.", posterSwing, "Причал Б"),
    ],
    wayToFind: [
      "Идите к Аничкову мосту со стороны Невского проспекта",
      "Спуск к воде - справа от моста, рядом с кассой-павильоном",
      "На сходнях висит табличка с номером причала: А или Б",
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
    name: "Никольский сад и колокольня",
    kindLabel: "Достопримечательность",
    age: "0+",
    city: "Санкт-Петербург",
    address: "Никольская пл., 1",
    metro: "Садовая - 12 минут пешком",
    transport: "Автобус 3, трамвай 3 до Никольской площади",
    parking: "Бесплатная парковка вдоль Крюкова канала, мест мало",
    phone: "+7 (812) 000-00-05",
    site: "nikolsky-garden.ru",
    rating: null,
    cover: hall,
    gallery: [heroClub, dinner, posterVocal],
    about: [
      "Сад вокруг колокольни на пересечении двух каналов - одна из самых фотографируемых точек города. Вход свободный, билет не нужен.",
      "Прогулка по саду занимает 20-30 минут, вместе с набережными Крюкова канала - около часа.",
    ],
    facts: [
      ["Вход", "свободный"],
      ["Время на месте", "30-60 минут"],
      ["Лучшее время", "утро и закат"],
      ["Территория", "открыта круглый год"],
    ],
    priceFrom: null,
    nextDate: null,
    visitPlanner: { time: "30-60 минут", best: "закат - подсветка колокольни", free: "вход свободный, касс нет" },
    excursions: [
      { title: "Пешая прогулка «Семь мостов»", duration: "2 часа", price: "от 700 руб.", img: heroClub },
      { title: "Никольский квартал и Коломна", duration: "2,5 часа", price: "от 900 руб.", img: hall },
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

  sport: {
    type: "sport",
    name: "Ледовая арена «Север»",
    kindLabel: "Арена",
    age: "0+",
    city: "Санкт-Петербург",
    address: "пр. Пятилеток, 1",
    metro: "Проспект Большевиков - 7 минут пешком",
    transport: "Трамваи 23, 27 до остановки «Арена»",
    parking: "Парковка на 800 мест, в день матча заполняется за час",
    phone: "+7 (812) 000-00-06",
    site: "sever-arena.ru",
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
    name: "Бистро «Сводчатая»",
    kindLabel: "Гастроточка",
    age: "0+",
    city: "Санкт-Петербург",
    address: "ул. Некрасова, 14",
    metro: "Маяковская - 6 минут пешком",
    transport: "Автобусы 15, 46 до улицы Некрасова",
    parking: "Парковка во дворе, 6 мест",
    phone: "+7 (812) 000-00-07",
    site: "svodchataya.ru",
    rating: { value: 4.7, count: 189 },
    cover: dinner,
    gallery: [hall, heroClub, posterVocal],
    about: [
      "Небольшое бистро на 40 мест с открытой кухней. Меню меняется каждую неделю, по четвергам - винные ужины с сомелье.",
      "Днём работает бизнес-ланч, вечером - основное меню и барная карта.",
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
    name: "Точка сбора: Казанский собор, колоннада",
    kindLabel: "Точка сбора",
    age: "0+",
    city: "Санкт-Петербург",
    address: "Казанская пл., 2, у левого крыла колоннады",
    metro: "Невский проспект - 3 минуты пешком",
    transport: "Любой транспорт по Невскому проспекту",
    parking: "Парковки рядом нет",
    phone: "+7 (812) 000-00-08",
    site: "daibilet.ru",
    rating: null,
    cover: heroClub,
    gallery: [hall, dinner, posterSax],
    about: [
      "Отсюда стартуют пешие и автобусные экскурсии. Группа собирается у левого крыла колоннады, со стороны канала Грибоедова.",
      "Гид приходит за 15 минут до начала и стоит с табличкой. Ждать внутри собора не нужно - сбор всегда снаружи.",
    ],
    facts: [
      ["Сбор", "за 10 минут"],
      ["Ориентир", "левое крыло колоннады"],
      ["Гид", "с табличкой Дайбилет"],
      ["Укрытие от дождя", "под колоннадой"],
    ],
    priceFrom: "700 руб.",
    nextDate: "сегодня",
    wayToFind: [
      "Выходите из метро «Невский проспект» к каналу Грибоедова",
      "Идите вдоль колоннады до левого крыла",
      "Гид стоит у третьей колонны с табличкой Дайбилет",
    ],
    events: [
      evt("mp1", "Пешая экскурсия «Сердце Невского»", "сегодня, пт", "11:00", "2 часа", "от 700 руб.", hall, "Сбор 10:50"),
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
  "theater",
  "concert_hall",
  "club_bar",
  "pier",
  "outdoor",
  "sport",
  "gastro",
  "meeting_point",
];
