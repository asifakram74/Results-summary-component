import { ReactComponent as ReactionImage } from '../assets/images/icon-reaction.svg';
import { ReactComponent as MemoryImage } from '../assets/images/icon-memory.svg';
import { ReactComponent as VerbalImage } from '../assets/images/icon-verbal.svg';
import { ReactComponent as VisualImage } from '../assets/images/icon-visual.svg';
const ResultData = [  
{
    title: 'Reaction',
    icon: <ReactionImage/>,
    obtain:'92',
    background: '#faebd7',
    color:'rgb(242, 79, 79)'
},
{
    title: 'Memory',
    icon: <MemoryImage/>,
    obtain:'72',
    background: 'rgb(254, 245, 233)',
    color: 'rgb(240, 208, 92)'
},
{
    title: 'Verbal',
    icon: <VerbalImage/>,
    obtain:'61',
    background: 'rgb(242, 254, 233)',
    color: 'rgb(119, 240, 92)'
},
{
    title: 'Visual',
    icon: <VisualImage/>,
    obtain:'72',
    background: 'rgb(233, 246, 254)',
    color : 'rgb(98, 118, 211)'
}
    


]

export default ResultData;