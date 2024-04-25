const upworkConfig = {
    'url': 'https://www.upwork.com',
    'api': {
        'baseURL': 'https://www.upwork.com/api',
        'graphQL': 'https://api.upwork.com/graphql',
        'oca': 'https://www.upwork.com/oca/zendesk/v1'
    },
    'oauth': {
        'clientID': '1d0e4295ebeefec2441f1f85a109d54d',
        'clientSecret': '66ac853a22b1f42e',
        'redirectURL': 'https://support.upwork.com/hc/en-us'
    },
    'cookies': {
        'prefix': 'upwork-help-'
    }
}

const communityURL = 'https://community.upwork.com'

const zdBrands = {
    'main': {
        'url': 'https://support.upwork.com',
        'api': 'https://upwork.zendesk.com/api/v2',
        'hc': {
            'url': 'https://support.upwork.com/hc/en-us',
            'api': 'https://upwork.zendesk.com/api/v2/help_center/en-us'
        },
        'chatbot': {
            'script': 'https://assets.static-upwork.com/helpcenter/agatha/integration.js',
            'key': 'd9c57239-cc77-4faa-bf00-29b0b72fd8cd'
        }
    }
}

// const aswBaseURL = 'http://air30assets.lcl/air3.0'; 
const aswBaseURL = 'https://assets.static-upwork.com/helpcenter/air3.0'; 

const supportTreatments = {
    'community': {
        'name': 'community',
        'title': 'Community',
        'icon': 'agency',
        'description': 'Connect, share and learn with Upwork Community'
    },
    'academy': {
        'name': 'academy',
        'title': 'Academy',
        'icon': 'documents',
        'description': 'Courses and tools for helping you succeed on Upwork'
    },
    'email': {
        'name': 'email',
        'title': 'Create a ticket',
        'icon': 'contract',
        'description': 'Drop us a line. We\'re here to help!'
	},
	'visitor-chat': {
		'name': 'visitor-chat',
		'title': 'Chat with Upwork',
		'icon': 'start-working',
		'description': 'Get immediate support by starting a chat'
	},
    'chat': {
        'name': 'chat',
        'title': 'Chat with Upwork',
        'icon': 'start-working',
        'description': 'Get immediate support by starting a chat'
    },
    'phone': {
        'name': 'phone',
        'title': 'Call us',
        'icon': 'client',
        'description': 'Reach out to us via phone for personalized support'
    }
}

const defaultForm = {
    'form': 3964,
    'fields': {
        'reason': 20007516403091
    },
    'dropdowns': [
        {
            'key': 20007516403091,
            'options': [
                {
                    'key': 'tag_cat_billing',
                    'value': 'Billing'
                },
                {
                    'key': 'tag_cat_connects',
                    'value': 'Connects'
                },
                {
                    'key': 'tag_cat_disputes',
                    'value': 'Disputes'
                },
                {
                    'key': 'tag_cat_earnings',
                    'value': 'Earnings'
                },
                {
                    'key': 'tag_cat_fees',
                    'value': 'Fees'
                },
                {
                    'key': 'tag_cat_get_paid',
                    'value': 'Get Paid'
                },
                {
                    'key': 'tag_cat_identity_verification',
                    'value': 'Identity Verification'
                },
                {
                    'key': 'tag_cat_job_posts',
                    'value': 'Job Posts'
                },
                {
                    'key': 'tag_cat_login_issues',
                    'value': 'Login issues'
                },
                {
                    'key': 'tag_cat_members_permissions',
                    'value': 'Members & Permissions'
                },
                {
                    'key': 'tag_cat_memberships',
                    'value': 'Memberships'
                },
                {
                    'key': 'tag_cat_notifications',
                    'value': 'Notifications'
                },
                {
                    'key': 'tag_cat_onboarding',
                    'value': 'Onboarding'
                },
                {
                    'key': 'tag_cat_payments',
                    'value': 'Payments'
                },
                {
                    'key': 'tag_cat_profile',
                    'value': 'Profile'
                },
                {
                    'key': 'tag_cat_project_catalog',
                    'value': 'Project Catalog'
                },
                {
                    'key': 'tag_cat_request_for_api',
                    'value': 'Request For API'
                },
                {
                    'key': 'tag_cat_search_discovery',
                    'value': 'Search & Discovery'
                },
                {
                    'key': 'tag_cat_system_issues',
                    'value': 'System Issues'
                },
                {
                    'key': 'tag_cat_teams',
                    'value': 'Teams'
                },
                {
                    'key': 'tag_cat_transaction_history',
                    'value': 'Transaction History'
                },
                {
                    'key': 'tag_cat_transaction_reporting',
                    'value': 'Transaction Reporting'
                },
                {
                    'key': 'tag_cat_work_quality',
                    'value': 'Work Quality'
                },
                {
                    'key': 'tag_cat_workroom',
                    'value': 'Workroom'
                },
                {
                    'key': 'tag_cat_other',
                    'value': 'Other'
                }
            ]
        }
    ]
}

const anyHireForm = {
    'form': 4417268207763,
    'fields': {
        'email': 4417282635667,
        'freelancers': 4417282684307,
        'category': 4418945323923
    },
    'dropdowns': [
        {
            'key': 4418945323923,
            'options': [
                {
                    'key': 'anyhire_accounting_consulting_accounting',
                    'value': 'Accounting & Consulting - Accounting'
                },
                {
                    'key': 'anyhire_accounting_consulting_bookkeeping',
                    'value': 'Accounting & Consulting - Bookkeeping'
                },
                {
                    'key': 'anyhire_accounting_consulting_business_analysis',
                    'value': 'Accounting & Consulting - Business Analysis'
                },
                {
                    'key': 'anyhire_accounting_consulting_financial_analysis_modeling',
                    'value': 'Accounting & Consulting - Financial Analysis & Modeling'
                },
                {
                    'key': 'anyhire_accounting_consulting_financial_management_cfo',
                    'value': 'Accounting & Consulting - Financial Management/CFO'
                },
                {
                    'key': 'anyhire_accounting_consulting_hr_administration',
                    'value': 'Accounting & Consulting - HR Administration'
                },
                {
                    'key': 'anyhire_accounting_consulting_instructional_design',
                    'value': 'Accounting & Consulting - Instructional Design'
                },
                {
                    'key': 'anyhire_accounting_consulting_lifestyle_coaching',
                    'value': 'Accounting & Consulting - Lifestyle Coaching'
                },
                {
                    'key': 'anyhire_accounting_consulting_management_consulting',
                    'value': 'Accounting & Consulting - Management Consulting'
                },
                {
                    'key': 'anyhire_accounting_consulting_recruiting',
                    'value': 'Accounting & Consulting - Recruiting'
                },
                {
                    'key': 'anyhire_accounting_consulting_tax_preparation',
                    'value': 'Accounting & Consulting - Tax Preparation'
                },
                {
                    'key': 'anyhire_accounting_consulting_training_development',
                    'value': 'Accounting & Consulting - Training & Development'
                },
                {
                    'key': 'anyhire_admin_support_data_entry',
                    'value': 'Admin Support - Data Entry'
                },
                {
                    'key': 'anyhire_admin_support_online_research',
                    'value': 'Admin Support - Online Research'
                },
                {
                    'key': 'anyhire_admin_support_order_processing',
                    'value': 'Admin Support - Order Processing'
                },
                {
                    'key': 'anyhire_admin_support_project_management',
                    'value': 'Admin Support - Project Management'
                },
                {
                    'key': 'anyhire_admin_support_transcription',
                    'value': 'Admin Support - Transcription'
                },
                {
                    'key': 'anyhire_admin_support_virtual_administrative_assistance',
                    'value': 'Admin Support - Virtual/Administrative Assistance'
                },
                {
                    'key': 'anyhire_customer_service_customer_service',
                    'value': 'Customer Service - Customer Service'
                },
                {
                    'key': 'anyhire_customer_service_tech_support',
                    'value': 'Customer Service - Tech Support'
                },
                {
                    'key': 'anyhire_data_science_analytics_a_b_testing',
                    'value': 'Data Science & Analytics - A/B Testing'
                },
                {
                    'key': 'anyhire_data_science_analytics_data_analytics',
                    'value': 'Data Science & Analytics - Data Analytics'
                },
                {
                    'key': 'anyhire_data_science_analytics_data_engineering',
                    'value': 'Data Science & Analytics - Data Engineering'
                },
                {
                    'key': 'anyhire_data_science_analytics_data_extraction',
                    'value': 'Data Science & Analytics - Data Extraction'
                },
                {
                    'key': 'anyhire_data_science_analytics_data_mining',
                    'value': 'Data Science & Analytics - Data Mining'
                },
                {
                    'key': 'anyhire_data_science_analytics_data_processing',
                    'value': 'Data Science & Analytics - Data Processing'
                },
                {
                    'key': 'anyhire_data_science_analytics_data_visualization',
                    'value': 'Data Science & Analytics - Data Visualization'
                },
                {
                    'key': 'anyhire_data_science_analytics_deep_learning',
                    'value': 'Data Science & Analytics - Deep Learning'
                },
                {
                    'key': 'anyhire_data_science_analytics_experimentation_testing',
                    'value': 'Data Science & Analytics - Experimentation & Testing'
                },
                {
                    'key': 'anyhire_data_science_analytics_knowledge_representation',
                    'value': 'Data Science & Analytics - Knowledge Representation'
                },
                {
                    'key': 'anyhire_data_science_analytics_machine_learning',
                    'value': 'Data Science & Analytics - Machine Learning'
                },
                {
                    'key': 'anyhire_design_creative_2d_animation',
                    'value': 'Design & Creative - 2D Animation'
                },
                {
                    'key': 'anyhire_design_creative_3d_animation',
                    'value': 'Design & Creative - 3D Animation'
                },
                {
                    'key': 'anyhire_design_creative_ar_vr_design',
                    'value': 'Design & Creative - AR/VR Design'
                },
                {
                    'key': 'anyhire_design_creative_acting',
                    'value': 'Design & Creative - Acting'
                },
                {
                    'key': 'anyhire_design_creative_art_direction',
                    'value': 'Design & Creative - Art Direction'
                },
                {
                    'key': 'anyhire_design_creative_audio_editing',
                    'value': 'Design & Creative - Audio Editing'
                },
                {
                    'key': 'anyhire_design_creative_audio_production',
                    'value': 'Design & Creative - Audio Production'
                },
                {
                    'key': 'anyhire_design_creative_brand_identity_design',
                    'value': 'Design & Creative - Brand Identity Design'
                },
                {
                    'key': 'anyhire_design_creative_caricatures_portraits',
                    'value': 'Design & Creative - Caricatures & Portraits'
                },
                {
                    'key': 'anyhire_design_creative_cartoons_comics',
                    'value': 'Design & Creative - Cartoons & Comics'
                },
                {
                    'key': 'anyhire_design_creative_creative_direction',
                    'value': 'Design & Creative - Creative Direction'
                },
                {
                    'key': 'anyhire_design_creative_editorial_design',
                    'value': 'Design & Creative - Editorial Design'
                },
                {
                    'key': 'anyhire_design_creative_fashion_design',
                    'value': 'Design & Creative - Fashion Design'
                },
                {
                    'key': 'anyhire_design_creative_fine_art',
                    'value': 'Design & Creative - Fine Art'
                },
                {
                    'key': 'anyhire_design_creative_game_art',
                    'value': 'Design & Creative - Game Art'
                },
                {
                    'key': 'anyhire_design_creative_graphic_design',
                    'value': 'Design & Creative - Graphic Design'
                },
                {
                    'key': 'anyhire_design_creative_illustration',
                    'value': 'Design & Creative - Illustration'
                },
                {
                    'key': 'anyhire_design_creative_image_editing',
                    'value': 'Design & Creative - Image Editing'
                },
                {
                    'key': 'anyhire_design_creative_jewelry_design',
                    'value': 'Design & Creative - Jewelry Design'
                },
                {
                    'key': 'anyhire_design_creative_local_photography',
                    'value': 'Design & Creative - Local Photography'
                },
                {
                    'key': 'anyhire_design_creative_logo_design',
                    'value': 'Design & Creative - Logo Design'
                },
                {
                    'key': 'anyhire_design_creative_motion_graphics',
                    'value': 'Design & Creative - Motion Graphics'
                },
                {
                    'key': 'anyhire_design_creative_music_composition',
                    'value': 'Design & Creative - Music Composition'
                },
                {
                    'key': 'anyhire_design_creative_music_production',
                    'value': 'Design & Creative - Music Production'
                },
                {
                    'key': 'anyhire_design_creative_musician',
                    'value': 'Design & Creative - Musician'
                },
                {
                    'key': 'anyhire_design_creative_packaging_design',
                    'value': 'Design & Creative - Packaging Design'
                },
                {
                    'key': 'anyhire_design_creative_pattern_design',
                    'value': 'Design & Creative - Pattern Design'
                },
                {
                    'key': 'anyhire_design_creative_presentation_design',
                    'value': 'Design & Creative - Presentation Design'
                },
                {
                    'key': 'anyhire_design_creative_product_industrial_design',
                    'value': 'Design & Creative - Product & Industrial Design'
                },
                {
                    'key': 'anyhire_design_creative_product_photography',
                    'value': 'Design & Creative - Product Photography'
                },
                {
                    'key': 'anyhire_design_creative_singing',
                    'value': 'Design & Creative - Singing'
                },
                {
                    'key': 'anyhire_design_creative_video_editing',
                    'value': 'Design & Creative - Video Editing'
                },
                {
                    'key': 'anyhire_design_creative_video_production',
                    'value': 'Design & Creative - Video Production'
                },
                {
                    'key': 'anyhire_design_creative_videography',
                    'value': 'Design & Creative - Videography'
                },
                {
                    'key': 'anyhire_design_creative_visual_effects',
                    'value': 'Design & Creative - Visual Effects'
                },
                {
                    'key': 'anyhire_design_creative_voice_talent',
                    'value': 'Design & Creative - Voice Talent'
                },
                {
                    'key': 'anyhire_engineering_architecture_3d_modeling_rendering',
                    'value': 'Engineering & Architecture - 3D Modeling & Rendering'
                },
                {
                    'key': 'anyhire_engineering_architecture_architecture',
                    'value': 'Engineering & Architecture - Architecture'
                },
                {
                    'key': 'anyhire_engineering_architecture_biology',
                    'value': 'Engineering & Architecture - Biology'
                },
                {
                    'key': 'anyhire_engineering_architecture_building_information_modeling',
                    'value': 'Engineering & Architecture - Building Information Modeling'
                },
                {
                    'key': 'anyhire_engineering_architecture_cad',
                    'value': 'Engineering & Architecture - CAD'
                },
                {
                    'key': 'anyhire_engineering_architecture_chemical_process_engineering',
                    'value': 'Engineering & Architecture - Chemical & Process Engineering'
                },
                {
                    'key': 'anyhire_engineering_architecture_chemistry',
                    'value': 'Engineering & Architecture - Chemistry'
                },
                {
                    'key': 'anyhire_engineering_architecture_civil_engineering',
                    'value': 'Engineering & Architecture - Civil Engineering'
                },
                {
                    'key': 'anyhire_engineering_architecture_electrical_engineering',
                    'value': 'Engineering & Architecture - Electrical Engineering'
                },
                {
                    'key': 'anyhire_engineering_architecture_electronic_engineering',
                    'value': 'Engineering & Architecture - Electronic Engineering'
                },
                {
                    'key': 'anyhire_engineering_architecture_energy_engineering',
                    'value': 'Engineering & Architecture - Energy Engineering'
                },
                {
                    'key': 'anyhire_engineering_architecture_interior_design',
                    'value': 'Engineering & Architecture - Interior Design'
                },
                {
                    'key': 'anyhire_engineering_architecture_landscape_architecture',
                    'value': 'Engineering & Architecture - Landscape Architecture'
                },
                {
                    'key': 'anyhire_engineering_architecture_logistics_supply_chain_management',
                    'value': 'Engineering & Architecture - Logistics & Supply Chain Management'
                },
                {
                    'key': 'anyhire_engineering_architecture_mathematics',
                    'value': 'Engineering & Architecture - Mathematics'
                },
                {
                    'key': 'anyhire_engineering_architecture_mechanical_engineering',
                    'value': 'Engineering & Architecture - Mechanical Engineering'
                },
                {
                    'key': 'anyhire_engineering_architecture_physics',
                    'value': 'Engineering & Architecture - Physics'
                },
                {
                    'key': 'anyhire_engineering_architecture_stem_tutoring',
                    'value': 'Engineering & Architecture - STEM Tutoring'
                },
                {
                    'key': 'anyhire_engineering_architecture_sourcing_procurement',
                    'value': 'Engineering & Architecture - Sourcing & Procurement'
                },
                {
                    'key': 'anyhire_engineering_architecture_structural_engineering',
                    'value': 'Engineering & Architecture - Structural Engineering'
                },
                {
                    'key': 'anyhire_engineering_architecture_trade_show_design',
                    'value': 'Engineering & Architecture - Trade Show Design'
                },
                {
                    'key': 'anyhire_it_networking_business_applications_development',
                    'value': 'IT & Networking - Business Applications Development'
                },
                {
                    'key': 'anyhire_it_networking_cloud_engineering',
                    'value': 'IT & Networking - Cloud Engineering'
                },
                {
                    'key': 'anyhire_it_networking_database_administration',
                    'value': 'IT & Networking - Database Administration'
                },
                {
                    'key': 'anyhire_it_networking_devops_engineering',
                    'value': 'IT & Networking - Devops Engineering'
                },
                {
                    'key': 'anyhire_it_networking_it_compliance',
                    'value': 'IT & Networking - IT Compliance'
                },
                {
                    'key': 'anyhire_it_networking_it_support',
                    'value': 'IT & Networking - IT Support'
                },
                {
                    'key': 'anyhire_it_networking_information_security',
                    'value': 'IT & Networking - Information Security'
                },
                {
                    'key': 'anyhire_it_networking_network_administration',
                    'value': 'IT & Networking - Network Administration'
                },
                {
                    'key': 'anyhire_it_networking_network_security',
                    'value': 'IT & Networking - Network Security'
                },
                {
                    'key': 'anyhire_it_networking_solutions_architecture',
                    'value': 'IT & Networking - Solutions Architecture'
                },
                {
                    'key': 'anyhire_it_networking_systems_administration',
                    'value': 'IT & Networking - Systems Administration'
                },
                {
                    'key': 'anyhire_it_networking_systems_engineering',
                    'value': 'IT & Networking - Systems Engineering'
                },
                {
                    'key': 'anyhire_legal_business_corporate_law',
                    'value': 'Legal - Business & Corporate Law'
                },
                {
                    'key': 'anyhire_legal_general_counsel',
                    'value': 'Legal - General Counsel'
                },
                {
                    'key': 'anyhire_legal_immigration_law',
                    'value': 'Legal - Immigration Law'
                },
                {
                    'key': 'anyhire_legal_intellectual_property_law',
                    'value': 'Legal - Intellectual Property Law'
                },
                {
                    'key': 'anyhire_legal_international_law',
                    'value': 'Legal - International Law'
                },
                {
                    'key': 'anyhire_legal_labor_employment_law',
                    'value': 'Legal - Labor & Employment Law'
                },
                {
                    'key': 'anyhire_legal_paralegal',
                    'value': 'Legal - Paralegal'
                },
                {
                    'key': 'anyhire_legal_regulatory_law',
                    'value': 'Legal - Regulatory Law'
                },
                {
                    'key': 'anyhire_legal_securities_finance_law',
                    'value': 'Legal - Securities & Finance Law'
                },
                {
                    'key': 'anyhire_legal_tax_law',
                    'value': 'Legal - Tax Law'
                },
                {
                    'key': 'anyhire_sales_marketing_brand_strategy',
                    'value': 'Sales & Marketing - Brand Strategy'
                },
                {
                    'key': 'anyhire_sales_marketing_campaign_management',
                    'value': 'Sales & Marketing - Campaign Management'
                },
                {
                    'key': 'anyhire_sales_marketing_community_management',
                    'value': 'Sales & Marketing - Community Management'
                },
                {
                    'key': 'anyhire_sales_marketing_content_strategy',
                    'value': 'Sales & Marketing - Content Strategy'
                },
                {
                    'key': 'anyhire_sales_marketing_digital_marketing',
                    'value': 'Sales & Marketing - Digital Marketing'
                },
                {
                    'key': 'anyhire_sales_marketing_email_marketing',
                    'value': 'Sales & Marketing - Email Marketing'
                },
                {
                    'key': 'anyhire_sales_marketing_lead_generation',
                    'value': 'Sales & Marketing - Lead Generation'
                },
                {
                    'key': 'anyhire_sales_marketing_market_research',
                    'value': 'Sales & Marketing - Market Research'
                },
                {
                    'key': 'anyhire_sales_marketing_marketing_automation',
                    'value': 'Sales & Marketing - Marketing Automation'
                },
                {
                    'key': 'anyhire_sales_marketing_marketing_strategy',
                    'value': 'Sales & Marketing - Marketing Strategy'
                },
                {
                    'key': 'anyhire_sales_marketing_public_relations',
                    'value': 'Sales & Marketing - Public Relations'
                },
                {
                    'key': 'anyhire_sales_marketing_sales_business_development',
                    'value': 'Sales & Marketing - Sales & Business Development'
                },
                {
                    'key': 'anyhire_sales_marketing_search_engine_marketing',
                    'value': 'Sales & Marketing - Search Engine Marketing'
                },
                {
                    'key': 'anyhire_sales_marketing_search_engine_optimization',
                    'value': 'Sales & Marketing - Search Engine Optimization'
                },
                {
                    'key': 'anyhire_sales_marketing_social_media_marketing',
                    'value': 'Sales & Marketing - Social Media Marketing'
                },
                {
                    'key': 'anyhire_sales_marketing_telemarketing',
                    'value': 'Sales & Marketing - Telemarketing'
                },
                {
                    'key': 'anyhire_translation_language_localization',
                    'value': 'Translation - Language Localization'
                },
                {
                    'key': 'anyhire_translation_language_tutoring',
                    'value': 'Translation - Language Tutoring'
                },
                {
                    'key': 'anyhire_translation_legal_translation',
                    'value': 'Translation - Legal Translation'
                },
                {
                    'key': 'anyhire_translation_medical_translation',
                    'value': 'Translation - Medical Translation'
                },
                {
                    'key': 'anyhire_translation_technical_translation',
                    'value': 'Translation - Technical Translation'
                },
                {
                    'key': 'anyhire_translation_translation',
                    'value': 'Translation - Translation'
                },
                {
                    'key': 'anyhire_dev_ar_vr_development',
                    'value': 'Web, Mobile, & Software Dev - AR/VR Development'
                },
                {
                    'key': 'anyhire_dev_automation_testing',
                    'value': 'Web, Mobile, & Software Dev - Automation Testing'
                },
                {
                    'key': 'anyhire_dev_back_end_development',
                    'value': 'Web, Mobile, & Software Dev - Back End Development'
                },
                {
                    'key': 'anyhire_dev_cms_development',
                    'value': 'Web, Mobile, & Software Dev - CMS Development'
                },
                {
                    'key': 'anyhire_dev_coding_tutoring',
                    'value': 'Web, Mobile, & Software Dev - Coding Tutoring'
                },
                {
                    'key': 'anyhire_dev_database_development',
                    'value': 'Web, Mobile, & Software Dev - Database Development'
                },
                {
                    'key': 'anyhire_dev_desktop_software_development',
                    'value': 'Web, Mobile, & Software Dev - Desktop Software Development'
                },
                {
                    'key': 'anyhire_dev_ecommerce_development',
                    'value': 'Web, Mobile, & Software Dev - Ecommerce Development'
                },
                {
                    'key': 'anyhire_dev_emerging_tech',
                    'value': 'Web, Mobile, & Software Dev - Emerging Tech'
                },
                {
                    'key': 'anyhire_dev_firmware_development',
                    'value': 'Web, Mobile, & Software Dev - Firmware Development'
                },
                {
                    'key': 'anyhire_dev_front_end_development',
                    'value': 'Web, Mobile, & Software Dev - Front End Development'
                },
                {
                    'key': 'anyhire_dev_full_stack_development',
                    'value': 'Web, Mobile, & Software Dev - Full Stack Development'
                },
                {
                    'key': 'anyhire_dev_game_development',
                    'value': 'Web, Mobile, & Software Dev - Game Development'
                },
                {
                    'key': 'anyhire_dev_manual_testing',
                    'value': 'Web, Mobile, & Software Dev - Manual Testing'
                },
                {
                    'key': 'anyhire_dev_mobile_app_development',
                    'value': 'Web, Mobile, & Software Dev - Mobile App Development'
                },
                {
                    'key': 'anyhire_dev_mobile_design',
                    'value': 'Web, Mobile, & Software Dev - Mobile Design'
                },
                {
                    'key': 'anyhire_dev_mobile_game_development',
                    'value': 'Web, Mobile, & Software Dev - Mobile Game Development'
                },
                {
                    'key': 'anyhire_dev_product_management',
                    'value': 'Web, Mobile, & Software Dev - Product Management'
                },
                {
                    'key': 'anyhire_dev_prototyping',
                    'value': 'Web, Mobile, & Software Dev - Prototyping'
                },
                {
                    'key': 'anyhire_dev_scripting_automation',
                    'value': 'Web, Mobile, & Software Dev - Scripting & Automation'
                },
                {
                    'key': 'anyhire_dev_scrum_master',
                    'value': 'Web, Mobile, & Software Dev - Scrum Master'
                },
                {
                    'key': 'anyhire_dev_ux_ui_design',
                    'value': 'Web, Mobile, & Software Dev - UX/UI Design'
                },
                {
                    'key': 'anyhire_dev_user_research',
                    'value': 'Web, Mobile, & Software Dev - User Research'
                },
                {
                    'key': 'anyhire_dev_web_design',
                    'value': 'Web, Mobile, & Software Dev - Web Design'
                },
                {
                    'key': 'anyhire_writing_business_writing',
                    'value': 'Writing - Business Writing'
                },
                {
                    'key': 'anyhire_writing_career_coaching',
                    'value': 'Writing - Career Coaching'
                },
                {
                    'key': 'anyhire_writing_content_writing',
                    'value': 'Writing - Content Writing'
                },
                {
                    'key': 'anyhire_writing_copywriting',
                    'value': 'Writing - Copywriting'
                },
                {
                    'key': 'anyhire_writing_creative_writing',
                    'value': 'Writing - Creative Writing'
                },
                {
                    'key': 'anyhire_writing_editing_proofreading',
                    'value': 'Writing - Editing & Proofreading'
                },
                {
                    'key': 'anyhire_writing_ghostwriting',
                    'value': 'Writing - Ghostwriting'
                },
                {
                    'key': 'anyhire_writing_grant_writing',
                    'value': 'Writing - Grant Writing'
                },
                {
                    'key': 'anyhire_writing_scriptwriting',
                    'value': 'Writing - Scriptwriting'
                },
                {
                    'key': 'anyhire_writing_technical_writing',
                    'value': 'Writing - Technical Writing'
                },
                {
                    'key': 'anyhire_writing_writing_tutoring',
                    'value': 'Writing - Writing Tutoring'
                }
            ]
        }
    ]
}

const appealForm = {
    'form': 5183853486483,
    'article': 5313574196627,
    'fields':{
        'country':12706735727763
    }
}

const byocForm = {
    'form': 14837372713107,
    'fields': {
        'signup': 14837459626131,
        'haveClient': 14837481433491
    }
}

const circumventionForm = {
    'form': 360002699453,
    'fields': {
        'name': 360033682713,
        'email': 360035489513,
        'reportingCause': 360033682753
    }
}

const directContractForm = {
    'form': 360002736194,
    'articles': [
        360025040794,
        360025200853
    ],
    'fields': {
        'url': 360031559393
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

const feedbackRemovalForm = {
    'form': 9337355640851,
    'fields': {
        'impacted': 9337455080467,
        'howImpacted': 9372892730515,
        'contractID': 9337513238419
    },
    'radios': [
        {
            'key': 9337455080467,
            'options': [
                {
                    'key': 'crisis_impacted_yes',
                    'value': 'Yes'
                },
                {
                    'key': 'crisis_impacted_no',
                    'value': 'No'
                }
            ]
        }
    ]
}

const gssoForm = {
    'form': 360002199633,
    'fields': {
        'contactEmail': 360030943094,
        'phoneNumber': 360012395874,
        'street': 360030943134,
        'city': 360030943393,
        'state': 17992823848723,
        'zipCode': 360030943413,
        'dateJoining': 360012354173,
        'country': 360012396374,
        'creditCard': 360012360973,
        'dateTransaction': 360014307313,
        'datePaypal': 360014225334,
    }
}

const selfAuthForm = {
    'form': 360000464433,
    'fields': {
        'contactEmail': 360030943094,
        'phoneNumber': 360012395874,
        'street': 360030943134,
        'city': 360030943393,
        'state': 17992823848723,
        'zipCode': 360030943413,
        'dateJoining': 360012354173,
        'country': 360012396374,
        'creditCard': 360012360973,
        'dateTransaction': 360014307313,
        'datePaypal': 360014225334,
        'tempPassword': 1500005980981,
        'userFeedback': 1500005981001,
        'otherFeedback': 1500005981041,
        'addtionalQuestions': 1500005981021,
        'source': 1500006034002
    },
    'radios': [
        {
            'key': 1500005980981,
            'options': [
                {
                    'key': 'temp_password_yes',
                    'value': 'Yes'
                },
                {
                    'key': 'temp_password_no',
                    'value': 'No'
                }
            ]
        }
    ],
    'dropdowns': [
        {
            'key': 1500005981001,
            'options': [
                {
                    'key': 'help_improve_new_mobile_device',
                    'value': 'I\'m using a new mobile device and my authenticator app doesn\'t work anymore'
                },
                {
                    'key': 'help_improve_new_number',
                    'value': 'I have a new phone number and text message verification doesn\'t work anymore'
                },
                {
                    'key': 'help_improve_never_received_code',
                    'value': 'I never received the code'
                },
                {
                    'key': 'help_improve_no_mobile_device',
                    'value': 'I no longer have a mobile device'
                },
                {
                    'key': 'help_improve_no_access_email',
                    'value': 'I don\'t have access to the email address the code was sent to'
                },
                {
                    'key': 'help_improve_other',
                    'value': 'Other'
                }
            ]
        }
    ]
}

const videoVoiceForm = {
    'form': 360004290473,
    'fields': {
        'date': 360045762493,
        'time': 360045762513,
        'device': 360045762593,
        'troubleshooting': 360045784114
    }
}

const disputeMetaFields = [
    {
        'id':'81479788',
        'key':'contract-id',
        'title':'Contract ID'
    },
    {
        'id':'81088407',
        'key':'dispute-date',
        'title':'Dispute date'
    },
    {
        'id':'81479908',
        'key':'amount-escrow',
        'title':'Amount in escrow'
    }
]

const catalog = {
    'categories': [
        360004530933
    ],
    'sections': [
        360011736913,
        360010616794,
        360010616814
    ],
    'articles': [
        360057397533,
        360058122033,
        360058121913,
        360058234233
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

const kbLinks = {
    'articles': {
        'privateProfile': 211060298,
        'financialHold': 360011239853,
        'videoVoice': 360050212774
    }
}

const kbMatrics = [
    {
        'scope': 'freelancer',
        'tiles': [
            {
                'id': '360001189113',
                'type': 'categories',
                'icon': 'icon-svg-get-started',
                'title': 'Get Started',
                'description': 'How It Works, Getting Started, Fees & Protection'
            },
            {
                'id': '360001189093',
                'type': 'categories',
                'icon': 'icon-svg-profile',
                'title': 'Build Your Profile',
                'description': 'Profile Settings, Edit Profile, Freelancer Programs, Stats'
            },
            {
                'id': '360001181034',
                'type': 'categories',
                'icon': 'icon-svg-projects',
                'title': 'Find a Project',
                'description': 'Search, Send Proposals, Interview, Accept Offers'
            },
            {
                'id': '360001189073',
                'type': 'categories',
                'icon': 'icon-svg-start-working',
                'title': 'Start Working',
                'description': 'Messages, Work Diary, Contracts, Feedback'
            },
            {
                'id': '360001181014',
                'type': 'categories',
                'icon': 'icon-svg-get-paid',
                'title': 'Get Paid',
                'description': 'Get Paid, Payment Options, Reports, Earnings, Taxes'
            },
            {
                'id': '360001189053',
                'type': 'categories',
                'icon': 'icon-svg-payments',
                'title': 'Payment Issues',
                'description': 'Payment Schedule, Troubleshooting, Disputes'
            },
            {
                'id': '360001180994',
                'type': 'categories',
                'icon': 'icon-svg-badge',
                'title': 'Account',
                'description': 'Account Settings, Service Options, Identity Verification'
            },
            {
                'id': '360001180954',
                'type': 'categories',
                'icon': 'icon-svg-apps',
                'title': 'Apps',
                'description': 'Mobile App, Desktop App, Time Tracker'
            },
            {
                'id': '360001189033',
                'type': 'categories',
                'icon': 'icon-svg-trust-safety',
                'title': 'Trust & Safety',
                'description': 'Terms of Service, Online Safety, Personal Data'
            },
            {
                'id': '115002435568',
                'type': 'categories',
                'icon': 'icon-svg-api',
                'title': 'Upwork API',
                'description': 'Development Resources'
            },
            {
                'id': '360004530933',
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
                'id': '360001189113',
                'type': 'categories',
                'icon': 'icon-svg-get-started',
                'title': 'Get Started',
                'description': 'How It Works, Getting Started, Fees & Protection'
            },
            {
                'id': '360001189173',
                'type': 'categories',
                'icon': 'icon-svg-agency',
                'title': 'Build Your Agency',
                'description': 'Agency Settings, Edit Profile, Agency Programs, Stats'
            },
            {
                'id': '360001181034',
                'type': 'categories',
                'icon': 'icon-svg-projects',
                'title': 'Find a Project',
                'description': 'Search, Send Proposals, Interview, Accept Offers'
            },
            {
                'id': '360001189073',
                'type': 'categories',
                'icon': 'icon-svg-start-working',
                'title': 'Start Working',
                'description': 'Messages, Work Diary, Contracts, Feedback'
            },
            {
                'id': '360001181014',
                'type': 'categories',
                'icon': 'icon-svg-get-paid',
                'title': 'Get Paid',
                'description': 'Get Paid, Payment Options, Reports, Earnings, Taxes'
            },
            {
                'id': '360001189053',
                'type': 'categories',
                'icon': 'icon-svg-payments',
                'title': 'Payment Issues',
                'description': 'Payment Schedule, Troubleshooting, Disputes'
            },
            {
                'id': '360001180994',
                'type': 'categories',
                'icon': 'icon-svg-badge',
                'title': 'Account',
                'description': 'Account Settings, Service Options, Identity Verification'
            },
            {
                'id': '360001180954',
                'type': 'categories',
                'icon': 'icon-svg-apps',
                'title': 'Apps',
                'description': 'Mobile App, Desktop App, Time Tracker'
            },
            {
                'id': '360001189033',
                'type': 'categories',
                'icon': 'icon-svg-trust-safety',
                'title': 'Trust & Safety',
                'description': 'Terms of Service, Online Safety, Personal Data'
            },
            {
                'id': '115002435568',
                'type': 'categories',
                'icon': 'icon-svg-api',
                'title': 'Upwork API',
                'description': 'Development Resources'
            },
            {
                'id': '360004530933',
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
                'id': '360001184194',
                'type': 'categories',
                'icon': 'icon-svg-get-started',
                'title': 'Get Started',
                'description': 'How It Works, Getting Started, Fees & Protection'
            },
            {
                'id': '360001184214',
                'type': 'categories',
                'icon': 'icon-svg-find-freelancer',
                'title': 'Find a Freelancer',
                'description': 'Post a Job, Find a Freelancer or Agency, Invite to Apply'
            },
            {
                'id': '360001184234',
                'type': 'categories',
                'icon': 'icon-svg-start-working',
                'title': 'Make a Hire',
                'description': 'Evaluate Proposals, Interview Freelancers, Send an Offer'
            },
            {
                'id': '360001191213',
                'type': 'categories',
                'icon': 'icon-svg-projects',
                'title': 'Manage Your Project',
                'description': 'Manage Contracts, Contracts, Feedback'
            },
            {
                'id': '360001191233',
                'type': 'categories',
                'icon': 'icon-svg-payments',
                'title': 'Pay for Work',
                'description': 'Billing, Make Payments, Reports, Invoices, Disputes'
            },
            {
                'id': '360001191293',
                'type': 'categories',
                'icon': 'icon-svg-service',
                'title': 'Service Options',
                'description': 'Upwork Basic, Upwork Pro, Upwork Enterprise'
            },
            {
                'id': '360001191313',
                'type': 'categories',
                'icon': 'icon-svg-badge',
                'title': 'Account',
                'description': 'Account Settings, Manage Teams, Team Permissions'
            },
            {
                'id': '360001180954',
                'type': 'categories',
                'icon': 'icon-svg-apps',
                'title': 'Apps',
                'description': 'Mobile App, Desktop App, Time Tracker'
            },
            {
                'id': '360001189033',
                'type': 'categories',
                'icon': 'icon-svg-trust-safety',
                'title': 'Trust & Safety',
                'description': 'Terms of Service, Online Safety, Personal Data'
            },
            {
                'id': '115002435568',
                'type': 'categories',
                'icon': 'icon-svg-api',
                'title': 'Upwork API',
                'description': 'Development Resources'
            },
            {
                'id': '360004530933',
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
                'id': '17870954115475',
                'type': 'categories',
                'icon': 'icon-svg-get-started',
                'title': 'Getting Started',
                'description': 'Learn about Enterprise and set up your account'
            },
            {
                'id': '17871049573779',
                'type': 'categories',
                'icon': 'icon-svg-find-freelancer',
                'title': 'Connect with Talent',
                'description': 'Source talent on Upwork or from your own network'
            },
            {
                'id': '17871165267987',
                'type': 'categories',
                'icon': 'icon-svg-enterprise-services',
                'title': 'Hiring and Onboarding',
                'description': 'Post jobs, send offers, review proposals, and hire'
            },
            {
                'id': '17871234924307',
                'type': 'categories',
                'icon': 'icon-svg-start-working',
                'title': 'Working with Talent',
                'description': 'Review talent\’s work and manage contracts'
            },
            {
                'id': '17871210774419',
                'type': 'categories',
                'icon': 'icon-svg-get-paid',
                'title': 'Managing Financials',
                'description': 'Learn about billing, fees, purchase orders, reports, and taxes'
            },
            {
                'id': '17871351046547',
                'type': 'categories',
                'icon': 'icon-svg-apps',
                'title': 'Apps and Integrations',
                'description': 'Use apps and integrations for a seamless experience on Upwork'
            },
            {
                'id': '17871335319187',
                'type': 'categories',
                'icon': 'icon-svg-trust-safety',
                'title': 'Trust & Safety',
                'description': 'See Terms of Service, online safety tips and best practices'
            },
            {
                'id': '17871353237779',
                'type': 'categories',
                'icon': 'icon-svg-api',
                'title': 'Upwork API',
                'description': 'Development Resources'
            }
        ]
    },
    {
        'scope': 'agent',
        'tiles': [
            {
                'id': '201367127',
                'type': 'categories',
                'icon': 'icon-svg-client',
                'title': 'Client',
                'description': 'Client-specific concerns e.g. getting started, job posts, contracts, billing method, etc.'
            },
            {
                'id': '201362788',
                'type': 'categories',
                'icon': 'icon-svg-find-freelancer',
                'title': 'Freelancer',
                'description': 'Freelancer-specific concerns e.g. getting started, proposals, contracts, getting paid, etc.'
            },
            {
                'id': '360001114814',
                'type': 'categories',
                'icon': 'icon-svg-technical-support',
                'title': 'Technical Issues',
                'description': 'Troubleshooting tech issues, when to escalate, & TS FAQ\'s'
            },
            {
                'id': '360001114874',
                'type': 'categories',
                'icon': 'icon-svg-case',
                'title': 'Other Depts',
                'description': 'Specific cases another dept. is in charge of and/or handles & when to escalate'
            },
            {
                'id': '201362688',
                'type': 'categories',
                'icon': 'icon-svg-policies',
                'title': 'Policies & Processes',
                'description': 'Applies to all parties e.g. CS attendance policy, TL Only processes, Legal issues, general info, etc.'
            },
            {
                'id': '201362738',
                'type': 'categories',
                'icon': 'icon-svg-hire',
                'title': 'New Hire',
                'description': 'For all, but a great place for New Hires! View videos, agent resources, general product info, ticket handling, etc.'
            },
            {
                'id': '360004530933',
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
                'title': 'Certificate of Earnings',
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
                'title': 'Certificate of Earnings',
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
                'link': 'articles/211067668'
            },
            {
                'title': 'Edit Account Information',
                'description': 'Update your account info',
                'link': 'articles/211067528'
            },
            {
                'title': 'Profile Changed to "Private"',
                'description': 'Change your profile back to public',
                'link': 'articles/115003975967'
            },
            {
                'title': 'Profile Application Declined',
                'description': 'How admission to Upwork works',
                'link': 'articles/214180797'
            },
            {
                'title': 'Use Connects',
                'description': 'Using and purchasing Connects',
                'link': 'articles/211062898'
            },
            {
                'title': 'Manage How You Get Paid',
                'description': 'Getting paid through Upwork',
                'link': 'articles/211060918'
            },
            {
                'title': 'Profile Tips and Best Practices',
                'description': 'Tips for crafting a great profile',
                'link': 'articles/211063208'
            },
            {
                'title': 'Membership Plans',
                'description': 'Learn about Upwork memberships',
                'link': 'articles/211062888'
            },
            {
                'title': 'Weekly Billing Cycle',
                'description': 'How billing periods work',
                'link': 'articles/211063698'
            },
            {
                'title': 'Install the Desktop App',
                'description': 'Using the Upwork time tracker',
                'link': 'articles/211064088'
            }
        ]
    },
    {
        'scope': 'agency',
        'links': [
            {
                'title': 'Staying Safe on Upwork',
                'description': 'Online safety best practices',
                'link': 'articles/211067668'
            },
            {
                'title': 'Create an Agency',
                'description': 'How to build an agency',
                'link': 'articles/211067598'
            },
            {
                'title': 'Profile Changed to "Private"',
                'description': 'Change your profile back to public',
                'link': 'articles/115003975967'
            },
            {
                'title': 'Agency Plus',
                'description': 'Managing your agency membership',
                'link': 'articles/211062958'
            },
            {
                'title': 'Agency Profile',
                'description': 'Tips for creating an amazing profile',
                'link': 'articles/360009646433'
            },
            {
                'title': 'Manage Agency Roster',
                'description': 'Managing your team on Upwork',
                'link': 'articles/360009524094'
            },
            {
                'title': 'Manage How You Get Paid',
                'description': 'Getting paid through Upwork',
                'link': 'articles/211060918'
            },
            {
                'title': 'Membership Plans',
                'description': 'Learn about Upwork memberships',
                'link': 'articles/211062888'
            },
            {
                'title': 'Weekly Billing Cycle',
                'description': 'How billing periods work',
                'link': 'articles/211063698'
            },
            {
                'title': 'Install the Desktop App',
                'description': 'Using the Upwork time tracker',
                'link': 'articles/211064088'
            }
        ]
    },
    {
        'scope': 'client',
        'links': [
            {
                'title': 'Staying Safe on Upwork',
                'description': 'Online safety best practices',
                'link': 'articles/211067668'
            },
            {
                'title': 'Enable or Disable Manual Time',
                'description': 'Allowing manual time on contracts',
                'link': 'articles/211062308'
            },
            {
                'title': 'Client Payment Processing Fees',
                'description': 'How processing fees work',
                'link': 'articles/218375638'
            },
            {
                'title': 'Service Options',
                'description': 'Learn about Upwork memberships',
                'link': 'categories/360001191293'
            },
            {
                'title': 'Use Messages',
                'description': 'Communicating through Upwork',
                'link': 'articles/211067768'
            },
            {
                'title': 'Be a Client and a Freelancer',
                'description': 'Utilizing multiple account types',
                'link': 'articles/211067558'
            },
            {
                'title': 'Billing Methods',
                'description': 'Setting up a billing method',
                'link': 'articles/211067988'
            },
            {
                'title': 'Request a Refund',
                'description': 'How to request a refund',
                'link': 'articles/211062088'
            },
            {
                'title': 'Upwork Payment Protection',
                'description': 'How your payments are protected',
                'link': 'articles/211062568'
            },
            {
                'title': 'Viewing the Work Diary',
                'description': 'Record of your freelancer\'s activity',
                'link': 'articles/211062278'
            }
        ]
    },
    {
        'scope': 'enterprise',
        'links': [
            {
                'title': 'Staying Safe on Upwork',
                'description': 'Online safety best practices',
                'link': 'articles/211067668'
            },
            {
                'title': 'Enterprise Onboarding',
                'description': 'Onboarding your new hire',
                'link': 'articles/226686528'
            },
            {
                'title': 'Compliance Services',
                'description': 'Enrolling in compliance services',
                'link': 'articles/226526647'
            },
            {
                'title': 'Talent Sourcing',
                'description': 'Utilizing your Upwork sourcing team',
                'link': 'articles/360001650667'
            },
            {
                'title': 'Use Messages',
                'description': 'Communicating through Upwork',
                'link': 'articles/211067768'
            },
            {
                'title': 'Hiring with Upwork Payroll',
                'description': 'Paying employees through payroll',
                'link': 'articles/211062518'
            },
            {
                'title': 'Enterprise Billing',
                'description': 'Setting up a billing method',
                'link': 'articles/226529107'
            },
            {
                'title': 'Request a Refund',
                'description': 'How to request a refund',
                'link': 'articles/211062088'
            },
            {
                'title': 'Upwork Payment Protection',
                'description': 'How your payments are protected',
                'link': 'articles/211062568'
            },
            {
                'title': 'Request an API Key',
                'description': 'Integrate with the Upwork API',
                'link': 'articles/115015857647'
            }
        ]
    },
    {
        'scope': 'agent',
        'links': [
            {
                'title': 'Staying Safe on Upwork',
                'description': 'Online safety best practices',
                'link': 'articles/211067668'
            },
            {
                'title': 'Job Success Score',
                'description': 'Measure of a FL\'s or Agency\'s client satisfaction',
                'link': 'articles/360010413033'
            },
            {
                'title': 'Identity Verification',
                'description': 'Routine requests to verify identities',
                'link': 'articles/360010246813'
            },
            {
                'title': 'Freelancer MQ Suspensions',
                'description': 'MQ-specific actions, zero tolerance, time wasters, unsuccessful FLs',
                'link': 'articles/360010871934'
            },
            {
                'title': 'Mediation & Disputes',
                'description': 'When to send to Mediation Support',
                'link': 'articles/360010489494'
            },
            {
                'title': 'MQ Escalation Directory',
                'description': 'Guide on MQ\'s process paths',
                'link': 'articles/360010802953'
            },
            {
                'title': 'Client Membership Plans',
                'description': 'Client Plans: Basic, Plus, and Business',
                'link': 'articles/360017925953'
            },
            {
                'title': 'Withdrawal Issues',
                'description': 'Withdrawal issues, tracers, and recalls',
                'link': 'articles/360010182473'
            },
            {
                'title': 'Edit or Remove Feedback',
                'description': 'Feedback FAQs and process map',
                'link': 'articles/360010525033'
            },
            {
                'title': 'Tech Support Best Practices',
                'description': 'Tech Support troubleshooting and bug escalation',
                'link': 'articles/360010367733'
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
            'destination': '360002707693'
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
            'source': '18259040056851',
            'destination': '17978069236627'
        },
        {
            'source': '211067618',
            'destination': '1500007568141'
        },
        {
            'source': '211062108',
            'destination': '211062568'
        },
        {
            'source': '360000525448',
            'destination': '360025295713'
        },
        {
            'source': '211067878',
            'destination': ''
        },
        {
            'source': '360021891994',
            'destination': ''
        },
        {
            'source': '115006099287',
            'destination': '360049702614'
        },
        {
            'source': '360001662588',
            'destination': '360009491414'
        },
        {
            'source': '115006097327',
            'destination': '211068358'
        },
        {
            'source': '211062948',
            'destination': '211062958'
        },
        {
            'source': '61866380',
            'destination': '211062958'
        },
        {
            'source': '211062928',
            'destination': '211062958'
        },
        {
            'source': '360001650607',
            'destination': '211062518'
        },
        {
            'source': '211068008',
            'destination': '211068038'
        },
        {
            'source': '115001499067',
            'destination': '360011640014'
        },
        {
            'source': '115001497187',
            'destination': '360011640014'
        },
        {
            'source': '115001497847',
            'destination': '360011640014'
        },
        {
            'source': '115001497247',
            'destination': '360011640014'
        },
        {
            'source': '115001546028',
            'destination': '360011640014'
        },
        {
            'source': '115001497307',
            'destination': '360011640014'
        },
        {
            'source': '115001544448',
            'destination': '360011640014'
        },
        {
            'source': '115001497447',
            'destination': '360011640014'
        },
        {
            'source': '115001546048',
            'destination': '360011640014'
        },
        {
            'source': '115001544388',
            'destination': '360011640014'
        },
        {
            'source': '115001544168',
            'destination': '360011640014'
        },
        {
            'source': '115001544768',
            'destination': '360011640014'
        },
        {
            'source': '235005488',
            'destination': '360011640014'
        },
        {
            'source': '211063858',
            'destination': '360011640014'
        },
        {
            'source': '115001544068',
            'destination': '360011640014'
        },
        {
            'source': '360001681567',
            'destination': '211068198'
        },
        {
            'source': '360009435054',
            'destination': '211068198'
        },
        {
            'source': '226684828',
            'destination': '211063668'
        },
        {
            'source': '360001411448',
            'destination': '211068218'
        },
        {
            'source': '360001416887',
            'destination': '360000980507'
        },
        {
            'source': '360001411148',
            'destination': '360000980507'
        },
        {
            'source': '360001416847',
            'destination': '360000980407'
        },
        {
            'source': '3600016807',
            'destination': '360000980507'
        },
        {
            'source': '360001411128',
            'destination': '360000990268'
        },
        {
            'source': '360001662908',
            'destination': '211068188'
        },
        {
            'source': '360001411508',
            'destination': '211062378'
        },
        {
            'source': '360001663068',
            'destination': '211062218'
        },
        {
            'source': '360001681607',
            'destination': '211063618'
        },
        {
            'source': '360001650647',
            'destination': '211063418'
        },
        {
            'source': '360001416767',
            'destination': '211062248'
        },
        {
            'source': '226685308',
            'destination': '211063408'
        },
        {
            'source': '360001663028',
            'destination': '211063588'
        },
        {
            'source': '360001662968',
            'destination': '211063608'
        },
        {
            'source': '360001237148',
            'destination': '211067588'
        },
        {
            'source': '226486827',
            'destination': '218373797'
        },
        {
            'source': '214754938',
            'destination': '211064058'
        },
        {
            'source': '215465597',
            'destination': '211064058'
        },
        {
            'source': '214754758',
            'destination': '211064058'
        },
        {
            'source': '215469327',
            'destination': '211064058'
        },
        {
            'source': '226342267',
            'destination': '211064058'
        },
        {
            'source': '215469277',
            'destination': '211064058'
        },
        {
            'source': '211063738',
            'destination': '211060918'
        },
        {
            'source': '211063728',
            'destination': '211060918'
        },
        {
            'source': '115013151187',
            'destination': '211067708'
        },
        {
            'source': '211063148',
            'destination': '360016252373'
        },
        {
            'source': '115003289088',
            'destination': '360016252373'
        },
        {
            'source': '211063158',
            'destination': '360016252373'
        },
        {
            'source': '211060358',
            'destination': '360016252373'
        },
        {
            'source': '215650488',
            'destination': '360016252373'
        },
        {
            'source': '211060228',
            'destination': '360016252373'
        },
        {
            'source': '211060248',
            'destination': '360016252373'
        },
        {
            'source': '216293377',
            'destination': '360016252373'
        },
        {
            'source': '211060408',
            'destination': '360016252373'
        },
        {
            'source': '211063218',
            'destination': '360016144974'
        },
        {
            'source': '211063178',
            'destination': '360016144974'
        },
        {
            'source': '211060568',
            'destination': '360016144974'
        },
        {
            'source': '211060238',
            'destination': '360016144974'
        },
        {
            'source': '360000990348',
            'destination': '360000980507'
        },
        {
            'source': '360000980467',
            'destination': '360000980507'
        },
        {
            'source': '360000990248',
            'destination': '360000980507'
        }
    ]
}

const kbMirrors = {
    'categories': [
        {
            'mirror': '360001184254',
            'items': [
                {
                    'id': '360002713933',
                    'title': ' Account Settings'
                }
            ]
        },
        {
            'mirror': '360001191333',
            'items': [
                {
                    'id': '360002713853',
                    'title': 'Disputes'
                },
                {
                    'id': '360002679754',
                    'title': 'Reports &amp; Invoices'
                }
            ]
        }
    ],
    'sections': [
        {
            'mirror': '360002784473',
            'items': [
                {
                    'id': '211067938',
                    'title': 'Pay for Hourly Contracts'
                },
                {
                    'id': '360000990428',
                    'title': 'Fixed-Price Job Offer Deposits'
                },
                {
                    'id': '115015915467',
                    'title': 'Split Balance Between Billing Methods'
                },
                {
                    'id': '115006419987',
                    'title': 'Pay Past-Due Balance'
                },
                {
                    'id': '211062518',
                    'title': 'Hiring with Upwork Payroll'
                },
                {
                    'id': '211067918',
                    'title': 'Tax Requirements'
                },
                {
                    'id': '360024257434',
                    'title': 'International Hiring with Upwork Payroll'
                }
            ]
        },
        {
            'mirror': '360002670234',
            'items': [
                {
                    'id': '211068348',
                    'title': 'Contract Paused'
                },
                {
                    'id': '211068428',
                    'title': 'End Your Contract'
                },
                {
                    'id': '115006647007',
                    'title': 'Propose Another Contract'
                }
            ]
        },
        {
            'mirror': '360002679874',
            'items': [
                {
                    'id': '211063338',
                    'title': 'Enable Teams'
                },
                {
                    'id': '211063368',
                    'title': 'Add or Remove Team Members'
                },
                {
                    'id': '115000394427',
                    'title': 'Team Permissions'
                },
                {
                    'id': '115000413308',
                    'title': 'Groups Contracts Within Teams'
                },
                {
                    'id': '115000413988',
                    'title': 'Hide a Team'
                },
                {
                    'id': '115000414068',
                    'title': 'Move Someone to a Different Team'
                }
            ]
        },
        {
            'mirror': '360002707073',
            'items': [
                {
                    'id': '211062548',
                    'title': 'Supported Browsers'
                },
                {
                    'id': '360008783494',
                    'title': 'Get Help with Support Bot'
                }
            ]
        },
        {
            'mirror': '360002707093',
            'items': [
                {
                    'id': '360009495714',
                    'title': 'Upwork Community'
                }
            ]
        },
        {
            'mirror': '360002707133',
            'items': [
                {
                    'id': '211062518',
                    'title': 'Hiring with Upwork Payroll'
                },
                {
                    'id': '211062988',
                    'title': 'Minimum Hourly Rates'
                }
            ]
        },
        {
            'mirror': '360002707313',
            'items': [
                {
                    'id': '211063418',
                    'title': 'Hourly vs. Fixed-Price Projects'
                }
            ]
        },
        {
            'mirror': '360002707753',
            'items': [
                {
                    'id': '360012069193',
                    'title': 'Change Password or Security Question and Answer'
                },
                {
                    'id': '211067518',
                    'title': 'Forgot Password or Security Question'
                },
                {
                    'id': '211067588',
                    'title': 'Close My Account'
                },
                {
                    'id': '211067708',
                    'title': 'Manage Notifications'
                },
                {
                    'id': '360009491414',
                    'title': 'Two-Step Security Verification'
                }
            ]
        },
        {
            'mirror': '360002713553',
            'items': [
                {
                    'id': '211067758',
                    'title': 'Troubleshoot Messages'
                },
                {
                    'id': '211067768',
                    'title': 'Use Messages'
                },
                {
                    'id': '217698348',
                    'title': 'Video and Voice Calls'
                },
                {
                    'id': '115006778507',
                    'title': 'Supported Attachment File Types'
                }
            ]
        },
        {
            'mirror': '360002707413',
            'items': [
                {
                    'id': '211068368',
                    'title': 'Submit Deliverables'
                }
            ]
        },
        {
            'mirror': '360002677654',
            'items': [
                {
                    'id': '115001457268',
                    'title': 'Use Screenshots'
                }
            ]
        },
        {
            'mirror': '360002679834',
            'items': [
                {
                    'id': '360001681627',
                    'title': 'Get Added to an Enterprise Account'
                }
            ]
        }
    ]
}

const smfMatrics = []

jQuery(function () {
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
                    if ( ! detectPageTemplates('articles')) {
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
        oAuthSetup()
    }
})
