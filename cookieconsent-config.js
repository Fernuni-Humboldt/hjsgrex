import 'https://cdn.jsdelivr.net/gh/orestbida/cookieconsent@3.0.1/dist/cookieconsent.umd.js';

CookieConsent.run({
    guiOptions: {
        consentModal: {
            layout: "bar inline",
            position: "bottom",
            equalWeightButtons: true,
            flipButtons: false
        },
        preferencesModal: {
            layout: "bar wide",
            position: "right",
            equalWeightButtons: true,
            flipButtons: false
        }
    },
    categories: {
        necessary: {
            readOnly: true
        },
        functionality: {},
        analytics: {},
        marketing: {}
    },
    language: {
        default: "de",
        autoDetect: "browser",
        translations: {
            de: {
                consentModal: {
                    title: "Cookie Hinweis",
                    description: "Wir benötigen Ihre Zustimmung, bevor Sie auf unserer Website fortfahren können.
Wenn Sie unter 16 Jahre alt sind und optionalen Diensten zustimmen möchten, müssen Sie Ihre Erziehungsberechtigten um Erlaubnis fragen.
Wir verwenden Cookies und andere Technologien auf unserer Website. Einige von ihnen sind essenziell, während andere uns helfen, diese Website und Ihre Erfahrung zu verbessern. Personenbezogene Daten können verarbeitet werden (z. B. IP-Adressen), beispielsweise für personalisierte Anzeigen und Inhalte oder Anzeigen- und Inhaltsmessung.",
                    acceptAllBtn: "Alle akzeptieren",
                    acceptNecessaryBtn: "Alle ablehnen",
                    showPreferencesBtn: "Einstellungen verwalten",
                    footer: "<a href=\"#link\">Datenschutz</a>\n<a href=\"#link\">Bedingungen und Konditionen</a>"
                },
                preferencesModal: {
                    title: "Präferenzen für die Zustimmung",
                    acceptAllBtn: "Alle akzeptieren",
                    acceptNecessaryBtn: "Alle ablehnen",
                    savePreferencesBtn: "Einstellungen speichern",
                    closeIconLabel: "Modal schließen",
                    serviceCounterLabel: "Dienstleistungen",
                    sections: [
                        {
                            title: "Verwendung von Cookies",
                            description: "Wir benötigen Ihre Zustimmung, bevor Sie auf unserer Website fortfahren können.
Wenn Sie unter 16 Jahre alt sind und optionalen Diensten zustimmen möchten, müssen Sie Ihre Erziehungsberechtigten um Erlaubnis fragen.
Wir verwenden Cookies und andere Technologien auf unserer Website. Einige von ihnen sind essenziell, während andere uns helfen, diese Website und Ihre Erfahrung zu verbessern. Personenbezogene Daten können verarbeitet werden (z. B. IP-Adressen), beispielsweise für personalisierte Anzeigen und Inhalte oder Anzeigen- und Inhaltsmessung."
                        },
                        {
                            title: "Streng Notwendige Cookies <span class=\"pm__badge\">Immer Aktiviert</span>",
                            description: "Diese Cookies sind erforderlich, damit unsere Website korrekt funktioniert und grundlegende Funktionen, wie die Seitennavigation, bereitstellt. Sie können nicht deaktiviert werden.",
                            linkedCategory: "necessary"
                        },
                        {
                            title: "Funktionalitäts Cookies",
                            description: "Diese Cookies ermöglichen zusätzliche Funktionen, wie das Speichern Ihrer Einstellungen und Präferenzen, um Ihre Erfahrung zu personalisieren.",
                            linkedCategory: "functionality"
                        },
                        {
                            title: "Analytische Cookies",
                            description: "Sie helfen uns zu verstehen, wie unsere Besucher die Website nutzen. So können wir die Benutzerfreundlichkeit verbessern, indem wir Informationen über die Nutzung sammeln und analysieren.",
                            linkedCategory: "analytics"
                        },
                        {
                            title: "Werbung Cookies",
                            description: "Diese Cookies helfen uns, Ihnen relevante Werbeinhalte anzuzeigen, basierend auf Ihren Interessen und Ihrem Surfverhalten auf unserer Seite.",
                            linkedCategory: "marketing"
                        },
                        {
                            title: "Weitere Informationen",
                            description: "Weitere Informationen zu den verwendeten Cookies und deren Zweck finden Sie in unserer Datenschutzerklärung."
                        }
                    ]
                }
            }
        }
    }
});
