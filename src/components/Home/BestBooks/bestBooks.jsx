import SlickSlider from "../../SlickSlider/slider";
import { LoadingView } from "../../../Utilities/utilities";

import { useEffect, useState } from "react";

const BestBooksList=[
    {
        "kind": "books#volume",
        "id": "aDi4EAAAQBAJ",
        "etag": "6GuRv46rP2U",
        "selfLink": "https://www.googleapis.com/books/v1/volumes/aDi4EAAAQBAJ",
        "volumeInfo": {
            "title": "Come and Get It",
            "authors": [
                "Kiley Reid"
            ],
            "publisher": "Penguin",
            "publishedDate": "2024-01-30",
            "description": "<b><i>NEW YORK TIMES</i> BESTSELLER<br>National Bestseller<br><i>USA Today</i> Bestseller<br><br>A Good Morning America Book Club Pick<br><br>An Indie Next Pick <br>A LibraryReads Pick<br><br>From the celebrated <i>New York Times</i> bestselling author of <i>Such a Fun Age </i>comes a fresh and provocative story about a residential assistant and her messy entanglement with a professor and three unruly students.</b><br><br>It's 2017 at the University of Arkansas. Millie Cousins, a senior resident assistant, wants to graduate, get a job, and buy a house. So when Agatha Paul, a visiting professor and writer, offers Millie an easy yet unusual opportunity, she jumps at the chance. But Millie's starry-eyed hustle becomes jeopardized by odd new friends, vengeful dorm pranks, and illicit intrigue.<br><br>A fresh and intimate portrait of desire, consumption, and reckless abandon, <i>Come and Get It</i> is a tension-filled story about money, indiscretion, and bad behavior—and the highly anticipated new novel by acclaimed and award-winning author Kiley Reid.",
            "industryIdentifiers": [
                {
                    "type": "ISBN_10",
                    "identifier": "0593328213"
                },
                {
                    "type": "ISBN_13",
                    "identifier": "9780593328217"
                }
            ],
            "readingModes": {
                "text": true,
                "image": false
            },
            "pageCount": 400,
            "printedPageCount": 352,
            "printType": "BOOK",
            "categories": [
                "Fiction / Literary",
                "Fiction / Women",
                "Fiction / Coming of Age"
            ],
            "maturityRating": "NOT_MATURE",
            "allowAnonLogging": true,
            "contentVersion": "1.3.3.0.preview.2",
            "panelizationSummary": {
                "containsEpubBubbles": false,
                "containsImageBubbles": false
            },
            "imageLinks": {
                "smallThumbnail": "http://books.google.com/books/publisher/content?id=aDi4EAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&imgtk=AFLRE70KcI2Ml8GyXX0o8OhxospdzgKK9ikJbi9l9T8dBt_VE42xy8g4HikU_eP_idsuNXRgC3cj4k4BquNm-_RaWsIvhcNoVtuB3BhNWAmjebgxr8T22gjE-rPQAyUnSFp1HS2_mkH1&source=gbs_api",
                "thumbnail": "http://books.google.com/books/publisher/content?id=aDi4EAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE73cLf417GxiZsFdHnJCB9tEC70AICwaGoc6nM4KKteo9rRcHlaOJqMbatwc9wuVkjl7vWCTC2t3LmE_-C4SMk-Lt0-WIxutux7pW21eFF3-0SlgzbHgrsIUeDOU9Ud07Z2WZYXS&source=gbs_api",
                "small": "http://books.google.com/books/publisher/content?id=aDi4EAAAQBAJ&printsec=frontcover&img=1&zoom=2&edge=curl&imgtk=AFLRE72EiZJLEc302FV8X9FfJqd_G0DrehecKs1RoSxhTjCHQnB6g1K-0BJq39keakVSk0mz2G9fn--vsKmu5AofDkp6UUPHta-hVNzAPjuoKh7bIEgGEkDt0I7JkseWmlbB4PG69wO9&source=gbs_api",
                "medium": "http://books.google.com/books/publisher/content?id=aDi4EAAAQBAJ&printsec=frontcover&img=1&zoom=3&edge=curl&imgtk=AFLRE73WLufkuQVThui2JPnWn9UJIo3cT_15aMA8qiIN3TUES2Z3eM2R408WpE1baTRmo3DCYDx_yHsBAzT0F4JEd0B8pXa6Eu2j9CTqZGkKub32bnOIO6iMT7lfn4US-vDzg8xoeQTg&source=gbs_api",
                "large": "http://books.google.com/books/publisher/content?id=aDi4EAAAQBAJ&printsec=frontcover&img=1&zoom=4&edge=curl&imgtk=AFLRE728TD2aTdWpACGW1e0tRAHW0Q7ni04OxmlDwCZD3KBjEa1i5fi9HPM_jBeKh7ybFrd1h34R11Jv29_Qw7Xwh2nIJjYs1c2AXrMt4YxuSCqa6DfKTypKqvWAxtMoX1s9yjdrh-Zw&source=gbs_api",
                "extraLarge": "http://books.google.com/books/publisher/content?id=aDi4EAAAQBAJ&printsec=frontcover&img=1&zoom=6&edge=curl&imgtk=AFLRE73_rba-P6QY5LxaeJDX9V2HOwvw6ntG30tr49ofPAQ52ylMS2Xqsfif8CZk-HU2paQkX8b9ZRyIRtH_e41gw7OZlhd7tm_YZxM0pdx7WFitFUflIV8PibelS3DWHD3ztYayA2qb&source=gbs_api"
            },
            "language": "en",
            "previewLink": "http://books.google.com/books?id=aDi4EAAAQBAJ&hl=&source=gbs_api",
            "infoLink": "https://play.google.com/store/books/details?id=aDi4EAAAQBAJ&source=gbs_api",
            "canonicalVolumeLink": "https://play.google.com/store/books/details?id=aDi4EAAAQBAJ"
        },
        "saleInfo": {
        "country": "US",
        "saleability": "FOR_SALE",
        "isEbook": true,
        "listPrice": {
            "amount": 14.99,
            "currencyCode": "USD"
        },
        "retailPrice": {
            "amount": 14.99,
            "currencyCode": "USD"
        },
        "buyLink": "https://play.google.com/store/books/details?id=aDi4EAAAQBAJ&rdid=book-aDi4EAAAQBAJ&rdot=1&source=gbs_api",
        "offers": [
            {
                "finskyOfferType": 1,
                "listPrice": {
                    "amountInMicros": 14990000,
                    "currencyCode": "USD"
                },
                "retailPrice": {
                    "amountInMicros": 14990000,
                    "currencyCode": "USD"
                },
                "giftable": true
            }
        ]
    },
    },
    {
        "kind": "books#volume",
        "id": "do6zEAAAQBAJ",
        "etag": "PYI6rIwIZ2E",
        "selfLink": "https://www.googleapis.com/books/v1/volumes/do6zEAAAQBAJ",
        "volumeInfo": {
            "title": "House of Flame and Shadow",
            "subtitle": "The INTERNATIONAL BESTSELLER and the SMOULDERING third instalment in the Crescent City series",
            "authors": [
                "Sarah J. Maas"
            ],
            "publisher": "Bloomsbury Publishing",
            "publishedDate": "2024-01-30",
            "description": "<b>The third book in the EPIC Crescent City series from multi-million and #1 <i>Sunday Times</i> bestselling author Sarah J. Maas.</b><br><b> </b><br><b>Maas has established herself as a fantasy fiction titan - <i>Time</i></b><br><b>Think <i>Game of Thrones</i> meets <i>Buffy the Vampire Slayer</i> with a drizzle of E.L. James – <i>Telegraph</i></b><br><b>Spiced with slick plotting and atmospheric world-building ... a page-turning delight – <i>Guardian</i> </b><br><b>Sarah J. Maas does not disappoint ... To be devoured with relish – <i>Mail</i></b><br><b><i> </i></b><br><b>******</b><b> </b><br><b>A WORLD IN DARKNESS.</b><br><b>A BURNING SPARK.</b><br><b>A BLAZE OF STARS.</b><br><b> </b><br>Bryce Quinlan is stranded in a strange new world. She's going to need all her wits about her to get home again and return to everything she loves. But that's no easy feat when she has no idea who to trust.<br><br>Meanwhile, Hunt Athalar is back in the Asteri's dungeons. Stripped of his freedom and the happiness he'd fought so hard for, he's without a clue as to Bryce's fate. Hunt is desperate to help his mate, but until he can escape the Asteri's chains, his hands are quite literally tied.<br><br><b>In this breathtaking sequel to the #1 bestsellers <i>House of Earth and Blood</i> and <i>House of Sky and Breath</i>, Midgard is brought to the brink of collapse, and the fate of the world rests on the hope of rebellion. But the fight for survival, freedom, and love may cost everything Bryce and Hunt have.</b><br><b><br></b><b>House of Flame and Shadow was ranked #1 in UK TCM charts week ending 6/2/2024</b>",
            "industryIdentifiers": [
                {
                    "type": "ISBN_10",
                    "identifier": "1408884453"
                },
                {
                    "type": "ISBN_13",
                    "identifier": "9781408884454"
                }
            ],
            "readingModes": {
                "text": true,
                "image": false
            },
            "pageCount": 352,
            "printedPageCount": 699,
            "dimensions": {
                "height": "24.00 cm"
            },
            "printType": "BOOK",
            "categories": [
                "Fiction / Fantasy / Romance",
                "Fiction / Romance / Fantasy",
                "Fiction / Fantasy / Paranormal",
                "Fiction / Fantasy / Epic",
                "Fiction / Romance / General"
            ],
            "maturityRating": "NOT_MATURE",
            "allowAnonLogging": true,
            "contentVersion": "2.6.7.0.preview.2",
            "panelizationSummary": {
                "containsEpubBubbles": false,
                "containsImageBubbles": false
            },
            "imageLinks": {
                "smallThumbnail": "http://books.google.com/books/publisher/content?id=do6zEAAAQBAJ&printsec=frontcover&img=1&zoom=5&imgtk=AFLRE739n3MPYZ89VkTf4LjYXf4jv913Si--TjghvWoRacej5Sv3Fth13yoLwT6Pbyoe6w_VeuzNFYuHvu6bnc6jr6sjiZkGaaJMTQj4fTIVq-HGY8k8R3C9mlrdCwvbqLF8PJdPSDA8&source=gbs_api",
                "thumbnail": "http://books.google.com/books/publisher/content?id=do6zEAAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72mWFe3t4vaHfiaLaB9_zcZ1mfjKVGGwy-tw-pjAAp2-qYSW0AhR-DskG4jyYQFx5e1rEuvQAMw-eICwKG5Nqn9G1e1sTEaSJ80egWQiYCNM7vUrf2GW21tcQpNVk-a6zjQAlth&source=gbs_api"
            },
            "language": "en",
            "previewLink": "http://books.google.com/books?id=do6zEAAAQBAJ&hl=&source=gbs_api",
            "infoLink": "https://play.google.com/store/books/details?id=do6zEAAAQBAJ&source=gbs_api",
            "canonicalVolumeLink": "https://play.google.com/store/books/details?id=do6zEAAAQBAJ"
        },
        "saleInfo": {
        "country": "US",
        "saleability": "NOT_FOR_SALE",
        "isEbook": false
    },
    },
    {
        "kind": "books#volume",
        "id": "V1_dEAAAQBAJ",
        "etag": "VHp/M/0YfVM",
        "selfLink": "https://www.googleapis.com/books/v1/volumes/V1_dEAAAQBAJ",
        "volumeInfo": {
            "title": "Until August",
            "subtitle": "A novel",
            "authors": [
                "Gabriel García Márquez"
            ],
            "publisher": "Knopf Doubleday Publishing Group",
            "publishedDate": "2024-03-12",
            "description": "<b><i>NEW YORK TIMES</i> BEST SELLER • The extraordinary rediscovered novel from the Nobel Prize–winning author of <i>Love in the Time of Cholera </i>and <i>One Hundred Years of Solitude</i>—a moving tale of female desire and abandon</b><br> <br>Sitting alone beside the languorous blue waters of the lagoon, Ana Magdalena Bach contemplates the men at the hotel bar. She has been happily married for twenty-seven years and has no reason to escape the life she has made with her husband and children. And yet, every August, she travels by ferry here to the island where her mother is buried, and for one night takes a new lover.<br><br>Across sultry Caribbean evenings full of salsa and boleros, lotharios and conmen, Ana journeys further each year into the hinterland of her desire and the fear hidden in her heart.<br><br>Constantly surprising, joyously sensual, <i>Until August</i> is a profound meditation on freedom, regret, self-transformation, and the mysteries of love—an unexpected gift from one of the greatest writers the world has ever known.",
            "industryIdentifiers": [
                {
                    "type": "ISBN_10",
                    "identifier": "0593801997"
                },
                {
                    "type": "ISBN_13",
                    "identifier": "9780593801994"
                }
            ],
            "readingModes": {
                "text": false,
                "image": false
            },
            "pageCount": 144,
            "printedPageCount": 145,
            "dimensions": {
                "height": "19.20 cm",
                "width": "12.70 cm",
                "thickness": "1.50 cm"
            },
            "printType": "BOOK",
            "categories": [
                "Fiction / Literary",
                "Fiction / Women",
                "Fiction / Family Life / Marriage & Divorce"
            ],
            "maturityRating": "NOT_MATURE",
            "allowAnonLogging": false,
            "contentVersion": "1.2.1.0.preview.0",
            "panelizationSummary": {
                "containsEpubBubbles": false,
                "containsImageBubbles": false
            },
            "imageLinks": {
                "smallThumbnail": "http://books.google.com/books/publisher/content?id=V1_dEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&imgtk=AFLRE71luSnIccZX6CPcZ9zaA_yd-qhk68m0EJ3F16tCtzW06FPbLE6nW6avW70YbukcG8uEFyze8lezgBIbLM6BRqrdGy47RTmlwnqcUEuV3srdRIS6ZDjNp941hmdvybnuyjp79M_7&source=gbs_api",
                "thumbnail": "http://books.google.com/books/publisher/content?id=V1_dEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE73UhE_wTd6VjrWT7XxaDI1Usl3T3CYtQutUYKOOkIIV1axJ7I8NPFI8rrW7QPx_zpVO_6g2p-tZXdhkzcIMk2Lcj0jKOOsQS9yXmSN5FN0CfSnJk3-w87OOk2ypklunahBXZBXB&source=gbs_api",
                "small": "http://books.google.com/books/publisher/content?id=V1_dEAAAQBAJ&printsec=frontcover&img=1&zoom=2&edge=curl&imgtk=AFLRE72VyBL5Rr9TOJtwTAQAmRgGWuM-5aPd3ffX7NywznLIoBLYYMi4DCvRZ_W58eqY_xlp6PAhqS9s-AjtEoC3H7n6SXFB1OQIoNOAxpLKxZWMXHreKR_-QpIZFwlJZGSXmzm2lKk-&source=gbs_api",
                "medium": "http://books.google.com/books/publisher/content?id=V1_dEAAAQBAJ&printsec=frontcover&img=1&zoom=3&edge=curl&imgtk=AFLRE71i5IAa6uj3302KfRVBLztSBUdzVPtnt5kBrN9ea7brZNri5wUjIsRrQmJ6paLJDlU7LpTRh8qFe7FswqNExt_Fqar7s7HiX3BX35pJaI1etWwYknDYkSCieu-4wj9i4Cf-FwnT&source=gbs_api",
                "large": "http://books.google.com/books/publisher/content?id=V1_dEAAAQBAJ&printsec=frontcover&img=1&zoom=4&edge=curl&imgtk=AFLRE712gXsw3VHl6ADTONZvxhrViHrOv4mw9v9TOmaTMrR7Xb_BQtBQgdMi7_MoudHSqWU5VpKalC6N_bOyhLJnjQQlwfHd2x8sAXItczHn_ws3k0oXLfj-p6_VzUs0BeGA5z4gSCNm&source=gbs_api",
                "extraLarge": "http://books.google.com/books/publisher/content?id=V1_dEAAAQBAJ&printsec=frontcover&img=1&zoom=6&edge=curl&imgtk=AFLRE721f5I_EW_RSyVa5P_sau63d0-k7zKs__V3tyBZokPAh6lmZ1ykubb38oEUsjYM3QsKo9VaRzbFBPlpF5WQ2VE6dclV1ebkGGHZq64g_Vh8ehmvo-IA_1_WMjPHW9Uuwk6P0xpy&source=gbs_api"
            },
            "language": "en",
            "previewLink": "http://books.google.com/books?id=V1_dEAAAQBAJ&hl=&source=gbs_api",
            "infoLink": "https://play.google.com/store/books/details?id=V1_dEAAAQBAJ&source=gbs_api",
            "canonicalVolumeLink": "https://play.google.com/store/books/details?id=V1_dEAAAQBAJ"
        },
        "saleInfo": {
            "country": "US",
            "saleability": "NOT_FOR_SALE",
            "isEbook": false
        },
    },
    {
        "kind": "books#volume",
        "id": "3ybOEAAAQBAJ",
        "etag": "STJ7mO4Mz6c",
        "selfLink": "https://www.googleapis.com/books/v1/volumes/3ybOEAAAQBAJ",
        "volumeInfo": {
            "title": "Blue Sisters",
            "subtitle": "A Novel",
            "authors": [
                "Coco Mellors"
            ],
            "publisher": "Random House Publishing Group",
            "publishedDate": "2024-09-03",
            "description": "<b>Three estranged siblings return to their family home in New York after their beloved sister’s death in this unforgettable story of grief, hope, and the complexities of family, from the acclaimed author of <i>Cleopatra and Frankenstein</i>.</b><br><br><b>“Sparkling with wit, shot through with longing, <i>Blue Sisters</i> is a beautiful novel, both dazzlingly joyful and achingly sad.”—Jenny Jackson, <i>New York Times</i> bestselling author of <i>Pineapple Street</i></b><br><br>The three Blue sisters are exceptional—and exceptionally different. <b>Avery</b>, the eldest and a recovering heroin addict turned strait-laced lawyer, lives with her wife in London; <b>Bonnie</b>, a former boxer, works as a bouncer in Los Angeles following a devastating defeat; and <b>Lucky</b>, the youngest, models in Paris while trying to outrun her hard-partying ways. They also had a fourth sister, Nicky, whose unexpected death left the family reeling. A year later, as they each navigate grief, addiction, and ambition, they find they must return to New York to stop the sale of the apartment they were raised in.<br><br>But coming home is never as easy as it seems. As the sisters reckon with the disappointments of their childhood and the loss of the only person who held them together, they realize that the greatest secrets they’ve been keeping might not have been from one another but from themselves.<br><br>Imbued with Coco Mellors’s signature combination of humor and heart, <i>Blue Sisters</i> is a story of what it takes to keep living after loss—and, ultimately, to fall in love with life again.",
            "industryIdentifiers": [
                {
                    "type": "ISBN_10",
                    "identifier": "0593723775"
                },
                {
                    "type": "ISBN_13",
                    "identifier": "9780593723777"
                }
            ],
            "readingModes": {
                "text": true,
                "image": false
            },
            "pageCount": 352,
            "printedPageCount": 352,
            "printType": "BOOK",
            "categories": [
                "Fiction / Women",
                "Fiction / Family Life / Siblings",
                "Fiction / Literary"
            ],
            "maturityRating": "NOT_MATURE",
            "allowAnonLogging": false,
            "contentVersion": "preview-1.0.0",
            "panelizationSummary": {
                "containsEpubBubbles": false,
                "containsImageBubbles": false
            },
            "imageLinks": {
                "smallThumbnail": "http://books.google.com/books/publisher/content?id=3ybOEAAAQBAJ&printsec=frontcover&img=1&zoom=5&imgtk=AFLRE73yLT1CYDQETkrJa8TGH72L8MMFDZJfUKsUf1Ep9HCThgD8gLyCA2wlV8IfQ81BuQ1y3p1qTKMxNXOBMeldgIOXSJNQGyBPfWJ_FL8McR79ZrLkp-9N6uA4cDAZ7cgaBii6dV4X&source=gbs_api",
                "thumbnail": "http://books.google.com/books/publisher/content?id=3ybOEAAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE70yz7JsEiDaHrKZZEmUg-uEvuqR1XfByx4iIXaVxZ83xNM5tlVuTbzHxVmBkt9RAGeRAcZMguG7jmkNAWzafB2bgrYpSiCQmNKVBUPmmXCahYz2savhv_9A935n4qrIJIhBgBT5&source=gbs_api"
            },
            "language": "en",
            "previewLink": "http://books.google.com/books?id=3ybOEAAAQBAJ&hl=&source=gbs_api",
            "infoLink": "https://play.google.com/store/books/details?id=3ybOEAAAQBAJ&source=gbs_api",
            "canonicalVolumeLink": "https://play.google.com/store/books/details?id=3ybOEAAAQBAJ"
        },
        "saleInfo": {
            "country": "US",
            "saleability": "NOT_FOR_SALE",
            "isEbook": false
        },
    },
    {
        "kind": "books#volume",
        "id": "XfFvDwAAQBAJ",
        "etag": "HOulZEVNLyo",
        "selfLink": "https://www.googleapis.com/books/v1/volumes/XfFvDwAAQBAJ",
        "volumeInfo": {
            "title": "Atomic Habits",
            "subtitle": "An Easy & Proven Way to Build Good Habits & Break Bad Ones",
            "authors": [
                "James Clear"
            ],
            "publisher": "Penguin",
            "publishedDate": "2018-10-16",
            "description": "<b>The #1<i> New York Times</i> bestseller. <br>Over 20 million copies sold!<br>Translated into 60+ languages!<br><br><i>Tiny Changes, Remarkable Results</i></b><br><br>No matter your goals, <i>Atomic Habits</i> offers a proven framework for improving--every day. James Clear, one of the world's leading experts on habit formation, reveals practical strategies that will teach you exactly how to form good habits, break bad ones, and master the tiny behaviors that lead to remarkable results.<br><br>If you're having trouble changing your habits, the problem isn't you. The problem is your system. Bad habits repeat themselves again and again not because you don't want to change, but because you have the wrong system for change. You do not rise to the level of your goals. You fall to the level of your systems. Here, you'll get a proven system that can take you to new heights.<br><br>Clear is known for his ability to distill complex topics into simple behaviors that can be easily applied to daily life and work. Here, he draws on the most proven ideas from biology, psychology, and neuroscience to create an easy-to-understand guide for making good habits inevitable and bad habits impossible. Along the way, readers will be inspired and entertained with true stories from Olympic gold medalists, award-winning artists, business leaders, life-saving physicians, and star comedians who have used the science of small habits to master their craft and vault to the top of their field.<br><br>Learn how to:<br><ul><li>make time for new habits (even when life gets crazy);</li></ul><ul><li>overcome a lack of motivation and willpower;</li></ul><ul><li>design your environment to make success easier;</li></ul><ul><li>get back on track when you fall off course;</li></ul>...and much more.<br><br><i>Atomic Habits</i> will reshape the way you think about progress and success, and give you the tools and strategies you need to transform your habits--whether you are a team looking to win a championship, an organization hoping to redefine an industry, or simply an individual who wishes to quit smoking, lose weight, reduce stress, or achieve any other goal.",
            "industryIdentifiers": [
                {
                    "type": "ISBN_10",
                    "identifier": "0735211299"
                },
                {
                    "type": "ISBN_13",
                    "identifier": "9780735211292"
                }
            ],
            "readingModes": {
                "text": false,
                "image": false
            },
            "pageCount": 320,
            "printedPageCount": 321,
            "dimensions": {
                "height": "24.00 cm",
                "width": "16.00 cm",
                "thickness": "2.70 cm"
            },
            "printType": "BOOK",
            "categories": [
                "Business & Economics / Organizational Behavior",
                "Psychology / Social Psychology",
                "Self-Help / Personal Growth / General"
            ],
            "averageRating": 3.5,
            "ratingsCount": 7,
            "maturityRating": "NOT_MATURE",
            "allowAnonLogging": false,
            "contentVersion": "0.16.1.0.preview.0",
            "panelizationSummary": {
                "containsEpubBubbles": false,
                "containsImageBubbles": false
            },
            "imageLinks": {
                "smallThumbnail": "http://books.google.com/books/publisher/content?id=XfFvDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&imgtk=AFLRE73VyEgAeUG13296i_Yd9PyWWqSPF1RUgIaZBsRGZEzwQ6PW2wRjGJjdqbZ3MDW3tukloVQzTnoD3TqqRvYByN6717KBV0DcCuh1COo6HOjaUmLbIfLRKAvGNjyw0FH-DaBM0p9Z&source=gbs_api",
                "thumbnail": "http://books.google.com/books/publisher/content?id=XfFvDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE71yBomNvPrml4VpTCPtAueOuz45LEbgo6x3b86RRZ6xsVxdSf_GiPj7EKaS10mmM2WndLZGqLqV5C5JlwuotL1eLayZ24z9VAudDNO4F9WIzMNIFLVEgnKt1NyO5kIuNi2-VIET&source=gbs_api",
                "small": "http://books.google.com/books/publisher/content?id=XfFvDwAAQBAJ&printsec=frontcover&img=1&zoom=2&edge=curl&imgtk=AFLRE707Lb0YYo5mi9vkwhhb9aeF814RFl1Rb1wYFXeTAmGygGe8_P6gsb989Zvw-WrW1pOVDJqWtlW-kzEJ4W7Drc5kit0kogjGmR-DCiJPtpQ0l5jlfotfq_45wmUC5B-1-stboTSw&source=gbs_api",
                "medium": "http://books.google.com/books/publisher/content?id=XfFvDwAAQBAJ&printsec=frontcover&img=1&zoom=3&edge=curl&imgtk=AFLRE70J7QDOdJvuHz06QWRhFwu8GSgKVNVeNIYnuHysLuda1ljtDvasOFPAD4WclE2kuS0hvehCLjPZ42ybKlymp3piAqsIrqaLIheP8Vv5lN-JV_O14B25-LZpupnFsKMoGvTd4gRo&source=gbs_api",
                "large": "http://books.google.com/books/publisher/content?id=XfFvDwAAQBAJ&printsec=frontcover&img=1&zoom=4&edge=curl&imgtk=AFLRE73R9tRQ43BE7DDTT951Ohlvy_Wd76OG9mt4CdG0J5wEc5tWH478os4O63XzQ0uAXzMeczsCH9BR0mhSMD48W6mxz6nSHlBMPobysZ92aQImlhy-FV3Dh90I9MdHe6Y_LgV7eK-U&source=gbs_api",
                "extraLarge": "http://books.google.com/books/publisher/content?id=XfFvDwAAQBAJ&printsec=frontcover&img=1&zoom=6&edge=curl&imgtk=AFLRE71nGrIX1tBiVv2XfZvbcHJC2d4A8cEoh0eJk2Ef5Qb6MVchKXXEoyiGqO19Qx3SGC_paVZ88lXOPPcW0_7MZ8iZsB1aAZvnYx51DvT9b7FoVKcIG6SxPC_Ui9-O7Lp2kWCXzOUy&source=gbs_api"
            },
            "language": "en",
            "previewLink": "http://books.google.com/books?id=XfFvDwAAQBAJ&hl=&source=gbs_api",
            "infoLink": "https://play.google.com/store/books/details?id=XfFvDwAAQBAJ&source=gbs_api",
            "canonicalVolumeLink": "https://play.google.com/store/books/details?id=XfFvDwAAQBAJ"
        },
        "saleInfo": {
            "country": "US",
            "saleability": "NOT_FOR_SALE",
            "isEbook": false
        },
    },
    {
        "kind": "books#volume",
    "id": "7FknEAAAQBAJ",
    "etag": "6o0t1wCYh0U",
    "selfLink": "https://www.googleapis.com/books/v1/volumes/7FknEAAAQBAJ",
    "volumeInfo": {
        "title": "Iron Widow",
        "subtitle": "The TikTok sensation",
        "authors": [
            "Xiran Jay Zhao"
        ],
        "publisher": "Simon and Schuster",
        "publishedDate": "2021-10-07",
        "description": "<b>Instant <i>New York Times</i> No.1 Bestseller. A YA <i>Pacific Rim</i> meets the Handmaid’s Tale retelling of the rise of Wu Zetian, the only female emperor in Chinese history.</b><br> <br><i>I have no faith in love. Love cannot save me. I choose vengeance.</i><br> <br>The boys of Huaxia dream of pairing up with girls to pilot Chrysalises – giant transforming robots that battle aliens beyond the Great Wall. It doesn’t matter that their female co-pilots are expected to serve as concubines and often die from the mental strain.<br> <br>When 18-year-old Zetian offers herself up as a concubine-pilot, her plan is to assassinate the ace male pilot responsible for her sister’s death. But after miraculously surviving her first battle, Zetian sets her sights on a mightier goal. The time has come to stop more girls from being sacrificed.<br> <br><b>‘This is the historical-inspired, futuristic sci-fi mash-up of my wildest dreams.’ Chloe Gong</b><br> <br><b>‘Raging against the patriarchy in spectacular style.’ <i>Observer</i>, best books of the year</b><br> <br><b>‘Zetian is unstoppable, and I dare you not to cheer her on.’ Elizabeth Lim, author of <i>Spin the Dawn</i></b><br> <br><b>A<i> New York Times </i>bestseller, Oct 10 2021</b>",
        "industryIdentifiers": [
            {
                "type": "ISBN_10",
                "identifier": "086154210X"
            },
            {
                "type": "ISBN_13",
                "identifier": "9780861542109"
            }
        ],
        "readingModes": {
            "text": true,
            "image": false
        },
        "pageCount": 400,
        "printedPageCount": 313,
        "printType": "BOOK",
        "categories": [
            "Juvenile Fiction / Science Fiction / General",
            "Fiction / Science Fiction / General",
            "Fiction / War & Military",
            "Fiction / Fantasy / General",
            "Fiction / Romance / Fantasy",
            "Juvenile Fiction / General",
            "Juvenile Fiction / Fantasy & Magic"
        ],
        "maturityRating": "NOT_MATURE",
        "allowAnonLogging": true,
        "contentVersion": "1.4.4.0.preview.2",
        "panelizationSummary": {
            "containsEpubBubbles": false,
            "containsImageBubbles": false
        },
        "imageLinks": {
            "smallThumbnail": "http://books.google.com/books/publisher/content?id=7FknEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&imgtk=AFLRE716CpRVhE_QSwYXkqWsekSXIaoblFhUr5ZmteL_Q8SEPG5dE1aS6pYHjkoEbLn8HgElMHtwGS7D0RplYMImMooCcZnSNSlpzLjzaKNUuOBcdDm1j541BZF8pODQ4tDYl3o-spwN&source=gbs_api",
            "thumbnail": "http://books.google.com/books/publisher/content?id=7FknEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE70oPvofIZZkw5VRN7f0x3DkDpf_Azz5fDGqFCNnDEg1wCeyW5EsSLja5DaVe-6D1UFVFNuLbjKEn8JcuxNizlWHPl3ENd_FHR25Te_1qq7mrPtohIdsHx2MjaF4qX2bnwaSVQ0-&source=gbs_api",
            "small": "http://books.google.com/books/publisher/content?id=7FknEAAAQBAJ&printsec=frontcover&img=1&zoom=2&edge=curl&imgtk=AFLRE70UWg0obZI5Q7j0O-2PPyOAJNbGphNXEIr_P-MTWABW-kyTdO7GJpBVEdBWCJrVDaErd7DBufYppoASH-fhYzZi6vOhU09qS_YI6pZf8-r1LDMniP3IQf8FxYqOP0qgF6Uot5lU&source=gbs_api",
            "medium": "http://books.google.com/books/publisher/content?id=7FknEAAAQBAJ&printsec=frontcover&img=1&zoom=3&edge=curl&imgtk=AFLRE723j3M4uXK8OaqtqSfzZZwnZ3wb7TeSAvbjnAWSbf4S1B6ZjUk927pX5VTH7qTXL5b50-rS7DAzn8rCSk8QTTrxOlbilSohEYWtXrq9dgGsrdLpvr2inhruLp1mVlipPHoVSI-s&source=gbs_api",
            "large": "http://books.google.com/books/publisher/content?id=7FknEAAAQBAJ&printsec=frontcover&img=1&zoom=4&edge=curl&imgtk=AFLRE71O3eDPzIn79l1KLAGR2kCLedHYHmzmu2x20hsXIhNh_NnRBx8Y8RBQ4ridy-02pE4M45cvRk31a7D6McsF6RFGmlsx8aue4TTDtCiuXa3rlIvMKFsUxIXqnwuCJO6YRiPYqaxC&source=gbs_api",
            "extraLarge": "http://books.google.com/books/publisher/content?id=7FknEAAAQBAJ&printsec=frontcover&img=1&zoom=6&edge=curl&imgtk=AFLRE70lDkUbqb6U-0kqVMUdaNYIsp3GucrYJ4OMMltP-vnAzBpijp0N5fsMhSZA8Ue_nwQM2Tb0Fa6w8NWqIDzVIqVBrkiWg-v9va7oh25prgXh7wvM0EqG6s4xQW0JXyhWHIl6AjHi&source=gbs_api"
        },
        "language": "en",
        "previewLink": "http://books.google.com/books?id=7FknEAAAQBAJ&hl=&source=gbs_api",
        "infoLink": "https://play.google.com/store/books/details?id=7FknEAAAQBAJ&source=gbs_api",
        "canonicalVolumeLink": "https://play.google.com/store/books/details?id=7FknEAAAQBAJ"
    },
    "saleInfo": {
        "country": "US",
        "saleability": "NOT_FOR_SALE",
        "isEbook": false
    },
    },
    {
        "kind": "books#volume",
        "id": "E-OLEAAAQBAJ",
        "etag": "66/cWQr6kMo",
        "selfLink": "https://www.googleapis.com/books/v1/volumes/E-OLEAAAQBAJ",
        "volumeInfo": {
            "title": "Fourth Wing",
            "authors": [
                "Rebecca Yarros"
            ],
            "publisher": "Entangled Publishing, LLC",
            "publishedDate": "2023-05-02",
            "description": "<p><b>A #1 <i>New York Times</i> bestseller • Optioned for TV by Amazon Studios • Amazon Best Books of the Year, #4 • Apple Best Books of the Year 2023 • Barnes & Noble Best Fantasy Book of 2023 • NPR “Books We Love” 2023 • Audible Best Books of 2023 • Hudson Book of the Year • Google Play Best Books of 2023 • Indigo Best Books of 2023 • Waterstones Book of the Year finalist • Goodreads Choice Award, semi-finalist • Newsweek Staffers’ Favorite Books of 2023 • Paste Magazine's Best Books of 2023</b><br><br><i>\"Suspenseful, sexy, and with incredibly entertaining storytelling, the first in Yarros' Empyrean series will delight fans of romantic, adventure-filled fantasy.\"</i> —<i><b>Booklist</b></i><b>, starred review</b><br><br><i>\"</i>Fourth Wing<i> will have your heart pounding from beginning to end... A fantasy like you've never read before.\"</i> <b>―#1 <i>New York Times</i> bestselling author Jennifer L. Armentrout</b><br><br><br><b>Enter the brutal and elite world of a war college for dragon riders from <i>New York Times</i> bestselling author Rebecca Yarros</b><br><br>Twenty-year-old Violet Sorrengail was supposed to enter the Scribe Quadrant, living a quiet life among books and history. Now, the commanding general—also known as her tough-as-talons mother—has ordered Violet to join the hundreds of candidates striving to become the elite of Navarre: <i>dragon riders</i>.<br><br>But when you’re smaller than everyone else and your body is brittle, death is only a heartbeat away...because dragons don’t bond to “fragile” humans. They incinerate them.<br><br>With fewer dragons willing to bond than cadets, most would kill Violet to better their own chances of success. The rest would kill her just for being her mother’s daughter—like Xaden Riorson, the most powerful and ruthless wingleader in the Riders Quadrant.<br><br>She’ll need every edge her wits can give her just to see the next sunrise.<br><br>Yet, with every day that passes, the war outside grows more deadly, the kingdom's protective wards are failing, and the death toll continues to rise. Even worse, Violet begins to suspect leadership is hiding a terrible secret.<br><br>Friends, enemies, lovers. Everyone at Basgiath War College has an agenda—because once you enter, there are only two ways out: <i>graduate or die</i>.<br><br>The Empyrean series is best enjoyed in order.<br>Reading Order:<br>Book #1 Fourth Wing<br>Book #2 Iron Flame</p>",
            "industryIdentifiers": [
                {
                    "type": "ISBN_10",
                    "identifier": "1649374089"
                },
                {
                    "type": "ISBN_13",
                    "identifier": "9781649374080"
                }
            ],
            "readingModes": {
                "text": true,
                "image": false
            },
            "pageCount": 528,
            "printedPageCount": 631,
            "printType": "BOOK",
            "categories": [
                "Fiction / Fantasy / Romance",
                "Fiction / Fantasy / Epic",
                "Fiction / Fantasy / Dragons & Mythical Creatures"
            ],
            "averageRating": 5,
            "ratingsCount": 2,
            "maturityRating": "NOT_MATURE",
            "allowAnonLogging": true,
            "contentVersion": "2.23.22.0.preview.2",
            "panelizationSummary": {
                "containsEpubBubbles": false,
                "containsImageBubbles": false
            },
            "imageLinks": {
                "smallThumbnail": "http://books.google.com/books/publisher/content?id=E-OLEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&imgtk=AFLRE70J6qWVKVM02DqrcxI0Wmsvd16x3EZJJbbsGY8xrkP3VCiBIeIQOuAHYRt2z1s4TJPoOckPb975wrDS1GI1QxoOqZOf_q_uiFzyXc1pTdHKaIRKPU6v3xQvAw3mqQvY0o8YO_fH&source=gbs_api",
                "thumbnail": "http://books.google.com/books/publisher/content?id=E-OLEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE720X0dcLkIqiMCALH_cAOmKP1sBwwIA1-OZvmSdtBO-dMtX88sD2w3RpzCkJx5dPEWYs5EiEAdrOQrBRwexIJbwt5aV7BR6aBuPmurAxvS5GJuwijjQSxmGIULlOJc8IiAxQMk7&source=gbs_api",
                "small": "http://books.google.com/books/publisher/content?id=E-OLEAAAQBAJ&printsec=frontcover&img=1&zoom=2&edge=curl&imgtk=AFLRE70YjQJrHOUbuO7GeNe0ghbFRAQQmOg4J14kORWq3isxlOmFFm4rGw2tF5aK_eR-GvuDKDQrNp1AOJEnHpTlzY66g9b_ksJf93EWS3u4jfCx4ZFF7KPBnBcm7whGUL96bx5PQIyN&source=gbs_api",
                "medium": "http://books.google.com/books/publisher/content?id=E-OLEAAAQBAJ&printsec=frontcover&img=1&zoom=3&edge=curl&imgtk=AFLRE71DRvlPam6yOdw-moMlDex2r3A4ROPzi-2Pl12UwKWqCHT0OJyuMztqdmruTeTYCcfaYWiLfWV-hZkn0YQGgqzasXxfLAyuhWm7Nc5C1IN9hZyZplZYa71mCfdBgfWz6eqAkmrh&source=gbs_api",
                "large": "http://books.google.com/books/publisher/content?id=E-OLEAAAQBAJ&printsec=frontcover&img=1&zoom=4&edge=curl&imgtk=AFLRE72RP9EVu98Pi_iw24hwZ1BIKBc67CsPH-_P9Kfdel8ru-MfOyNpEm_L4hv2ssFlTyQtoCyvocIE4O5ZoB6ZeP-uJPV2oZHY0mMZwCe8sgPSYUNIDrNwE_VaIpDkEOw40OQwBl5A&source=gbs_api",
                "extraLarge": "http://books.google.com/books/publisher/content?id=E-OLEAAAQBAJ&printsec=frontcover&img=1&zoom=6&edge=curl&imgtk=AFLRE705yxibGMNVbkIB2GboN4ralBWvU9JjxL5XPiUDf5kvUJUXJv6Eky-B5o3NdwF_xfWpGcoaTNYCMXR2MIaZj_p6NygfoCwxQ6OegKYTrSoPho4O3S530EnW0JE3YEtCzpSb_NW1&source=gbs_api"
            },
            "language": "en",
            "previewLink": "http://books.google.com/books?id=E-OLEAAAQBAJ&hl=&source=gbs_api",
            "infoLink": "https://play.google.com/store/books/details?id=E-OLEAAAQBAJ&source=gbs_api",
            "canonicalVolumeLink": "https://play.google.com/store/books/details?id=E-OLEAAAQBAJ"
        },
        "saleInfo": {
            "country": "US",
            "saleability": "FOR_SALE",
            "isEbook": true,
            "listPrice": {
                "amount": 14.99,
                "currencyCode": "USD"
            },
            "retailPrice": {
                "amount": 14.99,
                "currencyCode": "USD"
            },
            "buyLink": "https://play.google.com/store/books/details?id=E-OLEAAAQBAJ&rdid=book-E-OLEAAAQBAJ&rdot=1&source=gbs_api",
            "offers": [
                {
                    "finskyOfferType": 1,
                    "listPrice": {
                        "amountInMicros": 14990000,
                        "currencyCode": "USD"
                    },
                    "retailPrice": {
                        "amountInMicros": 14990000,
                        "currencyCode": "USD"
                    },
                    "giftable": true
                }
            ]
        },
    },
    {
        "kind": "books#volume",
        "id": "GcbMDgAAQBAJ",
        "etag": "b9nPhidZ7G8",
        "selfLink": "https://www.googleapis.com/books/v1/volumes/GcbMDgAAQBAJ",
        "volumeInfo": {
            "title": "A Court of Mist and Fury",
            "authors": [
                "Sarah J. Maas"
            ],
            "publisher": "Bloomsbury Publishing USA",
            "publishedDate": "2017-05-02",
            "description": "<p><i>“Tell me what you see.”<br>“A world divided in two.”<br></i><br>Feyre survived Amarantha's clutches to return to the Spring Court-but at a steep cost. Though she now has the powers of the High Fae, her heart remains human, and it can't forget the terrible deeds she performed to save Tamlin's people.<br><br>Nor has Feyre forgotten her bargain with Rhysand, High Lord of the feared Night Court. As Feyre navigates its dark web of politics, passion, and dazzling power, a greater evil looms-and she might be key to stopping it. But only if she can harness her harrowing gifts, heal her fractured soul, and decide how she wishes to shape her future-and the future of a world torn apart.<br><br>#1 <i>New York Times </i>and <i>USA Today</i> bestselling author Sarah J. Maas expands Feyre's world beyond even her wildest imagination in this seductive and stunning sequel to <i>A Court of Thorns and Roses</i>.</p>",
            "industryIdentifiers": [
                {
                    "type": "ISBN_10",
                    "identifier": "1619635194"
                },
                {
                    "type": "ISBN_13",
                    "identifier": "9781619635197"
                }
            ],
            "readingModes": {
                "text": false,
                "image": true
            },
            "pageCount": 656,
            "printedPageCount": 661,
            "dimensions": {
                "height": "21.00 cm",
                "width": "14.20 cm",
                "thickness": "4.20 cm"
            },
            "printType": "BOOK",
            "categories": [
                "Fiction / Fantasy / Epic",
                "Fiction / Fantasy / Romance",
                "Fiction / Romance / Fantasy",
                "Young Adult Fiction / Action & Adventure / General",
                "Young Adult Fiction / Fantasy / General",
                "Young Adult Fiction / Fantasy / Epic",
                "Young Adult Fiction / Romance / General"
            ],
            "averageRating": 5,
            "ratingsCount": 2,
            "maturityRating": "NOT_MATURE",
            "allowAnonLogging": false,
            "contentVersion": "preview-1.0.0",
            "panelizationSummary": {
                "containsEpubBubbles": false,
                "containsImageBubbles": false
            },
            "imageLinks": {
                "smallThumbnail": "http://books.google.com/books/publisher/content?id=GcbMDgAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&imgtk=AFLRE70IKJuv9C8i7mrFKqOA3pBmz6dExHlaf4FjcjmBlk5exxwn5lGZJcpPB-JYoF5A1fQgWAE2d6Un_fTSlXlOIlACooNPbTGz7gVEcsJV_fVjM8IcZB9st1Zh5rt574C3a-knE-9m&source=gbs_api",
                "thumbnail": "http://books.google.com/books/publisher/content?id=GcbMDgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE73f7G6mAeyJ_Wlkya9yu0n6EG0IzmsYwFIn1f_-L7yNjQSAM_mgnztnsI02iguhBScd6eA8HYEsxcpK5FbNwvkKXXdif_e9vRf4Cm7Y4erkOUp7mEPC8rZ2mUrMJGh5wCcFLwS0&source=gbs_api",
                "small": "http://books.google.com/books/publisher/content?id=GcbMDgAAQBAJ&printsec=frontcover&img=1&zoom=2&edge=curl&imgtk=AFLRE72FYzjKEGth4U6NtTC4FHieOgTZ2vXUV9rVI5jNX9GqWy3KRclmE7vOGX9tSmWt5VudEBnwlJZXn7g5y6ShMYw5obgIqDE7u_yGYGQR1OF7aiuwy2b1ICDFWmObTdlr-3yrbbjq&source=gbs_api",
                "medium": "http://books.google.com/books/publisher/content?id=GcbMDgAAQBAJ&printsec=frontcover&img=1&zoom=3&edge=curl&imgtk=AFLRE72phhH4Z1-eqtPdhQkWOvSb2DSniRfymW2s7YHRKGu0V6fILlRcXvQWMJnzljYTRSnb2kqf-OlJ_7LwhKtIeasmnVqsioMXWkX8kM4WFtKOcKPM3n2ljPH0YJKqTYaVTjruEGqZ&source=gbs_api",
                "large": "http://books.google.com/books/publisher/content?id=GcbMDgAAQBAJ&printsec=frontcover&img=1&zoom=4&edge=curl&imgtk=AFLRE736O9_59whdeBccthwS-IXqdlEn5mXn_4X8hLC-50cok-00XKp5Q9Fgde2_FrZC4ecLYiv22SUjzjaFXLOhUkMMTWf03dg8BsC5oYYfClEicQbpHlu2ib9ppI09q47jn97MNX-X&source=gbs_api",
                "extraLarge": "http://books.google.com/books/publisher/content?id=GcbMDgAAQBAJ&printsec=frontcover&img=1&zoom=6&edge=curl&imgtk=AFLRE73X02adters9LiBgzqj0F2-V_T0hJMz4tpQpCgSdsc73_QgyNmR_58RSjlubAi-uQH3g36fGWw9adr5uNpmlqg6_Kv7g9PG3DzeRYT81TVpA82CqcW6ne2GlQdnLTijG9fzzAmI&source=gbs_api"
            },
            "language": "en",
            "previewLink": "http://books.google.com/books?id=GcbMDgAAQBAJ&hl=&source=gbs_api",
            "infoLink": "https://play.google.com/store/books/details?id=GcbMDgAAQBAJ&source=gbs_api",
            "canonicalVolumeLink": "https://play.google.com/store/books/details?id=GcbMDgAAQBAJ"
        },
        "saleInfo": {
            "country": "US",
            "saleability": "NOT_FOR_SALE",
            "isEbook": false
        },
    },
    {
        
    "kind": "books#volume",
    "id": "gmR-0AEACAAJ",
    "etag": "b9MVJixbpyU",
    "selfLink": "https://www.googleapis.com/books/v1/volumes/gmR-0AEACAAJ",
    "volumeInfo": {
        "title": "The Housemaid Is Watching",
        "authors": [
            "Freida McFadden"
        ],
        "publisher": "Sourcebooks",
        "publishedDate": "2024-06-11",
        "description": "<p>A twisting, pulse-pounding thriller from Freida McFadden, the New York Times bestselling author of The Housemaid and The Coworker</p><p>\"You must be our new neighbors!\" Mrs. Lowell gushes and waves across the picket fence. I clutch my daughter's hand and smile back: but the second Mrs. Lowell sees my husband a strange expression crosses her face. In that moment I make a promise. We finally have a family home. My past is far, far behind us. And I'll do anything to keep it that way...</p><p>I used to clean other people's houses--now, I can't believe this home is actually mine. The charming kitchen, the quiet cul-de-sac, the huge yard where my kids can play. My husband and I saved for years to give our children the life they deserve.</p><p>Even though I'm wary of our new neighbor Mrs. Lowell, when she invites us over for dinner it's our chance to make friends. Her maid opens the door wearing a white apron, her hair in a tight bun. I know exactly what it's like to be in her shoes. But her cold stare gives me chills... </p><p>The Lowells' maid isn't the only strange thing on our street. I'm sure I see a shadowy figure watching us. My husband leaves the house late at night. And when I meet a woman who lives across the way, her words chill me to the bone: Be careful of your neighbors.</p><p>Did I make a terrible mistake moving my family here? </p><p>I thought I'd left my darkest secrets behind. But could this quiet suburban street be the most dangerous place of all?</p><p>From New York Times, USA Today and Wall Street Journal bestselling author Freida McFadden comes the next instalment of the unbelievably twisty, tension-packed and globally bestselling Housemaid series. This book can be enjoyed as a standalone read: and once you start, it will have you up all night racing through the pages until the final explosive twist. </p>",
        "industryIdentifiers": [
            {
                "type": "ISBN_10",
                "identifier": "1464223815"
            },
            {
                "type": "ISBN_13",
                "identifier": "9781464223815"
            }
        ],
        "readingModes": {
            "text": false,
            "image": false
        },
        "pageCount": 400,
        "printedPageCount": 400,
        "dimensions": {
            "height": "23.00 cm",
            "width": "15.40 cm",
            "thickness": "3.80 cm"
        },
        "printType": "BOOK",
        "categories": [
            "Fiction / Thrillers / Suspense",
            "Fiction / Thrillers / Psychological"
        ],
        "maturityRating": "NOT_MATURE",
        "allowAnonLogging": false,
        "contentVersion": "preview-1.0.0",
        "panelizationSummary": {
            "containsEpubBubbles": false,
            "containsImageBubbles": false
        },
        "imageLinks": {
            "smallThumbnail": "http://books.google.com/books/content?id=gmR-0AEACAAJ&printsec=frontcover&img=1&zoom=5&imgtk=AFLRE73B8KvtGZKiBHxTMnfAdKZSsnmPj4E1DULGjZf9FYIVTUxFqxIzLBVfOLpN4kCU5lZsRN2BE5KO1ynNZJc2Vn-_eM3zSN-uinGVaVjaAhU2aJBACNyVZ3acFzfqfI6X0fTqrKIC&source=gbs_api",
            "thumbnail": "http://books.google.com/books/content?id=gmR-0AEACAAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE721S_lZKDvWMv7QuSgqzfgwfLpHG3Ou2z2H3eFqriZHGdLIeV6bULbNYOzNhv3bJqWkblZJnURm3soR3sbTlF2WzxYlxMKzeJ7OTdTH37G62C_AuTtFr4NYJNcaeBVR_SqnXbvS&source=gbs_api"
        },
        "language": "en",
        "previewLink": "http://books.google.com/books?id=gmR-0AEACAAJ&hl=&source=gbs_api",
        "infoLink": "https://play.google.com/store/books/details?id=gmR-0AEACAAJ&source=gbs_api",
        "canonicalVolumeLink": "https://play.google.com/store/books/details?id=gmR-0AEACAAJ"
    },
    "saleInfo": {
        "country": "US",
        "saleability": "NOT_FOR_SALE",
        "isEbook": false
    },
    },
    {
        "kind": "books#volume",
        "id": "TVwb0AEACAAJ",
        "etag": "OZyIF+8SHpQ",
        "selfLink": "https://www.googleapis.com/books/v1/volumes/TVwb0AEACAAJ",
        "volumeInfo": {
            "title": "King of Sloth",
            "authors": [
                "Ana Huang"
            ],
            "publisher": "Little, Brown Book Group Limited",
            "publishedDate": "2024-04-04",
            "description": "The fourth Kings of Sin book from NYT bestselling author Ana Huang's delicious new series of standalones, featuring seven steamy billionaires inspired by the seven deadly sins.[Bokinfo].",
            "industryIdentifiers": [
                {
                    "type": "ISBN_10",
                    "identifier": "0349436371"
                },
                {
                    "type": "ISBN_13",
                    "identifier": "9780349436371"
                }
            ],
            "readingModes": {
                "text": false,
                "image": false
            },
            "pageCount": 464,
            "printedPageCount": 464,
            "dimensions": {
                "height": "19.60 cm",
                "width": "12.40 cm",
                "thickness": "3.60 cm"
            },
            "printType": "BOOK",
            "categories": [
                "Fiction / Romance / Contemporary",
                "Fiction / Romance / New Adult",
                "Fiction / Romance / Billionaires"
            ],
            "maturityRating": "NOT_MATURE",
            "allowAnonLogging": false,
            "contentVersion": "preview-1.0.0",
            "panelizationSummary": {
                "containsEpubBubbles": false,
                "containsImageBubbles": false
            },
            "imageLinks": {
                "smallThumbnail": "http://books.google.com/books/content?id=TVwb0AEACAAJ&printsec=frontcover&img=1&zoom=5&imgtk=AFLRE70FWa694Mrq7ut3Oby7tGKp_9rLGgOlQOJor8sn7jz9p7F3LqpnR_nubWjsCxjRmdfG8-aaBpjBDWYxQ81yY6_0_dw-z0DPEdGpLUli3k_WBo6ymej7BHwnvrfkrKaJ2g-CDEYf&source=gbs_api",
                "thumbnail": "http://books.google.com/books/content?id=TVwb0AEACAAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE70UMt4KlsozqZwpcdozGSlqq7_2ASh9MlYbirXP6xHQuEYV9wblSMNiA4Q12FxSbzs9czFMS6uric0oPxFUEAcmQ3eGbXRayhjSo1FZM6KrsO0TDZBggSoyL6IcnKhe3d9RxlnM&source=gbs_api"
            },
            "language": "en",
            "previewLink": "http://books.google.com/books?id=TVwb0AEACAAJ&hl=&source=gbs_api",
            "infoLink": "https://play.google.com/store/books/details?id=TVwb0AEACAAJ&source=gbs_api",
            "canonicalVolumeLink": "https://play.google.com/store/books/details?id=TVwb0AEACAAJ"
        },
        "saleInfo": {
            "country": "US",
            "saleability": "NOT_FOR_SALE",
            "isEbook": false
        },
    }

]




const BestBooks=()=>{

    const [loading,setLoading]=useState(false)

    useEffect(()=>{
        setLoading(true)
       setTimeout(()=>{
        setLoading(false)
       },2000)
    }   ,[])   

    return(
        <>
        {loading ? <LoadingView /> :
        <SlickSlider booksList={BestBooksList} heading='Best of 2024'/> }
        </>
    )
}

export default BestBooks