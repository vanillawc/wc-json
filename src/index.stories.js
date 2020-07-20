import { html } from "lit-html";

const value = {
  array: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  bool: true,
  date: new Date(),
  object: {
    foo: "line 1\nline 2\nline 3"
  },
  symbol: Symbol("foo"),
  nested: [
    {
      a: [1, "2", null, undefined]
    }
  ]
};

export const full_open = () => html`
  <json-element .value=${value} .open=${"full"}> </json-element>
`;

export const top_only = () => html`
  <json-element .value=${value} .open=${"top-only"}> </json-element>
`;

export const string_only = () => html`
  <json-element .value=${"just a string"} .open=${"top-only"}> </json-element>
`;

export const number_only = () => html`
  <json-element .value=${42} .open=${"top-only"}> </json-element>
`;

function addvalue() {
  const el = document.getElementById("ce");
  el.value = value;
}

export const test = () =>
  html`
    <json-element id="ce"></json-element
    ><button @click="${addvalue}">click</button>
  `;
