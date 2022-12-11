import { footerInfo } from "../../store/footerInfo";
import FooterInfo from "../ui/FooterInfo";
import { twitter, facebook, insta, youtube } from '../../store/icons';

const Footer = () => {

    const social = [twitter, facebook, insta, youtube];

    return (
        <div className="flex flex-col md:flex-row bg-[#232F3F] p-4 text-teal-50">
            <div className="flex flex-col md:flex-row">{footerInfo.map((item) => <FooterInfo item={item} />)}</div>
            <FooterInfo item={{ title: 'Social' }}>
                <div className="flex ">
                    {social.map((rss) => <div className="pr-4">{rss}</div>)}
                </div>

            </FooterInfo>
        </div>
    )

}

export default Footer;