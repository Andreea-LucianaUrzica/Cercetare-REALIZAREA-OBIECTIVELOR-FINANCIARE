// Define study
const study = lab.util.fromObject({
  "title": "root",
  "type": "lab.flow.Sequence",
  "parameters": {},
  "plugins": [
    {
      "type": "lab.plugins.Metadata",
      "path": undefined
    },
    {
      "type": "lab.plugins.Transmit",
      "url": "backend.php",
      "path": undefined
    }
  ],
  "metadata": {
    "title": "REALIZAREA OBIECTIVELOR FINANCIARE",
    "description": "Studiul unor aspecte psihologice\u002Fcomportamentale asociate modului în care, de obicei, oamenii își stabilesc anumite obiective financiare și se gândesc la anumite strategii și modalități de a realiza respectivele obiective.",
    "repository": "",
    "contributors": "Drd Andreea-Luciana URZICĂ, Coord.prof.univ.dr. Ticu CONSTANTIN \n\u003Curzica_andreea@yahoo.com\u003E, (https:\u002F\u002Fwww.linkedin.com\u002Fin\u002Fandreea-luciana-urzica-46a58241\u002F)\n"
  },
  "files": {},
  "responses": {},
  "content": [
    {
      "type": "lab.canvas.Screen",
      "content": [
        {
          "type": "i-text",
          "left": 0,
          "top": 0,
          "angle": 0,
          "width": 2,
          "height": 36.16,
          "stroke": null,
          "strokeWidth": 1,
          "fill": "black",
          "text": "",
          "fontStyle": "normal",
          "fontWeight": "normal",
          "fontSize": 32,
          "fontFamily": "sans-serif",
          "lineHeight": 1.16,
          "textAlign": "center"
        },
        {
          "type": "i-text",
          "left": 0,
          "top": 0,
          "angle": 0,
          "width": 779.22,
          "height": 520.7,
          "stroke": null,
          "strokeWidth": 1,
          "fill": "#0d3b83",
          "text": "\nRealizarea obiectivelor financiare \nInstrucțiuni și informații despre participarea la studiu.\n\nTema cercetării  vizează orice  situație în care, de obicei, \noamenii își stabilesc anumite obiective financiare\n și se gândesc la anumite strategii și modalități de a realiza respectivele obiective.\n\nDacă acceptați să participați la această cercetare  \nVĂ ROG, SĂ ACCESAȚI LINK-UL DIN SLIDE-ul următor (CLICK HERE)\n  și veți fi direcționat(ă) automat către formularul (Google Forms)\ncare conține itemii și întrebările la care să răspundeți.\n\nCu mulțumiri anticipate pentru timpul acordat și\n pentru atenția cu care veți răspunde cerințelor asociate cercetării!\n\nP.S. Detalii suplimentare despre contextul realizării sutudiului \nși recompensele asociate au fost transmise\n  în mesajul de invitație la cercetare.\n",
          "fontStyle": "normal",
          "fontWeight": "bold",
          "fontSize": "20",
          "fontFamily": "sans-serif",
          "lineHeight": 1.16,
          "textAlign": "center"
        },
        {
          "type": "image",
          "left": 300,
          "top": 250,
          "angle": 0,
          "width": 190.3,
          "height": 79.2,
          "stroke": null,
          "strokeWidth": 0,
          "fill": "black",
          "src": "${ this.files[\"click here.jpg\"] }",
          "autoScale": undefined
        }
      ],
      "viewport": [
        800,
        600
      ],
      "files": {
        "click-here-button-hand-pointer-260nw-1390283894.jpg": "embedded\u002Fc5625e9c5ea5a7ab41309f5d8936970efeef38f765e0fc6f73f59d98caacee8a.jpg",
        "click here.jpg": "embedded\u002F492800690e0a695efe17c85baefa1c088dab5f3d04553497b7a6bf722b1b6321.jpg"
      },
      "responses": {
        "click": "",
        "undefined": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "INTRO ",
      "tardy": true,
      "plugins": [
        {
          "type": "fullscreen",
          "message": "Full screen mode",
          "hint": "Pentru o mai bună vizualizare a conținutului acestui studiu este recomandat să vedeti informațiile în full screen (ecran complet)- full screen pentru a începe completarea Dați click oriunde în acest ecran pentru a trece mai departe",
          "path": "lab.plugins.Fullscreen"
        }
      ]
    },
    {
      "type": "lab.flow.Sequence",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Sequence",
      "shuffle": true,
      "content": [
        {
          "type": "lab.html.Screen",
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "A form",
          "content": "\r\n\u003Cbody\u003E\r\n\r\n\u003Ch1 style=\"color:Crimson\"\u003EFORMULAR DE PARTICIPARE\u003C\u002Fh1\u003E\r\n\u003Ch2\u003E\r\n\u003Cb\u003E\r\n  \u003Cstrong\u003E\r\n\u003Ca href=https:\u002F\u002Ftinyurl.com\u002FA11-FORM \u002F\u003EAccesați AICI formularul de participare!\u003C\u002Fa\u003E\r\n  \u003C\u002Fstrong\u003E\r\n\u003C\u002Fb\u003E\r\n\u003C\u002Fh2\u003E\r\n\r\n\u003C\u002Fbody\u003E\r\n\u003C\u002Fhtml\u003E\r\n\r\n"
        },
        {
          "type": "lab.html.Screen",
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "B form",
          "content": "\r\n\u003Cbody\u003E\r\n\r\n\u003Ch1 style=\"color:ForestGreen\"\u003EFORMULAR DE PARTICIPARE\u003C\u002Fh1\u003E\r\n\u003Ch2\u003E\r\n  \u003Cb\u003E\r\n    \u003Cstrong\u003E\r\n\u003Ca href=https:\u002F\u002Ftinyurl.com\u002FB22-FORM2 \u002F\u003EAccesați AICI formularul de participare!\u003C\u002Fa\u003E\r\n    \u003C\u002Fstrong\u003E\r\n  \u003C\u002Fb\u003E\r\n\u003C\u002Fh2\u003E\r\n\r\n\r\n\u003C\u002Fbody\u003E\r\n\u003C\u002Fhtml\u003E\r\n\r\n"
        },
        {
          "type": "lab.html.Screen",
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "C form",
          "content": "\r\n\u003Cbody\u003E\r\n\r\n\u003Ch1 style=\"color:OrangeRed\"\u003E FORMULAR DE PARTICIPARE\u003C\u002Fh1\u003E\r\n\u003Ch2\u003E\r\n  \u003Cb\u003E\r\n    \u003Cstrong\u003E\r\n\u003Ca href=https:\u002F\u002Ftinyurl.com\u002FC33-FORM33 \u002F\u003EAccesați AICI formularul de participare!\u003C\u002Fa\u003E\r\n    \u003C\u002Fstrong\u003E\r\n  \u003C\u002Fb\u003E\r\n\u003C\u002Fh2\u003E\r\n\r\n\r\n\u003C\u002Fbody\u003E\r\n\u003C\u002Fhtml\u003E\r\n\r\n"
        },
        {
          "type": "lab.html.Screen",
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "D form",
          "content": "\r\n\u003Cbody\u003E\r\n\r\n\u003Ch1 style=\"color:DarkMagenta\"\u003E FORMULAR DE PARTICIPARE\u003C\u002Fh1\u003E\r\n\u003Ch2\u003E\r\n  \u003Cb\u003E\r\n    \u003Cstrong\u003E\r\n\u003Ca href=https:\u002F\u002Ftinyurl.com\u002FD44-FORM44\u002F\u003EAccesați AICI formularul de participare!\u003C\u002Fa\u003E\r\n    \u003C\u002Fstrong\u003E\r\n  \u003C\u002Fb\u003E\r\n\u003C\u002Fh2\u003E\r\n\r\n\u003C\u002Fbody\u003E\r\n\u003C\u002Fhtml\u003E\r\n\r\n"
        },
        {
          "type": "lab.html.Screen",
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "E form",
          "content": "\r\n\u003Cbody\u003E\r\n\r\n\u003Ch1 style=\"color:MediumBlue\"\u003E FORMULAR DE PARTICIPARE\u003C\u002Fh1\u003E\r\n\u003Ch2\u003E\r\n  \u003Cb\u003E\r\n    \u003Cstrong\u003E\r\n\u003Ca href=https:\u002F\u002Ftinyurl.com\u002FE55-FORM55 \u002F\u003EAccesați AICI formularul de participare!\u003C\u002Fa\u003E\r\n    \u003C\u002Fstrong\u003E\r\n  \u003C\u002Fb\u003E\r\n\u003C\u002Fh2\u003E\r\n\r\n\u003C\u002Fbody\u003E\r\n\u003C\u002Fhtml\u003E\r\n\r\n"
        }
      ]
    }
  ]
})

// Let's go!
study.run()