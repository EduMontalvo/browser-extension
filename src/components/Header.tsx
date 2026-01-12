import IconSun from '.././assets/images/icon-sun.svg'
import MainLogo from '.././assets/images/logo.svg'


const Header = () => {
    return (
        <div className='flex justify-between items-center bg-dark-800 p-4 mt-7 mb-12 rounded-xl'>
            <div className='relative'>
                <img src={MainLogo} alt="Extension Logo" className='relative z-0' />
                <p className='absolute top-1 left-14 text-2xl text-white z-10 font-semibold'>Extensions</p>
            </div>
            <button className='bg-dark-700 p-4 rounded-xl'><img src={IconSun} alt="" /></button>
        </div>
    )
}

export default Header