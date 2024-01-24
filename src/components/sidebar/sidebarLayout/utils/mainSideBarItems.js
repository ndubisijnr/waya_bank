import setting from "../assets/icons/settings.svg"
import payment from "../assets/icons/payment.svg"
import transaction from "../assets/icons/transaction.svg"
import dispute from "../assets/icons/dispute.svg"
import notification from "../assets/icons/notifications.svg"
import log from "../assets/icons/log.svg"
import support from "../assets/icons/support.svg"
import contact from "../assets/icons/contact.svg"

//active icon
import active_setting from "../assets/icons/active/setting.svg"
import active_payment from "../assets/icons/active/payment.svg"
import active_transaction from "../assets/icons/active/transaction.svg"
import active_dispute from "../assets/icons/active/dispute.svg"
import active_notification from "../assets/icons/active/notification.svg"
import active_log from "../assets/icons/active/log.svg"
import active_support from "../assets/icons/active/support.svg"
import active_contact from "../assets/icons/active/contact.svg"

export default [
    {
        name:'Payment',
        icon:payment,
        activeIcon:active_payment,
        path:'/dashboard',
        children:[]
    },
    {
        name:'Transactions',
        icon:transaction,
        activeIcon:active_transaction,
        path:'/transactions'
    },
    // {
    //     name:'Contact',
    //     icon: contact,
    //     activeIcon:active_contact,
    //     path:'/contacts'
    // },
    {
        name:'Dispute',
        icon:dispute,
        activeIcon:active_dispute,
        path:'/dispute'
    },
    {
        name:'Notifications',
        icon:notification,
        activeIcon:active_notification,
        path:'/notifications'
    },
    {
        name:'Settings',
        icon:setting,
        activeIcon:active_setting,
        path:'/settings'
    },
    {
        name:'Support',
        icon:support,
        activeIcon:active_support,
        path:'/support'
    },
    {
        name:'Activity Log',
        activeIcon:active_log,
        icon:log,
        path:'activity-log'
    },
]