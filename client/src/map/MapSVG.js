import "./map.css";
import elementMaps from "./elementMap.json";
import Oggetto from "./oggetto";

const MapSVG = () => {
  let maps = elementMaps;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0"
      y="0"
      enableBackground="new 0 0 1342 834"
      version="1.1"
      viewBox="0 0 1342 834"
      xmlSpace="preserve"
    >

      <Oggetto
              nome="pavimento"
              coordinate={[
                "M713.4 723.5L713.4 482.5 423.8 482.5 423.8 832.5 246.1 833 240.5 277.1 1190.5 277.1 1190.5 398.7 916 398.7 916 723.5z",
              ]}
              attributi={[
                [{ name: "className", value: "pavimento" }],
              ]}
            />

      <Oggetto
        nome="divano_1"
        coordinate={[
          "M578.5 445H708.5V455H578.5z",
          "M715.5 465h-9c-1.7 0-3-1.3-3-3v-74c0-1.7 1.3-3 3-3h9c1.7 0 3 1.3 3 3v74c0 1.7-1.3 3-3 3zM700.5 465h-114c-1.7 0-3-1.3-3-3v-9c0-1.7 1.3-3 3-3h114c1.7 0 3 1.3 3 3v9c0 1.7-1.3 3-3 3zM700.5 450h-54c-1.7 0-3-1.3-3-3v-59c0-1.7 1.3-3 3-3h54c1.7 0 3 1.3 3 3v59c0 1.7-1.3 3-3 3zM640.5 450h-54c-1.7 0-3-1.3-3-3v-59c0-1.7 1.3-3 3-3h54c1.7 0 3 1.3 3 3v59c0 1.7-1.3 3-3 3zM580.5 465h-9c-1.7 0-3-1.3-3-3v-74c0-1.7 1.3-3 3-3h9c1.7 0 3 1.3 3 3v74c0 1.7-1.3 3-3 3z",
        ]}
        attributi={[
          [
            { name: "pointerEvents", value: "all" },
            { name: "className", value: "divano" },
          ],
          [{ name: "className", value: "divano" }],
        ]}
      />

      <Oggetto
        nome="divano_2"
        coordinate={[
          "M425.5 445H555.5V455H425.5z",
          "M562.5 465h-9c-1.7 0-3-1.3-3-3v-74c0-1.7 1.3-3 3-3h9c1.7 0 3 1.3 3 3v74c0 1.7-1.3 3-3 3zM547.5 465h-114c-1.7 0-3-1.3-3-3v-9c0-1.7 1.3-3 3-3h114c1.7 0 3 1.3 3 3v9c0 1.7-1.3 3-3 3zM547.5 450h-54c-1.7 0-3-1.3-3-3v-59c0-1.7 1.3-3 3-3h54c1.7 0 3 1.3 3 3v59c0 1.7-1.3 3-3 3zM487.5 450h-54c-1.7 0-3-1.3-3-3v-59c0-1.7 1.3-3 3-3h54c1.7 0 3 1.3 3 3v59c0 1.7-1.3 3-3 3zM427.5 465h-9c-1.7 0-3-1.3-3-3v-74c0-1.7 1.3-3 3-3h9c1.7 0 3 1.3 3 3v74c0 1.7-1.3 3-3 3z",
        ]}
        attributi={[
          [
            { name: "pointerEvents", value: "all" },
            { name: "className", value: "divano" },
          ],
          [
            { name: "pointerEvents", value: "all" },
            { name: "className", value: "divano" },
          ],
        ]}
      />

      <Oggetto
        nome="muri"
        coordinate={[
          "M723.4 713H911V723.5H723.4z",
          "M413.8 832.5L250.5 833 250.5 822.5 414 822.5z",
          "M1181.3 283.5H1190.5V393.5H1181.3z",
          "M240.5 283.5H250.5V302.5H240.5z"
        ]}
        attributi={[
          [
            { name: "className", value: "st2" },
          ],
          [
            { name: "className", value: "st2" },
          ],
          [
            { name: "className", value: "st2" },
          ],
          [
            { name: "pointerEvents", value: "all" },
            { name: "className", value: "st2" },
          ],
        ]}
      />

<Oggetto
        nome="stanza_6"
        stile="stanza"
        coordinate={[
          "M916 398.7L1335 398.7 1335 718.2 916 718.5z"
        ]}
        attributi={[
          [
            { name: "className", value: "pavimento" },
          ]
        ]}
      >
        <Oggetto
        nome="libreria"
        coordinate={[
          "M1153 668.5H1330V713.5H1153z",
          "M1330 676c0-2.1-2.3-3.8-5.2-3.8s-5.2 1.7-5.2 3.8v25.5c3.1-2.2 7.2-2.2 10.3 0V676zm-11.8 0c0-2.1-2.3-3.8-5.2-3.8-2.9 0-5.2 1.7-5.2 3.8v25.5c3.1-2.2 7.2-2.2 10.3 0V676zm-11.8 0c0-2.1-2.3-3.8-5.2-3.8s-5.2 1.7-5.2 3.8v25.5c3.1-2.2 7.2-2.2 10.3 0V676zm-11.8 0c0-2.1-2.3-3.8-5.2-3.8-2.8 0-5.2 1.7-5.2 3.8v25.5c3.1-2.2 7.2-2.2 10.3 0V676zm-11.8 0c0-2.1-2.3-3.8-5.2-3.8s-5.2 1.7-5.2 3.8v25.5c3.1-2.2 7.2-2.2 10.3 0V676zm-11.8 0c0-2.1-2.3-3.8-5.2-3.8s-5.2 1.7-5.2 3.8v25.5c3.1-2.2 7.2-2.2 10.3 0V676zm-11.8 0c0-2.1-2.3-3.8-5.2-3.8-2.9 0-5.2 1.7-5.2 3.8v25.5c3.1-2.2 7.2-2.2 10.3 0V676zm-11.8 0c0-2.1-2.3-3.8-5.2-3.8s-5.2 1.7-5.2 3.8v25.5c3.1-2.2 7.2-2.2 10.3 0V676zm-11.8 0c0-2.1-2.3-3.8-5.2-3.8-2.8 0-5.2 1.7-5.2 3.8v25.5c3.1-2.2 7.2-2.2 10.3 0V676zm-11.8 0c0-2.1-2.3-3.8-5.2-3.8s-5.2 1.7-5.2 3.8v25.5c3.1-2.2 7.2-2.2 10.3 0V676zm-11.8 0c0-2.1-2.3-3.8-5.2-3.8s-5.2 1.7-5.2 3.8v25.5c3.1-2.2 7.2-2.2 10.3 0V676zm-11.8 0c0-2.1-2.3-3.8-5.2-3.8-2.9 0-5.2 1.7-5.2 3.8v25.5c3.1-2.2 7.2-2.2 10.3 0V676zm-24.8 30.5l8.7-30.2-19.8-5.9-8.7 30.2 19.8 5.9z",
        ]}
        attributi={[
          [
            { name: "className", value: "libreria" },
            { name: "pointerEvents", value: "all" },
          ],
          [
            { name: "className", value: "libri" },
            { name: "pointerEvents", value: "all" },
          ]
        ]}
      />
        </Oggetto>
      <g id="stanza_6" className="stanza">

        <path
          d="M1305.2 443.6c-2.8-1.7-7.8-2.5-12.6-2.9 8-3.6 16.9-10 16.9-10-5.7-2.5-12.9 0-18.5 2.9 1.4-3.5 2.2-7 2.4-9.7.3-2.8-.7-14.4-1.5-11.2-1.2 4.5-4 10.2-6.6 15-3.7-9.8-10-17.2-10-16 0 1.7 3.1 18.4 4.4 25.5-.2.2-.3.4-.3.4v.1c-6.6-20.1-19.8-25.1-19.8-25.1 5.2 4.6 10 17.4 13 26.7L1250 426s5.4 8.5 13.2 14.5c-5.6.4-11.1 1.4-13.2 3.8 0 0 10.4 5.1 20.3 1.6-4.6 4.6-9.3 11.1-8 17.8 0 0 8.7-6.1 14-13-2.1 7-3.3 15.6 1.7 18.9 0 0 3.9-8.7 4.7-16.9 5.4 5.4 13.8 7.6 13.8 7.6-1.3-3.6-5.8-8.7-9.8-12.9 8.8 2.7 23.3-.9 18.5-3.8z"
          className="pianta"
          pointerEvents="all"
        ></path>
        <g id="tavolo_1">
          <g id="sedia_6">
            <path
              d="M1107.1 607.7l-3-24.1c-.6-3.5 1-7.1 4-9 10.2-1.6 20.7-1.6 30.9 0 3 1.9 4.6 5.5 4 9l-3 24.1c-.6 2.7-3.4 4.7-7 5h-19c-3.5-.3-6.4-2.3-6.9-5z"
              className="sedia"
              pointerEvents="all"
            ></path>
            <path
              d="M1107.8 613.2c-.8-.3-1.3-1.3-1-2.2.3-.9 1.2-1.4 2-1.1 9.9 2.4 20.1 2.4 29.9 0 .6.2 1.1.7 1.3 1.4.2.7.1 1.4-.3 2-10.5 2.7-21.4 2.7-31.9-.1"
              className="sedia"
              pointerEvents="all"
            ></path>
          </g>
          <g id="sedia_5">
            <path
              d="M1167.1 607.7l-3-24.1c-.6-3.5 1-7.1 4-9 10.2-1.6 20.7-1.6 30.9 0 3 1.9 4.6 5.5 4 9l-3 24.1c-.6 2.7-3.4 4.7-7 5h-19c-3.5-.3-6.4-2.3-6.9-5z"
              className="sedia"
              pointerEvents="all"
            ></path>
            <path
              d="M1167.8 613.2c-.8-.3-1.3-1.3-1-2.2.3-.9 1.2-1.4 2-1.1 9.9 2.4 20.1 2.4 29.9 0 .6.2 1.1.7 1.3 1.4.2.7.1 1.4-.3 2-10.5 2.7-21.4 2.7-31.9-.1"
              className="sedia"
              pointerEvents="all"
            ></path>
          </g>
          <g id="sedia_4">
            <path
              d="M1245.2 562.4l-24.1 3c-3.5.6-7.1-1-9-4-1.6-10.2-1.6-20.7 0-30.9 1.9-3 5.5-4.6 9-4l24.1 3c2.7.6 4.7 3.4 5 7v18.9c-.3 3.6-2.3 6.5-5 7z"
              className="sedia"
              pointerEvents="all"
            ></path>
            <path
              d="M1250.7 561.7c-.3.8-1.3 1.3-2.2 1-.9-.3-1.4-1.2-1.1-2 2.4-9.9 2.4-20.1 0-29.9.2-.6.7-1.1 1.4-1.3.7-.2 1.4-.1 2 .3 2.7 10.5 2.7 21.4-.1 31.9"
              className="sedia"
              pointerEvents="all"
            ></path>
          </g>
          <g id="sedia_3">
            <path
              d="M1199.9 484.3l3 24.1c.6 3.5-1 7.1-4 9-10.2 1.6-20.7 1.6-30.9 0-3-1.9-4.6-5.5-4-9l3-24.1c.6-2.7 3.4-4.7 7-5h18.9c3.6.3 6.5 2.3 7 5z"
              className="sedia"
              pointerEvents="all"
            ></path>
            <path
              d="M1199.2 478.8c.8.3 1.3 1.3 1 2.2-.3.9-1.2 1.4-2 1.1-9.9-2.4-20.1-2.4-29.9 0-.6-.2-1.1-.7-1.3-1.4-.2-.7-.1-1.4.3-2 10.5-2.7 21.4-2.7 31.9.1"
              className="sedia"
              pointerEvents="all"
            ></path>
          </g>
          <g id="sedia_2">
            <path
              d="M1139.9 484.3l3 24.1c.6 3.5-1 7.1-4 9-10.2 1.6-20.7 1.6-30.9 0-3-1.9-4.6-5.5-4-9l3-24.1c.6-2.7 3.4-4.7 7-5h18.9c3.6.3 6.5 2.3 7 5z"
              className="sedia"
              pointerEvents="all"
            ></path>
            <path
              d="M1139.2 478.8c.8.3 1.3 1.3 1 2.2-.3.9-1.2 1.4-2 1.1-9.9-2.4-20.1-2.4-29.9 0-.6-.2-1.1-.7-1.3-1.4-.2-.7-.1-1.4.3-2 10.5-2.7 21.4-2.7 31.9.1"
              className="sedia"
              pointerEvents="all"
            ></path>
          </g>
          <g id="sedia_1">
            <path
              d="M1061.8 529.6l24.1-3c3.5-.6 7.1 1 9 4 1.6 10.2 1.6 20.7 0 30.9-1.9 3-5.5 4.6-9 4l-24.1-3c-2.7-.6-4.7-3.4-5-7v-18.9c.3-3.6 2.3-6.5 5-7z"
              className="sedia"
              pointerEvents="all"
            ></path>
            <path
              d="M1056.3 530.3c.3-.8 1.3-1.3 2.2-1 .9.3 1.4 1.2 1.1 2-2.4 9.9-2.4 20.1 0 29.9-.2.6-.7 1.1-1.4 1.3-.7.2-1.4.1-2-.3-2.7-10.5-2.7-21.4.1-31.9"
              className="sedia"
              pointerEvents="all"
            ></path>
          </g>
          <ellipse
            cx="1153.5"
            cy="546"
            className="tavolo"
            pointerEvents="all"
            rx="80"
            ry="50"
          ></ellipse>
        </g>
        <g id="porta">
          <path
            d="M911 633h5m0 0c44.2 0 80 35.8 80 80h-80m0-80c44.2 0 80-35.8 80-80h-80"
            className="porta"
            pointerEvents="all"
          ></path>
          <path
            d="M911 553H916V713H911z"
            className="porta"
            pointerEvents="all"
          ></path>
        </g>
        <path
          d="M920.5 552.5L920.5 403.5 1331.5 403.5 1330 713.5 911 713.5 911 723.5 1341.5 723.5 1341.5 393.5 910.5 393.5 910.5 552.5z"
          className="muro"
        ></path>
      </g>

      <g id="stanza_5" className="stanza">
        <path d="M559 7.5H1185.9V277.1H559z" className="pavimento"></path>
        <g id="tavolo_1">
          <g id="sedia_18">
            <path
              d="M646.6 194.2l-3-24.1c-.6-3.5 1-7.1 4-9 10.2-1.6 20.7-1.6 30.9 0 3 1.9 4.5 5.5 4 9l-3 24.1c-.6 2.7-3.4 4.7-7 5h-18.9c-3.6-.3-6.5-2.3-7-5z"
              className="sedia"
              pointerEvents="all"
            ></path>
            <path
              d="M647.3 199.7c-.8-.3-1.3-1.3-1-2.2.3-.9 1.2-1.4 2-1.1 9.8 2.4 20 2.4 29.9 0 .6.2 1.1.7 1.3 1.4.2.7.1 1.4-.3 2-10.5 2.7-21.4 2.7-31.9-.1"
              className="sedia"
              pointerEvents="all"
            ></path>
          </g>
          <g id="sedia_17">
            <path
              d="M706.6 194.2l-3-24.1c-.6-3.5 1-7.1 4-9 10.2-1.6 20.7-1.6 30.9 0 3 1.9 4.5 5.5 4 9l-3 24.1c-.6 2.7-3.4 4.7-7 5h-18.9c-3.6-.3-6.5-2.3-7-5z"
              className="sedia"
              pointerEvents="all"
            ></path>
            <path
              d="M707.3 199.7c-.8-.3-1.3-1.3-1-2.2.3-.9 1.2-1.4 2-1.1 9.8 2.4 20 2.4 29.9 0 .6.2 1.1.7 1.3 1.4.2.7.1 1.4-.3 2-10.5 2.7-21.4 2.7-31.9-.1"
              className="sedia"
              pointerEvents="all"
            ></path>
          </g>
          <g id="sedia_16">
            <path
              d="M766.6 194.2l-3-24.1c-.6-3.5 1-7.1 4-9 10.2-1.6 20.7-1.6 30.9 0 3 1.9 4.5 5.5 4 9l-3 24.1c-.6 2.7-3.4 4.7-7 5h-18.9c-3.6-.3-6.5-2.3-7-5z"
              className="sedia"
              pointerEvents="all"
            ></path>
            <path
              d="M767.3 199.7c-.8-.3-1.3-1.3-1-2.2.3-.9 1.2-1.4 2-1.1 9.8 2.4 20 2.4 29.9 0 .6.2 1.1.7 1.3 1.4.2.7.1 1.4-.3 2-10.5 2.7-21.4 2.7-31.9-.1"
              className="sedia"
              pointerEvents="all"
            ></path>
          </g>
          <g id="sedia_15">
            <path
              d="M826.6 194.2l-3-24.1c-.6-3.5 1-7.1 4-9 10.2-1.6 20.7-1.6 30.9 0 3 1.9 4.5 5.5 4 9l-3 24.1c-.6 2.7-3.4 4.7-7 5h-18.9c-3.6-.3-6.5-2.3-7-5z"
              className="sedia"
              pointerEvents="all"
            ></path>
            <path
              d="M827.3 199.7c-.8-.3-1.3-1.3-1-2.2.3-.9 1.2-1.4 2-1.1 9.8 2.4 20 2.4 29.9 0 .6.2 1.1.7 1.3 1.4.2.7.1 1.4-.3 2-10.5 2.7-21.4 2.7-31.9-.1"
              className="sedia"
              pointerEvents="all"
            ></path>
          </g>
          <g id="sedia_14">
            <path
              d="M886.6 194.2l-3-24.1c-.6-3.5 1-7.1 4-9 10.2-1.6 20.7-1.6 30.9 0 3 1.9 4.5 5.5 4 9l-3 24.1c-.6 2.7-3.4 4.7-7 5h-18.9c-3.6-.3-6.5-2.3-7-5z"
              className="sedia"
              pointerEvents="all"
            ></path>
            <path
              d="M887.3 199.7c-.8-.3-1.3-1.3-1-2.2.3-.9 1.2-1.4 2-1.1 9.8 2.4 20 2.4 29.9 0 .6.2 1.1.7 1.3 1.4.2.7.1 1.4-.3 2-10.5 2.7-21.4 2.7-31.9-.1"
              className="sedia"
              pointerEvents="all"
            ></path>
          </g>
          <g id="sedia_13">
            <path
              d="M946.6 194.2l-3-24.1c-.6-3.5 1-7.1 4-9 10.2-1.6 20.7-1.6 30.9 0 3 1.9 4.5 5.5 4 9l-3 24.1c-.6 2.7-3.4 4.7-7 5h-18.9c-3.6-.3-6.5-2.3-7-5z"
              className="sedia"
              pointerEvents="all"
            ></path>
            <path
              d="M947.3 199.7c-.8-.3-1.3-1.3-1-2.2.3-.9 1.2-1.4 2-1.1 9.8 2.4 20 2.4 29.9 0 .6.2 1.1.7 1.3 1.4.2.7.1 1.4-.3 2-10.5 2.7-21.4 2.7-31.9-.1"
              className="sedia"
              pointerEvents="all"
            ></path>
          </g>
          <g id="sedia_12">
            <path
              d="M1006.6 194.2l-3-24.1c-.6-3.5 1-7.1 4-9 10.2-1.6 20.7-1.6 30.9 0 3 1.9 4.6 5.5 4 9l-3 24.1c-.6 2.7-3.4 4.7-7 5h-18.9c-3.6-.3-6.5-2.3-7-5z"
              className="sedia"
              pointerEvents="all"
            ></path>
            <path
              d="M1007.3 199.7c-.8-.3-1.3-1.3-1-2.2.3-.9 1.2-1.4 2-1.1 9.9 2.4 20.1 2.4 29.9 0 .6.2 1.1.7 1.3 1.4.2.7.1 1.4-.3 2-10.5 2.7-21.4 2.7-31.9-.1"
              className="sedia"
              pointerEvents="all"
            ></path>
          </g>
          <g id="sedia_11">
            <path
              d="M1066.6 194.2l-3-24.1c-.6-3.5 1-7.1 4-9 10.2-1.6 20.7-1.6 30.9 0 3 1.9 4.6 5.5 4 9l-3 24.1c-.6 2.7-3.4 4.7-7 5h-18.9c-3.6-.3-6.5-2.3-7-5z"
              className="sedia"
              pointerEvents="all"
            ></path>
            <path
              d="M1067.3 199.7c-.8-.3-1.3-1.3-1-2.2.3-.9 1.2-1.4 2-1.1 9.9 2.4 20.1 2.4 29.9 0 .6.2 1.1.7 1.3 1.4.2.7.1 1.4-.3 2-10.5 2.7-21.4 2.7-31.9-.1"
              className="sedia"
              pointerEvents="all"
            ></path>
          </g>
          <g id="sedia_10">
            <path
              d="M1144.7 148.9l-24.1 3c-3.5.6-7.1-1-9-4-1.6-10.2-1.6-20.7 0-30.9 1.9-3 5.5-4.6 9-4l24.1 3c2.7.6 4.7 3.4 5 7v19c-.3 3.5-2.3 6.4-5 6.9z"
              className="sedia"
              pointerEvents="all"
            ></path>
            <path
              d="M1150.2 148.2c-.3.8-1.3 1.3-2.2 1-.9-.3-1.4-1.2-1.1-2 2.4-9.9 2.4-20.1 0-29.9.2-.6.7-1.1 1.4-1.3.7-.2 1.4-.1 2 .3 2.7 10.5 2.7 21.4-.1 31.9"
              className="sedia"
              pointerEvents="all"
            ></path>
          </g>
          <g id="sedia_9">
            <path
              d="M1099.4 70.8l3 24.1c.6 3.5-1 7.1-4 9-10.2 1.6-20.7 1.6-30.9 0-3-1.9-4.6-5.5-4-9l3-24.1c.6-2.7 3.4-4.7 7-5h18.9c3.6.3 6.5 2.3 7 5z"
              className="sedia"
              pointerEvents="all"
            ></path>
            <path
              d="M1098.7 65.3c.8.3 1.3 1.3 1 2.2-.3.9-1.2 1.4-2 1.1-9.9-2.4-20.1-2.4-29.9 0-.6-.2-1.1-.7-1.3-1.4-.2-.7-.1-1.4.3-2 10.5-2.7 21.4-2.7 31.9.1"
              className="sedia"
              pointerEvents="all"
            ></path>
          </g>
          <g id="sedia_8">
            <path
              d="M1039.4 70.8l3 24.1c.6 3.5-1 7.1-4 9-10.2 1.6-20.7 1.6-30.9 0-3-1.9-4.5-5.5-4-9l3-24.1c.6-2.7 3.4-4.7 7-5h18.9c3.6.3 6.5 2.3 7 5z"
              className="sedia"
              pointerEvents="all"
            ></path>
            <path
              d="M1038.7 65.3c.8.3 1.3 1.3 1 2.2-.3.9-1.2 1.4-2 1.1-9.9-2.4-20.1-2.4-29.9 0-.6-.2-1.1-.7-1.3-1.4-.2-.7-.1-1.4.3-2 10.5-2.7 21.4-2.7 31.9.1"
              className="sedia"
              pointerEvents="all"
            ></path>
          </g>
          <g id="sedia_7">
            <path
              d="M979.4 70.8l3 24.1c.6 3.5-1 7.1-4 9-10.2 1.6-20.7 1.6-30.9 0-3-1.9-4.5-5.5-4-9l3-24.1c.6-2.7 3.4-4.7 7-5h18.9c3.6.3 6.5 2.3 7 5z"
              className="sedia"
              pointerEvents="all"
            ></path>
            <path
              d="M978.7 65.3c.8.3 1.3 1.3 1 2.2-.3.9-1.2 1.4-2 1.1-9.8-2.4-20-2.4-29.9 0-.6-.2-1.1-.7-1.3-1.4-.2-.7-.1-1.4.3-2 10.5-2.7 21.4-2.7 31.9.1"
              className="sedia"
              pointerEvents="all"
            ></path>
          </g>
          <g id="sedia_6">
            <path
              d="M919.4 70.8l3 24.1c.6 3.5-1 7.1-4 9-10.2 1.6-20.7 1.6-30.9 0-3-1.9-4.5-5.5-4-9l3-24.1c.6-2.7 3.4-4.7 7-5h18.9c3.6.3 6.5 2.3 7 5z"
              className="sedia"
              pointerEvents="all"
            ></path>
            <path
              d="M918.7 65.3c.8.3 1.3 1.3 1 2.2-.3.9-1.2 1.4-2 1.1-9.8-2.4-20-2.4-29.9 0-.6-.2-1.1-.7-1.3-1.4-.2-.7-.1-1.4.3-2 10.5-2.7 21.4-2.7 31.9.1"
              className="sedia"
              pointerEvents="all"
            ></path>
          </g>
          <g id="sedia_5">
            <path
              d="M859.4 70.8l3 24.1c.6 3.5-1 7.1-4 9-10.2 1.6-20.7 1.6-30.9 0-3-1.9-4.5-5.5-4-9l3-24.1c.6-2.7 3.4-4.7 7-5h18.9c3.6.3 6.5 2.3 7 5z"
              className="sedia"
              pointerEvents="all"
            ></path>
            <path
              d="M858.7 65.3c.8.3 1.3 1.3 1 2.2-.3.9-1.2 1.4-2 1.1-9.8-2.4-20-2.4-29.9 0-.6-.2-1.1-.7-1.3-1.4-.2-.7-.1-1.4.3-2 10.5-2.7 21.4-2.7 31.9.1"
              className="sedia"
              pointerEvents="all"
            ></path>
          </g>
          <g id="sedia_4">
            <path
              d="M799.4 70.8l3 24.1c.6 3.5-1 7.1-4 9-10.2 1.6-20.7 1.6-30.9 0-3-1.9-4.5-5.5-4-9l3-24.1c.6-2.7 3.4-4.7 7-5h18.9c3.6.3 6.5 2.3 7 5z"
              className="sedia"
              pointerEvents="all"
            ></path>
            <path
              d="M798.7 65.3c.8.3 1.3 1.3 1 2.2-.3.9-1.2 1.4-2 1.1-9.8-2.4-20-2.4-29.9 0-.6-.2-1.1-.7-1.3-1.4-.2-.7-.1-1.4.3-2 10.5-2.7 21.4-2.7 31.9.1"
              className="sedia"
              pointerEvents="all"
            ></path>
          </g>
          <g id="sedia_3">
            <path
              d="M739.4 70.8l3 24.1c.6 3.5-1 7.1-4 9-10.2 1.6-20.7 1.6-30.9 0-3-1.9-4.5-5.5-4-9l3-24.1c.6-2.7 3.4-4.7 7-5h18.9c3.6.3 6.5 2.3 7 5z"
              className="sedia"
              pointerEvents="all"
            ></path>
            <path
              d="M738.7 65.3c.8.3 1.3 1.3 1 2.2-.3.9-1.2 1.4-2 1.1-9.8-2.4-20-2.4-29.9 0-.6-.2-1.1-.7-1.3-1.4-.2-.7-.1-1.4.3-2 10.5-2.7 21.4-2.7 31.9.1"
              className="sedia"
              pointerEvents="all"
            ></path>
          </g>
          <g id="sedia_2">
            <path
              d="M679.4 70.8l3 24.1c.6 3.5-1 7.1-4 9-10.2 1.6-20.7 1.6-30.9 0-3-1.9-4.5-5.5-4-9l3-24.1c.6-2.7 3.4-4.7 7-5h18.9c3.6.3 6.5 2.3 7 5z"
              className="sedia"
              pointerEvents="all"
            ></path>
            <path
              d="M678.7 65.3c.8.3 1.3 1.3 1 2.2-.3.9-1.2 1.4-2 1.1-9.8-2.4-20-2.4-29.9 0-.6-.2-1.1-.7-1.3-1.4-.2-.7-.1-1.4.3-2 10.5-2.7 21.4-2.7 31.9.1"
              className="sedia"
              pointerEvents="all"
            ></path>
          </g>
          <g id="sedia_1">
            <path
              d="M601.3 116.1l24.1-3c3.5-.6 7.1 1 9 4 1.6 10.2 1.6 20.7 0 30.9-1.9 3-5.5 4.5-9 4l-24.1-3c-2.7-.6-4.7-3.4-5-7v-19c.3-3.5 2.3-6.4 5-6.9z"
              className="sedia"
              pointerEvents="all"
            ></path>
            <path
              d="M595.8 116.8c.3-.8 1.3-1.3 2.2-1 .9.3 1.4 1.2 1.1 2-2.4 9.8-2.4 20 0 29.9-.2.6-.7 1.1-1.4 1.3-.7.2-1.4.1-2-.3-2.7-10.5-2.7-21.4.1-31.9"
              className="sedia"
              pointerEvents="all"
            ></path>
          </g>
          <ellipse
            cx="873"
            cy="132.5"
            className="tavolo"
            pointerEvents="all"
            rx="260"
            ry="50"
          ></ellipse>
        </g>
        <path
          d="M763.5 272.5L563.5 272.5 563.4 12.6 1180.5 12.5 1180.5 272.5 883.5 273.5 883.5 283.5 1190.5 283.5 1190.5 2.5 559 2.6 559 282.5 763.5 282.5z"
          className="muro"
        ></path>
      </g>
      <g id="stanza_4" className="stanza">
        <path d="M19.6 7.5H559V277.1H19.6z" className="pavimento"></path>
        <path
          d="M59.5 80.3c1.7-2.8 2.5-7.7 2.9-12.3 3.5 7.8 9.8 16.5 9.8 16.5 2.4-5.6 0-12.7-2.8-18.2 3.4 1.4 6.8 2.1 9.5 2.4 2.8.3 14.1-.7 11-1.5-4.4-1.2-10-3.9-14.7-6.5 9.6-3.6 16.9-9.8 15.6-9.8-1.7 0-18.1 3-25 4.3-.2-.1-.4-.3-.4-.3h-.1C85 48.4 89.9 35.5 89.9 35.5c-4.5 5.1-17 9.8-26.2 12.7l13.2-22s-8.3 5.3-14.2 12.9c-.4-5.5-1.4-10.9-3.7-12.9 0 0-4.9 10.2-1.5 19.9C53 41.6 46.6 37 40 38.2c0 0 5.9 8.5 12.7 13.7-6.9-2.1-15.3-3.3-18.5 1.7 0 0 8.5 3.8 16.6 4.6-5.3 5.2-7.4 13.6-7.4 13.6 3.5-1.3 8.5-5.7 12.6-9.6-2.9 8.6.7 22.8 3.5 18.1z"
          className="pianta"
          pointerEvents="all"
        ></path>
        <g id="tavolo_1">
          <g id="sedia_10">
            <path
              d="M159.5 195.1l-4-28.9c-.8-4.2 1.3-8.5 5.3-10.8 13.7-1.9 27.6-1.9 41.3 0 4 2.3 6.1 6.6 5.3 10.8l-4 28.9c-.8 3.2-4.6 5.7-9.3 6h-25.3c-4.7-.4-8.5-2.8-9.3-6z"
              className="sedia"
              pointerEvents="all"
            ></path>
            <path
              d="M160.6 201.7c-1.1-.4-1.7-1.6-1.3-2.7s1.6-1.7 2.7-1.3c13.2 2.9 26.8 2.9 39.9 0 .8.2 1.5.8 1.8 1.7.3.8.1 1.7-.4 2.4-14.1 3.2-28.7 3.2-42.7-.1"
              className="sedia"
              pointerEvents="all"
            ></path>
          </g>
          <g id="sedia_9">
            <path
              d="M225.6 195.1l-4-28.9c-.8-4.2 1.3-8.5 5.3-10.8 13.7-1.9 27.6-1.9 41.3 0 4 2.3 6.1 6.6 5.3 10.8l-4 28.9c-.8 3.2-4.6 5.7-9.3 6H235c-4.8-.4-8.6-2.8-9.4-6z"
              className="sedia"
              pointerEvents="all"
            ></path>
            <path
              d="M226.7 201.7c-1.1-.4-1.7-1.6-1.3-2.7s1.6-1.7 2.7-1.3c13.2 2.9 26.8 2.9 39.9 0 .8.2 1.5.8 1.8 1.7.3.8.1 1.7-.4 2.4-14.1 3.2-28.7 3.2-42.7-.1"
              className="sedia"
              pointerEvents="all"
            ></path>
          </g>
          <g id="sedia_8">
            <path
              d="M297.1 195.1l-4-28.9c-.8-4.2 1.3-8.5 5.3-10.8 13.7-1.9 27.6-1.9 41.3 0 4 2.3 6.1 6.6 5.3 10.8l-4 28.9c-.8 3.2-4.6 5.7-9.3 6h-25.3c-4.7-.4-8.5-2.8-9.3-6z"
              className="sedia"
              pointerEvents="all"
            ></path>
            <path
              d="M298.2 201.7c-1.1-.4-1.7-1.6-1.3-2.7.4-1.1 1.6-1.7 2.7-1.3 13.1 2.9 26.8 2.9 39.9 0 .8.2 1.5.8 1.8 1.7.3.8.1 1.7-.4 2.4-14.2 3.2-28.7 3.2-42.7-.1"
              className="sedia"
              pointerEvents="all"
            ></path>
          </g>
          <g id="sedia_7">
            <path
              d="M363.9 195.1l-4-28.9c-.8-4.2 1.3-8.5 5.3-10.8 13.7-1.9 27.6-1.9 41.3 0 4 2.3 6.1 6.6 5.3 10.8l-4 28.9c-.8 3.2-4.6 5.7-9.3 6h-25.3c-4.7-.4-8.5-2.8-9.3-6z"
              className="sedia"
              pointerEvents="all"
            ></path>
            <path
              d="M364.9 201.7c-1.1-.4-1.7-1.6-1.3-2.7s1.6-1.7 2.7-1.3c13.2 2.9 26.8 2.9 39.9 0 .8.2 1.5.8 1.8 1.7.3.8.1 1.7-.4 2.4-14.1 3.2-28.7 3.2-42.7-.1"
              className="sedia"
              pointerEvents="all"
            ></path>
          </g>
          <g id="sedia_6">
            <path
              d="M455.2 149.6l-28.9 4c-4.2.8-8.5-1.3-10.8-5.3-1.9-13.7-1.9-27.6 0-41.3 2.3-4 6.6-6.1 10.8-5.3l28.9 4c3.2.8 5.6 4.6 6 9.3v25.3c-.4 4.7-2.8 8.5-6 9.3z"
              className="sedia"
              pointerEvents="all"
            ></path>
            <path
              d="M461.8 148.5c-.4 1.1-1.6 1.7-2.7 1.3-1.1-.4-1.7-1.6-1.4-2.7 2.9-13.2 2.9-26.8 0-39.9.2-.8.8-1.5 1.7-1.8.8-.3 1.7-.1 2.4.4 3.3 14.1 3.3 28.7 0 42.7"
              className="sedia"
              pointerEvents="all"
            ></path>
          </g>
          <g id="sedia_5">
            <path
              d="M405.8 64.9l4 28.9c.8 4.2-1.3 8.5-5.3 10.8-13.7 1.9-27.6 1.9-41.3 0-4-2.3-6.1-6.6-5.3-10.8l4-28.9c.8-3.2 4.6-5.7 9.3-6h25.3c4.7.4 8.5 2.8 9.3 6z"
              className="sedia"
              pointerEvents="all"
            ></path>
            <path
              d="M404.8 58.3c1.1.4 1.7 1.6 1.3 2.7-.4 1.1-1.6 1.7-2.7 1.4-13.2-2.9-26.8-2.9-39.9 0-.8-.2-1.5-.8-1.8-1.7-.3-.8-.1-1.7.4-2.4 14.1-3.3 28.7-3.3 42.7 0"
              className="sedia"
              pointerEvents="all"
            ></path>
          </g>
          <g id="sedia_4">
            <path
              d="M339 64.9l4 28.9c.8 4.2-1.3 8.5-5.3 10.8-13.7 1.9-27.6 1.9-41.3 0-4-2.3-6.1-6.6-5.3-10.8l4-28.9c.8-3.2 4.6-5.7 9.3-6h25.3c4.8.4 8.6 2.8 9.3 6z"
              className="sedia"
              pointerEvents="all"
            ></path>
            <path
              d="M338 58.3c1.1.4 1.7 1.6 1.3 2.7-.4 1.1-1.6 1.7-2.7 1.4-13.1-2.9-26.8-2.9-39.9 0-.8-.2-1.5-.8-1.8-1.7-.3-.8-.1-1.7.4-2.4 14.1-3.3 28.7-3.3 42.7 0"
              className="sedia"
              pointerEvents="all"
            ></path>
          </g>
          <g id="sedia_3">
            <path
              d="M267.6 64.9l4 28.9c.8 4.2-1.3 8.5-5.3 10.8-13.7 1.9-27.6 1.9-41.3 0-4-2.3-6.1-6.6-5.3-10.8l4-28.9c.8-3.2 4.6-5.7 9.3-6h25.3c4.7.4 8.5 2.8 9.3 6z"
              className="sedia"
              pointerEvents="all"
            ></path>
            <path
              d="M266.5 58.3c1.1.4 1.7 1.6 1.3 2.7-.4 1.1-1.6 1.7-2.7 1.4-13.2-2.9-26.8-2.9-39.9 0-.8-.2-1.5-.8-1.8-1.7-.3-.8-.1-1.7.4-2.4 14.1-3.3 28.7-3.3 42.7 0"
              className="sedia"
              pointerEvents="all"
            ></path>
          </g>
          <g id="sedia_2">
            <path
              d="M201.4 64.9l4 28.9c.8 4.2-1.3 8.5-5.3 10.8-13.7 1.9-27.6 1.9-41.3 0-4-2.3-6.1-6.6-5.3-10.8l4-28.9c.8-3.2 4.6-5.7 9.3-6h25.3c4.8.4 8.6 2.8 9.3 6z"
              className="sedia"
              pointerEvents="all"
            ></path>
            <path
              d="M200.4 58.3c1.1.4 1.7 1.6 1.3 2.7-.4 1.1-1.6 1.7-2.7 1.4-13.2-2.9-26.8-2.9-39.9 0-.8-.2-1.5-.8-1.8-1.7-.3-.8-.1-1.7.4-2.4 14.1-3.3 28.7-3.3 42.7 0"
              className="sedia"
              pointerEvents="all"
            ></path>
          </g>
          <g id="sedia_1">
            <path
              d="M104.8 110.4l28.9-4c4.2-.8 8.5 1.3 10.8 5.3 1.9 13.7 1.9 27.6 0 41.3-2.3 4-6.6 6.1-10.8 5.3l-28.9-4c-3.2-.8-5.7-4.6-6-9.3v-25.3c.4-4.7 2.9-8.5 6-9.3z"
              className="sedia"
              pointerEvents="all"
            ></path>
            <path
              d="M98.2 111.5c.4-1.1 1.6-1.7 2.7-1.3 1.1.4 1.7 1.6 1.3 2.7-2.9 13.2-2.9 26.8 0 39.9-.2.8-.8 1.5-1.7 1.8-.8.3-1.7.1-2.4-.4-3.2-14.1-3.2-28.7.1-42.7"
              className="sedia"
              pointerEvents="all"
            ></path>
          </g>
          <path
            d="M281.7 76c-57.4 0-108.6 7.7-142.6 19.6v68.8c34 11.9 85.2 19.6 142.6 19.6s108.6-7.6 142.6-19.6V95.6C390.3 83.7 339.1 76 281.7 76z"
            className="tavolo"
            pointerEvents="all"
          ></path>
        </g>
        <path
          d="M283.5 272.5L23.5 272.5 23.5 12.5 553.5 12.6 553.5 272.5 443.5 272.5 443.5 282.5 559 282.5 559 2.6 13.5 2.5 13.5 282.5 283.5 282.5z"
          className="muro"
        ></path>
      </g>
      <g id="stanza_3" className="stanza">
        <path
          d="M5.5 307.5L245.5 307.5 247.5 553.6 5.5 553.9z"
          className="pavimento"
        ></path>
        <path
          d="M232.5 348.8c-2.8-1.7-7.8-2.5-12.6-2.9 8-3.6 16.9-10 16.9-10-5.7-2.5-12.9 0-18.5 2.9 1.4-3.5 2.2-7 2.4-9.7.3-2.8-.7-14.4-1.5-11.2-1.2 4.5-4 10.2-6.6 15-3.7-9.8-10-17.2-10-16 0 1.7 3.1 18.4 4.4 25.5-.2.2-.3.4-.3.4l-.1.1c-6.6-20.1-19.8-25.1-19.8-25.1 5.2 4.6 10 17.4 13 26.7l-22.4-13.4s5.4 8.5 13.2 14.5c-5.6.4-11.1 1.4-13.2 3.8 0 0 10.4 5.1 20.3 1.6-4.6 4.6-9.3 11.1-8 17.8 0 0 8.7-6.1 14-13-2.1 7-3.3 15.6 1.7 18.9 0 0 3.9-8.7 4.7-16.9 5.4 5.4 13.9 7.6 13.9 7.6-1.3-3.6-5.8-8.7-9.8-12.9 8.6 2.9 23.1-.8 18.3-3.7z"
          className="pianta"
          pointerEvents="all"
        ></path>
        <g id="tavolo_1">
          <g id="sedia_4">
            <path
              d="M175.2 428.9l-24.1 3c-3.5.6-7.1-1-9-4-1.6-10.2-1.6-20.7 0-30.9 1.9-3 5.5-4.5 9-4l24.1 3c2.7.6 4.7 3.4 5 7v19c-.3 3.5-2.3 6.4-5 6.9z"
              className="sedia"
              pointerEvents="all"
            ></path>
            <path
              d="M180.7 428.2c-.3.8-1.3 1.3-2.2 1-.9-.3-1.4-1.2-1.1-2 2.4-9.8 2.4-20 0-29.9.2-.6.7-1.1 1.4-1.3.7-.2 1.4-.1 2 .3 2.7 10.5 2.7 21.4-.1 31.9"
              className="sedia"
              pointerEvents="all"
            ></path>
          </g>
          <g id="sedia_3">
            <path
              d="M129.9 350.8l3 24.1c.6 3.5-1 7.1-4 9-10.2 1.6-20.7 1.6-30.9 0-3-1.9-4.6-5.5-4-9l3-24.1c.6-2.7 3.4-4.7 7-5h19c3.5.3 6.4 2.3 6.9 5z"
              className="sedia"
              pointerEvents="all"
            ></path>
            <path
              d="M129.2 345.3c.8.3 1.3 1.3 1 2.2-.3.9-1.2 1.4-2 1.1-9.8-2.4-20-2.4-29.9 0-.6-.2-1.1-.7-1.3-1.4-.2-.7-.1-1.4.3-2 10.5-2.7 21.4-2.7 31.9.1"
              className="sedia"
              pointerEvents="all"
            ></path>
          </g>
          <g id="sedia_2">
            <path
              d="M51.8 396.1l24.1-3c3.5-.6 7.1 1 9 4 1.6 10.2 1.6 20.7 0 30.9-1.9 3-5.5 4.6-9 4l-24.1-3c-2.7-.6-4.7-3.4-5-7v-19c.3-3.5 2.3-6.4 5-6.9z"
              className="sedia"
              pointerEvents="all"
            ></path>
            <path
              d="M46.3 396.8c.3-.8 1.3-1.3 2.2-1 .9.3 1.4 1.2 1.1 2-2.4 9.9-2.4 20.1 0 29.9-.2.6-.7 1.1-1.4 1.3-.7.2-1.4.1-2-.3-2.7-10.5-2.7-21.4.1-31.9"
              className="sedia"
              pointerEvents="all"
            ></path>
          </g>
          <g id="sedia_1">
            <path
              d="M97.1 474.2l-3-24.1c-.6-3.5 1-7.1 4-9 10.2-1.6 20.7-1.6 30.9 0 3 1.9 4.6 5.5 4 9l-3 24.1c-.6 2.7-3.4 4.7-7 5h-19c-3.5-.3-6.4-2.3-6.9-5z"
              className="sedia"
              pointerEvents="all"
            ></path>
            <path
              d="M97.8 479.7c-.8-.3-1.3-1.3-1-2.2.3-.9 1.2-1.4 2-1.1 9.8 2.4 20 2.4 29.9 0 .6.2 1.1.7 1.3 1.4.2.7.1 1.4-.3 2-10.5 2.7-21.4 2.7-31.9-.1"
              className="sedia"
              pointerEvents="all"
            ></path>
          </g>
          <path
            d="M63.5 362.5H163.5V462.5H63.5z"
            className="tavolo"
            pointerEvents="all"
          ></path>
        </g>
        <g id="porta">
          <path
            d="M170.5 544.5H250.5V549.5H170.5z"
            className="porta"
            pointerEvents="all"
          ></path>
          <path
            d="M170.5 544.5c0-44.2 35.8-80 80-80v80"
            className="porta"
            pointerEvents="all"
          ></path>
        </g>
        <path
          d="M10.5 550L10.5 312.5 240.5 312.5 240.5 462.5 250.5 462.5 250.5 302.5 0.5 302.5 0.5 555.6 251.1 556.3 251.1 550.9z"
          className="muro"
        ></path>
      </g>
      <g id="stanza_2" className="stanza">
        <path d="M5.5 556.6H246.1V827.8H5.5z" className="pavimento"></path>
        <path
          d="M227.2 594.1c-2.8-1.7-7.8-2.5-12.6-2.9 8-3.6 16.9-10 16.9-10-5.7-2.5-12.9 0-18.5 2.9 1.4-3.5 2.2-7 2.4-9.7.3-2.8-.7-14.4-1.5-11.2-1.2 4.5-4 10.2-6.6 15-3.7-9.8-10-17.2-10-15.9 0 1.7 3.1 18.4 4.4 25.5-.2.2-.3.4-.3.4s0 .1-.1.2c-6.6-20.1-19.8-25.1-19.8-25.1 5.2 4.6 10 17.4 13 26.7L172 576.5s5.4 8.5 13.2 14.5c-5.6.4-11.1 1.4-13.2 3.8 0 0 10.4 5 20.3 1.5-4.6 4.6-9.3 11.1-8 17.9 0 0 8.7-6.1 14-13-2.1 7-3.3 15.6 1.7 18.9 0 0 3.9-8.7 4.7-16.9 5.4 5.5 13.9 7.6 13.9 7.6-1.3-3.6-5.8-8.7-9.8-12.9 8.7 2.8 23.2-.9 18.4-3.8z"
          className="pianta"
          pointerEvents="all"
        ></path>
        <g id="tavolo_1">
          <g id="sedia_4">
            <path
              d="M165.2 673.9l-24.1 3c-3.5.6-7.1-1-9-4-1.6-10.2-1.6-20.7 0-30.9 1.9-3 5.5-4.5 9-4l24.1 3c2.7.6 4.7 3.4 5 7v19c-.3 3.5-2.3 6.4-5 6.9z"
              className="sedia"
              pointerEvents="all"
            ></path>
            <path
              d="M170.7 673.2c-.3.8-1.3 1.3-2.2 1-.9-.3-1.4-1.2-1.1-2 2.4-9.8 2.4-20 0-29.9.2-.6.7-1.1 1.4-1.3.7-.2 1.4-.1 2 .3 2.7 10.5 2.7 21.4-.1 31.9"
              className="sedia"
              pointerEvents="all"
            ></path>
          </g>
          <g id="sedia_3">
            <path
              d="M119.9 595.8l3 24.1c.6 3.5-1 7.1-4 9-10.2 1.6-20.7 1.6-30.9 0-3-1.9-4.6-5.5-4-9l3-24.1c.6-2.7 3.4-4.7 7-5h19c3.5.3 6.4 2.3 6.9 5z"
              className="sedia"
              pointerEvents="all"
            ></path>
            <path
              d="M119.2 590.3c.8.3 1.3 1.3 1 2.2-.3.9-1.2 1.4-2 1.1-9.8-2.4-20-2.4-29.9 0-.6-.2-1.1-.7-1.3-1.4-.2-.7-.1-1.4.3-2 10.5-2.7 21.4-2.7 31.9.1"
              className="sedia"
              pointerEvents="all"
            ></path>
          </g>
          <g id="sedia_2">
            <path
              d="M41.8 641.1l24.1-3c3.5-.6 7.1 1 9 4 1.6 10.2 1.6 20.7 0 30.9-1.9 3-5.5 4.5-9 4l-24.1-3c-2.7-.6-4.7-3.4-5-7v-19c.3-3.5 2.3-6.4 5-6.9z"
              className="sedia"
              pointerEvents="all"
            ></path>
            <path
              d="M36.3 641.8c.3-.8 1.3-1.3 2.2-1 .9.3 1.4 1.2 1.1 2-2.4 9.8-2.4 20 0 29.9-.2.6-.7 1.1-1.4 1.3-.7.2-1.4.1-2-.3-2.7-10.5-2.7-21.4.1-31.9"
              className="sedia"
              pointerEvents="all"
            ></path>
          </g>
          <g id="sedia_1">
            <path
              d="M87.1 719.2l-3-24.1c-.6-3.5 1-7.1 4-9 10.2-1.6 20.7-1.6 30.9 0 3 1.9 4.6 5.5 4 9l-3 24.1c-.6 2.7-3.4 4.7-7 5H94c-3.5-.3-6.4-2.3-6.9-5z"
              className="sedia"
              pointerEvents="all"
            ></path>
            <path
              d="M87.8 724.7c-.8-.3-1.3-1.3-1-2.2.3-.9 1.2-1.4 2-1.1 9.8 2.4 20 2.4 29.9 0 .6.2 1.1.7 1.3 1.4.2.7.1 1.4-.3 2-10.5 2.7-21.4 2.7-31.9-.1"
              className="sedia"
              pointerEvents="all"
            ></path>
          </g>
          <path
            d="M53.5 607.5H153.5V707.5H53.5z"
            className="tavolo"
            pointerEvents="all"
          ></path>
        </g>
        <g id="porta">
          <path
            d="M170.5 817.5H250.5V822.5H170.5z"
            className="porta"
            pointerEvents="all"
          ></path>
          <path
            d="M173.5 816.5c0-44.2 35.8-80 77-79v80"
            className="porta"
            pointerEvents="all"
          ></path>
        </g>
        <path
          d="M250.5 823L250.5 833 0.5 832.5 0.5 555.6 251.1 556.3 251.1 736.4 241.1 736.4 240.5 559.3 10.5 558.5 10.5 822.5z"
          className="muro"
        ></path>
      </g>
      <g id="stanza_1" className="stanza">
        <path
          d="M418.6 827.8L598.5 827.8 598.5 718.5 718.4 718.2 718.5 477.5 418.6 477.5z"
          className="pavimento"
        ></path>
        <g id="divano">
          <path
            d="M503.5 793H573.5V803H503.5z"
            className="divano-singolo"
            pointerEvents="all"
          ></path>
          <path
            d="M580.5 813h-9c-1.7 0-3-1.3-3-3v-74c0-1.7 1.3-3 3-3h9c1.7 0 3 1.3 3 3v74c0 1.7-1.3 3-3 3zM565.5 813h-54c-1.7 0-3-1.3-3-3v-9c0-1.7 1.3-3 3-3h54c1.7 0 3 1.3 3 3v9c0 1.7-1.3 3-3 3zM565.5 798h-54c-1.7 0-3-1.3-3-3v-59c0-1.7 1.3-3 3-3h54c1.7 0 3 1.3 3 3v59c0 1.7-1.3 3-3 3zM505.5 813h-9c-1.7 0-3-1.3-3-3v-74c0-1.7 1.3-3 3-3h9c1.7 0 3 1.3 3 3v74c0 1.7-1.3 3-3 3z"
            className="divano-singolo"
            pointerEvents="all"
          ></path>
        </g>
        <path
          d="M472.4 782c-2.1-1.3-5.9-1.9-9.4-2.2 6-2.7 12.6-7.5 12.6-7.5-4.2-1.9-9.6 0-13.8 2.1 1-2.6 1.6-5.2 1.8-7.2.2-2.1-.5-10.7-1.1-8.4-.9 3.4-3 7.7-5 11.2-2.8-7.3-7.5-12.9-7.5-11.9 0 1.3 2.3 13.8 3.3 19.1-.1.2-.2.3-.2.3v.1c-5-15-14.8-18.7-14.8-18.7 3.9 3.5 7.5 13 9.7 20l-16.8-10s4.1 6.3 9.8 10.8c-4.2.3-8.3 1.1-9.8 2.8 0 0 7.8 3.8 15.1 1.2-3.4 3.4-6.9 8.3-6 13.3 0 0 6.5-4.5 10.5-9.7-1.6 5.2-2.5 11.7 1.3 14.1 0 0 2.9-6.5 3.5-12.6 4 4.1 10.3 5.6 10.3 5.6-1-2.7-4.3-6.5-7.3-9.6 6.5 2.2 17.3-.6 13.8-2.8z"
          className="pianta"
          pointerEvents="all"
        ></path>
        <g id="tavolo_1">
          <g id="sedia_4">
            <path
              d="M567.1 644.2l-3-24.1c-.6-3.5 1-7.1 4-9 10.2-1.6 20.7-1.6 30.9 0 3 1.9 4.5 5.5 4 9l-3 24.1c-.6 2.7-3.4 4.7-7 5h-19c-3.5-.3-6.4-2.3-6.9-5z"
              className="sedia"
              pointerEvents="all"
            ></path>
            <path
              d="M567.8 649.7c-.8-.3-1.3-1.3-1-2.2.3-.9 1.2-1.4 2-1.1 9.8 2.4 20 2.4 29.9 0 .6.2 1.1.7 1.3 1.4.2.7.1 1.4-.3 2-10.5 2.7-21.4 2.7-31.9-.1"
              className="sedia"
              pointerEvents="all"
            ></path>
          </g>
          <g id="sedia_3">
            <path
              d="M645.2 598.9l-24.1 3c-3.5.6-7.1-1-9-4-1.6-10.2-1.6-20.7 0-30.9 1.9-3 5.5-4.5 9-4l24.1 3c2.7.6 4.7 3.4 5 7v19c-.3 3.5-2.3 6.4-5 6.9z"
              className="sedia"
              pointerEvents="all"
            ></path>
            <path
              d="M650.7 598.2c-.3.8-1.3 1.3-2.2 1-.9-.3-1.4-1.2-1.1-2 2.4-9.8 2.4-20 0-29.9.2-.6.7-1.1 1.4-1.3.7-.2 1.4-.1 2 .3 2.7 10.5 2.7 21.4-.1 31.9"
              className="sedia"
              pointerEvents="all"
            ></path>
          </g>
          <g id="sedia_2">
            <path
              d="M599.9 520.8l3 24.1c.6 3.5-1 7.1-4 9-10.2 1.6-20.7 1.6-30.9 0-3-1.9-4.5-5.5-4-9l3-24.1c.6-2.7 3.4-4.7 7-5h19c3.5.3 6.4 2.3 6.9 5z"
              className="sedia"
              pointerEvents="all"
            ></path>
            <path
              d="M599.2 515.3c.8.3 1.3 1.3 1 2.2-.3.9-1.2 1.4-2 1.1-9.8-2.4-20-2.4-29.9 0-.6-.2-1.1-.7-1.3-1.4-.2-.7-.1-1.4.3-2 10.5-2.7 21.4-2.7 31.9.1"
              className="sedia"
              pointerEvents="all"
            ></path>
          </g>
          <g id="sedia_1">
            <path
              d="M521.8 566.1l24.1-3c3.5-.6 7.1 1 9 4 1.6 10.2 1.6 20.7 0 30.9-1.9 3-5.5 4.5-9 4l-24.1-3c-2.7-.6-4.7-3.4-5-7v-19c.3-3.5 2.3-6.4 5-6.9z"
              className="sedia"
              pointerEvents="all"
            ></path>
            <path
              d="M516.3 566.8c.3-.8 1.3-1.3 2.2-1 .9.3 1.4 1.2 1.1 2-2.4 9.8-2.4 20 0 29.9-.2.6-.7 1.1-1.4 1.3-.7.2-1.4.1-2-.3-2.7-10.5-2.7-21.4.1-31.9"
              className="sedia"
              pointerEvents="all"
            ></path>
          </g>
          <path
            d="M533.5 532.5H633.5V632.5H533.5z"
            className="tavolo"
            pointerEvents="all"
          ></path>
        </g>
        <g id="porta">
          <path
            d="M413.5 602.5H493.5V607.5H413.5z"
            className="porta"
            pointerEvents="all"
          ></path>
          <path
            d="M493.5 607.5c0 44.2-35.8 80-80 80v-80"
            className="porta"
            pointerEvents="all"
          ></path>
        </g>
        <path
          d="M723.4 723.5L724.3 472.5 413.8 472.5 413.5 602 423.6 602 423.8 482.5 713.4 482.5 713.4 713 593.5 713.5 593.5 822.5 423.8 822.5 423.6 692.5 413.5 692.5 413.8 832.5 603.5 832.5 603.5 723.5z"
          className="muro"
        ></path>
      </g>
    </svg>
  );
};

export default MapSVG;
