const upworkConfig = {
    'url': 'https://stage.upwork.com',
    'api': {
        'baseURL': 'https://api-staging.upwork.com',
        'graphQL': 'https://api-staging.upwork.com/graphql',
        'oca': 'https://stage.upwork.com/oca/zendesk/v1'
    },
    'oauth': {
        'clientID': '97b08d6b31d35011ba07565ae369ab56',
        'clientSecret': '38155cc2373d1b42',
        'redirectURL': 'https://odeskdev1548771339.zendesk.com/hc/en-us'
    },
    'cookies': {
        'prefix': 'upwork-help-'
    }
}

const communityURL = 'https://community.upwork.com'

const zdBrands = {
    'main': {
        'url': 'https://odeskdev1548771339.zendesk.com',
        'api': 'https://odeskdev1548771339.zendesk.com/api/v2',
        'hc': {
            'url': 'https://odeskdev1548771339.zendesk.com/hc/en-us',
            'api': 'https://odeskdev1548771339.zendesk.com/api/v2/help_center/en-us'
        },
        'chatbot': {
            'script': 'https://upwork-chatbot.troopersdesk.com/dev/chatbot/compiled/dev/integration.js',
            // 'script': 'https://assets.static-upwork.com/helpcenter/agatha/integration.js',
            'key': 'b6f975d4-01ff-466e-afc0-a30725ecd243'
        }
    }
}

// const aswBaseURL = 'http://air30assets.lcl/air3.0'; 
const aswBaseURL = 'https://assets.static-upwork.com/helpcenter/air3.0'; 


const defaultForm = {
    'form': 8448
}

const downVoteForm = {
    'fields': {
        'selection': 360006642660,
        'articleURL': 360006673899
    }
}

const sqaForm = {
    'form': 360000609114,
    'fields': {
        'alternateEmail': 360030656894,
        'creditCard': 360030366314,
        'datePaypal': 360030360733,
        'dateTransaction': 360030360493,
        'phoneNumber': 360030367894,
        'dateJoining': 360030360693,
        'street': 360030369973,
        'city': 360030370033,
        'country': 360030367954,
        'zipCode': 360030370213,
        'noPassword': 360006746719,
        'noAccess': 360006756580
    }
}

const gssoForm = {
    'form': 360002218274,
    'fields': {
        'alternateEmail': 360030656894,
        'creditCard': 360030366314,
        'datePaypal': 360030360733,
        'dateTransaction': 360030360493,
        'phoneNumber': 360030367894,
        'dateJoining': 360030360693,
        'street': 360030369973,
        'city': 360030370033,
        'country': 360030367954,
        'zipCode': 360030370213
    }
}

const directContractForm = {
    'form': 360000548720,
    'articles': [
        360011636800,
        360011636820
    ],
    'fields': {
        'articleURL': 360006673899
    }
}

const enterpriseForm = {
    'form': 13167354088723,
    'fields': {
        'company': 13167049570963,
        'phone': 14224667005203,
        'reason': 13166966566035,
        'source': 19756165770003,
    },
    'dropdowns': [
        {
            'key': 13166966566035,
            'options': [
                {
                    'key': 'tag_enterprise_support_byo',
					'value': 'Bring your Own Talent'
				},
				{
                    'key': 'tag_enterprise_support_contract_updates',
					'value': 'Contract Updates'
				},
				{
                    'key': 'tag_enterprise_support_joining_a_team',
					'value': 'Get Added to a Team'
				},
				{
                    'key': 'tag_enterprise_support_help_posting_a_job_shortlisting_hiring',
					'value': 'Help posting a job, shortlisting, hiring'
				},
				{
                    'key': 'tag_enterprise_support_enterprise_billing_invoicing',
					'value': 'Payments and Invoicing'
				},
				{
                    'key': 'tag_enterprise_support_payroll',
					'value': 'Payroll or Compliance Classification'
				},
				{
                    'key': 'tag_enterprise_support_po_setting',
					'value': 'PO Setting'
				},
				{
                    'key': 'tag_enterprise_support_reporting',
					'value': 'Reporting'
				},
				{
                    'key': 'tag_enterprise_support_talent_cloud_update',
					'value': 'Talent Cloud Update'
				},
				{
                    'key': 'tag_enterprise_support_talent',
					'value': 'Talent Onboarding Help'
				},
				{
                    'key': 'tag_enterprise_support_training',
					'value': 'Training'
				},
				{
                    'key': 'tag_enterprise_support_unable_to_post_hire_or_pay',
					'value': 'Unable to post or hire'
				},
				{
                    'key': 'tag_enterprise_support_unable_to_register_or_login',
					'value': 'Unable to register or login'
				},
				{
                    'key': 'tag_enterprise_support_user_permissions',
					'value': 'User Permissions or Member Settings'
				},
				{
                    'key': 'tag_enterprise_support_work_quality',
					'value': 'Work Quality / Contract Issues'
				},
				{
                    'key': 'tag_enterprise_support_team_or_financial_settings',
					'value': 'Team or Financial Settings'
				},
				{
                    'key': 'tag_enterprise_support_system_issue_or_bug',
					'value': 'System Issue or Bug'
				},
				{
                    'key': 'tag_enterprise_support_enterprise_billing__invoicing',
					'value': 'Enterprise Billing & Invoicing'
				},
				{
                    'key': 'tag_enterprise_support_configuration_registration_portal_update',
					'value': 'Configuration & Registration Portal Update'
				},
				{
                    'key': 'tag_enterprise_support_migration',
					'value': 'Migration'
				},
				{
                    'key': 'tag_enterprise_support_new_custom_field',
					'value': 'New Custom Field'
				},
				{
                    'key': 'tag_enterprise_support_onboarding_inquiry',
					'value': 'Onboarding Inquiry'
				},
				{
                    'key': 'tag_enterprise_support_product_feedback_and_or_features',
					'value': 'Product Feedback and/or Features'
				},
				{
                    'key': 'tag_enterprise_support_reporting_visibility',
					'value': 'Reporting / Visibility'
				},
				{
                    'key': 'tag_enterprise_support_other',
					'value': 'Other'
				}
            ]
        },
        {
            'key': 19756165770003,
            'options': [
                {
                    'key': 'upwork_help',
					'value': 'Upwork Help'
				},
                {
                    'key': 'enterprise_home',
					'value': 'Enterprise Home'
				}
            ]
        }
    ]
}

const circumventionForm = {
    'form': 360000577819,
    'fields': {
        'name': 360008210340,
        'email': 360008210780,
        'reportingCause': 360008218719
    }
}

const videoVoiceForm = {
    'form': 360000814599,
    'fields': {
        'date': 360012048799,
        'time': 360012086740,
        'device': 360012048819,
        'troubleshooting': 360012086760
    }
}

const catalog = {
    categories: [
        360001284834
    ],
    sections: [
        360002928454,
        360002928434
    ],
    articles: [
        360015345933,
        360015261214,
        360015261194
    ]
}

const commonSearches = [
    {
        'scope': 'freelancer',
        'keywords': 'connects, work diary, get paid'
    },
    {
        'scope': 'agency',
        'keywords': 'connects, work diary, get paid'
    },
    {
        'scope': 'client',
        'keywords': 'payment, refund, fees'
    },
    {
        'scope': 'enterprise',
        'keywords': 'invoice, feedback, fees'
    },
    {
        'scope': 'agent',
        'keywords': 'connects, work diary, get paid'
    }
]

const kbMatrics = [
    {
        'scope': 'freelancer',
        'tiles': [
            {
                'id': '360002714994',
                'type': 'categories',
                'icon': 'icon-svg-get-started',
                'title': 'Get Started',
                'description': 'How It Works, Getting Started, Fees & Protection'
            },
            {
                'id': '360002715134',
                'type': 'categories',
                'icon': 'icon-svg-profile',
                'title': 'Build Your Profile',
                'description': 'Profile Settings, Edit Profile, Freelancer Programs, Stats'
            },
            {
                'id': '360002721573',
                'type': 'categories',
                'icon': 'icon-svg-find-projects',
                'title': 'Find a Project',
                'description': 'Search, Send Proposals, Interview, Accept Offers'
            },
            {
                'id': '360002715154',
                'type': 'categories',
                'icon': 'icon-svg-start-working',
                'title': 'Start Working',
                'description': 'Messages, Work Diary, Contracts, Feedback'
            },
            {
                'id': '360002715174',
                'type': 'categories',
                'icon': 'icon-svg-get-paid',
                'title': 'Get Paid',
                'description': 'Get Paid, Payment Options, Reports, Earnings, Taxes'
            },
            {
                'id': '360002721593',
                'type': 'categories',
                'icon': 'icon-svg-payment-issues',
                'title': 'Payment Issues',
                'description': 'Payment Schedule, Troubleshooting, Disputes'
            },
            {
                'id': '360002715074',
                'type': 'categories',
                'icon': 'icon-svg-account',
                'title': 'Account',
                'description': 'Account Settings, Service Options, Identity Verification'
            },
            {
                'id': '360002721613',
                'type': 'categories',
                'icon': 'icon-svg-apps',
                'title': 'Apps',
                'description': 'Mobile App, Desktop App, Time Tracker'
            },
            {
                'id': '360002715214',
                'type': 'categories',
                'icon': 'icon-svg-trust-safety',
                'title': 'Trust & Safety',
                'description': 'Terms of Service, Online Safety, Personal Data'
            },
            {
                'id': '360002715234',
                'type': 'categories',
                'icon': 'icon-svg-api',
                'title': 'Upwork API',
                'description': 'Development Resources'
            },
            {
                'id': '360002758100',
                'type': 'categories',
                'icon': 'icon-svg-catalog',
                'title': 'Project Catalog',
                'description': 'Pre-packaged projects on Upwork'
            }
        ]
    },
    {
        'scope': 'agency',
        'tiles': [
            {
                'id': '360002714994',
                'type': 'categories',
                'icon': 'icon-svg-get-started',
                'title': 'Get Started',
                'description': 'How It Works, Getting Started, Fees & Protection'
            },
            {
                'id': '360002721553',
                'type': 'categories',
                'icon': 'icon-svg-agency',
                'title': 'Build Your Agency',
                'description': 'Agency Settings, Edit Profile, Agency Programs, Stats'
            },
            {
                'id': '360002721573',
                'type': 'categories',
                'icon': 'icon-svg-find-projects',
                'title': 'Find a Project',
                'description': 'Search, Send Proposals, Interview, Accept Offers'
            },
            {
                'id': '360002715154',
                'type': 'categories',
                'icon': 'icon-svg-start-working',
                'title': 'Start Working',
                'description': 'Messages, Work Diary, Contracts, Feedback'
            },
            {
                'id': '360002715174',
                'type': 'categories',
                'icon': 'icon-svg-get-paid',
                'title': 'Get Paid',
                'description': 'Get Paid, Payment Options, Reports, Earnings, Taxes'
            },
            {
                'id': '360002721593',
                'type': 'categories',
                'icon': 'icon-svg-payment-issues',
                'title': 'Payment Issues',
                'description': 'Payment Schedule, Troubleshooting, Disputes'
            },
            {
                'id': '360002715074',
                'type': 'categories',
                'icon': 'icon-svg-account',
                'title': 'Account',
                'description': 'Account Settings, Service Options, Identity Verification'
            },
            {
                'id': '360002721613',
                'type': 'categories',
                'icon': 'icon-svg-apps',
                'title': 'Apps',
                'description': 'Mobile App, Desktop App, Time Tracker'
            },
            {
                'id': '360002715214',
                'type': 'categories',
                'icon': 'icon-svg-trust-safety',
                'title': 'Trust & Safety',
                'description': 'Terms of Service, Online Safety, Personal Data'
            },
            {
                'id': '360002715234',
                'type': 'categories',
                'icon': 'icon-svg-api',
                'title': 'Upwork API',
                'description': 'Development Resources'
            },
            {
                'id': '360002758100',
                'type': 'categories',
                'icon': 'icon-svg-catalog',
                'title': 'Project Catalog',
                'description': 'Pre-packaged projects on Upwork'
            }
        ]
    },
    {
        'scope': 'client',
        'tiles': [
            {
                'id': '360002714994',
                'type': 'categories',
                'icon': 'icon-svg-get-started',
                'title': 'Get Started',
                'description': 'How It Works, Getting Started, Fees & Protection'
            },
            {
                'id': '360001283573',
                'type': 'categories',
                'icon': 'icon-svg-find-freelancer',
                'title': 'Find a Freelancer',
                'description': 'Post a Job, Find a Freelancer or Agency, Invite to Apply'
            },
            {
                'id': '360002721473',
                'type': 'categories',
                'icon': 'icon-svg-make-hire',
                'title': 'Make a Hire',
                'description': 'Evaluate Proposals, Interview Freelancers, Send an Offer'
            },
            {
                'id': '360002715034',
                'type': 'categories',
                'icon': 'icon-svg-projects',
                'title': 'Manage Your Project',
                'description': 'Manage Contracts, Contracts, Feedback'
            },
            {
                'id': '360002715054',
                'type': 'categories',
                'icon': 'icon-svg-payments',
                'title': 'Pay for Work',
                'description': 'Billing, Make Payments, Reports, Invoices, Disputes'
            },
            {
                'id': '360002721513',
                'type': 'categories',
                'icon': 'icon-svg-service',
                'title': 'Service Options',
                'description': 'Upwork Basic, Upwork Pro, Upwork Enterprise'
            },
            {
                'id': '360002715074',
                'type': 'categories',
                'icon': 'icon-svg-account',
                'title': 'Account',
                'description': 'Account Settings, Manage Teams, Team Permissions'
            },
            {
                'id': '360002721613',
                'type': 'categories',
                'icon': 'icon-svg-apps',
                'title': 'Apps',
                'description': 'Mobile App, Desktop App, Time Tracker'
            },
            {
                'id': '360002715214',
                'type': 'categories',
                'icon': 'icon-svg-trust-safety',
                'title': 'Trust & Safety',
                'description': 'Terms of Service, Online Safety, Personal Data'
            },
            {
                'id': '360002715234',
                'type': 'categories',
                'icon': 'icon-svg-api',
                'title': 'Upwork API',
                'description': 'Development Resources'
            },
            {
                'id': '360002758100',
                'type': 'categories',
                'icon': 'icon-svg-catalog',
                'title': 'Project Catalog',
                'description': 'Pre-packaged projects on Upwork'
            }
        ]
    },
    {
        'scope': 'enterprise',
        'tiles': [
            {
                'id': '360002714994',
                'type': 'categories',
                'icon': 'icon-svg-get-started',
                'title': 'Get Started',
                'description': 'How It Works, Getting Started, Fees & Protection'
            },
            {
                'id': '360001283573',
                'type': 'categories',
                'icon': 'icon-svg-find-freelancer',
                'title': 'Find a Freelancer',
                'description': 'Post a Job, Find a Freelancer or Agency, Invite to Apply'
            },
            {
                'id': '360002721473',
                'type': 'categories',
                'icon': 'icon-svg-make-hire',
                'title': 'Make a Hire',
                'description': 'Evaluate Proposals, Interview Freelancers, Send an Offer'
            },
            {
                'id': '360002715034',
                'type': 'categories',
                'icon': 'icon-svg-projects',
                'title': 'Manage Your Project',
                'description': 'Manage Contracts, Contracts, Feedback'
            },
            {
                'id': '360002721493',
                'type': 'categories',
                'icon': 'icon-svg-enterprise-billing',
                'title': 'Enterprise Billing',
                'description': 'Pay for Work, Reports, Invoices, Disputes'
            },
            {
                'id': '360002721533',
                'type': 'categories',
                'icon': 'icon-svg-enterprise-services',
                'title': 'Enterprise Services',
                'description': 'Compliance Services, Professional Services'
            },
            {
                'id': '360002715094',
                'type': 'categories',
                'icon': 'icon-svg-enterprise-account',
                'title': 'Enterprise Account',
                'description': 'Account Owner, Manage Teams, Account Settings'
            },
            {
                'id': '360002721613',
                'type': 'categories',
                'icon': 'icon-svg-apps',
                'title': 'Apps',
                'description': 'Mobile App, Desktop App, Time Tracker'
            },
            {
                'id': '360002715214',
                'type': 'categories',
                'icon': 'icon-svg-trust-safety',
                'title': 'Trust & Safety',
                'description': 'Terms of Service, Online Safety, Personal Data'
            },
            {
                'id': '360002715234',
                'type': 'categories',
                'icon': 'icon-svg-api',
                'title': 'Upwork API',
                'description': 'Development Resources'
            },
            {
                'id': '16532665335827',
                'type': 'sections',
                'icon': 'icon-svg-catalog',
                'title': 'Upwork Payroll',
                'description': 'Upwork Payroll for Enterprise'
            }
        ]
    },
    {
        'scope': 'agent',
        'tiles': [
            {
                'id': '360001283793',
                'type': 'categories',
                'icon': 'icon-svg-client',
                'title': 'Client',
                'description': 'Client-specific concerns e.g. getting started, job posts, contracts, billing method, etc.'
            },
            {
                'id': '360001283813',
                'type': 'categories',
                'icon': 'icon-svg-freelancer',
                'title': 'Freelancer',
                'description': 'Freelancer-specific concerns e.g. getting started, proposals, contracts, getting paid, etc.'
            },
            {
                'id': '360001284934',
                'type': 'categories',
                'icon': 'icon-svg-technical-support',
                'title': 'Technical Issues',
                'description': 'Troubleshooting tech issues, when to escalate, & TS FAQ\'s'
            },
            {
                'id': '360001284914',
                'type': 'categories',
                'icon': 'icon-svg-other-depts',
                'title': 'Other Depts',
                'description': 'Specific cases another dept. is in charge of and/or handles & when to escalate'
            },
            {
                'id': '360001284954',
                'type': 'categories',
                'icon': 'icon-svg-policies',
                'title': 'Policies & Processes',
                'description': 'Applies to all parties e.g. CS attendance policy, TL Only processes, Legal issues, general info, etc.'
            },
            {
                'id': '360001284974',
                'type': 'categories',
                'icon': 'icon-svg-hire',
                'title': 'New Hire',
                'description': 'For all, but a great place for New Hires! View videos, agent resources, general product info, ticket handling, etc.'
            },
            {
                'id': '360002758100',
                'type': 'categories',
                'icon': 'icon-svg-catalog',
                'title': 'Project Catalog',
                'description': 'Pre-packaged projects on Upwork'
            }
        ]
    }
]

const instantHelp = [
    {
        'scope': 'freelancer',
        'options': [
            {
                'icon': 'icon-svg-profile-reset',
                'title': 'Reset Profile Visibility',
                'description': 'Change your profile to public',
                'link': 'https://support.upwork.com/hc/en-us?request=t_private_profile'
            },
            {
                'icon': 'icon-svg-earning-certificate',
                'title': 'Earning Certificates',
                'description': 'Your last twelve months earnings',
                'link': 'https://www.upwork.com/ab/payments/reports/certificate-of-earnings.pdf'
            },
            {
                'icon': 'icon-svg-reset-password',
                'title': 'Reset Password',
                'description': 'Change your account password',
                'link': 'https://www.upwork.com/ab/account-security/reset-password'
            },
            {
                'icon': 'icon-svg-my-stats',
                'title': 'My Stats',
                'description': 'View your job success and other stats',
                'link': 'https://www.upwork.com/my-stats'
            }
        ]
    },
    {
        'scope': 'agency',
        'options': [
            {
                'icon': 'icon-svg-earning-certificate',
                'title': 'Earning Certificates',
                'description': 'Your last twelve months earnings',
                'link': 'https://www.upwork.com/ab/payments/reports/certificate-of-earnings.pdf'
            },
            {
                'icon': 'icon-svg-reset-password',
                'title': 'Reset Password',
                'description': 'Change your account password',
                'link': 'https://www.upwork.com/ab/account-security/reset-password'
            },
            {
                'icon': 'icon-svg-close-account',
                'title': 'Close Account',
                'description': 'Permanently close your account',
                'link': 'https://www.upwork.com/freelancers/settings/close-account'
            },
            {
                'icon': 'icon-svg-my-stats',
                'title': 'My Stats',
                'description': 'View your job success and other stats',
                'link': 'https://www.upwork.com/my-stats'
            }
        ]
    },
    {
        'scope': 'client',
        'options': [
            {
                'icon': 'icon-svg-billing',
                'title': 'Update Billing',
                'description': 'Change or update your billing methods',
                'link': 'https://www.upwork.com/ab/payments/deposit-methods'
            },
            {
                'icon': 'icon-svg-contract',
                'title': 'Manage Contracts',
                'description': 'Update or manage active contracts',
                'link': 'https://www.upwork.com/contracts'
            },
            {
                'icon': 'icon-svg-close-account',
                'title': 'Close Account',
                'description': 'Permanently close your account',
                'link': 'https://www.upwork.com/ab/client-info/close-account-modal'
            },
            {
                'icon': 'icon-svg-reset-password',
                'title': 'Reset Password',
                'description': 'Change your account password',
                'link': 'https://www.upwork.com/ab/account-security/reset-password'
            }
        ]
    },
    {
        'scope': 'enterprise',
        'options': [
            {
                'icon': 'icon-svg-billing',
                'title': 'Update Billing',
                'description': 'Change or update your billing methods',
                'link': 'https://www.upwork.com/ab/payments/deposit-methods'
            },
            {
                'icon': 'icon-svg-contract',
                'title': 'Manage Contracts',
                'description': 'Update or manage active contracts',
                'link': 'https://www.upwork.com/contracts'
            },
            {
                'icon': 'icon-svg-close-account',
                'title': 'Close Account',
                'description': 'Permanently close your account',
                'link': 'https://www.upwork.com/ab/client-info/close-account-modal'
            },
            {
                'icon': 'icon-svg-reset-password',
                'title': 'Reset Password',
                'description': 'Change your account password',
                'link': 'https://www.upwork.com/ab/account-security/reset-password'
            }
        ]
    },
    {
        'scope': 'agent',
        'options': [
            {
                'icon': 'icon-svg-directory',
                'title': 'Help Documentation',
                'description': 'Learn more about Upwork Help',
                'link': 'https://support.upwork.com/hc/en-us/articles/360022202234'
            },
            {
                'icon': 'icon-svg-zendesk',
                'title': 'Zendesk Dashboard',
                'description': 'Launch the Zendesk agent dashboard',
                'link': 'https://upwork.zendesk.com/agent/dashboard'
            },
            {
                'icon': 'icon-svg-zopim',
                'title': 'Zopim Dashboard',
                'description': 'Launch the Zopim agent dashboard',
                'link': 'https://upwork.zendesk.com/chat/start'
            },
            {
                'icon': 'icon-svg-problem-tickets',
                'title': 'Problem Tickets',
                'description': 'View open problem tickets',
                'link': 'https://upwk.xyz/2zuSMMx'
            }
        ]
    }
]

const recommendedTopics = [
    {
        'scope': 'freelancer',
        'links': [
            {
                'title': 'Staying Safe on Upwork',
                'description': 'Online safety best practices',
                'link': 'articles/211067668',
                'icon': aswBaseURL+'/icon-stay-safe.svg', 
            },
            {
                'title': 'Edit Account Information',
                'description': 'Update your account info',
                'link': 'articles/211067528',
                'icon': aswBaseURL+'/icon-edit-information.svg', 
            },
            {
                'title': 'Profile Changed to "Private"',
                'description': 'Change your profile back to public',
                'link': 'articles/115003975967',
                'icon': aswBaseURL+'/icon-profile-private.svg', 
            },
            {
                'title': 'Profile Application Declined',
                'description': 'How admission to Upwork works',
                'link': 'articles/214180797',
                'icon': aswBaseURL+'/icon-application-declined.svg', 
            },
            {
                'title': 'Use Connects',
                'description': 'Using and purchasing Connects',
                'link': 'articles/211062898',
                'icon': aswBaseURL+'/icon-use-connects.svg',
            },
            {
                'title': 'Manage How You Get Paid',
                'description': 'Getting paid through Upwork',
                'link': 'articles/211060918',
                'icon': aswBaseURL+'/icon-manage-get-paid.svg',
            },
            {
                'title': 'Profile Tips and Best Practices',
                'description': 'Tips for crafting a great profile',
                'link': 'articles/211063208',
                'icon': 'https://assets.static-upwork.com/helpcenter/air2.75/icon-directory.svg'
            },
            {
                'title': 'Membership Plans',
                'description': 'Learn about Upwork memberships',
                'link': 'articles/211062888',
                'icon': aswBaseURL+'/icon-membership-plans.svg',
            },
            {
                'title': 'Weekly Billing Cycle',
                'description': 'How billing periods work',
                'link': 'articles/211063698',
                'icon': 'https://assets.static-upwork.com/helpcenter/air2.75/icon-directory.svg'
            },
            {
                'title': 'Install the Desktop App',
                'description': 'Using the Upwork time tracker',
                'link': 'articles/211064088',
                'icon': aswBaseURL+'/icon-install-app.svg',
            }
        ]
    },
    {
        'scope': 'agency',
        'links': [
            {
                'title': 'Staying Safe on Upwork',
                'description': 'Online safety best practices',
                'link': 'articles/211067668',
                'icon': aswBaseURL+'/icon-stay-safe.svg', 
            },
            {
                'title': 'Create an Agency',
                'description': 'How to build an agency',
                'link': 'articles/211067598',
                'icon': 'https://assets.static-upwork.com/helpcenter/air2.75/icon-catalog.svg'
            },
            {
                'title': 'Profile Changed to "Private"',
                'description': 'Change your profile back to public',
                'link': 'articles/115003975967',
                'icon': aswBaseURL+'/icon-profile-private.svg', 
            },
            {
                'title': 'Agency Plus',
                'description': 'Managing your agency membership',
                'link': 'articles/211062958',
                'icon': 'https://assets.static-upwork.com/helpcenter/air2.75/icon-catalog.svg'
            },
            {
                'title': 'Agency Profile',
                'description': 'Tips for creating an amazing profile',
                'link': 'articles/360009646433',
                'icon': 'https://assets.static-upwork.com/helpcenter/air2.75/icon-catalog.svg'
            },
            {
                'title': 'Manage Agency Roster',
                'description': 'Managing your team on Upwork',
                'link': 'articles/360009524094',
                'icon': 'https://assets.static-upwork.com/helpcenter/air2.75/icon-catalog.svg'
            },
            {
                'title': 'Manage How You Get Paid',
                'description': 'Getting paid through Upwork',
                'link': 'articles/211060918',
                'icon': aswBaseURL+'/icon-manage-get-paid.svg',
            },
            {
                'title': 'Membership Plans',
                'description': 'Learn about Upwork memberships',
                'link': 'articles/211062888',
                'icon': aswBaseURL+'/icon-membership-plans.svg',
            },
            {
                'title': 'Weekly Billing Cycle',
                'description': 'How billing periods work',
                'link': 'articles/211063698',
                'icon': 'https://assets.static-upwork.com/helpcenter/air2.75/icon-catalog.svg'
            },
            {
                'title': 'Install the Desktop App',
                'description': 'Using the Upwork time tracker',
                'link': 'articles/211064088',
                'icon': aswBaseURL+'/icon-install-app.svg',
            }
        ]
    },
    {
        'scope': 'client',
        'links': [
            {
                'title': 'Staying Safe on Upwork',
                'description': 'Online safety best practices',
                'link': 'articles/211067668',
                'icon': aswBaseURL+'/icon-stay-safe.svg', 
            },
            {
                'title': 'Enable or Disable Manual Time',
                'description': 'Allowing manual time on contracts',
                'link': 'articles/211062308',
                'icon': 'https://assets.static-upwork.com/helpcenter/air2.75/icon-hire.svg'
            },
            {
                'title': 'Client Payment Processing Fees',
                'description': 'How processing fees work',
                'link': 'articles/218375638',
                'icon': 'https://assets.static-upwork.com/helpcenter/air2.75/icon-hire.svg'
            },
            {
                'title': 'Service Options',
                'description': 'Learn about Upwork memberships',
                'link': 'categories/360001191293',
                'icon': 'https://assets.static-upwork.com/helpcenter/air2.75/icon-hire.svg'
            },
            {
                'title': 'Use Messages',
                'description': 'Communicating through Upwork',
                'link': 'articles/211067768',
                'icon': 'https://assets.static-upwork.com/helpcenter/air2.75/icon-hire.svg'
            },
            {
                'title': 'Be a Client and a Freelancer',
                'description': 'Utilizing multiple account types',
                'link': 'articles/211067558',
                'icon': 'https://assets.static-upwork.com/helpcenter/air2.75/icon-hire.svg'
            },
            {
                'title': 'Billing Methods',
                'description': 'Setting up a billing method',
                'link': 'articles/211067988',
                'icon': 'https://assets.static-upwork.com/helpcenter/air2.75/icon-hire.svg'
            },
            {
                'title': 'Request a Refund',
                'description': 'How to request a refund',
                'link': 'articles/211062088',
                'icon': 'https://assets.static-upwork.com/helpcenter/air2.75/icon-hire.svg'
            },
            {
                'title': 'Upwork Payment Protection',
                'description': 'How your payments are protected',
                'link': 'articles/211062568',
                'icon': 'https://assets.static-upwork.com/helpcenter/air2.75/icon-hire.svg'
            },
            {
                'title': 'Viewing the Work Diary',
                'description': 'Record of your freelancer\'s activity',
                'link': 'articles/211062278',
                'icon': 'https://assets.static-upwork.com/helpcenter/air2.75/icon-hire.svg'
            }
        ]
    },
    {
        'scope': 'enterprise',
        'links': [
            {
                'title': 'Staying Safe on Upwork',
                'description': 'Online safety best practices',
                'link': 'articles/211067668',
                'icon': aswBaseURL+'/icon-stay-safe.svg', 
            },
            {
                'title': 'Enterprise Onboarding',
                'description': 'Onboarding your new hire',
                'link': 'articles/226686528',
                'icon': 'https://assets.static-upwork.com/helpcenter/air2.75/icon-catalog.svg'
            },
            {
                'title': 'Compliance Services',
                'description': 'Enrolling in compliance services',
                'link': 'articles/226526647',
                'icon': 'https://assets.static-upwork.com/helpcenter/air2.75/icon-catalog.svg'
            },
            {
                'title': 'Talent Sourcing',
                'description': 'Utilizing your Upwork sourcing team',
                'link': 'articles/360001650667',
                'icon': 'https://assets.static-upwork.com/helpcenter/air2.75/icon-catalog.svg'
            },
            {
                'title': 'Use Messages',
                'description': 'Communicating through Upwork',
                'link': 'articles/211067768',
                'icon': 'https://assets.static-upwork.com/helpcenter/air2.75/icon-catalog.svg'
            },
            {
                'title': 'Hiring with Upwork Payroll',
                'description': 'Paying employees through payroll',
                'link': 'articles/211062518',
                'icon': 'https://assets.static-upwork.com/helpcenter/air2.75/icon-catalog.svg'
            },
            {
                'title': 'Enterprise Billing',
                'description': 'Setting up a billing method',
                'link': 'articles/226529107',
                'icon': 'https://assets.static-upwork.com/helpcenter/air2.75/icon-catalog.svg'
            },
            {
                'title': 'Request a Refund',
                'description': 'How to request a refund',
                'link': 'articles/211062088',
                'icon': 'https://assets.static-upwork.com/helpcenter/air2.75/icon-catalog.svg'
            },
            {
                'title': 'Upwork Payment Protection',
                'description': 'How your payments are protected',
                'link': 'articles/211062568',
                'icon': 'https://assets.static-upwork.com/helpcenter/air2.75/icon-catalog.svg'
            },
            {
                'title': 'Request an API Key',
                'description': 'Integrate with the Upwork API',
                'link': 'articles/115015857647',
                'icon': 'https://assets.static-upwork.com/helpcenter/air2.75/icon-catalog.svg'
            }
        ]
    },
    {
        'scope': 'agent',
        'links': [
            {
                'title': 'Staying Safe on Upwork',
                'description': 'Online safety best practices',
                'link': 'articles/211067668',
                'icon': aswBaseURL+'/icon-stay-safe.svg', 
            },
            {
                'title': 'Job Success Score',
                'description': 'Measure of a FL\'s or Agency\'s client satisfaction',
                'link': 'articles/360010413033',
                'icon': 'https://assets.static-upwork.com/helpcenter/air2.75/icon-hire.svg'
            },
            {
                'title': 'Identity Verification',
                'description': 'Routine requests to verify identities',
                'link': 'articles/360010246813',
                'icon': 'https://assets.static-upwork.com/helpcenter/air2.75/icon-hire.svg'
            },
            {
                'title': 'Freelancer MQ Suspensions',
                'description': 'MQ-specific actions, zero tolerance, time wasters, unsuccessful FLs',
                'link': 'articles/360010871934',
                'icon': 'https://assets.static-upwork.com/helpcenter/air2.75/icon-hire.svg'
            },
            {
                'title': 'Mediation & Disputes',
                'description': 'When to send to Mediation Support',
                'link': 'articles/360010489494',
                'icon': 'https://assets.static-upwork.com/helpcenter/air2.75/icon-hire.svg'
            },
            {
                'title': 'MQ Escalation Directory',
                'description': 'Guide on MQ\'s process paths',
                'link': 'articles/360010802953',
                'icon': 'https://assets.static-upwork.com/helpcenter/air2.75/icon-hire.svg'
            },
            {
                'title': 'Client Membership Plans',
                'description': 'Client Plans: Basic, Plus, and Business',
                'link': 'articles/360017925953',
                'icon': aswBaseURL+'/icon-membership-plans.svg',
            },
            {
                'title': 'Withdrawal Issues',
                'description': 'Withdrawal issues, tracers, and recalls',
                'link': 'articles/360010182473',
                'icon': 'https://assets.static-upwork.com/helpcenter/air2.75/icon-hire.svg'
            },
            {
                'title': 'Edit or Remove Feedback',
                'description': 'Feedback FAQs and process map',
                'link': 'articles/360010525033',
                'icon': 'https://assets.static-upwork.com/helpcenter/air2.75/icon-hire.svg'
            },
            {
                'title': 'Tech Support Best Practices',
                'description': 'Tech Support troubleshooting and bug escalation',
                'link': 'articles/360010367733',
                'icon': 'https://assets.static-upwork.com/helpcenter/air2.75/icon-hire.svg'
            }
        ]
    }
]

const kbRedirects = {
    'categories': [
        {
            'source': '201362678',
            'destination': ''
        },
        {
            'source': '201362698',
            'destination': ''
        },
        {
            'source': '201362778',
            'destination': ''
        },
        {
            'source': '201362718',
            'destination': ''
        },
        {
            'source': '201362758',
            'destination': ''
        },
        {
            'source': '201362728',
            'destination': ''
        },
        {
            'source': '201362708',
            'destination': ''
        },
        {
            'source': '201362668',
            'destination': ''
        },
        {
            'source': '201362768',
            'destination': ''
        },
        {
            'source': '203575248',
            'destination': ''
        },
        {
            'source': '203575268',
            'destination': ''
        }
    ],
    'sections': [
        {
            'source': '204336927',
            'destination': ''
        },
        {
            'source': '202260468',
            'destination': ''
        },
        {
            'source': '202260348',
            'destination': ''
        },
        {
            'source': '203840107',
            'destination': ''
        },
        {
            'source': '202260488',
            'destination': ''
        },
        {
            'source': '115001777987',
            'destination': ''
        },
        {
            'source': '207086647',
            'destination': ''
        },
        {
            'source': '207073748',
            'destination': ''
        },
        {
            'source': '202260588',
            'destination': ''
        },
        {
            'source': '207073768',
            'destination': ''
        },
        {
            'source': '207086667',
            'destination': ''
        },
        {
            'source': '202260558',
            'destination': ''
        },
        {
            'source': '202261168',
            'destination': ''
        },
        {
            'source': '202261208',
            'destination': ''
        },
        {
            'source': '202261198',
            'destination': ''
        },
        {
            'source': '202261218',
            'destination': ''
        },
        {
            'source': '202260668',
            'destination': ''
        },
        {
            'source': '202260708',
            'destination': ''
        },
        {
            'source': '206357807',
            'destination': ''
        },
        {
            'source': '115000474907',
            'destination': ''
        },
        {
            'source': '202260728',
            'destination': ''
        },
        {
            'source': '202260678',
            'destination': ''
        },
        {
            'source': '202261028',
            'destination': ''
        },
        {
            'source': '202261038',
            'destination': ''
        },
        {
            'source': '202260548',
            'destination': ''
        },
        {
            'source': '202260618',
            'destination': ''
        },
        {
            'source': '202261048',
            'destination': ''
        },
        {
            'source': '204142167',
            'destination': ''
        },
        {
            'source': '202260758',
            'destination': ''
        },
        {
            'source': '202260768',
            'destination': ''
        },
        {
            'source': '202260628',
            'destination': ''
        },
        {
            'source': '202260648',
            'destination': ''
        },
        {
            'source': '202260658',
            'destination': ''
        },
        {
            'source': '202260448',
            'destination': ''
        },
        {
            'source': '202260438',
            'destination': ''
        },
        {
            'source': '202260428',
            'destination': ''
        },
        {
            'source': '202260418',
            'destination': ''
        },
        {
            'source': '202261148',
            'destination': ''
        },
        {
            'source': '202261108',
            'destination': ''
        },
        {
            'source': '207086787',
            'destination': ''
        },
        {
            'source': '360000304688',
            'destination': ''
        },
        {
            'source': '360000304668',
            'destination': ''
        },
        {
            'source': '360000264527',
            'destination': ''
        },
        {
            'source': '205955227',
            'destination': ''
        },
        {
            'source': '205569927',
            'destination': ''
        },
        {
            'source': '205567388',
            'destination': 'articles/218373797'
        }
    ],
    'articles': [
        {
            'source': '115001499067',
            'destination': '360015346293'
        },
        {
            'source': '115001497187',
            'destination': '360015346293'
        },
        {
            'source': '115001497847',
            'destination': '360015346293'
        },
        {
            'source': '115001497247',
            'destination': '360015346293'
        },
        {
            'source': '115001546028',
            'destination': '360015346293'
        },
        {
            'source': '115001497307',
            'destination': '360015346293'
        },
        {
            'source': '115001544448',
            'destination': '360015346293'
        },
        {
            'source': '115001497447',
            'destination': '360015346293'
        },
        {
            'source': '115001546048',
            'destination': '360015346293'
        },
        {
            'source': '115001544388',
            'destination': '360015346293'
        },
        {
            'source': '115001544168',
            'destination': '360015346293'
        },
        {
            'source': '115001544768',
            'destination': '360015346293'
        },
        {
            'source': '235005488',
            'destination': '360015346293'
        },
        {
            'source': '211063858',
            'destination': '360015346293'
        },
        {
            'source': '115001544068',
            'destination': '360015346293'
        },
        {
            'source': '360001681567',
            'destination': '360015260294'
        },
        {
            'source': '360009435054',
            'destination': '360015260294'
        },
        {
            'source': '226684828',
            'destination': '360015346213'
        },
        {
            'source': '360001411448',
            'destination': '360015259894'
        },
        {
            'source': '360001416887',
            'destination': '360015344713'
        },
        {
            'source': '360001411148',
            'destination': '360015344733'
        },
        {
            'source': '360001416847',
            'destination': '360015259954'
        },
        {
            'source': '3600016807',
            'destination': '360015259934'
        },
        {
            'source': '360001411128',
            'destination': '360015344693'
        },
        {
            'source': '360001662908',
            'destination': '360015260274'
        },
        {
            'source': '360001411508',
            'destination': '360015344633'
        },
        {
            'source': '360001663068',
            'destination': '360015344673'
        },
        {
            'source': '360001681607',
            'destination': '360015259694'
        },
        {
            'source': '360001650647',
            'destination': '360015259394'
        },
        {
            'source': '360001416767',
            'destination': '360015259874'
        },
        {
            'source': '226685308',
            'destination': '360015344413'
        },
        {
            'source': '360001663028',
            'destination': '360015259674'
        },
        {
            'source': '360001662968',
            'destination': '360015344573'
        },
        {
            'source': '360001237148',
            'destination': '360015345153'
        },
        {
            'source': '226486827',
            'destination': '360015261374'
        },
        {
            'source': '214754938',
            'destination': '360015347113'
        },
        {
            'source': '215465597',
            'destination': '360015347113'
        },
        {
            'source': '214754758',
            'destination': '360015347113'
        },
        {
            'source': '215469327',
            'destination': '360015347113'
        },
        {
            'source': '226342267',
            'destination': '360015347113'
        },
        {
            'source': '215469277',
            'destination': '360015347113'
        },
        {
            'source': '211063738',
            'destination': '360015346233'
        },
        {
            'source': '211063728',
            'destination': '360015346233'
        },
        {
            'source': '115013151187',
            'destination': '360015260474'
        }
    ]
}

const kbMirrors = {
    'categories': [
        {
            'mirror': '360001284814',
            'items': [
                {
                    'id': '360002953493',
                    'title': ' Account Settings'
                }
            ]
        },
        {
            'mirror': '360001284774',
            'items': [
                {
                    'id': '360002953433',
                    'title': 'Disputes'
                },
                {
                    'id': '360002928154',
                    'title': 'Reports &amp; Invoices'
                }
            ]
        }
    ],
    'sections': [
        {
            'mirror': '360002928174',
            'items': [
                {
                    'id': '360015344853',
                    'title': 'Pay for Hourly Contracts'
                },
                {
                    'id': '360015260194',
                    'title': 'Fixed-Price Job Offer Deposits'
                },
                {
                    'id': '360015344873',
                    'title': 'Split Balance Between Billing Methods'
                },
                {
                    'id': '360015344893',
                    'title': 'Pay Past-Due Balance'
                },
                {
                    'id': '360015344913',
                    'title': 'Hiring with Upwork Payroll'
                },
                {
                    'id': '360015260214',
                    'title': 'Tax Requirements'
                }
            ]
        },
        {
            'mirror': '360002928354',
            'items': [
                {
                    'id': '360015259414',
                    'title': 'Hiring Headquarters'
                }
            ]
        },
        {
            'mirror': '360002928514',
            'items': [
                {
                    'id': '360015346153',
                    'title': 'Contract Paused'
                },
                {
                    'id': '360015261554',
                    'title': 'End Your Contract'
                },
                {
                    'id': '360015261574',
                    'title': 'Propose Another Contract'
                }
            ]
        },
        {
            'mirror': '360002953513',
            'items': [
                {
                    'id': '360015260574',
                    'title': 'Enable Teams'
                },
                {
                    'id': '360015345173',
                    'title': 'Add or Remove Team Members'
                },
                {
                    'id': '360015260634',
                    'title': 'Team Permissions'
                },
                {
                    'id': '360015345193',
                    'title': 'Groups Contracts Within Teams'
                },
                {
                    'id': '360015260614',
                    'title': 'Hide a Team'
                },
                {
                    'id': '360015260594',
                    'title': 'Move Someone to a Different Team'
                }
            ]
        },
        {
            'mirror': '360002928314',
            'items': [
                {
                    'id': '360015344293',
                    'title': 'Supported Browsers'
                },
                {
                    'id': '360015344333',
                    'title': 'Get Help with Support Bot'
                }
            ]
        },
        {
            'mirror': '360002928334',
            'items': [
                {
                    'id': '360015344373',
                    'title': 'Contact Upwork Customer Support'
                },
                {
                    'id': '360015344313',
                    'title': 'Upwork Community'
                }
            ]
        },
        {
            'mirror': '360002928374',
            'items': [
                {
                    'id': '360015344913',
                    'title': 'Hiring with Upwork Payroll'
                },
                {
                    'id': '360015259834',
                    'title': 'Minimum Hourly Rates'
                },
                {
                    'id': '360015344393',
                    'title': 'Upwork Opt-Out Free'
                }
            ]
        },
        {
            'mirror': '360002953613',
            'items': [
                {
                    'id': '360015259394',
                    'title': 'Difference Between Hourly and Fixed-Price'
                }
            ]
        },
        {
          'mirror': '360002953773',
            'items': [
                {
                    'id': '360015345113',
                    'title': 'Change Password or Security Question'
                },
                {
                    'id': '360015345093',
                    'title': 'Forgot Password or Security Question'
                },
                {
                    'id': '360015345153',
                    'title': 'Close My Account'
                },
                {
                    'id': '360015260474',
                    'title': 'Manage Email Notifications'
                },
                {
                    'id': '360015260534',
                    'title': 'Two-Step Security Verification'
                }
            ]
        },
        {
            'mirror': '360002928054',
            'items': [
                {
                    'id': '360015346093',
                    'title': 'Troubleshoot Messages'
                },
                {
                    'id': '360015346073',
                    'title': 'Use Messages'
                },
                {
                    'id': '360015261414',
                    'title': 'Video and Voice Messaging'
                },
                {
                    'id': '360015261434',
                    'title': 'Supported Attachment File Types'
                }
            ]
        },
        {
            'mirror': '360002928494',
            'items': [
                {
                    'id': '360015261594',
                    'title': 'Submit Deliverables'
                }
            ]
        },
        {
            'mirror': '360002953853',
            'items': [
                {
                    'id': '115001457268',
                    'title': 'Screenshot Tool'
                }
            ]
        },
        {
            'mirror': '360002928274',
            'items': [
                {
                    'id': '360015260654',
                    'title': 'Get Added to an Enterprise Account'
                }
            ]
        }
    ]
}

const smfMatrics = []

jQuery(function () {
    if (HelpCenter.user.email != 'admin@odesk.com') {
        if (isUserAnonymous()) {
            $.ajax(upworkConfig.url + '/ab/account-security/is-authenticated', {
                type: 'GET',
                xhrFields: {
                    withCredentials: true
                },
                crossDomain: true,
                statusCode: {
                    200: function () {
                        deleteCookie(upworkConfig.cookies.prefix + 'user-tab')
                        if (!detectPageTemplates('articles')) {
                            window.location.href = zdBrands.main.url + '/login?return_to=' + encodeURI(window.location)
                        }
                    },
                    401: function () {
                        deleteCookie(upworkConfig.cookies.prefix + 'oauth2-access-token')
                        deleteCookie(upworkConfig.cookies.prefix + 'oauth2-refresh-token')
                        deleteCookie(upworkConfig.cookies.prefix + 'oauth2-refresh-token-expires')
                    }
                }
            })
        } else {
            //oAuthSetup()
        }
    }
})