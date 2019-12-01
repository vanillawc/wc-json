import { html } from "lit-html";

const value = {
  array: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  bool: true,
  date: new Date(),
  object: {
    foo: "bar"
  },
  symbol: Symbol("foo"),
  nested: [
    {
      a: [1, "2", null, undefined]
    }
  ]
};

export const full_open = () => html`
  <custom-element .value=${value} .open=${"full"}> </custom-element>
`;

export const top_only = () => html`
  <custom-element .value=${value} .open=${"top-only"}> </custom-element>
`;

export const string_only = () => html`
  <custom-element .value=${"just a string"} .open=${"top-only"}>
  </custom-element>
`;

export const number_only = () => html`
  <custom-element .value=${42} .open=${"top-only"}> </custom-element>
`;

function addvalue() {
  const el = document.getElementById("ce");
  el.value = value;
}

export const test = () =>
  html`
    <custom-element id="ce"></custom-element
    ><button @click="${addvalue}">click</button>
  `;
