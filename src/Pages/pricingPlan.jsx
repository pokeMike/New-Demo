// eslint-disable-next-line no-unused-vars
import React from 'react';
export const pricingPlans =[
    {
        title: 'Freelancer',
        price: 24,
        currency: 'USD',
        frequency: '/month',
        description:'The essentials to provide your best work for the clients',
        features: [
            '5 products',
            'up to 1000 subs',
            'Basic analytics',
            '48-hour suppport response time',
        ],
        cta: 'Start your trial',
        mostPopular:false,
    },
    {
        title: 'Startup',
        price: 32,
        currency: 'USD',
        frequency: '/month',
        description:'A plan that scales with your rapidly growing business',
        features: [
            '25 products',
            'up to 10,000 subs',
            'Advanced analytics',
            '24-hour suppport response time',
            'Marketing automations',
        ],
        cta: 'Start your trial',
        mostPopular:true,
    },
    {
        title: 'Enterprise',
        price: 48,
        currency: 'USD',
        frequency: '/month',
        description:'Dedicated support and infrastructure for you company',
        features: [
            'Unlimited Products',
            'Unlimited subs',
            'Advanced analytics',
            'One-hour, dedicated suppport response time',
            'Marketing automations',
            'Salesforce, Clearbit Reveal & Marketo integrations',
        ],
        cta: 'Start your trial',
        mostPopular:false,
    },
]
