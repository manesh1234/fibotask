import logo from './assets/logo.png';
import user_dp from './assets/user_dp.png';
import coming_soon from './assets/coming_soon.png';
import { RxDashboard } from 'react-icons/rx';
import { IoIosPeople, IoMdNotificationsOutline } from 'react-icons/io';
import { CiDumbbell } from 'react-icons/ci';
import { TbNotes } from 'react-icons/tb';
import { CgProfile } from 'react-icons/cg';
import { MdLogout } from 'react-icons/md';

const Dashboard = () => {
    return (
        <div className="dashboard">
            <div className="dashboard-menu">
                <div className="icon">
                    <div className='icon-img'><img src={logo} alt="logo" /></div>
                    <div><h2>FI<span style={{ color: '#FF8D24' }}>T</span>NESS</h2></div>
                </div>
                <div className='dashboard-menu-links'>
                    <div style={{ color: '#FF8D24' }}><RxDashboard /> Dashboard</div>
                    <div><IoIosPeople /> Members</div>
                    <div><CiDumbbell /> Exercise Plans</div>
                    <div><TbNotes /> Diet Plans</div>
                    <div><CgProfile /> Profile</div>
                    <div><MdLogout /> Logout</div>
                </div>
            </div>
            <div className="dashboard-main">
                <div className='dashboard-head'>
                    <div className='dashboard-head-left'>
                        <h2 style={{ color: '#FF8D24', fontSize: '30px', fontFamily: 'sans-serif' }}>Dashboard</h2>
                        <p style={{ marginTop: '8px' }}>Welcome back, Syeda !</p>
                    </div>
                    <div className='dashboard-head-right' style={{
                        flexDirection: 'row', padding: '10px'
                    }}>
                        <h2 ><IoMdNotificationsOutline /></h2>
                        <div><img src={user_dp} alt="user_dp" /></div>
                    </div>
                </div>
                <div className='dashboard-main-content'>
                    <div className='dashboard-main-content-left'></div>
                    <div className='dashboard-main-content-right'>
                        <h3>Coming Soon</h3>
                        <div className='coming-soon'>
                            <div className='coming-soon-left'>
                                <h3>SwipeUp</h3>
                                <p>Create Customized mini plans for your clients easily </p>
                            </div>
                            <div className='coming-soon-right'>
                                <img src={coming_soon} alt="coming_soon" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;