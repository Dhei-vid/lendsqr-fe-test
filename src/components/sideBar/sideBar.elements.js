import {
  FaBriefcase,
  FaHome,
  FaUsers,
  FaRegHandshake,
  FaPiggyBank,
  FaUserCheck,
  FaUserTimes,
  FaCoins,
  FaScroll,
  FaChartBar
} from 'react-icons/fa'
import { MdManageAccounts, MdOutlineArrowDropDown } from 'react-icons/md'
import { GiWindHole } from 'react-icons/gi'
import { RiCalendarTodoFill } from 'react-icons/ri'
import { GoSettings } from 'react-icons/go'
import { GrTransaction } from 'react-icons/gr'
import { AiOutlineBank } from 'react-icons/ai'
import { HiUsers } from 'react-icons/hi'

export const menu = {
  organization: 'Switch Organizations',
  oRIcon: <MdOutlineArrowDropDown />,
  oLIcon: <FaBriefcase />,

  dashboard: 'Dashboard',
  dIcon: <FaHome />
}

export const customers = [
  {
    title: 'Users',
    icon: <HiUsers />
  },
  {
    title: 'Guarantors',
    icon: <FaUsers />
  },
  {
    title: 'Loans',
    icon: <FaBriefcase />
  },
  {
    title: 'Decision Models',
    icon: <FaRegHandshake />
  },
  {
    title: 'Savings',
    icon: <FaPiggyBank />
  },
  {
    title: 'Loan Requests',
    icon: <FaBriefcase />
  },
  {
    title: 'Whitelist',
    icon: <FaUserCheck />
  },
  {
    title: 'Karma',
    icon: <FaUserTimes />
  }
]

export const business = [
  {
    title: 'Organization',
    icon: <FaBriefcase />
  },
  {
    title: 'Loan Products',
    icon: <HiUsers />
  },
  {
    title: 'Savings Products',
    icon: <AiOutlineBank />
  },
  {
    title: 'Fees and Charges',
    icon: <FaCoins />
  },
  {
    title: 'Transactions',
    icon: <GrTransaction />
  },
  {
    title: 'Services',
    icon: <GiWindHole />
  },
  {
    title: 'Service Account',
    icon: <MdManageAccounts />
  },
  {
    title: 'Settlements',
    icon: <FaScroll />
  },
  {
    title: 'Reports',
    icon: <FaChartBar />
  }
]

export const settings = [
  {
    title: 'Preferences',
    icon: <GoSettings />
  },
  {
    title: 'Fees and Pricing',
    icon: <HiUsers />
  },
  {
    title: 'Audit Logs',
    icon: <RiCalendarTodoFill />
  }
]

const SIDE_BAR_NAV_LIST = [
  {
    heading: 'Switch Organizations',
    rIcon: <MdOutlineArrowDropDown />,
    lIcon: <FaBriefcase />,

    items: [
      {
        title: 'Dashboard',
        icon: <FaHome />
      }
    ]
  }
]
