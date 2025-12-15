// src/components/app/upload doc/UploadDocModal.jsx
import React, { useState } from "react";
import Modal from "react-modal";
import { FiX, FiUpload } from "react-icons/fi";
import { useFormik } from "formik";
import axios from "../../../axios";
import { SuccessToast } from "../../global/Toaster";
import { documentValues } from "../../../init/app/App";
import { documentSchema } from "../../../schema/app/AppSchema";
import { TbLoaderQuarter } from "react-icons/tb";

// Make sure your app root id is 'root'
Modal.setAppElement("#root");

export default function UploadDropDown({
  isOpen,
  onClose,
  categories,
  getDocumentList,
  getCategories,
}) {
  const [isLoading, setIsLoading] = useState(false);
  const {
    values,
    handleBlur,
    handleChange,
    handleSubmit,
    errors,
    touched,
    setFieldValue,
  } = useFormik({
    initialValues: documentValues,
    validationSchema: documentSchema,
    validateOnChange: true,
    validateOnBlur: true,
    onSubmit: async (values, action) => {
      setIsLoading(true);
      try {
        const formData = new FormData();
        formData.append("title", values.title);
        formData.append("type", values.category);
        formData.append("icon", values.icon);

        if (isOpen === "file") formData.append("files", values.file);
        if (isOpen === "link") formData.append("formLink", values.link);
        if (isOpen === "text") formData.append("text", values.text);

        const response = await axios.post(`/admin/uploadLegalDocs`, formData);
        if (response.status === 201) {
          action.resetForm();
          onClose();
          SuccessToast("Document uploaded successfully");
          getDocumentList();
        }
        console.log("Response:", response);
      } catch (error) {
        console.error("Error creating document:", error);
      } finally {
        setIsLoading(false);
      }
    },
  });

  const addCategory = async () => {
    try {
      const response = await axios.post(`/laws/category`, {
        category: values.category,
      });
      if (response.status === 200) {
        setFieldValue("category", values.category);
        getCategories();
        getDocumentList();
      }
    } catch (error) {
      console.error("Error adding category:", error);
    }
  };

  console.log(values.file, "errors");
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      overlayClassName="fixed inset-0 bg-black/30 flex items-center justify-center z-50"
      className="bg-white h-[600px] overflow-auto rounded-2xl shadow-xl w-full max-w-2xl p-6 outline-none relative"
    >
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-xl"
      >
        <FiX />
      </button>

      {/* Title */}
      <h2 className="text-xl font-semibold mb-6">Upload New Document</h2>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Document Title */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Document Title
          </label>
          <input
            type="text"
            name="title"
            id="title"
            value={values.title}
            onChange={handleChange}
            onBlur={handleBlur}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter document title"
          />
        </div>

        {/* Category */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Category
          </label>
          <select
            name="category"
            id="category"
            value={values.category}
            onChange={handleChange}
            onBlur={handleBlur}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select Category</option>
            {categories?.map((category, idx) => (
              <option key={idx} value={category}>
                {category}
              </option>
            ))}
          </select>
          <div className="flex items-center py-3 gap-2">
            <input
              type="text"
              value={values.category}
              onChange={handleChange}
              onBlur={handleBlur}
              name="category"
              id="category"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="button"
              onClick={addCategory}
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
            >
              Add
            </button>
          </div>
        </div>

        {/* Upload Icon */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Upload Icon
          </label>
          <div className="mt-1 flex flex-col items-center justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
            <FiUpload className="mx-auto h-12 w-12 text-gray-400" />
            {!values.icon && (
              <div className="flex text-sm text-gray-600 mt-2">
                <label className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500">
                  <span>Upload an image</span>
                  <input
                    type="file"
                    name="icon"
                    id="icon"
                    accept="image/*"
                    className="sr-only"
                    onChange={(e) => {
                      const file = e.currentTarget.files[0];
                      setFieldValue("icon", file);
                    }}
                  />
                </label>
                <p className="pl-1">or drag and drop</p>
              </div>
            )}

            <p className="text-xs text-gray-500 mt-1">
              PNG, JPG, JPEG, SVG up to 5MB
            </p>

            {values.icon && (
              <div className="mt-3 flex flex-col items-center">
                <img
                  src={URL.createObjectURL(values.icon)}
                  alt="Icon Preview"
                  className="w-16 h-16 object-cover rounded-full border"
                />
                <button
                  type="button"
                  onClick={() => setFieldValue("icon", null)}
                  className="text-red-500 text-xs mt-2 hover:underline"
                >
                  Remove
                </button>
              </div>
            )}
          </div>
        </div>

        {/* File Upload */}
        {isOpen === "file" && (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Upload File
            </label>
            <div className="mt-1 flex flex-col items-center justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
              <FiUpload className="mx-auto h-12 w-12 text-gray-400" />

              {!values.file && (
                <div className="flex text-sm text-gray-600 mt-2">
                  <label className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none">
                    <span>Upload a file</span>
                    <input
                      type="file"
                      name="file"
                      id="file"
                      onChange={(e) => {
                        const file = e.currentTarget.files[0];
                        setFieldValue("file", file);
                      }}
                      onBlur={handleBlur}
                      className="sr-only"
                      accept=".pdf,.doc,.docx"
                    />
                  </label>
                  <p className="pl-1">or drag and drop</p>
                </div>
              )}

              <p className="text-xs text-gray-500 mt-1">
                PDF, DOC, DOCX up to 10MB
              </p>

              {values.file && (
                <div className="flex items-center gap-2 mt-2">
                  <p className="text-green-600 text-sm font-medium">
                    {values.file.name}
                  </p>
                  <button
                    type="button"
                    onClick={() => setFieldValue("file", null)}
                    className="text-red-500 text-xs hover:underline"
                  >
                    Remove
                  </button>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Link Upload */}
        {isOpen === "link" && (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Document URL
            </label>
            <input
              type="url"
              name="link"
              id="link"
              value={values.link}
              onChange={handleChange}
              onBlur={handleBlur}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="https://example.com/document.pdf"
              pattern="https?://.+"
              title="Please enter a valid URL (http:// or https://)"
            />
            <p className="mt-1 text-xs text-gray-500">
              Enter the direct URL to your document
            </p>
          </div>
        )}

        {/* Text Upload */}
        {isOpen === "text" && (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Subscription Price
            </label>
            <textarea
              type="text"
              name="text"
              id="text"
              value={values.text}
              onChange={handleChange}
              onBlur={handleBlur}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter subscription price"
            />
          </div>
        )}

        {/* Actions */}
        <div className="flex justify-end gap-3 pt-4 border-t">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
          >
            Cancel
          </button>
          {isLoading ? (
            <button
              type="submit"
              className="flex items-center gap-2 bg-[#181818] text-white rounded-full px-5 py-2 font-[500] text-[14px] hover:bg-[#222] transition-all"
            >
              <TbLoaderQuarter
                size={25}
                className=" animate-spin justify-center items-center flex w-full"
              />
            </button>
          ) : (
            <button
              type="submit"
              className="flex items-center gap-2 bg-[#181818] text-white rounded-full px-5 py-2 font-[500] text-[14px] hover:bg-[#222] transition-all"
            >
              Upload
            </button>
          )}
        </div>
      </form>
    </Modal>
  );
}
