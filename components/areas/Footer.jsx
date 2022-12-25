import { footerInfo } from "../../store/footerInfo";
import FooterInfo from "../ui/FooterInfo";
import { twitter, facebook, insta, youtube } from '../../store/icons';

const Footer = () => {

    const social = [twitter, facebook, insta, youtube];

    return (
        <div className="flex flex-col md:flex-row bg-[#232F3F] px-4 pt-4 text-teal-50 pb-32 lg:pb-2">
            <div className="flex flex-col md:flex-row">{footerInfo.map((item) => <div key={item}> <FooterInfo item={item} /> </div>)}</div>
            <FooterInfo item={{ title: 'Social' }}>
                <div className="flex ">
                    {social.map((rss, index) => <div key={index} className="pr-4">{rss}</div>)}
                </div>
            </FooterInfo>
        </div>
    )

}

export default Footer;