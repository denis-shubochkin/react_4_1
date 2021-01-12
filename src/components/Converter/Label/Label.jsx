import './Label.css';

export default function Label(props) {
    const {show, mess} = props;

    if(!show) return null;
    else {
        return(
        <div className="RGB-Label-Block">
        {mess}
        </div>)
    }
}