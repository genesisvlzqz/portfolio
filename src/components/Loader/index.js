import './index.scss'
import { Triangle } from 'react-loader-spinner'

const Loader = () => {
    return (
        <>
        
        <Triangle
            ariaLabel="vortex-loading"
            wrapperStyle={{}}
            wrapperClass="vortex-wrapper"
            height="180"
            width="180"
            colors='#171738'
        />
        </>
    )
}

export default Loader