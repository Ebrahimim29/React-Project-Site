import { useState } from "react";
import { Link, Outlet, useNavigate, useParams } from "react-router";
import { FaArrowRight, FaSave } from "react-icons/fa";
import style from "../style.module.css";

const AddUser = () => {
    const navigate = useNavigate();

    const { userId } = useParams();

    const [formData, setFormData] = useState({
        name: "",
        username: "",
        email: "",
        city: "",
        street: "",
        houseCode: "",
        postalCode: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Data Submitted:", formData);
    };

    return (
        <div className={`${style.item_content} mt-5 p-6 bg-gray-900 min-h-screen text-white`}>
            <h4 className="text-center text-2xl font-bold mb-8 text-blue-500">
                {userId ? "ویرایش کاربر" : "افزودن کاربر"}
            </h4>

            <div className="flex justify-center">
                <form
                    onSubmit={handleSubmit}
                    className="w-full max-w-3xl bg-gray-800 rounded-xl shadow-xl p-6 border border-gray-700"
                >
                    {/* بخش اطلاعات اصلی */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">نام و نام خانوادگی</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="مثلاً: محمد ابراهیمی"
                                className="w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:border-blue-500 text-white placeholder-gray-400"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">نام کاربری</label>
                            <input
                                type="text"
                                name="username"
                                value={formData.username}
                                onChange={handleChange}
                                placeholder="مثلاً: Ebrahimim29"
                                className="w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:border-blue-500 text-white placeholder-gray-400"
                                required
                            />
                        </div>
                        <div className="md:col-span-2">
                            <label className="block text-sm font-medium text-gray-300 mb-2">ایمیل</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="example@email.com"
                                className="w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:border-blue-500 text-white placeholder-gray-400 text-left"
                                dir="ltr"
                                required
                            />
                        </div>
                    </div>

                    {/* بخش آدرس */}
                    <div className="border-t border-gray-700 pt-6 mb-8">
                        <h5 className="text-lg font-medium text-gray-200 mb-4">آدرس</h5>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2">شهر</label>
                                <input
                                    type="text"
                                    name="city"
                                    value={formData.city}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:border-blue-500 text-white"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2">خیابان</label>
                                <input
                                    type="text"
                                    name="street"
                                    value={formData.street}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:border-blue-500 text-white"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2">پلاک</label>
                                <input
                                    type="text"
                                    name="houseCode"
                                    value={formData.houseCode}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:border-blue-500 text-white"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2">کد پستی</label>
                                <input
                                    type="text"
                                    name="postalCode"
                                    value={formData.postalCode}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:border-blue-500 text-white"
                                />
                            </div>
                        </div>
                    </div>

                    {/* دکمه‌ها */}
                    <div className="flex justify-between items-center pt-4 border-t border-gray-700">
                        <Link
                            to="/user"
                            className="flex items-center gap-2 bg-gray-600 hover:bg-gray-500 text-white px-5 py-2.5 rounded-lg transition-colors"
                        >
                            <FaArrowRight />
                            بازگشت
                        </Link>

                        <button
                            type="submit"
                            className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-2.5 rounded-lg font-medium transition-colors shadow-lg shadow-green-900/50"
                        >
                            <FaSave />
                            {userId ? "ویرایش" : "افزودن"}
                        </button>
                    </div>
                </form>
            </div>
            <Outlet />
        </div>
    );
};

export default AddUser;

