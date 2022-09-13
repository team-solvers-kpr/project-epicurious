import { v4 as uuidv4 } from 'uuid';
import CandiedImg from '../images/CandiedCitrus_RECIPE_080420_37712.jpg';
import CheaterImg from '../images/cheaterRecipe.jpg';
import FortunateImg from '../images/Fortune_Cookie_Magic_Shell_RECIPE_082522_39234.jpg';
import SesameImg from '../images/sesameNoodlesRecipe.jpg';
import TunaImg from '../images/TunaNoodleCasserole_RECIPE_090721_2033.jpg';

const RecipesData = [
    {
        id: uuidv4(),
        name:'Jaitul Fol',
        desc: 'Reduce the risk of cancer,Relieves skin inflammation,Smooth blood flow,Controlling cholesterol,Prevent premature aging,Reduce the risk of diabetes.',
        img: CandiedImg,
    },
    {
        id: uuidv4(),
        name:'Jaitul Fol',
        desc: 'Reduce the risk of cancer,Relieves skin inflammation,Smooth blood flow,Controlling cholesterol,Prevent premature aging,Reduce the risk of diabetes.',
        img: CheaterImg,
    },
    {
        id: uuidv4(),
        name:'Jaitul Fol',
        desc: 'Reduce the risk of cancer,Relieves skin inflammation,Smooth blood flow,Controlling cholesterol,Prevent premature aging,Reduce the risk of diabetes.',
        img: FortunateImg,
    },
    {
        id: uuidv4(),
        name:'Jaitul Fol',
        desc: 'Reduce the risk of cancer,Relieves skin inflammation,Smooth blood flow,Controlling cholesterol,Prevent premature aging,Reduce the risk of diabetes.',
        img: SesameImg,
    },
    {
        id: uuidv4(),
        name:'Jaitul Fol',
        desc: 'Reduce the risk of cancer,Relieves skin inflammation,Smooth blood flow,Controlling cholesterol,Prevent premature aging,Reduce the risk of diabetes.',
        img: TunaImg,
    },
];

export default RecipesData;