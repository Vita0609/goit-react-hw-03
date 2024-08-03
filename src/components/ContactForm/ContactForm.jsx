import css from "./ContactForm.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { nanoid } from "nanoid";
import { useId } from "react";
import * as Yup from "yup";

const initialValues = {
    name: "",
    number: "",
};

const ContactFormSchema = Yup.object().shape({
    name: Yup.string()
        .min(3, "Too Short!")
        .max(50, "Too Long!")
        .required("Required"),
    number: Yup.string()
        .min(3, "Too Short!")
        .max(50, "Too Long!")
        .required("Required"),
});

export default function ContactForm({addContact}) {
    const nameFieldId = useId();
    const numberlFieldId = useId();

    const handleSubmit = (values, actions) => {
        addContact({ ...values, id: nanoid(10) });
        actions.resetForm();
    };

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={ContactFormSchema}
        >
            <Form className={css.formWrap}>
                <div className={css.inputWrap}>
                    <label htmlFor={nameFieldId} className={css.inputLabel}>
                        Name
                    </label>
                    <Field
                        type="text"
                        name="name"
                        id={nameFieldId}
                        className={css.input}
                    />
                    <ErrorMessage name="name" component="span" className={css.error} />
                </div>
                <div className={css.inputWrap}>
                    <label htmlFor={numberlFieldId} className={css.inputLabel}>
                        Number
                    </label>
                    <Field
                        type="phone"
                        name="number"
                        id={numberlFieldId}
                        className={css.input}
                    />
                    <ErrorMessage name="number" component="span" className={css.error} />
                </div>

                <button type="submit" className={css.addButton}>
                    Add contact
                </button>
            </Form>
        </Formik>
    );
}