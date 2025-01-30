const express = require("express");

const router = express.Router();

const views = [
  {
    view: "update",
    params: {
      title: "Update",
      fields: [
        {
          label: "#LabelText",
          type: "text",
          value: "#value-text",
        },
        {
          label: "#LabelNumber",
          type: "number",
          value: "0123456789",
        },
        {
          label: "#LabelButton",
          type: "button",
          value: "#value-button",
        },
        {
          label: "#LabelSelect",
          type: "select",
          value: "#value-select",
          options: ["a", "b", "c"],
        },
        {
          label: "#LabelChecks",
          type: "checkboxes",
          value: "#value-checkboxes",
          options: ["a", "b", "c"],
        },
        {
          label: "#LabelRadio",
          type: "radios",
          value: "#value-radios",
          options: ["a", "b", "c"],
        },
        {
          label: "#LabelColor",
          type: "color",
          value: "#value-color",
        },
        {
          label: "#LabelDate",
          type: "date",
          value: "#value-date",
        },
        {
          label: "#Label-datetime-local",
          type: "datetime-local",
          value: "#value-datetime-local",
        },
        {
          label: "#Label-email",
          type: "email",
          value: "#value-email",
        },
        {
          label: "#Label-file",
          type: "file",
          value: "#value-file",
        },
        {
          label: "#Label-hidden",
          type: "hidden",
          value: "#value-hidden",
        },
        {
          label: "#Label-month",
          type: "month",
          value: "#value-month",
        },
        {
          label: "#Label-password",
          type: "password",
          value: "#value-password",
        },
        {
          label: "#Label-range",
          type: "range",
          value: "#value-range",
        },
        {
          label: "#Label-reset",
          type: "reset",
          value: "#value-reset",
        },
        {
          label: "#Label-search",
          type: "search",
          value: "#value-search",
        },
        {
          label: "#Label-submit",
          type: "submit",
          value: "#value-submit",
        },
        {
          label: "#Label-tel",
          type: "tel",
          value: "#value-tel",
        },
        {
          label: "#Label-time",
          type: "time",
          value: "#value-time",
        },
        {
          label: "#Label-url",
          type: "url",
          value: "#value-url",
        },
        {
          label: "#Label-week",
          type: "week",
          value: "#value-week",
        },
      ],
    },
  },
  {
    view: "create",
    params: {
      title: "Create",
      fields: [
        {
          label: "#LabelText",
          type: "text",
        },
        {
          label: "#LabelNumber",
          type: "number",
        },
        {
          label: "#LabelButton",
          type: "button",
        },
        {
          label: "#LabelSelect",
          type: "select",
          options: ["a", "b", "c"],
        },
        {
          label: "#LabelChecks",
          type: "checkboxes",
          options: ["a", "b", "c"],
        },
        {
          label: "#LabelRadio",
          type: "radios",
          options: ["a", "b", "c"],
        },
        {
          label: "#LabelColor",
          type: "color",
        },
        {
          label: "#LabelDate",
          type: "date",
        },
        {
          label: "#Label-datetime-local",
          type: "datetime-local",
        },
        {
          label: "#Label-email",
          type: "email",
        },
        {
          label: "#Label-file",
          type: "file",
        },
        {
          label: "#Label-hidden",
          type: "hidden",
        },
        {
          label: "#Label-month",
          type: "month",
        },
        {
          label: "#Label-password",
          type: "password",
        },
        {
          label: "#Label-range",
          type: "range",
        },
        {
          label: "#Label-reset",
          type: "reset",
        },
        {
          label: "#Label-search",
          type: "search",
        },
        {
          label: "#Label-submit",
          type: "submit",
        },
        {
          label: "#Label-tel",
          type: "tel",
        },
        {
          label: "#Label-time",
          type: "time",
        },
        {
          label: "#Label-url",
          type: "url",
        },
        {
          label: "#Label-week",
          type: "week",
        },
      ],
    },
  },
  {
    view: "index",
    params: { title: "#Title" },
    title: "index",
  },
  {
    view: "error",
    params: {
      title: "error",
      message: "#Message",
      error: {
        status: "#Status",
        stack: "#Stack",
      },
    },
  },
  {
    view: "read",
    params: {
      title: "read",
      headers: ["#Field2", "#Field1", "#Field3", "#Field4", "#Field5"],
      values: [
        {
          "#Field1": "#value1",
          "#Field2": "#value2",
          "#Field3": "#value3",
          "#Field4": "#value4",
          "#Field5": "#value5",
        },
        {
          "#Field1": "#value1",
          "#Field2": "#value2",
          "#Field3": "#value3",
          "#Field4": "#value4",
          "#Field5": "#value5",
        },
        {
          "#Field1": "#value1",
          "#Field2": "#value2",
          "#Field3": "#value3",
          "#Field4": "#value4",
          "#Field5": "#value5",
        },
        {
          "#Field1": "#value1",
          "#Field2": "#value2",
          "#Field3": "#value3",
          "#Field4": "#value4",
          "#Field5": "#value5",
        },
        {
          "#Field1": "#value1",
          "#Field2": "#value2",
          "#Field3": "#value3",
          "#Field4": "#value4",
          "#Field5": "#value5",
        },
        {
          "#Field1": "#value1",
          "#Field2": "#value2",
          "#Field3": "#value3",
          "#Field4": "#value4",
          "#Field5": "#value5",
        },
      ],
    },
  },
  {
    view: "readWithSort",
    params: {
      title: "readWithSort",
      headers: ["#Field2", "#Field1", "#Field3", "#Field4", "#Field5"],
      values: [
        {
          "#Field1": "#value1",
          "#Field2": "#value2",
          "#Field3": "#value3",
          "#Field4": "#value4",
          "#Field5": "#value5",
        },
        {
          "#Field1": "#value1",
          "#Field2": "#value2",
          "#Field3": "#value3",
          "#Field4": "#value4",
          "#Field5": "#value5",
        },
        {
          "#Field1": "#value1",
          "#Field2": "#value2",
          "#Field3": "#value3",
          "#Field4": "#value4",
          "#Field5": "#value5",
        },
        {
          "#Field1": "#value1",
          "#Field2": "#value2",
          "#Field3": "#value3",
          "#Field4": "#value4",
          "#Field5": "#value5",
        },
        {
          "#Field1": "#value1",
          "#Field2": "#value2",
          "#Field3": "#value3",
          "#Field4": "#value4",
          "#Field5": "#value5",
        },
        {
          "#Field1": "#value1",
          "#Field2": "#value2",
          "#Field3": "#value3",
          "#Field4": "#value4",
          "#Field5": "#value5",
        },
      ],
    },
  },
];

// Define your routes here
views.map((view) => {
  return router.get("/" + view.view, (req, res) => {
    res.render(view.view + ".jade", view.params);
  });
});

module.exports = router;
