import { capPhrase } from "../../lib/helpers";

const FooterInfo = ({ children, item }) => {

    const { title, content } = item;

    return (
        <div className="flex flex-col mb-4 mr-4 lg:mr-10">
            <h3 className="mb-2">{title.toUpperCase()}</h3>
            <div className="w-20 mb-2 h-[2px] bg-slate-200"></div>

            {content && content.map((sec) => {
                const section = capPhrase(sec);
                return <p key={sec} className="mb-2">{section}</p>
            })}

            <div>{children}</div>

        </div>
    )

}

export default FooterInfo;