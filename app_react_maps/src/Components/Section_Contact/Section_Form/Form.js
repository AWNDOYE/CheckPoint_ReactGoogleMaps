import React from "react";
import { Icon } from "@iconify/react";
import sendCircle from "@iconify/icons-mdi/send-circle";

import "./form.css";

//Stockage des infos du formulaire dans un tableau
const formInputs = [
  { id: "name", type: "text", label: "Your name", placeholder: "King Assane" },
  {
    id: "tel",
    type: "tel",
    label: "Phone number",
    placeholder: "00221 78 000 00 00",
  },
  {
    id: "email",
    type: "email",
    label: "Email address",
    placeholder: "you@example.com",
  },
  {
    id: "message",
    type: "textarea",
    label: "Your message",
    placeholder: "How can we help you? Or you us?",
  },
];

//Parcours du tableau
const Form = () => (
 
 <form className="form">

    <h2 className="form-h2">Send us a message</h2>

    {/* Pour chaque élément du tableau, on l'intégre dans la balise correspondante*/}
    {formInputs.map((value) => (
      <label key={value.label} id={value.id} className="form-label">
        {value.label}

        {value.type === "textarea" ? (
          <textarea className="form-textarea" placeholder={value.placeholder} />
        ) : (
          <input
            className="form-input"
            type={value.type}
            placeholder={value.placeholder}
          />
        )}
      </label>
    ))}

    <Icon className="form-submit" icon={sendCircle} />

    {/* <button className="form-submit" type="submit">
      Send message
    </button> */}
  </form>
);

export default Form;
