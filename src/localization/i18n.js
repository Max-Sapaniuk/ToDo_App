import i18n from "i18next";
import {initReactI18next} from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
    en: {
        translation: {
            "Today": "Today",
            "All": "All",
            "Completed": "Completed",
            "In Progress": "In Progress",
            "Removed": "Removed",
            "Category not exist": "Category with this name doesn't exist",
            "There is no task": "There is no any task in this category",
            "Last edit": "Last edit",
            "Details about task": "Details about task",
            "Header": "Header",
            "Body": "Body",
            "Status": "Status",
            "Close": "Close",
            "Create New Task": "Create New Task",
            "Create Task": "Create Task",
            "Update Task": "Update Task",
            "Update": "Update",
            "Create": "Create",
            "Cancel": "Cancel",
            "Header is required": "Header is required",
            "Body is required": "Body is required",
            "copyright": "Web-site was developed by Maksym Sapaniuk",
            "contacts": "Contacts",
        }
    },
    ua: {
        translation: {
            "Today": "Сьогодні",
            "All": "Всі",
            "Completed": "Виконані",
            "In Progress": "У прогоресі",
            "Removed": "Видалені",
            "Category not exist": "Категорія  з цією назвою не існує",
            "There is no task": "У даній категорії немає завдань",
            "Last edit": "Останнє редагування",
            "Details about task": "Деталі завдання",
            "Header": "Заголовок",
            "Body": "Опис",
            "Status": "Статус",
            "Close": "Закрити",
            "Create New Task": "Створити Нове Завдання",
            "Create Task": "Створити Завдання",
            "Update Task": "Оновити завдання",
            "Update": "Оновити",
            "Create": "Створити",
            "Cancel": "Відмінити",
            "Header is required": "Загаловок є обов'язковим",
            "Body is required": "Опис є обов'язковим",
            "copyright": "Веб-сайт розробив Сапанюк Максим",
            "contacts": "Контакти",
        }
    }
};

i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources,
        lng: "en", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
        // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
        // if you're using a language detector, do not define the lng option

        interpolation: {
            escapeValue: false // react already safes from xss
        }
    });

export default i18n;