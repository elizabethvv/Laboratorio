module.exports = [
  {
    key: 'home',
    name: 'Home',
    icon: 'ion-ios-home-outline',
    child: [
      // {
      //   key: 'patients',
      //   name: 'Patients',
      //   title: true
      // },
      {
        key: 'patients',
        name: 'Pacientes',
        link: '/patients',
        badge: 'Hot',
        icon: 'ion-ios-globe-outline'
      },
      {
        key: 'creative',
        name: 'Creative',
        link: '/landing-creative',
        icon: 'ion-ios-desktop-outline'
      },
      {
        key: 'dashboard',
        name: 'Dashboard',
        title: true
      },
      {
        key: 'personal',
        name: 'Personal',
        link: '/app',
        icon: 'ion-ios-contact-outline'
      },
      {
        key: 'crm',
        name: 'CRM',
        link: '/app/crm-dashboard',
        icon: 'ion-ios-card-outline'
      },
      {
        key: 'crypto',
        name: 'Cryptocurrency',
        link: '/app/crypto-dashboard',
        icon: 'ion-ios-medal-outline'
      },
      {
        key: 'dashboard_widgets',
        name: 'Dashboard Widgets',
        title: true
      },
      {
        key: 'infographics_wdiget',
        name: 'Infographics',
        link: '/app/widgets/infographics',
        icon: 'ion-ios-card'
      },
      {
        key: 'status_widget',
        name: 'Status',
        link: '/app/widgets/status',
        icon: 'ion-ios-notifications-outline'
      },
      {
        key: 'mini_apps_widget',
        name: 'Mini Apps',
        link: '/app/widgets/mini-apps',
        icon: 'ion-ios-information-circle-outline'
      },
      {
        key: 'analytics_widget',
        name: 'Analytics',
        link: '/app/widgets/analytics',
        icon: 'ion-ios-analytics-outline'
      },
      {
        key: 'info_updates_widget',
        name: 'Info & Updates',
        link: '/app/widgets/info-updates',
        icon: 'ion-ios-information-circle-outline'
      },
      {
        key: 'layout_settings',
        name: 'Layout',
        title: true
      },
      {
        key: 'grid',
        name: 'Grid',
        link: '/app/layouts/grid',
        icon: 'ion-ios-apps-outline'
      },
      {
        key: 'application_layout',
        name: 'App Layout',
        link: '/app/layouts/app-layout',
        icon: 'ion-ios-photos-outline'
      },
      {
        key: 'responsive',
        name: 'Responsive',
        link: '/app/layouts/responsive',
        icon: 'ion-ios-phone-portrait'
      }
    ]
  }
]
