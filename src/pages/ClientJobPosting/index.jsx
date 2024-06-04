import React from 'react';
import { useFormik } from 'formik';
import { Input } from '../../components';
import * as Yup from 'yup';
import axios from 'axios';

function JobPosting() {
    const formik = useFormik({
        initialValues: {
            category: '',
            title: '',
            hiring_company: '',
            tag: '',
            requirements: '',
        },
        validationSchema: Yup.object({
            category: Yup.string().required('Category is required').max(50, 'Category cannot exceed 50 characters'),
            title: Yup.string().required('Title is required').max(200, 'Title cannot exceed 200 characters'),
            hiring_company: Yup.string().required('Hiring company is required').max(200, 'Hiring company cannot exceed 200 characters'),
            tag: Yup.string().required('Tag is required'),
            requirements: Yup.string().required('Requirements are required'),
        }),
        onSubmit: async (values, { resetForm }) => {
            try {
                await axios.post('https://crackingthestylecode.pythonanywhere.com/api/v1/job/', values);
                alert('Job posted successfully!');
                resetForm();
            } catch (error) {
                console.error('Failed to post job:', error);
                alert('Failed to post job. Please try again.');
            }
        },
    });

    return (
        <div className="container mx-auto p-24 md:p-10 sm:px-4 sm:py-8">
            <h1 className="text-2xl font-bold mb-4">Post a Job</h1>
            <form onSubmit={formik.handleSubmit}>
                <div className="grid grid-cols-2 sm:grid-cols-1 gap-7">
                <div className="mb-4">
                    <label htmlFor="category" className="block mb-2">Category</label>
                    <input
                        id="category"
                        name="category"
                        type="text"
                        list="job-categories"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.category}
                        className="w-full border !rounded-md !p-4 !border-gray-300 shadow-sm !bg-[#d9d9d9]"
                    />
                    <datalist id="job-categories">
                        <option value="Design and Creative" />
                        <option value="Sales & Marketing" />
                        <option value="Photography" />
                        <option value="Development & IT" />
                        <option value="Finance & Accounting" />
                        <option value="Writing & Translation" />
                        <option value="Legal" />
                        <option value="Repairs & Engineering" />
                        <option value="HR Personnel" />
                    </datalist>
                    {formik.touched.category && formik.errors.category ? (
                        <div className="text-red-500">{formik.errors.category}</div>
                    ) : null}
                </div>

                <div className="mb-4">
                    <label htmlFor="title" className="block mb-2">Title</label>
                    <input
                        id="title"
                        name="title"
                        type="text"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.title}
                        className="w-full border !rounded-md !p-4 !border-gray-300 shadow-sm !bg-[#d9d9d9]"
                    />
                    {formik.touched.title && formik.errors.title ? (
                        <div className="text-red-500">{formik.errors.title}</div>
                    ) : null}
                </div>

                <div className="mb-4">
                    <label htmlFor="hiring_company" className="block mb-2">Hiring Company</label>
                    <input
                        id="hiring_company"
                        name="hiring_company"
                        type="text"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.hiring_company}
                        className="w-full border !rounded-md !p-4 !border-gray-300 shadow-sm !bg-[#d9d9d9]"
                    />
                    {formik.touched.hiring_company && formik.errors.hiring_company ? (
                        <div className="text-red-500">{formik.errors.hiring_company}</div>
                    ) : null}
                </div>

                <div className="mb-4">
                    <label htmlFor="tag" className="block mb-2">Tag</label>
                    <input
                        id="tag"
                        name="tag"
                        type="text"
                        list="job-tags"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.tag}
                        className="w-full border !rounded-md !p-4 !border-gray-300 shadow-sm !bg-[#d9d9d9]"
                    />
                    <datalist id="job-tags">
                        <option value="Remote" />
                        <option value="Onsite" />
                        <option value="Hybrid" />
                        <option value="Full-time" />
                        <option value="Part-time" />
                    </datalist>
                    {formik.touched.tag && formik.errors.tag ? (
                        <div className="text-red-500">{formik.errors.tag}</div>
                    ) : null}
                </div>

                <div className="mb-4">
                    <label htmlFor="requirements" className="block mb-2">Requirements</label>
                    <textarea
                        id="requirements"
                        name="requirements"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.requirements}
                        className="w-full border rounded-md p-4 border-gray-300 shadow-sm bg-[#d9d9d9]"
                    />
                    {formik.touched.requirements && formik.errors.requirements ? (
                        <div className="text-red-500">{formik.errors.requirements}</div>
                    ) : null}
                </div>
                </div>

                <div className="mt-4 flex justify-end">
                    <button type="submit" className="px-4 py-2 bg-[#253451] text-white rounded-md hover:bg-[#3c5484]">
                        Post Job
                    </button>
                </div>
            </form>
        </div>
    );
}

export default JobPosting;
