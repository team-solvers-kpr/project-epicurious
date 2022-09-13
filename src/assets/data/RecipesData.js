import { v4 as uuidv4 } from 'uuid';
import CandiedImg from '../images/CandiedCitrus_RECIPE_080420_37712.jpg';
import CheaterImg from '../images/cheaterRecipe.jpg';
import FortunateImg from '../images/Fortune_Cookie_Magic_Shell_RECIPE_082522_39234.jpg';
import SesameImg from '../images/sesameNoodlesRecipe.jpg';
import TunaImg from '../images/TunaNoodleCasserole_RECIPE_090721_2033.jpg';

const recipesData = [
    {
        id: uuidv4(),
        name:'epicurious',
        desc: 'Fortune Cookie Magic Shell Sundae',
        img: CandiedImg,
    },
    {
        id: uuidv4(),
        title:'epicurious',
        desc: 'Easy Candied Orange Peel',
        img: CheaterImg,
    },
    {
        id: uuidv4(),
        name:'epicurious',
        desc: 'Tuna Noodle Casserole',
        img: FortunateImg,
    },
    {
        id: uuidv4(),
        name:'Dinner In one',
        desc: "Cheater's Instant Pot Chicken and Duplings",
        img: SesameImg,
    },
    {
        id: uuidv4(),
        name:'The vegan Chines Kitchen',
        desc: 'Sesame Noodles',
        img: TunaImg,
    },
];

export default recipesData;