import { useTranslation } from "react-i18next";
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function LabelButton(props) {
    const { t, i18n } = useTranslation();
    const inputClass = `block w-full rounded-full backdrop-blur-md bg-transparent py-1.5 pl-10 text-gray-900 placeholder:text-gray-400 sm:text-lg sm:leading-6 font-bold ${props.color ? `${props.color}` : ''}`;
    return <div className={`w-60 font-skranji my-2 ${props.class}`}>
        <label className="text-md font-bold text-white text-left">{t(props.title)}</label>
        <div className="relative mt-1 rounded-full shadow-sm border-4 border-[#ffffff]/[0.2]">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 z-10">
                <LazyLoadImage effect="black-and-white" draggable="false" src={props.img} alt="" className="w-6 inline me-1" />
            </div>
            <input
                type="text"
                name={props.title}
                className={[inputClass, props.className].join(' ')}
                style={{ backgroundImage: "linear-gradient(175deg, transparent, #00A3FF)" }}
                value={props.receiveAmount !== undefined ? props.receiveAmount : props.buyStatus !== false ? "" : undefined}
                onChange={(e) => props.onChange && props.onChange(e.target.value)}
            />
        </div>
    </div>
}