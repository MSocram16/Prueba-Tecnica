import { useSelector, useDispatch } from 'react-redux';
import { selectTranslations } from '../../store/i18nSlice';
import { setCity } from '../../store/weatherSlice';

import { LIST_OF_CITIES } from '../../utils/constants';

const SelectCity = () => {

    const {isLoading, citySelect} = useSelector((state) => state.weather);
    const t = useSelector(selectTranslations);
    const dispatch = useDispatch();

    const _props = {
        container: {
            className: "w-full flex flex-row gap-5 justify-center"
        },
        select: {
            disabled: isLoading,
            value: citySelect,
            className: "form-select max-w-[200px] appearance-none block w-full px-3 py-1.5 text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none",
            'aria-label': "Select city",
            onChange: (e) => dispatch(setCity(e.target.value))
        }
    }
    return (
        <div {..._props.container}>
            <select {..._props.select}>
                {
                    LIST_OF_CITIES.map((val, index) =>
                        <option key={index} value={val.key}>{t[val.key]}</option>
                    )
                }
            </select>
        </div>
    )
}

export default SelectCity;