import { createLazyFileRoute, Link } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";

export const Route = createLazyFileRoute("/")({
    component: Index,
});

function Index() {
    const { t } = useTranslation();
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    const topCartoons = [
        {
            title: "Головоломка 2",
            description:
                "Продолжение приключений Райлли и ее эмоций, которые сталкиваются с новыми вызовами и открытиями.",
            image:
                "https://bluraymania.com.ua/cdn/shop/articles/multfilm-golovolomka-2-preodolel-otmetku-v-900-mln-doll-701482.jpg?v=1719654314&width=2200", // Замените на реальный URL изображения
        },
        {
            title: "Муфаса: Король лев",
            description:
                "Приквел к легендарному фильму о Муфасе и его приключениях до событий 'Короля льва'.",
            image: "https://www.caravan.kz/wp-content/uploads/images/700702.jpg", // Замените на реальный URL изображения
        },
        {
            title: "Человек-паук: Через вселенные 3",
            description:
                "Третий фильм о Человеке-пауке, который исследует новые вселенные и сталкивается с новыми противниками.",
            image:
                "https://s1.stc.all.kpcdn.net/afisha/msk/wp-content/uploads/sites/5/2023/02/chelovek-pauk.jpg", // Замените на реальный URL изображения
        },
        {
            title: "Властелины вселенной",
            description:
                "Приключения героев, борющихся за спасение вселенной от злодеев.",
            image:
                "https://s1.stc.all.kpcdn.net/afisha/msk/wp-content/uploads/sites/5/2023/02/vlasteliny-vselennoj.jpg", // Замените на реальный URL изображения
        },
        {
            title: "Гадкий я 4",
            description:
                "Продолжение истории Гру и его забавных приключений с Миньонами.",
            image:
                "https://ss.sport-express.ru/userfiles/materials/202/2025021/large.jpg", // Замените на реальный URL изображения
        },
    ];

    const topMovies = [
        {
            title: "Дэдпул 3",
            description:
                "«Дэдпу́л и Росома́ха» — американский полнометражный художественный супергеройский фильм 2024 года, снятый по мотивам комиксов компании Marvel Comics о Дэдпуле и Росомахе. Снят компаниями Marvel Studios, Maximum Effort и 21 Laps Entertainment и распространяется Walt Disney Studios Motion Pictures.",
            image:
                "https://www.soyuz.ru/public/uploads/files/2/7628045/202309212039538137c82a05.jpg", // Замените на реальный URL изображения
        },
        {
            title: "Планета обезьян: Новое царство",
            description:
                "Плане́та обезья́н: Но́вое ца́рство» — американский научно-фантастический боевик режиссёра Уэса Болла и сценаристов Джоша Фридмана, Рика Джаффы, Аманды Сильвер и Патрика Эйсона. Сиквел картины «Планета обезьян: Война» 2017 года и четвёртая часть перезапущенной франшизы «Планета обезьян». В главной роли Оуэн Тиг.",
            image:
                "https://focus.ua/static/storage/thumbs/920x465/d/50/60410627-e1ea529ddefcc6f2629654443f15c50d.jpg?v=8804_1", // Замените на реальный URL изображения
        },
        {
            title: "Ребел-Ридж",
            description:
                "«Ребел-Ридж» — будущий американский триллер режиссёра Джереми Солнье по его же сценарию. Главные роли в фильме исполнили Аарон Пьер, Аннасофия Робб, Джеймс Бэдж Дэйл, Джеймс Кромвелл и Дон Джонсон. Премьера фильма на Netflix запланирована на 6 сентября 2024 года. ",
            image:
                "https://img.championat.ru/s/732x488/news/big/f/l/rebel-ridzh-2024-obzor-otzyv-vpechatleniya_17258792271243921511.jpg", // Замените на реальный URL изображения
        },
        {
            title: "Годзилла и Конг: Новая империя",
            description:
                "«Годзи́лла и Конг: Но́вая импе́рия» — американский фильм о монстрах режиссёра Адама Вингарда.",
            image:
                "https://ss.sport-express.ru/userfiles/materials/199/1996118/volga.jpg", // Замените на реальный URL изображения
        },
        {
            title: "Охотники за привидениями: Леденящий ужас",
            description:
                "«Охо́тники за привиде́ниями: Леденя́щий у́жас» — американский фантастический комедийный фильм, снятый Гилом Кинаном в соавторстве с Джейсоном Райтманом. Продолжение фильмов «Охотники за привидениями», «Охотники за привидениями 2» и «Охотники за привидениями: Наследники», четвёртая часть по хронологии и пятая по счёту.",
            image:
                "https://www.soyuz.ru/public/uploads/files/2/7633317/20240325121249a091cb6421.jpg", // Замените на реальный URL изображения
        },
    ];

    const topSeries = [
        {
            title: "Рипли",
            description:
                "Сюжет основан на приключениях Рипли, героини фильма «Чужой», и исследует ее жизнь и испытания в мире, полном опасностей.",
            image:
                "https://oktavaklaster.ru/media/images/bf0982e1-3d33-430a-8971-e5284851cd86.jpg", // Замените на реальный URL изображения
        },
        {
            title: "Олененок",
            description:
                "История о дружбе между человеком и оленем, которая проходит через множество испытаний и приключений.",
            image:
                "https://kinopoisk-ru.clstorage.net/E29S24Z32/b04beb2AmeGC/GCq1L6EIiYJn4lV_c1S-g_salrfWUm5ni380hm59WEWUt_-O05tqtCxtrzU5fmE3z4di-h7Ukjhda2AYIeiV5g3uJOqF_a3XVqZkz4NQH3I-HyNnkpbr8l-vMWNaOnsHFkUtfNAoyHJvjC91CU5Bd1uDRy_qYSPM-Mj26QJ687PMH0EMMqoJsvbQMUwhtXiTO5t0J6aEbbfoCYTUjiqI1Db3L5yjWQqifRzMFSwv44U54pS9SjAGX0lIN31SmEHzz-1i3MLaWOLW4HF_MoTKcNiKx4WVlK6VS6lmFC8b22X0hk59Iev7cA793scsrrMHWeC2z8lA5E2ZaIQP8VizEf1_cR3QmIowlAERLbJXuuAb6FWUx_TdBYpKhWZfSanmNrQMHbI7GyJdXl8nTK3RB2uRJY5pExd_-ShXzFGI8pHffQM_k_i4Aefy8t1Tx3tRKZs1Vyfk7vaoelYUzekKBxbWH9wx2qiQLc_c9h7OY9a7E-f_a4OmPYvKpX4iSpLjTB4iv_Lp6CFG0ZO-IXTLI3mrZWSF5nzViuq2pr1L6XWEhg4-E_iKc8_9rIS8_XB3iUDETAljh53K21YOQTsx8VyfYU0AOQiiJcLArOBV6wMLORX1VEYOJLibhXUv-bindydevBEbaqLefg72bd4DF5pTx75JEha-eUsnz4KaMNEfDoEesiq4QiXCwT7SF2gxaxq15Na0DgVpmoYnHStrt1fULtzx-2gj3yx-1T_eoHUpYdVOCGEnzcm4FQwC-HCjrxwTzyN7CtAHsvI_kQVbYLgKtHYV5f-lCTq2R63qusdkNB2co2krUb_dP6YPLnB3KAHmzwvRpYxJGFV9wIhBkmz8w-2i-LiA1FAjvgAlSSIJWwYXV1SsZ7pZVkTtqaqXdEZNzPAomWO93Q717M1RJNrgtN0oUAV8WUoEvSBJ8EEcnADc8ug7gxSzUL1glSqgSTi0B6bk3ybpC9ekjArp5nVnHp1gG2jxnG8cN33uQRTJEubOCiE2H2nZZi4x6NJDfLyAn6NbCOJUkAPdQLUa4FgaxXe1Rj73uRl25u-JW3cXZR4swEkbME4uHBUuj3OU2gNmrbljJr3q2gQOIWuioG7sUlwSSlpixdMjLPF3G2ArauXlZ2eftSuYxJbuqzh35mU-7hEpSnBebZwWj4xjVasiNV2qMAV_61tkvZDbI8OO7qBdEOvKEjei8_2BZBtheqs01Lc1rJaoqeXlH8lYZGX0XN8wOWuBzh_vBA8dU9bYYPesWaAXnsiqd92xOJKyHa1z79IoWgFko5APA-cqkHmoJfbWlx5miGim1XxZehamlixuEJq6MuxM_iaNzcG1yQM37vpT5r8q29ev05kz44zeA6_CGjhQNmMCP8Fk-jDoKoS251Z-JPtoRfUuONoGNGXsPJPqeKPv3M1n_T2BF3uzFI0KMxdseRl3_jFK4LE-30GuEqq7wObQcw4whrgTaJtFpgd17-ZKKbY0zelJlSXGPE1ROvhyLs4-FfztsVQb89VPaXM3bvl4FgyTWCLjbB4hTjApyKCkIQEvAmX7UlgqBHVVtJ0FqQmWZ5576cWUB0zsQ_qYkg4__zVurAMmu6AFjArDJo9pCDafg5og0o_tIN_h65oAxlEjTCG1eUI7KmZElJbvxHtrBCefKBg1FNdcnQO6ysCu_YyHHL6jFdni5Hx60hauuXkVfWKrsZH8jhNfQOrYAdbgQQ6Ch5iRS5l39rWm_hcJeUbkbaqZxgZFHHyQiooyn-wMRg2cwmY40DSO-WPFTZnZ1-wxeABR3pzCvtB6CBKGoZLdQgXL4ymrN3QkdA4nanl0Zr3IGYWExV5NMJsrUdwvfRZszhO3yPI0vchAxf8rymeco2hDwK29416zecpyJOEz7rHVWPPp-NQHVbRvh3mYx3b-eomlh8cv_QBKe0DfLXy1_0xRRYogFz3JgvQsujmWXBM6swCvPXPuwxqqcRaRQjwwFTqhexsFxAdEDjWoeOQ3PwrqFKYX3gxzOSsy3g5PVd1uIOeLw2c-aTAEDcqJlDwCW5Cwfr9BrLLIGOBXYSHuoLa6IAqLZ_cndw4mWlpk5s1ouHfW5X3sUeiZEK0uPwT9viDFeDEU3arwx7576jdMc6uhwi3vwZyx6htglkBDXWIVC0I7a0d1R6R91FhJRjccWNqFhtXt_PIpenF8L9523A_y9zsDV0-aQfUduyuWTBEIgMO8LRBP8srbsKZTw-9zBdqQyAhER7dW_7SKmoZUrwk5tlSXHA-ASRtyvxzeVN1uwKcbkga8OHK3TujbZD2zCNEjnr1yjTJJyHAGAGFdYyQZUjtoFHQE5HxVGrrkJ2_IyoSW5_4c8BvJMj5_rObt3FFlyZHU_hgDJA5J6xV_Ecsz4Wysgv1h-6nQ14GDH0GWi0K6C1aX1tf81RiI9gSteRnWRqXtrQOrKhPOz75VX45BhhoRBS57APZMuKt0P1BYMkN9v8KdkwiKQ3SQcv_jZiohWFrEROb1jOdru1RW3VkoJHbV_sxwqpoRnu1vF1-coYWZgPUv-bIFHxoKRU9jqFPCjZxjDfJaObAkQPIOIWUqgJg45ta2lw4VuOu19z-52MeUtfyeglgocB5dLjZu_oL3KxImzFpxtb1LaSSOEZqAAlwvMTyCmNpwVKDDfQJlqnD4SsXVFUWsFJr6ZsS8CLll1dWu3BNJGzOPLA1EjAzAhToRBN3b8QSNaNoUXnGo8jJv_8FsgQhYkiYTQL_QFBswmUgV5ZT2rEfpOXdUrXkYpWa3P79yOqqhv_1tBK8ewVYZ89UdGxNnb4q6pW4B-jOT79_Qz_FY6jEEEOIMgJU7AAo49IbVpa2E21pUBxypKXdGRDz8QosYcIxM_mauncLn6kM2XBgjNe0IOyfvwtrB014s8ZyjWllANoExzAIUqOLJyEVVllS_JPrrhISdGvlUlMRvnUBImvHMHAxmXI3TJOog9445weccQ", // Замените на реальный URL изображения
        },
        {
            title: "Fallout",
            description:
                "Сериал основан на популярной игре и рассказывает о жизни выживших в постапокалиптическом мире.",
            image:
                "https://kinopoisk-ru.clstorage.net/E29S24Z32/b04beb2AmeGC/GCq1L6EIiYJn4lV_c1S-g_salrfWUm5ni380hm59WEWUt_-O05tqtCxtrzU5fmE3z4di6v5EwniNbhAIJMj1ExiuAcrlXZ2XZpZ0r5Zgrzc-j3OyAtbOp-pfMWNaOnsHFkUtfNAoyHJvjC91CU5Bd1uDRy_qYSPM-Mj26QJ687PMH0EMMqoJsvbQMUwhtXiTO5t0J6aEbbfoCYTUjiqI1Db3L5yjWQqifRzMFSwv44U54pS9SjAGX0lIN31SmEHzz-1i3MLaWOLW4HF_MoTKcNiKx4WVlK6VS6lmFC8b22X0hk59Iev7cA793scsrrMHWeC2z8lA5E2ZaIQP8VizEf1_cR3QmIowlAERLbJXuuAb6FWUx_TdBYpKhWZfSanmNrQMHbI7GyJdXl8nTK3RB2uRJY5pExd_-ShXzFGI8pHffQM_k_i4Aefy8t1Tx3tRKZs1Vyfk7vaoelYUzekKBxbWH9wx2qiQLc_c9h7OY9a7E-f_a4OmPYvKpX4iSpLjTB4iv_Lp6CFG0ZO-IXTLI3mrZWSF5nzViuq2pr1L6XWEhg4-E_iKc8_9rIS8_XB3iUDETAljh53K21YOQTsx8VyfYU0AOQiiJcLArOBV6wMLORX1VEYOJLibhXUv-bindydevBEbaqLefg72bd4DF5pTx75JEha-eUsnz4KaMNEfDoEesiq4QiXCwT7SF2gxaxq15Na0DgVpmoYnHStrt1fULtzx-2gj3yx-1T_eoHUpYdVOCGEnzcm4FQwC-HCjrxwTzyN7CtAHsvI_kQVbYLgKtHYV5f-lCTq2R63qusdkNB2co2krUb_dP6YPLnB3KAHmzwvRpYxJGFV9wIhBkmz8w-2i-LiA1FAjvgAlSSIJWwYXV1SsZ7pZVkTtqaqXdEZNzPAomWO93Q717M1RJNrgtN0oUAV8WUoEvSBJ8EEcnADc8ug7gxSzUL1glSqgSTi0B6bk3ybpC9ekjArp5nVnHp1gG2jxnG8cN33uQRTJEubOCiE2H2nZZi4x6NJDfLyAn6NbCOJUkAPdQLUa4FgaxXe1Rj73uRl25u-JW3cXZR4swEkbME4uHBUuj3OU2gNmrbljJr3q2gQOIWuioG7sUlwSSlpixdMjLPF3G2ArauXlZ2eftSuYxJbuqzh35mU-7hEpSnBebZwWj4xjVasiNV2qMAV_61tkvZDbI8OO7qBdEOvKEjei8_2BZBtheqs01Lc1rJaoqeXlH8lYZGX0XN8wOWuBzh_vBA8dU9bYYPesWaAXnsiqd92xOJKyHa1z79IoWgFko5APA-cqkHmoJfbWlx5miGim1XxZehamlixuEJq6MuxM_iaNzcG1yQM37vpT5r8q29ev05kz44zeA6_CGjhQNmMCP8Fk-jDoKoS251Z-JPtoRfUuONoGNGXsPJPqeKPv3M1n_T2BF3uzFI0KMxdseRl3_jFK4LE-30GuEqq7wObQcw4whrgTaJtFpgd17-ZKKbY0zelJlSXGPE1ROvhyLs4-FfztsVQb89VPaXM3bvl4FgyTWCLjbB4hTjApyKCkIQEvAmX7UlgqBHVVtJ0FqQmWZ5576cWUB0zsQ_qYkg4__zVurAMmu6AFjArDJo9pCDafg5og0o_tIN_h65oAxlEjTCG1eUI7KmZElJbvxHtrBCefKBg1FNdcnQO6ysCu_YyHHL6jFdni5Hx60hauuXkVfWKrsZH8jhNfQOrYAdbgQQ6Ch5iRS5l39rWm_hcJeUbkbaqZxgZFHHyQiooyn-wMRg2cwmY40DSO-WPFTZnZ1-wxeABR3pzCvtB6CBKGoZLdQgXL4ymrN3QkdA4nanl0Zr3IGYWExV5NMJsrUdwvfRZszhO3yPI0vchAxf8rymeco2hDwK29416zecpyJOEz7rHVWPPp-NQHVbRvh3mYx3b-eomlh8cv_QBKe0DfLXy1_0xRRYogFz3JgvQsujmWXBM6swCvPXPuwxqqcRaRQjwwFTqhexsFxAdEDjWoeOQ3PwrqFKYX3gxzOSsy3g5PVd1uIOeLw2c-aTAEDcqJlDwCW5Cwfr9BrLLIGOBXYSHuoLa6IAqLZ_cndw4mWlpk5s1ouHfW5X3sUeiZEK0uPwT9viDFeDEU3arwx7576jdMc6uhwi3vwZyx6htglkBDXWIVC0I7a0d1R6R91FhJRjccWNqFhtXt_PIpenF8L9523A_y9zsDV0-aQfUduyuWTBEIgMO8LRBP8srbsKZTw-9zBdqQyAhER7dW_7SKmoZUrwk5tlSXHA-ASRtyvxzeVN1uwKcbkga8OHK3TujbZD2zCNEjnr1yjTJJyHAGAGFdYyQZUjtoFHQE5HxVGrrkJ2_IyoSW5_4c8BvJMj5_rObt3FFlyZHU_hgDJA5J6xV_Ecsz4Wysgv1h-6nQ14GDH0GWi0K6C1aX1tf81RiI9gSteRnWRqXtrQOrKhPOz75VX45BhhoRBS57APZMuKt0P1BYMkN9v8KdkwiKQ3SQcv_jZiohWFrEROb1jOdru1RW3VkoJHbV_sxwqpoRnu1vF1-coYWZgPUv-bIFHxoKRU9jqFPCjZxjDfJaObAkQPIOIWUqgJg45ta2lw4VuOu19z-52MeUtfyeglgocB5dLjZu_oL3KxImzFpxtb1LaSSOEZqAAlwvMTyCmNpwVKDDfQJlqnD4SsXVFUWsFJr6ZsS8CLll1dWu3BNJGzOPLA1EjAzAhToRBN3b8QSNaNoUXnGo8jJv_8FsgQhYkiYTQL_QFBswmUgV5ZT2rEfpOXdUrXkYpWa3P79yOqqhv_1tBK8ewVYZ89UdGxNnb4q6pW4B-jOT79_Qz_FY6jEEEOIMgJU7AAo49IbVpa2E21pUBxypKXdGRDz8QosYcIxM_mauncLn6kM2XBgjNe0IOyfvwtrB014s8ZyjWllANoExzAIUqOLJyEVVllS_JPrrhISdGvlUlMRvnUBImvHMHAxmXI3TJOog9445weccQ", // Замените на реальный URL изображения
        },
        {
            title: "Сёгун",
            description:
                "История о западном моряке, который оказывается в Японии во времена самураев и пытается выжить в новой культуре.",
            image:
                "https://kinopoisk-ru.clstorage.net/E29S24Z32/b04beb2AmeGC/GCq1L6EIiYJn4lV_c1S-g_salrfWUm5ni380hm59WEWUt_-O05tqtCxtrzU5fmE3z4diml5ksjjdbhBoge2w1n27xN-l-IjXZtYEGqYwCid7aibHksPesloPMWNaOnsHFkUtfNAoyHJvjC91CU5Bd1uDRy_qYSPM-Mj26QJ687PMH0EMMqoJsvbQMUwhtXiTO5t0J6aEbbfoCYTUjiqI1Db3L5yjWQqifRzMFSwv44U54pS9SjAGX0lIN31SmEHzz-1i3MLaWOLW4HF_MoTKcNiKx4WVlK6VS6lmFC8b22X0hk59Iev7cA793scsrrMHWeC2z8lA5E2ZaIQP8VizEf1_cR3QmIowlAERLbJXuuAb6FWUx_TdBYpKhWZfSanmNrQMHbI7GyJdXl8nTK3RB2uRJY5pExd_-ShXzFGI8pHffQM_k_i4Aefy8t1Tx3tRKZs1Vyfk7vaoelYUzekKBxbWH9wx2qiQLc_c9h7OY9a7E-f_a4OmPYvKpX4iSpLjTB4iv_Lp6CFG0ZO-IXTLI3mrZWSF5nzViuq2pr1L6XWEhg4-E_iKc8_9rIS8_XB3iUDETAljh53K21YOQTsx8VyfYU0AOQiiJcLArOBV6wMLORX1VEYOJLibhXUv-bindydevBEbaqLefg72bd4DF5pTx75JEha-eUsnz4KaMNEfDoEesiq4QiXCwT7SF2gxaxq15Na0DgVpmoYnHStrt1fULtzx-2gj3yx-1T_eoHUpYdVOCGEnzcm4FQwC-HCjrxwTzyN7CtAHsvI_kQVbYLgKtHYV5f-lCTq2R63qusdkNB2co2krUb_dP6YPLnB3KAHmzwvRpYxJGFV9wIhBkmz8w-2i-LiA1FAjvgAlSSIJWwYXV1SsZ7pZVkTtqaqXdEZNzPAomWO93Q717M1RJNrgtN0oUAV8WUoEvSBJ8EEcnADc8ug7gxSzUL1glSqgSTi0B6bk3ybpC9ekjArp5nVnHp1gG2jxnG8cN33uQRTJEubOCiE2H2nZZi4x6NJDfLyAn6NbCOJUkAPdQLUa4FgaxXe1Rj73uRl25u-JW3cXZR4swEkbME4uHBUuj3OU2gNmrbljJr3q2gQOIWuioG7sUlwSSlpixdMjLPF3G2ArauXlZ2eftSuYxJbuqzh35mU-7hEpSnBebZwWj4xjVasiNV2qMAV_61tkvZDbI8OO7qBdEOvKEjei8_2BZBtheqs01Lc1rJaoqeXlH8lYZGX0XN8wOWuBzh_vBA8dU9bYYPesWaAXnsiqd92xOJKyHa1z79IoWgFko5APA-cqkHmoJfbWlx5miGim1XxZehamlixuEJq6MuxM_iaNzcG1yQM37vpT5r8q29ev05kz44zeA6_CGjhQNmMCP8Fk-jDoKoS251Z-JPtoRfUuONoGNGXsPJPqeKPv3M1n_T2BF3uzFI0KMxdseRl3_jFK4LE-30GuEqq7wObQcw4whrgTaJtFpgd17-ZKKbY0zelJlSXGPE1ROvhyLs4-FfztsVQb89VPaXM3bvl4FgyTWCLjbB4hTjApyKCkIQEvAmX7UlgqBHVVtJ0FqQmWZ5576cWUB0zsQ_qYkg4__zVurAMmu6AFjArDJo9pCDafg5og0o_tIN_h65oAxlEjTCG1eUI7KmZElJbvxHtrBCefKBg1FNdcnQO6ysCu_YyHHL6jFdni5Hx60hauuXkVfWKrsZH8jhNfQOrYAdbgQQ6Ch5iRS5l39rWm_hcJeUbkbaqZxgZFHHyQiooyn-wMRg2cwmY40DSO-WPFTZnZ1-wxeABR3pzCvtB6CBKGoZLdQgXL4ymrN3QkdA4nanl0Zr3IGYWExV5NMJsrUdwvfRZszhO3yPI0vchAxf8rymeco2hDwK29416zecpyJOEz7rHVWPPp-NQHVbRvh3mYx3b-eomlh8cv_QBKe0DfLXy1_0xRRYogFz3JgvQsujmWXBM6swCvPXPuwxqqcRaRQjwwFTqhexsFxAdEDjWoeOQ3PwrqFKYX3gxzOSsy3g5PVd1uIOeLw2c-aTAEDcqJlDwCW5Cwfr9BrLLIGOBXYSHuoLa6IAqLZ_cndw4mWlpk5s1ouHfW5X3sUeiZEK0uPwT9viDFeDEU3arwx7576jdMc6uhwi3vwZyx6htglkBDXWIVC0I7a0d1R6R91FhJRjccWNqFhtXt_PIpenF8L9523A_y9zsDV0-aQfUduyuWTBEIgMO8LRBP8srbsKZTw-9zBdqQyAhER7dW_7SKmoZUrwk5tlSXHA-ASRtyvxzeVN1uwKcbkga8OHK3TujbZD2zCNEjnr1yjTJJyHAGAGFdYyQZUjtoFHQE5HxVGrrkJ2_IyoSW5_4c8BvJMj5_rObt3FFlyZHU_hgDJA5J6xV_Ecsz4Wysgv1h-6nQ14GDH0GWi0K6C1aX1tf81RiI9gSteRnWRqXtrQOrKhPOz75VX45BhhoRBS57APZMuKt0P1BYMkN9v8KdkwiKQ3SQcv_jZiohWFrEROb1jOdru1RW3VkoJHbV_sxwqpoRnu1vF1-coYWZgPUv-bIFHxoKRU9jqFPCjZxjDfJaObAkQPIOIWUqgJg45ta2lw4VuOu19z-52MeUtfyeglgocB5dLjZu_oL3KxImzFpxtb1LaSSOEZqAAlwvMTyCmNpwVKDDfQJlqnD4SsXVFUWsFJr6ZsS8CLll1dWu3BNJGzOPLA1EjAzAhToRBN3b8QSNaNoUXnGo8jJv_8FsgQhYkiYTQL_QFBswmUgV5ZT2rEfpOXdUrXkYpWa3P79yOqqhv_1tBK8ewVYZ89UdGxNnb4q6pW4B-jOT79_Qz_FY6jEEEOIMgJU7AAo49IbVpa2E21pUBxypKXdGRDz8QosYcIxM_mauncLn6kM2XBgjNe0IOyfvwtrB014s8ZyjWllANoExzAIUqOLJyEVVllS_JPrrhISdGvlUlMRvnUBImvHMHAxmXI3TJOog9445weccQ", // Замените на реальный URL изображения
        },
        {
            title: "Мистер и миссис Смит",
            description:
                "Комедийный экшен о паре, которые являются шпионами, работающими на противоборствующие стороны.",
            image:
                "https://kinopoisk-ru.clstorage.net/E29S24Z32/b04beb2AmeGC/GCq1L6EIiYJn4lV_c1S-g_salrfWUm5ni380hm59WEWUt_-O05tqtCxtrzU5fmE3z4dSil7U4hjdbiCdEY2Fs03rVOrgXfiHE0Mk_7ZVn2cLP0bHx4OOwt-_MWNaOnsHFkUtfNAoyHJvjC91CU5Bd1uDRy_qYSPM-Mj26QJ687PMH0EMMqoJsvbQMUwhtXiTO5t0J6aEbbfoCYTUjiqI1Db3L5yjWQqifRzMFSwv44U54pS9SjAGX0lIN31SmEHzz-1i3MLaWOLW4HF_MoTKcNiKx4WVlK6VS6lmFC8b22X0hk59Iev7cA793scsrrMHWeC2z8lA5E2ZaIQP8VizEf1_cR3QmIowlAERLbJXuuAb6FWUx_TdBYpKhWZfSanmNrQMHbI7GyJdXl8nTK3RB2uRJY5pExd_-ShXzFGI8pHffQM_k_i4Aefy8t1Tx3tRKZs1Vyfk7vaoelYUzekKBxbWH9wx2qiQLc_c9h7OY9a7E-f_a4OmPYvKpX4iSpLjTB4iv_Lp6CFG0ZO-IXTLI3mrZWSF5nzViuq2pr1L6XWEhg4-E_iKc8_9rIS8_XB3iUDETAljh53K21YOQTsx8VyfYU0AOQiiJcLArOBV6wMLORX1VEYOJLibhXUv-bindydevBEbaqLefg72bd4DF5pTx75JEha-eUsnz4KaMNEfDoEesiq4QiXCwT7SF2gxaxq15Na0DgVpmoYnHStrt1fULtzx-2gj3yx-1T_eoHUpYdVOCGEnzcm4FQwC-HCjrxwTzyN7CtAHsvI_kQVbYLgKtHYV5f-lCTq2R63qusdkNB2co2krUb_dP6YPLnB3KAHmzwvRpYxJGFV9wIhBkmz8w-2i-LiA1FAjvgAlSSIJWwYXV1SsZ7pZVkTtqaqXdEZNzPAomWO93Q717M1RJNrgtN0oUAV8WUoEvSBJ8EEcnADc8ug7gxSzUL1glSqgSTi0B6bk3ybpC9ekjArp5nVnHp1gG2jxnG8cN33uQRTJEubOCiE2H2nZZi4x6NJDfLyAn6NbCOJUkAPdQLUa4FgaxXe1Rj73uRl25u-JW3cXZR4swEkbME4uHBUuj3OU2gNmrbljJr3q2gQOIWuioG7sUlwSSlpixdMjLPF3G2ArauXlZ2eftSuYxJbuqzh35mU-7hEpSnBebZwWj4xjVasiNV2qMAV_61tkvZDbI8OO7qBdEOvKEjei8_2BZBtheqs01Lc1rJaoqeXlH8lYZGX0XN8wOWuBzh_vBA8dU9bYYPesWaAXnsiqd92xOJKyHa1z79IoWgFko5APA-cqkHmoJfbWlx5miGim1XxZehamlixuEJq6MuxM_iaNzcG1yQM37vpT5r8q29ev05kz44zeA6_CGjhQNmMCP8Fk-jDoKoS251Z-JPtoRfUuONoGNGXsPJPqeKPv3M1n_T2BF3uzFI0KMxdseRl3_jFK4LE-30GuEqq7wObQcw4whrgTaJtFpgd17-ZKKbY0zelJlSXGPE1ROvhyLs4-FfztsVQb89VPaXM3bvl4FgyTWCLjbB4hTjApyKCkIQEvAmX7UlgqBHVVtJ0FqQmWZ5576cWUB0zsQ_qYkg4__zVurAMmu6AFjArDJo9pCDafg5og0o_tIN_h65oAxlEjTCG1eUI7KmZElJbvxHtrBCefKBg1FNdcnQO6ysCu_YyHHL6jFdni5Hx60hauuXkVfWKrsZH8jhNfQOrYAdbgQQ6Ch5iRS5l39rWm_hcJeUbkbaqZxgZFHHyQiooyn-wMRg2cwmY40DSO-WPFTZnZ1-wxeABR3pzCvtB6CBKGoZLdQgXL4ymrN3QkdA4nanl0Zr3IGYWExV5NMJsrUdwvfRZszhO3yPI0vchAxf8rymeco2hDwK29416zecpyJOEz7rHVWPPp-NQHVbRvh3mYx3b-eomlh8cv_QBKe0DfLXy1_0xRRYogFz3JgvQsujmWXBM6swCvPXPuwxqqcRaRQjwwFTqhexsFxAdEDjWoeOQ3PwrqFKYX3gxzOSsy3g5PVd1uIOeLw2c-aTAEDcqJlDwCW5Cwfr9BrLLIGOBXYSHuoLa6IAqLZ_cndw4mWlpk5s1ouHfW5X3sUeiZEK0uPwT9viDFeDEU3arwx7576jdMc6uhwi3vwZyx6htglkBDXWIVC0I7a0d1R6R91FhJRjccWNqFhtXt_PIpenF8L9523A_y9zsDV0-aQfUduyuWTBEIgMO8LRBP8srbsKZTw-9zBdqQyAhER7dW_7SKmoZUrwk5tlSXHA-ASRtyvxzeVN1uwKcbkga8OHK3TujbZD2zCNEjnr1yjTJJyHAGAGFdYyQZUjtoFHQE5HxVGrrkJ2_IyoSW5_4c8BvJMj5_rObt3FFlyZHU_hgDJA5J6xV_Ecsz4Wysgv1h-6nQ14GDH0GWi0K6C1aX1tf81RiI9gSteRnWRqXtrQOrKhPOz75VX45BhhoRBS57APZMuKt0P1BYMkN9v8KdkwiKQ3SQcv_jZiohWFrEROb1jOdru1RW3VkoJHbV_sxwqpoRnu1vF1-coYWZgPUv-bIFHxoKRU9jqFPCjZxjDfJaObAkQPIOIWUqgJg45ta2lw4VuOu19z-52MeUtfyeglgocB5dLjZu_oL3KxImzFpxtb1LaSSOEZqAAlwvMTyCmNpwVKDDfQJlqnD4SsXVFUWsFJr6ZsS8CLll1dWu3BNJGzOPLA1EjAzAhToRBN3b8QSNaNoUXnGo8jJv_8FsgQhYkiYTQL_QFBswmUgV5ZT2rEfpOXdUrXkYpWa3P79yOqqhv_1tBK8ewVYZ89UdGxNnb4q6pW4B-jOT79_Qz_FY6jEEEOIMgJU7AAo49IbVpa2E21pUBxypKXdGRDz8QosYcIxM_mauncLn6kM2XBgjNe0IOyfvwtrB014s8ZyjWllANoExzAIUqOLJyEVVllS_JPrrhISdGvlUlMRvnUBImvHMHAxmXI3TJOog9445weccQ", // Замените на реальный URL изображения
        },
    ];
    return (
        <div id="home" className="p-2">
            <div>
                <div
                    style={{
                        paddingTop: "30px",
                        paddingLeft: "30px",
                        fontSize: "2rem",
                        paddingBottom: "30px",
                    }}
                    className="bg-gradient-to-r from-gray-800 to-gray-900 text-gray-300 p-8 rounded-lg shadow-lg mt-20"
                >
                    <h1 className="text-4xl font-extrabold text-center mb-6">О нас</h1>
                    <p className="text-lg leading-relaxed mb-6">
                        Добро пожаловать на нашу платформу, посвященную миру фильмов и
                        сериалов! Мы стремимся предоставить нашим пользователям самое
                        актуальное и интересное в мире кино и телевидения.
                    </p>
                    <div className="bg-white p-6 rounded-lg text-gray-800 shadow-md mb-6">
                        <h2 className="text-2xl font-semibold mb-4 text-center">
                            Что мы предлагаем:
                        </h2>
                        <ul className="list-disc list-inside space-y-3">
                            <li>
                                <Link
                                    to="/"
                                    className="font-semibold hover:underline [&.active]:font-bold"
                                    onClick={() => scrollToSection("top-movies")}
                                >
                                    <strong>{t("Топовые фильмы 2024 года")}</strong>
                                </Link>
                                : В нашем каталоге вы найдете такие ожидаемые фильмы, как{" "}
                                <em>«Дэдпул 3»</em>, <em>«Планета обезьян: Новое царство»</em> и{" "}
                                <em>«Годзилла и Конг: Новая империя»</em>.
                            </li>
                            <li>
                                <Link
                                    to="/"
                                    className="font-semibold hover:underline [&.active]:font-bold"
                                    onClick={() => scrollToSection("top-series")}
                                >
                                    <strong>{t("Популярные сериалы")}</strong>
                                </Link>
                                : Наслаждайтесь просмотром таких новинок, как <em>«Рипли»</em>,{" "}
                                <em>«Олененок»</em> и <em>«Сёгун»</em>, а также многими другими
                                захватывающими сериалами.
                            </li>
                            <li>
                                <Link
                                    to="/"
                                    className="font-semibold hover:underline [&.active]:font-bold"
                                    onClick={() => scrollToSection("top-cartoons")}
                                >
                                    <strong>{t("Лучшие мультфильмы")}</strong>
                                </Link>
                                : Откройте для себя захватывающие семейные мультфильмы, такие
                                как <em>«Головоломка 2»</em>, <em>«Муфаса: Король лев»</em> и{" "}
                                <em>«Человек-паук: Через вселенные 3»</em>.
                            </li>
                        </ul>
                    </div>
                    <p className="text-lg leading-relaxed mb-6">
                        Мы постоянно обновляем нашу базу данных, чтобы вы всегда могли
                        находить самые свежие и интересные новинки в мире кино.
                    </p>
                    <p className="text-lg leading-relaxed">
                        Наша команда — это преданные кинолюбители, которые стремятся сделать
                        ваш опыт максимально удобным и приятным. Благодарим вас за выбор
                        нашей платформы!
                    </p>
                    <div className="text-center mt-8">
                        <button className="bg-gray-700 hover:bg-gray-600 text-white text-2xl font-bold py-2 px-4 rounded-full shadow-lg transition duration-300">
                            Узнать больше
                        </button>
                    </div>
                </div>
                <div id="top-movies" style={{ padding: "12px 0" }}>
                    <h2
                        className="text-center font-bold"
                        style={{ fontSize: "2rem", marginBottom: "24px" }}
                    >
                        {t("Топ фильмов 2024 года")}
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {topMovies.map((movie, index) => (
                            <div
                                key={index}
                                className="border rounded-md overflow-hidden shadow-lg"
                            >
                                <img
                                    src={movie.image}
                                    alt={movie.title}
                                    className="w-full h-48 object-cover"
                                />
                                <div className="p-4">
                                    <h3 className="text-lg font-bold">{movie.title}</h3>
                                    <p className="text-gray-600">{movie.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div id="top-series" style={{ padding: "20px 0" }}>
                    <h2
                        className="text-center font-bold"
                        style={{ fontSize: "2rem", marginBottom: "24px" }}
                    >
                        {t("Топ сериалов 2024 года")}
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {topSeries.map((series, index) => (
                            <div
                                key={index}
                                className="border rounded-md overflow-hidden shadow-lg"
                            >
                                <img
                                    src={series.image}
                                    alt={series.title}
                                    className="w-full h-48 object-cover"
                                />
                                <div className="p-4">
                                    <h3 className="text-lg font-bold">{series.title}</h3>
                                    <p className="text-gray-600">{series.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div id="top-cartoons" style={{ padding: "20px 0" }}>
                    <h2
                        className="text-center font-bold"
                        style={{ fontSize: "2rem", marginBottom: "24px" }}
                    >
                        {t("Топ мультфильмов 2024 года")}
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {topCartoons.map((cartoons, index) => (
                            <div
                                key={index}
                                className="border rounded-md overflow-hidden shadow-lg"
                            >
                                <img
                                    src={cartoons.image}
                                    alt={cartoons.title}
                                    className="w-full h-48 object-cover"
                                />
                                <div className="p-4">
                                    <h3 className="text-lg font-bold">{cartoons.title}</h3>
                                    <p className="text-gray-600">{cartoons.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
