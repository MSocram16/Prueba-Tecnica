import classNames from 'classnames';

import ESFLAG from '../../assets/svg/es.svg';
import USFLAG from '../../assets/svg/us.svg';

import { useSelector, useDispatch } from 'react-redux';
import { setLanguage } from '../../store/weatherSlice';

import { LANGUAGE_LIST } from '../../utils/constants';

const LanguageSwitch = () => {

    const languajeSelect = useSelector((state) => state.weather.languajeSelect);
    const dispatch = useDispatch();

    const _props = {
        container: {
            className: "w-full flex flex-row gap-5 justify-center"
        },
        imgEs: {
            key: LANGUAGE_LIST[1],
            className: classNames('w-[50px] rounded-md p-[10px] hover:bg-green-300 hover:shadow-md', { 'bg-blue-300 ': LANGUAGE_LIST[1] === languajeSelect }),
            src: ESFLAG,
            alt: "Spain Flag",
            onClick: () => dispatch(setLanguage(LANGUAGE_LIST[1]))
        },
        imgUsa: {
            key: LANGUAGE_LIST[0],
            className: classNames('w-[50px] rounded-md p-[10px] hover:bg-green-300 hover:hover:shadow-md', { 'bg-blue-300 ': LANGUAGE_LIST[0] === languajeSelect }),
            src: USFLAG,
            alt: "Usa Flag",
            onClick: () => dispatch(setLanguage(LANGUAGE_LIST[0]))
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