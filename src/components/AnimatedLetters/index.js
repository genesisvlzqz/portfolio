import './index.scss';
 
const AnimatedLetters = ({ letterClass, strArray, idx }) => {
    const renderBreak = (index) => {
        if(index===11){
            return <br className='display-mobile' />
        } 
    }

    return (

        <span>
            {
                strArray.map((char, i) => (
                    <span key={char + i} className={`${letterClass} ${i + idx}`}>
                        {char}
                    </span>

                ))
            }
        </span>

    )
};

export default AnimatedLetters