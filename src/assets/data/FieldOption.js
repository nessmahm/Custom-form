
/*
* instructions: "Instructions Text",
      placeholder: "",
      initialValue: "",
      characterLimit: [0, 25],
      visibility: ["hidden", "visible"]
      * */
export const FieldOption = [
  {id:1,
    name: "Single Line Text",
    type : "Input",
    forms : [
        {

      id:"aa",
      label: "Field Label",
      defaultValue:"Single Line Text",
      type: "text",
      name:"label",
      formtype:"input"
    },

    {id:"aab",
      label: "helper Text",
      type: "text",
      name:"helperText",
      instruction: "helperText",
      max: 25,
      formtype:"input"


    },
    { id:"aac",
      label:"Type",
      name:"type",
      type:"text",
      placeholder: "Text",
      formtype:"input"

    }
    ,{id:"aad",
      label: "Placeholder Text",
      name:"placeholder",
      type: "text",
      max: 25,
      formtype:"input"
    }
    ,
    { id:"aaz",
      label: "Initial value",
      name:"initialValue",
      type: "number",
      max: 25,
      formtype:"input"
    }
    ,
    { id:"aas",
      label:"Width ",
      name:"width",
      placeholder: "25ch",
      instruction:"write a number",
      type:"number",
      formtype:"input"
    }



    ]

  }
,
  {id:3,
    name: "Multi-line Text",
    type: "textArea",
    label: "Label Text",

    forms : [
      {

        id:"zza",
        label: "Field Label",
        defaultValue:"Single Line Text",
        type: "text",
        name:"label",
        formtype:"input"
      },

      {id:"zze",
        label: "Instruction",
        type: "text",
        name:"intruction",
        max: 25,
        formtype:"input"

      }
      ,{id:"zzr",
        label: "Placeholder Text",
        name:"placeholder",
        type: "text",
        max: 25,
        formtype:"input"
      }
      ,
      { id:"rrt",
        label: "Initial value",
        name:"value",
        type: "input",
        max: 25,
        formtype:"input"
      }
      ,
      { id:"zzer",
        label:"Charatere Limit",
        name:"max",
        placeholder: "255",
        instruction:"Max",
        type:"number",
        formtype:"input"
      }
      ,{ id:"zzqq",
        label:"Rows",
        name:"rows",
        initialValue: 5,
        type:"number",
        formtype:"input"
      }
      ,{ id:"zzw",
        label:"Cols",
        name:"cols",
        placeholder: "5",
        type:"number",
        initialValue: 4,
        formtype:"input"
      }




    ]
  },

  {id:"4",
    name: "Dropdown",
    type:"select",
    forms: [{
      id:"wwq",
      label: "Field Label",
      type: "text",
      name:"label",
      formtype:"input"
    },
      { id:"wwq",
        label: "Placeholder Text",
        name:"placeholder",
        type:"text",
        placeholder: "placeholder",
        formtype:"input"},

    { id:"wwq",
      label:"Max choice",
      name:"max",
      type:"number",
      defaultValue: 1,
      instruction:"Max",
      formtype:"input"
    },
      { id:"wwq",
        label:"Width ",
        name:"width",
        placeholder: "25ch",
        instruction:"write a number",
        type:"number",
        formtype:"input"
      }
    ]

  },
  {
    id: "6",
    name: "Checkbox",
    type: "checkbox",
  }

];



