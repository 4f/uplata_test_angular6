import { Category }       from 'classes/category';
import { CategoryMethod } from 'classes/category_method';

const methods17: CategoryMethod[] = [
    {
        name: "Goodline",
        title: "Goodline",
        alt: "Goodline | сервис uplata.ua",
        path: "/popolnit-mobilnyy/goodline-17739/?secure",
        icon: "https://cdn.uplata.com/pservices/i/1388.png"
    },
    {
        name: "lifecell (по лицевому счету)",
        title: "lifecell (по лицевому счету)",
        alt: "lifecell (по лицевому счету) | сервис uplata.ua",
        path: "/popolnit-mobilnyy/lifecell-po-licevomu-schetu-56142/?secure",
        icon: "https://cdn.uplata.com/pservices/i/2070.png"
    },
    {
        name: "lifecell (по номеру телефона)",
        title: "lifecell (по номеру телефона)",
        alt: "lifecell (по номеру телефона) | сервис uplata.ua",
        path: "/popolnit-mobilnyy/lifecell-po-nomeru-telefona-44198/?secure",
        icon: "https://cdn.uplata.com/pservices/i/2210.png"
    },
    {
        name: "TezTelecom для агентств",
        title: "TezTelecom для агентств",
        alt: "TezTelecom для агентств | сервис uplata.ua",
        path: "/popolnit-mobilnyy/teztelecom-dlya-agentstv-83975/?secure",
        icon: "https://cdn.uplata.com/pservices/i/2013.png"
    },
    {
        name: "TezTelecom для туристов",
        title: "TezTelecom для туристов",
        alt: "TezTelecom для туристов | сервис uplata.ua",
        path: "/popolnit-mobilnyy/teztelecom-dlya-turistov-36645/?secure",
        icon: "https://cdn.uplata.com/pservices/i/2068.png"
    },
    {
        name: "TravelSIM",
        title: "TravelSIM",
        alt: "TravelSIM | сервис uplata.ua",
        path: "/popolnit-mobilnyy/travelsim-32239/?secure",
        icon: "https://cdn.uplata.com/pservices/i/2372.png"
    },
    {
        name: "Vodafone (по лицевому счету)",
        title: "Vodafone (по лицевому счету)",
        alt: "Vodafone (по лицевому счету) | сервис uplata.ua",
        path: "/popolnit-mobilnyy/vodafone-po-licevomu-schetu-15123/?secure",
        icon: "https://cdn.uplata.com/pservices/i/2689.png"
    },
    {
        name: "Vodafone (по номеру телефона)",
        title: "Vodafone (по номеру телефона)",
        alt: "Vodafone (по номеру телефона) | сервис uplata.ua",
        path: "/popolnit-mobilnyy/vodafone-po-nomeru-telefona-32192/?secure",
        icon: "https://cdn.uplata.com/pservices/i/2687.png"
    },
    {
        name: "Yezzz!",
        title: "Yezzz!",
        alt: "Yezzz! | сервис uplata.ua",
        path: "/popolnit-mobilnyy/yezzz-34198/?secure",
        icon: "https://cdn.uplata.com/pservices/i/2472.png"
    },
    {
        name: "Интертелеком",
        title: "Интертелеком",
        alt: "Интертелеком | сервис uplata.ua",
        path: "/popolnit-mobilnyy/intertelekom-68395/?secure",
        icon: "https://cdn.uplata.com/pservices/i/2447.png"
    },
    {
        name: "Киевстар (по лицевому счету)",
        title: "Киевстар (по лицевому счету)",
        alt:  "Киевстар (по лицевому счету) | сервис uplata.ua",
        path: "/popolnit-mobilnyy/kievstar-po-licevomu-schetu-75487/?secure",
        icon: "https://cdn.uplata.com/pservices/i/1545.png"
    },
    {
        name: "Киевстар (по номеру телефона)",
        title: "Киевстар (по номеру телефона)",
        alt:  "Киевстар (по номеру телефона) | сервис uplata.ua",
        path: "/popolnit-mobilnyy/kievstar-po-nomeru-telefona-34316/?secure",
        icon: "https://cdn.uplata.com/pservices/i/1401.png"
    },
    {
        name: "Тревелфон",
        title: "Тревелфон",
        alt:  "Тревелфон | сервис uplata.ua",
        path: "/popolnit-mobilnyy/trevelfon-11915/?secure",
        icon: "https://cdn.uplata.com/pservices/i/2458.png"
    },
    {
        name: "ТриМоб (по лицевому счету)",
        title: "ТриМоб (по лицевому счету)",
        alt:  "ТриМоб (по лицевому счету) | сервис uplata.ua",
        path: "/popolnit-mobilnyy/trimob-po-licevomu-schetu-91496/?secure",
        icon: "https://cdn.uplata.com/pservices/i/2229.png"
    },
    {
        name: "ТриМоб (по номеру телефона)",
        title: "ТриМоб (по номеру телефона)",
        alt:  "ТриМоб (по номеру телефона) | сервис uplata.ua",
        path: "/popolnit-mobilnyy/trimob-po-nomeru-telefona-15715/?secure",
        icon: "https://cdn.uplata.com/pservices/i/1414.png"
    }
]

export const CATEGORIES: Category[] = [
    { id:"cat_17", name: "Пополнить мобильный",            methods: methods17,   path: "/popolnit-mobilnyy" },
    { id:"cat_18", name: "Оплата коммунальных услуг",      methods: [],          path: "/oplata-kommunalnyh-uslug" },
    { id:"cat_19", name: "Хостинг и доменные имена",       methods: [],          path: "/hosting-i-domennye-imena" },
    { id:"cat_20", name: "IP- и домашняя телефония",       methods: [],          path: "/ip-i-domashnyaya-telefoniya" },
    { id:"cat_21", name: "Интернет и телевидение",         methods: [],          path: "/internet-i-televidenie" },
    { id:"cat_22", name: "Банки и финансовые услуги",      methods: [],          path: "/banki-i-finansovye-uslugi" },
    { id:"cat_23", name: "Игры и соцсети",                 methods: [],          path: "/igry-i-socseti" },
    { id:"cat_24", name: "Штрафы за нарушение ПДД",        methods: [],          path: "/shtrafy-za-narushenie-pdd" },
    { id:"cat_25", name: "Благотворительность",            methods: [],          path: "/blagotvoritelnost" },
    { id:"cat_26", name: "Дистрибуция и скидочные купоны", methods: [],          path: "/distribuciya-i-skidochnye-kupony" },
    { id:"cat_27", name: "Другие услуги",                  methods: [],          path: "/drugie-uslugi" }
]