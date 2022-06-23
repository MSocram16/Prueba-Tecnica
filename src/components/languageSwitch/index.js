import classNames from 'classnames';

import ESFLAG from '../../assets/svg/es.svg';
import USFLAG from '../../assets/svg/us.svg';

import { useSelector, useDispatch } from 'react-redux';
import { setLanguage } from '../../store/i18nSlice';

import { LANGUAGE_LIST } from '../../utils/constants';

const LanguageSwitch = () => {

    const { languageSelect } = useSelector((state) => state.i18n);

    const dispatch = useDispatch();

    const _props = {
        container: {
            className: "w-full flex flex-row gap-5 justify-center"
        },
        imgEs: {
            key: LANGUAGE_LIST[1],
            className: classNames('w-[50px] rounded-md p-[10px] hover:bg-green-300 hover:shadow-md', { 'bg-blue-300': LANGUAGE_LIST[1] === languageSelect }),
            src: ESFLAG,
            alt: "Spain Flag",
            onClick: () => dispatch(setLanguage(LANGUAGE_LIST[1])),
            "data-testid": "btn-imgEs"
        },
        imgUsa: {
            key: LANGUAGE_LIST[0],
            className: classNames('w-[50px] rounded-md p-[10px] hover:bg-green-300 hover:hover:shadow-md', { 'bg-blue-300': LANGUAGE_LIST[0] === languageSelect }),
            src: USFLAG,
            alt: "Usa Flag",
            onClick: () => dispatch(setLanguage(LANGUAGE_LIST[0])),
            "data-testid": "btn-imgUsa"
        }
    }
    return (
        <div {..._props.container}>
            <img {..._props.imgEs} />
            <img  {..._props.imgUsa} />
        </div>
    )
}

export default LanguageSwitch;