function arrayRandElement(arr) {
    let rand = Math.floor(Math.random() * arr.length);
    return arr[rand];
};

function generateTulenPain() {
    let beginPhrases = [
        "Как же болит",
        "У меня болит",
        "Ноет",
        "Раскалывается"
    ];

    let pains = [
        "жопа",
        "палец",
        "нос",
        "говно",
        "нога",
        "сустав",
        "голова",
        "ребро",
        "вагина",
        "горло",
        "рука",
        "живот",
        "связка",
        "спина",
        "шея"
    ];

    return arrayRandElement(beginPhrases) + " " + arrayRandElement(pains) + ".";
};

function generateTulenEmotion() {
    let emotions = [
        "АААААААААААААААААААААААААААААААААААА!",
        "Как все заебало.",
        "Господи, за что?",
        "Как можно быть таким тупым?",
        "Ненавижу.",
        "Я так больше не могу.",
        "Какой же красавчик.",
        "УРАУРАУРА!",
        "Себастиан Стен, ААААААААА!",
        "Киса!!!!",
        "Хочу жрать.",
        "ОУУУУУУУУУУ.",
        "Хочу внимания!",
        "Пошли курить.",
        "Хочу спать.",
        "Нужно позвонить своим.",
        "Псина тупая!.",
        "Нужно помыться.",
        "Хочу писать.",
        "Скоро месячные."
    ];

    return arrayRandElement(emotions);
};

function generateTulenOffense() {
    let victims = [
        "Рудь",
        "Николай Козко",
        "Омельченко",
        "Стрижко",
        "МРД",
        "Тарасенков"
    ];

    let offenses = [
        "тварь",
        "мразь",
        "пидор",
        "блять",
        "сука",
        "идиот",
        "мудак",
        "шлюха"
    ];


    return arrayRandElement(victims) + " - " + arrayRandElement(offenses) + ".";
};

function generateTulenSelfDeprecation() {
    let deprecations = [
        "Я тупая",
        "Я страшная",
        "Я жирная",
        "У меня не получится",
        "Я не справлюсь",
        "Меня бросят",
        "Ничего не изменится"
    ];

    return arrayRandElement(deprecations) + ".";
};

function generateTulenWork() {
    let beginPhrases = [
        "Я сегодня делала",
        "Пришлось сегодня делать"
    ];

    let works = [
        "бирбутики",
        "хорику",
        "сверки",
        "АП",
        "нац. акции",
        "накладные",
        "акты",
        "реестр"
    ];

    return arrayRandElement(beginPhrases) + " " + arrayRandElement(works) + ".";
};

function generateTulenSpeech() {
    let speech = "";

    let tulenFunction = [
        generateTulenPain,
        generateTulenEmotion,
        generateTulenOffense,
        generateTulenSelfDeprecation,
        generateTulenWork
    ]

    for (let i = 0; i < 6; i++) {
        speech += arrayRandElement(tulenFunction)() + " ";
    }

    alert(speech);
}