import style from "../style.module.css";

const EditDesc = () => {
    return (
        <div className={`${style.item_content} mt-5 p-4`}>
            <h4 className="text-center text-red-500">
                توضیحات مربوط به صفحه ویرایش کاربر
            </h4>
        </div>
    );
};

export default EditDesc;