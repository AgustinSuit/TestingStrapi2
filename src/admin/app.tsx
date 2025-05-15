import type { StrapiApp } from '@strapi/strapi/admin';

export default {
    config: {
        locales: ['en'], // Solo inglés
        translations: {
            en: {
                'Auth.form.welcome.title': "Administración Jano's Eventos",
                'Auth.form.welcome.subtitle': 'Ingresá tus credenciales para comenzar.', 
            },
        },
    },
    bootstrap(app: StrapiApp) {
        console.log(app);
    },
};