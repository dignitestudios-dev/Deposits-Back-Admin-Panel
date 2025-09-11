import * as Yup from "yup";
export const notificationSchema = Yup.object({
  title: Yup.string().required("Notification title is required"),
  detail: Yup.string().required("Notification detail is required"),
});

export const documentSchema = Yup.object({
  title: Yup.string().required("Document title is required"),
  category: Yup.string().required("Document category is required"),
  state: Yup.string().required("Document state is required"),

  file: Yup.mixed(),
  link: Yup.string(),
  text: Yup.string(),

}).test(
  "at-least-one",
  "Please provide either a file, link, or text",
  function (values) {
    return !!(values.file || values.link || values.text);
  }
);

