import logo from '../assets/logo.png';
import user_dp from '../assets/user_dp.png';
import coming_soon from '../assets/coming_soon.png';
import graph from '../assets/graph.png';
import { RxDashboard } from 'react-icons/rx';
import { IoIosPeople, IoMdNotificationsOutline } from 'react-icons/io';
import { CiDumbbell, CiSettings } from 'react-icons/ci';
import { TbNotes } from 'react-icons/tb';
import { CgProfile } from 'react-icons/cg';
import { MdLogout, MdAdd } from 'react-icons/md';
import { ImDownload3, ImUpload3 } from 'react-icons/im';
import { GrPowerCycle } from 'react-icons/gr';

const RevenueComponent = ({ price, text, indx }) => {
    return (
        <div className='part-1-subpart'>
            <div className='part-1-subpart-left'>
                {indx === 0 && <ImDownload3 />}
                {indx === 1 && <ImUpload3 />}
            </div>
            <div className='part-1-subpart-right'>
                <span>{price}</span>
                <p>{text}</p>
            </div>
        </div>
    )
}

const QuickActions = ({ text, indx }) => {
    return (
        <div className='quick-actions-box'>
            <div className='quick-actions-box-icon'>
                {indx === 0 && <MdAdd />}
                {indx === 1 && <IoIosPeople />}
                {indx === 2 && <CiSettings />}
                {indx === 3 && <GrPowerCycle />}
            </div>
            <p>{text}</p>
        </div>
    )
}


const Dashboard = () => {
    const revenue = [{ price: '₹48,783.34', text: 'Total Revenue' }, { price: '₹42,893.90', text: 'Total Sales' }];
    const quickActions = ['Add Members', 'Manage Staffs', 'Set Up Gym branch', 'Manage Subscription Plans'];

    return (
        <div className="dashboard">
            <div className="dashboard-menu">
                <div className="icon">
                    <div>
                        <img src={logo} alt="dashboard-icon" />
                    </div>
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
                    <div className='dashboard-main-content-left'>
                        <div className='part-1'>
                            {
                                revenue.map((ele, indx) => {
                                    return <RevenueComponent {...ele} indx={indx} key={indx} />
                                })
                            }
                        </div>
                        <div className='part-2'>
                            <img src={graph} alt="graph" />
                        </div>
                    </div>
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
                <h3 style={{ color: 'white' }}>Quick Actions</h3>
                <div className='quick-actions'>
                    {
                        quickActions.map((ele, indx) => {
                            return <QuickActions text={ele} indx={indx} key={indx} />
                        })
                    }

                </div>
            </div>
        </div >
    )
}

export default Dashboard;