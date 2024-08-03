import css from "./Contact.module.css";
import { HiUser, HiPhone } from "react-icons/hi2";

export default function ContactList({ data: { id, name, number }, onDelete }) {
    return (
        <div className={css.contactCard}>
            <div className={css.contacts}>
                <div className={css.infoWrap}>
                    <HiUser size={"20px"} title="contact icon" />
                    <p>{name}</p>
                </div>
                <div className={css.infoWrap}>
                    <HiPhone size={"20px"} title="phone icon" />
                    <p>{number}</p>
                </div>
            </div>
            <button className={css.deleteButton} onClick={() => onDelete(id)}>
                Delete
            </button>
        </div>
    );
}